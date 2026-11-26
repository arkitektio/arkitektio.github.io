import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { Logo } from '@/components/site/logo';

// The four ways in on the Get Started page, each with its own Klippy scene (Klippy is
// the logo with googly eyes, see Buddy in src/components/site/guide.tsx):
//
//   join, super quick     rushes toward somebody's server in the distance, coffee held high
//   join, with a coffee   sips a coffee, somebody's server far behind
//   own,  super quick     screws a crooked server together in a frantic hurry
//   own,  with a coffee   screws a server together, mug in hand, lights coming on
//
// Animations live in global.css (qs-*) and switch off with prefers-reduced-motion.

const COFFEE = '#8b5a2b';
const SWEAT = '#60a5fa';
const EYES = [79, 121];
const EYE = { cy: 41, rx: 12.6, ry: 14.7 };
const LINE = { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' } as const;

/* ------------------------------------------------------------------ Klippy parts */
// Everything below is drawn in Klippy's own coordinates: the logo is 200×200.

function Eyes({ tired = false, look = 0 }: { tired?: boolean; look?: number }) {
  return (
    <>
      {EYES.map((x) =>
        tired ? (
          <g key={x}>
            <ellipse cx={x} cy={EYE.cy} rx={EYE.rx} ry={EYE.ry} fill="#fff" stroke="#111" strokeWidth={2.6} />
            <circle cx={x + 1 + look} cy={47} r={6.4} fill="#111" />
            <path
              d={`M${x - EYE.rx} 42a${EYE.rx} ${EYE.ry} 0 0 1 ${2 * EYE.rx} 0z`}
              fill="#c9c9cf"
              stroke="#111"
              strokeWidth={2.6}
              strokeLinejoin="round"
            />
          </g>
        ) : (
          <g key={x} className="guide-blink">
            <ellipse cx={x} cy={EYE.cy} rx={EYE.rx} ry={EYE.ry} fill="#fff" stroke="#111" strokeWidth={2.6} />
            <circle cx={x + look} cy={43} r={6.4} fill="#111" />
            <circle cx={x + look - 2.4} cy={39} r={2.4} fill="#fff" />
          </g>
        ),
      )}
    </>
  );
}

function Legs({ running = false }: { running?: boolean }) {
  return (
    <g {...LINE} strokeWidth={7}>
      {running ? (
        <>
          <path d="M82 176 64 200l-18-3" />
          <path d="m120 178 18 22 18-6" />
        </>
      ) : (
        <>
          <path d="m84 178-2 26H70" />
          <path d="m116 178 2 26h12" />
        </>
      )}
    </g>
  );
}

function Sweat() {
  return (
    <>
      <path d="M152 8q7 10 0 15-7-5 0-15z" fill={SWEAT} />
      <path d="M163 30q5 7 0 10-5-3 0-10z" fill={SWEAT} />
    </>
  );
}

/** Left arm raised, to-go cup in hand, spilling. */
function RaisedCup() {
  return (
    <>
      <path d="M28 96Q8 82 10 58" {...LINE} strokeWidth={7} />
      <path d="M-2 30h26l-3 28H1z" fill="var(--color-fd-card)" stroke="currentColor" strokeWidth={4} strokeLinejoin="round" />
      <path d="M0 40h22l-1 9H1z" fill="var(--brand-logo-mid)" />
      <path d="M-5 30h32l-2-7H-3z" fill="currentColor" />
      <circle cx={30} cy={16} r={3.2} fill={COFFEE} />
      <circle cx={37} cy={24} r={2.2} fill={COFFEE} />
    </>
  );
}

/** Right arm, mug in hand, steaming. */
function Mug() {
  return (
    <>
      <path d="M172 112q26 12 30-6" {...LINE} strokeWidth={7} />
      <path d="M230 80q14 2 12 12-2 10-12 10" {...LINE} strokeWidth={4} />
      <rect x={196} y={72} width={34} height={38} rx={6} fill="var(--color-fd-card)" stroke="currentColor" strokeWidth={4} />
      <rect x={200} y={76} width={26} height={6} rx={2} fill={COFFEE} />
      <g {...LINE} strokeWidth={3.5} opacity={0.5}>
        <path className="qs-steam" d="M207 64q-6-8 0-16t0-16" />
        <path className="qs-steam qs-steam-late" d="M220 64q-6-8 0-16t0-16" />
      </g>
    </>
  );
}

/** Klippy itself, placed and scaled into a scene; extra parts go in front. */
function Klippy({
  at,
  scale = 0.75,
  lean = 0,
  running = false,
  tired = false,
  look = 0,
  className,
  children,
}: {
  at: [number, number];
  scale?: number;
  lean?: number;
  running?: boolean;
  tired?: boolean;
  look?: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <g className={className}>
      <g transform={`translate(${at[0]} ${at[1]}) scale(${scale}) rotate(${lean} 100 100)`}>
        <Legs running={running} />
        <Logo x={0} y={0} width={200} height={200} />
        <Eyes tired={tired} look={look} />
        {tired && <Sweat />}
        {children}
      </g>
    </g>
  );
}

/* ------------------------------------------------------------------ the server */

const led = (delay: number): CSSProperties => ({ animationDelay: `${delay}s` });

/** A server rack with three units, drawn in scene coordinates. */
function Rack({
  x,
  y,
  w = 80,
  h = 150,
  ledClass = 'qs-led',
  crooked = false,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  ledClass?: string;
  crooked?: boolean;
}) {
  const gap = 8;
  const uh = (h - 20 - 2 * gap) / 3;
  return (
    <g>
      <path d={`M${x + 10} ${y + h}v8M${x + w - 10} ${y + h}v8`} {...LINE} strokeWidth={6} />
      <rect x={x} y={y} width={w} height={h} rx={6} fill="var(--color-fd-card)" stroke="currentColor" strokeWidth={4} />
      {[0, 1, 2].map((i) => {
        const uy = y + 10 + i * (uh + gap);
        const out = crooked && i === 0;
        return (
          <g
            key={i}
            transform={out ? `translate(-16 -4) rotate(-9 ${x + w / 2} ${uy + uh / 2})` : undefined}
          >
            <rect
              x={x + 8}
              y={uy}
              width={w - 16}
              height={uh}
              rx={3}
              fill="var(--color-fd-muted)"
              stroke="currentColor"
              strokeWidth={3}
            />
            <path d={`M${x + 15} ${uy + uh / 2 - 5}h14M${x + 15} ${uy + uh / 2 + 5}h14`} {...LINE} strokeWidth={2.5} opacity={0.5} />
            {[0, 1].map((j) => (
              <circle
                key={j}
                className={out ? undefined : ledClass}
                style={led(i * 0.4 + j * 0.2)}
                cx={x + w - 18 - j * 11}
                cy={uy + uh / 2}
                r={3.6}
                fill={out ? '#9ca3af' : j ? 'var(--brand-logo-light)' : '#22c55e'}
              />
            ))}
          </g>
        );
      })}
    </g>
  );
}

/** A rack far away: small, faded and out of focus, on a stretch of faint ground. */
function FarRack({ x, y, scale = 0.55, ledClass }: { x: number; y: number; scale?: number; ledClass?: string }) {
  const ground = y + 158 * scale;
  return (
    <g>
      <path d={`M${x - 30} ${ground}h${80 * scale + 60}`} {...LINE} strokeWidth={2} opacity={0.2} />
      <g opacity={0.55} style={{ filter: 'blur(1.6px)' }} transform={`translate(${x} ${y}) scale(${scale})`}>
        <Rack x={0} y={0} ledClass={ledClass} />
      </g>
    </g>
  );
}

function SpeedLines({ x = 0, y = 100 }: { x?: number; y?: number }) {
  return (
    <path d={`M${x + 14} ${y}h30M${x + 4} ${y + 30}h36M${x + 16} ${y + 60}h24`} {...LINE} strokeWidth={6} opacity={0.35} />
  );
}

/* ------------------------------------------------------------------ the four scenes */

const Scene = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 300 250" className="size-full overflow-visible text-fd-foreground" aria-hidden>
    {children}
  </svg>
);

