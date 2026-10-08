// Stage-only edits, applied to the temporary copy of docs-rfid-handheld-iotc that build.sh makes.
// The docs repository itself is never changed. Every edit checks that the text it changes is
// still there exactly once, so a change upstream stops the build instead of publishing a wrong page.
//
// Usage: node apply-stage-changes.mjs <copy-of-docs-rfid-handheld-iotc>
import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2];
if (!root || !fs.existsSync(path.join(root, 'docusaurus.config.ts'))) {
  console.error('Usage: node apply-stage-changes.mjs <copy-of-docs-rfid-handheld-iotc>');
  process.exit(2);
}

// The section is published from here to techdocs.zebra.com at the same path. A PDF is downloaded
// and kept, so its links and its cover point at the live pages, not at this staging copy.
const LIVE_URL = 'https://techdocs.zebra.com/dcs/rfid/rfd40-90-mqtt/';
const STAGE_BASE = '/dcs/rfid/rfd40-90-mqtt/';

function edit(file, change) {
  const target = path.join(root, file);
  const before = fs.readFileSync(target, 'utf8');
  const after = change(before);
  if (after === before) throw new Error(`${file}: the edit changed nothing`);
  fs.writeFileSync(target, after);
  console.log(`edited ${file}`);
}

function once(file, text, pattern, replacement) {
  const matches = typeof pattern === 'string' ? text.split(pattern).length - 1 : (text.match(new RegExp(pattern.source, 'g')) || []).length;
  if (matches !== 1) {
    throw new Error(`${file}: expected one match for ${pattern}, found ${matches}. Upstream has changed; update this edit.`);
  }
  return text.replace(pattern, replacement);
}

function cut(file, text, startMarker, endMarker, keepEnd) {
  const start = text.indexOf(startMarker);
  const end = start < 0 ? -1 : text.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < 0) throw new Error(`${file}: could not find "${startMarker}" followed by "${endMarker}". Upstream has changed; update this edit.`);
  return text.slice(0, start) + text.slice(keepEnd ? end : end + endMarker.length);
}

// 1. Sidebar: the stage-only Quick Start page leads the Overview group.
edit('sidebars/api-mqtt.ts', (t) =>
  once('sidebars/api-mqtt.ts', t, "items: [\n        'how-to-read-this-reference',", "items: [\n        'quick-start',\n        'how-to-read-this-reference',"),
);

// 2. Breadcrumbs: the API Reference hub is not published here, so the trail starts at MQTT API.
edit('src/components/siteSections.ts', (t) =>
  once('src/components/siteSections.ts', t, /(href: '\/api-reference\/mqtt',\n\s*version: 'mqtt',\n)\s*parent: 'apiIndex',\n/, '$1'),
);

// 3. 404 page: keep only the jumps into the MQTT API, drop the search box and the report link
// (neither page exists here), and offer a "did you mean" suggestion only inside the section.
edit('src/components/NotFoundBody.tsx', (t) => {
  const file = 'src/components/NotFoundBody.tsx';
  let s = t;
  const block = s.match(/const RECOVERY_JUMPS[^\n]*\n([\s\S]*?)\n\];/);
  if (!block) throw new Error(`${file}: RECOVERY_JUMPS not found. Upstream has changed; update this edit.`);
  const kept = block[1].split('\n').filter((line) => !/to: '\/(?!api-reference\/mqtt)/.test(line)).join('\n');
  if (!/to: '\/api-reference\/mqtt/.test(kept)) throw new Error(`${file}: no MQTT API jump left in RECOVERY_JUMPS.`);
  s = s.replace(block[1], kept);
  s = cut(file, s, '{/* §3d Search */}', '{/* §3e', true);
  s = cut(file, s, '{/* §3f Report broken link', '</section>\n', false);
  s = once(file, s, '{suggestion ? (', "{suggestion && suggestion.startsWith('/api-reference/mqtt') ? (");
  return s;
});

// 4. PDFs: render from the stage build, under the stage path, with the live address in links and on the cover.
edit('scripts/site/generate-pdfs.mjs', (t) => {
  const file = 'scripts/site/generate-pdfs.mjs';
  let s = once(file, t, /const BASE_URL = '[^']*';/, `const BASE_URL = '${STAGE_BASE}';`);
  s = once(file, s, /const SITE_URL = '[^']*';/, `const SITE_URL = '${LIVE_URL}';`);
  s = once(file, s, "['docusaurus', 'serve', '--dir',", "['docusaurus', 'serve', '--config', 'docusaurus.stage.config.ts', '--dir',");
  return s;
});

// 5. MQTT API page: the Reader Capability Matrix is in Resources, which is not published here,
// so drop the sentence that points to it.
edit('api/mqtt/reference/index.mdx', (t) =>
  once('api/mqtt/reference/index.mdx', t, ' See the [Reader Capability Matrix](/resources/supported-readers-and-features#capability-matrix).', ''),
);
