# iOS RFID SDK tutorials: build tool (`_restructure/`)

This folder is **only the tool** and is **not shipped**. The published pages live one level up, directly in `tutorial/`:
`tutorial/index.html` (hub) and `tutorial/pages/<page-id>/index.html` (one folder per page, all inside the dedicated `pages/` folder). Those files are **generated**.
Never edit them by hand: edit `index.monolithic.html`, then run the scripts below.

```
tutorial/
  index.html                              GENERATED hub, shipped
  pages/<page-id>/index.html ...          GENERATED pages, shipped (dedicated folder)
  ImpinjTestApp.zip, User Guide ... .pdf  shipped, linked from pages (not generated)
  rfidsdkforios/                          pre-existing, not touched by the tool
  _restructure/                           this tool, NOT shipped
    index.monolithic.html                 THE SOURCE OF TRUTH (edit this)
    README.md                             this file
    config/android-style.json             page-header values (SDK version, devices, ...)
    config/sdk-symbols.json               exact SDK API names (auto-wrapped in <code>)
    scripts/_monolith_lib.py              shared HTML helpers
    scripts/_normalize_monolith.py        step 1: rewrite monolith into canonical form
    scripts/_validate_monolith.py         step 2: strict checks (gate)
    scripts/_split_android_style.py       step 3: monolith -> hub + pages in tutorial/
    .split-manifest.json                  files written by the last split (do not edit)
```

## Run it

Python 3 standard library only. From `_restructure/`, **one after the other** (never in parallel):

```bash
python3 scripts/_normalize_monolith.py     # rewrites index.monolithic.html into canonical form (idempotent)
python3 scripts/_validate_monolith.py      # must end with "0 error(s)"
python3 scripts/_split_android_style.py    # re-validates, then (re)writes ../index.html and ../pages/<page-id>/index.html
```

Preview (pages use absolute `/css` and `/js`, so serve the repo root):

```bash
cd /Users/mr5872/Desktop/projects/zebra-stage.github.io && python3 -m http.server 8000
# http://localhost:8000/dcs/rfid/sdk-ios-rfid/tutorial/
```

- `_normalize_monolith.py` rewrites the monolith **in place** and has no backup of its own: keep a copy (or git) before running it on large edits.
  `--check` only reports whether the file is already normalized.
- The splitter deletes only files listed in `.split-manifest.json` (its own previous output). It refuses to write into a `pages/<id>/` folder it did not create.
- Header lines on every page come from `config/android-style.json`: `sdk_label`, `sdk_version`, `applicable_devices`, `compatibility`, `hub_title`. An empty value omits that line. Edit the JSON and re-split.
- `config/sdk-symbols.json` lists the exact SDK method names (from `srfidISdkApi.h`, `srfidISdkApiDelegate.h`) plus legacy aliases. Whole-word matches in prose are wrapped in `<code>` automatically. Add a name there to have it auto-wrapped.

## How the pipeline works

Order matters: **normalize, then validate, then split**. The splitter runs the validator itself and stops if it fails.

| Script | Reads | Writes | What it does |
|---|---|---|---|
| `_monolith_lib.py` | (library, not run directly) | nothing | Shared helpers used by the other three, so they all read the monolith identically: `Builder` (tolerant HTML tree: drops stray end tags, closes unclosed `<p>`/`<li>`, keeps comments), `extract_pres`/`norm_code` (pull code blocks out first so raw `<...>` in code cannot confuse the parser, then unescape, expand tabs, trim, re-escape), `ser_block`/`ser_inline` (write the tree back in one fixed format). |
| `_normalize_monolith.py` | `index.monolithic.html`, `config/sdk-symbols.json` | `index.monolithic.html` (in place) | Rewrites the file into canonical form using fixed rules (see below). Idempotent: a second run changes nothing. Anything it cannot convert by rule is printed as `REVIEW` and left untouched. `--check` reports without writing. |
| `_validate_monolith.py` | `index.monolithic.html` | nothing | Gate. Checks the schema in "Monolith structure" below and exits 0 (ok) or 1 (errors with line numbers). Never changes the file. |
| `_split_android_style.py` | `index.monolithic.html`, `config/android-style.json` | `../index.html`, `../pages/<id>/index.html`, `.split-manifest.json` | Pure transform of the monolith, no content decisions. See below. |

