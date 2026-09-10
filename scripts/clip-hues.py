#!/usr/bin/env python3
"""Majority OKLCH hue of every front-page clip poster, precomputed.

Mirrors `src/lib/majority-hue.ts` (which is what orkestrator-next does after a
scene renders): pixels vote into 24 hue bins weighted by chroma, whitish pixels
abstain, the winning bin plus its neighbours are vector-averaged. The numbers
go into the `hue` field of `src/lib/front-page-clips.ts`, so the site can tint
itself the moment a clip comes on screen without reading the poster back.

Run after `scripts/make-clips.sh`:  python3 scripts/clip-hues.py
"""
import math
import pathlib
import sys

try:
    from PIL import Image
except ImportError:  # pragma: no cover
    sys.exit("needs Pillow: pip install pillow")

ROOT = pathlib.Path(__file__).resolve().parent.parent
CLIPS = ROOT / "public" / "clips"
SAMPLE_SIZE = 32
BIN_COUNT = 24
WHITISH_FLOOR = 0.04


def to_linear(c: float) -> float:
    c = min(max(c, 0.0), 1.0)
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def srgb_to_oklch(r: int, g: int, b: int):
    rl, gl, bl = to_linear(r / 255), to_linear(g / 255), to_linear(b / 255)
    l = 0.4122214708 * rl + 0.5363325363 * gl + 0.0514459929 * bl
    m = 0.2119034982 * rl + 0.6806995451 * gl + 0.1073969566 * bl
    s = 0.0883024619 * rl + 0.2817188376 * gl + 0.6299787005 * bl
    l_, m_, s_ = l ** (1 / 3), m ** (1 / 3), s ** (1 / 3)
    a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_
    b2 = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_
    h = math.degrees(math.atan2(b2, a))
    return math.hypot(a, b2), h + 360 if h < 0 else h


def majority_hue(path: pathlib.Path):
    img = Image.open(path).convert("RGB").resize((SAMPLE_SIZE, SAMPLE_SIZE), Image.BILINEAR)
    weight = [0.0] * BIN_COUNT
    sum_a = [0.0] * BIN_COUNT
    sum_b = [0.0] * BIN_COUNT
    for r, g, b in img.getdata():
        c, h = srgb_to_oklch(r, g, b)
        if c < WHITISH_FLOOR:
            continue
        bin_ = min(BIN_COUNT - 1, int(h / 360 * BIN_COUNT))
        rad = math.radians(h)
        weight[bin_] += c
        sum_a[bin_] += c * math.cos(rad)
        sum_b[bin_] += c * math.sin(rad)
    best = max(range(BIN_COUNT), key=lambda i: weight[i])
    if weight[best] == 0:
        return None
    prev, nxt = (best - 1) % BIN_COUNT, (best + 1) % BIN_COUNT
    a = sum_a[prev] + sum_a[best] + sum_a[nxt]
    b = sum_b[prev] + sum_b[best] + sum_b[nxt]
    return (math.degrees(math.atan2(b, a)) + 360) % 360


if __name__ == "__main__":
    for poster in sorted(CLIPS.glob("*.jpg")):
        hue = majority_hue(poster)
        print(f"{poster.stem:24s} {'none' if hue is None else round(hue)}")
