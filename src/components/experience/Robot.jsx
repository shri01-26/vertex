"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const MODEL_URL = "/models/vertex-robot-muscular.glb";

export default function Robot({ progress }) {
  const outerRef = useRef(null);
  const modelRef = useRef(null);
  const activeActionRef = useRef(null);
  const activeNameRef = useRef("");

  const { scene, animations } = useGLTF(MODEL_URL);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const { actions } = useAnimations(animations, modelRef);

  const playAction = (name) => {
    if (!actions?.[name] || activeNameRef.current === name) return;

    activeActionRef.current?.fadeOut(0.22);
    const next = actions[name];
    next.reset();
    next.enabled = true;
    next.clampWhenFinished = name !== "Walk" && name !== "Idle";
    next.setLoop(
      name === "Walk" || name === "Idle" ? THREE.LoopRepeat : THREE.LoopOnce,
      name === "Walk" || name === "Idle" ? Infinity : 1,
    );
    next.fadeIn(0.22).play();

    activeActionRef.current = next;
    activeNameRef.current = name;
  };

  useEffect(() => {
    clonedScene.traverse((child) => {
      child.frustumCulled = false;

      if (!child.isMesh || !child.material) return;

      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material.name?.includes("Vertex") || child.material.name?.includes("Visor")) {
        child.material.emissive = new THREE.Color("#22d3ee");
        child.material.emissiveIntensity = child.material.name?.includes("Visor") ? 1.5 : 0.85;
      }

      if (child.material.name?.includes("Armor")) {
        child.material.roughness = 0.18;
        child.material.metalness = 0.48;
      }
    });

    playAction("Walk");
    return () => activeActionRef.current?.stop();
    // actions becomes stable after the GLB is loaded.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions, clonedScene]);

  useFrame((state) => {
    if (!outerRef.current) return;

    const p = progress.current;

    let desired = "Walk";
    if (p >= 0.27 && p < 0.35) desired = "LookLeft";
    else if (p >= 0.45 && p < 0.53) desired = "LookRight";
    else if (p >= 0.64 && p < 0.73) desired = "PointForward";
    else if (p >= 0.88) desired = "EnterPortal";
    playAction(desired);

    const portalProgress = THREE.MathUtils.smoothstep(p, 0.84, 1);
    outerRef.current.position.z = THREE.MathUtils.lerp(1.1, -1.1, portalProgress);
    outerRef.current.position.y = -1.45 + Math.sin(state.clock.elapsedTime * 5.5) * 0.012;
    outerRef.current.scale.setScalar(THREE.MathUtils.lerp(0.88, 0.16, portalProgress));
    outerRef.current.rotation.y = Math.PI;
  });

  return (
    <group ref={outerRef}>
      <primitive ref={modelRef} object={clonedScene} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);
