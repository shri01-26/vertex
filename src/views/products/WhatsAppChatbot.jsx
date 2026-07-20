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
  MessagesSquare,
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
  ImageIcon,
  ShoppingBag,
  Target,
  BookOpen,
  ChevronLeft,
  Pause,
  Play,
  Smartphone,
  BarChart3,
  LockKeyhole,
} from "lucide-react";

const floatingFeatures = [
  {
    title: "Instant Answers",
    icon: Zap,
    position: "left-0 top-[8%] lg:left-[-5%] lg:top-[13%]",
    delay: 0,
  },
  {
    title: "Task Automation",
    icon: Workflow,
    position: "right-0 top-[5%] lg:right-[-2%] lg:top-[12%]",
    delay: 0.4,
  },
  {
    title: "Smart Routing",
    icon: Network,
    position: "left-0 top-[42%] lg:left-[-10%] lg:top-[45%]",
    delay: 0.8,
  },
  {
    title: "24/7 Availability",
    icon: Clock3,
    position: "right-0 top-[40%] lg:right-[-8%] lg:top-[43%]",
    delay: 1.2,
  },
  {
    title: "Lead Qualification",
    icon: UserRoundCheck,
    position: "left-[4%] bottom-[5%] lg:left-[-2%] lg:bottom-[8%]",
    delay: 1.6,
  },
  {
    title: "Clean Data Capture",
    icon: Database,
    position: "right-[2%] bottom-[4%] lg:right-[-4%] lg:bottom-[8%]",
    delay: 2,
  },
];

const bottomFeatures = [
  {
    title: "Instant Replies",
    icon: MessageCircle,
  },
  {
    title: "Always Available",
    icon: Clock3,
  },
  {
    title: "Smart & Scalable",
    icon: BrainCircuit,
  },
];

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
  const width = `${text.length}ch`;
  const underlineWidth = `${Math.max(text.length - 0.2, 1)}ch`;

  return (
    <span
      className={`relative inline-flex max-w-full items-baseline whitespace-nowrap text-[#16A34A] ${className}`}
      style={{ minWidth: `min(${width}, 100%)` }}
    >
      <motion.span
        initial={{ width: 0 }}
        animate={{
          width: ["0ch", width, width, "0ch", "0ch"],
        }}
        transition={{
          duration: 4.8,
          times: [0, 0.38, 0.58, 0.9, 1],
          repeat: Infinity,
          repeatDelay: 0.45,
          ease: "linear",
        }}
        className="inline-block overflow-hidden whitespace-nowrap align-bottom"
      >
        {text}
      </motion.span>

      <motion.span
        animate={{ opacity: [1, 1, 0, 0, 1] }}
        transition={{
          duration: 0.85,
          repeat: Infinity,
          ease: "linear",
        }}
        className="ml-[3px] inline-block h-[0.9em] w-[3px] rounded-full bg-[#16A34A] align-middle"
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
        className="absolute -bottom-1 left-0 -z-10 h-[8px] origin-left rounded-full bg-[#DDF8E7]"
        style={{ width: `min(${underlineWidth}, 100%)` }}
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
  "Customers wait for answers",
  "Repetitive queries consume time",
  "Leads disappear due to slow follow-ups",
  "No tracking of conversation outcomes",
  "Manual handoffs between teams",
];

