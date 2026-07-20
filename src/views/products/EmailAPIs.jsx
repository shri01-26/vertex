"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Gauge,
  Inbox,
  Mail,
  MailCheck,
  MailWarning,
  MessageSquareText,
  MousePointerClick,
  Pause,
  Play,
  Send,
  SendHorizontal,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const EMAIL_HERO_IMAGE =
  "/assets/images/email-api-hero-visual.png";

const TRUSTED_PERFORMANCE_CTA_IMAGE =
  "/assets/images/email-performance-cta-visual.png";

/*
  Canva export size for the final right-side hero illustration:
  1600 × 1200 px
  Export as transparent PNG with 6–8% safe padding.
*/

const trustItems = [
  {
    icon: ShieldCheck,
    label: "High Deliverability",
  },
  {
    icon: BarChart3,
    label: "Real-time Analytics",
  },
  {
    icon: Code2,
    label: "API First Platform",
  },
];

const floatingParticles = [
  { left: "8%", top: "16%", size: 7, duration: 5.8, delay: 0.2 },
  { left: "18%", top: "78%", size: 5, duration: 6.6, delay: 0.8 },
  { left: "39%", top: "9%", size: 6, duration: 6.1, delay: 0.4 },
  { left: "62%", top: "82%", size: 7, duration: 7.2, delay: 1.1 },
  { left: "82%", top: "18%", size: 5, duration: 6.4, delay: 0.7 },
  { left: "93%", top: "68%", size: 6, duration: 7.4, delay: 1.4 },
];

export default function EmailAPIs() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white">
        <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#FFFFFF_0%,#F5FAFF_48%,#EAF7FF_100%)] px-5 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-20">
          <EmailBackgroundDecorations />

          <div className="relative z-10 mx-auto grid min-h-[680px] max-w-[1500px] items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
            <EmailHeroContent />
            <EmailHeroVisual />
          </div>
        </section>

        <EmailOpsChallengesSection />
        <EmailSmarterBuildManageSection />
        <EmailEngineBehindSection />
        <EmailManagePlatformSection />
        <EmailBuiltForResultsSection />
        <EmailTrustedPerformanceSection />
      </main>

      <style jsx global>{`
        .email-roll-button {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
        }

        .email-roll-button .email-roll-main,
        .email-roll-button .email-roll-hover {
          display: flex;
          height: 100%;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .email-roll-button .email-roll-hover {
          position: absolute;
          inset: 0;
          transform: translateY(105%);
        }

        .email-roll-button:hover .email-roll-main {
          transform: translateY(-105%);
        }

        .email-roll-button:hover .email-roll-hover {
          transform: translateY(0);
        }

        @keyframes emailVisualFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-0.4deg);
          }

          50% {
            transform: translateY(-10px) rotate(0.5deg);
          }
        }

        @keyframes emailShadowPulse {
          0%,
          100% {
            transform: translateX(-50%) scaleX(0.86);
            opacity: 0.14;
          }

          50% {
            transform: translateX(-50%) scaleX(1.04);
            opacity: 0.24;
          }
        }
      `}</style>
    </>
  );
}

