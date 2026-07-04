/**
 * Normalise a CSS colour string to something `THREE.Color` can parse.
 *
 * The brand tokens are authored in OKLCH (`--color-fd-primary: oklch(...)`).
 * Historically `getComputedStyle(el).color` serialised back to `rgb(...)`, but
 * current Chrome now returns the value in its authored colour space. It hands
 * back `oklch(0.7 0.16 40)` verbatim, which THREE.Color rejects with
 * "Unknown color model oklch(...)". A 2D canvas parses any valid CSS colour and
 * serialises it to hex/rgb, so we round-trip through one to guarantee a value
 * THREE understands.
 */
export function toThreeColor(input: string, fallback = '#7c6cff'): string {
  if (typeof document === 'undefined') return fallback;
  const value = input?.trim();
  if (!value) return fallback;
  // hex and rgb()/rgba() already parse fine, so skip the canvas round-trip.
  if (/^(#|rgb)/i.test(value)) return value;
  try {
    const ctx = document.createElement('canvas').getContext('2d');
    if (!ctx) return fallback;
    // Setting an unparseable value leaves fillStyle untouched, so seed it with
    // the fallback first: if `value` is valid we get its normalised form back,
    // otherwise we safely keep the fallback.
    ctx.fillStyle = fallback;
    ctx.fillStyle = value;
    return ctx.fillStyle || fallback;
  } catch {
    return fallback;
  }
}
