"use client";

import { Float, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const clamp01 = (value) => THREE.MathUtils.clamp(value, 0, 1);
const rangeProgress = (value, start, end) => clamp01((value - start) / (end - start));

export default function ChannelBillboard({
  progress,
  range = [0, 1],
  position,
  title,
  description,
  accent = "cyan",
  side = "left",
}) {
  const groupRef = useRef(null);
  const panelRef = useRef(null);
  const rimRef = useRef(null);
  const cardRef = useRef(null);

  const accentColor =
    accent === "green"
      ? "#34d399"
      : accent === "violet"
        ? "#a78bfa"
        : accent === "amber"
          ? "#fbbf24"
          : "#22d3ee";

  const accentClasses =
    accent === "green"
      ? "border-emerald-300/40 bg-emerald-950/80 text-emerald-300"
      : accent === "violet"
        ? "border-violet-300/40 bg-violet-950/80 text-violet-300"
        : accent === "amber"
          ? "border-amber-300/40 bg-amber-950/80 text-amber-300"
          : "border-cyan-300/40 bg-cyan-950/80 text-cyan-300";

  useFrame(() => {
    const p = progress?.current ?? 1;
    const enter = rangeProgress(p, range[0], range[0] + 0.045);
    const leave = rangeProgress(p, range[1] - 0.045, range[1]);
    const active = enter * (1 - leave);
    const sideOffset = side === "left" ? -0.42 : 0.42;

    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(position[0] + sideOffset, position[0], active);
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.74, 1.05, active));
      groupRef.current.rotation.y = side === "left"
        ? THREE.MathUtils.lerp(0.5, 0.16, active)
        : THREE.MathUtils.lerp(-0.5, -0.16, active);
    }

    if (panelRef.current) {
      panelRef.current.material.opacity = THREE.MathUtils.lerp(0, 0.28, active);
    }

    if (rimRef.current) {
      rimRef.current.material.opacity = THREE.MathUtils.lerp(0.05, 0.75, active);
    }

    if (cardRef.current) {
      cardRef.current.style.opacity = String(THREE.MathUtils.lerp(0, 1, active));
      cardRef.current.style.transform = `translateY(${THREE.MathUtils.lerp(18, 0, active)}px)`;
    }
  });

  return (
    <Float speed={1.25} floatIntensity={0.18} rotationIntensity={0.05}>
      <group
        ref={groupRef}
        position={position}
        rotation={[0, side === "left" ? 0.2 : -0.2, 0]}
      >
        <mesh ref={panelRef} position={[0, 0, -0.04]}>
          <planeGeometry args={[2.45, 1.28]} />
          <meshBasicMaterial color={accentColor} transparent opacity={0} />
        </mesh>

        <mesh ref={rimRef} position={[0, 0, -0.035]}>
          <boxGeometry args={[2.5, 1.32, 0.015]} />
          <meshBasicMaterial color={accentColor} transparent opacity={0.05} wireframe />
        </mesh>

        <Html transform distanceFactor={7} zIndexRange={[20, 0]}>
          <div
            ref={cardRef}
            className={`w-[235px] rounded-[8px] border p-5 shadow-2xl backdrop-blur-xl ${accentClasses}`}
            style={{ opacity: 0, pointerEvents: "none", transform: "translateY(18px)" }}
          >
            <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] opacity-80">
              Vertex channel
            </p>
            <h3 className="mt-2 text-[20px] font-black leading-tight text-white">
              {title}
            </h3>
            <p className="mt-2 text-[12px] font-medium leading-5 text-white/65">
              {description}
            </p>
          </div>
        </Html>
      </group>
    </Float>
  );
}
