// Stage build only: the MQTT API section is published alone, so a link to any other part of the
// docs site (Guides, Resources, the API Reference hub, the REST reference) has no target there.
// Replace such a link with its own text, the way the first stage publish (PR #95) rendered them.
const PUBLISHED = '/api-reference/mqtt';
// The Quick Start guide is not published here, but this section carries its own summary page.
const REWRITES = { '/guides/quick-start': '/api-reference/mqtt/quick-start' };
const rewrite = (url) => {
  if (typeof url !== 'string') return url;
  const [path, hash] = url.split('#');
  const target = REWRITES[path.replace(/\/$/, '')];
  return target ? target + (hash ? `#${hash}` : '') : url;
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
    const walk = (node) => {
      if (!Array.isArray(node.children)) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child.type === 'link') child.url = rewrite(child.url);
        const url = child.type === 'link' ? child.url : jsxTarget(child);
        if (url !== null && url !== undefined && outOfScope(url)) {
          unlinked.push(url);
          node.children.splice(i, 1, ...(child.children || []));
          i -= 1;
          continue;
        }
        walk(child);
      }
    };
    walk(tree);
    if (unlinked.length && process.env.STAGE_UNLINK_LOG) {
      console.log(`[stage-unlink] ${file.path}: ${unlinked.length} link(s) -> text`);
    }
  };
}
