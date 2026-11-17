'use client';

/* Kim's dream, in 3D: the robot arm, the OT-2 and the openUC2 FRAME, standing
   where they stand in the lab, doing the running for her, in a cloud of
   sparkles.

   The three models are the ones the Helsinki demo uses (testing/testdata):
   `fairino_robot.glb` (the FR5 with its six joints as nodes, axes in the
   file's `extras.arkitekt.joints`), `opentrons_parts.glb` (the OT-2 with its
   gantry and pipettes as nodes) and `frame3_lite.glb` (the FRAME with its
   stage and light as nodes, Draco-compressed; the decoder is served from
   /threed/draco). Placements and arm poses are that demo's too. */

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { asset } from '@/lib/base-path';
import { useKeySteps } from './smart-microscopy-anim';

const ARM = asset('/threed/fairino_robot.glb');
const OT2 = asset('/threed/opentrons_parts.glb');
const FRAME = asset('/threed/frame3_lite.glb');
const DRACO = asset('/threed/draco/');

/* Where each device stands in the lab, in metres, Y up (the FRAME is turned
   half round about Y). */
const AT = {
  arm: [0.8017, 0.0072, 0.15],
  ot2: [0.2826, -0.0028, 0.3096],
  frame: [0.7909, 0.0072, 0.548],
} as const;
const CENTER: [number, number, number] = [0.52, 0.27, 0.33];

/* The arm's joint axes, in each joint's own frame, and the poses it moves
   between: radians from the folded pose, joint_1 at the base. */
const AXES: [number, number, number][] = [
  [0, 1, 0],
  [0.812548, 0, 0.582894],
  [0.812548, 0, 0.582894],
  [0.812548, 0, 0.582894],
  [0.120036, 0.978566, -0.16733],
  [0.812548, 0, 0.582894],
];
const POSE = {
  home: [0, 0, 0, 0, 0, 0],
  toOpentrons: [1.0689, -0.5223, 0.0105, 0.7196, -1.0686, -0.2081],
  toMicroscope: [1.6881, -0.3557, -0.4645, 1.0274, -1.688, -0.2074],
};

/* One round of the dream, in seconds: to the OT-2, which stains; on to the
   FRAME, which images; home. */
const ROUND = 12;
const PATH: [number, number[]][] = [
  [0, POSE.home],
  [1.5, POSE.toOpentrons],
  [4.5, POSE.toOpentrons],
  [6, POSE.toMicroscope],
  [9.5, POSE.toMicroscope],
  [11, POSE.home],
  [ROUND, POSE.home],
];
const STAINING: [number, number] = [1.7, 4.4];
const IMAGING: [number, number] = [6.2, 9.4];
/* Where the OT-2's head goes, from where it parks, in metres. */
const DECK_SPOTS: [number, number][] = [
  [-0.16, -0.14],
  [-0.06, 0],
  [0.04, 0.14],
  [-0.16, 0.14],
  [0.04, -0.14],
];

/* The dream starts empty. Each click brings one device in, popping up with
   its name and a burst of hearts; once all three are there the rounds begin.
   `anchor` is where the name floats, in the lab's metres. */
const CAST = [
  { key: 'frame', says: 'Open source microscopy', anchor: [AT.frame[0], 0.5, AT.frame[2]] },
  { key: 'ot2', says: 'Perfect automated staining', anchor: [AT.ot2[0] - 0.16, 0.74, AT.ot2[2]] },
  { key: 'arm', says: 'A universal robot arm with a slide holder', anchor: [AT.arm[0], 0.78, AT.arm[2]] },
] as const;
/* Seconds between the last device arriving and the first round. */
const SETTLE = 1.6;
const HEARTS = 8;

