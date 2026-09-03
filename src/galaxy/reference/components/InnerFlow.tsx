"use client";

import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

export default function InnerFlow() {
  const ref = useRef<THREE.Points>(null);

  const texture = useLoader(
    TextureLoader,
    "/circle.png"
  );

  const count = 900;

  const innerRadius = 1.4;
  const outerRadius = 3.0;

  const particles = useMemo(() => {
    const positions =
      new Float32Array(count * 3);

    const velocity =
      new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const theta =
        Math.random() *
        Math.PI *
        2;

      const phi =
        Math.random() *
        Math.PI;

      const radius =
        innerRadius +
        Math.random() *
          (outerRadius -
            innerRadius);

      positions[i3] =
        radius *
        Math.sin(phi) *
        Math.cos(theta);

      positions[i3 + 1] =
        radius *
        Math.cos(phi);

      positions[i3 + 2] =
        radius *
        Math.sin(phi) *
        Math.sin(theta);

      velocity[i3] =
        (Math.random() - 0.5) *
        0.004;

      velocity[i3 + 1] =
        (Math.random() - 0.5) *
        0.004;

      velocity[i3 + 2] =
        (Math.random() - 0.5) *
        0.004;
    }

    return {
      positions,
      velocity,
    };
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    const pos =
      ref.current.geometry
        .attributes.position;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      let x =
        pos.array[i3];

      let y =
        pos.array[i3 + 1];

      let z =
        pos.array[i3 + 2];

      const side =
        x > 0 ? 1 : -1;

      particles.velocity[
        i3 + 1
      ] +=
        side * -0.00015;

      particles.velocity[i3] +=
        (Math.random() - 0.5) *
        0.00015;

      particles.velocity[
        i3 + 1
      ] +=
        (Math.random() - 0.5) *
        0.00015;

      particles.velocity[
        i3 + 2
      ] +=
        (Math.random() - 0.5) *
        0.00015;

      x +=
        particles.velocity[i3];

      y +=
        particles.velocity[
          i3 + 1
        ];

      z +=
        particles.velocity[
          i3 + 2
        ];

      const dist =
        Math.sqrt(
          x * x +
            y * y +
            z * z
        );

      if (
        dist > outerRadius ||
        dist < innerRadius
      ) {
        const nx = x / dist;
        const ny = y / dist;
        const nz = z / dist;

        const target =
          dist > outerRadius
            ? outerRadius
            : innerRadius;

        x = nx * target;
        y = ny * target;
        z = nz * target;

        particles.velocity[i3] *=
          -0.7;

        particles.velocity[
          i3 + 1
        ] *= -0.7;

        particles.velocity[
          i3 + 2
        ] *= -0.7;
      }

      pos.array[i3] = x;
      pos.array[i3 + 1] = y;
      pos.array[i3 + 2] = z;
    }

    pos.needsUpdate = true;
  });

  return (
    <points ref={ref}>
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
        size={0.014}
        depthWrite={false}
        blending={
          THREE.AdditiveBlending
        }
        color="#ffffff"
      />
    </points>
  );
}