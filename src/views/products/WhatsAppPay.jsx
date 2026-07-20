"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  CreditCard,
  Gauge,
  Landmark,
  Layers3,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  MessageCircle,
  MoreHorizontal,
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
  XCircle,
  Zap,
} from "lucide-react";

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

const paymentSteps = [
  {
    image: "/assets/images/A11 (2).png",
    label: "WhatsApp Business Platform",
  },
  {
    image: "/assets/images/A11 (3).png",
    label: "Secure Gateway Integrations - Real-Time Payment Updates",
  },
  {
    image: "/assets/images/A11 (4).png",
    label: "Automated Confirmations",
  },
];

/*
  Add the exported transparent PNG paths here.
  Keep a value empty to show the built-in Canva-size placeholder.
*/
const FLOW_IMAGE_ASSETS = {
  paymentRequest: "", // "/assets/images/flow/payment-request.png"
  upiTapPay: "", // "/assets/images/flow/upi-tap-pay.png"
  upiApp: "", // "/assets/images/flow/choose-upi-app.png"
  upiPin: "", // "/assets/images/flow/upi-pin.png"
  gatewayTapPay: "", // "/assets/images/flow/gateway-tap-pay.png"
  gatewayCheckout: "", // "/assets/images/flow/gateway-checkout.png"
  paymentMethods: "", // "/assets/images/flow/payment-methods.png"
  paymentConfirmed: "", // "/assets/images/flow/payment-confirmed.png"
};

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

const trustItems = [
  {
    icon: ShieldCheck,
    label: "Bank-grade security",
  },
  {
    icon: Zap,
    label: "Instant confirmations",
  },
  {
    icon: CheckCircle2,
    label: "Higher conversions",
  },
];

