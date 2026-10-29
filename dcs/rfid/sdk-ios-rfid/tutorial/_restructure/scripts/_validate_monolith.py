#!/usr/bin/env python3
"""Validate index.monolithic.html against docs/Monolith-Schema.md.

Exit 0 = splitter may run. Exit 1 = errors (listed with line numbers).
Usage: python3 scripts/_validate_monolith.py
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _monolith_lib import Builder, Node, HEADINGS  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
MONO = ROOT / "index.monolithic.html"

START_RE = re.compile(r"<h1\b[^>]*top-group", re.I)
END_MARK = '<footer id="footer"'
BLOCK_TAGS = HEADINGS | {"p", "ul", "ol", "pre", "!comment"}
INLINE_OK = {"code", "strong", "a", "em"}

errors: list[str] = []
warns: list[str] = []


def err(msg: str, ln: int | None = None) -> None:
    errors.append(f"line {ln}: {msg}" if ln else msg)


def region_of(src: str) -> tuple[str, int]:
    m = START_RE.search(src)
    e = src.find(END_MARK)
    if not m or e < 0:
        print("ERROR: content region not found")
        sys.exit(2)
    return src[m.start(): e], src[: m.start()].count("\n") + 1


def check_inline(n: Node, where: str, ln: int) -> None:
    for k in n.kids:
        if isinstance(k, Node):
            if k.tag not in INLINE_OK:
                err(f"<{k.tag}> not allowed inside {where} (allowed: code, strong, a)", ln)
            if k.tag == "em":
                warns.append(f"line {ln}: <em> in {where}: {k.text()[:40]!r}")
            if k.attrs and k.tag != "a":
                err(f"<{k.tag}> must not carry attributes", ln)
            check_inline(k, where, ln)
        elif "&nbsp;" in k or "\u00a0" in k:
            err(f"&nbsp; used as spacing in {where}", ln)
        elif "<" in k:
            err(f"raw '<' in text of {where}", ln)


def main() -> int:
    src = MONO.read_text(encoding="utf-8")
    region, line0 = region_of(src)
    lines_before = lambda idx: line0 + region[:idx].count("\n")  # noqa: E731

    # --- code blocks: must be exactly <pre class="prettyprint"><code>\n TEXT \n</code></pre>, TEXT escaped
    for m in re.finditer(r"<pre\b[^>]*>(.*?)</pre>", region, re.S):
        ln = lines_before(m.start())
        if not m.group(0).startswith('<pre class="prettyprint"><code>\n') or not m.group(0).endswith("\n</code></pre>"):
            err('code block is not <pre class="prettyprint"><code>\\n…\\n</code></pre>', ln)
            continue
        body = m.group(1)[len("<code>\n"): -len("\n</code>")]
        if re.search(r"<(?!/?$)", body):
            err("unescaped '<' inside code block (must be &lt;)", ln)
        if "\t" in body or re.search(r"[ ]+\n", body) or body != body.strip("\n"):
            err("code block has tabs / trailing spaces / blank edge lines", ln)

    # --- well-formedness + structure
    stripped = re.sub(r"<pre\b.*?</pre>", '<x-pre n="0"></x-pre>', region, flags=re.S)
    b = Builder()
    b.feed(stripped)
    b.close()
    if b.dropped_end_tags:
        err(f"stray end tags: {b.dropped_end_tags[:10]}")

    level = {"h1": 1, "h2": 2, "h3": 3, "h4": 4, "h5": 5}
    ids: dict[str, int] = {}
    cur = {"h1": None, "h2": None, "h3": None}
    h1n = h2n = h3n = 0
    page_has_content: dict[str, bool] = {}
    cur_page = None
    h2_children: dict[str, list[Node]] = {}
    seen_nodes = 0
    for n in b.root.kids:
        if isinstance(n, str):
            if n.strip():
                err(f"stray text at top level: {n.strip()[:50]!r}")
            continue
        seen_nodes += 1
        ln = lines_before(0)
        t = n.tag
        if t == "x-pre":
            if cur_page is not None:
                page_has_content[cur_page] = True
            continue
        if t not in BLOCK_TAGS | {"x-pre"}:
            err(f"<{t}> not allowed at top level")
            continue
        if t in HEADINGS:
            cls = n.classes()
            hid = n.get("id")
            if t in ("h1", "h2", "h3"):
                if not hid:
                    err(f"{t} '{n.text()}' has no id")
                elif hid in ids:
                    err(f"duplicate id '{hid}'")
                ids[hid] = 1
                if "anchor" not in cls:
                    err(f"{t} '{n.text()}' lacks class 'anchor'")
            if t == "h1":
                h1n += 1
                if "top-group" not in cls:
                    err(f"h1 '{n.text()}' lacks class top-group")
                cur["h1"], cur["h2"], cur["h3"], cur_page = hid, None, None, None
            elif t == "h2":
                h2n += 1
                if "main-topic" not in cls:
                    err(f"h2 '{n.text()}' lacks class main-topic")
                if cur["h1"] is None:
                    err(f"h2 '{n.text()}' outside an h1 top-group")
                cur["h2"], cur["h3"] = hid, None
                h2_children[hid] = []
                single = "single-page" in cls
                if single:
                    if n.get("data-page") != "single":
                        err(f"single-page h2 '{n.text()}' needs data-page=\"single\"")
                    cur_page = hid
                    page_has_content[hid] = False
                else:
                    cur_page = None
            elif t == "h3":
                h3n += 1
                if "sub-topic" not in cls:
                    err(f"h3 '{n.text()}' lacks class sub-topic")
                if cur["h2"] is None:
                    err(f"h3 '{n.text()}' outside an h2 main topic")
                elif f"single-page" in " ".join(next((x.classes() for x in [n]), [])):
                    pass
                cur["h3"] = hid
                h2_children[cur["h2"] or ""].append(n)
                cur_page = hid
                page_has_content[hid] = False
                if n.text() == "Overview" and "overview" not in cls:
                    err("h3 'Overview' needs class overview")
            else:
                if cur_page is None:
                    err(f"{t} '{n.text()}' is not inside a page (h3 or single-page h2)")
                else:
                    page_has_content[cur_page] = True
                if t == "h5":
                    warns.append(f"line ?: h5 '{n.text()}' (h5 is reserved; prefer h4)")
            # headings must contain only anchor + text
            for k in n.kids:
                if isinstance(k, Node) and k.tag not in ("a",):
                    err(f"<{k.tag}> inside heading '{n.text()}'")
            continue
        # content blocks
        if cur_page is None:
            if t != "!comment":
                err(f"content <{t}> outside any page: {n.text()[:50]!r}")
            continue
        page_has_content[cur_page] = True
        if t == "p":
            if n.attrs:
                err(f'<p> must not carry attributes ({n.attrs[0][0]}) in {n.text()[:40]!r}')
            if not n.text().strip():
                err("empty <p>")
            check_inline(n, "<p>", 0)
        elif t in ("ul", "ol"):
            for li in n.kids:
                if isinstance(li, Node) and li.tag == "li":
                    check_inline(li, "<li>", 0)
                elif isinstance(li, str) and li.strip():
                    err("text directly inside list")

    # --- hub structure
    if h1n != 2:
        warns.append(f"expected 2 top-groups, found {h1n}")
    for pid, ok in page_has_content.items():
        if not ok:
            err(f"page '{pid}' has no content")

    print(f"top-groups={h1n} main-topics={h2n} pages={h3n}")
    for w in warns[:30]:
        print("WARN ", w)
    for e in errors[:80]:
        print("ERROR", e)
    print(f"{len(errors)} error(s), {len(warns)} warning(s)")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
