"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SceneLoader from "./SceneLoader";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExperience() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const channelsRef = useRef(null);
  const ecosystemRef = useRef(null);
  const transitionRef = useRef(null);
  const progress = useRef(0);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            progress.current = self.progress;
          },
        },
      });

      timeline
        .to(introRef.current, { opacity: 0, y: -70, scale: 0.92 }, 0.12)
        .fromTo(
          channelsRef.current,
          { opacity: 0, x: -70 },
          { opacity: 1, x: 0, duration: 0.12 },
          0.27,
        )
        .to(channelsRef.current, { opacity: 0, x: 60 }, 0.53)
        .fromTo(
          ecosystemRef.current,
          { opacity: 0, y: 65 },
          { opacity: 1, y: 0, duration: 0.1 },
          0.58,
        )
        .to(ecosystemRef.current, { opacity: 0, scale: 0.9 }, 0.79)
        .fromTo(
          transitionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.13 },
          0.89,
        );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[650vh] bg-[#020617]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <SceneLoader progress={progress} />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(2,6,23,0.2),transparent_45%,rgba(2,6,23,0.6))]" />

        <div
          ref={introRef}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="max-w-5xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-cyan-300">
              Vertex Suite
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
              Walk into the connected future.
            </h1>
            <p className="mt-6 text-base font-medium text-white/65 sm:text-lg">
              Scroll to follow the robot through every customer channel.
            </p>
          </div>
        </div>

        <div
          ref={channelsRef}
          className="pointer-events-none absolute inset-0 z-20 flex items-center px-7 opacity-0 sm:px-12 lg:px-20"
        >
          <div className="max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-cyan-300">
              Discover every channel
            </p>
            <h2 className="mt-4 text-5xl font-black tracking-[-0.045em] text-white sm:text-7xl">
              One journey.
              <span className="block text-white/45">Every interaction.</span>
            </h2>
          </div>
        </div>

        <div
          ref={ecosystemRef}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-end px-7 opacity-0 sm:px-12 lg:px-20"
        >
          <div className="max-w-xl text-right">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-violet-300">
              The ecosystem connects
            </p>
            <h2 className="mt-4 text-5xl font-black tracking-[-0.045em] text-white sm:text-7xl">
              Many channels.
              <span className="block text-white/45">One intelligent core.</span>
            </h2>
          </div>
        </div>

        <div
          ref={transitionRef}
          className="pointer-events-none absolute inset-0 z-30 bg-white opacity-0"
        />

        <div className="pointer-events-none absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/55">
          Scroll to enter
        </div>
      </div>
    </section>
  );
}
