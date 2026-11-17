'use client';

/* Animated figures for the opening of the smart microscopy deck: the cover,
   and Kim, the persona from the Lisbon hackathon talk. She stains one H&E
   slide again and again, five stains on the same tissue, and a Fiji macro
   checks every round cell by cell; but every round is still her, running
   between the staining bench and the microscope, and the loop that would do
   it for her spans a robot arm, an OT-2, an openUC2 and a GPU server.

   Every figure is plain SVG (or HTML) driven by the kit in
   `smart-microscopy-anim.tsx`: builds replay each time the slide is shown,
   flows loop. Sizes are literal pixels on the 1280x720 canvas. */

import { Fragment } from '@revealjs/react';
import { Anton } from 'next/font/google';
import { cn } from '@/lib/cn';
import { useState } from 'react';
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
  Steps,
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
    [' Put a small server on each machine: the arm brings the slide, the OT-2 stains it, the openUC2 posts every tile to the GPU server, the GPU server posts the uptake to your laptop, and your laptop tells the arm where to go next. That’s it, ', false],
    ['really', true],
    ['.', false],
  ],
  [['I can write the whole thing for you in a few minutes. ', false], ['Your slides will stain themselves now.', true]],
];

/** Kim asks for help, and gets it: a chat in three beats, one per click.
    Her prompt is there on arrival; a click brings a moment of typing dots
    and an answer that streams in word by word without a single doubt; the
    next one is her reply. No code yet: the point is the tone. */
export function ClaudeChatFigure() {
  const u = useUid();
  const perWord = 0.04;
  const start = 2.4;
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
    <Steps cues={[1, done + 1.2, done + 2.2]} className="relative mx-auto w-fit">
    <div className="sm-fade flex w-[1000px] flex-col gap-5 px-7 py-6" style={delay(0.1)}>
      <LoopStyles css={css} />

      {/* Kim */}
      <div className="sm-in flex items-start justify-end gap-3" style={delay(0.3)}>
        <p className="max-w-[720px] rounded-2xl rounded-tr-sm bg-fd-primary/12 px-5 py-3 text-[20px] leading-snug">
          <span className="sr-only">Kim: </span>I need to wire a robot arm, an OT-2, an openUC2 and a GPU server into one staining loop, and parallelize some tasks. Can you help?
        </p>
        {kim}
      </div>

      {/* Claude */}
      <div className="relative flex items-start gap-3">
        {claude}
        <span className={`${u}-dots absolute left-[58px] top-[14px] flex gap-1.5`} style={delay(1.1)} aria-hidden>
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
              <span key={b} className={badge} style={delay(done + 0.1 + i * 0.15)}>
                ✓ {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Kim, delighted */}
      <div className="sm-pop flex items-center justify-end gap-3" style={delay(done + 1.4)}>
        <p className="rounded-2xl rounded-tr-sm bg-fd-primary/12 px-5 py-2.5 text-[20px] leading-snug">omg thank you!!!</p>
        {kim}
      </div>
    </div>
    </Steps>
  );
}

/* --- the nightmare begins --------------------------------------------------- */

type Night = {
  night: string;
  /** The clock on the wall when she asks. */
  clock: string;
  /** All Kim wants, in one line. */
  ask: string;
  /** Claude's cheerful answer: how it opens, the options (she takes the first), what it says when she has chosen. */
  tip: string;
  options: string[];
  close: string;
  /** Her script, in the background, before and after Claude is done with it. */
  file: [string, string];
  lines: [string, string][];
  /** The errors that follow. */
  errors: string[];
  /** Her doubts: what the horseman carts in behind him. */
  worries: string[];
};

/** Four nights, after the Lisbon talk's "During the night" slides: the
    communication burden, timely orchestration, the absence of data
    management, and reproducibility. Each night is the same beats: Kim only
    wants one small thing, Claude answers with six ways to do it, she picks
    one, Claude rewrites her script, and the errors come. */
export const NIGHTS: Record<'communication' | 'threads' | 'data' | 'repro', Night> = {
  communication: {
    night: 'NIGHT 1',
    clock: '23:41',
    ask: 'I just need to connect the devices.',
    tip: 'Easy! You can use',
    options: ['HTTP APIs', 'gRPC', 'SiLA2', 'ROS', 'MQTT', 'raw sockets'],
    close: 'Great choice! I’ll just hardcode the IPs. ✨',
    file: ['kim_sequential.ijm', 'kim_pipeline.py · 5 machines'],
    lines: [
      ['run("Grid/Collection stitching", "type=[Grid]");', 'tiles = requests.get("http://10.0.0.7:5000/tiles")'],
      ['run("Colour Deconvolution", "vectors=[H AEC]");', 'body = json.dumps(mosaic.tolist())  # 2 GB of JSON?'],
      ['run("StarDist 2D", "model=[Versatile (H&E nuclei)]");', 'labels = post("http://10.0.0.12:8000/stardist", body)'],
      ['roiManager("Measure");', 'uptake = post("http://10.0.0.31:8080/uptake", labels)'],
      ['uptake = getResult("Positive", 0);  // per cell', 'post("http://10.0.0.44/run_protocol", "stain_cd20")'],
      ['if (uptake < 0.8) print("stain again");', '# TODO: what if the IPs change??'],
    ],
    errors: ['ConnectionRefusedError: 10.0.0.12:8000', 'MemoryError in json.dumps', 'Max retries exceeded: /tiles', 'OT-2 not found on network'],
    worries: ['numpy arrays as JSON over the wire?', 'What if the IPs change?', 'I didn’t secure my server…'],
  },
  threads: {
    night: 'NIGHT 2',
    clock: '00:12',
    ask: 'I just need it to wait until the robot is done.',
    tip: 'Easy! You can use',
    options: ['threads', 'asyncio', 'multiprocessing', 'Celery', 'a job queue', 'time.sleep(1)'],
    close: 'Great choice! And a join at the end. ✨',
    file: ['kim_pipeline.py', 'kim_pipeline_threaded.py · 2 GPUs'],
    lines: [
      ['tiles = acquire()', 't1 = Thread(target=segment, args=(left,))'],
      ['labels = segment(stitch(tiles))', 't2 = Thread(target=segment, args=(right,))'],
      ['uptake = measure(labels)', 't1.start(); t2.start()'],
      ['if uptake < 0.8:', 't1.join(); t2.join()  # hangs forever?'],
      ['    run_protocol("stain_cd20")', 'time.sleep(1)  # wait for the server??'],
      ['', 'results.append(uptake)  # race condition?'],
    ],
    errors: ['Exception in thread Thread-2', 'Thread-1 still alive after 120 s', 'RuntimeError: dict changed size', 'Segmentation fault (core dumped)'],
    worries: ['What even is a join?', 'If the GPU server dies, does the thread?', 'Which machine failed? Where are the logs?'],
  },
  data: {
    night: 'NIGHT 3',
    clock: '22:58',
    ask: 'I just need to save the images.',
    tip: 'Easy! You can use',
    options: ['a shared drive', 'OME-TIFF', 'OME-Zarr', 'OMERO', 'S3', 'the filename'],
    close: 'Great choice! Here’s a script that collects it all. ✨',
    file: ['kim_sequential.ijm', 'collect_results_v4.py · 5 machines'],
    lines: [
      ['saveAs("Tiff", "C:/data/HE07_CD20_r2.tif");', 'np.save(f"/tmp/{uuid4()}.npy", labels)  # GPU disk'],
      ['saveAs("Results", "C:/data/HE07_CD20_r2.csv");', 'scp("kim@10.0.0.12:/tmp/*.npy", "D:/backup/")'],
      ['', 'name = f"HE07_CD20_r{r}_x{x}_y{y}_{uptake}_final.tif"'],
      ['', 'tifffile.imwrite(name, mosaic)  # metadata: gone'],
      ['', 'log.write(f"{time.time()} stained?")  # whose clock?'],
      ['', '# where is experiment_one???'],
    ],
    errors: ['OSError: No space left on device', 'FileNotFoundError: experiment_one/', 'Path longer than 260 characters', 'IT: stop writing to the GPU server!'],
    worries: ['Metadata in the filename? Really?', 'Which of five machines has run 41?', 'I should have used OMERO…'],
  },
  repro: {
    night: 'NIGHT 4',
    clock: '23:05',
    ask: 'I just need to run it again.',
    tip: 'Easy! You can use',
    options: ['requirements.txt', 'Conda', 'Docker', 'Nix', 'Pixi', 'a Streamlit GUI'],
    close: 'Great choice! We’ll pip freeze it later. ✨',
    file: ['kim_sequential.ijm · v1.2 · has a DOI', 'kim_pipeline_FINAL_v7.py · run 41 of 76'],
    lines: [
      ['// kim_sequential.ijm v1.2, doi:10.5281/zenodo.42', '# which version made run 41?  git log: "fix"'],
      ['run("Grid/Collection stitching", "type=[Grid]");', 'model = StarDist2D.from_pretrained("2D_versatile_he")'],
      ['run("Colour Deconvolution", "vectors=[H AEC]");', 'thresh = st.slider("thresh")  # vibe-coded GUI, 3 am'],
      ['run("StarDist 2D", "model=[Versatile (H&E nuclei)]");', 'np.random.seed()  # different every run'],
      ['uptake = getResult("Positive", 0);  // per cell', 'cfg = load("C:/Users/kim/Desktop/cfg_old.json")'],
      ['if (uptake < 0.8) print("stain again");', '# pip freeze > requirements.txt  (too late)'],
    ],
    errors: ['AttributeError: st.experimental_rerun', 'CUDA 11.2 ≠ CUDA 12.1', 'FileNotFoundError: cfg_old.json', 'run 41: 0.78 · run 42: 0.83'],
    worries: ['Which version made run 41?', 'Did my PI’s rerun use the old model?', 'My vibe-coded GUI: will it even run next year?'],
  },
};

/** Claude's mark. */
function ClaudeMark({ size = 30 }: { size?: number }) {
  return (
    <span className="flex shrink-0 items-center justify-center rounded-lg bg-[#d97757] text-white shadow-md" style={{ width: size, height: size }}>
      <svg viewBox="-12 -12 24 24" width={size * 0.62} height={size * 0.62}>
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x={-1.6} y={-10} width={3.2} height={9} rx={1.6} fill="currentColor" transform={`rotate(${i * 45})`} />
        ))}
      </svg>
    </span>
  );
}

/** Where the errors land round Kim and Claude's answer, and how they tilt. */
const NIGHT_ERROR_SLOTS: [number, number, number][] = [
  [204, 252, -3],
  [228, 306, 2],
  [500, 398, -2],
  [790, 412, 2],
];

/** One night, one click per beat (`NIGHTMARE_CUES`): Kim's one small wish;
    Claude's cheerful answer, six ways to do it, and her question marks; she
    picks one; Claude rewrites her script in the background while the errors
    pile up. Kim gets more upset with every beat, and starts every night a
    little more worn than the last. Then, on a keypress, the night's horseman
    rides in over it all, a cart of her doubts behind him. */
const NIGHTMARE_CUES = [0.5, 2.6, 4.2, 9.2];

