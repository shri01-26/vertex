"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Bot,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
  ArrowDown,
  CheckCircle2,
  Database,
  Eye,
  Gauge,
  Globe2,
  Inbox,
  Info,
  Megaphone,
  MessageCircle,
  MessageSquareText,
  Network,
  Plus,
  RefreshCw,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Truck,
  UserCheck,
  UserRound,
  UsersRound,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import Link from "../../components/AppLink";

const chips = [
  {
    icon: CheckCircle2,
    label: "High Delivery",
  },
  {
    icon: ShieldCheck,
    label: "High Read Rate",
  },
  {
    icon: MessageCircle,
    label: "Two-Way Engagement",
  },
  {

    
    icon: Zap,
    label: "Automated & Scalable",
  },
];

const ORBIT_RADIUS = 320;

const orbiters = [
  { type: "icon", angle: 180 },
  { type: "avatar", name: "AK", angle: 315 },
  { type: "avatar", name: "PM", angle: 0 },
  { type: "avatar", name: "RS", angle: 45 },
  { type: "dot", color: "#12A85B", angle: 90 },
  { type: "dot", color: "#44BBFF", angle: 135 },
  { type: "dot", color: "#12A85B", angle: 225 },
  { type: "dot", color: "#071B4D", angle: 270 },
];
const chooseBroadcast = [
  {
    icon: Eye,
    title: "Consent-Based Retargeting",
    text: "Reconnect with opted-in audiences using recent activity and customer journey data.",
  },
  {
    icon: UserRound,
    title: "Industry-Ready Templates",
    text: "Create sector-specific templates with supported media, links, buttons and submit them  for Meta approval.",
  },
  {
    icon: MessageCircle,
    title: "Correct Message Categories",
    text: "Classify templates as Marketing, Utility, or Authentication based on purpose.",
  },
  {
    icon: TrendingUp,
    title: "Personalised at Scale",
    text: "Use template variables and audience data to personalise names, dates, order details, and relevant offers.",
  },
  {
    icon: BarChart3,
    title: "Quality-Aware Delivery",
    text: "Track feedback and template quality before increasing campaign scale.",
  },
  {
    icon: Globe2,
    title: "Scalable Broadcasting",
    text: "Schedule and manage high-volume campaigns within WhatsApp messaging and delivery limits.",
  },
];
const broadcastTypes = [
  {
    icon: Megaphone,
    title: "Marketing",
    text: "Offers, product launches, re-engagement, newsletters and promotional campaigns.",
  },
  {
    icon: Info,
    title: "Utility",
    text: "Messages directly connected to a customer-requested transaction or service, such as order, payment, appointment or account updates.",
  },
  {
    icon: BellRing,
    title: "Authentication",
    text: "One-time passwords and identity-verification messages.",
  },
  
 
];
const typeIconColors = [
  "bg-[#EAFBF1] text-[#12A85B]",
  "bg-[#EAF2FF] text-[#155EEF]",
  "bg-[#FFF7E6] text-[#F59E0B]",
  "bg-[#EFEAFF] text-[#7C3AED]",
  "bg-[#FFF0F5] text-[#E83E7C]",
  "bg-[#EAFBFF] text-[#0891B2]",
];

const afterBroadcastSteps = [
  {
    icon: MessageCircle,
    title: "Message Status Is Tracked",
    text: "Monitor each message as it moves through sent, delivered, read, or failed stages for clearer campaign visibility.",
  },
  {
    icon: Bot,
    title: "Customers Reply or Take Action",
    text: "Recipients can reply, select a supported button, or open a configured link directly from the broadcast message.",
  },
  {
    icon: Network,
    title: "The Next Journey Begins",
    text: "Customer replies and button selections can trigger a chatbot, WhatsApp Flow, routing rule, or connected automated journey.",
  },
  {
    icon: Database,
    title: "Customer Context Is Updated",
    text: "Campaign responses, captured details, and journey activity can be synced with connected CRM and business systems.",
  },
  {
    icon: UserCheck,
    title: "Teams Step In When Needed",
    text: "Agents can continue conversations with relevant customer details, campaign source, and previous interaction context already available.",
  },
  {
    icon: RefreshCw,
    title: "Follow-Ups and Results Are Managed",
    text: "Continue eligible communication based on consent and WhatsApp messaging rules, while measuring reads, clicks, replies, and configured outcomes.",
  },
];

