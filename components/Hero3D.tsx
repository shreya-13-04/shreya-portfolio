"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

export default function Hero3D() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <OrbitControls enableZoom={false} />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh castShadow receiveShadow>
          <icosahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial color="#9333ea" roughness={0.3} metalness={0.7} />
        </mesh>
      </Float>
    </Canvas>
  );
}