export default function WhatsAppPaymentsPage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white">
        <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fbfdff_52%,#effcf4_100%)] px-4 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-12 lg:pb-28 lg:pt-16 xl:px-20">
          <BackgroundDecorations />

          <div className="relative z-10 mx-auto grid max-w-[1500px] items-center gap-8 sm:gap-10 lg:min-h-[760px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
            {/* LEFT: three phone payment images */}
            <PhonePaymentJourney />

            {/* RIGHT: hero content */}
            <CenteredHeroContent />
          </div>
        </section>

        <IntegrationModelsSection />
        <WhatsAppPaymentFeaturesSection />
        <HowWhatsAppPayWorksSection />
        <KeyBusinessBenefitsBookSection />
        <WhatsAppPaymentDashboardSection />
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

        @keyframes phoneFloatOne {
          0%,
          100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-9px) rotate(1deg);
          }
        }

        @keyframes phoneFloatTwo {
          0%,
          100% {
            transform: translateY(-4px) rotate(1deg);
          }

          50% {
            transform: translateY(8px) rotate(-1deg);
          }
        }

        @keyframes phoneFloatThree {
          0%,
          100% {
            transform: translateY(2px) rotate(-1deg);
          }

          50% {
            transform: translateY(-7px) rotate(1deg);
          }
        }

        @keyframes phoneShadowPulse {
          0%,
          100% {
            transform: translateX(-50%) scaleX(0.84);
            opacity: 0.14;
          }

          50% {
            transform: translateX(-50%) scaleX(1.04);
            opacity: 0.24;
          }
        }

        @keyframes dottedPulse {
          0%,
          100% {
            opacity: 0.3;
          }

          50% {
            opacity: 0.9;
          }
        }


        .payment-phone-image {
          image-rendering: auto;
          backface-visibility: hidden;
          transform: translateZ(0);
          filter: none;
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
    <div className="relative z-20 order-1 mx-0 max-w-[720px] text-left lg:order-2 lg:pl-5">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mb-5 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#BDEFD0] bg-[#F2FCF6] px-3.5 py-2.5 text-[9px] font-extrabold tracking-[0.08em] text-[#138A43] shadow-[0_10px_30px_rgba(16,185,129,0.07)] sm:mb-7 sm:px-5 sm:py-3 sm:text-[12px]"
      >
        <MessageCircle className="h-4 w-4" />
        <span>WHATSAPP BUSINESS API PAYMENTS</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.12, ease: EASE }}
        className="max-w-[720px] text-left text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#292929]"
      >
        Deliver a Trusted Payment Experience on{" "}
        <span className="block sm:inline-block">
          <AnimatedWhatsAppWord />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
        className="mt-7 max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]"
      >
        Let customers review their order and complete payments using supported
        UPI apps, cards, and payment methods without breaking the conversation.
        Vertex Suite connects payment collection, confirmations, and order
        updates in one guided WhatsApp journey.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
        className="mt-6 grid w-full max-w-[560px] grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-4"
      >
        <button
          type="button"
          style={{ borderRadius: "14px" }}
          className="hero-soft-rect-button roll-btn inline-flex h-[52px] w-full items-center justify-center bg-gradient-to-br from-[#18C765] to-[#08A84F] px-5 text-[14px] font-extrabold text-white shadow-[0_18px_42px_rgba(22,163,74,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(22,163,74,0.32)] sm:h-[60px] sm:px-6 sm:text-[16px]"
        >
          <span className="roll-content">
            <span className="roll-content-main">
              <span>Start Free Trial</span>
            </span>
            <span className="roll-content-hover">
              <span>Start Free Trial</span>
            </span>
          </span>
        </button>

        <button
          type="button"
          style={{ borderRadius: "14px" }}
          className="hero-soft-rect-button roll-btn inline-flex h-[52px] w-full items-center justify-center border border-[#D3D9DF] bg-white px-5 text-[14px] font-extrabold text-black shadow-[0_8px_22px_rgba(7,27,77,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#18B85B] hover:bg-[#F8FFFA] hover:shadow-[0_14px_30px_rgba(7,27,77,0.08)] sm:h-[60px] sm:px-6 sm:text-[16px]"
        >
          <span className="roll-content">
            <span className="roll-content-main">
              <span>Book a Demo</span>
            </span>
            <span className="roll-content-hover">
              <span>Book a Demo</span>
            </span>
          </span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.58, ease: EASE }}
        className="mx-auto mt-6 flex max-w-[560px] flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[10.5px] font-bold text-[#52627C] sm:mt-8 sm:gap-x-6 sm:gap-y-3 sm:text-[13px] lg:mx-0 lg:justify-start"
      >
        {trustItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="contents">
              <span className="flex items-center justify-center gap-2 text-center">
                <Icon className="h-[17px] w-[17px] text-[#16A34A]" />
                {item.label}
              </span>

              {index < trustItems.length - 1 && (
                <span className="hidden h-5 w-px bg-[#D7E1EA] sm:block" />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
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

  return (
    <span className="relative inline-flex min-w-[7.5em] max-w-full items-baseline whitespace-nowrap text-[#16A34A]">
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
        className="absolute -bottom-1 left-0 -z-10 h-[8px] w-[7.3em] origin-left rounded-full bg-[#DDF8E7]"
      />
    </span>
  );
}

function PhonePaymentJourney() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -42, scale: 0.97 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative order-2 lg:order-1"
    >
      <div className="relative min-h-[430px] overflow-hidden rounded-[24px] border border-white/90 bg-[linear-gradient(135deg,#eaf6ff_0%,#f5fbff_42%,#ecfbf2_100%)] px-2.5 py-3 shadow-[0_24px_70px_rgba(7,27,77,0.11)] sm:min-h-[620px] sm:rounded-[30px] sm:px-6 sm:py-4 lg:min-h-[710px] lg:rounded-[44px] lg:px-8 lg:py-6 lg:shadow-[0_38px_100px_rgba(7,27,77,0.13)]">
        <div
          className="pointer-events-none absolute left-[2%] top-[12%] h-[310px] w-[310px] rounded-full bg-[#cdeaff]/70 blur-[85px]"
          style={{ animation: "softGlow 6s ease-in-out infinite" }}
        />

        <div
          className="pointer-events-none absolute bottom-[10%] right-[2%] h-[310px] w-[310px] rounded-full bg-[#c9f4d9]/65 blur-[90px]"
          style={{ animation: "softGlow 6.5s ease-in-out 0.7s infinite" }}
        />

        <div className="pointer-events-none absolute left-8 top-8 grid grid-cols-6 gap-2 opacity-35">
          {Array.from({ length: 30 }).map((_, index) => (
            <span
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-[#8ecdf3]"
              style={{
                animation: "dottedPulse 2.8s ease-in-out infinite",
                animationDelay: `${(index % 6) * 0.1}s`,
              }}
            />
          ))}
        </div>

        <div className="relative min-h-[395px] overflow-x-auto overflow-y-hidden [scrollbar-width:none] sm:min-h-[590px] lg:min-h-[650px] [&::-webkit-scrollbar]:hidden">
          <div className="relative mx-auto grid min-w-[560px] grid-cols-3 items-start gap-2 sm:min-w-[860px] sm:gap-3 lg:min-w-0 lg:gap-3 xl:gap-5">
            {paymentSteps.map((step, index) => (
              <PhoneStep key={step.image} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PhoneStep({ step, index }) {
  const floatAnimation = [
    "phoneFloatOne",
    "phoneFloatTwo",
    "phoneFloatThree",
  ][index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 38, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.82,
        delay: index * 0.45,
        ease: EASE,
      }}
      className="relative z-20 mx-auto flex min-h-[395px] w-full flex-col items-center justify-start sm:min-h-[590px] lg:min-h-[650px]"
    >
      <div
        className="relative flex h-[365px] w-full items-center justify-center sm:h-[545px] lg:h-[595px]"
        style={{
          animation: `${floatAnimation} ${
            5.1 + index * 0.4
          }s ease-in-out ${2.2 + index * 0.3}s infinite`,
        }}
      >
        <span className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-dashed border-[#8FD4F5]/80 sm:h-[285px] sm:w-[285px] xl:h-[320px] xl:w-[320px]" />

        <span className="absolute left-1/2 top-1/2 h-[165px] w-[165px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#BDEFD0]/70 sm:h-[235px] sm:w-[235px] xl:h-[265px] xl:w-[265px]" />

        <span className="absolute left-1/2 top-1/2 h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/72 shadow-[inset_0_0_52px_rgba(16,185,129,0.10),0_20px_55px_rgba(64,170,220,0.10)] backdrop-blur-sm sm:h-[195px] sm:w-[195px] xl:h-[220px] xl:w-[220px]" />

        <img
          src={step.image}
          alt={step.label}
          width={1080}
          height={2160}
          loading={index === 0 ? "eager" : "lazy"}
          className="payment-phone-image relative z-20 mx-auto h-[345px] w-auto max-w-full object-contain drop-shadow-[0_24px_48px_rgba(7,27,77,0.18)] sm:h-[520px] sm:drop-shadow-[0_34px_68px_rgba(7,27,77,0.20)] lg:h-[570px] xl:h-[600px]"
        />

        <span
          className="absolute bottom-[4px] left-1/2 h-8 w-[78%] -translate-x-1/2 rounded-full bg-[#071B4D]/14 blur-xl"
          style={{ animation: "phoneShadowPulse 5.3s ease-in-out infinite" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.6,
          delay: 0.65 + index * 0.38,
          ease: EASE,
        }}
        className="relative z-30 -mt-1 flex min-h-[28px] max-w-[180px] items-center justify-center px-2 py-1 text-center sm:min-h-[36px] sm:max-w-[320px]"
      >
        <span className="inline-block text-[9px] font-extrabold leading-[1.35] tracking-[0.01em] text-[#13924B] sm:text-[11px] sm:leading-[1.45]">
          {step.label}
        </span>
      </motion.div>
    </motion.div>
  );
}


function IntegrationModelsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 pb-24 pt-4 sm:px-8 lg:px-12 xl:px-20">
      <div className="pointer-events-none absolute left-[-120px] top-[180px] h-[360px] w-[360px] rounded-full bg-[#EAF8FF] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[40px] right-[-120px] h-[360px] w-[360px] rounded-full bg-[#E9FAEF] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.h2
          {...businessApiHeadingProps}
          className="mx-auto mb-6 max-w-[1120px] text-center text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]"
        >
          Choose How Customers Complete Payments on{" "}
          <AnimatedWhatsAppWord />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.75, ease: EASE }}
          className="relative rounded-[30px] border border-[#E4ECF3] bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-5 shadow-[0_28px_80px_rgba(15,23,42,0.09)] sm:p-7 lg:p-9"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D6E6F1] to-transparent" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full bg-[#F3FBF6] px-3 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#3DAA61]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E6F8EC]">
                <WalletCards className="h-3.5 w-3.5" />
              </span>
              PAYMENT INTEGRATION MODELS
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
              className="mt-5 max-w-[820px] text-[30px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#132145] sm:text-[38px]"
            >
              Choose the Payment Flow That Fits Your Business
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
              className="mt-4 max-w-[820px] text-[15px] font-medium leading-7 text-[#667085]"
            >
              Connect WhatsApp payments through UPI Intent or an integrated
              payment gateway, based on the payment methods and checkout
              experience your business wants to offer.
            </motion.p>

            {/* Horizontal scrolling prevents the full desktop diagram from being cut. */}
            <div className="mt-10 hidden xl:block">
              <DesktopPaymentFlowDiagram />
            </div>

            <div className="mt-10 xl:hidden">
              <MobilePaymentFlowDiagram />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DesktopPaymentFlowDiagram() {
  return (
    <div className="mx-auto w-full max-w-[1280px] py-5">
      <div className="grid w-full grid-cols-[220px_64px_minmax(0,1fr)_64px_220px] items-center gap-0">
        <FlowRequestCard />

        <SplitFlowConnector />

        <div className="space-y-6">
          <UpiIntentFlowCard />

          <GatewayFlowCard />
        </div>

        <MergeFlowConnector />

        <FlowConfirmedCard />
      </div>
    </div>
  );
}

function MobilePaymentFlowDiagram() {
  return (
    <div className="space-y-4">
      <FlowRequestCard mobile />

      <VerticalFlowConnector color="#59B86B" delay={0.35} />

      <UpiIntentFlowCard mobile />

      <VerticalFlowConnector color="#4C8BFF" delay={1.0} />

      <GatewayFlowCard mobile />

      <VerticalFlowConnector color="#59B86B" delay={1.65} />

      <FlowConfirmedCard mobile />
    </div>
  );
}

function FlowRequestCard({ mobile = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: mobile ? 0 : -26, y: mobile ? 22 : 0, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.58, delay: 0.08, ease: EASE }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative isolate rounded-[22px] border border-[#E4EAF0] bg-white px-5 py-4 shadow-[0_16px_38px_rgba(15,23,42,0.09)]"
    >
      <AnimatedCardGlow tone="green" delay={0.15} />
      <motion.h5
        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.42, delay: 0.18, ease: EASE }}
        className="flex min-h-[38px] flex-col items-center justify-center text-center text-[12px] font-extrabold leading-[1.35] text-[#25324B]"
      >
        <span>Payment Request</span>
        <span>Sent on WhatsApp</span>
      </motion.h5>

      <FlowImageSlot
        src={FLOW_IMAGE_ASSETS.paymentRequest}
        alt="WhatsApp payment request visual"
        canvasSize="900 × 1100 px"
        tone="green"
        variant="side"
        delay={0.3}
        className="mt-3"
      />

      <p className="mt-3 text-center text-[11px] font-medium leading-4 text-[#7B8597]">
        Customer receives a
        <br />
        payment request in chat
      </p>

      {!mobile && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.42, ease: EASE }}
          className="absolute right-[-7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#3DB765] shadow-[0_4px_12px_rgba(15,23,42,0.12)]"
        />
      )}
    </motion.div>
  );
}

