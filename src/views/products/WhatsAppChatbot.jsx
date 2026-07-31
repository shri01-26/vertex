"use client";

import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "../../components/AppLink";
import {
  AlertCircle,
  ArrowRight,
  Bot,
  BrainCircuit,
  GitBranch,
  CalendarCheck2,
  CalendarDays,
  Settings2,
  Users,
  Check,
  CheckCircle2,
  CircleX,
  Clock3,
  Database,
  Headphones,
  MessageCircle,
  MessageSquareText,
  MousePointerClick,
  Network,
  RotateCcw,
  Route,
  Send,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Workflow,
  Zap,
  BadgeCheck,
  CalendarCheck,
  ChevronRight,
  CircleDot,
  FileText,
  ShoppingBag,
  Target,
  ChevronLeft,
  Pause,
  Play,
  Smartphone,
  BarChart3,
  LockKeyhole,
  ClipboardList,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const businessApiHeadingProps = {
  initial: {
    opacity: 0,
    y: 28,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.35,
  },
  transition: {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1],
  },
};

function AnimatedTypingText({ text, className = "" }) {
  return (
    <span
      className={`chatbot-hero-keyword relative inline-block max-w-full whitespace-nowrap align-baseline leading-[inherit] !text-[#10b957] ${className}`}
      style={{ contain: "layout paint", color: "#10b957" }}
    >
      <span className="invisible inline-block whitespace-nowrap leading-[inherit] !text-[#10b957]" style={{ color: "#10b957" }}>
        {text}
      </span>

      <motion.span
        initial={{ width: 0 }}
        animate={{
          width: ["0%", "100%", "100%", "0%", "0%"],
        }}
        transition={{
          duration: 4.8,
          times: [0, 0.38, 0.58, 0.9, 1],
          repeat: Infinity,
          repeatDelay: 0.45,
          ease: "linear",
        }}
        className="absolute left-0 top-0 inline-block overflow-hidden whitespace-nowrap leading-[inherit] !text-[#10b957]"
        style={{ color: "#10b957" }}
      >
        {text}
      </motion.span>

      <motion.span
        animate={{
          left: ["0%", "100%", "100%", "0%", "0%"],
          opacity: [1, 1, 0, 0, 1],
        }}
        transition={{
          left: {
            duration: 4.8,
            times: [0, 0.38, 0.58, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 0.45,
            ease: "linear",
          },
          opacity: {
            duration: 0.85,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute top-[0.08em] inline-block h-[0.9em] w-[3px] rounded-full bg-[#10b957]"
      />

      <motion.span
        animate={{
          scaleX: [0, 1, 1, 0, 0],
          opacity: [0, 1, 1, 0, 0],
        }}
        transition={{
          duration: 4.8,
          times: [0, 0.38, 0.58, 0.9, 1],
          repeat: Infinity,
          repeatDelay: 0.45,
          ease: "linear",
        }}
        className="absolute -bottom-1 left-0 -z-10 h-[8px] w-full origin-left rounded-full bg-[#DDF8E7]"
      />
    </span>
  );
}
/* =========================================================
   Before vs After comparison section
========================================================= */

const beforeSupportPoints = [
  "Delayed responses during peak hours",
  "High dependency on human agents",
  "Customers waiting for answers",
  "Repetitive queries consuming time",
  "Slow follow-ups",
  "Manual data collection",
  "Limited conversation tracking",
];

const afterSupportPoints = [
  "Faster responses to common questions",
  "Automated handling of repetitive queries",
  "Guided conversations with buttons, lists and Flows",
  "Routing to departments or agents",
  "Automated lead qualification",
  "Structured data captured in chat",
  "Send reminders and follow-ups using approved templates",
];

const comparisonContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const comparisonItem = {
  hidden: {
    opacity: 0,
    x: -20,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const afterComparisonItem = {
  hidden: {
    opacity: 0,
    x: 20,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ComparisonSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="chatbot-comparison"
      className="relative isolate overflow-hidden bg-[#FAFFFC] px-5 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#f6fff9_48%,#ffffff_100%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-20 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.06) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)",
        }}
      />

      {/* Background glows */}
      <motion.div
        className="absolute -left-28 top-[26%] -z-10 h-[380px] w-[380px] rounded-full bg-red-100/70 blur-[100px]"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.55, 0.35],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-28 top-[24%] -z-10 h-[420px] w-[420px] rounded-full bg-emerald-200/55 blur-[110px]"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1.08, 0.96, 1.08],
                opacity: [0.45, 0.7, 0.45],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="mx-auto max-w-[900px] text-center">
          <motion.h2
            {...businessApiHeadingProps}
            className="wa-section-heading mx-auto max-w-none whitespace-nowrap text-center text-[clamp(1.65rem,4.4vw,4.2rem)] font-extrabold leading-[1.1] tracking-normal text-[#111827] max-md:whitespace-normal"
          >
            <span className="block">Turn a Broken Support Flow into a</span>
            <span className="block">
              <span className="text-[#16A34A]">Chatbot-Powered</span> Customer
              Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="wa-section-sub mx-auto mt-6 max-w-[1280px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] md:whitespace-nowrap"
          >
            See how a WhatsApp chatbot turns delayed support into faster, structured, and manageable conversations.
          </motion.p>
        </div>

        {/* Main comparison area */}
        <div className="relative mt-9 grid items-stretch gap-5 lg:grid-cols-[1fr_90px_1fr] lg:gap-4">
          {/* =====================================================
              BEFORE CARD
          ====================================================== */}

          <motion.article
            initial={{
              opacity: 0,
              x: -60,
              rotateY: 8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -7,
            }}
            className="relative overflow-hidden rounded-[30px] border border-red-100 bg-white shadow-[0_30px_80px_rgba(127,29,29,0.09)]"
          >
            {/* Red top line */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-red-400 via-red-500 to-orange-400"
            />

            {/* Card heading */}
            <div className="cmp-card-head flex items-center justify-between border-b border-red-100 bg-red-50/55 px-3 py-1.5 sm:px-4">
              <div className="min-w-0">
                <p className="text-[9.5px] font-black uppercase tracking-[0.1em] !text-red-600">
                  Before
                </p>

                <div className="mt-1 flex items-center gap-2.5">
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.08, 1],
                          }
                    }
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                    }}
                    className="-mt-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-500"
                    style={{ transform: "translateY(-4px)" }}
                  >
                    <AlertCircle size={16} />
                  </motion.span>

                  <h3
                    className="cmp-card-title inline-block whitespace-nowrap !text-[1.12rem] !font-medium !leading-none text-[#281315]"
                    style={{
                      fontSize: "1.12rem",
                      lineHeight: 1,
                      transform: "translateY(0)",
                    }}
                  >
                    Manual Support Experience
                  </h3>
                </div>
              </div>

              <span className="cmp-card-badge rounded-full border border-red-200 bg-white px-2.5 py-1 text-[10px] font-bold leading-none text-red-500">
                Broken Flow
              </span>
            </div>

            {/* Before image area */}
            <div className="cmp-media relative mx-5 -mt-6 flex justify-center overflow-hidden rounded-[22px] sm:mx-6">
              <img
                src="/assets/images/before.webp"
                alt="Manual support experience before automation"
                loading="lazy"
                className="block h-auto w-[54%] object-contain"
              />

              <div className="hidden absolute inset-0 bg-gradient-to-r from-[#301417]/70 via-[#301417]/25 to-transparent" />

              <div className="hidden absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Slow response badge */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -6, 0],
                        rotate: [-1, 1, -1],
                      }
                }
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden absolute left-4 top-4 max-w-[150px] rounded-2xl rounded-bl-sm border border-white/50 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <p className="text-[11px] font-medium text-slate-500">
                  Customer
                </p>

                <p className="mt-1 text-sm font-extrabold text-[#281315]">
                  “Is anyone available?”
                </p>
              </motion.div>

              {/* Waiting badge */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: [0, 5, 0],
                        y: [0, -4, 0],
                      }
                }
                transition={{
                  duration: 3.5,
                  delay: 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden absolute bottom-4 right-4 max-w-[170px] rounded-2xl rounded-br-sm border border-red-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-2 text-red-500">
                  <Clock3 size={15} />

                  <span className="text-[11px] font-bold">Long wait time</span>
                </div>

                <div className="mt-2 flex gap-1">
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: [0.25, 1, 0.25],
                              y: [0, -3, 0],
                            }
                      }
                      transition={{
                        duration: 1.2,
                        delay: dot * 0.2,
                        repeat: Infinity,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-red-400"
                    />
                  ))}
                </div>
              </motion.div>

              <div className="hidden absolute bottom-4 left-4 items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-2 text-xs font-bold text-white backdrop-blur-md">
                <Headphones size={14} />
                Waiting for an agent
              </div>
            </div>

            {/* Before list */}
            <motion.div
              variants={comparisonContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="cmp-list space-y-1 px-5 py-2.5 sm:px-6"
            >
              {beforeSupportPoints.map((point, index) => (
                <motion.div
                  key={point}
                  variants={comparisonItem}
                  whileHover={{
                    x: 7,
                    scale: 1.01,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 22,
                  }}
                  className="group relative flex items-start gap-2 overflow-hidden rounded-xl bg-red-50/25 px-3 py-1.5 transition-all duration-300 hover:bg-red-50/45 hover:shadow-[0_6px_18px_rgba(239,68,68,0.06)]"
                >
                  {/* Moving red highlight */}
                  <motion.span
                    className="pointer-events-none absolute inset-y-0 left-0 w-[45%] -skew-x-12 bg-gradient-to-r from-transparent via-red-100/80 to-transparent"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            x: ["-180%", "360%"],
                          }
                    }
                    transition={{
                      duration: 2,
                      delay: index * 0.35,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Animated error icon */}
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.12, 1],
                            rotate: [0, -7, 7, 0],
                          }
                    }
                    transition={{
                      duration: 2.6,
                      delay: index * 0.18,
                      repeat: Infinity,
                      repeatDelay: 2.5,
                      ease: "easeInOut",
                    }}
                    className="relative mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500"
                  >
                    <CircleX size={15} strokeWidth={2.5} />

                    <motion.span
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              scale: [1, 1.8, 1],
                              opacity: [0.3, 0, 0.3],
                            }
                      }
                      transition={{
                        duration: 1.8,
                        delay: index * 0.2,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 rounded-full border border-red-300"
                    />
                  </motion.span>

                  <div className="relative flex flex-1 items-start">
                    <motion.p
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              color: ["#DC2626", "#EF4444", "#DC2626"],
                            }
                      }
                      transition={{
                        duration: 2.6,
                        delay: index * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-[13px] font-bold leading-5 text-red-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-700"
                    >
                      {point}
                    </motion.p>
                  </div>

                  {/* Hover indicator */}
                  <motion.span
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    className="absolute bottom-1.5 right-0 top-1.5 w-[3px] origin-center rounded-full bg-red-400"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.article>

          {/* =====================================================
              CENTER TRANSFORMATION
          ====================================================== */}

          <div className="relative flex min-h-[150px] items-center justify-center lg:min-h-full">
            {/* Desktop vertical connection */}
            <div className="absolute bottom-[10%] top-[10%] hidden w-px overflow-hidden bg-gradient-to-b from-red-200 via-slate-200 to-emerald-200 lg:block">
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: ["-120%", "850%"],
                      }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 h-16 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-red-400 via-yellow-300 to-emerald-400"
              />
            </div>

            {/* Mobile horizontal line */}
            <div className="absolute left-[10%] right-[10%] top-1/2 h-px bg-gradient-to-r from-red-200 via-slate-200 to-emerald-200 lg:hidden" />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.6,
                rotate: -20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 150,
                damping: 14,
              }}
              className="relative z-20 flex flex-col items-center"
            >
              {/* VS badge */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        boxShadow: [
                          "0 0 0 0 rgba(37,211,102,0)",
                          "0 0 0 14px rgba(37,211,102,0.08)",
                          "0 0 0 0 rgba(37,211,102,0)",
                        ],
                      }
                }
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                }}
                className="flex h-16 w-16 items-center justify-center rounded-full border-[6px] border-white bg-[#071B2C] text-base font-black text-white shadow-[0_16px_35px_rgba(7,27,44,0.2)]"
              >
                VS
              </motion.div>

              {/* Center bot */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -8, 0],
                        rotate: [0, 2, 0, -2, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-7 hidden h-20 w-20 items-center justify-center rounded-[26px] border border-emerald-200 bg-white text-[#19B75A] shadow-[0_20px_45px_rgba(25,183,90,0.18)] lg:flex"
              >
                <Bot size={37} />
              </motion.div>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0.45, 1, 0.45],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mt-4 hidden rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-600 lg:block"
              >
                AI Transformation
              </motion.div>
            </motion.div>
          </div>

          {/* =====================================================
              AFTER CARD
          ====================================================== */}

          <motion.article
            initial={{
              opacity: 0,
              x: 60,
              rotateY: -8,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotateY: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -7,
            }}
            className="relative overflow-hidden rounded-[30px] border border-emerald-100 bg-white shadow-[0_30px_80px_rgba(15,118,63,0.11)]"
          >
            {/* Green top line */}
            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
              className="absolute inset-x-0 top-0 h-1 origin-right bg-gradient-to-r from-[#7BECA2] via-[#25D366] to-[#0F9E4A]"
            />

            {/* Card heading */}
            <div className="cmp-card-head flex items-center justify-between border-b border-emerald-100 bg-emerald-50/55 px-3 py-1.5 sm:px-4">
              <div className="min-w-0">
                <p className="text-[9.5px] font-black uppercase tracking-[0.1em] !text-emerald-600">
                  After
                </p>

                <div className="mt-1 flex items-center gap-2.5">
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: [0, 8, -8, 0],
                            scale: [1, 1.08, 1],
                          }
                    }
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                    }}
                    className="-mt-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-[#19B75A]"
                    style={{ transform: "translateY(-4px)" }}
                  >
                    <Sparkles size={16} />
                  </motion.span>

                  <h3
                    className="cmp-card-title inline-block whitespace-nowrap !text-[1.12rem] !font-medium !leading-none text-[#0C2C1B]"
                    style={{ fontSize: "1.12rem", lineHeight: 1 }}
                  >
                    WhatsApp Chatbot Experience
                  </h3>
                </div>
              </div>

              <span className="cmp-card-badge rounded-full border border-emerald-200 bg-white px-2.5 py-1 text-[10px] font-bold leading-none text-emerald-600">
                Automated
              </span>
            </div>

            {/* After image area */}
            <div className="cmp-media relative mx-5 -mt-6 flex h-[clamp(260px,27vw,390px)] justify-center overflow-hidden rounded-[22px] sm:mx-6">
              <img
                src="/assets/images/after.webp"
                alt="AI chatbot experience after automation"
                loading="lazy"
                className="block object-contain"
                style={{
                  width: "60%",
                  height: "auto",
                  maxWidth: "60%",
                }}
              />

              {/* Background circles */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="hidden absolute left-1/2 top-1/2 h-[185px] w-[185px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-300"
              />

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.14, 1],
                        opacity: [0.35, 0.65, 0.35],
                      }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/40 blur-2xl"
              />

              {/* Central bot */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -9, 0],
                        rotate: [0, 1.5, 0, -1.5, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden absolute left-1/2 top-1/2 h-[105px] w-[105px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[34px] border-[6px] border-white bg-[#071B2C] text-[#4AF087] shadow-[0_24px_50px_rgba(15,118,63,0.25)]"
              >
                <Bot size={48} />

                <motion.span
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [0.3, 1, 0.3],
                        }
                  }
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="absolute right-2 top-2 h-3 w-3 rounded-full border-2 border-[#071B2C] bg-[#25D366]"
                />
              </motion.div>

              {/* Customer chat */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -5, 0],
                      }
                }
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden absolute left-3 top-4 max-w-[150px] rounded-2xl rounded-bl-sm border border-emerald-100 bg-white px-4 py-3 shadow-lg"
              >
                <p className="text-[10px] font-bold text-slate-400">Customer</p>

                <p className="mt-1 text-xs font-extrabold text-[#173527]">
                  “Where is my order?”
                </p>
              </motion.div>

              {/* Instant answer */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, 5, 0],
                      }
                }
                transition={{
                  duration: 3.5,
                  delay: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden absolute bottom-4 right-3 max-w-[175px] rounded-2xl rounded-br-sm border border-emerald-200 bg-[#EFFFF4] px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Zap size={13} className="text-[#19B75A]" />

                  <p className="text-[10px] font-black uppercase tracking-wide text-emerald-600">
                    Instant response
                  </p>
                </div>

                <p className="mt-1.5 text-xs font-extrabold leading-5 text-[#173527]">
                  Your order is out for delivery.
                </p>
              </motion.div>

              {/* Lead qualified badge */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        x: [0, 5, 0],
                        scale: [1, 1.03, 1],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden absolute right-3 top-4 items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-2 shadow-lg"
              >
                <CheckCircle2 size={14} className="text-[#19B75A]" />

                <span className="text-[10px] font-black text-emerald-700">
                  Lead Qualified
                </span>
              </motion.div>
            </div>

            {/* After list */}
            <motion.div
              variants={comparisonContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="cmp-list space-y-1 px-5 py-2.5 sm:px-6"
            >
              {afterSupportPoints.map((point, index) => (
                <motion.div
                  key={point}
                  variants={afterComparisonItem}
                  whileHover={{
                    x: 7,
                    scale: 1.01,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 22,
                  }}
                  className="group relative flex items-start gap-2 overflow-hidden rounded-xl bg-emerald-50/25 px-3 py-1.5 transition-all duration-300 hover:bg-emerald-50/45 hover:shadow-[0_6px_18px_rgba(34,197,94,0.07)]"
                >
                  {/* Moving green highlight */}
                  <motion.span
                    className="pointer-events-none absolute inset-y-0 left-0 w-[45%] -skew-x-12 bg-gradient-to-r from-transparent via-emerald-100/90 to-transparent"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            x: ["-180%", "360%"],
                          }
                    }
                    transition={{
                      duration: 2,
                      delay: index * 0.35,
                      repeat: Infinity,
                      repeatDelay: 4.5,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Animated success icon */}
                  <motion.span
                    initial={{
                      scale: 0.6,
                      rotate: -30,
                    }}
                    whileInView={{
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{ once: true }}
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            y: [0, -2, 0],
                            scale: [1, 1.12, 1],
                          }
                    }
                    transition={{
                      scale: {
                        duration: 2.4,
                        delay: index * 0.18,
                        repeat: Infinity,
                        repeatDelay: 2.5,
                        ease: "easeInOut",
                      },
                      y: {
                        duration: 2.4,
                        delay: index * 0.18,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="relative mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#19B75A]"
                  >
                    <CheckCircle2 size={15} strokeWidth={2.5} />

                    {/* Success ripple */}
                    <motion.span
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              scale: [1, 1.9, 1],
                              opacity: [0.45, 0, 0.45],
                            }
                      }
                      transition={{
                        duration: 1.8,
                        delay: index * 0.22,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 rounded-full border border-emerald-300"
                    />
                  </motion.span>

                  <div className="relative flex flex-1 items-start">
                    <motion.p
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              color: ["#15803D", "#22C55E", "#15803D"],
                            }
                      }
                      transition={{
                        duration: 2.6,
                        delay: index * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-[13px] font-bold leading-5 text-green-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-800"
                    >
                      {point}
                    </motion.p>
                  </div>

                  {/* Hover indicator */}
                  <motion.span
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    className="absolute bottom-1.5 right-0 top-1.5 w-[3px] origin-center rounded-full bg-[#25D366]"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.article>
        </div>

      </div>
    </section>
  );
}



/* =========================================================
   FULL SCREEN INTERACTIVE CHATBOT BOOK
========================================================= */

const chatbotBookPages = [
  {
    id: "answer",
    number: "01",
    eyebrow: "ANSWER",
    title: "Fast, Consistent Customer Responses",
    tabTitle: "Fast Responses",
    heading: "Fast, consistent customer responses.",
    description:
      "Handle common customer questions with approved knowledge, business rules, and automated replies reducing dependence on human availability.",
    color: "#16A34A",
    softColor: "#ECFDF3",
    borderColor: "#BBF7D0",
    icon: MessageCircle,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=88",
    imageAlt: "Customer using an AI chatbot",
    points: [
      "Respond to FAQs, product queries, policies, and service questions",
      "Process voice notes through connected speech-to-text capabilities, where enabled",
      "Support buttons, lists, images, videos, PDFs, and other WhatsApp message formats",
    ],
    type: "answer",
  },
  {
    id: "guide",
    number: "02",
    eyebrow: "GUIDE",
    title: "Structured Journeys That Simplify Decisions",
    tabTitle: "Guided Journeys",
    heading: "Structured journeys that simplify decisions.",
    description:
      "Use interactive options and guided steps to help customers find relevant information without unnecessary back-and-forth.",
    color: "#2563EB",
    softColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    icon: GitBranch,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=88",
    imageAlt: "Customer journey and analytics dashboard",
    points: [
      "Present quick replies, menus, and lists for clearer customer choices",
      "Launch WhatsApp Flows for forms, registrations, bookings, and guided data collection",
      "Apply conditions and routing rules through Vertex Suite to personalise each journey",
    ],
    type: "guide",
  },
  {
    id: "assist",
    number: "03",
    eyebrow: "ASSIST",
    title: "Help Customers Complete Routine Tasks",
    tabTitle: "Routine Tasks",
    heading: "Help customers complete routine tasks.",
    description:
      "Guide customers through supported service actions directly from the conversation, while keeping each step connected to the relevant business system.",
    color: "#16A34A",
    softColor: "#ECFDF3",
    borderColor: "#BBF7D0",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=88",
    imageAlt: "Business professional completing digital tasks",
    points: [
      "Handle bookings, orders, ticket creation and status updates",
      "Capture clean, structured data for CRM and backend systems",
      "Trigger actions based on user responses or pre-set rules",
    ],
    type: "assist",
  },
  {
    id: "automate",
    number: "04",
    eyebrow: "AUTOMATE",
    title: "Keep Processes Moving in the Background",
    tabTitle: "Workflow Automation",
    heading: "Keep processes moving in the background.",
    description:
      "Connect conversations with workflows that route requests, update systems, and continue customer communication automatically.",
    color: "#2563EB",
    softColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    icon: Settings2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=88",
    imageAlt: "Automated business workflow on a laptop",
    points: [
      "Create leads, support tickets, tasks, or connected workflow actions",
      "Send reminders and follow-ups using approved templates when required",
      "Transfer complex conversations to human agents with available context",
    ],
    type: "automate",
  },
];

const bookPageVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? "100%" : "-100%",
    rotateY: direction > 0 ? 35 : -35,
    scale: 0.96,
  }),

  center: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
  },

  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? "-100%" : "100%",
    rotateY: direction > 0 ? -35 : 35,
    scale: 0.96,
  }),
};

/* Phones get a flat horizontal slide instead of the 3D page turn —
   the perspective flip reads as a glitch on a narrow screen. */
const bookSlideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? "100%" : "-100%",
  }),

  center: {
    opacity: 1,
    x: 0,
  },

  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? "-100%" : "100%",
  }),
};