type Time = RefObject<number>;
/** When each of the cast was clicked in, on the dream's clock; Infinity until then. */
type Shown = RefObject<number[]>;
const NOBODY = () => CAST.map(() => Infinity);
/** When the rounds begin: a moment after the last device has arrived. */
const roundsFrom = (shown: number[]) => Math.max(...shown) + SETTLE;
/** Seconds into the current round; 0 until everyone is there. */
const roundTime = (time: number, shown: number[]) => (time > roundsFrom(shown) ? (time - roundsFrom(shown)) % ROUND : 0);
/** 0 to 1 with a little overshoot: how far a device that arrives `at` has popped up. */
const popped = (time: number, at: number) => {
  const u = Math.min(1, Math.max(0, (time - at) / 0.7));
  const v = u - 1;
  return u <= 0 ? 0 : 1 + 2.7 * v * v * v + 1.7 * v * v;
};

const within = (t: number, [from, to]: [number, number]) => t >= from && t <= to;
const smooth = (u: number) => u * u * (3 - 2 * u);

/** The FR5, moving through the round's poses, a slide at its flange. */
function Arm({ timeRef, shownRef }: { timeRef: Time; shownRef: Shown }) {
  const { scene } = useGLTF(ARM, DRACO);
  const group = useRef<THREE.Group>(null);
  const joints = useRef<{ node?: THREE.Object3D; axis: THREE.Vector3 }[]>([]);
  const slide = useMemo(() => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.004, 0.026), new THREE.MeshStandardMaterial({ color: '#f9a8d4', emissive: '#ec4899', emissiveIntensity: 1.2, toneMapped: false }));
    mesh.name = 'dream-slide';
    return mesh;
  }, []);
  useEffect(() => {
    joints.current = AXES.map((axis, i) => ({ node: scene.getObjectByName(`joint_${i + 1}`), axis: new THREE.Vector3(...axis).normalize() }));
    const tcp = scene.getObjectByName('tcp');
    tcp?.add(slide);
    return () => {
      tcp?.remove(slide);
    };
  }, [scene, slide]);

  useFrame(() => {
    group.current?.scale.setScalar(Math.max(1e-4, popped(timeRef.current, shownRef.current[2])));
    const t = roundTime(timeRef.current, shownRef.current);
    const next = Math.max(
      1,
      PATH.findIndex(([at]) => at > t),
    );
    const [t0, from] = PATH[next - 1];
    const [t1, to] = PATH[next];
    const u = smooth(Math.min(1, Math.max(0, (t - t0) / (t1 - t0))));
    joints.current.forEach(({ node, axis }, i) => node?.quaternion.setFromAxisAngle(axis, from[i] + (to[i] - from[i]) * u));
  });
  return (
    <group ref={group} position={AT.arm} scale={1e-4}>
      <primitive object={scene} />
    </group>
  );
}

/** The OT-2: its head visits the deck and its pipette dips while it stains. */
function Opentrons({ timeRef, shownRef }: { timeRef: Time; shownRef: Shown }) {
  const { scene } = useGLTF(OT2, DRACO);
  const group = useRef<THREE.Group>(null);
  const nodes = useRef<{ x?: THREE.Object3D; y?: THREE.Object3D; pipette?: THREE.Object3D }>({});
  useEffect(() => {
    nodes.current = { x: scene.getObjectByName('gantry_x'), y: scene.getObjectByName('gantry_y'), pipette: scene.getObjectByName('pipette_left') };
  }, [scene]);
  const glow = useRef<THREE.PointLight>(null);
  useFrame((_, dt) => {
    group.current?.scale.setScalar(Math.max(1e-4, popped(timeRef.current, shownRef.current[1])));
    const parts = nodes.current;
    const t = roundTime(timeRef.current, shownRef.current);
    const on = timeRef.current > roundsFrom(shownRef.current) && within(t, STAINING);
    const step = (t - STAINING[0]) / 0.55;
    const [x, y] = on ? DECK_SPOTS[Math.floor(step) % DECK_SPOTS.length] : [0, 0];
    const down = on && step % 1 > 0.5 ? 0.09 : 0;
    if (parts.x) parts.x.position.x = THREE.MathUtils.damp(parts.x.position.x, x, 9, dt);
    if (parts.y) parts.y.position.z = THREE.MathUtils.damp(parts.y.position.z, y, 9, dt);
    if (parts.pipette) parts.pipette.position.y = THREE.MathUtils.damp(parts.pipette.position.y, -down, 16, dt);
    if (glow.current) glow.current.intensity = THREE.MathUtils.damp(glow.current.intensity, on ? 1.6 : 0, 5, dt);
  });
  return (
    <group ref={group} position={AT.ot2} scale={1e-4}>
      <primitive object={scene} />
      <pointLight ref={glow} position={[0, 0.35, 0]} color="#f472b6" intensity={0} distance={1.2} />
    </group>
  );
}

