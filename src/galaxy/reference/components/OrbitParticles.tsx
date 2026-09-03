"use client";

import { useMemo, useRef } from "react";
import {
  useFrame,
  useLoader,
} from "@react-three/fiber";

import * as THREE from "three";
import { TextureLoader } from "three";

export default function OrbitParticles() {
  const ref = useRef<THREE.Points>(null);
  const particleTexture = useLoader(
  TextureLoader,
  "/circle.png"
  );

  particleTexture.generateMipmaps = false;

  particleTexture.magFilter =
  THREE.LinearFilter;

  particleTexture.minFilter =
  THREE.LinearFilter;
  const positions = useMemo(() => {
    const count = 300;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radius = 3.2 + (Math.random() - 0.5) * 0.05;
      const angle = Math.random() * Math.PI * 2;

      arr[i3] = Math.cos(angle) * radius;
      arr[i3 + 1] = (Math.random() - 0.5) * 2;
      arr[i3 + 2] = Math.sin(angle) * radius;
    }

    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.0008;

    ref.current.rotation.x +=
      (state.mouse.y * 0.15 -
        ref.current.rotation.x) *
      0.03;

    ref.current.rotation.z +=
      (state.mouse.x * 0.15 -
        ref.current.rotation.z) *
      0.03;
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
      map={particleTexture}
      alphaMap={particleTexture}
      color="#f5d0fe"
      size={0.08}
      transparent
      opacity={1}
      alphaTest={0.5}
      depthWrite={false}
      blending={THREE.AdditiveBlending}
      />
    </points>
  );
}