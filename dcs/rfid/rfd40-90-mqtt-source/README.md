# RFD40/RFD90 MQTT API section: stage build

This folder builds `dcs/rfid/rfd40-90-mqtt/`, the RFD40/RFD90 IoT Connector MQTT API reference on
the staging site:

<https://zebra-stage.github.io/dcs/rfid/rfd40-90-mqtt/api-reference/mqtt/>

The pages come from the handheld reader docs repository,
[zebratechnologies/docs-rfid-handheld-iotc](https://github.com/zebratechnologies/docs-rfid-handheld-iotc)
(private). This folder holds only what the staging site adds or changes. Never edit the generated
files in `dcs/rfid/rfd40-90-mqtt/` by hand: change the docs repository or this folder, and rebuild.

## What the stage build changes

| | The full docs site | This section |
|---|---|---|
| Content | Guides, Resources and the API Reference | The MQTT API reference only |
| Quick Start | A guide | A summary page, `pages/quick-start.mdx`, first in the Overview group |
| Links into Guides or Resources | Links | Plain text, except links to the Quick Start guide, which go to the summary page |
| Navigation | Guides, API Reference, Resources and search | MQTT API only, with no search |
| Breadcrumbs | Start at the API Reference hub | Start at MQTT API |
| 404 page | Search box, report link and jumps into the guides | The MQTT API jump only |
| Images | Every image in `static/` | The six the pages use |

| File | What it does |
|---|---|
| `build.sh` | Runs the whole build and replaces `dcs/rfid/rfd40-90-mqtt/` |
| `docusaurus.stage.config.ts` | Wraps the docs site's configuration: the stage address and path, the MQTT API docs only, the trimmed navigation and footer |
| `remark-unlink.mjs` | Turns links into unpublished sections into plain text, and points Quick Start links at the summary page |
| `apply-stage-changes.mjs` | Edits a temporary copy of the docs repository: the sidebar entry, the breadcrumbs, the 404 page and the PDF settings. Each edit stops the build if the text it expects has moved |
| `pages/quick-start.mdx` | The Quick Start summary page. It exists only on the staging site |
| `redirects/` | The two redirect pages, `rfd40-90-mqtt/` and `rfd40-90-mqtt/api-reference/`, which open the MQTT API index |
| `verify.mjs` | Fails the build if any link, image or anchor does not resolve, or if a page points outside the section |

## Prerequisites

- A local checkout of docs-rfid-handheld-iotc, up to date with GitHub. The build uses its last commit, not uncommitted files.
- Node.js 22 or later, `git` and `rsync`.
- D2 0.7.1, the version the docs repository's CI uses, for the diagrams.
- Playwright's Chromium, for the PDFs: `npx playwright install chromium`.
- Optional: `pdftotext` (Poppler). With it, the build keeps a published PDF whose text has not changed, instead of replacing it with a copy that differs only in its build date.

## Rebuild the section

From this folder:

```bash
./build.sh /path/to/docs-rfid-handheld-iotc
```

The build installs the docs repository's dependencies with `npm ci`. To reuse an installed
`node_modules` folder with the same `package-lock.json`, add `--node-modules /path/to/node_modules`.

Then review the changes under `dcs/rfid/rfd40-90-mqtt/`, commit them with any change to this folder,
and open a pull request to `zebra-stage/zebra-stage.github.io`. GitHub Pages republishes the site
from `master` a few minutes after the merge.

## When the build stops

| It says | What to do |
|---|---|
| `Upstream has changed; update this edit.` | The docs repository changed text that `apply-stage-changes.mjs` edits. Update that edit to match. |
| `Docusaurus found broken links!` | A page links to something this section does not publish. If it is a new section of the docs, add it to the rule in `remark-unlink.mjs`. |
| `verify: ... problem(s)` | A link, image or anchor does not resolve in the build. A new image a page uses must be added to `KEEP` in `build.sh`. |
| `server did not start` | The PDF step could not serve the build. Check that the redirect pages were copied and that port 4173 is free. |
