'use client';

/* "Large scale volume viewing in Orkestrator" — how a volume nobody can hold in
   memory ends up on screen, scrollable, in the Orkestrator desktop app.

   The arc mirrors the Mikro coordinate-system deck: the problem, the wish, the
   thing itself, then the background behind it. Several slides are drafts that
   still need checking against the actual renderer; they are marked with speaker
   notes saying so. */

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { ArrowLeftRight, Boxes, Globe, PenLine, Zap } from 'lucide-react';
import { Logo } from '@/components/site/logo';
import { DeckFrame } from '../deck-frame';
import { PipelineFlow } from './pipeline-flow';
import {
  Caption,
  Columns,
  DeckSlide,
  Figure,
  Panel,
  SectionSlide,
  Term,
  TitleSlide,
} from '../slide';
import {
  CullingFigure,
  LayerStackFigure,
  ObviousFigure,
  MemoryWallFigure,
  MeshLodFigure,
  OctreeFigure,
  MeshBlowupFigure,
  ProxyFigure,
  RaycastFigure,
  VolumeScaleFigure,
  WholeFileVsChunksFigure,
} from './volume-viewer-figures';

/** A demo recording, sized by height so it can be given as much of the slide as
    the copy above it leaves free. `ratio` should match the file, otherwise the
    frame letterboxes. Until the file is dropped into `public/`, the placeholder
    behind the player is what shows. */
