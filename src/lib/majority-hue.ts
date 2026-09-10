/* The MAJORITY hue of an image, the way orkestrator-next tints the app after
   the scene it is rendering (`scene/shell/theme/majorityHue.ts` there).

   Not a mean: a poster with a magenta channel next to a cyan one should tint
   toward whichever DOMINATES the pixels, not toward the grey their mean cancels
   to. So pixels vote into a coarse OKLCH hue histogram, weighted by chroma
   (a dim or grey pixel has no hue worth voting for), and the winning band plus
   its two neighbours decide. Whitish pixels never vote, so a mostly white/grey
   frame with one coloured region tints toward the region.

   Bins are in OKLCH hue, the same angle space `--brand-hue` is defined in, so
   the winner lands directly on the theme. */

export type Oklch = { l: number; c: number; h: number };

const toLinear = (channel: number) => {
  const c = Math.min(Math.max(channel, 0), 1);
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};

/** sRGB (0–255 per channel) to OKLCH. The inverse of what CSS `oklch()` does. */
export function srgbToOklch(r: number, g: number, b: number): Oklch {
  const rLin = toLinear(r / 255);
  const gLin = toLinear(g / 255);
  const bLin = toLinear(b / 255);

  const l = 0.4122214708 * rLin + 0.5363325363 * gLin + 0.0514459929 * bLin;
  const m = 0.2119034982 * rLin + 0.6806995451 * gLin + 0.1073969566 * bLin;
  const s = 0.0883024619 * rLin + 0.2817188376 * gLin + 0.6299787005 * bLin;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const okL = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const okA = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const okB = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

  const hue = (Math.atan2(okB, okA) * 180) / Math.PI;
  return { l: okL, c: Math.hypot(okA, okB), h: hue < 0 ? hue + 360 : hue };
}

/** 15° bins: coarse on purpose, so the winner is stable rather than exact. */
const BIN_COUNT = 24;
/** Below this alpha (of 255) a pixel is transparent background, not content. */
const ALPHA_FLOOR = 8;
/** Below this OKLCH chroma a pixel reads as white/grey and gets no hue vote. */
const WHITISH_FLOOR = 0.04;
const TO_RADIANS = Math.PI / 180;

/**
 * The majority hue (degrees, OKLCH) of an RGBA8 pixel buffer in `ImageData`
 * layout, or null when nothing in it carries a hue (an achromatic frame).
 */
export function majorityHueFromPixels(rgba: Uint8ClampedArray): number | null {
  const weight = new Float64Array(BIN_COUNT);
  const sumA = new Float64Array(BIN_COUNT);
  const sumB = new Float64Array(BIN_COUNT);

  for (let i = 0; i < rgba.length; i += 4) {
    const a8 = rgba[i + 3];
    if (a8 < ALPHA_FLOOR) continue;
    const { c, h } = srgbToOklch(rgba[i], rgba[i + 1], rgba[i + 2]);
    if (c < WHITISH_FLOOR) continue;

    const w = c * (a8 / 255);
    const bin = Math.min(BIN_COUNT - 1, (h / 360) * BIN_COUNT) | 0;
    const radians = h * TO_RADIANS;
    weight[bin] += w;
    sumA[bin] += w * Math.cos(radians);
    sumB[bin] += w * Math.sin(radians);
  }

  let best = 0;
  for (let bin = 1; bin < BIN_COUNT; bin += 1) {
    if (weight[bin] > weight[best]) best = bin;
  }
  if (weight[best] === 0) return null;

  // The winning band plus its neighbours, so a hue on a bin edge does not
  // split its vote. Averaged as vectors: hue is circular.
  const prev = (best + BIN_COUNT - 1) % BIN_COUNT;
  const next = (best + 1) % BIN_COUNT;
  const a = sumA[prev] + sumA[best] + sumA[next];
  const b = sumB[prev] + sumB[best] + sumB[next];
  return (Math.atan2(b, a) / TO_RADIANS + 360) % 360;
}

/** Edge of the square the image is downscaled to before reading: 1024 pixels
    is plenty to find a majority and keeps the work well under a millisecond. */
const SAMPLE_SIZE = 32;

/**
 * The majority hue of a loaded, same-origin image. Null when the image has no
 * hue to offer, or when the browser will not let us read it (tainted canvas,
 * no 2D context).
 */
export function majorityHueFromImage(image: HTMLImageElement): number | null {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = SAMPLE_SIZE;
    canvas.height = SAMPLE_SIZE;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;
    ctx.drawImage(image, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
    const { data } = ctx.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
    return majorityHueFromPixels(data);
  } catch {
    return null;
  }
}
