'use client';

/* Animated figures for the opening of the smart microscopy deck: the cover,
   and Kim, the persona from the Lisbon hackathon talk. Her organoids die
   before she can treat them; she knows the rule that would save them, but it
   lives in an ImageJ macro, and the loop that would act on it spans four
   computers.

   Every figure is plain SVG (or HTML) driven by the kit in
   `smart-microscopy-anim.tsx`: builds replay each time the slide is shown,
   flows loop. Sizes are literal pixels on the 1280x720 canvas. */

import { Fragment } from '@revealjs/react';
import { Anton, UnifrakturMaguntia } from 'next/font/google';
import { cn } from '@/lib/cn';
import type { CSSProperties, ReactNode } from 'react';
import {
  Arrowheads,
  BORDER,
  Box,
  FG,
  LoopStyles,
  MUTED,
  PRIMARY,
  Path,
  SURFACE,
  T,
  Token,
  WARN,
  delay,
  useUid,
} from './smart-microscopy-anim';

/* Trig, rounded. Node (server render) and the browser disagree on the last
   bit of Math.sin/cos, which shows up as a hydration mismatch on every
   generated coordinate; rounding here makes everything downstream identical. */
const cos = (a: number) => Math.round(Math.cos(a) * 1e9) / 1e9;
const sin = (a: number) => Math.round(Math.sin(a) * 1e9) / 1e9;

/* --- Kim herself ------------------------------------------------------------ */

/** Kim's voice on a slide: an initial and a speech bubble, arriving after the
    rest of the slide has built. */
export function KimSays({ children, at = 1.2 }: { children: ReactNode; at?: number }) {
  return (
    <div className="sm-in flex items-center gap-4" style={delay(at)}>
      <span
        aria-hidden
        className="flex size-[48px] shrink-0 items-center justify-center rounded-full bg-fd-primary/15 text-[22px] font-bold text-fd-primary ring-1 ring-fd-primary/40"
      >
        K
      </span>
      <p className="rounded-2xl rounded-bl-sm border border-fd-border bg-fd-card px-5 py-3 text-[20px] italic leading-snug">
        <span className="sr-only">Kim: </span>“{children}”
      </p>
    </div>
  );
}

/* --- asking for help -------------------------------------------------------- */

/** Claude's reply, as runs of plain and bold text. */
const CHAT_REPLY: [string, boolean][][] = [
  [['Absolutely!', true], [' This is a fantastic idea, and honestly very straightforward. 🚀', false]],
  [
    ['Just use ', false],
    ['HTTP APIs.', true],
    [' Put a small server on each computer: the microscope posts every stack to the GPU server, the GPU server posts the masks to your laptop, and your laptop tells the ESP32 to pump. That’s it, ', false],
    ['really', true],
    ['.', false],
  ],
  [['I can write the whole thing for you in a few minutes. ', false], ['Your organoids are safe now.', true]],
];

/** Kim asks for help, and gets it: a chat that builds itself on arrival.
    Her prompt, a moment of typing dots, then an answer that streams in word
    by word without a single doubt. No code yet: the point is the tone. */
