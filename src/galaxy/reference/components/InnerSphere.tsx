"use client";

import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

type SphereLayerProps = {
  count: number;
  size: number;
  color: string;
  sphereRadius: number;
  texture: THREE.Texture;
  speedMultiplier: number;
};

function SphereLayer({
  count,
  size,
  color,
  sphereRadius,
  texture,
  speedMultiplier,
}: SphereLayerProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);

    const theta = new Float32Array(count);
    const phi = new Float32Array(count);

    const thetaVelocity =
      new Float32Array(count);

    const phiVelocity =
      new Float32Array(count);

    for (let i = 0; i < count; i++) {
      theta[i] =
        Math.random() *
        Math.PI *
        2;

      phi[i] =
        Math.random() *
        Math.PI;

      thetaVelocity[i] =
        (Math.random() - 0.5) *
        0.008 *
        speedMultiplier;

      phiVelocity[i] =
        (Math.random() - 0.5) *
        0.005 *
        speedMultiplier;

      const i3 = i * 3;

      positions[i3] =
        sphereRadius *
        Math.sin(phi[i]) *
        Math.cos(theta[i]);

      positions[i3 + 1] =
        sphereRadius *
        Math.cos(phi[i]);

      positions[i3 + 2] =
        sphereRadius *
        Math.sin(phi[i]) *
        Math.sin(theta[i]);
    }

    return {
      positions,
      theta,
      phi,
      thetaVelocity,
      phiVelocity,
    };
  }, [count, sphereRadius, speedMultiplier]);

  useFrame(() => {
    if (!pointsRef.current) return;

    const pos =
      pointsRef.current.geometry
        .attributes.position;

    for (let i = 0; i < count; i++) {
      particles.theta[i] +=
        particles.thetaVelocity[i];

      particles.phi[i] +=
        particles.phiVelocity[i];

      particles.thetaVelocity[i] +=
        (Math.random() - 0.5) *
        0.00008;

      particles.phiVelocity[i] +=
        (Math.random() - 0.5) *
        0.00008;

      particles.thetaVelocity[i] =
        THREE.MathUtils.clamp(
          particles.thetaVelocity[i],
          -0.012,
          0.012
        );

      particles.phiVelocity[i] =
        THREE.MathUtils.clamp(
          particles.phiVelocity[i],
          -0.008,
          0.008
        );

      if (
        particles.phi[i] < 0.1
      ) {
        particles.phiVelocity[i] =
          Math.abs(
            particles.phiVelocity[i]
          );
      }

      if (
        particles.phi[i] >
        Math.PI - 0.1
      ) {
        particles.phiVelocity[i] =
          -Math.abs(
            particles.phiVelocity[i]
          );
      }

      const i3 = i * 3;

      pos.array[i3] =
        sphereRadius *
        Math.sin(
          particles.phi[i]
        ) *
        Math.cos(
          particles.theta[i]
        );

      pos.array[i3 + 1] =
        sphereRadius *
        Math.cos(
          particles.phi[i]
        );

      pos.array[i3 + 2] =
        sphereRadius *
        Math.sin(
          particles.phi[i]
        ) *
        Math.sin(
          particles.theta[i]
        );
    }

    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[
            particles.positions,
            3,
          ]}
        />
      </bufferGeometry>

      <pointsMaterial
        map={texture}
        alphaMap={texture}
        transparent
        opacity={0.9}
        size={size}
        depthWrite={false}
        blending={
          THREE.AdditiveBlending
        }
        color={color}
      />
    </points>
  );
}

export default function InnerSphere() {
  const texture = useLoader(
    TextureLoader,
    "/circle.png"
  );

  const sphereRadius = 2.8;

  return (
    <>
      <SphereLayer
        count={500}
        size={0.012}
        color="#f5d0fe"
        sphereRadius={sphereRadius}
        texture={texture}
        speedMultiplier={1}
      />

      <SphereLayer
        count={80}
        size={0.03}
        color="#ffffff"
        sphereRadius={sphereRadius}
        texture={texture}
        speedMultiplier={1.2}
      />

      <SphereLayer
        count={20}
        size={0.06}
        color="#ffffff"
        sphereRadius={sphereRadius}
        texture={texture}
        speedMultiplier={1.5}
      />
    </>
  );
}