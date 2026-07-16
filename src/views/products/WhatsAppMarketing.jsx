"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUpModule from "react-countup";
import {
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Eye,
  FileText,
  Home,
  Image as ImageIcon,
  Megaphone,
  MessageSquare,
  Radio,
  Send,
  TrendingUp,
  Trophy,
  Users,
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
const analyticsCardTitle = "m-0 mb-3 text-[#071b3a] text-[13px] font-[850]";

const barLine =
  "grid grid-cols-1 min-[769px]:grid-cols-[110px_1fr_45px] gap-[9px] items-center mb-[9px]";
const barTrack =
  "h-1.5 bg-[#e9f2ee] rounded-full overflow-hidden";
const barFill = "block h-full bg-[#12b957] rounded-full";

const sectionHeading2 =
  "m-0 mb-3.5 text-[#071b3a] text-[clamp(30px,3vw,44px)] leading-[1.12] tracking-[-1.2px] font-[850]";

const heroStats = [
  { value: "98%", label: "Average Open Rate", Icon: TrendingUp },
  { value: "AI", label: "Smart Segmentation", Icon: Users },
  { value: "24/7", label: "Automated Follow-ups", Icon: Clock },
  { value: "Live", label: "Campaign Analytics", Icon: BarChart3 },
];

const useIcon =
  "w-[58px] h-[58px] shrink-0 rounded-2xl grid place-items-center bg-gradient-to-br from-[#11b957] to-[#087d4a] text-white text-[18px] font-black";

const featureCard =
  "min-h-[105px] bg-white border border-[#edf1f5] rounded-2xl p-5 flex gap-[18px] items-center shadow-[0_16px_42px_rgba(7,27,58,0.06)]";

const tripImageStyle = {
  backgroundImage:
    "linear-gradient(rgba(7,27,58,0.05), rgba(7,27,58,0.05)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80')",
};

const adImageStyle = {
  backgroundImage:
    "linear-gradient(rgba(7,27,58,0.05), rgba(7,27,58,0.05)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80')",
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

const chartCurve =
  "M65,155 C69,151 73,143 78,138 C103,130 130,113 159,110 C198,106 226,83 268,81 C308,79 339,91 376,89 C403,87 421,63 438,57 C450,50 463,35 475,28";
const chartDots = [
  [78, 138],
  [159, 110],
  [268, 81],
  [376, 89],
  [438, 57],
  [470, 28],
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

const GLOW_SOFT = "0 6px 16px rgba(15,50,160,0.45)";
const GLOW_BRIGHT = "0 8px 26px rgba(47,107,255,0.65)";

const topCampaigns = [
  ["Holiday Offer", "98.2%"],
  ["Travel Package", "87.0%"],
  ["Weekend Getaway", "96.8%"],
];

const broadcasts = [
  ["Campaign Live", "Running", "#16a34a"],
  ["New Year Sale", "Scheduled", "#2563eb"],
  ["Abandoned Cart", "Running", "#16a34a"],
];

const whyTabs = [
  {
    id: "engage",
    label: "Engage",
    intro:
      "With the WhatsApp Business API, hospitality brands deliver instant, personalized information that reduces customer effort and maximizes first impressions.",
    features: [
      {
        title: "Build Trust",
        color: "#08a84f",
        text: "Build trust with pre-designed itineraries like 3 Nights, 4 Days – Goa Experience delivered instantly in chat.",
      },
      {
        title: "Reduce Friction",
        color: "#ea6a12",
        text: "Reduce friction by offering interactive lists and quick-reply buttons such as View Packages, Download Itinerary, Check Price.",
      },
      {
        title: "Maximize Engagement",
        color: "#2f6bff",
        text: "Maximize engagement with rich media carousels showcasing rooms, dining and experiences.",
      },
      {
        title: "Highlight Convenience",
        color: "#7c4dff",
        text: "Highlight convenience with AI-powered chat support for FAQs like inclusions, check-in, or local attractions.",
      },
    ],
  },
  {
    id: "nurture",
    label: "Nurture",
    intro:
      "Keep customers close over time with personalized recommendations, timely reminders and offers that feel one-to-one.",
    features: [
      {
        title: "Stay Relevant",
        color: "#08a84f",
        text: "Send tailored product picks and style suggestions based on each customer's interests and past activity.",
      },
      {
        title: "Timely Reminders",
        color: "#ea6a12",
        text: "Reduce drop-off with gentle nudges for abandoned carts, restocks and upcoming events.",
      },
      {
        title: "Personalized Offers",
        color: "#2f6bff",
        text: "Reward loyal customers with exclusive deals and early access delivered right to their chat.",
      },
      {
        title: "Two-Way Conversations",
        color: "#7c4dff",
        text: "Let customers reply, browse and ask questions in a natural, ongoing conversation.",
      },
    ],
  },
  {
    id: "convert",
    label: "Convert",
    intro:
      "Turn interest into revenue with secure transactions, instant confirmations and frictionless checkouts inside WhatsApp.",
    features: [
      {
        title: "Secure Payments",
        color: "#08a84f",
        text: "Enable safe, in-chat payments so customers can complete purchases without ever leaving WhatsApp.",
      },
      {
        title: "Instant Confirmations",
        color: "#ea6a12",
        text: "Send appointment, order and booking confirmations the moment an action is taken.",
      },
      {
        title: "Seamless Checkout",
        color: "#2f6bff",
        text: "Guide customers from selection to purchase with a smooth, guided checkout flow.",
      },
      {
        title: "Automated Follow-ups",
        color: "#7c4dff",
        text: "Follow up automatically with guides, receipts and next steps to keep customers coming back.",
      },
    ],
  },
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
  const activeTab = whyTabs.find((t) => t.id === activeWhyTab) ?? whyTabs[0];

  return (
    <main className="whatsapp-marketing-page w-full overflow-x-clip bg-white">
      <section
        className="page-aligned relative box-border overflow-hidden bg-[#eff4ef] pt-11 pb-[56px] grid grid-cols-1 items-start gap-12 min-[769px]:pt-[88px] min-[769px]:pb-[80px] min-[1101px]:grid-cols-[0.76fr_1.24fr]"
      >
        <div className="min-w-0">
          <h1 className="mt-8! mb-[42px]! text-[clamp(2.05rem,8vw,4.5rem)] leading-[1.05] tracking-tight text-[#071b3a] font-extrabold">
            Conversations <br />
            that swipe right on <span className="text-[#10b957]">ROI</span>
          </h1>

          <p className="block max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
            Build Lasting Connections & Higher ROI with WhatsApp Marketing
            Automation. Automate campaigns, send personalized messages and grow
            your business with the world’s most powerful messaging platform.
          </p>

          <div className="mt-[42px] grid w-full max-w-[640px] grid-cols-2 gap-3.5 max-md:gap-2 max-sm:grid-cols-1">
            {heroStats.map(({ value, label, Icon }) => (
              <div
                key={label}
                className="flex min-h-[78px] items-center gap-3.5 rounded-2xl border border-[#eef2f6] bg-white px-4 py-4 shadow-[0_6px_18px_rgba(7,27,58,0.05)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e7f6ed] text-[#0a9d57]">
                  <Icon size={20} strokeWidth={2.2} />
                </span>

                <span className="min-w-0">
                  <span className="block text-[1.6rem] font-extrabold leading-none text-[#0a9d57]">
                    {value}
                  </span>
                  <span className="mt-1 block text-[0.92rem] font-medium leading-tight text-[#5B667A]">
                    {label}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-[60px] flex flex-col gap-[18px] min-[769px]:flex-row">
            <Link
              to="/signup"
              className="roll-btn inline-flex h-[60px] min-w-[250px] items-center justify-center overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br from-[#18c765] to-[#08a84f] px-10 text-[15px] font-extrabold text-white no-underline transition-colors duration-200 hover:text-[#071b3a]"
            >
              <span className="roll-content">
                <span className="roll-content-main">
                  <span>Start Free Trial </span>
                </span>

                <span className="roll-content-hover">
                  <span>Start Free Trial </span>
                </span>
              </span>
            </Link>
            <Link
              to="/book-demo"
              className="roll-btn inline-flex h-[60px] min-w-[250px] items-center justify-center overflow-hidden rounded-2xl border border-[#dbe4ec] bg-white px-10 text-[15px] font-extrabold text-[#071b3a] no-underline transition-colors duration-200 hover:border-[#18c765] hover:bg-[#e8f9f0] hover:text-[#08a84f]"
            >
              <span className="roll-content">
                <span className="roll-content-main">
                  <span>Book a Demo</span>
                </span>

                <span className="roll-content-hover">
                  <span>Book a Demo</span>
                </span>
              </span>
            </Link>
          </div>

          <div className="mt-[24px] flex flex-nowrap items-center gap-4 whitespace-nowrap min-[769px]:gap-6 min-[1101px]:gap-8">
            {["No credit card required", "14-day free trial", "Cancel anytime"].map(
              (item, index) => (
                <motion.span
                  key={item}
                  className="inline-flex items-center gap-1 text-[12px] text-[#50627a] min-[769px]:text-[14px] min-[1101px]:text-[16px]"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease: EASE, delay: 0.8 + index * 0.28 }}
                >
                  <span className="text-[#10b957]">●</span>
                  {item}
                </motion.span>
              )
            )}
          </div>
        </div>

        <div className="relative flex min-w-0 items-start justify-center min-[769px]:-mt-8 min-[1101px]:translate-x-[80px] min-[1101px]:justify-end">
          {/* Subtle continuous float (starts after entrance completes) */}
          <motion.div
            className="flex w-full justify-center min-[1101px]:justify-end"
          >
            {/* Full dashboard entrance: fade + slide up + scale 0.96 -> 1 */}
            <motion.div
              className="relative grid w-full max-w-[680px] grid-cols-1 overflow-visible rounded-[22px] border border-[rgba(7,27,58,0.08)] bg-white shadow-[0_32px_90px_rgba(7,27,58,0.14)] min-[769px]:min-h-[560px] min-[769px]:max-w-[820px] min-[769px]:grid-cols-[150px_1fr] min-[1101px]:min-h-[620px] min-[1101px]:max-w-[960px] min-[1101px]:grid-cols-[160px_1fr]"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            >
              {/* Sidebar */}
              <div className="hidden flex-col gap-4 rounded-l-[22px] bg-gradient-to-b from-[#075fce] via-[#014bb4] to-[#00398c] px-3 py-4 min-[769px]:flex">
                <motion.div className="mb-3 flex items-center justify-center gap-2" {...fadeUp(0.45, 8, 0.5)}>
                  <span className="h-12 w-12 shrink-0 overflow-hidden">
                    <img
                      src="/assets/images/logo.png"
                      alt="Vertex Suite"
                      className="h-auto w-12 -translate-y-[9px]"
                    />
                  </span>
                  <span className="text-[18px] font-extrabold leading-[1.25] text-white">
                    Vertex
                    <br />
                    Suite
                  </span>
                </motion.div>

                {dashNav.map(({ label, Icon, active }, i) => (
                  <motion.div
                    key={label}
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-[4px] text-[14px] font-semibold ${
                      active ? "-mt-2 " : ""
                    }${
                      active ? "bg-[#0b3f91] text-white" : "text-white/80"
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
              <div className="p-4 min-[1101px]:p-5">
                <motion.h3
                  className="m-0 mt-2 mb-3 !text-[22px] font-semibold leading-none text-[#071b3a]"
                  {...fadeUp(0.55, 8, 0.5)}
                >
                  Overview
                </motion.h3>

                <div className="flex flex-col gap-3">
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
                                className={`m-0 whitespace-nowrap text-[8px] font-semibold text-[#5b667a] ${
                                  label === "Messages Sent" ? "ml-3" : ""
                                }`}
                              >
                                {label}
                              </p>
                              <span
                                className={`grid h-8 w-8 place-items-center rounded-full ${
                                  solid
                                    ? "bg-[#16a34a] text-white"
                                    : "bg-[#e8f0ff] text-[#2563eb]"
                                }`}
                              >
                                <Icon size={18} strokeWidth={2.4} />
                              </span>
                            </div>
                            <h4
                              className={`m-0 mt-1 text-[13px] font-extrabold leading-none text-[#071b3a] ${
                                label === "Messages Sent" ? "ml-3" : ""
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
                              className={`m-0 mt-1 whitespace-nowrap leading-none ${
                                label === "Messages Sent" ? "text-[6px]" : "text-[7px]"
                              } ${label === "Messages Sent" ? "ml-3" : ""}`}
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
                      className="box-border flex min-h-[250px] w-full max-w-[76%] flex-col overflow-hidden rounded-[16px] border border-[#dfe4ea] bg-white py-3 shadow-[0_4px_14px_rgba(7,27,58,0.04)]"
                      {...fadeUp(1.35, 14, 0.5)}
                    >
                      <div className="mb-2 flex w-full items-center justify-between gap-3 px-3">
                        <h6 className="m-0 whitespace-nowrap text-[12px] font-semibold text-[#20242b]">
                          Campaign Performance
                        </h6>
                        <span className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-lg border border-[#dbe4ee] bg-white px-2.5 py-1.5 text-[11px] font-medium text-[#0878f9]">
                          This Month <ChevronDown size={14} strokeWidth={2.2} className="text-[#667085]" />
                        </span>
                      </div>

                      <svg
                        viewBox="0 0 500 200"
                        preserveAspectRatio="none"
                        className="mx-auto block h-[180px] w-full shrink-0 overflow-visible"
                      >
                        <defs>
                          <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
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
                              fontSize="13"
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
                          stroke="#0868f7"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          vectorEffect="non-scaling-stroke"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.1, ease: "easeInOut", delay: 1.6 }}
                        />

                        {chartDots.map(([cx, cy], i) => (
                          <motion.circle
                            key={`${cx}-${cy}`}
                            cx={cx}
                            cy={cy}
                            r="4.5"
                            fill="#ffffff"
                            stroke="#0868f7"
                            strokeWidth="3"
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
                              fontSize="13"
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
                    <div className="grid grid-cols-[37.5%_37.5%] gap-2">
                    {/* Broadcast */}
                    <motion.div
                      className="rounded-xl border border-[#eef1f5] p-2.5 shadow-[0_4px_14px_rgba(7,27,58,0.04)]"
                      {...fadeUp(2.0, 18, 0.55)}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e8f0ff] text-[#2563eb]">
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
                        className="mt-1 flex w-full items-center justify-center gap-1 !rounded-[8px] bg-[#eef4ff] py-[5px] !text-[10px] font-semibold leading-none text-[#2563eb]"
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
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e8f0ff] text-[#2563eb]">
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
                        className="mt-1 flex w-full items-center justify-center gap-1 !rounded-[8px] bg-[#eef4ff] py-[5px] !text-[10px] font-semibold leading-none text-[#2563eb]"
                        {...fadeIn(2.05, 0.45)}
                      >
                        View All Campaigns <ChevronRight size={8} strokeWidth={2.2} />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>

              <motion.img
                src="/assets/images/BROADCAST MESSAGE.png"
                alt="WhatsApp broadcast message preview"
                className="absolute right-[-72px] top-[210px] z-20 hidden w-[260px] drop-shadow-[0_18px_30px_rgba(7,27,58,0.2)] min-[1101px]:block"
                {...fadeX(3.3, 28, 0.6)}
              />
            </motion.div>
          </motion.div>
        </div>

      </section>

      <section
        className="bg-white px-5 py-[60px] min-[601px]:px-[6%] min-[601px]:pt-20 min-[601px]:pb-[90px]"
      >
        <div className="mx-auto mb-[70px] max-w-[1040px] text-center">
          <h2 className="h1-text mt-10! mb-7! tracking-[-1.5px] text-[#071b3a] font-[850]">
            Why Choose WhatsApp Marketing?
          </h2>
          <p className="mx-auto max-w-[1040px] !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
            WhatsApp offers direct, personal and instant engagement with the highest open rates in marketing.
            <br className="max-lg:hidden" />
            Every message becomes a touchpoint to engage, nurture and convert.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mb-6 flex max-w-[1240px] items-center justify-center gap-8 border-b border-[#e4eaf1] min-[601px]:gap-16 min-[901px]:justify-around min-[901px]:gap-0">
          {whyTabs.map((tab) => {
            const isActive = tab.id === activeWhyTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveWhyTab(tab.id)}
                className={`relative -mb-px cursor-pointer border-0 bg-transparent px-2 pb-3 text-[20px] tracking-[-0.3px] transition-colors min-[601px]:text-[25px] min-[901px]:text-[29px] ${
                  isActive
                    ? "text-[#071b3a] font-[850]"
                    : "text-[#8795a6] font-[650] hover:text-[#071b3a]"
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.span
                    layoutId="whyTabUnderline"
                    className="absolute inset-x-0 -bottom-px h-[3px] rounded-full bg-[#12b957]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mx-auto grid max-w-[1240px] grid-cols-1 items-stretch gap-8 min-[901px]:grid-cols-2 min-[901px]:gap-12"
        >
          {/* Left: image placeholder */}
          <div className="grid min-h-[280px] place-items-center rounded-[18px] border-2 border-dashed border-[#cdd8e4] bg-white/60 p-6 text-center min-[601px]:min-h-[420px]">
            <div className="text-[#9aa6b2]">
              <ImageIcon size={40} strokeWidth={1.6} className="mx-auto mb-3 opacity-70" />
              <span className="block text-[13px] font-[650]">Image goes here</span>
            </div>
          </div>

          {/* Right: intro + feature cards */}
          <div className="flex flex-col">
            <p className="mt-0! mb-6! text-[14px]! leading-[1.55]! text-[#3c4a5c]!">
              {activeTab.intro}
            </p>

            <div className="flex items-stretch gap-5">
              <img
                src="/assets/images/ic.png"
                alt=""
                aria-hidden="true"
                className="hidden h-full max-h-[420px] w-auto shrink-0 self-center object-contain min-[601px]:block"
              />

              <div className="flex flex-1 flex-col justify-between gap-10 pt-6">
                {activeTab.features.map((feature) => (
                  <div key={feature.title} className="first:mt-4">
                    <h4
                      className="m-0 mb-1 text-[16px] font-[800] leading-tight"
                      style={{ color: feature.color }}
                    >
                      {feature.title}
                    </h4>
                    <p className="m-0! text-[15px]! leading-[1.55]! text-[#3c4a5c]!">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      <section
        className="relative overflow-hidden bg-[#f2f7ff] px-5 py-[60px] min-[701px]:px-[6%] min-[701px]:pt-20 min-[701px]:pb-[90px]"
      >
        <div className="mx-auto mb-9 max-w-[1240px] text-center">
          <h2 className="h1-text mt-4! mb-3.5! tracking-[-1.2px] text-[#071b3a] font-[850] min-[1101px]:whitespace-nowrap">
            Drive Customers to WhatsApp from Every Channel
          </h2>
          <p className="mx-auto max-w-[860px] !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
            Give your customers multiple ways to reach you — ads, QR codes, websites,
            or emails. Every click or scan brings them directly into WhatsApp for
            instant engagement.
          </p>
        </div>

        <div className="relative mx-auto mt-[34px] mb-[55px] grid max-w-[1320px] grid-cols-1 items-start gap-[18px] min-[701px]:grid-cols-3 min-[1151px]:grid-cols-6">
          {/* Dashed connectors: side cards -> central WhatsApp phone (6-col layout only) */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[372px] w-full min-[1151px]:block"
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
              <path vectorEffect="non-scaling-stroke" d="M325.5 285 V344 Q325.5 362 343.5 362" />
              <path vectorEffect="non-scaling-stroke" d="M548.5 285 V344 Q548.5 362 566.5 362" />
              {/* left rail: down from outer card, rounded corner, across toward phone */}
              <path vectorEffect="non-scaling-stroke" d="M102.5 285 V344 Q102.5 362 120.5 362 H632" />
              {/* right middle dropper */}
              <path vectorEffect="non-scaling-stroke" d="M994.5 285 V344 Q994.5 362 976.5 362" />
              {/* right rail: down from outer card, rounded corner, across toward phone */}
              <path vectorEffect="non-scaling-stroke" d="M1217.5 285 V344 Q1217.5 362 1199.5 362 H911" />
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
              <path vectorEffect="non-scaling-stroke" d="M98.5 291 L102.5 285 L106.5 291" />
              <path vectorEffect="non-scaling-stroke" d="M321.5 291 L325.5 285 L329.5 291" />
              <path vectorEffect="non-scaling-stroke" d="M544.5 291 L548.5 285 L552.5 291" />
              <path vectorEffect="non-scaling-stroke" d="M990.5 291 L994.5 285 L998.5 291" />
              <path vectorEffect="non-scaling-stroke" d="M1213.5 291 L1217.5 285 L1221.5 291" />
              {/* horizontal arrowheads pointing into phone */}
              <path vectorEffect="non-scaling-stroke" d="M632 358 L638 362 L632 366" />
              <path vectorEffect="non-scaling-stroke" d="M911 358 L905 362 L911 366" />
            </g>
          </svg>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white p-[18px] text-center shadow-[0_16px_42px_rgba(7,27,58,0.06)] min-[701px]:min-h-[250px] min-[1151px]:h-[285px]">
            <h6 className="mt-3! mb-4! text-sm text-[#071b3a] font-[850]">Ad Campaigns</h6>
            <div className="mx-auto h-[86px] w-[88%] rounded-[10px] bg-cover bg-center" style={adImageStyle} />
            <p className="mt-4! mb-[3px]! text-[14px]! leading-[1.35]! text-[#111827]">
              Escape to Paradise
            </p>
            <span className="mb-2.5 block text-[11px] text-[#64748b]">Up to 30% Off</span>
            <button className={`${channelBtn} !text-[14px] !rounded-lg`}>Chat on WhatsApp</button>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white p-[18px] text-center shadow-[0_16px_42px_rgba(7,27,58,0.06)] min-[701px]:min-h-[250px] min-[1151px]:h-[285px]">
            <h6 className="mt-3! mb-4! text-sm text-[#071b3a] font-[850]">Website Widget</h6>
            <div className="mb-3.5 h-[130px] rounded-xl bg-[#f5f7f8] p-3.5">
              <div className="mb-2.5 h-3 w-4/5 rounded-[5px] bg-[#d8dee5]" />
              <div className="mb-2 h-[12px] rounded-lg bg-[#e2e7ec]" />
              <div className="mb-2 h-[12px] rounded-lg bg-[#e2e7ec]" />
              <div className="h-[24px] rounded-lg bg-[#e8edf2]" />
            </div>
            <button className={`${channelBtn} !text-[14px] !rounded-lg`}>Chat with us</button>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white p-[18px] text-center shadow-[0_16px_42px_rgba(7,27,58,0.06)] min-[701px]:min-h-[250px] min-[1151px]:h-[285px]">
            <h6 className="mt-3! mb-4! text-sm text-[#071b3a] font-[850]">QR Codes</h6>
            <div className="grid h-[132px] place-items-center">
              <div className="grid w-[150px] min-h-[132px] justify-items-center rounded-[14px] border border-[#dfe7ee] bg-white p-2.5">
                <img
                  src="/assets/images/qr-code.png"
                  alt="WhatsApp QR code"
                  className="block h-28 w-28 rounded-[4px] object-contain"
                />
              </div>
            </div>
            <span className="mt-2.5 block text-[10px] text-[#0ba856] font-[850]">WhatsApp Chat</span>
            <p className="mt-1 mb-[3px] text-xs leading-[1.35] text-[#071b3a] font-[850]">
              Scan to Chat
            </p>
          </div>

          <div className="min-h-[310px] rounded-3xl border-[6px] border-white bg-[linear-gradient(180deg,#078f6c,#f9f6ea_42%)] p-4 shadow-[0_22px_55px_rgba(7,27,58,0.16)] min-[1151px]:-translate-y-[18px]">
            <div className="mb-[22px] text-white">
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
            <button className={centerPhoneBtn}>Special Offers</button>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white p-[18px] text-center shadow-[0_16px_42px_rgba(7,27,58,0.06)] min-[701px]:min-h-[250px] min-[1151px]:h-[285px]">
            <h6 className="mt-3! mb-4! text-sm text-[#071b3a] font-[850]">Email Campaigns</h6>
            <div className="mx-auto mb-[18px] mt-2 grid h-[70px] w-[88px] place-items-center rounded-xl border-2 border-[#e4eaf0] text-[44px] text-[#c7d0da]">
              ✉
            </div>
            <p className="mt-2.5 mb-[3px] text-xs leading-[1.35] text-[#111827]">
              Plan your getaway with exclusive offers
            </p>
            <button className={`${channelBtn} !text-[14px] !rounded-lg`}>Chat on WhatsApp</button>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white p-[18px] text-center shadow-[0_16px_42px_rgba(7,27,58,0.06)] min-[701px]:min-h-[250px] min-[1151px]:h-[285px]">
            <h6 className="mt-3! mb-4! text-sm text-[#071b3a] font-[850]">Social Media</h6>
            <div className="mb-[44px] mt-[42px] flex justify-center gap-3">
              <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-gradient-to-br from-[#f43f5e] to-[#8b5cf6] text-[17px] font-black text-white">
                ◎
              </span>
              <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[#1877f2] text-[17px] font-black text-white">
                f
              </span>
              <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[#7c3aed] text-[17px] font-black text-white">
                ◔
              </span>
            </div>
            <button className={`${channelBtn} !text-[14px] !rounded-lg`}>Send Message</button>
          </div>
        </div>

        <div className="mb-7 text-center">
          <h2 className={sectionHeading2}>Key Features</h2>
        </div>

        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-2 min-[701px]:grid-cols-3 min-[1151px]:grid-cols-6">
          <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] py-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <div className="mx-auto mb-2 grid h-[54px] w-[54px] place-items-center rounded-[14px] text-[34px] font-black text-[#12b957]">
              ▱
            </div>
            <h4 className="m-0 mb-3 flex min-h-[36px] items-start justify-center text-center text-[13px] leading-[1.35] text-[#071b3a] font-[850]">Bulk Messaging</h4>
            <p className="m-0 text-[13px] leading-[1.45] text-[#334155]">
              Send promotional offers, event invites and product updates at scale.
            </p>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] py-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <div className="mx-auto mb-2 grid h-[54px] w-[54px] place-items-center rounded-[14px] text-[34px] font-black text-[#12b957]">
              ♙
            </div>
            <h4 className="m-0 mb-3 flex min-h-[36px] items-start justify-center text-center text-[13px] leading-[1.35] text-[#071b3a] font-[850]">Personalization</h4>
            <p className="m-0 text-[13px] leading-[1.45] text-[#334155]">
              Use customer names, order details and dynamic fields.
            </p>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] py-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <div className="mx-auto mb-2 grid h-[54px] w-[54px] place-items-center rounded-[14px] text-[34px] font-black text-[#12b957]">
              ✈
            </div>
            <h4 className="m-0 mb-3 flex min-h-[36px] items-start justify-center text-center text-[13px] leading-[1.35] text-[#071b3a] font-[850]">Instant Delivery</h4>
            <p className="m-0 text-[13px] leading-[1.45] text-[#334155]">
              Reach users in real time with high open rates.
            </p>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] py-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <div className="mx-auto mb-2 grid h-[54px] w-[54px] place-items-center rounded-[14px] text-[34px] font-black text-[#12b957]">
              ▤
            </div>
            <h4 className="m-0 mb-3 flex min-h-[36px] items-start justify-center text-center text-[13px] leading-[1.35] text-[#071b3a] font-[850]">Interactive Campaigns</h4>
            <p className="m-0 text-[13px] leading-[1.45] text-[#334155]">
              Add buttons, lists and CTAs to drive engagement.
            </p>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] py-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <div className="mx-auto mb-2 grid h-[54px] w-[54px] place-items-center rounded-[14px] text-[34px] font-black text-[#12b957]">
              🤖
            </div>
            <h4 className="m-0 mb-3 flex min-h-[36px] items-start justify-center text-center text-[13px] leading-[1.35] text-[#071b3a] font-[850]">Automation</h4>
            <p className="m-0 text-[13px] leading-[1.45] text-[#334155]">
              Schedule broadcasts and drip campaigns to save time.
            </p>
          </div>

          <div className="rounded-2xl border border-[#dfe7ee] bg-white px-[18px] py-5 text-center shadow-[0_16px_42px_rgba(7,27,58,0.05)] min-[701px]:min-h-[140px]">
            <div className="mx-auto mb-2 grid h-[54px] w-[54px] place-items-center rounded-[14px] text-[34px] font-black text-[#12b957]">
              ▥
            </div>
            <h4 className="m-0 mb-3 flex min-h-[36px] items-start justify-center text-center text-[13px] leading-[1.35] text-[#071b3a] font-[850]">Analytics Dashboard</h4>
            <p className="m-0 text-[13px] leading-[1.45] text-[#334155]">
              Track delivery, read rates and conversions.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-[#f8fbfa] px-5 py-[60px] min-[769px]:px-[6%] min-[769px]:pt-[85px] min-[769px]:pb-[90px]"
      >
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-[45px] min-[1101px]:grid-cols-[1.35fr_0.85fr]">
          <div>
            <h2 className="m-0 mb-[18px] max-w-[580px] text-[clamp(34px,3.5vw,54px)] leading-[1.05] tracking-[-1.8px] text-[#071b3a] font-[850]">
              How to Use WhatsApp Marketing Effectively
            </h2>

            <p className="m-0 mb-7 max-w-[600px] text-base leading-[1.65] text-[#334155]">
              Experience complete marketing control with Vertex Suite's WhatsApp
              Broadcasting Dashboard. Plan and launch targeted campaigns, track
              performance in real time and identify which audiences to nurture or
              retain all from one unified platform.
            </p>

            <div className="grid grid-cols-1 overflow-hidden rounded-[22px] border border-[#dfe7ee] bg-white shadow-[0_22px_60px_rgba(7,27,58,0.1)] min-[769px]:grid-cols-[135px_1fr]">
              <aside className="hidden min-[769px]:block bg-gradient-to-b from-[#04214a] to-[#00152f] px-3.5 py-[22px] text-white">
                <h4 className="m-0 mb-[22px] text-[13px] font-[850]">Vertex Suite</h4>
                <span className="mb-[7px] block rounded-lg bg-white/[0.14] px-2.5 py-[9px] text-[11px] text-white">
                  Overview
                </span>
                <span className="mb-[7px] block rounded-lg px-2.5 py-[9px] text-[11px] text-white/75">
                  Campaigns
                </span>
                <span className="mb-[7px] block rounded-lg px-2.5 py-[9px] text-[11px] text-white/75">
                  Broadcasts
                </span>
                <span className="mb-[7px] block rounded-lg px-2.5 py-[9px] text-[11px] text-white/75">
                  Audience
                </span>
                <span className="mb-[7px] block rounded-lg px-2.5 py-[9px] text-[11px] text-white/75">
                  Templates
                </span>
                <span className="mb-[7px] block rounded-lg px-2.5 py-[9px] text-[11px] text-white/75">
                  Automation
                </span>
                <span className="mb-[7px] block rounded-lg px-2.5 py-[9px] text-[11px] text-white/75">
                  Chat Inbox
                </span>
                <span className="mb-[7px] block rounded-lg px-2.5 py-[9px] text-[11px] text-white/75">
                  Analytics
                </span>
                <span className="mb-[7px] block rounded-lg px-2.5 py-[9px] text-[11px] text-white/75">
                  Settings
                </span>
              </aside>

              <main className="p-6">
                <div className="mb-[18px] flex items-center justify-between">
                  <h3 className="m-0 text-[19px] text-[#071b3a] font-[850]">Dashboard</h3>
                  <button className="rounded-lg border border-[#dfe7ee] bg-white px-[11px] py-[7px] text-[10px] font-bold text-[#334155]">
                    1 – 31 May 2025
                  </button>
                </div>

                <div className="mb-4 grid grid-cols-1 gap-[13px] min-[769px]:grid-cols-4">
                  <div className="rounded-[14px] border border-[#edf1f5] bg-white p-[13px]">
                    <p className="m-0 mb-1.5 text-[10px] font-bold text-[#64748b]">Messages Sent</p>
                    <h4 className="m-0 text-[22px] leading-none text-[#071b3a]">125,430</h4>
                    <span className="text-[10px] font-extrabold text-[#10b957]">↑ 13.5%</span>
                  </div>

                  <div className="rounded-[14px] border border-[#edf1f5] bg-white p-[13px]">
                    <p className="m-0 mb-1.5 text-[10px] font-bold text-[#64748b]">Delivered</p>
                    <h4 className="m-0 text-[22px] leading-none text-[#071b3a]">123,842</h4>
                    <span className="text-[10px] font-extrabold text-[#10b957]">↑ 12.8%</span>
                  </div>

                  <div className="rounded-[14px] border border-[#edf1f5] bg-white p-[13px]">
                    <p className="m-0 mb-1.5 text-[10px] font-bold text-[#64748b]">Read Rate</p>
                    <h4 className="m-0 text-[22px] leading-none text-[#071b3a]">98.1%</h4>
                    <span className="text-[10px] font-extrabold text-[#10b957]">↑ 8.2%</span>
                  </div>

                  <div className="rounded-[14px] border border-[#edf1f5] bg-white p-[13px]">
                    <p className="m-0 mb-1.5 text-[10px] font-bold text-[#64748b]">Clicks</p>
                    <h4 className="m-0 text-[22px] leading-none text-[#071b3a]">15,982</h4>
                    <span className="text-[10px] font-extrabold text-[#10b957]">↑ 20.3%</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3.5 min-[769px]:grid-cols-[1.1fr_0.9fr]">
                  <div className={analyticsCard}>
                    <h4 className={analyticsCardTitle}>Messages Over Time</h4>

                    <svg viewBox="0 0 360 160" className="h-[130px] w-full">
                      <path
                        d="M15 115 C45 95, 55 55, 90 80 C125 110, 135 45, 170 62 C210 85, 220 118, 255 86 C290 54, 310 66, 345 28"
                        fill="none"
                        stroke="#18b85d"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className={analyticsCard}>
                    <h4 className={analyticsCardTitle}>Message Status</h4>

                    <div className="flex items-center gap-[18px]">
                      <div className="relative h-[95px] w-[95px] rounded-full bg-[conic-gradient(#12b957_0_62%,#1f7ae0_62%_86%,#f59e0b_86%_100%)] after:absolute after:inset-[22px] after:rounded-full after:bg-white after:content-['']" />

                      <ul className="m-0 list-none p-0">
                        <li className="mb-2 flex items-center gap-[7px] text-[11px] text-[#334155]">
                          <span className="h-2 w-2 rounded-full bg-[#12b957]" />
                          Delivered
                        </li>
                        <li className="mb-2 flex items-center gap-[7px] text-[11px] text-[#334155]">
                          <span className="h-2 w-2 rounded-full bg-[#1f7ae0]" />
                          Read
                        </li>
                        <li className="mb-2 flex items-center gap-[7px] text-[11px] text-[#334155]">
                          <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
                          Pending
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={analyticsCard}>
                    <h4 className={analyticsCardTitle}>Audience Segments</h4>

                    <div className={barLine}>
                      <p className="m-0 text-[10px] text-[#334155]">Frequent Travelers</p>
                      <span className={barTrack}>
                        <i className={barFill} style={{ width: "85%" }} />
                      </span>
                      <b className="text-right text-[10px] text-[#334155]">24,350</b>
                    </div>

                    <div className={barLine}>
                      <p className="m-0 text-[10px] text-[#334155]">Holiday Shoppers</p>
                      <span className={barTrack}>
                        <i className={barFill} style={{ width: "72%" }} />
                      </span>
                      <b className="text-right text-[10px] text-[#334155]">18,930</b>
                    </div>

                    <div className={barLine}>
                      <p className="m-0 text-[10px] text-[#334155]">Inactive Users</p>
                      <span className={barTrack}>
                        <i className={barFill} style={{ width: "55%" }} />
                      </span>
                      <b className="text-right text-[10px] text-[#334155]">12,480</b>
                    </div>

                    <div className={barLine}>
                      <p className="m-0 text-[10px] text-[#334155]">New Leads</p>
                      <span className={barTrack}>
                        <i className={barFill} style={{ width: "38%" }} />
                      </span>
                      <b className="text-right text-[10px] text-[#334155]">9,750</b>
                    </div>
                  </div>

                  <div className={analyticsCard}>
                    <h4 className={analyticsCardTitle}>Top Performing Campaigns</h4>

                    <div className={barLine}>
                      <p className="m-0 text-[10px] text-[#334155]">Holiday Offer Blast</p>
                      <span className={barTrack}>
                        <i className={barFill} style={{ width: "92%" }} />
                      </span>
                      <b className="text-right text-[10px] text-[#334155]">98.2%</b>
                    </div>

                    <div className={barLine}>
                      <p className="m-0 text-[10px] text-[#334155]">Goa Package Launch</p>
                      <span className={barTrack}>
                        <i className={barFill} style={{ width: "88%" }} />
                      </span>
                      <b className="text-right text-[10px] text-[#334155]">97.0%</b>
                    </div>

                    <div className={barLine}>
                      <p className="m-0 text-[10px] text-[#334155]">Weekend Getaway</p>
                      <span className={barTrack}>
                        <i className={barFill} style={{ width: "80%" }} />
                      </span>
                      <b className="text-right text-[10px] text-[#334155]">96.8%</b>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-[18px] pt-2 min-[769px]:grid-cols-2 min-[1101px]:flex min-[1101px]:flex-col">
            <div className={featureCard}>
              <div className={useIcon}>VS</div>
              <div>
                <h4 className="m-0 mb-1.5 text-[15px] text-[#071b3a] font-[850]">
                  Plan & Launch Campaigns
                </h4>
                <p className="m-0 text-[13px] leading-[1.45] text-[#334155]">
                  Create segmented broadcasts using dynamic templates and audience filters.
                </p>
              </div>
            </div>

            <div className={featureCard}>
              <div className={useIcon}>AN</div>
              <div>
                <h4 className="m-0 mb-1.5 text-[15px] text-[#071b3a] font-[850]">
                  Track & Analyze Performance
                </h4>
                <p className="m-0 text-[13px] leading-[1.45] text-[#334155]">
                  Monitor deliveries, open rates and click-throughs.
                </p>
              </div>
            </div>

            <div className={featureCard}>
              <div className={useIcon}>LD</div>
              <div>
                <h4 className="m-0 mb-1.5 text-[15px] text-[#071b3a] font-[850]">
                  Generate & Qualify Leads
                </h4>
                <p className="m-0 text-[13px] leading-[1.45] text-[#334155]">
                  Capture leads from replies and send them to CRM pipelines.
                </p>
              </div>
            </div>

            <div className={featureCard}>
              <div className={useIcon}>LM</div>
              <div>
                <h4 className="m-0 mb-1.5 text-[15px] text-[#071b3a] font-[850]">
                  Lifecycle Marketing Simplified
                </h4>
                <p className="m-0 text-[13px] leading-[1.45] text-[#334155]">
                  Build automated drip campaigns that nurture and convert.
                </p>
              </div>
            </div>

            <div className={featureCard}>
              <div className={useIcon}>RE</div>
              <div>
                <h4 className="m-0 mb-1.5 text-[15px] text-[#071b3a] font-[850]">
                  Retention & Re-Engagement
                </h4>
                <p className="m-0 text-[13px] leading-[1.45] text-[#334155]">
                  Reconnect inactive users with offers, feedback requests and loyalty updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-7 grid min-h-[110px] max-w-[1320px] grid-cols-1 items-center gap-6 rounded-[22px] border border-[#d9f2e4] bg-gradient-to-r from-[#f5fff9] to-white px-5 py-6 text-center shadow-[0_18px_48px_rgba(7,27,58,0.06)] min-[769px]:px-[34px] min-[769px]:py-[22px] min-[1101px]:grid-cols-[auto_1fr_auto] min-[1101px]:text-left">
          <div className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-[#16c866] text-[34px] text-white shadow-[0_16px_35px_rgba(22,200,102,0.25)] min-[1101px]:mx-0">
            ☎
          </div>

          <div>
            <h3 className="m-0 mb-1.5 text-xl text-[#071b3a] font-[850]">
              Ready to grow your business with WhatsApp Marketing?
            </h3>
            <p className="m-0 text-sm text-[#334155]">
              Join thousands of businesses using Vertex Suite to connect, engage and convert.
            </p>
          </div>

          <div className="flex flex-col items-center gap-[9px]">
            <button className="h-[46px] rounded-[10px] border-0 bg-[#13b957] px-[30px] text-sm text-white font-[850] cursor-pointer">
              Start Free Trial →
            </button>
            <a href="#demo" className="text-[13px] font-bold text-[#0ba856] underline">
              Book a Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
