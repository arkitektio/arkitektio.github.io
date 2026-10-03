'use client';

import { useEffect, useState } from 'react';
import { Cpu, History, RotateCcw, Skull } from 'lucide-react';
import { BentoCard } from './primitives';
import { RobotStateScene } from '@/components/marketing';

// The child calls `image_plate` makes, in order. Each runs on another app's
// agent (the robot arm, the microscope or stardist), as a child task of the workflow.
const calls = [
  { fn: 'arm.pick', arg: '"hotel/3"', app: 'fairino' },
  { fn: 'arm.place', arg: '"stage"', app: 'fairino' },
  { fn: 'scope.acquire', arg: '"A1"', app: 'microscope' },
  { fn: 'seg.count_cells', arg: 'image', app: 'stardist' },
  { fn: 'scope.acquire', arg: '"A2"', app: 'microscope' },
  { fn: 'seg.count_cells', arg: 'image', app: 'stardist' },
  { fn: 'arm.place', arg: '"hotel/3"', app: 'fairino' },
] as const;

type Status = 'idle' | 'running' | 'done' | 'replayed' | 'followed';
type Phase = 'live' | 'crashed' | 'resuming' | 'completed';
type Frame = { phase: Phase; rows: Status[]; ms: number };

// A scripted story, played in a loop: the workflow runs, its own agent dies
// while the microscope is acquiring A2, and a new process resumes it. Finished
// calls (the robot's moves included) come back from the journal without running
// again; the acquisition still running on the microscope is followed, not restarted.
const CRASH = 4; // the call in flight when the workflow's agent dies

function buildFrames(): Frame[] {
  const n = calls.length;
  const frames: Frame[] = [];
  const rows = (f: (i: number) => Status) => Array.from({ length: n }, (_, i) => f(i));
  const before = (j: number, i: number, done: Status): Status =>
    j < i ? done : j === i ? 'running' : 'idle';

  frames.push({ phase: 'live', rows: rows(() => 'idle'), ms: 900 });
  for (let i = 0; i < CRASH; i++) {
    frames.push({ phase: 'live', rows: rows((j) => before(j, i, 'done')), ms: 650 });
    frames.push({ phase: 'live', rows: rows((j) => (j <= i ? 'done' : 'idle')), ms: 250 });
  }
  frames.push({ phase: 'live', rows: rows((j) => before(j, CRASH, 'done')), ms: 900 });
  // The workflow's agent dies. The microscope keeps acquiring: it is a
  // different agent, and its task is a child that is still running.
  frames.push({ phase: 'crashed', rows: rows((j) => before(j, CRASH, 'done')), ms: 2200 });
  // Resume: the code runs again from the top, and each call finds its child.
  for (let i = 0; i < CRASH; i++) {
    frames.push({
      phase: 'resuming',
      rows: rows((j) => (j <= i ? 'replayed' : before(j, CRASH, 'done'))),
      ms: 300,
    });
  }
  frames.push({ phase: 'resuming', rows: rows((j) => (j < CRASH ? 'replayed' : j === CRASH ? 'followed' : 'idle')), ms: 1200 });
  frames.push({ phase: 'live', rows: rows((j) => (j < CRASH ? 'replayed' : j === CRASH ? 'done' : 'idle')), ms: 250 });
  for (let i = CRASH + 1; i < n; i++) {
    frames.push({ phase: 'live', rows: rows((j) => (j < CRASH ? 'replayed' : before(j, i, 'done'))), ms: 650 });
    frames.push({ phase: 'live', rows: rows((j) => (j < CRASH ? 'replayed' : j <= i ? 'done' : 'idle')), ms: 250 });
  }
  frames.push({ phase: 'completed', rows: rows((j) => (j < CRASH ? 'replayed' : 'done')), ms: 3200 });
  return frames;
}

const frames = buildFrames();

