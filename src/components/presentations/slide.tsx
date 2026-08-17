'use client';

/* Layout primitives shared by every Arkitekt deck.

   Slides are authored against reveal's 1280x720 canvas (see `reveal-deck.tsx`),
   so the pixel sizes here are literal: a `text-[20px]` body line stays 20px
   relative to the slide no matter how large the frame is on screen. Every slide
   gets the same fixed content box so titles do not jump between slides. */

import type { ReactNode } from 'react';
import { Fragment, Slide } from '@revealjs/react';
import { cn } from '@/lib/cn';

/** The eyebrow line: small, mono, brand-tinted. Doubles as the deck's chapter. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-light text-[13px] font-bold  tracking-[0.18em] text-fd-primary">
      {children}
    </span>
  );
}

/** A schema identifier (`AffineTransformationView`, `pixelSizeX`, …). */
export function Term({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md bg-fd-primary/10 px-1.5 py-0.5 font-mono text-[0.88em] text-fd-primary">
      {children}
    </code>
  );
}

/** Muted small print under a figure. */
export function Caption({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-[15px] leading-snug text-fd-muted-foreground', className)}>
      {children}
    </p>
  );
}

/** The opening slide: big statement, no chrome. */
export function TitleSlide({
  eyebrow,
  title,
  subtitle,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <Slide>
      <div className="flex h-[600px] w-full flex-col justify-center gap-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-[900px] text-[68px] font-bold leading-[1.02] tracking-[-0.03em]">
          {title}
        </h1>
        <p className="max-w-[760px] text-[24px] leading-snug text-fd-muted-foreground">
          {subtitle}
        </p>
        {meta ? (
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[15px] text-fd-muted-foreground">
            {meta}
          </div>
        ) : null}
      </div>
    </Slide>
  );
}

/** A section divider — used to break the deck into chapters. */
export function SectionSlide({
  index,
  title,
  lead,
}: {
  index?: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <Slide>
      <div className="flex h-[600px] w-full flex-col justify-center gap-5">
        {index ? (
          <span className="font-mono text-[15px] font-bold tracking-[0.2em] text-fd-primary">
            {index}
          </span>
        ) : null}
        <h2 className="max-w-[900px] text-[52px] font-bold leading-[1.05] tracking-[-0.025em]">
          {title}
        </h2>
        {lead ? (
          <p className="max-w-[740px] text-[22px] leading-snug text-fd-muted-foreground">
            {lead}
          </p>
        ) : null}
      </div>
    </Slide>
  );
}

/** The workhorse: eyebrow + title + optional lead, then free-form content. */
export function DeckSlide({
  eyebrow,
  title,
  lead,
  logo,
  children,
  notes,
  contentClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  logo?: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  notes?: string;
  contentClassName?: string;
}) {
  return (
    <Slide notes={notes}>
      <div className="flex h-[600px] w-full flex-col gap-4 pt-2">
        <header className="flex flex-col gap-2">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          
          <h2 className="text-[40px] font-bold leading-[1.08] tracking-[-0.025em]">
            {title}
          </h2>
          
          {lead ? (
            <p className="max-w-[900px] text-[20px] leading-snug text-fd-muted-foreground">
              {lead}
            </p>
          ) : null}
        </header>
        <div className={cn('flex min-h-0 flex-1 flex-col', contentClassName)}>
          {children}
        </div>
        
      </div>
    </Slide>
  );
}

/** Centres a figure and stops it from stretching to the full slide width — an
    SVG on `w-full` would otherwise be scaled up until its labels dwarf the body
    copy. */
export function Figure({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[800px]', className)}>{children}</div>
  );
}

/** Two-column body. `ratio` picks how much room the left column gets. */
export function Columns({
  left,
  right,
  ratio = 'even',
  className,
}: {
  left: ReactNode;
  right: ReactNode;
  ratio?: 'even' | 'narrow-left' | 'narrow-right';
  className?: string;
}) {
  const cols =
    ratio === 'narrow-left'
      ? 'grid-cols-[minmax(0,2fr)_minmax(0,3fr)]'
      : ratio === 'narrow-right'
        ? 'grid-cols-[minmax(0,3fr)_minmax(0,2fr)]'
        : 'grid-cols-2';
  return (
    <div className={cn('grid flex-1 items-center gap-8', cols, className)}>
      <div className="flex flex-col gap-4">{left}</div>
      <div className="flex flex-col gap-3">{right}</div>
    </div>
  );
}

/** A bordered surface — the deck equivalent of the site's cards. */
export function Panel({
  title,
  children,
  tone = 'default',
  className,
}: {
  title?: ReactNode;
  children: ReactNode;
  tone?: 'default' | 'primary';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-xl border p-4',
        tone === 'primary'
          ? 'border-fd-primary/40 bg-fd-primary/5'
          : 'border-fd-border bg-fd-card/60',
        className,
      )}
    >
      {title ? (
        <span className="font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-fd-muted-foreground">
          {title}
        </span>
      ) : null}
      <div className="text-[19px] leading-snug">{children}</div>
    </div>
  );
}

/** Bulleted body copy at the deck's standard size. With `stagger`, each bullet
    becomes a reveal.js fragment and appears on its own keypress. */
export function Bullets({
  items,
  stagger = false,
  className,
}: {
  items: ReactNode[];
  stagger?: boolean;
  className?: string;
}) {
  const row = 'flex gap-3 text-[20px] leading-snug';
  return (
    <ul className={cn('flex list-none flex-col gap-3', className)}>
      {items.map((item, i) => {
        const body = (
          <>
            <span
              aria-hidden
              className="mt-[0.62em] size-[7px] shrink-0 rounded-full bg-fd-primary"
            />
            <span>{item}</span>
          </>
        );
        return stagger ? (
          <Fragment key={i} as="li" animation="fade-up" className={row}>
            {body}
          </Fragment>
        ) : (
          <li key={i} className={row}>
            {body}
          </li>
        );
      })}
    </ul>
  );
}