export function NightmareFigure({ night: which }: { night: keyof typeof NIGHTS }) {
  const u = useUid();
  const night = NIGHTS[which];
  const tired = Object.keys(NIGHTS).indexOf(which);
  const at = { answer: 1, option: 1.25, marks: 2.15, decide: 3, rewrite: 4.7, step: 0.55, stressed: 5, errors: 5.5 };
  const v = (o: Record<string, number | string>) =>
    Object.fromEntries(Object.entries(o).map(([k, x]) => [`--${k}`, typeof x === 'number' ? `${x.toFixed(2)}s` : x])) as CSSProperties;
  const css = `
:is(.${u}-span, .${u}-from) { opacity: 0; }
section.present .${u}-until { animation: ${u}-until var(--len) linear both; }
section.present .${u}-span { animation: ${u}-span var(--len) linear var(--d) both; }
section.present .${u}-from { animation: ${u}-from 0.3s ease-out var(--d) both; }
@keyframes ${u}-until { 0%, 94% { opacity: 1; } 100% { opacity: 0; } }
@keyframes ${u}-span { 0% { opacity: 0; } 6%, 94% { opacity: 1; } 100% { opacity: 0; } }
@keyframes ${u}-from { from { opacity: 0; } to { opacity: 1; } }
section.present .${u}-old { animation: ${u}-old 0.45s ease-in var(--d) both; }
@keyframes ${u}-old { 0% { opacity: 1; } 40% { opacity: 1; color: ${WARN}; text-decoration: line-through; } 100% { opacity: 0; color: ${WARN}; text-decoration: line-through; } }
.${u}-type { display: inline-block; overflow: hidden; vertical-align: top; white-space: pre; width: calc((var(--n) + 1) * 1ch); }
section.present .${u}-type { animation: ${u}-type var(--t) steps(var(--n)) var(--d) both; }
@keyframes ${u}-type { from { width: 0; } }
section.present .${u}-shake { animation: ${u}-shake 0.14s ease-in-out ${at.errors}s 26 alternate; }
@keyframes ${u}-shake { from { transform: translateX(-3px) rotate(-1.2deg); } to { transform: translateX(3px) rotate(1.2deg); } }
@media (prefers-reduced-motion: reduce) { section.present :is(.${u}-old, .${u}-type, .${u}-shake) { animation: none; } }
`;
  const lineAt = (i: number) => at.rewrite + i * at.step;
  return (
    <div className="relative mx-auto h-[440px] w-[1130px]">
      <Steps cues={NIGHTMARE_CUES} className="absolute inset-0">
        <LoopStyles css={css} />
        <div
          className="absolute inset-0"
          role="img"
          aria-label={`${night.night}, ${night.clock}. Kim: ${night.ask} Claude: ${night.tip} ${night.options.join(', or ')}. Kim picks ${night.options[0]}. Claude rewrites her script, and the errors follow: ${night.errors.join('; ')}. Kim gets more and more upset.`}
        >
          {/* the night, and the clock */}
          <span className="absolute left-0 top-0 flex items-center gap-3 rounded-xl bg-[#111827] px-3.5 py-1.5 font-mono">
            <span className="text-[13px] font-bold tracking-[0.08em] text-[#f59e0b]">{night.night}</span>
            <span className="text-[22px] font-bold leading-none text-[#ef4444]">{night.clock}</span>
          </span>

          {/* her script, in the background: Claude rewrites it line by line */}
          <div className="absolute right-0 top-0 w-[450px] overflow-hidden font-mono text-[12.5px] leading-[22px] text-fd-muted-foreground/75" aria-hidden>
            <div className="relative h-[22px] font-bold">
              <span className={`${u}-until absolute inset-0`} style={v({ len: at.rewrite })}>
                ~ {night.file[0]}
              </span>
              <span className={`${u}-from absolute inset-0 flex items-center gap-1.5 text-[#d97706]`} style={v({ d: at.rewrite })}>
                <ClaudeMark size={16} /> {night.file[1]}
              </span>
            </div>
            {night.lines.map(([before, after], i) => (
              <div key={i} className="relative h-[22px]">
                {before ? (
                  <span className={`${u}-old absolute inset-0 block whitespace-pre`} style={v({ d: lineAt(i) })}>
                    {before}
                  </span>
                ) : null}
                <span className="absolute inset-0 text-[#d97706]">
                  <span className={`${u}-type`} style={{ ...v({ d: lineAt(i) + 0.25, t: after.length * 0.01 }), ['--n' as string]: after.length } as CSSProperties}>
                    {after}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Kim, more upset with every beat */}
          <div className="absolute bottom-0 left-[16px] h-[225px] w-[180px]">
            <div className={`${u}-until absolute inset-0`} style={v({ len: at.answer + 0.4 })}>
              <KimFigure size={180} mood={tired ? 'worried' : 'neutral'} tired={tired} />
            </div>
            <div className={`${u}-span absolute inset-0`} style={v({ d: at.answer + 0.3, len: at.stressed - at.answer })}>
              <KimFigure size={180} mood="worried" tired={tired} />
            </div>
            <div className={`${u}-from absolute inset-0`} style={v({ d: at.stressed })}>
              <div className={`${u}-shake`}>
                <KimFigure size={180} mood="stressed" tired={tired} />
              </div>
            </div>
          </div>
          <p className="absolute left-[196px] top-[58px] max-w-[450px] rounded-[30px] rounded-bl-md border-2 border-fd-border bg-fd-card px-7 py-4 text-[30px] font-bold leading-[1.15] tracking-[-0.02em] shadow-sm">
            <span className="sr-only">Kim: </span>“{night.ask}”
          </p>

          {/* Claude: so many ways */}
          <div className="sm-pop absolute right-0 top-[226px] flex w-[630px] items-start gap-3" style={delay(at.answer)}>
            <ClaudeMark size={38} />
            <div className="flex flex-1 flex-col gap-2.5 rounded-[26px] rounded-tl-md border-2 border-fd-border bg-fd-card px-6 py-4 shadow-sm">
              <span className="text-[24px] font-semibold leading-tight">{night.tip}</span>
              <span className="flex flex-wrap items-center gap-x-2 gap-y-2">
                {night.options.map((o, i) => (
                  <span key={o} className="sm-pop flex items-center gap-2" style={delay(at.option + i * 0.13)}>
                    {i > 0 ? <span className="text-[19px] italic text-fd-muted-foreground">or</span> : null}
                    <span className="relative rounded-lg bg-[#d97757]/15 px-2.5 py-1 font-mono text-[19px] font-semibold text-[#9a4a2e] dark:text-[#f0a98f]">
                      {o}
                      {/* the one she takes */}
                      {i === 0 ? <span className={`${u}-from absolute inset-[-4px] rounded-xl border-[3px] border-[#d97757]`} style={v({ d: at.decide + 0.1 })} /> : null}
                    </span>
                  </span>
                ))}
              </span>
              <span className="sm-in text-[21px] text-fd-muted-foreground" style={delay(at.decide + 0.6)}>
                {night.close}
              </span>
            </div>
          </div>

          {/* her question marks, until she decides */}
          <div className={`${u}-until absolute inset-0`} style={v({ len: at.decide })} aria-hidden>
            {(
              [
                [168, 236, 64, -14],
                [222, 196, 86, 6],
                [286, 232, 58, 18],
              ] as const
            ).map(([x, y, size, turn], i) => (
              <span key={x} className="absolute" style={{ left: x, top: y, transform: `rotate(${turn}deg)` }}>
                <span className="sm-pop block font-black leading-none text-[#f59e0b] drop-shadow-sm" style={{ fontSize: size, ...delay(at.marks + i * 0.12) }}>
                  ?
                </span>
              </span>
            ))}
          </div>

          {/* she decides */}
          <p className="sm-pop absolute left-[196px] top-[184px] whitespace-nowrap rounded-[20px] rounded-bl-md border-2 border-fd-border bg-fd-card px-3.5 py-1.5 text-[18px] font-semibold shadow-sm" style={delay(at.decide + 0.2)}>
            <span className="sr-only">Kim: </span>“Okay… <span className="font-mono text-[#9a4a2e] dark:text-[#f0a98f]">{night.options[0]}</span>, then.”
          </p>

          {/* the errors */}
          {night.errors.map((text, i) => (
            <div key={text} className="absolute z-10" style={{ left: NIGHT_ERROR_SLOTS[i][0], top: NIGHT_ERROR_SLOTS[i][1], transform: `rotate(${NIGHT_ERROR_SLOTS[i][2]}deg)` }}>
              <span className="sm-pop block whitespace-nowrap rounded-md border border-red-500/70 bg-red-50 px-2.5 py-1 font-mono text-[14px] font-bold text-red-700 shadow-lg" style={delay(at.errors + i * 0.85)}>
                ✕ {text}
              </span>
            </div>
          ))}
        </div>
      </Steps>
      {/* outside the steps: he rides in on a keypress, on his own clock */}
      <Horseman night={which} />
    </div>
  );
}

/* --- it worked -------------------------------------------------------------- */

/** "It worked": Kim's face, close up, after three nights. Eyes wide and
    bloodshot, pupils twitching (the only thing that moves), a manic grin,
    and the stamp across her chin. One keypress (a reveal.js fragment): her PI creeps in from the
    right, Kim slides aside, and the PI has a question. */
export function ItWorkedFigure() {
  const u = useUid();
  const skin = '#c68863';
  const hair = '#5b3a29';
  const ink = '#1f2937';
  const css = `
.${u}-pupil { animation: ${u}-pupil 1.7s steps(1) infinite; }
@keyframes ${u}-pupil { 0% { transform: translate(0, 0); } 20% { transform: translate(5px, -3px); } 45% { transform: translate(-4px, 2px); } 70% { transform: translate(2px, 4px); } 85% { transform: translate(-3px, -4px); } }
.${u}-kim { transition: transform 1.2s cubic-bezier(.6,0,.2,1); }
.${u}-pi.visible ~ .${u}-kim { transform: translateX(-250px); }
.${u}-person { transform: translateX(115%) rotate(10deg); transform-origin: bottom left; transition: transform 1.5s cubic-bezier(.3,0,.2,1); }
.${u}-pi.visible .${u}-person { transform: translateX(0) rotate(-5deg); }
.${u}-say { opacity: 0; transform: scale(0.6); transition: opacity 0.2s, transform 0.3s; }
.${u}-pi.visible .${u}-say { opacity: 1; transform: none; transition: opacity 0.3s var(--sd), transform 0.45s cubic-bezier(.3,1.5,.5,1) var(--sd); }
@media (prefers-reduced-motion: reduce) {
  .${u}-pupil { animation: none; }
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
          <svg width={420} height={420} viewBox="0 0 400 400" role="img" aria-label="Kim, wide-eyed after three nights: bloodshot eyes, twitching pupils, a manic grin">
            <circle cx={200} cy={200} r={150} fill={hair} />
            <path d={spikes} fill={hair} />
            <circle cx={200} cy={218} r={122} fill={skin} />
            <path d="M84 196 C 90 120, 160 92, 214 100 C 262 106, 306 140, 316 196 C 292 166, 268 150, 244 150 L 236 128 L 222 152 C 190 150, 160 140, 138 126 L 128 152 C 112 160, 96 176, 84 196 Z" fill={hair} />
            <path d="M108 146 Q150 112 192 140" stroke={hair} strokeWidth={7} fill="none" strokeLinecap="round" />
            <path d="M212 152 L290 136" stroke={hair} strokeWidth={7} fill="none" strokeLinecap="round" />
            <path d="M112 248 Q152 266 192 248 M208 248 Q248 266 288 248" stroke="#7c3aed" strokeOpacity={0.55} strokeWidth={5} fill="none" strokeLinecap="round" />
            {eye(152, 200, 0)}
            {eye(248, 200, 0.4)}
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
        <div className={cn('sm-pop w-[300px] overflow-hidden border-fd-border', card)} style={delay(0.1)}>
          <div className="flex items-center justify-between border-b border-fd-border bg-fd-muted px-3 py-1.5 font-mono text-[13px]">
            <span className="font-semibold">pipeline_FINAL_v7.py</span>
            <span className="rounded bg-red-500/15 px-1.5 text-red-600">10,212 lines</span>
          </div>
          <div className="relative h-[330px] overflow-hidden px-3">
            <div>
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
        <div className={cn('sm-pop w-[320px] border-fd-border px-4 py-3 font-mono text-[15px]', card)} style={delay(0.2)}>
          {FOLDERS.map((f, i) => (
            <div key={f} className="sm-in flex items-center gap-1.5 whitespace-nowrap leading-[1.55]" style={{ ...delay(0.3 + i * 0.05), paddingLeft: i * 12 }}>
              <span className="text-amber-500">▸</span>
              <span>{f}</span>
            </div>
          ))}
          <div className="sm-in whitespace-nowrap leading-[1.55] text-red-600" style={{ ...delay(0.3 + FOLDERS.length * 0.05), paddingLeft: FOLDERS.length * 12 }}>
            HE07_CD20_r2_tile42_x…
          </div>
        </div>
      </div>

      {/* the race condition */}
      <div className="absolute left-[730px] top-[262px] -rotate-2">
        <div className={cn('sm-pop w-[340px] border-red-500/60 px-4 py-3 font-mono text-[13px]', card)} style={delay(0.3)}>
          {[
            ['thread-1', 'write mask_0042.tif', 0.3],
            ['thread-2', 'read  mask_0042.tif', 0.35],
          ].map(([t, what, d]) => (
            <div key={t as string} className="flex items-center gap-2 leading-[1.9]">
              <span className="w-[66px] whitespace-nowrap text-fd-muted-foreground">{t}</span>
              <span className="relative h-[8px] w-[46px] overflow-hidden rounded-full bg-fd-muted">
                <span className={`${u}-race absolute inset-0 rounded-full bg-red-500/70`} style={{ '--d': `${d}s` } as CSSProperties} />
              </span>
              <span className="whitespace-pre">{what}</span>
            </div>
          ))}
          <div className="sm-pop mt-1 inline-block rounded bg-red-600 px-2 py-0.5 text-[14px] font-bold uppercase tracking-wide text-white" style={delay(0.8)}>
            race condition · 0 bytes
          </div>
        </div>
      </div>

      {/* IP address madness */}
      {IPS.map(([x, y, r, ip, struck], i) => (
        <div key={ip} className="absolute" style={{ left: x, top: y, transform: `rotate(${r}deg)` }}>
          <div className="sm-pop" style={delay(0.2 + i * 0.08)}>
            <span
              className={cn(
                `inline-block whitespace-nowrap rounded-full border-2 bg-fd-card px-3.5 py-1 font-mono text-[19px] font-semibold shadow-md`,
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

/** Kim has had enough, in three beats, one per click: the horrors of three
    nights stand round her; she wobbles and keels over backwards, x-ed out
    eyes and stars circling; and from the floor she asks for the one thing
    that used to work. */
export function CollapseFigure() {
  const u = useUid();
  const skin = '#c68863';
  const hair = '#5b3a29';
  const ink = '#1f2937';
  const coat = '#f4f4f5';
  const startAt = 1.5; // the click after the entrance
  const fallAt = startAt + 3.6;
  const css = `
.${u}-fall { transform-box: view-box; transform-origin: 470px 372px; transform: translateY(-50px) rotate(-90deg); }
section.present .${u}-fall { animation: ${u}-fall 4.4s ${startAt}s both; }
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
.${u}-race { transform-origin: left; transform: scaleX(1); }
section.present .${u}-race { animation: ${u}-race 0.6s cubic-bezier(.4,0,.6,1) var(--d) both; }
@keyframes ${u}-race { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@media (prefers-reduced-motion: reduce) {
  section.present .${u}-fall, section.present .${u}-until, .${u}-stars,
  section.present .${u}-dim, section.present .${u}-race { animation: none; }
}
`;
  const star = (x: number, y: number) => `M${x} ${y - 9} L${x + 3} ${y - 3} L${x + 9} ${y - 2} L${x + 4} ${y + 2} L${x + 6} ${y + 9} L${x} ${y + 5} L${x - 6} ${y + 9} L${x - 4} ${y + 2} L${x - 9} ${y - 2} L${x - 3} ${y - 3} Z`;
  return (
    <Steps cues={[startAt, fallAt + 1.3, fallAt + 2.6]} className="relative mx-auto h-[420px] w-[900px]">
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
        <div className="sm-pop relative rounded-2xl rounded-bl-sm border-2 border-fd-border bg-fd-card px-6 py-4 shadow-md" style={delay(fallAt + 1.75)}>
          <p className="text-[30px] font-semibold italic leading-snug">
            <span className="sr-only">Kim: </span>“I want my Fiji script back.”
          </p>
        </div>
        <span className="sm-pop absolute bottom-[-30px] left-[24px] size-[18px] rounded-full border-2 border-fd-border bg-fd-card" style={delay(fallAt + 1.6)} />
        <span className="sm-pop absolute bottom-[-58px] left-[10px] size-[12px] rounded-full border-2 border-fd-border bg-fd-card" style={delay(fallAt + 1.45)} />
      </div>
    </Steps>
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
export function KimFigure({
  size = 170,
  mood = 'neutral',
  tired = 0,
}: {
  size?: number;
  mood?: 'neutral' | 'happy' | 'worried' | 'stressed' | 'panic';
  /** 0 to 3: how many nights she has been at it (bags under the eyes, hair coming loose). */
  tired?: number;
}) {
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
          ) : mood === 'stressed' ? (
            <>
              {/* brows right up, eyes wide, a wobbly mouth, sweat */}
              <path d="M68 86 L90 75 M132 86 L110 75" stroke={hair} strokeWidth={4} strokeLinecap="round" />
              <circle cx={82} cy={99} r={6.5} fill="#fff" />
              <circle cx={118} cy={99} r={6.5} fill="#fff" />
              <circle cx={82} cy={100} r={2.4} fill="#1f2937" />
              <circle cx={118} cy={100} r={2.4} fill="#1f2937" />
              <path d="M84 124 Q88 118 92 124 T100 124 T108 124 T116 124" stroke="#7c2d12" strokeWidth={2.5} fill="none" strokeLinecap="round" />
              <path d="M150 70 C 145 80, 145 86, 150 88 C 155 86, 155 80, 150 70 Z" fill="#60a5fa" />
              <path d="M46 86 C 42 94, 42 99, 46 101 C 50 99, 50 94, 46 86 Z" fill="#60a5fa" />
            </>
          ) : mood === 'panic' ? (
            <>
              {/* eyes like saucers, mouth open, hair on end, sweat everywhere */}
              <path d="M66 82 L88 72 M134 82 L112 72" stroke={hair} strokeWidth={4} strokeLinecap="round" />
              <path d="M70 52 L60 30 M88 46 L84 22 M112 46 L118 22 M130 52 L142 32" stroke={hair} strokeWidth={5} strokeLinecap="round" />
              <circle cx={82} cy={99} r={8} fill="#fff" />
              <circle cx={118} cy={99} r={8} fill="#fff" />
              <circle cx={82} cy={99} r={1.9} fill="#1f2937" />
              <circle cx={118} cy={99} r={1.9} fill="#1f2937" />
              <ellipse cx={100} cy={125} rx={9} ry={10} fill="#7c2d12" />
              <path d="M152 64 C 147 74, 147 80, 152 82 C 157 80, 157 74, 152 64 Z" fill="#60a5fa" />
              <path d="M44 78 C 40 86, 40 91, 44 93 C 48 91, 48 86, 44 78 Z" fill="#60a5fa" />
              <path d="M160 104 C 156 112, 156 117, 160 119 C 164 117, 164 112, 160 104 Z" fill="#60a5fa" />
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
          {/* the nights showing: bags under the eyes, hair coming loose */}
          {tired > 0 ? <path d="M72 111 Q82 117 92 111 M108 111 Q118 117 128 111" stroke="#5b2a1a" strokeOpacity={0.2 + tired * 0.17} strokeWidth={3} fill="none" strokeLinecap="round" /> : null}
          {tired > 1 ? <path d="M58 70 L44 58 M144 72 L158 62" stroke={hair} strokeWidth={4} strokeLinecap="round" /> : null}
          {tired > 2 ? <path d="M54 110 L38 114 M148 112 L164 118 M96 50 L92 34" stroke={hair} strokeWidth={4} strokeLinecap="round" /> : null}
        </g>
      </g>
    </svg>
  );
}

/* --- Kim's slide ------------------------------------------------------------ */

/** A stable pseudo-random number in [0, 1) for a lattice point. Integer
    arithmetic only, so server and browser agree to the last bit. */
function hash2(i: number, j: number, k: number) {
  let h = Math.imul(i + 0x3c6ef372, 0x9e3779b1) ^ Math.imul(j + 0x7f4a7c15, 0x85ebca6b) ^ Math.imul(k + 0x165667b1, 0xc2b2ae35);
  h = Math.imul(h ^ (h >>> 15), 0x2c1b3c6d);
  h = Math.imul(h ^ (h >>> 12), 0x297a2d39);
  return ((h ^ (h >>> 15)) >>> 0) / 4294967296;
}

type StainKey = 'cd3' | 'cd20' | 'ki67' | 'panck';

/** The chromogens, one colour per stain. Fixed: a slide is a picture. */
const STAIN: Record<StainKey | 'he', { name: string; color: string }> = {
  he: { name: 'H&E', color: '#db2777' },
  cd3: { name: 'CD3', color: '#92400e' },
  cd20: { name: 'CD20', color: '#e11d48' },
  ki67: { name: 'Ki-67', color: '#0d9488' },
  panck: { name: 'PanCK', color: '#ca8a04' },
};
const EOSIN = '#f9a8c9';
const EOSIN_EDGE = '#ec4899';
const HEMATOXYLIN = '#5b21b6';
const TISSUE_BG = '#fce7f3';

type Cell = {
  n: number;
  x: number;
  y: number;
  rx: number;
  ry: number;
  rot: number;
  /** The nucleus, relative to the cell. */
  nx: number;
  ny: number;
  /** Which membrane stain marks this cell, if any. */
  kind: 'cd3' | 'cd20' | 'panck' | 'other';
  ki67: boolean;
  /** Whether CD20 took on the first try (the patchy round). */
  took: boolean;
};

/** One tissue, everywhere: cells sit on a jittered hex lattice in field
    units, so any window onto it (a tile, the stitched mosaic, a lens) shows
    the same cells. */
function tissueCells(x0: number, y0: number, x1: number, y1: number): Cell[] {
  const step = 26;
  const rowH = 22.5;
  const r1 = (v: number) => Math.round(v * 10) / 10;
  const cells: Cell[] = [];
  for (let j = Math.floor(y0 / rowH) - 1; j <= Math.ceil(y1 / rowH) + 1; j++) {
    for (let i = Math.floor(x0 / step) - 1; i <= Math.ceil(x1 / step) + 1; i++) {
      const x = r1((i + (j & 1 ? 0.5 : 0)) * step + (hash2(i, j, 1) - 0.5) * 8);
      const y = r1(j * rowH + (hash2(i, j, 2) - 0.5) * 8);
      if (x < x0 || x >= x1 || y < y0 || y >= y1) continue;
      const k = hash2(i, j, 3);
      const size = hash2(i, j, 6);
      cells.push({
        n: Math.abs(i * 31 + j * 17),
        x,
        y,
        rx: r1(10.5 + size * 2),
        ry: r1(8.5 + size * 1.5),
        rot: Math.round(hash2(i, j, 7) * 180),
        nx: r1((hash2(i, j, 8) - 0.5) * 3),
        ny: r1((hash2(i, j, 9) - 0.5) * 3),
        kind: k < 0.24 ? 'cd3' : k < 0.48 ? 'cd20' : k < 0.78 ? 'panck' : 'other',
        ki67: hash2(i, j, 4) < 0.28,
        took: hash2(i, j, 5) < 0.41,
      });
    }
  }
  return cells;
}

type TissuePalette = 'he' | 'stained' | 'labels' | 'uptake';

/** A small field of cells: Kim's tissue, as a tile or a disc.
    - `he`: plain H&E, pink cytoplasm and purple nuclei;
    - `stained`: H&E with the given stains on their cells (`patchy`: CD20
      only took in some of them);
    - `labels`: StarDist's outlines, one colour per nucleus;
    - `uptake`: the macro's per-cell verdict on CD20, took or didn't.
    `ox`/`oy`/`half` pick the window onto the tissue, in field units; `s`
    scales field units to pixels. */
function TissueGlyph({
  cx,
  cy,
  s,
  palette,
  shape = 'square',
  half = 100,
  ox = 0,
  oy = 0,
  stains = ['cd3', 'cd20'],
  patchy = true,
  background = true,
  cellClass,
  cellDelay,
}: {
  cx: number;
  cy: number;
  s: number;
  palette: TissuePalette;
  shape?: 'square' | 'disc';
  half?: number;
  ox?: number;
  oy?: number;
  stains?: StainKey[];
  patchy?: boolean;
  background?: boolean;
  /** Per-cell build, e.g. the verdicts popping in one by one. */
  cellClass?: string;
  cellDelay?: (index: number) => number;
}) {
  const inside = (c: Cell) => shape === 'square' || (c.x - ox) ** 2 + (c.y - oy) ** 2 < (half - 8) ** 2;
  const cells = tissueCells(ox - half, oy - half, ox + half, oy + half).filter(inside);
  const X = (x: number) => Math.round((cx + (x - ox) * s) * 10) / 10;
  const Y = (y: number) => Math.round((cy + (y - oy) * s) * 10) / 10;
  const shown = palette === 'uptake' ? cells.filter((c) => c.kind === 'cd20') : cells;
  const membrane = (c: Cell) =>
    palette === 'stained' && c.kind !== 'other' && stains.includes(c.kind) && (c.kind !== 'cd20' || !patchy || c.took) ? STAIN[c.kind].color : EOSIN;
  return (
    <g>
      {background && palette !== 'labels' ? (
        shape === 'disc' ? (
          <circle cx={cx} cy={cy} r={half * s} fill={TISSUE_BG} />
        ) : (
          <rect x={cx - half * s} y={cy - half * s} width={2 * half * s} height={2 * half * s} fill={TISSUE_BG} />
        )
      ) : null}
      {shown.map((c, i) => {
        const x = X(c.x);
        const y = Y(c.y);
        const anim = cellClass ? { className: cellClass, style: delay(cellDelay?.(i) ?? 0) } : {};
        if (palette === 'labels') {
          const color = LABELS[(c.n * 7) % LABELS.length];
          return <polygon key={i} {...anim} points={starPoly(x + c.nx * s, y + c.ny * s, 7.5 * s, c.n)} fill={color} fillOpacity={0.45} stroke={color} strokeWidth={Math.max(0.8, 2 * s)} />;
        }
        if (palette === 'uptake') {
          return (
            <g key={i} transform={`rotate(${c.rot} ${x} ${y})`}>
              <ellipse {...anim} cx={x} cy={y} rx={c.rx * s} ry={c.ry * s} fill={c.took ? PRIMARY : WARN} fillOpacity={0.8} stroke="#ffffff" strokeWidth={Math.max(0.8, 1.5 * s)} />
            </g>
          );
        }
        const nucleus = palette === 'stained' && stains.includes('ki67') && c.ki67 ? STAIN.ki67.color : HEMATOXYLIN;
        const body = (
          <>
            <ellipse cx={x} cy={y} rx={c.rx * s} ry={c.ry * s} fill={membrane(c)} fillOpacity={0.8} stroke={EOSIN_EDGE} strokeOpacity={0.35} strokeWidth={Math.max(0.5, 1.2 * s)} />
            <ellipse cx={x + c.nx * s} cy={y + c.ny * s} rx={4.8 * s} ry={3.9 * s} fill={nucleus} fillOpacity={0.85} />
          </>
        );
        return (
          <g key={i} transform={`rotate(${c.rot} ${x} ${y})`}>
            {cellClass ? <g {...anim}>{body}</g> : body}
          </g>
        );
      })}
    </g>
  );
}

/** Kim's problem, before any cycling: one antibody per section. On top, the
    tissue block in 3D, with the tumor as a body inside it and four cutting
    planes through it; each plane shows the tumor's cross-section where it
    cuts. Underneath, the four sections, each on its own glass slide with its
    own antibody. The tumor shrinks from section to section, and the fourth
    cut (PanCK, the one meant to find it) falls outside the tumor. */
export const SERIAL_SECTIONS_CUES = [1, 2.9, 4.9, 7.2, 9.4];

export function SerialSectionsFigure() {
  const u = useUid();
  const W = 600;
  const order: StainKey[] = ['cd3', 'cd20', 'ki67', 'panck'];
  const r1 = (v: number) => Math.round(v * 10) / 10;
  /* the block, in oblique projection: its long axis runs left to right, its
     front face is flat on the screen, and depth goes up and to the right */
  const bx0 = 40;
  const bx1 = 520;
  const yt = 62;
  const yb = 142;
  const DX = 40;
  const DY = -28;
  /* one unit of depth on screen (the block is as deep as it is tall) */
  const ux = DX / (yb - yt);
  const uy = DY / (yb - yt);
  /* the tumor: an ellipsoid along the block, at mid-depth */
  const tumor = { cx: 215, a: 165, r: 30 };
  const mid = { x: DX / 2, y: (yt + yb) / 2 + DY / 2 };
  const cuts = [200, 280, 360, 440];
  const radiusAt = (x: number) => {
    const d = (x - tumor.cx) / tumor.a;
    return d * d < 1 ? r1(tumor.r * Math.sqrt(1 - d * d)) : 0;
  };
  /** A circle of radius `r` lying in the cutting plane at `x`, as drawn. */
  const inPlane = (x: number, r: number) =>
    Array.from({ length: 28 }, (_, k) => {
      const t = (k / 28) * Math.PI * 2;
      return `${r1(x + mid.x + r * sin(t) * ux)},${r1(mid.y - r * cos(t) + r * sin(t) * uy)}`;
    }).join(' ');
  const pts = (...p: [number, number][]) => p.map(([x, y]) => `${x},${y}`).join(' ');
  /* the sections, in a row under their cuts */
  const sw = 132;
  const sh = 170;
  const sy = 198;
  const slotX = (i: number) => 12 + i * (sw + 16);
  const shift = [
    [-4, -2],
    [0, 2],
    [5, 3],
    [4, 2],
  ];
  /* four beats, one per click (`SERIAL_SECTIONS_CUES`): the cuts, the
     sections, their antibodies, and the one that missed */
  const cutAt = (i: number) => 1.2 + i * 0.3;
  const slideAt = (i: number) => 3 + i * 0.35;
  const stainAt = (i: number) => 5 + i * 0.45;
  const gone = 7.4;
  const css = `
    section.present .${u}-blink { animation: sm-pulse 1.6s ease-in-out ${gone + 0.4}s 3 both; }
    @media (prefers-reduced-motion: reduce) {
      section.present [class*="${u}-"] { animation: none; }
    }
  `;

  return (
    <svg
      width={W}
      height={470}
      viewBox={`0 0 ${W} 470`}
      role="img"
      aria-label="A tissue block drawn in 3D with a tumor inside it, cut by four planes; each plane shows the tumor's cross-section. Underneath, the four serial sections, one antibody each: CD3, CD20, Ki-67, PanCK. The tumor shrinks from section to section, and the PanCK section was cut outside the tumor"
      className="shrink-0"
    >
      <LoopStyles css={css} />
      <defs>
        <radialGradient id={`${u}-tumor`} cx="34%" cy="26%" r="80%">
          <stop offset="0" stopColor="#c4b5fd" />
          <stop offset="0.45" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#3b0764" />
        </radialGradient>
      </defs>

      {/* the block, in 3D, with the tumor inside it */}
      <g className="sm-fade" style={delay(0.1)}>
        {/* the edges behind */}
        <path
          d={`M${bx0},${yb} L${bx0 + DX},${yb + DY} L${bx1 + DX},${yb + DY} M${bx0 + DX},${yb + DY} L${bx0 + DX},${yt + DY}`}
          fill="none"
          stroke={EOSIN_EDGE}
          strokeOpacity={0.35}
          strokeWidth={1.2}
          strokeDasharray="4 4"
        />
        <polygon points={pts([bx0, yt], [bx0 + DX, yt + DY], [bx1 + DX, yt + DY], [bx1, yt])} fill={TISSUE_BG} fillOpacity={0.75} stroke={EOSIN_EDGE} strokeOpacity={0.55} strokeWidth={1.4} strokeLinejoin="round" />
        <polygon points={pts([bx1, yt], [bx1 + DX, yt + DY], [bx1 + DX, yb + DY], [bx1, yb])} fill={EOSIN} fillOpacity={0.5} stroke={EOSIN_EDGE} strokeOpacity={0.55} strokeWidth={1.4} strokeLinejoin="round" />
        <rect x={bx0} y={yt} width={bx1 - bx0} height={yb - yt} fill={TISSUE_BG} fillOpacity={0.45} stroke={EOSIN_EDGE} strokeOpacity={0.55} strokeWidth={1.4} />
        {/* the tumor: a body, lit from the top left */}
        <ellipse cx={tumor.cx + mid.x} cy={mid.y + 5} rx={tumor.a - 6} ry={tumor.r} fill="#3b0764" fillOpacity={0.12} />
        <ellipse cx={tumor.cx + mid.x} cy={mid.y} rx={tumor.a + 1} ry={tumor.r + 2} fill={`url(#${u}-tumor)`} fillOpacity={0.9} />
        <ellipse cx={tumor.cx + mid.x - 62} cy={mid.y - 15} rx={52} ry={6} fill="#ffffff" fillOpacity={0.28} />
        <T x={132} y={mid.y + 2} size={14} weight={700} fill="#ffffff">
          tumor
        </T>
      </g>

      {/* the cutting planes, each with the tumor's cross-section on it */}
      {cuts.map((x, i) => {
        const r = radiusAt(x);
        const slideCx = slotX(i) + sw / 2;
        return (
          <g key={x}>
            <g className="sm-in" style={delay(cutAt(i))}>
              <polygon
                points={pts([x, yt - 8], [x + DX, yt + DY - 8], [x + DX, yb + DY + 8], [x, yb + 8])}
                fill={SURFACE}
                fillOpacity={0.55}
                stroke={FG}
                strokeWidth={1.6}
                strokeLinejoin="round"
              />
              {r > 0 ? (
                <polygon points={inPlane(x, r)} fill={HEMATOXYLIN} fillOpacity={0.85} stroke="#ffffff" strokeWidth={1.4} />
              ) : (
                <polygon points={inPlane(x, 13)} fill="none" stroke={MUTED} strokeWidth={1.4} strokeDasharray="3 3" />
              )}
              <T x={x - 10} y={yb + 14} size={13} mono weight={700}>
                {i + 1}
              </T>
            </g>
            {/* from the cut to its section */}
            <Path className="sm-fade" style={delay(slideAt(i))} d={`M${x},${yb + 12} C${x},${yb + 38} ${slideCx},${sy - 30} ${slideCx},${sy - 4}`} stroke={MUTED} width={1.4} dash="4 4" />
          </g>
        );
      })}
      {/* the fourth cut misses */}
      <polygon className="sm-fade" style={delay(gone)} points={inPlane(cuts[3], 13)} fill="none" stroke={WARN} strokeWidth={2.2} strokeDasharray="3 3" />

      {/* one section per glass slide, one antibody per section */}
      {order.map((k, i) => {
        const x = slotX(i);
        const scx = x + sw / 2;
        const scy = sy + 34 + (sh - 34) / 2;
        const r = r1(radiusAt(cuts[i]) * 0.95);
        const [dx, dy] = shift[i];
        const lost = r === 0;
        return (
          <g key={k}>
            <g className="sm-in" style={delay(slideAt(i))}>
              <rect x={x} y={sy} width={sw} height={sh} rx={6} fill={SURFACE} fillOpacity={0.6} stroke={BORDER} strokeWidth={1.6} />
              <rect x={x} y={sy} width={sw} height={34} rx={6} fill={BORDER} fillOpacity={0.55} />
              <T x={x + 24} y={sy + 18} size={12} mono fill={MUTED}>
                §{i + 1}
              </T>
              <TissueGlyph cx={scx} cy={scy} s={0.75} palette="he" shape="disc" half={64} ox={i * 9} oy={i * 5} />
            </g>
            <g className="sm-fade" style={delay(stainAt(i))}>
              <TissueGlyph cx={scx} cy={scy} s={0.75} palette="stained" stains={[k]} patchy={false} shape="disc" half={64} ox={i * 9} oy={i * 5} background={false} />
            </g>
            {!lost ? (
              <polygon
                className="sm-fade"
                style={delay(slideAt(i) + 0.3)}
                points={starPoly(scx + dx, scy + dy, r, i + 3)}
                fill={HEMATOXYLIN}
                fillOpacity={0.5}
                stroke={HEMATOXYLIN}
                strokeWidth={1.5}
              />
            ) : (
              <g className="sm-fade" style={delay(gone)}>
                <circle cx={scx + dx} cy={scy + dy} r={18} fill={SURFACE} fillOpacity={0.85} stroke={WARN} strokeWidth={2.4} strokeDasharray="4 4" />
                <T className={`${u}-blink`} x={scx + dx} y={scy + dy + 1} size={20} weight={800} fill={WARN}>
                  ?
                </T>
              </g>
            )}
            <g className="sm-pop" style={delay(stainAt(i) - 0.2)}>
              <rect x={x + sw - 66} y={sy + 6} width={60} height={22} rx={6} fill={STAIN[k].color} fillOpacity={0.16} stroke={STAIN[k].color} strokeWidth={1.5} />
              <T x={x + sw - 36} y={sy + 17} size={12} mono weight={700}>
                {STAIN[k].name}
              </T>
            </g>
            {lost ? (
              <rect className="sm-draw" style={delay(gone)} pathLength={1} x={x - 3} y={sy - 3} width={sw + 6} height={sh + 6} rx={8} fill="none" stroke={WARN} strokeWidth={2.4} />
            ) : null}
          </g>
        );
      })}

    </svg>
  );
}

/** What Kim hears about: chromogenic cycling as an idea, and the presenter
    drives it. One section in the middle, the cycle round it, and the four
    stations are buttons: press "stain" and the round's antibody marks its
    cells, "image" files the round's image, "wash" takes the colour off, and
    "next antibody" moves on (CD3, CD20, Ki-67, PanCK). After the last round
    "next antibody" overlays all four on the same cells: the answer to the
    serial sections. Once more starts over. Outside the current slide it shows
    that end state. */
export function CyclingIdeaFigure() {
  const u = useUid();
  const W = 600;
  const H = 560;
  const C = { x: 300, y: 235 };
  const R = 170;
  const ROUNDS: StainKey[] = ['cd3', 'cd20', 'ki67', 'panck'];
  const disc = { s: 1.2, half: 72 };
  const cells = tissueCells(-disc.half, -disc.half, disc.half, disc.half).filter((c) => c.x * c.x + c.y * c.y < (disc.half - 8) ** 2);
  const X = (x: number) => Math.round((C.x + x * disc.s) * 10) / 10;
  const Y = (y: number) => Math.round((C.y + y * disc.s) * 10) / 10;
  const marks = (key: StainKey, c: Cell) => (key === 'ki67' ? c.ki67 : c.kind === key);

  /* where the presenter is: which round, the last station pressed in it
     (-1: none yet), which rounds have their image, and how often it was
     washed (each wash replays the rinse) */
  const [at, setAt] = useState<{ round: number; stage: number; imaged: number[]; washes: number }>({ round: 0, stage: -1, imaged: [], washes: 0 });
  const all = at.round >= ROUNDS.length;
  const press = (k: number) =>
    setAt((s) => {
      if (s.round >= ROUNDS.length) return k === 3 ? { round: 0, stage: -1, imaged: [], washes: 0 } : s;
      if (k === 1) return { ...s, stage: 1, imaged: s.imaged.includes(s.round) ? s.imaged : [...s.imaged, s.round] };
      if (k === 2) return { ...s, stage: 2, washes: s.washes + 1 };
      if (k === 3) return { ...s, round: s.round + 1, stage: -1 };
      return { ...s, stage: 0 };
    });
  /* a layer shows from "stain" until "wash"; in the end all of them do */
  const stained = (r: number) => all || (r === at.round && (at.stage === 0 || at.stage === 1));
  /* the next station to press: it gets a quiet ring, so the presenter never hunts */
  const hint = all ? 3 : at.stage + 1;

  const css = `
    .${u}-layer, .${u}-tile, .${u}-hl, .${u}-label { transition: opacity 0.5s ease; }
    .${u}-station { cursor: pointer; }
    .${u}-station:hover .${u}-plate { stroke: ${PRIMARY}; }
    .${u}-rinse { opacity: 0; }
    section.present .${u}-rinse { animation: ${u}-rinse 1.1s ease-in-out both; }
    @keyframes ${u}-rinse { 0% { opacity: 0; } 35% { opacity: 1; } 100% { opacity: 0; } }
    /* off the current slide: the end state, every marker on the same cells */
    .reveal .slides section:not(.present) .${u}-layer, .reveal .slides section:not(.present) .${u}-tile { opacity: 1 !important; }
    @media (prefers-reduced-motion: reduce) { .${u}-layer, .${u}-tile, .${u}-hl, .${u}-label { transition: none; } section.present .${u}-rinse { animation: none; } }`;

  const stations: { n: string; title: string; sub: string; x: number; y: number }[] = [
    { n: '①', title: 'stain', sub: 'antibody + chromogen', x: C.x, y: C.y - R },
    { n: '②', title: 'image', sub: 'the whole slide', x: C.x + R, y: C.y },
    { n: '③', title: 'wash', sub: 'until the colour is gone', x: C.x, y: C.y + R },
    { n: '④', title: 'next antibody', sub: 'same slide, same cells', x: C.x - R, y: C.y },
  ];
  const sw = 168;
  const sh = 58;

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} role="group" aria-label="Chromogenic cycling, as an idea: one tissue section in the middle and a cycle round it: stain with an antibody and its chromogen, image the slide, wash until the colour is gone, take the next antibody. Four rounds: CD3, CD20, Ki-67 and PanCK, each marking its own cells, one image per round. In the end all four markers show together on the same cells. The four stations are buttons." className="sm-in shrink-0">
      <LoopStyles css={css} />
      {/* the cycle */}
      <circle cx={C.x} cy={C.y} r={R} fill="none" stroke={BORDER} strokeWidth={2.5} strokeDasharray="2 9" strokeLinecap="round" />
      {[45, 135, 225, 315].map((a) => {
        const rad = ((a - 90) * Math.PI) / 180;
        const x = C.x + R * Math.cos(rad);
        const y = C.y + R * Math.sin(rad);
        return <path key={a} d="M-6 -7 L4 0 L-6 7" fill="none" stroke={MUTED} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${a})`} />;
      })}

      {/* the section, one stain at a time, then all four */}
      <g>
        <circle cx={C.x} cy={C.y} r={disc.half * disc.s} fill={TISSUE_BG} stroke={EOSIN_EDGE} strokeOpacity={0.4} strokeWidth={1.5} />
        {cells.map((c, i) => (
          <g key={i} transform={`rotate(${c.rot} ${X(c.x)} ${Y(c.y)})`}>
            <ellipse cx={X(c.x)} cy={Y(c.y)} rx={c.rx * disc.s} ry={c.ry * disc.s} fill={EOSIN} fillOpacity={0.35} stroke={EOSIN_EDGE} strokeOpacity={0.25} strokeWidth={1} />
            <ellipse cx={X(c.x + c.nx)} cy={Y(c.y + c.ny)} rx={4.8 * disc.s} ry={3.9 * disc.s} fill={HEMATOXYLIN} fillOpacity={0.55} />
          </g>
        ))}
        {ROUNDS.map((key, r) => (
          <g key={key} className={`${u}-layer`} style={{ opacity: stained(r) ? 1 : 0 }}>
            {cells
              .filter((c) => marks(key, c))
              .map((c, i) =>
                key === 'ki67' ? (
                  <ellipse key={i} cx={X(c.x + c.nx)} cy={Y(c.y + c.ny)} rx={5.2 * disc.s} ry={4.3 * disc.s} fill={STAIN.ki67.color} fillOpacity={0.95} transform={`rotate(${c.rot} ${X(c.x)} ${Y(c.y)})`} />
                ) : (
                  <ellipse key={i} cx={X(c.x)} cy={Y(c.y)} rx={c.rx * disc.s} ry={c.ry * disc.s} fill="none" stroke={STAIN[key].color} strokeWidth={3.2} strokeOpacity={0.9} transform={`rotate(${c.rot} ${X(c.x)} ${Y(c.y)})`} />
                ),
              )}
          </g>
        ))}
        {at.washes > 0 ? <circle key={at.washes} className={`${u}-rinse`} cx={C.x} cy={C.y} r={disc.half * disc.s} fill="#7dd3fc" fillOpacity={0.35} /> : null}
      </g>

      {/* which antibody this round; then the overlay's caption */}
      {ROUNDS.map((key, r) => (
        <T key={key} className={`${u}-label`} style={{ opacity: !all && r === at.round ? 1 : 0 }} x={C.x} y={C.y - disc.half * disc.s - 16} size={15} mono weight={700} fill={STAIN[key].color}>
          {`round ${r + 1} · ${STAIN[key].name}`}
        </T>
      ))}
      <T className={`${u}-label`} style={{ opacity: all ? 1 : 0 }} x={C.x} y={C.y - disc.half * disc.s - 16} size={15} weight={700} fill={FG}>
        every marker, on the same cells
      </T>

      {/* the stations: press them */}
      {stations.map((st, k) => (
        <g
          key={st.title}
          className={`${u}-station`}
          role="button"
          tabIndex={0}
          aria-label={st.title}
          onClick={() => press(k)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.stopPropagation();
              press(k);
            }
          }}
        >
          <rect className={`${u}-plate`} x={st.x - sw / 2} y={st.y - sh / 2} width={sw} height={sh} rx={14} fill={SURFACE} stroke={BORDER} strokeWidth={1.8} />
          <rect className={`${u}-hl`} style={{ opacity: !all && k === at.stage ? 1 : 0 }} x={st.x - sw / 2} y={st.y - sh / 2} width={sw} height={sh} rx={14} fill={PRIMARY} fillOpacity={0.1} stroke={PRIMARY} strokeWidth={2.5} />
          <rect className={`${u}-hl`} style={{ opacity: k === hint ? 0.55 : 0 }} x={st.x - sw / 2 - 5} y={st.y - sh / 2 - 5} width={sw + 10} height={sh + 10} rx={18} fill="none" stroke={PRIMARY} strokeWidth={1.6} strokeDasharray="3 6" strokeLinecap="round" />
          <T x={st.x} y={st.y - 9} size={18} weight={700}>
            {`${st.n} ${st.title}`}
          </T>
          <T x={st.x} y={st.y + 13} size={12.5} fill={MUTED}>
            {st.sub}
          </T>
        </g>
      ))}

      {/* the images, one per round */}
      <T x={30} y={466} anchor="start" size={12} mono weight={700} fill={MUTED}>
        ONE SLIDE · ONE IMAGE PER ROUND
      </T>
      {ROUNDS.map((key, r) => {
        const x = 30 + r * 140;
        return (
          <g key={key}>
            <rect x={x} y={482} width={128} height={48} rx={10} fill="none" stroke={BORDER} strokeWidth={1.6} strokeDasharray="5 5" />
            <g className={`${u}-tile`} style={{ opacity: all || at.imaged.includes(r) ? 1 : 0 }}>
              <rect x={x} y={482} width={128} height={48} rx={10} fill={SURFACE} stroke={STAIN[key].color} strokeWidth={2} />
              <circle cx={x + 24} cy={506} r={12} fill={TISSUE_BG} stroke={STAIN[key].color} strokeWidth={3} />
              <T x={x + 46} y={498} anchor="start" size={12} mono fill={MUTED}>{`image ${r + 1}`}</T>
              <T x={x + 46} y={515} anchor="start" size={15} weight={700} fill={STAIN[key].color}>{STAIN[key].name}</T>
            </g>
          </g>
        );
      })}
    </svg>
  );
}

/** The catch in the cycle: in practice nearly every chromogen is brown
    (DAB). Four beats, one per click: round 1 marks the CD3 cells; the wash
    leaves some of them faintly brown; round 2 marks the CD20 cells, brown
    as well; and the leftovers, ringed, look just like them. */
export function AllBrownFigure() {
  const u = useUid();
  const DAB = '#7c4a1e';
  const disc = { half: 64, s: 1.2 };
  const cells = tissueCells(-disc.half, -disc.half, disc.half, disc.half).filter((c) => c.x * c.x + c.y * c.y < (disc.half - 8) ** 2);
  const leftover = (c: Cell) => c.kind === 'cd3' && c.took;
  const xs = [95, 300, 505];
  const cy = 190;
  const r = disc.half * disc.s;
  /** One section: `brown` says how brown each cell is (0 to 1). */
  const section = (x: number, brown: (c: Cell) => number, at: number, rings = false) => {
    const X = (v: number) => Math.round((x + v * disc.s) * 10) / 10;
    const Y = (v: number) => Math.round((cy + v * disc.s) * 10) / 10;
    return (
      <g className="sm-pop" style={delay(at)}>
        <circle cx={x} cy={cy} r={r} fill={TISSUE_BG} stroke={EOSIN_EDGE} strokeOpacity={0.4} strokeWidth={1.5} />
        {cells.map((c, i) => {
          const b = brown(c);
          return (
            <g key={i} transform={`rotate(${c.rot} ${X(c.x)} ${Y(c.y)})`}>
              <ellipse cx={X(c.x)} cy={Y(c.y)} rx={c.rx * disc.s} ry={c.ry * disc.s} fill={b > 0 ? DAB : EOSIN} fillOpacity={b > 0 ? 0.25 + 0.6 * b : 0.35} stroke={EOSIN_EDGE} strokeOpacity={0.25} strokeWidth={1} />
              <ellipse cx={X(c.x + c.nx)} cy={Y(c.y + c.ny)} rx={4.8 * disc.s} ry={3.9 * disc.s} fill={HEMATOXYLIN} fillOpacity={0.6} />
            </g>
          );
        })}
        {rings
          ? cells.filter(leftover).map((c, i) => (
              <circle key={`q${i}`} className="sm-fade" style={delay(3.5)} cx={X(c.x)} cy={Y(c.y)} r={c.rx * disc.s + 4} fill="none" stroke={WARN} strokeWidth={3} />
            ))
          : null}
      </g>
    );
  };
  const arrow = (x1: number, x2: number, label: string, at: number) => (
    <g className="sm-in" style={delay(at)}>
      <path d={`M${x1} ${cy} L${x2} ${cy}`} stroke={MUTED} strokeWidth={2.5} strokeLinecap="round" />
      <path d={`M${x2 - 8} ${cy - 7} L${x2} ${cy} L${x2 - 8} ${cy + 7}`} fill="none" stroke={MUTED} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      <T x={(x1 + x2) / 2} y={cy - 16} size={14} mono weight={700} fill={MUTED}>
        {label}
      </T>
    </g>
  );
  return (
    <Steps cues={[0.9, 2.3, 3.4, 4.3]}>
    <svg width={600} height={420} viewBox="0 0 600 420" role="img" aria-label="Three views of the same section, all in the same brown. Round 1, CD3: the CD3 cells are brown. After the wash: most are clean, a few are still faintly brown. Round 2, CD20: the CD20 cells are brown, and so are the leftovers from round 1; they are ringed with a question: CD20, or CD3 that never left?" className="shrink-0">
      {(
        [
          ['round 1 · CD3', 0.2],
          ['after the wash', 1.3],
          ['round 2 · CD20', 2.7],
        ] as const
      ).map(([label, at], i) => (
        <T key={label} className="sm-in" style={delay(at)} x={xs[i]} y={cy - r - 20} size={16} weight={700} fill={i === 1 ? MUTED : DAB}>
          {label}
        </T>
      ))}
      {section(xs[0], (c) => (c.kind === 'cd3' ? 1 : 0), 0.2)}
      {arrow(xs[0] + r + 8, xs[1] - r - 8, 'wash', 1)}
      {section(xs[1], (c) => (leftover(c) ? 0.35 : 0), 1.3)}
      {arrow(xs[1] + r + 8, xs[2] - r - 8, 'stain', 2.4)}
      {section(xs[2], (c) => (c.kind === 'cd20' ? 1 : leftover(c) ? 0.85 : 0), 2.7, true)}

      <g className="sm-in" style={delay(3.5)}>
        <path d={`M${xs[2]} ${cy + r + 6} L${xs[2]} ${cy + r + 34}`} stroke={WARN} strokeWidth={2} strokeDasharray="4 4" />
        <rect x={xs[2] - 150} y={cy + r + 34} width={240} height={62} rx={14} fill={SURFACE} stroke={WARN} strokeWidth={2} />
        <T x={xs[2] - 30} y={cy + r + 56} size={17} weight={700}>
          CD20?
        </T>
        <T x={xs[2] - 30} y={cy + r + 78} size={15} fill={MUTED}>
          or CD3 that never left?
        </T>
      </g>
      <g className="sm-in" style={delay(1.6)}>
        <T x={xs[1]} y={cy + r + 26} size={14} fill={MUTED}>
          gone? mostly.
        </T>
      </g>
    </svg>
    </Steps>
  );
}

/** The clock `ChromogenicRoundFigure` and `KimAtWork` share: 26 s, from
    0.8 s. They sit in different corners of the slide, so the slide wraps
    both in one `<Steps cues={CHROMOGENIC_ROUND_CUES} period={CHROMOGENIC_ROUND_PERIOD}>`:
    stain 1 goes on, then one click per trip (image 1, wash 1, wash 2,
    stain 2 and the overlay). */
export const CHROMOGENIC_ROUND_PERIOD = 26;
export const CHROMOGENIC_ROUND_CUES = [1.75, 5.7, 11.7, 17.7, 25.3];

/** Kim, beside `ChromogenicRoundFigure`, on its clock (26 s, from 0.8 s):
    she starts out, frowns at wash 1 (not gone: wash again), celebrates at
    wash 2 (gone: on to stain 2), and ends on the overlay. Outside the
    current slide it shows the last line. */
export function KimAtWork() {
  const u = useUid();
  const P = CHROMOGENIC_ROUND_PERIOD;
  const pct = (t: number) => ((t / P) * 100).toFixed(2);
  const vis = (name: string, ranges: [number, number][], still: 0 | 1) => `
    .${u}-${name} { opacity: ${still}; }
    section.present .${u}-${name} { animation: ${u}-${name} ${P}s linear 0.8s infinite both; }
    @keyframes ${u}-${name} { 0% { opacity: 0; } ${ranges
      .map(([a, b]) => `${pct(a)}% { opacity: 0; } ${pct(a + 0.25)}% { opacity: 1; } ${pct(b - 0.25)}% { opacity: 1; } ${pct(b)}% { opacity: 0; }`)
      .join(' ')} 100% { opacity: 0; } }`;
  const START: [number, number] = [0.2, 8];
  const AGAIN: [number, number] = [8, 13.9];
  const DONE: [number, number] = [13.9, 19.7];
  const END: [number, number] = [19.7, 25.8];
  const css = [
    vis('neutral', [START], 0),
    vis('worried', [AGAIN], 0),
    vis('happy', [DONE, END], 1),
    vis('l0', [START], 0),
    vis('l1', [AGAIN], 0),
    vis('l2', [DONE], 0),
    vis('l3', [END], 1),
    vis('party', [DONE], 0),
    `.${u}-bit { transform-box: fill-box; transform-origin: center; }
    section.present .${u}-bit { animation: ${u}-bit ${P}s ease-out 0.8s infinite both; }
    @keyframes ${u}-bit { 0%, ${pct(DONE[0])}% { transform: translate(0, 0) scale(0.2) rotate(0deg); } ${pct(DONE[0] + 1.2)}% { transform: translate(var(--x), var(--y)) scale(1) rotate(200deg); } ${pct(DONE[1])}%, 100% { transform: translate(var(--x), calc(var(--y) + 30px)) scale(1) rotate(320deg); } }`,
    `@media (prefers-reduced-motion: reduce) { section.present [class*="${u}-"] { animation: none !important; } }`,
  ].join('\n');
  const lines: [string, ReactNode][] = [
    ['l0', <>Stain 1, then wash it off…</>],
    ['l1', <>Still too much. <span style={{ color: WARN }}>Let’s wash again.</span></>],
    ['l2', <>🎉 It’s done, <span className="text-fd-primary">let’s go!</span></>],
    ['l3', <>Overlay the two images: <span className="text-fd-primary">multi-staining.</span></>],
  ];
  const bits = [
    [-70, -90, '#f87171'], [60, -110, '#fbbf24'], [110, -40, '#34d399'], [-110, -20, '#60a5fa'],
    [20, -140, '#c084fc'], [-40, -130, '#f472b6'], [90, -100, '#2dd4bf'], [-90, -70, '#fb923c'],
  ] as const;
  return (
    <div className="flex items-end gap-3">
      <LoopStyles css={css} />
      <div className="relative h-[162px] w-[130px] shrink-0">
        <div className={`${u}-neutral absolute inset-0`}>
          <KimFigure size={130} />
        </div>
        <div className={`${u}-worried absolute inset-0`}>
          <KimFigure size={130} mood="worried" />
        </div>
        <div className={`${u}-happy absolute inset-0`}>
          <KimFigure size={130} mood="happy" />
        </div>
        <div className={`${u}-party pointer-events-none absolute left-1/2 top-1/2`} aria-hidden>
          {bits.map(([x, y, color], i) => (
            <span
              key={i}
              className={`${u}-bit absolute block h-[8px] w-[14px] rounded-[2px]`}
              style={{ background: color, ['--x' as string]: `${x}px`, ['--y' as string]: `${y}px` } as CSSProperties}
            />
          ))}
        </div>
      </div>
      <div className="relative mb-14 h-[120px] flex-1 rounded-3xl rounded-bl-sm border-2 border-fd-border bg-fd-card shadow-sm">
        {lines.map(([key, text]) => (
          <p key={key} className={`${u}-${key} absolute inset-0 flex items-center px-6 text-[26px] font-bold leading-[1.22] tracking-[-0.015em]`}>
            <span>
              <span className="sr-only">Kim: </span>“{text}”
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

/** Kim tries chromogenic cycling, by hand: four trips from the staining
    and washing station to the microscope to the computer, one per click
    (the slide's `Steps`, see `CHROMOGENIC_ROUND_CUES`).
    1. Stain 1 goes on; she takes image 1.
    2. Wash 1: under the microscope the stain is not completely gone.
    3. Wash 2: now it is completely gone.
    4. Stain 2, a different antibody, goes on the same cells' neighbours; she
       takes image 2, and on the computer the two images are overlaid:
       multi-staining. */
export function ChromogenicRoundFigure() {
  const u = useUid();
  const W = 600;
  const P = CHROMOGENIC_ROUND_PERIOD;
  const ink = '#1f2937';
  const WASH = '#7dd3fc';
  /* two antibodies: each has its own bottle, its own colour, its own cells */
  const stains = [
    { name: 'stain 1', color: STAIN.cd3.color, marks: (c: Cell) => c.kind === 'cd3' || c.kind === 'cd20' },
    { name: 'stain 2', color: STAIN.ki67.color, marks: (c: Cell) => c.kind === 'panck' },
  ];
  /* the three stations, and Kim's stops under them */
  const cardW = 180;
  const cardX = [12, 210, 408];
  const mid = (i: number) => cardX[i] + cardW / 2;
  const step = cardX[1] - cardX[0];
  const bottleX = [mid(0) - 57, mid(0), mid(0) + 57];
  /* the cells under the microscope; some of stain 1's keep it through wash 1 */
  const lens = { cx: mid(1), cy: 128, s: 0.9, half: 64 };
  const cells = tissueCells(-lens.half, -lens.half, lens.half, lens.half).filter((c) => c.x * c.x + c.y * c.y < (lens.half - 8) ** 2);
  const first = cells.filter(stains[0].marks);
  const second = cells.filter(stains[1].marks);
  const sticky = (c: Cell) => c.took;
  const clean = Math.round((first.filter((c) => !sticky(c)).length / first.length) * 100);

  /* the clock, in seconds: four trips, the last one ending on the overlay */
  const T0 = [0, 6, 12, 18];
  const bench = T0.map((t) => [t, t + 1] as [number, number]);
  const scope = T0.map((t) => [t + 1.7, t + 3.2] as [number, number]);
  const pc = T0.map((t, r) => [t + 3.8, r === 3 ? t + 6.8 : t + 5.1] as [number, number]);
  const home = 25.7;
  const off = 25.3;
  const overlayAt = pc[3][0] + 1.5;
  const pctOf = (t: number) => Math.round((t / P) * 10000) / 100;
  const loop = (name: string, timing = 'linear') => `section.present .${u}-${name} { animation: ${u}-${name} ${P}s ${timing} 0.8s infinite both; }`;
  /** Visible during the given stretches of the loop, in seconds. */
  const shown = (name: string, ...ranges: [number, number][]) => {
    const stops = ranges.flatMap(([a, b]) => {
      const from = pctOf(a);
      const to = pctOf(b);
      return [from > 0 ? `${from - 0.75}% { opacity: 0; }` : '', `${from}%, ${to}% { opacity: 1; }`, to < 100 ? `${to + 0.75}% { opacity: 0; }` : ''];
    });
    return `
    .${u}-${name} { opacity: 0; }
    ${loop(name)}
    @keyframes ${u}-${name} { ${ranges[0][0] > 0 ? '0% { opacity: 0; }' : ''} ${stops.join(' ')} ${ranges[ranges.length - 1][1] < P ? '100% { opacity: 0; }' : ''} }`;
  };
  /** A drop falling from its bottle onto the slide, at each given second. */
  const falls = (name: string, ...at: number[]) => `
    .${u}-${name} { opacity: 0; }
    ${loop(name, 'ease-in')}
    @keyframes ${u}-${name} { 0% { opacity: 0; transform: translateY(0); } ${at
      .map((t) => `${pctOf(t)}% { opacity: 0; transform: translateY(0); } ${pctOf(t + 0.1)}% { opacity: 1; transform: translateY(0); } ${pctOf(t + 0.6)}% { opacity: 1; transform: translateY(38px); } ${pctOf(t + 0.7)}% { opacity: 0; transform: translateY(38px); }`)
      .join(' ')} 100% { opacity: 0; transform: translateY(38px); } }`;
  const at = (x: number, [a, b]: [number, number]) => `${pctOf(a)}%, ${pctOf(b)}% { transform: translateX(${x}px); }`;
  const entries = [
    { head: 'stain 1', swatch: stains[0].color, text: 'image 1 saved', fill: '#f9fafb' },
    { head: 'wash 1', swatch: WASH, text: `${clean} % clean ✗`, fill: '#fbbf24' },
    { head: 'wash 2', swatch: WASH, text: '100 % clean ✓', fill: '#34d399' },
    { head: 'stain 2', swatch: stains[1].color, text: 'image 2 saved', fill: '#f9fafb' },
  ];
  const entryOn = (r: number): [number, number] => [pc[r][0], r < 3 ? pc[r + 1][0] - 0.5 : off];
  const says: [string, string, number, string, [number, number]][] = [
    ['say-b0', 'stain 1', 0, stains[0].color, [0.1, 0.95]],
    ['say-b1', 'wash 1', 0, PRIMARY, [6.1, 6.95]],
    ['say-b2', 'wash 2', 0, PRIMARY, [12.1, 12.95]],
    ['say-b3', 'stain 2', 0, stains[1].color, [18.1, 18.95]],
    ['say-s0', 'take image 1', 1, PRIMARY, [scope[0][0] + 0.1, scope[0][1] - 0.1]],
    ['say-s1', 'not completely gone', 1, WARN, [scope[1][0] + 0.1, scope[1][1] - 0.1]],
    ['say-s2', 'completely gone', 1, PRIMARY, [scope[2][0] + 0.1, scope[2][1] - 0.1]],
    ['say-s3', 'take image 2', 1, PRIMARY, [scope[3][0] + 0.1, scope[3][1] - 0.1]],
    ['say-p0', 'write it down', 2, PRIMARY, [pc[0][0] + 0.1, pc[0][1] - 0.1]],
    ['say-p1', 'write it down', 2, PRIMARY, [pc[1][0] + 0.1, pc[1][1] - 0.1]],
    ['say-p2', 'write it down', 2, PRIMARY, [pc[2][0] + 0.1, pc[2][1] - 0.1]],
    ['say-p3', 'overlay the images', 2, PRIMARY, [pc[3][0] + 0.1, overlayAt - 0.1]],
    ['say-multi', 'multi-staining', 2, PRIMARY, [overlayAt + 0.3, pc[3][1] - 0.1]],
  ];
  const css = `
    ${loop('walk', 'ease-in-out')}
    @keyframes ${u}-walk { ${T0.map((_, r) => `${at(0, bench[r])} ${at(step, scope[r])} ${at(2 * step, pc[r])}`).join(' ')} ${pctOf(home)}%, 100% { transform: translateX(0); } }
    ${shown('bench', ...bench, [home, P])}
    ${shown('scope', ...scope)}
    ${shown('pc', ...pc)}
    ${shown('carried', ...T0.map((t, r) => [t + 1.05, (r < 3 ? t + 6 : home) - 0.05] as [number, number]))}
    ${says.map(([name, , , , range]) => shown(name, range)).join('')}
    ${entries.map((_, r) => shown(`entry${r}`, entryOn(r))).join('')}
    ${shown('img1', [pc[0][0] + 0.7, off])}
    ${shown('img2', [pc[3][0] + 0.7, off])}
    ${shown('both', [overlayAt, off])}
    ${shown('full', [0.6, 6.5])}
    ${shown('left', [6.5, 12.5])}
    ${shown('next', [18.6, home + 0.2])}
    ${shown('ring1', [scope[1][0] + 0.2, scope[1][1] - 0.3])}
    ${shown('ring2', [scope[2][0] + 0.2, scope[2][1] - 0.3])}
    .${u}-view { opacity: 0.22; }
    ${loop('view')}
    @keyframes ${u}-view { 0% { opacity: 0.22; } ${scope.map(([a, b]) => `${pctOf(a) - 0.75}% { opacity: 0.22; } ${pctOf(a)}%, ${pctOf(b)}% { opacity: 1; } ${pctOf(b) + 0.75}% { opacity: 0.22; }`).join(' ')} 100% { opacity: 0.22; } }
    ${falls('drop0', 0.15)}
    ${falls('drop1', 18.15)}
    ${falls('drop2', 6.15, 12.15)}
    section.present .${u}-type { transform-box: fill-box; transform-origin: right center; animation: ${u}-type ${P}s steps(14, end) 0.8s infinite both; }
    @keyframes ${u}-type { 0% { transform: scaleX(1); } ${entries
      .map((_, r) => `${pctOf(pc[r][0])}% { transform: scaleX(1); } ${pctOf(pc[r][0] + 0.6)}%, ${pctOf(entryOn(r)[1] + 0.3)}% { transform: scaleX(0); } ${pctOf(entryOn(r)[1] + 0.35)}% { transform: scaleX(1); }`)
      .join(' ')} 100% { transform: scaleX(1); } }
    @media (prefers-reduced-motion: reduce) {
      section.present [class*="${u}-"] { animation: none; }
      section.present :is(.${u}-bench, .${u}-next, .${u}-entry3, .${u}-img1, .${u}-img2, .${u}-both, .${u}-say-multi) { opacity: 1; }
      section.present .${u}-type { opacity: 0; }
    }
  `;
  const drop = (x: number, y: number) => `M${x} ${y} C ${x + 3} ${y + 6}, ${x + 6} ${y + 9}, ${x + 6} ${y + 13} A 6 6 0 1 1 ${x - 6} ${y + 13} C ${x - 6} ${y + 9}, ${x - 3} ${y + 6}, ${x} ${y} Z`;
  const bottle = (x: number, color: string, label: string) => (
    <g key={label}>
      <T x={x} y={56} size={11} mono weight={700} fill={MUTED}>
        {label}
      </T>
      <rect x={x - 8} y={66} width={16} height={10} rx={2} fill={FG} fillOpacity={0.8} />
      <rect x={x - 17} y={76} width={34} height={52} rx={5} fill={SURFACE} stroke={FG} strokeWidth={2} />
      <rect x={x - 14} y={92} width={28} height={33} rx={3} fill={color} fillOpacity={0.8} />
      <path d={`M${x - 4} 128 h8 l-2 10 h-4 Z`} fill={FG} fillOpacity={0.8} />
    </g>
  );
  /** A glass slide with its section on it: stain 1, what wash 1 leaves of
      it, then stain 2. */
  const glass = (x: number, y: number, w: number) => (
    <g>
      <rect x={x} y={y} width={w} height={14} rx={2} fill="#f8fafc" stroke="#94a3b8" strokeWidth={1.4} />
      <ellipse cx={x + w / 2} cy={y + 7} rx={w * 0.3} ry={4.5} fill={EOSIN} />
      <ellipse className={`${u}-full`} cx={x + w / 2} cy={y + 7} rx={w * 0.3} ry={4.5} fill={stains[0].color} />
      <ellipse className={`${u}-left`} cx={x + w / 2} cy={y + 7} rx={w * 0.3} ry={4.5} fill={stains[0].color} fillOpacity={0.4} />
      <ellipse className={`${u}-next`} cx={x + w / 2} cy={y + 7} rx={w * 0.3} ry={4.5} fill={stains[1].color} />
    </g>
  );
  /** Cells in the lens carrying a stain. */
  const stainedCells = (which: Cell[], color: string, opacity = 0.85) =>
    which.map((c, i) => {
      const x = lens.cx + c.x * lens.s;
      const y = lens.cy + c.y * lens.s;
      return (
        <g key={i} transform={`rotate(${c.rot} ${x} ${y})`}>
          <ellipse cx={x} cy={y} rx={c.rx * lens.s} ry={c.ry * lens.s} fill={color} fillOpacity={opacity} />
          <ellipse cx={x + c.nx * lens.s} cy={y + c.ny * lens.s} rx={4.8 * lens.s} ry={3.9 * lens.s} fill={HEMATOXYLIN} fillOpacity={0.85} />
        </g>
      );
    });
  /** A saved image on the screen: the lens, small, with the given stains. */
  const thumb = (x: number, which: number[]) => {
    const k = 15 / (lens.half * lens.s);
    return (
      <g>
        <circle cx={x} cy={133} r={15} fill={TISSUE_BG} />
        {which.flatMap((r) =>
          (r === 0 ? first : second).map((c, i) => <circle key={`${r}-${i}`} cx={Math.round((x + c.x * lens.s * k) * 10) / 10} cy={Math.round((133 + c.y * lens.s * k) * 10) / 10} r={2.6} fill={stains[r].color} />),
        )}
        <circle cx={x} cy={133} r={15} fill="none" stroke="#9ca3af" strokeWidth={1.2} />
      </g>
    );
  };
  const rings = (name: string, color: (c: Cell) => string) =>
    first.map((c, i) => (
      <circle
        key={i}
        className={`${u}-${name}`}
        style={{ animationDelay: `${(0.8 + i * 0.04).toFixed(2)}s` }}
        cx={lens.cx + c.x * lens.s}
        cy={lens.cy + c.y * lens.s}
        r={c.rx * lens.s + 1}
        fill="none"
        stroke={color(c)}
        strokeWidth={2.2}
      />
    ));

  return (
    <svg
      width={W}
      height={470}
      viewBox={`0 0 ${W} 470`}
      role="img"
      aria-label={`Kim does chromogenic cycling by hand, on a loop, walking between the staining and washing station, the microscope and the computer. Stain 1 goes on and she takes image 1. After wash 1 the stain is not completely gone: ${clean} percent of the cells are clean. After wash 2 it is completely gone. Then stain 2 goes on, she takes image 2, and the two images are overlaid on the computer: multi-staining`}
      className="shrink-0"
    >
      <LoopStyles css={css} />
      <defs>
        <clipPath id={`${u}-lens`}>
          <circle cx={lens.cx} cy={lens.cy} r={lens.half * lens.s} />
        </clipPath>
      </defs>

      {/* the three stations */}
      {['stain · wash', 'microscope', 'computer'].map((name, i) => (
        <g key={name} className="sm-in" style={delay(0.2 + i * 0.15)}>
          <rect x={cardX[i]} y={34} width={cardW} height={216} rx={14} fill={SURFACE} stroke={BORDER} strokeWidth={1.6} />
          <rect className={`${u}-${['bench', 'scope', 'pc'][i]}`} x={cardX[i]} y={34} width={cardW} height={216} rx={14} fill="none" stroke={PRIMARY} strokeWidth={3} />
          <T x={mid(i)} y={230} size={14} weight={600} fill={MUTED}>
            {name}
          </T>
        </g>
      ))}

      {/* staining and washing: a bottle per antibody, and the wash */}
      <g className="sm-in" style={delay(0.2)}>
        {[...stains.map((st) => [st.color, st.name]), [WASH, 'wash']].map(([color, label], i) => bottle(bottleX[i], color, label))}
        {[stains[0].color, stains[1].color, WASH].map((color, i) => (
          <path key={i} className={`${u}-drop${i}`} d={drop(bottleX[i], 142)} fill={color} />
        ))}
        <rect x={mid(0) - 70} y={204} width={140} height={6} rx={3} fill={FG} fillOpacity={0.25} />
        <g className={`${u}-bench`}>{glass(mid(0) - 62, 190, 124)}</g>
      </g>

      {/* the microscope: what is on the slide right now */}
      <g className="sm-in" style={delay(0.35)}>
        <g className={`${u}-view`}>
          <g clipPath={`url(#${u}-lens)`}>
            <TissueGlyph cx={lens.cx} cy={lens.cy} s={lens.s} palette="he" shape="disc" half={lens.half} />
            <g className={`${u}-full`}>{stainedCells(first, stains[0].color)}</g>
            <g className={`${u}-left`}>{stainedCells(first.filter(sticky), stains[0].color, 0.6)}</g>
            <g className={`${u}-next`}>{stainedCells(second, stains[1].color)}</g>
          </g>
        </g>
        <circle cx={lens.cx} cy={lens.cy} r={lens.half * lens.s + 3} fill="none" stroke={FG} strokeWidth={6} />
        {/* after each wash she checks stain 1's cells: is it gone? */}
        {rings('ring1', (c) => (sticky(c) ? WARN : PRIMARY))}
        {rings('ring2', () => PRIMARY)}
      </g>

      {/* the computer: her notes, the saved images, and their overlay */}
      <g className="sm-in" style={delay(0.5)}>
        <rect x={mid(2) - 76} y={58} width={152} height={104} rx={8} fill={ink} stroke={FG} strokeWidth={2} />
        <rect x={mid(2) - 8} y={162} width={16} height={18} fill={FG} fillOpacity={0.8} />
        <rect x={mid(2) - 44} y={180} width={88} height={8} rx={3} fill={FG} fillOpacity={0.8} />
        <rect x={mid(2) - 58} y={196} width={116} height={10} rx={3} fill={SURFACE} stroke={FG} strokeWidth={1.6} />
        {/* ImageJ, open on it: its microscope, top right */}
        <g transform={`translate(${mid(2) + 40} 63)`}>
          <title>ImageJ</title>
          <rect width={28} height={28} rx={6} fill="#f8fafc" />
          <g transform="scale(0.933)">
            <g fill="#1d4f91">
              <rect x={6} y={23.5} width={18} height={3} rx={1.5} />
              <rect x={8} y={18.5} width={11} height={2} rx={1} />
              <rect x={10} y={4} width={6.5} height={10} rx={1.5} />
              <rect x={11.7} y={14} width={3} height={3.2} />
            </g>
            <path d="M20.5 24 V11.5 Q20.5 8 17 8 H16" fill="none" stroke="#1d4f91" strokeWidth={3} strokeLinecap="round" />
          </g>
        </g>
        {entries.map((e, r) => (
          <g key={r} className={`${u}-entry${r}`}>
            <rect x={mid(2) - 66} y={71} width={10} height={10} rx={2} fill={e.swatch} />
            <T x={mid(2) - 50} y={77} size={12} mono weight={700} anchor="start" fill="#e5e7eb">
              {e.head}
            </T>
            <T x={mid(2) - 66} y={103} size={13} mono weight={700} anchor="start" fill={e.fill}>
              {e.text}
            </T>
          </g>
        ))}
        <rect className={`${u}-type`} x={mid(2) - 68} y={93} width={140} height={20} fill={ink} />
        <g className={`${u}-img1`}>{thumb(mid(2) - 52, [0])}</g>
        <g className={`${u}-img2`}>
          <T x={mid(2) - 29} y={133} size={14} mono weight={700} fill="#e5e7eb">
            +
          </T>
          {thumb(mid(2) - 6, [1])}
        </g>
        <g className={`${u}-both`}>
          <T x={mid(2) + 19} y={133} size={14} mono weight={700} fill="#e5e7eb">
            =
          </T>
          {thumb(mid(2) + 44, [0, 1])}
          <circle cx={mid(2) + 44} cy={133} r={17.5} fill="none" stroke="#34d399" strokeWidth={2} />
        </g>
      </g>

      {/* the floor, and Kim with her slide */}
      <path className="sm-fade" d={`M8 404 H${W - 8}`} stroke={BORDER} strokeWidth={4} strokeLinecap="round" />
      <g transform={`translate(${mid(0) - 60} 254)`}>
        <g className={`${u}-walk`}>
          <KimFigure size={120} />
          <g className={`${u}-carried`}>
            <circle cx={36} cy={113} r={6} fill="#c68863" />
            <circle cx={84} cy={113} r={6} fill="#c68863" />
            {glass(37, 106, 46)}
          </g>
        </g>
      </g>

      {/* what is happening */}
      {says.map(([name, text, where, fill]) => (
        <T key={name} className={`${u}-${name}`} x={mid(where)} y={436} size={16} weight={700} fill={fill}>
          {text}
        </T>
      ))}
    </svg>
  );
}

/* --- her macro -------------------------------------------------------------- */

/** Kim's Fiji macro, step by step: tiles, stitch, segment the cells,
    measure the stain in every cell, verdict.

    It opens zoomed in on the tissue from the slide before, at the size it
    had there, patchy CD20 and all, and waits. Then one click per beat: the
    view pulls back until that patch is one tile of a tiled slide; stitch;
    segment; the uptake per cell; the verdict. */
export function MacroChainFigure() {
  const u = useUid();
  const tile = 140;
  const xs = [10, 210, 410, 610];
  const y = 50;
  const labels = ['Tiles', 'Stitch', 'Segment cells', 'Per-cell uptake'];
  const cxs = (i: number) => xs[i] + tile / 2;
  // the slide is 3 × 3 tiles of 200 field units each
  const tw = 44;
  const gap = (tile - 3 * tw) / 2;
  const ts = tw / 200;
  const tiles = Array.from({ length: 9 }, (_, k) => ({ r: Math.floor(k / 3), c: k % 3 }));
  const tileX = (c: number) => xs[0] + c * (tw + gap) + tw / 2;
  const tileY = (r: number) => y + r * (tw + gap) + tw / 2;
  // where the patch ends up (the middle tile), and where it starts: the
  // middle of the figure, at the previous slide's size
  const land = { x: tileX(1), y: tileY(1) };
  const start = { x: 510, y: 130, scale: 1 / ts };
  const zoom = { from: 0.4, dur: 1.5 };
  const Z = zoom.from + zoom.dur; // the patch has landed
  /* the beats after the landing, one per click (`cues` below) */
  const B = { stitch: 2.5, segment: 3.7, uptake: 6.1, verdict: 9.1 };
  // the crop that segmentation and measurement show, in field units
  const crop = 110;
  const cs = tile / (2 * crop);
  /** The whole slide is drawn once and shown through windows: each tile,
      the mosaic, and the crop are the same cells. */
  const mosaic = (cx: number, cy: number, scale: number, ox = 0, oy = 0) => (
    <use href={`#${u}-mosaic`} transform={`translate(${(cx - ox * scale).toFixed(2)} ${(cy - oy * scale).toFixed(2)}) scale(${scale.toFixed(4)})`} />
  );
  const tileClip = (k: number) => `url(#${u}-t${k})`;
  return (
    <Steps cues={[0.35, 2.4, 3.6, 6, 9, 11.1]} className="relative mx-auto w-fit">
    <svg width={1020} height={260} viewBox="0 0 1020 260" role="img" aria-label="Zooming out from Kim's tissue until it is one tile of a tiled slide; then her Fiji macro: stitch the tiles, segment the cells, measure the stain in every cell, then a verdict: CD20 at 41 percent uptake, stain again" className="mx-auto block" overflow="visible">
      <defs>
        <g id={`${u}-mosaic`}>
          <TissueGlyph cx={0} cy={0} s={1} half={300} palette="stained" stains={['cd3', 'cd20']} patchy />
        </g>
        {tiles.map(({ r, c }, k) => (
          <clipPath key={k} id={`${u}-t${k}`}>
            <rect x={tileX(c) - tw / 2} y={tileY(r) - tw / 2} width={tw} height={tw} />
          </clipPath>
        ))}
        <clipPath id={`${u}-seg`}>
          <rect x={xs[2]} y={y} width={tile} height={tile} rx={10} />
        </clipPath>
        {[0, 1, 2, 3].map((i) => (
          <clipPath key={i} id={`${u}-p${i}`}>
            <rect x={xs[i]} y={y} width={tile} height={tile} rx={10} />
          </clipPath>
        ))}
      </defs>
      <Arrowheads id={u} />
      <LoopStyles
        css={`
          .${u}-zoom { transform-box: view-box; transform-origin: ${land.x}px ${land.y}px; }
          section.present .${u}-zoom { animation: ${u}-zoom ${zoom.dur}s cubic-bezier(.65,0,.25,1) ${zoom.from}s both; }
          @keyframes ${u}-zoom { from { transform: translate(${start.x - land.x}px, ${start.y - land.y}px) scale(${start.scale.toFixed(3)}); } to { transform: none; } }
          section.present .${u}-scan { animation: ${u}-scan 1.4s linear ${B.segment + 0.7}s 1 both; }
          section.present .${u}-wipe { animation: ${u}-wipe 1.4s linear ${B.segment + 0.7}s both; }
          @keyframes ${u}-wipe { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0 0 0 0); } }
          @keyframes ${u}-scan { 0% { transform: translateY(0); opacity: 0; } 10%, 90% { opacity: 1; } 100% { transform: translateY(${tile}px); opacity: 0; } }
          .${u}-scan { opacity: 0; }
          @media (prefers-reduced-motion: reduce) {
            section.present :is(.${u}-zoom, .${u}-scan, .${u}-wipe) { animation: none; }
          }
        `}
      />

      {/* the tiled slide: the other eight tiles appear round the patch as it lands */}
      <g className="sm-fade" style={delay(Z - 0.4)}>
        {tiles.map(({ r, c }, k) =>
          k === 4 ? null : (
            <g key={k}>
              <g clipPath={tileClip(k)}>{mosaic(tileX(c), tileY(r), ts, (c - 1) * 200, (r - 1) * 200)}</g>
              <rect x={tileX(c) - tw / 2} y={tileY(r) - tw / 2} width={tw} height={tw} fill="none" stroke={BORDER} strokeWidth={1} />
            </g>
          ),
        )}
      </g>
      <g className={`${u}-zoom`}>
        <g clipPath={tileClip(4)}>{mosaic(land.x, land.y, ts)}</g>
        <rect x={land.x - tw / 2} y={land.y - tw / 2} width={tw} height={tw} fill="none" stroke={PRIMARY} strokeWidth={0.8} />
      </g>

      {/* stitched: one mosaic, and the crop the next two steps show */}
      <g className="sm-pop" style={delay(B.stitch + 0.4)}>
        <g clipPath={`url(#${u}-p1)`}>
          {mosaic(cxs(1), y + 70, tile / 600)}
        </g>
        <rect x={xs[1]} y={y} width={tile} height={tile} rx={10} fill="none" stroke={BORDER} strokeWidth={1.2} />
        <rect x={cxs(1) - crop * (tile / 600)} y={y + 70 - crop * (tile / 600)} width={2 * crop * (tile / 600)} height={2 * crop * (tile / 600)} fill="none" stroke={FG} strokeWidth={1.4} strokeDasharray="4 3" />
      </g>

      {/* segment: StarDist outlines, following the scan */}
      <g className="sm-pop" style={delay(B.segment + 0.4)}>
        <g clipPath={`url(#${u}-p2)`}>
          <g opacity={0.55}>{mosaic(cxs(2), y + 70, cs)}</g>
          <g className={`${u}-wipe`}>
            <TissueGlyph cx={cxs(2)} cy={y + 70} s={cs} half={crop} palette="labels" />
          </g>
        </g>
        <rect x={xs[2]} y={y} width={tile} height={tile} rx={10} fill="none" stroke={BORDER} strokeWidth={1.2} />
        <g clipPath={`url(#${u}-seg)`}>
          <rect className={`${u}-scan`} x={xs[2]} y={y} width={tile} height={3} fill={WARN} />
        </g>
      </g>

      {/* per-cell uptake: every CD20 cell gets a verdict, one by one */}
      <g className="sm-pop" style={delay(B.uptake + 0.4)}>
        <g clipPath={`url(#${u}-p3)`}>
          <g opacity={0.4}>{mosaic(cxs(3), y + 70, cs)}</g>
          <TissueGlyph cx={cxs(3)} cy={y + 70} s={cs} half={crop} palette="uptake" background={false} cellClass="sm-pop" cellDelay={(i) => B.uptake + 0.7 + i * 0.06} />
        </g>
        <rect x={xs[3]} y={y} width={tile} height={tile} rx={10} fill="none" stroke={BORDER} strokeWidth={1.2} />
      </g>
      <g className="sm-in" style={delay(B.uptake + 2.3)}>
        <rect x={xs[3] + tile - 74} y={y + tile - 26} width={68} height={20} rx={5} fill="#1f2937" fillOpacity={0.85} />
        <T x={xs[3] + tile - 40} y={y + tile - 15} size={13} mono weight={700} fill="#ffffff">
          41 %
        </T>
      </g>

      {labels.map((l, i) => (
        <T key={l} className="sm-in" style={delay([Z - 0.2, B.stitch + 0.6, B.segment + 0.6, B.uptake + 0.6][i])} x={cxs(i)} y={y + tile + 30} size={16} fill={MUTED}>
          {l}
        </T>
      ))}

      {[0, 1, 2, 3].map((i) => (
        <Path
          key={i}
          className="sm-draw"
          style={delay([B.stitch, B.segment, B.uptake, B.verdict][i])}
          d={`M${xs[i] + tile + 10} ${y + 70} L${(i < 3 ? xs[i + 1] : 810) - 12} ${y + 70}`}
          head={`${u}-fg`}
        />
      ))}

      {/* verdict */}
      <g className="sm-in" style={delay(B.verdict + 0.4)}>
        <rect x={812} y={y} width={200} height={tile} rx={12} fill={PRIMARY} fillOpacity={0.07} stroke={PRIMARY} strokeOpacity={0.5} strokeWidth={1.6} />
        <T x={832} y={y + 26} anchor="start" size={12} mono weight={700} fill={MUTED}>
          RESULT
        </T>
      </g>
      <T className="sm-in" style={delay(B.verdict + 0.7)} x={832} y={y + 58} anchor="start" size={18}>
        CD20: 41 % uptake
      </T>
      <T className="sm-in" style={delay(B.verdict + 1)} x={832} y={y + 90} anchor="start" size={18}>
        Verdict:
      </T>
      <T className="sm-in" style={delay(B.verdict + 1.3)} x={832} y={y + 114} anchor="start" size={18} weight={700} fill={PRIMARY}>
        stain again
      </T>
    </svg>
    </Steps>
  );
}

/* --- and yet ---------------------------------------------------------------- */

/** Kim, overworked: a small Kim with a box of slides runs back and forth
    between the staining bench and the microscope, hopping as she goes: the
    one thing that moves. The timer on the wall rings (drawn, not animated),
    and the sticky note says how far along she is. */
export function OverworkedKimFigure() {
  const u = useUid();
  const ink = '#1f2937';
  const run = 4.4;
  const travel = 176;
  const css = `
    .${u}-run { animation: ${u}-run ${run}s ease-in-out 0.8s infinite; }
    @keyframes ${u}-run { 0%, 4% { transform: translateX(0); } 46%, 54% { transform: translateX(${travel}px); } 96%, 100% { transform: translateX(0); } }
    .${u}-hop { animation: ${u}-hop 0.36s ease-in-out infinite alternate; }
    @keyframes ${u}-hop { from { transform: translateY(0); } to { transform: translateY(-9px); } }
    .${u}-right, .${u}-left { opacity: 0; }
    .${u}-right { animation: ${u}-right ${run}s linear 0.8s infinite; }
    .${u}-left { animation: ${u}-left ${run}s linear 0.8s infinite; }
    @keyframes ${u}-right { 0%, 4% { opacity: 0; } 8%, 42% { opacity: 1; } 46%, 100% { opacity: 0; } }
    @keyframes ${u}-left { 0%, 54% { opacity: 0; } 58%, 92% { opacity: 1; } 96%, 100% { opacity: 0; } }
    @media (prefers-reduced-motion: reduce) {
      .${u}-run, .${u}-hop { animation: none; }
      .${u}-right { animation: none; opacity: 1; }
    }
  `;
  const jars: [number, string][] = [
    [24, STAIN.cd3.color],
    [62, STAIN.cd20.color],
    [100, STAIN.ki67.color],
  ];
  const table = (x: number) => (
    <g>
      <rect x={x} y={292} width={136} height={10} rx={3} fill="#a16207" fillOpacity={0.85} />
      <rect x={x + 8} y={302} width={8} height={102} fill="#8b5e3c" />
      <rect x={x + 120} y={302} width={8} height={102} fill="#8b5e3c" />
    </g>
  );
  const speed = (side: 'left' | 'right') => {
    const x0 = side === 'right' ? -4 : 134;
    const dir = side === 'right' ? -1 : 1;
    return (
      <g className={`${u}-${side}`} stroke={MUTED} strokeWidth={3} strokeLinecap="round">
        {[
          [58, 22],
          [76, 30],
          [94, 18],
        ].map(([y, len]) => (
          <path key={y} d={`M${x0} ${y} H${x0 + dir * len}`} />
        ))}
      </g>
    );
  };
  return (
    <svg width={440} height={450} viewBox="0 0 440 450" role="img" aria-label="Kim, overworked, runs back and forth between the staining bench and the microscope with a box of slides. A timer rings, and a sticky note says round 3 of 5" className="shrink-0">
      <LoopStyles css={css} />
      <Arrowheads id={u} />

      {/* the ringing timer */}
      <g className="sm-pop" style={delay(0.3)}>
        <g transform="rotate(-5 80 73)">
          <rect x={28} y={42} width={104} height={62} rx={12} fill={SURFACE} stroke={FG} strokeWidth={3} />
          <rect x={40} y={54} width={80} height={38} rx={6} fill={ink} />
          <T x={80} y={74} size={24} mono weight={700} fill="#ef4444">
            00:00
          </T>
        </g>
        <g stroke={WARN} strokeWidth={3} fill="none" strokeLinecap="round">
          <path d="M18 56 Q10 73 18 90 M8 50 Q-2 73 8 96" />
          <path d="M142 56 Q150 73 142 90 M152 50 Q162 73 152 96" />
        </g>
        <T x={80} y={24} size={15} mono weight={800} fill={WARN}>
          BEEP BEEP
        </T>
      </g>

      {/* the sticky note */}
      <g transform="rotate(5 362 86)">
        <g className="sm-pop" style={delay(0.6)}>
          <path d="M304 34 H420 V118 L402 136 H304 Z" fill="#fef08a" stroke="#ca8a04" strokeOpacity={0.5} strokeWidth={1.5} />
          <path d="M420 118 L402 118 L402 136 Z" fill="#facc15" />
          <T x={362} y={64} size={18} weight={800} fill="#422006">
            round 3 of 5
          </T>
          <T x={362} y={92} size={15} weight={600} fill="#422006">
            slide 9 of 20
          </T>
          <path d="M322 108 H396" stroke="#422006" strokeOpacity={0.4} strokeWidth={2} strokeLinecap="round" />
        </g>
      </g>

      {/* back and forth, all day */}
      <path
        className="sm-fade"
        style={delay(0.9)}
        d="M96 232 C 150 148, 290 128, 338 170"
        fill="none"
        stroke={WARN}
        strokeWidth={2.4}
        strokeDasharray="8 7"
        strokeLinecap="round"
        markerStart={`url(#${u}-warn)`}
        markerEnd={`url(#${u}-warn)`}
      />

      {/* the floor, the bench and the microscope */}
      <path className="sm-fade" d="M8 404 H432" stroke={BORDER} strokeWidth={4} strokeLinecap="round" />
      <g className="sm-in" style={delay(0.2)}>
        {table(14)}
        {jars.map(([x, color]) => (
          <g key={x}>
            <rect x={x} y={250} width={28} height={42} rx={4} fill={SURFACE} stroke={FG} strokeWidth={2} />
            <rect x={x + 3} y={266} width={22} height={23} rx={2} fill={color} fillOpacity={0.75} />
            <rect x={x - 2} y={244} width={32} height={8} rx={2} fill={FG} fillOpacity={0.8} />
          </g>
        ))}
      </g>
      <g className="sm-in" style={delay(0.35)}>
        {table(290)}
        <g transform="translate(190 140)" fill={SURFACE} stroke={FG} strokeWidth={2.5} strokeLinejoin="round">
          <rect x={122} y={140} width={96} height={12} rx={4} />
          <path d="M204 140 V70 Q204 50 184 50 H170" fill="none" strokeWidth={10} strokeLinecap="round" />
          <rect x={142} y={36} width={36} height={22} rx={6} />
          <rect x={153} y={58} width={16} height={26} rx={3} />
          <polygon points="155,86 167,86 176,108 146,108" fill={PRIMARY} fillOpacity={0.35} stroke="none" />
          <rect x={132} y={108} width={68} height={8} rx={3} />
        </g>
      </g>
      <T className="sm-fade" style={delay(0.5)} x={82} y={428} size={15} fill={MUTED}>
        staining bench
      </T>
      <T className="sm-fade" style={delay(0.5)} x={360} y={428} size={15} fill={MUTED}>
        microscope
      </T>

      {/* Kim, in transit */}
      <g transform="translate(60 242)">
        <g className={`${u}-run`}>
          {speed('right')}
          {speed('left')}
          <g className={`${u}-hop`}>
            <g transform="scale(1.18)">
              <KimFigure size={110} mood="worried" />
              {/* the box of slides, held in front of her */}
              <g className="sm-pop" style={delay(0.5)}>
                <circle cx={32} cy={104} r={6} fill="#c68863" />
                <circle cx={78} cy={104} r={6} fill="#c68863" />
                <rect x={34} y={94} width={42} height={24} rx={3} fill="#e5e7eb" stroke={ink} strokeWidth={1.8} />
                {[0, 1, 2, 3, 4].map((k) => (
                  <rect key={k} x={39 + k * 7} y={90} width={4} height={14} rx={1} fill="#f8fafc" stroke="#94a3b8" strokeWidth={0.8} />
                ))}
                {[0, 1, 2, 3, 4].map((k) => (
                  <rect key={k} x={39.6 + k * 7} y={91} width={2.8} height={4} fill={EOSIN} />
                ))}
              </g>
              <path d="M88 22 C 85 28, 85 31, 88 32 C 91 31, 91 28, 88 22 Z" fill="#60a5fa" />
              <path d="M22 34 C 19 40, 19 43, 22 44 C 25 43, 25 40, 22 34 Z" fill="#60a5fa" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

/* --- she publishes --------------------------------------------------------- */

const MACRO_LINES: [string, string][] = [
  ['// kim_sequential.ijm', 'comment'],
  ['run("Grid/Collection stitching", "type=[Grid]");', 'code'],
  ['run("Colour Deconvolution", "vectors=[H AEC]");', 'code'],
  ['run("StarDist 2D", "model=[Versatile (H&E nuclei)]");', 'code'],
  ['run("Set Measurements...", "mean area");', 'code'],
  ['roiManager("Measure");', 'code'],
  ['uptake = getResult("Positive", 0);  // per cell', 'code'],
  ['if (uptake < 0.8) print("stain again");', 'code'],
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
        Per-cell QC makes five-plex sequential staining on one H&amp;E slide reliable
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

/** Figure 2 of Kim's preprint: five-stain panels completed on one slide,
    without and with the per-cell check after every round. Persona numbers,
    illustrative. */
export function ResultsChart() {
  const base = 290;
  const h = 200;
  const bars = [
    { label: 'no check', value: 0.31, x: 70, tone: MUTED },
    { label: 'per-cell QC', sub: 'after every round', value: 0.88, x: 210, tone: PRIMARY },
  ];
  return (
    <svg width={360} height={370} viewBox="0 0 360 370" role="img" aria-label="Bar chart: 31 percent of five-stain panels completed without a per-cell check, against 88 percent with the per-cell check after every round" className="shrink-0">
      <T className="sm-fade" style={delay(2.6)} x={20} y={22} anchor="start" size={13} mono weight={700} fill={MUTED}>
        FIG. 2 · PANELS COMPLETED
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
        <path d={`M110 ${base - 0.31 * h - 40} V64 H250 V${base - 0.88 * h - 40}`} fill="none" stroke={FG} strokeWidth={1.5} />
        <T x={180} y={52} size={14} mono weight={700}>
          p &lt; 0.01
        </T>
      </g>
      <T className="sm-fade" style={delay(4.6)} x={340} y={358} anchor="end" size={13} mono fill={MUTED}>
        n = 48 slides
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

/** The dream workflow's clock, as shares of its cycle: four passes through
    the OT-2 (stain CD20, wash, wash again, stain Ki-67). Each entry is when
    the pass reaches the OT-2. */
const DREAM_PASSES = { stain: 0.08, wash: 0.31, washAgain: 0.54, next: 0.77 } as const;

/** The slide under the lens on the dream-workflow slide, on the same
    clock as its arrows (the classes come from the figure's `cycleCss`).
    CD20 goes on; the first wash takes it off most cells but leaves some
    (`took`); the second wash takes off the rest; then Ki-67 lands in the
    nuclei. The ring turns amber while stain is left after a wash. */
function LensSlide({ cx, cy, r: lensR, u }: { cx: number; cy: number; r: number; u: string }) {
  const s = 0.75;
  const half = lensR / s;
  const cells = tissueCells(-half, -half, half, half).filter((c) => c.x * c.x + c.y * c.y < (half - 6) ** 2);
  return (
    <g>
      <circle cx={cx} cy={cy} r={lensR} fill={TISSUE_BG} />
      {cells.map((c, i) => {
        const x = cx + c.x * s;
        const y = cy + c.y * s;
        return (
          <g key={i} transform={`rotate(${c.rot} ${x} ${y})`}>
            <ellipse cx={x} cy={y} rx={c.rx * s} ry={c.ry * s} fill={EOSIN} fillOpacity={0.8} stroke={EOSIN_EDGE} strokeOpacity={0.35} strokeWidth={1} />
            {c.kind === 'cd20' ? (
              <ellipse className={`${u}-${c.took ? 'left' : 'off'}`} cx={x} cy={y} rx={c.rx * s} ry={c.ry * s} fill={STAIN.cd20.color} fillOpacity={0.8} opacity={0} />
            ) : null}
            <ellipse cx={x + c.nx * s} cy={y + c.ny * s} rx={4.8 * s} ry={3.9 * s} fill={HEMATOXYLIN} fillOpacity={0.85} />
            {c.ki67 ? <ellipse className={`${u}-ki67`} cx={x + c.nx * s} cy={y + c.ny * s} rx={4.8 * s} ry={3.9 * s} fill={STAIN.ki67.color} opacity={0} /> : null}
          </g>
        );
      })}
      {/* the lens ring: amber while stain is left after a wash */}
      <circle className={`${u}-ring-ok`} cx={cx} cy={cy} r={lensR} fill="none" stroke={PRIMARY} strokeWidth={4} />
      <circle className={`${u}-ring-low`} cx={cx} cy={cy} r={lensR} fill="none" stroke={WARN} strokeWidth={4} strokeOpacity={0} />
    </g>
  );
}

/** Kim's dream, as a loop. Top row, left to right, the bench and the scope:
    the slide rack (with a lens on her slide), the robot arm, the OT-2 that
    stains and washes it, the openUC2 that images it in tiles. Bottom row,
    right to left, the analysis: StarDist segments the cells, the stain is
    measured per cell, and a decision: a stained slide, or one with stain
    left after a wash, goes back to the OT-2 for a wash; a clean one goes
    back for the next stain; and a finished panel goes back to the rack.

    Only the arrows move, and only on a click (`Steps`): the cycle plays in
    four beats, the arrows lighting up in the order a run takes them. Stain
    CD20, imaged, wash; washed, 44 % left, wash again; washed, gone, next
    stain; Ki-67, imaged, panel done. CSS keyframes on one period, so the lens, the OT-2's
    protocol and the uptake stay in step with the arrows.

    `lab` is the same figure, already there and standing still. On one
    keypress (a reveal.js fragment) it rearranges into the building Kim
    actually works in: the openUC2 moves down next to its acquisition PC in
    the imaging room, beside the bench with the arm and the OT-2;
    segmentation, measurement and the decision move to the office down the
    hall, and each step shows the machine it runs on. The fragment is an
    empty marker; everything that moves is a later sibling and reacts to
    `.visible` with `~`. */
export function DreamWorkflowFigure({ variant = 'dream' }: { variant?: 'dream' | 'lab' }) {
  const u = useUid();
  const lab = variant === 'lab';
  const stroke = FG;
  const icon = { fill: SURFACE, stroke, strokeWidth: 2.5, strokeLinejoin: 'round' as const };
  const CYCLE = 13;
  const CYCLE_FROM = 0.8;
  const P = DREAM_PASSES;
  /** One pass down the chain from the OT-2: to the scope, StarDist, the
      measurement, the decision, and out of it. */
  const leg = (p: number, k: number): [number, number] => [p + k * 0.04, p + k * 0.04 + (k === 4 ? 0.06 : 0.05)];
  const passes = [P.stain, P.wash, P.washAgain, P.next];
  const nuclei: [number, number, number][] = [
    [876, 310, 13],
    [908, 304, 11],
    [942, 316, 12],
    [870, 346, 12],
    [906, 340, 14],
    [942, 352, 11],
    [888, 376, 12],
    [926, 376, 13],
  ];
  const lens = { x: 96, y: 150, r: 56 };

  const pc = (t: number) => `${(Math.max(0, Math.min(1, t)) * 100).toFixed(2)}%`;
  const onClock = (name: string) => `section.present .${u}-${name} { animation: ${u}-${name} ${CYCLE}s linear ${CYCLE_FROM}s infinite both; }`;
  /** A class that shows only inside the given windows (shares of the
      cycle). A window that opens at 0 is there from the start. */
  const shows = (name: string, spans: [number, number][]) => `
${onClock(name)}
@keyframes ${u}-${name} { ${spans[0][0] <= 0 ? '0% { opacity: 1; }' : '0% { opacity: 0; }'} ${spans
    .map(([a, b]) => `${a > 0 ? `${pc(a)} { opacity: 0; } ${pc(a + 0.015)} { opacity: 1; }` : ''} ${pc(b)} { opacity: 1; } ${pc(b + 0.015)} { opacity: 0; }`)
    .join(' ')} 100% { opacity: 0; } }`;
  const readouts: Record<string, [number, number][]> = {
    cd20: [[0, P.wash - 0.01]],
    washp: [[P.wash - 0.005, P.next - 0.01]],
    ki67p: [[P.next - 0.005, 0.985]],
    m1: [[P.stain + 0.13, P.stain + 0.22]],
    m2: [[P.wash + 0.13, P.wash + 0.22]],
    m3: [[P.washAgain + 0.13, P.washAgain + 0.22]],
    m4: [[P.next + 0.13, 0.98]],
    /* CD20 under the lens: on from the stain; the first wash leaves some */
    off: [[P.stain + 0.02, P.wash + 0.02]],
    left: [[P.stain + 0.02, P.washAgain + 0.02]],
    ki67: [[P.next + 0.02, 0.98]],
  };
  // the same nine connections, as drawn in the dream and in the building
  const arrows: { dream: string; lab: string; spans: [number, number][]; head: 'fg' | 'primary' }[] = [
    { dream: 'M182 150 L230 150', lab: 'M182 150 L230 150', spans: [[0.01, 0.05]], head: 'fg' },
    { dream: 'M350 150 L430 150', lab: 'M350 150 L430 150', spans: [[0.04, 0.08]], head: 'fg' },
    { dream: 'M550 150 L644 150', lab: 'M452 220 C 440 262, 300 240, 293 272', spans: passes.map((p) => leg(p, 0)), head: 'fg' },
    { dream: 'M756 150 C 900 150, 900 200, 900 272', lab: 'M348 320 L682 320', spans: passes.map((p) => leg(p, 1)), head: 'fg' },
    { dream: 'M844 330 L756 330', lab: 'M798 320 L844 320', spans: passes.map((p) => leg(p, 2)), head: 'fg' },
    { dream: 'M644 330 L548 330', lab: 'M890 266 C 880 214, 820 192, 802 180', spans: passes.map((p) => leg(p, 3)), head: 'fg' },
    /* out of the decision: wash (twice), next stain, panel done */
    { dream: 'M468 280 L468 212', lab: 'M706 134 L552 134', spans: [leg(P.stain, 4), leg(P.wash, 4)], head: 'fg' },
    { dream: 'M512 280 L512 212', lab: 'M706 166 L552 166', spans: [leg(P.washAgain, 4)], head: 'primary' },
    { dream: 'M436 330 L96 330 L96 212', lab: 'M760 84 C 760 6, 160 6, 150 90', spans: [[P.next + 0.16, 0.98]], head: 'primary' },
  ];
  const drawn = (which: 'dream' | 'lab', build: boolean) =>
    arrows.map((a, i) => (
      <Path key={i} className={build ? 'sm-draw' : undefined} style={build ? delay(0.5 + i * 0.2) : undefined} d={a[which]} head={`${u}-${a.head}`} stroke={a.head === 'primary' ? PRIMARY : MUTED} width={a.head === 'primary' ? 3 : 2.5} />
    ));
  /* the lit arrows: dashes that march (the group's dash offset, inherited) */
  const flows = arrows.map((a, i) => (
    <path key={i} className={`${u}-flow${i}`} d={a.dream} fill="none" stroke={PRIMARY} strokeWidth={4.5} strokeDasharray="9 9" strokeLinecap="round" strokeLinejoin="round" opacity={0} />
  ));
  /* the cycle, on one clock: the arrows, the lens, the readouts */
  const cycleCss = lab
    ? ''
    : [
        ...arrows.map((a, i) => shows(`flow${i}`, a.spans)),
        ...Object.entries(readouts).map(([name, spans]) => shows(name, spans)),
        `${onClock('ring-ok')} @keyframes ${u}-ring-ok { 0%, ${pc(P.wash + 0.12)} { stroke-opacity: 1; } ${pc(P.wash + 0.14)}, ${pc(P.washAgain + 0.01)} { stroke-opacity: 0; } ${pc(P.washAgain + 0.03)}, 100% { stroke-opacity: 1; } }`,
        `${onClock('ring-low')} @keyframes ${u}-ring-low { 0%, ${pc(P.wash + 0.12)} { stroke-opacity: 0; } ${pc(P.wash + 0.14)}, ${pc(P.washAgain + 0.01)} { stroke-opacity: 1; } ${pc(P.washAgain + 0.03)}, 100% { stroke-opacity: 0; } }`,
        `section.present .${u}-march { animation: ${u}-march 0.5s linear infinite; } @keyframes ${u}-march { from { stroke-dashoffset: 18; } to { stroke-dashoffset: 0; } }`,
        `@media (prefers-reduced-motion: reduce) { section.present [class*="${u}-"] { animation: none; } }`,
      ].join('\n');

  /* In the lab variant, every top-level group is a sibling of the marker
     fragment: `still` skips its build, `mv` moves it, `dreamOnly` and
     `labOnly` cross-fade. */
  const still = lab ? 'sm-still' : '';
  const dreamOnly = lab ? `sm-still ${u}-dream` : undefined;
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
  /** A label sitting on an arrow, on a patch of background. */
  const pill = (x: number, y: number, text: string, fill: string) => (
    <g>
      <rect x={x - (text.length * 7.8 + 14) / 2} y={y - 10} width={text.length * 7.8 + 14} height={20} rx={10} fill="var(--color-fd-background)" />
      <T x={x} y={y} size={13} mono weight={700} fill={fill}>
        {text}
      </T>
    </g>
  );
  const title = (x: number, y: number, text: string, sub: string, at: number, anchor: 'middle' | 'end' = 'middle') => (
    <>
      <T className="sm-in" style={delay(at)} x={x} y={y} anchor={anchor} size={19} weight={600}>
        {text}
      </T>
      <T className="sm-in" style={delay(at + 0.05)} x={x} y={y + 20} anchor={anchor} size={14} fill={MUTED}>
        {sub}
      </T>
    </>
  );
  /** A thick, outlined arm segment. */
  const link = (d: string) => (
    <>
      <path d={d} stroke={stroke} strokeWidth={15} strokeLinecap="round" fill="none" />
      <path d={d} stroke={SURFACE} strokeWidth={9} strokeLinecap="round" fill="none" />
    </>
  );

  const figure = (
    <svg
      width={1080}
      height={440}
      viewBox="-40 0 1080 440"
      role="img"
      aria-label={
        lab
          ? "The same workflow in Kim's building: the robot arm and the OT-2 on the bench and the openUC2 with its acquisition PC, all in the imaging room; StarDist and the per-cell measurement on a GPU server and the decision on her laptop, in an office down the hall. Every step shows the machine it runs on, and connections cross between rooms."
          : "Kim's dream workflow: a robot arm takes the slide from the rack to the OT-2, which stains it; the openUC2 images it in tiles, StarDist segments the cells, and the stain is measured per cell. Then the OT-2 washes it, and it is imaged and measured again. Stain left: wash again. Gone: the next stain. Panel done: back to the rack."
      }
      className="mx-auto block"
      /* the build arrives in one piece; only the cycle is stepped */
      style={{ ['--sm-stagger' as string]: 0 } as CSSProperties}
    >
      <Arrowheads id={u} />
      {cycleCss ? <LoopStyles css={cycleCss} /> : null}
      {lab ? (
        <>
          <LoopStyles css={css} />
          <Fragment as="g" index={1} className={`${u}-on`} />
          {/* the building, under everything else */}
          <g {...labOnly(0)}>
            {room(0, 600, 'IMAGING ROOM', 'start')}
            {room(640, 396, 'OFFICE · DOWN THE HALL', 'end')}
          </g>
        </>
      ) : null}

      {/* the arrows, drawn in, then lighting up in the order a run takes them */}
      <g className={dreamOnly}>
        {drawn('dream', true)}
        {lab ? null : <g className={`${u}-march`}>{flows}</g>}
      </g>
      {lab ? (
        <g {...labOnly(1.2)}>
          {drawn('lab', false)}
        </g>
      ) : null}

      {/* what the decision says, on its arrows */}
      <g className={dreamOnly}>
        <T className="sm-in" style={delay(1.9)} x={597} y={136} size={12} mono weight={700} fill={MUTED}>
          by arm
        </T>
        <T className="sm-in" style={delay(2)} x={456} y={246} anchor="end" size={14} mono weight={700} fill={MUTED}>
          wash · until gone
        </T>
        <T className="sm-in" style={delay(2.1)} x={524} y={246} anchor="start" size={14} mono weight={700} fill={PRIMARY}>
          next stain
        </T>
        <T className="sm-in" style={delay(2.2)} x={266} y={316} size={14} mono weight={700} fill={PRIMARY}>
          panel done
        </T>
      </g>
      {lab ? (
        <g {...labOnly(1.3)}>
          {pill(620, 134, 'wash', MUTED)}
          {pill(620, 166, 'next stain', PRIMARY)}
          {pill(455, 30, 'panel done', PRIMARY)}
        </g>
      ) : null}

      {/* the bench and the rack: they stay where they are */}
      <g className={still}>
        {/* the rack, with a lens on Kim's slide */}
        <g className="sm-pop" style={delay(0.2)}>
          <rect x={16} y={100} width={160} height={100} rx={12} {...icon} strokeWidth={2} />
          {Array.from({ length: 6 }, (_, i) => (
            <g key={i}>
              <rect x={30 + i * 24} y={114} width={13} height={72} rx={2} fill={SURFACE} stroke={BORDER} strokeWidth={1.5} />
              <rect x={31 + i * 24} y={115} width={11} height={14} fill={MUTED} fillOpacity={0.25} />
              <circle cx={36.5 + i * 24} cy={160} r={4.5} fill={EOSIN} />
            </g>
          ))}
        </g>
        <g className="sm-pop" style={delay(0.5)}>
          <circle cx={lens.x + 3} cy={lens.y + 5} r={lens.r} fill={FG} fillOpacity={0.12} />
          <LensSlide cx={lens.x} cy={lens.y} r={lens.r} u={u} />
        </g>
        {title(96, 62, 'Slide rack', 'HE-07', 0.3)}

        {/* the robot arm, holding a slide */}
        <g className="sm-pop" style={delay(0.35)}>
          <rect x={252} y={190} width={52} height={14} rx={4} {...icon} />
          {link('M278 182 L298 120')}
          {link('M298 120 L334 140')}
          <circle cx={278} cy={182} r={8} {...icon} />
          <circle cx={298} cy={120} r={7} {...icon} />
          <circle cx={334} cy={140} r={6} {...icon} />
          <path d="M328 146 V160 M340 146 V160" stroke={stroke} strokeWidth={3} strokeLinecap="round" />
          <rect x={322} y={160} width={24} height={6} rx={1.5} fill={SURFACE} stroke={stroke} strokeWidth={1.5} />
          <circle cx={334} cy={163} r={2.2} fill={EOSIN} />
        </g>
        {title(290, 62, 'Robot arm', 'carries the slide', 0.4)}

        {/* the OT-2, with the protocol it is running */}
        <g className="sm-pop" style={delay(0.5)}>
          <rect x={440} y={96} width={100} height={108} rx={8} {...icon} />
          <rect x={446} y={102} width={88} height={18} rx={4} fill="#1f2937" />
          <g className={`${u}-cd20`}>
            <T x={490} y={111.5} size={11} mono weight={700} fill="#ffffff">
              stain_cd20
            </T>
          </g>
          <g className={`${u}-washp`} opacity={0}>
            <T x={490} y={111.5} size={11} mono weight={700} fill="#7dd3fc">
              wash
            </T>
          </g>
          <g className={`${u}-ki67p`} opacity={0}>
            <T x={490} y={111.5} size={11} mono weight={700} fill="#ffffff">
              stain_ki67
            </T>
          </g>
          <path d="M448 128 H532" stroke={stroke} strokeWidth={4} strokeLinecap="round" />
          <rect x={482} y={128} width={14} height={26} rx={3} {...icon} strokeWidth={2} />
          <path d="M486 154 L489 164 L492 164 L492 154" fill={stroke} />
          {[0, 1, 2].map((c) =>
            [0, 1].map((r) => (
              <rect key={`${c}-${r}`} x={450 + c * 28} y={168 + r * 17} width={24} height={13} rx={2} fill={c === 1 && r === 0 ? EOSIN : MUTED} fillOpacity={c === 1 && r === 0 ? 0.7 : 0.15} stroke={BORDER} strokeWidth={1} />
            )),
          )}
        </g>
        {title(490, 62, 'OT-2', 'stains · washes', 0.55)}
      </g>

      {/* the openUC2: cubes, an objective, a camera */}
      <g {...mv(-410, 180)}>
        <g className="sm-pop" style={delay(0.65)}>
          <rect x={678} y={100} width={44} height={44} rx={6} {...icon} />
          <circle cx={700} cy={122} r={11} fill="none" stroke={stroke} strokeWidth={2} />
          <path d="M700 113 V131 M691 122 H709" stroke={stroke} strokeWidth={1.5} />
          <polygon points="692,144 708,144 704,154 696,154" fill={PRIMARY} fillOpacity={0.4} />
          <rect x={668} y={154} width={64} height={5} rx={1.5} fill={SURFACE} stroke={stroke} strokeWidth={1.5} />
          <circle cx={700} cy={156.5} r={2.2} fill={EOSIN} />
          <rect x={654} y={160} width={44} height={44} rx={6} {...icon} />
          <rect x={702} y={160} width={44} height={44} rx={6} {...icon} />
          <circle cx={676} cy={182} r={7} fill={PRIMARY} fillOpacity={0.5} />
          <rect x={714} y={174} width={20} height={16} rx={3} fill="none" stroke={stroke} strokeWidth={2} />
        </g>
      </g>
      <g className={dreamOnly}>{title(700, 62, 'openUC2', 'tiles', 0.7)}</g>
      {lab ? (
        <g {...labOnly(1.4)}>
          <T x={226} y={318} anchor="end" size={19} weight={600}>
            openUC2
          </T>
          <T x={226} y={338} anchor="end" size={14} fill={MUTED}>
            tiles
          </T>
        </g>
      ) : null}

      {/* segment: StarDist outlines */}
      <g {...mv(-160, -10)}>
        <g className="sm-pop" style={delay(0.8)}>
          <rect x={850} y={280} width={100} height={100} rx={12} fill="#2b1b4d" stroke={stroke} strokeWidth={2.5} />
          {nuclei.map(([x, y, r], i) => (
            <polygon key={i} className="sm-pop" style={delay(1 + i * 0.1)} points={starPoly(x - 6, y - 6, r * 0.85, i)} fill={LABELS[i % LABELS.length]} fillOpacity={0.35} stroke={LABELS[i % LABELS.length]} strokeWidth={2} />
          ))}
        </g>
        {title(900, 402, 'StarDist', 'segment cells', 0.85)}
      </g>

      {/* measure: the stain in every cell, against the target */}
      <g {...mv(200, -10)}>
        <g className="sm-pop" style={delay(0.95)}>
          <rect x={650} y={282} width={100} height={96} rx={12} {...icon} />
          {[30, 12, 38, 22, 44, 8, 34].map((h, i) => (
            <rect key={i} x={661 + i * 12} y={368 - h} width={8} height={h} rx={1.5} fill={STAIN.cd20.color} fillOpacity={0.6} />
          ))}
          <path d="M656 334 H744" stroke={WARN} strokeWidth={1.8} strokeDasharray="4 3" />
          {(
            [
              ['m1', 'CD20 91 %', PRIMARY],
              ['m2', 'left 44 %', WARN],
              ['m3', 'left 0 %', PRIMARY],
              ['m4', 'Ki-67 88 %', PRIMARY],
            ] as const
          ).map(([name, text, fill]) => (
            <g key={name} className={`${u}-${name}`} opacity={0}>
              <T x={700} y={302} size={13} mono weight={700} fill={fill}>
                {text}
              </T>
            </g>
          ))}
        </g>
        {title(700, 402, 'Measure', 'stain per cell', 1)}
      </g>

      {/* decide */}
      <g {...mv(270, -190)}>
        <g className="sm-pop" style={delay(1.1)}>
          <circle cx={490} cy={330} r={52} {...icon} />
          <T x={490} y={320} size={15} weight={700}>
            stain
          </T>
          <T x={490} y={340} size={15} mono weight={700} fill={WARN}>
            gone?
          </T>
        </g>
        {title(490, 402, 'Decide', 'wash again · next · done', 1.15)}
      </g>

      {/* which machine each step runs on */}
      {lab ? (
        <g {...labOnly(1.5)}>
          <rect x={200} y={206} width={360} height={8} rx={3} fill="#a16207" fillOpacity={0.7} />
          <T x={204} y={196} anchor="start" size={12} mono weight={700} fill={MUTED}>
            bench
          </T>
          {computer(290, 236, 'desktop', 'arm controller')}
          {computer(290, 408, 'desktop', 'acquisition PC')}
          <rect x={670} y={256} width={300} height={170} rx={14} fill={WARN} fillOpacity={0.05} stroke={WARN} strokeWidth={1.8} strokeDasharray="7 6" />
          <rect x={754} y={246} width={132} height={20} rx={4} fill="var(--color-fd-background)" />
          {computer(820, 256, 'server', 'GPU server')}
          {computer(822, 140, 'laptop', 'laptop', 'start')}
        </g>
      ) : null}
    </svg>
  );
  /* the dream is stepped: one click per pass through the OT-2 */
  return lab ? (
    figure
  ) : (
    <Steps cues={[CYCLE_FROM, ...[P.stain + 0.205, P.wash + 0.205, P.washAgain + 0.205, 0.965].map((f) => CYCLE_FROM + f * CYCLE)]} period={CYCLE} className="relative mx-auto w-fit">
      {figure}
    </Steps>
  );
}

/* --- her loop --------------------------------------------------------------- */

type LoopVariant = 'dream' | 'lab' | 'arkitekt';

const NW = 220;
const NH = 96;
const LOOP_NODES = [
  { name: 'Stain', what: 'OT-2 · stain k', machine: 'OT-2 · 20 min', action: 'action · ot2', x: 40, y: 24 },
  { name: 'Image', what: 'tiles + stitch', machine: 'acquisition PC · 20 s', action: 'openuc2 + stitcher', x: 740, y: 24 },
  { name: 'Segment', what: 'StarDist', machine: 'GPU server · 1–2 min', action: 'action · stardist', x: 740, y: 300 },
  { name: 'Measure', what: 'per-cell uptake', machine: 'GPU server · 5 s', action: 'action · analyzer', x: 390, y: 300 },
  { name: 'Decide', what: 'again · next · done', machine: 'laptop · 0.3 s', action: 'workflow step', x: 40, y: 300 },
];

/** Kim's closed loop: stain, image, segment, measure, decide, and round
    again; the arm carries the slide from the bench to the scope.
    `dream` is the plan, with a slide going round. `lab` is what five
    machines make of it: the analysis can't keep up, so tiles pile up in
    front of segmentation. `arkitekt` is the same loop with every call going
    through the hub. */
export function KimLoopFigure({ variant }: { variant: LoopVariant }) {
  const u = useUid();
  const [stain, image, seg, measure, decide] = LOOP_NODES;
  const mid = (n: (typeof LOOP_NODES)[number]) => [n.x + NW / 2, n.y + NH / 2];
  const edges = [
    `M${stain.x + NW + 8} ${mid(stain)[1]} L${image.x - 10} ${mid(image)[1]}`,
    `M${mid(image)[0]} ${image.y + NH + 8} L${mid(seg)[0]} ${seg.y - 10}`,
    `M${seg.x - 8} ${mid(seg)[1]} L${measure.x + NW + 10} ${mid(measure)[1]}`,
    `M${measure.x - 8} ${mid(measure)[1]} L${decide.x + NW + 10} ${mid(decide)[1]}`,
    `M${mid(decide)[0]} ${decide.y - 8} L${mid(stain)[0]} ${stain.y + NH + 10}`,
  ];
  const ring = `M${LOOP_NODES.map((n) => mid(n).join(' ')).join(' L')} Z`;
  const hub = { x: 390, y: 140, w: 220, h: 136 };
  const hc = [hub.x + hub.w / 2, hub.y + hub.h / 2];
  const spokes = [
    `M${stain.x + NW - 40} ${stain.y + NH} L${hub.x} ${hub.y + 30}`,
    `M${image.x + 40} ${image.y + NH} L${hub.x + hub.w} ${hub.y + 30}`,
    `M${seg.x + 40} ${seg.y} L${hub.x + hub.w} ${hub.y + hub.h - 30}`,
    `M${mid(measure)[0]} ${measure.y} L${hc[0]} ${hub.y + hub.h}`,
    `M${decide.x + NW - 40} ${decide.y} L${hub.x} ${hub.y + hub.h - 30}`,
  ];
  const viaHub = `M${LOOP_NODES.map((n) => `${mid(n).join(' ')} L${hc[0]} ${hc[1]}`).join(' L')} Z`;
  const backlog = 6;
  const queueX = mid(seg)[0] + 12;
  const queueY = (i: number) => seg.y - 36 - i * 23;
  const loopCss =
    variant === 'lab'
      ? `${Array.from({ length: backlog }, (_, i) => {
          const at = 8 + i * 13;
          return `section.present .${u}-q${i} { animation: ${u}-q${i} 9s linear 1.6s infinite both; }
          @keyframes ${u}-q${i} { 0%, ${at}% { opacity: 0; transform: translateY(-30px); } ${at + 4}%, 94% { opacity: 1; transform: none; } 100% { opacity: 0; } }`;
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
          ? 'Kim’s loop spread over five machines: a new tile every 20 seconds, segmentation taking 1 to 2 minutes, so tiles pile up'
          : variant === 'arkitekt'
            ? 'Kim’s loop on Arkitekt: every step an action on its device, every call going through the hub'
            : 'Kim’s loop: the OT-2 stains, the arm carries the slide to the openUC2, StarDist segments, the uptake is measured per cell, and a decision sends it round again, on to the next stain, or back to the rack'
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

      {/* what the edges carry */}
      <T className="sm-in" style={delay(1.6)} x={(stain.x + NW + image.x) / 2} y={mid(stain)[1] - 18} size={14} mono weight={700} fill={variant === 'arkitekt' ? PRIMARY : MUTED}>
        {variant === 'arkitekt' ? 'action · arkirino' : variant === 'lab' ? 'arm controller · 1 min' : 'the arm carries the slide'}
      </T>
      {variant === 'arkitekt' ? null : (
        <T className="sm-in" style={delay(1.7)} x={mid(decide)[0] + 12} y={(stain.y + NH + decide.y) / 2} anchor="start" size={14} mono weight={700} fill={MUTED}>
          again · next stain
        </T>
      )}

      {/* nodes */}
      {LOOP_NODES.map((n, i) => (
        <Box
          key={n.name}
          className="sm-pop"
          style={delay(0.2 + i * 0.25)}
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
        <Box className="sm-pop" style={delay(0.9)} x={hub.x} y={hub.y} w={hub.w} h={hub.h} title="Arkitekt" sub="one workflow, six apps" tone="solid" titleSize={28} rx={18} />
      ) : variant === 'lab' ? (
        <g className="sm-pop" style={delay(1.8)}>
          <rect x={hub.x} y={hub.y} width={hub.w} height={hub.h} rx={18} fill={WARN} fillOpacity={0.08} stroke={WARN} strokeWidth={1.6} />
          <T x={hc[0]} y={hc[1] - 16} size={26} weight={700} fill={WARN}>
            5 machines
          </T>
          <T x={hc[0]} y={hc[1] + 16} size={14} fill={MUTED}>
            tiles pile up at segmentation
          </T>
        </g>
      ) : (
        <g className="sm-fade" style={delay(1.4)}>
          <rect x={hub.x} y={hub.y} width={hub.w} height={hub.h} rx={18} fill={SURFACE} stroke={BORDER} strokeDasharray="6 5" strokeWidth={1.6} />
          {Array.from({ length: 6 }, (_, i) => (
            <g key={i}>
              <rect x={hc[0] - 74 + i * 26} y={hc[1] - 46} width={18} height={56} rx={2.5} fill={SURFACE} stroke={MUTED} strokeWidth={1.4} />
              <rect x={hc[0] - 73 + i * 26} y={hc[1] - 45} width={16} height={11} fill={MUTED} fillOpacity={0.25} />
              <circle className="sm-pulse" style={delay(i * 0.3)} cx={hc[0] - 65 + i * 26} cy={hc[1] - 12} r={6} fill={EOSIN} />
            </g>
          ))}
          <T x={hc[0]} y={hc[1] + 36} size={15} fill={MUTED}>
            slide rack
          </T>
        </g>
      )}

      {/* what moves */}
      {variant === 'dream' ? (
        <g className="sm-fade" style={delay(1.8)}>
          <Token path={ring} dur={9}>
            <g>
              <rect x={-17} y={-8} width={34} height={16} rx={2.5} fill={SURFACE} stroke={PRIMARY} strokeWidth={2.2} />
              <circle cx={3} r={4.5} fill={EOSIN} />
            </g>
          </Token>
        </g>
      ) : null}
      {variant === 'arkitekt' ? (
        <g className="sm-fade" style={delay(2)}>
          {[0, 0.5].map((phase) => (
            <Token key={phase} path={viaHub} dur={12} phase={phase}>
              <circle r={9} fill={PRIMARY} stroke="var(--color-fd-background)" strokeWidth={2} />
            </Token>
          ))}
        </g>
      ) : null}
      {variant === 'lab' ? (
        <>
          {Array.from({ length: backlog }, (_, i) => (
            <rect key={i} className={`${u}-q${i}`} x={queueX} y={queueY(i)} width={22} height={22} rx={5} fill={WARN} fillOpacity={0.8} />
          ))}
          <T className="sm-in" style={delay(2.4)} x={queueX - 32} y={queueY(2.5) + 11} anchor="end" size={14} mono weight={700} fill={WARN}>
            backlog
          </T>
        </>
      ) : null}
    </svg>
  );
}

/* --- nothing new ------------------------------------------------------------ */

/** The mess every facility already has, in three corners, all standing
    still: the shared drive (data management), a terminal that can't rebuild
    last year's environment (reproducibility), and a little graveyard of AI
    projects nobody uses any more. */
export function YearsFigure() {
  const head = 'font-mono text-[13px] font-bold uppercase tracking-[0.16em] text-fd-muted-foreground';
  /* the shared drive: name, left, top, tilt, and whether it is the "real" one */
  const files: [string, number, number, number, ('hot' | 'dead')?][] = [
    ['final.tif', 8, 6, -4, 'dead'],
    ['final_v2.tif', 150, 30, 3, 'dead'],
    ['final_v3_REALLY_final/', 34, 66, -2, 'hot'],
    ['Copy of Copy of data (2).xlsx', 76, 112, 4],
    ['new folder (7)/', 6, 150, -6],
    ['IMG_0042 (1) (1).tif', 170, 164, 2],
    ['USB_stick_Tom/', 40, 204, 5],
    ['DO_NOT_DELETE!!!/', 186, 222, -3, 'hot'],
    ['backup_backup_old/', 12, 254, -1],
    ['untitled17.ipynb', 196, 270, 4],
  ];
  /* the terminal: text, colour */
  const term: [string, string][] = [
    ['$ conda activate paper_2021', '#e5e7eb'],
    ['EnvironmentNameNotFound', '#f87171'],
    ['$ pip install -r requirements.txt', '#e5e7eb'],
    ['ERROR: No matching distribution', '#f87171'],
    ['  for tensorflow==1.14 (python 3.12)', '#f87171'],
    ['$ matlab -r analysis_2014', '#e5e7eb'],
    ["Undefined function 'thresh_v2'.", '#f87171'],
    ['$ docker run kim/pipeline:latest', '#e5e7eb'],
    ['# which latest?', '#9ca3af'],
  ];
  /* the graveyard: who lies here, and why */
  const graves: { x: number; y: number; w: number; name: string[]; why: string; tilt: number }[] = [
    { x: 14, y: 96, w: 104, name: ['the lab', 'chatbot'], why: '2023 – 2023', tilt: -3 },
    { x: 126, y: 78, w: 124, name: ['classifier', '_v3.pt'], why: 'saw 12 cells', tilt: 2 },
    { x: 262, y: 100, w: 100, name: ['AI pilot', 'project'], why: 'the PhD left', tilt: 4 },
    { x: 62, y: 206, w: 116, name: ['vibe-coded', 'GUI'], why: 'ran once', tilt: 3 },
    { x: 200, y: 212, w: 124, name: ['agentic', 'pipeline'], why: 'demo only', tilt: -4 },
  ];
  const stone = '#9ca3af';
  return (
    <div className="grid grid-cols-3 gap-5">
      {/* data management: the shared drive */}
      <div className="flex flex-col gap-3">
        <span className={head}>data management · the shared drive</span>
        <div className="relative h-[300px]">
          {files.map(([name, left, top, tilt, kind]) => (
            <span
              key={name}
              className={cn(
                'absolute whitespace-nowrap rounded-md border bg-fd-card px-2.5 py-1 font-mono text-[15px] shadow-sm',
                kind === 'hot' ? 'border-fd-primary font-bold text-fd-primary' : 'border-fd-border',
                kind === 'dead' && 'text-fd-muted-foreground line-through',
              )}
              style={{ left, top, transform: `rotate(${tilt}deg)` }}
            >
              {name.endsWith('/') ? '📁 ' : '📄 '}
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* reproducibility: last year's environment */}
      <div className="flex flex-col gap-3">
        <span className={head}>reproducibility · one year later</span>
        <div className="relative h-[300px]">
          <div className="flex h-[236px] flex-col gap-[3px] rounded-xl bg-[#111827] px-4 py-3 font-mono text-[13.5px] leading-[1.5]">
            {term.map(([line, color]) => (
              <span key={line} className="whitespace-pre" style={{ color }}>
                {line}
              </span>
            ))}
          </div>
          <span className="absolute bottom-[34px] right-[-6px] block" style={{ transform: 'rotate(-7deg)' }}>
            <span className="block rounded-lg border-[3px] bg-fd-card px-3 py-1.5 text-center font-mono text-[14px] font-extrabold uppercase leading-tight" style={{ color: WARN, borderColor: WARN }}>
              works on
              <br />
              my machine
            </span>
          </span>
          <span className="absolute bottom-0 left-0 text-[15px] italic leading-snug text-fd-muted-foreground">“Code available upon reasonable request.”</span>
        </div>
      </div>

      {/* the graveyard of unused AI */}
      <div className="flex flex-col gap-3">
        <span className={head}>the graveyard of unused AI</span>
        <svg width={372} height={300} viewBox="0 0 372 300" role="img" aria-label="A graveyard at night. The headstones: the lab chatbot, 2023 to 2023; classifier v3, saw 12 cells; the AI pilot project, the PhD left; the vibe-coded GUI, ran once; the agentic pipeline, demo only. A small ghost with a sparkle floats above them." className="block rounded-xl">
          <rect width={372} height={300} rx={12} fill="#111827" />
          {/* the moon, and a few stars */}
          <circle cx={318} cy={44} r={24} fill="#fde68a" />
          <circle cx={308} cy={38} r={22} fill="#111827" />
          {[
            [40, 30], [96, 52], [150, 22], [214, 46], [262, 20], [20, 70], [352, 96],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 2 ? 1.4 : 2} fill="#e5e7eb" fillOpacity={0.7} />
          ))}
          {/* the hills */}
          <path d="M0 196 C 70 170, 150 176, 210 186 S 330 176, 372 190 V300 H0 Z" fill="#1f2937" />
          <path d="M0 290 C 90 268, 200 280, 372 268 V300 H0 Z" fill="#14532d" fillOpacity={0.55} />
          {graves.map((g) => (
            <g key={g.name.join(' ')} transform={`rotate(${g.tilt} ${g.x + g.w / 2} ${g.y + 84})`}>
              <path d={`M${g.x} ${g.y + 84} V${g.y + 30} A${g.w / 2} 30 0 0 1 ${g.x + g.w} ${g.y + 30} V${g.y + 84} Z`} fill={stone} stroke="#4b5563" strokeWidth={2} />
              <T x={g.x + g.w / 2} y={g.y + 20} size={11} mono weight={700} fill="#374151">
                R.I.P.
              </T>
              {g.name.map((line, i) => (
                <T key={line} x={g.x + g.w / 2} y={g.y + 38 + i * 15} size={13.5} weight={800} fill="#111827">
                  {line}
                </T>
              ))}
              <T x={g.x + g.w / 2} y={g.y + 72} size={10.5} mono fill="#374151">
                {g.why}
              </T>
              {/* a tuft of grass at the foot */}
              <path d={`M${g.x - 4} ${g.y + 86} l4 -8 l3 8 l4 -10 l3 10 M${g.x + g.w - 12} ${g.y + 86} l4 -8 l3 8 l4 -9 l3 9`} fill="none" stroke="#22c55e" strokeOpacity={0.7} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
            </g>
          ))}
          {/* a small, hopeful ghost */}
          <g transform="translate(160 176)">
            <path d="M0 26 V12 A12 12 0 0 1 24 12 V26 L20 22 L16 26 L12 22 L8 26 L4 22 Z" fill="#f9fafb" fillOpacity={0.9} />
            <circle cx={8.5} cy={12} r={2} fill="#111827" />
            <circle cx={15.5} cy={12} r={2} fill="#111827" />
            <text x={26} y={6} fontSize={13}>✨</text>
          </g>
        </svg>
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

/** What Kim asks for, in three beats, one per click: one script,
    ImageJ-style; Run is pressed and it runs on the machines; and the answer
    comes back as her data. */
export function BetterFigure() {
  const u = useUid();
  const ink = '#1f2937';
  const OK = '#16a34a';
  /* the script, as she would write it for one machine */
  const lines: [string, string][] = [
    ['slide', ' = pickUp("rack A");'],
    ['stain', '(slide, "antibody 1");'],
    ['image1', ' = acquire(slide);'],
    ['washUntilGone', '(slide);'],
    ['stain', '(slide, "antibody 2");'],
    ['image2', ' = acquire(slide);'],
    ['overlay', '(image1, image2);'],
  ];
  const win = { x: 14, y: 8, w: 344, h: 236 };
  const machines = ['robot arm', 'OT-2', 'microscope'];
  const chip = { x: 420, w: 166, h: 54 };
  const chipY = (i: number) => 22 + i * 76;
  const run = { x: win.x + win.w - 92, y: win.y + win.h - 40, w: 80, h: 28 };
  const T_RUN = 1.3;
  const T_DATA = T_RUN + 2.8;
  /* the data: the overlay, both stains on one tissue */
  const thumb = { x: 404, y: 300, s: 112 };
  const cells = tissueCells(0, 0, thumb.s, thumb.s).filter((c) => c.x > 10 && c.x < thumb.s - 10 && c.y > 10 && c.y < thumb.s - 10);
  return (
    <Steps cues={[1.1, T_DATA - 0.1, T_DATA + 1.5]}>
    <svg
      width={600}
      height={470}
      viewBox="0 0 600 470"
      role="img"
      aria-label="A script in an ImageJ-style editor: pick up the slide, stain with antibody 1, acquire, wash until gone, stain with antibody 2, acquire, overlay. Run is pressed, the robot arm, the OT-2 and the microscope each do their part, and the answer comes back: yes, here is your data, the overlay of both stains"
      className="shrink-0"
    >
      <Arrowheads id={u} />
      {/* the editor */}
      <g className="sm-in" style={delay(0.1)}>
        <rect x={win.x} y={win.y} width={win.w} height={win.h} rx={8} fill="#ffffff" stroke={ink} strokeWidth={2} />
        <path d={`M${win.x} ${win.y + 26} H${win.x + win.w}`} stroke={ink} strokeWidth={2} />
        <path d={`M${win.x + 1} ${win.y + 26} V${win.y + 9} a8 8 0 0 1 8 -8 H${win.x + win.w - 9} a8 8 0 0 1 8 8 V${win.y + 26} Z`} fill="#e5e7eb" />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={win.x + 16 + i * 14} cy={win.y + 13} r={4} fill={['#f87171', '#fbbf24', '#4ade80'][i]} />
        ))}
        <T x={win.x + win.w / 2} y={win.y + 18} size={13} weight={600} fill={ink} mono>
          multi_staining.ijm
        </T>
        <T x={win.x + 12} y={win.y + 43} size={11.5} fill="#6b7280" anchor="start">
          File · Edit · Language · Run · Help
        </T>
        <path d={`M${win.x} ${win.y + 50} H${win.x + win.w}`} stroke="#d1d5db" strokeWidth={1} />
      </g>
      {lines.map(([name, rest], i) => (
        <text key={i} className="sm-in" style={delay(0.2 + i * 0.04)} x={win.x + 40} y={win.y + 72 + i * 20} fontSize={13.5} fontFamily="var(--font-mono, ui-monospace, monospace)" fill={ink}>
          <tspan x={win.x + 24} textAnchor="end" fill="#9ca3af">
            {i + 1}
          </tspan>
          <tspan x={win.x + 36} fill="#1d4ed8" fontWeight={600}>
            {name}
          </tspan>
          {rest}
        </text>
      ))}
      <g className="sm-pop" style={delay(0.4)}>
        <rect x={run.x} y={run.y} width={run.w} height={run.h} rx={6} fill={OK} />
        <T x={run.x + run.w / 2} y={run.y + 19} size={14} weight={700} fill="#ffffff">
          ▶ Run
        </T>
      </g>
      <circle className="sm-ping" style={delay(T_RUN)} cx={run.x + run.w / 2} cy={run.y + run.h / 2} r={22} fill="none" stroke={OK} strokeWidth={3} />

      {/* the machines it runs on */}
      <T x={chip.x + chip.w / 2} y={12} size={13} fill={MUTED} className="sm-fade" style={delay(T_RUN + 0.2)}>
        runs on the machines
      </T>
      {machines.map((name, i) => {
        const y = chipY(i);
        const at = T_RUN + 0.3 + i * 0.6;
        return (
          <g key={name}>
            <Path className="sm-draw" style={delay(at - 0.15)} d={`M${win.x + win.w + 4} ${win.y + 70 + i * 50} C${win.x + win.w + 36} ${win.y + 70 + i * 50}, ${chip.x - 34} ${y + chip.h / 2}, ${chip.x - 8} ${y + chip.h / 2}`} stroke={PRIMARY} width={2} head={`${u}-primary`} />
            <g className="sm-pop" style={delay(at)}>
              <rect x={chip.x} y={y} width={chip.w} height={chip.h} rx={12} fill={SURFACE} stroke={BORDER} strokeWidth={2} />
              <T x={chip.x + 16} y={y + chip.h / 2 + 6} size={17} weight={600} anchor="start">
                {name}
              </T>
            </g>
            <g className="sm-pop" style={delay(at + 0.55)}>
              <circle cx={chip.x + chip.w - 24} cy={y + chip.h / 2} r={12} fill={OK} />
              <path d={`M${chip.x + chip.w - 30} ${y + chip.h / 2} l4.5 4.5 l8 -9`} fill="none" stroke="#ffffff" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        );
      })}

      {/* the answer */}
      <g className="sm-pop" style={delay(T_DATA)}>
        <circle cx={46} cy={356} r={30} fill={PRIMARY} />
        <T x={46} y={367} size={32} weight={700} fill="var(--color-fd-primary-foreground)">
          ?
        </T>
      </g>
      <g className="sm-in" style={delay(T_DATA + 0.25)}>
        <path d="M92 356 l14 -10 v20 Z" fill={SURFACE} stroke={BORDER} strokeWidth={2} strokeLinejoin="round" />
        <rect x={104} y={318} width={262} height={76} rx={16} fill={SURFACE} stroke={BORDER} strokeWidth={2} />
        <path d="M105 348 v16" stroke={SURFACE} strokeWidth={3} />
        <T x={124} y={352} size={25} weight={700} anchor="start">
          Yes.
        </T>
        <T x={124} y={380} size={21} weight={600} anchor="start" fill={PRIMARY}>
          Here’s your data.
        </T>
      </g>
      <Path className="sm-draw" style={delay(T_DATA + 0.5)} d={`M368 356 H${thumb.x - 10}`} stroke={PRIMARY} width={2} head={`${u}-primary`} />
      <g className="sm-pop" style={delay(T_DATA + 0.7)}>
        <rect x={thumb.x - 8} y={thumb.y - 8} width={thumb.s + 76} height={thumb.s + 40} rx={12} fill={SURFACE} stroke={OK} strokeWidth={2.5} />
        <rect x={thumb.x} y={thumb.y} width={thumb.s} height={thumb.s} rx={6} fill={TISSUE_BG} />
        {cells.map((c) => {
          const one = c.kind === 'cd3' || c.kind === 'cd20';
          const two = c.kind === 'panck';
          return (
            <ellipse
              key={c.n}
              cx={thumb.x + c.x}
              cy={thumb.y + c.y}
              rx={Math.min(c.rx, 9) * 0.8}
              ry={Math.min(c.ry, 9) * 0.8}
              fill={EOSIN}
              fillOpacity={0.55}
              stroke={one ? STAIN.cd3.color : two ? STAIN.ki67.color : EOSIN_EDGE}
              strokeWidth={one || two ? 2.6 : 0.8}
            />
          );
        })}
        {['image 1', 'image 2', 'overlay'].map((name, i) => (
          <T key={name} x={thumb.x + thumb.s + 10} y={thumb.y + 20 + i * 24} size={12.5} anchor="start" mono weight={i === 2 ? 700 : 400}>
            {name}
          </T>
        ))}
        <T x={thumb.x + (thumb.s + 60) / 2} y={thumb.y + thumb.s + 22} size={14} weight={700} fill={OK}>
          multi-staining ✓
        </T>
      </g>
    </svg>
    </Steps>
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
    (a hub in the middle of Kim's machines). Two beats: the top text and the
    picture on arrival; one click for the look, the raised eyebrow, the red
    circle and the bottom text. Fixed colours: it's a picture, not themed UI. */
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
section.present .${u}-brow { animation: ${u}-brow 0.45s cubic-bezier(.3,1.6,.5,1) 2.9s both; }
section.present .${u}-squint { animation: ${u}-squint 0.35s ease-out 2.9s both; }
section.present .${u}-look { animation: ${u}-look 2s ease-in-out 2.1s both; }
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
    <Steps cues={[2.05, 4.5]}>
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
        <g className="sm-fade" style={delay(0.2)}>
          <rect x={-14} y={8} width={256} height={330} rx={14} fill="#fff" fillOpacity={0.55} />
          <rect x={290} y={8} width={256} height={330} rx={14} fill="#fff" fillOpacity={0.55} />
        </g>
        {tangle.map((d, i) => (
          <Path key={i} className="sm-draw" style={delay(0.4 + i * 0.05)} d={d} stroke="#d97706" width={2.6} />
        ))}
        <g className="sm-fade" style={delay(0.3)}>
          {before.map(([x, y]) => (
            <MemeComputer key={`b${x}${y}`} x={x} y={y} />
          ))}
          <text x={114} y={326} textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize={17} fontWeight={700} fill="#334155">
            Kim’s lab
          </text>
        </g>
        <Path className="sm-draw" style={delay(0.8)} d="M248 172 L284 172" stroke="#334155" width={3.5} head={`${u}-fg`} />
        {after.map(([x, y], i) => (
          <Path key={`l${i}`} className="sm-draw" style={delay(1 + i * 0.04)} d={`M${x} ${y} L${hub[0]} ${hub[1]}`} stroke={PRIMARY} width={3} />
        ))}
        <g className="sm-fade" style={delay(0.9)}>
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
    </Steps>
  );
}

/* --- the four horsemen ---------------------------------------------------------- */

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

/** Idle motion every horseman has (only the cape; eyes and flames hold
    still), and the reared-up pose it ends in. */
export function horsemanAmbientCss(u: string) {
  return `
.${u}-bob, .${u}-rear, .${u}-leg { transform-box: view-box; }
.${u}-rear { transform-origin: 350px 345px; transform: rotate(-7deg); }
.${u}-cape { transform-box: fill-box; transform-origin: 0% 50%; animation: ${u}-cape 0.9s ease-in-out infinite alternate; }
@keyframes ${u}-cape { from { transform: skewY(0deg) scaleX(1); } to { transform: skewY(-6deg) scaleX(1.08); } }
@media (prefers-reduced-motion: reduce) { .${u}-cape { animation: none; } }
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
export function HorsemanBanner({ night, className, small = false, tiny = false, intro }: { night: HorsemanKey; className?: string; small?: boolean; tiny?: boolean; /** Replaces the ordinal above the name. */ intro?: string }) {
  const h = HORSEMEN[night];
  if (tiny)
    return (
      <div className={cn('rounded-md border-2 border-[#3b0d0d] bg-[#f3e6c8] px-2 py-0.5 text-center text-[#3b0d0d] shadow-lg', className)}>
        <span className="whitespace-nowrap text-[15px] font-bold leading-[1.2]">{h.name}</span>
      </div>
    );
  return (
    <div className={cn('flex flex-col items-center rounded-lg border-[3px] border-[#3b0d0d] bg-[#f3e6c8] text-[#3b0d0d] shadow-2xl', small ? 'px-5 pb-1.5 pt-1' : 'px-8 pb-2 pt-1.5', className)}>
      <span className={cn('font-bold uppercase', small ? 'text-[11px] tracking-[0.2em]' : 'text-[13px] tracking-[0.24em]')}>{intro ?? h.ordinal}</span>
      <span className={cn('text-center font-extrabold leading-[1.1] tracking-[-0.02em]', small ? 'text-[26px]' : 'text-[40px]')}>{h.name}</span>
      {small ? null : <span className="text-[15px] italic">{h.epithet}</span>}
    </div>
  );
}

/** The cart behind a horseman: a wooden wagon, loaded with Kim's doubts. */
function DoubtCart({ doubts }: { doubts: string[] }) {
  return (
    <div className="absolute left-[486px] top-[152px] h-[230px] w-[330px]">
      <svg width={330} height={230} viewBox="0 0 330 230" className="absolute inset-0 overflow-visible" aria-hidden>
        {/* the shaft, up to the horse */}
        <path d="M34 150 C -20 150, -60 120, -112 104" fill="none" stroke="#111" strokeWidth={9} strokeLinecap="round" />
        <path d="M34 150 C -20 150, -60 120, -112 104" fill="none" stroke="#8b5e3c" strokeWidth={5} strokeLinecap="round" />
        {/* the box */}
        <path d="M22 118 L318 118 L298 184 L42 184 Z" fill="#8b5e3c" stroke="#111" strokeWidth={3.5} strokeLinejoin="round" />
        <path d="M34 162 L305 162" stroke="#5b3a29" strokeWidth={2.5} />
        <text x={170} y={147} textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize={16} fontWeight={800} letterSpacing={5} fill="#f3e6c8">
          DOUBTS
        </text>
        {/* the wheels */}
        {[92, 250].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy={192} r={34} fill="#3f2a1d" stroke="#111" strokeWidth={3.5} />
            <circle cx={cx} cy={192} r={25} fill="#a16207" stroke="#111" strokeWidth={2} />
            {[0, 45, 90, 135].map((deg) => (
              <path key={deg} d={`M${cx - 25} 192 L${cx + 25} 192`} stroke="#3f2a1d" strokeWidth={3.5} transform={`rotate(${deg} ${cx} 192)`} />
            ))}
            <circle cx={cx} cy={192} r={6} fill="#111" />
          </g>
        ))}
      </svg>
      {/* the load */}
      <div className="absolute inset-x-[26px] bottom-[112px] flex flex-col-reverse items-center gap-[3px]">
        {doubts.map((doubt, i) => (
          <span
            key={doubt}
            className="block max-w-full rounded-md border-2 border-[#3b0d0d] bg-[#f3e6c8] px-3 py-1 text-center text-[15px] font-semibold italic leading-tight text-[#3b0d0d] shadow-md"
            style={{ transform: `rotate(${[-3, 2.5, -2][i % 3]}deg) translateX(${[-8, 10, -2][i % 3]}px)` }}
          >
            “{doubt}”
          </span>
        ))}
      </div>
    </div>
  );
}

/** A horseman of the lab apocalypse, riding in over a night on one keypress
    (a reveal.js fragment): the scene darkens, lightning, the horse gallops in
    from the right and rears, a cart of Kim's doubts rolling behind him; the
    night's errors pop up, Kim panics, and the banner unfurls. */
function Horseman({ night }: { night: keyof typeof NIGHTS }) {
  const u = useUid();
  const h = HORSEMEN[night];
  const { worries } = NIGHTS[night];
  const css = `
.${u}-hm { pointer-events: none; }
:is(.${u}-dark, .${u}-flash, .${u}-ride, .${u}-banner, .${u}-kim) { opacity: 0; }
.${u}-hm.visible .${u}-dark { animation: ${u}-fade 0.6s ease-out both; }
.${u}-hm.visible .${u}-flash { animation: ${u}-flash 0.6s ease-out 1.15s both; }
.${u}-hm.visible .${u}-ride { animation: ${u}-ride 1.35s cubic-bezier(.25,.7,.35,1) 0.1s both; }
.${u}-hm.visible .${u}-bob { animation: ${u}-bob 0.3s ease-in-out 0.1s 5 alternate; }
.${u}-hm.visible .${u}-rear { animation: ${u}-rear 1.1s ease-in-out 1.4s both; }
.${u}-hm.visible .${u}-leg { animation: ${u}-swing 0.3s ease-in-out 0.1s 5 alternate; }
.${u}-hm.visible .${u}-banner { animation: ${u}-unfurl 0.6s cubic-bezier(.2,1.3,.4,1) 1.75s both; }
.${u}-hm.visible .${u}-kim { animation: ${u}-fade 0.4s ease-out 0.5s both; }
.${u}-hm.visible .${u}-panic { animation: ${u}-panic 0.13s ease-in-out 1.2s 16 alternate; }
@keyframes ${u}-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes ${u}-flash { 0% { opacity: 0; } 12% { opacity: 0.85; } 30% { opacity: 0.1; } 42% { opacity: 0.6; } 100% { opacity: 0; } }
@keyframes ${u}-ride { 0% { opacity: 0; transform: translateX(900px); } 8% { opacity: 1; } 100% { opacity: 1; transform: none; } }
@keyframes ${u}-bob { from { transform: translateY(0); } to { transform: translateY(-12px); } }
@keyframes ${u}-rear { 0% { transform: none; } 45% { transform: rotate(-17deg); } 70% { transform: rotate(-12deg); } 100% { transform: rotate(-7deg); } }
@keyframes ${u}-swing { from { transform: rotate(calc(var(--a) * -1deg)); } to { transform: rotate(calc(var(--a) * 1deg)); } }
@keyframes ${u}-unfurl { from { opacity: 0; transform: scaleX(0.05); } to { opacity: 1; transform: none; } }
@keyframes ${u}-panic { from { transform: translateX(-5px) rotate(-2deg); } to { transform: translateX(5px) rotate(2deg); } }
@media (prefers-reduced-motion: reduce) {
  .${u}-hm.visible :is(.${u}-ride, .${u}-bob, .${u}-rear, .${u}-leg, .${u}-flash, .${u}-panic) { animation: none; opacity: 1; }
  .${u}-hm.visible .${u}-flash { opacity: 0; }
}
${horsemanAmbientCss(u)}`;
  return (
    <Fragment as="div" index={1} className={`custom ${u}-hm absolute inset-0 z-20`}>
      <LoopStyles css={css} />
      <div className={`${u}-dark absolute -inset-x-4 -bottom-12 -top-9 rounded-3xl`} style={{ background: `radial-gradient(ellipse 52% 56% at 52% 44%, ${h.aura} 0%, rgba(22,4,4,0.93) 70%, rgba(6,1,1,0.98) 100%), rgba(14,4,6,0.86)` }} />
      <div className={`${u}-flash absolute -inset-x-4 -bottom-12 -top-9 rounded-3xl bg-white`} />
      {/* the horseman, and what he carts in */}
      <div className={`${u}-ride absolute left-[236px] top-[-46px] h-[440px] w-[830px]`}>
        <DoubtCart doubts={worries} />
        <HorsemanArt night={night} u={u} width={520} />
      </div>
      {/* Kim, in a panic */}
      <div className={`${u}-kim absolute bottom-[-14px] left-[16px]`}>
        <div className={`${u}-panic relative`}>
          <KimFigure size={180} mood="panic" tired={Object.keys(NIGHTS).indexOf(night)} />
          <span className="absolute left-[150px] top-[-6px] rotate-[10deg] text-[58px] font-black leading-none text-[#ef4444]">!!</span>
        </div>
      </div>
      <div className="absolute bottom-[-34px] left-[190px] flex w-[660px] justify-center">
        <HorsemanBanner night={night} className={`${u}-banner`} intro={`Kim has just met ${h.ordinal.replace(/^The/, 'the')}`} />
      </div>
    </Fragment>
  );
}