/** The FRAME: its stage scans and its light is on while it images. */
function Frame({ timeRef, shownRef }: { timeRef: Time; shownRef: Shown }) {
  const { scene } = useGLTF(FRAME, DRACO);
  const group = useRef<THREE.Group>(null);
  const nodes = useRef<{ x?: THREE.Object3D; y?: THREE.Object3D; light?: THREE.Object3D }>({});
  useEffect(() => {
    /* the lamp gets materials of its own, so that only it lights up */
    scene.getObjectByName('light')?.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (!mesh.isMesh || mesh.userData.dreamLamp) return;
      const material = (mesh.material as THREE.MeshStandardMaterial).clone();
      material.emissive = new THREE.Color('#fde68a');
      material.emissiveIntensity = 0;
      mesh.material = material;
      mesh.userData.dreamLamp = true;
    });
    nodes.current = { x: scene.getObjectByName('stage_x'), y: scene.getObjectByName('stage_y'), light: scene.getObjectByName('light') };
  }, [scene]);
  const glow = useRef<THREE.PointLight>(null);
  useFrame((_, dt) => {
    group.current?.scale.setScalar(Math.max(1e-4, popped(timeRef.current, shownRef.current[0])));
    const parts = nodes.current;
    const t = roundTime(timeRef.current, shownRef.current);
    const on = timeRef.current > roundsFrom(shownRef.current) && within(t, IMAGING);
    const s = t - IMAGING[0];
    /* shown three times as far as it travels: 8 mm is little on a 30 cm device */
    if (parts.x) parts.x.position.x = THREE.MathUtils.damp(parts.x.position.x, on ? 0.024 * Math.sin(s * 3.4) : 0, 8, dt);
    if (parts.y) parts.y.position.z = THREE.MathUtils.damp(parts.y.position.z, on ? 0.024 * Math.sin(s * 1.7) : 0, 8, dt);
    parts.light?.traverse((o) => {
      const lamp = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
      if (lamp) lamp.emissiveIntensity = THREE.MathUtils.damp(lamp.emissiveIntensity, on ? 3 : 0, 6, dt);
    });
    if (glow.current) glow.current.intensity = THREE.MathUtils.damp(glow.current.intensity, on ? 1.4 : 0, 5, dt);
  });
  return (
    <group ref={group} position={AT.frame} rotation={[0, Math.PI, 0]} scale={1e-4}>
      <primitive object={scene} />
      <pointLight ref={glow} position={[0, 0.34, 0]} color="#fde68a" intensity={0} distance={1} />
    </group>
  );
}

/* The camera: off to one side and a little above, swaying slowly round the lab. */
const VIEW = { radius: 2.05, height: 0.9, azimuth: 2.48, sway: 0.42 };
const eye = (azimuth: number): [number, number, number] => [CENTER[0] + VIEW.radius * Math.sin(azimuth), CENTER[1] + VIEW.height, CENTER[2] + VIEW.radius * Math.cos(azimuth)];

function Sway({ timeRef }: { timeRef: Time }) {
  useFrame(({ camera }) => {
    camera.position.set(...eye(VIEW.azimuth + VIEW.sway * Math.sin(timeRef.current * 0.28)));
    camera.lookAt(...CENTER);
    camera.updateMatrixWorld();
  });
  return null;
}

