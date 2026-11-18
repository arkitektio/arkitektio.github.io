'use client';

/* The acknowledgements slide of the smart microscopy deck: one big map of
   Europe with everyone on it. A person is a face, a team is a picture, and
   each is tied to the city it works in.

   The map is a low-poly sketch, not cartography: a few dozen coastline points
   in longitude and latitude, put through the same Mercator projection as the
   pins, so the pins are where the cities are. */

import { useState } from 'react';
import { cn } from '@/lib/cn';
import { team } from '@/lib/team';
import { BORDER, MUTED, PRIMARY } from './smart-microscopy-anim';

const MEDIA = '/presentations/smart-microscopy';

/* --- who, and where --------------------------------------------------------- */

const CITIES = {
  bordeaux: { name: 'Bordeaux', lon: -0.57, lat: 44.84 },
  frankfurt: { name: 'Frankfurt', lon: 8.68, lat: 50.11 },
  marburg: { name: 'Marburg', lon: 8.77, lat: 50.81 },
  jena: { name: 'Jena', lon: 11.59, lat: 50.93 },
  berlin: { name: 'Berlin', lon: 13.4, lat: 52.52 },
  linz: { name: 'Linz', lon: 14.29, lat: 48.31 },
  helsinki: { name: 'Helsinki', lon: 24.94, lat: 60.17 },
} as const;

type Pin = {
  name: string;
  city: keyof typeof CITIES;
  /** Under the name: who is in a team, in place of the city. */
  who?: string;
  /** A whole team, not one person: a picture card, not a round face. */
  group?: boolean;
  /** A picture: a URL, or a file under `public/presentations/smart-microscopy/`
      (team pictures and portraits go in `people/`). A face shows initials, a
      team its file name, until the picture loads. */
  photo?: string;
  /** Where it sits on the map, in map pixels (its centre): the cities are too
      close together for everything to sit on its pin, so each is pulled out
      to a free spot and tied back to its city with a line. */
  at: [number, number];
};

const first = (name: string) => name.split(' ')[0];

const PINS: Pin[] = [
  { name: 'The IINS team', city: 'bordeaux', group: true, photo: `${MEDIA}/people/iins.jpg`, at: [300, 440] },
  { name: 'openUC2', city: 'jena', who: `${first(team.diederich.name)} · Ethan · Stefan`, group: true, photo: `${MEDIA}/people/openuc2.jpg`, at: [530, 170] },
  { name: 'The Linz team', city: 'linz', group: true, photo: `${MEDIA}/group.jpg`, at: [875, 440] },
  { name: team.wilhelmi.name, city: 'frankfurt', photo: team.wilhelmi.avatar, at: [555, 398] },
  { name: team.golden.name, city: 'marburg', photo: `${MEDIA}/people/artemiy.jpg`, at: [448, 305] },
  { name: team.schmidt.name, city: 'berlin', photo: team.schmidt.avatar, at: [802, 232] },
  { name: team.niemeyer.name, city: 'helsinki', photo: team.niemeyer.avatar, at: [972, 98] },
];

/* --- the map ---------------------------------------------------------------- */

const LON0 = -30.125;
const LAT1 = 62;
/** Pixels per degree of longitude. */
const SCALE = 16;

const merc = (lat: number) => (Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) * 180) / Math.PI;
const round = (v: number) => Math.round(v * 10) / 10;
const project = (lon: number, lat: number): [number, number] => [round((lon - LON0) * SCALE), round((merc(LAT1) - merc(lat)) * SCALE)];

const MAP_W = 1180;
const MAP_H = 540;

