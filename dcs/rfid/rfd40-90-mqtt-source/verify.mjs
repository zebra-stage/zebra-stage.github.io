// Checks a stage build before it replaces the published section:
// - every internal link, image and script in the HTML resolves to a file inside the build;
// - every #anchor on an internal link exists on the page it points to;
// - nothing points to a part of the docs site that is not published here, or to another host's copy.
//
// Usage: node verify.mjs <build-directory>
import fs from 'node:fs';
import path from 'node:path';

const BASE = '/dcs/rfid/rfd40-90-mqtt/';
const FORBIDDEN = [/rfd40-90-mqtt\/(guides|resources|api-reference\/rest|search|report-broken-link)\b/, /ubiquitous-bassoon/, /al1913-zebra\.github\.io/];
const dir = process.argv[2];
if (!dir || !fs.existsSync(dir)) {
  console.error('Usage: node verify.mjs <build-directory>');
  process.exit(2);
}

const files = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else files.push(path.relative(dir, p));
  }
})(dir);
const pages = files.filter((f) => f.endsWith('.html'));
const ids = new Map(pages.map((p) => [p, new Set([...fs.readFileSync(path.join(dir, p), 'utf8').matchAll(/\bid=("?)([^" >]+)\1/g)].map((m) => m[2]))]));

const problems = [];
let checked = 0;
for (const page of pages) {
  const html = fs.readFileSync(path.join(dir, page), 'utf8');
  for (const pattern of FORBIDDEN) if (pattern.test(html)) problems.push(`${page}: points outside the published section (${pattern})`);
  for (const m of html.matchAll(/\b(?:href|src|action)=("[^"]*"|[^ >]+)/g)) {
    const raw = m[1].replace(/^"|"$/g, '').replace(/&amp;/g, '&');
    const [target, anchor] = raw.split('#');
    const url = target.split('?')[0];
    if (!url || /^(https?:|mailto:|data:|javascript:|\/\/)/.test(url)) continue;
    const absolute = url.startsWith('/') ? url : path.posix.join(BASE, path.posix.dirname(page), url) + (url.endsWith('/') ? '/' : '');
    checked += 1;
    if (!absolute.startsWith(BASE)) { problems.push(`${page}: ${raw} is outside ${BASE}`); continue; }
    const rel = absolute.slice(BASE.length);
    const file = !rel || rel.endsWith('/') ? path.join(rel, 'index.html') : rel;
    if (!fs.existsSync(path.join(dir, file))) { problems.push(`${page}: ${raw} does not resolve`); continue; }
    if (anchor && file.endsWith('.html') && !ids.get(file)?.has(anchor)) problems.push(`${page}: ${raw} has no #${anchor}`);
  }
}

console.log(`verify: ${pages.length} pages, ${checked} internal references checked, ${problems.length} problem(s)`);
for (const p of problems.slice(0, 40)) console.log(`  ${p}`);
process.exit(problems.length ? 1 : 0);
