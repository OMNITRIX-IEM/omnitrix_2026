"use client";

import { useMemo } from "react";

export default function DustLayer() {
  const particles = useMemo(() => {
    const positions =
    new Float32Array(2500 * 3);

    for (let i = 0; i < 2500; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 30;
      positions[i3 + 1] = (Math.random() - 0.5) * 8;
      positions[i3 + 2] = (Math.random() - 0.5) * 30;
    }

    return positions;
  }, []);

  return (
    <points position={[0, 0, -8]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.015}
        color="#b794f4"
        transparent
        opacity={0.25}
        depthWrite={false}
      />
    </points>
  );
}