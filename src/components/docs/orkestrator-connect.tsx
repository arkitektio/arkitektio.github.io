import type { ReactNode } from 'react';

/**
 * OrkestratorConnect
 *
 * Orkestrator connecting to the hub, in one small picture: the app on your
 * computer signs in with your account first, then talks to the hub directly.
 * The account only says who you are; the data goes straight between the two.
 * Drawn with the theme's colors, so it follows light and dark mode.
 */

const PRIMARY = 'var(--color-fd-primary)';
const BORDER = 'var(--color-fd-border)';
const CARD = 'var(--color-fd-card)';
const TEXT = 'var(--color-fd-foreground)';
const MUTED = 'var(--color-fd-muted-foreground)';
const SANS = 'ui-sans-serif, system-ui, -apple-system, sans-serif';

function Label({
  x,
  y,
  size = 12,
  weight = 400,
  fill = MUTED,
  children,
}: {
  x: number;
  y: number;
  size?: number;
  weight?: number;
  fill?: string;
  children: ReactNode;
}) {
  return (
    <text x={x} y={y} fontFamily={SANS} fontSize={size} fontWeight={weight} textAnchor="middle" fill={fill}>
      {children}
    </text>
  );
}

function Step({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="9" fill={PRIMARY} />
      <text x={x} y={y + 4} fontFamily={SANS} fontSize="11" fontWeight="700" textAnchor="middle" fill={CARD}>
        {n}
      </text>
    </g>
  );
}

export function OrkestratorConnect() {
  return (
    <figure className="not-prose mx-auto my-6 max-w-xl rounded-2xl border bg-fd-card/40 p-3 sm:p-5">
      <svg viewBox="0 0 640 236" role="img" aria-labelledby="orkestrator-connect-title" className="h-auto w-full">
        <title id="orkestrator-connect-title">
          Orkestrator, on your computer, first signs in with your account and then connects to the
          hub directly. The hub asks the account service who you are; your data only travels between
          Orkestrator and the hub.
        </title>
        <defs>
          <marker id="orkConnectArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0l10 5-10 5z" fill={PRIMARY} />
          </marker>
        </defs>

        {/* who is who: the account service, off to the top */}
        <rect x="200" y="12" width="240" height="54" rx="27" fill={CARD} stroke={BORDER} strokeWidth="1.5" strokeDasharray="5 4" />
        <Label x={320} y={35} size={13} weight={700} fill={TEXT}>
          Your account
        </Label>
        <Label x={320} y={53} size={11.5}>
          knows who you are · holds no data
        </Label>
        <path d="M210 54 L 120 118" fill="none" stroke={MUTED} strokeWidth="1.25" strokeDasharray="4 4" />
        <path d="M430 54 L 520 118" fill="none" stroke={MUTED} strokeWidth="1.25" strokeDasharray="4 4" />
        <Step x={92} y={82} n={1} />
        <Label x={126} y={86} size={11.5}>
          sign in
        </Label>
        <Label x={534} y={86} size={11.5}>
          who is this?
        </Label>

        {/* the app, on your computer */}
        <rect x="20" y="124" width="200" height="92" rx="14" fill={CARD} stroke={BORDER} strokeWidth="1.5" />
        <Label x={120} y={160} size={15} weight={700} fill={TEXT}>
          Orkestrator
        </Label>
        <Label x={120} y={180}>the desktop app</Label>
        <Label x={120} y={198} size={11.5}>
          on your computer
        </Label>

        {/* the hub, where the data lives */}
        <rect x="420" y="124" width="200" height="92" rx="14" fill={CARD} stroke={PRIMARY} strokeWidth="2.5" />
        <Label x={520} y={160} size={15} weight={700} fill={TEXT}>
          The hub
        </Label>
        <Label x={520} y={180}>stores your data</Label>
        <Label x={520} y={198} size={11.5}>
          on a computer your lab runs
        </Label>

        <line x1="222" y1="170" x2="410" y2="170" stroke={PRIMARY} strokeWidth="2" markerStart="url(#orkConnectArrow)" markerEnd="url(#orkConnectArrow)" />
        <Step x={284} y={154} n={2} />
        <Label x={328} y={158} size={11.5} weight={600} fill={PRIMARY}>
          connect
        </Label>
        <Label x={320} y={190} size={11}>
          your data, directly
        </Label>
      </svg>
    </figure>
  );
}
