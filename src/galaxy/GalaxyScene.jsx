import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import StarField from "./components/StarField";
import FarStars from "./components/FarStars";
import DustLayer from "./components/DustLayer";
import LifecycleParticles from "./components/LifecycleParticles";

function GalaxyGroup() {
  const galaxyRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const move = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  useFrame((state, delta) => {
    if (!galaxyRef.current) return;

    // Continuous slow rotation
    galaxyRef.current.rotation.y += delta * 0.015;

    // Mouse tilt
    galaxyRef.current.rotation.x +=
      (mouse.current.y - galaxyRef.current.rotation.x) * 0.05;

    galaxyRef.current.rotation.z +=
      (mouse.current.x * 1.2 - galaxyRef.current.rotation.z) * 0.05;
  });

  return (
    <group ref={galaxyRef}>
      <LifecycleParticles particleSize={0.05} particleCount={450} />
      <LifecycleParticles particleSize={0.12} particleCount={100} />
      <LifecycleParticles particleSize={0.18} particleCount={90} />
    </group>
  );
}

// Lifecycle functions for future react maintenance
function initGalaxy() {
  console.log("Galaxy System initialized.");
}

function destroyGalaxy(gl) {
  console.log("Galaxy System destroyed. Cleaning up WebGL resources.");
  if (gl) {
    gl.dispose();
  }
}

export default function GalaxyScene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Canvas
        dpr={1}
        camera={{
          position: [0, 1, 9],
          fov: 60,
        }}
        onCreated={({ gl }) => {
          initGalaxy();
          // Register cleanup on unmount
          return () => destroyGalaxy(gl);
        }}
      >
        <color attach="background" args={["black"]} />
        <ambientLight intensity={0.5} />

        <FarStars />
        <DustLayer />
        <StarField />
        <GalaxyGroup />

        <EffectComposer>
          <Bloom
            intensity={1.1}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.8}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
