import React, { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import circleTexture from '@/galaxy/assets/circle.png';

const APPROACH = 0;
const CAPTURE = 1;
const PROJECT = 2;

// Pre-computed color constants (Omnitrix particle palette)
const COLOR_APPROACH_R = 209 / 255;
const COLOR_APPROACH_G = 79 / 255;
const COLOR_APPROACH_B = 255 / 255;

const COLOR_CAPTURE_R = 255 / 255;
const COLOR_CAPTURE_G = 167 / 255;
const COLOR_CAPTURE_B = 255 / 255;

const COLOR_PROJECT_R = 242 / 255;
const COLOR_PROJECT_G = 240 / 255;
const COLOR_PROJECT_B = 239 / 255;

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
      const i3 = i * 3;

      // Assign ~20% of particles to Omnitrix green energy signatures
      if (Math.random() < 0.20) {
        isGreen[i] = 1;
        const pal = greenPalettes[Math.floor(Math.random() * greenPalettes.length)];
        const variation = (Math.random() - 0.5) * 0.06;
        greenR[i] = Math.max(0, Math.min(1, pal[0] + variation));
        greenG[i] = Math.max(0, Math.min(1, pal[1] + variation));
        greenB[i] = Math.max(0, Math.min(1, pal[2]));

        colors[i3] = greenR[i];
        colors[i3 + 1] = greenG[i];
        colors[i3 + 2] = greenB[i];
      } else {
        isGreen[i] = 0;
      }

      const r = Math.random();

      if (r < 0.25) {
        state[i] = APPROACH;
        if (!isGreen[i]) {
          colors[i3] = COLOR_APPROACH_R;
          colors[i3 + 1] = COLOR_APPROACH_G;
          colors[i3 + 2] = COLOR_APPROACH_B;
        }
      } else if (r < 0.45) {
        state[i] = CAPTURE;
        if (!isGreen[i]) {
          colors[i3] = COLOR_CAPTURE_R;
          colors[i3 + 1] = COLOR_CAPTURE_G;
          colors[i3 + 2] = COLOR_CAPTURE_B;
        }
      } else {
        state[i] = PROJECT;
        if (!isGreen[i]) {
          colors[i3] = COLOR_PROJECT_R;
          colors[i3 + 1] = COLOR_PROJECT_G;
          colors[i3 + 2] = COLOR_PROJECT_B;
        }
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
    const colorAttr = pointsRef.current.geometry.attributes.color;
    const posArray = pos.array;
    const time = stateClock.clock.elapsedTime;
    let colorNeedsUpdate = false;

    const {
      isGreen,
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
      colors,
    } = particles;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // =====================
      // APPROACH
      // =====================
      if (state[i] === APPROACH) {
        radius[i] -= speed[i];

        const orbitalSpeed = 0.002 + 0.025 / Math.max(radius[i], 2);
        angle[i] += orbitalSpeed;

        posArray[i3] = Math.cos(angle[i]) * radius[i];
        posArray[i3 + 2] = Math.sin(angle[i]) * radius[i];

        const normalizedRadius = radius[i] / 12;
        const wellDepth = normalizedRadius * normalizedRadius * 0.8;

        posArray[i3 + 1] = Math.sin(time + phase[i]) * 0.15 + wellDepth - 0.4;

        if (radius[i] < 2.75) {
          state[i] = CAPTURE;
          waitTimer[i] = 4.0 + Math.random() * 5.0;
          captureRadius[i] = 2.7 + (Math.random() - 0.5) * 1.6;
          captureY[i] = (Math.random() - 0.5) * 0.8;

          if (!isGreen[i]) {
            colors[i3] = COLOR_CAPTURE_R;
            colors[i3 + 1] = COLOR_CAPTURE_G;
            colors[i3 + 2] = COLOR_CAPTURE_B;
            colorNeedsUpdate = true;
          }
        }
      }
      // =====================
      // CAPTURE
      // =====================
      else if (state[i] === CAPTURE) {
        waitTimer[i] -= delta;

        angle[i] += 0.002 + Math.random() * 0.003;

        posArray[i3] = Math.cos(angle[i]) * captureRadius[i];
        posArray[i3 + 2] = Math.sin(angle[i]) * captureRadius[i];
        posArray[i3 + 1] = captureY[i];

        if (waitTimer[i] <= 0) {
          startX[i] = Math.cos(angle[i]) * captureRadius[i];
          startY[i] = captureY[i];
          startZ[i] = Math.sin(angle[i]) * captureRadius[i];
          state[i] = PROJECT;
          progress[i] = 0;
          projectSpeed[i] = 0.005 + Math.random() * 0.004;
          rotation[i] = angle[i];
          hemisphere[i] = Math.random() > 0.5 ? 1 : -1;
          maxProgress[i] = 0.85 + Math.pow(Math.random(), 1.2) * 0.15;

          if (!isGreen[i]) {
            colors[i3] = COLOR_PROJECT_R;
            colors[i3 + 1] = COLOR_PROJECT_G;
            colors[i3 + 2] = COLOR_PROJECT_B;
            colorNeedsUpdate = true;
          }
        }
      }
      // =====================
      // PROJECT
      // =====================
      else if (state[i] === PROJECT) {
        progress[i] += projectSpeed[i];

        const t = progress[i] * Math.PI;
        const localX = Math.cos(t) * 2.6;
        const localY = Math.sign(Math.sin(t)) * Math.pow(Math.abs(Math.sin(t)), 0.65) * 2.6 * hemisphere[i];
        const rot = rotation[i];

        const sphereX = localX * Math.cos(rot);
        const sphereY = localY;
        const sphereZ = localX * Math.sin(rot);

        const blend = Math.min(progress[i] * 5, 1);

        const sX = startX[i];
        const sY = startY[i];
        const sZ = startZ[i];

        posArray[i3] = sX + (sphereX - sX) * blend;
        posArray[i3 + 1] = sY + (sphereY - sY) * blend;
        posArray[i3 + 2] = sZ + (sphereZ - sZ) * blend;

        if (progress[i] > maxProgress[i]) {
          state[i] = APPROACH;
          radius[i] = 4 + Math.random() * 8;
          angle[i] = Math.random() * Math.PI * 2;
          phase[i] = Math.random() * Math.PI * 2;

          if (!isGreen[i]) {
            colors[i3] = COLOR_APPROACH_R;
            colors[i3 + 1] = COLOR_APPROACH_G;
            colors[i3 + 2] = COLOR_APPROACH_B;
            colorNeedsUpdate = true;
          }
        }
      }
    }

    if (colorNeedsUpdate && colorAttr) {
      colorAttr.needsUpdate = true;
    }
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

