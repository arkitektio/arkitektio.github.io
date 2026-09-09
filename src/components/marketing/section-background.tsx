/**
 * Decorative gradient + grid background shared by the marketing-style
 * section pages (blog, showcase, shoulders of giants). Mirrors the look
 * of the home page hero so the standalone pages feel part of the same site.
 */
export function SectionBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-[-10%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-fd-primary/20 opacity-60 blur-[120px]" />
      <div className="absolute right-[-10%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-fd-primary/10 blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-fd-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-fd-border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}
