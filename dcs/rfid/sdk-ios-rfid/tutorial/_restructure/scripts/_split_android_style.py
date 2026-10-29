#!/usr/bin/env python3
"""Stage 3: split the validated monolith into Android-look pages + hub (pure function of the monolith).

    python3 scripts/_split_android_style.py

Reads  index.monolithic.html  (must pass _validate_monolith.py)
       config/android-style.json     (header values; empty value = line omitted)
Writes ../index.html                      (hub, Android waterfall layout)
       ../pages/<page-id>/index.html      (one per h3 page / single-page h2)

Mapping (see docs/Monolith-Schema.md):
  h1.top-group -> hub column (h4)      h2.main-topic -> hub group (h5)      h3 / single h2 -> page + hub link
  page h1 (section#cta) = h3 title ("<main topic> Overview" for Overview pages)
  intro (before first h4) -> directly under the page title (no generated heading); h4 -> h2; h5 -> h3
"""
from __future__ import annotations

import html
import json
import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _monolith_lib import Builder, Node, HEADINGS, extract_pres, ser_block, ser_inline  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
MONO = ROOT / "index.monolithic.html"
SITE = ROOT.parent  # the shipped tutorial/ folder: hub index.html is written here
PAGES = "pages"     # dedicated folder (inside tutorial/) that holds every split page
CONFIG = ROOT / "config" / "android-style.json"
MANIFEST = ROOT / ".split-manifest.json"  # files written by the previous run (paths relative to tutorial/)

START_RE = re.compile(r"<h1\b[^>]*top-group", re.I)
END_MARK = '<footer id="footer"'

SIDEBAR_STYLE = """<style>
                                /* Keep the fixed left nav clear of the footer: allow for the nav's top offset and the footer height. */
                                #toc { max-height: calc(100vh - 230px); }
                                /* Below 1100px the header wraps to two lines, so the nav starts 100px lower. */
                                @media (max-width: 1099px) { #toc { max-height: calc(100vh - 330px); } }
                            </style>"""
SIDEBAR_SCRIPTS = """<link rel="stylesheet" href="https://cdn.rawgit.com/afeld/bootstrap-toc/v0.3.0/dist/bootstrap-toc.min.css">
                            <script src="https://cdn.rawgit.com/afeld/bootstrap-toc/v0.3.0/dist/bootstrap-toc.min.js"></script>"""
MODAL = """<div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true" data-backdrop="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">X</button>
                    </div>
                    <div class="modal-body">
                        <div id="modalImg">

                        </div>
                    </div>
                </div>
            </div>
        </div>"""


def esc(s: str) -> str:
    return html.escape(s, quote=False)