const statusStyle: Record<Status, { row: string; badge: string; label: string }> = {
  idle: { row: 'border-fd-border bg-fd-muted/20 text-white/35', badge: 'text-white/25', label: '·' },
  running: {
    row: 'border-amber-400/40 bg-amber-400/10 text-white/90',
    badge: 'text-amber-300 animate-pulse',
    label: 'RUNNING',
  },
  done: { row: 'border-emerald-500/30 bg-emerald-500/10 text-white/80', badge: 'text-emerald-400', label: 'DONE' },
  replayed: {
    row: 'border-sky-400/40 bg-sky-400/10 text-white/80',
    badge: 'text-sky-300',
    label: 'FROM JOURNAL',
  },
  followed: {
    row: 'border-violet-400/40 bg-violet-400/10 text-white/90',
    badge: 'text-violet-300 animate-pulse',
    label: 'FOLLOWED',
  },
};

const phaseStyle: Record<Phase, { box: string; text: string; label: string }> = {
  live: { box: 'border-fd-primary/40 bg-fd-primary/10', text: 'text-fd-primary', label: 'RUNNING' },
  crashed: { box: 'border-red-500/50 bg-red-500/15', text: 'text-red-400', label: 'AGENT DIED' },
  resuming: { box: 'border-sky-400/50 bg-sky-400/10', text: 'text-sky-300', label: 'RESUMING' },
  completed: { box: 'border-emerald-500/40 bg-emerald-500/10', text: 'text-emerald-400', label: 'COMPLETED' },
};

