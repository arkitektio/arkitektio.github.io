import React from 'react';

/**
 * MeshTunnel
 *
 * Visual aid for the (optional, experimental) Arkitekt Mesh: an outside app
 * (a laptop on the road, a remote compute node) reaching a platform that sits
 * behind NAT on a private lab network. The **Ionscale coordinator** lives on
 * the public internet and only does the *control plane* work (auth +
 * discovery / signalling). The actual workload travels through a direct,
 * encrypted **WireGuard tunnel** (the *data plane*) that punches through the
 * NAT boundary and never round-trips the coordinator.
 *
 * Drawn as a single scalable SVG so it stays crisp at any width.
 */

const INDIGO = '#7d7dea';
const GREEN = '#7FC99B';
const AMBER = '#E8B96B';
const SANS = 'ui-sans-serif, system-ui, -apple-system, sans-serif';

export function MeshTunnel() {
  return (
    <figure className="not-prose my-8">
      <div
        className="rounded-3xl p-4 sm:p-6"
        style={{
          background: 'radial-gradient(120% 120% at 50% 0%, #14141f 0%, #08080c 70%)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div className="mb-3 flex flex-col items-center gap-1 text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-[#7d7dea]">
            Arkitekt Mesh
          </span>
          <span className="text-sm text-white/55">
            Reach your platform from anywhere: control plane vs. data plane
          </span>
        </div>

        <svg viewBox="0 0 880 470" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="wgGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── zones ───────────────────────────────────────────────── */}
          {/* internet zone (left) */}
          <rect x="20" y="140" width="420" height="300" rx="18" fill="rgba(125,125,234,0.04)" />
          <text x="36" y="166" fontFamily={SANS} fontSize="11" fontWeight="700" letterSpacing="2" fill="rgba(255,255,255,0.4)">
            INTERNET · ON THE ROAD
          </text>
          {/* lab zone (right), behind NAT */}
          <rect x="450" y="140" width="410" height="300" rx="18" fill="rgba(127,201,155,0.04)" stroke={GREEN} strokeOpacity="0.45" strokeWidth="1.5" />
          <text x="466" y="166" fontFamily={SANS} fontSize="11" fontWeight="700" letterSpacing="2" fill="rgba(255,255,255,0.5)">
            YOUR LAB · BEHIND NAT
          </text>

          {/* NAT / firewall boundary */}
          <line x1="445" y1="150" x2="445" y2="430" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeDasharray="3 7" />
          <text x="445" y="424" fontFamily={SANS} fontSize="9" fontWeight="700" letterSpacing="2" textAnchor="middle" fill="rgba(255,255,255,0.4)">
            NAT / FIREWALL
          </text>

          {/* ── control plane: Ionscale coordinator ─────────────────── */}
          {/* signalling lines (control) */}
          <line x1="385" y1="116" x2="155" y2="300" stroke="rgba(255,255,255,0.32)" strokeWidth="2" strokeDasharray="2 7" />
          <line x1="495" y1="116" x2="715" y2="300" stroke="rgba(255,255,255,0.32)" strokeWidth="2" strokeDasharray="2 7" />
          <text x="232" y="205" fontFamily={SANS} fontSize="10" fill="rgba(255,255,255,0.38)" transform="rotate(38 232 205)">
            signalling
          </text>
          <text x="640" y="205" fontFamily={SANS} fontSize="10" fill="rgba(255,255,255,0.38)" transform="rotate(-38 640 205)">
            signalling
          </text>

          {/* coordinator box */}
          <rect x="306" y="24" width="268" height="92" rx="16" fill="rgba(125,125,234,0.10)" stroke={INDIGO} strokeWidth="2" />
          {/* mesh glyph */}
          <g transform="translate(340,70)" stroke={INDIGO} fill={INDIGO}>
            <line x1="0" y1="14" x2="-14" y2="-2" strokeWidth="2" />
            <line x1="0" y1="14" x2="14" y2="-2" strokeWidth="2" />
            <line x1="-14" y1="-2" x2="14" y2="-2" strokeWidth="2" />
            <circle cx="0" cy="14" r="5" />
            <circle cx="-14" cy="-2" r="4.5" />
            <circle cx="14" cy="-2" r="4.5" />
          </g>
          <text x="372" y="58" fontFamily={SANS} fontSize="14.5" fontWeight="700" fill="rgba(255,255,255,0.92)">
            Ionscale coordinator
          </text>
          <text x="372" y="78" fontFamily={SANS} fontSize="11" fill="rgba(255,255,255,0.55)">
            control plane · auth + discovery
          </text>
          <text x="440" y="134" fontFamily={SANS} fontSize="10" fontWeight="600" letterSpacing="1" textAnchor="middle" fill={INDIGO} opacity="0.75">
            powered by Ionscale
          </text>

          {/* experimental pill (top-right) */}
          <rect x="720" y="28" width="132" height="30" rx="15" fill="rgba(232,185,107,0.14)" stroke={AMBER} strokeWidth="1.5" />
          <text x="786" y="47" fontFamily={SANS} fontSize="10.5" fontWeight="700" letterSpacing="2" textAnchor="middle" fill={AMBER}>
            EXPERIMENTAL
          </text>

          {/* ── data plane: WireGuard tunnel ────────────────────────── */}
          <line x1="300" y1="348" x2="600" y2="348" stroke={GREEN} strokeWidth="7" strokeLinecap="round" opacity="0.45" filter="url(#wgGlow)" />
          <line x1="300" y1="348" x2="600" y2="348" stroke={GREEN} strokeWidth="4" strokeLinecap="round" strokeDasharray="14 11" />
          <circle cx="300" cy="348" r="5" fill={GREEN} />
          <circle cx="600" cy="348" r="5" fill={GREEN} />
          {/* encrypted padlock at the NAT crossing */}
          <circle cx="445" cy="348" r="17" fill="#0d0d15" stroke={GREEN} strokeWidth="2" />
          <g transform="translate(445,348)" stroke={GREEN} fill="none" strokeWidth="2">
            <rect x="-7" y="-1" width="14" height="11" rx="2" fill={GREEN} stroke="none" />
            <path d="M-4 -1 V-5 a4 4 0 0 1 8 0 V-1" />
          </g>
          <text x="450" y="322" fontFamily={SANS} fontSize="13" fontWeight="700" textAnchor="middle" fill={GREEN}>
            WireGuard tunnel
          </text>
          <text x="450" y="378" fontFamily={SANS} fontSize="11" textAnchor="middle" fill="rgba(255,255,255,0.55)">
            direct peer-to-peer · encrypted
          </text>

          {/* ── outside app node ────────────────────────────────────── */}
          <rect x="70" y="300" width="230" height="96" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
          <g transform="translate(98,330)" stroke="rgba(255,255,255,0.7)" fill="none" strokeWidth="2">
            <rect x="0" y="0" width="34" height="22" rx="3" />
            <rect x="-5" y="25" width="44" height="4" rx="2" fill="rgba(255,255,255,0.7)" stroke="none" />
          </g>
          <text x="150" y="340" fontFamily={SANS} fontSize="13.5" fontWeight="700" fill="rgba(255,255,255,0.92)">
            Outside app
          </text>
          <text x="150" y="360" fontFamily={SANS} fontSize="11" fill="rgba(255,255,255,0.55)">
            laptop · remote node
          </text>

          {/* ── platform node ───────────────────────────────────────── */}
          <rect x="600" y="300" width="230" height="96" rx="14" fill="rgba(127,201,155,0.06)" stroke={GREEN} strokeWidth="2" />
          <g transform="translate(628,328)" stroke={GREEN} strokeWidth="2">
            <rect x="0" y="0" width="30" height="40" rx="4" fill="none" />
            <line x1="6" y1="11" x2="24" y2="11" />
            <line x1="6" y1="21" x2="24" y2="21" />
            <circle cx="9" cy="31" r="2" fill={GREEN} stroke="none" />
          </g>
          <text x="676" y="340" fontFamily={SANS} fontSize="13.5" fontWeight="700" fill="rgba(255,255,255,0.92)">
            Arkitekt platform
          </text>
          <text x="676" y="360" fontFamily={SANS} fontSize="11" fill="rgba(255,255,255,0.55)">
            your central server
          </text>
        </svg>

        {/* legend */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-white/50">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-0 w-6 border-t-[3px] border-dashed" style={{ borderColor: GREEN }} />
            WireGuard tunnel: your data, peer-to-peer
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-0 w-6 border-t-2 border-dotted border-white/50" />
            Ionscale control: auth &amp; discovery only
          </span>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-fd-muted-foreground">
        <strong>Optional &amp; experimental.</strong> Outside apps reach a platform behind NAT over
        an encrypted <em>WireGuard</em> tunnel, brokered by an <em>Ionscale</em> coordinator that
        handles only auth &amp; discovery. Your workload data flows directly peer-to-peer and never
        passes through it.
      </figcaption>
    </figure>
  );
}