/** Coastlines, [longitude, latitude], clockwise or not: they are only filled. */
const LAND: [number, number][][] = [
  // the mainland, from Portugal round the Mediterranean, up the Black Sea, back along the Baltic and the Atlantic
  [
    [-9, 37], [-5.5, 36], [-2, 36.7], [-0.3, 39.5], [2.2, 41.4], [3.2, 42.4], [5.4, 43.3], [7.3, 43.7], [8.9, 44.4], [10.3, 43.5],
    [12.3, 41.8], [14.2, 40.8], [15.7, 40], [15.7, 38], [16.6, 39], [17, 40.5], [18.5, 40.1], [17, 41], [16, 41.9], [14.2, 42.4], [13.5, 43.6],
    [12.3, 44.3], [12.3, 45.4], [13.8, 45.6], [14.9, 44.8], [16.4, 43.5], [18.1, 42.6], [19.4, 41.3], [20.7, 38.5], [21.6, 36.9], [22.6, 36.5],
    [23.2, 37.6], [24, 37.7], [22.9, 39.4], [22.9, 40.6], [24, 40.2], [26, 40.9], [29, 41.1], [28, 42], [27.5, 42.5], [28.7, 44.2],
    [30.7, 46.5], [33, 46.1], [33.5, 44.5], [36.5, 45.2], [37.5, 46.8], [39.2, 47.1], [38, 46], [37, 45.3], [38.5, 44.3], [39.7, 43.6], [41.6, 41.6],
    [50, 41.6], [50, 60.2], [30.3, 59.9], [28, 59.5], [24.7, 59.4], [23.5, 58.2], [24.3, 57.2], [22.6, 57.7], [21, 56.8],
    [21.1, 55.7], [19.9, 54.5], [18.6, 54.5], [16.3, 54.4], [14.2, 54], [12.1, 54.1], [10.9, 54], [9.9, 54.8], [10.2, 56.5], [10.6, 57.7],
    [8.1, 57], [8.2, 55.5], [8.8, 54], [8.5, 53.5], [7, 53.5], [4.7, 53], [4, 52], [3.2, 51.3], [1.8, 50.9], [0.1, 49.5], [-1.2, 49.3],
    [-1.6, 49.7], [-1.6, 48.7], [-4.6, 48.5], [-4.3, 47.8], [-2.2, 47.3], [-1.2, 46.2], [-1.2, 44.6], [-1.6, 43.4], [-3.8, 43.5],
    [-8.4, 43.5], [-9.3, 42.9], [-8.7, 41.1], [-9.4, 38.7],
  ],
  // Scandinavia and Finland, round the Gulf of Bothnia
  [
    [25, 60.2], [23, 59.8], [21.5, 60.6], [21.4, 62.5], [22.5, 63.6], [25.4, 65], [24.1, 65.8], [22.2, 65.6], [21, 64.6], [20.3, 63.7],
    [17.3, 62.4], [17.2, 60.7], [18.7, 59.8], [16.6, 58.6], [16.4, 56.7], [15.6, 56.2], [14.2, 55.4], [13, 55.5], [12.6, 56.4], [11.9, 57.7],
    [11.2, 59.1], [10.7, 59.9], [9.6, 59], [8, 58.1], [6.6, 58.1], [5.6, 59], [5.2, 60.4], [5, 61.9], [6.2, 62.6], [8.6, 63.4], [10.6, 64.4],
    [12.5, 65.8], [13.6, 67.5], [15, 69], [50, 69], [50, 60.6], [30, 60.3], [27.5, 60.5],
  ],
  // Great Britain
  [
    [-5.7, 50.1], [-3.4, 50.4], [-1.8, 50.7], [1.4, 51.1], [0.7, 51.5], [1.7, 52.7], [0.3, 53], [-0.1, 53.6], [-1.3, 54.9], [-2.1, 56],
    [-2.8, 56.4], [-2, 57.7], [-3.9, 57.7], [-3.1, 58.6], [-5, 58.6], [-6.2, 57.4], [-5.6, 56.3], [-4.8, 55.6], [-5, 54.8], [-3.4, 54.9],
    [-2.9, 53.8], [-3.2, 53.4], [-4.6, 53.3], [-4.1, 52.4], [-5.2, 51.8], [-3.1, 51.5], [-4.3, 51.1],
  ],
  // Ireland
  [[-6.3, 52.2], [-6.1, 53.4], [-5.6, 54.6], [-7.3, 55.3], [-8.6, 54.4], [-10, 54.2], [-9.6, 53.3], [-10.3, 52.1], [-9.5, 51.5], [-8, 51.8]],
  // Zealand, Corsica, Sardinia, Sicily
  [[11.2, 55.3], [12.6, 55.5], [12.4, 56.1], [11.3, 55.9]],
  [[8.6, 41.9], [9.3, 41.5], [9.5, 43], [8.7, 42.6]],
  [[8.3, 39.1], [9.6, 39.2], [9.7, 41], [8.3, 40.9]],
  [[12.5, 38], [15.6, 38.2], [15.1, 36.7], [12.6, 37.6]],
  // North Africa and Anatolia, along the bottom edge
  [[-11, 33], [-6, 35.8], [-5.3, 35.9], [-2, 35.2], [1, 36.5], [3, 36.9], [8, 37], [10.3, 37.3], [11.1, 36.9], [10.5, 35.2], [11, 33]],
  [[26.3, 39.5], [27.3, 37], [28.5, 36.7], [30.6, 36.8], [33, 36.1], [36, 36.7], [36, 35], [50, 35], [50, 41.5], [41.6, 41.5], [38, 41], [35, 42], [33, 42], [31.5, 41.2], [29.5, 41], [27, 40.4]],
];

