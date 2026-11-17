'use client';

/* openUC2's idea in 3D: a fluorescence microscope built from cubes, as
   Optikit exports it (`optikit-fluorescence.glb`, generator `optikit_dsn`).
   Each top-level node of the design is one cube (or the stage, or the
   controller) on the 50 mm grid; inside each cube, a `skeleton` (the housing)
   and a `mounted_*` insert (mirror, dichroic, lens, fiber holder, camera).

   On arrival the cubes drop in together (one quick ripple), black as they
   are on the bench, and the build turns slowly. A click on the scene fades
   the housings to transparent so the optics inside show; another click
   brings them back. */

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { asset } from '@/lib/base-path';
import { useKeySteps } from './smart-microscopy-anim';

const MODEL = asset('/threed/optikit-fluorescence.glb');

/** The order the parts snap in: the light's way through the build, then the
    stage and the controller. Names are the design's top-level nodes. */
export const CUBE_ORDER = [
  'fiber_holder',
  'blue_laser',
  'laser_mirror',
  'dichroic',
  'objective',
  'sample_mirror',
  'sample_stage',
  'camera',
  'electronics_controller',
] as const;

/** When the cube at `i` in `CUBE_ORDER` lands, in seconds after arrival: a
    ripple of well under a second, not a build to wait for. */
export const landsAt = (i: number) => 0.15 + i * 0.05;
const DROP = 0.45;
const SETTLED = landsAt(CUBE_ORDER.length - 1) + DROP;

type Time = RefObject<number>;

/** A material per kind of part, picked by the mesh's node name. Everything
    is black or dark grey, as the cubes are on the bench; only the optics
    have colour, and a little glow so they read through the housings once
    those fade. */
function materials() {
  const glass = (color: string, opacity: number) =>
    new THREE.MeshPhysicalMaterial({ color, transparent: true, opacity, roughness: 0.1, metalness: 0, emissive: color, emissiveIntensity: 0.35, depthWrite: false });
  return {
    /* faded by the frame loop: opaque black, see-through after a click */
    housing: new THREE.MeshStandardMaterial({ color: '#0b0b0c', transparent: true, opacity: 1, roughness: 0.45, side: THREE.DoubleSide }),
    insert: new THREE.MeshStandardMaterial({ color: '#27272a', transparent: true, opacity: 1, roughness: 0.6 }),
    mirror: new THREE.MeshStandardMaterial({ color: '#f1f5f9', metalness: 0.9, roughness: 0.12, emissive: '#cbd5e1', emissiveIntensity: 0.3 }),
    dichroic: glass('#f59e0b', 0.85),
    emission: glass('#22c55e', 0.85),
    lens: glass('#38bdf8', 0.85),
    camera: new THREE.MeshStandardMaterial({ color: '#111113', roughness: 0.5 }),
    laser: new THREE.MeshStandardMaterial({ color: '#18181b', roughness: 0.5 }),
    dark: new THREE.MeshStandardMaterial({ color: '#18181b', roughness: 0.6 }),
    stage: new THREE.MeshStandardMaterial({ color: '#3f3f46', roughness: 0.45, metalness: 0.4 }),
    board: new THREE.MeshStandardMaterial({ color: '#18181b', roughness: 0.7 }),
  };
}

function pick(name: string, m: ReturnType<typeof materials>) {
  if (name.includes('skeleton')) return m.housing;
  if (name.includes('dichroic_filter')) return m.dichroic;
  if (name.includes('emission_filter')) return m.emission;
  if (name.includes('mirror__mirror')) return m.mirror;
  if (name.includes('lens__part') || name.includes('lens__lens')) return m.lens;
  if (name.startsWith('camera__camera')) return m.camera;
  if (name.startsWith('blue_laser')) return m.laser;
  if (name.includes('motor')) return m.dark;
  if (name.startsWith('electronics')) return m.board;
  if (name.startsWith('sample_stage')) return m.stage;
  return m.insert;
}

/** 0 to 1 with a little overshoot. */
function backOut(u: number) {
  const v = Math.min(1, Math.max(0, u)) - 1;
  return 1 + 2.7 * v * v * v + 1.7 * v * v;
}

