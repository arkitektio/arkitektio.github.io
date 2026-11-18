'use client';

/* The devices as 3D models: the openUC2 FRAME next to "the microscope, as an
   app", and the Fairino arm (arkirino). Same files as in Kim's dream. The
   still ones are drawn once and left standing; the moving arm follows a list
   of moves, once or on a loop. */

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { asset } from '@/lib/base-path';

const DRACO = asset('/threed/draco/');
/* The arm's joint axes (each in its joint's own frame) and the pose it is
   shown in, mid-reach: the same numbers as in the dream. */
const ARM_AXES: [number, number, number][] = [
  [0, 1, 0],
  [0.812548, 0, 0.582894],
  [0.812548, 0, 0.582894],
  [0.812548, 0, 0.582894],
  [0.120036, 0.978566, -0.16733],
  [0.812548, 0, 0.582894],
];
const ARM_POSE = [1.0689, -0.5223, 0.0105, 0.7196, -1.0686, -0.2081];
/** The arm's named poses, in radians from folded, joint_1 at the base. */
export const ARM_POSES = {
  home: [0, 0, 0, 0, 0, 0],
  to_ot2: ARM_POSE,
  to_scope: [1.6881, -0.3557, -0.4645, 1.0274, -1.688, -0.2074],
  /* half way between the two, lifted clear */
  between: [1.3785, -0.62, -0.227, 0.8735, -1.3783, -0.2078],
};
export type ArmMove = { at: number; to: keyof typeof ARM_POSES; takes?: number };
const MODELS = {
  frame: { url: asset('/threed/frame3_lite.glb'), turn: Math.PI * 1.2, pose: undefined as number[] | undefined },
  arm: { url: asset('/threed/fairino_robot.glb'), turn: Math.PI * 0.2, pose: ARM_POSE },
};
type Device = keyof typeof MODELS;

function Model({ device }: { device: Device }) {
  const { url, turn, pose } = MODELS[device];
  const { scene } = useGLTF(url, DRACO);
  /* a copy: the dream slide shows the same file, and an object has one parent.
     Centred on the origin and scaled to a bit over half a unit, whatever the file's own
     origin and size are. */
  const { model, offset, scale } = useMemo(() => {
    const copy = scene.clone(true);
    pose?.forEach((angle, i) => copy.getObjectByName(`joint_${i + 1}`)?.quaternion.setFromAxisAngle(new THREE.Vector3(...ARM_AXES[i]).normalize(), angle));
    copy.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(copy);
    const size = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());
    return { model: copy, offset: centre.multiplyScalar(-1), scale: 0.62 / Math.max(size.x, size.y, size.z) };
  }, [scene, pose]);
  return (
    <group rotation={[0, turn, 0]} scale={scale}>
      <primitive object={model} position={offset} />
    </group>
  );
}

