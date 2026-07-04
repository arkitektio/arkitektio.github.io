'use client';

import dynamic from 'next/dynamic';
import { Suspense, useLayoutEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Model as FairinoRobot } from './three/robot';
import { toThreeColor } from './resolve-color';

/**
 * A stripped-down react-three-fiber vignette for the observable-state card: just
 * the Fairino FR5 arm on its mount, slewing gently on its base. No controller
 * node, no command packets. The surrounding card already tells the "live state"
 * story, so here we only want the robot itself.
 *
 * Accent colours are pulled from the live `--color-fd-primary` brand variable so
 * the scene re-tints with the rest of the site.
 */

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
  const ringMat = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // The arm slews gently on its base (axis-1), wandering as if working a
    // task. Pivots at the base (see grounding above), so no weird orbiting.
    if (arm.current) {
      arm.current.rotation.y = Math.sin(t * 0.3) * 0.5 + Math.sin(t * 0.13) * 0.25;
    }

    // soft breathing pulse on the brand status ring
    if (ringMat.current) {
      ringMat.current.emissiveIntensity = 0.6 + (Math.sin(t * 1.6) * 0.5 + 0.5) * 0.6;
    }
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

      {/* ───────────── Fairino arm on its mount ───────────── */}
      <group position={[0, 0, 0]}>
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

      {/* ───────────── lighting ───────────── */}
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <directionalLight position={[-4, 3, -3]} intensity={0.35} />
      <pointLight
        position={[2, 3, 2]}
        color={brand}
        intensity={1.2}
        distance={9}
      />
    </group>
  );
}

function Scene() {
  const brand = useBrandColor();
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [3.6, 2.6, 4.4], fov: 40 }}
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
        target={[0, 1.35, 0]}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.05}
      />
    </Canvas>
  );
}

// Canvas/three touch the DOM and WebGL, so this must never run during the
// static prerender.
export const RobotStateScene = dynamic(() => Promise.resolve(Scene), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-sm text-fd-muted-foreground">
      Loading scene…
    </div>
  ),
});

export default RobotStateScene;
