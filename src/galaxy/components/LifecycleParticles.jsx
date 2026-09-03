import React, { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import circleTexture from '@/galaxy/assets/circle.png';

const APPROACH = 0;
const CAPTURE = 1;
const PROJECT = 2;

export default function LifecycleParticles({
  particleSize = 0.08,
  particleCount = 550,
}) {
  const pointsRef = useRef(null);

  const texture = useLoader(
    TextureLoader,
    circleTexture
  );

  const count = particleCount;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const isGreen = new Uint8Array(count);
    const greenR = new Float32Array(count);
    const greenG = new Float32Array(count);
    const greenB = new Float32Array(count);
    const state = new Uint8Array(count);
    const radius = new Float32Array(count);
    const angle = new Float32Array(count);
    const speed = new Float32Array(count);
    const phase = new Float32Array(count);
    const waitTimer = new Float32Array(count);
    const captureRadius = new Float32Array(count);
    const captureY = new Float32Array(count);
    const progress = new Float32Array(count);
    const projectSpeed = new Float32Array(count);
    const rotation = new Float32Array(count);
    const hemisphere = new Float32Array(count);
    const maxProgress = new Float32Array(count);
    const startX = new Float32Array(count);
    const startY = new Float32Array(count);
    const startZ = new Float32Array(count);

    // Green color variations (Omnitrix green palette)
    const greenPalettes = [
      [182 / 255, 255 / 255, 0 / 255],    // Primary #B6FF00 Bright Neon
      [140 / 255, 255 / 255, 0 / 255],    // Secondary #8CFF00 Neon Green
      [95 / 255, 143 / 255, 0 / 255],     // Subtle #5F8F00 Darker Green
      [160 / 255, 255 / 255, 60 / 255],   // Soft Light Green
      [110 / 255, 200 / 255, 20 / 255],   // Dim Emerald Green
    ];

    for (let i = 0; i < count; i++) {
      // Assign ~20% of particles to Omnitrix green energy signatures
      if (Math.random() < 0.20) {
        isGreen[i] = 1;
        const pal = greenPalettes[Math.floor(Math.random() * greenPalettes.length)];
        const variation = (Math.random() - 0.5) * 0.06;
        greenR[i] = Math.max(0, Math.min(1, pal[0] + variation));
        greenG[i] = Math.max(0, Math.min(1, pal[1] + variation));
        greenB[i] = Math.max(0, Math.min(1, pal[2]));
      } else {
        isGreen[i] = 0;
      }

      const r = Math.random();

      if (r < 0.25) {
        state[i] = APPROACH;
      } else if (r < 0.45) {
        state[i] = CAPTURE;
      } else {
        state[i] = PROJECT;
      }
      
      radius[i] = 2.8 + Math.pow(Math.random(), 0.8) * 9;
      angle[i] = Math.random() * Math.PI * 2;
      speed[i] = 0.0015 + Math.random() * 0.002;
      phase[i] = Math.random() * Math.PI * 2;
      waitTimer[i] = 0;
      captureRadius[i] = 0;
      captureY[i] = 0;
      progress[i] = 0;
      projectSpeed[i] = 0;
      rotation[i] = 0;
      hemisphere[i] = Math.random() > 0.5 ? 1 : -1;
      maxProgress[i] = 1;
      startX[i] = 0;
      startY[i] = 0;
      startZ[i] = 0;

      if (state[i] === CAPTURE) {
        waitTimer[i] = Math.random() * 4;
        captureRadius[i] = 2.72 + (Math.random() - 0.5) * 0.8;
        captureY[i] = (Math.random() - 0.5) * 0.5;
      }

      if (state[i] === PROJECT) {
        progress[i] = Math.random();
        projectSpeed[i] = 0.003 + Math.random() * 0.003;
        rotation[i] = Math.random() * Math.PI * 2;
        hemisphere[i] = Math.random() > 0.5 ? 1 : -1;
        maxProgress[i] = 0.5 + Math.random() * 0.5;
      }
    }

    return {
      positions,
      colors,
      isGreen,
      greenR,
      greenG,
      greenB,
      state,
      radius,
      angle,
      speed,
      phase,
      waitTimer,
      captureRadius,
      captureY,
      progress,
      projectSpeed,
      rotation,
      hemisphere,
      maxProgress,
      startX,
      startY,
      startZ,
    };
  }, [count]);

  useFrame((stateClock, delta) => {
    if (!pointsRef.current) return;

    const pos = pointsRef.current.geometry.attributes.position;
    const time = stateClock.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Color assignment (Omnitrix green override for ~20% of particles)
      if (particles.isGreen[i] === 1) {
        particles.colors[i3] = particles.greenR[i];
        particles.colors[i3 + 1] = particles.greenG[i];
        particles.colors[i3 + 2] = particles.greenB[i];
      } else if (particles.state[i] === APPROACH) {
        particles.colors[i3] = 209 / 255;
        particles.colors[i3 + 1] = 79 / 255;
        particles.colors[i3 + 2] = 255 / 255;
      } else if (particles.state[i] === CAPTURE) {
        particles.colors[i3] = 255 / 255;
        particles.colors[i3 + 1] = 167 / 255;
        particles.colors[i3 + 2] = 255 / 255;
      } else if (particles.state[i] === PROJECT) {
        particles.colors[i3] = 242 / 255;
        particles.colors[i3 + 1] = 240 / 255;
        particles.colors[i3 + 2] = 239 / 255;
      }

      // =====================
      // APPROACH
      // =====================
      if (particles.state[i] === APPROACH) {
        particles.radius[i] -= particles.speed[i];

        const orbitalSpeed = 0.002 + 0.025 / Math.max(particles.radius[i], 2);
        particles.angle[i] += orbitalSpeed;

        pos.array[i3] = Math.cos(particles.angle[i]) * particles.radius[i];
        pos.array[i3 + 2] = Math.sin(particles.angle[i]) * particles.radius[i];

        const normalizedRadius = particles.radius[i] / 12;
        const wellDepth = Math.pow(normalizedRadius, 2) * 0.8;

        pos.array[i3 + 1] = Math.sin(time + particles.phase[i]) * 0.15 + wellDepth - 0.4;

        if (particles.radius[i] < 2.75) {
          particles.state[i] = CAPTURE;
          particles.waitTimer[i] = 4.0 + Math.random() * 5.0;
          particles.captureRadius[i] = 2.7 + (Math.random() - 0.5) * 1.6;
          particles.captureY[i] = (Math.random() - 0.5) * 0.8;
        }
      }
      // =====================
      // CAPTURE
      // =====================
      else if (particles.state[i] === CAPTURE) {
        particles.waitTimer[i] -= delta;

        particles.angle[i] += 0.002 + Math.random() * 0.003;

        pos.array[i3] = Math.cos(particles.angle[i]) * particles.captureRadius[i];
        pos.array[i3 + 2] = Math.sin(particles.angle[i]) * particles.captureRadius[i];
        pos.array[i3 + 1] = particles.captureY[i];

        if (particles.waitTimer[i] <= 0) {
          particles.startX[i] = Math.cos(particles.angle[i]) * particles.captureRadius[i];
          particles.startY[i] = particles.captureY[i];
          particles.startZ[i] = Math.sin(particles.angle[i]) * particles.captureRadius[i];
          particles.state[i] = PROJECT;
          particles.progress[i] = 0;
          particles.projectSpeed[i] = 0.005 + Math.random() * 0.004;
          particles.rotation[i] = particles.angle[i];
          particles.hemisphere[i] = Math.random() > 0.5 ? 1 : -1;
          particles.maxProgress[i] = 0.85 + Math.pow(Math.random(), 1.2) * 0.15;
        }
      }
      // =====================
      // PROJECT
      // =====================
      else if (particles.state[i] === PROJECT) {
        particles.progress[i] += particles.projectSpeed[i];

        const t = particles.progress[i] * Math.PI;
        const localX = Math.cos(t) * 2.6;
        const localY = Math.sign(Math.sin(t)) * Math.pow(Math.abs(Math.sin(t)), 0.65) * 2.6 * particles.hemisphere[i];
        const rot = particles.rotation[i];

        const sphereX = localX * Math.cos(rot);
        const sphereY = localY;
        const sphereZ = localX * Math.sin(rot);

        const blend = Math.min(particles.progress[i] * 5, 1);

        pos.array[i3] = THREE.MathUtils.lerp(particles.startX[i], sphereX, blend);
        pos.array[i3 + 1] = THREE.MathUtils.lerp(particles.startY[i], sphereY, blend);
        pos.array[i3 + 2] = THREE.MathUtils.lerp(particles.startZ[i], sphereZ, blend);

        if (particles.progress[i] > particles.maxProgress[i]) {
          particles.state[i] = APPROACH;
          particles.radius[i] = 4 + Math.random() * 8;
          particles.angle[i] = Math.random() * Math.PI * 2;
          particles.phase[i] = Math.random() * Math.PI * 2;
        }
      }
    }

    pointsRef.current.geometry.attributes.color.needsUpdate = true;
    pos.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        map={texture}
        alphaMap={texture}
        transparent
        opacity={0.9}
        size={particleSize}
        vertexColors
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