function Scene({ className, device = 'frame' }: { className?: string; device?: Device }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  /* mount the canvas the first time the slide comes up, not for every slide in the deck */
  useEffect(() => {
    const section = wrap.current?.closest('section');
    if (!section) {
      setSeen(true);
      return;
    }
    const check = () => {
      if (section.classList.contains('present')) setSeen(true);
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(section, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={wrap} className={className} aria-hidden>
      {seen ? (
        /* offsetSize: the deck is scaled with a CSS transform, which the default measuring would count twice */
        <Canvas dpr={[1, 2]} frameloop="demand" resize={{ offsetSize: true }} camera={{ position: [0.85, 0.55, 1.1], fov: 30, near: 0.05, far: 20 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }} onCreated={({ camera }) => camera.lookAt(0, 0, 0)}>
          <ambientLight intensity={1.2} />
          <hemisphereLight args={['#ffffff', '#cbd5e1', 0.9]} />
          <directionalLight position={[2, 3, 1.5]} intensity={1.6} />
          <Suspense fallback={null}>
            <Model device={device} />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
}

/* Canvas and three touch the DOM and WebGL, so this never runs in the static prerender. */
export const FrameModel3D = dynamic(() => Promise.resolve(Scene), { ssr: false });

function ArmScene({ className }: { className?: string }) {
  return <Scene className={className} device="arm" />;
}
export const ArmModel3D = dynamic(() => Promise.resolve(ArmScene), { ssr: false });

/* --- the arm, moving ---------------------------------------------------------- */

const smooth = (u: number) => u * u * (3 - 2 * u);

/** The arm, driven by a list of moves on a clock that starts when its slide
    comes up: at `at` seconds it starts towards the pose `to`. */
function MovingArm({ moves, startRef, loop }: { moves: ArmMove[]; startRef: React.RefObject<number>; loop?: number }) {
  const { scene } = useGLTF(MODELS.arm.url, DRACO);
  const { model, offset, scale, joints } = useMemo(() => {
    const copy = scene.clone(true);
    copy.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(copy);
    const size = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());
    return {
      model: copy,
      // keep the base where it is and leave room to reach
      offset: new THREE.Vector3(-centre.x, -box.min.y, -centre.z),
      scale: 0.5 / Math.max(size.x, size.y, size.z),
      joints: ARM_AXES.map((axis, i) => ({ node: copy.getObjectByName(`joint_${i + 1}`), axis: new THREE.Vector3(...axis).normalize() })),
    };
  }, [scene]);
  useFrame(({ clock }) => {
    const since = clock.elapsedTime - startRef.current;
    // on a loop the moves repeat every `loop` seconds, each round starting where the last one ended
    const t = loop ? since % loop : since;
    let pose = loop ? ARM_POSES[moves[moves.length - 1].to] : ARM_POSES.home;
    for (const move of moves) {
      if (t < move.at) break;
      const target = ARM_POSES[move.to];
      const u = smooth(Math.min(1, (t - move.at) / (move.takes ?? 1.4)));
      pose = pose.map((from, i) => from + (target[i] - from) * u);
    }
    joints.forEach(({ node, axis }, i) => node?.quaternion.setFromAxisAngle(axis, pose[i]));
  });
  return (
    <group rotation={[0, Math.PI * 0.15, 0]} scale={scale} position={[0, -0.22, 0]}>
      <primitive object={model} position={offset} />
    </group>
  );
}

/** Starts the arm's clock over every time the slide comes up. */
function Restart({ startRef, token }: { startRef: React.RefObject<number>; token: number }) {
  const seen = useRef(-1);
  useFrame(({ clock }) => {
    if (seen.current === token) return;
    seen.current = token;
    startRef.current = clock.elapsedTime;
  }, -1);
  return null;
}

function MovingScene({ className, moves, loop }: { className?: string; moves: ArmMove[]; loop?: number }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [arrivals, setArrivals] = useState(0);
  const startRef = useRef(0);
  useEffect(() => {
    const section = wrap.current?.closest('section');
    if (!section) return;
    let was = false;
    const check = () => {
      const on = section.classList.contains('present');
      if (on && !was) setArrivals((n) => n + 1);
      was = on;
      setActive(on);
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(section, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={wrap} className={className} aria-hidden>
      {arrivals > 0 ? (
        <Canvas dpr={[1, 2]} frameloop={active ? 'always' : 'never'} resize={{ offsetSize: true }} camera={{ position: [0.75, 0.42, 1.0], fov: 30, near: 0.05, far: 20 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }} onCreated={({ camera }) => camera.lookAt(0, 0.05, 0)}>
          <ambientLight intensity={1.3} />
          <hemisphereLight args={['#ffffff', '#94a3b8', 0.9]} />
          <directionalLight position={[2, 3, 1.5]} intensity={1.8} />
          <Suspense fallback={null}>
            <Restart startRef={startRef} token={arrivals} />
            <MovingArm moves={moves} startRef={startRef} loop={loop} />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
}

export const ArmMoving3D = dynamic(() => Promise.resolve(MovingScene), { ssr: false });
