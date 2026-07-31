"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Gauge,
  Landmark,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  MessageCircle,
  MoreHorizontal,
  Plus,
  RadioTower,
  ReceiptText,
  RefreshCw,
  Send,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  TrendingUp,
  WalletCards,
  Workflow,
  X,
  XCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "../../components/Reveal";

const EASE = [0.22, 1, 0.36, 1];

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

const HERO_PARTICLES = [
  { left: "4%", top: "14%", size: 7, color: "#76D7A2", duration: 6.4, delay: 0.2 },
  { left: "10%", top: "72%", size: 5, color: "#9CCEF5", duration: 7.2, delay: 1.1 },
  { left: "18%", top: "28%", size: 4, color: "#A9E8C1", duration: 5.8, delay: 0.7 },
  { left: "25%", top: "86%", size: 8, color: "#B8DDF5", duration: 8.1, delay: 1.8 },
  { left: "34%", top: "10%", size: 5, color: "#71C7F2", duration: 6.9, delay: 0.4 },
  { left: "42%", top: "65%", size: 6, color: "#8EE2B2", duration: 7.8, delay: 1.3 },
  { left: "51%", top: "20%", size: 4, color: "#9CCEF5", duration: 6.1, delay: 0.9 },
  { left: "58%", top: "82%", size: 7, color: "#A9E8C1", duration: 8.4, delay: 2.2 },
  { left: "66%", top: "34%", size: 5, color: "#77CCF2", duration: 7.0, delay: 0.5 },
  { left: "73%", top: "12%", size: 8, color: "#8EE2B2", duration: 6.6, delay: 1.5 },
  { left: "80%", top: "68%", size: 5, color: "#A9D8F7", duration: 7.7, delay: 0.8 },
  { left: "87%", top: "26%", size: 6, color: "#77D59D", duration: 8.0, delay: 1.9 },
  { left: "93%", top: "78%", size: 4, color: "#90CFF3", duration: 6.5, delay: 1.0 },
];

/*
  New feature-section visuals.
  Keep a path empty to retain the built-in Canva-size placeholder.
*/
const PAYMENT_FEATURE_IMAGE_ASSETS = {
  paymentRequest: "", // "/assets/images/payment-features/payment-request.png"
  paymentLinks: "", // "/assets/images/payment-features/payment-links.png"
  paymentMethods: "", // "/assets/images/payment-features/payment-methods.png"
  reminders: "", // "/assets/images/payment-features/payment-reminders.png"
  receipts: "", // "/assets/images/payment-features/payment-receipts.png"
  workflow: "", // "/assets/images/payment-features/connected-workflow.png"
};

const trustItems = [];

const WHATSAPP_PAY_HERO_SCREENS = [
  "/assets/images/P1.webp",
  "/assets/images/P2.webp",
  "/assets/images/P3.webp",
];

// Recommended export size: 1600 × 720 px.
const HOW_CUSTOMERS_COMPLETE_PAYMENTS_IMAGE =
  "/assets/images/how-customers-complete-payments.webp";