/** Join, super quick: dashes toward somebody's server in the distance, coffee held high. */
function JoinQuick() {
  return (
    <Scene>
      <FarRack x={218} y={62} ledClass="qs-led qs-led-fast" />
      <SpeedLines y={110} />
      <Klippy at={[30, 42]} lean={10} running tired look={3} className="qs-rush">
        <RaisedCup />
        <path d="M172 100q20 4 32-12" {...LINE} strokeWidth={7} />
        <circle cx={206} cy={86} r={6.5} fill="currentColor" />
      </Klippy>
    </Scene>
  );
}

/** Join, with a coffee: sips in the foreground, somebody's server far behind, in no hurry. */
function JoinCoffee() {
  return (
    <Scene>
      <FarRack x={30} y={58} />
      <Klippy at={[100, 40]} look={4} className="qs-calm">
        <path d="M30 112q-18 16-14 42" {...LINE} strokeWidth={7} />
        <circle cx={16} cy={156} r={6.5} fill="currentColor" />
        <Mug />
      </Klippy>
    </Scene>
  );
}

/** Bring your own, super quick: screws a crooked server together in a frantic hurry. */
function OwnQuick() {
  return (
    <Scene>
      <Rack x={196} y={85} w={88} h={140} crooked />
      <Klippy at={[22, 50]} lean={8} running tired className="qs-rush">
        <RaisedCup />
        <path d="M172 104q20 4 34 14" {...LINE} strokeWidth={7} />
        <g className="qs-twist qs-twist-fast">
          <path d="M211 118h24" {...LINE} stroke="var(--brand-logo-mid)" strokeWidth={13} />
          <path d="M235 118h22" {...LINE} strokeWidth={4.5} />
        </g>
        <circle cx={209} cy={118} r={6.5} fill="currentColor" />
        {/* whirr */}
        <path className="qs-led qs-led-fast" d="M216 102q8-7 16 0M216 134q8 7 16 0" {...LINE} strokeWidth={3} opacity={0.6} />
      </Klippy>
    </Scene>
  );
}

