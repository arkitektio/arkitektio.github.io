'use client';

/* The openUC2 FRAME, as a still 3D model: the instrument behind "the
   microscope, as an app". Same file as in Kim's dream (`frame3_lite.glb`),
   drawn once and left standing; nothing here moves. */

import dynamic from 'next/dynamic';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { asset } from '@/lib/base-path';

const FRAME = asset('/threed/frame3_lite.glb');
const DRACO = asset('/threed/draco/');

function Model() {
  const { scene } = useGLTF(FRAME, DRACO);
  /* a copy: the dream slide shows the same file, and an object has one parent.
     Centred on the origin and scaled to a bit over half a unit, whatever the file's own
     origin and size are. */
  const { model, offset, scale } = useMemo(() => {
    const copy = scene.clone(true);
    const box = new THREE.Box3().setFromObject(copy);
    const size = box.getSize(new THREE.Vector3());
    const centre = box.getCenter(new THREE.Vector3());
    return { model: copy, offset: centre.multiplyScalar(-1), scale: 0.62 / Math.max(size.x, size.y, size.z) };
  }, [scene]);
  return (
    <group rotation={[0, Math.PI * 1.2, 0]} scale={scale}>
      <primitive object={model} position={offset} />
    </group>
  );
}

function Scene({ className }: { className?: string }) {
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
            <Model />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
}

/* Canvas and three touch the DOM and WebGL, so this never runs in the static prerender. */
export const FrameModel3D = dynamic(() => Promise.resolve(Scene), { ssr: false });
