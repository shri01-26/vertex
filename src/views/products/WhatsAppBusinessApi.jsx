"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "../../components/AppLink";
import AnimatedFeatureSection from "../../components/AnimatedFeatureSection/AnimatedFeatureSection";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  CalendarDays,
  ClipboardCheck,
  Clock,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Globe2,
  Image as ImageIcon,
  Layers,
  LayoutGrid,
  Megaphone,
  MessageCircle,
  MessageSquare,
  MousePointerClick,
  Plus,
  Puzzle,
  RotateCcw,
  Search,
  Send,
  Settings,
  Share2,
  Shield,
  ShieldCheck,
  Smartphone,
  Star,
  Truck,
  User,
  UserCheck,
  UserPlus,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function CountUp({ end, suffix = "", duration = 0.8, className, style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {value}
      {suffix}
    </span>
  );
}

// Per-card content: har card sirf apni template image dikhata hai.
const cardData = [
  { title: "Concert Booking", image: "/assets/images/AT1.png" },
  { title: "QR-Based Service Journey", image: "/assets/images/AT2.png" },
  { title: "Click to WhatsApp Admission Flow", image: "/assets/images/AT3.png" },
  { title: "Smart Multi-Language Service Flow", image: "/assets/images/AT4.png" },
  { title: "Carousel Flow On WhatsApp", image: "/assets/images/AT5.png" },
  { title: "AI Agent Support", image: "/assets/images/AT6.png" },
  { title: "Card 7", image: "/assets/images/AT7.png" },
  { title: "Card 8", image: "/assets/images/AT8.png" },
  { title: "Card 9", image: "/assets/images/AT9.png" },
  { title: "Card 10", image: "/assets/images/AT10.png" },
  { title: "Card 11", image: "/assets/images/AT11.png" },
  { title: "Card 12", image: "/assets/images/AT12.png" },
];

// One workflow card — same size/layout, content driven by props.
function WorkflowCard({ title, image }) {
  return (
    <article className="flex aspect-[37/55] w-full flex-col overflow-hidden bg-transparent">
      <img
        src={image}
        alt={title}
        className="block h-full w-full rounded-[12px] object-contain"
      />
    </article>
  );
}

