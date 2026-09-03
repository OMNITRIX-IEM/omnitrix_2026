export function createVortex(
  count: number
) {
  const positions = new Float32Array(
    count * 3
  );

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;

    const angle =
      Math.random() *
      Math.PI *
      2;

    const majorRadius =
      5 +
      Math.random() * 4;

    const tubeRadius =
      (Math.random() - 0.5) * 4;

    const depthOffset =
        (Math.random() - 0.5) * 6;

    positions[i3] =
      Math.cos(angle) *
      majorRadius + depthOffset;

    positions[i3 + 1] =
      tubeRadius;

    positions[i3 + 2] =
      Math.sin(angle) *
      majorRadius;
  }

  return positions;
}