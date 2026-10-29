"""Shared, dependency-free helpers: tolerant HTML tree builder + canonical serializer.

Used by _normalize_monolith.py, _validate_monolith.py (and later the splitter), so all
three read the monolith the same way.
"""
from __future__ import annotations

import html
import re
import textwrap
from html.parser import HTMLParser

VOID = {"br", "img", "hr", "meta", "link", "input"}
BLOCKS = {"p", "ul", "ol", "pre", "x-pre", "table", "div", "h1", "h2", "h3", "h4", "h5", "h6"}
HEADINGS = {"h1", "h2", "h3", "h4", "h5", "h6"}
KEEP_ATTRS = HEADINGS | {"a", "span"}  # every other tag is serialized without attributes

PRE_RE = re.compile(r"<pre\b[^>]*>\s*<code>(.*?)</code>\s*</pre>", re.S | re.I)


class Node:
    def __init__(self, tag: str, attrs: list[tuple[str, str | None]] | None = None) -> None:
        self.tag = tag
        self.attrs = attrs or []
        self.kids: list["Node | str"] = []

    def get(self, name: str, default: str = "") -> str:
        for k, v in self.attrs:
            if k == name:
                return v or ""
        return default

    def classes(self) -> list[str]:
        return self.get("class").split()

    def text(self) -> str:
        out = ""
        for k in self.kids:
            out += k if isinstance(k, str) else (k.text() if k.tag != "br" else " ")
        return html.unescape(re.sub(r"\s+", " ", out)).strip()


class Builder(HTMLParser):
    """Tolerant builder: drops unmatched end tags, auto-closes <p>/<li>, keeps comments."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self.root = Node("root")
        self.stack = [self.root]
        self.dropped_end_tags: list[str] = []

    def _close_until(self, tag: str) -> bool:
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return True
        return False

    def handle_starttag(self, tag, attrs):
        if tag in BLOCKS and self._in("p"):
            self._close_until("p")
        if tag == "li" and self._in("li"):
            self._close_until("li")
        n = Node(tag, attrs)
        self.stack[-1].kids.append(n)
        if tag not in VOID:
            self.stack.append(n)

    def handle_startendtag(self, tag, attrs):
        n = Node(tag, attrs)
        self.stack[-1].kids.append(n)

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if not self._close_until(tag):
            self.dropped_end_tags.append(tag)

    def handle_data(self, data):
        self.stack[-1].kids.append(data)

    def handle_entityref(self, name):
        self.stack[-1].kids.append(f"&{name};")

    def handle_charref(self, name):
        self.stack[-1].kids.append(f"&#{name};")

    def handle_comment(self, data):
        n = Node("!comment")
        n.kids.append(data)
        self.stack[-1].kids.append(n)

    def _in(self, tag: str) -> bool:
        return any(n.tag == tag for n in self.stack[1:])


# ---------------------------------------------------------------- code blocks

def norm_code(raw: str) -> str:
    """Canonical <pre> for a raw code block: text only, no <br>, tabs->4 spaces, trimmed."""
    s = re.sub(r"<br\s*/?>", "", raw, flags=re.I)
    s = html.unescape(s).replace("\r\n", "\n").replace("\r", "\n").expandtabs(4)
    lines = [l.rstrip() for l in s.split("\n")]
    while lines and not lines[0].strip():
        lines.pop(0)
    while lines and not lines[-1].strip():
        lines.pop()
    body = textwrap.dedent("\n".join(lines))
    return '<pre class="prettyprint"><code>\n' + html.escape(body, quote=False) + "\n</code></pre>"


def extract_pres(content: str) -> tuple[str, list[str], int]:
    """Replace each code block by <x-pre n=".."> and return normalized blocks.
    Also returns how many blocks contained raw tag-like text (the unescaped <...> bug)."""
    blocks: list[str] = []
    raw_tag_blocks = 0

    def repl(m: re.Match) -> str:
        nonlocal raw_tag_blocks
        inner = m.group(1)
        if re.search(r"<(?!br\b)[A-Za-z/!]", inner):
            raw_tag_blocks += 1
        blocks.append(norm_code(inner))
        return f'<x-pre n="{len(blocks) - 1}"></x-pre>'

    return PRE_RE.sub(repl, content), blocks, raw_tag_blocks


# ------------------------------------------------------------------ serialize

def _attrs(n: Node) -> str:
    if n.tag not in KEEP_ATTRS or not n.attrs:
        return ""
    return "".join(f' {k}="{html.escape(v or "", quote=True)}"' if v is not None else f" {k}" for k, v in n.attrs)


def ser_inline(kids: list["Node | str"]) -> str:
    out = ""
    for k in kids:
        if isinstance(k, str):
            out += k
        elif k.tag == "!comment":
            out += f"<!--{k.kids[0] if k.kids else ''}-->"
        elif k.tag == "br":
            out += "<br>"
        else:
            out += f"<{k.tag}{_attrs(k)}>{ser_inline(k.kids)}</{k.tag}>"
    return out


def ser_block(n: Node, pres: list[str]) -> str:
    if n.tag == "x-pre":
        return pres[int(n.get("n"))]
    if n.tag == "!comment":
        return f"<!--{n.kids[0] if n.kids else ''}-->"
    if n.tag in ("ul", "ol"):
        items = "\n".join(f"  <li>{ser_inline(li.kids)}</li>" for li in n.kids if isinstance(li, Node) and li.tag == "li")
        return f"<{n.tag}>\n{items}\n</{n.tag}>"
    return f"<{n.tag}{_attrs(n)}>{ser_inline(n.kids)}</{n.tag}>"