function EmailHeroContent() {
  return (
    <div className="relative z-20 order-1 max-w-[650px]">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mb-6 inline-flex items-center gap-2 rounded-md bg-[#EAF7FF] px-3 py-2 text-[11px] font-extrabold tracking-[0.04em] text-[#038FDF]"
      >
        <Mail className="h-4 w-4" />
        EMAIL API PLATFORM
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
        className="max-w-[650px] text-[42px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#071B4D] sm:text-[54px] lg:text-[62px]"
      >
        Email, But Not the Way
        <span className="block">You’ve Used It Before</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.24, ease: EASE }}
        className="mt-6 max-w-[560px] text-[16px] font-medium leading-8 text-[#4B5B77]"
      >
        A powerful email API platform designed for high deliverability,
        automation, and scalable business communication.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.38, ease: EASE }}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <button
          type="button"
          className="email-roll-button relative h-[54px] min-w-[150px] bg-[#038FDF] px-6 text-[14px] font-extrabold text-white shadow-[0_16px_34px_rgba(3,143,223,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(3,143,223,0.32)]"
        >
          <span className="email-roll-main">
            Start Building
            <ArrowRight className="h-4 w-4" />
          </span>

          <span className="email-roll-hover">
            Start Building
            <Zap className="h-4 w-4" />
          </span>
        </button>

        <button
          type="button"
          className="email-roll-button relative h-[54px] min-w-[180px] border border-[#CDEEFF] bg-white px-6 text-[14px] font-extrabold text-[#038FDF] shadow-[0_10px_24px_rgba(7,27,77,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#038FDF] hover:shadow-[0_16px_34px_rgba(3,143,223,0.12)]"
        >
          <span className="email-roll-main">
            View Documentation
          </span>

          <span className="email-roll-hover">
            View Documentation
            <Code2 className="h-4 w-4" />
          </span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.54, ease: EASE }}
        className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
      >
        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="contents">
              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center gap-2"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EAF7FF] text-[#038FDF]">
                  <Icon className="h-3.5 w-3.5" />
                </span>

                <span className="text-[12px] font-bold text-[#5A6780]">
                  {item.label}
                </span>
              </motion.div>

              {index < trustItems.length - 1 && (
                <span className="hidden h-5 w-px bg-[#CDEEFF] sm:block" />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

function EmailHeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 42, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.16, ease: EASE }}
      className="relative order-2 flex min-h-[500px] items-center justify-center lg:min-h-[620px]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#CDEEFF]/70" />

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#CDEEFF]/65"
      />

      <div
        className="relative z-20 w-full max-w-[760px]"
        style={{
          animation: "emailVisualFloat 5.8s ease-in-out infinite",
        }}
      >
        <div className="relative overflow-hidden rounded-[28px]">
          <img
            src={EMAIL_HERO_IMAGE}
            alt="Email API platform illustration"
            width={1600}
            height={1200}
            loading="eager"
            className="relative z-10 h-auto w-full object-contain drop-shadow-[0_34px_70px_rgba(7,27,77,0.20)]"
          />

          <motion.span
            animate={{ x: ["-140%", "430%"] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[18%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/55 to-transparent"
          />
        </div>

        <span
          className="absolute -bottom-4 left-1/2 h-8 w-[72%] -translate-x-1/2 rounded-full bg-[#071B4D]/14 blur-xl"
          style={{
            animation: "emailShadowPulse 5.8s ease-in-out infinite",
          }}
        />
      </div>

      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, -3, 3, 0],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[14%] left-[6%] z-30 hidden items-center gap-2 rounded-[16px] border border-[#CDEEFF] bg-white/92 px-4 py-3 shadow-[0_18px_38px_rgba(7,27,77,0.12)] backdrop-blur-md sm:flex"
      >
        <Send className="h-5 w-5 text-[#038FDF]" />

        <div>
          <p className="text-[8px] font-extrabold uppercase tracking-[0.1em] text-[#8A96AA]">
            Delivery
          </p>
          <p className="mt-0.5 text-[11px] font-extrabold text-[#071B4D]">
            API request sent
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 7, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 2.9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[3%] top-[14%] z-30 hidden items-center gap-2 rounded-[16px] border border-[#CDEEFF] bg-white/92 px-4 py-3 shadow-[0_18px_38px_rgba(7,27,77,0.12)] backdrop-blur-md sm:flex"
      >
        <CheckCircle2 className="h-5 w-5 text-[#16A34A]" />

        <div>
          <p className="text-[8px] font-extrabold uppercase tracking-[0.1em] text-[#8A96AA]">
            Status
          </p>
          <p className="mt-0.5 text-[11px] font-extrabold text-[#071B4D]">
            Delivered successfully
          </p>
        </div>
      </motion.div>

      <div className="absolute bottom-[5%] right-[5%] z-30 rounded-full border border-white bg-white/90 px-3 py-2 text-[9px] font-extrabold text-[#038FDF] shadow-[0_12px_28px_rgba(7,27,77,0.10)] backdrop-blur-md">
        Canva visual: 1600 × 1200 px
      </div>
    </motion.div>
  );
}

function EmailOpsChallengesSection() {
  const challenges = [
    {
      number: "01",
      title: "Sending Emails",
      icon: SendHorizontal,
      before:
        "Before: Manually sending emails takes time, creates delays, and slows execution.",
      after:
        "After: Trigger-based API + automation speeds up sending and reduces effort.",
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.14)",
    },
    {
      number: "02",
      title: "Handling Volume",
      icon: Inbox,
      before:
        "Before: At scale, large email volumes become difficult to manage manually.",
      after:
        "After: Smart queues and email infrastructure handle scale efficiently.",
      accent: "#0F766E",
      soft: "rgba(15,118,110,0.14)",
    },
    {
      number: "03",
      title: "Delivery & Reliability",
      icon: ShieldCheck,
      before:
        "Before: Spam issues, bounces, and unreliable delivery hurt performance.",
      after:
        "After: Optimized systems improve inbox placement and message reliability.",
      accent: "#7C3AED",
      soft: "rgba(124,58,237,0.14)",
    },
    {
      number: "04",
      title: "Gathering Responses",
      icon: MessageSquareText,
      before:
        "Before: Manual follow-ups and scattered inboxes create confusion.",
      after:
        "After: Structured response collection centralizes engagement clearly.",
      accent: "#EA580C",
      soft: "rgba(234,88,12,0.14)",
    },
    {
      number: "05",
      title: "Clicks & Tracking",
      icon: MousePointerClick,
      before:
        "Before: Limited visibility and weak tracking reduce campaign control.",
      after:
        "After: Real-time analytics and click tracking provide clear insight.",
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.14)",
    },
    {
      number: "06",
      title: "Workflows",
      icon: Workflow,
      before:
        "Before: Manual dependencies create process gaps and inconsistent follow-up.",
      after:
        "After: Automated workflows improve efficiency and reduce repetitive tasks.",
      accent: "#16A34A",
      soft: "rgba(22,163,74,0.14)",
    },
  ];

  const [activeChallenge, setActiveChallenge] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveChallenge((current) => (current + 1) % challenges.length);
    }, 2100);

    return () => window.clearInterval(timer);
  }, [challenges.length]);

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_42%,#F5FAFF_100%)] px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:pt-20 xl:px-20">
      <div className="pointer-events-none absolute -left-44 top-24 h-[420px] w-[420px] rounded-full bg-[#EAF7FF] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[460px] w-[460px] rounded-full bg-[#EAF7FF] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.68, ease: EASE }}
          className="mx-auto max-w-[900px] text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF7FF] px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#038FDF]">
            <MailWarning className="h-4 w-4" />
            EMAIL OPERATIONS COMPLEXITY
          </div>

          <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#071B4D] sm:text-[38px] lg:text-[46px]">
            The Hidden Challenges of Business Email Operations
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-[14px] font-medium leading-7 text-[#5B6982] sm:text-[15px]">
            From sending issues to tracking delays, email complexity builds up
            quickly when teams rely on manual processes and disconnected tools.
          </p>
        </motion.div>

        <div className="relative mt-12 overflow-hidden rounded-[34px] border border-[#CDEEFF] bg-white/80 p-4 shadow-[0_32px_80px_rgba(7,27,77,0.10)] backdrop-blur-xl sm:p-6 lg:p-7">
          <motion.div
            animate={{ x: ["-170%", "520%"] }}
            transition={{
              duration: 6.8,
              repeat: Infinity,
              repeatDelay: 0.7,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[10%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/75 to-transparent"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_340px_1fr] lg:gap-6">
            <div className="space-y-4">
              {challenges.slice(0, 3).map((item, index) => (
                <ChallengeRibbon
                  key={item.number}
                  item={item}
                  index={index}
                  side="left"
                  isActive={activeChallenge === index}
                  onActivate={() => setActiveChallenge(index)}
                />
              ))}
            </div>

            <EmailOpsSystemCore
              active={challenges[activeChallenge]}
              activeIndex={activeChallenge}
            />

            <div className="space-y-4">
              {challenges.slice(3).map((item, localIndex) => {
                const index = localIndex + 3;

                return (
                  <ChallengeRibbon
                    key={item.number}
                    item={item}
                    index={index}
                    side="right"
                    isActive={activeChallenge === index}
                    onActivate={() => setActiveChallenge(index)}
                  />
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, delay: 0.25, ease: EASE }}
            className="relative z-10 mt-8 overflow-hidden rounded-[22px] border border-[#CDEEFF] bg-[linear-gradient(135deg,#F5FAFF_0%,#EAF7FF_48%,#FFFFFF_100%)] px-5 py-5 shadow-[0_14px_36px_rgba(3,143,223,0.08)]"
          >
            <motion.span
              animate={{ x: ["-160%", "420%"] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                repeatDelay: 0.6,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-[16%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/90 to-transparent"
            />

            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center">
              <p className="text-[19px] font-extrabold tracking-[-0.03em] text-[#038FDF] sm:text-[22px]">
                Email stops being a task — and starts becoming a system.
              </p>
              <p className="text-[12px] font-medium text-[#627089] sm:text-[13px]">
                That is where modern email infrastructure creates operational clarity.
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                {[
                  "Faster execution",
                  "More reliable delivery",
                  "Better visibility",
                  "Smarter automation",
                ].map((label, index) => (
                  <motion.span
                    key={label}
                    animate={{
                      y: [0, -3, 0],
                      opacity: [0.72, 1, 0.72],
                    }}
                    transition={{
                      duration: 1.8,
                      delay: index * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-full border border-[#CDEEFF] bg-white px-2.5 py-1 text-[8.5px] font-extrabold text-[#4D5D79] shadow-sm"
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ChallengeRibbon({
  item,
  index,
  side = "left",
  isActive = false,
  onActivate,
}) {
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      initial={{ opacity: 0, x: side === "left" ? -28 : 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      animate={{
        x: isActive ? (side === "left" ? 10 : -10) : 0,
        scale: isActive ? 1.018 : 1,
      }}
      transition={{
        opacity: { duration: 0.5, delay: 0.12 + index * 0.08, ease: EASE },
        x: { duration: 0.42, ease: EASE },
        scale: { duration: 0.42, ease: EASE },
        filter: { duration: 0.5, ease: EASE },
      }}
      className={`group relative w-full overflow-hidden border text-left shadow-[0_12px_28px_rgba(7,27,77,0.06)] transition-colors duration-300 ${
        side === "left"
          ? "rounded-[26px_12px_12px_26px]"
          : "rounded-[12px_26px_26px_12px]"
      } ${
        isActive
          ? "border-transparent bg-white"
          : "border-[#E0EAFB] bg-white/88"
      }`}
      style={{
        clipPath:
          side === "left"
            ? "polygon(0 0,100% 0,96% 50%,100% 100%,0 100%,3.5% 50%)"
            : "polygon(0 0,100% 0,100% 100%,0 100%,4% 50%)",
      }}
    >
      {isActive && (
        <>
          <motion.span
            animate={{
              opacity: [0.22, 0.72, 0.22],
              scale: [0.98, 1.04, 0.98],
            }}
            transition={{
              duration: 1.55,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-0 blur-xl"
            style={{ backgroundColor: item.soft }}
          />

          <motion.span
            animate={{ x: ["-150%", "430%"] }}
            transition={{
              duration: 1.55,
              repeat: Infinity,
              repeatDelay: 0.25,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-[18%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/90 to-transparent"
          />
        </>
      )}

      <div className="relative z-10 flex items-start gap-3 px-5 py-4 sm:px-6">
        <motion.span
          animate={
            isActive
              ? {
                  y: [0, -4, 0],
                  rotate: [0, -7, 7, 0],
                  scale: [1, 1.12, 1],
                }
              : {
                  y: [0, -2, 0],
                }
          }
          transition={{
            duration: isActive ? 1.35 : 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] shadow-sm"
          style={{
            backgroundColor: isActive ? item.accent : item.soft,
            color: isActive ? "#FFFFFF" : item.accent,
          }}
        >
          <Icon className="h-5 w-5" />
        </motion.span>

        <span
          className="mt-1 flex h-7 min-w-9 shrink-0 items-center justify-center rounded-[10px] px-2 text-[12px] font-black leading-none shadow-sm"
          style={{
            backgroundColor: isActive ? "#FFFFFF" : item.accent,
            color: isActive ? item.accent : "#FFFFFF",
          }}
        >
          {item.number}
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-[14px] font-extrabold leading-[1.25] text-[#112048]">
            {item.title}
          </h3>

          <div className="mt-2 space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-[10px] font-black text-[#E11D48]">
                ✕
              </span>
              <p className="text-[11px] font-medium leading-[1.55] text-[#7A879D]">
                {item.before}
              </p>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ color: "#16A34A" }}
              />
              <p className="text-[11px] font-medium leading-[1.55] text-[#53627D]">
                {item.after}
              </p>
            </div>
          </div>
        </div>
      </div>

      <motion.span
        initial={false}
        animate={{
          width: isActive ? "100%" : "0%",
          opacity: isActive ? 1 : 0,
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className={`absolute bottom-0 left-0 h-[3px] ${
          side === "left" ? "origin-left" : "origin-right"
        }`}
        style={{
          background: `linear-gradient(90deg, ${item.accent}, #25D366, #44BBFF)`,
        }}
      />
    </motion.button>
  );
}

function EmailOpsSystemCore({ active, activeIndex }) {
  const ActiveIcon = active.icon;

  const miniStates = [
    { label: "Deliverability", value: "99.2%", icon: MailCheck },
    { label: "Response Routing", value: "Active", icon: MessageSquareText },
    { label: "Automation Flow", value: "Live", icon: Workflow },
  ];

  return (
    <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-[32px] border border-[#CDEEFF] bg-[linear-gradient(180deg,#F5FAFF_0%,#EAF7FF_100%)] px-5 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(3,143,223,0.11),transparent_33%),radial-gradient(circle_at_50%_72%,rgba(22,163,74,0.10),transparent_34%)]" />

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#CDEEFF]"
      />

      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute h-[230px] w-[230px] rounded-full border border-[#CDEEFF]"
      />

      <motion.span
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute h-[300px] w-[300px]"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#038FDF] shadow-[0_0_20px_rgba(3,143,223,0.55)]" />
        <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.55)]" />
      </motion.span>

      <div className="relative z-10 flex w-full flex-col items-center">
        <motion.div
          key={active.title}
          initial={{ opacity: 0, y: 14, scale: 0.92, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.52, ease: EASE }}
          className="relative flex h-[164px] w-[164px] items-center justify-center rounded-[36px] border border-white bg-white shadow-[0_24px_55px_rgba(3,143,223,0.14)]"
        >
          <motion.span
            animate={{
              scale: [0.8, 1.7],
              opacity: [0.72, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 rounded-[36px] border"
            style={{ borderColor: active.accent }}
          />

          <div
            className="absolute inset-[14px] rounded-[28px]"
            style={{
              background: `linear-gradient(135deg, ${active.soft}, rgba(255,255,255,0.82))`,
            }}
          />

          <motion.span
            animate={{
              y: [0, -5, 0],
              rotate: [0, -4, 4, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 1.45,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex h-20 w-20 items-center justify-center rounded-[24px] text-white shadow-[0_18px_36px_rgba(7,27,77,0.12)]"
            style={{
              background: `linear-gradient(135deg, ${active.accent}, #1A6EB9)`,
            }}
          >
            <ActiveIcon className="h-9 w-9" />
          </motion.span>

          <motion.span
            animate={{ y: [0, -8, 0], opacity: [0.2, 0.55, 0.2] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-5 top-5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[8px] font-black text-[#038FDF] shadow-sm"
          >
            {active.number}
          </motion.span>
        </motion.div>

        <div className="mt-6 text-center">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#7D8BAB]">
            Active Bottleneck
          </p>
          <h3 className="mt-2 text-[24px] font-extrabold tracking-[-0.03em] text-[#071B4D]">
            {active.title}
          </h3>
          <p className="mx-auto mt-2 max-w-[280px] text-[12px] font-medium leading-6 text-[#66748D]">
            Operations become smoother when email infrastructure replaces
            repetitive manual coordination.
          </p>
        </div>

        <div className="mt-7 grid w-full gap-3">
          {miniStates.map((state, index) => {
            const Icon = state.icon;

            return (
              <motion.div
                key={state.label}
                animate={{
                  y: [0, -3, 0],
                  boxShadow: [
                    "0 8px 18px rgba(7,27,77,0.05)",
                    "0 14px 28px rgba(3,143,223,0.10)",
                    "0 8px 18px rgba(7,27,77,0.05)",
                  ],
                }}
                transition={{
                  duration: 2.1 + index * 0.22,
                  delay: index * 0.12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-between rounded-[16px] border border-white bg-white/92 px-4 py-3 shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#EAF7FF] text-[#038FDF]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[11px] font-extrabold text-[#233251]">
                    {state.label}
                  </span>
                </div>

                <span
                  className="rounded-full px-3 py-1 text-[10px] font-extrabold"
                  style={{
                    color: index === activeIndex % 3 ? "#FFFFFF" : active.accent,
                    backgroundColor:
                      index === activeIndex % 3 ? active.accent : active.soft,
                  }}
                >
                  {state.value}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {["API triggered", "Analytics flowing", "Automation ready"].map(
            (label, index) => (
              <motion.span
                key={label}
                animate={{
                  y: [0, -3, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.8,
                  delay: index * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-full border border-[#CDEEFF] bg-white px-3 py-1.5 text-[10px] font-extrabold text-[#4F5F7C]"
              >
                {label}
              </motion.span>
            )
          )}
        </div>
      </div>
    </div>
  );
}


function EmailSmarterBuildManageSection() {
  const capabilities = [
    {
      number: "01",
      title: "Create Without Complexity",
      description:
        "Design emails with modular blocks and reusable structures, so teams can build faster without repetitive setup or complex production steps.",
      icon: Code2,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.14)",
      beam: "#44BBFF",
    },
    {
      number: "02",
      title: "Automate Everything That Repeats",
      description:
        "Set triggers, schedules, and automated workflows for recurring communication, reducing manual effort while keeping every email journey consistent.",
      icon: Workflow,
      accent: "#16A34A",
      soft: "rgba(22,163,74,0.14)",
      beam: "#86EFAC",
    },
    {
      number: "03",
      title: "Understand Performance Instantly",
      description:
        "Track delivery health, opens, clicks, replies, and campaign trends in one connected view to quickly understand what is working.",
      icon: BarChart3,
      accent: "#7C3AED",
      soft: "rgba(124,58,237,0.14)",
      beam: "#C4B5FD",
    },
    {
      number: "04",
      title: "Turn Emails Into Business Action",
      description:
        "Convert forms, service requests, replies, and customer interactions into operational tasks that move directly into business workflows.",
      icon: MousePointerClick,
      accent: "#EA580C",
      soft: "rgba(234,88,12,0.14)",
      beam: "#FDBA74",
    },
    {
      number: "05",
      title: "Segment and Target Precisely",
      description:
        "Organize audiences with relevant segmentation, journey logic, and communication rules so every message reaches the right group at the right time.",
      icon: Target,
      accent: "#0F766E",
      soft: "rgba(15,118,110,0.14)",
      beam: "#5EEAD4",
    },
    {
      number: "06",
      title: "Manage Conversations Centrally",
      description:
        "Handle incoming emails, replies, customer conversations, and engagement from one connected system instead of switching between scattered inboxes.",
      icon: Inbox,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.14)",
      beam: "#44BBFF",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % capabilities.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [capabilities.length]);

  const active = capabilities[activeStep];
  const ActiveIcon = active.icon;

  const orbitPositions = [
    { left: "2.5%", top: "5%" },
    { left: "0.5%", top: "35%" },
    { left: "3.5%", bottom: "3%" },
    { right: "2.5%", top: "5%" },
    { right: "0.5%", top: "35%" },
    { right: "3.5%", bottom: "3%" },
  ];

  const beamPoints = [
    { x: 225, y: 115, cx: 475, cy: 245 },
    { x: 120, y: 395, cx: 440, cy: 390 },
    { x: 250, y: 700, cx: 485, cy: 555 },
    { x: 1175, y: 115, cx: 925, cy: 245 },
    { x: 1280, y: 395, cx: 960, cy: 390 },
    { x: 1150, y: 700, cx: 915, cy: 555 },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_42%,#F5FAFF_100%)] px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:pt-20 xl:px-20">
      <div className="pointer-events-none absolute -left-48 top-24 h-[420px] w-[420px] rounded-full bg-[#EAF7FF] blur-[120px]" />
      <div className="pointer-events-none absolute -right-44 bottom-10 h-[460px] w-[460px] rounded-full bg-[#EAF7FF] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.68, ease: EASE }}
          className="mx-auto max-w-[960px] text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF7FF] px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#038FDF]">
            <Sparkles className="h-4 w-4" />
            SMART EMAIL SYSTEM
          </div>

          <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#071B4D] sm:text-[38px] lg:text-[46px]">
            A Smarter Way to Build and Manage Emails
          </h2>

          <p className="mx-auto mt-4 max-w-[820px] text-[14px] font-medium leading-7 text-[#5B6982] sm:text-[15px]">
            A system where automation, analytics, and management improve with
            every part of your email flow.
          </p>
        </motion.div>

        <div className="relative mt-12 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.82, delay: 0.1, ease: EASE }}
            className="relative min-h-[760px] overflow-hidden rounded-[38px] border border-[#CDEEFF] bg-[linear-gradient(135deg,rgba(255,255,255,0.94)_0%,rgba(245,250,255,0.97)_52%,rgba(234,247,255,0.97)_100%)] p-8 shadow-[0_34px_90px_rgba(7,27,77,0.10)]"
          >
            <motion.span
              animate={{ x: ["-160%", "500%"] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatDelay: 0.8,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 left-0 z-30 w-[9%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/75 to-transparent"
            />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,143,223,0.11),transparent_22%),radial-gradient(circle_at_50%_50%,rgba(22,163,74,0.07),transparent_39%)]" />

            <svg
              className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              viewBox="0 0 1400 810"
              fill="none"
              preserveAspectRatio="none"
            >
              {beamPoints.map((beam, index) => {
                const isActive = activeStep === index;

                return (
                  <motion.path
                    key={index}
                    d={`M700 410 Q ${beam.cx} ${beam.cy} ${beam.x} ${beam.y}`}
                    stroke={capabilities[index].beam}
                    strokeWidth={isActive ? 3 : 1.7}
                    strokeDasharray="8 10"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: isActive ? 1 : 0.58 }}
                    viewport={{ once: true }}
                    animate={{
                      strokeDashoffset: isActive ? [0, -72] : 0,
                      opacity: isActive ? [0.68, 1, 0.68] : 0.58,
                    }}
                    transition={{
                      pathLength: {
                        duration: 0.8,
                        delay: 0.18 + index * 0.07,
                        ease: EASE,
                      },
                      strokeDashoffset: {
                        duration: 1.4,
                        repeat: isActive ? Infinity : 0,
                        ease: "linear",
                      },
                      opacity: {
                        duration: 1.2,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut",
                      },
                    }}
                  />
                );
              })}
            </svg>

            {/* Center active capability */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute h-[400px] w-[400px] rounded-full border border-dashed border-[#CDEEFF]"
              />

              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="pointer-events-none absolute h-[340px] w-[340px] rounded-full border border-[#CDEEFF]"
              />

              <motion.article
                key={active.title}
                initial={{ opacity: 0, y: 18, scale: 0.92, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.52, ease: EASE }}
                className="relative flex min-h-[330px] w-[350px] flex-col items-center justify-center overflow-hidden rounded-[44px] border border-white bg-white px-8 py-8 text-center shadow-[0_30px_70px_rgba(7,27,77,0.13)]"
              >
                <motion.span
                  animate={{
                    scale: [0.76, 1.7],
                    opacity: [0.72, 0],
                  }}
                  transition={{
                    duration: 1.55,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-[44px] border"
                  style={{ borderColor: active.accent }}
                />

                <motion.span
                  animate={{ x: ["-150%", "430%"] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    repeatDelay: 0.35,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 w-[18%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/95 to-transparent"
                />

                <motion.span
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex h-[78px] w-[78px] items-center justify-center rounded-[25px] text-white shadow-[0_18px_38px_rgba(7,27,77,0.14)]"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}, #1A6EB9)`,
                  }}
                >
                  <ActiveIcon className="h-9 w-9" />
                </motion.span>

                <p className="relative z-10 mt-4 text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#7A88A7]">
                  Capability {active.number} of 06
                </p>

                <h3 className="relative z-10 mt-2 text-[24px] font-extrabold leading-[1.14] tracking-[-0.03em] text-[#071B4D]">
                  {active.title}
                </h3>

                <p className="relative z-10 mt-3 text-[12.5px] font-medium leading-6 text-[#63718B]">
                  {active.description}
                </p>

                <motion.span
                  initial={false}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: "linear" }}
                  className="absolute bottom-0 left-0 h-[4px]"
                  style={{
                    background: `linear-gradient(90deg, ${active.accent}, #25D366, #44BBFF)`,
                  }}
                />
              </motion.article>
            </div>

            {/* Six compact selector cards: icon + heading only */}
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={item.number}
                  className="absolute z-10 w-[220px] xl:w-[228px]"
                  style={orbitPositions[index]}
                >
                  <motion.button
                    type="button"
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      y: 16,
                      filter: "blur(7px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    viewport={{ once: true }}
                    animate={{
                      y: isActive ? -6 : 0,
                      scale: isActive ? 1.025 : 1,
                    }}
                    transition={{
                      opacity: {
                        duration: 0.46,
                        delay: index * 0.07,
                        ease: EASE,
                      },
                      scale: { duration: 0.4, ease: EASE },
                      y: { duration: 0.4, ease: EASE },
                      filter: { duration: 0.46, ease: EASE },
                    }}
                    className={`relative min-h-[104px] w-full overflow-hidden rounded-[18px] border bg-white/96 px-3.5 py-3 text-left shadow-[0_12px_28px_rgba(7,27,77,0.065)] ${
                      isActive ? "border-transparent" : "border-[#CDEEFF]"
                    }`}
                  >
                    {isActive && (
                      <>
                        <motion.span
                          animate={{
                            opacity: [0.18, 0.64, 0.18],
                            scale: [0.98, 1.06, 0.98],
                          }}
                          transition={{
                            duration: 1.45,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="pointer-events-none absolute inset-0 blur-xl"
                          style={{ backgroundColor: item.soft }}
                        />

                        <motion.span
                          animate={{ x: ["-150%", "430%"] }}
                          transition={{
                            duration: 1.45,
                            repeat: Infinity,
                            repeatDelay: 0.22,
                            ease: "easeInOut",
                          }}
                          className="pointer-events-none absolute inset-y-0 left-0 w-[20%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/95 to-transparent"
                        />
                      </>
                    )}

                    <div className="relative z-10 flex min-h-[78px] items-center gap-3">
                      <motion.span
                        animate={
                          isActive
                            ? {
                                y: [0, -4, 0],
                                rotate: [0, -6, 6, 0],
                                scale: [1, 1.12, 1],
                              }
                            : { y: [0, -2, 0] }
                        }
                        transition={{
                          duration: isActive ? 1.3 : 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px]"
                        style={{
                          backgroundColor: isActive ? item.accent : item.soft,
                          color: isActive ? "#FFFFFF" : item.accent,
                        }}
                      >
                        <Icon className="h-[18px] w-[18px]" />

                        <span
                          className="absolute -right-2 -top-4 flex h-8 w-8 items-center justify-center rounded-[10px] border border-white text-[13px] font-black leading-none shadow-sm"
                          style={{
                            backgroundColor: isActive ? "#FFFFFF" : item.accent,
                            color: isActive ? item.accent : "#FFFFFF",
                          }}
                        >
                          {item.number}
                        </span>
                      </motion.span>

                      <div className="min-w-0 flex-1">
                        <h2
                          style={{
                            fontSize: "18px",
                            lineHeight: "1.15",
                            overflowWrap: "anywhere",
                            wordBreak: "break-word",
                          }}
                          className="pr-1 font-extrabold tracking-[-0.014em] !text-[18px] !leading-[1.15] text-[#112048]"
                        >
                          {item.title}
                        </h2>
                      </div>
                    </div>

                    <motion.span
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 1.45,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-0 left-0 h-[3px]"
                      style={{
                        background: `linear-gradient(90deg, ${item.accent}, #25D366, #44BBFF)`,
                      }}
                    />
                  </motion.button>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile and tablet */}
        <div className="mt-12 lg:hidden">
          <motion.article
            key={active.title}
            initial={{ opacity: 0, y: 16, filter: "blur(7px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.48, ease: EASE }}
            className="relative overflow-hidden rounded-[28px] border border-[#CDEEFF] bg-white px-5 py-6 text-center shadow-[0_20px_48px_rgba(7,27,77,0.09)]"
          >
            <motion.span
              animate={{ x: ["-150%", "430%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 0.35,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-[18%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/95 to-transparent"
            />

            <motion.span
              animate={{
                y: [0, -4, 0],
                rotate: [0, -5, 5, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-[21px] text-white"
              style={{
                background: `linear-gradient(135deg, ${active.accent}, #1A6EB9)`,
              }}
            >
              <ActiveIcon className="h-7 w-7" />
            </motion.span>

            <p className="relative z-10 mt-4 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#7A88A7]">
              Capability {active.number} of 06
            </p>

            <h3 className="relative z-10 mt-2 text-[22px] font-extrabold leading-[1.15] text-[#071B4D]">
              {active.title}
            </h3>

            <p className="relative z-10 mt-3 text-[12px] font-medium leading-6 text-[#63718B]">
              {active.description}
            </p>
          </motion.article>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeStep === index;

              return (
                <motion.button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: isActive ? -4 : 0,
                    scale: isActive ? 1.02 : 1,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.44,
                      delay: index * 0.06,
                      ease: EASE,
                    },
                    y: { duration: 0.38, ease: EASE },
                    scale: { duration: 0.38, ease: EASE },
                  }}
                  className="relative min-h-[92px] overflow-hidden rounded-[18px] border border-[#CDEEFF] bg-white px-3.5 py-3 text-left shadow-[0_12px_28px_rgba(7,27,77,0.065)]"
                >
                  {isActive && (
                    <motion.span
                      animate={{ x: ["-150%", "430%"] }}
                      transition={{
                        duration: 1.45,
                        repeat: Infinity,
                        repeatDelay: 0.22,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute inset-y-0 left-0 w-[20%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/95 to-transparent"
                    />
                  )}

                  <div className="relative z-10 flex min-h-[66px] items-center gap-3">
                    <span
                      className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px]"
                      style={{
                        backgroundColor: isActive ? item.accent : item.soft,
                        color: isActive ? "#FFFFFF" : item.accent,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                      <span
                        className="absolute -right-2 -top-4 flex h-8 w-8 items-center justify-center rounded-[10px] border border-white text-[13px] font-black leading-none"
                        style={{
                          backgroundColor: isActive ? "#FFFFFF" : item.accent,
                          color: isActive ? item.accent : "#FFFFFF",
                        }}
                      >
                        {item.number}
                      </span>
                    </span>

                    <h2
                      style={{
                        fontSize: "18px",
                        lineHeight: "1.15",
                        overflowWrap: "anywhere",
                        wordBreak: "break-word",
                      }}
                      className="pr-1 font-extrabold tracking-[-0.014em] !text-[18px] !leading-[1.15] text-[#112048]"
                    >
                      {item.title}
                    </h2>
                  </div>

                </motion.button>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, delay: 0.18, ease: EASE }}
          className="relative mt-4 overflow-hidden rounded-[18px] border border-[#CDEEFF] bg-[linear-gradient(135deg,#F5FAFF_0%,#EAF7FF_52%,#F5FAFF_100%)] px-4 py-3 shadow-[0_10px_26px_rgba(3,143,223,0.065)]"
        >
          <motion.span
            animate={{ x: ["-150%", "420%"] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-[16%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/90 to-transparent"
          />

          <div className="relative z-10 flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
            <div>
              <h6 className="text-[14px] font-extrabold tracking-[-0.02em] text-[#038FDF] sm:text-[16px]">
                Email becomes a system that thinks, acts, and improves on its own.
              </h6>
              <p className="mt-1 text-[9px] font-medium leading-4 text-[#627089] sm:text-[10px]">
                A modern email API platform makes this shift possible.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-end">
              {[
                "Build smarter",
                "Automate faster",
                "Track instantly",
                "Manage centrally",
              ].map((label, index) => (
                <motion.span
                  key={label}
                  animate={{
                    y: [0, -3, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.8,
                    delay: index * 0.14,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="rounded-full border border-[#CDEEFF] bg-white px-3 py-1.5 text-[10px] font-extrabold text-[#4D5D79] shadow-sm"
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EmailEngineBehindSection() {
  /*
    Suggested Canva size for each card-back visual:
    1200 × 1200 px
    Export as PNG/JPG with soft padding.
  */

  const engineItems = [
    {
      number: "01",
      title: "Programmatic Sending",
      description:
        "Trigger emails directly from your app, user action, or workflows.",
      icon: SendHorizontal,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.14)",
      image: "/assets/images/A11 (1).png",
      imageAlt: "Square developer workflow dummy visual",
    },
    {
      number: "02",
      title: "High Deliverability Engine",
      description:
        "Optimize inbox placement with domain reputation, routing, and delivery monitoring.",
      icon: ShieldCheck,
      accent: "#16A34A",
      soft: "rgba(22,163,74,0.14)",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=1200&q=85",
      imageAlt: "Reliable infrastructure and delivery system",
    },
    {
      number: "03",
      title: "Real-Time Tracking",
      description:
        "Track opens, clicks, bounces, and engagement through live event data.",
      icon: BarChart3,
      accent: "#7C3AED",
      soft: "rgba(124,58,237,0.14)",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=1200&q=85",
      imageAlt: "Analytics dashboard and live tracking",
    },
    {
      number: "04",
      title: "Inbound Email Handling",
      description:
        "Receive and process incoming emails for replies, automation, and workflows.",
      icon: Inbox,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.14)",
      image:
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=1200&h=1200&q=85",
      imageAlt: "Email inbox and message flow",
    },
    {
      number: "05",
      title: "Scalable Infrastructure",
      description:
        "Send thousands to millions of emails without performance bottlenecks.",
      icon: Gauge,
      accent: "#EA580C",
      soft: "rgba(234,88,12,0.14)",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=1200&q=85",
      imageAlt: "Scalable cloud and system infrastructure",
    },
    {
      number: "06",
      title: "Workflow Integration",
      description:
        "Connect email with CRM, marketing tools, and internal systems seamlessly.",
      icon: Workflow,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.14)",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=1200&q=85",
      imageAlt: "Connected business workflow and integration",
    },
    {
      number: "07",
      title: "Security & Compliance",
      description:
        "Ensure secure communication with authentication, encryption, and compliance-ready systems.",
      icon: MailCheck,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.14)",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=1200&q=85",
      imageAlt: "Security and compliance concept",
    },
  ];

  const topRow = engineItems.slice(0, 4);
  const bottomRow = engineItems.slice(4);

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_50%,#F5FAFF_100%)] px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:pt-20 xl:px-20">
      <div className="pointer-events-none absolute -left-44 top-20 h-[430px] w-[430px] rounded-full bg-[#EAF7FF] blur-[125px]" />
      <div className="pointer-events-none absolute -right-44 bottom-6 h-[430px] w-[430px] rounded-full bg-[#EAF7FF] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1550px]">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.68, ease: EASE }}
          className="mx-auto max-w-[980px] text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF7FF] px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#038FDF]">
            <Mail className="h-4 w-4" />
            EMAIL SYSTEM INFRASTRUCTURE
          </div>

          <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#071B4D] sm:text-[38px] lg:text-[46px]">
            The Engine Behind Modern Email Systems
          </h2>

          <p className="mx-auto mt-4 max-w-[860px] text-[14px] font-medium leading-7 text-[#5B6982] sm:text-[15px]">
            Core capabilities that power modern email delivery, response
            handling, performance visibility, and secure communication.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#CDEEFF] bg-white px-4 py-2 text-[10px] font-extrabold text-[#5A6A84] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#038FDF]" />
            Display container: 320 × 320 px • Canva visual: 1200 × 1200 px
          </div>
        </motion.div>

        <div className="mt-10 space-y-5">
          <div className="mx-auto grid max-w-[1400px] justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {topRow.map((item, index) => (
              <EmailEngineCard key={item.number} item={item} index={index} />
            ))}
          </div>

          <div className="mx-auto grid max-w-[1040px] justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {bottomRow.map((item, index) => (
              <EmailEngineCard
                key={item.number}
                item={item}
                index={index + topRow.length}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, delay: 0.18, ease: EASE }}
          className="relative mt-4 overflow-hidden rounded-[17px] border border-[#CDEEFF] bg-[linear-gradient(135deg,#EAF7FF_0%,#EAF7FF_48%,#F5FAFF_100%)] px-4 py-3 shadow-[0_10px_26px_rgba(3,143,223,0.065)]"
        >
          <motion.span
            animate={{ x: ["-150%", "420%"] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-[16%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/90 to-transparent"
          />

          <div className="relative z-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <h6 className="text-[13px] font-extrabold tracking-[-0.02em] text-[#038FDF] sm:text-[15px]">
              Email becomes an integrated layer inside your business systems — not a separate tool.
            </h6>

            <div className="flex items-center gap-1.5 rounded-full border border-[#CDEEFF] bg-white px-2.5 py-1.5 shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF7FF] text-[#038FDF]">
                <ShieldCheck className="h-3.5 w-3.5" />
              </span>
              <span className="text-[8.5px] font-extrabold text-[#51627D]">
                Connected • Secure • Scalable
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EmailEngineCard({ item, index }) {
  const Icon = item.icon;
  const isLongContent = ["01", "02", "07"].includes(item.number);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.56,
        delay: index * 0.07,
        ease: EASE,
      }}
      whileHover={{ y: -7 }}
      className="group relative w-full min-w-0 max-w-[320px] [perspective:1800px]"
    >
      <motion.div
        animate={{ rotateY: [0, 0, 180, 180, 360] }}
        transition={{
          duration: 7.4,
          delay: index * 0.3,
          repeat: Infinity,
          repeatDelay: 0.45,
          ease: "easeInOut",
          times: [0, 0.24, 0.5, 0.76, 1],
        }}
        whileHover={{ rotateY: 180, scale: 1.012 }}
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
        }}
        className="relative aspect-square w-full min-w-0 xl:h-[320px] xl:w-[320px]"
      >
        {/* Front: content */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(1px)",
          }}
          className="absolute inset-0 isolate overflow-hidden rounded-[24px] border border-[#CDEEFF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_100%)] p-4 shadow-[0_18px_42px_rgba(7,27,77,0.07)] sm:p-[18px] lg:p-5"
        >
          <motion.span
            animate={{
              opacity: [0.1, 0.28, 0.1],
              scale: [0.98, 1.025, 0.98],
            }}
            transition={{
              duration: 2 + index * 0.08,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-0 blur-xl"
            style={{ backgroundColor: item.soft }}
          />

          <motion.span
            animate={{ x: ["-160%", "460%"] }}
            transition={{
              duration: 2.25,
              repeat: Infinity,
              repeatDelay: 0.8,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[16%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/90 to-transparent"
          />

          <div className="relative z-10 flex h-full min-h-0 min-w-0 flex-col">
            <div className="flex shrink-0 items-start justify-between gap-3">
              <motion.span
                animate={{
                  y: [0, -3, 0],
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 1.55,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] text-white shadow-[0_12px_24px_rgba(7,27,77,0.13)] sm:h-10 sm:w-10 sm:rounded-[13px]"
                style={{
                  background: `linear-gradient(135deg, ${item.accent}, #1A6EB9)`,
                }}
              >
                <Icon className="h-[15px] w-[15px] sm:h-4 sm:w-4" />
              </motion.span>

              <span
                className="shrink-0 rounded-[12px] px-3 py-1 text-[16px] font-extrabold leading-none text-white shadow-sm sm:text-[18px]"
                style={{ backgroundColor: item.accent }}
              >
                {item.number}
              </span>
            </div>

            <div className="mt-3 min-w-0">
              <h3
                className={`break-words font-extrabold tracking-[-0.012em] text-[#112048] ${
                  isLongContent
                    ? "text-[11.5px] leading-[1.16] sm:text-[12px]"
                    : "text-[12px] leading-[1.18] sm:text-[13px]"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-2 break-words font-medium text-[#68758D] ${
                  isLongContent
                    ? "text-[8.4px] leading-[1.42] sm:text-[8.8px]"
                    : "text-[8.8px] leading-[1.46] sm:text-[9.2px]"
                }`}
              >
                {item.description}
              </p>
            </div>

            <div className="mt-auto flex shrink-0 justify-end pt-2">
              <motion.span
                animate={{
                  rotateY: [0, 180, 360],
                  x: [0, 2, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{
                  color: item.accent,
                  backgroundColor: item.soft,
                }}
              >
                <ArrowRight className="h-3 w-3" />
              </motion.span>
            </div>
          </div>
        </div>

        {/* Back: full-bleed square image only */}
        <div
          style={{
            transform: "rotateY(180deg) translateZ(1px)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="absolute inset-0 isolate overflow-hidden rounded-[24px] border border-[#CDEEFF] bg-[#EAF7FF] shadow-[0_18px_42px_rgba(7,27,77,0.08)]"
        >
          <motion.img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            animate={{
              scale: [1.01, 1.07, 1.01],
            }}
            transition={{
              duration: 6 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 block h-full w-full object-cover object-center"
          />

          <motion.span
            animate={{ x: ["-160%", "450%"] }}
            transition={{
              duration: 2.15,
              repeat: Infinity,
              repeatDelay: 0.85,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-[16%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/35 to-transparent"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}


function EmailManagePlatformSection() {
  /*
    Final Canva visual size for every active capability scene:
    1600 × 1000 px
    Export as PNG or JPG with 6–8% safe padding.
  */

  const platformItems = [
    {
      number: "01",
      title: "Design Emails That Actually Perform",
      shortTitle: "Email Design",
      description:
        "Create visually rich emails using drag-and-drop builders or generated layouts — no design or coding required.",
      icon: Code2,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.16)",
      image: "/assets/images/Emailbg4.webp",
      imageAlt: "Email design and visual creation",
      tag: "Creative build",
      metric: "Reusable content blocks",
      signal: "Design layer active",
    },
    {
      number: "02",
      title: "Build Templates for Every Business Scenario",
      shortTitle: "Templates",
      description:
        "From transactional alerts to marketing campaigns, create reusable templates tailored for different communication flows.",
      icon: Mail,
      accent: "#16A34A",
      soft: "rgba(22,163,74,0.16)",
      image: "/assets/images/Emailbg5.webp",
      imageAlt: "Template system and email structure",
      tag: "Reusable templates",
      metric: "Faster campaign launches",
      signal: "Template library synced",
    },
    {
      number: "03",
      title: "Target the Right Audience with Precision",
      shortTitle: "Audience",
      description:
        "Filter users by behavior, profile data, or events so every message reaches the most relevant audience.",
      icon: Target,
      accent: "#7C3AED",
      soft: "rgba(124,58,237,0.16)",
      image: "/assets/images/Emailbg.webp",
      imageAlt: "Audience targeting and precision",
      tag: "Smart segmentation",
      metric: "More relevant reach",
      signal: "Audience logic running",
    },
    {
      number: "04",
      title: "Automate Communication Workflows",
      shortTitle: "Automation",
      description:
        "Set up triggers for abandoned carts, welcome emails, reminders, and follow-ups so messages send automatically.",
      icon: Workflow,
      accent: "#EA580C",
      soft: "rgba(234,88,12,0.16)",
      image: "/assets/images/Emailbg1.webp",
      imageAlt: "Workflow automation and communication",
      tag: "Auto journeys",
      metric: "Always-on communication",
      signal: "Workflow triggered",
    },
    {
      number: "05",
      title: "Track Performance and Optimize Continuously",
      shortTitle: "Analytics",
      description:
        "Monitor delivery, opens, clicks, and engagement through live analytics to continuously improve email performance.",
      icon: BarChart3,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.16)",
      image: "/assets/images/Emailbg2.webp",
      imageAlt: "Analytics and performance tracking",
      tag: "Live analytics",
      metric: "Real-time performance insight",
      signal: "Performance stream live",
    },
    {
      number: "06",
      title: "Manage Conversations from One Place",
      shortTitle: "Conversations",
      description:
        "Handle incoming emails, replies, and customer interactions through one centralized and connected system.",
      icon: Inbox,
      accent: "#0F766E",
      soft: "rgba(15,118,110,0.16)",
      image: "/assets/images/Emailbg3.webp",
      imageAlt: "Unified inbox and email conversations",
      tag: "Unified inbox",
      metric: "One conversation view",
      signal: "Inbox synchronized",
    },
    {
      number: "07",
      title: "Connect Email with Your Business Systems",
      shortTitle: "Integrations",
      description:
        "Integrate with CRM, APIs, and internal tools to build one connected communication stack across your business.",
      icon: MailCheck,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.16)",
      image: "/assets/images/Emailbg4.webp",
      imageAlt: "Connected systems and integration",
      tag: "Connected stack",
      metric: "Unified business operations",
      signal: "Systems connected",
    },
  ];

  const desktopStations = [
    { left: "6.5%", top: "55%" },
    { left: "20%", top: "29%" },
    { left: "33.5%", top: "48%" },
    { left: "47.5%", top: "72%" },
    { left: "61.5%", top: "48%" },
    { left: "76.5%", top: "27%" },
    { left: "93%", top: "48%" },
  ];

  const [activePlatform, setActivePlatform] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActivePlatform((current) => (current + 1) % platformItems.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isPaused, platformItems.length]);

  const active = platformItems[activePlatform];
  const ActiveIcon = active.icon;
  const platformImages = [...new Set(platformItems.map((item) => item.image))];

  const showPrevious = () => {
    setActivePlatform((current) =>
      current === 0 ? platformItems.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActivePlatform((current) => (current + 1) % platformItems.length);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_48%,#EAF7FF_100%)] px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:pt-20 xl:px-20">
      <div className="pointer-events-none absolute -left-52 top-16 h-[470px] w-[470px] rounded-full bg-[#EAF7FF] blur-[140px]" />
      <div className="pointer-events-none absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-[#EAF7FF] blur-[150px]" />
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        {platformImages.map((image) => (
          <img key={image} src={image} alt="" loading="eager" />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1550px]">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.68, ease: EASE }}
          className="mx-auto max-w-[1020px] text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF7FF] px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#038FDF]">
            <Sparkles className="h-4 w-4" />
            CONNECTED EMAIL ROUTE
          </div>

          <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#071B4D] sm:text-[38px] lg:text-[46px]">
            Manage Everything from One Platform
          </h2>

          <p className="mx-auto mt-4 max-w-[900px] text-[14px] font-medium leading-7 text-[#5B6982] sm:text-[15px]">
            Move through every stage of email operations as one connected route —
            from creation and targeting to automation, conversations, analytics,
            and business integrations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.82, delay: 0.1, ease: EASE }}
          className="relative mt-10 overflow-hidden rounded-[38px] border border-[#CDEEFF] bg-[linear-gradient(135deg,#FFFFFF_0%,#F5FAFF_45%,#EAF7FF_100%)] shadow-[0_40px_105px_rgba(7,27,77,0.10)] lg:mt-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(3,143,223,0.10),transparent_26%),radial-gradient(circle_at_22%_80%,rgba(22,163,74,0.08),transparent_32%)]" />

          {/* Desktop metro map */}
          <div className="relative hidden min-h-[845px] lg:block">
            <div className="relative h-[390px] overflow-hidden border-b border-[#E3ECFB]">
              <div className="absolute inset-x-0 top-2 z-20 flex items-start justify-between px-7">
                <div className="w-fit rounded-full bg-white/90 px-3 py-1.5 shadow-[0_10px_24px_rgba(7,27,77,0.045)] backdrop-blur">
                  <p className="text-[8px] font-extrabold uppercase leading-none tracking-[0.12em] text-[#7C8AA6]">
                    Email Metro Map
                  </p>
                  <p className="mt-1 text-[12px] font-extrabold leading-none text-[#071B4D]">
                    One route - 7 capabilities
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CDEEFF] bg-white text-[#1A6EB9] transition hover:bg-[#F5FAFF]"
                    aria-label="Previous station"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPaused((current) => !current)}
                    className="flex h-10 items-center gap-2 rounded-full border border-[#CDEEFF] bg-white px-4 text-[9px] font-extrabold text-[#1A6EB9] transition hover:bg-[#F5FAFF]"
                  >
                    {isPaused ? (
                      <Play className="h-4 w-4" />
                    ) : (
                      <Pause className="h-4 w-4" />
                    )}
                    {isPaused ? "Play route" : "Pause route"}
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CDEEFF] bg-white text-[#1A6EB9] transition hover:bg-[#F5FAFF]"
                    aria-label="Next station"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <svg
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[310px] w-full"
                viewBox="0 0 1400 360"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M90 205 C205 65 335 80 470 190 C570 275 680 300 805 185 C925 75 1060 75 1305 180"
                  stroke="rgba(3,143,223,0.20)"
                  strokeWidth="18"
                  strokeLinecap="round"
                />

                <motion.path
                  d="M90 205 C205 65 335 80 470 190 C570 275 680 300 805 185 C925 75 1060 75 1305 180"
                  stroke="url(#emailMetroGradientLight)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="10 14"
                  animate={{ strokeDashoffset: [0, -96] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <defs>
                  <linearGradient
                    id="emailMetroGradientLight"
                    x1="90"
                    y1="205"
                    x2="1305"
                    y2="180"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#44BBFF" />
                    <stop offset="0.48" stopColor="#038FDF" />
                    <stop offset="1" stopColor="#038FDF" />
                  </linearGradient>
                </defs>
              </svg>

              <motion.div
                animate={{
                  left: desktopStations[activePlatform].left,
                  top: desktopStations[activePlatform].top,
                }}
                transition={{
                  type: "spring",
                  stiffness: 95,
                  damping: 18,
                }}
                className="pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, -4, 4, 0],
                    boxShadow: [
                      "0 0 0 rgba(3,143,223,0)",
                      "0 0 34px rgba(3,143,223,0.38)",
                      "0 0 0 rgba(3,143,223,0)",
                    ],
                  }}
                  transition={{
                    duration: 1.45,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-[18px] border-[4px] border-white bg-[#038FDF] text-white shadow-[0_18px_35px_rgba(3,143,223,0.24)]"
                >
                  <SendHorizontal className="h-6 w-6" />
                </motion.div>

                <motion.span
                  animate={{
                    scale: [0.75, 1.65],
                    opacity: [0.72, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 rounded-[18px] border border-[#038FDF]"
                />
              </motion.div>

              {platformItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activePlatform === index;
                const station = desktopStations[index];

                return (
                  <motion.button
                    key={item.number}
                    type="button"
                    onClick={() => setActivePlatform(index)}
                    onMouseEnter={() => setActivePlatform(index)}
                    animate={{
                      left: station.left,
                      top: station.top,
                      scale: isActive ? 1.12 : 1,
                    }}
                    transition={{
                      left: { duration: 0 },
                      top: { duration: 0 },
                      scale: { duration: 0.35, ease: EASE },
                    }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center"
                  >
                    <motion.span
                      animate={
                        isActive
                          ? {
                              y: [0, -4, 0],
                              rotate: [0, -5, 5, 0],
                            }
                          : {
                              y: [0, -2, 0],
                            }
                      }
                      transition={{
                        duration: isActive ? 1.35 : 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-white bg-white shadow-[0_12px_28px_rgba(21,43,91,0.12)]"
                      style={{ color: item.accent }}
                    >
                      <Icon className="h-5 w-5" />

                      {isActive && (
                        <motion.span
                          animate={{
                            scale: [0.8, 1.8],
                            opacity: [0.72, 0],
                          }}
                          transition={{
                            duration: 1.45,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                          className="absolute inset-0 rounded-full border"
                          style={{ borderColor: item.accent }}
                        />
                      )}
                    </motion.span>

                    <span
                      className={`mt-2 block whitespace-nowrap text-[9px] font-extrabold ${
                        isActive ? "text-[#071B4D]" : "text-[#7C8AA6]"
                      }`}
                    >
                      {item.shortTitle}
                    </span>

                    <span
                      className="mt-1 inline-flex rounded-full px-2 py-0.5 text-[7px] font-black text-white shadow-sm"
                      style={{ backgroundColor: item.accent }}
                    >
                      {item.number}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Single station display */}
            <div
              key={`desktop-${active.image}`}
              className="relative min-h-[455px] overflow-hidden"
              style={{
                backgroundImage: `url("${active.image}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-[rgba(255,255,255,0.06)]" />

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.44)_55%,rgba(255,255,255,0.20)_100%)]" />

              <div className="relative z-10 grid min-h-[455px] items-center gap-8 p-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.title}
                    initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        animate={{
                          y: [0, -4, 0],
                          rotate: [0, -6, 6, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative flex h-14 w-14 items-center justify-center rounded-[18px] text-white shadow-[0_18px_35px_rgba(3,143,223,0.16)]"
                        style={{
                          background: `linear-gradient(135deg, ${active.accent}, #1A6EB9)`,
                        }}
                      >
                        <ActiveIcon className="h-6 w-6" />
                      </motion.span>

                      <div>
                        <h3 className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#7C8AA6]">
                          Current station
                        </h3>
                        <h3 className="mt-1 text-[12px] font-extrabold text-[#071B4D]">
                          {active.number} / 07 • {active.shortTitle}
                        </h3>
                      </div>
                    </div>

                    <span
                      className="mt-6 inline-flex rounded-full px-4 py-2 text-[11px] font-extrabold text-white shadow-sm"
                      style={{ backgroundColor: active.accent }}
                    >
                      {active.tag}
                    </span>

                    <h3 className="mt-4 max-w-[760px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#071B4D] sm:text-[38px]">
                      {active.title}
                    </h3>

                    <h6 className="mt-4 max-w-[720px] text-[14px] font-bold leading-7 text-[#263858] sm:text-[15px]">
                      {active.description}
                    </h6>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#CDEEFF] bg-white px-3 py-2 text-[9px] font-extrabold text-[#1A6EB9] shadow-sm">
                        <CheckCircle2 className="h-4 w-4" />
                        {active.metric}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-[#CDEEFF] bg-white px-3 py-2 text-[9px] font-extrabold text-[#1A6EB9] shadow-sm">
                        <Sparkles className="h-4 w-4" />
                        {active.signal}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="relative overflow-hidden rounded-[24px] border border-white/45 bg-white/25 p-5 shadow-[0_16px_36px_rgba(21,43,91,0.08)] backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#7C8AA6]">
                        Station information
                      </p>
                      <p className="mt-1 text-[13px] font-extrabold text-[#071B4D]">
                        Active platform layer
                      </p>
                    </div>

                    <motion.span
                      animate={{
                        y: [0, -4, 0],
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#EAF7FF] text-[#038FDF]"
                    >
                      <Mail className="h-5 w-5" />
                    </motion.span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      ["Module", active.tag],
                      ["Signal", active.signal],
                      ["Outcome", active.metric],
                      ["Visual size", "1600 × 1000 px"],
                    ].map(([label, value], index) => (
                      <motion.div
                        key={label}
                        animate={{
                          x: [0, 4, 0],
                          opacity: [0.72, 1, 0.72],
                        }}
                        transition={{
                          duration: 2 + index * 0.18,
                          delay: index * 0.12,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex items-center justify-between gap-4 border-b border-white/45 pb-3 last:border-b-0 last:pb-0"
                      >
                        <span className="text-[11px] font-semibold text-[#7C8AA6]">
                          {label}
                        </span>
                        <span className="max-w-[190px] text-right text-[13px] font-extrabold leading-[1.2] text-[#071B4D]">
                          {value}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    {platformItems.map((item, index) => (
                      <button
                        key={item.number}
                        type="button"
                        onClick={() => setActivePlatform(index)}
                        className="relative h-2 flex-1 overflow-hidden rounded-full bg-[#EAF7FF]"
                        aria-label={`Open station ${index + 1}`}
                      >
                        <motion.span
                          initial={false}
                          animate={{
                            width: activePlatform === index ? "100%" : "0%",
                            opacity: activePlatform === index ? 1 : 0.18,
                          }}
                          transition={{
                            duration: activePlatform === index ? 3 : 0.3,
                            ease: activePlatform === index ? "linear" : EASE,
                          }}
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{ backgroundColor: item.accent }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile route */}
          <div className="relative lg:hidden">
            <div className="border-b border-[#E3ECFB] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#7C8AA6]">
                    Email Metro Map
                  </p>
                  <p className="mt-1 text-[15px] font-extrabold text-[#071B4D]">
                    Select a capability station
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPaused((current) => !current)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CDEEFF] bg-white text-[#1A6EB9]"
                  aria-label={isPaused ? "Play route" : "Pause route"}
                >
                  {isPaused ? (
                    <Play className="h-4 w-4" />
                  ) : (
                    <Pause className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="mt-5 flex gap-5 overflow-x-auto pb-3">
                {platformItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activePlatform === index;

                  return (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => setActivePlatform(index)}
                      className="min-w-[86px] text-center"
                    >
                      <motion.span
                        animate={{
                          scale: isActive ? 1.12 : 1,
                          y: isActive ? -4 : 0,
                        }}
                        className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-white bg-white shadow-[0_10px_24px_rgba(21,43,91,0.10)]"
                        style={{ color: item.accent }}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.span>

                      <span
                        className={`mt-2 block text-[9px] font-extrabold ${
                          isActive ? "text-[#071B4D]" : "text-[#7C8AA6]"
                        }`}
                      >
                        {item.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              key={`mobile-${active.image}`}
              className="relative min-h-[610px] overflow-hidden p-5 sm:p-7"
              style={{
                backgroundImage: `url("${active.image}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-[rgba(255,255,255,0.08)]" />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.52)_0%,rgba(255,255,255,0.72)_68%)]" />

              <div className="relative z-10">
                <motion.span
                  animate={{
                    y: [0, -4, 0],
                    rotate: [0, -6, 6, 0],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-[18px] text-white shadow-[0_18px_35px_rgba(3,143,223,0.16)]"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}, #1A6EB9)`,
                  }}
                >
                  <ActiveIcon className="h-6 w-6" />
                </motion.span>

                <span
                  className="mt-5 inline-flex rounded-full px-4 py-2 text-[10px] font-extrabold text-white shadow-sm"
                  style={{ backgroundColor: active.accent }}
                >
                  {active.tag}
                </span>

                <h3 className="mt-4 text-[28px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#071B4D]">
                  {active.title}
                </h3>

                <h6 className="mt-4 text-[14px] font-bold leading-7 text-[#263858]">
                  {active.description}
                </h6>

                <div className="mt-6 space-y-3 rounded-[22px] border border-white/45 bg-white/25 p-4 shadow-[0_16px_36px_rgba(21,43,91,0.08)] backdrop-blur-md">
                  {[
                    ["Signal", active.signal],
                    ["Outcome", active.metric],
                    ["Canva visual", "1600 × 1000 px"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 border-b border-white/45 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[9px] font-medium text-[#7C8AA6]">
                        {label}
                      </span>
                      <span className="text-right text-[9px] font-extrabold text-[#071B4D]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CDEEFF] bg-white text-[#1A6EB9]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CDEEFF] bg-white text-[#1A6EB9]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, delay: 0.18, ease: EASE }}
          className="relative mt-4 overflow-hidden rounded-[17px] border border-[#CDEEFF] bg-[linear-gradient(90deg,#EAF7FF_0%,#F5FAFF_48%,#EAF7FF_100%)] px-4 py-3 text-[#1A6EB9] shadow-[0_10px_26px_rgba(3,143,223,0.07)]"
        >
          <div className="relative z-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <h6 className="text-[13px] font-extrabold tracking-[-0.015em] text-[#038FDF] sm:text-[15px]">
              Everything from creation to automation to tracking works together as one connected system.
            </h6>

            <motion.div
              animate={{
                y: [0, -3, 0],
                rotate: [0, -4, 4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-1.5 rounded-full border border-[#CDEEFF] bg-white/90 px-2.5 py-1.5 text-[#038FDF] backdrop-blur-md"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EAF7FF]">
                <Send className="h-3.5 w-3.5" />
              </span>
              <span className="text-[8.5px] font-extrabold">
                One platform • Full control
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EmailBuiltForResultsSection() {
  /*
    Suggested Canva visual size for each result-node artwork:
    1200 × 800 px
    Use soft blue / white visuals with 6–8% safe padding.
  */

  const resultItems = [
    {
      number: "01",
      title: "Inbox-First Delivery",
      description:
        "Advanced routing and domain intelligence help improve inbox placement and reduce spam issues.",
      icon: Mail,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.14)",
      signal: "Delivery engine ready",
    },
    {
      number: "02",
      title: "Real-Time Email Tracking",
      description:
        "Validate email capture, measure bounce quality, and improve data accuracy instantly.",
      icon: Gauge,
      accent: "#16A34A",
      soft: "rgba(22,163,74,0.14)",
      signal: "Tracking stream live",
    },
    {
      number: "03",
      title: "Smart Sending Optimization",
      description:
        "Track opens, clicks, and engagement events through live event data and domain reputation signals.",
      icon: Zap,
      accent: "#7C3AED",
      soft: "rgba(124,58,237,0.14)",
      signal: "Optimization active",
    },
    {
      number: "04",
      title: "Scale Without Slowdowns",
      description:
        "Handle large process volumes without performance drops, delays, or bottlenecks.",
      icon: ArrowRight,
      accent: "#EA580C",
      soft: "rgba(234,88,12,0.14)",
      signal: "Scale route stable",
    },
    {
      number: "05",
      title: "A/B Testing & Optimization",
      description:
        "Test subject lines, content, and strategies to improve engagement and conversion continuously.",
      icon: Target,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.14)",
      signal: "Variants running",
    },
    {
      number: "06",
      title: "Data-Driven Insights",
      description:
        "Understand what works, what does not, and compare campaign results in real time.",
      icon: BarChart3,
      accent: "#0F766E",
      soft: "rgba(15,118,110,0.14)",
      signal: "Insights updating",
    },
    {
      number: "07",
      title: "Security & Compliance Ready",
      description:
        "Ensure trusted communication with encryption, compliance, and enterprise-ready controls.",
      icon: ShieldCheck,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.14)",
      signal: "Security layer on",
    },
  ];

  const [activeResult, setActiveResult] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveResult((current) => (current + 1) % resultItems.length);
    }, 2300);

    return () => window.clearInterval(timer);
  }, [resultItems.length]);

  const desktopPositions = [
    { left: "7%", top: "24px" },
    { left: "21.3%", top: "210px" },
    { left: "35.6%", top: "24px" },
    { left: "50%", top: "210px" },
    { left: "64.4%", top: "24px" },
    { left: "78.7%", top: "210px" },
    { left: "93%", top: "24px" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_45%,#F5FAFF_100%)] px-5 pb-22 pt-16 sm:px-8 lg:px-12 lg:pt-20 xl:px-20">
      <div className="pointer-events-none absolute -left-48 top-14 h-[420px] w-[420px] rounded-full bg-[#EAF7FF] blur-[130px]" />
      <div className="pointer-events-none absolute -right-44 bottom-0 h-[420px] w-[420px] rounded-full bg-[#EAF7FF] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1540px]">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.68, ease: EASE }}
          className="mx-auto max-w-[940px] text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF7FF] px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#038FDF]">
            <Sparkles className="h-4 w-4" />
            BUILT FOR RESULTS
          </div>

          <h2 className="text-[28px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#071B4D] sm:text-[38px] lg:text-[46px]">
            Built for Results
          </h2>

          <p className="mx-auto mt-4 max-w-[900px] text-[14px] font-medium leading-7 text-[#5B6982] sm:text-[15px]">
            From managing inbox placement to continuously optimizing delivery
            performance, the platform is built to provide enterprise-grade
            reliability, visibility, and operational efficiency.
          </p>
        </motion.div>

        {/* Unique desktop results route */}
        <div className="relative mt-10 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.82, ease: EASE }}
            className="relative h-[640px] overflow-hidden rounded-[34px] border border-[#CDEEFF] bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_52%,#F5FAFF_100%)] px-8 py-8 shadow-[0_30px_90px_rgba(7,27,77,0.08)]"
          >
            <div className="pointer-events-none absolute left-[6%] right-[7%] top-[247px] h-[12px] rounded-full bg-[linear-gradient(90deg,#EAF7FF_0%,#EAF7FF_48%,#EAF7FF_100%)]" />
            <div className="pointer-events-none absolute left-[6%] right-[7%] top-[251px] h-[4px] rounded-full bg-[linear-gradient(90deg,#44BBFF_0%,#038FDF_48%,#038FDF_100%)] opacity-45" />

            <motion.div
              animate={{ left: desktopPositions[activeResult].left }}
              transition={{ type: "spring", stiffness: 95, damping: 18 }}
              className="pointer-events-none absolute top-[235px] z-30 -translate-x-1/2"
            >
              <motion.div
                animate={{
                  y: [0, -4, 0],
                  boxShadow: [
                    "0 0 0 rgba(3,143,223,0)",
                    "0 0 26px rgba(3,143,223,0.42)",
                    "0 0 0 rgba(3,143,223,0)",
                  ],
                }}
                transition={{
                  duration: 1.45,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#038FDF] text-white"
              >
                <Send className="h-4 w-4" />
              </motion.div>
            </motion.div>

            {resultItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeResult === index;
              const position = desktopPositions[index];

              return (
                <motion.button
                  key={item.number}
                  type="button"
                  onMouseEnter={() => setActiveResult(index)}
                  onFocus={() => setActiveResult(index)}
                  onClick={() => setActiveResult(index)}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.48,
                    delay: index * 0.07,
                    ease: EASE,
                  }}
                  animate={{
                    scale: isActive ? 1.03 : 1,
                    y: isActive ? -4 : 0,
                  }}
                  className="absolute z-10 w-[205px] -translate-x-1/2 text-left"
                  style={position}
                >
                  <div
                    className={`relative min-h-[320px] overflow-hidden rounded-[22px] border bg-white px-4 py-4 shadow-[0_14px_32px_rgba(7,27,77,0.06)] ${
                      isActive ? "border-transparent" : "border-[#CDEEFF]"
                    }`}
                  >
                    {isActive && (
                      <>
                        <motion.span
                          animate={{
                            opacity: [0.15, 0.42, 0.15],
                            scale: [0.98, 1.05, 0.98],
                          }}
                          transition={{
                            duration: 1.7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="pointer-events-none absolute inset-0 blur-xl"
                          style={{ backgroundColor: item.soft }}
                        />
                        <motion.span
                          animate={{ x: ["-150%", "430%"] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 0.25,
                            ease: "easeInOut",
                          }}
                          className="pointer-events-none absolute inset-y-0 left-0 w-[22%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/90 to-transparent"
                        />
                      </>
                    )}

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-2">
                        <motion.span
                          animate={
                            isActive
                              ? {
                                  y: [0, -4, 0],
                                  rotate: [0, -5, 5, 0],
                                }
                              : { y: [0, -2, 0] }
                          }
                          transition={{
                            duration: isActive ? 1.35 : 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="flex h-10 w-10 items-center justify-center rounded-[13px] text-white shadow-[0_14px_26px_rgba(3,143,223,0.14)]"
                          style={{
                            background: `linear-gradient(135deg, ${item.accent}, #1A6EB9)`,
                          }}
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </motion.span>

                        <span
                          className="rounded-full px-2 py-0.5 text-[8px] font-extrabold text-white"
                          style={{ backgroundColor: item.accent }}
                        >
                          {item.number}
                        </span>
                      </div>

                      <h6 className="mt-3 min-h-[42px] text-[13px] font-extrabold leading-[1.3] tracking-[-0.01em] text-[#112048]">
                        {item.title}
                      </h6>

                      <p className="mt-2 min-h-[78px] text-[10px] font-medium leading-[1.55] text-[#66758E]">
                        {item.description}
                      </p>

                      <div className="mt-3 rounded-[14px] border border-[#EAF7FF] bg-[linear-gradient(180deg,#F5FAFF_0%,#EAF7FF_100%)] p-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-extrabold text-[#587198]">
                            Visual slot
                          </span>
                          <span
                            className="rounded-full px-2 py-0.5 text-[7px] font-extrabold"
                            style={{
                              color: item.accent,
                              backgroundColor: item.soft,
                            }}
                          >
                            1200 x 800
                          </span>
                        </div>

                        <motion.div
                          animate={{
                            x: [0, 8, 0],
                            opacity: [0.75, 1, 0.75],
                          }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="mt-2 flex items-center gap-1.5"
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ backgroundColor: item.accent }}
                          />
                          <span className="text-[8px] font-extrabold text-[#5A6A84]">
                            {item.signal}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile version */}
        <div className="mt-8 grid gap-4 lg:hidden">
          {resultItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeResult === index;

            return (
              <motion.button
                key={item.number}
                type="button"
                onClick={() => setActiveResult(index)}
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: EASE,
                }}
                className="relative overflow-hidden rounded-[22px] border border-[#CDEEFF] bg-white px-4 py-4 text-left shadow-[0_16px_32px_rgba(7,27,77,0.06)]"
              >
                {isActive && (
                  <motion.span
                    animate={{ x: ["-150%", "430%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0.25,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-[20%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/95 to-transparent"
                  />
                )}

                <div className="relative z-10 flex items-start gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] text-white"
                    style={{
                      background: `linear-gradient(135deg, ${item.accent}, #1A6EB9)`,
                    }}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h6 className="text-[13px] font-extrabold leading-[1.3] tracking-[-0.01em] text-[#112048]">
                        {item.title}
                      </h6>

                      <span
                        className="rounded-full px-2 py-0.5 text-[7px] font-extrabold text-white"
                        style={{ backgroundColor: item.accent }}
                      >
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-2 text-[10px] font-medium leading-[1.55] text-[#66758E]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, delay: 0.15, ease: EASE }}
          className="relative mt-6 overflow-hidden rounded-[22px] border border-[#CDEEFF] bg-[linear-gradient(135deg,#EAF7FF_0%,#F5FAFF_55%,#EAF7FF_100%)] px-6 py-5 shadow-[0_14px_38px_rgba(3,143,223,0.08)]"
        >
          <motion.span
            animate={{ x: ["-150%", "420%"] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-[16%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/80 to-transparent"
          />

          <div className="relative z-10 text-center">
            <h6 className="text-[22px] font-extrabold tracking-[-0.03em] text-[#038FDF]">
              Built not just to send. Reliable delivery they can trust.
            </h6>
            <p className="mt-2 text-[13px] font-medium text-[#66758E]">
              And when performance meets scale, email becomes a dependable growth system.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function EmailTrustedPerformanceSection() {
  const performanceItems = [
    {
      value: "99%+",
      title: "Delivery Reliability",
      description:
        "Optimized systems ensure emails consistently reach inboxes.",
      icon: SendHorizontal,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.12)",
    },
    {
      value: "Real-Time",
      title: "Event Tracking",
      description:
        "Monitor opens, clicks, bounces, and engagement instantly.",
      icon: BarChart3,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.12)",
    },
    {
      value: "Millions",
      title: "Emails Processed",
      description:
        "Built to handle growing email volumes without performance loss.",
      icon: Mail,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.12)",
    },
    {
      value: "High",
      title: "Inbox Placement",
      description:
        "Advanced deliverability engine keeps your emails out of spam.",
      icon: Target,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.12)",
    },
    {
      value: "Reliable",
      title: "Throughput",
      description:
        "Maintain consistent sending speeds across campaigns and workflows.",
      icon: Gauge,
      accent: "#038FDF",
      soft: "rgba(3,143,223,0.12)",
    },
  ];

  const ctaPoints = [
    "No setup complexity",
    "API-first platform",
    "Scalable infrastructure",
    "Enterprise-ready",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F5FAFF_52%,#F5FAFF_100%)] px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:pt-20 xl:px-20">
      <div className="pointer-events-none absolute -left-48 top-20 h-[430px] w-[430px] rounded-full bg-[#EAF7FF] blur-[130px]" />
      <div className="pointer-events-none absolute -right-44 bottom-0 h-[460px] w-[460px] rounded-full bg-[#EAF7FF] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1540px]">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-[900px] text-center"
        >
          <h2 className="text-[30px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#071B4D] sm:text-[38px] lg:text-[44px]">
            Trusted Performance
          </h2>

          <p className="mx-auto mt-3 max-w-[860px] text-[13px] font-medium leading-6 text-[#66758E] sm:text-[14px]">
            Powering large-scale email workflows with high deliverability,
            real-time insights, and performance you can trust.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {performanceItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22, scale: 0.96, filter: "blur(7px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: EASE,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.018,
                }}
                className="group relative min-h-[205px] overflow-hidden rounded-[20px] border border-[#CDEEFF] bg-white p-4 shadow-[0_14px_32px_rgba(7,27,77,0.06)]"
              >
                <motion.span
                  animate={{
                    opacity: [0.1, 0.32, 0.1],
                    scale: [0.97, 1.04, 0.97],
                  }}
                  transition={{
                    duration: 2.1 + index * 0.12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-0 blur-xl"
                  style={{ backgroundColor: item.soft }}
                />

                <motion.span
                  animate={{ x: ["-170%", "450%"] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 0.55 + index * 0.08,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 left-0 w-[18%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/90 to-transparent"
                />

                <div className="relative z-10 flex h-full min-h-0 flex-col pb-12">
                  <motion.h3
                    animate={{
                      scale: [1, 1.025, 1],
                    }}
                    transition={{
                      duration: 2.2,
                      delay: index * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ color: "#038FDF" }}
                    className="break-words text-[25px] font-extrabold leading-none tracking-[-0.04em] !text-[#038FDF] sm:text-[27px]"
                  >
                    {item.value}
                  </motion.h3>

                  <h4 className="mt-4 text-[12.5px] font-extrabold leading-[1.2] text-[#112048]">
                    {item.title}
                  </h4>

                  <p className="mt-2.5 max-w-[175px] pr-2 text-[9.5px] font-medium leading-[1.5] text-[#66758E]">
                    {item.description}
                  </p>

                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, -5, 5, 0],
                      scale: [1, 1.07, 1],
                    }}
                    transition={{
                      duration: 1.8 + index * 0.12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-3.5 right-3.5 flex h-10 w-10 items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#EAF7FF_0%,#CDEEFF_100%)] text-[#038FDF] shadow-[0_10px_24px_rgba(3,143,223,0.10)]"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <motion.span
                    animate={{
                      width: ["20%", "100%", "20%"],
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 2.4 + index * 0.16,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-0 left-0 h-[3px] rounded-full bg-[linear-gradient(90deg,#038FDF,#1A6EB9,#44BBFF)]"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, delay: 0.14, ease: EASE }}
          className="relative mt-3 overflow-hidden rounded-[16px] border border-[#CDEEFF] bg-[linear-gradient(90deg,#EAF7FF_0%,#F5FAFF_50%,#EAF7FF_100%)] px-4 py-2.5 shadow-[0_10px_24px_rgba(3,143,223,0.055)]"
        >
          <motion.span
            animate={{ x: ["-160%", "440%"] }}
            transition={{
              duration: 4.4,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-[16%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/90 to-transparent"
          />

          <div className="relative z-10 flex items-center justify-center text-center">
            <div>
              <h3
                style={{ color: "#038FDF" }}
                className="text-[14px] font-extrabold tracking-[-0.02em] !text-[#038FDF] sm:text-[16px]"
              >
                Performance you can measure. Reliability you can trust.
              </h3>
              <p className="mt-0.5 text-[9px] font-medium leading-4 text-[#66758E] sm:text-[10px]">
                Get started with a platform designed for performance and scale.
              </p>
            </div>
          </div>

          <motion.div
            animate={{
              x: [0, 8, 0],
              y: [0, -5, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-[#038FDF] sm:block"
          >
            <ArrowRight className="h-5 w-5 -rotate-45" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.975, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.72, delay: 0.12, ease: EASE }}
          className="relative mt-5 overflow-hidden rounded-[26px] border border-[#CDEEFF] bg-[linear-gradient(135deg,#FFFFFF_0%,#F5FAFF_52%,#EAF7FF_100%)] px-5 py-6 shadow-[0_22px_52px_rgba(7,27,77,0.08)] sm:px-7 lg:px-8 lg:py-7"
        >
          <motion.span
            animate={{ x: ["-170%", "460%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 0.75,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[12%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/85 to-transparent"
          />

          <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <h3 className="text-[24px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#071B4D] sm:text-[30px]">
                Build Smarter Email Systems Today
              </h3>

              <p className="mt-2.5 max-w-[650px] text-[12px] font-medium leading-6 text-[#66758E] sm:text-[13px]">
                Start sending, automating, and scaling your emails with Vertex
                Suite Email API.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="email-roll-button relative h-[48px] min-w-[170px] bg-[#038FDF] px-6 text-[12px] font-extrabold text-white shadow-[0_14px_30px_rgba(3,143,223,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(3,143,223,0.30)]"
                >
                  <span className="email-roll-main">
                    Start Building
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span className="email-roll-hover">
                    Start Building
                    <Zap className="h-4 w-4" />
                  </span>
                </button>

                <button
                  type="button"
                  className="email-roll-button relative h-[48px] min-w-[210px] border border-[#CDEEFF] bg-white px-6 text-[12px] font-extrabold text-[#038FDF] shadow-[0_10px_24px_rgba(7,27,77,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#038FDF]"
                >
                  <span className="email-roll-main">
                    Try Vertex Email API
                  </span>
                  <span className="email-roll-hover">
                    Try Vertex Email API
                    <Code2 className="h-4 w-4" />
                  </span>
                </button>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
                {ctaPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    animate={{
                      y: [0, -3, 0],
                      opacity: [0.72, 1, 0.72],
                    }}
                    transition={{
                      duration: 1.8,
                      delay: index * 0.14,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-2"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#038FDF] text-white shadow-sm">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[10.5px] font-bold text-[#455571] sm:text-[11px]">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, -0.5, 0.5, 0],
              }}
              transition={{
                duration: 5.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto w-full max-w-[650px]"
            >
              <img
                src={TRUSTED_PERFORMANCE_CTA_IMAGE}
                alt="Vertex Suite email performance dashboard"
                width={860}
                height={305}
                loading="lazy"
                className="block h-auto w-full object-contain drop-shadow-[0_24px_46px_rgba(7,27,77,0.18)]"
              />

              <motion.span
                animate={{
                  x: ["-120%", "430%"],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  repeatDelay: 0.9,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 left-0 w-[16%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/55 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


function EmailBackgroundDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-44 top-14 h-[470px] w-[470px] rounded-full bg-[#F5FAFF] blur-[120px]" />
      <div className="absolute -right-40 top-[-80px] h-[560px] w-[560px] rounded-full bg-[#EAF7FF] blur-[125px]" />
      <div className="absolute bottom-[-180px] left-1/2 h-[340px] w-[760px] -translate-x-1/2 rounded-full bg-white blur-[90px]" />

      {floatingParticles.map((particle, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -18, 7, 0],
            x: [0, 8, -5, 0],
            opacity: [0.22, 0.85, 0.4, 0.22],
            scale: [0.8, 1.18, 0.95, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-[#44BBFF] shadow-[0_0_18px_rgba(3,143,223,0.28)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}

      <motion.span
        animate={{
          y: [0, -15, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[47%] top-[12%] h-10 w-10 rounded-full border border-[#CDEEFF]/55"
      />

      <motion.div
        animate={{
          opacity: [0.18, 0.5, 0.18],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-14 top-12 hidden grid-cols-8 gap-3 lg:grid"
      >
        {Array.from({ length: 40 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#CDEEFF]"
          />
        ))}
      </motion.div>
    </div>
  );
}