/** The dream's clock. It sits with the models, so it only starts once they are there. */
function Ticker({ timeRef }: { timeRef: Time }) {
  useFrame((_, dt) => {
    timeRef.current += Math.min(dt, 0.1);
  }, -1);
  return null;
}

type Tags = RefObject<(HTMLDivElement | null)[]>;

/** Keeps each name over its device as the camera sways, pops it in when the
    device arrives and throws its hearts. The names are plain HTML over the
    canvas, placed in percent, so the deck's scaling does not touch them. */
function Names({ timeRef, shownRef, tagsRef }: { timeRef: Time; shownRef: Shown; tagsRef: Tags }) {
  const point = useMemo(() => new THREE.Vector3(), []);
  useFrame(({ camera }) => {
    CAST.forEach(({ anchor }, i) => {
      const tag = tagsRef.current[i];
      if (!tag) return;
      const at = shownRef.current[i];
      if (!Number.isFinite(at)) {
        for (const el of Array.from(tag.children) as HTMLElement[]) el.style.opacity = '0';
        return;
      }
      point.set(anchor[0], anchor[1], anchor[2]).project(camera);
      tag.style.left = `${(point.x + 1) * 50}%`;
      tag.style.top = `${(1 - point.y) * 50}%`;
      const since = timeRef.current - (at + 0.25);
      const pop = popped(since, 0);
      const [pill, ...hearts] = Array.from(tag.children) as HTMLElement[];
      pill.style.opacity = String(Math.min(1, pop));
      pill.style.transform = `scale(${pop})`;
      hearts.forEach((heart, h) => {
        /* a fan of hearts, thrown up and outwards one after the other, twice */
        const u = ((since - h * 0.09) / 1.25) % 1.6;
        const live = since > h * 0.09 && since < 3.6 && u < 1;
        const angle = ((h / (HEARTS - 1)) * 2 - 1) * 1.25;
        const far = (50 + (h % 3) * 22) * (1 - (1 - u) * (1 - u));
        heart.style.opacity = live ? String(Math.min(1, u * 6) * (1 - u * u)) : '0';
        heart.style.transform = `translate(-50%, -50%) translate(${Math.sin(angle) * far * 1.5}px, ${-Math.cos(angle) * far - 52}px) scale(${0.5 + u * 0.9})`;
      });
    });
  });
  return null;
}

function Dream({ timeRef, shownRef, tagsRef }: { timeRef: Time; shownRef: Shown; tagsRef: Tags }) {
  return (
    <>
      <ambientLight intensity={1.1} />
      <hemisphereLight args={['#fdf2f8', '#c4b5fd', 0.9]} />
      <directionalLight position={[2, 3, 1.5]} intensity={1.6} />
      <directionalLight position={[-2, 1.5, -2]} intensity={0.5} color="#f9a8d4" />

      <Suspense fallback={null}>
        <Ticker timeRef={timeRef} />
        <Arm timeRef={timeRef} shownRef={shownRef} />
        <Opentrons timeRef={timeRef} shownRef={shownRef} />
        <Frame timeRef={timeRef} shownRef={shownRef} />
      </Suspense>

      {/* the floor of the dream */}
      <mesh position={[CENTER[0], -0.012, CENTER[2]]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.82, 64]} />
        <meshBasicMaterial color="#f5d0fe" transparent opacity={0.28} />
      </mesh>
      <mesh position={[CENTER[0], -0.01, CENTER[2]]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 0.83, 96]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.7} />
      </mesh>

      {/* sparkles: gold everywhere, pink over the OT-2, pale blue over the FRAME, white round the arm */}
      <Sparkles position={[CENTER[0], 0.4, CENTER[2]]} count={90} scale={[1.9, 1, 1.9]} size={2.2} speed={0.5} opacity={0.95} color="#fbbf24" noise={0.6} />
      <Sparkles position={[AT.ot2[0], 0.4, AT.ot2[2]]} count={36} scale={[0.7, 0.8, 0.75]} size={1.7} speed={0.7} color="#f472b6" />
      <Sparkles position={[AT.frame[0], 0.3, AT.frame[2]]} count={30} scale={[0.45, 0.6, 0.5]} size={1.7} speed={0.7} color="#7dd3fc" />
      <Sparkles position={[AT.arm[0], 0.4, AT.arm[2]]} count={30} scale={[0.6, 0.9, 0.6]} size={1.9} speed={0.9} color="#ffffff" />

      <Sway timeRef={timeRef} />
      <Names timeRef={timeRef} shownRef={shownRef} tagsRef={tagsRef} />
    </>
  );
}

