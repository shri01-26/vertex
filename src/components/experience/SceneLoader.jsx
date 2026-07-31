"use client";

import dynamic from "next/dynamic";

const HybridScene = dynamic(() => import("./HybridScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-[#020617]">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-cyan-400" />
    </div>
  ),
});

export default function SceneLoader({ progress }) {
  return <HybridScene progress={progress} />;
}
