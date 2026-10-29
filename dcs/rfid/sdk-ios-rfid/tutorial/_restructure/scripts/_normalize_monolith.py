#!/usr/bin/env python3
"""Stage 2: normalize index.monolithic.html to the monolith schema (docs/Monolith-Schema.md).

Deterministic and idempotent. No guessing: anything it cannot convert by a fixed rule is
reported (REVIEW) and left untouched; the validator then decides pass/fail.

Usage:  python3 scripts/_normalize_monolith.py [--check]
  --check  do not write; exit 1 if the file is not already normalized.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from _monolith_lib import Builder, Node, HEADINGS, extract_pres, ser_block  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
MONO = ROOT / "index.monolithic.html"
SYMBOLS = ROOT / "config" / "sdk-symbols.json"

START_RE = re.compile(r"<h1\b[^>]*top-group", re.I)
END_MARK = '<footer id="footer"'

IDENT = re.compile(r"^[A-Za-z_][A-Za-z0-9_]*(:[A-Za-z0-9_]*)*:?$|^[A-Za-z_][A-Za-z0-9_.]*\(\)$")
PSEUDO_HEAD = re.compile(r"^(?P<t>[^<>]{1,70}?):$")
PSEUDO_WORDS = {"notes", "note"}

report: dict[str, int] = {}
review: list[str] = []


def bump(key: str, n: int = 1) -> None:
    report[key] = report.get(key, 0) + n


def load_symbols() -> re.Pattern | None:
    if not SYMBOLS.exists():
        review.append("config/sdk-symbols.json missing: API names in plain text not wrapped")
        return None
    d = json.loads(SYMBOLS.read_text())
    names = set(d["sdk_methods"]) | set(d["delegate_methods"]) | set(d["legacy_aliases"]) | set(d["protocols"])
    names = sorted((n.rstrip(":") for n in names), key=len, reverse=True)
    return re.compile(r"(?<![A-Za-z0-9_])(" + "|".join(re.escape(n) for n in names) + r")(?![A-Za-z0-9_])")


SYM = load_symbols()


# ------------------------------------------------------------------- inline

def collapse(s: str) -> str:
    s = s.replace("&nbsp;", " ").replace("\u00a0", " ")
    return re.sub(r"\s+", " ", s)


def wrap_symbols(text: str) -> list["Node | str"]:
    if not SYM:
        return [text]
    out: list["Node | str"] = []
    pos = 0
    for m in SYM.finditer(text):
        if m.start() > pos:
            out.append(text[pos:m.start()])
        c = Node("code")
        c.kids.append(m.group(1))
        out.append(c)
        bump("api names wrapped in <code>")
        pos = m.end()
    if pos < len(text):
        out.append(text[pos:])
    return out


def inline(kids: list["Node | str"], in_code: bool = False, in_a: bool = False) -> list["Node | str"]:
    out: list["Node | str"] = []
    for k in kids:
        if isinstance(k, str):
            t = collapse(k)
            out.extend([t] if (in_code or in_a) else wrap_symbols(t))
            continue
        if k.tag == "!comment":
            out.append(k)
            continue
        if k.tag == "br":
            out.append(k)  # resolved by the block-level rules
            continue
        tag = k.tag
        if tag == "b":
            tag = "strong"
            bump("<b> -> <strong>")
        if tag == "i":
            tag = "em"
        if tag == "em":
            txt = k.text()
            if IDENT.match(txt) and not any(isinstance(x, Node) for x in k.kids):
                tag = "code"
                bump("<em> identifier -> <code>")
            else:
                review.append(f"<em> is not a single identifier: {txt!r}")
        if tag == "span" and not k.attrs:
            out.extend(inline(k.kids, in_code, in_a))
            bump("bare <span> unwrapped")
            continue
        n = Node(tag, [(a, (v or "").strip()) for a, v in k.attrs] if tag == "a" else [])
        n.kids = inline(k.kids, in_code or tag == "code", in_a or tag == "a")
        out.append(n)
    return out


def trim(kids: list["Node | str"]) -> list["Node | str"]:
    kids = list(kids)
    while kids and isinstance(kids[0], str) and not kids[0].strip():
        kids.pop(0)
    while kids and isinstance(kids[-1], str) and not kids[-1].strip():
        kids.pop()
    if kids and isinstance(kids[0], str):
        kids[0] = kids[0].lstrip()
    if kids and isinstance(kids[-1], str):
        kids[-1] = kids[-1].rstrip()
    # merge adjacent strings
    merged: list["Node | str"] = []
    for k in kids:
        if merged and isinstance(k, str) and isinstance(merged[-1], str):
            merged[-1] += k
        else:
            merged.append(k)
    return [k for k in merged if not (isinstance(k, str) and k == "")]


def is_empty(kids: list["Node | str"]) -> bool:
    return not any((isinstance(k, Node) and k.tag not in ("br",)) or (isinstance(k, str) and k.strip()) for k in kids)


def split_on_br(kids: list["Node | str"]) -> list[list["Node | str"]]:
    groups: list[list["Node | str"]] = [[]]
    for k in kids:
        if isinstance(k, Node) and k.tag == "br":
            groups.append([])
            bump("<br> paragraph splits")
        else:
            groups[-1].append(k)
    return [trim(g) for g in groups if not is_empty(g)]


# -------------------------------------------------------------------- blocks

def para(kids: list["Node | str"]) -> Node:
    p = Node("p")
    p.kids = kids
    return p


def pseudo_heading(kids: list["Node | str"]) -> tuple[str, list["Node | str"]] | None:
    first = next((i for i, k in enumerate(kids) if not (isinstance(k, str) and not k.strip())), None)
    if first is None:
        return None
    k = kids[first]
    if not (isinstance(k, Node) and k.tag == "strong"):
        return None
    t = k.text()
    m = PSEUDO_HEAD.match(t)
    if m:
        title = m.group("t").strip()
    elif t.lower() in PSEUDO_WORDS:
        title = t
    else:
        return None
    return title, kids[first + 1:]


def heading_kids(kids: list["Node | str"]) -> list["Node | str"]:
    """Headings keep their anchor markup (a.heading-anchor > span) and plain text only."""
    out: list["Node | str"] = []
    for k in kids:
        if isinstance(k, str):
            out.append(collapse(k))
        elif k.tag == "br":
            continue
        elif k.tag in ("em", "strong", "b", "i", "code"):
            out.extend(heading_kids(k.kids))  # headings are plain text
            bump("emphasis/code unwrapped inside headings")
        else:
            n = Node(k.tag, k.attrs)
            n.kids = heading_kids(k.kids)
            out.append(n)
    return out


def block(n: "Node | str", out: list[Node]) -> None:
    if isinstance(n, str):
        if n.strip():
            review.append(f"stray top-level text wrapped in <p>: {n.strip()[:60]!r}")
            out.append(para(trim(inline([n]))))
        return
    t = n.tag
    if t in HEADINGS:
        h = Node(t, n.attrs)
        h.kids = trim(heading_kids(n.kids))
        if t == "h3" and h.text() == "Overview" and "overview" not in h.classes():
            h.attrs = [(k, (v + " overview") if k == "class" else v) for k, v in h.attrs]
            bump("h3 Overview gets class 'overview'")
        out.append(h)
    elif t in ("x-pre", "!comment"):
        out.append(n)
    elif t == "br":
        bump("top-level <br> dropped")
    elif t in ("ul", "ol"):
        u = Node(t)
        for li in n.kids:
            if isinstance(li, Node) and li.tag == "li":
                items = [x for x in split_on_br(inline(li.kids)) if x]
                if not items:
                    continue
                joined: list["Node | str"] = []
                for i, g in enumerate(items):
                    joined += ([" "] if i else []) + g
                node = Node("li")
                node.kids = trim(joined)
                u.kids.append(node)
            elif isinstance(li, str) and li.strip():
                review.append(f"text directly inside <{t}>: {li.strip()[:50]!r}")
        out.append(u)
    elif t == "p":
        if "align" in dict(n.attrs):
            bump('p align="..." removed')
        for g in split_on_br(inline(n.kids)):
            ph = pseudo_heading(g)
            if ph:
                title, rest = ph
                h = Node("h4", [("class", "anchor")])
                h.kids = [title]
                out.append(h)
                bump("bold lead-in -> <h4>")
                rest = trim(rest)
                if not is_empty(rest):
                    out.append(para(rest))
            else:
                out.append(para(g))
    else:
        review.append(f"unexpected top-level <{t}> wrapped as paragraph")
        for g in split_on_br(inline(n.kids)):
            out.append(para(g))


def normalize_region(region: str) -> tuple[str, int]:
    content, pres, raw_tag_blocks = extract_pres(region)
    b = Builder()
    b.feed(content)
    b.close()
    if b.dropped_end_tags:
        bump("stray end tags dropped", len(b.dropped_end_tags))
    blocks: list[Node] = []
    for n in b.root.kids:
        block(n, blocks)
    # drop empty paragraphs
    blocks = [x for x in blocks if not (x.tag == "p" and is_empty(x.kids))]
    bump("code blocks normalized", len(pres))
    if raw_tag_blocks:
        bump("code blocks with unescaped <...> fixed", raw_tag_blocks)
    return "\n\n".join(ser_block(x, pres) for x in blocks) + "\n\n", len(blocks)


def main() -> int:
    check = "--check" in sys.argv
    src = MONO.read_text(encoding="utf-8")
    m = START_RE.search(src)
    e = src.find(END_MARK)
    if not m or e < 0:
        print("ERROR: cannot locate content region (first h1.top-group … footer)")
        return 2
    prefix, region, suffix = src[: m.start()], src[m.start(): e], src[e:]
    new_region, nblocks = normalize_region(region)
    new = prefix + new_region + suffix
    changed = new != src
    print(f"blocks: {nblocks}")
    for k, v in sorted(report.items()):
        print(f"  {v:5d}  {k}")
    if review:
        print(f"REVIEW ({len(review)}) - not converted, left as-is:")
        for r in review[:60]:
            print("  -", r)
    if check:
        print("normalized already" if not changed else "NOT normalized (run without --check)")
        return 1 if changed else 0
    if changed:
        MONO.write_text(new, encoding="utf-8")
        print("written:", MONO)
    else:
        print("no changes")
    return 0


if __name__ == "__main__":
    sys.exit(main())
