#!/usr/bin/env bash
# Rebuilds dcs/rfid/rfd40-90-mqtt/ (the RFD40/RFD90 MQTT API section of the staging site) from the
# last commit of a local docs-rfid-handheld-iotc checkout. See README.md in this folder.
#
# Usage: ./build.sh <path-to-docs-rfid-handheld-iotc> [--node-modules <dir>]
set -euo pipefail

KIT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SECTION="$KIT/../rfd40-90-mqtt"
DOCS="${1:-}"
NODE_MODULES=""
if [[ "${2:-}" == "--node-modules" ]]; then NODE_MODULES="${3:-}"; fi
if [[ -z "$DOCS" || ! -f "$DOCS/docusaurus.config.ts" ]]; then
  echo "Usage: ./build.sh <path-to-docs-rfid-handheld-iotc> [--node-modules <dir>]" >&2
  exit 2
fi
for tool in git node npx d2 rsync; do
  command -v "$tool" >/dev/null || { echo "Missing $tool. See README.md, Prerequisites." >&2; exit 1; }
done

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
SRC="$WORK/src"

echo "1/7 Copying the last commit of $DOCS"
git clone --quiet --local "$DOCS" "$SRC"
COMMIT="$(git -C "$SRC" log -1 --format='%h %s')"

echo "2/7 Installing dependencies"
if [[ -n "$NODE_MODULES" ]]; then
  cp -Rc "$NODE_MODULES" "$SRC/node_modules" 2>/dev/null || cp -R "$NODE_MODULES" "$SRC/node_modules"
else
  (cd "$SRC" && npm ci --no-audit --no-fund --silent)
fi

echo "3/7 Adding the stage-only files and applying the stage-only edits"
cp "$KIT/docusaurus.stage.config.ts" "$SRC/"
mkdir -p "$SRC/stage" && cp "$KIT/remark-unlink.mjs" "$SRC/stage/"
cp "$KIT/pages/quick-start.mdx" "$SRC/api/mqtt/reference/quick-start.mdx"
node "$KIT/apply-stage-changes.mjs" "$SRC"

echo "4/7 Building the MQTT API section"
(cd "$SRC" && npx docusaurus build --config docusaurus.stage.config.ts --out-dir build-stage)
OUT="$SRC/build-stage"
cp "$KIT/redirects/index.html" "$OUT/index.html"
mkdir -p "$OUT/api-reference" && cp "$KIT/redirects/api-reference/index.html" "$OUT/api-reference/index.html"

echo "5/7 Rendering the PDFs"
(cd "$SRC" && node scripts/site/generate-pdfs.mjs --dir build-stage)

echo "6/7 Keeping only the images the pages use, and checking the build"
KEEP=" img/brand/zebra-logo-black-horizontal.svg img/brand/zebra-logo-white-horizontal.svg img/brand/zebra-mark.svg img/social/404.png img/social/mqtt.png img/social/zebra-social-card.png "
(cd "$OUT" && find img -type f | while read -r f; do [[ "$KEEP" == *" $f "* ]] || rm "$f"; done; find img -type d -empty -delete)
node "$KIT/verify.mjs" "$OUT"

# A rebuilt PDF differs from the published one even when nothing changed, because its cover carries
# the build date. Keep the published file when the text is the same apart from that date.
if command -v pdftotext >/dev/null && [[ -d "$SECTION/pdf" ]]; then
  (cd "$OUT" && find pdf -name '*.pdf') | while read -r f; do
    if [[ -f "$SECTION/$f" ]] && cmp -s <(pdftotext -layout "$OUT/$f" - | grep -v 'Generated 20') <(pdftotext -layout "$SECTION/$f" - | grep -v 'Generated 20'); then
      cp "$SECTION/$f" "$OUT/$f"
    fi
  done
fi

echo "7/7 Replacing $SECTION"
mkdir -p "$SECTION"
rsync -a --delete --exclude='.DS_Store' "$OUT/" "$SECTION/"
echo "Done. Built from docs-rfid-handheld-iotc $COMMIT. Review the changes under dcs/rfid/rfd40-90-mqtt/ before you commit."
