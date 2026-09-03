"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import {
  Bloom,
  EffectComposer,
} from "@react-three/postprocessing";

import StarField from "./StarField";
import FarStars from "./FarStars";
import DustLayer from "./DustLayer";
import LifecycleParticles from "./LifecycleParticles";

function GalaxyGroup() {
  const galaxyRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!galaxyRef.current) return;

    // Slow automatic rotation
    galaxyRef.current.rotation.y +=
      delta * 0.015;

    // Mouse tilt
    const targetX =
      state.mouse.y * 1.0;

    const targetZ =
      state.mouse.x * 1.2;

    galaxyRef.current.rotation.x +=
      (targetX -
        galaxyRef.current.rotation.x) *
      0.05;

    galaxyRef.current.rotation.z +=
      (targetZ -
        galaxyRef.current.rotation.z) *
      0.05;
  });

  return (
    <group ref={galaxyRef}>
      {/*<GalaxyVortex />*/}
      {/*<CenterRing />*/}
      {/*<ParticleStreams />*/}
      {/*<CaptureRing />*/}
      <LifecycleParticles
        particleSize={0.05}
        particleCount={450}
      />

      <LifecycleParticles
        particleSize={0.12}
        particleCount={100}
      />

      <LifecycleParticles
        particleSize={0.18}
        particleCount={90}
      />
      {/*<CenterFlow />*/}
    </group>
  );
}

export default function GalaxyScene() {
  return (
    <Canvas
      dpr={1}
      camera={{
        position: [0, 1, 9],
        fov: 60,
      }}
    >
      <color
        attach="background"
        args={["black"]}
      />

      <ambientLight intensity={0.5} />

      {<FarStars />}

      {<DustLayer />}

      {<StarField />}

      <GalaxyGroup />

      <EffectComposer>
        <Bloom
          intensity={1.1}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.8}
        />
      </EffectComposer>
    </Canvas>
  );
}