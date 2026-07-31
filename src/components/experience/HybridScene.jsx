"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Preload, Text } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import Robot from "./Robot";
import CityEnvironment from "./CityEnvironment";

function VertexBrandBackdrop() {
  return (
    <group position={[0, 1.25, -1.65]}>
      <Text
        position={[0, 0.02, -0.03]}
        fontSize={0.72}
        letterSpacing={0.1}
        anchorX="center"
        anchorY="middle"
        color="#38bdf8"
        fillOpacity={0.34}
      >
        VERTEX SUITE
      </Text>
      <Text
        fontSize={0.68}
        letterSpacing={0.1}
        anchorX="center"
        anchorY="middle"
        color="#e0f7ff"
        outlineWidth={0.012}
        outlineColor="#0ea5e9"
      >
        VERTEX SUITE
      </Text>
    </group>
  );
}

function CameraRig({ progress }) {
  const { camera } = useThree();
  const lookTarget = useRef(new THREE.Vector3(0, 1.1, -4));

  useFrame((state) => {
    const p = progress.current;
    const portalProgress = THREE.MathUtils.smoothstep(p, 0.82, 1);

    camera.position.x = Math.sin(p * Math.PI * 2.2) * 0.38;
    camera.position.y = 2.2 + Math.sin(state.clock.elapsedTime * 1.4) * 0.025;
    camera.position.z = THREE.MathUtils.lerp(8.2, 5.4, portalProgress);

    lookTarget.current.set(0, THREE.MathUtils.lerp(1.15, 1.55, portalProgress), -4.1);
    camera.lookAt(lookTarget.current);
  });

  return null;
}

function SceneContents({ progress }) {
  return (
    <>
      <color attach="background" args={["#020617"]} />
      <fog attach="fog" args={["#020617", 18, 76]} />

      <ambientLight intensity={0.42} />
      <hemisphereLight args={["#6aa9ff", "#090420", 0.48]} />
      <directionalLight
        position={[3, 8, 6]}
        intensity={2.7}
        color="#dbeafe"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 2.5, 2]} color="#38bdf8" intensity={24} distance={18} />
      <pointLight position={[5, 3, -6]} color="#8b5cf6" intensity={30} distance={22} />

      <CityEnvironment progress={progress} />
      <VertexBrandBackdrop />
      <Robot progress={progress} />
      <CameraRig progress={progress} />

      <ContactShadows
        position={[0, -1.68, 0.8]}
        opacity={0.42}
        scale={5}
        blur={2.6}
        far={4.5}
        resolution={256}
      />

      <Preload all />
    </>
  );
}

export default function HybridScene({ progress }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 2.2, 8.2], fov: 44, near: 0.1, far: 120 }}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <SceneContents progress={progress} />
      </Suspense>
    </Canvas>
  );
}
