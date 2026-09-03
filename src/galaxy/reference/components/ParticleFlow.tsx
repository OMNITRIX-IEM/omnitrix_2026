"use client";

import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

export default function ParticleFlow() {
  const ref = useRef<THREE.Points>(null);

  const texture = useLoader(
    TextureLoader,
    "/circle.png"
  );

  const count = 1500;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const angle =
        Math.random() *
        Math.PI *
        2;

      const radius =
        1.2 +
        Math.random() * 0.6;

      arr[i3] =
        Math.cos(angle) *
        radius;

      arr[i3 + 1] =
        (Math.random() - 0.5) * 0.2;

      arr[i3 + 2] =
        Math.sin(angle) *
        radius;
    }

    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    const pos =
      ref.current.geometry.attributes.position;

    for (
      let i = 0;
      i < count;
      i++
    ) {
      const i3 = i * 3;

      const x = pos.array[i3];
      const y = pos.array[i3 + 1];
      const z = pos.array[i3 + 2];

      const radius =
        Math.sqrt(
          x * x + z * z
        );

      const angle =
        Math.atan2(z, x);

      const newAngle =
        angle + 0.01;

      pos.array[i3] =
        Math.cos(newAngle) *
        radius;

      pos.array[i3 + 2] =
        Math.sin(newAngle) *
        radius;

      pos.array[i3 + 1] =
        Math.sin(
          state.clock.elapsedTime +
            angle
        ) *
        0.5;
    }

    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        map={texture}
        alphaMap={texture}
        size={0.02}
        color="#ffffff"
        transparent
        depthWrite={false}
        blending={
          THREE.AdditiveBlending
        }
      />
    </points>
  );
}