function WhatsAppWorkflowCard() {
  return (
    <>
      <section className="bg-[#fafcff] px-4 pt-24 pb-4 text-center">
        <h2 className="mx-auto max-w-[1320px] text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-[1.15] tracking-tight text-[#111827]">
          Explore Pre-built <span className="text-green-600">WhatsApp</span> Templates For Every Business Scenario
        </h2>
      </section>

      <section
        className="relative min-h-screen overflow-hidden bg-[#fafcff] px-4 py-8"
      >
        <div className="group/cards mx-auto grid w-full max-w-[1520px] gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {cardData.map((card) => (
            <div
              key={card.title}
              className="group/card relative min-w-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/cards:blur-[6px] group-hover/cards:scale-[0.96] group-hover/cards:opacity-70 hover:z-10 hover:!scale-[1.06] hover:!opacity-100 hover:!blur-none hover:-translate-y-2"
            >
              <WorkflowCard title={card.title} image={card.image} />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-[1520px] items-center justify-between gap-5 rounded-[16px] border border-[#E7ECF5] bg-white px-8 py-4 text-center shadow-[0_14px_38px_rgba(15,23,42,0.05)] max-md:flex-col max-md:px-5">
          <h4 className="!mb-0 text-[clamp(1rem,1.7vw,1.3rem)] font-semibold leading-tight tracking-tight text-[#0A0A0A] max-md:!text-center md:!text-left">
            Get Your <span className="text-green-600">WhatsApp Business API</span> Ready Faster
          </h4>
          <div className="flex shrink-0 items-center justify-center gap-3 max-sm:w-full max-sm:flex-col">
            <Link
              to="/signup"
              className="roll-btn group inline-flex items-center justify-center overflow-hidden rounded-[10px] border-2 border-green-600 bg-green-600 px-11 py-2.5 text-[1rem] font-semibold text-white transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white max-sm:w-full"
            >
              <span className="roll-content">
                <span className="roll-content-main">
                  <span>Start Setup</span>
                  <ArrowRight size={20} strokeWidth={2.2} />
                </span>
                <span className="roll-content-hover">
                  <span>Start Setup</span>
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
                  <span>Request Demo</span>
                </span>
                <span className="roll-content-hover">
                  <CalendarDays size={26} strokeWidth={1.6} />
                  <span>Request Demo</span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SystemColumnCard({ column, bgClass = "bg-transparent", borderColor = "#22C55E", borderWidth = 1 }) {
  const ColumnIcon = column.icon;
  const cardBorder = `${borderWidth}px solid ${borderColor}`;

  return (
    <article
      style={{
        border: cardBorder,
      }}
      className={`h-full min-h-[520px] rounded-[16px] ${bgClass} px-3 pb-5 pt-5 text-left shadow-[0_10px_24px_rgba(34,197,94,0.08)]`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-2 text-[#2F8F79] ${
          column.key === "conversation" ? "mb-4" : "mb-6"
        }`}
      >
        <span
          ref={(el) => {
            if (!el) return;
            const bg =
              column.key === "business"
                ? "#C99A3F"
                : column.key === "platform"
                ? "#ffffff"
                : column.key === "whatsapp"
                ? "#00A63E"
                : column.key === "conversation"
                ? "#4F6EFF"
                : "#ffffff";
            el.style.setProperty("background-color", bg, "important");
          }}
          className="-mt-8 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-transparent text-[#2F8F79] shadow-sm"
        >
          {column.key === "platform" ? (
            <img
              src="/assets/images/logo.png"
              alt="Vertex Suite"
              className="h-14 w-14 object-contain"
            />
          ) : (
            <ColumnIcon
              className="h-12 w-12"
              strokeWidth={2.1}
              style={
                column.key === "business" ||
                column.key === "whatsapp" ||
                column.key === "conversation"
                  ? { color: "#ffffff" }
                  : undefined
              }
            />
          )}
        </span>
        <div className="text-center">
          <h4
            ref={(el) => {
              if (!el) return;
              if (column.key === "business")
                el.style.setProperty("color", "#C99A3F", "important");
              else if (column.key === "platform")
                el.style.setProperty("color", "#3B8CFF", "important");
              else if (column.key === "whatsapp")
                el.style.setProperty("color", "#00A63E", "important");
              else if (column.key === "conversation")
                el.style.setProperty("color", "#4F6EFF", "important");
            }}
            className="mb-0 whitespace-nowrap font-extrabold leading-tight"
            style={{ fontSize: "16px" }}
          >
            {column.title}
          </h4>
          {column.subtitle && (
            <p
              ref={(el) => {
                if (el) el.style.setProperty("color", "#8FAED1", "important");
              }}
              className="mb-0 mt-1 text-center text-[0.74rem] font-bold leading-tight text-[#059669]"
            >
              {column.subtitle}
            </p>
          )}
        </div>
      </div>

      <div className={`grid ${column.key === "conversation" ? "gap-1" : "gap-3"} ${column.key === "business" ? "mt-14" : ""} ${column.key === "whatsapp" ? "mt-16" : ""} ${column.cols === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
        {column.items.map((item, index) => {
          const ItemIcon = item.icon;
          const status =
            column.key === "conversation" && index === 0
              ? "New Lead"
              : column.key === "conversation" && index === 4
              ? "Paid"
              : column.key === "conversation" && index === 5
              ? "In Transit"
              : column.key === "conversation" && index === 7
              ? "Completed"
              : null;
          const isComplete = column.key === "conversation" && [1, 2, 3, 6].includes(index);

          return (
            <div
              key={item.label}
              style={{
                background: "#ffffff",
                ...(column.key === "business"
                  ? { border: "1px solid #C99A3F" }
                  : column.key === "platform"
                  ? { border: "1px solid #3B8CFF" }
                  : column.key === "whatsapp"
                  ? { border: "1px solid #00A63E" }
                  : column.key === "conversation"
                  ? { border: "1px solid #4F6EFF" }
                  : {}),
              }}
              className={`flex items-center gap-2 rounded-[8px] px-2 shadow-[0_4px_10px_rgba(15,23,42,0.04)] ${
                column.key === "conversation" ? "min-h-[36px] py-1" : "min-h-[64px] py-3"
              }`}
            >
              <span
                className={`flex shrink-0 items-center justify-center rounded-full bg-transparent text-[#3D9A8A] ${
                  column.key === "conversation" ? "h-8 w-8" : "h-9 w-9"
                }`}
                style={
                  column.key === "business"
                    ? { color: "#C99A3F" }
                    : column.key === "platform"
                    ? { color: "#3B8CFF" }
                    : column.key === "whatsapp"
                    ? { color: "#00A63E" }
                    : column.key === "conversation"
                    ? { color: "#4F6EFF" }
                    : undefined
                }
              >
                <ItemIcon className="h-5 w-5" strokeWidth={2.1} />
              </span>

              <span className="min-w-0 flex-1 text-[0.85rem] font-semibold leading-tight text-[#4B5563]">
                {item.label}
              </span>

              {item.value && (
                <span className="flex shrink-0 items-center gap-1 whitespace-nowrap text-[0.74rem] font-medium text-[#7C838C]">
                  <span className="text-[#BDC5CD]">--&gt;</span>
                  {item.value}
                </span>
              )}

              {status && (
                <span className="shrink-0 rounded-full bg-transparent px-2 py-0.5 text-[0.68rem] font-bold text-[#16A34A]">
                  {status}
                </span>
              )}

              {isComplete && (
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-[0.62rem] font-black text-white">
                  ✓
                </span>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
}
// renders a card description, splitting on blank lines into blocks with a small gap
function renderCardDescription(text) {
  return String(text)
    .split("\n\n")
    .map((para, i) => (
      <span key={i} className={`block whitespace-pre-line${i > 0 ? " mt-2" : ""}`}>
        {para}
      </span>
    ));
}
// function help comp
function WhatsAppApiPinnedShowcase({ cards, header }) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!containerRef.current || !scrollerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    let ctx;

    const setupScrollTrigger = () => {
      if (ctx) ctx.revert();

      if (!mediaQuery.matches) return;

      ctx = gsap.context(() => {
        gsap.set(scrollerRef.current, { yPercent: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            id: "whatsapp-api-showcase-trigger",
           start: "top 72px",
            end: "+=360%",
            scrub: 1.15,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: () => {
              // Active card ko actual scroll position (yPercent) se derive karo,
              // taaki jaise hi card physically top par settle ho wo full opacity ho jaaye.
              const yp = gsap.getProperty(scrollerRef.current, "yPercent");
              const raw = -yp / (100 / cards.length);
              // Switch tab ho jab card center par pahunche (scroll transition ka halfway).
              const step = Math.round(raw);
              const index = Math.min(cards.length - 1, Math.max(0, step));
              setActiveStep(index);
            },
          },
        });

        cards.slice(1).forEach((_, index) => {
          tl.to(scrollerRef.current, {
            yPercent: -((index + 1) * 100) / cards.length,
            duration: 1,
            ease: "power1.inOut",
          }).to({}, { duration: 0.35 });
        });
      }, containerRef);

      ScrollTrigger.refresh();
    };

    setupScrollTrigger();

    const handleResize = () => ScrollTrigger.refresh();

    mediaQuery.addEventListener("change", setupScrollTrigger);
    window.addEventListener("resize", handleResize);

    return () => {
      if (ctx) ctx.revert();
      mediaQuery.removeEventListener("change", setupScrollTrigger);
      window.removeEventListener("resize", handleResize);
    };
  }, [cards.length]);

  return (
    <section
  ref={containerRef}
  className="relative mt-0 w-full overflow-hidden bg-[#fafcff] lg:min-h-[calc(100vh-72px)]"
  id="whatsapp-api-pinned-showcase"
>
      {/* soft background */}

      {/* HEADING (pinned ke saath fixed rehta hai) */}
      {header ? (
        <div className="relative z-20 mx-auto w-full max-w-[1100px] px-4 pt-6 text-center lg:pt-8">
          {header}
        </div>
      ) : null}

      {/* DESKTOP PINNED LAYOUT */}
      <div className="relative mx-auto hidden w-full max-w-[1280px] items-start gap-16 px-4 pt-12 pb-16 lg:flex">
        {/* LEFT IMAGE AREA */}
        <div className="relative flex h-[600px] w-1/2 items-center justify-center rounded-[28px]">

          {cards.map((card, index) => (
            <div
              key={card.number}
              className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-700 ease-in-out"
              style={{
                opacity: activeStep === index ? 1 : 0,
                transform: activeStep === index ? "scale(1)" : "scale(0.94)",
                pointerEvents: activeStep === index ? "auto" : "none",
              }}
            >
              <div
                className={`relative flex h-full w-full items-center justify-center rounded-[28px] ${
                  card.number === "01" || card.number === "02" || card.number === "03" ? "overflow-visible p-2" : card.number === "05" ? "overflow-visible p-8" : "overflow-hidden p-8"
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(#E5E7EB_1.4px,transparent_1.4px)] [background-size:18px_18px] opacity-45" />

                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className={`relative z-10 h-auto object-contain ${
                    card.number === "02"
                      ? "max-h-[920px] w-full scale-[1.12]"
                      : card.number === "03"
                      ? "max-h-[620px] w-full"
                      : card.number === "01"
                      ? "max-h-[820px] w-full"
                      : card.number === "05"
                      ? "-translate-x-10 max-h-[680px] w-[96%]"
                      : "-translate-x-10 max-h-[560px] w-[88%]"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT TEXT SCROLLER */}
        <div className="relative h-[600px] w-1/2 translate-x-10 overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_7%,#000_80%,transparent_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_7%,#000_80%,transparent_100%)]">
          <div
            ref={scrollerRef}
            className="absolute inset-0 flex w-full flex-col"
            style={{ height: `${cards.length * 330}px` }}
          >
            {cards.map((card, index) => (
              <div
                key={card.number}
                className="flex w-full flex-col items-start justify-start gap-2 pr-8 pt-12 text-left transition-all duration-700 ease-out"
                style={{
                  height: "330px",
                  opacity: activeStep === index ? 1 : 0.22,
                  transform:
                    activeStep === index
                      ? "scale(1) translateY(0)"
                      : "scale(0.96) translateY(14px)",
                }}
              >
                <h3 className="!mb-0 text-[clamp(2.2rem,3.2vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-[#07122B]">
                  {card.title}
                </h3>

                <p className="!mb-0 mt-2 max-w-[560px] text-[1.12rem] font-medium leading-[1.75] text-[#5B6B84]">
                  {renderCardDescription(card.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* end of desktop pinned layout */}

      {/* MOBILE / TABLET STACKED LAYOUT */}
      <div className="relative mx-auto flex w-full max-w-[900px] flex-col gap-10 px-4 pt-8 pb-10 lg:hidden">
        {cards.map((card) => (
          <article
            key={card.number}
            className="overflow-hidden rounded-[28px] border border-[#D1FAE5] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="flex flex-col">
              <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[#F0FDF4] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(#BBF7D0_1.4px,transparent_1.4px)] [background-size:18px_18px] opacity-40" />

                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className={`relative z-10 h-auto object-contain drop-shadow-[0_20px_40px_rgba(16,185,129,0.18)] ${
                    card.number === "01" || card.number === "02" || card.number === "03"
                      ? "max-h-[470px] w-full"
                      : "max-h-[310px] w-[88%]"
                  }`}
                />
              </div>

              <div className="flex flex-col gap-4 p-7 text-left">
                <h3 className="text-[1.9rem] font-extrabold leading-[1.1] tracking-tight text-[#07122B]">
                  {card.title}
                </h3>

                <p className="mt-2 text-[1rem] font-medium leading-[1.7] text-[#5B6B84]">
                  {renderCardDescription(card.description)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function WhatsAppBusinessApi() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Typewriter effect for hero heading rotating word.
  // The leading "C" stays static; only the suffix types/deletes.
  const typewriterWords = ["onversations", "ampaigns", "licks"];
  const [twText, setTwText] = useState("");
  const [twWordIndex, setTwWordIndex] = useState(0);
  const [twDeleting, setTwDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[twWordIndex];
    let delay;

    if (!twDeleting && twText === currentWord) {
      // Finished typing → pause before deleting
      delay = 1600;
      const t = setTimeout(() => setTwDeleting(true), delay);
      return () => clearTimeout(t);
    }

    if (twDeleting && twText === "") {
      // Finished deleting → move to next word
      const t = setTimeout(() => {
        setTwDeleting(false);
        setTwWordIndex((i) => (i + 1) % typewriterWords.length);
      }, 350);
      return () => clearTimeout(t);
    }

    // Typing or deleting one character
    delay = twDeleting ? 60 : 110;
    const t = setTimeout(() => {
      setTwText((prev) =>
        twDeleting
          ? currentWord.slice(0, prev.length - 1)
          : currentWord.slice(0, prev.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [twText, twDeleting, twWordIndex]);

  // Timeline sequential reveal: dot travels across circles, one card visible at a time
  const [activeStep, setActiveStep] = useState(0);
  const [arrivedStep, setArrivedStep] = useState(-1);
  const [shownStep, setShownStep] = useState(-1);
  const [dotX, setDotX] = useState(0);
  const circleRefs = useRef([]);
  const omnichannelSectionRef = useRef(null);
  const omnichannelAnimationHasPlayedRef = useRef(false);
  const [omnichannelFlowStarted, setOmnichannelFlowStarted] = useState(false);
  const shiballFlowRef = useRef(null);
  const shiballAnimationHasPlayedRef = useRef(false);
  const [shiballCardsFlipped, setShiballCardsFlipped] = useState(false);

  // Section 4: left image stays pinned; the right-side content block closest to
  // the viewport center becomes active → left image cross-fades to its image.
  const [activeApiIndex, setActiveApiIndex] = useState(0);
  const apiBlockRefs = useRef([]);
  const apiScrollSectionRef = useRef(null);

  useEffect(() => {
    let raf = null;

    const measure = () => {
      const section = apiScrollSectionRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (sectionRect.top > viewportHeight || sectionRect.bottom < 0) return;

      const viewportCenter = window.innerHeight / 2;
      let closest = 0;
      let closestDist = Infinity;
      apiBlockRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.height === 0) return; // hidden (mobile) — skip
        const blockCenter = rect.top + rect.height / 2;
        const dist = Math.abs(blockCenter - viewportCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i + 1;
        }
      });
      setActiveApiIndex((prev) => (prev === closest ? prev : closest));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        measure();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    measure(); // initial

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const section = omnichannelSectionRef.current;
    if (!section || omnichannelAnimationHasPlayedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || omnichannelAnimationHasPlayedRef.current) return;

        omnichannelAnimationHasPlayedRef.current = true;
        setOmnichannelFlowStarted(true);
        observer.disconnect();
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = shiballFlowRef.current;
    if (!section || shiballAnimationHasPlayedRef.current) return;

    const playShiballAnimation = () => {
      if (shiballAnimationHasPlayedRef.current) return;

      shiballAnimationHasPlayedRef.current = true;
      setShiballCardsFlipped(true);
    };

    const isSectionVisible = () => {
      const rect = section.getBoundingClientRect();
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const visibleRatio = visibleHeight / rect.height;
      return visibleRatio >= 0.35;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          !entry.isIntersecting ||
          entry.intersectionRatio < 0.35 ||
          shiballAnimationHasPlayedRef.current
        ) {
          return;
        }

        playShiballAnimation();
        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    let rafId = null;
    const handleScroll = () => {
      if (rafId || shiballAnimationHasPlayedRef.current) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!isSectionVisible()) return;

        playShiballAnimation();
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    // per-step duration: steps 0-2 normal, step 3 (all cards shown) held longer,
    // step 4 (reset, dot waiting at start) kept short so the dot starts sooner
    const durations = [3200, 3200, 3200, 4800, 350];
    const id = setTimeout(() => {
      // 0,1,2,3 reveal cards cumulatively; 4 = reset (all hidden, dot travels back to circle 1)
      setActiveStep((s) => (s + 1) % 5);
    }, durations[activeStep]);
    return () => clearTimeout(id);
  }, [activeStep]);

  useEffect(() => {
    const update = () => {
      if (activeStep === 4) {
        setDotX(0); // reset: dot returns to the start of the line, before circle 1
        return;
      }
      const el = circleRefs.current[activeStep];
      if (el) setDotX(el.offsetLeft + el.offsetWidth / 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeStep]);

  // circle glows only once the dot has actually reached it (matches dot travel time)
  useEffect(() => {
    if (activeStep === 4) {
      setArrivedStep(-1); // reset: clear glow immediately (dot jumps back to start)
      return;
    }
    const travel = activeStep === 0 ? 1000 : 1600; // first move (start -> circle 1) is faster
    const t = setTimeout(() => setArrivedStep(activeStep), travel);
    return () => clearTimeout(t);
  }, [activeStep]);

  // card shows a short beat AFTER its circle has glowed (uniform for every card)
  useEffect(() => {
    if (arrivedStep < 0) {
      setShownStep(-1); // reset: hide all cards
      return;
    }
    const t = setTimeout(() => setShownStep(arrivedStep), 0);
    return () => clearTimeout(t);
  }, [arrivedStep]);

  const omnichannelCards = [
    {
      number: "01",
      title: "Zero Wait Time",
      subtitle: "Customers get instant replies without queues, delays, or manual follow-ups.",
      cta: "Faster response times",
      steps: [
        {
          icon: Zap,
          label: "Common questions are answered instantly",
          text: "Common questions are answered instantly",
        },
        {
          icon: ClipboardCheck,
          label: "Order and booking updates are shared in real time",
          text: "Order and booking updates are shared in real time",
        },
        {
          icon: RotateCcw,
          label: "24/7 response automation",
          text: "24/7 response automation",
        },
      ],
    },
    {
      number: "02",
      title: "Connected Journey",
      subtitle: "Customers can discover you anywhere and continue the conversation on WhatsApp",
      cta: "Higher lead conversion",
      steps: [
        {
          icon: Globe2,
          label: "Starts from ads, website, QR or social media",
          text: "Starts from ads, website, QR or social media",
        },
        {
          icon: MessageCircle,
          label: "Conversation continues on WhatsApp",
          text: "Conversation continues on WhatsApp",
        },
        {
          icon: UserCheck,
          label: "Lead capture happens without drop-offs",
          text: "Lead capture happens without drop-offs",
        },
      ],
    },
    {
      number: "03",
      title: "Smart Routing",
      subtitle: "Customers reach the right team faster with intelligent flows.",
      cta: "Better team efficiency",
      steps: [
        {
          icon: Zap,
          label: "Incoming chats are sorted automatically",
          text: "Incoming chats are sorted automatically",
        },
        {
          icon: ClipboardCheck,
          label: "Priority requests move to the right agent",
          text: "Priority requests move to the right agent",
        },
        {
          icon: RotateCcw,
          label: "Follow-ups continue without manual tracking",
          text: "Follow-ups continue without manual tracking",
        },
      ],
    },
    {
      number: "04",
      title: "Rich Engagement",
      subtitle: "Interactive conversations help customers take action quickly.",
      cta: "Higher customer engagement",
      steps: [
        {
          icon: Zap,
          label: "Buttons guide users to the next step",
          text: "Buttons guide users to the next step",
        },
        {
          icon: ClipboardCheck,
          label: "Media and templates make replies clearer",
          text: "Media and templates make replies clearer",
        },
        {
          icon: RotateCcw,
          label: "Campaign responses stay easy to manage",
          text: "Campaign responses stay easy to manage",
        },
      ],
    },
    {
      number: "05",
      title: "Always-On Scale",
      subtitle: "Automation keeps your business responsive after hours.",
      cta: "Consistent support quality",
      steps: [
        {
          icon: RotateCcw,
          label: "Automated journeys run around the clock",
          text: "Automated journeys run around the clock",
        },
        {
          icon: Zap,
          label: "Important updates are delivered instantly",
          text: "Important updates are delivered instantly",
        },
        {
          icon: ClipboardCheck,
          label: "Teams get clean context before handoff",
          text: "Teams get clean context before handoff",
        },
      ],
    },
  ];

  const apiFeatureCards = [
    {
      number: "01",
      title: (
        <>
          Talk <span className="text-[#10B981]">Beyond</span> Text
        </>
      ),
    description:
  "Customers don’t just type anymore.\n\nThey can connect instantly through voice or video interactions,\nmaking support, consultation, and communication more human and direct.",
think: "support call inside chat",
image: "/assets/images/01 (6).png",
imageAlt: "WhatsApp voice and video calling experience",
    },
    {
      number: "02",
      title: (
        <>
          Pay <span className="text-[#10B981]">Without Leaving</span>
          <br />
          the Conversation
        </>
      ),
      description:
        "No redirects. No friction.\n\nCustomers can complete payments directly inside WhatsApp,\nturning conversations into instant transactions.",
      think: "order → pay → confirm → done",
      image: "/assets/images/02 (3).png",
      imageAlt: "WhatsApp payment workflow",
    },
    {
      number: "03",
      title: (
        <>
          <span className="text-[#10B981]">Fill, Submit, Complete</span>
          <br />- Inside Chat
        </>
      ),
      description:
        "Forms are no longer separate pages.\n\nCollect details, bookings, feedback, or applications\nthrough interactive flows directly within WhatsApp conversations.",
      think: "lead capture inside chat",
      image: "/assets/images/03.png",
      imageAlt: "WhatsApp form workflow",
    },
    {
      number: "04",
      title: (
        <>
          Launch Experiences
          <br />
          <span className="text-[#10B981]">Beyond the Chat</span>
        </>
      ),
      description:
        "Some journeys need more than messages.\n\nOpen websites, storefronts, booking systems, or service portals directly inside WhatsApp - without forcing customers to switch apps.",
      think: "No app switching",
      image: "/assets/images/04.png",
      imageAlt: "WhatsApp interactive shopping workflow",
    },
    {
      number: "05",
      title: (
        <>
          Conversations Powered by AI
          <br />
          <span className="text-[#10B981]">Inside WhatsApp</span>
        </>
      ),
      description:
        "Customers expect instant answers, any time of the day.\n\nAI-powered assistants can understand intent, answer questions, guide users, and complete tasks through natural conversations that feel human, not scripted.",
      think: "a virtual team member available 24/7",
      image: "/assets/images/05.png",
      imageAlt: "WhatsApp AI conversation workflow",
    },
  ];

  const businessSystemsFlow = [
    { icon: User, label: "CRM", value: "Customer data" },
    { icon: Globe2, label: "Website", value: "Forms" },
    { icon: Smartphone, label: "Mobile App", value: "Traffic" },
    { icon: Megaphone, label: "Ads / Lead Sources", value: "Lead Generation" },
  ];

  const vertexPlatformFlow = [
    { icon: MessageSquare, label: "Conversation Inbox" },
    { icon: Workflow, label: "Workflow Automation" },
    { icon: Megaphone, label: "Campaign Manager" },
    { icon: Share2, label: "Lead Routing" },
    { icon: Puzzle, label: "Integrations Layer" },
    { icon: BarChart3, label: "Analytics Dashboard" },
    { icon: Users, label: "Team Collaboration" },
    { icon: Shield, label: "Role-based Access" },
  ];

  const whatsappApiFlow = [
    { icon: MessageSquare, label: "Messaging" },
    { icon: ClipboardCheck, label: "Templates" },
    { icon: MousePointerClick, label: "Interactive Buttons" },
    { icon: Workflow, label: "Flow / Forms" },
    { icon: Bell, label: "Notifications" },
    { icon: ImageIcon, label: "Media & Documents" },
    { icon: CreditCard, label: "Payments" },
    { icon: ShieldCheck, label: "Verification" },
  ];

  const customerConversationFlow = [
    { icon: UserPlus, label: "Lead Capture" },
    { icon: Search, label: "Product Discovery" },
    { icon: CalendarDays, label: "Bookings" },
    { icon: UserCheck, label: "Support Resolution" },
    { icon: CreditCard, label: "Payments Completed" },
    { icon: Truck, label: "Order Updates" },
    { icon: ShieldCheck, label: "Onboarding / Verification" },
    { icon: Star, label: "Feedback Collection" },
  ];

  const systemFlowColumns = [
    {
      key: "business",
      title: "Business Systems",
      icon: Database,
      cols: 1,
      items: businessSystemsFlow,
    },
    {
      key: "platform",
      title: "Vertex Suite Platform",
      subtitle: "Automation + Campaigns + Routing + Analytics",
      icon: Layers,
      cols: 2,
      items: vertexPlatformFlow,
    },
    {
      key: "whatsapp",
      title: "WhatsApp Business API",
      icon: FaWhatsapp,
      whatsapp: true,
      cols: 2,
      items: whatsappApiFlow,
    },
    {
      key: "conversation",
      title: "Customer Conversation",
      icon: Users,
      cols: 1,
      items: customerConversationFlow,
    },
  ];

  const vertexHighlightCards = [
    {
      number: "01",
      icon: LayoutGrid,
      title: ["One Dashboard", "Powered by Vertex Suite"],
      description:
        "Manage conversations, campaigns, automation and performance - all from a single platform.",
      bullets: ["Conversation Inbox", "Campaigns", "Automation", "Analytics"],
      miniIcons: [MessageSquare, Megaphone, Settings, BarChart3],
    },
    {
      number: "02",
      icon: Share2,
      title: ["Everything Connected", "Through Vertex Suite"],
      description:
        "Your CRM, apps and backend systems - all seamlessly connected to WhatsApp.",
      bullets: ["CRM Integration", "APIs", "Data Sync", "Workflows"],
      miniIcons: [Puzzle, Database, Cloud, Globe2],
    },
    {
      number: "03",
      icon: Zap,
      title: ["Automation, Simplified"],
      description:
        "Design workflows once - Vertex Suite handles conversations automatically.",
      bullets: ["Workflow Builder", "Routing", "Triggers", "Automation"],
      miniIcons: [Workflow, Send, Clock, Bot],
    },
    {
      number: "04",
      icon: Users,
      title: ["Built for Teams"],
      description:
        "Vertex Suite enables multiple agents, roles and collaboration in one system.",
      bullets: ["Multi-Agent Support", "Role Management", "Collaboration", "Escalations"],
      miniIcons: [UserCheck, Shield, Users, MessageCircle],
    },
    {
      number: "05",
      icon: BarChart3,
      title: ["Insights That", "Drive Growth"],
      description:
        "Track performance, measure conversations and make smarter decisions with real-time analytics.",
      bullets: ["Live Dashboards", "Reports", "Conversion Tracking", "Trends"],
      miniIcons: [BarChart3, ClipboardCheck, MousePointerClick, Zap],
    },
  ];

  // Section 4 card body — identical markup reused by the desktop pinned stage
  // and the mobile stacked list (content/images/layout unchanged).
  const renderApiCardInner = (card) => (
    <div className="relative z-10 grid min-h-[660px] grid-cols-[50%_50%]">

      {/* LEFT — image panel */}
      <div className="relative flex min-h-[560px] items-center justify-center p-8">

        {card.number === "01" && (
          <img
            src="/assets/images/01(6).png"
            alt=""
            aria-hidden="true"
            className="relative z-10 h-auto max-h-[500px] w-[88%] object-contain drop-shadow-[0_-4px_20px_rgba(16,185,129,0.15)]"
          />
        )}
        {card.number === "02" && (
          <img src="/assets/images/02(3).png" alt="" aria-hidden="true"
            className="relative z-10 h-auto max-h-[500px] w-[88%] object-contain drop-shadow-[0_-4px_20px_rgba(16,185,129,0.15)]" />
        )}
        {card.number === "03" && (
          <img src="/assets/images/03.png" alt="" aria-hidden="true"
            className="relative z-10 h-auto max-h-[500px] w-[88%] object-contain drop-shadow-[0_-4px_20px_rgba(16,185,129,0.15)]" />
        )}
        {card.number === "04" && (
          <img src="/assets/images/medicare%20png.png" alt="" aria-hidden="true"
            className="relative z-10 h-auto max-h-[500px] w-[88%] object-contain drop-shadow-[0_-4px_20px_rgba(16,185,129,0.15)]" />
        )}
        {card.number === "05" && (
          <img src="/assets/images/05.png" alt="" aria-hidden="true"
            className="relative z-10 h-auto max-h-[500px] w-[88%] object-contain drop-shadow-[0_-4px_20px_rgba(16,185,129,0.15)]" />
        )}
      </div>

      {/* RIGHT — text */}
      <div className="flex flex-col justify-center gap-6 p-14 pl-8">
        <h3 className="text-[clamp(1.9rem,2.8vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-[#0A0A0A]">
          {card.title}
        </h3>

        <p className="whitespace-pre-line text-[1.12rem] font-medium leading-[1.72] text-[#5B6B84]">
          {card.description}
        </p>

        <div className="flex items-center gap-3 pt-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#BBF7D0] bg-[#ECFDF5] text-[#059669] shadow-[0_0_0_3px_rgba(187,247,208,0.35)]">
            <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <p className="!mb-0 text-[0.95rem] font-medium text-[#475569]">
            <span className="font-bold text-[#059669]">Think:</span>{" "}{card.think}
          </p>
        </div>
      </div>

    </div>
  );

  return (
    <main className="whatsapp-business-api-page w-full overflow-x-clip bg-white">
      {/* ================= SECTION 1: HERO ================= */}
      <section
        className="relative overflow-hidden bg-[#f7faf7] pt-[90px] pb-[70px] lg:min-h-[850px] max-lg:pt-[10px] max-lg:pb-[70px] max-md:pt-[35px] max-md:pb-[50px]"
      >
        <div className="container relative z-10">
          <div className="mb-0 -mt-6 inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/50 bg-white/25 px-3 py-2 text-[0.95rem] font-semibold text-green-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_28px_rgba(15,23,42,0.10)] backdrop-blur-lg ring-1 ring-white/30 lg:ml-6">
            <img
              src="/assets/images/whatsapp-icon.png"
              alt="WhatsApp"
              className="h-5 w-5 object-contain"
            />
            WhatsApp Channel
          </div>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 max-lg:text-center">
            {/* Left Content Column */}
            <div className="mx-auto flex w-full max-w-[720px] flex-col gap-7 lg:mx-0 lg:-mt-6 lg:pl-6 xl:-mt-4 max-md:gap-5">
              <div className="mt-16 flex flex-col gap-1 max-md:mt-8">
                <h1 className="mb-0 flex w-full items-center text-[clamp(2.05rem,8vw,4.5rem)] pt-0 font-extrabold leading-[1.05] tracking-tight text-[#292929] max-lg:justify-center lg:whitespace-nowrap">
                  <span className="font-bold">C{twText}</span>
                  <span
                    aria-hidden="true"
                    className="tw-caret ml-1 inline-block w-[3px] self-stretch rounded-full bg-[#292929] md:w-[4px]"
                  />
                </h1>

                <h1 className="mb-0 w-full text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#292929] max-lg:whitespace-normal lg:whitespace-nowrap">
                  That Convert on <span className="text-green-600">WhatsApp</span>
                  </h1>
                  </div>
                  <div className="flex max-w-[690px] flex-col gap-1 text-left">
                   {/* <p className="m-0 max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
  Keep every customer step connected, from enquiry to action, without channel drop-offs.
</p> */}

                    <p className="block max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
                      Keep every customer step connected, from enquiry to action, without channel drop-offs. Automate chats, support, and customer journeys with{" "}
                      <span className="whitespace-nowrap">WhatsApp Business API.</span>
                    </p>
                  </div>

              {/* Hero stats */}
              <div className="mt-2 grid w-full max-w-[640px] grid-cols-2 gap-3.5 max-md:gap-2 max-sm:grid-cols-1">
                {[
                  { value: "5M+", label: "Users Engaged", color: "#059669" },
                  { value: "3M+", label: "Citizens Served Last Year", color: "#059669" },
                  { value: "95%", label: "Message Delivery", color: "#059669" },
                  { value: "3X", label: "Faster Response", color: "#059669" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex min-h-[62px] w-full flex-col items-start justify-center gap-1.5 rounded-[8px] border border-white/15 bg-transparent pl-7 pr-2 py-2.5 max-sm:items-center"
                  >
                    <span
                      className="mt-1 text-[2.15rem] font-extrabold leading-none"
                      style={{ color: s.color }}
                    >
                      {s.value}
                    </span>
                    <span className="min-h-[2.1em] !text-[1.06rem] font-medium leading-tight text-[#5B667A] xl:!text-[1.14rem] max-md:!text-[0.98rem]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 max-lg:justify-center max-sm:flex-col">
                {/* BUTTON 1 */}
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

                {/* BUTTON 2 */}
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
              </div>
            </div>

            {/* Right Hero Images - Animated feature section */}
            <div className="relative flex min-h-[620px] w-full items-center justify-center max-lg:min-h-[560px] max-md:min-h-[480px] max-sm:min-h-[420px]">
              <AnimatedFeatureSection />
            </div>
            {/* legacy hero visual removed — replaced by AnimatedFeatureSection */}
            {false && (
            <div className="relative flex min-h-[620px] w-full items-center justify-center">
              {/* Main Big Image */}
              <img
                src="/assets/images/1 (1).png"
                alt="WhatsApp hero visual"
                className="absolute max-w-none object-contain"
                style={{
                  width: "650px",
                  minWidth: "800px",
                  height: "auto",
                  top: "30px",
                  left: "30px",
                  zIndex: 2,
                  transform: "scale(1.15)",
                  transformOrigin: "center",
                }}
              />

              <svg
                aria-hidden="true"
                className="absolute max-w-none overflow-hidden"
                viewBox="0 0 4046 2832"
                style={{
                  width: "650px",
                  minWidth: "800px",
                  height: "auto",
                  top: "30px",
                  left: "30px",
                  zIndex: 4,
                  transform: "scale(1.15)",
                  transformOrigin: "center",
                  pointerEvents: "none",
                }}
              >
                <defs>
                  <radialGradient id="whatsappHeroPulseGradient" cx="38%" cy="34%" r="65%">
                    <stop offset="0%" stopColor="#F0FFF6" />
                    <stop offset="42%" stopColor="#44FF99" />
                    <stop offset="100%" stopColor="#25D366" />
                  </radialGradient>

                  <filter id="whatsappHeroPulseGlow" x="-180%" y="-180%" width="460%" height="460%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feColorMatrix
                      in="blur"
                      type="matrix"
                      values="0 0 0 0 0.08 0 0 0 0 0.85 0 0 0 0 0.36 0 0 0 0.7 0"
                      result="greenBlur"
                    />
                    <feMerge>
                      <feMergeNode in="greenBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <path
                    id="whatsappHeroPulsePath"
                    d="M1810 260 L1810 160 Q1810 118 1852 118 C2130 118 2350 130 2530 184 C2350 130 2130 118 1852 118 Q1810 118 1810 160 L1810 760 Q1810 800 1770 800 L70 800 Q18 800 18 852 L18 1180 Q18 1228 66 1228 L490 1228 Q540 1228 540 1278 L540 2028 Q540 2078 590 2078 L742 2078 Q792 2078 792 2128 L792 2470 Q792 2670 992 2670 L3588 2670 Q3638 2670 3638 2620 L3638 1512 Q3638 1462 3588 1462 L3020 1462"
                    fill="none"
                  />

                  <mask
                    id="whatsappHeroPulseVisibleMask"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="4046"
                    height="2832"
                  >
                    <path
                      d="M2530 184 C2350 130 2130 118 1852 118 Q1810 118 1810 160 L1810 260"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="96"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M70 800 Q18 800 18 852 L18 1180 Q18 1228 66 1228 L490 1228 Q540 1228 540 1278 L540 1480"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="96"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M540 2028 Q540 2078 590 2078 L742 2078 Q792 2078 792 2128 L792 2470 Q792 2670 992 2670 L3588 2670 Q3638 2670 3638 2620 L3638 1512 Q3638 1462 3588 1462 L3020 1462"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="96"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </mask>
                </defs>

                <g filter="url(#whatsappHeroPulseGlow)">
                  <animateMotion dur="9s" repeatCount="indefinite" rotate="0">
                    <mpath href="#whatsappHeroPulsePath" />
                  </animateMotion>
                  <circle r="34" fill="#25D366" opacity="0.18" />
                  <circle r="24" fill="#25D366" opacity="0.36" />
                  <circle r="16" fill="#13C65B" />
                  <circle r="9" fill="url(#whatsappHeroPulseGradient)" />
                  <circle r="4" fill="#FFFFFF" opacity="0.92" />
                </g>
              </svg>

              <div
                className="whatsapp-logo-pulse absolute"
                style={{
                  width: "80px",
                  height: "80px",
                  top: "0px",
                  left: "230px",
                  zIndex: 5,
                }}
              >
                <span className="pulse-circle pulse-1"></span>
                <span className="pulse-circle pulse-2"></span>
                <span className="pulse-circle pulse-3"></span>

                <img
                  src="/assets/images/ki.png"
                  alt="WhatsApp"
                  className="relative z-10 h-full w-full max-w-none object-contain"
                />
              </div>
              <style>
                {`
    .whatsapp-logo-pulse {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      isolation: isolate;
      overflow: visible;
    }

    .whatsapp-logo-pulse .pulse-circle {
      position: absolute;
      inset: -8px;
      border-radius: 999px;
      background: rgba(37, 211, 102, 0.22);
      border: 1px solid rgba(37, 211, 102, 0.18);
      z-index: 1;
      animation: whatsappLogoPulse 2.7s ease-out infinite;
      filter: blur(0.2px);
    }

    .whatsapp-logo-pulse .pulse-1 {
      animation-delay: 0s;
      background: rgba(37, 211, 102, 0.28);
    }

    .whatsapp-logo-pulse .pulse-2 {
      animation-delay: 0.9s;
      background: rgba(37, 211, 102, 0.20);
    }

    .whatsapp-logo-pulse .pulse-3 {
      animation-delay: 1.8s;
      background: rgba(37, 211, 102, 0.14);
    }

    .whatsapp-logo-pulse img {
      position: relative;
      z-index: 5;
      filter: drop-shadow(0 10px 20px rgba(37, 211, 102, 0.25));
    }

    @keyframes whatsappLogoPulse {
      0% {
        transform: scale(0.7);
        opacity: 0.8;
      }

      45% {
        opacity: 0.38;
      }

      100% {
        transform: scale(2.05);
        opacity: 0;
      }
    }
  `}
              </style>
              {/* Small Image 2 */}
            </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== Tagline sitting ON the Section 1 / Section 2 boundary ===== */}
      <div className="relative z-20 h-0">
        <p className="dancing-script-regular absolute left-1/2 top-0 w-full max-w-none -translate-x-1/2 -translate-y-1/2 px-4 text-center !text-[1.15rem] !leading-[1.1] text-[#B8BEC9] opacity-60 md:whitespace-nowrap xl:!text-[1.3rem] max-md:!text-[1rem]">
          Your customers already use WhatsApp daily. The smartest businesses meet them there.
        </p>
      </div>


      {/* ================= SECTION 3 ================= */}
      <section
        ref={omnichannelSectionRef}
        className="relative min-h-screen bg-white pt-[100px] pb-[90px]"
      >
        <div className="container relative z-10">
          <h2 className="text-center text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
            When Conversations Become{" "}
            <span className="text-green-600">Omnichannel Experiences</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
            It&apos;s not just about sending messages anymore. It&apos;s about creating seamless, real-time conversations across channels,
            <br />
            where <span className="font-bold">WhatsApp</span> becomes the center of your customer experience.
          </p>

        <div className="mx-auto mt-10 grid w-full max-w-[1320px] grid-cols-1 items-start justify-items-center gap-x-5 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {omnichannelCards.map((card) => (
             <div
  key={card.number}
  className="group relative mx-auto h-[550px] w-full max-w-[420px] [perspective:1600px]"
>
                <div className="relative h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div
  className="absolute inset-0 overflow-hidden rounded-[22px] border border-white/20 bg-cover bg-center p-6 [backface-visibility:hidden]"
  style={{ backgroundImage: 'url("/assets/images/download%20(1).jpeg")' }}
>
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mx-auto flex min-h-[56px] w-full max-w-[340px] items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border bg-white text-[1.45rem] font-extrabold leading-none border-white/40 text-[#0F172A]">
                      {card.number}
                    </div>
                    <h3
                      className="min-w-0 flex-1 whitespace-nowrap font-extrabold leading-tight tracking-tight !text-[28px] text-white [&_*]:text-white"
                      style={{ color: "#FFFFFF" }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  <p className="mx-auto mt-4 w-full max-w-[340px] translate-x-2 text-[clamp(0.6rem,0.68vw,0.68rem)] font-medium leading-snug text-white">
                    {card.subtitle}
                  </p>

                  <motion.div
                    initial="hidden"
                    animate={omnichannelFlowStarted ? "show" : "hidden"}
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.8,
                        },
                      },
                    }}
                    className="mx-auto mt-2.5 flex w-full max-w-[340px] flex-col items-center"
                  >
                    {card.steps.map(({ icon: Icon, label, text }, index, items) => (
                      <React.Fragment key={label}>
                        <motion.div
                          variants={{
                            hidden: { opacity: 0, y: 14 },
                            show: { opacity: 1, y: 0 },
                          }}
                          transition={{
                            duration: 0.7,
                            ease: "easeOut",
                          }}
                          className="flex w-full items-center gap-3 rounded-[8px] border border-white/40 px-3 py-2 text-[#0F172A] bg-white"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#F1F5F9] text-[#0F172A]">
                            <Icon className="h-[18px] w-[18px]" strokeWidth={2.35} />
                          </div>
                          <p className="!mb-0 !text-[clamp(0.68rem,0.78vw,0.78rem)] font-semibold leading-[1.2] text-[#0F172A]">
                            {text}
                          </p>
                        </motion.div>
                        {index < items.length - 1 && (
                          <motion.div
                            variants={{
                              hidden: { opacity: 0, y: 10 },
                              show: { opacity: 1, y: 0 },
                            }}
                            transition={{
                              duration: 0.45,
                              ease: "easeOut",
                            }}
                            className="flex items-center justify-center text-white/70 h-6"
                          >
                            <svg
                              aria-hidden="true"
                              className="h-full w-7 overflow-visible"
                              viewBox="0 0 28 48"
                              fill="none"
                            >
                              <path
                                d="M14 2V42M14 42L5 33M14 42L23 33"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        )}
                      </React.Fragment>
                    ))}
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    animate={omnichannelFlowStarted ? "show" : "hidden"}
                    variants={{
                      hidden: { opacity: 0, x: 70 },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                      delay: 4.4,
                    }}
                    className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[18px] border border-white/30 px-5 py-3.5 text-center text-[clamp(0.9rem,1.15vw,1.08rem)] font-normal leading-none bg-white text-[#0F172A] mt-6"
                  >
                    <span className="absolute left-0 top-0 h-full w-4 rounded-r-[14px] bg-[linear-gradient(180deg,#16A34A,#0B7A38)]" />
                    <span className="relative block w-full text-center tracking-tight">{card.cta}</span>
                  </motion.div>
                </div>
                </div>

                {/* BACK — flip reveals the hover image */}
                <div className="absolute inset-0 overflow-hidden rounded-[22px] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={
                      card.number === "01"
                        ? "/assets/images/tq.png"
                        : card.number === "02"
                        ? "/assets/images/rq.png"
                        : card.number === "03"
                        ? "/assets/images/sq.png"
                        : card.number === "04"
                        ? "/assets/images/q.png" 
                        : card.number === "05"
                        ? "/assets/images/uq.png"
                        : "/assets/images/uq.png"
                    }
                    alt=""
                    className={`h-full w-full ${card.number === "04" ? "object-contain" : "object-cover"}`}
                  />
                </div>
                </div>
              </div>
            ))}

            {/* 6th CTA Card */}
            <div
              className="relative mx-auto h-[550px] w-full max-w-[420px] overflow-hidden rounded-[22px] border border-[rgba(56,189,248,0.45)] bg-[radial-gradient(circle_at_18%_10%,rgba(56,189,248,0.22),transparent_30%),radial-gradient(circle_at_86%_8%,rgba(37,99,235,0.18),transparent_24%),linear-gradient(145deg,#020617,#071A3D_48%,#0B1F4D)]"
            >
              {/* Blur blobs */}
              <div className="pointer-events-none absolute -left-16 top-16 h-64 w-64 rounded-full bg-[rgba(37,99,235,0.18)] blur-3xl" />
              <div className="pointer-events-none absolute -right-16 bottom-16 h-64 w-64 rounded-full bg-[rgba(56,189,248,0.20)] blur-3xl" />
              <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[rgba(248,250,252,0.14)] blur-2xl" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-8">
                {/* Glowing icon circle */}
                <div
                  className="flex h-[120px] w-[120px] items-center justify-center rounded-full border border-[rgba(56,189,248,0.45)] bg-[rgba(37,99,235,0.18)] backdrop-blur-xl"
                  style={{
                    boxShadow: "0 0 40px rgba(56,189,248,0.34), 0 0 80px rgba(37,99,235,0.35), inset 0 0 20px rgba(255,255,255,0.22)",
                  }}
                >
                  <Zap className="h-14 w-14 text-[#38BDF8]" strokeWidth={2.5} />
                </div>

                {/* Heading */}
                <h3 className="text-center text-[2rem] font-extrabold leading-tight tracking-tight text-white">
                  Ready to Transform?
                </h3>

                {/* Button */}
                <Link
                  to="/book-demo"
                  className="w-full rounded-[16px] border border-[rgba(56,189,248,0.45)] bg-[rgba(37,99,235,0.18)] px-6 py-4 text-center text-[1.05rem] font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-[rgba(37,99,235,0.26)]"
                  style={{
                    boxShadow: "0 8px 28px rgba(37,99,235,0.35), inset 0 0 0 1px rgba(56,189,248,0.45)",
                  }}
                >
                  Book a Demo
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== Tagline sitting ON the Section 2 / Section 3 boundary ===== */}
      <div className="relative z-20 h-0">
        <p className="dancing-script-regular absolute left-1/2 top-0 w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 px-4 text-center !text-[1.15rem] !leading-[1.1] text-[#B8BEC9] opacity-60 xl:!text-[1.3rem] max-md:!text-[1rem]">
          To deliver this experience at scale, businesses need more than a messaging app. They need the WhatsApp Business API
        </p>
      </div>

      {/* ================= SECTION 4 ================= */}
  <section className="relative bg-[#fafcff] px-4 pt-20 pb-0">
  <div className="container relative z-10 text-center">

    <WhatsAppApiPinnedShowcase
      cards={apiFeatureCards}
      header={
        <>
         <h2 className="mx-auto w-full max-w-[1500px] whitespace-nowrap text-center text-[clamp(2rem,4.2vw,4.2rem)] font-extrabold leading-[1.08] tracking-tight text-black">
  <span className="text-green-600">WhatsApp Business API </span> - The Engine Behind Scalable Conversation
</h2>

          <p className="mx-auto mt-2 max-w-[920px] !text-[1.12rem] font-bold leading-[1.7] text-black xl:!text-[1.2rem] max-md:!text-[1rem]">
            Extend WhatsApp into a fully integrated business system - enabling voice, video, payments, forms and interactive workflows through powerful APIs.
          </p>
        </>
      }
    />
  </div>
</section>

      {/* ===== Tagline sitting ON the Section 3 / Section 4 boundary ===== */}
      <div className="relative z-20 h-0">
        <p className="dancing-script-regular absolute left-1/2 top-0 w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 px-4 text-center !text-[1.15rem] !leading-[1.1] text-[#B8BEC9] opacity-60 xl:!text-[1.3rem] max-md:!text-[1rem]">
          But APIs work best when everything is connected through one platform. That&rsquo;s where Vertex Suite comes in.
        </p>
      </div>

      <section
        ref={shiballFlowRef}
        className="relative overflow-hidden bg-white px-4 py-24 text-center"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <h2 className="mx-auto max-w-[980px] font-extrabold leading-[1.12] tracking-tight text-[#07122B]">
            <span className="!font-extrabold">Turn </span>
            <span className="text-green-600">WhatsApp Business API</span>{" "}
            <span className="!font-extrabold">Into a Complete System with</span>{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
              Vertex Suite
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[1100px] !text-[1.12rem] font-medium leading-[1.75] text-[#5B6B84] xl:!text-[1.2rem] max-md:!text-[1rem]">
            With Vertex Suite, manage integrations, conversations, automation and performance, all in one connected system.
            <br />
            Your CRM, website, apps and backend systems, all connected to WhatsApp through one platform VERTEX SUITE.
          </p>

          <div className="mx-auto mt-14 grid w-full grid-cols-1 gap-4 lg:grid-cols-4">
            {[
              { n: "1", label: "Business API Integration" },
              { n: "2", label: "Vertex Suite Platform" },
              { n: "3", label: "WhatsApp Business API" },
              { n: "4", label: "Customer Conversation" },
            ].map(({ n, label }, index) => {
              const column = systemFlowColumns[index];

              return (
                <div
                  key={n}
                  className="relative h-[580px] w-full [perspective:1600px]"
                >
                  <motion.div
                    className="relative h-full w-full [transform-style:preserve-3d]"
                    initial={{ rotateY: 0, scale: 1 }}
                    animate={{
                      rotateY: shiballCardsFlipped ? 180 : 0,
                    }}
                    transition={{
                      rotateY: {
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: shiballCardsFlipped ? index * 1.4 : 0,
                      },
                    }}
                  >
                    {/* FRONT — green glass card */}
                    <article className="absolute inset-0 flex flex-col items-center justify-center gap-2 overflow-hidden rounded-[26px] border border-white/40 bg-[linear-gradient(135deg,#C3DEBF,#9FC59F,#79A97B)] shadow-[0_20px_50px_rgba(6,35,27,0.25)] ring-1 ring-inset ring-white/20 [backface-visibility:hidden]">
                      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent)]" />
                      <span className="relative -mt-24 text-[clamp(1.05rem,1.5vw,1.45rem)] font-black uppercase tracking-[0.3em] text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
                        Step
                      </span>
                      <span className="relative -mt-1 text-[clamp(5rem,10vw,7.5rem)] font-black leading-none text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
                        {n}
                      </span>
                      <span
                        className="relative mt-16 px-4 text-center text-[clamp(1.05rem,1.5vw,1.45rem)] font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                      >
                        {label}
                      </span>
                    </article>

                    {/* BACK — white system card (auto-flips in place) */}
                    <div className="absolute inset-0 overflow-hidden rounded-[16px] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      {column && <SystemColumnCard column={column} bgClass={index === 0 ? "bg-[#EEE2C8]" : index === 1 ? "bg-[#E1EFFF]" : index === 2 ? "bg-[#EAFBF1]" : "bg-[#E3E9FF]"} borderColor={index === 0 ? "#C99A3F" : index === 1 ? "#3B8CFF" : index === 2 ? "#00A63E" : "#94A6D6"} borderWidth={1} />}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Tagline sitting ON the Section 4 / Section 5 boundary ===== */}
      <div className="relative z-20 h-0">
        <p className="dancing-script-regular absolute left-1/2 top-0 w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 px-4 text-center !text-[1.15rem] !leading-[1.1] text-[#B8BEC9] opacity-60 xl:!text-[1.3rem] max-md:!text-[1rem]">
          A connected system is only part of the story, WhatsApp templates bring every customer experience to life.
        </p>
      </div>

      <WhatsAppWorkflowCard />

      <WhatsAppFaqSection />

    </main>
  );
}

const whatsappFaqs = [
  {
    q: "Do I need approval to use WhatsApp Business API?",
    a: "Yes. WhatsApp requires businesses to apply and get approval before using the API. Vertex Suite helps streamline this entire process.",
  },
  {
    q: "Can I send marketing messages on WhatsApp?",
    a: "Yes, but only to users who have opted in. Messages must follow WhatsApp’s guidelines and approved templates.",
  },
  {
    q: "How is this different from the WhatsApp Business App?",
    a: "The app is designed for small-scale manual use. The API allows automation, integrations, and high-volume communication for growing businesses.",
  },
  {
    q: "How long does it take to get started?",
    a: "With Vertex Suite, businesses can get onboarded and start messaging within a few days, depending on approval timelines.",
  },
  {
    q: "Can I integrate this with my existing systems?",
    a: "Yes. Vertex Suite connects with CRMs, apps, websites, and backend systems to create a unified communication flow.",
  },
  {
    q: "Is customer data secure?",
    a: "Yes. WhatsApp uses end-to-end encryption, and Vertex Suite ensures secure handling of data and workflows.",
  },
  {
    q: "Can multiple team members handle conversations?",
    a: "Yes. Vertex Suite supports multi-agent access with roles, permissions, and collaboration features.",
  },
  {
    q: "Is this suitable for government or enterprise use?",
    a: "Yes. Vertex Suite is designed to support large-scale communication needs across enterprises, PSUs, and government services.",
  },
];

function WhatsAppFaqSection() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <section className="relative overflow-hidden bg-white pt-[90px] pb-[90px] max-md:pt-[35px] max-md:pb-[60px]">
      <div className="mx-auto w-full max-w-[1450px] px-2">
        {/* Heading */}
        <div className="mx-auto mb-8 max-w-[1200px] text-center">
          <h1 className="text-center text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.04em] text-[#111827]">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-4 max-w-none text-center !text-[1.12rem] font-medium leading-[1.75] text-[#5B6B84] md:whitespace-nowrap xl:!text-[1.2rem] max-md:!text-[1rem]">
            Can’t find what you’re looking for? Our team is here to help you understand WhatsApp Business API and Vertex Suite better.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-1">
          {whatsappFaqs.map((item, index) => {
            const isOpen = activeFaq === index;

            return (
              <div
                key={index}
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
                  {/* Right ke close button ko balance karne ke liye spacer */}
                  {isOpen && (
                    <span
                      aria-hidden="true"
                      className="h-10 w-10 shrink-0 max-md:h-9 max-md:w-9"
                    />
                  )}

                  <span
                    className={`flex-1 text-[1.05rem] font-medium text-[#1F2937] max-md:text-[0.95rem] ${
                      isOpen ? "text-center" : "text-left"
                    }`}
                  >
                    {item.q}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#111827] shadow-[0_8px_22px_rgba(15,23,42,0.08)] transition-all duration-300 max-md:h-9 max-md:w-9">
                    {isOpen ? <X size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="relative z-10 px-8 pb-[26px] max-md:px-5">
                    <p className="mx-auto !mb-0 max-w-[1050px] text-center text-[0.95rem] leading-[1.6] text-[#4B5563] max-md:text-[0.86rem]">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
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
