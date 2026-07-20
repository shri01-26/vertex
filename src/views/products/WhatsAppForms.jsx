"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileText,
  LockKeyhole,
  MessageCircle,
  MoreVertical,
  ShieldCheck,
  Signal,
  Sparkles,
  Wifi,
  Zap,
  Landmark,
  HeartPulse,
  ShoppingBag,
  Luggage,
  GraduationCap,
  Building2,
  CarFront,
  Truck,
  CalendarDays,
  Hotel,
  IndianRupee,
  MapPin,
  PackageCheck,
  BadgeCheck,
  LayoutDashboard,
  Database,
  Users,
  Clock3,
  TrendingUp,
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  RefreshCw,
  UserCheck,
  Share2,
  Workflow,
  Download,
  Inbox,
  Settings,
  Bell,
  BarChart3,
  Gauge,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    title: "No Redirects",
    icon: ArrowRight,
  },
  {
    title: "More Responses",
    icon: MessageCircle,
  },
  {
    title: "Higher Completion",
    icon: CheckCircle2,
  },
  {
    title: "Smart Automation",
    icon: Bot,
  },
];

const features = [
  {
    title: "Interactive",
    description: "Easy to fill",
    icon: ClipboardCheck,
    position: "lg:-translate-x-3",
    animation: "featureFloatOne",
  },
  {
    title: "Secure",
    description: "End-to-end encrypted",
    icon: ShieldCheck,
    position: "lg:translate-x-5",
    animation: "featureFloatTwo",
  },
  {
    title: "Engaging",
    description: "One chat, many actions",
    icon: MessageCircle,
    position: "lg:-translate-x-1",
    animation: "featureFloatThree",
  },
  {
    title: "Smart",
    description: "Automate & act instantly",
    icon: Sparkles,
    position: "lg:translate-x-7",
    animation: "featureFloatTwo",
  },
];

