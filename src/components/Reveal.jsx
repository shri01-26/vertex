"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const REVEAL_EASE = [0.22, 1, 0.36, 1];

/* Where a piece of content travels in from. Side offsets are scaled down on
   small screens so nothing starts outside the viewport. */
const revealOffset = (direction, distance) => {
  switch (direction) {
    case "left":
      return { x: -60 * distance, y: 0 };
    case "right":
      return { x: 60 * distance, y: 0 };
    // Centre content grows into place rather than sliding sideways.
    case "center":
      return { x: 0, y: 12 * distance, scale: 0.94 };
    default:
      return { x: 0, y: 28 * distance };
  }
};

function useRevealDistance() {
  const [distance, setDistance] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setDistance(mq.matches ? 0.45 : 1);

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return distance;
}

/* ── Reveal ── content arrives from `direction` once, on scroll or on mount.
   `onMount` drives the hero, which is already on screen at load.
   `strength` scales the travel distance — use below 1 for a subtler move. */
export default function Reveal({
  children,
  className = "",
  as = "div",
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  onMount = false,
  strength = 1,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const distance = useRevealDistance();
  const MotionTag = motion[as] ?? motion.div;

  const hidden = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, ...revealOffset(direction, distance * strength) };

  const shown = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0, scale: 1 };

  const trigger = onMount
    ? { animate: shown }
    : { whileInView: shown, viewport: { once: true, amount } };

  return (
    <MotionTag
      className={className}
      initial={hidden}
      {...trigger}
      transition={{ duration, delay, ease: REVEAL_EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