function UpiIntentFlowCard({ mobile = false }) {
  const steps = [
    {
      title: "Tap Pay",
      icon: Smartphone,
      image: FLOW_IMAGE_ASSETS.upiTapPay,
      imageAlt: "Tap Pay step visual",
      canvasSize: "800 × 600 px",
    },
    {
      title: "Choose UPI App",
      icon: Building2,
      image: FLOW_IMAGE_ASSETS.upiApp,
      imageAlt: "Choose UPI app visual",
      canvasSize: "800 × 600 px",
    },
    {
      title: "Authorise with UPI PIN",
      icon: ShieldCheck,
      image: FLOW_IMAGE_ASSETS.upiPin,
      imageAlt: "UPI PIN authorisation visual",
      canvasSize: "800 × 600 px",
    },
  ];

  const tags = ["Pre-filled details", "Quick app handoff", "UPI-focused flow"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.62, delay: 0.58, ease: EASE }}
      whileHover={{ y: -4 }}
      className="relative isolate rounded-[22px] border border-[#A8DBB3] bg-[linear-gradient(180deg,#FBFFFC_0%,#F5FBF7_100%)] px-5 py-4 shadow-[0_16px_38px_rgba(89,184,107,0.10)]"
    >
      <AnimatedCardGlow tone="green" delay={0.7} />
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.28, delay: 0.68, ease: EASE }}
        className="absolute left-[-7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#3DB765] shadow-[0_4px_12px_rgba(15,23,42,0.12)]"
      />

      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.28, delay: 1.42, ease: EASE }}
        className="absolute right-[-7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#3DB765] shadow-[0_4px_12px_rgba(15,23,42,0.12)]"
      />

      <div className="flex items-center justify-center gap-3 text-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F8EC] text-[#23A353]">
          <SendTinyIcon />
        </span>
        <h4 className="text-[19px] font-extrabold text-[#1E8A49]">
          UPI Intent Mode
        </h4>
      </div>

      <AnimatedStepRow
        steps={steps}
        mobile={mobile}
        tone="green"
        baseDelay={0.72}
      />

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {tags.map((tag, index) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.38,
              delay: 1.28 + index * 0.1,
              ease: EASE,
            }}
            className="rounded-full border border-[#D8EEDC] bg-[#F7FBF8] px-3 py-1 text-[11px] font-bold text-[#4A8659]"
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.5, ease: EASE }}
        className="mx-auto mt-4 max-w-[720px] text-center text-[13px] font-medium leading-6 text-[#667085]"
      >
        Redirects the customer to a supported UPI app with payment details
        pre-filled.
      </motion.p>
    </motion.div>
  );
}

function GatewayFlowCard({ mobile = false }) {
  const steps = [
    {
      title: "Tap Pay",
      icon: Smartphone,
      image: FLOW_IMAGE_ASSETS.gatewayTapPay,
      imageAlt: "Gateway Tap Pay visual",
      canvasSize: "800 × 600 px",
    },
    {
      title: "Gateway Checkout",
      icon: CreditCard,
      image: FLOW_IMAGE_ASSETS.gatewayCheckout,
      imageAlt: "Payment gateway checkout visual",
      canvasSize: "800 × 600 px",
    },
    {
      title: "Choose Payment Method",
      icon: WalletCards,
      image: FLOW_IMAGE_ASSETS.paymentMethods,
      imageAlt: "Payment methods visual",
      canvasSize: "1000 × 700 px",
      methods: true,
    },
  ];

  const tags = [
    "Multiple payment modes",
    "Gateway-led checkout",
    "Broader customer choice",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.62, delay: 1.0, ease: EASE }}
      whileHover={{ y: -4 }}
      className="relative isolate rounded-[22px] border border-[#B8D0FF] bg-[linear-gradient(180deg,#FBFDFF_0%,#F5F8FF_100%)] px-5 py-4 shadow-[0_16px_38px_rgba(76,139,255,0.11)]"
    >
      <AnimatedCardGlow tone="blue" delay={1.1} />
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.28, delay: 1.1, ease: EASE }}
        className="absolute left-[-7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#4C8BFF] shadow-[0_4px_12px_rgba(15,23,42,0.12)]"
      />

      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.28, delay: 1.84, ease: EASE }}
        className="absolute right-[-7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#4C8BFF] shadow-[0_4px_12px_rgba(15,23,42,0.12)]"
      />

      <div className="flex items-center justify-center gap-3 text-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF4FF] text-[#3C78F0]">
          <CreditCard className="h-4 w-4" />
        </span>
        <h4 className="text-[19px] font-extrabold text-[#3C78F0]">
          Payment Gateway Integration
        </h4>
      </div>

      <AnimatedStepRow
        steps={steps}
        mobile={mobile}
        tone="blue"
        baseDelay={1.15}
      />

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {tags.map((tag, index) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.38,
              delay: 1.72 + index * 0.1,
              ease: EASE,
            }}
            className="rounded-full border border-[#DAE4FF] bg-[#F7F9FF] px-3 py-1 text-[11px] font-bold text-[#4C78D1]"
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.95, ease: EASE }}
        className="mx-auto mt-4 max-w-[720px] text-center text-[13px] font-medium leading-6 text-[#667085]"
      >
        Lets customers continue through a connected gateway and choose from
        supported payment options.
      </motion.p>
    </motion.div>
  );
}