function AnimatedTypingText({ text, className = "" }) {
  const width = `${text.length}ch`;
  const underlineWidth = `${Math.max(text.length - 0.2, 1)}ch`;

  return (
    <span
      className={`relative inline-flex max-w-full flex-none items-baseline whitespace-nowrap text-[#16A34A] ${className}`}
      style={{ width: `min(${width}, 100%)` }}
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

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-white">
        <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#f8fbff] px-5 py-14 sm:px-8 lg:px-12 xl:px-20">
          <BackgroundDecorations />

          <div className="relative z-10 mx-auto grid w-full max-w-[1450px] items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)_minmax(0,0.7fr)] lg:gap-8">
            <ContentSection />

            <PhoneSection />

            <FeaturesSection />
          </div>
        </section>

        {/* Structured form journey section */}
        <WhatsAppFormJourney />

        {/* Interactive experience stacked-card section */}
        <WhatsAppExperienceStack />

        {/* Customer-facing industries section */}
        <IndustriesSection />

        {/* Form-data dashboard section */}
        <FormDataDashboardSection />
      </main>

      <style jsx global>{`
        @keyframes contentEntry {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes businessApiHeadingReveal {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes phoneEntrance {
          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.94);
          }

          65% {
            opacity: 1;
            transform: translateY(-4px) scale(1.01);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes phoneFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes orbitClockwise {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitCounterClockwise {
          0% {
            transform: rotate(360deg);
          }

          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes orbitGlow {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(0.97);
          }

          50% {
            opacity: 1;
            transform: scale(1.04);
          }
        }

        @keyframes orbitDotPulse {
          0%,
          100% {
            transform: scale(0.75);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.25);
            opacity: 1;
          }
        }

        @keyframes screenScan {
          0% {
            top: -3%;
            opacity: 0;
          }

          10% {
            opacity: 0.8;
          }

          85% {
            opacity: 0.55;
          }

          100% {
            top: 103%;
            opacity: 0;
          }
        }

        @keyframes screenShine {
          0%,
          30% {
            left: -90%;
            opacity: 0;
          }

          42% {
            opacity: 0.8;
          }

          62% {
            left: 145%;
            opacity: 0;
          }

          100% {
            left: 145%;
            opacity: 0;
          }
        }

        @keyframes messageSlide {
          0% {
            opacity: 0;
            transform: translateX(35px) scale(0.92);
          }

          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes messagePulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 3px 8px rgba(15, 23, 42, 0.06);
          }

          50% {
            transform: scale(1.012);
            box-shadow: 0 8px 18px rgba(34, 197, 94, 0.1);
          }
        }

        @keyframes formReveal {
          0% {
            opacity: 0;
            transform: translateY(25px) scale(0.94);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fieldReveal {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progressCycle {
          0% {
            width: 18%;
          }

          40% {
            width: 45%;
          }

          70% {
            width: 78%;
          }

          100% {
            width: 18%;
          }
        }

        @keyframes inputGlowOne {
          0%,
          18%,
          100% {
            border-color: #e2e8f0;
            box-shadow: none;
            background: #f8fafc;
          }

          25%,
          38% {
            border-color: #34d399;
            box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.12);
            background: #ffffff;
          }
        }

        @keyframes inputGlowTwo {
          0%,
          40%,
          62%,
          100% {
            border-color: #e2e8f0;
            box-shadow: none;
            background: #f8fafc;
          }

          47%,
          57% {
            border-color: #38bdf8;
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.12);
            background: #ffffff;
          }
        }

        @keyframes selectGlow {
          0%,
          63%,
          86%,
          100% {
            border-color: #e2e8f0;
            box-shadow: none;
            background: #f8fafc;
          }

          70%,
          80% {
            border-color: #34d399;
            box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.12);
            background: #ffffff;
          }
        }

        @keyframes cursorBlink {
          0%,
          45% {
            opacity: 1;
          }

          46%,
          100% {
            opacity: 0;
          }
        }

        @keyframes buttonShine {
          0%,
          28% {
            left: -60%;
          }

          55% {
            left: 130%;
          }

          100% {
            left: 130%;
          }
        }

        @keyframes buttonPulse {
          0%,
          100% {
            transform: translateY(0);
            box-shadow: 0 7px 16px rgba(22, 163, 74, 0.22);
          }

          50% {
            transform: translateY(-2px);
            box-shadow: 0 12px 24px rgba(22, 163, 74, 0.3);
          }
        }

        @keyframes typingDot {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.35;
          }

          30% {
            transform: translateY(-3px);
            opacity: 1;
          }
        }

        @keyframes successToast {
          0%,
          12% {
            opacity: 0;
            transform: translate(-50%, 15px) scale(0.92);
          }

          22%,
          68% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }

          82%,
          100% {
            opacity: 0;
            transform: translate(-50%, -10px) scale(0.95);
          }
        }

        @keyframes checkPop {
          0%,
          65% {
            transform: scale(0) rotate(-20deg);
          }

          75% {
            transform: scale(1.2) rotate(5deg);
          }

          85%,
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes whatsappBounce {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          45% {
            transform: translateY(-5px) rotate(-5deg);
          }

          60% {
            transform: translateY(-2px) rotate(4deg);
          }
        }

        @keyframes whatsappRipple {
          0% {
            transform: scale(0.8);
            opacity: 0.65;
          }

          100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }

        @keyframes phoneShadow {
          0%,
          100% {
            transform: translateX(-50%) scaleX(0.84);
            opacity: 0.15;
          }

          50% {
            transform: translateX(-50%) scaleX(1.05);
            opacity: 0.24;
          }
        }

        @keyframes featureEntry {
          0% {
            opacity: 0;
            transform: translateX(28px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes featureFloatOne {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes featureFloatTwo {
          0%,
          100% {
            transform: translateY(-4px);
          }

          50% {
            transform: translateY(7px);
          }
        }

        @keyframes featureFloatThree {
          0%,
          100% {
            transform: translateY(4px);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes dotMove {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.8);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.15);
          }
        }

        @keyframes plusFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-10px) rotate(90deg);
          }
        }

        @keyframes lineMove {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(100%);
          }
        }


        @keyframes journeyRailMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        @keyframes journeyPacketTravel {
          0% {
            left: 1%;
            transform: translate(-50%, -50%) scale(0.85);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          48% {
            transform: translate(-50%, -50%) scale(1.08);
          }
          92% {
            opacity: 1;
          }
          100% {
            left: 99%;
            transform: translate(-50%, -50%) scale(0.85);
            opacity: 0;
          }
        }

        @keyframes journeyCardFloatA {
          0%,
          100% {
            transform: translateY(0) rotate(-0.4deg);
          }
          50% {
            transform: translateY(-12px) rotate(0.6deg);
          }
        }

        @keyframes journeyCardFloatB {
          0%,
          100% {
            transform: translateY(-5px) rotate(0.5deg);
          }
          50% {
            transform: translateY(9px) rotate(-0.6deg);
          }
        }

        @keyframes journeyIconOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes journeyIconOrbitReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes journeyImageZoom {
          0%,
          100% {
            transform: scale(1.04);
          }
          50% {
            transform: scale(1.12);
          }
        }

        @keyframes journeyScan {
          0% {
            top: -5%;
            opacity: 0;
          }
          12% {
            opacity: 0.8;
          }
          88% {
            opacity: 0.45;
          }
          100% {
            top: 105%;
            opacity: 0;
          }
        }

        @keyframes journeyTyping {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.35;
          }
          30% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }

        @keyframes journeyPulseRing {
          0% {
            transform: scale(0.85);
            opacity: 0.75;
          }
          100% {
            transform: scale(1.75);
            opacity: 0;
          }
        }

        @keyframes journeyChipFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }
          50% {
            transform: translateY(-7px) rotate(3deg);
          }
        }

        @keyframes journeyArrowPulse {
          0%,
          100% {
            transform: translateX(0);
            opacity: 0.45;
          }
          50% {
            transform: translateX(8px);
            opacity: 1;
          }
        }

        .journey-moving-rail {
          background-size: 200% 100%;
          animation: journeyRailMove 4s linear infinite;
        }

        .journey-packet {
          animation: journeyPacketTravel 6s linear infinite;
          will-change: left, transform, opacity;
        }


        @keyframes experienceSectionReveal {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes experienceMobileReveal {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .experience-stack-card {
          will-change: transform, opacity;
          transition-property: transform, opacity, filter;
          transition-duration: 1050ms;
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .experience-stack-card-inner {
          transition:
            transform 350ms ease,
            box-shadow 350ms ease,
            border-color 350ms ease;
        }

        .experience-stack-card-inner:hover {
          transform: translateY(-14px) scale(1.055);
          border-color: rgba(52, 211, 153, 0.48);
          box-shadow: 0 34px 85px rgba(16, 185, 129, 0.2);
        }


        @keyframes industrySectionReveal {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes industryCardReveal {
          0% {
            opacity: 0;
            transform: translateY(42px) scale(0.94) rotate(1deg);
          }

          65% {
            opacity: 1;
            transform: translateY(-5px) scale(1.015) rotate(-0.3deg);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
          }
        }

        @keyframes industryCoinRotate {
          0% {
            transform: rotateY(0deg) translateY(0);
          }

          50% {
            transform: rotateY(180deg) translateY(-4px);
          }

          100% {
            transform: rotateY(360deg) translateY(0);
          }
        }

        @keyframes industryHeartbeat {
          0%,
          100% {
            transform: scale(1);
          }

          18% {
            transform: scale(1.12);
          }

          32% {
            transform: scale(0.97);
          }

          46% {
            transform: scale(1.08);
          }

          62% {
            transform: scale(1);
          }
        }

        @keyframes industryPackageSlide {
          0%,
          100% {
            transform: translateX(-8px) rotate(-3deg);
            opacity: 0.68;
          }

          50% {
            transform: translateX(8px) rotate(3deg);
            opacity: 1;
          }
        }

        @keyframes industryPinPulse {
          0%,
          100% {
            transform: translateY(0) scale(1);
            filter: drop-shadow(0 0 0 rgba(14, 165, 233, 0));
          }

          50% {
            transform: translateY(-6px) scale(1.08);
            filter: drop-shadow(0 8px 8px rgba(14, 165, 233, 0.22));
          }
        }

        @keyframes industryCapFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-4deg);
          }

          50% {
            transform: translateY(-7px) rotate(5deg);
          }
        }

        @keyframes industryDocumentPop {
          0%,
          18% {
            transform: translateY(8px) scale(0.86);
            opacity: 0.45;
          }

          35%,
          72% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }

          100% {
            transform: translateY(-5px) scale(0.94);
            opacity: 0.55;
          }
        }

        @keyframes industryCarMove {
          0%,
          100% {
            transform: translateX(-7px);
          }

          50% {
            transform: translateX(8px);
          }
        }

        @keyframes industryVerifiedPop {
          0%,
          35% {
            transform: scale(0.72) rotate(-8deg);
            opacity: 0.45;
          }

          55% {
            transform: scale(1.14) rotate(4deg);
            opacity: 1;
          }

          72%,
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes industryTruckMove {
          0% {
            transform: translateX(-10px);
          }

          48% {
            transform: translateX(9px);
          }

          55% {
            transform: translateX(9px);
          }

          100% {
            transform: translateX(-10px);
          }
        }

        @keyframes industryTicketScan {
          0% {
            top: 10%;
            opacity: 0;
          }

          12% {
            opacity: 0.8;
          }

          88% {
            opacity: 0.55;
          }

          100% {
            top: 88%;
            opacity: 0;
          }
        }

        @keyframes industryGlowTravel {
          0% {
            left: -45%;
          }

          100% {
            left: 125%;
          }
        }

        @keyframes industryDotsPulse {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.8);
          }

          50% {
            opacity: 0.85;
            transform: scale(1.12);
          }
        }

        .industry-card-shell {
          transition:
            transform 380ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 380ms ease,
            border-color 380ms ease;
        }

        .industry-card-shell:hover {
          transform: translateY(-9px) scale(1.025);
          border-color: rgba(52, 211, 153, 0.45);
          box-shadow: 0 30px 75px rgba(16, 185, 129, 0.17);
        }

        .industry-card-shell:hover .industry-card-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        .industry-card-shell:hover .industry-card-glow {
          animation: industryGlowTravel 1.1s ease-out;
        }


        @keyframes dashboardSectionReveal {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dashboardShellReveal {
          0% {
            opacity: 0;
            transform: translateY(42px) scale(0.97);
          }

          68% {
            opacity: 1;
            transform: translateY(-4px) scale(1.006);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes dashboardRowReveal {
          0% {
            opacity: 0;
            transform: translateX(-18px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes dashboardWorkflowReveal {
          0% {
            opacity: 0;
            transform: translateX(22px) scale(0.97);
          }

          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes dashboardLivePulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4);
          }

          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 7px rgba(52, 211, 153, 0);
          }
        }

        @keyframes dashboardSidebarPulse {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes dashboardSyncSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes dashboardShine {
          0%,
          32% {
            left: -45%;
            opacity: 0;
          }

          45% {
            opacity: 0.8;
          }

          67% {
            left: 125%;
            opacity: 0;
          }

          100% {
            left: 125%;
            opacity: 0;
          }
        }

        @keyframes dashboardTableScan {
          0% {
            top: -10%;
            opacity: 0;
          }

          12% {
            opacity: 0.55;
          }

          86% {
            opacity: 0.3;
          }

          100% {
            top: 110%;
            opacity: 0;
          }
        }

        @keyframes dashboardMetricPulse {
          0%,
          100% {
            transform: scaleX(0.96);
            opacity: 0.68;
          }

          50% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes dashboardWorkflowGlow {
          0%,
          100% {
            opacity: 0.16;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.55;
            transform: scale(1.04);
          }
        }

        @keyframes dashboardBenefitFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes dashboardTypingDot {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.3;
          }

          30% {
            transform: translateY(-3px);
            opacity: 1;
          }
        }

        @keyframes dashboardChartRise {
          0% {
            transform: scaleY(0.2);
            opacity: 0.35;
          }

          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        .dashboard-workflow-card {
          transition:
            transform 320ms ease,
            border-color 320ms ease,
            background-color 320ms ease,
            box-shadow 320ms ease;
        }

        .dashboard-workflow-card[data-active="true"] {
          transform: translateX(-7px) scale(1.02);
          border-color: rgba(52, 211, 153, 0.42);
          background: linear-gradient(
            135deg,
            rgba(236, 253, 245, 0.98),
            rgba(255, 255, 255, 0.98)
          );
          box-shadow: 0 16px 34px rgba(16, 185, 129, 0.13);
        }

        .dashboard-row:hover {
          transform: translateX(4px);
          background: rgba(240, 253, 250, 0.72);
        }


        .phone-sharp,
        .phone-sharp * {
          filter: none !important;
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          backface-visibility: hidden;
        }

        .phone-sharp img,
        .phone-sharp svg {
          image-rendering: auto;
          transform: translateZ(0);
        }

        .orbit-clockwise {
          animation: orbitClockwise 10s linear infinite !important;
          transform-origin: 50% 50%;
          animation-play-state: running !important;
          will-change: transform;
          backface-visibility: hidden;
        }

        .orbit-counter-clockwise {
          animation: orbitCounterClockwise 7s linear infinite !important;
          transform-origin: 50% 50%;
          animation-play-state: running !important;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </>
  );
}

function ContentSection() {
  return (
    <div
      className="relative z-20 mx-0 max-w-[720px] text-left"
      style={{
        animation: "contentEntry 0.9s cubic-bezier(0.16,1,0.3,1) both",
      }}
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.05)] backdrop-blur-md">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 shadow-[0_4px_12px_rgba(16,185,129,0.25)]">
          <MessageCircle className="h-3 w-3 fill-white text-white" />
        </span>

        <span className="text-[11px] font-extrabold tracking-[0.08em] text-emerald-600">
          WHATSAPP FORMS
        </span>
      </div>

      <h1 className="max-w-[720px] text-left text-[clamp(1.4rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#292929]">
        <span className="block whitespace-nowrap leading-[1.03]">
          Design <AnimatedTypingText text="WhatsApp forms" />
        </span>
        <span className="block whitespace-nowrap leading-[1.03]">
          that simplify data collection
        </span>
      </h1>

      <p className="mt-7 max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
        Collect customer data directly inside WhatsApp with guided flows.
        <br />
        No redirects or app switching, just faster responses and higher completion.
      </p>

      <div className="mt-9 flex flex-wrap justify-start gap-3">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="group flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3.5 py-2.5 opacity-0 shadow-[0_8px_25px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_14px_35px_rgba(16,185,129,0.12)]"
              style={{
                animation: "contentEntry 0.7s ease-out both",
                animationDelay: `${0.25 + index * 0.12}s`,
              }}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                <Icon className="h-3 w-3" />
              </span>

              <span className="whitespace-nowrap text-[11px] font-bold text-slate-600 sm:text-xs">
                {benefit.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PhoneSection() {
  return (
  <div className="relative flex min-h-[665px] items-center justify-center lg:min-h-[710px] lg:translate-x-14 xl:translate-x-20">
      {/* Static centering wrapper */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[530px] w-[530px] -translate-x-1/2 -translate-y-1/2 sm:h-[575px] sm:w-[575px]">
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-100/80 via-white to-emerald-100/80 blur-[3px]"
          style={{
            animation: "orbitGlow 5s ease-in-out infinite",
          }}
        />

        {/* Outer rotating orbit */}
        <div className="orbit-clockwise absolute inset-0 rounded-full border border-dashed border-sky-300/80">
          <span
            className="absolute left-1/2 top-[-7px] h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-white bg-emerald-400 shadow-[0_4px_14px_rgba(16,185,129,0.4)]"
            style={{
              animation: "orbitDotPulse 2s ease-in-out infinite",
            }}
          />

          <span
            className="absolute bottom-[10%] left-[13%] h-3 w-3 rounded-full border-[3px] border-white bg-sky-400 shadow-md"
            style={{
              animation: "orbitDotPulse 2s ease-in-out 0.7s infinite",
            }}
          />

          <span
            className="absolute right-[7%] top-[22%] flex h-11 w-11 items-center justify-center rounded-2xl border border-white bg-white shadow-[0_10px_25px_rgba(15,23,42,0.12)]"
          >
            <FileText className="h-5 w-5 text-sky-500" />
          </span>

          <span
            className="absolute bottom-[20%] right-[3%] h-3 w-3 rounded-full border-[3px] border-white bg-emerald-400 shadow-md"
            style={{
              animation: "orbitDotPulse 2s ease-in-out 1.2s infinite",
            }}
          />
        </div>

        {/* Inner rotating orbit */}
        <div className="orbit-counter-clockwise absolute inset-[64px] rounded-full border border-dashed border-emerald-300/80">
          <span
            className="absolute right-[-7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-white bg-emerald-400 shadow-md"
            style={{
              animation: "orbitDotPulse 2.3s ease-in-out infinite",
            }}
          />

          <span className="absolute -left-5 top-[23%] flex h-10 w-10 items-center justify-center rounded-xl border border-white bg-white shadow-[0_10px_25px_rgba(15,23,42,0.12)]">
            <Zap className="h-4.5 w-4.5 text-sky-500" />
          </span>

          <span className="absolute -bottom-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl border border-white bg-white shadow-[0_10px_25px_rgba(15,23,42,0.12)]">
            <Check className="h-4.5 w-4.5 text-emerald-500" />
          </span>

          <span
            className="absolute left-[25%] top-[-6px] h-3 w-3 rounded-full border-[3px] border-white bg-sky-400 shadow-md"
            style={{
              animation: "orbitDotPulse 2.3s ease-in-out 0.8s infinite",
            }}
          />
        </div>

        {/* Centre glass circle */}
        <div className="absolute inset-[125px] rounded-full bg-white/55 shadow-[inset_0_0_45px_rgba(14,165,233,0.1)] backdrop-blur-lg" />
      </div>

      {/* Phone entry */}
      <div
        className="phone-sharp relative z-20"
        style={{
          animation:
            "phoneEntrance 1.1s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        {/* Phone floating animation wrapper */}
        <div
          style={{
            animation: "phoneFloat 7s ease-in-out 1.1s infinite",

          }}
        >
          {/* Wider and balanced phone */}
        <div className="relative h-[590px] w-[300px] translate-z-0 rounded-[40px] border-[6px] border-[#17181d] bg-[#17181d] p-[4px] shadow-[0_30px_70px_rgba(15,23,42,0.28)] [backface-visibility:hidden] [transform:translateZ(0)] sm:h-[620px] sm:w-[325px]">
            {/* Dynamic island */}
            <div className="pointer-events-none absolute left-1/2 top-[7px] z-50 h-[22px] w-[98px] -translate-x-1/2 rounded-full bg-[#101115]">
              <span className="absolute right-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-slate-700" />
            </div>

            {/* Full phone screen */}
            <div className="flex h-full flex-col overflow-hidden rounded-[31px] bg-[#e9efed] [backface-visibility:hidden] [transform:translateZ(0)]">
              <PhoneHeader />

              {/* Flexible chat body */}
              <div className="relative min-h-0 flex-1 overflow-hidden bg-[#e9efed] px-3 py-3">
                {/* WhatsApp pattern */}
                <div className="pointer-events-none absolute inset-0 grid grid-cols-7 gap-4 overflow-hidden p-3 opacity-[0.035]">
                  {Array.from({ length: 84 }).map((_, index) => (
                    <MessageCircle
                      key={index}
                      className="h-3.5 w-3.5 rotate-12 text-slate-700"
                    />
                  ))}
                </div>

                {/* Continuous scan */}
                <div
                  className="pointer-events-none absolute left-0 z-10 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                  style={{
                    animation: "screenScan 4.5s linear infinite",
                  }}
                />

                <div className="relative z-20">
                  <AnimatedMessage />

                  <FormCard />
                </div>

                <SuccessToast />
              </div>
            </div>

            {/* WhatsApp floating icon */}
            <div className="absolute -bottom-4 -right-4 z-50">
              <span
                className="absolute inset-0 rounded-full bg-emerald-400/30"
                style={{
                  animation: "whatsappRipple 2.4s ease-out infinite",
                }}
              />

              <div
                className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full border-[4px] border-white bg-[#22c55e] shadow-[0_12px_28px_rgba(34,197,94,0.4)]"
                style={{
                  animation: "whatsappBounce 3s ease-in-out infinite",
                }}
              >
                <MessageCircle className="h-6 w-6 fill-white text-white" />
              </div>
            </div>

            {/* Dynamic shadow */}
            <div
              className="absolute -bottom-10 left-1/2 -z-10 h-8 w-[78%] -translate-x-1/2 rounded-full bg-slate-900/20 blur-xl"
              style={{
                animation: "phoneShadow 7s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneHeader() {
  return (
    <div className="shrink-0 bg-[#075e54] px-3 pb-2.5 pt-3 text-white">
      <div className="mb-2 flex items-center justify-between px-1 text-[8px] font-semibold">
        <span>9:41</span>

        <div className="flex items-center gap-1">
          <Signal className="h-2.5 w-2.5" />
          <Wifi className="h-2.5 w-2.5" />

          <div className="h-2.5 w-4 rounded-[3px] border border-white/80 p-[1px]">
            <div className="h-full w-[75%] rounded-[1px] bg-white" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Go back"
          className="text-lg font-medium text-white transition duration-300 hover:-translate-x-1"
        >
          ‹
        </button>

        <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/30 bg-gradient-to-br from-emerald-300 to-emerald-600">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
            alt="Business profile"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <p className="truncate text-[10px] font-bold">Vertex Suite</p>

            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-400">
              <Check className="h-2 w-2 stroke-[3] text-white" />
            </span>
          </div>

          <p className="text-[7px] text-white/70">Business Account</p>
        </div>

        <MoreVertical className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}

function AnimatedMessage() {
  return (
    <div
      className="mb-2.5 ml-auto max-w-[84%]"
      style={{
        animation:
          "messageSlide 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s both",
      }}
    >
      <div
        className="rounded-xl rounded-tr-sm bg-[#d9fdd3] px-2.5 py-1.5"
        style={{
          animation: "messagePulse 4s ease-in-out 1.2s infinite",
        }}
      >
        <p className="text-[8px] font-bold text-slate-800">Hi Rahul 👋</p>

        <p className="mt-0.5 text-[7px] leading-3 text-slate-600">
          Please fill out the form below to get started.
        </p>

        <div className="mt-0.5 text-right text-[6px] text-slate-400">
          11:42 AM <span className="font-bold text-sky-500">✓✓</span>
        </div>
      </div>
    </div>
  );
}

function FormCard() {
  return (
    <div
      className="overflow-hidden rounded-xl rounded-tl-sm bg-white shadow-[0_8px_22px_rgba(15,23,42,0.12)]"
      style={{
        animation:
          "formReveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.9s both",
      }}
    >
      <div className="border-b border-slate-100 bg-gradient-to-r from-emerald-50 to-white px-3 py-2.5">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-extrabold text-slate-800">
              Travel Enquiry Form
            </p>

            <p className="mt-0.5 text-[6.5px] text-slate-400">
              Complete directly inside WhatsApp
            </p>
          </div>

          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
            <FileText className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
            style={{
              animation: "progressCycle 7s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <div className="space-y-2 px-3 py-2.5">
        <AnimatedInput
          label="Full Name"
          placeholder="Enter your name"
          animation="inputGlowOne"
          showCursor
        />

        <AnimatedInput
          label="Email Address"
          placeholder="Enter your email address"
          animation="inputGlowTwo"
        />

        <div
          style={{
            animation: "fieldReveal 0.55s ease-out 1.5s both",
          }}
        >
          <label className="mb-1 block text-[7.5px] font-bold text-slate-700">
            Destination of Interest
          </label>

          <button
            type="button"
            className="flex h-8 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-2 text-left text-[7.5px] text-slate-400"
            style={{
              animation: "selectGlow 7s ease-in-out infinite",
            }}
          >
            <span>Select an option</span>

            <ChevronDown className="h-3 w-3" />
          </button>
        </div>

        <button
          type="button"
          className="group relative flex h-9 w-full items-center justify-center gap-1.5 overflow-hidden rounded-md bg-[#16a34a] text-[8px] font-bold text-white"
          style={{
            animation: "buttonPulse 3s ease-in-out infinite",
          }}
        >
          <span
            className="absolute inset-y-0 -left-[60%] w-[35%] skew-x-[-20deg] bg-white/20"
            style={{
              animation: "buttonShine 4s ease-in-out infinite",
            }}
          />

          <span className="relative">Continue</span>

          <ArrowRight className="relative h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[6px] text-slate-400">
            <LockKeyhole className="h-2 w-2 text-emerald-500" />
            Information is secure
          </div>

          <TypingDots />
        </div>
      </div>
    </div>
  );
}

function AnimatedInput({
  label,
  placeholder,
  animation,
  showCursor = false,
}) {
  return (
    <div
      style={{
        animation: "fieldReveal 0.55s ease-out 1.2s both",
      }}
    >
      <label className="mb-1 block text-[7.5px] font-bold text-slate-700">
        {label}
      </label>

      <div
        className="relative flex h-8 items-center rounded-md border border-slate-200 bg-slate-50 px-2"
        style={{
          animation: `${animation} 7s ease-in-out infinite`,
        }}
      >
        <span className="text-[7.5px] text-slate-400">{placeholder}</span>

        {showCursor && (
          <span
            className="ml-0.5 h-3 w-[1px] bg-emerald-500"
            style={{
              animation: "cursorBlink 0.8s steps(1) infinite",
            }}
          />
        )}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-0.5 rounded-full bg-slate-100 px-2 py-1">
      {[0, 1, 2].map((item) => (
        <span
          key={item}
          className="h-1 w-1 rounded-full bg-slate-400"
          style={{
            animation: "typingDot 1.2s ease-in-out infinite",
            animationDelay: `${item * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}

function SuccessToast() {
  return (
    <div
      className="absolute bottom-3 left-1/2 z-30 flex w-[88%] items-center gap-2 rounded-lg border border-emerald-100 bg-white/95 px-2.5 py-2 shadow-[0_10px_25px_rgba(15,23,42,0.13)] backdrop-blur-md"
      style={{
        animation: "successToast 7s ease-in-out 3.2s infinite",
      }}
    >
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100"
        style={{
          animation: "checkPop 7s ease-in-out 3.2s infinite",
        }}
      >
        <Check className="h-3.5 w-3.5 text-emerald-600" />
      </span>

      <div>
        <p className="text-[7.5px] font-bold text-slate-700">
          Information saved
        </p>

        <p className="text-[6px] text-slate-400">
          Continue to the next step
        </p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="relative z-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:translate-x-4 xl:translate-x-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.title}
            className={feature.position}
            style={{
              animation: `featureEntry 0.7s ease-out ${
                0.45 + index * 0.13
              }s both`,
            }}
          >
            <div
              className="group rounded-2xl border border-white/90 bg-white/90 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.09)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_20px_50px_rgba(16,185,129,0.14)]"
              style={{
                animation: `${feature.animation} 5.5s ease-in-out ${
                  index * 0.45
                }s infinite`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-50 text-emerald-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-5 w-5" />

                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-400" />
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-[#14204b]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


function WhatsAppFormJourney() {
  const steps = [
    {
      title: "Collect structured data",
      lineOne: "Multi-step forms",
      lineTwo: "inside chat",
      icon: FileText,
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=85",
      tone: "emerald",
    },
    {
      title: "Shorten customer journeys",
      lineOne: "Buttons, lists, inputs",
      lineTwo: "in one chat thread",
      icon: MessageCircle,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",
      tone: "sky",
    },
    {
      title: "Automate responses",
      lineOne: "Trigger next steps",
      lineTwo: "based on user input",
      icon: Bot,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
      tone: "emerald",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-20">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-44 top-20 h-[430px] w-[430px] rounded-full bg-emerald-100/45 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-sky-100/70 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-50/70 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1380px]">
        {/* Heading */}
        <div
          className="mx-auto max-w-[1200px] text-center"
          style={{
            animation:
              "businessApiHeadingReveal 0.9s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
              <Sparkles className="h-3 w-3 text-white" />
              <span
                className="absolute inset-0 rounded-full border border-emerald-400"
                style={{
                  animation: "journeyPulseRing 2.2s ease-out infinite",
                }}
              />
            </span>

            <span className="text-[10px] font-extrabold tracking-[0.14em] text-emerald-600">
              STRUCTURED FORM FLOW
            </span>
          </div>

          <h2 className="mx-auto max-w-[1120px] text-center text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
            How Structured Form Filling Works Inside{" "}
            <span className="relative inline-block text-emerald-500">
              WhatsApp
              <span className="absolute -bottom-1 left-0 -z-10 h-[7px] w-full rounded-full bg-emerald-100" />
            </span>
          </h2>
        </div>

        {/* Animated process rail */}
        <div className="relative mt-16 lg:mt-24">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[145px] hidden lg:block">
            <div className="relative h-[3px]">
              <div className="absolute inset-0 rounded-full bg-slate-100" />

              <div className="journey-moving-rail absolute inset-0 rounded-full bg-[linear-gradient(90deg,transparent,#34d399,#38bdf8,#34d399,transparent)]" />

              <div className="journey-packet absolute top-1/2 z-20">
                <span className="absolute inset-[-10px] rounded-full bg-emerald-400/20 blur-md" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-white bg-emerald-500 shadow-[0_12px_30px_rgba(16,185,129,0.38)]">
                  <MessageCircle className="h-5 w-5 fill-white text-white" />
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 grid gap-14 md:grid-cols-3 md:gap-7 lg:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isSky = step.tone === "sky";

              return (
                <div
                  key={step.title}
                  className={index === 1 ? "lg:translate-y-14" : ""}
                >
                  <div
                    className="group relative mx-auto max-w-[360px]"
                    style={{
                      animation: `${
                        index === 1
                          ? "journeyCardFloatB"
                          : "journeyCardFloatA"
                      } ${5.6 + index * 0.6}s ease-in-out ${
                        index * 0.4
                      }s infinite`,
                    }}
                  >
                    {/* Step number */}
                    <div className="absolute -left-3 -top-3 z-30 flex h-11 w-11 items-center justify-center rounded-2xl border border-white bg-[#14204b] text-xs font-extrabold text-white shadow-[0_12px_28px_rgba(20,32,75,0.24)]">
                      0{index + 1}
                    </div>

                    <div className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.1)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-emerald-200 group-hover:shadow-[0_30px_80px_rgba(16,185,129,0.16)]">
                      {/* Animated media area */}
                      <div className="relative h-[230px] overflow-hidden rounded-[24px] bg-slate-100">
                        <img
                          src={step.image}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover opacity-[0.24]"
                          style={{
                            animation: `journeyImageZoom ${
                              9 + index
                            }s ease-in-out infinite`,
                          }}
                        />

                        <div
                          className={`absolute inset-0 ${
                            isSky
                              ? "bg-gradient-to-br from-sky-50/90 via-white/75 to-cyan-50/90"
                              : "bg-gradient-to-br from-emerald-50/90 via-white/75 to-sky-50/90"
                          }`}
                        />

                        {/* Rotating ring; centering and rotation use separate wrappers */}
                        <div className="absolute left-1/2 top-1/2 h-[178px] w-[178px] -translate-x-1/2 -translate-y-1/2">
                          <div
                            className={`absolute inset-0 rounded-full border border-dashed ${
                              isSky
                                ? "border-sky-300/90"
                                : "border-emerald-300/90"
                            }`}
                            style={{
                              animation: `${
                                index % 2 === 0
                                  ? "journeyIconOrbit"
                                  : "journeyIconOrbitReverse"
                              } ${11 + index * 2}s linear infinite`,
                            }}
                          >
                            <span
                              className={`absolute left-1/2 top-[-7px] h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-white ${
                                isSky ? "bg-sky-400" : "bg-emerald-400"
                              } shadow-md`}
                            />

                            <span className="absolute bottom-[11%] left-[8%] h-3 w-3 rounded-full border-[3px] border-white bg-sky-400 shadow-md" />
                          </div>
                        </div>

                        <div className="absolute left-1/2 top-1/2 h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2">
                          <div
                            className="absolute inset-0 rounded-full border border-dashed border-slate-300/80"
                            style={{
                              animation: `${
                                index % 2 === 0
                                  ? "journeyIconOrbitReverse"
                                  : "journeyIconOrbit"
                              } ${8 + index}s linear infinite`,
                            }}
                          />
                        </div>

                        {/* Main visual icon */}
                        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-white bg-white shadow-[0_18px_50px_rgba(15,23,42,0.14)]">
                          <div
                            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                              isSky
                                ? "bg-sky-50 text-sky-500"
                                : "bg-emerald-50 text-emerald-500"
                            }`}
                            style={{
                              animation: `journeyCardFloatA 4s ease-in-out ${
                                index * 0.3
                              }s infinite`,
                            }}
                          >
                            <Icon className="h-8 w-8" />
                          </div>
                        </div>

                        {/* Step-specific floating details */}
                        {index === 0 && (
                          <>
                            <div
                              className="absolute left-4 top-5 rounded-xl border border-white bg-white/95 px-3 py-2 shadow-lg"
                              style={{
                                animation:
                                  "journeyChipFloat 4.8s ease-in-out infinite",
                              }}
                            >
                              <div className="h-1.5 w-12 rounded-full bg-slate-200" />
                              <div className="mt-1.5 h-1.5 w-8 rounded-full bg-emerald-300" />
                              <div className="mt-1.5 h-1.5 w-10 rounded-full bg-sky-200" />
                            </div>

                            <div
                              className="absolute bottom-5 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white bg-white shadow-lg"
                              style={{
                                animation:
                                  "journeyChipFloat 5.2s ease-in-out 0.5s infinite",
                              }}
                            >
                              <Check className="h-4 w-4 text-emerald-500" />
                            </div>
                          </>
                        )}

                        {index === 1 && (
                          <>
                            <div
                              className="absolute right-4 top-5 rounded-2xl rounded-br-sm bg-emerald-500 px-3 py-2.5 shadow-lg"
                              style={{
                                animation:
                                  "journeyChipFloat 4.4s ease-in-out infinite",
                              }}
                            >
                              <div className="flex gap-1">
                                {[0, 1, 2].map((dot) => (
                                  <span
                                    key={dot}
                                    className="h-1.5 w-1.5 rounded-full bg-white"
                                    style={{
                                      animation:
                                        "journeyTyping 1.2s ease-in-out infinite",
                                      animationDelay: `${dot * 0.15}s`,
                                    }}
                                  />
                                ))}
                              </div>
                            </div>

                            <div
                              className="absolute bottom-5 left-4 flex items-center gap-2 rounded-full border border-white bg-white px-3 py-2 shadow-lg"
                              style={{
                                animation:
                                  "journeyChipFloat 5s ease-in-out 0.4s infinite",
                              }}
                            >
                              <CheckCircle2 className="h-4 w-4 text-sky-500" />
                              <span className="text-[8px] font-bold text-slate-600">
                                One-tap actions
                              </span>
                            </div>
                          </>
                        )}

                        {index === 2 && (
                          <>
                            <div
                              className="absolute left-4 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white bg-white shadow-lg"
                              style={{
                                animation:
                                  "journeyIconOrbit 6s linear infinite",
                              }}
                            >
                              <Sparkles className="h-4 w-4 text-sky-500" />
                            </div>

                            <div
                              className="absolute bottom-5 right-4 rounded-xl border border-emerald-100 bg-white px-3 py-2 shadow-lg"
                              style={{
                                animation:
                                  "journeyChipFloat 4.8s ease-in-out infinite",
                              }}
                            >
                              <p className="text-[8px] font-extrabold text-emerald-600">
                                Auto reply sent
                              </p>
                            </div>
                          </>
                        )}

                        {/* Continuous scan */}
                        <div
                          className="pointer-events-none absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/45 to-transparent"
                          style={{
                            animation: `journeyScan 4s linear ${
                              index * 0.6
                            }s infinite`,
                          }}
                        />
                      </div>

                      {/* Exact reference content */}
                      <div className="px-3 pb-3 pt-6 text-center">
                        <h3 className="text-base font-extrabold text-[#14204b]">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
                          {step.lineOne}
                          <br />
                          {step.lineTwo}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="mx-auto mt-8 flex w-fit items-center gap-2 text-emerald-500 md:hidden">
                      <span className="h-px w-12 bg-emerald-200" />
                      <ArrowRight
                        className="h-5 w-5 rotate-90"
                        style={{
                          animation:
                            "journeyArrowPulse 1.8s ease-in-out infinite",
                        }}
                      />
                      <span className="h-px w-12 bg-emerald-200" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


function WhatsAppExperienceStack() {
  const sectionRef = useRef(null);
  const [isSpread, setIsSpread] = useState(false);

  const experienceCards = [
    {
      title: "Collect Structured Data",
      description:
        "Capture customer inputs through clean, step-by-step WhatsApp forms that organize responses beautifully.",
      icon: FileText,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
      tone: "sky",
    },
    {
      title: "Simplify User Actions",
      description:
        "Replace long webpages and complicated forms with guided WhatsApp steps that users complete effortlessly.",
      icon: CheckCircle2,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
      tone: "emerald",
    },
    {
      title: "Shorten Customer Journeys",
      description:
        "Buttons, lists and input fields appear in a single chat thread — no redirects or extra screens.",
      icon: MessageCircle,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",
      tone: "sky",
    },
    {
      title: "Automate Next Steps",
      description:
        "Trigger confirmations, follow-ups, or backend actions instantly based on what users submit.",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
      tone: "emerald",
    },
    {
      title: "Deploy Anywhere",
      description:
        "Use your WhatsApp Flow in broadcasts, chatbots, QR codes, ads, or support conversations — at any scale.",
      icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
      tone: "sky",
    },
    {
      title: "Build With Drag & Drop",
      description:
        "Design every step visually using a no-code, drag-and-drop builder that teams can manage without developers.",
      icon: ClipboardCheck,
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=85",
      tone: "emerald",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSpread(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.34,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#f8fbff] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-14"
    >
      {/* Soft static background */}
      <div className="pointer-events-none absolute -left-44 top-10 h-[430px] w-[430px] rounded-full bg-sky-100/70 blur-[115px]" />
      <div className="pointer-events-none absolute -right-44 bottom-0 h-[460px] w-[460px] rounded-full bg-emerald-100/55 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-[320px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[75px]" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* Heading */}
        <div
          className="mx-auto max-w-[1200px] text-center"
          style={{
            animation:
              "businessApiHeadingReveal 0.9s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500">
              <MessageCircle className="h-3 w-3 fill-white text-white" />
            </span>

            <span className="text-[10px] font-extrabold tracking-[0.14em] text-sky-600">
              INTERACTIVE FORM EXPERIENCE
            </span>
          </div>

          <h2 className="mx-auto max-w-[1120px] text-center text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
            A Closer Look at WhatsApp’s{" "}
            <span className="relative inline-block text-emerald-500">
              Interactive Form Experience
              <span className="absolute -bottom-1 left-0 -z-10 h-[7px] w-full rounded-full bg-emerald-100" />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
            Six powerful capabilities unfold from one compact stack into a
            single, connected WhatsApp form experience.
          </p>
        </div>

        {/* Desktop: initially stacked, then one straight row */}
        <div className="relative mt-16 hidden min-h-[430px] items-center justify-center lg:flex">
          <div className="flex w-full items-stretch justify-center gap-2">
            {experienceCards.map((card, index) => {
              const Icon = card.icon;
              const isSky = card.tone === "sky";

              // Each card is translated back toward the centre before the
              // section enters the viewport. Once triggered, transform becomes
              // zero and the six cards settle into one straight row.
              const stackShift = (2.5 - index) * 218;
              const stackRotation = (index - 2.5) * 2.2;

              return (
                <article
                  key={card.title}
                  className="experience-stack-card relative w-[210px] shrink-0"
                  style={{
                    opacity: isSpread ? 1 : 0.96,
                    filter: isSpread ? "blur(0px)" : "blur(1.5px)",
                    transform: isSpread
                      ? "translate3d(0, 0, 0) rotate(0deg) scale(1)"
                      : `translate3d(${stackShift}px, ${
                          Math.abs(index - 2.5) * 4
                        }px, 0) rotate(${stackRotation}deg) scale(0.94)`,
                    transitionDelay: `${index * 115}ms`,
                    zIndex: isSpread ? 20 + index : 30 + index,
                  }}
                >
                  <div className="experience-stack-card-inner group h-full overflow-hidden rounded-[24px] border border-white/90 bg-white p-3 shadow-[0_22px_58px_rgba(15,23,42,0.11)]">
                    {/* Static image area */}
                    <div className="relative h-[132px] overflow-hidden rounded-[18px] bg-slate-100">
                      <img
                        src={card.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-[0.28]"
                      />

                      <div
                        className={`absolute inset-0 ${
                          isSky
                            ? "bg-gradient-to-br from-sky-50/90 via-white/68 to-cyan-50/90"
                            : "bg-gradient-to-br from-emerald-50/90 via-white/68 to-sky-50/90"
                        }`}
                      />

                      {/* Static icon badge—no rotating rings */}
                      <div className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[22px] border border-white bg-white shadow-[0_15px_38px_rgba(15,23,42,0.13)]">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                            isSky
                              ? "bg-sky-50 text-sky-500"
                              : "bg-emerald-50 text-emerald-500"
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    <div className="px-1.5 pb-3 pt-5 text-center">
                      <h3 className="text-[14px] font-extrabold leading-5 text-[#14204b]">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-[10px] font-medium leading-[1.55] text-slate-500">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Visible only before the cards separate */}
          <div
            className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[10px] font-bold tracking-[0.08em] text-slate-500 shadow-lg transition-all duration-500"
            style={{
              opacity: isSpread ? 0 : 1,
              transform: isSpread
                ? "translate(-50%, 10px)"
                : "translate(-50%, 0)",
            }}
          >
            SCROLL TO UNFOLD
          </div>
        </div>

        {/* Mobile/tablet: one horizontal line */}
        <div className="-mx-5 mt-12 overflow-x-auto px-5 pb-6 lg:hidden">
          <div className="flex w-max gap-4">
            {experienceCards.map((card, index) => {
              const Icon = card.icon;
              const isSky = card.tone === "sky";

              return (
                <article
                  key={card.title}
                  className="w-[300px] shrink-0 rounded-[24px] border border-slate-200/80 bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.09)] transition duration-300 hover:-translate-y-2 hover:scale-[1.025]"
                  style={{
                    animation: `experienceMobileReveal 0.75s cubic-bezier(0.16,1,0.3,1) ${
                      index * 0.1
                    }s both`,
                  }}
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      isSky
                        ? "bg-sky-50 text-sky-500"
                        : "bg-emerald-50 text-emerald-500"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-[#14204b]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-6 text-slate-500">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


function IndustriesSection() {
  const industries = [
    {
      title: "Banking & Finance",
      description:
        "Collect KYC details, loan eligibility inputs, EMI selections, or service requests.",
      icon: Landmark,
      microIcon: IndianRupee,
      motion: "industryCoinRotate 4.8s linear infinite",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=85",
      tone: "sky",
    },
    {
      title: "Healthcare",
      description:
        "Capture patient information, appointment preferences, symptoms and test bookings.",
      icon: HeartPulse,
      microIcon: CalendarDays,
      motion: "industryHeartbeat 2.4s ease-in-out infinite",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
      tone: "emerald",
    },
    {
      title: "E-Commerce & Retail",
      description:
        "Take return or exchange requests, COD confirmations and delivery preferences.",
      icon: ShoppingBag,
      microIcon: PackageCheck,
      motion: "industryPackageSlide 3.8s ease-in-out infinite",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
      tone: "sky",
    },
    {
      title: "Travel & Hospitality",
      description:
        "Gather guest details, check-in data, itinerary selections and package preferences.",
      icon: Luggage,
      microIcon: MapPin,
      motion: "industryPinPulse 3s ease-in-out infinite",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=85",
      tone: "emerald",
    },
    {
      title: "Education & EdTech",
      description:
        "Collect admission leads, course selections, student details and counselling inputs.",
      icon: GraduationCap,
      microIcon: FileText,
      motion: "industryCapFloat 3.8s ease-in-out infinite",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
      tone: "sky",
    },
    {
      title: "Real Estate",
      description:
        "Qualify property leads, capture budget details and schedule site visits.",
      icon: Building2,
      microIcon: MapPin,
      motion: "industryPinPulse 3.2s ease-in-out infinite",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85",
      tone: "emerald",
    },
    {
      title: "Automotive",
      description:
        "Allow users to request test drives, service appointments and insurance renewals.",
      icon: CarFront,
      microIcon: CalendarDays,
      motion: "industryCarMove 3.7s ease-in-out infinite",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
      tone: "sky",
    },
    {
      title: "Government & PSU",
      description:
        "Collect citizen service forms, document details, verification data and applications.",
      icon: Landmark,
      microIcon: BadgeCheck,
      motion: "industryVerifiedPop 4s ease-in-out infinite",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=85",
      tone: "emerald",
    },
    {
      title: "Logistics & Delivery",
      description:
        "Capture pickup details, delivery confirmations, return reasons and shipment instructions.",
      icon: Truck,
      microIcon: PackageCheck,
      motion: "industryTruckMove 4s ease-in-out infinite",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
      tone: "sky",
    },
    {
      title: "Hospitality & Events",
      description:
        "Gather attendee details, seating preferences, booking confirmations and event RSVPs.",
      icon: Hotel,
      microIcon: CalendarDays,
      motion: "industryDocumentPop 4.2s ease-in-out infinite",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85",
      tone: "emerald",
      scan: true,
    },
  ];

  const renderIndustryCard = (industry, index, widthClass = "") => {
    const Icon = industry.icon;
    const MicroIcon = industry.microIcon;
    const isSky = industry.tone === "sky";

    return (
      <article
        key={industry.title}
        className={`${widthClass} industry-card-shell group relative aspect-square overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-3.5 shadow-[0_20px_55px_rgba(15,23,42,0.09)]`}

      >
        {/* Travelling hover glow */}
        <span className="industry-card-glow pointer-events-none absolute -top-8 left-[-45%] z-30 h-[140%] w-[28%] rotate-[16deg] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

        {/* Hover arrow */}
        <span className="industry-card-arrow absolute right-4 top-4 z-40 flex h-8 w-8 translate-x-2 -translate-y-2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-600 opacity-0 shadow-md transition-all duration-300">
          <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
        </span>

        {/* Mini visual scene */}
        <div className="relative h-[56%] overflow-hidden rounded-[20px] bg-slate-100">
          <img
            src={industry.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-[0.23] transition-transform duration-700 group-hover:scale-110"
          />

          <div
            className={`absolute inset-0 ${
              isSky
                ? "bg-gradient-to-br from-sky-50/92 via-white/72 to-cyan-50/90"
                : "bg-gradient-to-br from-emerald-50/92 via-white/72 to-sky-50/90"
            }`}
          />

          {/* Decorative dotted field */}
          <div className="absolute left-4 top-4 grid grid-cols-4 gap-1.5 opacity-55">
            {Array.from({ length: 12 }).map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={`h-1.5 w-1.5 rounded-full ${
                  isSky ? "bg-sky-300" : "bg-emerald-300"
                }`}
                style={{
                  animation: "industryDotsPulse 2.8s ease-in-out infinite",
                  animationDelay: `${dotIndex * 0.08}s`,
                }}
              />
            ))}
          </div>

          {/* Central icon */}
          <div className="absolute left-1/2 top-1/2 flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[24px] border border-white bg-white shadow-[0_17px_42px_rgba(15,23,42,0.14)] transition-transform duration-500 group-hover:scale-110">
            <div
              className={`flex h-13 w-13 h-[52px] w-[52px] items-center justify-center rounded-2xl ${
                isSky
                  ? "bg-sky-50 text-sky-500"
                  : "bg-emerald-50 text-emerald-500"
              }`}
            >
              <Icon className="h-7 w-7" />
            </div>
          </div>

          {/* Small animated industry detail */}
          <div
            className={`absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)] ${
              isSky ? "text-sky-500" : "text-emerald-500"
            }`}
            style={{
              animation: industry.motion,
              transformStyle: "preserve-3d",
            }}
          >
            <MicroIcon className="h-4.5 w-4.5" />
          </div>

          {/* Status chip */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-white bg-white/90 px-2.5 py-1.5 shadow-md backdrop-blur">
            <Check className="h-3 w-3 text-emerald-500" />
            <span className="text-[8px] font-extrabold text-slate-600">
              Form ready
            </span>
          </div>

          {industry.scan && (
            <div
              className="pointer-events-none absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
              style={{
                animation: "industryTicketScan 3.7s linear infinite",
              }}
            />
          )}
        </div>

        {/* Text */}
        <div className="flex h-[44%] flex-col items-center justify-center px-2 text-center">
          <h3 className="text-[15px] font-extrabold leading-5 text-[#14204b]">
            {industry.title}
          </h3>

          <p className="mt-2 line-clamp-4 text-[10px] font-medium leading-[1.55] text-slate-500">
            {industry.description}
          </p>
        </div>
      </article>
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-28 h-[430px] w-[430px] rounded-full bg-sky-100/65 blur-[115px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-emerald-100/55 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* Heading */}
        <div
          className="mx-auto max-w-[1200px] text-center"
          style={{
            animation:
              "businessApiHeadingReveal 0.9s cubic-bezier(0.16,1,0.3,1) both",
          }}

        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500">
              <Building2 className="h-3 w-3 text-white" />
            </span>

            <span className="text-[10px] font-extrabold tracking-[0.14em] text-emerald-600">
              INDUSTRY SOLUTIONS
            </span>
          </div>

          <h2 className="mx-auto max-w-[1120px] text-center text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
            Built for Every{" "}
            <span className="relative inline-block text-emerald-500">
              Customer-Facing Industry
              <span className="absolute -bottom-1 left-0 -z-10 h-[7px] w-full rounded-full bg-emerald-100" />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
            Purpose-built conversational form experiences for every customer
            journey.
          </p>
        </div>

        {/* Desktop: six cards in first row, four cards centred below */}
        <div className="mt-16 hidden xl:block">
          <div className="flex justify-center gap-4">
            {industries
              .slice(0, 6)
              .map((industry, index) =>
                renderIndustryCard(
                  industry,
                  index,
                  "w-[210px] 2xl:w-[220px]",
                ),
              )}
          </div>

          <div className="mt-5 flex justify-center gap-4">
            {industries
              .slice(6)
              .map((industry, index) =>
                renderIndustryCard(
                  industry,
                  index + 6,
                  "w-[210px] 2xl:w-[220px]",
                ),
              )}
          </div>
        </div>

        {/* Tablet */}
        <div className="mt-14 hidden grid-cols-2 gap-5 sm:grid lg:grid-cols-3 xl:hidden">
          {industries.map((industry, index) =>
            renderIndustryCard(industry, index, "w-full"),
          )}
        </div>

        {/* Mobile horizontal square cards */}
        <div className="-mx-5 mt-12 overflow-x-auto px-5 pb-6 sm:hidden">
          <div className="flex w-max gap-4">
            {industries.map((industry, index) =>
              renderIndustryCard(industry, index, "w-[280px] shrink-0"),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


function FormDataDashboardSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const metrics = [
    {
      label: "Total Submissions",
      value: 12842,
      change: "+12.2%",
      icon: Database,
      width: "88%",
    },
    {
      label: "Today's Submissions",
      value: 348,
      change: "+8.4%",
      icon: Inbox,
      width: "68%",
    },
    {
      label: "Completion Rate",
      value: 92.6,
      suffix: "%",
      decimals: 1,
      change: "+2.2%",
      icon: Gauge,
      width: "92.6%",
    },
    {
      label: "Active Forms",
      value: 24,
      change: "+6.0%",
      icon: Activity,
      width: "58%",
    },
  ];

  const submissions = [
    {
      name: "Rahul Sharma",
      form: "Travel Enquiry",
      mobile: "+91 98765 43210",
      status: "Completed",
      submitted: "Today, 11:30 AM",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Priya Mehta",
      form: "Service Request",
      mobile: "+91 87654 32109",
      status: "Completed",
      submitted: "Today, 10:45 AM",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Amit Verma",
      form: "Loan Application",
      mobile: "+91 90076 54321",
      status: "Completed",
      submitted: "Today, 10:15 AM",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Sneha Iyer",
      form: "Event Registration",
      mobile: "+91 93456 78910",
      status: "In Review",
      submitted: "Today, 09:50 AM",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Karan Patel",
      form: "Support Form",
      mobile: "+91 90876 76543",
      status: "Completed",
      submitted: "Today, 09:20 AM",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
    },
  ];

  const workflows = [
    {
      title: "Centralized Dashboard View",
      description:
        "See every response in real time — no manual collection, no scattered data.",
      icon: LayoutDashboard,
    },
    {
      title: "Automatic CRM Sync",
      description:
        "Clean, mapped fields ensure your CRM is always up to date.",
      icon: RefreshCw,
    },
    {
      title: "Triggered Automations",
      description:
        "Move customers forward without manual effort.",
      icon: Workflow,
    },
    {
      title: "Internal System Updates",
      description:
        "Backend systems update immediately after submission.",
      icon: UserCheck,
    },
    {
      title: "Team Access & Routing",
      description:
        "Every response reaches the right owner instantly.",
      icon: Share2,
    },
    {
      title: "Export & Reporting",
      description:
        "Unlock insights for reports, audits and decision-making.",
      icon: Download,
    },
  ];

  const benefits = [
    {
      title: "Higher Completion",
      description: "More filled forms",
      icon: Database,
    },
    {
      title: "Better Engagement",
      description: "Happier customers",
      icon: Users,
    },
    {
      title: "Smarter Automation",
      description: "Efficient workflows",
      icon: Settings,
    },
    {
      title: "Stronger Decisions",
      description: "Data that drives growth",
      icon: BarChart3,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveWorkflow((current) => (current + 1) % workflows.length);
    }, 1750);

    return () => window.clearInterval(timer);
  }, [isVisible, workflows.length]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#f8fbff] px-5 pb-0 pt-16 sm:px-8 lg:px-12 lg:pb-0 lg:pt-20 xl:px-16"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-44 top-20 h-[470px] w-[470px] rounded-full bg-sky-100/75 blur-[120px]" />
      <div className="pointer-events-none absolute -right-44 bottom-0 h-[480px] w-[480px] rounded-full bg-emerald-100/60 blur-[125px]" />
      <div className="pointer-events-none absolute left-1/2 top-[60%] h-[320px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1480px]">
        {/* Heading */}
        <div
          className="mx-auto max-w-[1200px] text-center"
          style={{
            animation: isVisible
              ? "businessApiHeadingReveal 0.9s cubic-bezier(0.16,1,0.3,1) both"
              : "none",
          }}
        >
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-sky-500">
              <LayoutDashboard className="h-3 w-3 text-white" />
              <span
                className="absolute inset-0 rounded-full border border-sky-400"
                style={{
                  animation: "dashboardLivePulse 2.4s ease-out infinite",
                }}
              />
            </span>

            <span className="text-[10px] font-extrabold tracking-[0.14em] text-sky-600">
              LIVE FORM OPERATIONS
            </span>
          </div>

          <h2 className="mx-auto max-w-[1120px] text-center text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
            Where Your WhatsApp Form Data{" "}
            <span className="relative inline-block text-emerald-500">
              Goes Next
              <span className="absolute -bottom-1 left-0 -z-10 h-[7px] w-full rounded-full bg-emerald-100" />
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
            Every WhatsApp Flow submission becomes structured data instantly
            available in your Vertex Suite dashboard. Each response is logged,
            organized and ready to sync with CRM, automation workflows and
            internal systems.
          </p>
        </div>

        {/* Dashboard frame */}
        <div
          className="relative mt-10 overflow-hidden rounded-[34px] border border-white bg-white/70 p-2.5 shadow-[0_35px_100px_rgba(15,23,42,0.13)] backdrop-blur-xl sm:p-4 lg:mt-12"
          style={{
            animation: isVisible
              ? "dashboardShellReveal 1s cubic-bezier(0.16,1,0.3,1) 0.12s both"
              : "none",
          }}
        >
          {/* Screen reflection */}
          <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[34px]">
            <div
              className="absolute -left-[45%] top-0 h-full w-[24%] rotate-[12deg] bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{
                animation: isVisible
                  ? "dashboardShine 7s ease-in-out 1.2s infinite"
                  : "none",
              }}
            />
          </div>

          <div className="relative z-10 grid overflow-hidden rounded-[28px] border border-slate-200/80 bg-white lg:grid-cols-[74px_minmax(0,1fr)]">
            {/* Sidebar */}
            <aside className="hidden flex-col items-center bg-[#102354] py-5 text-white lg:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-[#102354] shadow-[0_10px_24px_rgba(52,211,153,0.25)]">
                <span className="text-sm font-black">V</span>
              </div>

              <div className="mt-8 flex flex-1 flex-col items-center gap-3">
                {[
                  LayoutDashboard,
                  Inbox,
                  BarChart3,
                  Database,
                  Users,
                  Settings,
                ].map((Icon, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Dashboard navigation ${index + 1}`}
                    className={`relative flex h-10 w-10 items-center justify-center rounded-xl transition ${
                      index === 0
                        ? "bg-white/14 text-emerald-300"
                        : "text-white/55 hover:bg-white/10 hover:text-white"
                    }`}
                    style={{
                      animation:
                        index === 0
                          ? "dashboardSidebarPulse 3s ease-in-out infinite"
                          : "none",
                    }}
                  >
                    {index === 0 && (
                      <span className="absolute -left-4 h-6 w-1 rounded-r-full bg-emerald-400" />
                    )}
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>

              <button
                type="button"
                aria-label="Notifications"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-white/65"
              >
                <Bell className="h-4.5 w-4.5" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-[#102354] bg-emerald-400" />
              </button>
            </aside>

            {/* Main dashboard content */}
            <div className="grid min-w-0 items-start lg:grid-cols-[minmax(0,1.48fr)_minmax(320px,0.86fr)]">
              {/* Submissions panel */}
              <div className="min-w-0 border-b border-slate-200/80 p-4 sm:p-5 lg:border-b-0 lg:border-r lg:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-extrabold text-[#14204b]">
                        Form Submissions
                      </h3>

                      <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-extrabold text-emerald-600">
                        <span
                          className="h-2 w-2 rounded-full bg-emerald-400"
                          style={{
                            animation:
                              "dashboardLivePulse 2s ease-in-out infinite",
                          }}
                        />
                        LIVE
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-medium text-slate-400">
                      Structured responses arriving directly from WhatsApp
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="flex h-9 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-[10px] font-bold text-slate-500 shadow-sm transition hover:border-emerald-200 hover:text-emerald-600"
                    >
                      <Search className="h-3.5 w-3.5" />
                      Search
                    </button>

                    <button
                      type="button"
                      aria-label="Filter submissions"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:border-emerald-200 hover:text-emerald-600"
                    >
                      <SlidersHorizontal className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;

                    return (
                      <div
                        key={metric.label}
                        className="relative overflow-hidden rounded-2xl border border-slate-200/75 bg-[#fbfdff] p-3.5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]"
                        style={{
                          animation: isVisible
                            ? `dashboardRowReveal 0.7s ease-out ${
                                0.28 + index * 0.09
                              }s both`
                            : "none",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-bold text-slate-400">
                            {metric.label}
                          </span>

                          <Icon className="h-4 w-4 text-sky-500" />
                        </div>

                        <div className="mt-2 flex items-end justify-between gap-2">
                          <p className="text-xl font-extrabold tracking-[-0.04em] text-[#14204b]">
                            <DashboardCounter
                              value={metric.value}
                              suffix={metric.suffix || ""}
                              decimals={metric.decimals || 0}
                              active={isVisible}
                            />
                          </p>

                          <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-extrabold text-emerald-600">
                            {metric.change}
                          </span>
                        </div>

                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-[width] duration-[1400ms] ease-out"
                            style={{
                              width: isVisible ? metric.width : "0%",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Submission table */}
                <div className="relative mt-5 overflow-hidden rounded-[22px] border border-slate-200/80 bg-white">
                  <div
                    className="pointer-events-none absolute left-0 z-20 h-16 w-full bg-gradient-to-b from-transparent via-emerald-100/35 to-transparent"
                    style={{
                      animation: isVisible
                        ? "dashboardTableScan 6s linear 1s infinite"
                        : "none",
                    }}
                  />

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] border-collapse">
                      <thead>
                        <tr className="border-b border-slate-100 bg-slate-50/80 text-left">
                          {[
                            "Name",
                            "Form Name",
                            "Mobile",
                            "Status",
                            "Submitted On",
                            "",
                          ].map((heading) => (
                            <th
                              key={heading}
                              className="px-4 py-3 text-[9px] font-extrabold uppercase tracking-[0.08em] text-slate-400"
                            >
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {submissions.map((submission, index) => (
                          <tr
                            key={submission.name}
                            className="dashboard-row border-b border-slate-100 last:border-b-0 transition duration-300"
                            style={{
                              animation: isVisible
                                ? `dashboardRowReveal 0.65s ease-out ${
                                    0.62 + index * 0.11
                                  }s both`
                                : "none",
                            }}
                          >
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2.5">
                                <img
                                  src={submission.avatar}
                                  alt=""
                                  className="h-8 w-8 rounded-xl object-cover shadow-sm"
                                />
                                <span className="text-[10px] font-bold text-slate-700">
                                  {submission.name}
                                </span>
                              </div>
                            </td>

                            <td className="px-4 py-3 text-[9px] font-medium text-slate-500">
                              {submission.form}
                            </td>

                            <td className="px-4 py-3 text-[9px] font-medium text-slate-500">
                              {submission.mobile}
                            </td>

                            <td className="px-4 py-3">
                              <DashboardStatus status={submission.status} />
                            </td>

                            <td className="px-4 py-3 text-[9px] font-medium text-slate-500">
                              {submission.submitted}
                            </td>

                            <td className="px-4 py-3 text-right">
                              <button
                                type="button"
                                aria-label={`More options for ${submission.name}`}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-4 py-3">
                    <div className="flex items-center gap-2 text-[9px] font-medium text-slate-400">
                      <span>Showing 5 of 12,842 responses</span>
                      <span className="flex gap-0.5">
                        {[0, 1, 2].map((dot) => (
                          <span
                            key={dot}
                            className="h-1 w-1 rounded-full bg-emerald-400"
                            style={{
                              animation:
                                "dashboardTypingDot 1.2s ease-in-out infinite",
                              animationDelay: `${dot * 0.15}s`,
                            }}
                          />
                        ))}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-[9px] font-extrabold text-sky-600"
                    >
                      View all
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Automated workflow panel */}
              <div className="relative h-fit self-start overflow-hidden bg-gradient-to-br from-[#f7fbff] via-white to-[#f2fdf8] p-3.5 sm:p-4 lg:p-4">
                <div className="absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full bg-sky-100/60 blur-[70px]" />
                <div className="absolute bottom-[-70px] left-[-70px] h-56 w-56 rounded-full bg-emerald-100/55 blur-[75px]" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#14204b]">
                        Centralized Dashboard View
                      </h3>

                      <p className="mt-0.5 text-[10px] font-medium leading-4 text-slate-400">
                        See every response move through a connected operational
                        workflow.
                      </p>
                    </div>

                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-[0_12px_28px_rgba(15,23,42,0.1)]">
                      <RefreshCw
                        className="h-5 w-5"
                        style={{
                          animation:
                            "dashboardSyncSpin 8s linear infinite",
                        }}
                      />
                    </div>
                  </div>

                  <div className="relative mt-3 space-y-1">
                    <div className="absolute bottom-3 left-[16px] top-3 w-px bg-gradient-to-b from-sky-200 via-emerald-200 to-transparent" />

                    {workflows.map((workflow, index) => {
                      const Icon = workflow.icon;
                      const isActive = activeWorkflow === index;

                      return (
                        <div
                          key={workflow.title}
                          className="dashboard-workflow-card relative z-10 flex items-center gap-2 rounded-lg border border-slate-200/80 bg-white/88 px-2.5 py-2 shadow-[0_6px_16px_rgba(15,23,42,0.045)] backdrop-blur"
                          data-active={isActive}
                          style={{
                            animation: isVisible
                              ? `dashboardWorkflowReveal 0.7s ease-out ${
                                  0.45 + index * 0.1
                                }s both`
                              : "none",
                          }}
                        >
                          {isActive && (
                            <span
                              className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-emerald-200/30 blur-xl"
                              style={{
                                animation:
                                  "dashboardWorkflowGlow 1.75s ease-in-out infinite",
                              }}
                            />
                          )}

                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                              isActive
                                ? "bg-emerald-500 text-white"
                                : "bg-sky-50 text-sky-500"
                            } transition-colors duration-300`}
                          >
                            <Icon className="h-4.5 w-4.5" />
                          </span>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-black text-sky-500">
                                0{index + 1}
                              </span>
                              <p className="truncate text-[10px] font-extrabold text-[#14204b]">
                                {workflow.title}
                              </p>
                            </div>

                            <p className="mt-0.5 line-clamp-1 text-[7.5px] font-medium leading-3 text-slate-400">
                              {workflow.description}
                            </p>
                          </div>

                          <CheckCircle2
                            className={`h-4 w-4 shrink-0 transition ${
                              isActive
                                ? "scale-100 text-emerald-500 opacity-100"
                                : "scale-75 text-slate-300 opacity-45"
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefit strip */}
        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group flex items-center gap-3 rounded-[22px] border border-white bg-white/85 p-4 shadow-[0_14px_36px_rgba(15,23,42,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_46px_rgba(16,185,129,0.12)]"
                style={{
                  animation: isVisible
                    ? `dashboardSectionReveal 0.75s ease-out ${
                        0.8 + index * 0.1
                      }s both`
                    : "none",
                }}
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-emerald-50 text-emerald-600"
                  style={{
                    animation: `dashboardBenefitFloat ${
                      4.2 + index * 0.3
                    }s ease-in-out ${index * 0.35}s infinite`,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-sm font-extrabold text-[#14204b]">
                    {benefit.title}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DashboardCounter({
  value,
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
    const duration = 1300;
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

  return `${formattedValue}${suffix}`;
}

function DashboardStatus({ status }) {
  const isCompleted = status === "Completed";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[8px] font-extrabold ${
        isCompleted
          ? "bg-emerald-50 text-emerald-600"
          : "bg-amber-50 text-amber-600"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isCompleted ? "bg-emerald-400" : "bg-amber-400"
        }`}
        style={{
          animation: "dashboardLivePulse 2.3s ease-in-out infinite",
        }}
      />
      {status}
    </span>
  );
}

function BackgroundDecorations() {
  return (
    <>
      <div className="absolute -left-40 -top-40 h-[430px] w-[430px] rounded-full bg-emerald-100/40 blur-[90px]" />

      <div className="absolute -bottom-44 right-[-100px] h-[430px] w-[430px] rounded-full bg-sky-100/70 blur-[100px]" />

      <div className="absolute left-[42%] top-[12%] h-40 w-40 rounded-full bg-cyan-100/50 blur-[60px]" />

      <div className="absolute right-10 top-10 hidden grid-cols-8 gap-3 opacity-60 lg:grid">
        {Array.from({ length: 56 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-sky-200"
            style={{
              animation: "dotMove 3s ease-in-out infinite",
              animationDelay: `${(index % 8) * 0.12}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-16 left-[47%] hidden lg:block">
        <div
          className="relative h-12 w-12"
          style={{
            animation: "plusFloat 6s ease-in-out infinite",
          }}
        >
          <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-400 to-transparent" />

          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
        </div>
      </div>

      <div className="absolute bottom-[10%] left-0 h-px w-full overflow-hidden opacity-40">
        <div
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"
          style={{
            animation: "lineMove 8s linear infinite",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_95%,rgba(148,163,184,0.06)_100%)] bg-[length:100%_28px]" />
    </>
  );
}