function Build({ timeRef, xrayRef }: { timeRef: Time; xrayRef: RefObject<boolean> }) {
  const { scene } = useGLTF(MODEL);
  const model = useMemo(() => scene.clone(true), [scene]);
  const turn = useRef<THREE.Group>(null);
  const offset = useRef<THREE.Group>(null);
  const parts = useRef<{ node: THREE.Object3D; home: THREE.Vector3; out: THREE.Vector3 }[]>([]);
  const mats = useRef<ReturnType<typeof materials> | null>(null);
  /* how far the housings have faded, 0 to 1 */
  const faded = useRef(0);

  useLayoutEffect(() => {
    const m = materials();
    mats.current = m;
    model.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.material = pick(mesh.name || mesh.parent?.name || '', m);
        mesh.renderOrder = mesh.material === m.housing ? 2 : 1;
      }
    });
    /* centre the build on the origin, sitting on y = 0 */
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    const c = box.getCenter(new THREE.Vector3());
    offset.current?.position.set(-c.x, -box.min.y, -c.z);
    /* each part comes in from above (the design is Z-up under its root) and a
       little from outside */
    const root = model.children[0];
    const mid = new THREE.Vector3(0.075, 0, 0);
    parts.current = CUBE_ORDER.flatMap((name) => {
      const node = root?.getObjectByName(name);
      if (!node) return [];
      const home = node.position.clone();
      const out = home.clone().sub(mid).setZ(0).multiplyScalar(0.5).add(new THREE.Vector3(0, 0, 0.16));
      return [{ node, home, out }];
    });
    return () => Object.values(m).forEach((mat) => mat.dispose());
  }, [model]);

  useFrame((_, dt) => {
    const t = timeRef.current;
    parts.current.forEach(({ node, home, out }, i) => {
      const u = (t - landsAt(i)) / DROP;
      /* once in, a cube stays put */
      const lift = u >= 1 ? 0 : 1 - backOut(u);
      const scale = u <= 0 ? 0.0001 : Math.min(1, 0.6 + u);
      node.position.copy(home).addScaledVector(out, lift);
      node.scale.setScalar(scale);
    });
    /* black cubes; on a click the housings fade and the optics show */
    const m = mats.current;
    if (m) {
      faded.current = THREE.MathUtils.damp(faded.current, xrayRef.current ? 1 : 0, 3.5, dt);
      const u = Math.min(1, Math.max(0, faded.current));
      const xray = u * u * (3 - 2 * u);
      m.housing.opacity = 1 - 0.95 * xray;
      m.insert.opacity = 1 - 0.85 * xray;
      m.housing.depthWrite = m.housing.opacity > 0.98;
      m.insert.depthWrite = m.insert.opacity > 0.98;
    }
    if (turn.current) turn.current.rotation.y = -0.6 + Math.sin(t * 0.25) * 0.55 + Math.min(t, SETTLED) * 0.05;
  });

  return (
    <group ref={turn}>
      <group ref={offset}>
        <primitive object={model} />
      </group>
    </group>
  );
}

function Ticker({ timeRef }: { timeRef: Time }) {
  useFrame((_, dt) => {
    timeRef.current += Math.min(dt, 0.1);
  }, -1);
  return null;
}

/** The canvas, drawing only while its slide is the one on screen. */
function Scene({ className }: { className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [seen, setSeen] = useState(false);
  const timeRef = useRef(0);
  const xrayRef = useRef(false);
  /* one press of "next" fades the housings */
  const { step, marks } = useKeySteps(1);
  const xray = step > 0;
  useEffect(() => {
    xrayRef.current = xray;
  }, [xray]);
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
        /* every arrival starts over: the cubes drop in, black */
        /* no drop-in: the microscope stands assembled */
        timeRef.current = SETTLED + 1;
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
      aria-label="A fluorescence microscope built from openUC2 cubes, in 3D, as exported by Optikit: a fiber holder, a laser, a mirror, a dichroic, an objective, a second mirror, the sample stage, a camera and the controller, as black cubes, turning slowly. A key press fades the black housings to transparent, and the optics inside show: the mirrors, the dichroic and emission filters and the lenses."
    >
      {marks}
      {seen ? (
        <Canvas dpr={[1, 2]} frameloop={active ? 'always' : 'never'} resize={{ offsetSize: true }} camera={{ position: [0.3, 0.25, 0.38], fov: 32, near: 0.01, far: 10 }} onCreated={({ camera }) => camera.lookAt(0, 0.085, 0)} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
          <ambientLight intensity={1.1} />
          <hemisphereLight args={['#ffffff', '#cbd5e1', 0.8]} />
          <directionalLight position={[1, 2, 1.2]} intensity={1.8} />
          <directionalLight position={[-1.2, 0.8, -1]} intensity={0.6} />
          <Suspense fallback={null}>
            <Ticker timeRef={timeRef} />
            <Build timeRef={timeRef} xrayRef={xrayRef} />
          </Suspense>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]}>
            <circleGeometry args={[0.16, 64]} />
            <meshBasicMaterial color="#94a3b8" transparent opacity={0.12} />
          </mesh>
        </Canvas>
      ) : null}
      {xray ? null : (
        <span aria-hidden className="pointer-events-none absolute bottom-3 left-4 rounded-full border border-fd-border bg-fd-card/80 px-2.5 py-1 font-mono text-[11px] text-fd-muted-foreground">
          → · look inside
        </span>
      )}
    </div>
  );
}

export const OptikitCubes3D = dynamic(() => Promise.resolve(Scene), { ssr: false });