const landPath = LAND.map((ring) => `M${ring.map(([lon, lat]) => project(lon, lat).join(' ')).join(' L')} Z`).join(' ');

/* --- faces ------------------------------------------------------------------ */

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

/** Whether an image has loaded, and the props that find out. An image in the
    server's HTML can be done before React attaches `onLoad`, hence the ref. */
function useImage() {
  const [ready, setReady] = useState(false);
  const props = {
    ref: (el: HTMLImageElement | null) => {
      if (el?.complete && el.naturalWidth > 0) setReady(true);
    },
    onLoad: () => setReady(true),
  };
  return [ready, props] as const;
}

/** A face, or initials until there is a picture of it. */
function Portrait({ name, photo, size }: { name: string; photo?: string; size: number }) {
  const [ready, setReady] = useImage();
  return (
    <span
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-fd-card font-bold text-fd-primary shadow-lg ring-[3px] ring-fd-primary"
      style={{ width: size, height: size, fontSize: size * 0.34 }}
    >
      {initials(name.replace(/^The /, ''))}
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt=""
          {...setReady}
          className={cn('absolute inset-0 size-full object-cover', !ready && 'invisible')}
        />
      ) : null}
    </span>
  );
}

/** A team's picture, with its name on it. Until the file exists the card
    names the file, like the deck's clip slots. */
function TeamPicture({ pin, width, height }: { pin: Pin; width: number; height: number }) {
  const [ready, image] = useImage();
  return (
    <div className="relative overflow-hidden rounded-2xl bg-fd-card shadow-xl ring-[3px] ring-fd-primary" style={{ width, height }}>
      <div className="absolute inset-x-0 top-0 flex h-[62%] flex-col items-center justify-center px-3 text-center">
        <span className="text-[12.5px] font-semibold text-fd-muted-foreground">picture goes here</span>
        <span className="break-all font-mono text-[10px] text-fd-muted-foreground">{pin.photo}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={pin.photo} alt="" {...image} className={cn('absolute inset-0 size-full object-cover', !ready && 'invisible')} />
      <div className="absolute inset-x-0 bottom-0 flex flex-col bg-gradient-to-t from-black/85 via-black/60 to-transparent px-3 pb-2 pt-6 leading-tight text-white">
        <span className="text-[16px] font-bold tracking-[-0.01em]">{pin.name}</span>
        <span className="text-[12px] opacity-90">{pin.who ?? CITIES[pin.city].name}</span>
      </div>
    </div>
  );
}

/* --- the slide -------------------------------------------------------------- */

/** The map is drawn at full size and shown a little smaller, to leave the
    bottom of the slide to the logos. */
const SHRINK = 0.88;
const FACE = 60;
const TEAM = { w: 224, h: 124 };