/* =========================================================
   ANIMATED FLOW NODE
========================================================= */

function BookFlowNode({
  icon: Icon,
  label,
  sublabel,
  color,
  softColor,
  delay,
  compact = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
        scale: 0.88,
        filter: "blur(6px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex items-center gap-3 rounded-2xl border bg-white shadow-[0_12px_35px_rgba(15,23,42,0.07)] ${
        compact ? "px-3 py-2.5" : "px-4 py-3.5"
      }`}
      style={{
        borderColor: `${color}25`,
      }}
    >
      <motion.span
        initial={{
          scale: 0,
          rotate: -30,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          delay: delay + 0.15,
          type: "spring",
          stiffness: 220,
          damping: 15,
        }}
        className={`relative flex shrink-0 items-center justify-center rounded-xl ${
          compact ? "h-9 w-9" : "h-11 w-11"
        }`}
        style={{
          color,
          backgroundColor: softColor,
        }}
      >
        <Icon size={compact ? 17 : 21} />

        <motion.span
          animate={{
            scale: [1, 1.65, 1],
            opacity: [0.25, 0, 0.25],
          }}
          transition={{
            duration: 2.2,
            delay,
            repeat: Infinity,
          }}
          className="absolute inset-0 rounded-xl border"
          style={{
            borderColor: color,
          }}
        />
      </motion.span>

      <div className="min-w-0 flex-1">
        <p
          className={`font-black text-[#13251C] ${
            compact ? "text-[11px]" : "text-sm"
          }`}
        >
          {label}
        </p>

        {sublabel && (
          <p
            className={`mt-0.5 font-medium text-slate-500 ${
              compact ? "text-[8px]" : "text-[11px]"
            }`}
          >
            {sublabel}
          </p>
        )}
      </div>

      <motion.span
        initial={{
          opacity: 0,
          scale: 0,
          rotate: -30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          delay: delay + 0.35,
          type: "spring",
        }}
      >
        <CheckCircle2
          size={compact ? 15 : 18}
          style={{
            color,
          }}
        />
      </motion.span>
    </motion.div>
  );
}

/* =========================================================
   ANIMATED CONNECTOR
========================================================= */

function BookConnector({ color, delay, height = 30 }) {
  return (
    <div
      className="relative mx-auto w-px overflow-hidden"
      style={{
        height,
        backgroundColor: `${color}20`,
      }}
    >
      <motion.span
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
        transition={{
          duration: 0.45,
          delay,
        }}
        className="absolute inset-0 origin-top"
        style={{
          backgroundColor: color,
        }}
      />

      <motion.span
        initial={{
          y: -8,
          opacity: 0,
        }}
        animate={{
          y: height,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1,
          delay: delay + 0.1,
        }}
        className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />
    </div>
  );
}

/* =========================================================
   ANSWER VISUAL
========================================================= */

function AnswerBookVisual({ animationCycle }) {
  return (
    <motion.div
      key={`answer-${animationCycle}`}
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="book-visual pointer-events-none relative flex h-[700px] w-full items-center justify-center overflow-hidden bg-transparent p-0"
    >
      <div className="relative h-[86%] w-[86%] -translate-x-5">
        <svg
          aria-hidden="true"
          className="absolute inset-0 z-0 h-full w-full overflow-visible"
          viewBox="0 0 1200 980"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="chatbotOrbitLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#16A34A" stopOpacity="0.12" />
              <stop offset="48%" stopColor="#22C55E" stopOpacity="0.52" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.18" />
            </linearGradient>
            <filter id="chatbotOrbitGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M278 178 C470 95 760 96 965 190"
            stroke="url(#chatbotOrbitLine)"
            strokeWidth="3"
            strokeDasharray="8 12"
            strokeLinecap="round"
            opacity="0.42"
          />
          <path
            d="M245 210 C152 356 154 566 250 724"
            stroke="url(#chatbotOrbitLine)"
            strokeWidth="3"
            strokeDasharray="8 12"
            strokeLinecap="round"
            opacity="0.38"
          />
          <path
            d="M250 724 C336 812 452 854 592 852"
            stroke="url(#chatbotOrbitLine)"
            strokeWidth="2"
            strokeDasharray="6 11"
            strokeLinecap="round"
            opacity="0.24"
          />
        </svg>

        <img
          src="/assets/images/chatbotbook1.webp"
          alt="WhatsApp chatbot automated response preview"
          className="relative z-10 h-full w-full object-contain"
          loading="lazy"
        />
        <span className="absolute left-[3.5%] top-[4%] z-20 h-9 w-9 rounded-full bg-[#F9FCFE] blur-[2px]" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   GUIDE VISUAL
========================================================= */
function GuideBookVisual({ animationCycle }) {
  return (
    <motion.div
      key={`guide-${animationCycle}`}
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="book-visual pointer-events-none relative flex h-[700px] w-full items-center justify-center overflow-visible bg-transparent p-0"
    >
      <div className="relative h-[88%] w-[92%] -translate-x-6 translate-y-6">
        <img
          src="/assets/images/chatbotbook2.webp"
          alt="WhatsApp chatbot guided journey preview"
          className="relative z-10 h-full w-full object-contain"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   ASSIST VISUAL
========================================================= */

function AssistBookVisual({ animationCycle }) {
  return (
    <motion.div
      key={`assist-${animationCycle}`}
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="book-visual pointer-events-none relative flex h-[700px] w-full items-center justify-center overflow-visible bg-transparent p-0"
    >
      <div className="relative h-[88%] w-[92%] translate-y-6">
        <img
          src="/assets/images/chatbotbook3.webp"
          alt="WhatsApp chatbot guided task completion preview"
          className="relative z-10 h-full w-full object-contain"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   AUTOMATE VISUAL
========================================================= */

function AutomateBookVisual({ page, animationCycle }) {
  const actions = [
    {
      label: "Send Catalog",
      icon: ShoppingBag,
    },
    {
      label: "Notify Team",
      icon: Users,
    },
    {
      label: "Create Lead",
      icon: UserRoundCheck,
    },
  ];

  return (
    <motion.div
      key={`automate-${animationCycle}`}
      className="book-visual relative flex h-[520px] w-full items-center justify-center overflow-hidden rounded-[30px] border border-blue-100 bg-[#F8FBFF] p-6"
    >
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.3, 0.65, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute h-64 w-64 rounded-full bg-blue-200/50 blur-[70px]"
      />

      <div className="relative z-10 w-full max-w-[460px]">
        <BookFlowNode
          icon={MessageSquareText}
          label="Customer Trigger"
          sublabel="I want product details"
          color={page.color}
          softColor={page.softColor}
          delay={0}
        />

        <BookConnector color={page.color} delay={0.45} height={34} />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.9,
            type: "spring",
          }}
          className="mx-auto flex max-w-[240px] items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-xs font-black text-white shadow-[0_15px_35px_rgba(37,99,235,0.28)]"
        >
          <Bot size={17} />
          AI Processes Intent
        </motion.div>

        <BookConnector color={page.color} delay={1.35} height={34} />

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 1.75,
            type: "spring",
          }}
          className="mx-auto flex max-w-[230px] items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs font-black text-blue-700"
        >
          <GitBranch size={16} />
          Select Business Action
        </motion.div>

        <div className="relative mx-auto h-[75px] max-w-[390px]">
          <svg
            viewBox="0 0 390 75"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <motion.path
              d="M195 0 V18 C195 31 66 28 66 55 V72"
              stroke={page.color}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.9,
                delay: 2.2,
              }}
            />

            <motion.path
              d="M195 0 V72"
              stroke={page.color}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.8,
                delay: 2.45,
              }}
            />

            <motion.path
              d="M195 0 V18 C195 31 324 28 324 55 V72"
              stroke={page.color}
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.9,
                delay: 2.7,
              }}
            />
          </svg>
        </div>

        <div className="-mt-1 grid grid-cols-3 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;

            return (
              <motion.div
                key={action.label}
                initial={{
                  opacity: 0,
                  y: 18,
                  scale: 0.85,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 3.1 + index * 0.2,
                  type: "spring",
                }}
                className="rounded-xl border border-blue-100 bg-white px-2 py-2.5 text-center shadow-[0_8px_22px_rgba(37,99,235,0.08)]"
              >
                <Icon size={17} className="mx-auto text-blue-500" />

                <p className="mt-1 text-[9px] font-black text-blue-800">
                  {action.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <BookConnector color={page.color} delay={3.8} height={34} />

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
            scale: 0.88,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 4.15,
            type: "spring",
          }}
          className="mx-auto flex max-w-[225px] items-center justify-center gap-2 rounded-full bg-[#071B2C] px-4 py-2 text-[10px] font-black text-white"
        >
          <CheckCircle2 size={17} className="text-[#42E982]" />
          Business Action Completed
        </motion.div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PAGE VISUAL SELECTOR
========================================================= */

function ChatbotBookVisual({ page, animationCycle, reduceMotion }) {
  if (page.type === "answer") {
    return (
      <AnswerBookVisual
        page={page}
        animationCycle={animationCycle}
        reduceMotion={reduceMotion}
      />
    );
  }

if (page.type === "guide") {
  return (
    <GuideBookVisual
      page={page}
      animationCycle={animationCycle}
      reduceMotion={reduceMotion}
    />
  );
}

  if (page.type === "assist") {
    return <AssistBookVisual page={page} animationCycle={animationCycle} />;
  }

  return <AutomateBookVisual page={page} animationCycle={animationCycle} />;
}

/* =========================================================
   COMPLETE BOOK SECTION
========================================================= */

/* Matches the phone breakpoint used by the mobile styles below.
   Starts false so the server and the first client render agree. */
function useIsPhone() {
  const [isPhone, setIsPhone] = React.useState(false);

  React.useEffect(() => {
    const phoneQuery = window.matchMedia("(max-width: 767px)");

    const syncIsPhone = () => {
      setIsPhone(phoneQuery.matches);
    };

    syncIsPhone();

    phoneQuery.addEventListener("change", syncIsPhone);

    return () => {
      phoneQuery.removeEventListener("change", syncIsPhone);
    };
  }, []);

  return isPhone;
}

function ChatbotBookSection() {
  const reduceMotion = useReducedMotion();
  const isPhone = useIsPhone();

  const [activePage, setActivePage] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [isPaused, setIsPaused] = React.useState(false);
  const [animationCycle, setAnimationCycle] = React.useState(0);

  const page = chatbotBookPages[activePage];
  const isAnswerPage = page.id === "answer";
  const isGuidePage = page.id === "guide";
  const isAssistPage = page.id === "assist";
  const isCompactBookPage = isAnswerPage || isGuidePage || isAssistPage;
  const lastPageIndex = chatbotBookPages.length - 1;

  /* Pages only turn on their own from tablet up. On phones the
     chapter stays put until the reader taps an arrow or a dot. */
  const isAutoPlaying = !isPaused && !isPhone;

  const goToPage = React.useCallback(
    (nextPage) => {
      if (nextPage === activePage) return;

      if (activePage === lastPageIndex && nextPage === 0) {
        setDirection(1);
      } else if (activePage === 0 && nextPage === lastPageIndex) {
        setDirection(-1);
      } else {
        setDirection(nextPage > activePage ? 1 : -1);
      }

      setActivePage(nextPage);
      setAnimationCycle((cycle) => cycle + 1);
    },
    [activePage, lastPageIndex],
  );

  const nextPage = React.useCallback(() => {
    const next = activePage === lastPageIndex ? 0 : activePage + 1;

    goToPage(next);
  }, [activePage, lastPageIndex, goToPage]);

  const previousPage = React.useCallback(() => {
    const previous = activePage === 0 ? lastPageIndex : activePage - 1;

    goToPage(previous);
  }, [activePage, lastPageIndex, goToPage]);

  /* Automatically turn book pages */
  React.useEffect(() => {
    if (!isAutoPlaying) return undefined;

    const autoSlideInterval = window.setInterval(() => {
      setDirection(1);

      setActivePage((previousPage) => {
        return (previousPage + 1) % chatbotBookPages.length;
      });

      setAnimationCycle((previousCycle) => previousCycle + 1);
    }, 5000);

    return () => {
      window.clearInterval(autoSlideInterval);
    };
  }, [isAutoPlaying]);

  /* Restart inner animations continuously */
 React.useEffect(() => {
  if (!isAutoPlaying) return undefined;

  const pageDuration =
    page.type === "guide"
      ? 11000
      : 7000;

  const autoSlideTimer = window.setTimeout(() => {
    setDirection(1);

    setActivePage((currentPage) => {
      return (currentPage + 1) % chatbotBookPages.length;
    });

    setAnimationCycle((currentCycle) => currentCycle + 1);
  }, pageDuration);

  return () => {
    window.clearTimeout(autoSlideTimer);
  };
}, [activePage, isAutoPlaying, page.type]);
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-20">
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#ffffff_0%,#f7fff9_52%,#ffffff_100%)]" />

      <div
        className="absolute inset-0 -z-20 opacity-[0.36]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.055) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 14%, black 88%, transparent)",
        }}
      />

      <div className="mx-auto max-w-[1480px]">
        {/* Section heading */}

        <div className="mx-auto max-w-[1280px] text-center">
          <motion.h2
            {...businessApiHeadingProps}
            className="wa-section-heading mx-auto max-w-none whitespace-nowrap text-center text-[clamp(1.65rem,4.4vw,4.2rem)] font-extrabold leading-[1.1] tracking-normal text-[#111827] max-md:whitespace-normal"
          >
            What Your WhatsApp{" "}
            <span className="!text-[#10b957]" style={{ color: "#10b957" }}>
              Chatbot
            </span>{" "}
            Is Built to Do
          </motion.h2>

          <p className="wa-section-sub mx-auto mt-6 max-w-none whitespace-nowrap text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:whitespace-normal max-md:!text-[1rem]">
            Answer customer questions, guide decisions, complete routine
            tasks, and automate connected actions through structured
            WhatsApp conversations.
          </p>
        </div>

        {/* Main book */}

        <div
          className="book-stage relative mt-10"
          style={{
            perspective: isPhone ? "none" : "1800px",
          }}
        >
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.article
              key={page.id}
              custom={direction}
              variants={isPhone ? bookSlideVariants : bookPageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: isPhone ? 0.45 : 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              drag={reduceMotion ? false : "x"}
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) {
                  nextPage();
                } else if (info.offset.x > 80) {
                  previousPage();
                }
              }}
              className="relative w-full overflow-hidden rounded-[38px] border bg-white bg-cover bg-center bg-no-repeat shadow-[0_35px_100px_rgba(15,23,42,0.13)]"
              style={{
                borderColor: page.borderColor,
                backgroundImage: isGuidePage
                  ? "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.28)), url('/assets/images/chatbotbg2.webp')"
                  : isAssistPage
                    ? "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,255,255,0.28)), url('/assets/images/chatbotbg3.webp')"
                    : "linear-gradient(90deg, rgba(255,255,255,0.86), rgba(255,255,255,0.62)), url('/assets/images/chatbotbg.webp')",
                transformStyle: isPhone ? "flat" : "preserve-3d",
                transformOrigin: isPhone
                  ? "center"
                  : direction > 0
                    ? "left center"
                    : "right center",
              }}
            >
              {/* Animated top color */}

              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-x-0 top-0 z-30 h-[5px] bg-[length:220%_100%]"
                style={{
                  backgroundImage: `linear-gradient(90deg,${page.color},white,${page.color})`,
                }}
              />

              {/* Book center spine */}

              {!isCompactBookPage && (
                <div className="pointer-events-none absolute bottom-8 left-1/2 top-8 z-20 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent lg:block" />
              )}

              {!isCompactBookPage && (
                <div className="pointer-events-none absolute bottom-8 left-1/2 top-8 z-10 hidden w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-100/45 to-transparent lg:block" />
              )}

              {/* Page content */}

              <div className={`book-page-grid grid ${isCompactBookPage ? "min-h-[700px] lg:h-[700px] lg:grid-cols-[0.82fr_1.18fr]" : "min-h-[650px] lg:h-[650px] lg:grid-cols-2"}`}>
                {/* Left book page */}

                <div
                  className={`book-left-page relative flex flex-col overflow-hidden px-7 sm:px-10 ${
                    isCompactBookPage
                      ? "justify-start bg-transparent pb-4 pt-8 lg:px-10 xl:px-12"
                      : "justify-center py-10 lg:px-12 xl:px-16"
                  }`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -35,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.25,
                      duration: 0.6,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                scale: [1, 1.08, 1],
                                rotate: [0, 4, -4, 0],
                              }
                        }
                        transition={{
                          duration: isAutoPlaying ? 5 : 0,
                          ease: "linear",
                        }}
                        className={`book-chapter-badge flex items-center justify-center font-black text-white shadow-lg ${
                          isCompactBookPage
                            ? "h-11 w-11 rounded-[15px] text-[13px]"
                            : "h-14 w-14 rounded-[20px] text-base"
                        }`}
                        style={{
                          backgroundColor: page.color,
                          boxShadow: `0 14px 32px ${page.color}35`,
                        }}
                      >
                        {page.number}
                      </motion.span>

                      <div>
                        <p
                          className={`inline-flex w-fit items-center rounded-md border font-black uppercase tracking-[0.16em] ${
                            isCompactBookPage ? "px-3.5 py-1.5 text-[18px] leading-none" : "px-2.5 py-1 text-xs"
                          }`}
                          style={{
                            color: page.color,
                            backgroundColor: page.softColor,
                            borderColor: page.borderColor,
                            boxShadow: `0 10px 24px ${page.color}18`,
                          }}
                        >
                          {page.eyebrow}
                        </p>

                        <p className={`${isCompactBookPage ? "mt-1.5 text-[12px]" : "mt-1 text-sm"} font-bold text-slate-400`}>
                          Chapter {activePage + 1} of {chatbotBookPages.length}
                        </p>
                      </div>
                    </div>

                    {isAnswerPage ? (
                      <h3 className="book-page-title mt-4 text-[28px] font-black leading-[1.05] tracking-normal text-[#071B2C] sm:text-[34px] xl:text-[37px]">
                        <span className="block">Fast, consistent</span>
                        <span className="block text-[#16A34A]">
                          customer responses.
                        </span>
                      </h3>
                    ) : (
                      <h3 className={`book-page-title font-black tracking-normal text-[#071B2C] ${
                        isCompactBookPage
                          ? "mt-4 text-[28px] leading-[1.05] sm:text-[34px] xl:text-[37px]"
                          : "mt-7 text-[34px] leading-[1.04] sm:text-[42px] xl:text-[49px]"
                      }`}>
                        {page.heading}
                      </h3>
                    )}

                    <p
                      className={`book-page-desc max-w-[540px] font-medium ${
                        isCompactBookPage
                          ? "mt-4 text-[13px] leading-[1.55] text-[#0F2740]"
                          : "mt-5 text-sm leading-7 text-slate-600 sm:text-base"
                      }`}
                    >
                      {page.description}
                    </p>

                    {isAnswerPage ? (
                      <div className="mt-4 !text-[21px] !font-medium !leading-[1.2] !text-[#16A34A]">
                        Highlights:
                      </div>
                    ) : null}

                    <div
                      className={`book-points ${
                        isCompactBookPage
                          ? "mt-2 divide-y divide-slate-300"
                          : "mt-7 space-y-3"
                      }`}
                    >
                      {page.points.map((point, index) => (
                        <motion.div
                          key={point}
                          initial={{
                            opacity: 0,
                            x: -25,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: 0.65 + index * 0.15,
                            duration: 0.5,
                          }}
                          className={`flex items-start ${
                            isCompactBookPage ? "gap-0 py-2" : "gap-3"
                          }`}
                        >
                          {!isCompactBookPage ? (
                            <motion.span
                              animate={
                                reduceMotion
                                  ? undefined
                                  : {
                                      scale: [1, 1.12, 1],
                                    }
                              }
                              transition={{
                                duration: 2.4,
                                delay: index * 0.25,
                                repeat: Infinity,
                              }}
                              className="relative mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                              style={{
                                color: page.color,
                                backgroundColor: page.softColor,
                              }}
                            >
                              <Check size={14} strokeWidth={3} />
                            </motion.span>
                          ) : null}

                          {isAnswerPage ? (
                            <p className="max-w-[540px] text-[12.5px] font-medium leading-[1.45] text-[#26364D]">
                              {index === 0 ? (
                                <>
                                  <strong className="font-black text-[#111827]">
                                    Respond to FAQs, product queries, policies, and service questions
                                  </strong>
                                </>
                              ) : index === 1 ? (
                                <>
                                  <strong className="font-black text-[#111827]">
                                    Process voice notes
                                  </strong>
                                  {" through connected speech-to-text capabilities, where enabled"}
                                </>
                              ) : (
                                <>
                                  <strong className="font-black text-[#111827]">
                                    Support buttons, lists, images, videos, PDFs, and other WhatsApp message formats
                                  </strong>
                                </>
                              )}
                            </p>
                          ) : isCompactBookPage ? (
                            <p className="max-w-[540px] text-[12.5px] font-medium leading-[1.45] text-[#26364D]">
                              {index === 0 ? (
                                <>
                                  <strong className="font-black text-[#111827]">
                                    Present quick replies, menus, and lists
                                  </strong>
                                  {" for clearer customer choices"}
                                </>
                              ) : index === 1 ? (
                                <>
                                  <strong className="font-black text-[#111827]">
                                    Launch WhatsApp Flows
                                  </strong>
                                  {" for forms, registrations, bookings, and guided data collection"}
                                </>
                              ) : (
                                <>
                                  <strong className="font-black text-[#111827]">
                                    Apply conditions and routing rules
                                  </strong>
                                  {" through Vertex Suite to personalise each journey"}
                                </>
                              )}
                            </p>
                          ) : (
                            <p className="text-sm font-bold leading-6 text-slate-600">
                              {point}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Page status */}

                    <div className={`book-page-status flex flex-wrap items-center gap-3 ${isCompactBookPage ? "mt-2" : "mt-9"}`}>
                      <div
                        className={`flex items-center gap-2 rounded-full font-black ${
                          isCompactBookPage ? "px-3 py-1 text-[10px]" : "px-4 py-2 text-xs"
                        }`}
                        style={{
                          color: page.color,
                          backgroundColor: page.softColor,
                        }}
                      >
                        <Sparkles size={14} />
                        Animated chapter active
                      </div>

                      <p className="text-xs font-medium text-slate-400">
                        Swipe or use arrows to turn the page
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Right book page */}

                <div
                  className={`book-right-page relative flex items-center justify-center ${
                    isAnswerPage ? "min-h-[700px] p-0 lg:-ml-4 lg:w-[calc(100%+1rem)]" : "min-h-[580px] p-5 sm:p-7 lg:p-8"
                  }`}
                >
                  <ChatbotBookVisual
                    page={page}
                    animationCycle={animationCycle}
                    reduceMotion={reduceMotion}
                  />
                </div>
              </div>

              {/* Page turn highlight — belongs to the 3D flip only */}

              {!isPhone && (
                <motion.div
                  initial={{
                    x: direction > 0 ? "-120%" : "120%",
                  }}
                  animate={{
                    x: direction > 0 ? "150%" : "-150%",
                  }}
                  transition={{
                    duration: 1.1,
                    delay: 0.1,
                  }}
                  className="pointer-events-none absolute inset-y-0 z-40 w-40 -skew-x-12 bg-gradient-to-r from-transparent via-white/65 to-transparent"
                />
              )}
            </motion.article>
          </AnimatePresence>

          {/* Previous button */}

          <motion.button
            type="button"
            onClick={previousPage}
            whileHover={{
              scale: 1.08,
              x: -3,
            }}
            whileTap={{
              scale: 0.94,
            }}
            aria-label="Previous book page"
            className="book-nav book-nav-prev absolute left-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#071B2C] shadow-[0_14px_35px_rgba(15,23,42,0.15)] backdrop-blur-md sm:-left-5"
          >
            <ChevronLeft size={22} />
          </motion.button>

          {/* Next button */}

          <motion.button
            type="button"
            onClick={nextPage}
            whileHover={{
              scale: 1.08,
              x: 3,
            }}
            whileTap={{
              scale: 0.94,
            }}
            aria-label="Next book page"
            className="book-nav book-nav-next absolute right-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#071B2C] shadow-[0_14px_35px_rgba(15,23,42,0.15)] backdrop-blur-md sm:-right-5"
          >
            <ChevronRight size={22} />
          </motion.button>
        </div>

        {/* Bottom controls */}

        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-[24px] border border-slate-100 bg-white px-5 py-4 shadow-[0_15px_40px_rgba(15,23,42,0.06)] sm:flex-row">
          {/* Dots */}

          <div className="flex items-center gap-2">
            {chatbotBookPages.map((bookPage, index) => (
              <button
                key={bookPage.id}
                type="button"
                onClick={() => goToPage(index)}
                aria-label={`Open ${bookPage.title}`}
                className="relative h-3 overflow-hidden rounded-full bg-slate-200 transition-all duration-300"
                style={{
                  width: activePage === index ? 42 : 12,
                }}
              >
                {activePage === index && (
                  <motion.span
                    initial={{
                      width: "0%",
                    }}
                    animate={{
                      width: isAutoPlaying ? "100%" : "0%",
                    }}
                    transition={{
                      duration: isAutoPlaying ? 6 : 0,
                      ease: "linear",
                    }}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      backgroundColor: page.color,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Page count */}

          <div className="text-xs font-black text-slate-400">
            <span
              className="text-base"
              style={{
                color: page.color,
              }}
            >
              {String(activePage + 1).padStart(2, "0")}
            </span>

            <span className="mx-2">/</span>

            {String(chatbotBookPages.length).padStart(2, "0")}
          </div>

          {/* Play / pause — nothing to pause on phones */}

          {!isPhone && (
            <motion.button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-[#173527] shadow-sm"
            >
              {isPaused ? (
                <>
                  <Play size={14} style={{ color: page.color }} />
                  Resume pages
                </>
              ) : (
                <>
                  <Pause size={14} style={{ color: page.color }} />
                  Pause pages
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
/* =========================================================
   WHATSAPP CHATBOT — THREE STEP LAUNCH SECTION
========================================================= */

const whatsappLaunchSteps = [
  {
    number: "1",
    eyebrow: "Connect Setup",
    title: "Connect Your WhatsApp Business Setup",
    description:
      "Connect your WABA, phone number, webhooks, and templates.",
    color: "#3E8B7C",
    softColor: "#E4F3EE",
    icon: ShieldCheck,
  },
  {
    number: "2",
    eyebrow: "Build Chatflows",
    title: "Build Chatflows with Drag and Drop",
    description:
      "Build conversation journeys using drag-and-drop messages, buttons, lists, conditions, and APIs.",
    color: "#3E8B7C",
    softColor: "#E4F3EE",
    icon: Workflow,
  },
  {
    number: "3",
    eyebrow: "Configure Logic",
    title: "Set Triggers, Rules and Routing",
    description:
      "Route users based on intent, responses, and logic.",
    color: "#3E8B7C",
    softColor: "#E4F3EE",
    icon: Route,
  },
  {
    number: "4",
    eyebrow: "Test & Publish",
    title: "Test, Publish and Improve",
    description:
      "Test journeys, publish the chatbot, and monitor performance.",
    color: "#3E8B7C",
    softColor: "#E4F3EE",
    icon: Smartphone,
  },
];

/* =========================================================
   COMMON STEP CARD
========================================================= */

function WhatsAppLaunchCard({
  step,
  index,
  activeStep,
  onActivate,
  children,
}) {
  const isActive = activeStep === index;

  return (
    <motion.article
      onMouseEnter={() => onActivate(index)}
      onClick={() => onActivate(index)}
      animate={{
        y: isActive ? -9 : 0,
        scale: isActive ? 1.012 : 1,
        boxShadow: isActive
          ? `0 30px 75px ${step.color}20`
          : "0 18px 50px rgba(15,23,42,0.07)",
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="wa-launch-card group relative flex h-[470px] min-w-0 cursor-pointer flex-col overflow-hidden rounded-[22px] border bg-white p-5"
      style={{
        borderColor: isActive
          ? `${step.color}55`
          : "#E5E7EB",
      }}
    >
      {/* Active top progress line */}

      <motion.div
        animate={{
          scaleX: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="absolute inset-x-0 top-0 h-[5px] origin-left"
        style={{
          background: "linear-gradient(90deg,#3E8B7C,#377d70,#2c6a5e)",
        }}
      />

      {/* Moving light */}

      {isActive && (
        <motion.div
          initial={{
            x: "-160%",
          }}
          animate={{
            x: "550%",
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-y-0 z-20 w-20 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />
      )}

      {/* Header */}

      <div className="relative z-10">
        <div className="flex items-start">
          <div className="min-w-0 flex-1">
            <p className="wa-launch-card-title text-left text-[12px] font-black text-[#071B2C]">
              {step.title}
            </p>
          </div>
        </div>

        <p className="wa-launch-card-desc mt-3 text-left text-[11px] font-medium leading-[17px] text-slate-500">
          {step.description}
        </p>
      </div>

      {/* Visual */}

      <div className="wa-launch-visual relative mt-4 min-h-0 flex-1 overflow-hidden">
        {children}
      </div>
    </motion.article>
  );
}

/* =========================================================
   ANIMATED ARROW BETWEEN CARDS
========================================================= */

function WhatsAppLaunchArrow({
  color,
  active,
}) {
  return (
    <div className="relative z-20 flex h-12 shrink-0 items-center justify-center lg:h-auto lg:w-12">
      <motion.div
        animate={{
          scale: active ? [1, 1.12, 1] : 1,
          opacity: active ? 1 : 0.55,
        }}
        transition={{
          duration: 2,
          repeat: active ? Infinity : 0,
        }}
        className="relative flex h-10 w-10 rotate-90 items-center justify-center rounded-full border bg-white shadow-[0_10px_25px_rgba(15,23,42,0.09)] lg:rotate-0"
        style={{
          borderColor: `${color}40`,
          color,
        }}
      >
        <ChevronRight size={19} strokeWidth={2.8} />

        {active && (
          <motion.span
            initial={{
              x: -7,
              opacity: 0,
            }}
            animate={{
              x: 8,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
            className="absolute h-2 w-2 rounded-full"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 12px ${color}`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

/* =========================================================
   STEP 1 — TRAIN VISUAL
========================================================= */

function WhatsAppSetupVisual({
  active,
  animationCycle,
  reduceMotion,
}) {
  const setupItems = [
    {
      label: "WhatsApp Business Account",
      status: "Connected",
      icon: BadgeCheck,
    },
    {
      label: "Phone Number",
      status: "+91 98765 43210",
      icon: Smartphone,
    },
    {
      label: "Webhook Events",
      status: "Subscribed",
      icon: Network,
    },
    {
      label: "Message Templates",
      status: "Approved",
      icon: FileText,
    },
  ];

  return (
    <motion.div
      key={`setup-${animationCycle}`}
      className="relative h-full overflow-hidden rounded-[24px] border border-emerald-100 bg-[linear-gradient(180deg,#F8FFFB_0%,#ECFDF3_100%)]"
    >
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(rgba(22,163,74,0.14) 1px,transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <motion.div
        animate={
          active && !reduceMotion
            ? {
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.65, 0.35],
              }
            : undefined
        }
        transition={{
          duration: 3.4,
          repeat: Infinity,
        }}
        className="absolute -right-20 -top-16 h-56 w-56 rounded-full border border-emerald-200 bg-white/50"
      />

      <div className="absolute inset-x-4 bottom-5 top-5 z-10 rounded-[18px] border border-emerald-100 bg-white/95 p-4 shadow-[0_18px_42px_rgba(22,163,74,0.1)] backdrop-blur-md">
        <div className="mb-3 flex items-center justify-between border-b border-emerald-50 pb-2">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <Settings2 size={13} />
            </span>

            <p className="text-[8px] font-black text-[#14532D]">
              Setup
            </p>
          </div>

          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[6px] font-black text-emerald-700">
            API Ready
          </span>
        </div>

        <div className="relative space-y-2">
          <span className="absolute bottom-4 left-[13px] top-4 w-px bg-emerald-200" />

          {setupItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  x: -16,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2 + index * 0.22,
                }}
                className="relative z-10 flex items-center gap-2.5 rounded-xl border border-emerald-50 bg-[#FBFFFC] px-3 py-2"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-100 bg-white text-emerald-600">
                  <Icon size={14} />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[9px] font-black text-[#14532D]">
                    {item.label}
                  </p>

                  <p className="mt-0.5 truncate text-[7px] font-bold text-slate-400">
                    {item.status}
                  </p>
                </div>

                <motion.span
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.45 + index * 0.22,
                    type: "spring",
                  }}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"
                >
                  <Check size={11} strokeWidth={3} />
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>

    </motion.div>
  );
}

