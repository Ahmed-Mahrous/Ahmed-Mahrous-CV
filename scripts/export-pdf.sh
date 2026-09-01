#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/Ahmed-Mahrous-Flutter-Developer.pdf"
URL="${CV_URL:-http://127.0.0.1:43147/cv}"
USER_DATA="${TMPDIR:-/tmp}/chrome-cv-pdf"

mkdir -p "$(dirname "$OUT")"
rm -rf "$USER_DATA"
mkdir -p "$USER_DATA"

timeout 25 google-chrome \
  --headless=new \
  --no-sandbox \
  --disable-gpu \
  --hide-scrollbars \
  --no-pdf-header-footer \
  --user-data-dir="$USER_DATA" \
  --virtual-time-budget=8000 \
  --timeout=15000 \
  --print-to-pdf="$OUT" \
  "$URL"

rm -rf "$USER_DATA"
echo "Wrote $OUT"