/** The acknowledgements: everyone, on one map. */
export function ThanksFigure() {
  return (
    <div className="mx-auto flex flex-col items-center gap-3.5">
    <div className="relative" style={{ width: MAP_W * SHRINK, height: MAP_H * SHRINK }}>
    <div className="absolute left-0 top-0 origin-top-left" style={{ width: MAP_W, height: MAP_H, transform: `scale(${SHRINK})` }}>
      <svg width={MAP_W} height={MAP_H} viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="absolute inset-0" aria-hidden>
        <defs>
          <clipPath id="thanks-map">
            <rect x={0} y={0} width={MAP_W} height={MAP_H} rx={26} />
          </clipPath>
        </defs>
        <g clipPath="url(#thanks-map)">
          <rect width={MAP_W} height={MAP_H} fill={PRIMARY} fillOpacity={0.06} />
          <path d={landPath} fill={MUTED} fillOpacity={0.3} stroke={MUTED} strokeOpacity={0.55} strokeWidth={1.2} strokeLinejoin="round" />
        </g>
        <rect width={MAP_W} height={MAP_H} rx={26} fill="none" stroke={BORDER} strokeWidth={1.5} />
        {/* each city, tied to who is there */}
        {PINS.map((p) => {
          const [x, y] = project(CITIES[p.city].lon, CITIES[p.city].lat);
          return <path key={p.name} d={`M${x} ${y} L${p.at[0]} ${p.at[1]}`} stroke={PRIMARY} strokeWidth={2.6} strokeLinecap="round" />;
        })}
        {Object.entries(CITIES).map(([key, c]) => {
          const [x, y] = project(c.lon, c.lat);
          return (
            <g key={key}>
              <circle cx={x} cy={y} r={12} fill={PRIMARY} fillOpacity={0.25} />
              <circle cx={x} cy={y} r={6} fill={PRIMARY} stroke="#fff" strokeWidth={2} />
            </g>
          );
        })}
      </svg>

      {/* out on the Atlantic: what the slide is for */}
      <div className="absolute left-7 top-6 flex w-[350px] flex-col gap-3">
        <p className="text-[46px] font-bold leading-none tracking-[-0.03em]">Thank you.</p>
        <p className="text-[18px] leading-snug text-fd-muted-foreground">
          To the teams at <b className="text-fd-foreground">IINS</b> and in <b className="text-fd-foreground">Linz</b>, to <b className="text-fd-foreground">openUC2</b>, and to everyone who builds Arkitekt.
        </p>
      </div>

      {PINS.map((p) =>
        p.group ? (
          <div key={p.name} className="absolute" style={{ left: p.at[0] - TEAM.w / 2, top: p.at[1] - TEAM.h / 2 }}>
            <TeamPicture pin={p} width={TEAM.w} height={TEAM.h} />
          </div>
        ) : (
          <div key={p.name} className="absolute flex w-[150px] flex-col items-center gap-1" style={{ left: p.at[0] - 75, top: p.at[1] - FACE / 2 }}>
            <Portrait name={p.name} photo={p.photo} size={FACE} />
            <span className="flex flex-col items-center rounded-lg bg-fd-background/85 px-2 py-0.5 text-center leading-tight shadow-sm">
              <span className="text-[14px] font-semibold">{p.name}</span>
              <span className="font-mono text-[10.5px] text-fd-muted-foreground">{CITIES[p.city].name}</span>
            </span>
          </div>
        ),
      )}
    </div>
    </div>

      {/* the institutions, and the money */}
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11.5px] font-bold uppercase tracking-[0.16em] text-fd-muted-foreground">Supported by</span>
        {/* on white, so the logos keep their own colours in light and dark mode */}
        <span className="flex h-[46px] items-center rounded-xl bg-white px-4 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${MEDIA}/logos/u-bordeaux.png`} alt="Université de Bordeaux" className="h-[30px] w-auto" />
        </span>
        <span className="flex h-[46px] items-center rounded-xl bg-white px-4 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${MEDIA}/logos/jku.svg`} alt="Johannes Kepler University Linz" className="h-[32px] w-auto" />
        </span>
        {/* the Impetus call has no logo of its own: its name, set like one */}
        <span className="flex h-[46px] flex-col justify-center rounded-xl bg-white px-4 leading-none text-black shadow-sm">
          <span className="text-[17px] font-black tracking-[-0.01em]">MED Call Impetus</span>
          <span className="mt-0.5 text-[10.5px] font-medium text-black/60">JKU Faculty of Medicine</span>
        </span>
      </div>
    </div>
  );
}
