#!/usr/bin/env bash
set -euo pipefail

TARGET_WIDTH=427 
TARGET_HEIGHT=320 

for f in img_*.webp food_*.webp; do
  [ -f "$f" ] || continue

  out="${f%.webp}_thumb.webp"

  magick "$f" \
    -auto-orient \
    -resize "${TARGET_WIDTH}x${TARGET_HEIGHT}^>" \
    -gravity center \
    -crop "${TARGET_WIDTH}x${TARGET_HEIGHT}+0+0" +repage \
    -define webp:lossless=true \
    "$out"
done

