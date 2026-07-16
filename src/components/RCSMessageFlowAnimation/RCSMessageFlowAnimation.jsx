import { useEffect } from "react";
import { motion, stagger, useAnimate, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import "./RCSMessageFlowAnimation.css";

const transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export default function RCSMessageFlowAnimation({
  sourceImage = "/assets/images/h1.png",
  destinationImage = "/assets/images/h2.png",
  className = "",
}) {
  const [scope, animate] = useAnimate();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      animate(
        "[data-flow-item]",
        { opacity: 1, scale: 1, x: 0, y: 0 },
        { duration: 0 }
      );
      return undefined;
    }

    let cancelled = false;

    const playSequence = async () => {
      while (!cancelled) {
        await animate(
          "[data-flow-item]",
          { opacity: 0, scale: 0.92, x: 0, y: 0 },
          { duration: 0 }
        );

        await animate(
          "[data-flow-source]",
          { opacity: 1, scale: 1, y: 0 },
          transition
        );

        await animate(
          "[data-flow-dot]",
          { opacity: 1, scale: 1 },
          {
            duration: 0.18,
            delay: stagger(0.075),
            ease: "easeOut",
          }
        );

        await animate(
          "[data-flow-arrow]",
          { opacity: 1, x: 0, scale: 1 },
          { duration: 0.28 }
        );

        await animate(
          "[data-flow-sent]",
          { opacity: 1, scale: 1, y: 0 },
          {
            duration: 0.38,
            type: "spring",
            stiffness: 260,
            damping: 18,
          }
        );

        await animate(
          "[data-flow-destination]",
          { opacity: 1, scale: 1, y: 0 },
          transition
        );

        await new Promise((resolve) => setTimeout(resolve, 1800));

        await animate(
          "[data-flow-item]",
          { opacity: 0, scale: 0.96 },
          { duration: 0.4 }
        );

        await new Promise((resolve) => setTimeout(resolve, 250));
      }
    };

    playSequence();

    return () => {
      cancelled = true;
    };
  }, [animate, reduceMotion]);

  return (
    <div
      ref={scope}
      className={`relative mx-auto flex w-full max-w-[820px] flex-col items-center justify-center gap-8 py-6 lg:flex-row lg:gap-6 lg:py-0 ${className}`}
      role="img"
      aria-label="RCS message sent animation from source screen to delivered rich message preview"
    >
      {/* First Image */}
      <motion.div
        data-flow-item
        data-flow-source
        initial={{
          opacity: reduceMotion ? 1 : 0,
          scale: reduceMotion ? 1 : 0.92,
          y: reduceMotion ? 0 : 18,
        }}
        className="rcs-neon-border relative w-[min(76vw,270px)] shrink-0 rounded-[30px] p-[1.5px] sm:w-[285px] lg:w-[clamp(220px,19vw,300px)]"
      >
        <div className="relative overflow-hidden rounded-[28px] bg-white">
          <img
            className="block h-auto w-full"
            src={sourceImage}
            alt="RCS message source screen"
          />
        </div>
      </motion.div>

      {/* Arrow + Message Sent */}
      <div className="relative flex h-28 w-28 shrink-0 rotate-90 items-center justify-center lg:h-24 lg:w-[170px] lg:rotate-0">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, index) => (
            <motion.span
              key={index}
              data-flow-item
              data-flow-dot
              initial={{
                opacity: reduceMotion ? 1 : 0,
                scale: reduceMotion ? 1 : 0.4,
              }}
              className="rcs-arrow-glow h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#44BBFF] to-[#22D3EE]"
            />
          ))}

          <motion.span
            data-flow-item
            data-flow-arrow
            initial={{
              opacity: reduceMotion ? 1 : 0,
              scale: reduceMotion ? 1 : 0.7,
              x: reduceMotion ? 0 : -8,
            }}
            className="rcs-arrow-glow ml-0.5 h-0 w-0 border-y-[8px] border-l-[15px] border-y-transparent border-l-[#22D3EE]"
          />
        </div>

        <motion.div
          data-flow-item
          data-flow-sent
          initial={{
            opacity: reduceMotion ? 1 : 0,
            scale: reduceMotion ? 1 : 0.7,
            y: reduceMotion ? 0 : 8,
          }}
          className="rcs-sent-pill absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-[0.72rem] font-bold text-slate-800 lg:-bottom-5"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
            <Check size={13} strokeWidth={3} />
          </span>
          Message Sent
        </motion.div>
      </div>

      {/* Second Image */}
      <motion.div
        data-flow-item
        data-flow-destination
        initial={{
          opacity: reduceMotion ? 1 : 0,
          scale: reduceMotion ? 1 : 0.92,
          y: reduceMotion ? 0 : 18,
        }}
        className="rcs-neon-border relative w-[min(80vw,285px)] shrink-0 rounded-[34px] p-[1.5px] sm:w-[300px] lg:w-[clamp(230px,20vw,310px)]"
      >
        <div className="relative overflow-hidden rounded-[32px] bg-white">
          <img
            className="block h-auto w-full"
            src={destinationImage}
            alt="Delivered RCS message preview"
          />
        </div>
      </motion.div>
    </div>
  );
}