function TrainChatbotVisual({
  active,
  animationCycle,
  reduceMotion,
}) {
  const knowledgeItems = [
    {
      label: "Knowledge Base",
      icon: Database,
    },
    {
      label: "FAQs",
      icon: MessageCircle,
    },
    {
      label: "Products",
      icon: Sparkles,
    },
    {
      label: "Services",
      icon: Workflow,
    },
  ];

  const floatingItems = [
    {
      left: "59%",
      top: "14%",
      icon: MessageCircle,
      delay: 0,
    },
    {
      left: "79%",
      top: "32%",
      icon: Database,
      delay: 0.3,
    },
    {
      left: "70%",
      top: "64%",
      icon: Workflow,
      delay: 0.6,
    },
    {
      left: "43%",
      top: "70%",
      icon: CheckCircle2,
      delay: 0.9,
    },
    {
      left: "37%",
      top: "23%",
      icon: Sparkles,
      delay: 1.2,
    },
  ];

  return (
    <motion.div
      key={`train-${animationCycle}`}
      className="relative h-full overflow-hidden rounded-[24px] border border-emerald-100 bg-[linear-gradient(180deg,#F7FFF9_0%,#ECFDF3_100%)]"
    >
      {/* Grid background */}

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,163,74,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(22,163,74,0.07) 1px,transparent 1px)",
          backgroundSize: "27px 27px",
        }}
      />

      {/* Knowledge panel */}

      <motion.div
        initial={{
          opacity: 0,
          x: -25,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.65,
        }}
        className="absolute bottom-5 left-3 top-5 z-10 w-[36%] rounded-[18px] border border-emerald-100 bg-white/90 p-2.5 shadow-[0_15px_35px_rgba(22,163,74,0.08)] backdrop-blur-md"
      >
        <div className="flex items-center gap-2 border-b border-emerald-50 pb-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <Database size={12} />
          </span>

          <p className="text-[8px] font-black text-[#14532D]">
            Training Sources
          </p>
        </div>

        <div className="mt-3 space-y-2">
          {knowledgeItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.4 + index * 0.25,
                }}
                className="flex items-center gap-2 rounded-lg border border-emerald-50 bg-[#F8FFF9] px-2 py-2"
              >
                <Icon
                  size={11}
                  className="text-emerald-500"
                />

                <span className="text-[7px] font-bold text-slate-600">
                  {item.label}
                </span>

                <motion.span
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.65 + index * 0.25,
                    type: "spring",
                  }}
                  className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white"
                >
                  <Check size={8} strokeWidth={3} />
                </motion.span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{
            width: "0%",
          }}
          animate={{
            width: active ? "100%" : "68%",
          }}
          transition={{
            duration: 3.6,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 h-1 rounded-full bg-emerald-500"
        />
      </motion.div>

      {/* AI energy circles */}

      <div className="absolute bottom-12 right-[7%] top-9 flex w-[57%] items-center justify-center">
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[190px] w-[190px] rounded-full border border-dashed border-emerald-300"
        />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: -360,
                  scale: [1, 1.08, 1],
                }
          }
          transition={{
            rotate: {
              duration: 11,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 3,
              repeat: Infinity,
            },
          }}
          className="absolute h-[150px] w-[150px] rounded-full border-2 border-emerald-200"
        />

        <motion.div
          animate={
            active && !reduceMotion
              ? {
                  boxShadow: [
                    "0 0 35px rgba(34,197,94,0.28)",
                    "0 0 80px rgba(34,197,94,0.58)",
                    "0 0 35px rgba(34,197,94,0.28)",
                  ],
                  y: [0, -8, 0],
                }
              : undefined
          }
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="relative flex h-[108px] w-[108px] items-center justify-center rounded-full border-[6px] border-white bg-[radial-gradient(circle_at_35%_30%,#86EFAC,#16A34A_55%,#064E3B)] text-white"
        >
          <BrainCircuit size={47} />

          <motion.span
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.25, 1, 0.25],
                    scale: [0.9, 1.15, 0.9],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="absolute inset-[-13px] rounded-full border-2 border-emerald-300"
          />

          <span className="absolute bottom-1 rounded-full bg-white px-2 py-0.5 text-[6px] font-black text-emerald-700">
            AI
          </span>
        </motion.div>

        {/* Floating source icons */}

        {floatingItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.span
              key={`${item.left}-${item.top}`}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: reduceMotion ? 0 : [0, -6, 0],
              }}
              transition={{
                opacity: {
                  delay: 1 + index * 0.2,
                },
                scale: {
                  delay: 1 + index * 0.2,
                  type: "spring",
                },
                y: {
                  duration: 2.5,
                  delay: item.delay,
                  repeat: Infinity,
                },
              }}
              className="absolute flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-100 bg-white text-emerald-500 shadow-lg"
              style={{
                left: item.left,
                top: item.top,
              }}
            >
              <Icon size={14} />
            </motion.span>
          );
        })}
      </div>

      {/* Base platform */}

      <div className="absolute bottom-5 right-[10%] w-[50%]">
        <motion.div
          animate={
            active && !reduceMotion
              ? {
                  scaleX: [0.85, 1, 0.85],
                  opacity: [0.55, 1, 0.55],
                }
              : undefined
          }
          transition={{
            duration: 2.8,
            repeat: Infinity,
          }}
          className="mx-auto h-3 w-[75%] rounded-[50%] bg-emerald-400/50 blur-md"
        />

        <div className="mx-auto -mt-2 h-5 w-[88%] rounded-[50%] border border-emerald-200 bg-white shadow-[0_9px_25px_rgba(22,163,74,0.2)]" />
      </div>

      {/* Status */}

      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2,
        }}
        className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-emerald-100 bg-white/90 px-3 py-1 text-[7px] font-black text-emerald-700 shadow-sm"
      >
        <motion.span
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
          }}
          className="h-1.5 w-1.5 rounded-full bg-emerald-500"
        />

        Chatbot knowledge synchronized
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   STEP 2 — VISUAL JOURNEY BUILDER
========================================================= */

