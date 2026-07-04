'use client';

import dynamic from 'next/dynamic';
import { Suspense, useLayoutEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Model as FairinoRobot } from './three/robot';
import { toThreeColor } from './resolve-color';

/**
 * A small react-three-fiber vignette for the home page: a controller "node" on
 * the left streams command packets to a Fairino FR5 robot arm on the right,
 * which sweeps its base and flashes its mount each time a command lands. It's a
 * literal little staging of Arkitekt's middleman story: one machine driving an
 * instrument sitting on another.
 *
 * Accent colours are pulled from the live `--color-fd-primary` brand variable so
 * the scene re-tints with the rest of the site.
 */

const EMITTER = new THREE.Vector3(-3.2, 1.35, 0.15); // node screen
const RECEIVER = new THREE.Vector3(1.5, 1.5, 0); // robot mount
const PACKETS = 6;

/** Resolve the brand CSS variable (which may be oklch) to an rgb() string. */
function readBrandColor(fallback = '#7c6cff') {
  if (typeof document === 'undefined') return fallback;
  const probe = document.createElement('span');
  probe.style.color = 'var(--color-fd-primary)';
  probe.style.display = 'none';
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  document.body.removeChild(probe);
  return toThreeColor(resolved, fallback);
}

// Read once on mount (this component is client-only via dynamic ssr:false, so
// the brand hue has already been applied to :root by then).
function useBrandColor() {
  const [color] = useState(readBrandColor);
  return color;
}

/**
 * The Fairino arm (gltfjsx component in ./three/Robot), normalised to a
 * consistent size and grounded on its base. The CAD export comes in arbitrary
 * units/placement, so once the geometry has loaded we measure it and rescale +
 * recentre the wrapper imperatively (no re-render needed).
 */
function FairinoModel() {
  const inner = useRef<THREE.Group>(null);
  useLayoutEffect(() => {
    const g = inner.current;
    if (!g) return;
    g.scale.setScalar(1);
    g.position.set(0, 0, 0);
    g.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(g);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    g.scale.setScalar(3 / maxDim);
    g.updateMatrixWorld(true);
    const grounded = new THREE.Box3().setFromObject(g);
    // Keep the arm's own base axis on the wrapper origin (the model's local
    // origin sits at the base plate) and only lift it onto the floor. Do NOT
    // recentre on the bounding box, or the base slew below pivots around the
    // box centre and the whole arm appears to orbit instead of rotate in place.
    g.position.set(0, -grounded.min.y, 0);
  }, []);

  return (
    <group ref={inner} scale={0.001}>
      <FairinoRobot />
    </group>
  );
}