### What `_normalize_monolith.py` changes (fixed rules)
1. Removes `align`/attributes from `p`, `li`, `strong`, `code`; removes `<br>`, `&nbsp;`, empty `<p>`; collapses whitespace; a `<br>` between sentences splits the paragraph in two.
2. `<b>` becomes `<strong>`; an `<em>` that contains one identifier becomes `<code>`.
3. A paragraph that starts with bold `Title:` (or `Notes`) becomes `<h4>Title</h4>` plus the remaining text as a paragraph.
4. Exact SDK names found in plain prose (from `config/sdk-symbols.json`) are wrapped in `<code>`.
5. Code blocks: tags and `<br>` artifacts removed, text escaped (`<`, `>`, `&`), tabs become 4 spaces, trailing spaces and blank edge lines trimmed.
6. Stray end tags (`</li>`, `</code>`) are dropped; lists are re-serialized.
7. An `h3` titled `Overview` gets class `overview`; headings are reduced to plain text plus their anchor.

### What `_validate_monolith.py` checks
- Every `h1`/`h2`/`h3` has a unique `id` and the right class (`top-group`, `main-topic`, `sub-topic`; `single-page` + `data-page="single"` for one-page topics).
- Nesting is `h1` > `h2` > `h3`; `h4`/`h5` appear only inside a page; no content sits outside a page; no page is empty.
- Paragraphs have no attributes, no `<br>`, no `&nbsp;`, are not empty; only `code`, `strong`, `a` (and a warned `em`) are allowed inline.
- Code blocks are exactly `<pre class="prettyprint"><code>\n...\n</code></pre>`, contain no raw `<`, no tabs or trailing spaces.
- No stray end tags (the file is well-formed).

### What `_split_android_style.py` does
1. Runs `_validate_monolith.py`; stops on any error.
2. Reads the monolith and `config/android-style.json`. The head, nav and footer of the monolith become the shell of every page.
3. Walks the headings: each `h1` is a hub column, each `h2` a hub group, each `h3` (or single-page `h2`) a page with a hub link.
4. Writes `../index.html` (hub, Android waterfall layout) and one `../pages/<id>/index.html` per page: sidebar, title block (`section#cta`) with the header values from the config, then the content.
5. Inside a page `h4` becomes `h2` and `h5` becomes `h3`, each with a unique anchor id. Page title = the `h3` title (`<Main topic> Overview` for Overview pages). Content before the first `h4` goes directly under the title.
6. Records every file written in `.split-manifest.json`. The next run deletes only those files, and refuses to write into a `pages/<id>/` folder it did not create.
7. Prints page count, section count and `code-blocks=N/N` (must match the monolith).

## Config files (`config/`)

**`android-style.json`** is read by the splitter. It controls the header under every page title (same position as "RFID SDK for Android 2.0.5.292 / Applicable Devices : ALL" on the Android pages):

| Key | Used for |
|---|---|
| `sdk_label`, `sdk_version` | first line, e.g. "RFID SDK for iOS" + "1.2.46" |
| `applicable_devices` | line "Applicable Devices : ..." |
| `compatibility` | extra line, e.g. "Compatible with iOS 17 and above" |
| `hub_title` | `<title>` of the hub page |
| `hub_intro_from_monolith` | informational only (the hub intro text always comes from the monolith) |

An empty value omits that line. When the SDK version or supported devices change, edit this file and re-run the splitter; the monolith does not change.

**`sdk-symbols.json`** is read by the normalizer. It holds the exact API names taken from the SDK headers (`srfidISdkApi.h` 156 methods, `srfidISdkApiDelegate.h` 13 methods) plus `legacy_aliases` (older names still used in the tutorials) and `protocols`. Whole-word matches in prose become `<code>` automatically. If the SDK gains a method, add it to `sdk_methods` and re-run the normalizer. Names that are not in this file (for example the barcode `sbt...` calls) must be wrapped in `<code>` by hand in the monolith.

## Monolith structure

`index.monolithic.html` is an HTML page; only the region from the first `<h1 ... top-group>` to `<footer id="footer"` is parsed. Everything before it (head, nav) and from the footer on is reused as the shell of every page.

| Element | Required class / attrs | Meaning | Becomes |
|---|---|---|---|
| `h1` | `anchor top-group`, unique `id` | top-level topic (2 today) | hub column |
| `h2` | `anchor main-topic`, unique `id` | main topic | hub group |
| `h2` | `anchor main-topic single-page` + `data-page="single"` | main topic that is a single page (no `h3` inside) | hub group with one link + one page |
| `h3` | `anchor sub-topic`, unique `id` | one page | `tutorial/pages/<id>/index.html` + hub link |
| `h3` | `+ overview`, title exactly `Overview` | optional separate Overview page of a topic | page titled "<Main topic> Overview" |
| `h4` | none: `<h4>Title</h4>` | section on the page | page `h2` |
| `h5` | none | sub-section | page `h3` |

