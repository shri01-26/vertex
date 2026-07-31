"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import CountUpModule from "react-countup";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  Eye,
  FileText,
  Home,
  Megaphone,
  MessageSquare,
  Plus,
  Radio,
  Send,
  Settings,
  TrendingUp,
  Trophy,
  Users,
  X,
} from "lucide-react";
import Link from "../../components/AppLink";

const CountUp = CountUpModule.default || CountUpModule;

const phoneBtn =
  "w-full h-8 mt-[7px] rounded-lg border border-[#b7efd1] bg-[#f7fff9] text-[#08a84f] text-[11px] font-[850] cursor-pointer";

const channelBtn =
  "w-full h-[34px] border-0 rounded-lg bg-[#11b957] text-white text-[11px] font-[850] cursor-pointer";

const centerPhoneBtn =
  "w-full h-[34px] rounded-lg border border-[#b7efd1] bg-[#f7fff9] text-[#0ba856] text-[11px] font-[850] mt-2 cursor-pointer";

const analyticsCard = "bg-white border border-[#edf1f5] rounded-2xl p-4";
const analyticsCardTitle =
  "m-0! mb-3! text-[12px]! font-semibold! text-[#20242b]!";

const barLine =
  "grid grid-cols-1 min-[769px]:grid-cols-[110px_1fr_45px] gap-[9px] items-center mb-[9px]";
// Audience Segments: wider label column + shorter bar, number stays flush right
const segmentLine =
  "grid grid-cols-1 min-[769px]:grid-cols-[140px_130px_1fr] gap-[9px] items-center mb-[9px]";
const barTrack =
  "h-1.5 bg-[#e9f2ee] rounded-full overflow-hidden";
const barFill = "block h-full bg-[#12b957] rounded-full";

const sectionHeading2 =
  "m-0 mb-3.5 text-[#071b3a] text-[clamp(30px,3vw,44px)] leading-[1.12] tracking-[-1.2px] font-[850]";

function AnimatedCardGrid({ children, className = "" }) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        const columnPosition = index % 3;
        const x = columnPosition === 0 ? -70 : columnPosition === 2 ? 70 : 0;

        return (
          <motion.div
            className="h-full [&>*]:h-full"
            initial={{ opacity: 0, x, y: x === 0 ? 38 : 18, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{
              duration: 0.72,
              delay: index * 0.11,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}

function AnimatedCard({ children, className = "", index = 0 }) {
  const columnPosition = index % 3;
  const x = columnPosition === 0 ? -70 : columnPosition === 2 ? 70 : 0;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y: x === 0 ? 38 : 18, scale: 0.92 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.72,
        delay: index * 0.11,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

const heroStats = [
  { value: "98%", label: "Average Open Rate" },
  { value: "1:1", label: "Personalised Campaigns" },
  { value: "24/7", label: "Automated Follow-Ups" },
  { value: "1", label: "Unified Dashboard" },
];

const campaignBars = [
  { label: "Holiday Offer Blast", width: "92%", value: "98.2%" },
  { label: "Goa Package Launch", width: "88%", value: "97.0%" },
  { label: "Weekend Getaway", width: "80%", value: "96.8%" },
];

const useIcon =
  "w-[58px] h-[58px] shrink-0 rounded-2xl grid place-items-center bg-gradient-to-br from-[#11b957] to-[#087d4a] text-white text-[18px] font-black";

const featureCard =
  "min-h-[105px] bg-white border border-[#edf1f5] rounded-2xl p-3.5 pl-14 flex gap-[18px] items-center shadow-[0_16px_42px_rgba(7,27,58,0.06)]";

const tripImageStyle = {
  backgroundImage:
    "linear-gradient(rgba(7,27,58,0.05), rgba(7,27,58,0.05)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80')",
};

const adImageStyle = {
  backgroundImage:
    "linear-gradient(rgba(7,27,58,0.05), rgba(7,27,58,0.05)), url('/assets/images/k1.webp')",
};

const dashNav = [
  { label: "Overview", Icon: Home, active: true },
  { label: "Campaigns", Icon: Send },
  { label: "Broadcasts", Icon: Megaphone },
  { label: "Audience", Icon: Users },
  { label: "Templates", Icon: FileText },
  { label: "Automation", Icon: Bot },
  { label: "Chat Inbox", Icon: MessageSquare },
  { label: "Analytics", Icon: BarChart3 },
];

const howToNav = [
  { label: "Overview", Icon: Home, active: true },
  { label: "Campaigns", Icon: Send },
  { label: "Broadcasts", Icon: Megaphone },
  { label: "Audience", Icon: Users },
  { label: "Templates", Icon: FileText },
  { label: "Automation", Icon: Bot },
  { label: "Chat Inbox", Icon: MessageSquare },
  { label: "Analytics", Icon: BarChart3 },
  { label: "Settings", Icon: Settings },
];

const chartCurve =
  "M65,155 C69,151 73,143 78,138 C103,130 130,113 159,110 C198,106 226,83 268,81 C308,79 339,91 376,89 C403,87 421,63 438,57 C450,50 463,35 475,28";
const chartDots = [
  [78, 138],
  [159, 110],
  [268, 81],
  [376, 89],
  [438, 57],
];
const chartYLabels = [
  [25, "125K"],
  [55, "100K"],
  [85, "75K"],
  [115, "50K"],
  [145, "25K"],
  [172, "0"],
];
const chartXLabels = [
  [70, "May 1"],
  [159, "May 8"],
  [268, "May 15"],
  [376, "May 22"],
  [460, "May 29"],
];
const chartGrid = [22, 52, 82, 112, 142, 170];

// "Messages Over Time" chart: weekly message volume (in thousands)
const MOT_VALUES = [62, 88, 74, 118, 96, 132, 145];
const MOT_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MOT_TICKS = [0, 50, 100, 150];
const MOT_MAX = 150;
const MOT_LEFT = 30;
const MOT_RIGHT = 350;
const MOT_TOP = 12;
const MOT_BASE = 122;

const motX = (i) =>
  MOT_LEFT + (i * (MOT_RIGHT - MOT_LEFT)) / (MOT_VALUES.length - 1);
const motY = (value) =>
  MOT_BASE - (value / MOT_MAX) * (MOT_BASE - MOT_TOP);

const motPoints = MOT_VALUES.map((value, i) => [motX(i), motY(value)]);

// Horizontal-tangent cubics: smooth curve that never overshoots the data points
const motPath = motPoints
  .map(([x, y], i) => {
    if (i === 0) return `M${x} ${y}`;
    const [px, py] = motPoints[i - 1];
    const mid = (px + x) / 2;
    return `C${mid} ${py} ${mid} ${y} ${x} ${y}`;
  })
  .join(" ");

const motAreaPath = `${motPath} L${MOT_RIGHT} ${MOT_BASE} L${MOT_LEFT} ${MOT_BASE} Z`;

// Message Status donut — same 95px ring the conic-gradient produced:
// outer radius 47.5, 22px band, so the stroked circle sits at r 36.5.
const DONUT_C = 47.5;
const DONUT_R = 36.5;
const DONUT_BAND = 22;

const messageStatus = [
  { id: "delivered", label: "Delivered", color: "#12b957", share: 0.62 },
  { id: "read", label: "Read", color: "#1f7ae0", share: 0.24 },
  { id: "pending", label: "Pending", color: "#f59e0b", share: 0.14 },
];

const messageStatusSlices = messageStatus.map((slice, i) => ({
  ...slice,
  start: messageStatus.slice(0, i).reduce((sum, s) => sum + s.share, 0),
}));

const dashStats = [
  { label: "Messages Sent", end: 125430, decimals: 0, separator: ",", suffix: "", delta: "13.5%", Icon: Send },
  { label: "Delivered", end: 123842, decimals: 0, separator: ",", suffix: "", delta: "12.8%", Icon: Check, solid: true },
  { label: "Read Rate", end: 98.1, decimals: 1, separator: "", suffix: "%", delta: "8.2%", Icon: Eye },
];

// Premium easing + entrance-motion helpers (spread onto motion elements)
const EASE = [0.22, 1, 0.36, 1];
const fadeUp = (delay, y = 14, duration = 0.55) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { duration, ease: EASE, delay },
});
const fadeX = (delay, x = 24, duration = 0.55) => ({
  initial: { opacity: 0, x },
  animate: { opacity: 1, x: 0 },
  transition: { duration, ease: EASE, delay },
});
const fadeIn = (delay, duration = 0.5) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration, ease: EASE, delay },
});