export function ClaudeChatFigure() {
  const u = useUid();
  const perWord = 0.07;
  const start = 2.6;
  // every word gets its own arrival time, paragraph after paragraph
  const paragraphs: { words: { text: string; bold: boolean; at: number }[] }[] = [];
  let n = 0;
  for (const runs of CHAT_REPLY) {
    const words: { text: string; bold: boolean; at: number }[] = [];
    for (const [text, bold] of runs) {
      for (const w of text.split(/(?<=\s)/)) words.push({ text: w, bold, at: start + n++ * perWord });
    }
    n += 5; // a breath between paragraphs
    paragraphs.push({ words });
  }
  const done = start + n * perWord;
  const css = `
.${u}-dots { opacity: 0; }
section.present .${u}-dots { animation: ${u}-dots 1.3s linear var(--d) both; }
@keyframes ${u}-dots { 0% { opacity: 0; } 12%, 88% { opacity: 1; } 100% { opacity: 0; } }
.${u}-dot { animation: ${u}-dot 0.9s ease-in-out infinite; }
@keyframes ${u}-dot { 0%, 100% { transform: translateY(0); opacity: 0.4; } 40% { transform: translateY(-4px); opacity: 1; } }
section.present .${u}-w { animation: sm-fade 0.25s ease-out var(--d) both; }
@media (prefers-reduced-motion: reduce) { section.present .${u}-dots, section.present .${u}-w { animation: none; } }
`;
  const claude = (
    <span aria-hidden className="flex size-[44px] shrink-0 items-center justify-center rounded-xl bg-[#d97757] text-white">
      <svg viewBox="-12 -12 24 24" width={26} height={26}>
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x={-1.6} y={-10} width={3.2} height={9} rx={1.6} fill="currentColor" transform={`rotate(${i * 45})`} />
        ))}
      </svg>
    </span>
  );
  const kim = (
    <span aria-hidden className="flex size-[44px] shrink-0 items-center justify-center rounded-full bg-fd-primary/15 text-[20px] font-bold text-fd-primary ring-1 ring-fd-primary/40">
      K
    </span>
  );
  const badge =
    'sm-pop inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-[16px] font-semibold text-emerald-700 dark:text-emerald-300';
  return (
    <div className="sm-fade mx-auto flex w-[1000px] flex-col gap-5 rounded-2xl border border-fd-border bg-fd-card/70 px-7 py-6" style={delay(0.1)}>
      <LoopStyles css={css} />

      {/* Kim */}
      <div className="sm-in flex items-start justify-end gap-3" style={delay(0.5)}>
        <p className="max-w-[720px] rounded-2xl rounded-tr-sm bg-fd-primary/12 px-5 py-3 text-[20px] leading-snug">
          <span className="sr-only">Kim: </span>I need to run a distributed image analysis workflow on 4 computers and parallelize some tasks, can you help?
        </p>
        {kim}
      </div>

      {/* Claude */}
      <div className="relative flex items-start gap-3">
        {claude}
        <span className={`${u}-dots absolute left-[58px] top-[14px] flex gap-1.5`} style={delay(1.3)} aria-hidden>
          {[0, 1, 2].map((i) => (
            <span key={i} className={`${u}-dot size-[10px] rounded-full bg-fd-muted-foreground`} style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-3 pt-2 text-[21px] leading-snug">
          <span className="sr-only">Claude: </span>
          {paragraphs.map(({ words }, p) => (
            <p key={p}>
              {words.map(({ text, bold, at }, k) => (
                <span key={k} className={`${u}-w${bold ? ' font-bold' : ''}`} style={delay(at)}>
                  {text}
                </span>
              ))}
            </p>
          ))}
          <div className="flex flex-wrap items-center gap-2">
            {['simple', 'scalable', 'fault-tolerant', 'production-ready'].map((b, i) => (
              <span key={b} className={badge} style={delay(done + 0.1 + i * 0.25)}>
                ✓ {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Kim, delighted */}
      <div className="sm-pop flex items-center justify-end gap-3" style={delay(done + 1.5)}>
        <p className="rounded-2xl rounded-tr-sm bg-fd-primary/12 px-5 py-2.5 text-[20px] leading-snug">omg thank you!!!</p>
        {kim}
      </div>
    </div>
  );
}

/* --- the nightmare begins --------------------------------------------------- */

type Night = {
  /** The file in the dream cloud, before and after. */
  file: [string, string];
  /** Each line of the dream, and what the night turns it into ('' = none). */
  lines: [string, string][];
  /** Claude's helpful suggestion, which sets it all off. */
  tip: string;
  /** Errors that pop up round the cloud. */
  errors: string[];
  /** Kim's thoughts, in the small hours. */
  worries: string[];
  /** The clock: three times, and the night. */
  clock: [string, string, string];
  night: string;
  /** How the night ends: Kim's line, and whether it ends in the stamp. */
  ending: string;
  stamp?: boolean;
};

/** Three nights, after the Lisbon talk's "During the night" slides: the
    communication burden, timely orchestration, and the absence of data
    management. */
export const NIGHTS: Record<'communication' | 'threads' | 'data' | 'repro', Night> = {
  communication: {
    file: ['kim_organoid.ijm · it just works', 'kim_pipeline.py · 4 machines'],
    lines: [
      ['run("Z Project...", "projection=[Max Intensity]");', 'stack = requests.get("http://10.0.0.7:5000/stack")'],
      ['setAutoThreshold("Otsu dark");', 'body = json.dumps(stack.tolist())  # 2 GB of JSON?'],
      ['run("Convert to Mask");', 'masks = post("http://10.0.0.12:8000/stardist", body)'],
      ['run("Analyze Particles...", "size=20-Infinity");', 'core = post("http://10.0.0.31:8080/decide", masks)'],
      ['round = getResult("Round", 0);  // the core', 'requests.post("http://10.0.0.44/pump", timeout=3)'],
      ['if (round < 0.5) print("needs growth factor");', '# TODO: what if the IPs change??'],
    ],
    tip: 'Give every device an HTTP API and send JSON. Easy!',
    errors: [
      'ConnectionRefusedError: 10.0.0.12:8000',
      'MemoryError in json.dumps',
      'Max retries exceeded: /stack',
      'ESP32 not found on network',
    ],
    worries: ['numpy arrays as JSON over the wire?', 'gRPC? SiLA2? ROS? What even is that?', 'I didn’t secure my server…'],
    clock: ['23:41', '01:52', '04:58'],
    night: 'NIGHT 1',
    ending: 'This is okay. Everybody does this.',
  },
  threads: {
    file: ['kim_pipeline.py · one stack at a time', 'kim_pipeline_threaded.py · 2 GPUs'],
    lines: [
      ['stack = acquire()', 't1 = Thread(target=segment, args=(left,))'],
      ['masks = segment(stack)', 't2 = Thread(target=segment, args=(right,))'],
      ['core = decide(masks)', 't1.start(); t2.start()'],
      ['if core < 0.5:', 't1.join(); t2.join()  # hangs forever?'],
      ['    pump()', 'time.sleep(1)  # wait for the server??'],
      ['', 'results.append(core)  # race condition?'],
    ],
    tip: 'Use threads, and a join at the end. It’s easy!',
    errors: [
      'Exception in thread Thread-2',
      'Thread-1 still alive after 120 s',
      'RuntimeError: dict changed size',
      'Segmentation fault (core dumped)',
    ],
    worries: ['What even is a join?', 'If the GPU server dies, does the thread?', 'Which machine failed? Where are the logs?'],
    clock: ['00:12', '02:40', '05:15'],
    night: 'NIGHT 2',
    ending: 'Two nights, no sleep. That’s fine. It does work.',
  },
  data: {
    file: ['kim_organoid.ijm · saves to C:\\data', 'collect_results_v4.py · 5 machines'],
    lines: [
      ['saveAs("Tiff", "C:/data/organoid_01.tif");', 'np.save(f"/tmp/{uuid4()}.npy", masks)  # GPU disk'],
      ['saveAs("Results", "C:/data/organoid_01.csv");', 'scp("kim@10.0.0.12:/tmp/*.npy", "D:/backup/")'],
      ['', 'name = f"org3_B4_z120_dt20_gfA_t{t}_{core}_final.tif"'],
      ['', 'tifffile.imwrite(name, stack)  # metadata: gone'],
      ['', 'log.write(f"{time.time()} pump?")  # whose clock?'],
      ['', '# where is experiment_one???'],
    ],
    tip: 'Don’t worry, here’s another script that collects the data.',
    errors: [
      'OSError: No space left on device',
      'FileNotFoundError: experiment_one/',
      'Path longer than 260 characters',
      'IT: stop writing to the GPU server!',
    ],
    worries: ['OME-TIFF? OME-NGFF?', 'I should have used OMERO…', 'Metadata in the filename? Really?'],
    clock: ['22:58', '02:31', '04:44'],
    night: 'NIGHT 3',
    ending: 'I’ll just redo the experiment. Next time it’ll work.',
  },
  repro: {
    file: ['kim_organoid.ijm · v1.2 · has a DOI', 'kim_pipeline_FINAL_v7.py · run 41 of 76'],
    lines: [
      ['// organoid macro v1.2, doi:10.5281/zenodo.42', '# which version made run 41?  git log: "fix"'],
      ['run("Z Project...", "projection=[Max Intensity]");', 'model = StarDist2D.from_pretrained("versatile")'],
      ['setAutoThreshold("Otsu dark");', 'thresh = 0.47  # tuned at 3 am, by eye'],
      ['run("Analyze Particles...", "size=20-Infinity");', 'np.random.seed()  # different every run'],
      ['round = getResult("Round", 0);  // the core', 'cfg = load("C:/Users/kim/Desktop/cfg_old.json")'],
      ['if (round < 0.5) print("needs growth factor");', '# pip freeze > requirements.txt  (too late)'],
    ],
    tip: 'Just pin everything in a requirements.txt. Easy!',
    errors: [
      'ModuleNotFoundError: csbdeep',
      'CUDA 11.2 ≠ CUDA 12.1',
      'FileNotFoundError: cfg_old.json',
      'run 41: 0.48 · run 42: 0.53',
    ],
    worries: ['Docker? Conda? Nix? Pixi?', 'Did my PI’s rerun use the old model?', 'Which settings made run 41?'],
    clock: ['23:05', '02:22', '05:41'],
    night: 'NIGHT 4',
    ending: 'It worked once. That counts, right?',
  },
};

/** Where the errors hang off the cloud, and how they tilt. */
const ERROR_SLOTS: [string, number][] = [
  ['right-[-40px] top-[34px]', 4],
  ['right-[-48px] top-[150px]', -3],
  ['right-[-26px] bottom-[128px]', 3],
  ['right-[-44px] bottom-[52px]', -4],
];

/** A cloud outline: bumps all the way round a rounded box. */
function cloudPath(w: number, h: number, m = 28, r = 34) {
  const pts: [number, number][] = [];
  const along = (x0: number, y0: number, x1: number, y1: number) => {
    const n = Math.max(2, Math.round(Math.hypot(x1 - x0, y1 - y0) / (r * 1.6)));
    for (let i = 0; i < n; i++) pts.push([x0 + ((x1 - x0) * i) / n, y0 + ((y1 - y0) * i) / n]);
  };
  along(m, m, w - m, m);
  along(w - m, m, w - m, h - m);
  along(w - m, h - m, m, h - m);
  along(m, h - m, m, m);
  return `M${pts[0][0]} ${pts[0][1]} ${pts
    .slice(1)
    .concat([pts[0]])
    .map(([x, y]) => `A ${r} ${r} 0 0 1 ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(' ')} Z`;
}

/** Kim asleep, dreaming of her pipeline, and one night of turning it into
    a distributed one. Told once per visit, about 12 s:
    - the dream: the code as it was, in a thought cloud; Kim smiles, z z z;
    - Claude's helpful tip arrives, and line by line the code is rewritten,
      errors pile up round the cloud, her worries surface, the cloud turns
      amber, Kim tosses and sweats, the clock runs on;
    - the morning: Kim wide awake, her line for the night, and on the last
      night the stamp: IT WORKED. (once) */
export function NightmareFigure({ night: which }: { night: keyof typeof NIGHTS }) {
  const u = useUid();
  const night = NIGHTS[which];
  const at = { cloud: 1, tip: 2.6, swap: 3.6, step: 0.8, trouble: 4.6, awake: 9.8, ending: 10.3, stamp: 11 };
  const mutate = (i: number) => at.swap + i * at.step;
  const errorAt = (i: number) => 4.4 + i * 0.95;
  const worryAt = (i: number) => 5.2 + i * 1.4;
  const v = (o: Record<string, number | string>) =>
    Object.fromEntries(Object.entries(o).map(([k, x]) => [`--${k}`, typeof x === 'number' ? `${x.toFixed(2)}s` : x])) as CSSProperties;
  const W = 800;
  const H = 440;
  const css = `
.${u}-until, .${u}-span { opacity: 0; }
section.present .${u}-until { animation: ${u}-until var(--len) linear both; }
section.present .${u}-span { animation: ${u}-span var(--len) linear var(--d) both; }
@keyframes ${u}-until { 0%, 94% { opacity: 1; } 100% { opacity: 0; } }
@keyframes ${u}-span { 0% { opacity: 0; } 4%, 96% { opacity: 1; } 100% { opacity: 0; } }
.${u}-old { opacity: 0; }
section.present .${u}-old { animation: ${u}-old 0.5s ease-in var(--d) both; }
@keyframes ${u}-old { 0% { opacity: 1; } 40% { opacity: 1; color: ${WARN}; text-decoration: line-through; } 100% { opacity: 0; transform: translateX(-24px); color: ${WARN}; text-decoration: line-through; } }
.${u}-type { display: inline-block; overflow: hidden; vertical-align: top; white-space: pre; width: calc((var(--n) + 1) * 1ch); }
section.present .${u}-type { animation: ${u}-type var(--t) steps(var(--n)) var(--d) both; }
@keyframes ${u}-type { from { width: 0; } }
.${u}-z { animation: ${u}-z 2.4s ease-out infinite; }
@keyframes ${u}-z { 0% { opacity: 0; transform: translate(0, 0) scale(0.6); } 20% { opacity: 1; } 100% { opacity: 0; transform: translate(26px, -46px) scale(1.2); } }
section.present .${u}-shake { animation: ${u}-shake 0.3s linear var(--d) var(--n); }
@keyframes ${u}-shake { 0%, 100% { transform: translate(0, 0) rotate(0); } 25% { transform: translate(-2px, 1px) rotate(-0.8deg); } 75% { transform: translate(2px, -1px) rotate(0.8deg); } }
section.present .${u}-wobble { animation: ${u}-wobble 0.6s ease-in-out var(--d) var(--n); }
@keyframes ${u}-wobble { 0%, 100% { transform: rotate(0); } 33% { transform: rotate(-0.6deg); } 66% { transform: rotate(0.6deg); } }
@media (prefers-reduced-motion: reduce) {
  section.present :is(.${u}-until, .${u}-span, .${u}-old, .${u}-type, .${u}-shake, .${u}-wobble) { animation: none; }
  .${u}-z { animation: none; }
}
`;
  const skin = '#c68863';
  const hair = '#5b3a29';
  const ink = '#1f2937';
  const cloud = cloudPath(W, H);
  const clock = (text: string) => (
    <T x={92} y={66} size={30} mono weight={700} fill="#ef4444">
      {text}
    </T>
  );

  return (
    <div className="relative flex w-full items-center gap-2">
      <LoopStyles css={css} />

      {/* Kim, in bed */}
      <svg width={330} height={440} viewBox="0 0 330 440" role="img" aria-label={`Kim asleep, ${night.night.toLowerCase()}. She smiles at first, then tosses and sweats, and by ${night.clock[2]} she is wide awake.`} className="shrink-0">
        {/* the clock on the wall */}
        <g className="sm-pop" style={delay(0.2)}>
          <rect x={30} y={40} width={124} height={52} rx={10} fill="#111827" stroke={BORDER} strokeWidth={2} />
          <g className={`${u}-until`} style={v({ len: 4.5 })}>
            {clock(night.clock[0])}
          </g>
          <g className={`${u}-span`} style={v({ d: 4.5, len: 4.3 })}>
            {clock(night.clock[1])}
          </g>
          <g className="sm-fade" style={delay(8.8)}>
            {clock(night.clock[2])}
          </g>
          <T x={92} y={108} size={13} mono weight={700} fill={WARN}>
            {night.night}
          </T>
        </g>

        {/* thought bubbles up to the cloud */}
        {[
          [170, 236, 7, 0.5],
          [204, 204, 11, 0.65],
          [248, 168, 16, 0.8],
        ].map(([x, y, r, d]) => (
          <circle key={x} className="sm-pop" style={delay(d)} cx={x} cy={y} r={r} fill={SURFACE} stroke={BORDER} strokeWidth={2} />
        ))}

        <g className="sm-pop" style={delay(0.1)}>
          <g className={`${u}-shake`} style={v({ d: at.trouble, n: String(Math.round((at.awake - at.trouble) / 0.3)) })}>
            {/* bed */}
            <rect x={14} y={256} width={22} height={150} rx={6} fill="#8b5e3c" />
            <rect x={24} y={330} width={292} height={40} rx={8} fill="#a16207" fillOpacity={0.85} />
            <rect x={36} y={370} width={14} height={36} rx={3} fill="#8b5e3c" />
            <rect x={292} y={370} width={14} height={36} rx={3} fill="#8b5e3c" />
            <rect x={32} y={318} width={282} height={20} rx={8} fill={SURFACE} stroke={BORDER} strokeWidth={2} />
            <ellipse cx={92} cy={308} rx={58} ry={20} fill={SURFACE} stroke={BORDER} strokeWidth={2} />
            {/* Kim's head on the pillow */}
            <circle cx={96} cy={268} r={44} fill={hair} />
            <circle cx={100} cy={272} r={36} fill={skin} />
            <path d="M66 262 C 70 236, 116 226, 134 252 C 116 246, 92 246, 66 262 Z" fill={hair} />
            {/* blanket */}
            <path d="M128 330 C 132 286, 170 262, 214 270 C 256 276, 300 292, 314 330 Z" fill={PRIMARY} fillOpacity={0.55} stroke={PRIMARY} strokeWidth={2} />
            <path d="M118 318 L132 330 L314 330" fill="none" stroke={PRIMARY} strokeWidth={2} />

            {/* asleep, smiling */}
            <g className={`${u}-until`} style={v({ len: at.trouble })}>
              <path d="M82 272 Q88 278 94 272 M106 272 Q112 278 118 272" stroke={ink} strokeWidth={2.5} fill="none" strokeLinecap="round" />
              <path d="M92 290 Q100 296 108 290" stroke="#7c2d12" strokeWidth={2.5} fill="none" strokeLinecap="round" />
              <circle cx={78} cy={284} r={5} fill="#f87171" fillOpacity={0.4} />
              <circle cx={122} cy={284} r={5} fill="#f87171" fillOpacity={0.4} />
              {[0, 0.8, 1.6].map((d, i) => (
                <text key={i} className={`${u}-z`} style={{ animationDelay: `${d}s`, transformBox: 'fill-box' }} x={140 + i * 4} y={236 - i * 6} fontSize={18 + i * 4} fontWeight={700} fill={MUTED}>
                  z
                </text>
              ))}
            </g>
            {/* tossing, sweating */}
            <g className={`${u}-span`} style={v({ d: at.trouble, len: at.awake - at.trouble })}>
              <path d="M82 268 L92 273 L82 278 M118 268 L108 273 L118 278" stroke={ink} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M88 294 Q92 288 96 294 Q100 300 104 294 Q108 288 112 294" stroke="#7c2d12" strokeWidth={2.5} fill="none" strokeLinecap="round" />
              <path d="M136 246 C 132 254, 132 260, 137 262 C 142 260, 142 254, 136 246 Z" fill="#60a5fa" />
              <path d="M62 256 C 59 262, 59 267, 63 268 C 67 267, 67 262, 62 256 Z" fill="#60a5fa" />
              <T x={150} y={226} size={26} weight={800} fill={WARN}>
                !?
              </T>
            </g>
            {/* awake */}
            <g className="sm-fade" style={delay(at.awake)}>
              <circle cx={88} cy={270} r={8} fill="#ffffff" stroke={ink} strokeWidth={1.5} />
              <circle cx={112} cy={270} r={8} fill="#ffffff" stroke={ink} strokeWidth={1.5} />
              <circle cx={88} cy={271} r={2.6} fill={ink} />
              <circle cx={112} cy={271} r={2.6} fill={ink} />
              <path d="M80 282 Q88 286 96 282 M104 282 Q112 286 120 282" stroke="#7c3aed" strokeOpacity={0.6} strokeWidth={2.5} fill="none" strokeLinecap="round" />
              <path d="M92 296 H108" stroke="#7c2d12" strokeWidth={2.5} strokeLinecap="round" />
              <path d="M84 236 L80 222 M100 232 L101 216 M116 236 L122 223" stroke={hair} strokeWidth={3} strokeLinecap="round" />
            </g>
          </g>
        </g>
      </svg>

      {/* the dream */}
      <div className="sm-pop relative h-[440px] w-[800px] shrink-0" style={delay(at.cloud)}>
        <div className={`${u}-wobble absolute inset-0`} style={v({ d: at.trouble + 1, n: '9' })}>
          <svg className="absolute inset-0" width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden>
            <path d={cloud} fill={SURFACE} stroke={BORDER} strokeWidth={2.5} />
            <path className="sm-fade" style={delay(at.trouble + 0.5)} d={cloud} fill={WARN} fillOpacity={0.1} stroke={WARN} strokeWidth={3} />
          </svg>
          <div className="absolute inset-x-[64px] top-[64px] flex flex-col gap-1.5">
            <div className="relative mb-1 h-[22px] font-mono text-[14px] font-bold">
              <span className={`${u}-until absolute inset-0 text-fd-primary`} style={v({ len: at.swap })}>
                ~ {night.file[0]}
              </span>
              <span className="sm-fade absolute inset-0 text-[#d97706]" style={delay(at.swap)}>
                ~ {night.file[1]}
              </span>
            </div>
            {night.lines.map(([dream, nightmare], i) => (
              <div key={i} className="relative h-[26px] font-mono text-[15px] leading-[26px]">
                {dream ? (
                  <span className="sm-in absolute inset-0" style={delay(1.3 + i * 0.12)}>
                    <span className={`${u}-old block whitespace-pre`} style={v({ d: mutate(i) })}>
                      {dream}
                    </span>
                  </span>
                ) : null}
                <span className={cn('absolute inset-0', nightmare.startsWith('#') && 'text-[#d97706]')}>
                  <span className={`${u}-type`} style={{ ...v({ d: mutate(i) + 0.3, t: nightmare.length * 0.012 }), ['--n' as string]: nightmare.length } as CSSProperties}>
                    {nightmare}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* her worries, surfacing */}
          <div className="absolute inset-x-[64px] bottom-[58px] flex flex-col gap-1">
            {night.worries.map((w, i) => (
              <p key={w} className="sm-in text-[17px] italic leading-snug text-fd-muted-foreground" style={delay(worryAt(i))}>
                “{w}”
              </p>
            ))}
          </div>
        </div>

        {/* Claude's tip, which starts it */}
        <div className="absolute left-[40px] top-[-30px]" style={{ transform: 'rotate(-2deg)' }}>
          <span className="sm-pop flex items-center gap-2 rounded-xl border border-fd-border bg-fd-card px-3 py-1.5 text-[15px] shadow-md" style={delay(at.tip)}>
            <span aria-hidden className="flex size-[22px] shrink-0 items-center justify-center rounded-md bg-[#d97757] text-white">
              <svg viewBox="-12 -12 24 24" width={14} height={14}>
                {Array.from({ length: 8 }, (_, i) => (
                  <rect key={i} x={-1.6} y={-10} width={3.2} height={9} rx={1.6} fill="currentColor" transform={`rotate(${i * 45})`} />
                ))}
              </svg>
            </span>
            <span className="sr-only">Claude: </span>
            {night.tip}
          </span>
        </div>

        {/* the errors */}
        {night.errors.map((text, i) => (
          <div key={text} className={`absolute ${ERROR_SLOTS[i][0]}`} style={{ transform: `rotate(${ERROR_SLOTS[i][1]}deg)` }}>
            <span className="sm-pop block rounded-md border border-red-500/60 bg-red-50 px-2.5 py-1 font-mono text-[13px] font-bold text-red-700 shadow-md dark:bg-red-950 dark:text-red-300" style={delay(errorAt(i))}>
              ✕ {text}
            </span>
          </div>
        ))}

        {/* the morning */}
        <div className="absolute bottom-[-26px] left-[90px]" style={{ transform: 'rotate(-1.5deg)' }}>
          <span className="sm-pop block rounded-xl border-2 border-fd-foreground/70 bg-[#fef9c3] px-4 py-2 text-[18px] font-semibold text-[#422006] shadow-md" style={delay(at.ending)}>
            <span className="sr-only">Kim: </span>
            {night.ending}
          </span>
        </div>
        {night.stamp ? (
          <div className="absolute left-1/2 top-[44%]" style={{ transform: 'translate(-50%, -50%) rotate(-9deg)' }}>
            <div className="sm-pop flex flex-col items-center rounded-xl border-[5px] border-emerald-600 bg-fd-card/90 px-7 py-3 text-emerald-600 shadow-lg" style={delay(at.stamp)}>
              <span className="text-[46px] font-black uppercase leading-none tracking-[0.04em]">It worked.</span>
              <span className="mt-1 font-mono text-[15px] font-bold">once · 1 run in 76</span>
            </div>
          </div>
        ) : null}
      </div>
      <Horseman night={which} />
    </div>
  );
}

/* --- it worked -------------------------------------------------------------- */

/** "It worked": Kim's face, close up, after three nights. Eyes wide and
    bloodshot, pupils twitching, a manic grin, and the stamp across her
    chin. One keypress (a reveal.js fragment): her PI creeps in from the
    right, Kim slides aside, and the PI has a question. */
export function ItWorkedFigure() {
  const u = useUid();
  const skin = '#c68863';
  const hair = '#5b3a29';
  const ink = '#1f2937';
  const css = `
.${u}-tremble { animation: ${u}-tremble 0.18s steps(2) infinite; }
@keyframes ${u}-tremble { 0% { transform: translate(0, 0); } 50% { transform: translate(1.5px, -1px); } 100% { transform: translate(-1px, 1px); } }
.${u}-pupil { animation: ${u}-pupil 1.7s steps(1) infinite; }
@keyframes ${u}-pupil { 0% { transform: translate(0, 0); } 20% { transform: translate(5px, -3px); } 45% { transform: translate(-4px, 2px); } 70% { transform: translate(2px, 4px); } 85% { transform: translate(-3px, -4px); } }
.${u}-twitch { transform-box: fill-box; transform-origin: center top; transform: scaleY(0); animation: ${u}-twitch 2.3s ease-in-out infinite; }
@keyframes ${u}-twitch { 0%, 80%, 100% { transform: scaleY(0); } 84%, 88% { transform: scaleY(0.55); } 86% { transform: scaleY(0.2); } }
.${u}-kim { transition: transform 1.2s cubic-bezier(.6,0,.2,1); }
.${u}-pi.visible ~ .${u}-kim { transform: translateX(-250px); }
.${u}-person { transform: translateX(115%) rotate(10deg); transform-origin: bottom left; transition: transform 1.5s cubic-bezier(.3,0,.2,1); }
.${u}-pi.visible .${u}-person { transform: translateX(0) rotate(-5deg); }
.${u}-say { opacity: 0; transform: scale(0.6); transition: opacity 0.2s, transform 0.3s; }
.${u}-pi.visible .${u}-say { opacity: 1; transform: none; transition: opacity 0.3s var(--sd), transform 0.45s cubic-bezier(.3,1.5,.5,1) var(--sd); }
@media (prefers-reduced-motion: reduce) {
  .${u}-tremble, .${u}-pupil, .${u}-twitch { animation: none; }
  .${u}-kim, .${u}-person, .${u}-say { transition: none !important; }
}
`;
  const spikes = Array.from({ length: 13 }, (_, i) => {
    const a = ((196 + i * 12) * Math.PI) / 180;
    const b = a + 0.12;
    const c = a - 0.12;
    const r0 = 138;
    const r1 = 176 + (i % 3) * 14;
    return `M${200 + r0 * cos(c)} ${200 + r0 * sin(c)} L${200 + r1 * cos(a)} ${200 + r1 * sin(a)} L${200 + r0 * cos(b)} ${200 + r0 * sin(b)} Z`;
  }).join(' ');
  const veins = (cx: number, cy: number) =>
    [200, 250, 300, 340, 20].map((deg, i) => {
      const a = (deg * Math.PI) / 180;
      const x0 = cx + 39 * cos(a);
      const y0 = cy + 39 * sin(a);
      const x1 = cx + 22 * cos(a + 0.2);
      const y1 = cy + 22 * sin(a + 0.2);
      return <path key={i} d={`M${x0} ${y0} Q${(x0 + x1) / 2 + 4} ${(y0 + y1) / 2 - 3} ${x1} ${y1}`} stroke="#ef4444" strokeWidth={1.6} fill="none" strokeLinecap="round" />;
    });
  const eye = (cx: number, cy: number, phase: number) => (
    <g>
      <circle cx={cx} cy={cy} r={40} fill="#ffffff" stroke={ink} strokeWidth={3} />
      {veins(cx, cy)}
      <g className={`${u}-pupil`} style={{ animationDelay: `${phase}s` }}>
        <circle cx={cx} cy={cy} r={8} fill={ink} />
        <circle cx={cx + 2.5} cy={cy - 2.5} r={2} fill="#ffffff" />
      </g>
    </g>
  );

  return (
    <div className="relative h-[460px] w-full">
      <LoopStyles css={css} />

      {/* the PI, creeping in (one keypress) */}
      <Fragment as="div" index={1} className={`custom ${u}-pi absolute inset-y-0 right-0 w-[640px]`}>
        <div className="absolute bottom-0 right-0 h-[440px] w-[300px] overflow-hidden">
          <svg className={`${u}-person absolute bottom-0 left-[20px]`} width={250} height={340} viewBox="0 0 250 340" role="img" aria-label="Kim's PI, beaming, holding a mug">
            <path d="M14 340 C 18 270, 64 238, 124 234 C 184 238, 230 270, 236 340 Z" fill="#6b7280" />
            <path d="M102 238 L124 294 L146 238 Z" fill="#ffffff" />
            <path d="M118 246 L130 246 L134 304 L124 316 L114 304 Z" fill="#b91c1c" />
            <rect x={110} y={196} width={28} height={44} rx={10} fill="#e8b796" />
            <circle cx={124} cy={144} r={62} fill="#e8b796" />
            <ellipse cx={66} cy={136} rx={15} ry={26} fill="#d1d5db" />
            <ellipse cx={182} cy={136} rx={15} ry={26} fill="#d1d5db" />
            <path d="M100 90 Q112 78 122 92 M126 88 Q140 76 150 92" stroke="#d1d5db" strokeWidth={5} fill="none" strokeLinecap="round" />
            <path d="M86 116 Q100 104 114 114 M134 114 Q148 104 162 116" stroke="#9ca3af" strokeWidth={4} fill="none" strokeLinecap="round" />
            <circle cx={102} cy={132} r={4} fill={ink} />
            <circle cx={146} cy={132} r={4} fill={ink} />
            <path d="M84 142 H120 A18 14 0 0 1 84 142 Z M128 142 H164 A18 14 0 0 1 128 142 Z" fill="#e2e8f0" fillOpacity={0.5} stroke="#475569" strokeWidth={2.5} />
            <path d="M120 145 H128" stroke="#475569" strokeWidth={2.5} />
            <path d="M94 172 Q124 204 154 172 Z" fill="#7c2d12" />
            <path d="M98 174 Q124 186 150 174 Z" fill="#ffffff" />
            <circle cx={86} cy={168} r={7} fill="#f87171" fillOpacity={0.35} />
            <circle cx={162} cy={168} r={7} fill="#f87171" fillOpacity={0.35} />
            {/* the mug */}
            <rect x={30} y={268} width={50} height={56} rx={6} fill="#ffffff" stroke={ink} strokeWidth={2.5} />
            <path d="M80 280 Q98 284 96 298 Q94 310 80 310" fill="none" stroke={ink} strokeWidth={2.5} />
            <T x={55} y={296} size={13} weight={800} fill={ink}>
              #1 PI
            </T>
          </svg>
        </div>
        <div className="absolute right-[250px] top-[20px] flex flex-col items-end gap-3">
          <p className={`${u}-say relative whitespace-nowrap rounded-2xl rounded-br-sm border-2 border-fd-border bg-fd-card px-5 py-3 text-[26px] font-semibold leading-snug shadow-md`} style={{ ['--sd' as string]: '1.4s' } as CSSProperties}>
            <span className="sr-only">Her PI: </span>Great!! Can you write this up?
          </p>
          <p className={`${u}-say rounded-2xl rounded-br-sm border-2 border-fd-border bg-fd-card px-4 py-2 text-[20px] italic leading-snug text-fd-muted-foreground shadow-md`} style={{ ['--sd' as string]: '2.8s' } as CSSProperties}>
            …by Friday?
          </p>
        </div>
      </Fragment>

      {/* Kim, close up */}
      <div className={`${u}-kim absolute inset-y-0 left-1/2 w-[420px] -translate-x-1/2`}>
        <div className="sm-pop absolute left-0 top-0" style={delay(0.1)}>
          <svg className={`${u}-tremble`} width={420} height={420} viewBox="0 0 400 400" role="img" aria-label="Kim, wide-eyed after three nights: bloodshot eyes, twitching pupils, a manic grin">
            <circle cx={200} cy={200} r={150} fill={hair} />
            <path d={spikes} fill={hair} />
            <circle cx={200} cy={218} r={122} fill={skin} />
            <path d="M84 196 C 90 120, 160 92, 214 100 C 262 106, 306 140, 316 196 C 292 166, 268 150, 244 150 L 236 128 L 222 152 C 190 150, 160 140, 138 126 L 128 152 C 112 160, 96 176, 84 196 Z" fill={hair} />
            <path d="M108 146 Q150 112 192 140" stroke={hair} strokeWidth={7} fill="none" strokeLinecap="round" />
            <path d="M212 152 L290 136" stroke={hair} strokeWidth={7} fill="none" strokeLinecap="round" />
            <path d="M112 248 Q152 266 192 248 M208 248 Q248 266 288 248" stroke="#7c3aed" strokeOpacity={0.55} strokeWidth={5} fill="none" strokeLinecap="round" />
            {eye(152, 200, 0)}
            {eye(248, 200, 0.4)}
            <rect className={`${u}-twitch`} x={206} y={158} width={84} height={46} fill={skin} />
            <path d="M126 288 Q200 356 274 288 Q200 310 126 288 Z" fill="#7c2d12" stroke={ink} strokeWidth={2.5} strokeLinejoin="round" />
            <path d="M138 293 Q200 318 262 293 L256 304 Q200 326 144 304 Z" fill="#ffffff" />
            <path d="M160 298 V313 M180 302 V319 M200 304 V321 M220 302 V319 M240 298 V313" stroke="#cbd5e1" strokeWidth={1.5} />
            <path d="M326 160 C 318 176, 318 188, 328 192 C 338 188, 338 176, 326 160 Z" fill="#60a5fa" />
            <path d="M70 200 C 64 212, 64 220, 71 223 C 78 220, 78 212, 70 200 Z" fill="#60a5fa" />
          </svg>
        </div>
        <div className="absolute bottom-[-34px] left-1/2" style={{ transform: 'translateX(-50%) rotate(-8deg)' }}>
          <div className="sm-pop flex flex-col items-center rounded-xl border-[6px] border-emerald-600 bg-fd-card/90 px-8 py-3 text-emerald-600 shadow-lg" style={delay(0.9)}>
            <span className="whitespace-nowrap text-[54px] font-black uppercase leading-none tracking-[0.04em]">It worked.</span>
            <span className="mt-1 font-mono text-[16px] font-bold">once · 1 run in 76</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* The three nights, coming back at once: the script, the folders, the race
   and the IP addresses. Positioned around the standing Kim of CollapseFigure. */
const SCRIPT_LINES: [number, number, string][] = [
  [0, 70, '#a78bfa'], [1, 120, '#94a3b8'], [1, 90, '#94a3b8'], [2, 140, '#60a5fa'], [2, 60, '#94a3b8'],
  [1, 40, '#f87171'], [0, 0, ''], [0, 90, '#a78bfa'], [1, 150, '#94a3b8'], [1, 110, '#34d399'],
  [2, 80, '#94a3b8'], [3, 130, '#60a5fa'], [3, 70, '#94a3b8'], [2, 50, '#f87171'], [1, 100, '#94a3b8'],
  [0, 0, ''], [0, 60, '#a78bfa'], [1, 160, '#94a3b8'], [2, 90, '#fbbf24'], [2, 120, '#94a3b8'],
  [1, 70, '#94a3b8'], [1, 130, '#60a5fa'], [2, 40, '#f87171'], [0, 0, ''],
];
const FOLDERS = ['data/', 'kim/', 'final/', 'final_v2/', 'REAL_final/', '2024-03-12 run3 (copy)/'];
const IPS: [number, number, number, string, boolean][] = [
  [196, 18, -7, '192.168.0.12', true],
  [570, 0, 6, '192.168.0.21 ?', false],
  [214, 104, 5, '10.0.0.7:8000', true],
  [568, 96, -5, '169.254.17.3 ??', false],
  [190, 196, -4, 'localhost???', false],
  [580, 192, 7, '0.0.0.0:5000 !!', false],
];

function CollapseHorrors({ u }: { u: string }) {
  const card = 'rounded-xl border-2 bg-fd-card shadow-lg';
  return (
    <div aria-hidden className={`${u}-dim absolute inset-0`}>
      {/* the massive script */}
      <div className="absolute left-[-170px] top-[-24px] -rotate-3">
        <div className={cn('sm-pop w-[300px] overflow-hidden border-fd-border', card)} style={delay(0.3)}>
          <div className="flex items-center justify-between border-b border-fd-border bg-fd-muted px-3 py-1.5 font-mono text-[13px]">
            <span className="font-semibold">pipeline_FINAL_v7.py</span>
            <span className="rounded bg-red-500/15 px-1.5 text-red-600">10,212 lines</span>
          </div>
          <div className="relative h-[330px] overflow-hidden px-3">
            <div className={`${u}-scroll`}>
              {[0, 1].map((k) => (
                <div key={k} className="flex flex-col gap-[7px] py-[4px]">
                  {SCRIPT_LINES.map(([indent, w, color], i) => (
                    <div key={i} className="flex h-[6px] items-center gap-2">
                      <span className="w-[26px] shrink-0 text-right font-mono text-[8px] leading-none text-fd-muted-foreground">{9930 + k * 24 + i}</span>
                      <span className="h-[5px] rounded-full" style={{ marginLeft: indent * 14, width: w, background: color || 'transparent', opacity: 0.8 }} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <span className="absolute right-1 top-[190px] h-[8px] w-[5px] rounded-full bg-fd-muted-foreground/60" />
          </div>
        </div>
      </div>

      {/* the nested folders */}
      <div className="absolute left-[750px] top-[-20px] rotate-2">
        <div className={cn('sm-pop w-[320px] border-fd-border px-4 py-3 font-mono text-[15px]', card)} style={delay(0.9)}>
          {FOLDERS.map((f, i) => (
            <div key={f} className="sm-in flex items-center gap-1.5 whitespace-nowrap leading-[1.55]" style={{ ...delay(1.05 + i * 0.22), paddingLeft: i * 12 }}>
              <span className="text-amber-500">▸</span>
              <span>{f}</span>
            </div>
          ))}
          <div className="sm-in whitespace-nowrap leading-[1.55] text-red-600" style={{ ...delay(1.05 + FOLDERS.length * 0.22), paddingLeft: FOLDERS.length * 12 }}>
            stack_0042_t20s_z31_po…
          </div>
        </div>
      </div>

      {/* the race condition */}
      <div className="absolute left-[730px] top-[262px] -rotate-2">
        <div className={cn('sm-pop w-[340px] border-red-500/60 px-4 py-3 font-mono text-[13px]', card)} style={delay(2)}>
          {[
            ['thread-1', 'write mask_0042.tif', 2.15],
            ['thread-2', 'read  mask_0042.tif', 2.25],
          ].map(([t, what, d]) => (
            <div key={t as string} className="flex items-center gap-2 leading-[1.9]">
              <span className="w-[66px] whitespace-nowrap text-fd-muted-foreground">{t}</span>
              <span className="relative h-[8px] w-[46px] overflow-hidden rounded-full bg-fd-muted">
                <span className={`${u}-race absolute inset-0 rounded-full bg-red-500/70`} style={{ '--d': `${d}s` } as CSSProperties} />
              </span>
              <span className="whitespace-pre">{what}</span>
            </div>
          ))}
          <div className="sm-pop mt-1 inline-block rounded bg-red-600 px-2 py-0.5 text-[14px] font-bold uppercase tracking-wide text-white" style={delay(3.15)}>
            race condition · 0 bytes
          </div>
        </div>
      </div>

      {/* IP address madness */}
      {IPS.map(([x, y, r, ip, struck], i) => (
        <div key={ip} className="absolute" style={{ left: x, top: y, transform: `rotate(${r}deg)` }}>
          <div className="sm-pop" style={delay(1.4 + i * 0.3)}>
            <span
              className={cn(
                `${u}-jit inline-block whitespace-nowrap rounded-full border-2 bg-fd-card px-3.5 py-1 font-mono text-[19px] font-semibold shadow-md`,
                struck ? 'border-red-500/60 text-red-600 line-through' : 'border-amber-500/70 text-amber-700',
              )}
            >
              {ip}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Kim has had enough: the horrors of three nights pop up round her, she
    wobbles, keels over backwards, and from the
    floor, with x-ed out eyes and stars circling, asks for the one thing
    that used to work. Told once per visit. */
export function CollapseFigure() {
  const u = useUid();
  const skin = '#c68863';
  const hair = '#5b3a29';
  const ink = '#1f2937';
  const coat = '#f4f4f5';
  const fallAt = 3.9;
  const css = `
.${u}-fall { transform-box: view-box; transform-origin: 470px 372px; transform: translateY(-50px) rotate(-90deg); }
section.present .${u}-fall { animation: ${u}-fall 4.4s 0.3s both; }
@keyframes ${u}-fall {
  0% { transform: rotate(0); animation-timing-function: ease-in-out; }
  12% { transform: rotate(-1.5deg); animation-timing-function: ease-in-out; }
  22% { transform: rotate(1.5deg); animation-timing-function: ease-in-out; }
  32% { transform: rotate(-3deg); animation-timing-function: ease-in-out; }
  42% { transform: rotate(3deg); animation-timing-function: ease-in-out; }
  51% { transform: rotate(-4.5deg); animation-timing-function: ease-in-out; }
  59% { transform: rotate(4.5deg); animation-timing-function: ease-in-out; }
  67% { transform: rotate(-6deg); animation-timing-function: ease-in-out; }
  74% { transform: rotate(3deg); animation-timing-function: ease-in-out; }
  78% { transform: rotate(0); animation-timing-function: cubic-bezier(.55,0,1,.45); }
  92% { transform: translateY(-50px) rotate(-90deg); animation-timing-function: ease-out; }
  96% { transform: translateY(-58px) rotate(-85deg); animation-timing-function: ease-in; }
  100% { transform: translateY(-50px) rotate(-90deg); }
}
.${u}-until { opacity: 0; }
section.present .${u}-until { animation: ${u}-until ${fallAt}s linear both; }
@keyframes ${u}-until { 0%, 97% { opacity: 1; } 100% { opacity: 0; } }
.${u}-stars { transform-box: fill-box; transform-origin: center; animation: ${u}-stars 2.2s linear infinite; }
@keyframes ${u}-stars { to { transform: rotate(360deg); } }
/* the horrors: loud while she wobbles, faded once she is down */
.${u}-dim { opacity: 0.22; }
section.present .${u}-dim { animation: ${u}-dim 0.8s ease-out ${fallAt + 0.3}s both; }
@keyframes ${u}-dim { from { opacity: 1; } to { opacity: 0.22; } }
.${u}-scroll { animation: ${u}-scroll 7s linear infinite; }
@keyframes ${u}-scroll { to { transform: translateY(-50%); } }
.${u}-race { transform-origin: left; transform: scaleX(1); }
section.present .${u}-race { animation: ${u}-race 1s cubic-bezier(.4,0,.6,1) var(--d) both; }
@keyframes ${u}-race { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.${u}-jit { animation: ${u}-jit 0.5s steps(2) infinite; }
@keyframes ${u}-jit { 0% { transform: translate(0, 0); } 50% { transform: translate(1.5px, -1px); } 100% { transform: translate(-1px, 1px); } }
@media (prefers-reduced-motion: reduce) {
  section.present .${u}-fall, section.present .${u}-until, .${u}-stars,
  section.present .${u}-dim, .${u}-scroll, section.present .${u}-race, .${u}-jit { animation: none; }
}
`;
  const star = (x: number, y: number) => `M${x} ${y - 9} L${x + 3} ${y - 3} L${x + 9} ${y - 2} L${x + 4} ${y + 2} L${x + 6} ${y + 9} L${x} ${y + 5} L${x - 6} ${y + 9} L${x - 4} ${y + 2} L${x - 9} ${y - 2} L${x - 3} ${y - 3} Z`;
  return (
    <div className="relative mx-auto h-[420px] w-[900px]">
      <LoopStyles css={css} />
      <CollapseHorrors u={u} />
      <svg width={900} height={420} viewBox="110 66 700 327" role="img" aria-label="Kim keels over backwards and lies on the floor, eyes crossed out, stars circling her head" className="absolute inset-0">
        <path className="sm-fade" d="M60 374 H840" stroke={BORDER} strokeWidth={4} strokeLinecap="round" />
        <ellipse className="sm-fade" cx={340} cy={378} rx={210} ry={8} fill={MUTED} fillOpacity={0.15} />
        <g className={`${u}-fall`}>
          {/* legs and shoes */}
          <rect x={450} y={300} width={15} height={72} rx={5} fill="#334155" />
          <rect x={476} y={300} width={15} height={72} rx={5} fill="#334155" />
          <ellipse cx={456} cy={370} rx={14} ry={6} fill={ink} />
          <ellipse cx={486} cy={370} rx={14} ry={6} fill={ink} />
          {/* coat, arms */}
          <path d="M430 214 L420 296 M510 214 L520 296" stroke={coat} strokeWidth={16} strokeLinecap="round" />
          <path d="M430 214 L420 296 M510 214 L520 296" stroke={BORDER} strokeWidth={1.5} strokeLinecap="round" fill="none" />
          <circle cx={419} cy={302} r={9} fill={skin} />
          <circle cx={521} cy={302} r={9} fill={skin} />
          <path d="M424 318 C 422 240, 436 204, 470 198 C 504 204, 518 240, 516 318 Z" fill={coat} stroke={BORDER} strokeWidth={2} />
          <path d="M456 200 L470 236 L484 200" fill="#0f766e" />
          <rect x={494} y={240} width={20} height={13} rx={3} fill={PRIMARY} />
          {/* head */}
          <rect x={461} y={172} width={18} height={30} rx={7} fill={skin} />
          <circle cx={470} cy={138} r={42} fill={hair} />
          <path d="M432 120 L424 98 L444 112 L446 88 L460 108 L470 84 L480 108 L496 90 L496 112 L516 100 L508 122 Z" fill={hair} />
          <circle cx={470} cy={146} r={34} fill={skin} />
          <path d="M440 140 C 444 116, 490 108, 504 134 C 488 128, 462 126, 440 140 Z" fill={hair} />
          {/* before: wide, twitching */}
          <g className={`${u}-until`}>
            <circle cx={458} cy={146} r={8} fill="#ffffff" stroke={ink} strokeWidth={1.5} />
            <circle cx={482} cy={146} r={8} fill="#ffffff" stroke={ink} strokeWidth={1.5} />
            <circle cx={459} cy={147} r={2.5} fill={ink} />
            <circle cx={481} cy={145} r={2.5} fill={ink} />
            <path d="M458 166 Q464 162 470 166 Q476 170 482 166" stroke="#7c2d12" strokeWidth={2.5} fill="none" strokeLinecap="round" />
          </g>
          {/* after: out */}
          <g className="sm-fade" style={delay(fallAt + 0.4)}>
            <path d="M452 140 L464 152 M464 140 L452 152 M476 140 L488 152 M488 140 L476 152" stroke={ink} strokeWidth={2.8} strokeLinecap="round" />
            <ellipse cx={470} cy={168} rx={6} ry={4} fill="#7c2d12" />
          </g>
        </g>
        {/* stars round her head, once she is down */}
        <g className="sm-fade" style={delay(fallAt + 0.5)}>
          <g className={`${u}-stars`}>
            <path d={star(206, 286)} fill="#facc15" />
            <path d={star(250, 264)} fill="#facc15" />
            <path d={star(256, 320)} fill="#facc15" />
            <circle cx={232} cy={292} r={46} fill="none" stroke="none" />
          </g>
        </g>
      </svg>
      <div className="absolute left-[130px] top-[10px]">
        <div className="sm-pop relative rounded-2xl rounded-bl-sm border-2 border-fd-border bg-fd-card px-6 py-4 shadow-md" style={delay(fallAt + 1.2)}>
          <p className="text-[30px] font-semibold italic leading-snug">
            <span className="sr-only">Kim: </span>“I want my Fiji script back.”
          </p>
        </div>
        <span className="sm-pop absolute bottom-[-30px] left-[24px] size-[18px] rounded-full border-2 border-fd-border bg-fd-card" style={delay(fallAt + 1)} />
        <span className="sm-pop absolute bottom-[-58px] left-[10px] size-[12px] rounded-full border-2 border-fd-border bg-fd-card" style={delay(fallAt + 0.85)} />
      </div>
    </div>
  );
}

/* --- cover ------------------------------------------------------------------ */

const COVER_TILES: [number, number, number][] = [
  [60, 70, 60],
  [250, 52, 42],
  [292, 190, 96],
  [96, 240, 46],
  [188, 320, 74],
  [350, 346, 34],
  [48, 362, 28],
  [322, 104, 26],
];

/** Smart microscopy in one picture: an overview, and high-resolution tiles
    landing wherever something was worth a closer look. */
export function CoverFigure() {
  const blobs = Array.from({ length: 22 }, (_, i) => ({
    x: 36 + ((i * 137) % 368),
    y: 36 + ((i * 89 + 41) % 368),
    r: 5 + ((i * 7) % 11),
  }));
  const centre = ([x, y, s]: [number, number, number]) => [x + s / 2, y + s / 2];
  const route = [0, 1, 7, 2, 5, 4, 3, 6].map((i) => centre(COVER_TILES[i]));
  const path = `M${route.map(([x, y]) => `${x} ${y}`).join(' L')} Z`;
  return (
    <svg width={440} height={440} viewBox="0 0 440 440" role="img" aria-label="An overview image with high-resolution tiles landing on the interesting spots" className="shrink-0">
      <rect className="sm-fade" style={delay(0.1)} x={20} y={20} width={400} height={400} rx={16} fill={SURFACE} stroke={BORDER} strokeWidth={1.6} />
      <g className="sm-fade" style={delay(0.4)}>
        {blobs.map((b, i) => (
          <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={MUTED} fillOpacity={0.14} />
        ))}
      </g>
      {COVER_TILES.map(([x, y, s], i) => (
        <g key={i}>
          <circle className="sm-ping" style={delay(0.9 + i * 0.35)} cx={x + s / 2} cy={y + s / 2} r={s / 2} fill="none" stroke={PRIMARY} strokeWidth={2} />
          <rect className="sm-pop" style={delay(0.9 + i * 0.35)} x={x} y={y} width={s} height={s} rx={4} fill={PRIMARY} fillOpacity={0.16 + (i % 3) * 0.12} stroke={PRIMARY} strokeWidth={1.5} />
        </g>
      ))}
      <Token path={path} dur={16}>
        <g>
          <circle r={13} fill="none" stroke={PRIMARY} strokeWidth={2} />
          <path d="M-20 0 H-8 M8 0 H20 M0 -20 V-8 M0 8 V20" stroke={PRIMARY} strokeWidth={2} />
        </g>
      </Token>
    </svg>
  );
}

/** Label-image colours for analysed particles. */
const LABELS = ['#f87171', '#fbbf24', '#34d399', '#60a5fa', '#c084fc', '#f472b6', '#2dd4bf', '#a3e635', '#fb923c', '#818cf8'];

/* --- Kim herself, drawn ----------------------------------------------------- */

/** Kim as a little figurine: lab coat, safety goggles, a name badge. A
    persona, so she is drawn rather than photographed. Idles with a slow bob. */
export function KimFigure({ size = 170, mood = 'neutral' }: { size?: number; mood?: 'neutral' | 'happy' | 'worried' }) {
  const u = useUid();
  const skin = '#c68863';
  const hair = '#5b3a29';
  const coat = '#f4f4f5';
  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 200 250" role="img" aria-label="Kim, a persona: a scientist in a lab coat and safety goggles" className="shrink-0">
      <LoopStyles
        css={`
          .${u}-bob { animation: ${u}-bob 3.2s ease-in-out 1s infinite; }
          @keyframes ${u}-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
          @media (prefers-reduced-motion: reduce) { .${u}-bob { animation: none; } }
        `}
      />
      <ellipse cx={100} cy={242} rx={62} ry={7} fill={MUTED} fillOpacity={0.18} />
      {mood === 'happy'
        ? (
            [
              [26, 44, 0],
              [172, 34, 1],
              [14, 118, 2],
              [186, 112, 3],
              [44, 16, 4],
              [154, 74, 5],
              [36, 176, 6],
              [170, 168, 7],
            ] as const
          ).map(([x, y, i]) => (
            <rect
              key={i}
              className="sm-pop"
              style={delay(0.5 + i * 0.08)}
              x={x - 5}
              y={y - 3}
              width={10}
              height={6}
              rx={1.5}
              transform={`rotate(${i * 37} ${x} ${y})`}
              fill={LABELS[i % LABELS.length]}
            />
          ))
        : null}
      <g className="sm-pop" style={delay(0.15)}>
        <g className={`${u}-bob`}>
          {/* hair behind */}
          <path d="M52 92 C 48 40, 152 40, 148 92 L 152 150 C 132 160, 68 160, 48 150 Z" fill={hair} />
          {/* coat */}
          <path d="M40 240 C 40 182, 62 158, 100 154 C 138 158, 160 182, 160 240 Z" fill={coat} stroke={BORDER} strokeWidth={2} />
          <path d="M84 158 L100 196 L116 158" fill="#0f766e" />
          <path d="M84 158 L96 214 M116 158 L104 214" stroke={BORDER} strokeWidth={2} fill="none" />
          <rect x={118} y={194} width={24} height={16} rx={3} fill={PRIMARY} />
          <T x={130} y={203} size={11} weight={700} fill="var(--color-fd-primary-foreground)">
            K
          </T>
          {/* neck and head */}
          <rect x={90} y={128} width={20} height={30} rx={8} fill={skin} />
          <circle cx={100} cy={96} r={40} fill={skin} />
          {/* fringe */}
          <path d="M60 92 C 60 58, 96 46, 126 58 C 138 64, 142 78, 140 92 C 124 80, 100 70, 76 76 C 68 80, 62 86, 60 92 Z" fill={hair} />
          {/* goggles */}
          <path d="M58 98 H142" stroke="#94a3b8" strokeWidth={4} />
          <rect x={68} y={88} width={28} height={20} rx={8} fill="#e2e8f0" fillOpacity={0.75} stroke="#94a3b8" strokeWidth={2.5} />
          <rect x={104} y={88} width={28} height={20} rx={8} fill="#e2e8f0" fillOpacity={0.75} stroke="#94a3b8" strokeWidth={2.5} />
          {mood === 'happy' ? (
            <>
              {/* eyes closed in a grin, cheeks, open smile */}
              <path d="M76 100 Q82 93 88 100 M112 100 Q118 93 124 100" stroke="#1f2937" strokeWidth={2.5} fill="none" strokeLinecap="round" />
              <circle cx={70} cy={116} r={6} fill="#f87171" fillOpacity={0.45} />
              <circle cx={130} cy={116} r={6} fill="#f87171" fillOpacity={0.45} />
              <path d="M84 114 Q100 136 116 114 Z" fill="#7c2d12" />
              <path d="M88 115 Q100 121 112 115 Z" fill="#ffffff" />
            </>
          ) : mood === 'worried' ? (
            <>
              {/* raised inner brows, a frown */}
              <path d="M70 84 L90 78 M130 84 L110 78" stroke={hair} strokeWidth={4} strokeLinecap="round" />
              <circle cx={82} cy={100} r={3} fill="#1f2937" />
              <circle cx={118} cy={100} r={3} fill="#1f2937" />
              <path d="M88 124 Q100 115 112 124" stroke="#7c2d12" strokeWidth={2.5} fill="none" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx={82} cy={98} r={3} fill="#1f2937" />
              <circle cx={118} cy={98} r={3} fill="#1f2937" />
              <path d="M88 118 Q100 128 112 118" stroke="#7c2d12" strokeWidth={2.5} fill="none" strokeLinecap="round" />
            </>
          )}
        </g>
      </g>
    </svg>
  );
}

/* --- Kim's organoid --------------------------------------------------------- */

type Fate = 'rescued' | 'lost';

/** Two copies of the same organoid, told once per visit. Both grow, and in
    both the core cells lose their roundness (Kim's signal). On the left,
    growth factor arrives in time: the core rounds up again and the organoid
    thrives. On the right nothing arrives: the cells die from the core
    outwards, and the growth factor turns up too late. */
export function OrganoidFigure() {
  const u = useUid();
  const W = 600;
  const cy = 236;
  const s = 0.6;
  const at = { deform: 2.0, rescue: 2.7, recover: 3.6, dieFrom: 4.3, lost: 6.6, late: 7.2 };
  const rings: [number, number][] = [
    [0, 1],
    [44, 6],
    [88, 12],
    [132, 18],
    [172, 24],
  ];
  const cols: { fate: Fate; cx: number; head: string; color: string; status: [string, number, number][]; final: [string, number] }[] = [
    {
      fate: 'rescued',
      cx: 150,
      head: 'growth factor in time',
      color: PRIMARY,
      status: [
        ['growing', 0.3, at.deform],
        ['the core loses its shape', at.deform, at.rescue + 0.6],
        ['growth factor A', at.rescue + 0.6, at.recover + 1.4],
      ],
      final: ['rescued: ready for the drugs', at.recover + 1.4],
    },
    {
      fate: 'lost',
      cx: 450,
      head: 'no growth factor',
      color: WARN,
      status: [
        ['growing', 0.3, at.deform],
        ['the core loses its shape', at.deform, at.dieFrom],
        ['dying', at.dieFrom, at.lost],
      ],
      final: ['lost before the drugs', at.lost],
    },
  ];

  const css = cols
    .map(({ fate, cx, status }) => {
      const p = `${u}-${fate}`;
      const rescued = fate === 'rescued';
      return `
    .${p}-pop, .${p}-die, .${p}-core { transform-box: fill-box; transform-origin: center; }
    .${p}-all { transform-box: view-box; transform-origin: ${cx}px ${cy}px; }
    section.present .${p}-pop { animation: sm-pop 0.5s cubic-bezier(.3,1.5,.5,1) var(--d) both; }
    section.present .${p}-core { animation: ${u}-deform 0.9s ease-in-out ${at.deform}s both${rescued ? `, ${u}-recover 1s ease-in-out ${at.recover}s both` : ''}; }
    ${rescued ? '' : `section.present .${p}-die { animation: ${u}-die 1.3s ease-in var(--k) both; }`}
    section.present .${p}-all { animation: ${rescued ? `${u}-thrive 1.6s ease-out ${at.recover + 0.4}s` : `${u}-shrink 2.6s ease-in-out ${at.dieFrom + 0.3}s`} both; }
    .${p}-ring { opacity: 0; }
    section.present .${p}-ring { stroke-dasharray: 1; animation: sm-draw 0.9s ease-in-out ${at.deform + 0.4}s both, ${rescued ? `${u}-onoff 0.6s ease-out ${at.recover + 0.5}s` : `${u}-on 0.1s linear ${at.deform + 0.4}s`} both; }
    .${p}-drop { opacity: 0; }
    section.present .${p}-drop { animation: ${u}-drop 1.1s ease-in ${rescued ? at.rescue : at.late}s both; }
    ${status
      .map(
        ([, from, to], i) => `.${p}-s${i} { opacity: 0; }
    section.present .${p}-s${i} { animation: ${u}-window ${(to - from).toFixed(2)}s linear ${from}s both; }`,
      )
      .join('\n    ')}`;
    })
    .join('\n') +
    `
    @keyframes ${u}-deform { from { transform: none; fill: ${PRIMARY}; stroke: ${PRIMARY}; } to { transform: scale(1.4, 0.6); fill: ${WARN}; stroke: ${WARN}; } }
    @keyframes ${u}-recover { to { transform: none; fill: ${PRIMARY}; stroke: ${PRIMARY}; } }
    @keyframes ${u}-die { to { transform: scale(0.6); opacity: 0.75; filter: grayscale(1); } }
    @keyframes ${u}-shrink { to { transform: scale(0.86); } }
    @keyframes ${u}-thrive { to { transform: scale(1.1); } }
    @keyframes ${u}-on { from { opacity: 1; } to { opacity: 1; } }
    @keyframes ${u}-onoff { from { opacity: 1; } to { opacity: 0; } }
    @keyframes ${u}-window { 0% { opacity: 0; } 8%, 90% { opacity: 1; } 100% { opacity: 0; } }
    @keyframes ${u}-drop { 0% { opacity: 0; transform: translateY(0); } 15% { opacity: 1; } 80% { opacity: 1; transform: translateY(${cy - 52}px); } 100% { opacity: 0; transform: translateY(${cy - 46}px); } }
    section.present .${u}-clock { animation: sm-grow ${at.lost - 0.3}s linear 0.3s both; }
    @media (prefers-reduced-motion: reduce) {
      section.present [class*="${u}-"] { animation: none; }
    }
  `;

  return (
    <svg width={W} height={470} viewBox={`0 0 ${W} 470`} role="img" aria-label="The same organoid twice. Both grow and their core cells lose their round shape. Left: growth factor arrives in time, the core rounds up and the organoid thrives. Right: no growth factor, the organoid dies from the core outwards" className="shrink-0">
      <LoopStyles css={css} />
      <line x1={W / 2} y1={20} x2={W / 2} y2={410} stroke={BORDER} strokeWidth={1.4} strokeDasharray="6 6" />

      {cols.map(({ fate, cx, head, color, status, final }) => {
        const p = `${u}-${fate}`;
        const cells = rings.flatMap(([r, n], k) =>
          Array.from({ length: n }, (_, i) => {
            const a = (i / n) * Math.PI * 2 + k * 0.3;
            return { x: cx + r * s * cos(a), y: cy + r * s * sin(a), core: k < 2, k, i };
          }),
        );
        return (
          <g key={fate}>
            <T x={cx} y={26} size={17} weight={700} fill={color}>
              {head}
            </T>
            <g className={`${p}-all`}>
              {cells.map((c) => {
                const style = {
                  ['--d' as string]: `${0.2 + c.k * 0.22 + c.i * 0.012}s`,
                  ['--k' as string]: `${at.dieFrom + c.k * 0.42 + (c.i % 5) * 0.05}s`,
                } as CSSProperties;
                return (
                  <g key={`${c.k}-${c.i}`} transform={`rotate(${(c.i * 47 + c.k * 20) % 180} ${c.x} ${c.y})`}>
                    <g className={`${p}-pop`} style={style}>
                      <g className={`${p}-die`} style={style}>
                        <circle
                          className={c.core ? `${p}-core` : undefined}
                          cx={c.x}
                          cy={c.y}
                          r={15 * s}
                          fill={PRIMARY}
                          fillOpacity={c.core ? 0.3 : 0.16}
                          stroke={PRIMARY}
                          strokeWidth={1.3}
                          strokeOpacity={0.8}
                        />
                      </g>
                    </g>
                  </g>
                );
              })}
            </g>
            <circle className={`${p}-ring`} pathLength={1} cx={cx} cy={cy} r={68 * s} fill="none" stroke={WARN} strokeWidth={2.2} />
            <path
              className={`${p}-drop`}
              d={`M${cx} 46 C ${cx + 5} 56, ${cx + 10} 61, ${cx + 10} 68 A 10 10 0 1 1 ${cx - 10} 68 C ${cx - 10} 61, ${cx - 5} 56, ${cx} 46 Z`}
              fill={PRIMARY}
            />
            {status.map(([text], i) => (
              <T key={text} className={`${p}-s${i}`} x={cx} y={392} size={16} weight={600} fill={i === 0 ? PRIMARY : i === 1 ? WARN : color}>
                {text}
              </T>
            ))}
            <T className="sm-fade" style={delay(final[1])} x={cx} y={392} size={16} weight={700} fill={color}>
              {final[0]}
            </T>
            {fate === 'lost' ? (
              <T className="sm-fade" style={delay(at.late + 0.9)} x={cx} y={420} size={14} weight={600} fill={MUTED}>
                growth factor A arrives: too late
              </T>
            ) : (
              <T className="sm-fade" style={delay(at.recover + 1.6)} x={cx} y={420} size={14} weight={600} fill={MUTED}>
                core cells round again
              </T>
            )}
          </g>
        );
      })}

      <rect x={60} y={452} width={480} height={4} rx={2} fill={BORDER} />
      <rect className={`${u}-clock`} x={60} y={452} width={480} height={4} rx={2} fill={MUTED} />
    </svg>
  );
}

/* --- her macro -------------------------------------------------------------- */

const ORGANOID_RINGS: [number, number][] = [
  [0, 1],
  [44, 6],
  [88, 12],
  [132, 18],
  [172, 24],
];

/** A still organoid at the moment Kim's macro looks at it: round cells
    outside, the misshapen core inside. `slide` is how slide 2 draws it,
    `fluor` is how it looks as a fluorescence image. */
function OrganoidGlyph({
  cx,
  cy,
  s,
  palette,
  cellClass,
  cellDelay,
}: {
  cx: number;
  cy: number;
  s: number;
  /** `slide`: as on slide 2. `fluor`: a fluorescence image. `mask`: the
      thresholded binary image. `labels`: one colour per analysed particle. */
  palette: 'slide' | 'fluor' | 'mask' | 'labels';
  /** Per-cell build, for the particle labelling. */
  cellClass?: string;
  cellDelay?: (index: number) => number;
}) {
  let idx = 0;
  const paint = (core: boolean, n: number) => {
    switch (palette) {
      case 'slide':
        return core ? { fill: WARN, fo: 0.3, stroke: WARN, sw: 1.2 } : { fill: PRIMARY, fo: 0.16, stroke: PRIMARY, sw: 1.2 };
      case 'fluor':
        return core ? { fill: '#fde725', fo: 0.9, stroke: '#fde725', sw: 1.2 } : { fill: '#35b779', fo: 0.6, stroke: '#a7f3d0', sw: 1.2 };
      case 'mask':
        return { fill: '#fde725', fo: 1, stroke: 'none', sw: 0 };
      case 'labels':
        return { fill: LABELS[(n * 7) % LABELS.length], fo: 0.95, stroke: core ? '#ffffff' : 'none', sw: core ? 1.2 : 0 };
    }
  };
  return (
    <g>
      {ORGANOID_RINGS.flatMap(([r, n], k) =>
        Array.from({ length: n }, (_, i) => {
          const a = (i / n) * Math.PI * 2 + k * 0.3;
          const x = cx + r * s * cos(a);
          const y = cy + r * s * sin(a);
          const me = idx++;
          const c = paint(k < 2, me);
          const anim = cellClass ? { className: cellClass, style: delay(cellDelay?.(me) ?? 0) } : {};
          return k < 2 ? (
            <ellipse
              key={`${k}-${i}`}
              {...anim}
              cx={x}
              cy={y}
              rx={15 * s * 1.4}
              ry={15 * s * 0.6}
              transform={`rotate(${(i * 47 + k * 20) % 180} ${x} ${y})`}
              fill={c.fill}
              fillOpacity={c.fo}
              stroke={c.stroke}
              strokeWidth={c.sw}
            />
          ) : (
            <circle key={`${k}-${i}`} {...anim} cx={x} cy={y} r={15 * s} fill={c.fill} fillOpacity={c.fo} stroke={c.stroke} strokeWidth={c.sw} strokeOpacity={0.8} />
          );
        }),
      )}
    </g>
  );
}

/** Kim's ImageJ macro, step by step: stack, max projection, Otsu threshold,
    analyse particles, verdict. Values from the Lisbon deck.

    It opens zoomed in on the organoid from slide 2, at the size it had
    there, misshapen core and all. The view pulls back until the organoid is
    one image in a z stack, turning into fluorescence as it lands, and the
    macro runs on it from there. */
export function MacroChainFigure() {
  const u = useUid();
  const tile = 140;
  const xs = [10, 210, 410, 610];
  const y = 50;
  const labels = ['Z stack', 'Max projection', 'Otsu threshold', 'Analyse particles'];
  const dark = '#2b1b4d';
  const cxs = (i: number) => xs[i] + tile / 2;
  // where the organoid ends up (centre of the front stack image), and where
  // it starts: the middle of the figure, at slide 2's size
  const land = { x: xs[0] + 60, y: y + 60, s: 0.29 };
  const start = { x: 510, y: 130, scale: 0.6 / 0.29 };
  const zoom = { from: 0.4, dur: 1.5 };
  const Z = zoom.from + zoom.dur; // everything after the landing is shifted by this
  return (
    <svg width={1020} height={260} viewBox="0 0 1020 260" role="img" aria-label="Zooming out from Kim's organoid until it is one image in a z stack; then her ImageJ macro: max projection, Otsu threshold, analysed particles, then a verdict" className="mx-auto block" overflow="visible">
      <defs>
        <filter id={`${u}-blur`}>
          <feGaussianBlur stdDeviation={3.5} />
        </filter>
        <clipPath id={`${u}-otsu`}>
          <rect x={xs[2]} y={y} width={tile} height={tile} rx={10} />
        </clipPath>
      </defs>
      <Arrowheads id={u} />
      <LoopStyles
        css={`
          .${u}-zoom { transform-box: view-box; transform-origin: ${land.x}px ${land.y}px; }
          section.present .${u}-zoom { animation: ${u}-zoom ${zoom.dur}s cubic-bezier(.65,0,.25,1) ${zoom.from}s both; }
          @keyframes ${u}-zoom { from { transform: translate(${start.x - land.x}px, ${start.y - land.y}px) scale(${start.scale.toFixed(3)}); } to { transform: none; } }
          .${u}-slidepal { opacity: 0; }
          section.present .${u}-slidepal { animation: ${u}-out 0.5s ease ${Z - 0.35}s both; }
          section.present .${u}-fluor { animation: sm-fade 0.5s ease ${Z - 0.35}s both; }
          @keyframes ${u}-out { from { opacity: 1; } to { opacity: 0; } }
          section.present .${u}-scan { animation: ${u}-scan 1.4s linear ${Z + 1.5}s 1 both; }
          section.present .${u}-wipe { animation: ${u}-wipe 1.4s linear ${Z + 1.5}s both; }
          @keyframes ${u}-wipe { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0 0 0 0); } }
          @keyframes ${u}-scan { 0% { transform: translateY(0); opacity: 0; } 10%, 90% { opacity: 1; } 100% { transform: translateY(${tile}px); opacity: 0; } }
          .${u}-scan { opacity: 0; }
          @media (prefers-reduced-motion: reduce) {
            section.present :is(.${u}-zoom, .${u}-slidepal, .${u}-fluor) { animation: none; }
          }
        `}
      />

      {/* z stack: the images appear behind the organoid as it lands */}
      <g className="sm-fade" style={delay(Z - 0.4)}>
        {[2, 1, 0].map((k) => (
          <rect key={k} x={xs[0] + k * 10} y={y - k * 10} width={tile - 20} height={tile - 20} rx={10} fill={dark} stroke={BORDER} strokeWidth={1} opacity={1 - k * 0.25} />
        ))}
      </g>
      <g className={`${u}-zoom`}>
        <g className={`${u}-slidepal`}>
          <OrganoidGlyph cx={land.x} cy={land.y} s={land.s} palette="slide" />
        </g>
        <g className={`${u}-fluor`}>
          <OrganoidGlyph cx={land.x} cy={land.y} s={land.s} palette="fluor" />
        </g>
      </g>

      {/* max projection: the same organoid, blurred */}
      <g className="sm-pop" style={delay(Z + 0.5)}>
        <rect x={xs[1]} y={y} width={tile} height={tile} rx={10} fill={dark} />
        <g filter={`url(#${u}-blur)`}>
          <OrganoidGlyph cx={cxs(1)} cy={y + 70} s={0.33} palette="fluor" />
        </g>
      </g>

      {/* otsu: the whole organoid, thresholded; the mask follows the scan */}
      <g className="sm-pop" style={delay(Z + 1.2)}>
        <rect x={xs[2]} y={y} width={tile} height={tile} rx={10} fill={dark} />
        <g filter={`url(#${u}-blur)`} opacity={0.5}>
          <OrganoidGlyph cx={cxs(2)} cy={y + 70} s={0.33} palette="fluor" />
        </g>
        <g className={`${u}-wipe`}>
          <OrganoidGlyph cx={cxs(2)} cy={y + 70} s={0.33} palette="mask" />
        </g>
        <g clipPath={`url(#${u}-otsu)`}>
          <rect className={`${u}-scan`} x={xs[2]} y={y} width={tile} height={3} fill={WARN} />
        </g>
      </g>

      {/* particles: the whole organoid again, one label per cell */}
      <g className="sm-pop" style={delay(Z + 2.4)}>
        <rect x={xs[3]} y={y} width={tile} height={tile} rx={10} fill={dark} />
        <g opacity={0.35}>
          <OrganoidGlyph cx={cxs(3)} cy={y + 70} s={0.33} palette="mask" />
        </g>
        <OrganoidGlyph
          cx={cxs(3)}
          cy={y + 70}
          s={0.33}
          palette="labels"
          cellClass="sm-pop"
          cellDelay={(i) => Z + 2.7 + i * 0.025}
        />
      </g>
      <g className="sm-in" style={delay(Z + 4.3)}>
        <rect x={xs[3] + tile - 74} y={y + tile - 26} width={68} height={20} rx={5} fill={dark} fillOpacity={0.85} />
        <T x={xs[3] + tile - 40} y={y + tile - 15} size={13} mono weight={700} fill="#ffffff">
          n = 61
        </T>
      </g>

      {labels.map((l, i) => (
        <T key={l} className="sm-in" style={delay([Z - 0.2, Z + 0.8, Z + 1.5, Z + 2.7][i])} x={cxs(i)} y={y + tile + 30} size={16} fill={MUTED}>
          {l}
        </T>
      ))}

      {[0, 1, 2, 3].map((i) => (
        <Path
          key={i}
          className="sm-draw"
          style={delay([Z + 0.2, Z + 0.9, Z + 1.9, Z + 4.1][i])}
          d={`M${xs[i] + tile + 10} ${y + 70} L${(i < 3 ? xs[i + 1] : 810) - 12} ${y + 70}`}
          head={`${u}-fg`}
        />
      ))}

      {/* verdict */}
      <g className="sm-in" style={delay(Z + 4.6)}>
        <rect x={812} y={y} width={200} height={tile} rx={12} fill={PRIMARY} fillOpacity={0.07} stroke={PRIMARY} strokeOpacity={0.5} strokeWidth={1.6} />
        <T x={832} y={y + 26} anchor="start" size={12} mono weight={700} fill={MUTED}>
          RESULT
        </T>
      </g>
      <T className="sm-in" style={delay(Z + 4.9)} x={832} y={y + 58} anchor="start" size={18}>
        Density index 45
      </T>
      <T className="sm-in" style={delay(Z + 5.2)} x={832} y={y + 90} anchor="start" size={18}>
        Verdict:
      </T>
      <T className="sm-in" style={delay(Z + 5.5)} x={832} y={y + 114} anchor="start" size={18} weight={700} fill={PRIMARY}>
        needs growth factor
      </T>
    </svg>
  );
}

/* --- and yet ---------------------------------------------------------------- */

/** The organoid, sad: its misshapen core in the middle like a stomach ache,
    big eyes above, a frown below, a tear that keeps running, and a slow sigh. */
export function SadOrganoidFigure() {
  const u = useUid();
  const cx = 220;
  const cy = 222;
  const eye = (x: number) => (
    <g key={x}>
      <ellipse cx={x} cy={cy - 104} rx={24} ry={26} fill="#ffffff" stroke={FG} strokeWidth={3} />
      <circle cx={x + (x < cx ? 4 : -4)} cy={cy - 94} r={10} fill={FG} />
      <circle cx={x + (x < cx ? 7 : -1)} cy={cy - 98} r={3} fill="#ffffff" />
    </g>
  );
  return (
    <svg width={440} height={450} viewBox="0 0 440 450" role="img" aria-label="A sad organoid: misshapen core, big eyes, a frown and a tear" className="shrink-0">
      <LoopStyles
        css={`
          .${u}-sigh { transform-box: view-box; transform-origin: ${cx}px ${cy + 190}px; }
          section.present .${u}-sigh { animation: ${u}-sigh 4.2s ease-in-out 1.4s infinite; }
          @keyframes ${u}-sigh { 0%, 100% { transform: none; } 45% { transform: scale(1.02, 0.95); } }
          .${u}-tear { opacity: 0; }
          section.present .${u}-tear { animation: ${u}-tear 2.6s ease-in 1.6s infinite; }
          @keyframes ${u}-tear { 0% { opacity: 0; transform: translateY(0); } 15% { opacity: 1; } 80% { opacity: 1; transform: translateY(70px); } 100% { opacity: 0; transform: translateY(84px); } }
          @media (prefers-reduced-motion: reduce) { section.present :is(.${u}-sigh, .${u}-tear) { animation: none; } }
        `}
      />
      <ellipse className="sm-fade" style={delay(0.3)} cx={cx} cy={cy + 196} rx={150} ry={12} fill={MUTED} fillOpacity={0.15} />
      <g className="sm-pop" style={delay(0.3)}>
        <g className={`${u}-sigh`}>
          <OrganoidGlyph cx={cx} cy={cy} s={0.95} palette="slide" />
          <g className="sm-in" style={delay(0.9)}>
            {/* brows: inner ends up */}
            <path d={`M${cx - 92} ${cy - 140} L${cx - 42} ${cy - 156} M${cx + 92} ${cy - 140} L${cx + 42} ${cy - 156}`} stroke={FG} strokeWidth={5} strokeLinecap="round" />
            {[cx - 62, cx + 62].map(eye)}
            <path d={`M${cx - 52} ${cy + 118} Q${cx} ${cy + 82} ${cx + 52} ${cy + 118}`} stroke={FG} strokeWidth={6} fill="none" strokeLinecap="round" />
          </g>
          <path
            className={`${u}-tear`}
            d={`M${cx + 80} ${cy - 84} C ${cx + 84} ${cy - 76}, ${cx + 88} ${cy - 72}, ${cx + 88} ${cy - 66} A 8 8 0 1 1 ${cx + 72} ${cy - 66} C ${cx + 72} ${cy - 72}, ${cx + 76} ${cy - 76}, ${cx + 80} ${cy - 84} Z`}
            fill="#60a5fa"
          />
        </g>
      </g>
    </svg>
  );
}

/* --- she publishes --------------------------------------------------------- */

const MACRO_LINES: [string, string][] = [
  ['// kim_organoid.ijm', 'comment'],
  ['run("Z Project...", "projection=[Max Intensity]");', 'code'],
  ['setAutoThreshold("Otsu dark");', 'code'],
  ['run("Convert to Mask");', 'code'],
  ['run("Set Measurements...", "area shape");', 'code'],
  ['run("Analyze Particles...", "size=20-Infinity display");', 'code'],
  ['round = getResult("Round", 0);  // the core', 'code'],
  ['if (round < 0.5) print("needs growth factor");', 'code'],
];

/** Kim's preprint: title, byline, DOI, and the macro itself in the methods,
    typing in line by line. A persona's paper: the title is illustrative. */
export function PaperCard() {
  return (
    <div className="sm-in flex flex-col gap-3 rounded-2xl border border-fd-border bg-fd-card p-6 shadow-sm" style={delay(0.3)}>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-fd-muted-foreground">
          preprint · methods attached
        </span>
        <span className="sm-pop rounded-full bg-fd-primary/15 px-2.5 py-0.5 font-mono text-[12px] font-bold text-fd-primary" style={delay(1.2)}>
          DOI ✓
        </span>
      </div>
      <span className="text-[21px] font-bold leading-snug">
        Core sphericity predicts organoid rescue by growth factor A
      </span>
      <span className="text-[15px] text-fd-muted-foreground">Kim et al. · macro and data on a DOI</span>
      <pre className="mt-1 overflow-hidden rounded-xl border border-fd-border bg-fd-muted/60 px-4 py-3 font-mono text-[13px] leading-[1.65]">
        {MACRO_LINES.map(([line, kind], i) => (
          <span key={i} className={`sm-in block ${kind === 'comment' ? 'text-fd-muted-foreground' : ''}`} style={delay(1.4 + i * 0.22)}>
            {line}
          </span>
        ))}
      </pre>
    </div>
  );
}

/** Figure 2 of Kim's preprint: organoids surviving with and without growth
    factor at the macro's signal. Persona numbers, illustrative. */
export function ResultsChart() {
  const base = 290;
  const h = 200;
  const bars = [
    { label: 'untreated', value: 0.18, x: 70, tone: MUTED },
    { label: 'growth factor', sub: 'when core < 0.5', value: 0.83, x: 210, tone: PRIMARY },
  ];
  return (
    <svg width={360} height={370} viewBox="0 0 360 370" role="img" aria-label="Bar chart: 18 percent of untreated organoids survive to day 7, against 83 percent when growth factor is given at the macro's signal" className="shrink-0">
      <T className="sm-fade" style={delay(2.6)} x={20} y={22} anchor="start" size={13} mono weight={700} fill={MUTED}>
        FIG. 2 · SURVIVAL TO DAY 7
      </T>
      <Path className="sm-draw" style={delay(2.7)} d={`M40 ${base} L340 ${base}`} stroke={BORDER} width={2} />
      {bars.map((b, i) => {
        const bh = b.value * h;
        return (
          <g key={b.label}>
            <rect className="sm-grow-y" style={delay(3 + i * 0.4)} x={b.x} y={base - bh} width={80} height={bh} rx={6} fill={b.tone} fillOpacity={i === 0 ? 0.35 : 0.85} />
            <T className="sm-in" style={delay(3.5 + i * 0.4)} x={b.x + 40} y={base - bh - 16} size={20} weight={700} fill={i === 0 ? MUTED : PRIMARY}>
              {Math.round(b.value * 100)} %
            </T>
            <T className="sm-fade" style={delay(2.9)} x={b.x + 40} y={base + 22} size={15}>
              {b.label}
            </T>
            {b.sub ? (
              <T className="sm-fade" style={delay(2.9)} x={b.x + 40} y={base + 42} size={13} fill={MUTED}>
                {b.sub}
              </T>
            ) : null}
          </g>
        );
      })}
      <g className="sm-in" style={delay(4.4)}>
        <path d={`M110 ${base - 0.18 * h - 40} V64 H250 V${base - 0.83 * h - 40}`} fill="none" stroke={FG} strokeWidth={1.5} />
        <T x={180} y={52} size={14} mono weight={700}>
          p &lt; 0.01
        </T>
      </g>
      <T className="sm-fade" style={delay(4.6)} x={340} y={358} anchor="end" size={13} mono fill={MUTED}>
        n = 48 organoids
      </T>
    </svg>
  );
}

/* --- her dream workflow ------------------------------------------------------ */

/** A star-convex polygon, the shape StarDist draws around a nucleus. */
function starPoly(cx: number, cy: number, r: number, seed: number) {
  const n = 14;
  return Array.from({ length: n }, (_, k) => {
    const a = (k / n) * Math.PI * 2;
    const rr = r * (0.82 + 0.18 * sin(k * 2.3 + seed * 1.7));
    return `${(cx + rr * cos(a)).toFixed(1)},${(cy + rr * sin(a)).toFixed(1)}`;
  }).join(' ');
}

/** The organoid under the lens on the dream-workflow slide, on the same
    ten-second clock as its arrows. While the run keeps answering "no", it
    dies from the core outwards: cells grey and shrink. When the pump's
    growth factor arrives down the tube, it recovers and its core rounds up.
    SMIL throughout, so it stays in step with the arrows. */
function LensOrganoid({
  cx,
  cy,
  r: lensR,
  cycle,
  rescue = [0.8, 0.92],
  die = [0.12, 0.1],
  still = false,
}: {
  cx: number;
  cy: number;
  r: number;
  cycle: string;
  /** When growth factor arrives (shares of the cycle), or null: it never
      does, and the organoid stays dead until the cycle fades it back in. */
  rescue?: [number, number] | null;
  /** When the core starts dying, and how much later each ring follows. */
  die?: [number, number];
  /** No motion: a healthy organoid. */
  still?: boolean;
}) {
  const s = 0.29;
  const grey = '#9ca3af';
  const anim = (attr: string, values: (string | number)[], keyTimes: number[]) =>
    still ? null : (
      <animate attributeName={attr} values={values.join(';')} keyTimes={keyTimes.map((t) => t.toFixed(3)).join(';')} dur={cycle} repeatCount="indefinite" />
    );
  /** Keyframes for a cell, with or without the rescue at the end. */
  const fate = (alive: (string | number)[], dying: (string | number)[], kt: number[], rk: number) =>
    rescue
      ? { values: [...alive, ...dying, ...dying.slice(-1), ...alive.slice(-1), ...alive.slice(-1)], kt: [...kt, rescue[0] + rk, rescue[1] - 0.04 + rk, 1] }
      : { values: [...alive, ...dying, ...dying.slice(-1)], kt: [...kt, 1] };
  return (
    <g>
      {rescue || still ? null : <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.03;0.95;1" dur={cycle} repeatCount="indefinite" />}
      {/* the lens ring: amber while dying, primary once rescued */}
      <circle cx={cx} cy={cy} r={lensR} fill="none" stroke={PRIMARY} strokeWidth={4}>
        {rescue ? anim('stroke-opacity', [1, 0, 0, 1, 1], [0, 0.2, rescue[0], rescue[1], 1]) : anim('stroke-opacity', [1, 0, 0], [0, 0.2, 1])}
      </circle>
      <circle cx={cx} cy={cy} r={lensR} fill="none" stroke={WARN} strokeWidth={4} strokeOpacity={0}>
        {rescue ? anim('stroke-opacity', [0, 1, 1, 0, 0], [0, 0.2, rescue[0], rescue[1], 1]) : anim('stroke-opacity', [0, 1, 1], [0, 0.2, 1])}
      </circle>
      {ORGANOID_RINGS.flatMap(([ringR, n], k) =>
        Array.from({ length: n }, (_, i) => {
          const a = (i / n) * Math.PI * 2 + k * 0.3;
          const x = cx + ringR * s * cos(a);
          const y = cy + ringR * s * sin(a);
          const R = 15 * s;
          const d0 = die[0] + k * die[1] + (i % 4) * 0.012;
          const d1 = d0 + 0.14;
          const rk = k * 0.01;
          // outer cells: alive, then grey and shrunken (then, maybe, alive again)
          const size = fate([R, R], [R * 0.6], [0, d0, d1], rk);
          const alive = fate([1, 1], [0.1], [0, d0, d1], rk);
          const dead = fate([0, 0], [1], [0, d0, d1], rk);
          if (k < 2) {
            // the core: round, then misshapen (the signal), dying, maybe rescued
            const core = (v: (string | number)[]) =>
              rescue
                ? { values: [...v, v[0], v[0]], kt: [0, Math.min(0.08, d0 - 0.02), d0, d1, rescue[0], rescue[1], 1] }
                : { values: [...v.slice(0, 4), v[3]], kt: [0, Math.min(0.08, d0 - 0.02), d0, d1, 1] };
            const rot = `rotate(${(i * 47 + k * 20) % 180} ${x} ${y})`;
            const rx = core([R, R * 1.4, R * 1.4, R * 0.9, R * 0.9]);
            const ry = core([R, R * 0.6, R * 0.6, R * 0.45, R * 0.45]);
            const layers: [string, number[]][] = [
              [WARN, [0, 1, 1, 0.1, 0.1]],
              [grey, [0, 0, 0, 1, 1]],
              [PRIMARY, [1, 0, 0, 0, 0]],
            ];
            return (
              <g key={`${k}-${i}`} transform={rot}>
                {layers.map(([color, v]) => {
                  const o = rescue ? { values: [...v, color === PRIMARY ? 1 : 0, color === PRIMARY ? 1 : 0], kt: rx.kt } : core(v);
                  return (
                    <ellipse key={color} cx={x} cy={y} rx={R} ry={R} fill={color} fillOpacity={0.3} stroke={color} strokeWidth={1.2} opacity={v[0]}>
                      {anim('rx', rx.values, rx.kt)}
                      {anim('ry', ry.values, ry.kt)}
                      {anim('opacity', o.values, o.kt)}
                    </ellipse>
                  );
                })}
              </g>
            );
          }
          return (
            <g key={`${k}-${i}`}>
              <circle cx={x} cy={y} r={R} fill={PRIMARY} fillOpacity={0.18} stroke={PRIMARY} strokeWidth={1.2}>
                {anim('r', size.values, size.kt)}
                {anim('opacity', alive.values, alive.kt)}
              </circle>
              <circle cx={x} cy={y} r={R} fill={grey} fillOpacity={0.25} stroke={grey} strokeWidth={1.2} opacity={0}>
                {anim('r', size.values, size.kt)}
                {anim('opacity', dead.values, dead.kt)}
              </circle>
            </g>
          );
        }),
      )}
    </g>
  );
}

/** Kim's dream, read left to right: the organoid plate (with a lens on her
    organoid), the microscope imaging it, StarDist segmenting, and a decision.
    "No" loops back to keep watching; "yes" goes down to an ESP32-driven
    peristaltic pump, which sends growth factor back along a tube into the
    well.

    Only the arrows move. Over one ten-second cycle they light up in the
    order a run takes them: the main row and the "no" loop, then the main
    row again, "yes", and the tube. All SMIL, so they stay in step.

    `lab` is the same figure, already there and still running. On one
    keypress (a reveal.js fragment) it rearranges into the building Kim
    actually works in: the pump moves next to the plate in the imaging room,
    segmentation and the decision move down the hall, and each step shows
    the computer it runs on. The fragment is an empty marker; everything
    that moves is a later sibling and reacts to `.visible` with `~`. */
export function DreamWorkflowFigure({ variant = 'dream' }: { variant?: 'dream' | 'lab' }) {
  const u = useUid();
  const lab = variant === 'lab';
  const stroke = FG;
  const icon = { fill: SURFACE, stroke, strokeWidth: 2.5, strokeLinejoin: 'round' as const };
  const cycle = '10s';
  const nuclei: [number, number, number][] = [
    [496, 160, 13],
    [528, 154, 11],
    [562, 166, 12],
    [490, 196, 12],
    [526, 190, 14],
    [562, 202, 11],
    [508, 226, 12],
    [546, 226, 13],
  ];
  const lens = { x: 120, y: 190, r: 62 };

  /** Opacity keyframes that are 1 inside the given windows (shares of the
      cycle) and 0 elsewhere. */
  const windows = (spans: [number, number][]) => {
    const kt: number[] = [0];
    const v: number[] = [0];
    for (const [a, b] of spans) {
      kt.push(a, a + 0.015, b, b + 0.015);
      v.push(0, 1, 1, 0);
    }
    kt.push(1);
    v.push(0);
    return { keyTimes: kt.map((t) => t.toFixed(3)).join(';'), values: v.join(';') };
  };
  // the same six connections, as drawn in the dream and in the building
  const arrows: { dream: string; lab: string; spans: [number, number][]; head: 'fg' | 'primary' }[] = [
    { dream: 'M196 190 L274 190', lab: 'M196 190 L274 190', spans: [[0.02, 0.12], [0.5, 0.58]], head: 'fg' },
    { dream: 'M388 190 L462 190', lab: 'M388 190 L542 190', spans: [[0.1, 0.2], [0.56, 0.64]], head: 'fg' },
    { dream: 'M596 190 L690 190', lab: 'M676 190 L800 190', spans: [[0.18, 0.28], [0.62, 0.7]], head: 'fg' },
    { dream: 'M760 126 C 760 30, 330 30, 330 124', lab: 'M870 126 C 870 30, 330 30, 330 124', spans: [[0.26, 0.44]], head: 'fg' },
    { dream: 'M760 254 L760 294', lab: 'M870 254 L870 412 L336 412', spans: [[0.68, 0.76]], head: 'primary' },
    { dream: 'M700 380 L120 380 L120 256', lab: 'M120 292 L120 256', spans: [[0.74, 0.96]], head: 'primary' },
  ];
  const drawn = (which: 'dream' | 'lab', build: boolean) =>
    arrows.map((a, i) =>
      i === 5 ? (
        <path key={i} className={build ? 'sm-fade' : undefined} style={build ? delay(1.4) : undefined} d={a[which]} fill="none" stroke={BORDER} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <Path key={i} className={build ? 'sm-draw' : undefined} style={build ? delay(0.5 + i * 0.3) : undefined} d={a[which]} head={`${u}-${a.head}`} stroke={a.head === 'primary' ? PRIMARY : MUTED} width={a.head === 'primary' ? 3 : 2.5} />
      ),
    );
  /** The radio hop, router to ESP32 (lab only). */
  const wifi = 'M288 398 Q 230 404 172 372';
  const flows = (which: 'dream' | 'lab') =>
    arrows.map((a, i) => {
      const w = windows(a.spans);
      return (
        <path key={i} d={a[which]} fill="none" stroke={PRIMARY} strokeWidth={4.5} strokeDasharray="9 9" strokeLinecap="round" strokeLinejoin="round" opacity={0}>
          <animate attributeName="stroke-dashoffset" values="18;0" dur="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values={w.values} keyTimes={w.keyTimes} dur={cycle} repeatCount="indefinite" />
        </path>
      );
    });

  /* In the lab variant, every top-level group is a sibling of the marker
     fragment: `still` skips its build, `mv` moves it, `dream` and `labOnly`
     cross-fade. */
  const still = lab ? 'sm-still' : '';
  const mv = (dx: number, dy = 0) => ({
    className: `${still} ${u}-mv`,
    style: { ['--dx' as string]: dx, ['--dy' as string]: dy } as CSSProperties,
  });
  const labOnly = (at: number) => ({
    className: `${u}-lab`,
    style: { ['--ld' as string]: `${at}s` } as CSSProperties,
  });
  const css = `
.${u}-mv { transition: transform 1.1s cubic-bezier(.6,0,.2,1) 0.2s; }
.${u}-on.visible ~ .${u}-mv { transform: translate(calc(var(--dx) * 1px), calc(var(--dy) * 1px)); }
.${u}-dream { transition: opacity 0.3s; }
.${u}-on.visible ~ .${u}-dream { opacity: 0; }
.${u}-lab { opacity: 0; transition: opacity 0.3s; }
.${u}-on.visible ~ .${u}-lab { opacity: 1; transition: opacity 0.6s ease-out var(--ld, 0s); }
@media (prefers-reduced-motion: reduce) { .${u}-mv, .${u}-dream, .${u}-lab { transition: none !important; } }
`;
  /** A computer and its name: which machine a step runs on. */
  const computer = (x: number, y: number, kind: 'desktop' | 'server' | 'laptop', name: string, anchor: 'middle' | 'start' = 'middle') => {
    const textW = name.length * 8.1;
    const left = anchor === 'middle' ? x - (28 + 8 + textW) / 2 : x;
    const c = { fill: 'none', stroke: WARN, strokeWidth: 2, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const };
    return (
      <g>
        <g transform={`translate(${left} ${y - 11})`}>
          {kind === 'desktop' ? (
            <>
              <rect x={1} y={0} width={26} height={17} rx={2.5} {...c} />
              <path d="M14 17 V21 M8 22 H20" {...c} />
            </>
          ) : kind === 'server' ? (
            <>
              <rect x={5} y={0} width={18} height={22} rx={2.5} {...c} />
              <path d="M9 6 H19 M9 11 H19" {...c} />
              <circle cx={14} cy={17} r={1.4} fill={WARN} />
            </>
          ) : (
            <>
              <rect x={4} y={1} width={20} height={14} rx={2} {...c} />
              <path d="M0 19 H28" {...c} strokeWidth={2.6} />
            </>
          )}
        </g>
        <T x={left + 36} y={y} anchor="start" size={13} mono weight={700} fill={WARN}>
          {name}
        </T>
      </g>
    );
  };
  const room = (x: number, w: number, name: string, anchor: 'start' | 'end') => (
    <g>
      <rect x={x} y={16} width={w} height={416} rx={6} fill={FG} fillOpacity={0.025} stroke={MUTED} strokeOpacity={0.55} strokeWidth={5} />
      <T x={anchor === 'start' ? x + 16 : x + w - 16} y={38} anchor={anchor} size={13} mono weight={700} fill={MUTED}>
        {name}
      </T>
    </g>
  );

  return (
    <svg
      width={1080}
      height={440}
      viewBox="-40 0 1080 440"
      role="img"
      aria-label={
        lab
          ? "The same workflow in Kim's building: the plate, the microscope PC and the ESP32-driven pump in the imaging room; segmentation on a GPU server and the decision on her laptop, in an office down the hall. Every connection crosses between rooms."
          : "Kim's dream workflow, left to right: the organoid plate is imaged, segmented with StarDist, and a decision checks the core. No: keep watching. Yes: an ESP32-driven pump sends growth factor back into the organoid's well."
      }
      className="mx-auto block"
    >
      <Arrowheads id={u} />
      {lab ? (
        <>
          <LoopStyles css={css} />
          <Fragment as="g" index={1} className={`${u}-on`} />
          {/* the building, under everything else */}
          <g {...labOnly(0)}>
            {room(0, 448, 'IMAGING ROOM', 'start')}
            {room(500, 536, 'OFFICE · DOWN THE HALL', 'end')}
          </g>
        </>
      ) : null}

      {/* the arrows, drawn in, then lighting up in the order a run takes them */}
      <g className={lab ? `sm-still ${u}-dream` : undefined}>
        {drawn('dream', true)}
        <g className={lab ? undefined : 'sm-fade'} style={lab ? undefined : delay(2.2)}>
          {flows('dream')}
        </g>
      </g>
      {lab ? (
        <g {...labOnly(1.2)}>
          {drawn('lab', false)}
          {flows('lab')}
          {/* the pump is not on the wire: the cable ends at a router, and the
              last hop to the ESP32 is radio, on a network of its own */}
          <path d={wifi} fill="none" stroke={WARN} strokeWidth={2.5} strokeDasharray="1 7" strokeLinecap="round" />
          <path d={wifi} fill="none" stroke={PRIMARY} strokeWidth={4} strokeDasharray="1 9" strokeLinecap="round" opacity={0}>
            <animate attributeName="stroke-dashoffset" values="20;0" dur="0.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values={windows([[0.73, 0.8]]).values} keyTimes={windows([[0.73, 0.8]]).keyTimes} dur={cycle} repeatCount="indefinite" />
          </path>
          <g transform="translate(232 394)">
            <circle r={13} fill="var(--color-fd-background)" stroke={WARN} strokeWidth={1.5} />
            <path d="M-8 -2 Q0 -9 8 -2 M-5 1.5 Q0 -2.5 5 1.5" fill="none" stroke={WARN} strokeWidth={2} strokeLinecap="round" />
            <circle cy={5} r={1.8} fill={WARN} />
          </g>
          {/* the router the cable ends at */}
          <g fill="none" stroke={WARN} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect x={292} y={404} width={40} height={16} rx={3} fill={SURFACE} />
            <path d="M298 404 L294 392 M326 404 L330 392" />
            <circle cx={302} cy={412} r={1.6} fill={WARN} stroke="none" />
            <circle cx={309} cy={412} r={1.6} fill={WARN} stroke="none" />
          </g>
          <T x={312} y={380} size={12} mono weight={700} fill={WARN}>
            Wi-Fi router
          </T>
        </g>
      ) : null}

      <g {...mv(55)}>
        <T className="sm-in" style={delay(1.8)} x={545} y={44} size={14} mono weight={700} fill={MUTED}>
          no · keep watching
        </T>
      </g>
      <g {...mv(110, 26)}>
        <T className="sm-in" style={delay(2)} x={774} y={274} anchor="start" size={14} mono weight={700} fill={PRIMARY}>
          yes
        </T>
      </g>
      <g className={lab ? `sm-still ${u}-dream` : undefined}>
        <T className="sm-in" style={delay(1.6)} x={420} y={366} size={14} weight={600} fill={PRIMARY}>
          growth factor A
        </T>
      </g>

      {/* the plate, with a lens on Kim's organoid */}
      <g className={still}>
        <g className="sm-pop" style={delay(0.2)}>
          <rect x={20} y={110} width={200} height={160} rx={14} {...icon} strokeWidth={2} />
          {Array.from({ length: 12 }, (_, i) => (
            <circle key={i} cx={50 + (i % 4) * 46} cy={145 + Math.floor(i / 4) * 45} r={16} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
          ))}
        </g>
        <g className="sm-pop" style={delay(0.5)}>
          <circle cx={lens.x + 3} cy={lens.y + 5} r={lens.r} fill={FG} fillOpacity={0.12} />
          <circle cx={lens.x} cy={lens.y} r={lens.r} fill={SURFACE} />
          <LensOrganoid cx={lens.x} cy={lens.y} r={lens.r} cycle={cycle} />
        </g>
        <T className="sm-in" style={delay(0.3)} x={120} y={92} size={19} weight={600}>
          Organoid plate
        </T>

        {/* acquire: a microscope */}
        <g className="sm-pop" style={delay(0.4)}>
          <g transform="translate(160 95)">
            <rect x={122} y={140} width={96} height={12} rx={4} {...icon} />
            <path d="M204 140 V70 Q204 50 184 50 H170" fill="none" stroke={stroke} strokeWidth={10} strokeLinecap="round" />
            <rect x={142} y={36} width={36} height={22} rx={6} {...icon} />
            <rect x={153} y={58} width={16} height={26} rx={3} {...icon} />
            <polygon points="155,86 167,86 176,108 146,108" fill={PRIMARY} fillOpacity={0.35} />
            <rect x={132} y={108} width={68} height={8} rx={3} {...icon} />
          </g>
        </g>
        <T className="sm-in" style={delay(0.5)} x={330} y={272} size={19} weight={600}>
          Acquire
        </T>
        <T className="sm-in" style={delay(0.55)} x={330} y={292} size={14} fill={MUTED}>
          lightsheet
        </T>
      </g>

      {/* segment: StarDist outlines */}
      <g {...mv(80)}>
        <g className="sm-pop" style={delay(0.7)}>
          <rect x={470} y={130} width={120} height={120} rx={12} fill="#2b1b4d" stroke={stroke} strokeWidth={2.5} />
          {nuclei.map(([x, y, r], i) => (
            <polygon key={i} className="sm-pop" style={delay(1 + i * 0.1)} points={starPoly(x, y, r, i)} fill={LABELS[i % LABELS.length]} fillOpacity={0.35} stroke={LABELS[i % LABELS.length]} strokeWidth={2} />
          ))}
        </g>
        <T className="sm-in" style={delay(0.8)} x={530} y={272} size={19} weight={600}>
          Segment
        </T>
        <T className="sm-in" style={delay(0.85)} x={530} y={292} size={14} fill={MUTED}>
          StarDist
        </T>
      </g>

      {/* decide */}
      <g {...mv(110)}>
        <g className="sm-pop" style={delay(1)}>
          <circle cx={760} cy={190} r={62} {...icon} />
          <T x={760} y={180} size={15} weight={700}>
            core
          </T>
          <T x={760} y={200} size={15} mono weight={700} fill={WARN}>
            &lt; 0.5?
          </T>
        </g>
        <T className="sm-in" style={delay(1.1)} x={836} y={180} anchor="start" size={19} weight={600}>
          Decide
        </T>
        <T className="sm-in" style={delay(1.15)} x={836} y={200} anchor="start" size={14} fill={MUTED}>
          sphericity
        </T>
      </g>

      {/* pump: peristaltic, driven by an ESP32 */}
      <g {...mv(-660, -8)}>
        <g className="sm-pop" style={delay(1.3)}>
          <g transform="translate(596 26)">
            <rect x={104} y={274} width={128} height={98} rx={16} {...icon} />
            <circle cx={152} cy={320} r={33} fill="none" stroke={MUTED} strokeWidth={2} />
            {[0, 120, 240].map((a) => {
              const r = (a * Math.PI) / 180;
              return (
                <g key={a}>
                  <line x1={152} y1={320} x2={152 + 20 * cos(r)} y2={320 + 20 * sin(r)} stroke={stroke} strokeWidth={3} />
                  <circle cx={152 + 20 * cos(r)} cy={320 + 20 * sin(r)} r={7} fill={PRIMARY} stroke={stroke} strokeWidth={1.5} />
                </g>
              );
            })}
            <circle cx={152} cy={320} r={5} fill={stroke} />
            <rect x={198} y={336} width={26} height={22} rx={3} fill="#1f2937" />
            {[0, 1, 2, 3].map((k) => (
              <line key={k} x1={202 + k * 6} y1={336} x2={202 + k * 6} y2={331} stroke="#1f2937" strokeWidth={1.5} />
            ))}
          </g>
        </g>
        <T className="sm-in" style={delay(1.4)} x={840} y={340} anchor="start" size={19} weight={600}>
          Pump
        </T>
        <T className="sm-in" style={delay(1.45)} x={840} y={360} anchor="start" size={14} fill={MUTED}>
          ESP32
        </T>
      </g>

      {/* which computer each step runs on */}
      {lab ? (
        <g {...labOnly(1.4)}>
          {computer(330, 318, 'desktop', 'microscope PC')}
          {computer(610, 318, 'server', 'GPU server')}
          {computer(946, 228, 'laptop', 'laptop', 'start')}
          {/* the ESP32's own network */}
          <rect x={26} y={282} width={226} height={118} rx={14} fill={WARN} fillOpacity={0.05} stroke={WARN} strokeWidth={1.8} strokeDasharray="7 6" />
          <rect x={52} y={392} width={150} height={16} rx={4} fill="var(--color-fd-background)" />
          <T x={127} y={400} size={12} mono weight={700} fill={WARN}>
            own Wi-Fi network
          </T>
        </g>
      ) : null}
    </svg>
  );
}

/* --- her loop --------------------------------------------------------------- */

type LoopVariant = 'dream' | 'lab' | 'arkitekt';

const NW = 220;
const NH = 96;
const LOOP_NODES = [
  { name: 'Acquire', what: 'lightsheet', machine: 'microscope PC · 20 s', action: 'action · microscope PC', x: 60, y: 24 },
  { name: 'Segment', what: 'StarDist', machine: 'GPU server · 1–2 min', action: 'action · GPU server', x: 720, y: 24 },
  { name: 'Decide', what: 'sphericity < 0.5?', machine: 'laptop · 0.3 s', action: 'workflow step', x: 720, y: 288 },
  { name: 'Pump', what: 'growth factor A', machine: 'ESP32 · instant', action: 'action · ESP32', x: 60, y: 288 },
];

/** Kim's closed loop: acquire, segment, decide, pump, and round again.
    `dream` is the plan, with a sample going round. `lab` is what four
    computers make of it: the analysis can't keep up, so stacks pile up in
    front of segmentation. `arkitekt` is the same loop with every call going
    through the hub. */
export function KimLoopFigure({ variant }: { variant: LoopVariant }) {
  const u = useUid();
  const [acq, seg, dec, pump] = LOOP_NODES;
  const mid = (n: (typeof LOOP_NODES)[number]) => [n.x + NW / 2, n.y + NH / 2];
  const edges = [
    `M${acq.x + NW + 8} ${mid(acq)[1]} L${seg.x - 10} ${mid(seg)[1]}`,
    `M${mid(seg)[0]} ${seg.y + NH + 8} L${mid(dec)[0]} ${dec.y - 10}`,
    `M${dec.x - 8} ${mid(dec)[1]} L${pump.x + NW + 10} ${mid(pump)[1]}`,
    `M${mid(pump)[0]} ${pump.y - 8} L${mid(acq)[0]} ${acq.y + NH + 10}`,
  ];
  const ring = `M${mid(acq)[0]} ${mid(acq)[1]} L${mid(seg)[0]} ${mid(seg)[1]} L${mid(dec)[0]} ${mid(dec)[1]} L${mid(pump)[0]} ${mid(pump)[1]} Z`;
  const hub = { x: 390, y: 140, w: 220, h: 136 };
  const hc = [hub.x + hub.w / 2, hub.y + hub.h / 2];
  const spokes = LOOP_NODES.map((n) => {
    const [nx, ny] = mid(n);
    const sx = nx < hc[0] ? n.x + NW : n.x;
    const sy = ny;
    const ex = nx < hc[0] ? hub.x : hub.x + hub.w;
    const ey = ny < hc[1] ? hub.y + 30 : hub.y + hub.h - 30;
    return `M${sx} ${sy} L${ex} ${ey}`;
  });
  const viaHub = `M${mid(acq)[0]} ${mid(acq)[1]} L${hc[0]} ${hc[1]} L${mid(seg)[0]} ${mid(seg)[1]} L${hc[0]} ${hc[1]} L${mid(dec)[0]} ${mid(dec)[1]} L${hc[0]} ${hc[1]} L${mid(pump)[0]} ${mid(pump)[1]} L${hc[0]} ${hc[1]} Z`;
  const backlog = 6;
  const loopCss =
    variant === 'lab'
      ? `${Array.from({ length: backlog }, (_, i) => {
          const at = 8 + i * 13;
          return `section.present .${u}-q${i} { animation: ${u}-q${i} 9s linear 1.6s infinite both; }
          @keyframes ${u}-q${i} { 0%, ${at}% { opacity: 0; transform: translateX(-40px); } ${at + 4}%, 94% { opacity: 1; transform: none; } 100% { opacity: 0; } }`;
        }).join('\n')}`
      : '';
  return (
    <svg
      width={1000}
      height={420}
      viewBox="0 0 1000 420"
      role="img"
      aria-label={
        variant === 'lab'
          ? 'Kim’s loop spread over four computers: a new stack every 20 seconds, segmentation taking 1 to 2 minutes, so stacks pile up'
          : variant === 'arkitekt'
            ? 'Kim’s loop on Arkitekt: every step an action on its device, every call going through the hub'
            : 'Kim’s loop: acquire, segment, decide on sphericity, pump growth factor, repeat'
      }
      className="mx-auto block"
    >
      <Arrowheads id={u} />
      {loopCss ? <LoopStyles css={loopCss} /> : null}

      {/* machines (lab) */}
      {variant === 'lab'
        ? LOOP_NODES.map((n, i) => (
            <g key={n.name} className="sm-fade" style={delay(1.2 + i * 0.15)}>
              <rect x={n.x - 12} y={n.y - 12} width={NW + 24} height={NH + 24} rx={16} fill="none" stroke={WARN} strokeWidth={1.6} strokeDasharray="7 6" />
            </g>
          ))
        : null}

      {/* edges */}
      {edges.map((d, i) => (
        <Path
          key={i}
          className={variant === 'arkitekt' ? 'sm-fade' : 'sm-draw'}
          style={delay(0.5 + i * 0.3)}
          d={d}
          head={variant === 'arkitekt' ? undefined : `${u}-fg`}
          stroke={variant === 'arkitekt' ? BORDER : MUTED}
          dash={variant === 'arkitekt' ? '5 7' : undefined}
        />
      ))}
      {variant === 'arkitekt'
        ? spokes.map((d, i) => (
            <Path key={i} className="sm-draw" style={delay(1.1 + i * 0.2)} d={d} stroke={PRIMARY} width={3} />
          ))
        : null}

      {/* nodes */}
      {LOOP_NODES.map((n, i) => (
        <Box
          key={n.name}
          className="sm-pop"
          style={delay(0.2 + i * 0.3)}
          x={n.x}
          y={n.y}
          w={NW}
          h={NH}
          title={n.name}
          sub={n.what}
          tag={variant === 'arkitekt' ? n.action : variant === 'lab' ? n.machine : undefined}
          tagColor={variant === 'lab' ? WARN : undefined}
          tone={variant === 'arkitekt' ? 'primary' : 'default'}
          titleSize={20}
        />
      ))}

      {/* the middle */}
      {variant === 'arkitekt' ? (
        <Box className="sm-pop" style={delay(0.9)} x={hub.x} y={hub.y} w={hub.w} h={hub.h} title="Arkitekt" sub="one workflow, four devices" tone="solid" titleSize={28} rx={18} />
      ) : variant === 'lab' ? (
        <g className="sm-pop" style={delay(1.8)}>
          <rect x={hub.x} y={hub.y} width={hub.w} height={hub.h} rx={18} fill={WARN} fillOpacity={0.08} stroke={WARN} strokeWidth={1.6} />
          <T x={hc[0]} y={hc[1] - 16} size={26} weight={700} fill={WARN}>
            4 computers
          </T>
          <T x={hc[0]} y={hc[1] + 16} size={14} fill={MUTED}>
            stacks pile up at segmentation
          </T>
        </g>
      ) : (
        <g className="sm-fade" style={delay(1.4)}>
          <rect x={hub.x} y={hub.y} width={hub.w} height={hub.h} rx={18} fill={SURFACE} stroke={BORDER} strokeDasharray="6 5" strokeWidth={1.6} />
          {Array.from({ length: 9 }, (_, i) => (
            <circle key={i} className="sm-pulse" style={delay(i * 0.2)} cx={hc[0] - 24 + (i % 3) * 24} cy={hc[1] - 34 + Math.floor(i / 3) * 18} r={8} fill={PRIMARY} fillOpacity={0.25} stroke={PRIMARY} strokeWidth={1.2} />
          ))}
          <T x={hc[0]} y={hc[1] + 36} size={15} fill={MUTED}>
            organoid plate
          </T>
        </g>
      )}

      {/* what moves */}
      {variant === 'dream' ? (
        <g className="sm-fade" style={delay(1.8)}>
          <Token path={ring} dur={7}>
            <rect x={-13} y={-13} width={26} height={26} rx={6} fill={PRIMARY} stroke="var(--color-fd-background)" strokeWidth={2} />
          </Token>
        </g>
      ) : null}
      {variant === 'arkitekt' ? (
        <g className="sm-fade" style={delay(2)}>
          {[0, 0.5].map((phase) => (
            <Token key={phase} path={viaHub} dur={10} phase={phase}>
              <circle r={9} fill={PRIMARY} stroke="var(--color-fd-background)" strokeWidth={2} />
            </Token>
          ))}
        </g>
      ) : null}
      {variant === 'lab' ? (
        <>
          {Array.from({ length: backlog }, (_, i) => (
            <rect key={i} className={`${u}-q${i}`} x={seg.x - 44 - i * 30} y={mid(seg)[1] - 34} width={22} height={22} rx={5} fill={WARN} fillOpacity={0.8} />
          ))}
          <T className="sm-in" style={delay(2.4)} x={seg.x - 44 - 2.5 * 30 + 11} y={mid(seg)[1] + 24} size={14} mono weight={700} fill={WARN}>
            backlog
          </T>
        </>
      ) : null}
    </svg>
  );
}

/* --- nothing new ------------------------------------------------------------ */

/** The three artifacts every facility has, each telling its own small story:
    a file name that keeps growing, a script that no longer runs, a wiki that
    stopped. */
export function YearsFigure() {
  const names = ['final.tif', 'final_v2.tif', 'final_v3.tif', 'final_v3_REALLY_final/'];
  const card = 'flex flex-col gap-3 rounded-2xl border border-fd-border bg-fd-card/60 p-6';
  const head = 'font-mono text-[13px] font-bold uppercase tracking-[0.16em] text-fd-muted-foreground';
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className={`${card} sm-in`} style={delay(0.1)}>
        <span className={head}>the folder</span>
        {names.map((n, i) => (
          <span
            key={n}
            className={`sm-in font-mono text-[19px] ${i === names.length - 1 ? 'font-bold text-fd-primary' : 'text-fd-muted-foreground line-through'}`}
            style={delay(0.5 + i * 0.5)}
          >
            {n}
          </span>
        ))}
      </div>
      <div className={`${card} sm-in`} style={delay(0.3)}>
        <span className={head}>analysis_2014.m</span>
        {[86, 64, 92, 48].map((w, i) => (
          <span key={i} className="sm-grow block h-[12px] rounded-full bg-fd-muted-foreground/25" style={delay(0.7 + i * 0.25, { width: `${w}%` })} />
        ))}
        <span className="sm-in font-mono text-[16px] leading-snug" style={delay(2, { color: WARN })}>
          {"Undefined function or variable 'thresh_v2'."}
        </span>
      </div>
      <div className={`${card} sm-in relative`} style={delay(0.5)}>
        <span className={head}>lab wiki</span>
        {[90, 74, 82, 56].map((w, i) => (
          <span key={i} className="sm-grow block h-[12px] rounded-full bg-fd-muted-foreground/25" style={delay(0.9 + i * 0.25, { width: `${w}%`, opacity: 1 - i * 0.2 })} />
        ))}
        <span className="mt-1 self-start" style={{ transform: 'rotate(-5deg)' }}>
          <span
            className="sm-pop block rounded-lg border-2 px-3 py-1 font-mono text-[15px] font-bold uppercase"
            style={delay(2.2, { color: WARN, borderColor: WARN })}
          >
            last edited 2019
          </span>
        </span>
      </div>
    </div>
  );
}

/* --- they multiply / can we do better -------------------------------------- */

function MiniWorkflow({ x, y, tone }: { x: number; y: number; tone: 'primary' | 'muted' }) {
  const c = tone === 'primary' ? PRIMARY : MUTED;
  return (
    <g>
      <rect x={x} y={y} width={70} height={46} rx={6} fill={SURFACE} stroke={c} strokeWidth={1.5} />
      <line x1={x} y1={y + 11} x2={x + 70} y2={y + 11} stroke={c} strokeWidth={1.2} />
      <rect x={x + 8} y={y + 18} width={36} height={6} rx={3} fill={c} fillOpacity={0.4} />
      <rect x={x + 8} y={y + 30} width={52} height={6} rx={3} fill={c} fillOpacity={0.25} />
      {[0, 1, 2].map((k) => (
        <rect key={k} x={x + 4 + k * 22} y={y + 54} width={16} height={20} rx={2} fill={WARN} fillOpacity={0.25 + k * 0.15} stroke={WARN} strokeWidth={1} />
      ))}
    </g>
  );
}

/** One workflow with its own UI and its own file pile, then twenty. */
export function MultiplyFigure() {
  const cols = 5;
  const rows = 4;
  return (
    <svg width={520} height={420} viewBox="0 0 520 420" role="img" aria-label="One workflow with its own UI and files, multiplying into twenty" className="shrink-0">
      {Array.from({ length: cols * rows }, (_, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        const at = i === 0 ? 0.2 : 0.9 + (c + r) * 0.16 + i * 0.015;
        return (
          <g key={i} className="sm-pop" style={delay(at)}>
            <MiniWorkflow x={12 + c * 102} y={14 + r * 102} tone={i === 0 ? 'primary' : 'muted'} />
          </g>
        );
      })}
    </svg>
  );
}

/** Scattered pieces settling around one hub. */
export function BetterFigure() {
  const n = 16;
  const cx = 260;
  const cy = 210;
  const r = 160;
  return (
    <svg width={520} height={420} viewBox="0 0 520 420" role="img" aria-label="Scattered pieces settling into a ring around one hub" className="shrink-0">
      {Array.from({ length: n }, (_, i) => {
        const a = (i / n) * Math.PI * 2;
        const x = cx + r * cos(a);
        const y = cy + r * sin(a);
        return (
          <Path key={`s${i}`} className="sm-draw" style={delay(1.9 + i * 0.04)} d={`M${x} ${y} L${cx + 48 * cos(a)} ${cy + 48 * sin(a)}`} stroke={PRIMARY} width={1.6} opacity={0.5} />
        );
      })}
      {Array.from({ length: n }, (_, i) => {
        const a = (i / n) * Math.PI * 2;
        const x = cx + r * cos(a);
        const y = cy + r * sin(a);
        const dx = (((i * 97) % 200) - 100) * 1.6;
        const dy = (((i * 53 + 31) % 200) - 100) * 1.3;
        return (
          <rect
            key={i}
            className="sm-converge"
            style={{ ['--x' as string]: `${dx}px`, ['--y' as string]: `${dy}px`, ['--d' as string]: `${0.2 + i * 0.05}s` } as CSSProperties}
            x={x - 16}
            y={y - 16}
            width={32}
            height={32}
            rx={7}
            fill={SURFACE}
            stroke={i % 3 === 0 ? WARN : MUTED}
            strokeWidth={1.6}
          />
        );
      })}
      <g className="sm-pop" style={delay(1.7)}>
        <circle cx={cx} cy={cy} r={46} fill={PRIMARY} />
        <T x={cx} y={cy + 2} size={40} weight={700} fill="var(--color-fd-primary-foreground)">
          ?
        </T>
      </g>
    </svg>
  );
}


/* --- meme: "you solved a distributed system…" ------------------------------ */

const anton = Anton({ weight: '400', subsets: ['latin'] });

const MEME_TEXT: CSSProperties = {
  color: '#fff',
  textShadow:
    '3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 0 3px 0 #000, 3px 0 0 #000, 0 -3px 0 #000, -3px 0 0 #000, 0 6px 14px rgba(0,0,0,.35)',
};

/** A small desktop: screen and stand. */
function MemeComputer({ x, y, color = '#1f2937' }: { x: number; y: number; color?: string }) {
  return (
    <g>
      <rect x={x - 24} y={y - 17} width={48} height={32} rx={4} fill="#f8fafc" stroke={color} strokeWidth={3} />
      <path d={`M${x} ${y + 15} L${x} ${y + 23} M${x - 12} ${y + 24} L${x + 12} ${y + 24}`} stroke={color} strokeWidth={3} strokeLinecap="round" />
    </g>
  );
}

/** Original meme panel: Reviewer 2 peers over their glasses at "the fix"
    (a hub in the middle of Kim's machines) while the classic top and
    bottom text land. Fixed colours: it's a picture, not themed UI. */
export function DistributedMemeFigure() {
  const u = useUid();
  const before: [number, number][] = [
    [40, 70],
    [190, 58],
    [36, 270],
    [196, 262],
  ];
  const after: [number, number][] = [
    [340, 62],
    [520, 62],
    [340, 282],
    [520, 282],
  ];
  const hub = [430, 172] as const;
  const tangle = [
    'M40 70 C 140 140, 60 200, 196 262',
    'M190 58 C 90 150, 160 210, 36 270',
    'M40 70 C 110 30, 140 110, 190 58',
    'M36 270 C 120 230, 90 320, 196 262',
    'M40 70 C 0 160, 90 180, 36 270',
    'M190 58 C 250 140, 140 200, 196 262',
  ];
  const css = `
.${u}-brow, .${u}-squint, .${u}-look { transform-box: fill-box; transform-origin: center; }
.${u}-brow { transform: translateY(-13px) rotate(-7deg); }
.${u}-squint { transform: scaleY(0.45); }
section.present .${u}-brow { animation: ${u}-brow 0.45s cubic-bezier(.3,1.6,.5,1) 2.7s both; }
section.present .${u}-squint { animation: ${u}-squint 0.35s ease-out 2.7s both; }
section.present .${u}-look { animation: ${u}-look 2s ease-in-out 0.9s both; }
@keyframes ${u}-brow { from { transform: none; } to { transform: translateY(-13px) rotate(-7deg); } }
@keyframes ${u}-squint { from { transform: none; } to { transform: scaleY(0.45); } }
@keyframes ${u}-look { 0% { transform: none; } 18%, 70% { transform: translateX(8px) translateY(-2px); } 100% { transform: none; } }
.${u}-slam { opacity: 1; }
section.present .${u}-slam { animation: ${u}-slam 0.45s cubic-bezier(.2,1.4,.4,1) var(--d) both; }
@keyframes ${u}-slam { from { opacity: 0; transform: scale(1.6); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) {
  section.present :is(.${u}-brow, .${u}-squint, .${u}-look, .${u}-slam) { animation: none; }
}
`;
  return (
    <div
      className="sm-pop relative h-[560px] w-[1060px] overflow-hidden rounded-2xl border-4 border-black/80 shadow-2xl"
      style={{ ...delay(0.05), background: 'radial-gradient(ellipse at 30% 40%, #e8eef5 0%, #c9d5e2 55%, #a9b9cb 100%)' }}
      role="img"
      aria-label="Meme: a grumpy reviewer looks over their glasses at a diagram where Kim's tangled machines are replaced by a hub that is circled as also distributed. Top text: you solved a distributed system. Bottom text: by adding another distributed system."
    >
      <LoopStyles css={css} />

      {/* Reviewer 2 */}
      <svg width={430} height={473} viewBox="0 0 400 440" className="absolute bottom-0 left-[20px]" aria-hidden>
        <path d="M24 440 C 34 352, 116 330, 200 330 C 284 330, 366 352, 376 440 Z" fill="#5b6472" />
        <path d="M168 334 L200 384 L232 334 Z" fill="#eef2f6" />
        <rect x={176} y={276} width={48} height={62} fill="#d99a73" />
        <ellipse cx={93} cy={200} rx={16} ry={25} fill="#e3a682" />
        <ellipse cx={307} cy={200} rx={16} ry={25} fill="#e3a682" />
        <ellipse cx={200} cy={192} rx={108} ry={122} fill="#eab08c" />
        <path d="M92 196 C 84 100, 138 60, 200 60 C 262 60, 316 100, 308 196 C 302 150, 292 122, 270 110 C 252 128, 238 96, 200 104 C 168 96, 152 126, 130 110 C 110 122, 98 150, 92 196 Z" fill="#a3aab5" />
        <path d="M150 128 Q 200 118 250 128 M162 142 Q 200 134 238 142" stroke="#c98a66" strokeWidth={3} fill="none" strokeLinecap="round" opacity={0.7} />
        {/* eyebrows: one down, one up */}
        <path d="M124 150 L 180 166" stroke="#4b5563" strokeWidth={10} strokeLinecap="round" />
        <path className={`${u}-brow`} d="M220 160 Q 250 146 282 154" stroke="#4b5563" strokeWidth={10} strokeLinecap="round" fill="none" />
        {/* eyes, looking over the glasses */}
        <g className={`${u}-squint`}>
          <ellipse cx={154} cy={186} rx={22} ry={12} fill="#fff" stroke="#7c4a33" strokeWidth={2} />
          <circle className={`${u}-look`} cx={156} cy={187} r={7} fill="#1f2937" />
        </g>
        <ellipse cx={246} cy={184} rx={22} ry={14} fill="#fff" stroke="#7c4a33" strokeWidth={2} />
        <circle className={`${u}-look`} cx={248} cy={185} r={7} fill="#1f2937" />
        {/* reading glasses, low on the nose */}
        <rect x={120} y={204} width={68} height={34} rx={9} fill="#ffffff" fillOpacity={0.25} stroke="#1f2937" strokeWidth={5} />
        <rect x={212} y={202} width={68} height={34} rx={9} fill="#ffffff" fillOpacity={0.25} stroke="#1f2937" strokeWidth={5} />
        <path d="M188 218 Q 200 210 212 216 M120 214 L 96 200 M280 212 L 304 198" stroke="#1f2937" strokeWidth={4} fill="none" />
        <path d="M200 192 Q 186 240 198 250 Q 207 254 214 246" stroke="#c98a66" strokeWidth={4} fill="none" strokeLinecap="round" />
        <path d="M162 284 Q 196 278 240 266" stroke="#7c3f2a" strokeWidth={6} fill="none" strokeLinecap="round" />
        <g transform="rotate(-5 290 362)">
          <rect x={238} y={346} width={104} height={32} rx={6} fill="#fff" stroke="#111" strokeWidth={2} />
          <text x={290} y={367} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize={13} fontWeight={800} fill="#b91c1c">
            REVIEWER 2
          </text>
        </g>
      </svg>

      {/* what they're looking at: the tangle, and "the fix" */}
      <svg width={580} height={360} viewBox="-20 0 580 360" className="absolute right-[24px] top-[96px]" aria-hidden>
        <Arrowheads id={u} />
        <g className="sm-fade" style={delay(0.7)}>
          <rect x={-14} y={8} width={256} height={330} rx={14} fill="#fff" fillOpacity={0.55} />
          <rect x={290} y={8} width={256} height={330} rx={14} fill="#fff" fillOpacity={0.55} />
        </g>
        {tangle.map((d, i) => (
          <Path key={i} className="sm-draw" style={delay(0.9 + i * 0.08)} d={d} stroke="#d97706" width={2.6} />
        ))}
        <g className="sm-fade" style={delay(0.8)}>
          {before.map(([x, y]) => (
            <MemeComputer key={`b${x}${y}`} x={x} y={y} />
          ))}
          <text x={114} y={326} textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize={17} fontWeight={700} fill="#334155">
            Kim’s lab
          </text>
        </g>
        <Path className="sm-draw" style={delay(1.6)} d="M248 172 L284 172" stroke="#334155" width={3.5} head={`${u}-fg`} />
        {after.map(([x, y], i) => (
          <Path key={`l${i}`} className="sm-draw" style={delay(1.9 + i * 0.06)} d={`M${x} ${y} L${hub[0]} ${hub[1]}`} stroke={PRIMARY} width={3} />
        ))}
        <g className="sm-fade" style={delay(1.8)}>
          {after.map(([x, y]) => (
            <MemeComputer key={`a${x}${y}`} x={x} y={y} />
          ))}
          <circle cx={hub[0]} cy={hub[1]} r={28} fill={PRIMARY} stroke="#fff" strokeWidth={3} />
          <text x={hub[0]} y={hub[1] + 6} textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize={16} fontWeight={800} fill="#fff">
            hub
          </text>
          <text x={418} y={326} textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize={17} fontWeight={700} fill="#334155">
            “the fix”
          </text>
        </g>
        {/* the red circle of doubt */}
        <Path className="sm-draw" style={delay(3.1)} d="M478 140 C 470 104, 394 102, 372 140 C 352 176, 380 226, 436 224 C 490 222, 506 178, 476 132" stroke="#dc2626" width={4.5} />
        <text className="sm-fade" style={delay(3.5)} x={436} y={258} textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontStyle="italic" fontSize={19} fontWeight={800} fill="#dc2626" stroke="#fff" strokeWidth={5} paintOrder="stroke" strokeLinejoin="round">
          also distributed?!
        </text>
      </svg>

      {/* top and bottom text */}
      <div className="absolute inset-x-0 top-[18px] text-center">
        <span className={`${u}-slam inline-block whitespace-nowrap text-[52px] uppercase leading-none tracking-[0.01em] ${anton.className}`} style={{ ...MEME_TEXT, ...delay(0.35) }}>
          You solved a distributed system
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-[18px] text-center">
        <span className={`${u}-slam inline-block whitespace-nowrap text-[52px] uppercase leading-none tracking-[0.01em] ${anton.className}`} style={{ ...MEME_TEXT, ...delay(3.9) }}>
          by adding another distributed system
        </span>
      </div>
    </div>
  );
}

/* --- the four horsemen ---------------------------------------------------------- */

const fraktur = UnifrakturMaguntia({ weight: '400', subsets: ['latin'] });

type HorsemanKind = 'connection' | 'errors' | 'data' | 'repro' | 'ai';

/** The four of Kim's nights, and a fifth who rides in on the hype. */
export const HORSEMEN: Record<keyof typeof NIGHTS | 'ai', { kind: HorsemanKind; ordinal: string; name: string; epithet: string; horse: string; mane: string; cloak: string; aura: string }> = {
  communication: {
    kind: 'connection',
    ordinal: 'The first horseman',
    name: 'Connection',
    epithet: 'who scatters your machines across the network',
    horse: '#e5e7eb',
    mane: '#9ca3af',
    cloak: '#374151',
    aura: 'rgba(147,197,253,0.45)',
  },
  threads: {
    kind: 'errors',
    ordinal: 'The second horseman',
    name: 'Error handling & Observability',
    epithet: 'who swallows every exception, and the logs with it',
    horse: '#b91c1c',
    mane: '#f97316',
    cloak: '#1f2937',
    aura: 'rgba(249,115,22,0.5)',
  },
  data: {
    kind: 'data',
    ordinal: 'The third horseman',
    name: 'Data Management',
    epithet: 'who renames every file final_v3_REALLY_final',
    horse: '#111827',
    mane: '#4b5563',
    cloak: '#0b0f19',
    aura: 'rgba(167,139,250,0.45)',
  },
  repro: {
    kind: 'repro',
    ordinal: 'The fourth horseman',
    name: 'Reproducibility',
    epithet: 'who lets it work exactly once',
    horse: '#a8b49a',
    mane: '#6b7563',
    cloak: '#2a2f26',
    aura: 'rgba(190,242,100,0.35)',
  },
  ai: {
    kind: 'ai',
    ordinal: 'And a fifth horseman',
    name: 'The AI Horse',
    epithet: 'who answers everything, confidently',
    horse: '#c4b5fd',
    mane: '#22d3ee',
    cloak: '#312e81',
    aura: 'rgba(196,181,253,0.5)',
  },
};

export type HorsemanKey = keyof typeof HORSEMEN;

/** What each horseman carries. Hand at (222,135) unless noted. */
function HorsemanEmblem({ kind, u }: { kind: HorsemanKind; u: string }) {
  if (kind === 'connection')
    return (
      <g>
        <path d="M222 135 C 196 104, 146 116, 156 74 C 164 42, 214 44, 206 76 C 199 100, 166 92, 172 64 L 176 50" fill="none" stroke="#e5e7eb" strokeWidth={6} strokeLinecap="round" />
        <path d="M222 135 C 196 104, 146 116, 156 74 C 164 42, 214 44, 206 76 C 199 100, 166 92, 172 64 L 176 50" fill="none" stroke="#374151" strokeWidth={2} strokeLinecap="round" strokeDasharray="2 6" />
        <rect x={168} y={30} width={18} height={22} rx={3} fill="#e5e7eb" stroke="#111" strokeWidth={2.5} transform="rotate(10 177 41)" />
        <path d="M172 34 L172 40 M177 34 L177 40 M182 34 L182 40" stroke="#111" strokeWidth={1.6} transform="rotate(10 177 41)" />
        <g className={`${u}-spark`}>
          <path d="M190 18 L196 28 L207 25 L199 33 L206 42 L195 38 L190 48 L188 37 L177 36 L187 30 Z" fill="#facc15" stroke="#a16207" strokeWidth={1.2} />
        </g>
      </g>
    );
  if (kind === 'errors')
    return (
      <g>
        <g className={`${u}-flame`}>
          <path d="M176 22 C 160 46, 170 64, 186 80 C 176 56, 196 50, 190 30 C 200 44, 212 60, 206 92 C 222 70, 214 44, 194 18 C 192 30, 186 34, 176 22 Z" fill="#f97316" opacity={0.9} />
          <path d="M184 40 C 178 56, 186 70, 196 82 C 194 66, 204 60, 198 46 C 196 54, 190 54, 184 40 Z" fill="#facc15" />
        </g>
        <path d="M219 138 L227 131 L180 28 L170 32 Z" fill="#e5e7eb" stroke="#111" strokeWidth={2.5} strokeLinejoin="round" />
        <path d="M208 126 L236 142" stroke="#111" strokeWidth={7} strokeLinecap="round" />
        <text x={196} y={84} fontFamily="ui-monospace, monospace" fontSize={8} fontWeight={700} fill="#7f1d1d" transform="rotate(-66 196 84)">
          Traceback
        </text>
      </g>
    );
  if (kind === 'ai')
    return (
      <g>
        <path d="M222 135 L196 58" stroke="#78350f" strokeWidth={6} strokeLinecap="round" />
        <rect x={136} y={10} width={112} height={50} rx={14} fill="#fff" stroke="#111" strokeWidth={2.5} />
        <path d="M184 60 L196 74 L200 60 Z" fill="#fff" stroke="#111" strokeWidth={2.5} strokeLinejoin="round" />
        <path d="M186 59 L198 59" stroke="#fff" strokeWidth={4} />
        {[166, 192, 218].map((x) => (
          <circle key={x} className={`${u}-glow`} cx={x} cy={35} r={6} fill="#6d28d9" />
        ))}
        <g className={`${u}-spark`}>
          <path d="M120 20 L124 30 L134 34 L124 38 L120 48 L116 38 L106 34 L116 30 Z" fill="#facc15" stroke="#a16207" strokeWidth={1.2} />
          <path d="M262 4 L265 11 L272 14 L265 17 L262 24 L259 17 L252 14 L259 11 Z" fill="#facc15" stroke="#a16207" strokeWidth={1.2} />
        </g>
      </g>
    );
  if (kind === 'data')
    return (
      <g>
        <path d="M205 140 L190 26" stroke="#78350f" strokeWidth={6} strokeLinecap="round" />
        <path d="M140 46 L236 30" stroke="#d4d4d8" strokeWidth={5} strokeLinecap="round" />
        <path d="M140 46 L124 96 M140 46 L156 96 M236 30 L220 72 M236 30 L252 72" stroke="#a1a1aa" strokeWidth={1.6} />
        <path d="M118 96 Q 140 112 162 96 Z" fill="#d4d4d8" stroke="#111" strokeWidth={2} />
        <path d="M214 72 Q 236 88 258 72 Z" fill="#d4d4d8" stroke="#111" strokeWidth={2} />
        {[0, 1, 2].map((i) => (
          <rect key={i} x={128 + i * 4} y={80 - i * 8} width={16} height={12} rx={1.5} fill="#f8fafc" stroke="#111" strokeWidth={1.4} />
        ))}
        <rect x={228} y={58} width={16} height={13} rx={1.5} fill="#fde68a" stroke="#111" strokeWidth={1.4} />
        <text x={236} y={52} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize={8} fontWeight={700} fill="#e5e7eb">
          v3?
        </text>
      </g>
    );
  return (
    <g>
      <path d="M250 236 L192 18" stroke="#5b4636" strokeWidth={6} strokeLinecap="round" />
      <path d="M194 22 C 150 6, 106 28, 86 70 C 124 44, 160 38, 198 42 Z" fill="#d1d5db" stroke="#111" strokeWidth={2.5} strokeLinejoin="round" />
      <text x={140} y={36} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize={9} fontWeight={800} fill="#374151" transform="rotate(-12 140 36)">
        1 in 76
      </text>
    </g>
  );
}

/** Idle motion every horseman has (cape, glowing eyes, flames), and the
    reared-up pose it ends in. */
export function horsemanAmbientCss(u: string) {
  return `
.${u}-bob, .${u}-rear, .${u}-leg { transform-box: view-box; }
.${u}-rear { transform-origin: 350px 345px; transform: rotate(-7deg); }
.${u}-cape { transform-box: fill-box; transform-origin: 0% 50%; animation: ${u}-cape 0.9s ease-in-out infinite alternate; }
.${u}-glow { animation: ${u}-glow 1.4s ease-in-out infinite; }
.${u}-flame, .${u}-spark { transform-box: fill-box; transform-origin: 50% 100%; animation: ${u}-flicker 0.35s ease-in-out infinite alternate; }
@keyframes ${u}-cape { from { transform: skewY(0deg) scaleX(1); } to { transform: skewY(-6deg) scaleX(1.08); } }
@keyframes ${u}-glow { 0%, 100% { opacity: 1; } 50% { opacity: 0.45; } }
@keyframes ${u}-flicker { from { transform: scale(1, 1); } to { transform: scale(0.92, 1.1); } }
@media (prefers-reduced-motion: reduce) { :is(.${u}-cape, .${u}-glow, .${u}-flame, .${u}-spark) { animation: none; } }
`;
}

/** Reviewer 2, as a caricature big enough to read at corner size: grey hair,
    one eyebrow up, eyes over reading glasses, the frown. Same look as the
    meme panel. */
function ReviewerFace() {
  return (
    <g>
      <ellipse cx={284} cy={108} rx={23} ry={26} fill="#eab08c" stroke="#000" strokeWidth={2.5} />
      <path d="M261 104 C 258 78, 310 76, 307 104 C 302 92, 294 88, 284 93 C 274 88, 266 92, 261 104 Z" fill="#a3aab5" stroke="#000" strokeWidth={1.5} />
      <path d="M266 101 L 280 106" stroke="#4b5563" strokeWidth={4} strokeLinecap="round" />
      <path d="M288 102 Q 296 95 304 99" stroke="#4b5563" strokeWidth={4} strokeLinecap="round" fill="none" />
      <circle cx={273} cy={110} r={2.6} fill="#1f2937" />
      <circle cx={295} cy={108} r={2.6} fill="#1f2937" />
      <rect x={264} y={113} width={17} height={10} rx={3} fill="#fff" fillOpacity={0.3} stroke="#1f2937" strokeWidth={2.4} />
      <rect x={287} y={112} width={17} height={10} rx={3} fill="#fff" fillOpacity={0.3} stroke="#1f2937" strokeWidth={2.4} />
      <path d="M281 117 L 287 117" stroke="#1f2937" strokeWidth={2} />
      <path d="M275 128 Q 285 123 295 126" stroke="#7c3f2a" strokeWidth={3} fill="none" strokeLinecap="round" />
    </g>
  );
}

/** The horseman himself: horse, rider and what he carries. Class names are
    scoped by `u`; `horsemanAmbientCss(u)` makes him breathe. */
export function HorsemanArt({
  night,
  u,
  width,
  className,
  face = 'hood',
}: {
  night: HorsemanKey;
  u: string;
  width: number;
  className?: string;
  /** Under the hood: the dark with glowing eyes, or Reviewer 2. */
  face?: 'hood' | 'reviewer';
}) {
  const h = HORSEMEN[night];
  const outline = h.kind === 'data' ? '#000' : '#111';
  const leg = (hip: [number, number], d: string, a: number) => (
    <g className={`${u}-leg`} style={{ transformOrigin: `${hip[0]}px ${hip[1]}px`, '--a': a } as CSSProperties}>
      <path d={d} fill="none" stroke={outline} strokeWidth={19} strokeLinecap="round" strokeLinejoin="round" />
      <path d={d} fill="none" stroke={h.horse} strokeWidth={13} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
  const arm = h.kind === 'data' ? 'M270 152 L 205 140' : 'M270 152 L 222 135';
  return (
    <svg width={width} height={(width * 362) / 470} viewBox="60 0 470 362" className={cn('overflow-visible', className)} role="img" aria-label={`${h.ordinal}: ${h.name}, ${h.epithet}`}>
      <g className={`${u}-bob`}>
        <g className={`${u}-rear`}>
          {/* far legs, behind the body */}
          {leg([205, 250], 'M205 250 L 214 300 L 196 336', 14)}
          {leg([350, 245], 'M350 245 L 334 296 L 352 338', -14)}
          {/* tail */}
          <path d="M384 196 C 430 176, 462 200, 492 166 C 478 214, 440 236, 392 226 Z" fill={h.mane} stroke={outline} strokeWidth={3} />
          {/* body, neck, head */}
          <ellipse cx={278} cy={222} rx={118} ry={54} fill={h.horse} stroke={outline} strokeWidth={3.5} />
          <path d="M186 238 C 162 196, 150 152, 160 114 L 202 102 C 212 150, 228 182, 244 198 Z" fill={h.horse} stroke={outline} strokeWidth={3.5} strokeLinejoin="round" />
          <path d="M162 114 L 114 134 C 98 142, 98 160, 114 162 L 150 152 L 204 104 Z" fill={h.horse} stroke={outline} strokeWidth={3.5} strokeLinejoin="round" />
          <path d="M176 104 L 182 80 L 194 103 Z" fill={h.horse} stroke={outline} strokeWidth={3} strokeLinejoin="round" />
          <path d="M184 100 C 208 112, 220 146, 242 176 C 222 162, 212 128, 196 116 C 200 134, 190 120, 184 100 Z" fill={h.mane} stroke={outline} strokeWidth={2.5} />
          <circle className={`${u}-glow`} cx={142} cy={128} r={5} fill="#ef4444" />
          <circle cx={110} cy={152} r={2.5} fill={outline} />
          {h.kind === 'ai' ? (
            <text x={290} y={236} textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize={40} fontWeight={900} fill="#6d28d9" stroke="#fff" strokeWidth={4} paintOrder="stroke">
              AI ✦
            </text>
          ) : null}
          {/* near legs */}
          {leg([190, 246], 'M190 246 L 150 286 L 118 298', -18)}
          {leg([340, 236], 'M340 236 L 392 284 L 432 294', 18)}
          {/* the rider */}
          <path className={`${u}-cape`} d="M312 126 C 360 118, 392 140, 428 116 C 410 152, 374 168, 322 172 Z" fill={h.cloak} stroke="#000" strokeWidth={2} />
          <path d="M234 178 C 238 122, 298 100, 320 132 C 336 166, 330 200, 320 216 L 238 216 Z" fill={h.cloak} stroke="#000" strokeWidth={2.5} />
          <path d="M262 112 C 260 80, 306 76, 306 112 C 306 128, 296 136, 284 136 C 270 136, 262 128, 262 112 Z" fill={h.cloak} stroke="#000" strokeWidth={2.5} />
          {face === 'reviewer' ? (
            <ReviewerFace />
          ) : (
            <>
              <ellipse cx={279} cy={114} rx={12} ry={14} fill="#000" />
              <circle className={`${u}-glow`} cx={274} cy={112} r={2.6} fill="#ef4444" />
              <circle className={`${u}-glow`} cx={284} cy={112} r={2.6} fill="#ef4444" />
            </>
          )}
          <HorsemanEmblem kind={h.kind} u={u} />
          <path d={arm} stroke={h.cloak} strokeWidth={13} strokeLinecap="round" />
          <path d={arm} stroke="#000" strokeWidth={13} strokeLinecap="round" opacity={0.25} />
        </g>
      </g>
    </svg>
  );
}

/** The banner under a horseman. */
export function HorsemanBanner({ night, className, small = false, tiny = false }: { night: HorsemanKey; className?: string; small?: boolean; tiny?: boolean }) {
  const h = HORSEMEN[night];
  if (tiny)
    return (
      <div className={cn('rounded-md border-2 border-[#3b0d0d] bg-[#f3e6c8] px-2 py-0.5 text-center text-[#3b0d0d] shadow-lg', className)}>
        <span className={cn(fraktur.className, 'whitespace-nowrap text-[17px] leading-[1.1]')}>{h.name}</span>
      </div>
    );
  return (
    <div className={cn('flex flex-col items-center rounded-lg border-[3px] border-[#3b0d0d] bg-[#f3e6c8] text-[#3b0d0d] shadow-2xl', small ? 'px-5 pb-1.5 pt-1' : 'px-8 pb-2 pt-1.5', className)}>
      <span className={cn('font-serif font-bold uppercase', small ? 'text-[11px] tracking-[0.26em]' : 'text-[13px] tracking-[0.32em]')}>{h.ordinal}</span>
      <span className={cn(fraktur.className, 'text-center leading-[1.05]', small ? 'text-[30px]' : 'text-[44px]')}>{h.name}</span>
      {small ? null : <span className="font-serif text-[15px] italic">{h.epithet}</span>}
    </div>
  );
}

/** A horseman of the lab apocalypse, riding in over a night's nightmare on
    one click (a reveal.js fragment): the scene darkens, lightning, the horse
    gallops in from the right and rears, and the banner unfurls. */
function Horseman({ night }: { night: keyof typeof NIGHTS }) {
  const u = useUid();
  const h = HORSEMEN[night];
  const css = `
.${u}-hm { pointer-events: none; }
:is(.${u}-dark, .${u}-flash, .${u}-ride, .${u}-banner) { opacity: 0; }
.${u}-hm.visible .${u}-dark { animation: ${u}-fade 0.6s ease-out both; }
.${u}-hm.visible .${u}-flash { animation: ${u}-flash 0.6s ease-out 1.15s both; }
.${u}-hm.visible .${u}-ride { animation: ${u}-ride 1.35s cubic-bezier(.25,.7,.35,1) 0.1s both; }
.${u}-hm.visible .${u}-bob { animation: ${u}-bob 0.3s ease-in-out 0.1s 5 alternate; }
.${u}-hm.visible .${u}-rear { animation: ${u}-rear 1.1s ease-in-out 1.4s both; }
.${u}-hm.visible .${u}-leg { animation: ${u}-swing 0.3s ease-in-out 0.1s 5 alternate; }
.${u}-hm.visible .${u}-banner { animation: ${u}-unfurl 0.6s cubic-bezier(.2,1.3,.4,1) 1.75s both; }
@keyframes ${u}-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-flash { 0% { opacity: 0; } 12% { opacity: 0.85; } 30% { opacity: 0.1; } 42% { opacity: 0.6; } 100% { opacity: 0; } }
@keyframes ${u}-ride { 0% { opacity: 0; transform: translateX(760px); } 8% { opacity: 1; } 100% { opacity: 1; transform: none; } }
@keyframes ${u}-bob { from { transform: translateY(0); } to { transform: translateY(-12px); } }
@keyframes ${u}-rear { 0% { transform: none; } 45% { transform: rotate(-17deg); } 70% { transform: rotate(-12deg); } 100% { transform: rotate(-7deg); } }
@keyframes ${u}-swing { from { transform: rotate(calc(var(--a) * -1deg)); } to { transform: rotate(calc(var(--a) * 1deg)); } }
@keyframes ${u}-unfurl { from { opacity: 0; transform: scaleX(0.05); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) {
  .${u}-hm.visible :is(.${u}-ride, .${u}-bob, .${u}-rear, .${u}-leg, .${u}-flash) { animation: none; opacity: 1; }
  .${u}-hm.visible .${u}-flash { opacity: 0; }
}
${horsemanAmbientCss(u)}`;
  return (
    <Fragment as="div" index={1} className={`custom ${u}-hm absolute inset-0 z-20`}>
      <LoopStyles css={css} />
      <div className={`${u}-dark absolute -inset-x-4 -bottom-12 -top-9 rounded-3xl`} style={{ background: `radial-gradient(ellipse 46% 52% at 50% 44%, ${h.aura} 0%, rgba(22,4,4,0.93) 70%, rgba(6,1,1,0.98) 100%)` }} />
      <div className={`${u}-flash absolute -inset-x-4 -bottom-12 -top-9 rounded-3xl bg-white`} />
      <div className="absolute left-1/2 top-[-52px] h-[462px] w-[600px] -translate-x-1/2">
        <HorsemanArt night={night} u={u} width={600} className={`${u}-ride`} />
      </div>
      <div className="absolute inset-x-0 bottom-[-30px] flex justify-center">
        <HorsemanBanner night={night} className={`${u}-banner`} />
      </div>
    </Fragment>
  );
}