`h1`/`h2`/`h3` use the anchor markup, for example:

```html
<h3 id="my-page" class="anchor sub-topic"><a class="heading-anchor" href="#my-page"><span></span></a>My Page</h3>
```

The `id` becomes the page folder name inside `pages/`: unique in the whole file, lowercase `a-z0-9-` only.
Everything between a heading and the next heading belongs to it. Content before a page's first `h4` is the page intro and is placed directly under the page title (no generated heading).

Allowed blocks (anything else fails validation):

| Need | Markup |
|---|---|
| Paragraph | `<p>text</p>`: no attributes, no `<br>`, no `&nbsp;`, not empty |
| API / symbol / type name | `<code>name</code>` (never `<em>`) |
| Bold | `<strong>` |
| Link | `<a href="...">`; relative links to files in `tutorial/` (zip, pdf) are rewritten with `../../` for `pages/<id>/` |
| List | `<ul><li>..</li></ul>` or `<ol>` |
| Code listing | `<pre class="prettyprint"><code>` newline, code, newline `</code></pre>` |
| Section title | `<h4>`; never a bold paragraph ending in ":" (normalize converts those to `h4`) |

Code: write it as plain text. Normalize escapes `<`, `>`, `&` (raw `<Foo>` in code is fine), converts tabs and trims whitespace. A multi-line snippet must be a `<pre>`, never inside a `<p>`.

## How to add new content (checklist for AI and humans)

Always edit `index.monolithic.html` only, then run normalize, validate, split, and fix every validator error.

### Add a page to an existing main topic
1. Find the topic's `<h2 ... main-topic>` and its last `h3`.
2. Insert after that page's last block:
   ```html
   <h3 id="my-new-page" class="anchor sub-topic"><a class="heading-anchor" href="#my-new-page"><span></span></a>My New Page</h3>

   <h4>Overview</h4>

   <p>One or two sentences: what it does and which SDK API it uses, e.g. <code>srfidSomeCall</code>.</p>

   <h4>Details</h4>

   <p>Explanation of how it works.</p>

   <pre class="prettyprint"><code>
   // sample code
   </code></pre>
   ```
3. Check the id is unused: `rg 'id="my-new-page"' index.monolithic.html`.

### Add a main topic
Add `<h2 id="..." class="anchor main-topic">` (anchor markup as above) inside the right `h1` group (before the next `<h1>`), followed by its `h3` pages. For a one-page topic use `class="anchor main-topic single-page"` plus `data-page="single"` and no `h3`; its content goes directly under the `h2`.

### Add a section inside a page
Add `<h4>Title</h4>` with its paragraphs and code. Everything after an `h4` stays in that section until the next heading, so put an `h4` before each distinct block of content (this is why pages use `Overview` then `Details`).

### Add a top-level topic (hub column)
Add `<h1 id="..." class="anchor top-group">` with the anchor markup, followed by its `h2` main topics.

### Conventions of this tutorial (follow them)
- Every page has `<h4>Overview</h4>` (short: what it does + SDK API in `<code>`), then `<h4>Details</h4>` with the original text and code. If the page already starts with its own `h4` sections (WLAN, Impinj Gen2X APIs), add only `<h4>Overview</h4>` before them.
- Do not add new separate "Overview" `h3` pages. Three older ones remain because they hold original text (Access Operations, Access Sequence, Impinj Gen2X): do not remove their text without the owner's permission.
- Use SDK API names (see `config/sdk-symbols.json`), not sample-app helper names (`deleteAllPrefilter:`, `getWifiStatus`, ...), in new prose and code.
- Names not in `sdk-symbols.json` (for example the barcode `sbt...` calls) must be wrapped in `<code>` by hand.
- Heading titles are plain text (no `<code>` inside headings).
- Never remove or reword existing text unless the task says so.

### Validator errors you will meet

| Message | Fix |
|---|---|
| `duplicate id` | change the `id` |
| `unescaped '<' inside code block` | run `_normalize_monolith.py` |
| `<p> must not carry attributes`, `<br>`, `&nbsp;` | remove them, run normalize |
| `content ... outside any page` | text sits under an `h1`/`h2` that has `h3` pages: move it into a page |
| `page ... has no content` | add a paragraph or code under the heading |
| `<h4> ... is not inside a page` | an `h4` must be under an `h3` (or a single-page `h2`) |
| `ERROR: page ids collide with existing folders` | choose another page `id` |

## Shipping

Ship `tutorial/index.html` and the whole `tutorial/pages/` folder (all listed in `.split-manifest.json`), plus the existing zip and pdf. Do **not** ship `_restructure/`, `.DS_Store` or `__pycache__`.