function JourneyBuilderVisual({
  active,
  animationCycle,
  reduceMotion,
}) {
  const sidebarItems = [
    "Message",
    "Question",
    "Buttons",
    "List",
    "Media",
    "Form",
    "Condition",
    "API Call",
    "Action",
  ];

  const actionNodes = [
    {
      label: "Track Order",
      icon: MessageCircle,
    },
    {
      label: "Book Demo",
      icon: Smartphone,
    },
    {
      label: "Get Support",
      icon: Users,
    },
  ];

  return (
    <motion.div
      key={`journey-${animationCycle}`}
      className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-emerald-100 bg-white shadow-inner"
    >
      {/* Window toolbar */}

      <div className="flex h-9 shrink-0 items-center justify-between border-b border-emerald-50 bg-[#F8FFF9] px-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>

        <div className="flex items-center gap-1.5 text-[7px] font-black text-emerald-700">
          <Workflow size={11} />
          Visual Journey Builder
        </div>

        <motion.span
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="h-2 w-2 rounded-full bg-emerald-500"
        />
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Left component panel */}

        <motion.div
          initial={{
            x: -25,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          className="w-[29%] shrink-0 border-r border-emerald-50 bg-[#FBFFFC] p-2"
        >
          <p className="mb-2 text-[7px] font-black uppercase tracking-[0.12em] text-slate-400">
            Flow Blocks
          </p>

          <div className="space-y-1.5">
            {sidebarItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.18,
                }}
                whileHover={{
                  x: 3,
                }}
                className="flex items-center gap-1.5 rounded-lg border border-emerald-50 bg-white px-2 py-1.5"
              >
                <CircleDot
                  size={9}
                  className="text-emerald-500"
                />

                <span className="text-[6.5px] font-bold text-slate-600">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={
              active && !reduceMotion
                ? {
                    y: [0, 35, 70, 35, 0],
                  }
                : undefined
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mt-3 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-lg"
          >
            <GitBranch size={13} />
          </motion.div>
        </motion.div>

        {/* Canvas */}

        <div
          className="relative min-w-0 flex-1 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(rgba(22,163,74,0.14) 1px,transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          {/* Animated flow lines */}

          <svg
            viewBox="0 0 400 330"
            className="absolute inset-0 h-full w-full"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M200 62 V110"
              stroke="#22C55E"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
            />

            <motion.path
              d="M200 155 V180 C200 195 68 188 68 225 V255"
              stroke="#22C55E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 1.1,
                delay: 1.5,
              }}
            />

            <motion.path
              d="M200 155 V255"
              stroke="#22C55E"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 1.75,
              }}
            />

            <motion.path
              d="M200 155 V180 C200 195 332 188 332 225 V255"
              stroke="#22C55E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 1.1,
                delay: 2,
              }}
            />
          </svg>

          {/* Start node */}

          <motion.div
            initial={{
              opacity: 0,
              y: -18,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
            className="absolute left-1/2 top-[7%] flex w-[138px] -translate-x-1/2 items-center gap-2 rounded-xl border border-emerald-100 bg-white px-2.5 py-2 shadow-[0_9px_25px_rgba(22,163,74,0.1)]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <MessageSquareText size={13} />
            </span>

            <div>
              <p className="text-[6px] font-bold text-slate-400">
                Trigger
              </p>

              <p className="text-[8px] font-black text-[#14532D]">
                Customer Message
              </p>
            </div>
          </motion.div>

          {/* Decision node */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1,
              type: "spring",
            }}
            className="absolute left-1/2 top-[34%] flex w-[130px] -translate-x-1/2 items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-3 py-2 text-[7px] font-black text-white shadow-[0_12px_28px_rgba(22,163,74,0.25)]"
          >
            <GitBranch size={11} />
            Understand Intent
          </motion.div>

          {/* Moving data dot */}

          {active && (
            <motion.span
              initial={{
                left: "50%",
                top: "18%",
                opacity: 0,
              }}
              animate={{
                top: ["18%", "33%", "48%", "73%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                repeatDelay: 0.8,
              }}
              className="absolute z-20 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-400"
              style={{
                boxShadow: "0 0 14px #22C55E",
              }}
            />
          )}

          {/* Bottom actions */}

          <div className="absolute inset-x-3 bottom-4 grid grid-cols-3 gap-2">
            {actionNodes.map((action, index) => {
              const Icon = action.icon;

              return (
                <motion.div
                  key={action.label}
                  initial={{
                    opacity: 0,
                    y: 18,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: 2.4 + index * 0.25,
                    type: "spring",
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="rounded-xl border border-emerald-100 bg-white px-1.5 py-2 text-center shadow-[0_8px_22px_rgba(22,163,74,0.08)]"
                >
                  <motion.span
                    animate={
                      active && !reduceMotion
                        ? {
                            y: [0, -3, 0],
                          }
                        : undefined
                    }
                    transition={{
                      duration: 2.3,
                      delay: index * 0.3,
                      repeat: Infinity,
                    }}
                    className="mx-auto flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"
                  >
                    <Icon size={13} />
                  </motion.span>

                  <p className="mt-1 text-[6px] font-black text-emerald-800">
                    {action.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

    </motion.div>
  );
}

/* =========================================================
   STEP 3 — WHATSAPP DEPLOY VISUAL
========================================================= */

function RoutingLogicVisual({
  active,
  animationCycle,
  reduceMotion,
}) {
  const routes = [
    {
      label: "Support",
      detail: "Route to support team",
      icon: Headphones,
    },
    {
      label: "Sales",
      detail: "Route to sales team",
      icon: ShoppingBag,
    },
    {
      label: "Booking",
      detail: "Open booking flow",
      icon: CalendarCheck2,
    },
  ];

  return (
    <motion.div
      key={`routing-${animationCycle}`}
      className="relative h-full overflow-hidden rounded-[24px] border border-emerald-100 bg-white"
    >
      <div className="flex h-9 items-center justify-between border-b border-emerald-50 bg-[#F8FFF9] px-3">
        <div className="flex items-center gap-1.5 text-[7px] font-black text-emerald-700">
          <Route size={11} />
          Routing Logic
        </div>

        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[6px] font-black text-emerald-700">
          Saved
        </span>
      </div>

      <div
        className="relative h-[calc(100%-36px)] overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(rgba(22,163,74,0.12) 1px,transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        <svg
          viewBox="0 0 400 340"
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M200 54 V96"
            stroke="#22C55E"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          />
          <motion.path
            d="M200 144 V184 C200 204 70 202 70 252 V282"
            stroke="#22C55E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.95 }}
          />
          <motion.path
            d="M200 144 V282"
            stroke="#22C55E"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.85, delay: 1.1 }}
          />
          <motion.path
            d="M200 144 V184 C200 204 330 202 330 252 V282"
            stroke="#22C55E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
          />
        </svg>

        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, type: "spring" }}
          className="absolute left-1/2 top-5 flex w-[136px] -translate-x-1/2 items-center gap-2 rounded-xl border border-emerald-100 bg-white px-2.5 py-2 shadow-[0_10px_24px_rgba(22,163,74,0.1)]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <Zap size={13} />
          </span>

          <div>
            <p className="text-[6px] font-bold text-slate-400">
              Trigger
            </p>

            <p className="text-[8px] font-black text-[#14532D]">
              Keyword: booking
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.78 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65, type: "spring" }}
          className="absolute left-1/2 top-[31%] w-[148px] -translate-x-1/2 rounded-xl border border-emerald-100 bg-[#F0FDF4] px-3 py-2 text-center shadow-sm"
        >
          <p className="text-[6px] font-bold text-slate-400">
            Condition
          </p>

          <p className="mt-0.5 text-[7px] font-black text-emerald-800">
            What is the customer looking for?
          </p>
        </motion.div>

        {active && (
          <motion.span
            initial={{ left: "50%", top: "19%", opacity: 0 }}
            animate={{
              top: ["19%", "32%", "55%", "82%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.7,
              repeat: Infinity,
              repeatDelay: 0.7,
            }}
            className="absolute z-20 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-400"
            style={{
              boxShadow: "0 0 14px #22C55E",
            }}
          />
        )}

        <div className="absolute inset-x-3 bottom-8 grid grid-cols-3 gap-2">
          {routes.map((route, index) => {
            const Icon = route.icon;

            return (
              <motion.div
                key={route.label}
                initial={{ opacity: 0, y: 18, scale: 0.86 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.45 + index * 0.18, type: "spring" }}
                className="rounded-xl border border-emerald-100 bg-white px-1.5 py-2 text-center shadow-[0_8px_20px_rgba(22,163,74,0.08)]"
              >
                <motion.span
                  animate={
                    active && !reduceMotion
                      ? {
                          y: [0, -3, 0],
                        }
                      : undefined
                  }
                  transition={{
                    duration: 2.1,
                    delay: index * 0.25,
                    repeat: Infinity,
                  }}
                  className="mx-auto flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"
                >
                  <Icon size={13} />
                </motion.span>

                <p className="mt-1 text-[6px] font-black text-emerald-800">
                  {route.label}
                </p>

                <p className="mt-0.5 text-[5.5px] font-bold leading-[8px] text-slate-400">
                  {route.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}

function WhatsAppDeployVisual({
  active,
  animationCycle,
  reduceMotion,
}) {
  return (
    <motion.div
      key={`deploy-${animationCycle}`}
      className="relative flex h-full items-center justify-center overflow-hidden rounded-[24px] border border-emerald-100 bg-[linear-gradient(180deg,#F7FFF9_0%,#ECFDF3_100%)]"
    >
      {/* Circular background */}

      <motion.div
        animate={
          active && !reduceMotion
            ? {
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.7, 0.35],
              }
            : undefined
        }
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
        className="absolute h-[190px] w-[190px] rounded-full border border-emerald-200 bg-white/45"
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[230px] w-[230px] rounded-full border border-dashed border-emerald-300"
      />

      {/* Floating WhatsApp icons */}

      <motion.span
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -9, 0],
                rotate: [0, 7, -7, 0],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-3 top-[31%] flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-[#25D366] text-white shadow-[0_15px_35px_rgba(37,211,102,0.35)]"
      >
        <MessageCircle size={22} fill="currentColor" />
      </motion.span>

      <motion.span
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 8, 0],
              }
        }
        transition={{
          duration: 3.4,
          repeat: Infinity,
        }}
        className="absolute left-4 top-[23%] flex h-8 w-8 items-center justify-center rounded-full border border-emerald-100 bg-white text-emerald-500 shadow-lg"
      >
        <Send size={14} />
      </motion.span>

      {/* Live badge */}

      <motion.div
        animate={
          active
            ? {
                scale: [1, 1.08, 1],
              }
            : undefined
        }
        transition={{
          duration: 1.6,
          repeat: Infinity,
        }}
        className="absolute right-3 top-4 z-20 flex items-center gap-1.5 rounded-full bg-emerald-500 px-2.5 py-1 text-[6px] font-black text-white shadow-lg"
      >
        <motion.span
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="h-1.5 w-1.5 rounded-full bg-white"
        />

        PUBLISHED
      </motion.div>

      {/* Phone */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
          rotate: -5,
          scale: 0.88,
        }}
        animate={{
          opacity: 1,
          y: active && !reduceMotion ? [0, -6, 0] : 0,
          rotate: 0,
          scale: 1,
        }}
        transition={{
          opacity: {
            duration: 0.7,
          },
          rotate: {
            duration: 0.7,
          },
          scale: {
            duration: 0.7,
          },
          y: {
            duration: 4,
            repeat: Infinity,
          },
        }}
        className="relative z-10 h-[285px] w-[165px] rounded-[28px] border-[6px] border-[#071B2C] bg-white p-1.5 shadow-[0_24px_50px_rgba(7,27,44,0.22)]"
      >
        {/* Speaker */}

        <div className="absolute left-1/2 top-1 z-20 h-3 w-[52px] -translate-x-1/2 rounded-full bg-[#071B2C]" />

        <div className="flex h-full flex-col overflow-hidden rounded-[16px] bg-[#E9F7ED]">
          {/* WhatsApp header */}

          <div className="flex h-10 shrink-0 items-center gap-1.5 bg-[#075E54] px-2 pt-1 text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <Bot size={12} />
            </span>

            <div>
              <p className="text-[8px] font-black">
                Vertex Assistant
              </p>

              <p className="text-[6px] text-white/70">
                Online • Replies instantly
              </p>
            </div>
          </div>

          {/* Messages */}

          <div className="relative min-h-0 flex-1 space-y-2 overflow-hidden p-2.5">
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.5,
              }}
              className="ml-auto max-w-[102px] rounded-lg rounded-br-sm bg-[#DCF8C6] px-2 py-1.5 text-[7px] font-bold leading-[10px] text-[#173527] shadow-sm"
            >
              Hi, I want to know more about your services.
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                delay: 1.2,
              }}
              className="max-w-[106px] rounded-lg rounded-bl-sm bg-white px-2 py-1.5 text-[7px] font-bold leading-[10px] text-[#173527] shadow-sm"
            >
              Sure! How can I help you today?
            </motion.div>

            {[
              "Track Order",
              "Book Demo",
              "Get Support",
            ].map((button, index) => (
              <motion.div
                key={button}
                initial={{
                  opacity: 0,
                  y: 10,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 1.8 + index * 0.25,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="mx-auto flex max-w-[110px] items-center justify-center gap-1 rounded-md border border-emerald-200 bg-white px-1.5 py-1.5 text-[7px] font-black text-emerald-700"
              >
                <CheckCircle2 size={8} />
                {button}
              </motion.div>
            ))}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2.8,
              }}
              className="mt-1 flex items-center gap-1.5 text-[6px] font-bold text-emerald-600"
            >
              <motion.span
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-emerald-500"
              />

              Preview and integration tests passed
            </motion.div>
          </div>

          {/* Input */}

          <div className="flex h-9 shrink-0 items-center gap-1 bg-white px-1.5">
            <div className="flex-1 rounded-full bg-slate-100 px-2 py-1 text-[6px] text-slate-400">
              Type a message
            </div>

            <motion.span
              animate={
                active
                  ? {
                      scale: [1, 1.15, 1],
                    }
                  : undefined
              }
              transition={{
                duration: 1.7,
                repeat: Infinity,
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white"
            >
              <Send size={9} />
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Meta label */}

      <motion.div
        initial={{
          opacity: 0,
          x: 15,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 2.7,
        }}
        className="absolute bottom-3 right-2 rounded-xl border border-emerald-100 bg-white/90 px-2 py-1.5 shadow-lg backdrop-blur-md"
      >
        <p className="text-[6px] font-bold text-slate-400">
          Performance
        </p>

        <p className="mt-0.5 text-[7px] font-black text-emerald-700">
          View Analytics
        </p>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   COMPLETE THREE STEP SECTION
========================================================= */

function WhatsAppLaunchStepsSection() {
  const reduceMotion = useReducedMotion();

  const [activeStep, setActiveStep] = React.useState(1);
  const [animationCycle, setAnimationCycle] =
    React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((currentStep) => {
        return (currentStep + 1) %
          whatsappLaunchSteps.length;
      });

      setAnimationCycle((cycle) => cycle + 1);
    }, 5200);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const activateStep = React.useCallback((index) => {
    setActiveStep(index);
    setAnimationCycle((cycle) => cycle + 1);
  }, []);

  return (
    <section className="wa-chatbot-launch-section relative isolate overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16 xl:px-8 2xl:px-10">
      {/* Background */}

      <div className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FFF9_50%,#FFFFFF_100%)]" />

      <div
        className="absolute inset-0 -z-20 opacity-[0.38]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(34,197,94,0.15) 1px,transparent 1px)",
          backgroundSize: "25px 25px",
          maskImage:
            "linear-gradient(to bottom,transparent,black 15%,black 85%,transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom,transparent,black 15%,black 85%,transparent)",
        }}
      />

      {/* Decorative corners */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -left-20 top-16 -z-10 h-52 w-52 rounded-full border border-emerald-100"
      />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: -360,
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-20 top-8 -z-10 h-64 w-64 rounded-full border border-dashed border-emerald-100"
      />

      <div className="mx-auto max-w-[1720px]">
        {/* Heading */}

        <div className="mx-auto max-w-[1260px] text-center">
          <motion.h2
            {...businessApiHeadingProps}
            className="wa-section-heading mx-auto max-w-none whitespace-nowrap text-center text-[clamp(1.65rem,4.4vw,4.2rem)] font-extrabold leading-[1.1] tracking-normal text-[#111827] max-md:whitespace-normal"
          >
            Build and Launch Your{" "}
            WhatsApp{" "}
            <span className="!text-[#10b957]" style={{ color: "#10b957" }}>
              Chatbot
            </span>{" "}
            <span className="text-[#111827]">in Four Steps</span>
          </motion.h2>

          <p className="wa-section-sub mx-auto mt-6 max-w-none whitespace-nowrap text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:whitespace-normal max-md:!text-[1rem]">
            Connect your WhatsApp Business setup, design chatflows visually,
            configure conversation logic, and publish through Vertex Suite.
          </p>
        </div>

        {/* Four cards */}

        <div className="wa-launch-grid mt-20 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
          <WhatsAppLaunchCard
            step={whatsappLaunchSteps[0]}
            index={0}
            activeStep={activeStep}
            onActivate={activateStep}
          >
            <WhatsAppSetupVisual
              active={activeStep === 0}
              animationCycle={animationCycle}
              reduceMotion={reduceMotion}
            />
          </WhatsAppLaunchCard>

          <WhatsAppLaunchCard
            step={whatsappLaunchSteps[1]}
            index={1}
            activeStep={activeStep}
            onActivate={activateStep}
          >
            <JourneyBuilderVisual
              active={activeStep === 1}
              animationCycle={animationCycle}
              reduceMotion={reduceMotion}
            />
          </WhatsAppLaunchCard>

          <WhatsAppLaunchCard
            step={whatsappLaunchSteps[2]}
            index={2}
            activeStep={activeStep}
            onActivate={activateStep}
          >
            <RoutingLogicVisual
              active={activeStep === 2}
              animationCycle={animationCycle}
              reduceMotion={reduceMotion}
            />
          </WhatsAppLaunchCard>

          <WhatsAppLaunchCard
            step={whatsappLaunchSteps[3]}
            index={3}
            activeStep={activeStep}
            onActivate={activateStep}
          >
            <WhatsAppDeployVisual
              active={activeStep === 3}
              animationCycle={animationCycle}
              reduceMotion={reduceMotion}
            />
          </WhatsAppLaunchCard>
        </div>

        {/* Auto step progress */}

        <div className="mt-7 flex items-center justify-center gap-2">
          {whatsappLaunchSteps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => activateStep(index)}
              aria-label={`Open step ${step.number}`}
              className="relative h-2.5 overflow-hidden rounded-full bg-slate-200 transition-all duration-300"
              style={{
                width: activeStep === index ? 55 : 11,
              }}
            >
              {activeStep === index && (
                <motion.span
                  key={`${activeStep}-${animationCycle}`}
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 5.2,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    backgroundColor: step.color,
                  }}
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
const chatbotHeroFeatures = [
  {
    icon: MessageSquareText,
    label: "Instant Answers",
    side: "left",
    top: "6%",
    delay: 0.65,
  },
  {
    icon: ClipboardList,
    label: "Task Automation",
    side: "right",
    top: "6%",
    delay: 1.1,
  },
  {
    icon: Users,
    label: "Smart Routing",
    side: "left",
    top: "42%",
    delay: 1.55,
  },
  {
    icon: Clock3,
    label: "24/7 Availability",
    side: "right",
    top: "42%",
    delay: 2,
  },
  {
    icon: UserRoundCheck,
    label: "Lead Qualification",
    side: "left",
    top: "78%",
    delay: 2.45,
  },
  {
    icon: Database,
    label: "Clean Data Capture",
    side: "right",
    top: "78%",
    delay: 2.9,
  },
];

const chatbotHeroConnectors = [
  // Top-left: short horizontal start, soft downward bend, then into the bot.
  {
    d: "M188 72 H210 C234 72 248 89 248 112 V130 C248 152 264 166 288 166 H350",
    start: [188, 72],
    end: [350, 166],
    delay: 0.83,
  },
  // Top-right: exact mirrored curve.
  {
    d: "M792 72 H770 C746 72 732 89 732 112 V130 C732 152 716 166 692 166 H630",
    start: [792, 72],
    end: [630, 166],
    delay: 1.28,
  },
  // Middle-left: horizontal line followed by a rounded drop and inward finish.
  {
    d: "M188 304 H220 C244 304 258 318 258 342 V352 C258 374 274 388 298 388 H358",
    start: [188, 304],
    end: [358, 388],
    delay: 1.73,
  },
  // Middle-right: exact mirrored curve.
  {
    d: "M792 304 H760 C736 304 722 318 722 342 V352 C722 374 706 388 682 388 H622",
    start: [792, 304],
    end: [622, 388],
    delay: 2.18,
  },
  // Bottom-left: horizontal start, smooth upward bend and inward finish.
  {
    d: "M188 538 H220 C244 538 258 522 258 500 V486 C258 464 274 450 298 450 H366",
    start: [188, 538],
    end: [366, 450],
    delay: 2.63,
  },
  // Bottom-right: exact mirrored curve.
  {
    d: "M792 538 H760 C736 538 722 522 722 500 V486 C722 464 706 450 682 450 H614",
    start: [792, 538],
    end: [614, 450],
    delay: 3.08,
  },
];

export default function WhatsAppChatbot() {
  const reduceMotion = useReducedMotion();
  const [showStickyCta, setShowStickyCta] = React.useState(true);

  /* Phone: the hero CTAs live in a fixed bar at the bottom of the screen. It
     slides away near the end of the page so it never sits over the footer. */
  React.useEffect(() => {
    const update = () => {
      const scrolledToEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 260;
      setShowStickyCta(!scrolledToEnd);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
    <main className="whatsapp-chatbot-page min-h-screen overflow-hidden bg-white">
      <section className="chatbot-mobile-hero relative isolate flex min-h-screen items-center overflow-hidden bg-[#f7faf7] px-5 pb-[110px] pt-[60px] sm:px-8 lg:pl-1 lg:pr-12 xl:pl-2 xl:pr-20 max-lg:pb-[70px] max-lg:pt-[10px] max-md:min-h-0 max-md:pb-[90px] max-md:pt-[110px]">
        <div className="chatbot-mobile-hero-grid mx-auto grid w-full max-w-[1480px] items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12 max-lg:text-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: 0.12,
            }}
            className="chatbot-mobile-hero-content relative z-20 mx-auto flex w-full max-w-[720px] flex-col gap-7 text-left lg:mx-0 lg:-mt-16 lg:-translate-x-10 xl:-mt-14 xl:-translate-x-16 2xl:-translate-x-20 max-md:gap-5 max-lg:items-center max-lg:text-center"
          >
            {/* Top pill */}
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="chatbot-mobile-hero-pill mb-0 -mt-6 inline-flex w-fit max-w-full items-center gap-2 rounded-[10px] border border-white/50 bg-white/25 px-3 py-2 text-[0.95rem] font-semibold text-green-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_28px_rgba(15,23,42,0.10)] ring-1 ring-white/30 backdrop-blur-lg max-lg:-mt-0"
            >
              <img
                src="/assets/images/whatsapp-icon.png"
                alt="WhatsApp"
                className="h-5 w-5 shrink-0 object-contain"
              />
              <span>WhatsApp Chatbot</span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="chatbot-mobile-hero-heading mt-14 flex w-full flex-col gap-1 max-md:mt-10"
            >
              <h1 className="mb-0 w-full whitespace-nowrap text-left text-[clamp(2.05rem,5.2vw,3rem)] font-extrabold leading-[1.05] tracking-normal text-[#292929] max-md:whitespace-normal max-lg:text-center">
                Scale customer conversations
              </h1>
              <h1 className="mb-0 flex w-full flex-nowrap items-center gap-x-[0.28em] whitespace-nowrap text-left text-[clamp(2.05rem,5.2vw,3rem)] font-extrabold leading-[1.05] tracking-normal text-[#292929] max-md:flex-wrap max-md:whitespace-normal max-lg:justify-center max-lg:text-center">
                with a smart <AnimatedTypingText text="WhatsApp chatbot" />
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="chatbot-mobile-hero-description m-0 block max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6] max-lg:text-center"
            >
              <span className="block">
                Automate responses, qualify leads, direct support queries, and
                keep customer journeys moving smoothly on WhatsApp.
              </span>
            </motion.p>

            {/* Hero stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 grid w-full max-w-[640px] grid-cols-2 gap-3.5 max-md:gap-2.5"
            >
              {[
                { value: "24/7", label: "Always Available", color: "#059669" },
                { value: "3X", label: "Faster Response", color: "#059669" },
                { value: "80%", label: "Query Automation", color: "#059669" },
                { value: "1:1", label: "Smart Routing", color: "#059669" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex min-h-[96px] w-full flex-col items-start justify-center gap-1.5 rounded-[8px] border border-white/15 bg-transparent pl-7 pr-2 max-md:min-h-0 max-md:items-start max-md:justify-center max-md:gap-0.5 max-md:rounded-[14px] max-md:border-[#E4E9EE] max-md:bg-white max-md:px-4 max-md:py-4 max-md:text-left max-md:shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex translate-y-2 flex-col gap-1.5 max-md:translate-y-0 max-md:items-start max-md:gap-0.5 max-md:text-left">
                      <span
                      className="mt-1 text-[2.15rem] font-extrabold leading-none max-md:mt-0 max-md:text-[1.55rem]"
                      style={{ color: s.color }}
                    >
                      {s.value}
                    </span>
                    <span className="min-h-[2.1em] !text-[1.06rem] font-medium leading-tight text-[#5B667A] xl:!text-[1.14rem] max-md:min-h-0 max-md:!text-[0.86rem] max-md:leading-snug">
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="chatbot-mobile-hero-actions mt-6 flex items-center gap-3 max-lg:justify-center max-md:hidden"
            >
              <Link
                to="/signup"
                className="roll-btn group inline-flex items-center justify-center overflow-hidden rounded-[10px] border-2 border-green-600 bg-green-600 px-11 py-2.5 text-[1rem] font-semibold text-white transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white max-sm:w-full"
              >
                <span className="roll-content">
                  <span className="roll-content-main">
                    <span>Get Started</span>
                    <ArrowRight size={20} strokeWidth={2.2} />
                  </span>

                  <span className="roll-content-hover">
                    <span>Get Started</span>
                    <ArrowRight size={20} strokeWidth={2.2} />
                  </span>
                </span>
              </Link>

              <Link
                to="/book-demo"
                className="roll-btn group inline-flex items-center justify-center overflow-hidden rounded-[10px] border-2 border-green-600 bg-white px-7 py-2.5 text-[1rem] font-semibold !text-green-600 transition-all duration-300 hover:bg-green-600 hover:!text-green-600 max-sm:w-full"
              >
                <span className="roll-content">
                  <span className="roll-content-main">
                    <CalendarDays size={26} strokeWidth={1.6} />
                    <span>Request a Demo</span>
                  </span>

                  <span className="roll-content-hover">
                    <CalendarDays size={26} strokeWidth={1.6} />
                    <span>Request a Demo</span>
                  </span>
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right chatbot visual */}
          <div className="chatbot-mobile-hero-visual relative mx-auto flex min-h-[560px] w-full max-w-[980px] items-center justify-center lg:min-h-[650px] lg:translate-x-6 xl:translate-x-10">
            {/* Reference-style connectors: thin green lines, rounded bends and soft endpoint dots */}
            <svg
              viewBox="0 0 980 650"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-[5] hidden h-full w-full overflow-visible lg:block"
            >
              <defs>
                <filter
                  id="chatbotConnectorDotGlow"
                  x="-80%"
                  y="-80%"
                  width="260%"
                  height="260%"
                >
                  <feGaussianBlur stdDeviation="3.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {chatbotHeroConnectors.map((connector) => (
                <React.Fragment key={connector.d}>
                  <motion.path
                    d={connector.d}
                    fill="none"
                    stroke="#27C866"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 0.78,
                      delay: connector.delay,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* Pale halo behind the card-side dot */}
                  <motion.circle
                    cx={connector.start[0]}
                    cy={connector.start[1]}
                    r="8"
                    fill="rgba(39,200,102,0.14)"
                    initial={{ opacity: 0, scale: 0.45 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: connector.delay,
                      duration: 0.35,
                    }}
                  />

                  {/* Bright card-side dot */}
                  <motion.circle
                    cx={connector.start[0]}
                    cy={connector.start[1]}
                    r="4.2"
                    fill="#20C763"
                    filter="url(#chatbotConnectorDotGlow)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: connector.delay + 0.05,
                      type: "spring",
                      stiffness: 260,
                      damping: 16,
                    }}
                  />

                  {/* Small bot-side connection point */}
                  <motion.circle
                    cx={connector.end[0]}
                    cy={connector.end[1]}
                    r="3.7"
                    fill="#20C763"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: connector.delay + 0.58,
                      type: "spring",
                      stiffness: 260,
                      damping: 16,
                    }}
                  />
                </React.Fragment>
              ))}
            </svg>

            {/* Feature cards — revealed one by one */}
            {chatbotHeroFeatures.map((card, i) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.label}
                  initial={{
                    opacity: 0,
                    y: 24,
                    x: card.side === "left" ? -44 : 44,
                    scale: 0.76,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -6, 0],
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    opacity: {
                      duration: 0.72,
                      delay: card.delay,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    x: {
                      duration: 0.72,
                      delay: card.delay,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    scale: {
                      duration: 0.72,
                      delay: card.delay,
                      type: "spring",
                      stiffness: 125,
                      damping: 17,
                      mass: 0.8,
                    },
                    filter: {
                      duration: 0.6,
                      delay: card.delay,
                    },
                    y: {
                      duration: 3.4,
                      delay: card.delay + 0.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.035,
                    boxShadow: "0 20px 44px rgba(15,23,42,0.14)",
                  }}
                  className={`chatbot-feature-card absolute z-30 hidden min-w-[188px] items-center gap-3 rounded-[20px] border border-emerald-100/80 bg-white/95 px-4 py-3.5 shadow-[0_14px_34px_rgba(15,23,42,0.10)] backdrop-blur-md lg:flex ${
                    card.side === "left"
                      ? "left-0 xl:-left-4"
                      : "right-0 xl:-right-4"
                  }`}
                  style={{ top: card.top }}
                >
                  {card.side === "left" && (
                    <motion.span
                      initial={{ scale: 0, rotate: -25 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: card.delay + 0.22,
                        type: "spring",
                        stiffness: 220,
                        damping: 14,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#22C55E] to-[#0EA55A] text-white shadow-[0_7px_18px_rgba(16,185,110,0.34)]"
                    >
                      <Icon size={21} strokeWidth={2.15} />
                    </motion.span>
                  )}

                  <span className="max-w-[108px] whitespace-normal text-[0.92rem] font-semibold leading-[1.25] text-[#1F2937] xl:text-[0.98rem]">
                    {card.label}
                  </span>

                  {card.side === "right" && (
                    <motion.span
                      initial={{ scale: 0, rotate: 25 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: card.delay + 0.22,
                        type: "spring",
                        stiffness: 220,
                        damping: 14,
                      }}
                      className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#22C55E] to-[#0EA55A] text-white shadow-[0_7px_18px_rgba(16,185,110,0.34)]"
                    >
                      <Icon size={21} strokeWidth={2.15} />
                    </motion.span>
                  )}
                </motion.div>
              );
            })}

            {/* Animated orbit rings */}
            <motion.div
              className="chatbot-orbit-spin-slow chatbot-orbit-arc absolute h-[440px] w-[440px] rounded-full border border-dashed border-emerald-300/25 sm:h-[520px] sm:w-[520px]"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="chatbot-orbit-spin-reverse chatbot-orbit-arc chatbot-orbit-arc-inner absolute h-[350px] w-[350px] rounded-full border border-emerald-200/25 sm:h-[415px] sm:w-[415px]"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
            </motion.div>

            <motion.div
              className="chatbot-orbit-spin-fast absolute h-[440px] w-[440px] rounded-full sm:h-[520px] sm:w-[520px]"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
            >
            </motion.div>

            <motion.div
              className="chatbot-orbit-spin-reverse-fast absolute h-[350px] w-[350px] rounded-full sm:h-[415px] sm:w-[415px]"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            >
            </motion.div>

            <motion.img
              src="/assets/images/Payment bot.webp"
              alt="WhatsApp chatbot assistant"
              initial={{
                opacity: 0,
                scale: 0.78,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1.18,
                x: -6,
                y: 44,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                type: "spring",
                stiffness: 100,
                damping: 17,
              }}
              className="chatbot-mobile-hero-image relative z-10 h-auto w-[620px] max-w-none object-contain drop-shadow-[0_36px_82px_rgba(15,118,63,0.22)] sm:w-[735px] lg:w-[900px] xl:w-[995px]"
            />

          </div>
        </div>
      </section>

      <ComparisonSection />
      <ChatbotBookSection />
      <WhatsAppLaunchStepsSection />

      <style jsx global>{`
        @keyframes chatbotOrbitSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes chatbotOrbitSpinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        .chatbot-orbit-spin-slow {
          animation: chatbotOrbitSpin 8s linear infinite !important;
          transform-origin: center;
          will-change: transform;
        }

        .chatbot-orbit-spin-fast {
          animation: chatbotOrbitSpin 5.5s linear infinite !important;
          transform-origin: center;
          will-change: transform;
        }

        .chatbot-orbit-spin-reverse {
          animation: chatbotOrbitSpinReverse 7s linear infinite !important;
          transform-origin: center;
          will-change: transform;
        }

        .chatbot-orbit-spin-reverse-fast {
          animation: chatbotOrbitSpinReverse 4.8s linear infinite !important;
          transform-origin: center;
          will-change: transform;
        }

        .chatbot-orbit-arc::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 244deg,
            rgba(37, 211, 102, 0.08) 254deg,
            rgba(37, 211, 102, 0.62) 270deg,
            rgba(110, 231, 183, 0.98) 286deg,
            rgba(186, 230, 253, 0.95) 296deg,
            rgba(255, 255, 255, 0.98) 302deg,
            rgba(56, 189, 248, 0.42) 312deg,
            rgba(37, 211, 102, 0.08) 326deg,
            transparent 340deg,
            transparent 360deg
          );
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2.4px),
            #000 calc(100% - 1.1px)
          );
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2.4px),
            #000 calc(100% - 1.1px)
          );
          filter:
            drop-shadow(0 0 2px rgba(255, 255, 255, 0.95))
            drop-shadow(0 0 5px rgba(37, 211, 102, 0.55))
            drop-shadow(0 0 10px rgba(56, 189, 248, 0.2));
          opacity: 0.94;
          pointer-events: none;
        }

        .chatbot-orbit-arc-inner::after {
          inset: -1px;
          background: conic-gradient(
            from 180deg,
            transparent 0deg,
            transparent 230deg,
            rgba(37, 211, 102, 0.06) 244deg,
            rgba(37, 211, 102, 0.52) 260deg,
            rgba(134, 239, 172, 0.95) 276deg,
            rgba(224, 242, 254, 0.98) 287deg,
            rgba(255, 255, 255, 1) 294deg,
            rgba(125, 211, 252, 0.38) 305deg,
            rgba(37, 211, 102, 0.06) 320deg,
            transparent 336deg,
            transparent 360deg
          );
          filter:
            drop-shadow(0 0 2px rgba(255, 255, 255, 0.9))
            drop-shadow(0 0 4px rgba(37, 211, 102, 0.42))
            drop-shadow(0 0 8px rgba(125, 211, 252, 0.18));
          opacity: 0.82;
        }

        .chatbot-hero-keyword,
        .chatbot-hero-keyword * {
          color: #10b957 !important;
        }

        @media (max-width: 639px) {
          .whatsapp-chatbot-page .chatbot-mobile-hero {
            min-height: auto;
            padding: 35px 20px 50px;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-grid {
            min-width: 0;
            max-width: 100%;
            gap: 6px;
            text-align: left;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-content {
            min-width: 0;
            max-width: 100%;
            align-items: flex-start;
            gap: 20px;
            text-align: left;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-pill {
            padding: 8px 12px;
            font-size: 0.95rem;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-heading {
            margin-top: 12px;
            gap: 4px;
          }

          /* "WhatsApp chatbot" is one unbreakable word (~9.1em in
             Manrope ExtraBold) and the keyword span uses
             contain: paint, so anything wider than the column gets
             clipped instead of wrapping. 8.2vw keeps it inside the
             column on every phone width down to ~300px. */
          .whatsapp-chatbot-page .chatbot-mobile-hero-heading h1 {
            font-size: clamp(1.5rem, 8.2vw, 2.25rem) !important;
            line-height: 1.08 !important;
            text-align: left !important;
            justify-content: flex-start !important;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-heading h1:last-child {
            display: block;
            text-align: left !important;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-keyword {
            display: inline-block;
            margin-left: 0.08em;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-description {
            max-width: 690px;
            font-size: 1rem !important;
            line-height: 1.6 !important;
            text-align: left !important;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-actions {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            margin-top: 24px;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-actions > a {
            width: 100%;
            padding: 10px 28px;
            font-size: 1rem;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-visual {
            min-height: 330px;
            max-width: 100%;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-visual .chatbot-orbit-arc,
          .whatsapp-chatbot-page .chatbot-mobile-hero-visual .chatbot-orbit-spin-fast {
            width: min(290px, 76vw);
            height: min(290px, 76vw);
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-visual .chatbot-orbit-arc-inner,
          .whatsapp-chatbot-page .chatbot-mobile-hero-visual .chatbot-orbit-spin-reverse-fast {
            width: min(230px, 60vw);
            height: min(230px, 60vw);
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-image {
            width: min(400px, 86vw);
          }
        }
        .wa-chatbot-launch-section .wa-launch-card {
          height: 575px !important;
          border-radius: 22px !important;
        }

        .wa-chatbot-launch-section .wa-launch-card:hover {
          border-color: rgba(62, 139, 124, 0.48) !important;
        }

        .wa-chatbot-launch-section .wa-launch-card p {
          margin: 0 !important;
        }

        .wa-chatbot-launch-section .wa-launch-card-title {
          font-size: 20px !important;
          font-weight: 800 !important;
          line-height: 1.24 !important;
          color: #071b2c !important;
          text-align: left !important;
          white-space: normal !important;
          overflow: visible !important;
          text-overflow: clip !important;
        }

        .wa-chatbot-launch-section .wa-launch-card-desc {
          margin-top: 14px !important;
          font-size: 15px !important;
          font-weight: 500 !important;
          line-height: 1.58 !important;
          color: #526178 !important;
          text-align: left !important;
        }

        .wa-chatbot-launch-section .wa-launch-number {
          width: 42px !important;
          height: 42px !important;
          border-radius: 9999px !important;
          font-size: 15px !important;
          line-height: 1 !important;
        }

        .wa-chatbot-launch-section .wa-launch-icon {
          width: 42px !important;
          height: 42px !important;
          border-radius: 12px !important;
        }

        .wa-chatbot-launch-section .wa-launch-visual p {
          margin: 0 !important;
          font-size: 9.5px !important;
          line-height: 1.34 !important;
        }

        .wa-chatbot-launch-section .wa-launch-visual p,
        .wa-chatbot-launch-section .wa-launch-visual span,
        .wa-chatbot-launch-section .wa-launch-visual div,
        .wa-chatbot-launch-section .wa-launch-visual button {
          font-size: 9.5px !important;
          line-height: 1.34 !important;
        }

        .wa-chatbot-launch-section .wa-launch-visual {
          min-height: 0 !important;
          margin-top: 22px !important;
        }

        .wa-chatbot-launch-section .wa-launch-visual > * {
          height: 100%;
        }

        @media (min-width: 1280px) {
          .wa-chatbot-launch-section .wa-launch-card {
            height: 595px !important;
          }
        }

        /* =====================================================
           MOBILE RESPONSIVE — phones only (max-width: 767px)
           Desktop / tablet layouts are untouched.
        ===================================================== */

        @media (min-width: 640px) and (max-width: 767px) {
          .whatsapp-chatbot-page .chatbot-mobile-hero {
            min-height: auto;
            padding: 40px 24px 60px;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-visual {
            min-height: 400px;
            max-width: 100%;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-image {
            width: min(460px, 70vw);
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-visual .chatbot-orbit-arc,
          .whatsapp-chatbot-page
            .chatbot-mobile-hero-visual
            .chatbot-orbit-spin-fast {
            width: 400px;
            height: 400px;
          }

          .whatsapp-chatbot-page
            .chatbot-mobile-hero-visual
            .chatbot-orbit-arc-inner,
          .whatsapp-chatbot-page
            .chatbot-mobile-hero-visual
            .chatbot-orbit-spin-reverse-fast {
            width: 320px;
            height: 320px;
          }
        }

        @media (max-width: 767px) {
          .whatsapp-chatbot-page {
            overflow-x: hidden;
          }

          .whatsapp-chatbot-page section {
            padding-left: 16px;
            padding-right: 16px;
          }

          /* ---------- Hero: bot image sits above the heading ---------- */

          .whatsapp-chatbot-page .chatbot-mobile-hero-visual {
            order: -1;
            margin-bottom: 4px;
          }

          .whatsapp-chatbot-page .chatbot-mobile-hero-content {
            order: 0;
          }

          /* The entrance animation renders the image at 1.18x and
             nudges it 44px down. Neutralised on phones so the bot
             stays fully visible and does not overlap the heading. */
          .whatsapp-chatbot-page .chatbot-mobile-hero-image {
            max-width: none;
            transform: none !important;
            transform-origin: center;
          }

          /* ---------- Shared section headings ---------- */

          .whatsapp-chatbot-page .wa-section-heading {
            max-width: 100% !important;
            white-space: normal !important;
            font-size: clamp(1.45rem, 6.4vw, 2rem) !important;
            line-height: 1.2 !important;
            overflow-wrap: break-word;
          }

          .whatsapp-chatbot-page .wa-section-heading span {
            white-space: normal !important;
          }

          .whatsapp-chatbot-page .wa-section-sub {
            max-width: 100% !important;
            margin-top: 14px !important;
            white-space: normal !important;
            font-size: 0.95rem !important;
            line-height: 1.62 !important;
          }

          /* ---------- Before / After comparison ---------- */

          .whatsapp-chatbot-page #chatbot-comparison {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }

          .whatsapp-chatbot-page .cmp-card-head {
            align-items: flex-start !important;
            gap: 10px;
            padding: 12px 14px !important;
          }

          .whatsapp-chatbot-page .cmp-card-title {
            display: block !important;
            white-space: normal !important;
            font-size: 0.98rem !important;
            line-height: 1.25 !important;
          }

          .whatsapp-chatbot-page .cmp-card-badge {
            flex-shrink: 0;
            white-space: nowrap;
            padding: 5px 9px !important;
            font-size: 9px !important;
          }

          .whatsapp-chatbot-page .cmp-media {
            height: auto !important;
            margin: -6px 14px 0 !important;
          }

          .whatsapp-chatbot-page .cmp-media img {
            width: 68% !important;
            max-width: 68% !important;
            height: auto !important;
          }

          .whatsapp-chatbot-page .cmp-list {
            padding: 10px 12px !important;
          }

          .whatsapp-chatbot-page .cmp-list p {
            font-size: 12.5px !important;
            line-height: 1.42 !important;
          }

          /* ---------- Chatbot book section ---------- */

          /* Chapter tabs are hidden on phones — the arrows and the
             dots below the book already cover navigation. */
          .whatsapp-chatbot-page .book-tabs {
            display: none !important;
          }

          .whatsapp-chatbot-page .book-stage {
            margin-top: 26px !important;
          }

          .whatsapp-chatbot-page .book-page-grid {
            min-height: 0 !important;
          }

          .whatsapp-chatbot-page .book-left-page {
            padding: 30px 18px 24px !important;
          }

          .whatsapp-chatbot-page .book-chapter-badge {
            height: 46px !important;
            width: 46px !important;
            border-radius: 16px !important;
            font-size: 14px !important;
          }

          .whatsapp-chatbot-page .book-page-title {
            margin-top: 20px !important;
            font-size: 24px !important;
            line-height: 1.16 !important;
          }

          .whatsapp-chatbot-page .book-page-desc {
            margin-top: 14px !important;
            font-size: 13.5px !important;
            line-height: 1.6 !important;
          }

          .whatsapp-chatbot-page .book-points {
            margin-top: 20px !important;
          }

          .whatsapp-chatbot-page .book-points p {
            font-size: 12.8px !important;
            line-height: 1.5 !important;
          }

          .whatsapp-chatbot-page .book-page-status {
            margin-top: 22px !important;
          }

          .whatsapp-chatbot-page .book-right-page {
            min-height: 0 !important;
            padding: 0 14px 22px !important;
          }

          .whatsapp-chatbot-page .book-visual {
            height: 440px !important;
            padding: 12px !important;
          }

          .whatsapp-chatbot-page .book-bubble {
            max-width: 190px !important;
            padding: 10px 14px !important;
          }

          .whatsapp-chatbot-page .assist-card {
            min-height: 0 !important;
            padding: 16px !important;
          }

          .whatsapp-chatbot-page .assist-row {
            padding: 8px 10px !important;
          }

          .whatsapp-chatbot-page .assist-row-icon {
            height: 36px !important;
            width: 36px !important;
          }

          /* Page arrows move to the card header so they never
             sit on top of the heading or the animated visual. */

          .whatsapp-chatbot-page .book-nav {
            top: 16px !important;
            bottom: auto !important;
            height: 36px !important;
            width: 36px !important;
            transform: none !important;
          }

          .whatsapp-chatbot-page .book-nav svg {
            height: 18px;
            width: 18px;
          }

          .whatsapp-chatbot-page .book-nav-prev {
            left: auto !important;
            right: 56px !important;
          }

          .whatsapp-chatbot-page .book-nav-next {
            right: 12px !important;
          }

          /* ---------- Four step launch section ---------- */

          .whatsapp-chatbot-page .wa-launch-grid {
            margin-top: 34px !important;
            gap: 18px !important;
          }

          .wa-chatbot-launch-section .wa-launch-card {
            height: 520px !important;
            padding: 18px !important;
          }

          .wa-chatbot-launch-section .wa-launch-card-title {
            font-size: 17px !important;
            line-height: 1.28 !important;
          }

          .wa-chatbot-launch-section .wa-launch-card-desc {
            margin-top: 10px !important;
            font-size: 13.5px !important;
            line-height: 1.55 !important;
          }

          .wa-chatbot-launch-section .wa-launch-visual {
            margin-top: 16px !important;
          }
        }
      `}</style>
    </main>

    {/* Phone: sticky CTA bar. Sits outside <main> so the page's overflow
        clipping can never trap it. */}
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-[#D7E8E1] bg-white/95 px-3 py-2.5 shadow-[0_-8px_24px_rgba(7,27,77,0.14)] backdrop-blur-md transition-transform duration-300 md:hidden ${
        showStickyCta ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        to="/signup"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-[9px]! border-2 border-green-600 bg-green-600 px-3 py-2.5 text-[0.9rem] font-semibold !text-white no-underline!"
      >
        <span>Get Started</span>
        <ArrowRight size={16} />
      </Link>

      <Link
        to="/book-demo"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-[9px]! border-2 border-green-600 bg-white px-3 py-2.5 text-[0.9rem] font-semibold !text-green-600 no-underline!"
      >
        <span>Request a Demo</span>
        <CalendarDays size={18} strokeWidth={1.6} />
      </Link>
    </div>
    </>
  );
}