def slugify(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-") or "section"


def raw_title(h: Node) -> str:
    return ser_inline([k for k in h.kids if not (isinstance(k, Node) and k.tag == "a")]).strip()


def heading(level: int, hid: str, title_html: str) -> str:
    return (f'<h{level} id="{hid}" class="anchor"><a class="heading-anchor" href="#{hid}">'
            f"<span></span></a>{title_html}</h{level}>")


class Page:
    def __init__(self, slug: str, title: str, h2title: str, overview: bool) -> None:
        self.slug, self.title, self.h2title, self.overview = slug, title, h2title, overview
        self.blocks: list[Node] = []

    @property
    def h1(self) -> str:
        return f"{self.h2title} Overview" if self.overview else self.title


def parse_monolith(src: str):
    m = START_RE.search(src)
    e = src.find(END_MARK)
    region = src[m.start(): e]
    head = src[: src.find('<div class="container-fluid">')]
    tail = src[e:]
    intro = re.search(r'<div class="row">\s*<div class="col-sm-12" id="guides">\s*<h1 id="Tutorials".*?</div>\s*</div>', src, re.S)
    content, pres, _ = extract_pres(region)
    b = Builder()
    b.feed(content)
    b.close()
    columns: list[dict] = []
    cur_page: Page | None = None
    for n in b.root.kids:
        if isinstance(n, str) or n.tag == "!comment":
            continue
        cls = n.classes()
        if n.tag == "h1":
            columns.append({"id": n.get("id"), "title": raw_title(n), "groups": []})
            cur_page = None
        elif n.tag == "h2":
            g = {"id": n.get("id"), "title": raw_title(n), "pages": []}
            columns[-1]["groups"].append(g)
            if "single-page" in cls:
                cur_page = Page(n.get("id"), raw_title(n), raw_title(n), False)
                g["pages"].append(cur_page)
            else:
                cur_page = None
        elif n.tag == "h3":
            g = columns[-1]["groups"][-1]
            cur_page = Page(n.get("id"), raw_title(n), g["title"], "overview" in cls)
            g["pages"].append(cur_page)
        else:
            cur_page.blocks.append(n)
    return head, tail, intro.group(0) if intro else "", columns, pres


def fix_links(s: str) -> str:
    # pages live two folders deep (pages/<id>/); relative assets (zip/pdf) sit next to the hub
    return re.sub(r'href="(?!https?:|#|/|mailto:|\.\./)([^"]+)"', r'href="../../\1"', s)


def page_body(p: Page, pres: list[str]) -> str:
    out: list[str] = []
    used: set[str] = set()
    seen_section = False
    intro: list[Node] = []
    sections: list[str] = []
    cur = sections
    for blk in p.blocks:
        if blk.tag in ("h4", "h5"):
            seen_section = True
            level = 2 if blk.tag == "h4" else 3
            t = raw_title(blk)
            base = slugify(html.unescape(re.sub(r"<[^>]*>", "", t)))
            hid, i = base, 2
            while hid in used:
                hid, i = f"{base}-{i}", i + 1
            used.add(hid)
            sections.append(heading(level, hid, t))
        elif not seen_section:
            intro.append(blk)
        else:
            sections.append(ser_block(blk, pres))
    # intro text sits directly under the page title; no generated "Overview" heading
    out += [ser_block(b, pres) for b in intro]
    out += sections
    return fix_links("\n\n".join(out))


def build_page(head: str, tail: str, cfg: dict, p: Page, pres: list[str]) -> str:
    title = esc(p.h1)
    h = re.sub(r'<meta title="[^"]*">', f'<meta title="{html.escape(p.h1)}">', head)
    h = re.sub(r"<title>.*?</title>", f"<title>{title} - Zebra Technologies Techdocs</title>", h, flags=re.S)
    cta = [heading(1, p.slug, esc(p.h1)).replace('class="anchor"', 'class="anchor"')]
    label = " ".join(x for x in (cfg.get("sdk_label", ""), cfg.get("sdk_version", "")) if x)
    if label:
        cta.append(f"<p>\n{cfg['sdk_label']}\n{cfg.get('sdk_version', '')}\n</p>")
    if cfg.get("applicable_devices"):
        cta.append(f"<p>\nApplicable Devices : {esc(cfg['applicable_devices'])}\n</p>")
    if cfg.get("compatibility"):
        cta.append(f"<p>\n{esc(cfg['compatibility'])}\n</p>")
    body = page_body(p, pres)
    return f"""{h}<div class="container-fluid">
        <section id="blog">
            <div class="">
                <section class="content-with-sidebar">
                    <div class="row">
                        <div class="col-sm-3 hidden-sm hidden-xs" id="sidebar">

                            {SIDEBAR_STYLE}
                            <nav id="toc" data-toggle="toc" data-spy="affix" style="max-width: 225px; overflow-y: auto; ">

                                <ul class="nav">
                                    <li><strong>{title}</strong></li>
                                </ul>
                            </nav>

                            {SIDEBAR_SCRIPTS}
                        </div>
                        <div class="col-sm-9 ">
                            <div class="row">
                                <div class="col-sm-12">
                                    <section id="cta" class="wow fadeIn">
                                        <div class="">
                                            {chr(10).join(cta)}
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div id="mainContent" class="row">
                                <div class="col-sm-12">
                                    <div class="blog-post blog-large wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="0ms">
                                        <!-- Start of guide -->
                                        <div class="service-box wow fadeInRight">
                                            <div class="">

{body}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        {MODAL}
    </div>
    {tail}"""


def build_hub(head: str, tail: str, intro: str, cfg: dict, columns: list[dict]) -> str:
    cols: list[str] = []
    for c in columns:
        g_html = []
        for g in c["groups"]:
            lis = "\n".join(
                f'                                    <li>\n                                        <a href="{PAGES}/{p.slug}/index.html"><span>{esc(p.title)}</span></a>\n                                    </li>'
                for p in g["pages"])
            g_html.append(f'                                <h5>{g["title"]}</h5>\n                                <ul style="display:block;">\n{lis}\n                                </ul>')
        cols.append(f"""                            <div>
                                {heading(4, c["id"], esc(c["title"]))}
{chr(10).join(g_html)}
                            </div>""")
    return f"""{head}<div class="container-fluid">

        <section id="blog">
            <div class="container">

                {intro}
                <div class="row">
                    <div class="col-sm-12" id="guides">
                        <div class="waterfall columns" data-col-min-width="350" data-default-container-width="915" data-autoresize="true">
{chr(10).join(cols)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    {tail}"""


def main() -> int:
    v = subprocess.run([sys.executable, str(Path(__file__).with_name("_validate_monolith.py"))], capture_output=True, text=True)
    if v.returncode != 0:
        print(v.stdout)
        print("ERROR: monolith does not validate; fix it (or run _normalize_monolith.py) first")
        return 1
    cfg = json.loads(CONFIG.read_text())
    src = MONO.read_text(encoding="utf-8")
    head, tail, intro, columns, pres = parse_monolith(src)

    previous = set(json.loads(MANIFEST.read_text())) if MANIFEST.exists() else set()
    slugs = {p.slug for c in columns for g in c["groups"] for p in g["pages"]}
    bad = sorted(x for x in slugs if (SITE / PAGES / x).exists() and f"{PAGES}/{x}/index.html" not in previous)
    if bad:
        print("ERROR: page ids collide with existing folders in pages/ that this tool did not create:", bad)
        return 1

    # remove files written by the previous run (manifest), never anything else
    for f in previous:
        (SITE / f).unlink(missing_ok=True)
    for d in sorted({str(Path(f).parent) for f in previous if str(Path(f).parent) != "."}, reverse=True):
        try:
            (SITE / d).rmdir()
        except OSError:
            pass
    written: list[str] = []

    def write(rel: str, text: str) -> None:
        f = SITE / rel
        f.parent.mkdir(parents=True, exist_ok=True)
        f.write_text(text, encoding="utf-8")
        written.append(rel)

    pages = [p for c in columns for g in c["groups"] for p in g["pages"]]
    for p in pages:
        write(f"{PAGES}/{p.slug}/index.html", build_page(head, tail, cfg, p, pres))
    hub_head = re.sub(r"<title>.*?</title>", f"<title>{esc(cfg.get('hub_title', 'Tutorials'))} - Zebra Technologies Techdocs</title>", head, flags=re.S)
    write("index.html", build_hub(hub_head, tail, intro, cfg, columns))
    MANIFEST.write_text(json.dumps(sorted(written), indent=1))

    nsec = sum(len(re.findall(r"<h[23] id=", (SITE / PAGES / p.slug / "index.html").read_text())) for p in pages)
    npre = sum((SITE / PAGES / p.slug / "index.html").read_text().count('<pre class="prettyprint">') for p in pages)
    print(f"pages={len(pages)} columns={len(columns)} sections(h2/h3)={nsec} code-blocks={npre}/{len(pres)} -> {SITE}")
    return 0 if npre == len(pres) else 1


if __name__ == "__main__":
    sys.exit(main())