const GLOW_SOFT = "0 6px 16px rgba(28,84,74,0.45)";
const GLOW_BRIGHT = "0 8px 26px rgba(62,139,124,0.65)";

const topCampaigns = [
  ["Holiday Offer", "98.2%"],
  ["Travel Package", "87.0%"],
  ["Weekend Getaway", "96.8%"],
];

const broadcasts = [
  ["Campaign Live", "Running", "#16a34a"],
  ["New Year Sale", "Scheduled", "#3E8B7C"],
  ["Abandoned Cart", "Running", "#16a34a"],
];

const whyTabs = [
  {
    id: "engage",
    label: "Engage",
    heroImage: "/assets/images/Engage.webp",
    railImage: "/assets/images/M1-even.webp",
    intro: (
      <>
        Engage travellers by sharing curated{" "}
         <strong style={{color:"#000000"}}>packages, itineraries and exclusive offers</strong>{" "}
        directly on WhatsApp. With the WhatsApp Business API, hospitality brands deliver instant, personalized information that reduces customer effort and maximizes first impressions.{" "}
      </>
    ),
    features: [
      {
        title: "Build ",
        color: "#08a84f",
        text: "trust with pre-designed itineraries like 3 Nights, 4 Days – Goa Experience delivered instantly in chat.",
      },
      {
        title: "Reduce ",
        color: "#ea6a12",
        text: "friction by offering interactive lists and quick-reply buttons such as View Packages, Download Itinerary, Check Price.",
      },
      {
        title: "Maximize",
        color: "#2f6bff",
        text: "engagement with rich media carousels showcasing rooms, dining and experiences.",
      },
      {
        title: "Highlight",
        color: "#7c4dff",
        text: "convenience with AI-powered chat support for FAQs like inclusions, check-in, or local attractions.",
      },
    ],
  },
  {
    id: "nurture",
    label: "Nurture",
    heroImage: "/assets/images/N22.webp",
    railImage: "/assets/images/M1-even.webp",
    intro:(
    <>
      Nurture customer relationships by providing timely 
      <strong style={{color:"#000000"}}> recommendations, reminders and personalized offers </strong>{" "}
       through WhatsApp. With the Business API, brands guide buyers through their journey reducing drop-offs and maximizing repeat engagement.
       </>
       ),
    features: [
      {
        title: "Build",
        color: "#08a84f",
        text: "stronger loyalty with abandoned cart reminders that re-engage customers instantly.",
      },
      {
        title: "Reduce",
        color: "#ea6a12",
        text: "lost sales with personalized product suggestions based on browsing history.",
      },
      {
        title: "Maximize",
        color: "#2f6bff",
        text: "retention by sending automated reorder alerts, size guides, or style tips.",
      },
      {
        title: "Highlight",
        color: "#7c4dff",
        text: "exclusivity through limited-time offers, seasonal discounts and loyalty rewards all inside WhatsApp.",
      },
    ],
  },
  {
    id: "convert",
    label: "Convert",
    heroImage: "/assets/images/C33.webp",
    railImage: "/assets/images/M1-even.webp",
    intro:(
      <>
      Convert prospects into paying customers by enabling 
      <strong style={{color:"#000000"}}> secure transactions, instant confirmations and seamless checkouts  </strong>{" "}
      on WhatsApp. The Business API empowers brands to close deals faster while reducing friction and maximizing ROI.",
    </>
    ),
    features: [
      {
        title: "Build",
        color: "#08a84f",
        text: "confidence with automated appointment confirmations and digital receipts directly on WhatsApp.",
      },
      {
        title: "Reduce",
        color: "#ea6a12",
        text: "no-shows through timely reminders and pre-visit instructions.",

      },
      {
        title: "Maximize",
        color: "#2f6bff",
        text: "patient convenience by enabling payments, lab test bookings and prescription refills within chat.",
      },
      {
        title: "Highlights  ",
        color: "#7c4dff",
        text: "trust with secure, end-to-end encrypted communication for sensitive medical data.",
      },
    ],
  },
];

// Per-feature preview images (one per feature block, mapped by index).
const featureImages = [
  "/assets/images/phone1.webp",
  "/assets/images/phone2.webp",
  "/assets/images/phone3.webp",
  "/assets/images/phone5.webp",
];