const afterSupportPoints = [
  "Instant responses to common questions",
  "AI-powered conversation routing",
  "Smart handling of high-demand periods",
  "Lead qualification through automated flows",
  "Continuous follow-ups and reminders",
  "24/7 customer availability",
  "Clear conversation and engagement data",
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
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.7,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 text-xs font-bold text-emerald-700 shadow-sm backdrop-blur-lg sm:text-sm"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[#19B75A]">
              <Workflow size={15} />
            </span>
            Before and After WhatsApp Automation
          </motion.div>

          <motion.h2
            {...businessApiHeadingProps}
            className="mx-auto max-w-none whitespace-nowrap text-center text-[clamp(1.65rem,4.4vw,4.2rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]"
          >
            <span className="block">A broken support flow becomes a</span>
            <span className="block">
              <span className="text-[#16A34A]">chatbot-powered</span>{" "}
              customer experience
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
            className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]"
          >
            See how AI automation transforms every step of the customer support
            journey—from delayed replies and manual handoffs to instant,
            structured and measurable conversational flows.
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
            <div className="flex items-center justify-between border-b border-red-100 bg-red-50/55 px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-3">
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
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-100 text-red-500"
                >
                  <AlertCircle size={22} />
                </motion.span>

                <div className="min-w-0">
                  <p className="text-base font-black uppercase tracking-[0.16em] !text-red-600">
                    Before
                  </p>

                  <h3 className="mt-0.5 whitespace-nowrap text-base font-black text-[#281315] sm:text-lg">
                    Manual Support Experience
                  </h3>
                </div>
              </div>

              <span className="rounded-full border border-red-200 bg-white px-3 py-1.5 text-xs font-bold text-red-500">
                Broken Flow
              </span>
            </div>

            {/* Customer image area */}
            <div className="relative mx-5 mt-4 h-[170px] overflow-hidden rounded-[22px] sm:mx-6 sm:h-[185px]">
              <img
                src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=1100&q=85"
                alt="Customer waiting for support response"
                className="h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#301417]/70 via-[#301417]/25 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

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
                className="absolute left-4 top-4 max-w-[150px] rounded-2xl rounded-bl-sm border border-white/50 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md"
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
                className="absolute bottom-4 right-4 max-w-[170px] rounded-2xl rounded-br-sm border border-red-100 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md"
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

              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-2 text-xs font-bold text-white backdrop-blur-md">
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
              className="space-y-1.5 px-5 py-4 sm:px-6"
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
                  className="group relative flex items-start gap-2.5 overflow-hidden rounded-xl bg-red-50/25 px-3 py-2 transition-all duration-300 hover:bg-red-50/45 hover:shadow-[0_6px_18px_rgba(239,68,68,0.06)]"
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
            <div className="flex items-center justify-between border-b border-emerald-100 bg-emerald-50/55 px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-3">
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
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-[#19B75A]"
                >
                  <Sparkles size={22} />
                </motion.span>

                <div>
                  <p className="text-base font-black uppercase tracking-[0.16em] !text-emerald-600">
                    After
                  </p>

                  <h3 className="mt-1 text-xl font-black text-[#0C2C1B]">
                    AI Chatbot Experience
                  </h3>
                </div>
              </div>

              <span className="rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-xs font-bold text-emerald-600">
                Automated
              </span>
            </div>

            {/* Chatbot visual */}
            <div className="relative mx-5 mt-4 h-[170px] overflow-hidden rounded-[22px] border border-emerald-100 bg-[radial-gradient(circle_at_center,#dffff0_0%,#f4fff8_45%,#ffffff_100%)] sm:mx-6 sm:h-[185px]">
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
                className="absolute left-1/2 top-1/2 h-[185px] w-[185px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-300"
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
                className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/40 blur-2xl"
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
                className="absolute left-1/2 top-1/2 flex h-[105px] w-[105px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[34px] border-[6px] border-white bg-[#071B2C] text-[#4AF087] shadow-[0_24px_50px_rgba(15,118,63,0.25)]"
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
                className="absolute left-3 top-4 max-w-[150px] rounded-2xl rounded-bl-sm border border-emerald-100 bg-white px-4 py-3 shadow-lg"
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
                className="absolute bottom-4 right-3 max-w-[175px] rounded-2xl rounded-br-sm border border-emerald-200 bg-[#EFFFF4] px-4 py-3 shadow-lg"
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
                className="absolute right-3 top-4 flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-2 shadow-lg"
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
              className="space-y-1.5 px-5 py-4 sm:px-6"
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
                  className="group relative flex items-start gap-2.5 overflow-hidden rounded-xl bg-emerald-50/25 px-3 py-2 transition-all duration-300 hover:bg-emerald-50/45 hover:shadow-[0_6px_18px_rgba(34,197,94,0.07)]"
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

        {/* Bottom explanation card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 overflow-hidden rounded-[24px] border border-emerald-100 bg-white/90 shadow-[0_25px_70px_rgba(15,118,63,0.09)] backdrop-blur-xl"
        >
          <div className="grid items-center gap-4 px-5 py-4 lg:grid-cols-[1fr_auto] lg:px-6">
            {/* Message */}
            <div className="flex items-start gap-4">
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: [0, 8, -8, 0],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.25)]"
              >
                <MessageCircle size={24} fill="currentColor" />
              </motion.span>

              <div>
                <h4 className="text-base font-black text-[#071B2C] sm:text-lg">
                  A WhatsApp chatbot does more than answer messages.
                </h4>

                <p className="mt-1.5 max-w-[760px] text-sm font-medium leading-6 text-slate-600">
                  It connects customer intent with the right response, workflow,
                  team and next action—without making customers wait.
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-xs font-black text-emerald-700">
              <span className="relative flex h-2.5 w-2.5">
                <motion.span
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.9, 1],
                          opacity: [0.6, 0, 0.6],
                        }
                  }
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-full bg-[#25D366]"
                />

                <span className="relative h-2.5 w-2.5 rounded-full bg-[#25D366]" />
              </span>
              Intelligent workflow active
            </div>
          </div>

          {/* Workflow */}
          <div className="border-t border-emerald-100 bg-[#F8FFFA] px-5 py-3.5 sm:px-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                {
                  label: "Customer Message",
                  icon: MessageSquareText,
                },
                {
                  label: "Intent Trigger",
                  icon: Zap,
                },
                {
                  label: "Bot Reply",
                  icon: Bot,
                },
                {
                  label: "Smart Route",
                  icon: Route,
                },
                {
                  label: "Business Action",
                  icon: MousePointerClick,
                },
              ].map((step, index, array) => {
                const Icon = step.icon;

                return (
                  <React.Fragment key={step.label}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 18,
                        scale: 0.9,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileHover={{
                        y: -4,
                        scale: 1.03,
                      }}
                      className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2.5 text-xs font-extrabold text-[#173527] shadow-sm"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[#19B75A]">
                        <Icon size={14} />
                      </span>

                      {step.label}
                    </motion.div>

                    {index < array.length - 1 && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          scaleX: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                          scaleX: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.1 + 0.2,
                        }}
                        className="relative hidden h-px w-7 origin-left bg-emerald-200 sm:block"
                      >
                        <motion.span
                          animate={
                            reduceMotion
                              ? undefined
                              : {
                                  x: [0, 22, 0],
                                }
                          }
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -top-1 h-2 w-2 rounded-full bg-[#25D366]"
                        />
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom section label */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-7 flex items-center justify-center gap-2 text-center text-xs font-bold text-emerald-600"
        >
          <MessageCircle size={15} />
          What Your WhatsApp Chatbot Is Built to Do
        </motion.div>
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
    title: "Instant Resolution",
    heading: "Answer every customer question instantly.",
    description:
      "Give customers accurate and immediate answers without making them wait for a support agent.",
    color: "#16A34A",
    softColor: "#ECFDF3",
    borderColor: "#BBF7D0",
    icon: MessageCircle,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=88",
    imageAlt: "Customer using an AI chatbot",
    points: [
      "Instant answers to common customer questions",
      "Accurate product, service and policy information",
      "Available throughout the complete customer journey",
    ],
    type: "answer",
  },
  {
    id: "guide",
    number: "02",
    eyebrow: "GUIDE",
    title: "Interactive Flows",
    heading: "Guide every customer towards the right action.",
    description:
      "Turn complex customer journeys into simple conversational steps with intelligent branching and guided choices.",
    color: "#2563EB",
    softColor: "#EFF6FF",
    borderColor: "#BFDBFE",
    icon: GitBranch,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=88",
    imageAlt: "Customer journey and analytics dashboard",
    points: [
      "Structured conversational journeys",
      "Smart branching based on customer intent",
      "Step-by-step customer guidance",
    ],
    type: "guide",
  },
  {
    id: "assist",
    number: "03",
    eyebrow: "ASSIST",
    title: "High-Value Tasks",
    heading: "Complete important customer tasks inside chat.",
    description:
      "Capture information, qualify leads, book appointments and complete customer actions without leaving WhatsApp.",
    color: "#7C3AED",
    softColor: "#F5F3FF",
    borderColor: "#DDD6FE",
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=88",
    imageAlt: "Business professional completing digital tasks",
    points: [
      "Capture and validate customer information",
      "Book appointments and product demonstrations",
      "Complete important service requests",
    ],
    type: "assist",
  },
  {
    id: "automate",
    number: "04",
    eyebrow: "AUTOMATE",
    title: "End-to-End Workflows",
    heading: "Turn customer conversations into business actions.",
    description:
      "Connect every message with automated replies, intelligent routing, notifications and backend workflows.",
    color: "#F97316",
    softColor: "#FFF7ED",
    borderColor: "#FED7AA",
    icon: Settings2,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=88",
    imageAlt: "Automated business workflow on a laptop",
    points: [
      "Trigger automated replies and follow-ups",
      "Route conversations to the correct team",
      "Connect chat with business systems",
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

function AnswerBookVisual({ page, animationCycle, reduceMotion }) {
  return (
    <motion.div
      key={`answer-${animationCycle}`}
      className="relative h-[520px] w-full overflow-hidden rounded-[30px] border border-emerald-100 bg-[#F7FFF9]"
    >
      <motion.img
        src={page.image}
        alt={page.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.07, 1],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#032416]/90 via-[#032416]/20 to-black/5" />

      <motion.div
        initial={{
          opacity: 0,
          x: -30,
          y: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
        }}
        className="absolute left-6 top-8 max-w-[270px] rounded-[24px] rounded-bl-md border border-white/70 bg-white/95 px-5 py-4 shadow-2xl backdrop-blur-md"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
          Customer
        </p>

        <p className="mt-2 text-sm font-black text-[#173527] sm:text-base">
          Where is my order?
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: 35,
          y: 25,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.65,
          delay: 1.2,
        }}
        className="absolute bottom-8 right-6 max-w-[310px] rounded-[24px] rounded-br-md border border-emerald-200 bg-[#EFFFF4]/95 px-5 py-4 shadow-2xl backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          <Bot size={16} style={{ color: page.color }} />

          <span
            className="text-[10px] font-black uppercase tracking-[0.15em]"
            style={{
              color: page.color,
            }}
          >
            Instant Response
          </span>
        </div>

        <p className="mt-2 text-sm font-bold leading-6 text-[#173527]">
          Your order is out for delivery and will arrive today.
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: reduceMotion ? 0 : [0, -12, 0],
          rotate: reduceMotion ? 0 : [0, 3, -3, 0],
        }}
        transition={{
          opacity: {
            delay: 1.8,
            duration: 0.5,
          },
          scale: {
            delay: 1.8,
            duration: 0.5,
          },
          y: {
            duration: 4,
            repeat: Infinity,
          },
          rotate: {
            duration: 5,
            repeat: Infinity,
          },
        }}
        className="absolute right-[12%] top-[31%] flex h-24 w-24 items-center justify-center rounded-[34px] border-[7px] border-white bg-[#071B2C] text-[#48ED81] shadow-[0_25px_60px_rgba(7,27,44,0.35)]"
      >
        <Bot size={47} />

        <motion.span
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute right-2 top-2 h-4 w-4 rounded-full bg-[#25D366]"
        />
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   GUIDE VISUAL
========================================================= */
function GuideBookVisual({
  page,
  animationCycle,
  reduceMotion,
}) {
  const actions = [
    {
      label: "Track Order",
      icon: ShoppingBag,
    },
    {
      label: "Book Demo",
      icon: CalendarCheck2,
    },
    {
      label: "Get Support",
      icon: Users,
    },
  ];

  return (
    <motion.div
      key={`guide-${animationCycle}`}
      className="relative flex h-[520px] w-full items-center justify-center overflow-hidden rounded-[30px] border border-blue-100 bg-[#F7FAFF] p-4"
    >
      {/* Background glow */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.18, 1],
                opacity: [0.3, 0.65, 0.3],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-64 w-64 rounded-full bg-blue-200/50 blur-[70px]"
      />

      <div className="relative z-10 flex h-full w-full max-w-[460px] flex-col justify-center">
        {/* Customer message */}
        <BookFlowNode
          icon={MessageSquareText}
          label="Customer Message"
          sublabel="I want to track my order"
          color={page.color}
          softColor={page.softColor}
          delay={0}
          compact
        />

        <BookConnector
          color={page.color}
          delay={0.45}
          height={18}
        />

        {/* Intent identified */}
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
          className="mx-auto flex max-w-[215px] items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-[10px] font-black text-white shadow-[0_12px_28px_rgba(37,99,235,0.24)]"
        >
          <motion.span
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: [0, 7, -7, 0],
                  }
            }
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <BrainCircuit size={14} />
          </motion.span>

          AI Identifies Intent
        </motion.div>

        <BookConnector
          color={page.color}
          delay={1.35}
          height={18}
        />

        {/* Decision */}
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
          className="mx-auto flex max-w-[210px] items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-[10px] font-black text-blue-700"
        >
          <GitBranch size={14} />
          Select Next Action
        </motion.div>

        {/* Branching lines */}
        <div className="relative mx-auto h-[52px] w-full max-w-[390px]">
          <svg
            viewBox="0 0 390 52"
            className="absolute inset-0 h-full w-full"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M195 0 V12 C195 22 66 20 66 39 V50"
              stroke={page.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 2.2,
                ease: "easeInOut",
              }}
            />

            <motion.path
              d="M195 0 V50"
              stroke={page.color}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 2.45,
                ease: "easeInOut",
              }}
            />

            <motion.path
              d="M195 0 V12 C195 22 324 20 324 39 V50"
              stroke={page.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 2.7,
                ease: "easeInOut",
              }}
            />

            {[66, 195, 324].map((cx, index) => (
              <motion.circle
                key={cx}
                cx={cx}
                cy="49"
                r="2.8"
                fill={page.color}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 3 + index * 0.15,
                  type: "spring",
                }}
              />
            ))}
          </svg>
        </div>

        {/* Action cards */}
        <div className="grid grid-cols-3 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;

            return (
              <motion.div
                key={action.label}
                initial={{
                  opacity: 0,
                  y: 18,
                  scale: 0.85,
                  filter: "blur(4px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 3.1 + index * 0.2,
                  type: "spring",
                }}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                className="rounded-xl border border-blue-100 bg-white px-2 py-2.5 text-center shadow-[0_8px_22px_rgba(37,99,235,0.08)]"
              >
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, -3, 0],
                        }
                  }
                  transition={{
                    duration: 2.5,
                    delay: index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Icon
                    size={17}
                    className="mx-auto text-blue-600"
                  />
                </motion.div>

                <p className="mt-1 text-[9px] font-black text-blue-800">
                  {action.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Final connector */}
        <BookConnector
          color={page.color}
          delay={3.8}
          height={18}
        />

        {/* Completed */}
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
          <CheckCircle2
            size={14}
            className="text-[#42E982]"
          />

          Guided Flow Completed
        </motion.div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   ASSIST VISUAL
========================================================= */

function AssistBookVisual({ page, animationCycle }) {
  const formRows = [
    {
      label: "Customer Name",
      value: "Aarav Sharma",
      icon: UserRoundCheck,
    },
    {
      label: "Selected Service",
      value: "Product Demonstration",
      icon: FileText,
    },
    {
      label: "Preferred Time",
      value: "4:00 PM",
      icon: CalendarCheck2,
    },
  ];

  return (
    <motion.div
      key={`assist-${animationCycle}`}
      className="relative flex h-[520px] w-full items-center justify-center overflow-hidden rounded-[30px] border border-violet-100 bg-[#FBF9FF] p-6"
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
        className="absolute h-64 w-64 rounded-full bg-violet-200/50 blur-[70px]"
      />

      <div className="relative z-10 flex min-h-[440px] w-full max-w-[460px] flex-col justify-center rounded-[28px] border border-violet-100 bg-white p-6 shadow-[0_25px_65px_rgba(124,58,237,0.13)]">
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-violet-500">
              Appointment Flow
            </p>

            <h4 className="mt-1 text-lg font-black text-[#2E1065]">
              Product Demonstration
            </h4>
          </div>

          <motion.span
            initial={{
              scale: 0,
              rotate: -35,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.25,
              type: "spring",
            }}
            className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600"
          >
            <CalendarCheck2 size={26} />

            <motion.span
              animate={{
                scale: [1, 1.7, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-2xl border border-violet-400"
            />
          </motion.span>
        </motion.div>

        <div className="mt-5 space-y-3">
          {formRows.map((row, index) => {
            const Icon = row.icon;
            const delay = 0.6 + index * 0.75;

            return (
              <motion.div
                key={row.label}
                initial={{
                  opacity: 0,
                  x: -30,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.5,
                  delay,
                }}
                className="flex items-center gap-3 rounded-2xl border border-violet-100 bg-violet-50/55 px-4 py-3"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                  <Icon size={20} />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold text-slate-400">
                    {row.label}
                  </p>

                  <p className="mt-1 text-sm font-black text-slate-700">
                    {row.value}
                  </p>
                </div>

                <motion.span
                  initial={{
                    scale: 0,
                    rotate: -35,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: delay + 0.35,
                    type: "spring",
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-white"
                >
                  <Check size={14} strokeWidth={3} />
                </motion.span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 3,
          }}
          className="mt-5"
        >
          <div className="flex justify-between text-[10px] font-bold">
            <span className="text-slate-400">Information completed</span>

            <span className="text-violet-600">100%</span>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-violet-100">
            <motion.div
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 1.2,
                delay: 3.1,
              }}
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-400"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 4.2,
            type: "spring",
          }}
          className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-4 py-3 text-xs font-black text-white shadow-[0_12px_30px_rgba(124,58,237,0.25)]"
        >
          <CheckCircle2 size={17} />
          Task successfully completed
        </motion.div>
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
      className="relative flex h-[520px] w-full items-center justify-center overflow-hidden rounded-[30px] border border-orange-100 bg-[#FFFCF8] p-6"
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
        className="absolute h-64 w-64 rounded-full bg-orange-200/50 blur-[70px]"
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
          className="mx-auto flex max-w-[240px] items-center justify-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-xs font-black text-white shadow-[0_15px_35px_rgba(249,115,22,0.28)]"
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
          className="mx-auto flex max-w-[230px] items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-xs font-black text-orange-700"
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
                className="rounded-xl border border-orange-100 bg-white px-2 py-2.5 text-center shadow-[0_8px_22px_rgba(249,115,22,0.08)]"
              >
                <Icon size={17} className="mx-auto text-orange-500" />

                <p className="mt-1 text-[9px] font-black text-orange-800">
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

function ChatbotBookSection() {
  const reduceMotion = useReducedMotion();

  const [activePage, setActivePage] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const [isPaused, setIsPaused] = React.useState(false);
  const [animationCycle, setAnimationCycle] = React.useState(0);

  const page = chatbotBookPages[activePage];
  const lastPageIndex = chatbotBookPages.length - 1;

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
    if (isPaused) return undefined;

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
  }, [isPaused]);

  /* Restart inner animations continuously */
 React.useEffect(() => {
  if (isPaused) return undefined;

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
}, [activePage, isPaused, page.type]);
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

        <div className="mx-auto max-w-[900px] text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-black text-emerald-700 shadow-sm"
          >
            <BookOpen size={16} />
            Interactive Chatbot Journey
          </motion.div>

          <motion.h2
            {...businessApiHeadingProps}
            className="mx-auto max-w-none whitespace-nowrap text-center text-[clamp(1.65rem,4.4vw,4.2rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]"
          >
            One Chatbot.{" "}
            <span className="text-[#16A34A]">Unlimited Possibilities.</span>
          </motion.h2>

          <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
            Explore each chatbot capability as an interactive book. Pages turn
            automatically, or use the controls to move through the experience.
          </p>
        </div>

        {/* Book navigation tabs */}

        <div className="mx-auto mt-7 grid max-w-[1040px] grid-cols-2 gap-1.5 rounded-[16px] border border-slate-100 bg-white p-1.5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:grid-cols-4">
          {chatbotBookPages.map((bookPage, index) => {
            const Icon = bookPage.icon;
            const isActive = activePage === index;

            return (
              <motion.button
                key={bookPage.id}
                type="button"
                onClick={() => goToPage(index)}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="relative flex items-center gap-2 overflow-hidden rounded-[12px] px-3 py-2 text-left"
                style={{
                  backgroundColor: isActive
                    ? bookPage.softColor
                    : "transparent",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-book-tab"
                    className="absolute inset-0 rounded-[12px]"
                    style={{
                      border: `1px solid ${bookPage.borderColor}`,
                    }}
                  />
                )}

                <span
                  className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px]"
                  style={{
                    color: bookPage.color,
                    backgroundColor: isActive ? "#ffffff" : bookPage.softColor,
                  }}
                >
                  <Icon size={18} />
                </span>

                <div className="relative min-w-0">
                  <p className="truncate text-xs font-black text-[#13251C]">
                    {bookPage.title}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Main book */}

        <div
          className="relative mt-6"
          style={{
            perspective: "1800px",
          }}
        >
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.article
              key={page.id}
              custom={direction}
              variants={bookPageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.9,
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
              className="relative w-full overflow-hidden rounded-[38px] border bg-white shadow-[0_35px_100px_rgba(15,23,42,0.13)]"
              style={{
                borderColor: page.borderColor,
                transformStyle: "preserve-3d",
                transformOrigin: direction > 0 ? "left center" : "right center",
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

              <div className="pointer-events-none absolute bottom-8 left-1/2 top-8 z-20 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent lg:block" />

              <div className="pointer-events-none absolute bottom-8 left-1/2 top-8 z-10 hidden w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-100/45 to-transparent lg:block" />

              {/* Page content */}

              <div className="grid min-h-[650px] lg:h-[650px] lg:grid-cols-2">
                {/* Left book page */}

                <div className="relative flex flex-col justify-center overflow-hidden px-7 py-10 sm:px-10 lg:px-12 xl:px-16">
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
                          duration: isPaused ? 0 : 5,
                          ease: "linear",
                        }}
                        className="flex h-14 w-14 items-center justify-center rounded-[20px] text-base font-black text-white shadow-lg"
                        style={{
                          backgroundColor: page.color,
                          boxShadow: `0 14px 32px ${page.color}35`,
                        }}
                      >
                        {page.number}
                      </motion.span>

                      <div>
                        <p
                          className="text-xs font-black uppercase tracking-[0.2em]"
                          style={{
                            color: page.color,
                          }}
                        >
                          {page.eyebrow}
                        </p>

                        <p className="mt-1 text-sm font-bold text-slate-400">
                          Chapter {activePage + 1} of {chatbotBookPages.length}
                        </p>
                      </div>
                    </div>

                    <h3 className="mt-7 text-[34px] font-black leading-[1.04] tracking-[-0.045em] text-[#071B2C] sm:text-[42px] xl:text-[49px]">
                      {page.heading}
                    </h3>

                    <p className="mt-5 max-w-[540px] text-sm font-medium leading-7 text-slate-600 sm:text-base">
                      {page.description}
                    </p>

                    <div className="mt-7 space-y-3">
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
                          className="flex items-start gap-3"
                        >
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

                          <p className="text-sm font-bold leading-6 text-slate-600">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Page status */}

                    <div className="mt-9 flex flex-wrap items-center gap-3">
                      <div
                        className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black"
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

                <div className="relative flex min-h-[580px] items-center p-5 sm:p-7 lg:p-8">
                  <ChatbotBookVisual
                    page={page}
                    animationCycle={animationCycle}
                    reduceMotion={reduceMotion}
                  />
                </div>
              </div>

              {/* Page turn highlight */}

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
            className="absolute left-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#071B2C] shadow-[0_14px_35px_rgba(15,23,42,0.15)] backdrop-blur-md sm:-left-5"
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
            className="absolute right-3 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#071B2C] shadow-[0_14px_35px_rgba(15,23,42,0.15)] backdrop-blur-md sm:-right-5"
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
                      width: isPaused ? "0%" : "100%",
                    }}
                    transition={{
                      duration: isPaused ? 0 : 6,
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

          {/* Play / pause */}

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
    eyebrow: "Train Your Chatbot",
    title: "Train Your Chatbot",
    description:
      "Add your FAQs, product details, services and business data. Your chatbot learns your knowledge and understands customer intent.",
    color: "#16A34A",
    softColor: "#ECFDF3",
    icon: BrainCircuit,
  },
  {
    number: "2",
    eyebrow: "Build Journeys Visually",
    title: "Build Journeys Visually",
    description:
      "Design and automate customer conversations using a simple visual flow builder—without writing code.",
    color: "#22C55E",
    softColor: "#F0FDF4",
    icon: Workflow,
  },
  {
    number: "3",
    eyebrow: "Deploy on WhatsApp",
    title: "Deploy on WhatsApp",
    description:
      "Connect the chatbot to your WhatsApp Business API and go live instantly. Your chatbot starts answering, guiding and assisting customers 24/7.",
    color: "#16A34A",
    softColor: "#ECFDF3",
    icon: Smartphone,
  },
];

const whatsappLaunchTrustItems = [
  {
    title: "WhatsApp Business API",
    subtitle: "Official Access",
    icon: ShieldCheck,
  },
  {
    title: "Go Live in Minutes",
    subtitle: "Fast Setup",
    icon: Zap,
  },
  {
    title: "API Automation",
    subtitle: "Many Connectors",
    icon: Workflow,
  },
  {
    title: "Grow Engagement",
    subtitle: "Sales Conversion",
    icon: BarChart3,
  },
  {
    title: "Enterprise Grade",
    subtitle: "Security",
    icon: LockKeyhole,
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
  const Icon = step.icon;
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
      className="group relative flex h-[570px] min-w-0 flex-1 cursor-pointer flex-col overflow-hidden rounded-[30px] border bg-white p-5"
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
          background: `linear-gradient(90deg,${step.color},#86EFAC,${step.color})`,
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
        <div className="flex items-start gap-3">
          <motion.button
            type="button"
            whileTap={{
              scale: 0.9,
            }}
            animate={
              isActive
                ? {
                    scale: [1, 1.1, 1],
                  }
                : undefined
            }
            transition={{
              duration: 2,
              repeat: isActive ? Infinity : 0,
            }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
            style={{
              backgroundColor: step.color,
              boxShadow: `0 9px 25px ${step.color}35`,
            }}
          >
            {step.number}
          </motion.button>

          <div className="min-w-0 flex-1">
            <p className="text-[12px] font-black text-[#071B2C]">
              {step.number}. {step.title}
            </p>

            <p className="mt-2 text-[10px] font-medium leading-[16px] text-slate-500">
              {step.description}
            </p>
          </div>

          <motion.span
            animate={
              isActive
                ? {
                    rotate: [0, 7, -7, 0],
                    scale: [1, 1.08, 1],
                  }
                : undefined
            }
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              color: step.color,
              backgroundColor: step.softColor,
            }}
          >
            <Icon size={19} />
          </motion.span>
        </div>
      </div>

      {/* Visual */}

      <div className="relative mt-5 min-h-0 flex-1">
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
    "Buttons",
    "Condition",
    "API",
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

      {/* Builder status */}

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
          delay: 3.2,
        }}
        className="flex h-8 shrink-0 items-center justify-center gap-1.5 border-t border-emerald-50 bg-[#F8FFF9] text-[7px] font-black text-emerald-700"
      >
        <CheckCircle2 size={11} />
        No code. Just drag, drop and publish.
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   STEP 3 — WHATSAPP DEPLOY VISUAL
========================================================= */

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
        className="absolute h-[275px] w-[275px] rounded-full border border-emerald-200 bg-white/45"
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
        className="absolute h-[315px] w-[315px] rounded-full border border-dashed border-emerald-300"
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
        className="absolute right-4 top-[31%] flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-white bg-[#25D366] text-white shadow-[0_15px_35px_rgba(37,211,102,0.35)]"
      >
        <MessageCircle size={24} fill="currentColor" />
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
        className="absolute left-5 top-[23%] flex h-8 w-8 items-center justify-center rounded-full border border-emerald-100 bg-white text-emerald-500 shadow-lg"
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
        className="absolute right-4 top-5 z-20 flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-[7px] font-black text-white shadow-lg"
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

        LIVE
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
        className="relative z-10 h-[365px] w-[205px] rounded-[34px] border-[7px] border-[#071B2C] bg-white p-2 shadow-[0_30px_65px_rgba(7,27,44,0.25)]"
      >
        {/* Speaker */}

        <div className="absolute left-1/2 top-1.5 z-20 h-4 w-[65px] -translate-x-1/2 rounded-full bg-[#071B2C]" />

        <div className="flex h-full flex-col overflow-hidden rounded-[23px] bg-[#E9F7ED]">
          {/* WhatsApp header */}

          <div className="flex h-12 shrink-0 items-center gap-2 bg-[#075E54] px-3 pt-2 text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <Bot size={14} />
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

          <div className="relative min-h-0 flex-1 space-y-2 overflow-hidden p-3">
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
              className="ml-auto max-w-[125px] rounded-xl rounded-br-sm bg-[#DCF8C6] px-2.5 py-2 text-[7px] font-bold leading-[11px] text-[#173527] shadow-sm"
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
              className="max-w-[135px] rounded-xl rounded-bl-sm bg-white px-2.5 py-2 text-[7px] font-bold leading-[11px] text-[#173527] shadow-sm"
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
                className="mx-auto flex max-w-[132px] items-center justify-center gap-1.5 rounded-lg border border-emerald-200 bg-white px-2 py-1.5 text-[6.5px] font-black text-emerald-700"
              >
                <CheckCircle2 size={9} />
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

              Chatbot is ready to assist 24/7
            </motion.div>
          </div>

          {/* Input */}

          <div className="flex h-10 shrink-0 items-center gap-1.5 bg-white px-2">
            <div className="flex-1 rounded-full bg-slate-100 px-3 py-1.5 text-[6px] text-slate-400">
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
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white"
            >
              <Send size={11} />
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
        className="absolute bottom-6 right-3 rounded-xl border border-emerald-100 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md"
      >
        <p className="text-[6px] font-bold text-slate-400">
          Powered by
        </p>

        <p className="mt-0.5 text-[7px] font-black text-emerald-700">
          Meta WhatsApp Cloud API
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

  const [activeStep, setActiveStep] = React.useState(0);
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
    <section className="relative isolate min-h-screen overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20 xl:px-16">
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

      <div className="mx-auto max-w-[1480px]">
        {/* Heading */}

        <div className="mx-auto max-w-[880px] text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-[11px] font-black text-emerald-700 shadow-sm"
          >
            <Sparkles size={14} />
            No-Code WhatsApp Chatbot Deployment
          </motion.div>

          <motion.h2
            {...businessApiHeadingProps}
            className="mx-auto max-w-none whitespace-nowrap text-center text-[clamp(1.65rem,4.4vw,4.2rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]"
          >
            Launch your WhatsApp chatbot{" "}
            <span className="text-[#16A34A]">in three simple steps.</span>
          </motion.h2>

          <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
            From setup to automation—everything happens inside one
            intelligent platform.
          </p>
        </div>

        {/* Manual step controls */}

        <div className="mx-auto mt-7 flex max-w-[610px] items-center justify-center gap-2 rounded-full border border-emerald-100 bg-white p-1.5 shadow-[0_12px_35px_rgba(22,163,74,0.08)]">
          {whatsappLaunchSteps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => activateStep(index)}
                className="relative flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-[9px] font-black transition-colors"
                style={{
                  color: isActive
                    ? step.color
                    : "#64748B",
                  backgroundColor: isActive
                    ? step.softColor
                    : "transparent",
                }}
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full text-[8px] text-white"
                  style={{
                    backgroundColor: isActive
                      ? step.color
                      : "#CBD5E1",
                  }}
                >
                  {step.number}
                </span>

                <span className="hidden sm:block">
                  {step.eyebrow}
                </span>
              </button>
            );
          })}
        </div>

        {/* Three cards */}

        <div className="mt-10 flex flex-col items-stretch lg:flex-row lg:items-center lg:gap-0">
          <WhatsAppLaunchCard
            step={whatsappLaunchSteps[0]}
            index={0}
            activeStep={activeStep}
            onActivate={activateStep}
          >
            <TrainChatbotVisual
              active={activeStep === 0}
              animationCycle={animationCycle}
              reduceMotion={reduceMotion}
            />
          </WhatsAppLaunchCard>

          <WhatsAppLaunchArrow
            color="#16A34A"
            active={activeStep === 0}
          />

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

          <WhatsAppLaunchArrow
            color="#22C55E"
            active={activeStep === 1}
          />

          <WhatsAppLaunchCard
            step={whatsappLaunchSteps[2]}
            index={2}
            activeStep={activeStep}
            onActivate={activateStep}
          >
            <WhatsAppDeployVisual
              active={activeStep === 2}
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

        {/* Trust strip */}

        <motion.div
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
          }}
          className="mt-9 grid grid-cols-2 gap-3 rounded-[26px] border border-emerald-100 bg-white px-4 py-4 shadow-[0_16px_45px_rgba(22,163,74,0.07)] sm:grid-cols-3 lg:grid-cols-5"
        >
          {whatsappLaunchTrustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                className="flex items-center justify-center gap-2.5 rounded-xl px-2 py-2"
              >
                <motion.span
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.08, 1],
                        }
                  }
                  transition={{
                    duration: 2.5,
                    delay: index * 0.25,
                    repeat: Infinity,
                  }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
                >
                  <Icon size={15} />
                </motion.span>

                <div>
                  <p className="text-[8px] font-black text-[#14532D]">
                    {item.title}
                  </p>

                  <p className="mt-0.5 text-[6.5px] font-medium text-slate-400">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
export default function WhatsAppChatbot() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <section className="relative isolate flex min-h-[720px] items-center overflow-hidden px-5 py-20 sm:px-8 lg:min-h-screen lg:px-12 xl:px-20">
        {/* Main background gradient */}
        <div className="absolute inset-0 -z-30 bg-[linear-gradient(110deg,#ffffff_0%,#ffffff_42%,#f4fff8_73%,#eafff1_100%)]" />

        {/* Grid background */}
        <div
          className="absolute inset-0 -z-20 opacity-[0.32]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,197,94,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage:
              "linear-gradient(to right, transparent, black 45%, black)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 45%, black)",
          }}
        />

        {/* Decorative glow */}
        <motion.div
          className="absolute -right-32 top-1/2 -z-10 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-emerald-200/40 blur-[110px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.12, 1],
                  opacity: [0.35, 0.58, 0.35],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[7%] top-[8%] -z-10 h-40 w-40 rounded-full bg-green-300/30 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 30, 0],
                  y: [0, -25, 0],
                }
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-16 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: 0.12,
            }}
            className="relative z-20 mx-0 max-w-[720px] text-left"
          >
            {/* Top pill */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 shadow-sm sm:text-sm"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessagesSquare size={13} />
              </span>
              WhatsApp Chatbot Automation Platform
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="max-w-[720px] text-left text-[clamp(1.18rem,5.9vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#292929]"
            >
              <span className="block whitespace-nowrap leading-[1.03]">
                Scale customer conversations
              </span>
              <span className="block whitespace-nowrap leading-[1.03]">
                with&nbsp;<AnimatedTypingText text="WhatsApp chatbot" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-7 max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]"
            >
              Automate replies, qualify leads, route support and keep every
              customer conversation moving inside WhatsApp.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 flex items-center gap-3 max-sm:flex-col"
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

            {/* Bottom feature chips */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-wrap justify-start gap-3"
            >
              {bottomFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 320,
                      damping: 20,
                    }}
                    className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white/90 px-4 py-2.5 text-xs font-bold text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.07)] backdrop-blur-md sm:text-sm"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[#19B75A]">
                      <Icon size={14} />
                    </span>

                    {feature.title}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right chatbot visual */}
          <div className="relative mx-auto flex min-h-[560px] w-full max-w-[720px] items-center justify-center lg:min-h-[650px] lg:translate-x-10 xl:translate-x-16">
            {/* Animated orbit rings */}
            <motion.div
              className="absolute h-[440px] w-[440px] rounded-full border border-dashed border-emerald-300/60 sm:h-[520px] sm:w-[520px]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute h-[350px] w-[350px] rounded-full border border-emerald-200/70 sm:h-[415px] sm:w-[415px]"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="absolute left-8 top-7 h-3 w-3 rounded-full bg-[#25D366] shadow-[0_0_20px_5px_rgba(37,211,102,0.45)]" />

              <span className="absolute bottom-14 right-3 h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </motion.div>

            {/* Connecting SVG lines */}
            <svg
              viewBox="0 0 700 650"
              className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
              fill="none"
              aria-hidden="true"
            >
              {[
                "M125 120 C220 115, 225 250, 300 270",
                "M575 115 C480 110, 480 240, 405 270",
                "M85 320 C180 320, 220 325, 285 325",
                "M615 315 C520 315, 470 325, 415 325",
                "M130 530 C220 500, 235 420, 305 390",
                "M580 525 C490 495, 470 420, 405 390",
              ].map((path, index) => (
                <motion.path
                  key={path}
                  d={path}
                  stroke="rgba(34,197,94,0.35)"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                    strokeDashoffset: [0, -30],
                  }}
                  transition={{
                    pathLength: {
                      delay: 0.7 + index * 0.12,
                      duration: 1,
                    },
                    opacity: {
                      delay: 0.7 + index * 0.12,
                      duration: 0.6,
                    },
                    strokeDashoffset: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                />
              ))}
            </svg>

            {/* Central visual group */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.78,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                type: "spring",
                stiffness: 100,
                damping: 17,
              }}
              className="relative z-10"
            >
              {/* Main glow */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#58E88A]/35 blur-[55px] sm:h-[400px] sm:w-[400px]"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [0.95, 1.12, 0.95],
                        opacity: [0.35, 0.65, 0.35],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating chatbot body */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -13, 0],
                        rotate: [0, 0.7, 0, -0.7, 0],
                      }
                }
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative"
              >
                {/* Head */}
                <div className="relative mx-auto h-[190px] w-[230px] rounded-[46%_46%_42%_42%/52%_52%_40%_40%] border-[9px] border-white bg-gradient-to-b from-white to-emerald-50 shadow-[0_30px_70px_rgba(15,118,63,0.24)] sm:h-[225px] sm:w-[275px]">
                  {/* Ears */}
                  <div className="absolute -left-7 top-[72px] h-14 w-10 rounded-l-full border-4 border-white bg-emerald-100 shadow-md" />

                  <div className="absolute -right-7 top-[72px] h-14 w-10 rounded-r-full border-4 border-white bg-emerald-100 shadow-md" />

                  {/* Unsplash image screen */}
                  <div className="absolute inset-x-6 top-7 h-[118px] overflow-hidden rounded-[38px] border border-emerald-400/30 bg-[#04130C] shadow-inner sm:inset-x-7 sm:h-[142px]">
                    <img
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=85"
                      alt="AI-powered WhatsApp chatbot assistant"
                      className="h-full w-full object-cover opacity-60 mix-blend-screen"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-[#02150D]/40 to-[#02150D]/90" />

                    {/* Animated face */}
                    <div className="absolute inset-0 flex items-center justify-center gap-12">
                      <motion.span
                        className="h-3.5 w-8 rounded-full bg-[#40FA85] shadow-[0_0_18px_5px_rgba(64,250,133,0.55)]"
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                scaleY: [1, 0.15, 1],
                              }
                        }
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          times: [0, 0.04, 0.08],
                          repeatDelay: 1.7,
                        }}
                      />

                      <motion.span
                        className="h-3.5 w-8 rounded-full bg-[#40FA85] shadow-[0_0_18px_5px_rgba(64,250,133,0.55)]"
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                scaleY: [1, 0.15, 1],
                              }
                        }
                        transition={{
                          duration: 4,
                          delay: 0.05,
                          repeat: Infinity,
                          times: [0, 0.04, 0.08],
                          repeatDelay: 1.7,
                        }}
                      />
                    </div>

                    <motion.div
                      className="absolute bottom-5 left-1/2 h-2 w-10 -translate-x-1/2 rounded-full border-b-2 border-[#40FA85]"
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              width: [40, 52, 40],
                            }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Head light */}
                  <motion.div
                    className="absolute left-1/2 top-2 h-2.5 w-10 -translate-x-1/2 rounded-full bg-[#25D366]"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: [0.45, 1, 0.45],
                          }
                    }
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Neck */}
                <div className="mx-auto -mt-3 h-14 w-20 rounded-b-3xl bg-gradient-to-b from-white to-emerald-100 shadow-md" />

                {/* Body */}
                <div className="relative mx-auto -mt-2 h-[150px] w-[185px] rounded-[48%_48%_35%_35%/35%_35%_55%_55%] border-[8px] border-white bg-gradient-to-b from-white to-emerald-100 shadow-[0_30px_55px_rgba(25,183,90,0.25)] sm:h-[175px] sm:w-[215px]">
                  {/* Arms */}
                  <motion.div
                    className="absolute -left-20 top-8 h-20 w-24 origin-right rounded-full border-[8px] border-white bg-emerald-50 shadow-md"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: [-10, -20, -10],
                          }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute -right-20 top-8 h-20 w-24 origin-left rounded-full border-[8px] border-white bg-emerald-50 shadow-md"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: [10, 20, 10],
                          }
                    }
                    transition={{
                      duration: 3,
                      delay: 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* WhatsApp badge */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 8,
                    }}
                    className="absolute left-1/2 top-10 flex h-[72px] w-[72px] -translate-x-1/2 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.38)]"
                  >
                    <MessageCircle
                      size={38}
                      fill="currentColor"
                      strokeWidth={1.8}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Platform base */}
              <div className="relative mx-auto mt-2 h-[75px] w-[330px] sm:w-[400px]">
                <motion.div
                  className="absolute inset-x-3 top-0 h-12 rounded-[50%] border border-emerald-300 bg-emerald-100/70 shadow-[0_10px_40px_rgba(34,197,94,0.25)] backdrop-blur-lg"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scaleX: [1, 1.06, 1],
                          opacity: [0.72, 1, 0.72],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="absolute inset-x-12 top-3 h-8 rounded-[50%] border border-emerald-400/70 bg-white/60" />

                <motion.div
                  className="absolute inset-x-24 top-4 h-6 rounded-[50%] bg-emerald-400/45 blur-md"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: [0.35, 0.9, 0.35],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>

            {/* Floating feature cards */}
            {floatingFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: reduceMotion ? 0 : [0, -8, 0],
                  }}
                  transition={{
                    opacity: {
                      delay: 0.8 + index * 0.12,
                      duration: 0.5,
                    },
                    scale: {
                      delay: 0.8 + index * 0.12,
                      duration: 0.5,
                    },
                    y: {
                      delay: feature.delay,
                      duration: 3.4 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.06,
                    y: -8,
                  }}
                  className={`absolute z-30 ${feature.position}`}
                >
                  <div className="flex min-w-[150px] items-center gap-3 rounded-2xl border border-emerald-100/90 bg-white/90 px-4 py-3 shadow-[0_15px_40px_rgba(15,118,63,0.12)] backdrop-blur-xl sm:min-w-[170px]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-[#16B95F]">
                      <Icon size={20} strokeWidth={2.2} />
                    </span>

                    <span className="text-xs font-extrabold leading-tight text-[#173527] sm:text-sm">
                      {feature.title}
                    </span>

                    <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {/* Small status card */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.5,
                duration: 0.7,
              }}
              whileHover={{
                scale: 1.04,
                rotate: -1,
              }}
              className="absolute bottom-[20%] right-[7%] z-30 hidden rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-[0_18px_45px_rgba(15,118,63,0.13)] backdrop-blur-xl xl:block"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-[#19B75A]">
                  <Bot size={22} />

                  <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#25D366]" />
                </span>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Chatbot status
                  </p>

                  <p className="text-sm font-extrabold text-[#173527]">
                    Active and responding
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Security icon */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -6, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[18%] top-[3%] hidden h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-white text-[#19B75A] shadow-lg sm:flex"
            >
              <ShieldCheck size={23} />
            </motion.div>
          </div>
        </div>
      </section>

      <ComparisonSection />
      <ChatbotBookSection />
      <WhatsAppLaunchStepsSection />
    </main>
  );
}
