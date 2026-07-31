"use client";

import { MeshReflectorMaterial, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import ChannelBillboard from "./ChannelBillboard";

const CITY_URL = "/models/vertex-city.glb";

function FarSkyline({ progress }) {
  const skylineRef = useRef(null);
  const texture = useTexture("/images/futuristic-city-bg.webp");

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
  }, [texture]);

  useFrame(() => {
    if (!skylineRef.current) return;
    skylineRef.current.position.x = Math.sin(progress.current * Math.PI) * -1.4;
    skylineRef.current.position.z = -74 + progress.current * 8;
  });

  return (
    <mesh ref={skylineRef} position={[0, 10, -74]} scale={[48, 24, 1]}>
      <planeGeometry args={[2, 1]} />
      <meshBasicMaterial map={texture} toneMapped={false} fog={false} />
    </mesh>
  );
}

function Road() {
  const lights = Array.from({ length: 28 }, (_, index) => index);

  return (
    <group>
      <mesh position={[0, -1.72, -28]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[11, 78]} />
        <MeshReflectorMaterial
          color="#050712"
          metalness={0.86}
          roughness={0.24}
          mirror={0.58}
          mixBlur={0.85}
          mixStrength={1.7}
          resolution={512}
          blur={[280, 90]}
        />
      </mesh>

      <mesh position={[-5.1, -1.65, -28]}>
        <boxGeometry args={[0.075, 0.055, 78]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={5} />
      </mesh>
      <mesh position={[5.1, -1.65, -28]}>
        <boxGeometry args={[0.075, 0.055, 78]} />
        <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={5} />
      </mesh>

      {lights.map((index) => (
        <mesh key={index} position={[0, -1.64, 3 - index * 2.6]}>
          <boxGeometry args={[0.08, 0.045, 1.15]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#38bdf8" : "#8b5cf6"}
            emissive={index % 2 === 0 ? "#0ea5e9" : "#7c3aed"}
            emissiveIntensity={4}
          />
        </mesh>
      ))}
    </group>
  );
}

function Portal({ progress }) {
  const portalRef = useRef(null);
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const glowRef = useRef(null);
  const fillRef = useRef(null);

  useFrame((_, delta) => {
    const p = progress.current;
    const active = THREE.MathUtils.smoothstep(p, 0.78, 0.96);

    if (portalRef.current) {
      portalRef.current.scale.setScalar(THREE.MathUtils.lerp(0.2, 1, active));
      portalRef.current.position.z = THREE.MathUtils.lerp(-42.8, -42, active);
    }

    if (outerRef.current) outerRef.current.rotation.z += delta * 0.32;
    if (innerRef.current) innerRef.current.rotation.z -= delta * 0.5;
    if (glowRef.current) glowRef.current.intensity = THREE.MathUtils.lerp(0, 42, active);
    if (fillRef.current) fillRef.current.material.opacity = THREE.MathUtils.lerp(0, 0.36, active);
  });

  return (
    <group ref={portalRef} position={[0, 1.7, -42.8]} scale={0.2}>
      <mesh ref={outerRef}>
        <torusGeometry args={[3.1, 0.14, 24, 120]} />
        <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={5} />
      </mesh>
      <mesh ref={innerRef} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[2.72, 0.055, 18, 120]} />
        <meshStandardMaterial color="#67e8f9" emissive="#06b6d4" emissiveIntensity={6} />
      </mesh>
      <mesh ref={fillRef}>
        <circleGeometry args={[2.65, 64]} />
        <meshBasicMaterial color="#6d28d9" transparent opacity={0} side={THREE.DoubleSide} />
      </mesh>
      <pointLight ref={glowRef} color="#8b5cf6" intensity={0} distance={16} />
    </group>
  );
}

export default function CityEnvironment({ progress }) {
  const worldRef = useRef(null);
  const { scene } = useGLTF(CITY_URL);
  const city = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    city.traverse((child) => {
      child.frustumCulled = false;

      if (!child.isMesh || !child.material) return;

      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material.name?.includes("Neon")) {
        child.material.emissive = new THREE.Color(child.material.color);
        child.material.emissiveIntensity = 3.8;
      }

      if (child.material.name?.includes("Window")) {
        child.material.emissive = new THREE.Color("#bdefff");
        child.material.emissiveIntensity = 1.2;
      }
    });
  }, [city]);

  useFrame(() => {
    if (!worldRef.current) return;
    const p = progress.current;
    worldRef.current.position.z = THREE.MathUtils.lerp(0, 42.5, p);
  });

  return (
    <>
      <FarSkyline progress={progress} />

      <group ref={worldRef}>
        <primitive object={city} />
        <Road />

        <ChannelBillboard
          progress={progress}
          range={[0.17, 0.3]}
          position={[-3.55, 1.35, -8]}
          title="WhatsApp Business API"
          description="Engage, automate and convert through trusted conversations."
          accent="green"
          side="left"
        />
        <ChannelBillboard
          progress={progress}
          range={[0.29, 0.42]}
          position={[3.55, 1.7, -13.5]}
          title="AI Chatbot"
          description="Smarter automated support across every customer journey."
          accent="violet"
          side="right"
        />
        <ChannelBillboard
          progress={progress}
          range={[0.4, 0.53]}
          position={[-3.55, 1.4, -19]}
          title="WhatsApp Forms"
          description="Capture structured information without leaving the chat."
          accent="cyan"
          side="left"
        />
        <ChannelBillboard
          progress={progress}
          range={[0.51, 0.64]}
          position={[3.55, 1.6, -24.5]}
          title="RCS Messaging"
          description="Deliver rich, branded and interactive mobile experiences."
          accent="cyan"
          side="right"
        />
        <ChannelBillboard
          progress={progress}
          range={[0.61, 0.74]}
          position={[-3.55, 1.35, -30]}
          title="Email API"
          description="Send reliable transactional and campaign emails at scale."
          accent="violet"
          side="left"
        />
        <ChannelBillboard
          progress={progress}
          range={[0.7, 0.83]}
          position={[3.55, 1.55, -35]}
          title="Voice & Calls"
          description="Connect instantly through intelligent voice experiences."
          accent="amber"
          side="right"
        />

        <Portal progress={progress} />
      </group>
    </>
  );
}

useGLTF.preload(CITY_URL);