function DemoVideo({
  src,
  height = 380,
  ratio = 16 / 9,
}: {
  src: string;
  /** Height in slide pixels. */
  height?: number;
  ratio?: number;
}) {
  return (
    <div
      className="relative mx-auto overflow-hidden rounded-2xl border border-fd-border/70"
      style={{ height, aspectRatio: ratio }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-fd-muted-foreground">
        <span className="text-[19px] font-semibold">demo recording</span>
        <span className="font-mono text-[13px]">{src}</span>
      </div>
      <video
        autoPlay
        muted
        loop
        controls
        playsInline
        className="absolute inset-0 size-full object-cover"
      >
        <source src={src} />
      </video>
    </div>
  );
}

/** Footage we did not record. Same frame as `DemoVideo` but without the
    waiting-for-a-file affordance, because the file exists — and it is somebody
    else's, which is why every use of this is followed by a credit line. */
function SourceVideo({ src }: { src: string }) {
  return (
    <div className="mx-auto aspect-video w-full max-w-[560px] overflow-hidden rounded-xl border border-fd-border bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="size-full object-contain"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

/** A screenshot slot, sized by height rather than aspect: the slide has a fixed
    600px content box, and an `aspect-video` column on a 1280px canvas overruns
    it on its own. No frame around the image — only the placeholder is drawn,
    and only while the capture is missing. */
function Shot({
  src,
  label,
  height,
}: {
  src: string;
  label: string;
  /** Height in slide pixels. */
  height: number;
}) {
  const [missing, setMissing] = useState(false);
  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      {missing ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-fd-border bg-fd-card/40 text-fd-muted-foreground">
          <span className="text-[18px] font-semibold">{label}</span>
          <span className="font-mono text-[12px]">{src}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          className="absolute inset-0 size-full rounded-lg object-contain"
          onError={() => setMissing(true)}
        />
      )}
    </div>
  );
}

/** The mark of the tool a slide is talking about: a right-aligned lockup of the
    logo and its owner's name. A logo that is not in `public/` falls back to a
    dashed slot naming the file it is waiting for, so the slide stays readable
    either way. */
function BrandMark({
  src,
  name,
  symbol = '™',
}: {
  src: string;
  name: string;
  /** ® for a registered mark, ™ otherwise. */
  symbol?: '™' | '®';
}) {
  const [missing, setMissing] = useState(false);
  return (
    <div className="flex items-center gap-3">
      {missing ? (
        <span className="flex h-[44px] items-center rounded-lg border border-dashed border-fd-border px-3 font-mono text-[10px] text-fd-muted-foreground">
          {src}
        </span>
      ) : (
        // Dropped in by hand, so the dimensions next/image wants are unknown.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          className="h-[44px] w-auto object-contain"
          onError={() => setMissing(true)}
        />
      )}
      <span className="text-[15px] font-semibold text-fd-muted-foreground">
        {name}
        <span className="align-super text-[10px]">{symbol}</span>
      </span>
    </div>
  );
}

type VerdictState = 'yes' | 'no' | 'partial';
type Cell = [VerdictState, string];

/** A verdict in the landscape table. The slide shows only the tick; the
    qualifier that keeps the tick honest is one hover away, because five columns
    of small print is not a slide. */
function Verdict({ state, note }: { state: VerdictState; note: string }) {
  const glyph = state === 'yes' ? '✓' : state === 'no' ? '✗' : '~';
  return (
    <span className="group/cell relative flex justify-center" title={note}>
      <span
        className={
          state === 'yes'
            ? 'text-[22px] font-bold leading-none text-fd-primary'
            : state === 'no'
              ? 'text-[22px] font-bold leading-none text-fd-muted-foreground/70'
              : 'text-[22px] font-bold leading-none text-fd-foreground'
        }
      >
        {glyph}
      </span>
      <span className="pointer-events-none invisible absolute bottom-[calc(100%+8px)] left-1/2 z-20 w-[200px] -translate-x-1/2 rounded-lg border border-fd-primary/40 bg-fd-card px-3 py-2 text-center text-[13px] leading-snug text-fd-foreground opacity-0 shadow-lg transition-opacity group-hover/cell:visible group-hover/cell:opacity-100">
        {note}
      </span>
    </span>
  );
}

/** The landscape table's column widths, shared by the header and every row. */
const CONTENDER_COLS =
  'grid grid-cols-[minmax(0,160px)_repeat(6,minmax(0,1fr))] items-center gap-3';

/** One row of the landscape slide: a tool, five verdicts, and a link so nobody
    has to take any of it on trust. */
function Contender({
  name,
  href,
  browser,
  volume,
  lod2d,
  lod3d,
  acts,
  usable,
  tone = 'default',
}: {
  name: string;
  href?: string;
  browser: Cell;
  volume: Cell;
  lod2d: Cell;
  lod3d: Cell;
  acts: Cell;
  usable: Cell;
  tone?: 'default' | 'primary';
}) {
  return (
    <div
      className={
        tone === 'primary'
          ? `${CONTENDER_COLS} rounded-xl border border-fd-primary/45 bg-fd-primary/5 px-5 py-3`
          : `${CONTENDER_COLS} rounded-xl border border-fd-border bg-fd-card/60 px-5 py-3`
      }
    >
      <span className="flex items-baseline gap-2">
        <span className="text-[18px] font-semibold leading-tight tracking-tight">
          {name}
        </span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-[12px] text-fd-primary underline underline-offset-2"
          >
            see?
          </a>
        ) : null}
      </span>
      <Verdict state={browser[0]} note={browser[1]} />
      <Verdict state={volume[0]} note={volume[1]} />
      <Verdict state={lod2d[0]} note={lod2d[1]} />
      <Verdict state={lod3d[0]} note={lod3d[1]} />
      <Verdict state={acts[0]} note={acts[1]} />
      <Verdict state={usable[0]} note={usable[1]} />
    </div>
  );
}

/** One wish: the glyph is the bullet. Keep the line short — the point is the
    shape of the list, not the prose. */
function WishRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: string;
}) {
  return (
    <li className="flex items-center gap-5">
      <span className="flex size-[58px] shrink-0 items-center justify-center rounded-2xl bg-fd-primary/10 ring-1 ring-fd-primary/35">
        <Icon className="size-8 text-fd-primary" strokeWidth={1.5} aria-hidden />
      </span>
      <span className="text-[24px] leading-snug">
        <span className="font-semibold">{label}</span>{' '}
        <span className="text-fd-muted-foreground">{children}</span>
      </span>
    </li>
  );
}

