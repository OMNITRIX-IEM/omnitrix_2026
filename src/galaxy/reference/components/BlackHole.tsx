"use client";

export default function BlackHole() {
  return (
    <mesh position={[0, 0, 0]}>
      <circleGeometry args={[1.0, 64]} />
      <meshBasicMaterial color="black" />
    </mesh>
  );
}