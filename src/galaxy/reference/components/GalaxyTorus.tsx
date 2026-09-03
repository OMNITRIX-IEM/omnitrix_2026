"use client";

import { useMemo, useRef } from "react";
import {
  useFrame,
  useLoader,
} from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

type LayerProps = {
  count: number;
  size: number;
  opacity: number;
  texture: THREE.Texture;
};

function TorusLayer({
  count,
  size,
  opacity,
  texture,
}: LayerProps) {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } =
    useMemo(() => {
      const positions =
        new Float32Array(count * 3);

      const colors =
        new Float32Array(count * 3);

      const innerColor =
        new THREE.Color("#ffffff");

      const outerColor =
        new THREE.Color("#a855f7");

      const torusRadius = 5.8;
      const tubeRadius = 1.2;

      for (
        let i = 0;
        i < count;
        i++
      ) {
        const i3 = i * 3;

        const u =
          Math.random() *
          Math.PI *
          2;

        const v =
          Math.random() *
          Math.PI *
          2;

        // Fill volume instead of shell
        const r =
          Math.pow(
            Math.random(),
            2.2
          ) * tubeRadius;

        const x =
          (torusRadius +
            r *
              Math.cos(v)) *
          Math.cos(u);

        const y =
          r *
          Math.sin(v) *
          0.8;

        const z =
          (torusRadius +
            r *
              Math.cos(v)) *
          Math.sin(u);

        // Break perfect donut symmetry
        const swirl =
          Math.sin(u * 3) *
          0.8;

        const swirlY =
          Math.cos(u * 2) *
          0.3;

        positions[i3] =
          x + swirl;

        positions[i3 + 1] =
          y + swirlY;

        positions[i3 + 2] =
          z;

        const mix =
          Math.pow(
            Math.random(),
            1.8
          );

        const color =
          innerColor.clone();

        color.lerp(
          outerColor,
          mix
        );

        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
      }

      return {
        positions,
        colors,
      };
    }, [count]);

  useFrame(() => {});

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />

        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        map={texture}
        alphaMap={texture}
        alphaTest={0.5}
        transparent
        opacity={opacity}
        vertexColors
        size={size}
        sizeAttenuation
        depthWrite={false}
        blending={
          THREE.AdditiveBlending
        }
      />
    </points>
  );
}

export default function GalaxyTorus() {
  const texture = useLoader(
    TextureLoader,
    "/circle.png"
  );

  texture.generateMipmaps =
    false;

  texture.magFilter =
    THREE.LinearFilter;

  texture.minFilter =
    THREE.LinearFilter;

  return (
    <>
      <TorusLayer
        count={2200}
        size={0.022}
        opacity={1}
        texture={texture}
      />

      <TorusLayer
        count={1000}
        size={0.04}
        opacity={0.95}
        texture={texture}
      />

      <TorusLayer
        count={250}
        size={0.06}
        opacity={0.9}
        texture={texture}
      />
    </>
  );
}