function VertexMark() {
  return (
    <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0" aria-hidden="true">
      <polygon
        points="4,7 36,7 20,34"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <polygon
        points="12,7 28,7 20,22"
        fill="none"
        stroke="#7db8ff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhatsAppMarketing() {
  const [activeWhyTab, setActiveWhyTab] = React.useState(whyTabs[0].id);
  const [showStickyCta, setShowStickyCta] = React.useState(true);

  const activeTab = whyTabs.find((t) => t.id === activeWhyTab) ?? whyTabs[0];

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
    <main className="whatsapp-marketing-page w-full overflow-x-clip bg-white">
      <section
        className="page-aligned relative box-border grid grid-cols-1 items-start gap-10 overflow-hidden bg-[#f7faf7] pb-[50px] pt-11 min-[769px]:gap-12 min-[769px]:pb-[90px] min-[769px]:pt-[88px] min-[1280px]:grid-cols-[0.76fr_1.24fr]"
      >
        <div className="min-w-0 max-md:order-2">
          <Reveal
            onMount
            direction="center"
            delay={0.05}
            duration={0.7}
            strength={1.15}
            className="inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/60 bg-white/70 px-3 py-2 text-[0.95rem] font-bold text-[#08A84F] shadow-[0_10px_28px_rgba(15,23,42,0.10)] ring-1 ring-[#D9E3E8] backdrop-blur-lg"
          >
            <img
              src="/assets/images/whatsapp-icon.png"
              alt="WhatsApp"
              className="h-5 w-5 object-contain"
            />
            WhatsApp Marketing
          </Reveal>

          <Reveal onMount direction="left" delay={0.16} duration={0.85} strength={1.3}>
            <h1 className="mt-8! mb-[30px]! text-[clamp(2.05rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-[#071b3a] font-extrabold">
              Conversations that<br />
              Swipe Right on <span className="text-[#10b957]">ROI</span>
            </h1>
          </Reveal>

          <Reveal onMount direction="left" delay={0.34} duration={0.8} strength={1.15}>
            <p className="block max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
              Automate campaigns, send personalized messages and grow
              your business with the world’s most powerful messaging platform.
            </p>
          </Reveal>

          <div className="mt-[42px] grid w-full grid-cols-2 gap-3.5 max-md:gap-2">
            {heroStats.map(({ value, label }, index) => (
              <Reveal
                key={label}
                onMount
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.45 + index * 0.08}
                duration={0.55}
                className="flex min-h-[96px] w-full flex-col items-start justify-center gap-1.5 rounded-[8px] border border-white/15 bg-transparent pl-7 pr-2 max-sm:items-center max-sm:px-2"
              >
                <div className="flex translate-y-2 flex-col gap-1.5 max-sm:items-center max-sm:text-center">
                  <span className="text-[2.15rem] font-extrabold leading-none text-[#059669]">
                    {value}
                  </span>
                  <span className="min-h-[2.1em] whitespace-nowrap !text-[1.06rem] font-medium leading-tight text-[#5B667A] xl:!text-[1.14rem] max-md:!text-[0.98rem] max-sm:whitespace-normal">
                    {label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

              {/* Phone shows these as a fixed bar at the bottom of the page instead. */}
              <Reveal onMount delay={0.85} className="mt-[76px] flex items-center justify-start gap-3 max-md:hidden">
                      {/* BUTTON 1 */}
                      <Link
                        to="/signup"
                        className="roll-btn group inline-flex items-center justify-center overflow-hidden rounded-[10px] border-2 border-green-600 bg-green-600 px-11 py-2.5 text-[1rem] font-semibold text-white transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white max-sm:w-full"
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
                      </Link>
      
                      {/* BUTTON 2 */}
                      <Link
                        to="/book-demo"
                        className="roll-btn group inline-flex items-center justify-center overflow-hidden rounded-[10px] border-2 border-green-600 bg-white px-7 py-2.5 text-[1rem] font-semibold !text-green-600 transition-all duration-300 hover:bg-green-600 hover:!text-green-600 max-sm:w-full"
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
                      </Link>
      
                      <style>
                        {`
            .tw-caret {
              animation: twBlink 1s steps(1) infinite;
            }
            @keyframes twBlink {
              0%, 50% { opacity: 1; }
              50.01%, 100% { opacity: 0; }
            }
          `}
                      </style>
                    </Reveal>

          {/* <div className="mt-[24px] flex flex-wrap items-center gap-x-6 gap-y-2 min-[1280px]:flex-nowrap min-[1280px]:gap-8 min-[1280px]:whitespace-nowrap">
            {["No credit card required", "14-day free trial", "Cancel anytime"].map(
              (item, index) => (
                <motion.span
                  key={item}
                  className="inline-flex items-center gap-1 text-[12px] text-[#50627a] min-[769px]:text-[14px] min-[1280px]:text-[16px]"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 1.18 + index * 0.18 }}
                >
                  <span className="text-[#10b957]">●</span>
                  {item}
                </motion.span>
              )
            )}
          </div> */}
        </div>

        <div className="relative flex min-w-0 items-start justify-center max-md:order-1 min-[1280px]:-mt-1 min-[1280px]:translate-x-[10px] min-[1280px]:justify-end min-[1440px]:translate-x-[10px]">
          {/* Subtle continuous float (starts after entrance completes) */}
          <motion.div
            className="flex w-full justify-center min-[1280px]:justify-end"
          >
            {/* Full dashboard entrance: fade + slide up + scale 0.96 -> 1 */}
            <motion.div
              className="relative grid w-full max-w-[620px] grid-cols-1 overflow-visible rounded-[22px] border border-[rgba(7,27,58,0.08)] bg-white shadow-[0_32px_90px_rgba(7,27,58,0.14)] min-[769px]:min-h-[480px] min-[769px]:max-w-[750px] min-[769px]:grid-cols-[150px_1fr] min-[1280px]:min-h-[520px] min-[1280px]:max-w-[870px] min-[1280px]:grid-cols-[160px_1fr]"
              initial={{ opacity: 0, x: 90, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.28 }}
            >
              {/* Sidebar */}
              <div className="hidden flex-col gap-4 rounded-l-[22px] bg-gradient-to-b from-[#3E8B7C] via-[#377d70] to-[#2c6a5e] px-3 py-4 min-[769px]:flex">
                <motion.div className="mb-3 flex items-center justify-center gap-2" {...fadeUp(0.45, 8, 0.5)}>
                  <span className="whitespace-nowrap text-[18px] font-extrabold leading-[1.25] text-white">
                    Vertex Suite
                  </span>
                </motion.div>

                {dashNav.map(({ label, Icon, active }, i) => (
                  <motion.div
                    key={label}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-[4px] text-[14px] font-semibold ${
                      active ? "-mt-2 " : ""
                    }${
                      active ? "bg-[#255a4f] text-white" : "text-white/80"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      active
                        ? { opacity: 1, x: 0, boxShadow: [GLOW_SOFT, GLOW_BRIGHT, GLOW_SOFT] }
                        : { opacity: 1, x: 0 }
                    }
                    transition={
                      active
                        ? {
                            opacity: { duration: 0.4, ease: EASE, delay: 0.6 + i * 0.06 },
                            x: { duration: 0.4, ease: EASE, delay: 0.6 + i * 0.06 },
                            boxShadow: { duration: 3, ease: "easeInOut", repeat: Infinity, delay: 1.4 },
                          }
                        : { duration: 0.4, ease: EASE, delay: 0.6 + i * 0.06 }
                    }
                  >
                    <Icon size={20} strokeWidth={2.2} />
                    <span>{label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Main */}
              <div className="p-3 min-[1280px]:p-4">
                <motion.h3
                  className="m-0 mb-2 !text-[22px] font-semibold leading-none text-[#071b3a]"
                  {...fadeUp(0.55, 8, 0.5)}
                >
                  Overview
                </motion.h3>

                <div className="flex flex-col gap-2">
                  {/* Stat cards — full-width row (3 equal columns) */}
                  <div className="grid grid-cols-3 gap-2">
                      {dashStats.map(
                        ({ label, end, decimals, separator, suffix, delta, Icon, solid }, i) => (
                          <motion.div
                            key={label}
                            className="rounded-xl border border-[#eef1f5] p-2 shadow-[0_4px_14px_rgba(7,27,58,0.04)]"
                            {...fadeUp(0.95 + i * 0.14, 12, 0.5)}
                          >
                            <div className="flex items-center justify-between">
                              <p
                                className={`m-0 whitespace-normal break-words leading-tight text-[5px] font-semibold text-[#5b667a] min-[769px]:whitespace-nowrap min-[769px]:leading-none min-[769px]:text-[8px] ${
                                  label === "Messages Sent" ? "min-[769px]:ml-3" : ""
                                }`}
                              >
                                {label}
                              </p>
                              <span
                                className={`hidden h-8 w-8 place-items-center rounded-full min-[769px]:grid ${
                                  solid
                                    ? "bg-[#16a34a] text-white"
                                    : "bg-[#e4f3ee] text-[#3E8B7C]"
                                }`}
                              >
                                <Icon size={18} strokeWidth={2.4} />
                              </span>
                            </div>
                            <h4
                              className={`m-0 mt-1 text-[7px] font-extrabold leading-none text-[#071b3a] min-[769px]:text-[13px] ${
                                label === "Messages Sent" ? "min-[769px]:ml-3" : ""
                              }`}
                            >
                              <CountUp
                                start={0}
                                end={end}
                                duration={1.8}
                                separator={separator}
                                decimals={decimals}
                                suffix={suffix}
                                delay={1.05 + i * 0.14}
                              />
                            </h4>
                            <motion.p
                              className={`m-0 mt-1 whitespace-normal leading-tight min-[769px]:whitespace-nowrap min-[769px]:leading-none ${
                                label === "Messages Sent"
                                  ? "text-[5px] min-[769px]:text-[6px]"
                                  : "text-[5px] min-[769px]:text-[7px]"
                              } ${label === "Messages Sent" ? "min-[769px]:ml-3" : ""}`}
                              {...fadeUp(1.5 + i * 0.14, 6, 0.45)}
                            >
                              <span className="font-bold text-[#16a34a]">↑ {delta}</span>{" "}
                              <span className="text-[#8a94a6]">vs last month</span>
                            </motion.p>
                          </motion.div>
                        )
                      )}
                    </div>

                    {/* Chart (same width as before ~ 1.7fr column) */}
                    <motion.div
                      className="box-border flex min-h-[200px] w-full flex-col overflow-hidden rounded-[16px] border border-[#dfe4ea] bg-white py-2 shadow-[0_4px_14px_rgba(7,27,58,0.04)]"
                      {...fadeUp(1.35, 14, 0.5)}
                    >
                      <div className="mb-2 flex w-full items-center justify-between gap-3 px-3">
                        <h6 className="m-0 whitespace-nowrap text-[12px] font-semibold text-[#20242b]">
                          Campaign Performance
                        </h6>
                        <span className="hidden shrink-0 items-center gap-1 whitespace-nowrap rounded-lg border border-[#cfe4de] bg-white px-2.5 py-1.5 text-[11px] font-medium text-[#3E8B7C] min-[769px]:flex">
                          This Month <ChevronDown size={14} strokeWidth={2.2} className="text-[#667085]" />
                        </span>
                      </div>

                      <svg
                        viewBox="12 10 478 185"
                        className="mx-auto block h-auto w-full shrink-0 overflow-visible"
                      >
                        <defs>
                          <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3E8B7C" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#3E8B7C" stopOpacity="0" />
                          </linearGradient>
                          <clipPath id="areaReveal" clipPathUnits="userSpaceOnUse">
                            <motion.rect
                              x="0"
                              y="0"
                              width="500"
                              height="195"
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 1.1, ease: "easeInOut", delay: 1.6 }}
                              style={{ transformBox: "fill-box", transformOrigin: "left center" }}
                            />
                          </clipPath>
                        </defs>

                        <motion.g {...fadeIn(1.35, 0.5)}>
                          {chartGrid.map((y) => (
                            <line
                              key={y}
                              x1="65"
                              y1={y}
                              x2="475"
                              y2={y}
                              stroke="#dbe6f3"
                              strokeWidth="1"
                              strokeDasharray="2 3"
                            />
                          ))}
                          {chartYLabels.map(([y, t]) => (
                            <text
                              key={t}
                              x="43"
                              y={y}
                              textAnchor="end"
                              fontSize="10"
                              fontWeight="400"
                              fill="#344563"
                            >
                              {t}
                            </text>
                          ))}
                        </motion.g>

                        <g clipPath="url(#areaReveal)">
                          <path
                            d={`${chartCurve} L475,170 L65,170 Z`}
                            fill="url(#dashArea)"
                            stroke="none"
                          />
                        </g>

                        <motion.path
                          d={chartCurve}
                          fill="none"
                          stroke="#3E8B7C"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.1, ease: "easeInOut", delay: 1.6 }}
                        />

                        {chartDots.map(([cx, cy], i) => (
                          <motion.circle
                            key={`${cx}-${cy}`}
                            cx={cx}
                            cy={cy}
                            r="3.5"
                            fill="#ffffff"
                            stroke="#3E8B7C"
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.35, ease: EASE, delay: 2.4 + i * 0.1 }}
                            style={{ transformBox: "fill-box", transformOrigin: "center" }}
                          />
                        ))}

                        <motion.g {...fadeIn(1.5, 0.5)}>
                          {chartXLabels.map(([x, t]) => (
                            <text
                              key={t}
                              x={x}
                              y="188"
                              textAnchor="middle"
                              fontSize="10"
                              fontWeight="400"
                              fill="#344563"
                            >
                              {t}
                            </text>
                          ))}
                        </motion.g>
                      </svg>
                    </motion.div>

                    {/* Broadcast + Top Campaigns side by side */}
                    <div className="grid grid-cols-2 gap-2">
                    {/* Broadcast */}
                    <motion.div
                      className="rounded-xl border border-[#eef1f5] p-2.5 shadow-[0_4px_14px_rgba(7,27,58,0.04)]"
                      {...fadeUp(2.0, 18, 0.55)}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <span className="hidden h-7 w-7 place-items-center rounded-full bg-[#e4f3ee] text-[#3E8B7C] min-[769px]:grid">
                          <Radio size={16} strokeWidth={2.2} />
                        </span>
                        <h6 className="m-0 whitespace-nowrap text-[9px] font-extrabold text-[#071b3a]">
                          Broadcast
                        </h6>
                      </div>

                      {broadcasts.map(([name, status, color], i) => (
                        <motion.div
                          key={name}
                          className="flex items-center justify-between border-t border-[#f1f4f8] py-[5px] text-[10px] first:border-t-0"
                          {...fadeIn(1.9 + i * 0.1, 0.45)}
                        >
                          <span className="font-semibold text-[#071b3a]">{name}</span>
                          <span className="font-bold" style={{ color }}>
                            {status}
                          </span>
                        </motion.div>
                      ))}

                      <motion.button
                        className="mt-1 flex w-full items-center justify-center gap-1 !rounded-[8px] bg-[#e4f3ee] py-[5px] !text-[10px] font-semibold leading-none text-[#3E8B7C]"
                        {...fadeIn(2.25, 0.45)}
                      >
                        View All Broadcasts <ChevronRight size={8} strokeWidth={2.2} />
                      </motion.button>
                    </motion.div>

                    {/* Top Campaigns */}
                    <motion.div
                      className="h-full rounded-xl border border-[#eef1f5] p-2.5 shadow-[0_4px_14px_rgba(7,27,58,0.04)]"
                      {...fadeX(1.5, 24, 0.55)}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e4f3ee] text-[#3E8B7C]">
                          <Trophy size={16} strokeWidth={2.2} />
                        </span>
                        <h6 className="m-0 whitespace-nowrap text-[9px] font-extrabold text-[#071b3a]">
                          Top Campaigns
                        </h6>
                      </div>

                      {topCampaigns.map(([name, pct], i) => (
                        <motion.div
                          key={name}
                          className="flex items-center justify-between border-t border-[#f1f4f8] py-[5px] text-[10px] first:border-t-0"
                          {...fadeIn(1.7 + i * 0.1, 0.45)}
                        >
                          <span className="font-semibold text-[#071b3a]">{name}</span>
                          <span className="font-bold text-[#16a34a]">{pct}</span>
                        </motion.div>
                      ))}

                      <motion.button
                        className="mt-1 flex w-full items-center justify-center gap-1 !rounded-[8px] bg-[#e4f3ee] py-[5px] !text-[10px] font-semibold leading-none text-[#3E8B7C]"
                        {...fadeIn(2.05, 0.45)}
                      >
                        View All Campaigns <ChevronRight size={8} strokeWidth={2.2} />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </section>

      <section
        className="bg-white px-5 pb-[50px] pt-[35px] min-[601px]:px-[6%] min-[601px]:pt-[90px] min-[601px]:pb-[90px]"
      >
        <div className="mx-auto mb-[70px] max-w-[1040px] text-center">
          <Reveal>
            <h2 className="text-center text-[clamp(2.05rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
              Why Choose WhatsApp Marketing?
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
           <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
              WhatsApp offers direct, personal and instant engagement with the highest open rates in marketing.
              <br className="max-lg:hidden" />
              Every message becomes a touchpoint to engage, nurture and convert.
            </p>
          </Reveal>
        </div>

        {/* Tabs */}
        <div className="mx-auto mb-6 flex max-w-[1240px] items-center justify-center gap-8 border-b border-[#e4eaf1] min-[601px]:gap-16 min-[901px]:justify-around min-[901px]:gap-0">
          {whyTabs.map((tab, index) => {
            const isActive = tab.id === activeWhyTab;
            return (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => setActiveWhyTab(tab.id)}
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: index * 0.14, ease: EASE }}
                className={`relative -mb-px cursor-pointer border-0 bg-transparent px-2 pb-3 tracking-[-0.3px] transition-colors ${
                  isActive ? "text-[#0a7a3c]" : "text-[#8795a6] hover:text-[#071b3a]"
                }`}
              >
                <h4
                  className={`m-0! text-[24px]! leading-tight! min-[601px]:text-[29px]! min-[901px]:text-[34px]! ${
                    isActive
                      ? "text-[#0a7a3c]! font-[850]!"
                      : "text-[#8795a6]! font-[650]!"
                  }`}
                >
                  {tab.label}
                </h4>
                {isActive && (
                  <motion.span
                    layoutId="whyTabUnderline"
                    className="absolute -inset-x-10 -bottom-px h-[3px] rounded-full bg-[#0a7a3c]"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Tab content */}
        {/* Not keyed on activeTab: keeping this subtree mounted is what lets the
            rail image stay put while the rest of the tab re-animates. */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mx-auto grid max-w-[1240px] grid-cols-1 items-stretch gap-8 min-[901px]:grid-cols-2 min-[901px]:gap-12"
        >
          {/* Left: section image — static, like the rail image */}
          <div className="grid min-h-[280px] place-items-center rounded-[18px] bg-[#e8f8ef] p-6 shadow-[0_16px_42px_rgba(7,27,58,0.06)] min-[601px]:min-h-[420px]">
            <img
              src={activeTab.heroImage ?? "/assets/images/m1.png"}
              alt="WhatsApp marketing conversation preview"
              className="block h-full max-h-[480px] w-full object-contain"
            />
          </div>

          {/* Right: intro + feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.78, delay: 0.14, ease: EASE }}
            className="flex flex-col"
          >
            <motion.p
              key={activeTab.id}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: EASE }}
              className="mt-0! mb-6! text-[14px]! leading-[1.55]! text-[#3c4a5c]!"
            >
              {activeTab.intro}
            </motion.p>

            <div className="flex flex-col justify-start gap-6 pt-6 min-[601px]:gap-8">
              {activeTab.features.map((feature, index) => (
                <motion.div
                  key={`${activeTab.id}-${feature.title}`}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 46 : -30, y: 12 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.44 + index * 0.13, ease: EASE }}
                >
                  <img
                    src={featureImages[index] ?? featureImages[featureImages.length - 1]}
                    alt=""
                    aria-hidden="true"
                    className="shrink-0 self-start object-contain"
                    style={{ height: "64px", width: "auto" }}
                  />
                  <p className="m-0! text-[15px]! leading-[1.55]! text-[#3c4a5c]!">
                    <span className="font-[800] text-black">
                      {feature.title.trim()}
                    </span>{" "}
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </section>

      <section
        className="relative overflow-hidden bg-[#f2f7ff] px-5 pb-[50px] pt-[35px] min-[701px]:px-[6%] min-[701px]:pt-[90px] min-[701px]:pb-[90px]"
      >
        <div className="mx-auto mb-9 max-w-[1240px] text-center">
          <Reveal>
             <h2 className="text-center text-[clamp(2.05rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
              Drive Customers to WhatsApp from Every Channel
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto max-w-[860px] !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
Give your customers multiple ways to reach you - ads, QR codes, websites, or emails.
<br />
Every click or scan brings them directly into WhatsApp for instant engagement.
            </p>
          </Reveal>
        </div>

        <div className="relative mx-auto mt-[64px] mb-[55px] grid max-w-[1480px] grid-cols-1 items-start gap-[18px] min-[701px]:grid-cols-3 min-[1280px]:grid-cols-6 min-[1280px]:gap-[34px]">
          {/* Dashed connectors: side cards -> central WhatsApp phone (6-col layout only) */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[372px] w-full min-[1280px]:block"
            viewBox="0 0 1320 372"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="arrowShine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3a3a3a" />
                <stop offset="45%" stopColor="#050505" />
                <stop offset="100%" stopColor="#2a2a2a" />
              </linearGradient>
            </defs>
            <g
              fill="none"
              stroke="url(#arrowShine)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="4 4"
              vectorEffect="non-scaling-stroke"
            >
              {/* left middle droppers */}
              <path vectorEffect="non-scaling-stroke" d="M322.4 285 V317 Q322.4 335 340.4 335" />
              <path vectorEffect="non-scaling-stroke" d="M547.4 285 V317 Q547.4 335 565.4 335" />
              {/* left rail: down from outer card, rounded corner, across toward phone */}
              <path vectorEffect="non-scaling-stroke" d="M97.4 285 V317 Q97.4 335 115.4 335 H660" />
              {/* right middle dropper */}
              <path vectorEffect="non-scaling-stroke" d="M997.6 285 V317 Q997.6 335 979.6 335" />
              {/* right rail: down from outer card, rounded corner, across toward phone */}
              <path vectorEffect="non-scaling-stroke" d="M1222.5 285 V317 Q1222.5 335 1204.5 335 H885" />
            </g>
            <g
              fill="none"
              stroke="url(#arrowShine)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            >
              {/* up-arrowheads at each side card */}
              <path vectorEffect="non-scaling-stroke" d="M93.4 291 L97.4 285 L101.4 291" />
              <path vectorEffect="non-scaling-stroke" d="M318.4 291 L322.4 285 L326.4 291" />
              <path vectorEffect="non-scaling-stroke" d="M543.4 291 L547.4 285 L551.4 291" />
              <path vectorEffect="non-scaling-stroke" d="M993.6 291 L997.6 285 L1001.6 291" />
              <path vectorEffect="non-scaling-stroke" d="M1218.5 291 L1222.5 285 L1226.5 291" />
              {/* horizontal arrowheads pointing into phone */}
              <path vectorEffect="non-scaling-stroke" d="M654 331 L660 335 L654 339" />
              <path vectorEffect="non-scaling-stroke" d="M891 331 L885 335 L891 339" />
            </g>
          </svg>

          <AnimatedCard index={0} className="rounded-2xl border border-[#dfe7ee] bg-white px-[10px] py-[18px] text-center shadow-[0_16px_42px_rgba(7,27,58,0.06)] min-[701px]:min-h-[250px] min-[1280px]:h-[285px]">
            <h6 className="mt-2! mb-3! text-sm text-[#071b3a] font-[850]">Ad Campaigns</h6>
            <img
              src="/assets/images/k1.webp"
              alt="Ad creative promoting a holiday offer with a Chat on WhatsApp button"
              className="mx-auto mb-3 block h-[145px]! w-full rounded-[10px] object-contain"
            />
            {/* <p className="mt-4! mb-[3px]! text-[14px]! leading-[1.35]! text-[#111827]">
              Escape to Paradise
            </p>
            <span className="mb-2.5 block text-[11px] text-[#64748b]">Up to 30% Off</span> */}
            <button className={`${channelBtn} max-w-[192px] !text-[14px] !rounded-lg`}>Chat on WhatsApp</button>
          </AnimatedCard>

          <AnimatedCard index={1} className="rounded-2xl border border-[#dfe7ee] bg-white p-[18px] text-center shadow-[0_16px_42px_rgba(7,27,58,0.06)] min-[701px]:min-h-[250px] min-[1280px]:h-[285px]">
            <h6 className="mt-2! mb-3! text-sm text-[#071b3a] font-[850]">Website Widget</h6>
            <img
              src="/assets/images/k22.webp"
              alt="Website page with a floating WhatsApp chat button"
              className="mx-auto mb-3 block h-[145px]! w-full object-contain"
            />
            <button className={`${channelBtn} !text-[14px] !rounded-lg`}>Chat with us</button>
          </AnimatedCard>

          <AnimatedCard index={2} className="rounded-2xl border border-[#dfe7ee] bg-white p-[18px] text-center shadow-[0_16px_42px_rgba(7,27,58,0.06)] min-[701px]:min-h-[250px] min-[1280px]:h-[285px]">
            <h6 className="mt-2! mb-3! text-sm text-[#071b3a] font-[850]">QR Codes</h6>
            <img
              src="/assets/images/k3.webp"
              alt="WhatsApp QR code with a Scan to Chat label"
              className="mx-auto mb-3 block h-[170px]! w-full object-contain"
            />
            {/* <span className="mt-2.5 block text-[10px] text-[#0ba856] font-[850]">WhatsApp Chat</span> */}
            {/* <button className="mt-1 mb-[3px] text-xs leading-[1.35] text-[#071b3a] font-[850]">
              Scan to Chat
            </button> */}
          </AnimatedCard>

          <AnimatedCard index={3} className="relative z-10 min-h-[353px] min-[1280px]:-mx-[9px] min-[1280px]:-translate-y-[18px]">
            <img
              src="/assets/images/k44.webp"
              alt="WhatsApp chat with a travel business showing quick reply buttons"
              className="mx-auto block h-[353px]! w-full object-contain"
            />
            {/* <div className="mb-[22px] text-white">
              <div>
                <strong className="block text-[13px] font-[850]">Vertex Travels</strong>
                <span className="text-[10px] opacity-[0.85]">online</span>
              </div>
            </div>

            <div className="mb-3.5 rounded-xl bg-[#fffdf8] p-3 text-xs leading-[1.45] text-[#1f2937] shadow-[0_8px_20px_rgba(7,27,58,0.08)]">
              Hi there! 👋 <br />
              How can we help you plan your next trip?
              <small className="mt-1 block text-right text-[9px] text-[#94a3b8]">11:02 AM</small>
            </div>

            <button className={centerPhoneBtn}>Explore Packages</button>
            <button className={centerPhoneBtn}>Talk To Expert</button>
            <button className={centerPhoneBtn}>Special Offers</button> */}
          </AnimatedCard>

          <AnimatedCard index={4} className="rounded-2xl border border-[#dfe7ee] bg-white p-[18px] text-center shadow-[0_16px_42px_rgba(7,27,58,0.06)] min-[701px]:min-h-[250px] min-[1280px]:h-[285px]">
            <h6 className="mt-2! mb-3! text-sm text-[#071b3a] font-[850]">Email Campaigns</h6>
            <img
              src="/assets/images/k555.webp"
              alt="Email campaign promoting a getaway with exclusive offers"
              className="mx-auto mb-3 block h-[150px]! w-full object-contain"
            />
            {/* <p className="mt-2.5 mb-[3px] text-xs leading-[1.35] text-[#111827]">
              Plan your getaway with exclusive offers
            </p> */}
            <button className={`${channelBtn} !text-[14px] !rounded-lg`}>Chat on WhatsApp</button>
          </AnimatedCard>

          <AnimatedCard index={5} className="rounded-2xl border border-[#dfe7ee] bg-white p-[18px] text-center shadow-[0_16px_42px_rgba(7,27,58,0.06)] min-[701px]:min-h-[250px] min-[1280px]:h-[285px]">
            <h6 className="mt-2! mb-3! text-sm text-[#071b3a] font-[850]">Social Media</h6>
            <img
              src="/assets/images/k666.webp"
              alt="Instagram, Facebook and messaging channel icons"
              className="mx-auto mb-3 block h-[150px]! w-full object-contain"
            />
            <button className={`${channelBtn} !text-[14px] !rounded-lg`}>Send Message</button>
          </AnimatedCard>
        </div>

        <div className="mx-auto mb-9 max-w-[1240px] text-center">
          <Reveal>
            <h3 className="text-center text-[clamp(2.05rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
              Key Features
            </h3>
          </Reveal>
          {/* <Reveal delay={0.15}>
            <p className="mx-auto max-w-[860px] !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
              Run WhatsApp campaigns with ease
            </p>
          </Reveal> */}
        </div>

        <AnimatedCardGrid className="mx-auto grid max-w-[1480px] grid-cols-1 gap-2 min-[701px]:grid-cols-3 min-[1280px]:grid-cols-6" style={{fontFamily:"'Inter', sans-serif"}}>
          <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] pt-4 pb-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <img
              src="/assets/images/bm.webp"
              alt=""
              aria-hidden="true"
              className="mx-auto mb-4 block h-[54px]! w-[54px] object-contain"
            />
            <h5 className="m-0! mb-1! flex min-h-[52px] items-start justify-center text-center text-[19px]! leading-[1.35]! text-[#071b3a]! font-[850]!">Bulk Messaging</h5>
            <p className="m-0! text-[14px]! leading-[1.45]! text-[#334155]!">
               Send offers, invites, and product updates to thousands at once.
            </p>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] pt-4 pb-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <img
              src="/assets/images/profo.webp"
              alt=""
              aria-hidden="true"
              className="mx-auto mb-4 block h-[54px]! w-[54px] object-contain"
            />
            <h5 className="m-0! mb-1! flex min-h-[52px] items-start justify-center text-center text-[19px]! leading-[1.35]! text-[#071b3a]! font-[850]!">Personalization</h5>
            <p className="m-0! text-[14px]! leading-[1.45]! text-[#334155]!">
              Personalize messages with names, order details, and dynamic fields. 
            </p>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] pt-4 pb-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <img
              src="/assets/images/delvi-tight.webp"
              alt=""
              aria-hidden="true"
              /* Wider box, same 54px height, so the heading stays in line with
                 the other cards while the wide truck renders larger. */
              className="mx-auto mb-4 block h-[54px]! w-[84px] object-contain"
            />
            <h4 className="m-0! mb-1! flex min-h-[52px] items-start justify-center text-center text-[19px]! leading-[1.35]! text-[#071b3a]! font-[850]!">Instant Delivery</h4>
            <p className="m-0! text-[14px]! leading-[1.45]! text-[#334155]!">
              Add buttons, lists and CTAs to drive engagement.
            </p>
          </div>

          {/* <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] pt-4 pb-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <img
              src="/assets/images/camp.webp"
              alt=""
              aria-hidden="true"
              className="mx-auto mb-4 block h-[54px]! w-[54px] object-contain"
            />
            <h4 className="m-0! mb-3! flex min-h-[52px] items-start justify-center text-center text-[19px]! leading-[1.35]! text-[#071b3a]! font-[850]!">Interactive Campaigns</h4>
            <p className="m-0! text-[13px]! leading-[1.45]! text-[#334155]!">
              Add buttons, lists and CTAs to drive engagement.
            </p>
          </div> */}

          <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] pt-4 pb-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <img
              src="/assets/images/Auto.webp"
              alt=""
              aria-hidden="true"
              className="mx-auto mb-4 block h-[54px]! w-[54px] object-contain"
            />
            <h5 className="m-0! mb-1! flex min-h-[52px] items-start justify-center text-center text-[19px]! leading-[1.35]! text-[#071b3a]! font-[850]!">Automation</h5>
            <p className="m-0! text-[14px]! leading-[1.45]! text-[#334155]!">
              Schedule broadcasts, reminders and drip campaigns to save time.
            </p>
          </div>
                    <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] pt-4 pb-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <img
              src="/assets/images/camp.webp"
              alt=""
              aria-hidden="true"
              className="mx-auto mb-4 block h-[54px]! w-[54px] object-contain"
            />
            <h5 className="m-0! mb-3! flex min-h-[52px] items-start justify-center text-center text-[19px]! leading-[1.35]! text-[#071b3a]! font-[850]!">Interactive Campaigns</h5>
            <p className="m-0! text-[14px]! leading-[1.45]! text-[#334155]!">
              Add buttons, lists and CTAs to drive engagement.
            </p>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] pt-4 pb-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <img
              src="/assets/images/analy.webp"
              alt=""
              aria-hidden="true"
              className="mx-auto mb-4 block h-[54px]! w-[54px] object-contain"
            />
            <h5 className="m-0! mb-3! flex min-h-[52px] items-start justify-center text-center text-[19px]! leading-[1.35]! text-[#071b3a]! font-[850]!">Analytics Dashboard</h5>
            <p className="m-0! text-[14px]! leading-[1.45]! text-[#334155]!">
              Track delivery, read rates and conversion performance.
            </p>
          </div>
        </AnimatedCardGrid>
      </section>

      <section
        className="bg-white px-5 pb-[50px] pt-[35px] min-[769px]:px-[6%] min-[769px]:pl-[3%] min-[769px]:pt-[90px] min-[769px]:pb-[90px]"
      >
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-stretch gap-8 min-[1280px]:grid-cols-[1.65fr_1.25fr] min-[1280px]:gap-[12px]">
          <div>
            <Reveal direction="left">
              <h2 className=" text-[clamp(2.05rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
                How to use WhatsApp Marketing Effectively
              </h2>
            </Reveal>

            <Reveal direction="left" delay={0.15} as="p" className="m-0 mb-7 max-w-[840px] !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
              Experience complete marketing control with Vertex Suite's WhatsApp
              Broadcasting Dashboard. 
            </Reveal>
 {/* <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]"></p> */}
            <div
              className="mt-6 grid grid-cols-1 overflow-hidden rounded-[22px] border border-[#dfe7ee] bg-white shadow-[0_22px_60px_rgba(7,27,58,0.1)] min-[769px]:mt-0 min-[769px]:grid-cols-[170px_1fr] min-[1280px]:mt-10"
            >
              <aside className="hidden flex-col gap-3.5 bg-gradient-to-b from-[#3E8B7C] via-[#377d70] to-[#2c6a5e] px-3 py-3 text-white min-[769px]:flex">
                <div className="mt-6 mb-2 flex items-center justify-center gap-2">
                  <span className="whitespace-nowrap text-[18px] font-extrabold leading-[1.25] text-white">
                    Vertex Suite
                  </span>
                </div>

                {howToNav.map(({ label, Icon, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-[4px] text-[14px] font-semibold ${
                      active ? "bg-[#255a4f] text-white" : "text-white/80"
                    }`}
                  >
                    <Icon size={20} strokeWidth={2.2} />
                    <span>{label}</span>
                  </div>
                ))}
              </aside>

              <main className="p-6">
                <div className="mb-[18px] flex items-center justify-between">
                  <h3 className="m-0! text-[22px]! font-semibold! leading-none! text-[#071b3a]!">Dashboard</h3>
                  <button className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[10px]! border border-[#dfe7ee] bg-white px-[13px] py-[7px] text-[11px]! font-bold text-[#334155]">
                    1 – 31 May 2025
                    <ChevronDown size={13} strokeWidth={2.4} />
                  </button>
                </div>

                <div className="mb-4 grid grid-cols-1 gap-[13px] min-[769px]:grid-cols-4">
                  <div className="rounded-[14px] border border-[#edf1f5] bg-white p-[13px]">
                    <p className="m-0! mb-1.5! text-[16px]! font-semibold! text-[#5b667a]!">Messages Sent</p>
                    <h4 className="m-0! mt-1! text-[22px]! font-extrabold! leading-none! text-[#071b3a]!">125,430</h4>
                    <span className="mt-1 block text-[15px] font-bold text-[#16a34a]">↑ 13.5%</span>
                  </div>

                  <div className="rounded-[14px] border border-[#edf1f5] bg-white p-[13px]">
                    <p className="m-0! mb-1.5! text-[16px]! font-semibold! text-[#5b667a]!">Delivered</p>
                    <h4 className="m-0! mt-1! text-[22px]! font-extrabold! leading-none! text-[#071b3a]!">123,842</h4>
                    <span className="mt-1 block text-[15px] font-bold text-[#16a34a]">↑ 12.8%</span>
                  </div>

                  <div className="rounded-[14px] border border-[#edf1f5] bg-white p-[13px]">
                    <p className="m-0! mb-1.5! text-[16px]! font-semibold! text-[#5b667a]!">Read Rate</p>
                    <h4 className="m-0! mt-1! text-[22px]! font-extrabold! leading-none! text-[#071b3a]!">98.1%</h4>
                    <span className="mt-1 block text-[15px] font-bold text-[#16a34a]">↑ 8.2%</span>
                  </div>

                  <div className="rounded-[14px] border border-[#edf1f5] bg-white p-[13px]">
                    <p className="m-0! mb-1.5! text-[16px]! font-semibold! text-[#5b667a]!">Clicks</p>
                    <h4 className="m-0! mt-1! text-[22px]! font-extrabold! leading-none! text-[#071b3a]!">15,982</h4>
                    <span className="mt-1 block text-[15px] font-bold text-[#16a34a]">↑ 20.3%</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3.5 min-[769px]:grid-cols-[1fr_1fr]">
                  <div className={analyticsCard}>
                    <h4 className={`${analyticsCardTitle} mb-6! text-[16px]!`}>Messages Over Time</h4>

                    <svg
                      viewBox="0 0 360 160"
                      className="h-[130px] w-full"
                      role="img"
                      aria-label="Messages sent per day, Monday through Sunday"
                    >
                      {MOT_TICKS.map((tick) => (
                        <g key={tick}>
                          <line
                            x1={MOT_LEFT}
                            y1={motY(tick)}
                            x2={MOT_RIGHT}
                            y2={motY(tick)}
                            stroke="#eef2f6"
                            strokeWidth="1"
                          />
                          <text
                            x={MOT_LEFT - 8}
                            y={motY(tick) + 3}
                            textAnchor="end"
                            fontSize="12"
                            fontWeight="600"
                            fill="#64748b"
                          >
                            {tick}
                          </text>
                        </g>
                      ))}

                      <line
                        x1={MOT_LEFT}
                        y1={MOT_TOP}
                        x2={MOT_LEFT}
                        y2={MOT_BASE}
                        stroke="#e2e8f0"
                        strokeWidth="1"
                      />
                      <line
                        x1={MOT_LEFT}
                        y1={MOT_BASE}
                        x2={MOT_RIGHT}
                        y2={MOT_BASE}
                        stroke="#e2e8f0"
                        strokeWidth="1"
                      />

                      <defs>
                        <linearGradient id="motArea" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      <path d={motAreaPath} fill="url(#motArea)" stroke="none" />

                      <path
                        d={motPath}
                        fill="none"
                        stroke="#16a34a"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {motPoints.map(([x, y], i) => {
                        const isLatest = i === motPoints.length - 1;
                        return (
                          <circle
                            key={MOT_DAYS[i]}
                            cx={x}
                            cy={y}
                            r={isLatest ? 4.2 : 2.6}
                            fill="#ffffff"
                            stroke="#16a34a"
                            strokeWidth={isLatest ? 2.4 : 1.8}
                          />
                        );
                      })}

                      {MOT_DAYS.map((day, i) => (
                        <text
                          key={day}
                          x={motX(i)}
                          y={138}
                          textAnchor="middle"
                          fontSize="12"
                          fontWeight="600"
                          fill="#64748b"
                        >
                          {day}
                        </text>
                      ))}
                    </svg>
                  </div>

                  <div className={analyticsCard}>
                    <h4 className={`${analyticsCardTitle} mb-6! text-[16px]!`}>Message Status</h4>

                    <div className="flex items-center gap-[18px]">
                      <svg
                        viewBox="0 0 95 95"
                        className="block h-[95px] w-[95px] shrink-0 overflow-visible"
                        role="img"
                        aria-label="Message status breakdown: 62% delivered, 24% read, 14% pending"
                      >
                        {messageStatusSlices.map(({ id, color, share, start }) => (
                          <circle
                            key={id}
                            cx={DONUT_C}
                            cy={DONUT_C}
                            r={DONUT_R}
                            fill="none"
                            stroke={color}
                            strokeLinecap="butt"
                            strokeWidth={DONUT_BAND}
                            /* Normalize the circumference to 1 so the dash can
                               be expressed directly as the slice's share. */
                            pathLength="1"
                            strokeDasharray={`${share} 1`}
                            transform={`rotate(${start * 360 - 90} ${DONUT_C} ${DONUT_C})`}
                          />
                        ))}
                      </svg>

                      <ul className="m-0 list-none p-0">
                        {messageStatusSlices.map(({ id, label, color }) => (
                          <li
                            key={id}
                            className="mb-2 flex items-center gap-[7px] text-[11px] text-[#334155]"
                          >
                            <span
                              className="h-2 w-2 shrink-0 rounded-full"
                              style={{ backgroundColor: color }}
                            />
                            {label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={analyticsCard} style={{ paddingTop: 150 }}>
                    <h4 className={`${analyticsCardTitle} mb-6! text-[16px]!`}>Audience Segments</h4>

                    <div className={segmentLine}>
                      <p className="m-0! text-[14px]! leading-[1.3]! font-medium! text-[#334155]!">Frequent Travelers</p>
                      <span className={barTrack}>
                        <i className={barFill} style={{ width: "85%" }} />
                      </span>
                      <b className="pr-6 text-right text-[14px] text-[#334155]">24,350</b>
                    </div>

                    <div className={segmentLine}>
                      <p className="m-0! text-[14px]! leading-[1.3]! font-medium! text-[#334155]!">Holiday Shoppers</p>
                      <span className={barTrack}>
                        <i className={barFill} style={{ width: "72%" }} />
                      </span>
                      <b className="pr-6 text-right text-[14px] text-[#334155]">18,930</b>
                    </div>

                    <div className={segmentLine}>
                      <p className="m-0! text-[14px]! leading-[1.3]! font-medium! text-[#334155]!">Inactive Users</p>
                      <span className={barTrack}>
                        <i className={barFill} style={{ width: "55%" }} />
                      </span>
                      <b className="pr-6 text-right text-[14px] text-[#334155]">12,480</b>
                    </div>

                    <div className={segmentLine}>
                      <p className="m-0! text-[14px]! leading-[1.3]! font-medium! text-[#334155]!">New Leads</p>
                      <span className={barTrack}>
                        <i className={barFill} style={{ width: "38%" }} />
                      </span>
                      <b className="pr-6 text-right text-[14px] text-[#334155]">9,750</b>
                    </div>
                  </div>

                  <div className={analyticsCard}>
                    <h4 className={`${analyticsCardTitle} mb-6! whitespace-nowrap text-[16px]!`}>
                      Top Performing Campaigns
                    </h4>

                    {campaignBars.map(({ label, width, value }) => (
                      <div key={label} className={barLine}>
                        <p className="m-0! text-[14px]! leading-[1.3]! font-medium! text-[#334155]!">{label}</p>
                        <span className={barTrack}>
                          <i className={barFill} style={{ width }} />
                        </span>
                        <b className="text-right text-[14px] text-[#334155]">{value}</b>
                      </div>
                    ))}
                  </div>
                </div>
              </main>
            </div>
          </div>

          <AnimatedCardGrid className="grid grid-cols-1 gap-[18px] pt-2 min-[769px]:grid-cols-2 min-[1280px]:flex min-[1280px]:h-full min-[1280px]:translate-x-8 min-[1280px]:flex-col min-[1280px]:justify-end [&>div]:min-[1280px]:flex-1" style={{fontFamily:"'Inter', sans-serif"}}>
            <div className={featureCard}>
              <img src="/assets/images/d1.webp" alt="Plan & Launch" className="shrink-0 object-contain" style={{width:"72px",height:"72px"}} />
              <div>
                <h4 className="m-0! mb-2.5! text-[21px]! leading-[1.45]! tracking-[-0.2px] text-[#071b3a]! font-[800]!">
                  Plan & Launch Campaigns
                </h4>
                <p className="m-0! text-[15px]! leading-[1.5]! text-[#334155]!">
                 Create segmented WhatsApp broadcasts 
                  <br />
                   using dynamic templates and audience filters.
                </p>
              </div>
            </div>

            <div className={featureCard}>
              <img src="/assets/images/d2.webp" alt="Track & Analyze" className="shrink-0 object-contain" style={{width:"72px",height:"72px"}} />
              <div>
                <h4 className="m-0! mb-2.5! text-[21px]! leading-[1.45]! tracking-[-0.2px] text-[#071b3a]! font-[800]!">
                  Track & Analyze Performance
                </h4>
                <p className="m-0! text-[15px]! leading-[1.5]! text-[#334155]!">
                 Monitor message deliveries, open rates and click-throughs through a detailed analytics dashboard. 
                </p>
              </div>
            </div>

            <div className={featureCard}>
              <img src="/assets/images/d3.webp" alt="Generate Leads" className="shrink-0 object-contain" style={{width:"72px",height:"72px"}} />
              <div>
                <h4 className="m-0! mb-2.5! text-[21px]! leading-[1.45]! tracking-[-0.2px] text-[#071b3a]! font-[800]!">
                  Generate & Qualify Leads
                </h4>
                <p className="m-0! text-[15px]! leading-[1.5]! text-[#334155]!">
                  Capture new leads directly from replies and assign
                  <br />
                 them to your sales or CRM pipelines.
                </p>
              </div>
            </div>

            <div className={featureCard}>
              <img src="/assets/images/d4.webp" alt="Lifecycle Marketing" className="shrink-0 object-contain" style={{width:"72px",height:"72px"}} />
              <div>
                <h4 className="m-0! mb-2.5! text-[21px]! leading-[1.45]! tracking-[-0.2px] text-[#071b3a]! font-[800]!">
                  Lifecycle Marketing Simplified
                </h4>
                <p className="m-0! text-[15px]! leading-[1.5]! text-[#334155]!">
                  Build automated drip campaigns to re-engage 
                  <br />
                  inactive users and convert new leads.
                </p>
              </div>
            </div>

            <div className={featureCard}>
              <img src="/assets/images/d5.webp" alt="Retention" className="shrink-0 object-contain" style={{width:"72px",height:"72px"}} />
              <div>
                <h4 className="m-0! mb-2.5! text-[21px]! leading-[1.45]! tracking-[-0.2px] text-[#071b3a]! font-[800]!">
                  Retention & Re-Engagement
                </h4>
                <p className="m-0! text-[15px]! leading-[1.5]! text-[#334155]!">
                  Reconnect inactive users with personalized offers, feedback requests, or loyalty updates.
                 
                </p>
              </div>
            </div>
          </AnimatedCardGrid>
        </div>
      </section>

      <WhatsAppMarketingFaqSection />
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
        <span>Start Free Trial</span>
        <ArrowRight size={16} />
      </Link>

      <Link
        to="/book-demo"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-[9px]! border-2 border-green-600 bg-white px-3 py-2.5 text-[0.9rem] font-semibold !text-green-600 no-underline!"
      >
        <span>Book a Demo</span>
        <CalendarDays size={18} strokeWidth={1.6} />
      </Link>
    </div>
    </>
  );
}

const whatsappMarketingFaqs = [
  {
    q: "What is WhatsApp marketing?",
    a: "WhatsApp marketing is the practice of promoting your products and services on WhatsApp through opt-in campaigns, offers, product updates, and personalised journeys — all inside the app your customers already use daily.",
  },
  {
    q: "Do I need customer consent to send marketing messages?",
    a: "Yes. WhatsApp allows marketing messages only to users who have opted in. Vertex Suite helps you collect, store, and manage opt-ins so every campaign stays compliant.",
  },
  {
    q: "Are marketing message templates approved by WhatsApp?",
    a: "Every marketing template goes through WhatsApp approval. Vertex Suite guides you with ready-to-use template formats and helps you submit them for faster approval.",
  },
  {
    q: "How is WhatsApp marketing better than SMS or email?",
    a: "WhatsApp delivers far higher open and response rates than SMS or email, supports rich media and buttons, and lets customers reply instantly — turning a campaign into a real conversation.",
  },
  {
    q: "Can I personalise campaigns for different customer segments?",
    a: "Yes. You can segment audiences by behaviour, purchase history, location, or custom attributes, and send each group tailored offers and content.",
  },
  {
    q: "Can I automate campaigns like abandoned cart or re-engagement?",
    a: "Yes. Vertex Suite supports automated drip journeys — abandoned cart nudges, win-back offers, loyalty updates, and post-purchase follow-ups — triggered by customer actions.",
  },
  {
    q: "How do I measure campaign performance?",
    a: "You get real-time analytics on delivery, reads, clicks, replies, and conversions, so you can see exactly which campaigns are driving revenue.",
  },
  {
    q: "What does WhatsApp marketing cost?",
    a: "WhatsApp charges per conversation, and pricing varies by category and country. Vertex Suite gives you transparent usage tracking so you always know what you are spending.",
  },
];

function WhatsAppMarketingFaqSection() {
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
              Can’t find what you’re looking for? Our team is here to help you understand WhatsApp Marketing and Vertex Suite better.
            </p>
          </Reveal>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-1">
          {whatsappMarketingFaqs.map((item, index) => {
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