const broadcastCapabilities = [
  {
    icon: UsersRound,
    title: "Audience Segmentation",
    text: "Create targeted audiences using customer tags, activity, consent status, and connected business data.",
  },
  {
    icon: MessageSquareText,
    title: "Template Management",
    text: "Create, submit, organise, and reuse WhatsApp templates with supported media, variables, and buttons.",
  },
  {
    icon: Sparkles,
    title: "Dynamic Personalisation",
    text: "Add customer names, order information, dates, offers, and other relevant details using approved template variables.",
  },
  {
    icon: CalendarClock,
    title: "Campaign Scheduling & Automation",
    text: "Schedule broadcasts or trigger eligible messages based on customer events and workflow conditions.",
  },
  {
    icon: Gauge,
    title: "Opt-In & Preference Management",
    text: "Maintain customer consent records and manage marketing preferences or opt-out requests.",
  },
  {
    icon: Inbox,
    title: "Quality & Delivery Controls",
    text: "Monitor template status, delivery failures, customer feedback, and campaign pacing before increasing scale.",
  },
  {
    icon: BarChart3,
    title: "AI Campaign Generator ",
    text: "Let AI generate campaigns using past performance, behaviour, and retargeting signals.",
  },
  {
    icon: Workflow,
    title: "Multi-Language Campaigns",
    text: "Create and manage approved template versions in supported languages for different audience groups.",
  },
];

const capabilityCardLayouts = [
  "xl:col-span-5 xl:row-span-3 xl:col-start-1 xl:row-start-1",
  "xl:col-span-3 xl:row-span-3 xl:col-start-6 xl:row-start-1",
  "xl:col-span-4 xl:row-span-3 xl:col-start-9 xl:row-start-1",
  "xl:col-span-3 xl:row-span-5 xl:col-start-1 xl:row-start-4 xl:self-start xl:h-[340.3px]",
  "xl:col-span-5 xl:row-span-2 xl:col-start-4 xl:row-start-4",
  "xl:col-span-4 xl:row-span-3 xl:col-start-9 xl:row-start-4 xl:self-start",
  "xl:col-span-5 xl:row-span-3 xl:col-start-4 xl:row-start-6 xl:self-start xl:min-h-[172.3px]",
  "xl:col-span-4 xl:row-span-3 xl:col-start-9 xl:row-start-6 xl:mt-6 xl:self-start",
];

function TypewriterText({ text, speed = 28 }) {
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleText(text);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    if (!hasStarted || visibleText.length >= text.length) return;

    const timer = window.setTimeout(() => {
      setVisibleText(text.slice(0, visibleText.length + 1));
    }, speed);

    return () => window.clearTimeout(timer);
  }, [hasStarted, speed, text, visibleText]);

  return (
    <span ref={elementRef}>
      {visibleText}
      <span className="ml-0.5 inline-block animate-pulse text-[#12A85B]">|</span>
    </span>
  );
}

