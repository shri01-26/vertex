"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const defaultItems = Array.from({ length: 7 }, (_, i) => ({ id: i, label: `Card ${i + 1}` }));

function getCardTransform({
  index,
  activeIndex,
  total,
  rotation,
  depthOffset,
  scaleOffset,
  cardSpacing,
  visibleRange,
}) {
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  const distance = Math.abs(diff);
  const direction = Math.sign(diff);

  if (diff === 0) {
    return {
      x: 0,
      z: 0,
      scale: 1,
      rotateY: 0,
      opacity: 1,
      filter: "none",
      zIndex: 100,
      pointerEvents: "auto",
    };
  }

  if (distance > visibleRange) {
    return {
      x: direction * cardSpacing * visibleRange,
      z: -depthOffset * visibleRange,
      scale: Math.max(1 - scaleOffset * visibleRange, 0.5),
      rotateY: -direction * rotation,
      opacity: 0,
      filter: "blur(2px)",
      zIndex: 0,
      pointerEvents: "none",
    };
  }

  return {
    // Push the first (nearest) inactive cards further out, while keeping the
    // cards behind them at roughly their original position (sub-linear spacing).
    x: direction * cardSpacing * (1 + (distance - 1) * 0.4),
    z: -depthOffset * distance,
    scale: Math.max(1 - scaleOffset * distance, 0.5),
    rotateY: -direction * rotation,
    opacity: Math.max(0.6 - (distance - 1) * 0.15, 0.25),
    filter: `blur(${Math.min(distance * 0.7, 2)}px)`,
    zIndex: 100 - distance * 10,
    pointerEvents: "auto",
  };
}

export default function CoverflowCarousel({
  items,
  perspective = 1000,
  rotation = 40,
  depthOffset = 120,
  scaleOffset = 0.08,
  cardSpacing = 130,
  autoplay = true,
  autoplayDelay = 2000,
  visibleRange = 2,
  showArrows = false,
  renderSlide,
  className = "",
  stageClassName = "",
}) {
  const slides = items?.length ? items : defaultItems;
  const [activeIndex, setActiveIndex] = useState(0);
  const isHovering = useRef(false);

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    if (!autoplay || slides.length <= 1 || autoplayDelay <= 0) return;

    const id = setInterval(() => {
      if (!isHovering.current) {
        setActiveIndex((i) => (i + 1) % slides.length);
      }
    }, autoplayDelay);

    return () => clearInterval(id);
  }, [autoplay, autoplayDelay, slides.length]);

  return (
    <section
      className={`relative flex min-h-[520px] w-full items-center justify-center overflow-visible ${className}`}
      style={{ perspective: `${perspective}px` }}
      onMouseEnter={() => { isHovering.current = true; }}
      onMouseLeave={() => { isHovering.current = false; }}
    >
      <div
        className={`relative h-[420px] w-full max-w-5xl ${stageClassName}`}
      >
        {slides.map((slide, index) => {
          const t = getCardTransform({
            index,
            activeIndex,
            total: slides.length,
            rotation,
            depthOffset,
            scaleOffset,
            cardSpacing,
            visibleRange,
          });

          return (
            <motion.div
              key={slide.id ?? index}
              role="button"
              tabIndex={t.pointerEvents === "auto" ? 0 : -1}
              aria-label={`Show ${slide.label ?? `Card ${index + 1}`}`}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
              className="absolute left-1/2 top-[54%] cursor-pointer outline-none"
              style={{
                zIndex: t.zIndex,
                pointerEvents: t.pointerEvents,
              }}
              animate={{
                x: `calc(-50% + ${t.x}px)`,
                y: "-50%",
                scale: t.scale,
                rotateY: t.rotateY,
                opacity: t.opacity,
                filter: t.filter,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 38,
              }}
            >
              {renderSlide ? (
                renderSlide(slide, index, activeIndex)
              ) : (
                <div className="flex h-96 w-64 items-center justify-center rounded-2xl bg-neutral-800 text-3xl font-bold text-white">
                  Card {index + 1}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {showArrows && slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous card"
            className="absolute left-3 top-1/2 z-[200] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#0A3327]/85 text-white shadow-[0_8px_24px_rgba(6,35,27,0.35)] backdrop-blur-md transition hover:scale-105 hover:bg-[#0A3327] sm:left-6"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next card"
            className="absolute right-3 top-1/2 z-[200] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#0A3327]/85 text-white shadow-[0_8px_24px_rgba(6,35,27,0.35)] backdrop-blur-md transition hover:scale-105 hover:bg-[#0A3327] sm:right-6"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}
    </section>
  );
}
