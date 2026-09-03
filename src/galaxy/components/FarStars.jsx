import React from "react";
import { Stars } from "@react-three/drei";

export default function FarStars() {
  return (
    <Stars
      radius={250}
      depth={150}
      count={1000}
      factor={2}
      fade
      speed={0.05}
    />
  );
}