function AnimatedStepRow({ steps, mobile, tone, baseDelay }) {
  const reduceMotion = useReducedMotion();
  const isGreen = tone === "green";

  return (
    <div
      className={`mt-4 ${
        mobile
          ? "space-y-3"
          : "grid grid-cols-[1fr_42px_1fr_42px_1.3fr] items-stretch"
      }`}
    >
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div key={step.title} className={mobile ? "space-y-3" : "contents"}>
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.91 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                opacity: {
                  duration: 0.48,
                  delay: baseDelay + index * 0.18,
                  ease: EASE,
                },
                scale: {
                  duration: 0.48,
                  delay: baseDelay + index * 0.18,
                  ease: EASE,
                },
                y: {
                  duration: 2.8 + index * 0.25,
                  delay: baseDelay + index * 0.12,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              animate={{
                y: [0, index % 2 === 0 ? -2 : 2, 0],
              }}
              whileHover={{
                y: -5,
                scale: 1.035,
                boxShadow: isGreen
                  ? "0 16px 34px rgba(34,197,94,0.20)"
                  : "0 16px 34px rgba(76,139,255,0.22)",
              }}
              className={`rounded-[16px] border bg-white px-3 py-3 shadow-[0_8px_18px_rgba(15,23,42,0.05)] ${
                isGreen ? "border-[#D9EEDF]" : "border-[#DCE5FF]"
              }`}
            >
              <FlowImageSlot
                src={step.image}
                alt={step.imageAlt}
                canvasSize={step.canvasSize}
                tone={isGreen ? "green" : "blue"}
                variant="step"
                delay={baseDelay + index * 0.18 + 0.04}
                className="mb-3"
              />

              <div className="flex items-center justify-center gap-2 text-center">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    isGreen
                      ? "bg-[#EAF8EE] text-[#219A4F]"
                      : "bg-[#EEF4FF] text-[#3C78F0]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>

                <p className="text-center text-[12px] font-extrabold leading-4 text-[#24324A]">
                  {step.title}
                </p>
              </div>

              {step.methods && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: baseDelay + index * 0.18 + 0.18,
                    ease: EASE,
                  }}
                  className="mt-3 grid grid-cols-4 gap-1.5"
                >
                  <MethodMini
                    icon={<Smartphone className="h-3.5 w-3.5" />}
                    label="UPI"
                  />
                  <MethodMini
                    icon={<CreditCard className="h-3.5 w-3.5" />}
                    label="Cards"
                  />
                  <MethodMini
                    icon={<Landmark className="h-3.5 w-3.5" />}
                    label="Net Banking"
                  />
                  <MethodMini
                    icon={<WalletCards className="h-3.5 w-3.5" />}
                    label="Wallets"
                  />
                </motion.div>
              )}
            </motion.div>

            {index < steps.length - 1 && (
              mobile ? (
                <VerticalMiniConnector
                  color={isGreen ? "#31A85B" : "#4C8BFF"}
                  delay={baseDelay + index * 0.18 + 0.12}
                />
              ) : (
                <AnimatedHorizontalConnector
                  color={isGreen ? "#31A85B" : "#4C8BFF"}
                  delay={baseDelay + index * 0.18 + 0.12}
                  reduceMotion={reduceMotion}
                />
              )
            )}
          </div>
        );
      })}
    </div>
  );
}

function AnimatedHorizontalConnector({
  color,
  delay,
  reduceMotion,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, delay, ease: EASE }}
      className="relative mx-2 my-auto h-px origin-left"
      style={{ backgroundColor: `${color}55` }}
    >
      <ArrowRight
        className="absolute right-[-6px] top-1/2 h-4 w-4 -translate-y-1/2"
        style={{ color }}
      />

      <motion.span
        animate={
          reduceMotion
            ? undefined
            : {
                left: ["0%", "92%", "0%"],
              }
        }
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.35,
        }}
        className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-white shadow-sm"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}

function SplitFlowConnector() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-[520px]">
      <svg
        viewBox="0 0 95 520"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M0 260 H25"
          fill="none"
          stroke="#87C99A"
          strokeWidth="2.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.38, delay: 0.35, ease: EASE }}
        />

        <motion.path
          d="M25 260 C48 260 52 125 95 125"
          fill="none"
          stroke="#59B86B"
          strokeWidth="2.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72, delay: 0.56, ease: EASE }}
        />

        <motion.path
          d="M25 260 C48 260 52 395 95 395"
          fill="none"
          stroke="#4C8BFF"
          strokeWidth="2.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72, delay: 0.92, ease: EASE }}
        />

        {!reduceMotion && (
          <>
            <motion.circle
              r="5"
              fill="#59B86B"
              stroke="white"
              strokeWidth="2"
              animate={{
                cx: [25, 52, 95, 25],
                cy: [260, 205, 125, 260],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            />

            <motion.circle
              r="5"
              fill="#4C8BFF"
              stroke="white"
              strokeWidth="2"
              animate={{
                cx: [25, 52, 95, 25],
                cy: [260, 315, 395, 260],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.45,
              }}
            />
          </>
        )}
      </svg>
    </div>
  );
}

function MergeFlowConnector() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative h-[520px]">
      <svg
        viewBox="0 0 95 520"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <motion.path
          d="M0 125 C43 125 47 260 70 260"
          fill="none"
          stroke="#59B86B"
          strokeWidth="2.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72, delay: 1.42, ease: EASE }}
        />

        <motion.path
          d="M0 395 C43 395 47 260 70 260"
          fill="none"
          stroke="#4C8BFF"
          strokeWidth="2.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72, delay: 1.72, ease: EASE }}
        />

        <motion.path
          d="M70 260 H95"
          fill="none"
          stroke="#71BE82"
          strokeWidth="2.6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.38, delay: 2.02, ease: EASE }}
        />

        {!reduceMotion && (
          <>
            <motion.circle
              r="5"
              fill="#59B86B"
              stroke="white"
              strokeWidth="2"
              animate={{
                cx: [0, 43, 70, 95, 0],
                cy: [125, 180, 260, 260, 125],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.2,
              }}
            />

            <motion.circle
              r="5"
              fill="#4C8BFF"
              stroke="white"
              strokeWidth="2"
              animate={{
                cx: [0, 43, 70, 95, 0],
                cy: [395, 340, 260, 260, 395],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.45,
              }}
            />
          </>
        )}
      </svg>
    </div>
  );
}