export default function WhatsAppBroadcast() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTypeSlide, setActiveTypeSlide] = useState(0);
  const stepCardRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveTypeSlide((prev) => (prev + 1) % broadcastTypes.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);
  const [arrowPos, setArrowPos] = useState({ x: 0, y: 0 });
  const [arrowActive, setArrowActive] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(true);

  /* Phone: the hero CTAs live in a fixed bar at the bottom of the screen. It
     slides away near the end of the page so it never sits over the footer. */
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

  const handleStepCardMove = (e) => {
    const rect = stepCardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setArrowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setArrowActive(true);
  };

  const nextStep = () =>
    setActiveStep((prev) => (prev + 1) % afterBroadcastSteps.length);

  return (
    <>
    <main className="whatsapp-broadcast-page min-h-screen overflow-hidden bg-white">
      <section className="relative bg-[#eff4ef] px-4 pb-[76px] pt-14 sm:px-8 sm:pb-[88px] sm:pt-16 lg:px-10 lg:pb-[96px] lg:pt-24 xl:px-16 2xl:px-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[5%] top-12 h-[560px] w-[560px] rounded-full bg-[#EAFBF3] blur-3xl" />
          <div className="absolute right-[20%] top-28 h-[420px] w-[420px] rounded-full bg-[#EAF7FF] blur-3xl" />
          <div className="absolute left-0 top-20 h-[320px] w-[420px] rounded-full bg-[#F6FBFF] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-6 xl:gap-10">
          {/* LEFT CONTENT */}
          <div className="relative z-10 min-w-0 text-left max-md:order-2">
            <Reveal onMount delay={0} className="mb-5 inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/50 bg-white/25 px-3 py-2 text-[0.95rem] font-semibold text-green-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_28px_rgba(15,23,42,0.10)] ring-1 ring-white/30 backdrop-blur-lg">
              <img
                src="/assets/images/whatsapp-icon.png"
                alt="WhatsApp"
                className="h-5 w-5 object-contain"
              />
              WhatsApp Broadcast
            </Reveal>

            <Reveal onMount delay={0.12}>
              <h1 className="mt-0! mb-6! w-full! max-w-[720px]! text-[clamp(2.25rem,4vw,2.986rem)]! font-extrabold! leading-[1.05]! tracking-tight! text-[#071b3a]! sm:mb-8! xl:mb-[42px]!">
                <span className="block sm:whitespace-nowrap">Reach More Customers </span>
                <span className="block xl:whitespace-nowrap">with Targeted WhatsApp </span>
                <span className="block text-[#10b957] sm:whitespace-nowrap">Broadcast</span>
              </h1>
            </Reveal>

            <Reveal onMount delay={0.27}>
              <p className="block max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
             Share promotions, reminders and important updates while tracking delivery, reads and customer responses.
              </p>
            </Reveal>

            <div className="mt-[42px] grid w-full max-w-[600px] grid-cols-2 gap-3.5 max-md:gap-2">
              {chips.map((chip, index) => {
                const Icon = chip.icon;

                return (
                  <Reveal
                    key={index}
                    onMount
                    /* Left column enters from the left, right column from the right. */
                    direction={index % 2 === 0 ? "left" : "right"}
                    delay={0.42 + index * 0.08}
                    duration={0.55}
                    className="flex min-h-[74px] w-full flex-col items-start justify-center gap-1.5 rounded-[8px] border border-white/15 bg-transparent py-4 pl-7 pr-2 max-sm:items-center max-sm:px-2"
                  >
                    <div className="flex items-center gap-2.5 max-sm:justify-center max-sm:text-center">
                      <Icon size={30} strokeWidth={2.2} className="shrink-0 text-[#12A85B] max-sm:h-[22px] max-sm:w-[22px]" />
                      <span className="!text-[1.06rem] font-medium leading-tight text-[#5B667A] xl:!text-[1.14rem] max-md:!text-[0.98rem]">
                        {chip.label}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>

                 {/* Phone shows these as a fixed bar at the bottom of the page instead. */}
                 <Reveal onMount delay={0.85} className="mt-6 flex items-center justify-start gap-3 max-md:hidden">
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
                               <CalendarDays size={26} strokeWidth={1.6} />
                               <span>Book a Demo</span>
                             </span>
         
                             <span className="roll-content-hover">
                               <CalendarDays size={26} strokeWidth={1.6} />
                               <span>Book a Demo</span>
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
          </div>

          {/* RIGHT VISUAL */}
          <Reveal
            onMount
            delay={0.5}
            direction="right"
            duration={0.75}
            className="relative mx-auto min-h-[430px] w-full max-w-[700px] max-md:order-1 sm:min-h-[570px] lg:min-h-[600px] xl:min-h-[700px]"
          >
            {/* Big Soft Circle */}
            <div className="absolute left-1/2 top-[8%] h-[320px] w-[320px] -translate-x-1/2 rounded-full sm:h-[420px] sm:w-[420px] bg-[#DFF7EE]/70" />
            <div className="absolute left-1/2 top-[18%] h-[240px] w-[240px] -translate-x-1/2 rounded-full sm:h-[300px] sm:w-[300px] border border-dashed border-[#12A85B]/35" />
            <div className="absolute left-1/2 top-[10%] h-[300px] w-[300px] -translate-x-1/2 rounded-full sm:h-[360px] sm:w-[360px] border border-dashed border-[#44BBFF]/25" />

            {/* Orbiting elements around the phone */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 scale-[0.44] sm:scale-[0.7] lg:scale-[0.62] xl:scale-[0.86] 2xl:scale-100">
              <div className="wab-orbit relative h-full w-full">
                {orbiters.map((item, index) => (
                  <div
                    key={index}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `rotate(${item.angle}deg) translate(${ORBIT_RADIUS}px)`,
                    }}
                  >
                    <div
                      style={{
                        transform: `translate(-50%, -50%) rotate(${-item.angle}deg)`,
                      }}
                    >
                      <div className="wab-orbit-item">
                        {item.type === "icon" && (
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#12A85B] text-white shadow-[0_24px_55px_rgba(18,168,91,0.32)]">
                            <MessageCircle size={46} fill="currentColor" />
                          </div>
                        )}

                        {item.type === "avatar" && (
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#EAF8FF] to-[#DFF7EE] text-xs font-black text-[#071B4D] shadow-[0_18px_36px_rgba(7,27,77,0.18)]">
                            {item.name}

                            <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#12A85B] text-white ring-4 ring-white">
                              <CheckCircle2 size={12} />
                            </span>
                          </div>
                        )}

                        {item.type === "dot" && (
                          <div
                            className="h-2 w-2 rounded-full"
                            style={{ background: item.color }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div className="absolute left-1/2 top-2 z-30 w-[min(76vw,260px)] -translate-x-1/2 sm:w-[320px] lg:w-[300px] xl:w-[350px] 2xl:w-[380px]">
              <div className="rounded-[38px] border-[8px] border-[#101828] bg-[#101828] shadow-[0_36px_90px_rgba(7,27,77,0.35)]">
                <div className="overflow-hidden rounded-[30px] bg-[#F5EFE6]">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between bg-[#063F36] px-4 py-2 text-[10px] font-bold text-white">
                    <span>10:01</span>
                    <span>● ● ▰</span>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-2.5 bg-[#063F36] px-4 pb-3 text-white">
                    <span className="text-lg leading-none">‹</span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#12A85B] text-white">
                      <MessageCircle size={18} fill="currentColor" />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xs font-black">Vertex Store</h4>
                      <p className="text-[10px] font-medium text-white/70">
                        Business Account
                      </p>
                    </div>

                    <span className="text-base">⋮</span>
                  </div>

                  {/* Broadcast Body */}
                  <div className="px-4 py-4">
                    <div className="rounded-xl bg-white p-3 shadow-[0_10px_24px_rgba(7,27,77,0.1)]">
                      <div className="mb-2 flex items-center gap-1.5 text-xs font-black text-[#071B4D]">
                        <Send size={13} className="text-[#12A85B]" />
                        Mega Sale is Live!
                      </div>

                      <p className="text-xs font-bold leading-5 text-[#071B4D]">
                        Flat 30% OFF on all Collections
                      </p>

                      <p className="mt-1.5 text-[10px] font-semibold leading-4 text-[#53627A]">
                        Limited time offer. Shop now before it’s gone!
                      </p>

                      {/* Product Visual */}
                      <div className="relative mt-3 overflow-hidden rounded-xl bg-[#F4E2C6] p-3.5">
                        <div className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B] text-center text-[10px] font-black leading-3 text-white">
                          30%
                          <br />
                          OFF
                        </div>

                        <div className="flex items-end gap-2">
                          <div className="flex h-16 w-14 items-center justify-center rounded-lg bg-[#2F5E47] text-white shadow-lg">
                            <ShoppingBag size={30} />
                          </div>
                          <div className="flex h-14 w-12 items-center justify-center rounded-lg bg-[#D6A15C] text-white shadow-lg">
                            <ShoppingBag size={24} />
                          </div>
                          <div className="flex h-11 w-10 items-center justify-center rounded-lg bg-[#0F766E] text-white shadow-lg">
                            <ShoppingBag size={20} />
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 space-y-1.5">
                        <button className="w-full rounded-lg border border-[#E6EAF0] bg-white py-2 text-[11px] font-black text-[#071B4D]">
                          Shop Now
                        </button>
                        <button className="w-full rounded-lg border border-[#E6EAF0] bg-white py-2 text-[11px] font-black text-[#071B4D]">
                          View Offers
                        </button>
                        <button className="w-full rounded-lg border border-[#E6EAF0] bg-white py-2 text-[11px] font-black text-[#071B4D]">
                          Ask a Question
                        </button>
                      </div>

                      <p className="mt-2 text-right text-[9px] font-semibold text-[#97A3B5]">
                        10:30 AM
                      </p>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="flex justify-center bg-[#F5EFE6] pb-2">
                    <div className="h-1 w-24 rounded-full bg-[#101828]" />
                  </div>
                </div>
              </div>
            </div>

          </Reveal>
        </div>
      </section>
<section className="relative bg-white px-5 pb-[45px] pt-[90px] max-md:pb-[30px] max-md:pt-[35px] sm:px-8 lg:px-10 xl:px-14">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[320px] w-[850px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1500px]">
    <div className="text-center">
      <Reveal>
      <h2 className="mx-auto max-w-[1320px] text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-[1.15] tracking-tight text-[#111827]">
          Choose the Right WhatsApp Message Category 
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-3 mb-0! text-[1.12rem]! font-normal! leading-[1.65]! text-[#2F3D5C]! xl:text-[1.2rem]! max-md:text-[1rem]! max-md:leading-[1.6]!">
          Understand how to classify each WhatsApp message template based on its purpose 
        </p>
      </Reveal>

      {/* ALTERNATING SHOWCASE — one card on one side, image on the other; slides
          crossfade over each other so the change is barely perceptible */}
        <div className="relative mt-10 min-h-[700px] min-[420px]:min-h-[640px] sm:mt-12 sm:min-h-[620px] xl:mt-14 xl:min-h-[420px]">
        <AnimatePresence>
          <motion.div
            key={activeTypeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className={`absolute inset-0 flex flex-col items-stretch gap-8 xl:justify-center xl:gap-16 ${
              activeTypeSlide % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
            }`}
          >
            {/* IMAGE SIDE (placeholder — swap with a real image later) */}
            <div className="flex items-center justify-center xl:w-2/5">
              <div className="relative flex h-[280px] w-full max-w-[540px] items-center sm:h-[340px] xl:h-[390px] justify-center overflow-hidden rounded-[14px] border border-[#E2ECF7] bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(#DCE9F6_1.4px,transparent_1.4px)] [background-size:18px_18px] opacity-60" />
                {/* TODO: replace this placeholder with the real image, e.g.
                    <img src={...} alt="" className="h-full w-full object-cover" /> */}
                <div className="relative flex flex-col items-center gap-4 p-6 text-center">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-[22px] ${typeIconColors[activeTypeSlide]}`}
                  >
                    {React.createElement(broadcastTypes[activeTypeSlide].icon, {
                      size: 40,
                      strokeWidth: 2.1,
                    })}
                  </div>
                  <span className="rounded-full border border-dashed border-[#C7D8EA] px-4 py-2 text-xs font-bold text-[#8497AE]">
                    Image placeholder
                  </span>
                </div>
              </div>
            </div>

            {/* TEXT SIDE — plain content, no card wrapper */}
            <div className="flex flex-col justify-center gap-4 py-2 text-left sm:gap-5 sm:py-4 xl:w-2/5 xl:px-12">
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-inner ${typeIconColors[activeTypeSlide]}`}
              >
                {React.createElement(broadcastTypes[activeTypeSlide].icon, {
                  size: 34,
                  strokeWidth: 2.2,
                })}
              </div>

              <div className="min-w-0">
                <h3 className="text-[1.6rem]! font-black! leading-snug! tracking-normal! text-[#071B4D]!">
                  {activeTypeSlide + 1}. {broadcastTypes[activeTypeSlide].title}
                </h3>

                <p className="mt-3 mb-0! text-[1.05rem]! font-medium! leading-8! text-[#4B5B77]!">
                  {broadcastTypes[activeTypeSlide].text}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  </div>
</section>
      <section className="relative bg-white px-5 pb-[90px] pt-[45px] max-md:pb-[50px] max-md:pt-[30px] sm:px-8 lg:px-10 xl:px-14">
  <div className="relative mx-auto max-w-[1500px]">
    {/* DARK WHY SECTION */}
    <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-[#04291F] via-[#075B3F] to-[#0A7A52] p-7 pr-4 text-white shadow-[0_28px_80px_rgba(6,78,59,0.30)] lg:p-9 lg:pr-4">
      <div className="grid gap-8 xl:grid-cols-[0.68fr_2fr]">
        {/* LEFT TITLE */}
        <div className="flex flex-col justify-between">
          <div>
            <h5 className="text-[clamp(2rem,3.6vw,3.3rem)]! font-black! leading-tight! tracking-[-0.04em]! text-white!">
             How Businesses Broadcast{" "}
              <span className="block text-[#15C46B]"> Smarter on WhatsApp in 2026 </span>
            </h5>

          </div>

        </div>

        {/* RIGHT FEATURES */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {chooseBroadcast.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -42 : 42 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative px-3.5 py-5 text-left md:min-h-[200px]"
              >
                {index % 3 !== 0 && (
                  <div className="absolute left-0 top-8 hidden h-[78%] w-px bg-white/15 lg:block" />
                )}

                <div className="origin-left transition-transform duration-300 ease-out group-hover:scale-105">
                  <h3 className="flex items-center gap-3 text-[1.05rem]! font-black! leading-snug! tracking-normal! text-white!">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        index === 0
                          ? "bg-[#0B3D37] text-[#15C46B]"
                          : index === 1
                          ? "bg-[#123E8A] text-[#4B8DFF]"
                          : index === 2
                          ? "bg-[#39276F] text-[#A985FF]"
                          : index === 3
                          ? "bg-[#0B4735] text-[#3BD37D]"
                          : index === 4
                          ? "bg-[#5A300C] text-[#FF9F3F]"
                          : "bg-[#102E70] text-[#5BA6FF]"
                      } transition-transform duration-300 ease-out group-hover:scale-[1.15]`}
                    >
                      <Icon size={24} strokeWidth={2.2} />
                    </span>

                    {item.title}
                  </h3>

                  <p className="mt-4 mb-0! text-[0.95rem]! font-medium! leading-6! text-white/80!">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="relative -mb-7 -ml-7 -mr-4 mt-8 flex flex-col gap-5 rounded-none border-t border-white/15 bg-white/8 px-7 py-4 backdrop-blur-md lg:-mb-9 lg:-ml-9 lg:flex-row lg:items-center lg:justify-between lg:px-9">
        <img
          src="/assets/images/WB.png"
          alt="WhatsApp Broadcast"
          className="pointer-events-none absolute -bottom-[174px] left-[-61px] hidden h-[540px]! w-auto! max-w-none! object-contain lg:block"
        />

        <div className="flex items-center gap-4 lg:pl-[245px]">
          <p className="mb-0! text-[1.05rem]! font-bold! leading-7! text-white!">
            Broadcasts help businesses communicate faster, drive engagement
            consistently and convert users at scale.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 lg:pr-24">
          <div className="flex items-baseline gap-2">
            <h4 className="mb-0! w-auto! text-3xl! font-black! leading-tight! text-white!">
              10k+
            </h4>
            <p className="mb-0! whitespace-nowrap text-base! font-semibold! leading-6! text-white!">
              Messages Delivered
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative bg-[#f2f7ff] px-5 pb-[90px] pt-[90px] max-md:pb-[50px] max-md:pt-[35px] sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[320px] w-[850px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1380px]">
    <div className="text-center">
      <Reveal>
       <h2 className="mx-auto max-w-[1320px] text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-[1.15] tracking-tight text-[#111827]">
          What Happens after Business Sends a WhatsApp Broadcast
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-3 mb-0! text-[1.12rem]! font-normal! leading-[1.65]! text-[#2F3D5C]! xl:text-[1.2rem]! max-md:text-[1rem]! max-md:leading-[1.6]!">
          Track delivery, customer responses, follow-ups, and campaign outcomes after every WhatsApp broadcast.
        </p>
      </Reveal>
    </div>

    {/* STEPS — image on the left, accordion on the right */}
    <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
      {/* LEFT — image panel (placeholder for now, swaps with the active step) */}
      <div className="lg:sticky lg:top-28">
        <div className="relative aspect-[9/8] w-full overflow-hidden rounded-[28px] border border-[#E2ECF7] bg-[#F6FAFF]">
          <div className="absolute inset-0 bg-[radial-gradient(#DCE9F6_1.4px,transparent_1.4px)] [background-size:18px_18px] opacity-60" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10 text-center"
            >
              {/* TODO: replace this placeholder with the real image, e.g.
                  <img src={afterBroadcastSteps[activeStep].image} alt="" className="h-full w-full object-contain" /> */}
              <div className="flex h-28 w-28 items-center justify-center rounded-[26px] bg-[#EAFBF1] text-[#12A85B]">
                {React.createElement(afterBroadcastSteps[activeStep].icon, {
                  size: 56,
                  strokeWidth: 2.1,
                })}
              </div>

              <div>
                <p className="mb-0! text-xs! font-black! uppercase! tracking-[0.18em]! text-[#12A85B]!">
                  Step {activeStep + 1}
                </p>
                <h3 className="mt-2 text-[1.35rem]! font-black! leading-snug! tracking-normal! text-[#071B4D]!">
                  {afterBroadcastSteps[activeStep].title}
                </h3>
              </div>

              <span className="rounded-full border border-dashed border-[#C7D8EA] px-4 py-2 text-xs font-bold text-[#8497AE]">
                Image placeholder
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT — single card; cursor-following arrow flips to the next step */}
      <div className="flex w-full flex-col gap-6">
        <div
          ref={stepCardRef}
          onClick={nextStep}
          onMouseMove={handleStepCardMove}
          onMouseLeave={() => setArrowActive(false)}
          className="relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-[22px] border border-[#E2ECF7] bg-white px-5 py-7 sm:rounded-[28px] sm:px-9 sm:py-10 shadow-[0_18px_44px_rgba(7,27,77,0.06)] lg:px-11 lg:py-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6 pt-6 lg:pt-20"
            >
              {/* quote / step mark */}
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAFBF1] text-[#12A85B]">
                {React.createElement(afterBroadcastSteps[activeStep].icon, {
                  size: 30,
                  strokeWidth: 2.3,
                })}
              </span>

              <h3 className="mb-0! text-[1.6rem]! font-black! leading-snug! tracking-normal! text-[#071B4D]!">
                {afterBroadcastSteps[activeStep].title}
              </h3>

              <p className="mb-0! text-[1.05rem]! font-medium! leading-8! text-[#4B5B77]!">
                {afterBroadcastSteps[activeStep].text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* footer: step meta + pagination indicator */}
          <div className="mt-8 flex items-center justify-between border-t border-[#EEF3F9] pt-6">
            <div>
              <p className="mb-0! text-xs! font-black! uppercase! tracking-[0.18em]! text-[#12A85B]!">
                Step {activeStep + 1} of {afterBroadcastSteps.length}
              </p>
              <p className="mb-0! mt-1 text-sm! font-bold! text-[#071B4D]!">
                WhatsApp Journey
              </p>
            </div>

            <div className="flex items-center gap-2">
              {afterBroadcastSteps.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === i ? "w-6 bg-[#12A85B]" : "w-2 bg-[#CBD9E8]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* cursor-following dropdown arrow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#F1F3F6] text-[#071B4D] shadow-[0_8px_22px_rgba(7,27,77,0.14)] transition-[left,top,transform] duration-200 ease-out"
            style={{
              left: arrowActive ? arrowPos.x : "50%",
              top: arrowActive ? arrowPos.y : "58%",
            }}
          >
            <ArrowDown size={24} strokeWidth={2.4} />
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
<section className="relative bg-white px-5 pb-[90px] pt-[90px] max-md:pb-[50px] max-md:pt-[35px] sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[320px] w-[850px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1560px]">
    <div className="text-center">
      <Reveal>
      <h2 className="mx-auto max-w-[1320px] text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-[1.15] tracking-tight text-[#111827]">
          Tools to Plan and Manage Every WhatsApp Broadcast 
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-3 mb-0! text-[1.12rem]! font-normal! leading-[1.65]! text-[#2F3D5C]! xl:text-[1.2rem]! max-md:text-[1rem]! max-md:leading-[1.6]!">
         Segment audiences, personalise approved templates, schedule campaigns, and manage delivery through one connected platform. 
        </p>
      </Reveal>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-12 xl:grid-rows-[repeat(8,72px)] xl:gap-3">
      {broadcastCapabilities.map((card, index) => {
        const Icon = card.icon;

        return (
          <Reveal
            key={index}
            /* Four-up grid: left two columns enter from the left, right two from the right. */
            direction={index % 4 < 2 ? "left" : "right"}
            delay={(index % 4) * 0.08}
            duration={0.55}
            className={`group relative overflow-hidden rounded-[22px] border border-[#DDE7F0] bg-gradient-to-br from-white via-white to-[#F8FBFF] p-7 shadow-[0_14px_38px_rgba(7,27,77,0.07)] transition-all duration-300 will-change-transform hover:z-20 hover:border-[#AFC5DE] hover:from-[#D8E5F4] hover:via-[#DCE8F5] hover:to-[#CEDDEE] hover:shadow-[0_36px_72px_rgba(28,57,94,0.28)] hover:[transform:perspective(900px)_translateY(-12px)_translateZ(24px)_rotateX(3deg)_rotateY(-2deg)_scale(1.025)] ${capabilityCardLayouts[index]}`}
          >
            <div className="pointer-events-none absolute -bottom-8 -right-6 opacity-[0.08] transition-all duration-300 group-hover:scale-110 group-hover:opacity-15">
              <Icon size={index === 3 ? 190 : index === 0 ? 220 : 150} strokeWidth={1.2} />
            </div>

            <div className={`relative z-10 flex h-full items-start ${index < 4 ? `flex-col ${index < 3 ? "gap-2" : "gap-5"}` : "flex-col gap-4 md:flex-row md:gap-5"}`}>
              <div
                className={`flex h-16 w-16 -translate-y-1 shrink-0 items-center justify-center rounded-2xl shadow-[0_8px_18px_rgba(7,27,77,0.08)] transition duration-300 group-hover:scale-105 ${
                  index === 0
                    ? "bg-[#EAFBF1] text-[#12A85B]"
                    : index === 1
                    ? "bg-[#EAF2FF] text-[#155EEF]"
                    : index === 2
                    ? "bg-[#FFF7E6] text-[#F59E0B]"
                    : index === 3
                    ? "bg-[#EFEAFF] text-[#7C3AED]"
                    : index === 4
                    ? "bg-[#EEF6FF] text-[#3B82F6]"
                    : index === 5
                    ? "bg-[#EAFBF1] text-[#12A85B]"
                    : index === 6
                    ? "bg-[#FFF2E8] text-[#F97316]"
                    : "bg-[#EAFBFF] text-[#0891B2]"
                }`}
              >
                <Icon size={34} strokeWidth={2.2} />
              </div>

              <div className="min-w-0">
                <h3 className="mt-0! text-[1.15rem]! font-black! leading-snug! tracking-normal! text-[#071B4D]! transition-colors duration-300 xl:text-[1.25rem]!">
                  {index + 1}. {card.title}
                </h3>

                <p className="mt-2 mb-0! max-w-[440px] text-base! font-medium! leading-7! text-[#4B5B77]! transition-colors duration-300">
                  {card.text}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  </div>
</section>

      <WhatsAppBroadcastFaqSection />
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

const whatsappBroadcastFaqs = [
  {
    q: "What is a WhatsApp broadcast?",
    a: "A WhatsApp broadcast lets you send one approved message to thousands of opted-in customers at once, while each person still receives it as a personal one-to-one chat.",
  },
  {
    q: "How many contacts can I broadcast to at a time?",
    a: "Unlike the WhatsApp Business App’s 256-contact limit, the API-powered broadcast in Vertex Suite lets you reach lakhs of customers in a single campaign, based on your messaging tier.",
  },
  {
    q: "Do customers need to save my number to receive a broadcast?",
    a: "No. With the WhatsApp Business API, opted-in customers receive your broadcast whether or not they have saved your number.",
  },
  {
    q: "Do broadcast messages need template approval?",
    a: "Yes. Broadcast messages use pre-approved templates. Vertex Suite helps you draft, submit, and manage templates so campaigns go live faster.",
  },
  {
    q: "Can I schedule broadcasts in advance?",
    a: "Yes. You can schedule campaigns for a specific date and time, and set up recurring broadcasts for reminders, offers, and updates.",
  },
  {
    q: "Can I personalise each broadcast message?",
    a: "Yes. Merge customer name, order details, dates, links, and other variables so every message feels written for that one person.",
  },
  {
    q: "How do I track broadcast performance?",
    a: "You get live reporting on sent, delivered, read, clicked, and replied — plus failure reasons — so you can measure and improve each campaign.",
  },
  {
    q: "What happens when a customer replies to a broadcast?",
    a: "Replies land in your shared team inbox, where agents or automated flows can continue the conversation and convert the interest into a sale.",
  },
];

function WhatsAppBroadcastFaqSection() {
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
              Can’t find what you’re looking for? Our team is here to help you understand WhatsApp Broadcast and Vertex Suite better.
            </p>
          </Reveal>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-1">
          {whatsappBroadcastFaqs.map((item, index) => {
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