export function VolumeViewerDeck() {
  return (
    <DeckFrame>
      <TitleSlide
        eyebrow="Orkestrator"
        title={
          <>
            Looking at <span className="text-fd-primary">all of it</span>
          </>
        }
        subtitle="Large scale volume viewing in Orkestrator: how a dataset that does not fit in memory, on a disk, or on a screen still ends up under your cursor."
        meta={
          <>
            <span>Arkitekt</span>
            <span aria-hidden>·</span>
            <span>34 slides</span>
            <span aria-hidden>·</span>
            <span>~26 min</span>
          </>
        }
      />

      <DeckSlide
        eyebrow="The problem"
        title="You acquired more than you can look at"
        lead="Cleared tissue, light sheet, modern microscopy is multi-gigabytes the thing you view it on is measured in megapixels."
        notes="Keep it concrete — name the instrument in the room."
      >
        <div className="flex flex-1 items-center">
          <Figure>
            <VolumeScaleFigure />
          </Figure>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The problem"
        title="The Fiji way"
        logo={<BrandMark src="/presentations/volume-viewer/logo-fiji.png" name="Fiji" />}
        lead="Make it smaller until it fits: downsample it, crop the interesting bit, copy that onto a machine with enough memory. This works, and it is what everyone does."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <div className="flex justify-end">
            
          </div>
          <Figure>
            <ProxyFigure />
          </Figure>
          <Caption>
            Every step throws something away, and every step makes a copy that
            has to be tracked. What you spend your day looking at is several
            analysis steps removed from the data you acquired.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The problem"
        title="The money way"
        lead="Or you buy your way out of it. There is very good commercial software for exactly thism IMARIS and its neighbours will happily open your volume, and they are genuinely good at it. They are also priced accordingly."
        notes="Be fair here — the software is good. The point is who gets to use it, not whether it works."
      >
        <div className="grid flex-1 grid-cols-3 content-center gap-4">
          <Panel title="a licence per seat">
            <span className="text-[18px] leading-snug">
              Renewed yearly, modules sold separately. 
            </span>
          </Panel>
          <Panel title="and a machine under it">
            <span className="text-[18px] leading-snug">
              A workstation in a particular room, which your terabytes have to
              travel to before anyone can look.
            </span>
          </Panel>
          <Panel title="and your collaborator has neither">
            <span className="text-[18px] leading-snug">
              The person you actually want to show it to cannot open what you
              are looking at.
            </span>
          </Panel>
        </div>
        <Caption className="mt-4">
          None of this is a complaint about the software  but 
          <span className="ml-5 font-semibold text-fd-foreground">
            why is there no poor man&rsquo;s Imaris?
          </span>
        </Caption>
      </DeckSlide>

      <DeckSlide
        eyebrow="The problem"
        title="And this is what the money buys"
        lead="A published figure, rendered in Imaris: native light-sheet channels, then the same volume as isosurfaces, turned in the hand. It is very good, and it is the bar."
        notes="Third-party footage, CC BY 4.0 — the credit line has to stay on the slide."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <SourceVideo src="/presentations/volume-viewer/imaris-ovary-lightsheet.mp4" />
          <Caption className="text-[13px]">
            video 1 from McKey, Anbarci, Bunce, Ontiveros, Behringer &amp;
            Capel,{' '}
            <span className="italic">
              Integration of mouse ovary morphogenesis with developmental
              dynamics of the oviduct, ovarian ligaments, and rete ovarii
            </span>
            , eLife 2022;11:e81088. Used under{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              className="underline underline-offset-2"
            >
              CC BY 4.0
            </a>
            
          </Caption>
        </div>
      </DeckSlide>

      <SectionSlide
        title="Because volume rendering is hard"
        lead="Hard in two separate ways, both of which have to be answered before a free one can exist at all."
      />

      <DeckSlide
        eyebrow="Why it is hard"
        title="The data does not fit anywhere"
        lead="Every stage of the machine is smaller than the dataset. Not a little smaller — smaller by enough that two of these bars cannot be drawn."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <Figure>
            <MemoryWallFigure />
          </Figure>
          <Caption>
            And which bytes matter depends on where you are looking, which is
            about to change. A frame lasts sixteen milliseconds; a fetch does
            not. So the renderer has to draw something correct out of whatever
            happens to have arrived, and be right again a frame later.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The obvious objection"
        title="Well..."
      >
        <div className="flex flex-1 items-center">
          <Figure>
            <ObviousFigure />
          </Figure>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Why it is hard"
        title="Your data is not a computer game"
        lead="A mesh is vectors, and you know where that skin is before you fetch it. A volume is solid, and it will not tell you what it contains until you have paid to look."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <Figure>
            <CullingFigure />
          </Figure>
          <Caption>
            Culling a mesh is free: bounds are in the index, so anything outside
            the frustum is never requested. A volume has voxels everywhere, and
            whether a chunk shows anything at all depends on the <b>opacity</b> you
            picked at render time.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The landscape"
        title="So nobody is doing this?"
        lead="Plenty of people are, and the rendering is a solved problem in more than one place Nothing is perfect t"
        notes="The honest answer to 'how are you different from Neuroglancer' is: we are not, at rendering. We differ at knows-the-data and act-on-it. Say that plainly. Do not sneer at these. Neuroglancer really does ray-march voxels (ON, MAX, MIN) — off by default per layer, which is why people remember it as the mesh viewer. webKnossos: verify its 3D viewport before claiming anything; I could not confirm true volume rendering as opposed to slice planes plus meshes."
      >
        <div className="flex flex-1 flex-col justify-center gap-2">
          <div className={`${CONTENDER_COLS} px-5 pb-1`}>
            {[
              ['tool', false],
              ['runs anywhere', false],
              ['volume render', false],
              ['LOD 2D', false],
              ['LOD 3D', false],
              ['act on it', true],
              ['usability', true],
            ].map(([heading, hot], i) => (
              <span
                key={heading as string}
                className={
                  (hot
                    ? 'font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-fd-primary'
                    : 'font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-fd-muted-foreground') +
                  (i === 0 ? '' : ' text-center')
                }
              >
                {heading as string}
              </span>
            ))}
          </div>

          <Contender
            name="BigDataViewer"
            href="https://imagej.net/plugins/bdv/"
            browser={['no', 'A Fiji plugin on your desktop, with the data reachable from that machine.']}
            volume={['no', 'Arbitrary slice planes through the data — re-slicing, not a volume render.']}
            lod2d={['yes', 'The plane you are looking at is drawn from the pyramid level that suits the zoom.']}
            lod3d={['yes', 'Its HDF5/N5 pyramid is 3D blocks, and it picks the resolution per view.']}
            acts={['yes', 'You are inside Fiji. Every plugin, macro and script in that ecosystem is right there.']}
            usable={['no', 'Install Fiji, convert your data to its XML/HDF5, know which menu the plugin is under.']}
          />
          <Contender
            name="BigVolumeViewer"
            href="https://mobie.github.io/tutorials/bigvolumeviewer.html"
            browser={['no', 'Also a Fiji plugin on your desktop.']}
            volume={['yes', 'Maximum intensity projection and alpha compositing, on the GPU.']}
            lod2d={['yes', 'Same multi-resolution pyramid underneath.']}
            lod3d={['yes', 'Lazily loads 3D blocks into a GPU tile cache, so datasets larger than VRAM work.']}
            acts={['yes', 'Fiji again, so the whole ecosystem is available to you.']}
            usable={['no', 'Fiji plus a conversion step, plus GPU cache settings to get right.']}
          />
          <Contender
            name="vizarr / Viv"
            href="https://hms-dbmi.github.io/vizarr/"
            browser={['yes', 'Pure client, reading OME-Zarr straight from storage. No server of its own.']}
            volume={['no', '2D slices of an n-dimensional array. Volume rendering was never in scope.']}
            lod2d={['yes', 'Multiscale tiles: pan and zoom the plane and it fetches the level it needs.']}
            lod3d={['no', 'There is no volume to have detail in.']}
            acts={['no', 'A viewer component. There is nothing to act with.']}
            usable={['yes', 'Point it at a URL and it shows the image. Almost nothing to learn.']}
          />
          <Contender
            name="Neuroglancer"
            href={"https://neuroglancer-demo.appspot.com/#!%7B%22layers%22%3A%5B%7B%22type%22%3A%22image%22%2C%22source%22%3A%22precomputed%3A%2F%2Fgs%3A%2F%2Fneuroglancer-public-data%2Fflyem_fib-25%2Fimage%22%2C%22name%22%3A%22fib25%22%2C%22volumeRendering%22%3A%22on%22%2C%22opacity%22%3A0.5%7D%5D%2C%22layout%22%3A%223d%22%7D"}
            browser={['yes', 'WebGL, streaming chunks straight into the tab.']}
            volume={['yes', 'Really ray marches voxels — ON, MAX and MIN modes. Off by default per layer, which is why you only remember the meshes.']}
            lod2d={['yes', 'Cross-section panels are chunked multiscale.']}
            lod3d={['yes', 'Picks a resolution per frame while ray marching, and corrects opacity when the sample count changes.']}
            acts={['no', 'Nothing to run. What you select stays a selection, and the session is a URL blob.']}
            usable={['partial', 'Instant if somebody hands you a link. Building that link yourself, or driving the layer and shader controls, is another matter.']}
          />
          <Contender
            name="webKnossos"
            href="https://webknossos.org/"
            browser={['yes', 'Browser-native, and built for enormous EM volumes.']}
            volume={['partial', 'Slice planes and chunk-loaded meshes in the 3D viewport. Whether it truly ray marches volumes — verify before claiming it.']}
            lod2d={['yes', 'Chunked multiscale in the slice views.']}
            lod3d={['partial', 'Meshes load in chunks by detail; volumetric LOD is the part I could not confirm.']}
            acts={['partial', 'Annotating is first class. Running your own code means going through their jobs and API.']}
            usable={['yes', 'A finished product with an upload flow and documentation. This is not where it loses.']}
          />

          <span className="px-5 pt-1 text-[13px] text-fd-muted-foreground">
            Hover a tick for the detail behind it. The rendering columns are
            table stakes. No row here has both of the last two.
          </span>
        </div>
      </DeckSlide>

      <DeckSlide
        title="Can we do better?"
        lead="Not a proxy, not a licence. The whole dataset, opened by whoever needs to look at it, and worked in rather than only looked at."
      >
        <div className="flex flex-1 items-center">
          <ul className="mx-auto flex w-full max-w-[820px] flex-col gap-6">
            <WishRow icon={Globe} label="From anywhere.">
              The Orkestrator desktop app, on any laptop.
            </WishRow>
            <WishRow icon={Boxes} label="The whole thing.">
              Not a region, not a projection.
            </WishRow>
            <WishRow icon={Zap} label="Right now.">
              While it is still being written.
            </WishRow>
            <WishRow icon={PenLine} label="And act in it.">
              Mark it, measure it, run something on it.
            </WishRow>
          </ul>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Introducing"
        title={
          <>
            The <span className="text-fd-primary">volume viewer</span> in
            Orkestrator
          </>
        }
        lead="Best friends forever: the viewer never loads your dataset, it works out which pieces are visible and asks the backend where they live."
      >
        <div className="flex flex-1 flex-col justify-center gap-5">
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,210px)] items-center gap-3">
            <div className="flex flex-col gap-2">
              <Shot
                src="/presentations/volume-viewer/orkestrator.png"
                label="Orkestrator"
                height={278}
              />
              <span className="text-center text-[15px] text-fd-muted-foreground">
                the desktop app you are looking at
              </span>
            </div>

            <div className="flex flex-col items-center gap-1.5 px-1">
              <ArrowLeftRight
                className="size-10 text-fd-primary"
                strokeWidth={1.5}
                aria-hidden
              />
              <span className="text-center text-[13px] leading-snug text-fd-muted-foreground">
                the layout
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-2xl border border-fd-primary/40 bg-fd-primary/5 px-5 py-7">
              <Logo className="size-[86px]" />
              <span className="text-[22px] font-semibold tracking-tight">
                Arkitekt
              </span>
              <span className="text-center text-[15px] leading-snug text-fd-muted-foreground">
                the backend it is looking at
              </span>
            </div>
          </div>

          <Panel tone="primary">
            Alone, the viewer is a renderer and the platform is storage with a
            schema. Together they are the row nothing on that table had:
            Orkestrator draws what it is handed, Arkitekt knows where every
            chunk lives and what may be run on it.
          </Panel>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Live demo"
        title="Open some Gigabystes"
        lead="quickly, from home"
        notes="Nothing was prepared for this recording — the dataset is the one the microscope wrote. Say that over the top of it rather than putting it on the slide."
      >
        <div className="flex flex-1 items-center justify-center">
          <DemoVideo
            src="/presentations/volume-viewer/open-a-volume.mp4"
            height={486}
            ratio={1600 / 832}
          />
        </div>
      </DeckSlide>

      <SectionSlide
        title="How does that work?"
        lead="The rest of this is the background."
      />

      <DeckSlide
        eyebrow="Background"
        title="The array was never one file"
        lead="A single compressed stack is indivisible — to see one plane you fetch all of it. Zarr stores the same array as a grid of independently addressable chunks."
        notes="Be fair if challenged: a *tiled* TIFF can be range-read. The left-hand case is deliberately a gzipped stack — one deflate stream, where no byte range is decodable and nothing says where a plane starts. That is the common case in a lab, not a strawman about TIFF in general."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <div className="flex justify-end">
            <BrandMark
              src="/presentations/volume-viewer/logo-zarr.png"
              name="Zarr"
            />
          </div>
          <Figure className="max-w-[720px]">
            <WholeFileVsChunksFigure />
          </Figure>
          <Caption>
            Both sides start at the same moment. A chunk is fetchable on its own,
            by name, over HTTP — so the right-hand tab draws while the left one
            is still counting bytes.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Background"
        title="And it was written at several resolutions"
        lead="An octree: one coarse block that subdivides, eight ways at a time, wherever detail is actually wanted — and only ever so many nodes at once, because the screen is the budget."
        notes="Hover the block and let it refine while you talk — the cursor is standing in for the camera. Only the octant under it splits; everywhere else stays coarse, and refining somewhere new drops the oldest refinement. You cannot draw more than a screen's worth of detail, so it never tries: the coarsest level that still looks right is the one it asks for."
      >
        <div className="flex flex-1 items-center">
          <OctreeFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Background"
        title="What happens between moving and seeing"
        lead="One pass of the loop, and it is deliberately cheap. The Python API is asked once when the layer loads — for the layout, never for pixels — and after that most passes end at the cache."
        notes="Trace the fast path first, then the detour, then the dashed edge. The GraphQL API is Python and it is nowhere near the hot loop: it answers where the bricks are and how the spaces relate, once. Nothing here renders on a server and nothing decodes on the main thread. And the quiet part — the bottom row runs once per brick, ever."
      >
        <div className="flex min-h-0 flex-1 flex-col justify-center gap-3">
          <PipelineFlow />
          <Caption>
            The dashed edge is the only one that touches the platform, and it is
            asked once per layer: where the bricks live and how the spaces
            relate. Every frame after that is fetch, decode, upload — or, most
            of the time, nothing at all.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Background"
        title="A scene is more than the voxels"
        lead="Four kinds of resident, drawn over one another: the image, the mask segmented from it, the meshes built from that, and whatever you marked yourself. Each lives in its own space, and the coordinate graph is what makes them line up."
        notes="Fake data — this is the shape of a scene, not a screenshot. The point is that nothing here was baked into a combined file; they are separate residents composed at draw time."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <Figure>
            <LayerStackFigure />
          </Figure>
          <Caption>
            Nothing was flattened together to make this. Each layer keeps its
            own space and its own level of detail, and the viewer composes the
            path from each one into the scene with <Term>pathToWorld</Term> — so
            refine a registration and everything that reaches the scene through
            that edge moves with it, including the annotation you drew an hour
            ago.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The payoff"
        title="How to annotate in 3D"
        lead="On a plane you click a pixel. In a volume a click is a ray, and the question is which voxel along it you meant."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <Figure>
            <RaycastFigure />
          </Figure>
          <Caption>
            The viewer marches the ray and stops at the first sample your
            opacity settings make visible — so what you annotate is what you
            were looking at, not the first thing the ray happened to touch.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The payoff"
        title="Annotate by probing"
        notes="Play it twice — once watching the readout follow the cursor, once watching the mark land. The probe costs nothing: the plan was fetched when the layer loaded, and the ray is marched on the GPU, inside Orkestrator."
      >
        <div className="flex flex-1 items-center justify-center">
          <DemoVideo
            src="/presentations/volume-viewer/annotate-by-probing.mp4"
            height={470}
            ratio={1600 / 832}
          />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The other half"
        title="Meshes are a different problem"
        lead="Surfaces do not behave like voxels. One traced neuron, surfaced at full resolution, is already more geometry than an engine will take in a single buffer — and that is one object, not a scene full of them."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <Figure>
            <MeshBlowupFigure />
          </Figure>
          <Caption>
            And you cannot solve it the way you solved the volume: a chunked
            array has a grid to ask along, a mesh is irregular geometry with
            nothing to slice by. Games solved this — Nanite virtualises geometry
            down to the triangle — but that is an engine team and years of work.
            We are not going to reinvent it inside Orkestrator.
          </Caption>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The other half"
        title={
          <>
            So: <span className="text-fd-primary">fabriks</span>
          </>
        }
        lead="A wire format that gives a mesh collection the grid it never had. fabriks partitions surfaces into an octree of Parquet cells — level 0 full detail, each coarser level merging eight cells into one at a quarter of the faces — and the camera plans which cell to draw at which level."
        notes="Point out the seam: a coarse cell touching a fine one keeps the fine vertices along that edge. That is what stops the cracks."
      >
        <div className="flex flex-1 items-center">
          <MeshLodFigure />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="The other half"
        title="Meshes, in the viewer"
        notes="Watch the silhouettes tighten as cells drop to level 0 near the camera, and watch the boundaries: nothing pops at a cell edge, because the boundary vertices are shared."
      >
        <div className="flex flex-1 items-center justify-center">
          <DemoVideo
            src="/presentations/volume-viewer/example-meshes.mp4"
            height={470}
            ratio={1600 / 832}
          />
        </div>
      </DeckSlide>


      <SectionSlide
        title="Examples"
        lead="The same viewer, pointed at real data. But not confocal"
      />

      <DeckSlide
        eyebrow="Example 01"
        title="FLIM Data"
        lead="You can choose the renderer on the fly"
        notes="Nothing was prepared for this recording — the dataset is the one the microscope wrote. Say that over the top of it rather than putting it on the slide."
      >
        <div className="flex flex-1 items-center justify-center">
          <DemoVideo
            src="/presentations/volume-viewer/flim-data.mp4"
            height={486}
            ratio={1600 / 832}
          />
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Example 02"
        title="Large scale whole-slide imaging"
        lead="Thousands of tiles, acquired over hours, placed into one slide space. Pan across the whole section, then zoom to a nucleus without ever leaving the viewer."
      >
        <div className="flex flex-1 flex-col justify-center gap-3">
          <DemoVideo
            src="/presentations/volume-viewer/whole-slide-imaging.mp4"
            height={486}
            ratio={1600 / 832}
          />
        </div>
      </DeckSlide>

  

      <DeckSlide
        eyebrow="Limitations"
        title="Where this does not reach — yet"
        lead="The honest version, so nobody discovers these on stage."
        notes="DRAFT — the first two are documented in design/security/performance.mdx; the rest are my guesses. Correct before presenting."
      >
        <div className="grid flex-1 grid-cols-2 content-center gap-4">
          <Panel title="throughput is the ceiling">
            <span className="text-[18px] leading-snug">
              Storage moving bytes is the bottleneck, not the API. It depends on your internet.
            </span>
          </Panel>
          <Panel title="first look is the slow one">
            <span className="text-[18px] leading-snug">
              Nothing is cached until you have been somewhere. Moving fast
              through unvisited regions is where you feel the network.
            </span>
          </Panel>
          <Panel title="your machine has a budget too">
            <span className="text-[18px] leading-snug">
              GPU memory is finite and if your computer is old its not goign to be fun.
            </span>
          </Panel>
          <Panel title="it needs a pyramid">
            <span className="text-[18px] leading-snug">
              We need to convert out data first.
            </span>
          </Panel>
        </div>
      </DeckSlide>

      <DeckSlide
        eyebrow="Next"
        title="Where to go from here"
        lead="Open something big and try to make it stutter."
      >
        <div className="grid flex-1 grid-cols-3 content-center gap-4">
          <Panel title="open your own data" tone="primary">
            <span className="text-[18px] leading-snug">
              Lets test it with way more data
            </span>
          </Panel>
          
        </div>
      </DeckSlide>
    </DeckFrame>
  );
}
