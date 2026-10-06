// Stage build only: the MQTT API section is published alone, so a link to any other part of the
// docs site (Guides, Resources, the API Reference hub, the REST reference) has no target there.
// Replace such a link with its own text, the way the first stage publish (PR #95) rendered them.
const PUBLISHED = '/api-reference/mqtt';
// Quick Start has a stage summary with matching anchors. Other guides use the reference
// title, and only explicitly mapped fragments move to a different reference subject.
const REWRITES = {
  '/guides/quick-start': { url: '/api-reference/mqtt/quick-start', preserveHash: true },
  '/guides/manage-your-reader/configure-wi-fi': { url: '/api-reference/mqtt/management/network-configuration', title: 'Network Configuration' },
  '/guides/manage-your-reader/install-and-manage-certificates': { url: '/api-reference/mqtt/management/certificate-management', title: 'Certificate Management' },
  '/guides/operate-and-monitor/what-to-monitor-and-why': { url: '/api-reference/mqtt/events', title: 'Events' },
  '/guides/operate-and-monitor/monitor-reader-connectivity': { url: '/api-reference/mqtt/events/mqtt-connectivity', title: 'MQTT Connectivity' },
  '/guides/core-concepts/the-security-model': { url: '/api-reference/mqtt/protocol-reference/tls-and-authentication', title: 'TLS and Authentication' },
  '/guides/manage-your-reader/update-firmware-and-restart': { url: '/api-reference/mqtt/management/system-operations', title: 'Device Lifecycle' },
  '/guides/core-concepts/endpoints-topics-and-channels': { url: '/api-reference/mqtt/protocol-reference/endpoints-and-topic-slots', title: 'Endpoints and Topic Slots' },
  '/guides/core-concepts/the-configuration-model': { url: '/api-reference/mqtt/management', title: 'Management' },
  '/guides/operate-and-monitor/monitor-reader-health-and-battery#interpret-stateofhealth': { url: '/api-reference/mqtt/mgmt/get-status', title: 'get_status' },
  '/guides/read-tags-and-barcodes/post-filter-reported-tags': { url: '/api-reference/mqtt/control/tag-filtering', title: 'Tag Filtering' },
  '/guides/operate-and-monitor/configure-event-reporting': { url: '/api-reference/mqtt/management/event-management', title: 'Event Management' },
  '/guides/core-concepts/the-tag-data-stream': { url: '/api-reference/mqtt/data/tag-data-events', title: 'Tag Data Stream' },
  '/guides/manage-your-reader/configure-mqtt-endpoints': { url: '/api-reference/mqtt/management/mqtt-endpoint-configuration', title: 'Endpoint Configuration' },
  '/guides/read-tags-and-barcodes/choose-a-performance-profile#choose-an-operating-mode': { url: '/api-reference/mqtt/control/operating-mode', title: 'Operating Mode' },
  '/guides/read-tags-and-barcodes/start-and-stop-inventory': { url: '/api-reference/mqtt/control/inventory-control', title: 'Inventory Control' },
  '/guides/operate-and-monitor/respond-to-alerts': { url: '/api-reference/mqtt/events/alerts', title: 'Alerts' },
  '/guides/build-your-integration/send-commands-and-handle-responses': { url: '/api-reference/mqtt/protocol-reference/message-envelope', title: 'Message Envelopes and Correlation' },
  '/guides/build-your-integration/retry-commands-safely': { url: '/api-reference/mqtt/protocol-reference/qos-and-delivery-semantics#idempotency', title: 'Duplicates and Retries' },
  '/resources/rf-regions-and-regulations': { url: '/api-reference/mqtt/mgmt/get-current-region', title: 'get_current_region' },
};
const rewrite = (url, file) => {
  if (typeof url !== 'string') return null;
  const [path, hash] = url.split('#');
  const normalized = path.replace(/\/$/, '');
  const exact = REWRITES[normalized + (hash ? `#${hash}` : '')];
  const target = exact || REWRITES[normalized];
  if (!target || (hash && !exact && !target.preserveHash)) return null;
  const rewritten = target.url + (target.preserveHash && hash ? `#${hash}` : '');
  const relative = String(file.path || '').split('/api/mqtt/reference/')[1];
  const page = relative?.replace(/\.mdx?$/, '').replace(/\/index$/, '');
  if (page !== undefined && rewritten.split('#')[0] === `${PUBLISHED}/${page}`) return null;
  return { ...target, url: rewritten };
};

const outOfScope = (url) => {
  if (typeof url !== 'string' || !url.startsWith('/') || url.startsWith('//')) return false;
  const path = url.split(/[?#]/)[0];
  return !(path === PUBLISHED || path.startsWith(`${PUBLISHED}/`));
};

const jsxTarget = (node) => {
  if (node.type !== 'mdxJsxTextElement' && node.type !== 'mdxJsxFlowElement') return null;
  if (node.name !== 'a' && node.name !== 'Link') return null;
  const attr = (node.attributes || []).find((a) => a.type === 'mdxJsxAttribute' && (a.name === 'href' || a.name === 'to'));
  return attr && typeof attr.value === 'string' ? attr.value : null;
};

export default function remarkUnlinkOutOfScope() {
  return (tree, file) => {
    const unlinked = [];
    // Links inside a heading are not rewritten (a heading gains no new link text), but an
    // out-of-scope one is still turned into text below.
    const walk = (node, inHeading = false) => {
      if (!Array.isArray(node.children)) return;
      const heading = inHeading || node.type === 'heading';
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        const original = child.type === 'link' ? child.url : jsxTarget(child);
        const target = heading ? null : rewrite(original, file);
        if (target) {
          if (child.type === 'link') child.url = target.url;
          else {
            const attr = child.attributes.find((a) => a.name === 'href' || a.name === 'to');
            attr.value = target.url;
          }
          if (target.title) {
            child.children = [{ type: 'text', value: target.title }];
            // The link now opens a reference page, so a guide badge before it becomes the reference badge.
            const prev = node.children[i - 1];
            if (prev?.type === 'text') prev.value = prev.value.replace(/(\u{1F4D8}|\u{1F4D9})(\s*)$/u, '\u{1F4D5}$2');
          }
        }
        const url = child.type === 'link' ? child.url : jsxTarget(child);
        if (url !== null && url !== undefined && outOfScope(url)) {
          unlinked.push(url);
          node.children.splice(i, 1, ...(child.children || []));
          i -= 1;
          continue;
        }
        walk(child, heading);
      }
    };
    walk(tree);
    if (unlinked.length && process.env.STAGE_UNLINK_LOG) {
      console.log(`[stage-unlink] ${file.path}: ${unlinked.length} link(s) -> text`);
    }
  };
}
