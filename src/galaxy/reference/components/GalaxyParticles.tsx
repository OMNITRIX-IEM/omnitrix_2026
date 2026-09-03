"use client";

import { useMemo, useRef } from "react";
import {
  useFrame,
  useLoader,
} from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

type GalaxyLayerProps = {
  count: number;
  size: number;
  opacity: number;
  texture: THREE.Texture;
};

function GalaxyLayer({
  count,
  size,
  opacity,
  texture,
}: GalaxyLayerProps) {
  const pointsRef =
    useRef<THREE.Points>(null);

  const radius = 12;
  const branches = 8;
  const spin = 1.2;

  const { positions, colors } =
    useMemo(() => {
      const positions =
        new Float32Array(count * 3);

      const colors =
        new Float32Array(count * 3);

      const insideColor =
        new THREE.Color("#ffffff");

      const outsideColor =
        new THREE.Color("#a855f7");

      for (
        let i = 0;
        i < count;
        i++
      ) {
        const i3 = i * 3;

        let r;

        do {
          r =
            Math.random() *
            radius;
        } while (r < 3);

        const branchAngle =
          ((i % branches) /
            branches) *
          Math.PI *
          2;

        const spinAngle =
          r * spin;

        const randomX =
          (Math.random() - 0.5) *
          0.35 *
          r;

        const randomZ =
          (Math.random() - 0.5) *
          0.35 *
          r;

        const verticalSpread =
          size > 0.05
            ? 0.5
            : size > 0.03
            ? 0.3
            : 0.12;

        const randomY =
          (Math.random() - 0.5) *
          verticalSpread;

        const warp =
          Math.sin(
            (r / radius) *
              Math.PI
          ) * 0.25;

        positions[i3] =
          Math.cos(
            branchAngle +
              spinAngle
          ) *
            r +
          randomX;

        positions[i3 + 1] =
          randomY +
          warp *
            (Math.random() - 0.5);

        positions[i3 + 2] =
          Math.sin(
            branchAngle +
              spinAngle
          ) *
            r +
          randomZ;

        const mixedColor =
          insideColor.clone();

        mixedColor.lerp(
          outsideColor,
          r / radius
        );

        colors[i3] =
          mixedColor.r;

        colors[i3 + 1] =
          mixedColor.g;

        colors[i3 + 2] =
          mixedColor.b;
      }

      return {
        positions,
        colors,
      };
    }, [count, size]);

  useFrame(() => {});

  return (
    <points ref={pointsRef}>
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

export default function GalaxyParticles() {
  const particleTexture =
    useLoader(
      TextureLoader,
      "/circle.png"
    );

  particleTexture.generateMipmaps =
    false;

  particleTexture.magFilter =
    THREE.LinearFilter;

  particleTexture.minFilter =
    THREE.LinearFilter;

  return (
    <>
      {/* Small */}
      <GalaxyLayer
        count={2200}
        size={0.025}
        opacity={1}
        texture={particleTexture}
      />

      {/* Medium */}
      <GalaxyLayer
        count={1000}
        size={0.04}
        opacity={0.95}
        texture={particleTexture}
      />

      {/* Large */}
      <GalaxyLayer
        count={300}
        size={0.06}
        opacity={0.9}
        texture={particleTexture}
      />
    </>
  );
}