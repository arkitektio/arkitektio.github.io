#!/usr/bin/env python3
"""Downscale oversized raster images under public/ in place.

Docs figures were exported at print resolution (some over 20 000 px wide,
5–10 MB each). Nothing on the site shows them wider than ~1000 CSS px, so a
long edge of MAX_EDGE (2000 px, i.e. 2x for a 1000 px column) is plenty. The
format and path stay the same, so every reference keeps working.

Run from the repo root: python3 scripts/downscale-images.py [--dry-run]
"""
import pathlib
import sys

from PIL import Image

Image.MAX_IMAGE_PIXELS = None  # the sources really are that big

ROOT = pathlib.Path(__file__).resolve().parent.parent
MAX_EDGE = 2000
EXTS = {'.png', '.jpg', '.jpeg', '.webp'}
SKIP = ('public/clips/',)  # posters are already sized by make-clips.sh

dry = '--dry-run' in sys.argv
before = after = 0
for path in sorted((ROOT / 'public').rglob('*')):
    if path.suffix.lower() not in EXTS or any(s in str(path) for s in SKIP):
        continue
    try:
        im = Image.open(path)
    except Exception:
        continue
    w, h = im.size
    if max(w, h) <= MAX_EDGE:
        continue
    scale = MAX_EDGE / max(w, h)
    nw, nh = round(w * scale), round(h * scale)
    size = path.stat().st_size
    before += size
    if dry:
        print(f'{size / 1e6:6.2f}MB  {w}x{h} -> {nw}x{nh}  {path.relative_to(ROOT)}')
        continue
    im.load()
    out = im.resize((nw, nh), Image.LANCZOS)
    if path.suffix.lower() in ('.jpg', '.jpeg'):
        out = out.convert('RGB')
        out.save(path, quality=85, optimize=True, progressive=True)
    else:
        out.save(path, optimize=True)
    new = path.stat().st_size
    after += new
    print(f'{size / 1e6:6.2f}MB -> {new / 1e6:5.2f}MB  {w}x{h} -> {nw}x{nh}  {path.relative_to(ROOT)}')
if not dry:
    print(f'\ntotal {before / 1e6:.1f}MB -> {after / 1e6:.1f}MB')