// Code tokens, so the snippet stays readable here.
const K = ({ children }: { children: React.ReactNode }) => <span className="text-[#82aaff]">{children}</span>;
const D = ({ children }: { children: React.ReactNode }) => <span className="text-[#c792ea]">{children}</span>;
const F = ({ children }: { children: React.ReactNode }) => <span className="text-[#ffcb6b]">{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className="text-[#c3e88d]">{children}</span>;
const C = ({ children }: { children: React.ReactNode }) => <span className="text-[#546e7a]">{children}</span>;

export function DeclareCard() {
  const [index, setIndex] = useState(0);
  const [run, setRun] = useState(1);

  useEffect(() => {
    const t = setTimeout(() => {
      const next = (index + 1) % frames.length;
      if (next === 0) setRun(1);
      else if (frames[next].phase === 'resuming' && frames[index].phase === 'crashed') setRun(2);
      setIndex(next);
    }, frames[index].ms);
    return () => clearTimeout(t);
  }, [index]);

  const frame = frames[index];
  const phase = phaseStyle[frame.phase];
  const PhaseIcon = frame.phase === 'crashed' ? Skull : frame.phase === 'resuming' ? RotateCcw : Cpu;
  const replayed = frame.rows.filter((r) => r === 'replayed').length;
  // The arm only moves while someone is commanding it: when the workflow's agent
  // is down, and while its moves are being replayed rather than re-run, it holds still.
  const armHalted = frame.phase === 'crashed' || frame.phase === 'resuming';

  return (
    <BentoCard
      href="/docs/build/guides/python/durable-execution"
      hrefLabel="Learn about durable workflows"
      className="grid grid-cols-1 gap-6 p-6 sm:col-span-2 sm:p-8 lg:grid-cols-2 lg:items-center"
    >
      {/* copy */}
      <div>
        <span className="font-mono text-[11px] tracking-[0.16em] text-fd-primary">
          WORKFLOWS ARE JUST CODE
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Orchestrate across machines, survive the crash
        </h2>
        <p className="mt-3 max-w-md text-sm text-fd-muted-foreground">
          Declare what you need from other apps with <code>@app.declare</code> and write the
          orchestration as plain Python in an <code>@app.workflow</code>. If the machine running
          it dies, the workflow is resumed: calls that already finished are replayed from the
          journal instead of running again (the robot does not move twice), and a call still in
          flight is picked up where it is.
        </p>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-fd-border bg-[#0a0a0c] p-4 font-mono text-[12px] leading-relaxed text-white/80">
          <code>
            <D>@app.declare</D>(app=<S>&quot;fairino&quot;</S>){'\n'}
            <K>class</K> <F>Arm</F>(Protocol):{'\n'}
            {'    '}plate: <K>Plate</K>{'  '}<C># published @app.state</C>{'\n'}
            {'    '}<K>def</K> <F>pick</F>(self, slot: <K>str</K>) <K>-&gt;</K> <K>None</K>: ...{'\n'}
            {'    '}<K>def</K> <F>place</F>(self, slot: <K>str</K>) <K>-&gt;</K> <K>None</K>: ...{'\n'}
            {'\n'}
            <D>@app.workflow</D>{'\n'}
            <K>def</K> <F>image_plate</F>(arm: <K>Arm</K>, scope: <K>Scope</K>, seg: <K>Segmentor</K>,{'\n'}
            {'                '}task: <K>Task</K>) <K>-&gt;</K> <K>int</K>:{'\n'}
            {'    '}arm.<F>pick</F>(<S>&quot;hotel/3&quot;</S>){'\n'}
            {'    '}arm.<F>place</F>(<S>&quot;stage&quot;</S>){'\n'}
            {'    '}total = <span className="text-[#f78c6c]">0</span>{'\n'}
            {'    '}<C># raise if someone swapped the plate while we were down</C>{'\n'}
            {'    '}<K>with</K> task.<F>guard</F>(arm.plate, <S>&quot;barcode&quot;</S>):{'\n'}
            {'        '}<K>for</K> well <K>in</K> [<S>&quot;A1&quot;</S>, <S>&quot;A2&quot;</S>]:{'\n'}
            {'            '}image = scope.<F>acquire</F>(well){'\n'}
            {'            '}total += task.<F>retry</F>(seg.count_cells, image,{'\n'}
            {'                                  '}if_started=<K>True</K>){'\n'}
            {'    '}arm.<F>place</F>(<S>&quot;hotel/3&quot;</S>){'\n'}
            {'    '}<K>return</K> total
          </code>
        </pre>
      </div>

      {/* the robot, and the workflow driving it */}
      <div className="relative z-10 min-h-[26rem] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0c] shadow-[0_0_80px_-40px_var(--color-fd-primary)] lg:min-h-[28rem]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className={`absolute -left-10 top-1/4 h-56 w-56 rounded-full blur-[110px] transition-colors duration-700 ${
              armHalted ? 'bg-amber-500/20' : 'bg-primary/20'
            }`}
          />
        </div>

        <RobotStateScene halted={armHalted} />

        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between gap-3 p-4">
          {/* the workflow task */}
          <div
            className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 font-mono text-[12px] text-white/90 backdrop-blur transition-colors ${phase.box}`}
          >
            <PhaseIcon className={`size-4 ${phase.text}`} />
            image_plate()
            <span className={`ml-auto text-[10px] tracking-[0.12em] ${phase.text}`}>
              {phase.label} · RUN {run}
            </span>
          </div>

          {/* its child calls */}
          <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-black/45 p-2 backdrop-blur">
            {calls.map((c, i) => {
              const st = statusStyle[frame.rows[i]];
              return (
                <div
                  key={i}
                  className={`flex items-center gap-2 rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors duration-300 ${st.row}`}
                >
                  <span className="text-white/30">{i + 1}</span>
                  <span className="truncate">
                    {c.fn}({c.arg})
                  </span>
                  <span className="hidden text-white/30 sm:inline">@{c.app}</span>
                  <span className={`ml-auto shrink-0 text-[9px] tracking-[0.12em] ${st.badge}`}>{st.label}</span>
                </div>
              );
            })}
            <p className="mt-1 flex items-center justify-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-white/45">
              <History className="size-3" />
              {frame.phase === 'crashed'
                ? 'WORKFLOW AGENT LOST · MICROSCOPE STILL ACQUIRING'
                : frame.phase === 'resuming'
                  ? 'REPLAYING · GUARD: PLATE.BARCODE UNCHANGED'
                  : run === 2
                    ? `RESUMED · ${replayed} CALLS REPLAYED · 0 REDONE`
                    : 'EVERY CALL JOURNALED UNDER A STABLE KEY'}
            </p>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