/** The canvas, drawing only while its slide is the one on screen (reveal.js
    puts `present` on that slide's section). */
function Scene({ className }: { className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [seen, setSeen] = useState(false);
  const timeRef = useRef(0);
  const shownRef = useRef<number[]>(NOBODY());
  /* how many of the cast are in: one per press of "next" */
  const { step, marks } = useKeySteps(CAST.length);
  const stepRef = useRef(step);
  /** Bring the cast in line with the step: whoever is new arrives now. */
  const cast = (n: number) => {
    shownRef.current = shownRef.current.map((at, i) => (i >= n ? Infinity : Number.isFinite(at) ? at : timeRef.current));
  };
  useEffect(() => {
    stepRef.current = step;
    cast(step);
  }, [step]);
  const tagsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const section = wrap.current?.closest('section');
    if (!section) {
      setActive(true);
      setSeen(true);
      return;
    }
    const check = () => {
      const on = section.classList.contains('present');
      setActive(on);
      if (on) {
        /* every arrival at the slide starts the dream over, empty */
        timeRef.current = 0;
        shownRef.current = NOBODY();
        cast(stepRef.current);
        setSeen(true);
      }
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(section, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={wrap}
      className={className}
      role="img"
      aria-label="Kim's dream, in 3D and full of sparkles. Three devices appear, one per key press, each with a burst of hearts: open source microscopy, perfect automated staining, a universal robot arm with a slide holder. Then the robot arm carries a slide to the Opentrons OT-2, whose pipette head moves over the deck, then on to the openUC2 FRAME microscope, whose stage scans under its light, and back home"
    >
      {marks}
      {seen ? (
        /* offsetSize: the deck is scaled with a CSS transform, which the default measuring would count twice */
        <Canvas dpr={[1, 2]} frameloop={active ? 'always' : 'never'} resize={{ offsetSize: true }} camera={{ position: eye(VIEW.azimuth), fov: 34, near: 0.05, far: 20 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
          <Dream timeRef={timeRef} shownRef={shownRef} tagsRef={tagsRef} />
        </Canvas>
      ) : null}
      {CAST.map(({ key, says }, i) => (
        <div
          key={key}
          ref={(el) => {
            tagsRef.current[i] = el;
          }}
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-0"
        >
          <span
            className="absolute bottom-0 left-0 block w-max max-w-[210px] origin-bottom rounded-2xl border-2 border-pink-300 bg-white/95 px-3 py-1.5 text-center text-[15px] font-semibold leading-tight text-pink-700 shadow-md"
            style={{ opacity: 0, translate: '-50% 0' }}
          >
            <span className="mr-1 text-pink-500">♥</span>
            {says}
          </span>
          {Array.from({ length: HEARTS }, (_, h) => (
            <span key={h} className="absolute left-0 top-0 leading-none text-pink-500" style={{ opacity: 0, fontSize: 24 + (h % 3) * 9, textShadow: '0 0 10px rgba(244,114,182,0.8)' }}>
              ♥
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/* Canvas and three touch the DOM and WebGL, so this never runs in the static prerender. */
export const DreamLab3D = dynamic(() => Promise.resolve(Scene), { ssr: false });