/** Bring your own, with a coffee: screws a server together, mug in hand, lights coming on. */
function OwnCoffee() {
  return (
    <Scene>
      <Rack x={14} y={85} w={88} h={140} ledClass="qs-led qs-led-boot" />
      <Klippy at={[110, 45]} look={-4} className="qs-calm">
        <path d="M30 118q-14 14-24 20" {...LINE} strokeWidth={7} />
        <g className="qs-twist">
          <path d="M10 138h-22" {...LINE} stroke="var(--brand-logo-mid)" strokeWidth={13} />
          <path d="M-12 138h-22" {...LINE} strokeWidth={4.5} />
        </g>
        <circle cx={8} cy={138} r={6.5} fill="currentColor" />
        <Mug />
      </Klippy>
    </Scene>
  );
}

/* ------------------------------------------------------------------ the cards */

function Card({
  href,
  says,
  title,
  meta,
  art,
  children,
}: {
  href: string;
  says: string;
  title: string;
  meta: string;
  art: ReactNode;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border bg-fd-card p-4 no-underline transition-colors hover:border-fd-primary/60 hover:bg-fd-accent/40"
    >
      {/* fixed height, so a two-line bubble doesn't push its card's title out of line */}
      <div className="mb-1 flex min-h-[3.25rem] items-end justify-center">
        <p className="relative max-w-[16rem] rounded-2xl border bg-fd-background px-3 py-1.5 text-center text-sm text-fd-foreground">
          {says}
          <span
            aria-hidden
            className="absolute -bottom-[7px] left-1/2 size-3 -translate-x-1/2 rotate-45 border-r border-b bg-fd-background"
          />
        </p>
      </div>
      <div className="mx-auto aspect-[300/250] w-full max-w-[15rem]">{art}</div>
      <span className="mt-2 text-lg font-semibold text-fd-foreground group-hover:text-fd-primary">{title}</span>
      <span className="text-xs tracking-wide text-fd-muted-foreground">{meta}</span>
      <span className="mt-2 text-sm text-fd-muted-foreground">{children}</span>
    </Link>
  );
}

const QUICK = 'BOOORING, make it work!';
const COFFEE_BREAK = 'I have a longer coffee break to understand.';

/** The two ways into one of the paths: `join` somebody else's hub, or bring your `own`. */
export function GetStartedPaths({ hub }: { hub: 'join' | 'own' }) {
  return (
    <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
      {hub === 'join' ? (
        <>
          <Card
            href="/docs/get-started/join/super-quick"
            says={QUICK}
            title="Super quick"
            meta="One page · about 10 minutes"
            art={<JoinQuick />}
          >
            Accept an invite (or ask for one), install Orkestrator and run something. No server, no
            Docker.
          </Card>
          <Card
            href="/docs/get-started/basics"
            says={COFFEE_BREAK}
            title="With a coffee"
            meta="The basics, then three short pages"
            art={<JoinCoffee />}
          >
            What a hub, an app and the coordinator are, then organizations and invites, the mesh, and
            what happens to your data on someone else&apos;s hub.
          </Card>
        </>
      ) : (
        <>
          <Card
            href="/docs/get-started/own-hub/super-quick"
            says={QUICK}
            title="Super quick"
            meta="One page · about 5 minutes (depends on your internet)"
            art={<OwnQuick />}
          >
            One command for the hub, one app, one result. No explanations on the way.
          </Card>
          <Card
            href="/docs/get-started/basics"
            says={COFFEE_BREAK}
            title="With a coffee"
            meta="The basics, then five short pages"
            art={<OwnCoffee />}
          >
            What a hub, an app and the coordinator are, then each step of setting up your own with the
            idea behind it.
          </Card>
        </>
      )}
    </div>
  );
}