function FlowConfirmedCard({ mobile = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: mobile ? 0 : 26, y: mobile ? 22 : 0, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.58, delay: 2.1, ease: EASE }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative isolate rounded-[22px] border border-[#E4EAF0] bg-white px-5 py-4 shadow-[0_16px_38px_rgba(15,23,42,0.09)]"
    >
      <AnimatedCardGlow tone="green" delay={2.15} />
      {!mobile && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 2.04, ease: EASE }}
          className="absolute left-[-7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#3DB765] shadow-[0_4px_12px_rgba(15,23,42,0.12)]"
        />
      )}

      <motion.h5
        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.42, delay: 2.18, ease: EASE }}
        className="flex min-h-[38px] flex-col items-center justify-center text-center text-[12px] font-extrabold leading-[1.35] text-[#25324B]"
      >
        <span>Payment Confirmed</span>
        <span>on WhatsApp</span>
      </motion.h5>

      <FlowImageSlot
        src={FLOW_IMAGE_ASSETS.paymentConfirmed}
        alt="WhatsApp payment confirmation visual"
        canvasSize="800 × 800 px"
        tone="green"
        variant="side"
        delay={2.25}
        className="mt-3"
      />

      <div className="mt-4 space-y-2.5">
        {[
          "Transaction status updated",
          "Confirmation and receipt delivered",
        ].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 2.42 + index * 0.12,
              ease: EASE,
            }}
            className="flex items-start gap-2"
          >
            <span className="mt-1 flex h-4 w-4 items-center justify-center text-[#23A353]">
              <CheckCircle2 className="h-4 w-4" />
            </span>
            <p className="text-[11px] font-medium leading-4 text-[#7B8597]">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FlowImageSlot({
  src,
  alt,
  canvasSize,
  tone = "green",
  variant = "step",
  delay = 0,
  featureType = "",
  active = false,
  className = "",
}) {
  const reduceMotion = useReducedMotion();
  const isGreen = tone === "green";

  const sizeClass =
    variant === "side"
      ? "mx-auto h-[135px] w-[158px]"
      : "h-[76px] w-full";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -3, 0],
            }
      }
      transition={{
        opacity: {
          duration: 0.45,
          delay,
          ease: EASE,
        },
        scale: {
          duration: 0.45,
          delay,
          ease: EASE,
        },
        y: {
          duration: 3,
          delay: delay + 0.25,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`${sizeClass} ${className}`}
    >
      {src ? (
        <div className="relative h-full w-full overflow-hidden rounded-[18px]">
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            animate={{
              y:
                featureType === "reminder"
                  ? [0, -5, 3, 0]
                  : featureType === "receipt"
                  ? [4, -4, 4]
                  : [0, -4, 0],
              x:
                featureType === "link"
                  ? [0, 5, 0]
                  : featureType === "methods"
                  ? [-2, 2, -2]
                  : [0, 0, 0],
              rotate:
                featureType === "receipt"
                  ? [-1.2, 1.2, -1.2]
                  : featureType === "reminder"
                  ? [0, -0.8, 0.8, 0]
                  : [0, 0, 0],
              scale: active ? [1, 1.035, 1] : [1, 1.012, 1],
            }}
            transition={{
              duration:
                featureType === "methods"
                  ? 2.2
                  : featureType === "link"
                  ? 2.6
                  : 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-full object-contain"
          />

          <motion.span
            animate={{ x: ["-150%", "430%"] }}
            transition={{
              duration: active ? 1.7 : 3.4,
              repeat: Infinity,
              repeatDelay: active ? 0.35 : 1,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-[18%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/75 to-transparent"
          />
        </div>
      ) : (
        <div
          className={`flex h-full w-full flex-col items-center justify-center rounded-[14px] border border-dashed px-2 text-center ${
            isGreen
              ? "border-[#A8DBB3] bg-[#F7FCF8] text-[#3A8A52]"
              : "border-[#B8D0FF] bg-[#F7F9FF] text-[#4772C4]"
          }`}
        >
          <span className="text-[10px] font-extrabold uppercase tracking-[0.08em]">
            Image space
          </span>
          <span className="mt-1 text-[9px] font-bold opacity-75">
            Canva: {canvasSize}
          </span>
          <span className="mt-1 text-[8px] font-medium opacity-60">
            Transparent PNG
          </span>
        </div>
      )}
    </motion.div>
  );
}

function AnimatedCardGlow({ tone = "green", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  const glow =
    tone === "blue"
      ? {
          border: "rgba(76,139,255,0.48)",
          shadowA: "0 0 0 rgba(76,139,255,0)",
          shadowB: "0 0 34px rgba(76,139,255,0.24)",
          dot: "#4C8BFF",
        }
      : {
          border: "rgba(34,197,94,0.42)",
          shadowA: "0 0 0 rgba(34,197,94,0)",
          shadowB: "0 0 34px rgba(34,197,94,0.22)",
          dot: "#25B85A",
        };

  return (
    <>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-1px] -z-10 rounded-[23px] border"
        style={{ borderColor: glow.border }}
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.25, 0.85, 0.25],
                boxShadow: [glow.shadowA, glow.shadowB, glow.shadowA],
              }
        }
        transition={{
          duration: 2.8,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          animate={{
            left: ["8%", "84%", "8%"],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3.4,
            delay: delay + 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute top-[-4px] z-20 h-2 w-2 rounded-full border-2 border-white shadow-sm"
          style={{ backgroundColor: glow.dot }}
        />
      )}
    </>
  );
}

function MethodMini({ icon, label }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.03 }}
      className="rounded-[10px] border border-[#E6ECFF] bg-[#FBFCFF] px-1.5 py-2 text-center"
    >
      <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-[#F2F6FF] text-[#4C78D1]">
        {icon}
      </div>
      <div className="mt-1 text-[8px] font-extrabold leading-3 text-[#51627E]">
        {label}
      </div>
    </motion.div>
  );
}

function VerticalMiniConnector({ color, delay }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: EASE }}
      className="relative mx-auto h-8 w-px origin-top"
      style={{ backgroundColor: `${color}66` }}
    >
      {!reduceMotion && (
        <motion.span
          animate={{ top: ["0%", "85%", "0%"] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 0.25,
          }}
          className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-white"
          style={{ backgroundColor: color }}
        />
      )}
    </motion.div>
  );
}

function VerticalFlowConnector({ color, delay }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex justify-center py-1">
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: 46, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay, ease: EASE }}
        className="relative w-[2px] rounded-full"
        style={{ backgroundColor: `${color}66` }}
      >
        {!reduceMotion && (
          <motion.span
            animate={{ top: ["0%", "90%", "0%"] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 0.25,
            }}
            className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white"
            style={{ backgroundColor: color }}
          />
        )}
      </motion.div>
    </div>
  );
}

function SendTinyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M21.8 2.2a1 1 0 0 0-1.05-.2L3.6 9.14a1 1 0 0 0 .08 1.87l6.76 2.25 2.25 6.76a1 1 0 0 0 1.87.08L22 3.25a1 1 0 0 0-.2-1.05ZM12.2 12.5 7 10.77l10.4-4.23-5.2 5.96Zm1.3 3.9-1.73-5.2 5.96-5.2-4.23 10.4Z" />
    </svg>
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
        "Send amount, order details, and payment CTA directly in chat.",
      icon: MessageCircle,
      tone: "green",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.paymentRequest,
      canvasSize: "900 × 1100 px",
      layout: "tall",
    },
    {
      key: "paymentLinks",
      animationType: "link",
      title: "Enhanced Payment Links",
      description:
        "Share payment links and guide customers to checkout faster.",
      icon: Link2,
      tone: "blue",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.paymentLinks,
      canvasSize: "1000 × 700 px",
      layout: "wide",
    },
    {
      key: "paymentMethods",
      animationType: "methods",
      title: "UPI & Gateway Payments",
      description:
        "Support UPI, cards, net banking, wallets, and gateway flows.",
      icon: Landmark,
      tone: "green",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.paymentMethods,
      canvasSize: "1000 × 700 px",
      layout: "wide",
    },
    {
      key: "reminders",
      animationType: "reminder",
      title: "Automated Payment Reminders",
      description:
        "Send follow-ups for pending payments without manual tracking.",
      icon: Bell,
      tone: "purple",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.reminders,
      canvasSize: "1000 × 700 px",
      layout: "wide",
    },
    {
      key: "receipts",
      animationType: "receipt",
      title: "Payment Updates & Receipts",
      description:
        "Send status updates, confirmations, and receipts automatically.",
      icon: ReceiptText,
      tone: "blue",
      image: PAYMENT_FEATURE_IMAGE_ASSETS.receipts,
      canvasSize: "1000 × 700 px",
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

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-12 lg:grid-rows-[minmax(260px,auto)_minmax(260px,auto)]">
          <PaymentFeatureCard
            feature={featureCards[0]}
            index={0}
            active={activeFeature === 0}
            className="lg:col-span-4 lg:row-span-2"
          />

          <PaymentFeatureCard
            feature={featureCards[1]}
            index={1}
            active={activeFeature === 1}
            className="lg:col-span-4"
          />

          <PaymentFeatureCard
            feature={featureCards[2]}
            index={2}
            active={activeFeature === 2}
            className="lg:col-span-4"
          />

          <PaymentFeatureCard
            feature={featureCards[3]}
            index={3}
            active={activeFeature === 3}
            className="lg:col-span-4"
          />

          <PaymentFeatureCard
            feature={featureCards[4]}
            index={4}
            active={activeFeature === 4}
            className="lg:col-span-4"
          />
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
      className={`relative isolate overflow-hidden rounded-[24px] border bg-[linear-gradient(145deg,#ffffff_0%,#FBFDFF_100%)] p-4 shadow-[0_16px_42px_rgba(15,23,42,0.07)] transition-colors duration-300 sm:p-5 ${
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
            : "grid h-full min-h-0 items-center gap-3 sm:grid-cols-[minmax(0,1.15fr)_minmax(115px,0.85fr)]"
        }`}
      >
        <div className="min-w-0">
          <div className="flex items-start gap-3">
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
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] ${toneClasses.icon}`}
            >
              <Icon className="h-5 w-5" />
            </motion.span>

            <div className="min-w-0 flex-1">
              <h3
                className={`font-semibold tracking-normal text-[#171F35] ${
                  isTall
                    ? "text-[13px] leading-[1.12] sm:text-[14px]"
                    : "text-[8.5px] leading-[1.12] sm:text-[9px]"
                }`}
              >
                <span className="block whitespace-nowrap">{titleStart}</span>
                <span className="block whitespace-nowrap">{lastTitleWord}</span>
              </h3>

              <p
                className={`font-normal text-[#596378] ${
                  isTall
                    ? "mt-2 text-[11.5px] leading-5 sm:text-[12px]"
                    : "mt-1.5 text-[9px] leading-[1.38] sm:text-[9.5px]"
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
          className={isTall ? "mt-8 flex-1" : "mt-5 sm:mt-0 sm:translate-y-4"}
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
      ? "min-h-[210px] w-full"
      : variant === "workflow"
      ? "h-[98px] w-full"
      : "h-[125px] w-full sm:h-[135px]";
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
              isWorkflow ? "px-2.5 py-1.5" : "px-3 py-2"
            }`}
          >
            <span
              className={`font-extrabold uppercase tracking-[0.08em] opacity-70 ${
                isWorkflow ? "text-[7px]" : "text-[8px]"
              }`}
            >
              Image space
            </span>
            <span
              className={`font-extrabold opacity-80 ${
                isWorkflow ? "text-[7px]" : "text-[8px]"
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



function HowWhatsAppPayWorksSection() {
  // Replace these temporary Unsplash URLs later with your final Canva visuals.
  // Recommended Canva size for every image: 1600 × 1000 px.
  const steps = [
    {
      number: "01",
      title: "Business Sends a Payment Request",
      description:
        "You share a WhatsApp Pay link in form of a pay button or a structured payment message for a product, service, or order.",
      icon: Send,
      image: "/assets/optimized/pay-step-1.jpg",
      imageAlt: "Business sending a digital payment request",
      accent: "#22C55E",
      tint: "from-emerald-500/85 via-emerald-500/35 to-transparent",
    },
    {
      number: "02",
      title: "Customer Confirms the Amount",
      description:
        "The customer taps the secure message to review the payable amount and verify order details.",
      icon: ShieldCheck,
      image: "/assets/optimized/pay-step-2.jpg",
      imageAlt: "Customer reviewing payment and order details",
      accent: "#3B82F6",
      tint: "from-sky-500/85 via-sky-500/35 to-transparent",
    },
    {
      number: "03",
      title: "Customer Completes the Payment",
      description:
        "Payment is made instantly via UPI, bank app, or card, all inside WhatsApp's trusted interface.",
      icon: CreditCard,
      image: "/assets/optimized/pay-step-3.jpg",
      imageAlt: "Customer completing a digital payment",
      accent: "#14B8A6",
      tint: "from-teal-500/85 via-teal-500/35 to-transparent",
    },
    {
      number: "04",
      title: "Instant Confirmation in Chat",
      description:
        "Both the business and customer receive real-time confirmation, along with an invoice or receipt.",
      icon: ReceiptText,
      image: "/assets/optimized/pay-step-4.jpg",
      imageAlt: "Instant payment confirmation and receipt",
      accent: "#8B5CF6",
      tint: "from-violet-500/85 via-violet-500/35 to-transparent",
    },
    {
      number: "05",
      title: "Order Moves Forward Automatically",
      description:
        "Your system updates automatically, triggering shipping, service activation, or booking confirmation.",
      icon: Workflow,
      image: "/assets/optimized/pay-step-5.jpg",
      imageAlt: "Order fulfilment and delivery workflow",
      accent: "#0EA5E9",
      tint: "from-cyan-500/85 via-cyan-500/35 to-transparent",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  // Forced automatic animation cycle.
  useEffect(() => {
    setActiveStep(0);

    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 2400);

    const preloadTimer = window.setTimeout(() => {
      steps.slice(1).forEach((step) => {
        const image = new Image();
        image.src = step.image;
      });
    }, 1200);

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(preloadTimer);
    };
  }, [steps.length]);

  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_52%,#F5FFF8_100%)] px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:pt-20 xl:px-20">
      <div className="pointer-events-none absolute -left-52 top-16 h-[520px] w-[520px] rounded-full bg-emerald-100/55 blur-[135px]" />
      <div className="pointer-events-none absolute -right-52 bottom-4 h-[520px] w-[520px] rounded-full bg-sky-100/60 blur-[135px]" />

      <motion.span
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="pointer-events-none absolute left-[7%] top-[24%] h-28 w-28 rounded-full border border-dashed border-emerald-300/55"
      />

      <motion.span
        animate={{
          rotate: [360, 0],
          y: [0, -12, 0],
        }}
        transition={{
          rotate: {
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 4.4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="pointer-events-none absolute bottom-[12%] right-[8%] h-24 w-24 rounded-full border border-dashed border-sky-300/55"
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          {...businessApiHeadingProps}
          className="mx-auto max-w-[1200px] text-center"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-[#F0FAF3] px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#2B9C52]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#2B9C52] shadow-sm">
              <Workflow className="h-3.5 w-3.5" />
            </span>
            GUIDED PAYMENT WORKFLOW
          </div>

          <h2 className="mx-auto max-w-[1120px] text-center text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
            How{" "}
            <span className="relative inline-block text-[#16A34A]">
              WhatsApp Pay
              <motion.span
                animate={{
                  scaleX: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-1 left-0 -z-10 h-[8px] w-full origin-left rounded-full bg-[#DDF8E7]"
              />
            </span>{" "}
            Works
          </h2>

          <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
            Follow the complete journey from a payment request in chat to
            instant confirmation and automatic order fulfilment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.14 }}
          transition={{ duration: 0.82, delay: 0.12, ease: EASE }}
          className="relative mt-8 overflow-hidden rounded-[28px] border border-white bg-white/80 p-2.5 shadow-[0_34px_95px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-3 lg:mt-10"
        >
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1.04fr)_minmax(380px,0.96fr)]">
            {/* Large animated visual */}
            <div className="relative min-h-[430px] overflow-hidden rounded-[24px] bg-[#071B4D] lg:min-h-[520px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.imageAlt}
                  loading="eager"
                  initial={{
                    opacity: 0,
                    x: 28,
                    scale: 1.02,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: [1.02, 1.055, 1.02],
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    x: -24,
                    scale: 1.01,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    opacity: { duration: 0.55, ease: EASE },
                    x: { duration: 0.55, ease: EASE },
                    filter: { duration: 0.55, ease: EASE },
                    scale: {
                      duration: 5.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className={`absolute inset-0 bg-gradient-to-t ${active.tint} opacity-55`} />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,77,0.38),transparent_68%)]" />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5">
                <motion.div
                  key={`step-${activeStep}`}
                  initial={{ opacity: 0, scale: 0.65, rotate: -14 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="flex items-center gap-3"
                >
                  <HowPayStepMicroAnimation
                    index={activeStep}
                    icon={ActiveIcon}
                    accent={active.accent}
                  />

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-white/65">
                      Current Step
                    </p>
                    <p className="mt-0.5 text-sm font-extrabold text-white">
                      {active.number} / 05
                    </p>
                  </div>
                </motion.div>

                <span className="rounded-full border border-white/25 bg-white/14 px-3 py-1.5 text-[9px] font-extrabold text-white backdrop-blur-md">
                  Canva replacement: 1600 × 1000 px
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 38, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                  transition={{ duration: 0.55, ease: EASE }}
                  className="absolute inset-x-0 bottom-0 p-5 sm:p-6"
                >
                  <span
                    className="inline-flex rounded-full px-3 py-1.5 text-[10px] font-extrabold text-white shadow-lg"
                    style={{ backgroundColor: active.accent }}
                  >
                    STEP {active.number}
                  </span>

                  <h3 className="mt-3 max-w-[620px] text-[22px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white sm:text-[28px]">
                    {active.title}
                  </h3>

                  <p className="mt-2 max-w-[640px] text-[12px] font-medium leading-5 text-white sm:text-[13px]">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-5 right-5 hidden items-end gap-2 sm:flex">
                {steps.map((step, index) => (
                  <motion.button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    animate={{
                      height: activeStep === index ? 34 : 9,
                      opacity: activeStep === index ? 1 : 0.48,
                    }}
                    transition={{ duration: 0.38, ease: EASE }}
                    className="w-2 rounded-full bg-white"
                    aria-label={`Open step ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Animated step cards */}
            <div className="relative grid gap-2.5 lg:grid-rows-5">
              <div className="pointer-events-none absolute bottom-10 left-[43px] top-10 hidden w-px bg-gradient-to-b from-emerald-300 via-sky-300 to-cyan-300 sm:block" />

              <motion.span
                animate={{
                  top: `${activeStep * 20 + 10}%`,
                }}
                transition={{ duration: 0.55, ease: EASE }}
                className="pointer-events-none absolute left-[37px] z-30 hidden h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.75)] sm:block"
              />

              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep === index;

                return (
                  <motion.button
                    key={step.number}
                    type="button"
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    initial={{
                      opacity: 0,
                      x: 28,
                      scale: 0.94,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    animate={{
                      x: isActive ? -7 : 0,
                      scale: isActive ? 1.018 : 1,
                    }}
                    transition={{
                      opacity: {
                        duration: 0.5,
                        delay: 0.24 + index * 0.11,
                        ease: EASE,
                      },
                      x: { duration: 0.42, ease: EASE },
                      scale: { duration: 0.42, ease: EASE },
                    }}
                    className={`group relative grid min-h-[88px] grid-cols-[66px_minmax(0,1fr)] items-center gap-2.5 overflow-hidden rounded-[17px] border p-2.5 text-left transition-colors duration-300 sm:grid-cols-[72px_minmax(0,1fr)_24px] ${
                      isActive
                        ? "border-emerald-300 bg-[linear-gradient(135deg,#FFFFFF_0%,#ECFDF3_100%)] shadow-[0_20px_44px_rgba(16,185,129,0.18)]"
                        : "border-slate-200/80 bg-white/92 shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
                    }`}
                  >
                    {isActive && (
                      <>
                        <motion.span
                          animate={{
                            opacity: [0.2, 0.68, 0.2],
                            scale: [0.97, 1.04, 0.97],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="pointer-events-none absolute inset-0 bg-emerald-200/32 blur-xl"
                        />

                        <motion.span
                          animate={{ x: ["-150%", "480%"] }}
                          transition={{
                            duration: 1.55,
                            repeat: Infinity,
                            repeatDelay: 0.3,
                            ease: "easeInOut",
                          }}
                          className="pointer-events-none absolute inset-y-0 left-0 w-[16%] rotate-[10deg] bg-gradient-to-r from-transparent via-white/85 to-transparent"
                        />
                      </>
                    )}

                    <div
                      className="relative z-10 flex h-[64px] items-center justify-center overflow-hidden rounded-[12px]"
                      style={{
                        background: `linear-gradient(135deg, ${step.accent}1F, #ffffff 68%)`,
                      }}
                    >
                      <motion.span
                        animate={
                          isActive
                            ? {
                                scale: [1, 1.12, 1],
                                rotate: [0, -6, 6, 0],
                              }
                            : { scale: 1 }
                        }
                        transition={{
                          duration: 1.5,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-[0_10px_22px_rgba(15,23,42,0.12)]"
                        style={{ backgroundColor: step.accent }}
                      >
                        <Icon className="h-4 w-4" />
                      </motion.span>

                      <span className="absolute bottom-1.5 left-1.5 rounded-full bg-white/92 px-1.5 py-0.5 text-[7px] font-black text-[#071B4D]">
                        {step.number}
                      </span>
                    </div>

                    <div className="relative z-10 min-w-0">
                      <div className="flex items-start gap-2">
                        <motion.span
                          animate={
                            isActive
                              ? {
                                  y: [0, -4, 0],
                                  rotate: [0, -5, 5, 0],
                                  scale: [1, 1.1, 1],
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
                          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[10px]"
                          style={{
                            color: isActive ? "#FFFFFF" : step.accent,
                            backgroundColor: isActive
                              ? step.accent
                              : `${step.accent}16`,
                          }}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </motion.span>

                        <div>
                          <h4 className="text-[10px] font-extrabold leading-[1.25] text-[#14204B] sm:text-[11px]">
                            {step.title}
                          </h4>

                          <p className="mt-0.5 line-clamp-2 text-[7.5px] font-medium leading-[1.35] text-slate-500 sm:text-[8px]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <motion.span
                      animate={{
                        opacity: isActive ? 1 : 0.34,
                        x: isActive ? [0, -4, 0] : 0,
                      }}
                      transition={{
                        x: {
                          duration: 1.2,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                        },
                      }}
                      className="relative z-10 hidden text-emerald-500 sm:block"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                    </motion.span>

                    <motion.span
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 1.6,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#25D366] via-emerald-400 to-cyan-400"
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HowPayStepMicroAnimation({ index, icon: Icon, accent }) {
  if (index === 0) {
    return (
      <motion.span
        animate={{
          x: [0, 9, 0],
          y: [0, -4, 0],
          rotate: [0, -8, 4, 0],
        }}
        transition={{
          duration: 1.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/18 text-white backdrop-blur-md"
      >
        <Icon className="h-5 w-5" />
      </motion.span>
    );
  }

  if (index === 1) {
    return (
      <motion.span
        animate={{
          scale: [1, 1.12, 1],
          boxShadow: [
            "0 0 0 rgba(59,130,246,0)",
            "0 0 28px rgba(59,130,246,0.55)",
            "0 0 0 rgba(59,130,246,0)",
          ],
        }}
        transition={{
          duration: 1.45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/18 text-white backdrop-blur-md"
      >
        <Icon className="h-5 w-5" />
      </motion.span>
    );
  }

  if (index === 2) {
    return (
      <motion.span
        animate={{
          rotateY: [0, 180, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/18 text-white backdrop-blur-md"
      >
        <Icon className="h-5 w-5" />
      </motion.span>
    );
  }

  if (index === 3) {
    return (
      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/18 text-white backdrop-blur-md">
        <motion.span
          animate={{
            scale: [0.75, 1.55],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute inset-0 rounded-2xl border"
          style={{ borderColor: accent }}
        />
        <motion.span
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="h-5 w-5" />
        </motion.span>
      </span>
    );
  }

  return (
    <motion.span
      animate={{
        rotate: [0, 8, -8, 0],
        y: [0, -4, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/18 text-white backdrop-blur-md"
    >
      <motion.span
        animate={{
          opacity: [0.35, 1, 0.35],
          scale: [0.75, 1.1, 0.75],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-1 -top-1 h-3 w-3 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <Icon className="h-5 w-5" />
    </motion.span>
  );
}



const paymentBenefitBookPages = [
  {
    number: "01",
    title: "Completion",
    heading: "Higher Completion Rates",
    description:
      "Customers can move from chat to payment without extra switching, reducing drop-offs and helping more transactions finish.",
    points: ["Complete inside the chat flow", "Fewer abandoned payment links", "Cleaner customer journey"],
    icon: TrendingUp,
    image: "/assets/optimized/pay-step-1.jpg",
    color: "#22C55E",
    softColor: "#EAFBF1",
    borderColor: "#B8E3C3",
  },
  {
    number: "02",
    title: "Speed",
    heading: "Faster Order-to-Payment Cycle",
    description:
      "Confirm orders, share requests, collect payments, and continue the conversation in the same WhatsApp thread.",
    points: ["Faster collection flow", "Request-to-receipt tracking", "Less customer friction"],
    icon: TimerReset,
    image: "/assets/optimized/pay-step-2.jpg",
    color: "#3B82F6",
    softColor: "#EAF4FF",
    borderColor: "#BED7FA",
  },
  {
    number: "03",
    title: "Trust",
    heading: "Built-In Trust & Security",
    description:
      "Use familiar WhatsApp conversations with clear payment details and secure confirmation steps that build confidence.",
    points: ["Recognizable payment context", "Clear amount and order details", "Secure confirmation steps"],
    icon: LockKeyhole,
    image: "/assets/optimized/pay-step-3.jpg",
    color: "#8B5CF6",
    softColor: "#F1EAFF",
    borderColor: "#D9C9FA",
  },
  {
    number: "04",
    title: "Updates",
    heading: "Real-Time Payment Confirmation",
    description:
      "Keep customers informed with payment status, receipts, and order progress updates directly inside the conversation.",
    points: ["Live payment visibility", "Automatic receipts", "Clear status communication"],
    icon: RadioTower,
    image: "/assets/optimized/pay-step-4.jpg",
    color: "#0EA5E9",
    softColor: "#EAF8FF",
    borderColor: "#BDE3FA",
  },
];

function KeyBusinessBenefitsBookSection() {
  const [activePage, setActivePage] = useState(0);
  const [direction, setDirection] = useState(1);
  const page = paymentBenefitBookPages[activePage];
  const Icon = page.icon;
  const lastPageIndex = paymentBenefitBookPages.length - 1;

  const goToPage = (nextPage) => {
    if (nextPage === activePage) return;
    setDirection(nextPage > activePage || (activePage === lastPageIndex && nextPage === 0) ? 1 : -1);
    setActivePage(nextPage);
  };

  const nextPage = () => goToPage(activePage === lastPageIndex ? 0 : activePage + 1);
  const previousPage = () => goToPage(activePage === 0 ? lastPageIndex : activePage - 1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection(1);
      setActivePage((current) => (current + 1) % paymentBenefitBookPages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16 xl:px-20">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,#ffffff_0%,#f7fff9_52%,#ffffff_100%)]" />
      <div className="pointer-events-none absolute -left-44 top-20 -z-10 h-[390px] w-[390px] rounded-full bg-emerald-100/60 blur-[110px]" />
      <div className="pointer-events-none absolute -right-44 bottom-4 -z-10 h-[420px] w-[420px] rounded-full bg-sky-100/55 blur-[120px]" />

      <div className="mx-auto max-w-[1480px]">
        <div className="mx-auto max-w-[1200px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-[#F0FAF3] px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-[#2B9C52]"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#2B9C52] shadow-sm">
              <BookOpen size={14} />
            </span>
            BUSINESS BENEFIT BOOK
          </motion.div>

          <motion.h2
            {...businessApiHeadingProps}
            className="mx-auto max-w-[1120px] text-center text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]"
          >
            Key Business Benefits of <AnimatedWhatsAppPayWord />
          </motion.h2>

          <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
            Explore WhatsApp Pay benefits as an interactive book with clear
            business outcomes on every page.
          </p>
        </div>

        <div className="relative mt-8" style={{ perspective: "1700px" }}>
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.article
              key={page.number}
              custom={direction}
              initial={{ opacity: 0, rotateY: direction > 0 ? -16 : 16, x: direction > 0 ? 38 : -38 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={{ opacity: 0, rotateY: direction > 0 ? 16 : -16, x: direction > 0 ? -38 : 38 }}
              transition={{ duration: 0.65, ease: EASE }}
              className="relative w-full overflow-hidden rounded-[34px] border bg-white shadow-[0_30px_90px_rgba(15,23,42,0.12)]"
              style={{
                borderColor: page.borderColor,
                transformStyle: "preserve-3d",
                transformOrigin: direction > 0 ? "left center" : "right center",
              }}
            >
              <div className="pointer-events-none absolute bottom-7 left-1/2 top-7 z-20 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200 to-transparent lg:block" />
              <div className="pointer-events-none absolute bottom-7 left-1/2 top-7 z-10 hidden w-14 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-100/55 to-transparent lg:block" />

              <div className="grid lg:h-[520px] lg:grid-cols-2">
                <div className="relative flex flex-col justify-center overflow-hidden px-6 py-8 sm:px-9 lg:px-12">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-[18px] text-sm font-black text-white shadow-lg"
                      style={{ backgroundColor: page.color, boxShadow: `0 14px 32px ${page.color}35` }}
                    >
                      {page.number}
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em]" style={{ color: page.color }}>
                        Payment Benefit
                      </p>
                      <p className="mt-1 text-xs font-bold text-slate-400">
                        {activePage + 1} of {paymentBenefitBookPages.length}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-5 text-[26px] font-black leading-[1.05] tracking-[-0.045em] text-[#071B2C] sm:mt-6 sm:text-[38px]">
                    {page.heading}
                  </h3>
                  <p className="mt-4 max-w-[520px] text-sm font-medium leading-6 text-slate-600">
                    {page.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {page.points.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.45, ease: EASE }}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                          style={{ color: page.color, backgroundColor: page.softColor }}
                        >
                          <CheckCircle2 size={13} strokeWidth={3} />
                        </span>
                        <p className="text-sm font-bold leading-6 text-slate-600">{point}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative flex min-h-[300px] items-center p-4 sm:min-h-[380px] sm:p-7 lg:min-h-[420px] lg:p-8">
                  <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-[22px] border sm:min-h-[340px] lg:min-h-[360px] lg:rounded-[26px]" style={{ borderColor: page.borderColor, backgroundColor: page.softColor }}>
                    <img src={page.image} alt={page.heading} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <span className="absolute right-4 top-4 z-10 rounded-full border border-white/35 bg-white/90 px-3 py-1.5 text-[9px] font-black text-[#14204B] shadow-sm backdrop-blur-md">
                      Canva: 1200 x 900 px
                    </span>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071B4D]/82 to-transparent p-5">
                      <span className="inline-flex rounded-full px-3 py-1 text-[9px] font-black text-white" style={{ backgroundColor: page.color }}>
                        {page.title}
                      </span>
                      <p className="mt-3 max-w-[420px] text-xl font-black leading-tight text-white">
                        {page.heading}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <button
            type="button"
            onClick={previousPage}
            aria-label="Previous benefit page"
            className="absolute left-2 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#071B2C] shadow-[0_14px_35px_rgba(15,23,42,0.15)] sm:-left-5 sm:h-11 sm:w-11"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={nextPage}
            aria-label="Next benefit page"
            className="absolute right-2 top-1/2 z-40 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#071B2C] shadow-[0_14px_35px_rgba(15,23,42,0.15)] sm:-right-5 sm:h-11 sm:w-11"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
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
                        : "border-white/10 bg-white/92 shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
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
                    className="rounded-full bg-white/92 px-2.5 py-1 text-[8px] font-extrabold"
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
  const reduceMotion = useReducedMotion();
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
