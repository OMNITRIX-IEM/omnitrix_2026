"use client";

import { useMemo, useRef } from "react";
import {
  useFrame,
  useLoader,
} from "@react-three/fiber";

import * as THREE from "three";
import { TextureLoader } from "three";
import { createVortex } from "../lib/createVortex";

export default function GalaxyTiny() {
  const ref = useRef<THREE.Points>(null);

  const texture = useLoader(
    TextureLoader,
    "/circle.png"
  );

  const count = 100;
  const radius = 12;

  const positions = useMemo(
  () => createVortex(count),
  []
);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y +=
      delta * 0.03;
    ref.current.rotation.x += delta * 0.005;
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
        transparent
        opacity={1}
        size={0.05}
        depthWrite={false}
        blending={
          THREE.AdditiveBlending
        }
      />
    </points>
  );
}