function RobotWorld({ brand }: { brand: string }) {
  const arm = useRef<THREE.Group>(null);
  const packets = useRef<THREE.Mesh[]>([]);
  const screenMat = useRef<THREE.MeshStandardMaterial>(null);
  const ringMat = useRef<THREE.MeshStandardMaterial>(null);
  const nodeLight = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // ── command packets travelling node → arm ──
    let arrival = 0;
    for (let i = 0; i < packets.current.length; i++) {
      const p = packets.current[i];
      if (!p) continue;
      const frac = ((t / 2) * 0.9 + i / PACKETS) % 1;
      p.position.lerpVectors(EMITTER, RECEIVER, frac);
      p.position.y += Math.sin(frac * Math.PI) * 0.9; // arc up and over
      p.scale.setScalar(0.55 + Math.sin(frac * Math.PI) * 0.6);
      if (frac > 0.86) arrival = Math.max(arrival, (frac - 0.86) / 0.14);
    }

    // ── arm reacts: it slews on its base (axis-1), wandering as if working a
    // task, and turns a touch further toward the controller as each command
    // lands. Pivots at the base (see grounding above), so no weird orbiting. ──
    if (arm.current) {
      const slew = Math.sin(t * 0.3) * 0.5 + Math.sin(t * 0.13) * 0.25;
      arm.current.rotation.y = slew + arrival * 0.25;
    }

    // node pulses as it emits; the mount ring flares as commands land
    const emit = 1.4 + Math.sin(t * 3) * 0.5;
    if (screenMat.current) screenMat.current.emissiveIntensity = emit;
    if (nodeLight.current) nodeLight.current.intensity = 1.2 + emit * 0.6;
    if (ringMat.current) ringMat.current.emissiveIntensity = 0.6 + arrival * 5;
  });

  return (
    <group>
      <Grid
        position={[0, 0, 0]}
        args={[24, 24]}
        cellSize={0.6}
        cellThickness={0.6}
        cellColor="#33343d"
        sectionSize={3}
        sectionThickness={1}
        sectionColor={brand}
        fadeDistance={24}
        fadeStrength={1.2}
        infiniteGrid
      />

      {/* ───────────── controller node ───────────── */}
      <group position={[-3.4, 0, 0]}>
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[1.2, 0.1, 0.95]} />
          <meshStandardMaterial color="#26272d" roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.6, -0.15]}>
          <boxGeometry args={[0.12, 1.05, 0.12]} />
          <meshStandardMaterial color="#26272d" />
        </mesh>
        <group position={[0, 1.2, 0]} rotation={[0, 0.4, 0]}>
          <mesh>
            <boxGeometry args={[1.5, 1, 0.12]} />
            <meshStandardMaterial color="#15161b" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0, 0.07]}>
            <planeGeometry args={[1.32, 0.82]} />
            <meshStandardMaterial
              ref={screenMat}
              color={brand}
              emissive={brand}
              emissiveIntensity={1.4}
              toneMapped={false}
            />
          </mesh>
        </group>
        <mesh position={[0, 0.13, 0.5]} rotation={[-0.12, 0, 0]}>
          <boxGeometry args={[0.95, 0.05, 0.36]} />
          <meshStandardMaterial color="#202127" />
        </mesh>
      </group>

      {/* ───────────── Fairino arm on its mount ───────────── */}
      <group position={[1.5, 0, 0]}>
        {/* mount plate */}
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[0.78, 0.9, 0.12, 36]} />
          <meshStandardMaterial color="#1b1c22" roughness={0.7} />
        </mesh>
        {/* brand status ring */}
        <mesh position={[0, 0.135, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.03, 36]} />
          <meshStandardMaterial
            ref={ringMat}
            color={brand}
            emissive={brand}
            emissiveIntensity={0.6}
            toneMapped={false}
          />
        </mesh>
        {/* the arm, base-swept */}
        <group ref={arm} position={[0, 0.15, 0]}>
          <Suspense fallback={null}>
            <FairinoModel />
          </Suspense>
        </group>
      </group>

      {/* ───────────── command packets ───────────── */}
      {Array.from({ length: PACKETS }).map((_, i) => (
        <mesh
          key={i}
          ref={(m) => {
            if (m) packets.current[i] = m;
          }}
        >
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial
            color={brand}
            emissive={brand}
            emissiveIntensity={2.6}
            toneMapped={false}
          />
        </mesh>
      ))}

      {/* ───────────── lighting ───────────── */}
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <directionalLight position={[-4, 3, -3]} intensity={0.35} />
      <pointLight
        ref={nodeLight}
        position={[-3.2, 1.3, 0.6]}
        color={brand}
        intensity={1.5}
        distance={7}
      />
    </group>
  );
}

function Scene() {
  const brand = useBrandColor();
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [5.5, 3.6, 7], fov: 42 }}
      gl={{ antialias: true }}
      style={{ background: 'transparent' }}
    >
      <RobotWorld brand={brand} />
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.3}
        target={[0, 1.1, 0]}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.05}
      />
    </Canvas>
  );
}

// Canvas/three touch the DOM and WebGL, so this must never run during the
// static prerender.
export const RobotScene = dynamic(() => Promise.resolve(Scene), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-sm text-fd-muted-foreground">
      Loading scene…
    </div>
  ),
});

export default RobotScene;