export default function WhatsAppPaymentsPage() {
  const [showStickyCta, setShowStickyCta] = useState(true);

  useEffect(() => {
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
      <main className="whatsapp-pay-page min-h-screen overflow-x-hidden bg-white">
        <section className="relative isolate flex min-h-screen items-start overflow-visible bg-[#f7faf7] px-4 pb-24 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20 xl:px-20">
          <BackgroundDecorations />

          <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-start gap-10 pt-10 max-md:flex max-md:flex-col sm:pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:pt-16">
            <CenteredHeroContent />
            <WhatsAppPayHeroVisual />
          </div>
        </section>

        <HowCustomersCompletePaymentsSection />
        <CompletePaymentJourneySection />
        <BusinessPaymentIntelligenceSection />
        <PaymentsBuiltForConfidenceSection />

        <WhatsAppPayFaqSection />

        <div
          className={`fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-[#D7E8E1] bg-white/95 px-3 py-2.5 shadow-[0_-8px_24px_rgba(7,27,77,0.14)] backdrop-blur-md transition-transform duration-300 md:hidden ${
            showStickyCta ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-[9px]! border-2 border-green-600 bg-green-600 px-3 py-2.5 text-[0.9rem] font-semibold text-white">
            <span>Start Free Trial</span>
            <ArrowRight size={16} />
          </button>

          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-[9px]! border-2 border-green-600 bg-white px-3 py-2.5 text-[0.9rem] font-semibold !text-green-600">
            <CalendarDays size={18} strokeWidth={1.6} />
            <span>Book a Demo</span>
          </button>
        </div>
      </main>

      <style jsx global>{`
        @keyframes softGlow {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.96);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.04);
          }
        }

        .hero-soft-rect-button {
          border-radius: 14px !important;
          -webkit-border-radius: 14px !important;
          clip-path: inset(0 round 14px);
          overflow: hidden;
          appearance: none;
          -webkit-appearance: none;
        }

        .hero-soft-rect-button::before,
        .hero-soft-rect-button::after {
          border-radius: inherit !important;
        }

        .payment-journey-phone-layer {
          transform-origin: center;
          will-change: opacity, transform;
        }

        .payment-journey-base-layer {
          opacity: 1;
          transform: none;
        }

        .payment-journey-sheet-layer {
          animation: paymentJourneySheet 15s ease-in-out infinite;
        }

        .payment-journey-intro-message {
          opacity: 1;
          transform: none;
        }

        .payment-journey-message-one {
          animation: paymentJourneyMessageOne 15s ease-in-out infinite;
        }

        .payment-journey-message-two {
          animation: paymentJourneyMessageTwo 15s ease-in-out infinite;
        }

        .payment-journey-message-three {
          animation: paymentJourneyMessageThree 15s ease-in-out infinite;
        }

        .payment-journey-menu-sheet-layer {
          animation: paymentJourneyMenuSheet 15s ease-in-out infinite;
        }

        @keyframes paymentJourneySheet {
          0%,
          9.6% {
            opacity: 0;
            transform: translateY(18%) scale(0.985);
          }

          14.4%,
          28.8% {
            opacity: 1;
            transform: translateY(-7%) scale(1);
          }

          36%,
          100% {
            opacity: 0;
            transform: translateY(13%) scale(0.99);
          }
        }

        @keyframes paymentJourneyMessageOne {
          0%,
          32% {
            opacity: 0;
            transform: translateY(28px) scale(0.92);
          }

          37.6%,
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes paymentJourneyMessageTwo {
          0%,
          41.6% {
            opacity: 0;
            transform: translateY(28px) scale(0.92);
          }

          47.2%,
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes paymentJourneyMenuSheet {
          0%,
          62.4% {
            opacity: 0;
            transform: translateY(18%) scale(0.985);
          }

          67.2%,
          76.8% {
            opacity: 1;
            transform: translateY(-7%) scale(1);
          }

          80%,
          100% {
            opacity: 0;
            transform: translateY(12%) scale(0.99);
          }
        }

        @keyframes paymentJourneyMessageThree {
          0%,
          83% {
            opacity: 0;
            transform: translateY(28px) scale(0.92);
          }

          89%,
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 1023px) {
          .desktop-arrow {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

function CenteredHeroContent() {
  return (
    <div className="relative z-20 mx-0 flex max-w-[820px] flex-col gap-10 text-left max-md:order-2 max-md:gap-7 max-lg:mx-auto max-lg:items-center max-lg:text-center lg:pl-0">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="-mt-3 inline-flex w-fit max-w-full items-center gap-2 rounded-[10px] border border-white/50 bg-white/25 px-3 py-2 text-[0.72rem] font-semibold tracking-[0.04em] text-green-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_28px_rgba(15,23,42,0.10)] ring-1 ring-white/30 backdrop-blur-lg sm:text-[0.9rem] lg:ml-0"
      >
        <img
          src="/assets/images/whatsapp-icon.png"
          alt="WhatsApp"
          className="h-5 w-5 shrink-0 object-contain"
        />
        <span>Whatsapp Business API Payments</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.12, ease: EASE }}
        className="mb-0 w-full max-w-[720px] text-left text-[clamp(2rem,5.2vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-[#292929] max-lg:text-center"
      >
        <span className="block whitespace-nowrap leading-[1.03] max-md:whitespace-normal">
          Deliver a Trusted
        </span>
        <span className="block whitespace-nowrap leading-[1.03] max-md:whitespace-normal">
          Experience on{" "}
          <AnimatedWhatsAppPayWord />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
        className="m-0 block max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6] max-lg:text-center"
      >
        <span className="block">
          Let customers review their order and complete payments using
          supported UPI apps, cards, and payment methods without breaking the
          conversation.
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
        className="mt-6 grid w-full max-w-[640px] grid-cols-2 gap-3.5 max-md:gap-2"
      >
        {[
          {
            icon: FaWhatsapp,
            label: "Whatsapp Business Platform",
            color: "#059669",
            stacked: true,
          },
          {
            icon: ShieldCheck,
            label: "Secure Gateway Integrations",
            color: "#059669",
            stacked: true,
          },
          {
            image: "/assets/images/heropay4.webp",
            label: "Real-Time Payment Updates",
            color: "#059669",
            stacked: true,
          },
          {
            image: "/assets/images/heropay3.webp",
            label: "Automated Confirmations",
            color: "#059669",
            stacked: true,
          },
        ].map((s) => {
          const Icon = s.icon;
          const hasInlineVisual = Icon || s.image;
          const shouldStackVisual = s.stacked;

          return (
          <div
            key={s.label}
            className={`flex min-h-[62px] w-full justify-start rounded-[8px] border border-white/15 bg-transparent py-2.5 text-left ${
              hasInlineVisual
                ? shouldStackVisual
                  ? "flex-col items-start gap-2.5 pl-7 pr-4 max-sm:items-center max-sm:px-2"
                  : "flex-row items-center gap-2.5 pl-7 pr-2"
                : "flex-col items-start gap-1.5 pl-7 pr-2"
            }`}
          >
            {hasInlineVisual ? (
              <>
                {Icon ? (
                  <Icon
                    aria-label="WhatsApp"
                    className="text-[#059669]"
                    style={{
                      width: `${s.visualSize ?? (shouldStackVisual ? 44 : 32)}px`,
                      height: `${s.visualSize ?? (shouldStackVisual ? 44 : 32)}px`,
                    }}
                  />
                ) : (
                  <img
                    src={s.image}
                    alt=""
                    className="block shrink-0 object-contain"
                    style={{
                      width: shouldStackVisual ? "40px" : "32px",
                      height: shouldStackVisual ? "40px" : "32px",
                    }}
                  />
                )}
                <span
                  className={`!text-[1.06rem] font-medium leading-tight text-[#5B667A] xl:!text-[1.14rem] max-md:!text-[0.98rem] max-sm:text-center ${
                    s.label === "Gateway Integrations" ? "whitespace-nowrap" : ""
                  }`}
                >
                  {s.label}
                </span>
              </>
            ) : (
              <>
                <span
                  className="mt-1 text-[2.15rem] font-extrabold leading-none"
                  style={{ color: s.color }}
                >
                  {s.value}
                </span>
                <span className="min-h-[2.1em] !text-[1.2rem] font-medium leading-tight text-[#5B667A] xl:!text-[1.26rem] max-md:!text-[1.04rem]">
                  {s.label}
                </span>
              </>
            )}
          </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
        className="mt-6 flex items-center justify-start gap-3 max-md:hidden"
      >
        <button
          type="button"
          style={{ borderRadius: "14px" }}
          className="roll-btn inline-flex items-center justify-center overflow-hidden rounded-[14px] border-0 bg-green-600 hover:bg-green-600 px-11 py-2.5 text-[1rem] font-semibold text-white shadow-[0_18px_42px_rgba(22,163,74,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(22,163,74,0.32)] max-sm:w-full"
        >
          <span className="roll-content">
            <span className="roll-content-main">
              <span>Start Free Trial</span>
              <ArrowRight size={20} strokeWidth={2.2} />
            </span>
            <span className="roll-content-hover">
              <span>Start Free Trial</span>
              <ArrowRight size={20} strokeWidth={2.2} />
            </span>
          </span>
        </button>

        <button
          type="button"
          style={{ borderRadius: "14px" }}
          className="roll-btn inline-flex items-center justify-center overflow-hidden rounded-[14px] border-2 border-green-600 bg-white px-7 py-2.5 text-[1rem] font-semibold !text-green-600 shadow-[0_8px_22px_rgba(7,27,77,0.04)] transition duration-300 hover:-translate-y-1 hover:bg-green-600 hover:!text-green-600 hover:shadow-[0_14px_30px_rgba(7,27,77,0.08)] max-sm:w-full"
        >
          <span className="roll-content">
            <span className="roll-content-main">
              <span>Book a Demo</span>
              <CalendarDays size={26} strokeWidth={1.6} />
            </span>
            <span className="roll-content-hover">
              <span>Book a Demo</span>
              <CalendarDays size={26} strokeWidth={1.6} />
            </span>
          </span>
        </button>
      </motion.div>

      {trustItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.58, ease: EASE }}
          className="mx-auto mt-3 flex w-full max-w-[720px] flex-nowrap items-center justify-start gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] sm:gap-3 sm:overflow-visible max-lg:justify-center lg:mx-0 [&::-webkit-scrollbar]:hidden"
        >
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 20,
                }}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-emerald-100 bg-white/90 px-3.5 py-2.5 text-[11px] font-bold text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.07)] backdrop-blur-md sm:px-4 sm:text-sm"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[#19B75A]">
                  <Icon size={14} />
                </span>

                {item.label}
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}

function WhatsAppPayHeroVisual() {
  const [activeScreen, setActiveScreen] = useState(0);

  const phoneScreens = [
    {
      src: WHATSAPP_PAY_HERO_SCREENS[0],
      alt: "WhatsApp Pay payment request screen",
    },
    {
      src: WHATSAPP_PAY_HERO_SCREENS[1],
      alt: "WhatsApp Pay order payment screen",
    },
    {
      src: WHATSAPP_PAY_HERO_SCREENS[2],
      alt: "WhatsApp Pay payment confirmation screen",
    },
  ];

  useEffect(() => {
    WHATSAPP_PAY_HERO_SCREENS.forEach((screenPath) => {
      const image = new Image();
      image.src = screenPath;
    });
  }, []);

  /*
    Forced animation:
    P1 -> P2 -> P3 continuously move into the centre.
    Browser reduced-motion settings are intentionally ignored.
  */
  useEffect(() => {
    setActiveScreen(0);

    const timer = window.setInterval(() => {
      setActiveScreen((current) => (current + 1) % 3);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  const getPosition = (index) => {
    const relativePosition = (index - activeScreen + 3) % 3;

    if (relativePosition === 0) {
      return {
        x: "-50%",
        y: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
        zIndex: 30,
      };
    }

    if (relativePosition === 1) {
      return {
        x: "48%",
        y: 32,
        scale: 0.84,
        rotate: 5,
        opacity: 0.65,
        zIndex: 10,
      };
    }

    return {
      x: "-148%",
      y: 32,
      scale: 0.84,
      rotate: -5,
      opacity: 0.65,
      zIndex: 10,
    };
  };

  return (
    <div className="relative z-20 mt-3 flex w-full max-w-[820px] translate-y-8 items-start justify-center justify-self-end max-md:order-1 max-md:mt-0 max-md:translate-y-0 sm:mt-5 lg:mt-7 lg:translate-x-4 lg:translate-y-14 max-lg:mx-auto max-lg:justify-center">
      <div className="relative h-[460px] w-full max-md:h-[360px] sm:h-[520px] lg:h-[570px]">
        {phoneScreens.map((screen, index) => {
          const position = getPosition(index);
          const isCenter = index === activeScreen;

          return (
            <motion.div
              key={screen.src}
              className="absolute bottom-0 left-1/2 h-[400px] w-[190px] shrink-0 will-change-transform max-md:h-[330px] max-md:w-[157px] sm:h-[470px] sm:w-[224px] lg:h-[520px] lg:w-[248px]"
              initial={false}
              animate={{
                x: position.x,
                y: position.y,
                scale: position.scale,
                rotate: position.rotate,
                opacity: position.opacity,
              }}
              transition={{
                x: {
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  mass: 0.9,
                },
                y: {
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  mass: 0.9,
                },
                scale: {
                  duration: 0.65,
                  ease: EASE,
                },
                rotate: {
                  duration: 0.65,
                  ease: EASE,
                },
                opacity: {
                  duration: 0.45,
                  ease: EASE,
                },
              }}
              style={{
                zIndex: position.zIndex,
              }}
            >
              <motion.div
                animate={{
                  y: isCenter ? [0, -7, 0] : [0, -3, 0],
                }}
                transition={{
                  duration: isCenter ? 2.2 : 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-full w-full items-end justify-center"
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  loading="eager"
                  className="block h-full w-full object-contain drop-shadow-[0_30px_70px_rgba(7,27,58,0.18)]"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


function useClientReducedMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted ? prefersReducedMotion : false;
}

function useMobileBreakpoint() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);

    return () => {
      mediaQuery.removeEventListener("change", updateMobileState);
    };
  }, []);

  return isMobile;
}


function AnimatedWhatsAppWord() {
  const word = "WhatsApp";

  return (
    <span className="relative inline-flex min-w-[4.75em] max-w-full items-baseline whitespace-nowrap text-[#16A34A]">
      <motion.span
        initial={{ width: 0 }}
        animate={{
          width: [
            "0ch",
            `${word.length}ch`,
            `${word.length}ch`,
            "0ch",
            "0ch",
          ],
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
        {word}
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
        className="absolute -bottom-1 left-0 -z-10 h-[8px] w-[4.6em] origin-left rounded-full bg-[#DDF8E7]"
      />
    </span>
  );
}

function AnimatedDashboardWord() {
  const word = "One Dashboard";

  return (
    <span className="relative inline-flex min-w-[8.25em] max-w-full items-baseline whitespace-nowrap text-[#16A34A]">
      <motion.span
        initial={{ width: 0 }}
        animate={{
          width: [
            "0ch",
            `${word.length}ch`,
            `${word.length}ch`,
            "0ch",
            "0ch",
          ],
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
        {word}
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
        className="absolute -bottom-1 left-0 -z-10 h-[8px] w-[8.05em] origin-left rounded-full bg-[#DDF8E7]"
      />
    </span>
  );
}

function AnimatedWhatsAppPayWord() {
  const word = "WhatsApp Pay";
  const [typedText, setTypedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting && typedText === word) {
      const timer = window.setTimeout(() => setDeleting(true), 1600);
      return () => window.clearTimeout(timer);
    }

    if (deleting && typedText === "") {
      const timer = window.setTimeout(() => setDeleting(false), 350);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setTypedText((current) =>
        deleting
          ? word.slice(0, current.length - 1)
          : word.slice(0, current.length + 1)
      );
    }, deleting ? 60 : 110);

    return () => window.clearTimeout(timer);
  }, [deleting, typedText]);

  return (
    <span className="relative inline-block max-w-full whitespace-nowrap text-[#16A34A]">
      <span aria-hidden="true" className="invisible">
        {word}
      </span>

      <span className="absolute inset-y-0 left-0 inline-flex items-baseline">
        <span>{typedText}</span>
        <motion.span
          animate={{ opacity: [1, 1, 0, 0, 1] }}
          transition={{
            duration: 0.85,
            repeat: Infinity,
            ease: "linear",
          }}
          className="ml-[2px] inline-block h-[0.9em] w-[3px] rounded-full bg-[#16A34A] align-middle"
        />
      </span>
    </span>
  );
}
function WhatsAppPaymentFeaturesSection() {
  const reduceMotion = false; // Forced: keep feature animations running
  const [activeFeature, setActiveFeature] = useState(0);

  const featureCards = [
    {
      key: "paymentRequest",
      animationType: "request",
      title: "Payment Requests in Chat",
      description:
        "Share payment requests directly within the customer conversation.",
      icon: MessageCircle,
      tone: "green",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.paymentRequest,
      canvasSize: "1000 x 700 px",
      layout: "wide",
    },
    {
      key: "paymentLinks",
      animationType: "link",
      title: "Order Details Before Payment",
      description:
        "Let customers review items, quantities, pricing, and the total amount before proceeding.",
      icon: ReceiptText,
      tone: "green",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.paymentLinks,
      canvasSize: "1000 x 700 px",
      layout: "wide",
    },
    {
      key: "paymentMethods",
      animationType: "methods",
      title: "Payment Links",
      description:
        "Send payment links that take customers directly to the required checkout step. Meta supports payment-link and enhanced payment-link flows.",
      icon: Link2,
      tone: "green",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.paymentMethods,
      canvasSize: "1000 x 700 px",
      layout: "wide",
    },
    {
      key: "reminders",
      animationType: "reminder",
      title: "Automated Payment Reminders",
      description:
        "Follow up on pending bills, incomplete payments, and upcoming dues automatically.",
      icon: Bell,
      tone: "green",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.reminders,
      canvasSize: "1000 x 700 px",
      layout: "wide",
    },
    {
      key: "receipts",
      animationType: "receipt",
      title: "Flexible Payment Methods",
      description:
        "Support UPI apps and other payment methods available through the configured gateway and integration model.",
      icon: CreditCard,
      tone: "blue",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.receipts,
      canvasSize: "1000 x 700 px",
      layout: "wide",
    },
    {
      key: "transactionStatus",
      animationType: "methods",
      title: "Live Transaction Status",
      description:
        "Keep customers informed while the transaction is being processed, pending, unsuccessful, or awaiting another attempt.",
      icon: Activity,
      tone: "blue",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.paymentMethods,
      canvasSize: "1000 x 700 px",
      layout: "wide",
    },
    {
      key: "confirmationReceipt",
      animationType: "receipt",
      title: "Payment Confirmation & Receipt",
      description:
        "Automatically share a final confirmation after successful payment, including the amount, transaction reference, receipt, and next order step.",
      icon: CheckCircle2,
      tone: "blue",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.receipts,
      canvasSize: "1000 x 700 px",
      layout: "wide",
    },
    {
      key: "postPaymentUpdates",
      animationType: "workflow",
      title: "Post-Payment Order Updates",
      description:
        "Automatically share order confirmation, fulfilment progress, and delivery updates after payment is completed.",
      icon: Workflow,
      tone: "green",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.workflow,
      canvasSize: "1000 x 700 px",
      layout: "wide",
    },
  ];

  const journeySteps = [
    {
      label: "Payment Request",
      icon: MessageCircle,
      tone: "green",
    },
    {
      label: "Payment Link",
      icon: Link2,
      tone: "blue",
    },
    {
      label: "Payment Method",
      icon: CreditCard,
      tone: "green",
    },
    {
      label: "Reminder",
      icon: Bell,
      tone: "purple",
    },
    {
      label: "Confirmation",
      icon: CheckCircle2,
      tone: "blue",
    },
    {
      label: "Workflow Update",
      icon: Workflow,
      tone: "green",
    },
  ];

  useEffect(() => {
    setActiveFeature(0);

    const timer = window.setInterval(() => {
      setActiveFeature((current) => (current + 1) % featureCards.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, [featureCards.length]);

  return (
    <section className="relative isolate overflow-hidden bg-white px-5 pb-14 pt-10 sm:px-8 lg:px-12 lg:pt-12 xl:px-20">
      <div className="pointer-events-none absolute -left-44 top-32 h-[430px] w-[430px] rounded-full bg-emerald-100/55 blur-[120px]" />
      <div className="pointer-events-none absolute -right-44 bottom-20 h-[460px] w-[460px] rounded-full bg-sky-100/60 blur-[125px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          {...businessApiHeadingProps}
          className="mx-auto max-w-[1200px] text-center"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-[#F0FAF3] px-3 py-1.5 text-[9px] font-extrabold tracking-[0.12em] text-[#2B9C52]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#2B9C52] shadow-sm">
              <WalletCards className="h-3.5 w-3.5" />
            </span>
            PAYMENT MANAGEMENT FEATURES
          </div>

          <h2 className="mx-auto max-w-[1120px] text-center text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
            The Complete Payment Journey on{" "}
            <AnimatedWhatsAppWord />
          </h2>

          <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
            From structured payment requests to follow-ups and confirmations,
            Vertex Suite connects every payment step within one manageable
            WhatsApp workflow.
          </p>
        </motion.div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-8 xl:grid-cols-4">
          {featureCards.map((feature, index) => (
            <PaymentFeatureCard
              key={feature.key}
              feature={feature}
              index={index}
              active={activeFeature === index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.56, ease: EASE }}
          whileHover={{ y: -4 }}
          className="relative mt-4 overflow-hidden rounded-[22px] border border-[#C9DEF8] bg-[linear-gradient(135deg,#FBFDFF_0%,#F5FAFF_50%,#F7FFF9_100%)] p-3 shadow-[0_18px_45px_rgba(15,23,42,0.07)] sm:p-4"
        >
          {!reduceMotion && (
            <motion.div
              animate={{ x: ["-140%", "420%"] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-[16%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/80 to-transparent"
            />
          )}

          <div className="relative z-10 grid items-center gap-3 md:grid-cols-[minmax(0,330px)_minmax(0,1fr)]">
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#2487E8]">
                  <Workflow className="h-5 w-5" />
                </span>

                <h3 className="text-[12px] font-semibold leading-tight tracking-normal text-[#171F35] sm:whitespace-nowrap sm:text-[13px]">
                  Connected Order & Payment Workflows
                </h3>
              </div>

              <p className="mt-1.5 text-[9px] font-normal leading-[1.35] text-[#596378] sm:text-[9.5px]">
                Connect payments with catalogues, orders, customer records,
                campaigns, and post-purchase communication.
              </p>
            </div>

            <PaymentFeatureImageSpace
              src={PAYMENT_FEATURE_IMAGE_ASSETS.workflow}
              alt="Connected order and payment workflow visual"
              canvasSize="1400 x 360 px"
              tone="blue"
              variant="workflow"
              delay={0.78}
              className="mt-3 self-center sm:mt-0 sm:translate-y-4"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.72, ease: EASE }}
          className="mt-4 overflow-hidden rounded-[22px] border border-slate-200/80 bg-white px-4 py-4 shadow-[0_12px_32px_rgba(15,23,42,0.06)] sm:px-5"
        >
          <div className="flex flex-col items-center justify-center gap-3 xl:flex-row">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isGreen = step.tone === "green";
              const isPurple = step.tone === "purple";

              return (
                <div key={step.label} className="contents">
                  <motion.div
                    initial={{ opacity: 0, y: 14, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.82 + index * 0.1,
                      ease: EASE,
                    }}
                    whileHover={{ y: -4, scale: 1.025 }}
                    className="flex min-w-[150px] items-center gap-2.5 rounded-full border border-slate-200 bg-white px-3.5 py-2.5 shadow-sm"
                  >
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        isGreen
                          ? "bg-emerald-50 text-emerald-600"
                          : isPurple
                          ? "bg-violet-50 text-violet-600"
                          : "bg-sky-50 text-sky-600"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <span className="text-[11px] font-extrabold text-[#2E3850]">
                      {step.label}
                    </span>
                  </motion.div>

                  {index < journeySteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.9 + index * 0.1,
                        ease: EASE,
                      }}
                      className="relative hidden h-px w-5 origin-left bg-slate-300 xl:block"
                    >
                      {!reduceMotion && (
                        <motion.span
                          animate={{ x: [0, 14, 0] }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -top-1 h-2 w-2 rounded-full bg-[#25D366]"
                        />
                      )}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PaymentFeatureCard({
  feature,
  index,
  active = false,
  className = "",
}) {
  const reduceMotion = false; // Forced: keep feature animations running
  const Icon = feature.icon;
  const titleWords = feature.title.split(" ");
  const lastTitleWord = titleWords.pop();
  const titleStart = titleWords.join(" ");

  const toneClasses =
    feature.tone === "green"
      ? {
          border: "border-[#B8E3C3]",
          icon: "bg-[#E8F8ED] text-[#1F9A4C]",
          glow: "bg-emerald-200/45",
          activeBorder: "border-emerald-300",
          activeShadow:
            "shadow-[0_22px_50px_rgba(16,185,129,0.17),0_0_0_1px_rgba(16,185,129,0.10)]",
        }
      : feature.tone === "purple"
      ? {
          border: "border-[#D9C9FA]",
          icon: "bg-[#F1EAFF] text-[#7C4DDB]",
          glow: "bg-violet-200/42",
          activeBorder: "border-violet-300",
          activeShadow:
            "shadow-[0_22px_50px_rgba(124,77,219,0.16),0_0_0_1px_rgba(124,77,219,0.10)]",
        }
      : {
          border: "border-[#BED7FA]",
          icon: "bg-[#EAF4FF] text-[#2B86E5]",
          glow: "bg-sky-200/45",
          activeBorder: "border-sky-300",
          activeShadow:
            "shadow-[0_22px_50px_rgba(43,134,229,0.16),0_0_0_1px_rgba(43,134,229,0.10)]",
        };

  const isTall = feature.layout === "tall";

  return (
    <motion.article
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      animate={
        reduceMotion
          ? undefined
          : {
              y: active ? -8 : 0,
              scale: active ? 1.025 : 1,
              rotateZ: active ? -0.35 : 0,
            }
      }
      transition={{
        opacity: {
          duration: 0.58,
          delay: 0.18 + index * 0.11,
          ease: EASE,
        },
        y: {
          duration: 0.48,
          ease: EASE,
        },
        scale: {
          duration: 0.48,
          ease: EASE,
        },
        rotateZ: {
          duration: 0.48,
          ease: EASE,
        },
      }}
      whileHover={{ y: -6, scale: 1.012 }}
      className={`relative isolate overflow-hidden rounded-[18px] border bg-[linear-gradient(145deg,#ffffff_0%,#FBFDFF_100%)] p-3 shadow-[0_12px_30px_rgba(15,23,42,0.065)] transition-colors duration-300 sm:p-3.5 ${
        active ? `${toneClasses.activeBorder} ${toneClasses.activeShadow}` : toneClasses.border
      } ${className}`}
    >
      {active && (
        <>
          <motion.span
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.22, 0.72, 0.22],
                    scale: [0.98, 1.04, 0.98],
                  }
            }
            transition={{
              duration: 1.7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`pointer-events-none absolute inset-[-8px] z-0 rounded-[28px] ${toneClasses.glow} blur-2xl`}
          />

          {!reduceMotion && (
            <motion.span
              animate={{ x: ["-150%", "480%"] }}
              transition={{
                duration: 1.55,
                repeat: Infinity,
                repeatDelay: 0.25,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-[17%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/85 to-transparent"
            />
          )}
        </>
      )}

      <div
        className={`relative z-20 ${
          isTall
            ? "flex h-full flex-col"
            : "grid h-full min-h-0 items-center gap-2.5 sm:grid-cols-[minmax(0,1fr)_96px]"
        }`}
      >
        <div className="min-w-0">
          <div className="flex items-start gap-2.5">
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : active
                  ? {
                      y: [0, -4, 0],
                      rotate: [0, -4, 4, 0],
                      scale: [1, 1.08, 1],
                    }
                  : {
                      y: [0, -2, 0],
                    }
              }
              transition={{
                duration: active ? 1.5 : 3.2 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] ${toneClasses.icon}`}
            >
              <Icon className="h-4 w-4" />
            </motion.span>

            <div className="min-w-0 flex-1">
              <h3
                className={`font-semibold tracking-normal text-[#171F35] ${
                  isTall
                    ? "text-[13px] leading-[1.12] sm:text-[14px]"
                    : "text-[11px] leading-[1.18] sm:text-[11.5px]"
                }`}
              >
                <span className="block whitespace-normal">{titleStart}</span>
                <span className="block whitespace-normal">{lastTitleWord}</span>
              </h3>

              <p
                className={`font-normal text-[#596378] ${
                  isTall
                    ? "mt-2 text-[11.5px] leading-5 sm:text-[12px]"
                    : "mt-1.5 text-[9.5px] leading-[1.35] sm:text-[10px]"
                }`}
              >
                {feature.description}
              </p>
            </div>
          </div>
        </div>

        <PaymentFeatureImageSpace
          src={feature.image}
          alt={`${feature.title} visual`}
          canvasSize={feature.canvasSize}
          tone={feature.tone}
          variant={isTall ? "tall" : "wide"}
          delay={0.34 + index * 0.12}
          featureType={feature.animationType}
          active={active}
          className={isTall ? "mt-5 flex-1" : "mt-3 sm:mt-0"}
        />
      </div>

      {active && (
        <motion.span
          aria-hidden="true"
          animate={{
            left: ["4%", "92%", "92%", "4%", "4%"],
            top: ["-5px", "-5px", "calc(100% - 5px)", "calc(100% - 5px)", "-5px"],
          }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`pointer-events-none absolute z-30 h-3 w-3 rounded-full border-2 border-white shadow-[0_0_18px_currentColor] ${
            feature.tone === "green"
              ? "bg-emerald-500 text-emerald-500"
              : feature.tone === "purple"
              ? "bg-violet-500 text-violet-500"
              : "bg-sky-500 text-sky-500"
          }`}
        />
      )}

      <motion.span
        initial={false}
        animate={{
          width: active ? "100%" : "0%",
          opacity: active ? 1 : 0,
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className={`absolute bottom-0 left-0 h-[3px] ${
          feature.tone === "green"
            ? "bg-gradient-to-r from-emerald-500 via-emerald-300 to-cyan-400"
            : feature.tone === "purple"
            ? "bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-400"
            : "bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400"
        }`}
      />
    </motion.article>
  );
}


function FeatureAutoVisual({
  type = "request",
  tone = "green",
  active = false,
}) {
  const reduceMotion = false; // Forced: keep feature animations running

  const intensity = active ? 1 : 0.86;

  const floatingParticles = (
    <>
      {[0, 1, 2].map((particle) => (
        <motion.span
          key={particle}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -8 - particle * 2, 0],
                  x: [0, particle % 2 === 0 ? 5 : -5, 0],
                  opacity: [0.25, 0.8, 0.25],
                  scale: [0.8, 1.15, 0.8],
                }
          }
          transition={{
            duration: 2.4 + particle * 0.35,
            delay: particle * 0.28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full ${
            tone === "green"
              ? "bg-emerald-400"
              : tone === "purple"
              ? "bg-violet-400"
              : "bg-sky-400"
          }`}
          style={{
            left: `${16 + particle * 32}%`,
            top: `${16 + (particle % 2) * 54}%`,
            width: 5 + particle,
            height: 5 + particle,
          }}
        />
      ))}
    </>
  );

  if (type === "link") {
    return (
      <div
        className="relative flex h-full w-full items-center justify-center px-5 pb-9 pt-4"
        style={{ opacity: intensity }}
      >
        {floatingParticles}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -4, 0],
                  rotate: [0, -1.5, 1.5, 0],
                }
          }
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 w-full max-w-[250px] rounded-[16px] border border-sky-200 bg-white p-3 shadow-[0_14px_28px_rgba(37,99,235,0.12)]"
        >
          <div className="flex items-center gap-2">
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.08, 1],
                    }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600"
            >
              <Link2 className="h-4 w-4" />
            </motion.span>

            <div className="min-w-0 flex-1">
              <p className="text-[8px] font-bold text-slate-400">
                Secure checkout link
              </p>
              <div className="mt-1 h-5 overflow-hidden rounded-md bg-sky-50 px-2">
                <motion.span
                  initial={{ width: 0 }}
                  animate={
                    reduceMotion
                      ? { width: "100%" }
                      : {
                          width: ["0%", "100%", "100%", "0%"],
                        }
                  }
                  transition={{
                    duration: 4.2,
                    times: [0, 0.35, 0.72, 1],
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="block overflow-hidden whitespace-nowrap text-[8px] font-extrabold leading-5 text-sky-600"
                >
                  pay.verticesuite.com/checkout/ORD-2451
                </motion.span>
              </div>
            </div>
          </div>

          <div className="relative mt-3 h-px bg-sky-200">
            {!reduceMotion && (
              <motion.span
                animate={{ left: ["0%", "94%", "0%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-white bg-sky-500 shadow-sm"
              />
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  if (type === "methods") {
    const methods = [
      ["UPI", Smartphone],
      ["Cards", CreditCard],
      ["Net Banking", Landmark],
      ["Wallets", WalletCards],
    ];

    return (
      <div
        className="relative flex h-full w-full items-center justify-center px-4 pb-9 pt-4"
        style={{ opacity: intensity }}
      >
        {floatingParticles}

        <div className="relative z-10 grid w-full max-w-[260px] grid-cols-2 gap-2.5">
          {methods.map(([label, Icon], index) => (
            <motion.div
              key={label}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -4, 0],
                      scale: [1, 1.045, 1],
                      boxShadow: [
                        "0 8px 18px rgba(15,23,42,0.05)",
                        "0 14px 28px rgba(16,185,129,0.18)",
                        "0 8px 18px rgba(15,23,42,0.05)",
                      ],
                    }
              }
              transition={{
                duration: 2.2,
                delay: index * 0.42,
                repeat: Infinity,
                repeatDelay: 0.35,
                ease: "easeInOut",
              }}
              className="rounded-[14px] border border-emerald-100 bg-white px-3 py-2.5 text-center"
            >
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate:
                          index === 1
                            ? [0, -7, 7, 0]
                            : [0, 0, 0],
                      scale: [1, 1.12, 1],
                    }
                }
                transition={{
                  duration: 1.8,
                  delay: index * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
              >
                <Icon className="h-4 w-4" />
              </motion.span>

              <p className="mt-1.5 text-[8px] font-extrabold text-[#344054]">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "reminder") {
    const reminders = [
      "Friendly reminder",
      "Payment still pending",
      "Final reminder",
    ];

    return (
      <div
        className="relative flex h-full w-full items-center justify-center px-5 pb-9 pt-4"
        style={{ opacity: intensity }}
      >
        {floatingParticles}

        <div className="relative z-10 w-full max-w-[260px] space-y-2">
          {reminders.map((label, index) => (
            <motion.div
              key={label}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: [0, index % 2 === 0 ? 6 : -6, 0],
                      opacity: [0.55, 1, 0.55],
                      scale: [0.97, 1.02, 0.97],
                    }
              }
              transition={{
                duration: 2.4,
                delay: index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center justify-between rounded-[13px] border border-violet-100 bg-white px-3 py-2 shadow-[0_8px_20px_rgba(124,58,237,0.08)]"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                <span className="text-[8px] font-extrabold text-[#475467]">
                  {label}
                </span>
              </div>

              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        rotate: [0, -12, 12, -8, 8, 0],
                    }
                }
                transition={{
                  duration: 1.4,
                  delay: index * 0.45,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                  ease: "easeInOut",
                }}
                className="text-violet-500"
              >
                <Bell className="h-3.5 w-3.5" />
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "receipt") {
    return (
      <div
        className="relative flex h-full w-full items-center justify-center px-5 pb-9 pt-4"
        style={{ opacity: intensity }}
      >
        {floatingParticles}

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [8, -2, 8],
                  rotate: [-1.5, 1.5, -1.5],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 w-full max-w-[230px] rounded-[15px] border border-sky-200 bg-white p-3 shadow-[0_16px_32px_rgba(37,99,235,0.12)]"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [0.85, 1.08, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: EASE,
            }}
            className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-emerald-500 text-white shadow-lg"
          >
            <CheckCircle2 className="h-4 w-4" />
          </motion.div>

          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-[8px] font-extrabold text-emerald-600">
              PAYMENT SUCCESSFUL
            </span>
            <ReceiptText className="h-4 w-4 text-sky-500" />
          </div>

          <div className="mt-2 space-y-1.5">
            {[
              ["Receipt", "#RCPT-8421"],
              ["Amount", "Rs. 2,450.00"],
              ["Status", "Paid"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between text-[8px]"
              >
                <span className="font-medium text-slate-400">{label}</span>
                <span className="font-extrabold text-[#344054]">{value}</span>
              </div>
            ))}
          </div>

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
            }
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-3 rounded-lg bg-[linear-gradient(90deg,#EAF4FF,#F0FFF5,#EAF4FF)] bg-[length:200%_100%] py-1.5 text-center text-[8px] font-extrabold text-sky-600"
          >
            Download Receipt
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-full w-full items-center justify-center px-5 pb-9 pt-4"
      style={{ opacity: intensity }}
    >
      {floatingParticles}

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.92 }}
        animate={{
          opacity: 1,
          y: [0, -4, 0],
          scale: active ? [1, 1.025, 1] : 1,
        }}
        transition={{
          opacity: { duration: 0.5, ease: EASE },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 2,
            repeat: active ? Infinity : 0,
            ease: "easeInOut",
          },
        }}
        className="relative z-10 w-full max-w-[230px] rounded-[16px] border border-emerald-200 bg-white p-3 shadow-[0_16px_34px_rgba(16,185,129,0.12)]"
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4 text-emerald-500" />
          <span className="text-[8px] font-extrabold text-[#344054]">
            Payment request
          </span>
        </div>

        <div className="mt-3 rounded-[12px] bg-[#F7FBF8] p-3">
          <p className="text-[8px] font-medium text-slate-400">Amount</p>
          <motion.p
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.07, 1],
                  }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-1 text-[17px] font-extrabold text-[#173527]"
          >
            Rs. 2,450.00
          </motion.p>
          <p className="mt-1 text-[8px] font-bold text-slate-400">
            Order #ORD-2451
          </p>
        </div>

        <motion.button
          type="button"
          animate={
            reduceMotion
              ? undefined
              : {
                  boxShadow: [
                    "0 8px 18px rgba(16,185,129,0.18)",
                    "0 14px 28px rgba(16,185,129,0.32)",
                    "0 8px 18px rgba(16,185,129,0.18)",
                  ],
                  scale: [1, 1.025, 1],
                }
          }
          transition={{
            duration: 1.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mt-3 h-8 w-full overflow-hidden rounded-[9px] bg-emerald-500 text-[9px] font-extrabold text-white"
        >
          {!reduceMotion && (
            <motion.span
              animate={{ x: ["-140%", "360%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 0.7,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            />
          )}
          <span className="relative z-10">Pay Now</span>
        </motion.button>
      </motion.div>
    </div>
  );
}

function PaymentFeatureImageSpace({
  src,
  alt,
  canvasSize,
  tone = "green",
  variant = "wide",
  delay = 0,
  featureType = "",
  active = false,
  className = "",
}) {
  const reduceMotion = false; // Forced: keep feature animations running

  const toneClasses =
    tone === "green"
      ? "border-[#B8E3C3] bg-[#F6FCF8] text-[#398D55]"
      : tone === "purple"
      ? "border-[#D9C9FA] bg-[#FAF8FF] text-[#7650C4]"
      : "border-[#BED7FA] bg-[#F7FAFF] text-[#4779B8]";

  const sizeClass =
    variant === "tall"
      ? "min-h-[130px] w-full"
      : variant === "workflow"
      ? "h-[88px] w-full"
      : "h-[82px] w-full sm:h-[90px]";
  const isWorkflow = variant === "workflow";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        opacity: {
          duration: 0.5,
          delay,
          ease: EASE,
        },
        scale: {
          duration: 0.5,
          delay,
          ease: EASE,
        },
        y: {
          duration: 0.5,
          delay,
          ease: EASE,
        },
      }}
      className={`${sizeClass} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      ) : (
        <div
          className={`relative h-full w-full overflow-hidden rounded-[18px] border border-dashed ${toneClasses}`}
        >
          <FeatureAutoVisual
            type={featureType}
            tone={tone}
            active={active}
          />

          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-center justify-between border-t border-white/75 bg-white/82 backdrop-blur-md ${
              isWorkflow ? "px-2 py-1" : "px-2.5 py-1.5"
            }`}
          >
            <span
              className={`font-extrabold uppercase tracking-[0.08em] opacity-70 ${
                isWorkflow ? "text-[6.5px]" : "text-[7px]"
              }`}
            >
              Image space
            </span>
            <span
              className={`font-extrabold opacity-80 ${
                isWorkflow ? "text-[6.5px]" : "text-[7px]"
              }`}
            >
              Canva: {canvasSize}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}




function HowCustomersCompletePaymentsSection() {
  return (
    <section className="relative overflow-x-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
      <div className="mx-auto w-full max-w-[1500px]">
        <motion.div
          {...businessApiHeadingProps}
          className="mx-auto max-w-[1180px] text-center"
        >
          <h2 className="mx-auto max-w-[1120px] text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.035em] text-[#111827]">
            How Customers Complete Payments on{" "}
            <span className="text-[#16A34A]">WhatsApp</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[1080px] text-center !text-[1rem] !leading-[1.7] text-[#5B667A] sm:!text-[1.08rem] lg:!text-[1.14rem]">
            Connect WhatsApp payments through UPI Intent or an integrated
            payment gateway, based on the payment methods and checkout
            experience your business wants to offer.
          </p>
        </motion.div>

        <div className="mx-auto mt-9 w-full max-w-[1400px] sm:mt-11">
          <img
            src={HOW_CUSTOMERS_COMPLETE_PAYMENTS_IMAGE}
            alt="How customers complete payments on WhatsApp"
            loading="lazy"
            className="block h-auto w-full object-contain"
          />
        </div>

        {/* High-volume payments banner — sits right under the journey image. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.72, delay: 0.18, ease: EASE }}
          className="relative mx-auto mt-10 w-full max-w-[1450px] overflow-hidden sm:mt-12"
        >
          <img
            src={PAYMENT_CONFIDENCE_BANNER_IMAGE}
            alt="Payment confidence dashboard banner"
            loading="lazy"
            className="block h-auto w-full border-0 object-contain shadow-none"
          />

          <div className="pointer-events-none absolute left-[38.5%] top-[19%] hidden max-w-[37%] lg:block">
            <h3 className="text-[clamp(1.05rem,1.55vw,1.9rem)] font-extrabold leading-[1.12] tracking-normal text-[#17251F]">
              Built for{" "}
              <span className="text-[#15975B]">
                High-Volume Public Payments
              </span>
            </h3>

            <p className="mt-[1.1vw] max-w-[740px] text-[clamp(0.54rem,0.78vw,0.94rem)] font-semibold leading-[1.55] text-[#233028]">
              Engineered to handle large scale transactions with speed,
              reliability and accuracy. Vertex Suite ensures secure payment
              processing, end-to-end visibility and compliance with government
              standards.
            </p>
          </div>

          <div className="pointer-events-none absolute bottom-[6.2%] left-[9.5%] right-[9.5%] hidden items-center justify-center gap-[2.1vw] lg:flex">
            {PAYMENT_CONFIDENCE_BANNER_CHIPS.map((chip) => {
              const Icon = chip.icon;

              return (
                <span
                  key={chip.label}
                  className="inline-flex min-w-[clamp(8.7rem,12vw,14.5rem)] items-center justify-center gap-[0.72vw] rounded-[0.7vw] bg-white/94 px-[1.35vw] py-[0.72vw] text-[clamp(0.62rem,0.78vw,0.95rem)] font-extrabold text-[#233028] shadow-[0_0.45vw_1.35vw_rgba(15,23,42,0.09)] ring-1 ring-[#DDEBE4]"
                >
                  <Icon
                    className="h-[clamp(0.95rem,1.14vw,1.35rem)] w-[clamp(0.95rem,1.14vw,1.35rem)] shrink-0 text-[#15975B]"
                    strokeWidth={2.4}
                  />
                  <span className="whitespace-nowrap">{chip.label}</span>
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const COMPLETE_PAYMENT_JOURNEY_FEATURES = [
  {
    key: "payment-request",
    number: "01",
    title: "Payment Requests in Chat",
    description:
      "Share payment requests directly within the customer conversation.",
    icon: MessageCircle,
    accent: "#16A34A",
    soft: "#ECFDF3",
    visualLabel: "Structured payment request",
    statusLabel: "Request sent",
    ctaLabel: "Pay Now",
  },
  {
    key: "order-details",
    number: "02",
    title: "Order Details Before Payment",
    description:
      "Let customers review items, quantities, pricing, and the total amount before proceeding.",
    icon: ReceiptText,
    accent: "#0EA5E9",
    soft: "#EFF8FF",
    visualLabel: "Order summary card",
    statusLabel: "Order reviewed",
    ctaLabel: "Review Order",
  },
  {
    key: "payment-links",
    number: "03",
    title: "Payment Links",
    description:
      "Send payment links that take customers directly to the required checkout step. Meta supports payment-link and enhanced payment-link flows.",
    icon: Link2,
    accent: "#2563EB",
    soft: "#EEF4FF",
    visualLabel: "Secure checkout link",
    statusLabel: "Link opened",
    ctaLabel: "Open Checkout",
  },
  {
    key: "reminders",
    number: "04",
    title: "Automated Payment Reminders",
    description:
      "Follow up on pending bills, incomplete payments, and upcoming dues automatically.",
    icon: Bell,
    accent: "#7C3AED",
    soft: "#F5F0FF",
    visualLabel: "Smart reminder message",
    statusLabel: "Reminder delivered",
    ctaLabel: "Complete Payment",
  },
  {
    key: "payment-methods",
    number: "05",
    title: "Flexible Payment Methods",
    description:
      "Support UPI apps and other payment methods available through the configured gateway and integration model.",
    icon: CreditCard,
    accent: "#0891B2",
    soft: "#ECFEFF",
    visualLabel: "UPI and gateway methods",
    statusLabel: "Method selected",
    ctaLabel: "Choose Method",
  },
  {
    key: "live-status",
    number: "06",
    title: "Live Transaction Status",
    description:
      "Keep customers informed while the transaction is being processed, pending, unsuccessful, or awaiting another attempt.",
    icon: Activity,
    accent: "#F59E0B",
    soft: "#FFFBEB",
    visualLabel: "Live transaction tracker",
    statusLabel: "Processing live",
    ctaLabel: "View Status",
  },
  {
    key: "confirmation-receipt",
    number: "07",
    title: "Payment Confirmation & Receipt",
    description:
      "Automatically share a final confirmation after successful payment, including the amount, transaction reference, receipt, and next order step.",
    icon: CheckCircle2,
    accent: "#10B981",
    soft: "#ECFDF5",
    visualLabel: "Confirmation and receipt",
    statusLabel: "Payment successful",
    ctaLabel: "View Receipt",
  },
  {
    key: "post-payment",
    number: "08",
    title: "Post-Payment Order Updates",
    description:
      "Automatically share order confirmation, fulfilment progress, and delivery updates after payment is completed.",
    icon: Workflow,
    accent: "#0284C7",
    soft: "#F0F9FF",
    visualLabel: "Order fulfilment timeline",
    statusLabel: "Order updated",
    ctaLabel: "Track Order",
  },
];


const PAYMENT_JOURNEY_VIDEO = "/assets/videos/payment.mp4";

function CompletePaymentJourneySection() {
  const [visibleFeatureCount, setVisibleFeatureCount] = useState(1);
  const reduceMotion = useClientReducedMotion();
  const isMobileLayout = useMobileBreakpoint();

  const firstColumnFeatures = COMPLETE_PAYMENT_JOURNEY_FEATURES.slice(0, 4);
  const secondColumnFeatures = COMPLETE_PAYMENT_JOURNEY_FEATURES.slice(4, 8);

  const renderFeatureColumn = (features) => (
    <div className="relative">
      {features.map((feature, columnIndex) => {
        const originalIndex = COMPLETE_PAYMENT_JOURNEY_FEATURES.findIndex(
          (item) => item.key === feature.key,
        );
        const hasNextFeature = columnIndex < features.length - 1;
        const nextFeatureVisible =
          hasNextFeature && originalIndex + 1 < visibleFeatureCount;

        return (
          <JourneyFeaturePoint
            key={feature.key}
            feature={feature}
            index={originalIndex}
            visible={isMobileLayout || originalIndex < visibleFeatureCount}
            showConnector={!isMobileLayout && hasNextFeature}
            connectorVisible={!isMobileLayout && nextFeatureVisible}
          />
        );
      })}
    </div>
  );

  return (
    <section className="relative bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-20">
      <div className="mx-auto w-full max-w-[1500px]">
        <motion.div
          {...businessApiHeadingProps}
          className="mx-auto max-w-[1180px] text-center"
        >
          <h2 className="mx-auto max-w-[1140px] text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.035em] text-[#111827]">
            The Complete Payment Journey on{" "}
            <span className="relative inline-block text-[#16A34A]">
              WhatsApp
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scaleX: [0, 1, 1, 0],
                        opacity: [0, 1, 1, 0],
                      }
                }
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-1 left-0 -z-10 h-[6px] w-full origin-left rounded-full bg-[#DDF8E7]"
              />
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[1080px] text-center !text-[1.06rem] !leading-[1.7] text-[#536077] sm:!text-[1.12rem] lg:!text-[1.16rem] xl:!text-[1.2rem]">
            From structured payment requests to follow-ups and confirmations,
            Vertex Suite connects every payment step into one seamless WhatsApp
            experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-9 grid items-start gap-8 lg:mt-11 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[330px_minmax(0,1fr)] xl:gap-14"
        >
          <div className="flex justify-center lg:sticky lg:top-24">
            <PaymentJourneyPhone
              reduceMotion={reduceMotion}
              onVisibleFeatureCountChange={setVisibleFeatureCount}
            />
          </div>

          <div className="grid gap-x-8 gap-y-2 max-md:gap-y-0 lg:grid-cols-2 xl:gap-x-12">
            {renderFeatureColumn(firstColumnFeatures)}
            {renderFeatureColumn(secondColumnFeatures)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function JourneyFeaturePoint({
  feature,
  index,
  visible,
  showConnector,
  connectorVisible,
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={false}
      animate={
        visible
          ? {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              x: index < 4 ? -24 : 24,
              y: 12,
              scale: 0.96,
            }
      }
      transition={{
        duration: 0.52,
        ease: EASE,
      }}
      aria-hidden={!visible}
      className={`relative grid w-full grid-cols-[46px_minmax(0,1fr)] items-start gap-x-3.5 py-4 text-left sm:grid-cols-[50px_minmax(0,1fr)] sm:gap-x-4 sm:py-5 ${
        visible ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {showConnector && (
        <motion.span
          aria-hidden="true"
          initial={false}
          animate={{
            scaleY: connectorVisible ? 1 : 0,
            opacity: connectorVisible ? 1 : 0,
          }}
          transition={{
            duration: 0.48,
            ease: EASE,
          }}
          className="pointer-events-none absolute bottom-[-36px] left-[20px] top-[56px] z-0 w-px origin-top overflow-hidden max-md:hidden sm:bottom-[-42px] sm:left-[22px] sm:top-[64px]"
        >
          <span
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(to bottom, ${feature.accent} 0 6px, transparent 6px 12px)`,
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.72) 78%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.72) 78%, transparent 100%)",
            }}
          />

          <motion.span
            initial={false}
            animate={
              connectorVisible
                ? {
                    y: ["-140%", "620%"],
                    opacity: [0, 0.55, 1, 0.55, 0],
                  }
                : {
                    y: "-140%",
                    opacity: 0,
                  }
            }
            transition={{
              duration: 1.7,
              repeat: connectorVisible ? Infinity : 0,
              repeatDelay: 0.25,
              ease: "linear",
            }}
            className="absolute left-1/2 top-0 h-9 w-px -translate-x-1/2 rounded-full"
            style={{
              background: `linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.5) 18%, #FFFFFF 42%, ${feature.accent} 64%, transparent 100%)`,
              boxShadow: `0 0 7px #FFFFFF, 0 0 12px ${feature.accent}, 0 0 20px ${feature.accent}`,
              filter: "brightness(1.25)",
            }}
          />
        </motion.span>
      )}

      <div className="relative z-10 flex items-start justify-center pt-0.5">
        <span
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border sm:h-11 sm:w-11"
          style={{
            color: "#FFFFFF",
            backgroundColor: `${feature.accent}D9`,
            borderColor: feature.accent,
            boxShadow: `0 8px 20px ${feature.accent}33`,
          }}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
        </span>
      </div>

      <div className="relative z-10 min-w-0">
        <h3 className="whitespace-normal !text-[19px] !font-semibold !leading-[1.3] text-[#1D2940] sm:!text-[20px] lg:!text-[20.5px]">
          {feature.title}
        </h3>

        <p className="mt-2 max-w-[560px] !text-[15px] !font-normal !leading-[1.6] text-[#5F6C82] sm:!text-[15.5px] lg:!text-[16px]">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

function PaymentJourneyPhone({
  reduceMotion,
  onVisibleFeatureCountChange,
}) {
  const handleVideoProgress = (event) => {
    const video = event.currentTarget;

    if (!Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    const progress = Math.min(
      Math.max(video.currentTime / video.duration, 0),
      0.999999,
    );

    const visibleCount = Math.min(
      Math.floor(
        progress * COMPLETE_PAYMENT_JOURNEY_FEATURES.length,
      ) + 1,
      COMPLETE_PAYMENT_JOURNEY_FEATURES.length,
    );

    onVisibleFeatureCountChange(visibleCount);
  };

  return (
    <motion.div
      animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-[330px] overflow-hidden sm:w-[375px] lg:w-[420px] xl:w-[465px]"
      style={{ aspectRatio: "3404 / 6600" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={handleVideoProgress}
        onTimeUpdate={handleVideoProgress}
        onSeeked={handleVideoProgress}
        onEnded={() => onVisibleFeatureCountChange(1)}
        aria-label="WhatsApp complete payment journey"
        className="absolute inset-0 h-full w-full object-fill drop-shadow-[0_24px_52px_rgba(7,27,58,0.18)]"
      >
        <source src={PAYMENT_JOURNEY_VIDEO} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
}

const BUSINESS_PAYMENT_INTELLIGENCE_FEATURES = [
  {
    number: "01",
    title: "AI-Guided Payment Conversations",
    description:
      "AI handles payment queries, guides customers, and escalates exceptions with context.",
    icon: Sparkles,
    accent: "#149A52",
    soft: "#EAF8EF",
  },
  {
    number: "02",
    title: "Payments from Chat, Campaigns & Workflows",
    description:
      "Launch payment requests from conversations, flows, campaigns, and triggered events.",
    icon: RadioTower,
    accent: "#149A52",
    soft: "#EAF8EF",
  },
  {
    number: "03",
    title: "Smart Follow-Ups for Incomplete Payments",
    description:
      "Detect pending or failed transactions and trigger personalised reminders automatically.",
    icon: TimerReset,
    accent: "#149A52",
    soft: "#EAF8EF",
  },
  {
    number: "04",
    title: "Customer-Level Payment Visibility",
    description:
      "View payment requests, transaction status, and history inside each customer profile.",
    icon: Smartphone,
    accent: "#0F8E67",
    soft: "#EAF8F3",
  },
  {
    number: "05",
    title: "Unified Payment Dashboard",
    description:
      "Monitor successful, pending, failed, and refunded transactions in one place.",
    icon: LayoutDashboard,
    accent: "#169B62",
    soft: "#EAF8EF",
  },
  {
    number: "06",
    title: "Connected Payment Operations",
    description:
      "Sync payment outcomes with orders, CRM, fulfilment, invoices, support, and workflows.",
    icon: Workflow,
    accent: "#149A52",
    soft: "#EAF8EF",
  },
];

const PAYMENT_INTELLIGENCE_METRICS = [
  {
    label: "Successful",
    value: "1,248",
    change: "+18.6% vs Apr",
    icon: CheckCircle2,
    accent: "#13A45A",
    soft: "#EAF8EF",
  },
  {
    label: "Pending",
    value: "256",
    change: "-8.3% vs Apr",
    icon: Clock3,
    accent: "#F4A629",
    soft: "#FFF7E8",
  },
  {
    label: "Failed",
    value: "87",
    change: "-12.4% vs Apr",
    icon: XCircle,
    accent: "#EF5963",
    soft: "#FFF0F1",
  },
  {
    label: "Refunded",
    value: "42",
    change: "-4.1% vs Apr",
    icon: RefreshCw,
    accent: "#2B78D4",
    soft: "#EDF5FF",
  },
];

const PAYMENT_INTELLIGENCE_TRANSACTIONS = [
  {
    customer: "Acme Corp",
    amount: "₹12,450",
    status: "Successful",
    channel: "WhatsApp",
    time: "09:48 AM",
  },
  {
    customer: "Globex Ltd.",
    amount: "₹8,950",
    status: "Pending",
    channel: "WhatsApp",
    time: "09:32 AM",
  },
  {
    customer: "Stark Industries",
    amount: "₹5,200",
    status: "Failed",
    channel: "WhatsApp",
    time: "Yesterday",
  },
  {
    customer: "Wayne Enterprises",
    amount: "₹18,750",
    status: "Successful",
    channel: "WhatsApp",
    time: "May 29",
  },
  {
    customer: "Initech",
    amount: "₹3,750",
    status: "Successful",
    channel: "WhatsApp",
    time: "May 29",
  },
];

const PAYMENT_INTELLIGENCE_STATUS_META = {
  Successful: {
    icon: CheckCircle2,
    className: "bg-[#EAF8EF] text-[#149A52]",
  },
  Pending: {
    icon: Clock3,
    className: "bg-[#FFF7E8] text-[#D38C16]",
  },
  Failed: {
    icon: XCircle,
    className: "bg-[#FFF0F1] text-[#D94D57]",
  },
  Refunded: {
    icon: RefreshCw,
    className: "bg-[#EDF5FF] text-[#2B78D4]",
  },
};

function BusinessPaymentIntelligenceSection() {
  const reduceMotion = useClientReducedMotion();
  const leftFeatures = BUSINESS_PAYMENT_INTELLIGENCE_FEATURES.slice(0, 3);
  const rightFeatures = BUSINESS_PAYMENT_INTELLIGENCE_FEATURES.slice(3, 6);

  const gridRef = useRef(null);
  const coreRef = useRef(null);
  const leftCardRefs = useRef([]);
  const rightCardRefs = useRef([]);
  const [connectors, setConnectors] = useState([]);

  useEffect(() => {
    let disposed = false;
    let frameOne;
    let frameTwo;

    const measure = () => {
      if (disposed) return;

      const grid = gridRef.current;
      const core = coreRef.current;

      if (!grid || !core || window.innerWidth < 1024) {
        setConnectors([]);
        return;
      }

      const gridRect = grid.getBoundingClientRect();
      const coreRect = core.getBoundingClientRect();
      const coreTop = coreRect.top - gridRect.top;
      const coreLeft = coreRect.left - gridRect.left;
      const coreRight = coreRect.right - gridRect.left;
      const targetRatios = [0.17, 0.5, 0.83];
      const nextConnectors = [];

      leftCardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const startX = cardRect.right - gridRect.left;
        const startY = cardRect.top - gridRect.top + cardRect.height / 2;
        const endX = coreLeft;
        const endY = coreTop + coreRect.height * targetRatios[index];
        const distance = Math.max(endX - startX, 64);
        const startStub = Math.min(28, distance * 0.24);
        const endStub = Math.min(24, distance * 0.2);

        nextConnectors.push({
          key: `left-${index}`,
          d: `M ${startX} ${startY} H ${startX + startStub} C ${
            startX + distance * 0.42
          } ${startY}, ${endX - distance * 0.4} ${endY}, ${
            endX - endStub
          } ${endY} H ${endX}`,
          startX,
          startY,
          endX,
          endY,
        });
      });

      rightCardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const startX = cardRect.left - gridRect.left;
        const startY = cardRect.top - gridRect.top + cardRect.height / 2;
        const endX = coreRight;
        const endY = coreTop + coreRect.height * targetRatios[index];
        const distance = Math.max(startX - endX, 64);
        const startStub = Math.min(28, distance * 0.24);
        const endStub = Math.min(24, distance * 0.2);

        nextConnectors.push({
          key: `right-${index}`,
          d: `M ${startX} ${startY} H ${startX - startStub} C ${
            startX - distance * 0.42
          } ${startY}, ${endX + distance * 0.4} ${endY}, ${
            endX + endStub
          } ${endY} H ${endX}`,
          startX,
          startY,
          endX,
          endY,
        });
      });

      setConnectors(nextConnectors);
    };

    const scheduleMeasure = () => {
      if (disposed) return;

      window.cancelAnimationFrame(frameOne);
      window.cancelAnimationFrame(frameTwo);
      frameOne = window.requestAnimationFrame(() => {
        frameTwo = window.requestAnimationFrame(measure);
      });
    };

    scheduleMeasure();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(scheduleMeasure)
        : null;

    [
      gridRef.current,
      coreRef.current,
      ...leftCardRefs.current,
      ...rightCardRefs.current,
    ].forEach((element) => {
      if (element && resizeObserver) resizeObserver.observe(element);
    });

    const settleTimers = [80, 200, 500, 900, 1400, 2200, 3200].map((delay) =>
      window.setTimeout(scheduleMeasure, delay),
    );

    document.fonts?.ready?.then(scheduleMeasure);
    window.addEventListener("load", scheduleMeasure);
    window.addEventListener("orientationchange", scheduleMeasure);
    window.addEventListener("resize", scheduleMeasure);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameOne);
      window.cancelAnimationFrame(frameTwo);
      settleTimers.forEach((timer) => window.clearTimeout(timer));
      resizeObserver?.disconnect();
      window.removeEventListener("load", scheduleMeasure);
      window.removeEventListener("orientationchange", scheduleMeasure);
      window.removeEventListener("resize", scheduleMeasure);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24 xl:px-10">
      <div className="pointer-events-none absolute left-1/2 top-[54%] h-[560px] w-[1120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(222,247,231,0.62)_0%,rgba(245,252,248,0.28)_44%,transparent_74%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1740px]">
        <motion.div
          {...businessApiHeadingProps}
          className="mx-auto max-w-[1220px] text-center"
        >
          <h2 className="mx-auto max-w-[1180px] text-[clamp(2.35rem,5.35vw,4.55rem)] font-bold leading-[1.08] tracking-normal text-[#111827]">
            Bring Intelligence and Control to{" "}
            <span className="relative inline-block text-[#16A34A]">
              Business Payments
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scaleX: [0, 1, 1, 0],
                        opacity: [0, 1, 1, 0],
                      }
                }
                transition={{
                  duration: 4.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-1 left-0 -z-10 h-[7px] w-full origin-left rounded-full bg-[#DDF8E7]"
              />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.2rem] leading-[1.7] text-[#5B667A] xl:!text-[1.3rem] max-md:!text-[1.05rem]">
            Gain clearer payment visibility, stronger recovery, and greater
            control over every transaction.
          </p>
        </motion.div>

        <div
          ref={gridRef}
          className="relative mx-auto mt-12 grid w-full items-center gap-8 lg:mt-14 lg:grid-cols-[245px_minmax(0,1fr)_245px] lg:gap-x-14 xl:grid-cols-[255px_minmax(0,1fr)_255px] xl:gap-x-20 2xl:gap-x-24"
        >
          <svg
            className="pointer-events-none absolute inset-0 z-30 hidden h-full w-full overflow-visible lg:block"
            aria-hidden="true"
          >
            <defs>
              <filter
                id="paymentConnectorGlow"
                x="-35%"
                y="-35%"
                width="170%"
                height="170%"
              >
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {connectors.map((connector, index) => (
              <g key={connector.key}>
                <path
                  d={connector.d}
                  fill="none"
                  stroke="#8ED9A9"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.16"
                  filter="url(#paymentConnectorGlow)"
                />

                <motion.path
                  d={connector.d}
                  fill="none"
                  stroke="#22A95C"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  animate={
                    reduceMotion
                      ? { opacity: 1 }
                      : { opacity: [0.45, 1, 0.45] }
                  }
                  transition={{
                    pathLength: {
                      duration: 0.9,
                      delay: 0.34 + index * 0.1,
                      ease: EASE,
                    },
                    opacity: {
                      duration: 1.5,
                      delay: index * 0.12,
                      repeat: reduceMotion ? 0 : Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />

                {["start", "end"].map((point, pointIndex) => {
                  const cx =
                    point === "start" ? connector.startX : connector.endX;
                  const cy =
                    point === "start" ? connector.startY : connector.endY;

                  return (
                    <g key={`${connector.key}-${point}`}>
                      {!reduceMotion && (
                        <motion.circle
                          cx={cx}
                          cy={cy}
                          fill="none"
                          stroke="#22C55E"
                          strokeWidth="1.4"
                          initial={{ r: 5, opacity: 0.42 }}
                          animate={{
                            r: [5, 10, 5],
                            opacity: [0.42, 0, 0.42],
                          }}
                          transition={{
                            duration: 1.65,
                            delay: index * 0.12 + pointIndex * 0.16,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      )}

                      <motion.circle
                        cx={cx}
                        cy={cy}
                        fill="#18B55B"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        initial={{ r: 0, opacity: 0 }}
                        whileInView={{ r: 5, opacity: 1 }}
                        viewport={{ once: true }}
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                r: [5, 5.8, 5],
                                opacity: [0.8, 1, 0.8],
                              }
                        }
                        transition={{
                          r: {
                            duration: 1.2,
                            delay: index * 0.1 + pointIndex * 0.12,
                            repeat: reduceMotion ? 0 : Infinity,
                            ease: "easeInOut",
                          },
                          opacity: {
                            duration: 1.2,
                            delay: index * 0.1 + pointIndex * 0.12,
                            repeat: reduceMotion ? 0 : Infinity,
                            ease: "easeInOut",
                          },
                        }}
                      />
                    </g>
                  );
                })}
              </g>
            ))}
          </svg>

          <div className="relative z-20 flex h-full w-full flex-col items-center justify-between gap-6 py-2 max-md:hidden lg:items-end lg:gap-8">
            {leftFeatures.map((feature, index) => (
              <PaymentIntelligenceLane
                key={feature.number}
                feature={feature}
                index={index}
                side="left"
                cardRef={(node) => {
                  leftCardRefs.current[index] = node;
                }}
              />
            ))}
          </div>

          <PaymentIntelligenceCore coreRef={coreRef} reduceMotion={reduceMotion} />

          <div className="relative z-20 flex h-full w-full flex-col items-center justify-between gap-6 py-2 max-md:hidden lg:items-start lg:gap-8">
            {rightFeatures.map((feature, index) => (
              <PaymentIntelligenceLane
                key={feature.number}
                feature={feature}
                index={index}
                side="right"
                cardRef={(node) => {
                  rightCardRefs.current[index] = node;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PaymentIntelligenceLane({ feature, index, side, cardRef }) {
  const isLeft = side === "left";
  const sequenceIndex = Number(feature.number) - 1;

  return (
    <article
      ref={cardRef}
      className="relative z-20 h-[112px] w-full max-w-[200px] shrink-0"
    >
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -42 : 42,
          y: 14,
          scale: 0.94,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{
          duration: 0.62,
          delay: 0.14 + sequenceIndex * 0.2,
          ease: EASE,
        }}
        whileHover={{ y: -4, scale: 1.012 }}
        className="relative flex h-full w-full items-center overflow-hidden rounded-[16px] border border-[#DDE8E2] bg-white px-3.5 py-3 text-left shadow-[0_12px_30px_rgba(31,63,45,0.075)]"
      >
        <div
          className="pointer-events-none absolute -left-7 -top-8 h-24 w-24 rounded-full blur-2xl"
          style={{ backgroundColor: `${feature.accent}10` }}
        />

        <div className="relative z-10 min-w-0 flex-1">
          <div className="flex items-start gap-2">
            <span
              className="mt-[1px] flex h-[18px] min-w-[18px] items-center justify-center rounded-[5px] text-[9px] font-black text-white"
              style={{ backgroundColor: feature.accent }}
            >
              {Number(feature.number)}
            </span>

            <h3 className="!text-[14.5px] !font-extrabold !leading-[1.25] tracking-[-0.01em] text-[#1C2B25] xl:!text-[15px]">
              {feature.title}
            </h3>
          </div>
        </div>
      </motion.div>
    </article>
  );
}

function PaymentIntelligenceCore({ coreRef, reduceMotion }) {
  return (
    <div
      ref={coreRef}
      className="relative z-20 mx-auto w-full max-w-[980px] self-center py-4 max-md:py-0 lg:max-w-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.78, delay: 0.14, ease: EASE }}
        className="relative mx-auto w-full"
      >
        <div className="pointer-events-none absolute left-1/2 top-[48%] h-[430px] w-[880px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-emerald-200/45 max-md:hidden" />

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative mx-auto w-full"
        >
          <div className="relative mx-auto w-full overflow-hidden rounded-[24px] border border-[#E3ECE7] bg-white shadow-[0_24px_48px_rgba(31,64,45,0.12),0_0_0_1px_rgba(81,113,94,0.08)]">
          <div className="relative grid min-h-[410px] grid-cols-[56px_minmax(0,1fr)] bg-[#FCFEFD] sm:min-h-[450px] sm:grid-cols-[64px_minmax(0,1fr)] xl:min-h-[490px]">
            <aside className="flex flex-col items-center bg-[#006C38] py-3 text-white sm:py-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18B55B] text-white shadow-[0_7px_16px_rgba(0,0,0,0.18)]">
                <FaWhatsapp className="h-6 w-6" />
              </span>

              <div className="mt-6 flex flex-1 flex-col items-center gap-4 sm:gap-5">
                {[LayoutDashboard, ReceiptText, BarChart3, Smartphone, Settings].map(
                  (Icon, iconIndex) => (
                    <span
                      key={iconIndex}
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                        iconIndex === 0
                          ? "bg-white/18 text-white"
                          : "text-white/74"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  ),
                )}
              </div>
            </aside>

            <div className="min-w-0 p-4 sm:p-5 xl:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[16px] font-extrabold text-[#17251F] sm:text-[18px]">
                    Payments Overview
                  </h3>
                </div>

                <span className="rounded-md border border-[#E6ECE8] bg-white px-2.5 py-1 text-[9px] font-semibold text-[#6D7B74] shadow-sm sm:text-[10px]">
                  May 1 - May 31, 2026
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
                {PAYMENT_INTELLIGENCE_METRICS.map((metric, index) => {
                  const Icon = metric.icon;

                  return (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 12, scale: 0.94 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.38 + index * 0.07,
                        ease: EASE,
                      }}
                      className="rounded-[14px] border border-[#EDF1F5] bg-white p-[13px] shadow-[0_5px_14px_rgba(35,72,50,0.045)]"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="order-2 flex h-7 w-7 items-center justify-center rounded-full sm:h-8 sm:w-8"
                          style={{
                            backgroundColor: metric.soft,
                            color: metric.accent,
                          }}
                        >
                          <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2.2} />
                        </span>

                        <span className="order-1 truncate !text-[16px] !font-normal text-[#5B667A]">
                          {metric.label}
                        </span>
                      </div>

                      <p className="!mb-0 !mt-1 !text-[22px] !font-extrabold leading-none text-black">
                        {metric.value}
                      </p>

                      <p
                        className="!mb-0 !mt-1 !text-[15px] !font-bold leading-tight text-[#16A34A]"
                      >
                        {metric.change}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1.08fr]">
                <div className="rounded-[10px] border border-[#E8EEEA] bg-white p-2.5 shadow-[0_5px_14px_rgba(35,72,50,0.045)] sm:p-3">
                  <div className="flex items-center">
                    <h4 className="whitespace-nowrap text-[10px] font-extrabold text-[#25332C] sm:text-[11px]">
                      Payments Over Time
                    </h4>
                  </div>

                  <PaymentIntelligenceChart reduceMotion={reduceMotion} />
                </div>

                <div className="overflow-hidden rounded-[10px] border border-[#E8EEEA] bg-white shadow-[0_5px_14px_rgba(35,72,50,0.045)]">
                  <div className="flex items-center justify-between border-b border-[#EDF1EF] px-2.5 py-2 sm:px-3">
                    <h4 className="text-[10px] font-extrabold text-[#25332C] sm:text-[11px]">
                      Recent Transactions
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[8.5px] font-bold text-[#18A657] sm:text-[10px]">
                      View all
                      <ArrowUpRight className="h-3 w-3" strokeWidth={2.3} />
                    </span>
                  </div>

                  <div className="overflow-hidden">
                    <table className="w-full table-fixed border-collapse">
                      <colgroup>
                        <col className="w-[27%]" />
                        <col className="w-[18%]" />
                        <col className="w-[22%]" />
                        <col className="w-[17%]" />
                        <col className="w-[16%]" />
                      </colgroup>
                      <thead>
                        <tr className="bg-[#FBFCFB] text-left">
                          {["Customer", "Amount", "Status", "Channel", "Time"].map(
                            (heading) => (
                              <th
                                key={heading}
                                className="truncate px-1.5 py-2 text-[7.5px] font-bold text-[#8A9690] sm:px-2 sm:text-[8.5px]"
                              >
                                {heading}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>

                      <tbody>
                        {PAYMENT_INTELLIGENCE_TRANSACTIONS.map((transaction) => {
                          const statusMeta =
                            PAYMENT_INTELLIGENCE_STATUS_META[transaction.status] ??
                            PAYMENT_INTELLIGENCE_STATUS_META.Pending;
                          const StatusIcon = statusMeta.icon;

                          return (
                            <tr
                              key={`${transaction.customer}-${transaction.time}`}
                              className="border-t border-[#F0F3F1]"
                            >
                              <td className="truncate px-1.5 py-2 text-[7.5px] font-semibold text-[#4C5952] sm:px-2 sm:text-[8.5px]">
                                {transaction.customer}
                              </td>
                              <td className="truncate px-1.5 py-2 text-[7.5px] font-bold text-[#26342D] sm:px-2 sm:text-[8.5px]">
                                {transaction.amount}
                              </td>
                              <td className="px-1.5 py-2 sm:px-2">
                                <span
                                  className={`inline-flex max-w-full items-center gap-1 rounded-full px-1.5 py-1 text-[7px] font-bold sm:px-2 sm:text-[8px] ${statusMeta.className}`}
                                >
                                  <StatusIcon className="h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" strokeWidth={2.4} />
                                  <span className="truncate">{transaction.status}</span>
                                </span>
                              </td>
                              <td className="px-1.5 py-2 sm:px-2">
                                <span className="inline-flex max-w-full items-center gap-1 text-[7.5px] font-semibold text-[#4C5952] sm:text-[8.5px]">
                                  <FaWhatsapp className="h-3 w-3 shrink-0 text-[#18A657] sm:h-3.5 sm:w-3.5" />
                                  <span className="truncate">{transaction.channel}</span>
                                </span>
                              </td>
                              <td className="truncate px-1.5 py-2 text-[7.5px] font-medium text-[#8A9690] sm:px-2 sm:text-[8.5px]">
                                {transaction.time}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      </motion.div>
    </div>
  );
}

function PaymentIntelligenceChart({ reduceMotion }) {
  const chartPath =
    "M 28 134 C 46 112, 60 104, 78 96 C 96 88, 110 76, 128 70 C 146 64, 160 66, 178 70 C 196 74, 212 78, 228 72 C 244 66, 256 50, 276 30";
  const areaPath = `${chartPath} L 276 148 L 28 148 Z`;
  const markers = [
    { x: 42, y: 117 },
    { x: 93, y: 89 },
    { x: 156, y: 66 },
    { x: 225, y: 73 },
    { x: 258, y: 43 },
  ];
  const gridLines = [28, 58, 88, 118, 148];
  const labels = ["125K", "100K", "75K", "50K", "25K"];

  return (
    <svg
      viewBox="0 0 292 164"
      className="mt-2 h-[146px] w-full overflow-visible sm:h-[168px] xl:h-[182px]"
      role="img"
      aria-label="Payment performance chart"
    >
      <defs>
        <linearGradient id="paymentAreaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4E9D8E" stopOpacity="0.28" />
          <stop offset="72%" stopColor="#4E9D8E" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#4E9D8E" stopOpacity="0" />
        </linearGradient>
        <filter id="paymentLineGlow" x="-20%" y="-30%" width="140%" height="160%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {gridLines.map((y, index) => (
        <g key={y}>
          <line
            x1="28"
            x2="278"
            y1={y}
            y2={y}
            stroke="#DCE8E4"
            strokeWidth="1"
            strokeDasharray="2.5 4"
          />
          <text
            x="0"
            y={y + 3}
            fill="#64748B"
            fontSize="8.5"
            fontWeight="600"
          >
            {labels[index]}
          </text>
        </g>
      ))}

      <motion.path
        d={areaPath}
        fill="url(#paymentAreaGradient)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.36, ease: EASE }}
      />

      <motion.path
        d={chartPath}
        fill="none"
        stroke="#438C80"
        strokeWidth="2.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.35, delay: 0.3, ease: EASE }}
      />

      {markers.map((point, index) => (
        <motion.circle
          key={`${point.x}-${point.y}`}
          cx={point.x}
          cy={point.y}
          r="3.8"
          fill="#FFFFFF"
          stroke="#438C80"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={
            reduceMotion
              ? undefined
              : {
                  r: [3.8, 4.4, 3.8],
                }
          }
          transition={{
            opacity: { duration: 0.35, delay: 0.72 + index * 0.1 },
            scale: { duration: 0.35, delay: 0.72 + index * 0.1 },
            r: {
              duration: 1.8,
              delay: index * 0.18,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {["May 1", "May 8", "May 15", "May 22", "May 31"].map(
        (label, index) => (
          <text
            key={label}
            x={28 + index * 62.5}
            y="161"
            textAnchor={index === 0 ? "start" : index === 4 ? "end" : "middle"}
            fill="#94A3B8"
            fontSize="7"
            fontWeight="600"
          >
            {label}
          </text>
        ),
      )}
    </svg>
  );
}

const PAYMENT_CONFIDENCE_FEATURES = [
  {
    number: "01",
    title: "Verified Business Communication",
    description:
      "Customers can recognize that payment requests are coming from an official business account.",
    icon: ShieldCheck,
    accent: "#169B62",
    soft: "#EDF9F3",
    status: "Business verified",
  },
  {
    number: "02",
    title: "Gateway-Connected Processing",
    description:
      "Payments are processed through configured payment gateways while transaction updates remain connected to the WhatsApp journey.",
    icon: Landmark,
    accent: "#2874E8",
    soft: "#EDF4FF",
    status: "Gateway connected",
  },
  {
    number: "03",
    title: "Real-Time Status Tracking",
    description:
      "Track successful, pending, failed, and refunded transactions without relying on manual confirmation.",
    icon: Activity,
    accent: "#169B62",
    soft: "#EDF9F3",
    status: "Status tracked",
  },
  {
    number: "04",
    title: "Role-Based Access",
    description:
      "Control which team members can view transactions, manage payment activity, or handle customer conversations.",
    icon: LockKeyhole,
    accent: "#2874E8",
    soft: "#EDF4FF",
    status: "Access controlled",
  },
  {
    number: "05",
    title: "Complete Transaction Records",
    description:
      "Maintain payment status, customer details, order references, and follow-up history in one connected record.",
    icon: ReceiptText,
    accent: "#169B62",
    soft: "#EDF9F3",
    status: "Record maintained",
  },
  {
    number: "06",
    title: "Instant Customer Confirmation",
    description:
      "Keep customers informed with clear payment acknowledgements and transaction-status updates.",
    icon: Send,
    accent: "#2874E8",
    soft: "#EDF4FF",
    status: "Customer informed",
  },
];

const PAYMENT_CONFIDENCE_BANNER_IMAGE = "/assets/images/banner.webp";

const PAYMENT_CONFIDENCE_BANNER_CHIPS = [
  {
    label: "Scalable & Reliable",
    icon: BarChart3,
  },
  {
    label: "Secure Transactions",
    icon: ShieldCheck,
  },
  {
    label: "End-to-End Visibility",
    icon: Activity,
  },
  {
    label: "Govt. Compliant",
    icon: Landmark,
  },
  {
    label: "Real-time Insights",
    icon: TrendingUp,
  },
];

function PaymentsBuiltForConfidenceSection() {
  const reduceMotion = useClientReducedMotion();
  const [activeFeature, setActiveFeature] = useState(0);
  const [mobileScrollIndex, setMobileScrollIndex] = useState(0);
  const confidenceScrollerRef = useRef(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveFeature(
        (current) => (current + 1) % PAYMENT_CONFIDENCE_FEATURES.length,
      );
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  const scrollToConfidenceCard = (nextIndex) => {
    const boundedIndex =
      (nextIndex + PAYMENT_CONFIDENCE_FEATURES.length) %
      PAYMENT_CONFIDENCE_FEATURES.length;
    const scroller = confidenceScrollerRef.current;
    const targetCard = scroller?.children?.[boundedIndex];

    setActiveFeature(boundedIndex);
    setMobileScrollIndex(boundedIndex);
    targetCard?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const moveConfidenceCard = (direction) => {
    scrollToConfidenceCard(mobileScrollIndex + direction);
  };

  const handleConfidenceScroll = () => {
    const scroller = confidenceScrollerRef.current;

    if (!scroller || window.innerWidth >= 768) return;

    const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    Array.from(scroller.children).forEach((child, index) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const distance = Math.abs(childCenter - scrollerCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveFeature(nearestIndex);
    setMobileScrollIndex(nearestIndex);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#FBFCFE] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_7%,rgba(219,238,255,0.72),transparent_34%),radial-gradient(circle_at_8%_76%,rgba(224,248,233,0.6),transparent_30%),radial-gradient(circle_at_92%_74%,rgba(224,246,255,0.58),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.34] [background-image:linear-gradient(rgba(66,91,123,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(66,91,123,0.045)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        <motion.div
          {...businessApiHeadingProps}
          className="mx-auto max-w-[1220px] text-center"
        >
          <h2 className="mx-auto max-w-[1140px] text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.035em] text-[#111827]">
            Payments Built for{" "}
            <span className="relative inline-block text-[#16A34A]">
              Confidence
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scaleX: [0, 1, 1, 0],
                        opacity: [0, 1, 1, 0],
                      }
                }
                transition={{
                  duration: 4.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-1 left-0 -z-10 h-[7px] w-full origin-left rounded-full bg-[#DDF8E7]"
              />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[1220px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
            Keep every payment journey secure, transparent, and traceable from
            the initial request to final confirmation and business reconciliation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.78, delay: 0.12, ease: EASE }}
          className="relative mx-auto mt-12 max-w-[1450px] sm:mt-14"
        >
          <div className="pointer-events-none absolute inset-x-0 top-[44%] z-40 flex -translate-y-1/2 items-center justify-between px-0 md:hidden">
            <button
              type="button"
              aria-label="Previous confidence card"
              onClick={() => moveConfidenceCard(-1)}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-white/95 text-[#169B62] shadow-[0_12px_28px_rgba(15,23,42,0.14)] backdrop-blur"
            >
              <ArrowRight className="h-5 w-5 rotate-180" strokeWidth={2.4} />
            </button>

            <button
              type="button"
              aria-label="Next confidence card"
              onClick={() => moveConfidenceCard(1)}
              className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-white/95 text-[#169B62] shadow-[0_12px_28px_rgba(15,23,42,0.14)] backdrop-blur"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2.4} />
            </button>
          </div>

          <div
            ref={confidenceScrollerRef}
            onScroll={handleConfidenceScroll}
            className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-5 pt-3 [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-6 [&::-webkit-scrollbar]:hidden"
          >
            {PAYMENT_CONFIDENCE_FEATURES.map((feature, index) => (
              <PaymentConfidencePremiumCard
                key={feature.number}
                feature={feature}
                index={index}
                active={activeFeature === index}
                reduceMotion={reduceMotion}
                onActivate={() => {
                  setActiveFeature(index);
                  setMobileScrollIndex(index);
                }}
              />
            ))}
          </div>

          <div className="mt-1 flex items-center justify-center gap-2 md:hidden">
            {PAYMENT_CONFIDENCE_FEATURES.map((feature, index) => (
              <button
                key={feature.number}
                type="button"
                aria-label={`Show confidence card ${index + 1}`}
                onClick={() => scrollToConfidenceCard(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  mobileScrollIndex === index
                    ? "w-7 bg-[#169B62]"
                    : "w-2 bg-[#C8D8CE]"
                }`}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function PaymentConfidencePremiumCard({
  feature,
  index,
  active,
  reduceMotion,
  onActivate,
}) {
  const Icon = feature.icon;

  return (
    <motion.button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      animate={{
        y: active ? -9 : 0,
        scale: active ? 1.018 : 1,
      }}
      transition={{
        opacity: { duration: 0.5, delay: 0.12 + index * 0.07, ease: EASE },
        y: { duration: 0.38, ease: EASE },
        scale: { duration: 0.38, ease: EASE },
      }}
      className="group relative min-h-[338px] w-[315px] shrink-0 snap-center pt-[42px] text-center max-sm:w-[calc(100vw-48px)] sm:w-[360px] lg:min-h-[350px] lg:w-auto"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[55px] z-20 hidden h-3 w-3 -translate-x-1/2 rounded-full border-[3px] border-[#FBFCFE] shadow-[0_3px_12px_rgba(15,23,42,0.18)] lg:block"
        style={{ backgroundColor: feature.accent }}
      />

      <div
        className="relative flex h-full flex-col overflow-hidden rounded-[24px] border bg-white px-5 pb-5 pt-[54px] transition duration-300 lg:px-6"
        style={{
          borderColor: active ? `${feature.accent}4D` : "#E5EAF1",
          boxShadow: active
            ? `0 28px 64px ${feature.accent}20, 0 0 0 1px ${feature.accent}12`
            : "0 16px 42px rgba(15,23,42,0.075)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[92px] opacity-80"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${feature.accent}18 0%, transparent 72%)`,
          }}
        />

        <span
          className="absolute right-5 top-4 text-[18px] font-black leading-none tracking-normal sm:text-[20px]"
          style={{ color: `${feature.accent}B8` }}
        >
          {feature.number}
        </span>

        <div
          className="absolute inset-x-0 bottom-0 h-[5px]"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${feature.accent} 24%, ${feature.accent} 76%, transparent 100%)`,
          }}
        />

        <div className="relative z-10 flex flex-1 flex-col">
          <h3
            className={`mx-auto mt-1 min-h-[44px] max-w-[320px] !font-extrabold !leading-[1.2] tracking-[-0.02em] text-[#182238] ${
              feature.number === "01"
                ? "whitespace-nowrap !text-[16px] sm:!text-[18px] lg:!text-[20px] xl:!text-[21px]"
                : "!text-[21px] lg:!text-[20px] xl:!text-[21px]"
            }`}
          >
            {feature.title}
          </h3>

          <p className="mx-auto mt-4 max-w-[350px] !text-[16px] !font-normal !leading-[1.58] text-[#59667A] lg:!text-[15px] xl:!text-[16px]">
            {feature.description}
          </p>

          <div className="mt-auto pt-3">
            <motion.span
              animate={
                active && !reduceMotion
                  ? { width: [34, 52, 34], opacity: [0.45, 1, 0.45] }
                  : undefined
              }
              transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto block h-[3px] rounded-full"
              style={{ width: 34, backgroundColor: feature.accent }}
            />
          </div>
        </div>
      </div>

      <motion.div
        animate={
          active && !reduceMotion
            ? {
                y: [0, -5, 0],
                rotate: [0, -1.5, 1.5, 0],
              }
            : undefined
        }
        transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 z-30 h-[88px] w-[88px] -translate-x-1/2"
      >
        <span
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(50% 0%,91% 24%,91% 76%,50% 100%,9% 76%,9% 24%)",
            backgroundColor: feature.soft,
            border: `1px solid ${feature.accent}32`,
          }}
        />

        <span
          className="absolute inset-[7px]"
          style={{
            clipPath:
              "polygon(50% 0%,91% 24%,91% 76%,50% 100%,9% 76%,9% 24%)",
            background: `linear-gradient(145deg,#FFFFFF 18%,${feature.soft} 100%)`,
            border: `1px solid ${feature.accent}24`,
          }}
        />

        <motion.span
          animate={
            active && !reduceMotion
              ? {
                  scale: [1, 1.07, 1],
                  boxShadow: [
                    `0 14px 32px ${feature.accent}1A`,
                    `0 20px 44px ${feature.accent}36`,
                    `0 14px 32px ${feature.accent}1A`,
                  ],
                }
              : undefined
          }
          transition={{ duration: 1.65, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[17px] flex items-center justify-center bg-white"
          style={{
            clipPath:
              "polygon(50% 0%,91% 24%,91% 76%,50% 100%,9% 76%,9% 24%)",
            color: feature.accent,
            boxShadow: `0 14px 32px ${feature.accent}1A`,
          }}
        >
          <Icon className="h-7 w-7" strokeWidth={1.75} />
        </motion.span>
      </motion.div>
    </motion.button>
  );
}

function KeyBusinessBenefitsSection() {
  // Temporary Unsplash visuals. Replace each URL with your final Canva PNG/JPG.
  // Recommended Canva size per benefit image: 1600 × 1000 px.
  const benefits = [
    {
      number: "01",
      title: "Higher Completion Rates",
      description:
        "Customers can move from conversation to payment without unnecessary app switching, helping reduce drop-offs and complete more transactions.",
      icon: TrendingUp,
      image: "/assets/optimized/pay-step-1.jpg",
      imageAlt: "Customer completing a digital checkout",
      label: "Less payment drop-off",
      shortLabel: "Complete in chat",
      accent: "#22C55E",
      accentSoft: "rgba(34,197,94,0.14)",
      gradient: "from-emerald-500/90 via-emerald-500/34 to-transparent",
    },
    {
      number: "02",
      title: "Faster Order-to-Payment Cycle",
      description:
        "Confirm the order, share a payment request, collect the payment, and continue the conversation within the same WhatsApp thread.",
      icon: TimerReset,
      image: "/assets/optimized/pay-step-2.jpg",
      imageAlt: "Fast mobile payment and checkout",
      label: "Faster collection",
      shortLabel: "Request to receipt",
      accent: "#3B82F6",
      accentSoft: "rgba(59,130,246,0.14)",
      gradient: "from-sky-500/90 via-sky-500/34 to-transparent",
    },
    {
      number: "03",
      title: "Built-In Trust & Security",
      description:
        "Use a familiar WhatsApp experience with clear payment details, supported integrations, and secure confirmation steps that build customer confidence.",
      icon: LockKeyhole,
      image: "/assets/optimized/pay-step-3.jpg",
      imageAlt: "Secure digital payment experience",
      label: "Trusted experience",
      shortLabel: "Secure by design",
      accent: "#8B5CF6",
      accentSoft: "rgba(139,92,246,0.14)",
      gradient: "from-violet-500/90 via-violet-500/34 to-transparent",
    },
    {
      number: "04",
      title: "Real-Time Payment Confirmation",
      description:
        "Keep customers updated with transaction status, payment confirmations, receipts, and order progress directly inside the conversation.",
      icon: RadioTower,
      image: "/assets/optimized/pay-step-4.jpg",
      imageAlt: "Real-time transaction updates and analytics",
      label: "Live status visibility",
      shortLabel: "Instant updates",
      accent: "#0EA5E9",
      accentSoft: "rgba(14,165,233,0.14)",
      gradient: "from-cyan-500/90 via-cyan-500/34 to-transparent",
    },
  ];

  const [activeBenefit, setActiveBenefit] = useState(0);

  // Forced automatic highlighting - runs continuously regardless of
  // reduced-motion preferences, as requested for this visual section.
  useEffect(() => {
    setActiveBenefit(0);

    const timer = window.setInterval(() => {
      setActiveBenefit((current) => (current + 1) % benefits.length);
    }, 2200);

    const preloadTimer = window.setTimeout(() => {
      benefits.slice(1).forEach((benefit) => {
        const image = new Image();
        image.src = benefit.image;
      });
    }, 1400);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(preloadTimer);
    };
  }, [benefits.length]);

  const active = benefits[activeBenefit];
  const ActiveIcon = active.icon;

  return (
    <section className="relative isolate overflow-hidden bg-white px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:pt-20 xl:px-20">
      <div className="pointer-events-none absolute -left-52 top-16 h-[500px] w-[500px] rounded-full bg-emerald-100/55 blur-[135px]" />
      <div className="pointer-events-none absolute -right-52 bottom-0 h-[520px] w-[520px] rounded-full bg-violet-100/45 blur-[145px]" />

      {[0, 1, 2, 3].map((particle) => (
        <motion.span
          key={particle}
          animate={{
            y: [0, -18 - particle * 3, 0],
            x: [0, particle % 2 === 0 ? 10 : -10, 0],
            opacity: [0.22, 0.78, 0.22],
            scale: [0.75, 1.18, 0.75],
          }}
          transition={{
            duration: 4.4 + particle * 0.55,
            delay: particle * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute rounded-full bg-emerald-400/55 shadow-[0_0_24px_rgba(34,197,94,0.34)]"
          style={{
            left: `${7 + particle * 28}%`,
            top: `${22 + (particle % 2) * 56}%`,
            width: `${6 + particle}px`,
            height: `${6 + particle}px`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.68, ease: EASE }}
          className="max-w-[980px]"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F0FAF3] px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#2B9C52]">
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#2B9C52] shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />

              <motion.span
                animate={{
                  scale: [0.8, 1.75],
                  opacity: [0.65, 0],
                }}
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full border border-emerald-300"
              />
            </span>
            BUSINESS IMPACT
          </div>

          <h2 className="text-[25px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#111827] sm:text-[30px] lg:text-[36px]">
            Key Business Benefits of <AnimatedWhatsAppPayWord />
          </h2>

          <p className="mt-2.5 max-w-[760px] text-[12px] font-medium leading-5 text-[#566176] sm:text-[13px]">
            Turn payment conversations into faster collections, trusted
            experiences, real-time visibility, and connected business
            workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.14 }}
          transition={{ duration: 0.82, delay: 0.12, ease: EASE }}
          className="relative mt-5 overflow-hidden rounded-[28px] border border-slate-200/80 bg-[linear-gradient(145deg,#F8FBFF_0%,#FFFFFF_48%,#F3FFF7_100%)] p-2.5 shadow-[0_28px_70px_rgba(15,23,42,0.10)] sm:p-3 lg:mt-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.74),transparent_42%,rgba(236,253,245,0.58))]" />

          <div className="relative z-10 mb-3 grid gap-2 md:grid-cols-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const isActive = activeBenefit === index;

              return (
                <motion.button
                  key={`rail-${benefit.number}`}
                  type="button"
                  onClick={() => setActiveBenefit(index)}
                  animate={{
                    y: isActive ? -4 : 0,
                    scale: isActive ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className={`relative overflow-hidden rounded-[15px] border px-2.5 py-2 text-left transition-colors duration-300 ${
                    isActive
                      ? "border-emerald-200 bg-white text-[#14204B] shadow-[0_14px_30px_rgba(16,185,129,0.13)]"
                      : "border-slate-200/75 bg-white/80 text-slate-500 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: isActive
                          ? benefit.accent
                          : benefit.accentSoft,
                        color: isActive ? "#FFFFFF" : benefit.accent,
                      }}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>

                    <span className="text-[9px] font-black tracking-[0.14em] opacity-70">
                      {benefit.number}
                    </span>
                  </div>

                  <p className="mt-1.5 line-clamp-1 text-[9px] font-semibold leading-tight">
                    {benefit.shortLabel}
                  </p>

                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      animate={{ width: isActive ? "100%" : "34%" }}
                      transition={{ duration: 0.55, ease: EASE }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: benefit.accent }}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="relative z-10 grid gap-2.5 lg:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.96fr)]">
            {/* Unique automatic benefit navigator */}
            <div className="relative grid gap-2.5 lg:grid-rows-5">
              <div className="pointer-events-none absolute bottom-10 left-[30px] top-10 hidden w-px bg-gradient-to-b from-emerald-300/70 via-sky-300/70 via-violet-300/70 to-teal-300/70 sm:block" />

              <motion.span
                animate={{
                  top: `${activeBenefit * 20 + 10}%`,
                }}
                transition={{ duration: 0.52, ease: EASE }}
                className="pointer-events-none absolute left-[24px] z-30 hidden h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#25D366] shadow-[0_0_22px_rgba(37,211,102,0.78)] sm:block"
              />

              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isActive = activeBenefit === index;

                return (
                  <motion.button
                    key={benefit.number}
                    type="button"
                    onMouseEnter={() => setActiveBenefit(index)}
                    onFocus={() => setActiveBenefit(index)}
                    onClick={() => setActiveBenefit(index)}
                    initial={{
                      opacity: 0,
                      x: -28,
                      scale: 0.94,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    animate={{
                      x: isActive ? 8 : 0,
                      scale: isActive ? 1.018 : 1,
                      rotateZ: isActive ? 0.25 : 0,
                    }}
                    transition={{
                      opacity: {
                        duration: 0.5,
                        delay: 0.22 + index * 0.1,
                        ease: EASE,
                      },
                      x: { duration: 0.42, ease: EASE },
                      scale: { duration: 0.42, ease: EASE },
                      rotateZ: { duration: 0.42, ease: EASE },
                    }}
                    className={`group relative grid min-h-[76px] grid-cols-[38px_minmax(0,1fr)_22px] items-center gap-2 overflow-hidden rounded-[15px] border px-2.5 py-2 text-left transition-colors duration-300 ${
                      isActive
                        ? "border-emerald-300/70 bg-white shadow-[0_20px_44px_rgba(16,185,129,0.17)]"
                        : "border-white/10 bg-white/[0.92] shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                    }`}
                  >
                    {isActive && (
                      <>
                        <motion.span
                          animate={{
                            opacity: [0.18, 0.66, 0.18],
                            scale: [0.97, 1.035, 0.97],
                          }}
                          transition={{
                            duration: 1.45,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="pointer-events-none absolute inset-0 bg-emerald-200/34 blur-xl"
                        />

                        <motion.span
                          animate={{ x: ["-150%", "480%"] }}
                          transition={{
                            duration: 1.45,
                            repeat: Infinity,
                            repeatDelay: 0.25,
                            ease: "easeInOut",
                          }}
                          className="pointer-events-none absolute inset-y-0 left-0 w-[17%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/90 to-transparent"
                        />
                      </>
                    )}

                    <motion.span
                      animate={
                        isActive
                          ? {
                              y: [0, -5, 0],
                              rotate: [0, -6, 6, 0],
                              scale: [1, 1.12, 1],
                              boxShadow: [
                                `0 0 0 ${benefit.accentSoft}`,
                                `0 0 26px ${benefit.accentSoft}`,
                                `0 0 0 ${benefit.accentSoft}`,
                              ],
                            }
                          : {
                              y: [0, -2, 0],
                            }
                      }
                      transition={{
                        duration: isActive ? 1.35 : 3.1 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative z-10 flex h-9 w-9 items-center justify-center rounded-[12px]"
                      style={{
                        backgroundColor: isActive
                          ? benefit.accent
                          : benefit.accentSoft,
                        color: isActive ? "#FFFFFF" : benefit.accent,
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.span>

                    <div className="relative z-10 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[8px] font-black tracking-[0.12em]"
                          style={{ color: benefit.accent }}
                        >
                          BENEFIT {benefit.number}
                        </span>

                        <span className="h-px flex-1 bg-slate-100" />
                      </div>

                      <h3 className="mt-1 text-[10px] font-extrabold leading-[1.25] text-[#14204B] sm:text-[11px]">
                        {benefit.title}
                      </h3>

                      <p className="mt-0.5 line-clamp-2 text-[7.5px] font-medium leading-[1.35] text-slate-500 sm:text-[8px]">
                        {benefit.description}
                      </p>
                    </div>

                    <motion.span
                      animate={{
                        opacity: isActive ? 1 : 0.3,
                        x: isActive ? [0, 4, 0] : 0,
                      }}
                      transition={{
                        x: {
                          duration: 1.1,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                        },
                      }}
                      className="relative z-10"
                      style={{ color: benefit.accent }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>

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
                        background: `linear-gradient(90deg, ${benefit.accent}, #25D366, #38BDF8)`,
                      }}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Large outcome visual */}
            <div className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-[#071B4D] lg:min-h-[430px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.imageAlt}
                  loading="lazy"
                  initial={{
                    opacity: 0,
                    scale: 1.01,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: [1.01, 1.045, 1.01],
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.01,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    opacity: { duration: 0.55, ease: EASE },
                    filter: { duration: 0.55, ease: EASE },
                    scale: {
                      duration: 5.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3.5 sm:p-4">
                <motion.div
                  key={`benefit-icon-${activeBenefit}`}
                  initial={{ opacity: 0, scale: 0.62, rotate: -18 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.46, ease: EASE }}
                  className="flex items-center gap-3"
                >
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/18 text-white backdrop-blur-md">
                    <motion.span
                      animate={{
                        scale: [0.72, 1.55],
                        opacity: [0.72, 0],
                      }}
                      transition={{
                        duration: 1.45,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 rounded-xl border"
                      style={{ borderColor: active.accent }}
                    />

                    <motion.span
                      animate={{
                        y: [0, -4, 0],
                        rotate: [0, -6, 6, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.45,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ActiveIcon className="h-4 w-4" />
                    </motion.span>
                  </span>

                  <div>
                    <p className="text-[8px] font-extrabold uppercase tracking-[0.14em] text-white/65">
                      Active Business Benefit
                    </p>
                    <p className="mt-0.5 text-xs font-extrabold text-white">
                      {active.number} / 05
                    </p>
                  </div>
                </motion.div>

                <div className="hidden flex-col items-end gap-2 sm:flex">
                  <span className="rounded-full border border-white/25 bg-white/14 px-2.5 py-1 text-[8px] font-extrabold text-white backdrop-blur-md">
                    Canva image: 1600 × 1000 px
                  </span>

                  <motion.span
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(255,255,255,0)",
                        "0 0 0 6px rgba(255,255,255,0.10)",
                        "0 0 0 0 rgba(255,255,255,0)",
                      ],
                    }}
                    transition={{
                      duration: 1.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-full bg-white/[0.92] px-2.5 py-1 text-[8px] font-extrabold"
                    style={{ color: active.accent }}
                  >
                    {active.label}
                  </motion.span>
                </div>
              </div>

              {/* Floating outcome chips */}
              <motion.div
                key={`chip-one-${activeBenefit}`}
                initial={{ opacity: 0, x: 24, y: 12, scale: 0.82 }}
                animate={{
                  opacity: 1,
                  x: [0, 6, 0],
                  y: [0, -5, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: { duration: 0.42, delay: 0.16, ease: EASE },
                  scale: { duration: 0.42, delay: 0.16, ease: EASE },
                  x: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  y: {
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="absolute right-4 top-[35%] hidden items-center gap-2 rounded-[13px] border border-white/35 bg-white/88 px-2.5 py-2 shadow-[0_16px_34px_rgba(7,27,77,0.18)] backdrop-blur-md sm:flex"
              >
                <Gauge className="h-4 w-4" style={{ color: active.accent }} />
                <span className="text-[10px] font-extrabold text-[#14204B]">
                  {active.shortLabel}
                </span>
              </motion.div>

              <motion.div
                key={`chip-two-${activeBenefit}`}
                initial={{ opacity: 0, x: -24, y: 12, scale: 0.82 }}
                animate={{
                  opacity: 1,
                  x: [0, -5, 0],
                  y: [0, 5, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: { duration: 0.42, delay: 0.28, ease: EASE },
                  scale: { duration: 0.42, delay: 0.28, ease: EASE },
                  x: {
                    duration: 2.7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="absolute left-4 top-[49%] hidden items-center gap-2 rounded-[13px] border border-white/35 bg-white/88 px-2.5 py-2 shadow-[0_16px_34px_rgba(7,27,77,0.18)] backdrop-blur-md sm:flex"
              >
                <CheckCircle2
                  className="h-4 w-4"
                  style={{ color: active.accent }}
                />
                <span className="text-[10px] font-extrabold text-[#14204B]">
                  Business-ready outcome
                </span>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 38, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className="absolute inset-x-0 bottom-0 p-4 sm:p-5"
                >
                  <span
                    className="inline-flex rounded-full px-2.5 py-1 text-[9px] font-extrabold text-white shadow-lg"
                    style={{ backgroundColor: active.accent }}
                  >
                    BUSINESS BENEFIT {active.number}
                  </span>

                  <h3 className="mt-2.5 max-w-[580px] text-[19px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-[24px]">
                    {active.title}
                  </h3>

                  <p className="mt-1.5 max-w-[600px] text-[10.5px] font-medium leading-5 text-white sm:text-[11.5px]">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-5 right-5 hidden items-end gap-2 sm:flex">
                {benefits.map((benefit, index) => (
                  <motion.button
                    key={benefit.number}
                    type="button"
                    onClick={() => setActiveBenefit(index)}
                    animate={{
                      width: activeBenefit === index ? 34 : 9,
                      opacity: activeBenefit === index ? 1 : 0.46,
                    }}
                    transition={{ duration: 0.38, ease: EASE }}
                    className="h-2 rounded-full bg-white"
                    aria-label={`Open business benefit ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


function WhatsAppPaymentDashboardSection() {
  const sectionRef = useRef(null);
  const reduceMotion = useClientReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const metrics = [
    {
      label: "Total Collections",
      value: 484240,
      prefix: "Rs. ",
      change: "+12.8%",
      tone: "green",
      series: [18, 24, 21, 32, 29, 41, 36, 48, 44, 57],
      icon: CircleDollarSign,
    },
    {
      label: "Success Rate",
      value: 88.6,
      suffix: "%",
      decimals: 1,
      change: "+4.3%",
      tone: "green",
      icon: CheckCircle2,
      ring: true,
    },
    {
      label: "Pending Amount",
      value: 48950,
      prefix: "Rs. ",
      change: "-8.4%",
      tone: "amber",
      series: [42, 38, 41, 32, 35, 27, 31, 24, 21, 18],
      icon: Clock3,
    },
  ];

  const transactions = [
    {
      id: "PAY-42891",
      customer: "Riya Sharma",
      amount: "Rs. 2,499",
      method: "UPI",
      status: "Successful",
      time: "11:42 AM",
    },
    {
      id: "PAY-42890",
      customer: "Aman Verma",
      amount: "Rs. 1,250",
      method: "Card",
      status: "Successful",
      time: "11:18 AM",
    },
    {
      id: "PAY-42889",
      customer: "Neha Kapoor",
      amount: "Rs. 4,820",
      method: "Net Banking",
      status: "Pending",
      time: "10:54 AM",
    },
    {
      id: "PAY-42888",
      customer: "Kunal Mehta",
      amount: "Rs. 899",
      method: "UPI",
      status: "Successful",
      time: "10:31 AM",
    },
  ];

  const features = [
    {
      title: "Send Pay Requests",
      description:
        "Create and share requests inside WhatsApp.",
      icon: Send,
      tone: "blue",
    },
    {
      title: "Track Collections",
      description:
        "Monitor successful, pending and failed payments.",
      icon: BarChart3,
      tone: "blue",
    },
    {
      title: "Auto Reminders",
      description:
        "Send timely nudges for pending payments.",
      icon: Bell,
      tone: "blue",
    },
    {
      title: "Verify Payments",
      description:
        "Confirm status and validate receipts faster.",
      icon: ShieldCheck,
      tone: "green",
    },
    {
      title: "Sync Orders & CRM",
      description:
        "Update orders, invoices and CRM records.",
      icon: Workflow,
      tone: "blue",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setActiveFeature(0);
    const timer = window.setInterval(() => {
      setActiveFeature((current) => (current + 1) % features.length);
    }, 1250);

    return () => window.clearInterval(timer);
  }, [features.length]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#F8FBFF_0%,#F5FAFF_52%,#F7FFF9_100%)] px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pt-24 xl:px-20"
    >
      <div className="pointer-events-none absolute -left-44 top-24 h-[470px] w-[470px] rounded-full bg-sky-100/75 blur-[120px]" />
      <div className="pointer-events-none absolute -right-44 bottom-0 h-[480px] w-[480px] rounded-full bg-emerald-100/60 blur-[125px]" />
      <div className="pointer-events-none absolute left-1/2 top-[62%] h-[330px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          {...businessApiHeadingProps}
          className="mx-auto max-w-[1200px] text-center"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-[#F3FBF6] px-3 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#3DAA61]">
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-[#E6F8EC]">
              <LayoutDashboard className="h-3.5 w-3.5 text-[#3DAA61]" />
              <motion.span
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.8],
                        opacity: [0.75, 0],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full border border-[#9BE6B2]"
              />
            </span>

            LIVE PAYMENT OPERATIONS
          </div>

          <h2 className="mx-auto mb-6 max-w-[1120px] text-center text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
            <span className="block">Manage Every Payment Journey from</span>
            <span className="mt-1 block">
              <AnimatedDashboardWord />
            </span>
          </h2>

          <p className="max-w-3xl text-sm font-medium leading-7 text-slate-500 sm:text-base">
            Track WhatsApp payment requests, collection status, customer
            transactions and automated follow-ups from one connected Vertex
            Suite dashboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ duration: 0.85, delay: 0.12, ease: EASE }}
          className="relative mt-8 overflow-hidden rounded-[26px] border border-white bg-white/70 p-2 shadow-[0_38px_110px_rgba(15,23,42,0.13)] backdrop-blur-xl sm:rounded-[34px] sm:p-4 lg:mt-12"
        >
          <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[34px]">
            {!reduceMotion && (
              <motion.div
                animate={{ x: ["-180%", "540%"] }}
                transition={{
                  duration: 7,
                  delay: 1.4,
                  repeat: Infinity,
                  repeatDelay: 1.4,
                  ease: "easeInOut",
                }}
                className="absolute top-[-20%] h-[140%] w-[14%] rotate-[12deg] bg-gradient-to-r from-transparent via-white/65 to-transparent"
              />
            )}
          </div>

          <div className="relative z-10 grid overflow-hidden rounded-[22px] border border-slate-200/80 bg-white sm:rounded-[28px] lg:grid-cols-[76px_minmax(0,1fr)]">
            <aside className="hidden flex-col items-center bg-[#102354] py-5 text-white lg:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-[#102354] shadow-[0_10px_24px_rgba(52,211,153,0.25)]">
                <span className="text-sm font-black">V</span>
              </div>

              <div className="mt-8 flex flex-1 flex-col items-center gap-3">
                {[
                  LayoutDashboard,
                  CircleDollarSign,
                  ReceiptText,
                  BarChart3,
                  RefreshCw,
                  Settings,
                ].map((Icon, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    aria-label={`Dashboard navigation ${index + 1}`}
                    whileHover={{ scale: 1.08 }}
                    className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition ${
                      index === 0
                        ? "bg-white/14 text-emerald-300"
                        : "text-white/55 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {index === 0 && (
                      <motion.span
                        animate={
                          reduceMotion
                            ? undefined
                            : { opacity: [0.55, 1, 0.55] }
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -left-4 h-6 w-1 rounded-r-full bg-emerald-400"
                      />
                    )}
                    <Icon className="h-4 w-4" />
                  </motion.button>
                ))}
              </div>

              <button
                type="button"
                aria-label="Notifications"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/65"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-[#102354] bg-emerald-400" />
              </button>
            </aside>

            <div className="grid min-w-0 items-stretch lg:h-[760px] lg:grid-cols-[minmax(0,1.48fr)_minmax(320px,0.82fr)] xl:h-[720px]">
              <div className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden border-b border-slate-200/80 p-3 sm:p-4 lg:border-b-0 lg:border-r">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[16px] font-extrabold leading-tight text-[#14204B]">
                        Payments Dashboard
                      </h3>

                      <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-extrabold text-emerald-600">
                        <motion.span
                          animate={
                            reduceMotion
                              ? undefined
                              : { opacity: [0.35, 1, 0.35] }
                          }
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="h-2 w-2 rounded-full bg-emerald-400"
                        />
                        LIVE
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-medium text-slate-400">
                      WhatsApp payment collections and transaction activity
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      className="flex h-9 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-bold text-slate-500 shadow-sm"
                    >
                      Last 30 days
                    </button>

                    <button
                      type="button"
                      className="flex h-9 items-center gap-2 rounded-xl bg-emerald-500 px-3 text-[10px] font-extrabold text-white shadow-[0_10px_22px_rgba(16,185,129,0.23)]"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      Export
                    </button>
                  </div>
                </div>

                <div className="mt-3 grid shrink-0 gap-3 sm:grid-cols-3">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    const isGreen = metric.tone === "green";

                    return (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 18, scale: 0.94 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.55,
                          delay: 0.28 + index * 0.1,
                          ease: EASE,
                        }}
                        whileHover={{ y: -4, scale: 1.015 }}
                        className="relative overflow-hidden rounded-2xl border border-slate-200/75 bg-[#FBFDFF] p-3 shadow-[0_10px_28px_rgba(15,23,42,0.05)]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-slate-400">
                            {metric.label}
                          </span>

                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-xl ${
                              isGreen
                                ? "bg-emerald-50 text-emerald-500"
                                : "bg-amber-50 text-amber-500"
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                        </div>

                        <div className="mt-2 flex items-end justify-between gap-2">
                          <p className="text-xl font-extrabold tracking-[-0.04em] text-[#14204B]">
                            <PaymentDashboardCounter
                              value={metric.value}
                              prefix={metric.prefix || ""}
                              suffix={metric.suffix || ""}
                              decimals={metric.decimals || 0}
                              active={isVisible}
                            />
                          </p>

                          <span
                            className={`rounded-full px-2 py-1 text-[8px] font-extrabold ${
                              isGreen
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-amber-50 text-amber-600"
                            }`}
                          >
                            {metric.change}
                          </span>
                        </div>

                        {metric.ring ? (
                          <div className="mt-3 flex items-center justify-center">
                            <motion.div
                              initial={{ rotate: -120, scale: 0.8, opacity: 0 }}
                              whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                delay: 0.58,
                                ease: EASE,
                              }}
                              className="relative h-12 w-12 rounded-full bg-[conic-gradient(#22C55E_0deg_319deg,#E7EEF5_319deg_360deg)]"
                            >
                              <div className="absolute inset-[7px] rounded-full bg-white" />
                            </motion.div>
                          </div>
                        ) : (
                          <DashboardSparkline
                            values={metric.series}
                            tone={metric.tone}
                            delay={0.52 + index * 0.1}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-3 grid shrink-0 gap-3 xl:grid-cols-[0.95fr_1.05fr]">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.62, ease: EASE }}
                    className="relative overflow-hidden rounded-[18px] border border-slate-200/80 bg-white p-3 shadow-[0_10px_28px_rgba(15,23,42,0.045)]"
                  >
                    <motion.span
                      animate={{ x: ["-140%", "240%"] }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-emerald-100/45 to-transparent"
                    />

                    <h4 className="text-[12px] font-extrabold text-[#14204B]">
                      Payment Status
                    </h4>

                    <div className="mt-4 flex items-center gap-5">
                      <motion.div
                        initial={{ rotate: -100, scale: 0.78, opacity: 0 }}
                        whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85, delay: 0.76, ease: EASE }}
                        className="relative h-[90px] w-[90px] shrink-0 rounded-full bg-[conic-gradient(#21B65A_0deg_304deg,#F6C453_304deg_343deg,#F26A6A_343deg_360deg)] shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                      >
                        <motion.span
                          animate={{
                            rotate: 360,
                            opacity: [0.25, 0.7, 0.25],
                          }}
                          transition={{
                            rotate: {
                              duration: 4.4,
                              repeat: Infinity,
                              ease: "linear",
                            },
                            opacity: {
                              duration: 1.4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                          }}
                          className="absolute -inset-1 rounded-full border border-dashed border-emerald-300/70"
                        />

                        <div className="absolute inset-[15px] flex flex-col items-center justify-center rounded-full bg-white">
                          <motion.span
                            animate={{ scale: [1, 1.06, 1] }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="text-lg font-extrabold text-[#14204B]"
                          >
                            1,268
                          </motion.span>
                          <span className="text-[8px] font-bold text-slate-400">
                            Payments
                          </span>
                        </div>
                      </motion.div>

                      <div className="min-w-0 flex-1 space-y-3">
                        {[
                          ["Successful", "84.6%", "#21B65A"],
                          ["Pending", "10.8%", "#F6C453"],
                          ["Failed", "4.6%", "#F26A6A"],
                        ].map(([label, value, color], index) => (
                          <motion.div
                            key={label}
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.86 + index * 0.1,
                              ease: EASE,
                            }}
                            className="space-y-1.5"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span className="flex items-center gap-2 text-[9px] font-bold text-slate-500">
                                <motion.span
                                  animate={{ scale: [1, 1.35, 1] }}
                                  transition={{
                                    duration: 1.2,
                                    delay: index * 0.18,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                  className="h-2.5 w-2.5 rounded-full"
                                  style={{ backgroundColor: color }}
                                />
                                {label}
                              </span>
                              <span className="text-[9px] font-extrabold text-[#14204B]">
                                {value}
                              </span>
                            </div>
                            <div className="h-1 overflow-hidden rounded-full bg-slate-100">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: value }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.9,
                                  delay: 1 + index * 0.12,
                                  ease: EASE,
                                }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.72, ease: EASE }}
                    className="rounded-[20px] border border-slate-200/80 bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.045)]"
                  >
                    <h4 className="text-[12px] font-extrabold text-[#14204B]">
                      Payment Breakdown
                    </h4>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {[
                        ["Payment Requests", "1,268", Link2, "text-sky-500"],
                        ["Confirmed Payments", "1,124", CheckCircle2, "text-emerald-500"],
                        ["Pending Payments", "98", Clock3, "text-amber-500"],
                        ["Failed / Refunded", "46", XCircle, "text-rose-500"],
                      ].map(([label, value, Icon, colorClass], index) => (
                        <motion.div
                          key={label}
                          initial={{ opacity: 0, y: 12, scale: 0.94 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true }}
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 0.45,
                            delay: 0.86 + index * 0.08,
                            ease: EASE,
                          }}
                          style={{
                            animationDelay: `${index * 0.18}s`,
                          }}
                          whileHover={{ y: -3 }}
                          className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50/70 p-2.5"
                        >
                          <motion.span
                            animate={{ x: ["-120%", "220%"] }}
                            transition={{
                              duration: 2.8,
                              delay: index * 0.22,
                              repeat: Infinity,
                              repeatDelay: 1.4,
                              ease: "easeInOut",
                            }}
                            className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/85 to-transparent"
                          />
                          <motion.span
                            animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.08, 1] }}
                            transition={{
                              duration: 1.8,
                              delay: index * 0.16,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="relative z-10 inline-flex"
                          >
                            <Icon className={`h-4 w-4 ${colorClass}`} />
                          </motion.span>
                          <motion.p
                            animate={{ scale: [1, 1.04, 1] }}
                            transition={{
                              duration: 1.9,
                              delay: index * 0.14,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="relative z-10 mt-2 text-lg font-extrabold text-[#14204B]"
                          >
                            {value}
                          </motion.p>
                          <p className="relative z-10 mt-1 text-[8px] font-bold text-slate-400">
                            {label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.82, ease: EASE }}
                  className="relative mt-3 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[18px] border border-slate-200/80 bg-white"
                >
                  {!reduceMotion && (
                    <motion.div
                      animate={{ top: ["-20%", "110%"] }}
                      transition={{
                        duration: 5.5,
                        delay: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="pointer-events-none absolute left-0 z-20 h-16 w-full bg-gradient-to-b from-transparent via-emerald-100/35 to-transparent"
                    />
                  )}

                  <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-4 py-2.5">
                    <div>
                      <h4 className="text-[12px] font-extrabold text-[#14204B]">
                        Recent Transactions
                      </h4>
                      <p className="mt-0.5 text-[8px] font-medium text-slate-400">
                        Latest payments received through WhatsApp
                      </p>
                    </div>

                    <button
                      type="button"
                      className="flex items-center gap-1 text-[9px] font-extrabold text-sky-600"
                    >
                      View all
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>

                  <div className="min-h-0 flex-1 overflow-x-auto overflow-y-hidden">
                    <table className="w-full min-w-[620px] border-collapse">
                      <thead>
                        <tr className="bg-slate-50/80 text-left">
                          {[
                            "Payment ID",
                            "Customer",
                            "Amount",
                            "Method",
                            "Status",
                            "Time",
                            "",
                          ].map((heading) => (
                            <th
                              key={heading}
                              className="px-3 py-2.5 text-[8px] font-extrabold uppercase tracking-[0.07em] text-slate-400"
                            >
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {transactions.slice(0, 3).map((transaction, index) => (
                          <motion.tr
                            key={transaction.id}
                            initial={{ opacity: 0, x: -14 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            animate={{
                              backgroundColor: [
                                "rgba(255,255,255,0)",
                                "rgba(236,253,245,0.52)",
                                "rgba(255,255,255,0)",
                              ],
                            }}
                            transition={{
                              opacity: {
                                duration: 0.45,
                                delay: 0.96 + index * 0.09,
                                ease: EASE,
                              },
                              x: {
                                duration: 0.45,
                                delay: 0.96 + index * 0.09,
                                ease: EASE,
                              },
                              backgroundColor: {
                                duration: 2.2,
                                delay: index * 0.45,
                                repeat: Infinity,
                                repeatDelay: 2.2,
                                ease: "easeInOut",
                              },
                            }}
                            className="border-t border-slate-100"
                          >
                            <td className="px-3 py-2.5 text-[9px] font-extrabold text-sky-600">
                              {transaction.id}
                            </td>
                            <td className="px-3 py-2.5 text-[9px] font-bold text-slate-600">
                              {transaction.customer}
                            </td>
                            <td className="px-3 py-2.5 text-[9px] font-extrabold text-[#14204B]">
                              {transaction.amount}
                            </td>
                            <td className="px-3 py-2.5 text-[9px] font-medium text-slate-500">
                              {transaction.method}
                            </td>
                            <td className="px-3 py-2.5">
                              <PaymentDashboardStatus
                                status={transaction.status}
                              />
                            </td>
                            <td className="px-3 py-2.5 text-[9px] font-medium text-slate-400">
                              {transaction.time}
                            </td>
                            <td className="px-3 py-2.5 text-right">
                              <MoreHorizontal className="h-4 w-4 text-slate-400" />
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.02, ease: EASE }}
                  className="mt-3 shrink-0 rounded-[18px] border border-slate-200/80 bg-white p-3"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[12px] font-extrabold text-[#14204B]">
                      Payment Activity
                    </h4>
                    <motion.span
                      animate={{
                        y: [0, -6, 0],
                        rotate: [0, 12, -10, 0],
                        scale: [1, 1.12, 1],
                      }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="inline-flex"
                    >
                      <Activity className="h-4 w-4 text-sky-500" />
                    </motion.span>
                  </div>

                  <div className="mt-2.5 grid grid-cols-3 gap-2.5">
                    {[
                      ["Successful", "1,124", "+12.4%", "emerald"],
                      ["Pending", "98", "-8.4%", "amber"],
                      ["Failed / Refunded", "46", "+1.8%", "rose"],
                    ].map(([label, value, change, tone], index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 12, scale: 0.94 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          delay: 1.1 + index * 0.1,
                          ease: EASE,
                        }}
                        whileHover={{ y: -3 }}
                        className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 text-center"
                      >
                        <motion.span
                          animate={{ y: ["120%", "-120%"] }}
                          transition={{
                            duration: 2.6,
                            delay: index * 0.3,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            ease: "easeInOut",
                          }}
                          className="pointer-events-none absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-white/80 to-transparent"
                        />
                        <p className="relative z-10 text-[8px] font-bold text-slate-400">
                          {label}
                        </p>
                        <motion.p
                          animate={{ scale: [1, 1.06, 1] }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.16,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="relative z-10 mt-1 text-base font-extrabold text-[#14204B]"
                        >
                          {value}
                        </motion.p>
                        <p
                          className={`relative z-10 mt-1 text-[8px] font-extrabold ${
                            tone === "emerald"
                              ? "text-emerald-500"
                              : tone === "amber"
                              ? "text-amber-500"
                              : "text-rose-500"
                          }`}
                        >
                          {change}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="relative flex min-h-[520px] flex-col overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-white to-[#F2FDF8] p-3 sm:p-4 lg:h-full lg:min-h-0">
                {!reduceMotion && (
                  <motion.div
                    animate={{ y: ["-15%", "720%"] }}
                    transition={{
                      duration: 6.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-16 bg-gradient-to-b from-transparent via-emerald-100/35 to-transparent"
                  />
                )}

                <div className="absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full bg-sky-100/60 blur-[70px]" />
                <div className="absolute bottom-[-70px] left-[-70px] h-56 w-56 rounded-full bg-emerald-100/55 blur-[75px]" />

                <div className="relative z-10 flex h-full min-h-0 flex-col">
                  <div className="mb-2.5 flex shrink-0 items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#14204B]">
                        Payment Operations
                      </h3>
                      <p className="mt-1 max-w-[245px] text-[9px] font-medium leading-[1.45] text-slate-400">
                        Manage every WhatsApp payment stage from one place.
                      </p>
                    </div>

                    <motion.span
                      animate={
                        reduceMotion ? undefined : { rotate: [0, 360] }
                      }
                      transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-[0_10px_24px_rgba(15,23,42,0.1)]"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </motion.span>
                  </div>

                  <div className="relative grid min-h-0 flex-1 grid-rows-5 gap-2">
                    <div className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-sky-200 via-emerald-200 to-transparent" />

                    {features.map((feature, index) => {
                      const Icon = feature.icon;
                      const isActive = activeFeature === index;

                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, x: 20, scale: 0.96 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.55,
                            delay: 0.38 + index * 0.12,
                            ease: EASE,
                          }}
                          animate={{
                            scale: isActive ? 1.015 : 1,
                            x: isActive ? -2 : 0,
                          }}
                          whileHover={{ x: -4, scale: 1.01 }}
                          className={`relative z-10 grid h-full min-h-0 grid-cols-[34px_minmax(0,1fr)] items-center gap-2 overflow-hidden rounded-[14px] border bg-white/90 px-2.5 py-1.5 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur transition duration-300 ${
                            isActive
                              ? "border-emerald-300 shadow-[0_18px_42px_rgba(16,185,129,0.22),0_0_0_1px_rgba(16,185,129,0.14)]"
                              : "border-slate-200/80"
                          }`}
                        >
                          <motion.span
                            animate={{
                              opacity: isActive ? [0.3, 0.72, 0.3] : 0,
                              scale: isActive ? [0.98, 1.03, 0.98] : 1,
                            }}
                            transition={{
                              duration: 1.05,
                              repeat: isActive ? Infinity : 0,
                              ease: "easeInOut",
                            }}
                            className="pointer-events-none absolute inset-0 z-0 rounded-[14px] bg-[linear-gradient(90deg,rgba(16,185,129,0.2),rgba(14,165,233,0.14),rgba(16,185,129,0.18))]"
                          />

                          <motion.span
                            animate={{
                              opacity: isActive ? [0.35, 1, 0.35] : 0,
                              x: isActive ? ["-110%", "120%"] : "-110%",
                            }}
                            transition={{
                              duration: 1,
                              repeat: isActive ? Infinity : 0,
                              ease: "easeInOut",
                            }}
                            className="pointer-events-none absolute inset-y-0 z-0 w-1/2 bg-gradient-to-r from-transparent via-white/75 to-transparent"
                          />

                          <motion.span
                            animate={
                              !isActive
                                ? undefined
                                : { y: [0, -4, 0], scale: [1, 1.08, 1] }
                            }
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                              isActive
                                ? "bg-emerald-500 text-white shadow-[0_8px_18px_rgba(16,185,129,0.3)]"
                                : feature.tone === "green"
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-sky-50 text-sky-600"
                            }`}
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </motion.span>

                          <div className="relative z-10 min-w-0 pr-5">
                            <h4 className="truncate text-[9.5px] font-extrabold leading-[1.25] text-[#14204B]">
                              {feature.title}
                            </h4>

                            <p className="mt-0.5 truncate text-[7.5px] font-medium leading-[1.25] text-slate-400">
                              {feature.description}
                            </p>
                          </div>

                          <span
                            className={`absolute right-2 top-1.5 z-10 text-[7.5px] font-black transition-colors duration-300 ${
                              isActive ? "text-emerald-600" : "text-sky-500"
                            }`}
                          >
                            0{index + 1}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardSparkline({ values, tone = "green", delay = 0 }) {
  const color = tone === "green" ? "#22C55E" : "#F59E0B";
  const points = values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 120;
      const y = 42 - (value / 60) * 35;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 120 45" className="mt-2 h-8 w-full overflow-visible">
      <motion.polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: EASE }}
      />
      <motion.circle
        cx="120"
        cy={42 - (values[values.length - 1] / 60) * 35}
        r="3.5"
        fill={color}
        stroke="white"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: delay + 0.9, ease: EASE }}
      />
    </svg>
  );
}

function PaymentDashboardCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  active = false,
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!active) {
      setDisplayValue(0);
      return undefined;
    }

    let animationFrame;
    const duration = 1350;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [active, value]);

  const formattedValue = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(displayValue);

  return `${prefix}${formattedValue}${suffix}`;
}

function PaymentDashboardStatus({ status }) {
  const successful = status === "Successful";

  return (
    <motion.span
      animate={{
        boxShadow: successful
          ? [
              "0 0 0 0 rgba(16,185,129,0)",
              "0 0 0 3px rgba(16,185,129,0.14)",
              "0 0 0 0 rgba(16,185,129,0)",
            ]
          : [
              "0 0 0 0 rgba(245,158,11,0)",
              "0 0 0 3px rgba(245,158,11,0.16)",
              "0 0 0 0 rgba(245,158,11,0)",
            ],
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-2.5 py-1 text-[8px] font-extrabold ${
        successful
          ? "bg-emerald-50 text-emerald-600"
          : "bg-amber-50 text-amber-600"
      }`}
    >
      <motion.span
        animate={{ x: ["-120%", "220%"] }}
        transition={{
          duration: 1.9,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent"
      />
      <motion.span
        animate={{ scale: [1, 1.45, 1], opacity: [0.7, 1, 0.7] }}
        transition={{
          duration: 1.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`h-1.5 w-1.5 rounded-full ${
          successful ? "bg-emerald-400" : "bg-amber-400"
        }`}
      />
      <span className="relative z-10">{status}</span>
    </motion.span>
  );
}


function BackgroundDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-44 top-10 h-[470px] w-[470px] rounded-full bg-[#EAFBF1] blur-[110px]" />
      <div className="absolute -right-40 top-[-60px] h-[560px] w-[560px] rounded-full bg-[#EAF5FF] blur-[120px]" />
      <div className="absolute bottom-[-160px] left-1/2 h-[320px] w-[720px] -translate-x-1/2 rounded-full bg-white blur-[80px]" />

      {/* Floating blue-green particles */}
      {HERO_PARTICLES.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full shadow-[0_0_18px_rgba(80,190,160,0.28)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -18, 7, 0],
            x: [0, 8, -5, 0],
            opacity: [0.25, 0.9, 0.45, 0.25],
            scale: [0.85, 1.2, 0.95, 0.85],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Larger hollow orbit-style particles */}
      <motion.span
        animate={{ y: [0, -16, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[47%] top-[12%] h-10 w-10 rounded-full border border-[#9ADBB5]/55"
      />

      <motion.span
        animate={{ y: [0, 14, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[6%] top-[52%] h-14 w-14 rounded-full border border-[#A5D5F4]/55"
      />

      <div className="absolute right-12 top-12 hidden grid-cols-8 gap-3 opacity-35 lg:grid">
        {Array.from({ length: 48 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              opacity: [0.2, 0.75, 0.2],
              scale: [0.8, 1.15, 0.8],
            }}
            transition={{
              duration: 2.8,
              delay: (index % 8) * 0.08,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#B8DDF5]"
          />
        ))}
      </div>
    </div>
  );
}

const whatsappPayFaqs = [
  {
    q: "What is WhatsApp Pay?",
    a: "WhatsApp Pay lets customers complete a payment inside the same chat where they discovered your product — no app switching, no separate checkout page.",
  },
  {
    q: "Which payment methods are supported?",
    a: "Customers can pay using UPI, cards, net banking, and wallets through your connected payment gateway, all initiated from the WhatsApp conversation.",
  },
  {
    q: "Do I need a payment gateway to accept payments on WhatsApp?",
    a: "Yes. Vertex Suite connects with leading payment gateways, so you can keep your existing settlement, reconciliation, and refund processes unchanged.",
  },
  {
    q: "Is paying on WhatsApp secure?",
    a: "Yes. Payments are processed by regulated payment partners with encryption and standard security controls. Vertex Suite never stores raw card or bank credentials.",
  },
  {
    q: "Can I send payment links and reminders automatically?",
    a: "Yes. You can trigger payment requests, due-date reminders, and follow-ups automatically based on order status or customer activity.",
  },
  {
    q: "Do customers get a confirmation after paying?",
    a: "Yes. Payment confirmations, receipts, and order updates are sent straight into the same WhatsApp chat, so customers always have a record.",
  },
  {
    q: "Can I track payments and settlements?",
    a: "Yes. You get a live view of initiated, successful, pending, and failed payments, with reporting you can match against your settlement reports.",
  },
  {
    q: "How are refunds and failed payments handled?",
    a: "Failed payments can trigger an automatic retry link, and refunds are processed through your payment gateway with the customer notified on WhatsApp.",
  },
];

function WhatsAppPayFaqSection() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section className="relative overflow-hidden bg-white pt-[90px] pb-[90px] max-md:pt-[35px] max-md:pb-[60px]">
      <div className="mx-auto w-full max-w-[1450px] px-2">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-[1200px] text-center">
          <Reveal>
            <h2 className="mx-auto max-w-[1320px] text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-[1.15] tracking-tight text-[#111827]">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-none text-center !text-[1.12rem] font-medium leading-[1.75] text-[#5B6B84] xl:whitespace-nowrap xl:!text-[1.2rem] max-md:!text-[1rem]">
              Can’t find what you’re looking for? Our team is here to help you understand WhatsApp Payments and Vertex Suite better.
            </p>
          </Reveal>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-1">
          {whatsappPayFaqs.map((item, index) => {
            const isOpen = activeFaq === index;

            return (
              <Reveal
                key={index}
                direction="center"
                strength={0.6}
                delay={index * 0.07}
                duration={0.5}
                amount={0.3}
                className={`faq-moving-border group relative overflow-hidden rounded-[16px] border-none transition-all duration-300 ${
                  isOpen
                    ? "bg-white shadow-[0_14px_38px_rgba(15,23,42,0.055)]"
                    : "bg-[#EEFBF3]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="relative z-10 flex w-full items-center justify-between gap-5 px-8 py-3.5 text-left max-md:px-5 max-md:py-3.5"
                >
                  <span className="flex-1 text-left text-[1.05rem] font-medium text-[#111827] max-md:text-[0.95rem]">
                    {item.q}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#111827] transition-all duration-300 max-md:h-9 max-md:w-9">
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="relative z-10 px-8 pb-[26px] max-md:px-5">
                    <p className="!mb-0 max-w-[1050px] text-left text-[0.95rem] leading-[1.6] text-[#4B5563] max-md:text-[0.86rem]">
                      {item.a}
                    </p>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>
        {`
          .faq-moving-border::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 22px;
            padding: 2px;
            background: linear-gradient(
              90deg,
              transparent 0%,
              transparent 30%,
              rgba(255, 255, 255, 0.95) 50%,
              transparent 70%,
              transparent 100%
            );
            background-size: 220% 100%;
            opacity: 0;
            pointer-events: none;
            -webkit-mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }

          .faq-moving-border:hover::before {
            opacity: 1;
            animation: faqBorderMove 1.4s linear infinite;
          }

          @keyframes faqBorderMove {
            0% {
              background-position: 220% 0;
            }
            100% {
              background-position: -220% 0;
            }
          }
        `}
      </style>
    </section>
  );
}
