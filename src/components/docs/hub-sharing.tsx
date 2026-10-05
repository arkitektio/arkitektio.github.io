import type { ReactNode } from 'react';

/**
 * HubSharing
 *
 * The hub in one picture: you upload a file through Orkestrator, the hub keeps
 * it, and a colleague opens the same file from somewhere else. Above them the
 * account service, which only says who is who and never holds the data.
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

function FileIcon({ x, y, color = PRIMARY }: { x: number; y: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0h13l7 7v19H0z" fill={CARD} stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 0v7h7" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </g>
  );
}

function Person({ x, title, app, action }: { x: number; title: string; app: string; action: string }) {
  return (
    <g>
      <rect x={x} y="176" width="200" height="128" rx="14" fill={CARD} stroke={BORDER} strokeWidth="1.5" />
      <circle cx={x + 100} cy="176" r="18" fill={CARD} stroke={BORDER} strokeWidth="1.5" />
      <circle cx={x + 100} cy="171" r="5.5" fill={MUTED} />
      <path d={`M${x + 89} 187a11 9 0 0 1 22 0`} fill={MUTED} />
      <Label x={x + 100} y={222} size={14} weight={700} fill={TEXT}>
        {title}
      </Label>
      <Label x={x + 100} y={242}>{app}</Label>
      <FileIcon x={x + 90} y={258} />
      <Label x={x + 100} y={322} size={11.5}>
        {action}
      </Label>
    </g>
  );
}

function Arrow({ x1, x2, label }: { x1: number; x2: number; label: string }) {
  return (
    <g>
      <line x1={x1} y1="240" x2={x2 - 8} y2="240" stroke={PRIMARY} strokeWidth="2" markerEnd="url(#hubArrow)" />
      <Label x={(x1 + x2) / 2} y={228} size={11.5} weight={600} fill={PRIMARY}>
        {label}
      </Label>
    </g>
  );
}

export function HubSharing() {
  return (
    <figure className="not-prose my-6 rounded-2xl border bg-fd-card/40 p-3 sm:p-5">
      <svg viewBox="0 0 760 336" role="img" aria-labelledby="hub-sharing-title" className="h-auto w-full">
        <title id="hub-sharing-title">
          You upload a file to the hub through Orkestrator, and a colleague opens the same file from
          another computer. An account service tells the hub who each of you is; it never holds the
          data.
        </title>
        <defs>
          <marker id="hubArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0l10 5-10 5z" fill={PRIMARY} />
          </marker>
        </defs>

        {/* who is who: the account service, off to the top */}
        <rect x="250" y="12" width="260" height="58" rx="29" fill={CARD} stroke={BORDER} strokeWidth="1.5" strokeDasharray="5 4" />
        <Label x={380} y={37} size={13} weight={700} fill={TEXT}>
          Your account
        </Label>
        <Label x={380} y={55} size={11.5}>
          knows who you are · holds no data
        </Label>
        <path d="M262 58 L 138 150" fill="none" stroke={MUTED} strokeWidth="1.25" strokeDasharray="4 4" />
        <path d="M498 58 L 622 150" fill="none" stroke={MUTED} strokeWidth="1.25" strokeDasharray="4 4" />
        <path d="M380 70 L 380 150" fill="none" stroke={MUTED} strokeWidth="1.25" strokeDasharray="4 4" />
        <Label x={172} y={98} size={11}>
          sign in
        </Label>
        <Label x={588} y={98} size={11}>
          sign in
        </Label>
        <Label x={424} y={116} size={11}>
          who is this?
        </Label>

        <Person x={20} title="You" app="in Orkestrator" action="at the microscope" />
        <Person x={540} title="A colleague" app="in Orkestrator, napari or Fiji" action="in another building" />

        {/* the hub, where the data lives */}
        <rect x="290" y="160" width="180" height="160" rx="20" fill={CARD} stroke={PRIMARY} strokeWidth="2.5" />
        <Label x={380} y={196} size={16} weight={700} fill={TEXT}>
          The hub
        </Label>
        <Label x={380} y={216}>stores your data</Label>
        <FileIcon x={340} y={240} />
        <FileIcon x={370} y={240} />
        <FileIcon x={400} y={240} />
        <Label x={380} y={296} size={11.5}>
          on a computer your lab runs
        </Label>

        <Arrow x1={222} x2={290} label="upload" />
        <Arrow x1={470} x2={540} label="open" />
      </svg>
    </figure>
  );
}
