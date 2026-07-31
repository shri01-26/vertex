"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "../../components/Reveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "../../components/AppLink";
import AnimatedFeatureSection from "../../components/AnimatedFeatureSection/AnimatedFeatureSection";
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarDays,
  ClipboardCheck,
  CreditCard,
  Globe2,
  Image as ImageIcon,
  Megaphone,
  MessageCircle,
  MessageSquare,
  MousePointerClick,
  Plus,
  Puzzle,
  RotateCcw,
  Search,
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
        <Reveal>
          <h2 className="mx-auto max-w-[1320px] text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-[1.15] tracking-tight text-[#111827]">
            Explore Pre-built <span className="text-green-600">WhatsApp</span> Templates for Every Business Scenario
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-2 max-w-[920px] !text-[1.12rem] font-bold leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
             Pick the right message format for each conversation, and deliver clear, consistent messages on WhatsApp.
            </p>
        </Reveal>
      </section>

      <section
        className="relative min-h-screen overflow-hidden bg-[#fafcff] px-4 py-8"
      >
        <div className="group/cards mx-auto grid w-full max-w-[1520px] gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {cardData.map((card, cardIndex) => (
            <Reveal
              key={card.title}
              /* Four-up row: left pair from the left, right pair from the right. */
              direction={cardIndex % 4 < 2 ? "left" : "right"}
              delay={(cardIndex % 4) * 0.09}
              duration={0.6}
              className="group/card relative min-w-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/cards:blur-[6px] group-hover/cards:scale-[0.96] group-hover/cards:opacity-70 hover:z-10 hover:!scale-[1.06] hover:!opacity-100 hover:!blur-none hover:-translate-y-2"
            >
              <WorkflowCard title={card.title} image={card.image} />
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-[1520px] items-center justify-between gap-5 rounded-[16px] border border-[#E7ECF5] bg-white px-8 py-4 text-center shadow-[0_14px_38px_rgba(15,23,42,0.05)] max-md:flex-col max-md:px-5">
          <h4 className="!mb-0 text-[clamp(1rem,1.7vw,1.3rem)] font-semibold leading-tight tracking-tight text-[#0A0A0A] max-md:!text-center md:!text-left">
            Get Your Business Live on <span className="text-green-600">WhatsApp</span>
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
                  <span>Book a Demo</span>
                </span>
                <span className="roll-content-hover">
                  <CalendarDays size={26} strokeWidth={1.6} />
                  <span>Book a Demo</span>
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
  const cardBorder = `${borderWidth}px solid ${borderColor}`;

  return (
    <article
      style={{
        border: cardBorder,
      }}
      className={`h-full min-h-[520px] rounded-[16px] ${bgClass} px-3 pb-5 pt-5 text-left shadow-[0_10px_24px_rgba(34,197,94,0.08)]`}
    >
      <div
        className={`flex flex-col items-center justify-start gap-2 text-[#2F8F79] ${
          column.key === "conversation" ? "mb-4" : "h-[160px]"
        }`}
      >
        <span
          style={{ backgroundColor: "#FFFFFF" }}
          className="-mt-8 flex h-[88px] w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-[#2F8F79] shadow-sm"
        >
          <img
            src={
              column.key === "business"
                ? "/assets/images/BS.webp"
                : column.key === "whatsapp"
                ? "/assets/images/whatsapp.webp"
                : column.key === "conversation"
                ? "/assets/images/C4.webp"
                : "/assets/images/logo.png"
            }
            alt={
              column.key === "business"
                ? "Business Systems"
                : column.key === "whatsapp"
                ? "WhatsApp Business API"
                : column.key === "conversation"
                ? "Customer Conversation"
                : "Vertex Suite"
            }
            className={column.key === "platform" ? "h-14 w-14 object-contain" : "h-16 w-16 object-contain"}
          />
        </span>
        <div className="text-center">
          <h4
            ref={(el) => {
              if (!el) return;
              if (column.key === "business")
                el.style.setProperty("color", "#00A63E", "important");
              else if (column.key === "platform")
                el.style.setProperty("color", "#3B8CFF", "important");
              else if (column.key === "whatsapp")
                el.style.setProperty("color", "#00A63E", "important");
              else if (column.key === "conversation")
                el.style.setProperty("color", "#3B8CFF", "important");
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
              className="mb-0 mt-0 text-center text-[0.74rem]! font-bold leading-tight text-[#059670]"
            >
              {column.subtitle}
            </p>
          )}
        </div>
      </div>

      <div className={`grid ${column.key === "conversation" ? "gap-1" : "gap-3"} ${column.cols === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
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
                  ? { border: "1px solid #00A63E" }
                  : column.key === "platform"
                  ? { border: "1px solid #3B8CFF" }
                  : column.key === "whatsapp"
                  ? { border: "1px solid #00A63E" }
                  : column.key === "conversation"
                  ? { border: "1px solid #3B8CFF" }
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
                    ? { color: "#00A63E" }
                    : column.key === "platform"
                    ? { color: "#3B8CFF" }
                    : column.key === "whatsapp"
                    ? { color: "#00A63E" }
                    : column.key === "conversation"
                    ? { color: "#3B8CFF" }
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

    // Keep the pinned two-column experience for roomy laptop screens only.
    // At tablet and compact-laptop widths the stacked cards are easier to read
    // and avoid squeezing the artwork/text into narrow columns.
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
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
  className="relative mt-0 w-full overflow-hidden bg-[#fafcff] xl:min-h-[calc(100vh-72px)]"
  id="whatsapp-api-pinned-showcase"
>
      {/* soft background */}

      {/* HEADING (pinned ke saath fixed rehta hai) */}
      {header ? (
        <div className="relative z-20 mx-auto w-full max-w-[1100px] px-4 pt-6 text-center xl:pt-8">
          {header}
        </div>
      ) : null}

      {/* DESKTOP PINNED LAYOUT */}
      <div className="relative mx-auto hidden w-full max-w-[1280px] items-start gap-10 px-6 pt-10 pb-16 xl:flex 2xl:gap-16">
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
        <div className="relative h-[600px] w-1/2 overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,#000_7%,#000_80%,transparent_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,#000_7%,#000_80%,transparent_100%)] 2xl:translate-x-10">
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
      <div className="relative mx-auto flex w-full max-w-[900px] flex-col gap-8 px-4 pt-8 pb-10 sm:px-6 md:gap-10 xl:hidden">
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

  const mobileScrollRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleMobileScroll = (e) => {
    const el = e.currentTarget;
    const first = el.children[0];
    if (!first) return;
    const gap = parseFloat(window.getComputedStyle(el).columnGap || "0") || 0;
    const slideW = first.getBoundingClientRect().width + gap;
    if (slideW <= 0) return;
    setActiveSlide(Math.round(el.scrollLeft / slideW));
  };

  const goToSlide = (i) => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const first = el.children[0];
    if (!first) return;
    const gap = parseFloat(window.getComputedStyle(el).columnGap || "0") || 0;
    const slideW = first.getBoundingClientRect().width + gap;
    el.scrollTo({ left: i * slideW, behavior: "smooth" });
  };

  const shiballFlowRef = useRef(null);
  const shiballAnimationHasPlayedRef = useRef(false);
  const [shiballCardsFlipped, setShiballCardsFlipped] = useState(false);

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
      subtitle: "Customers can discover you anywhere and continue the conversation on WhatsApp.",
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
          Talk <span className="text-green-600">Beyond</span> Text
        </>
      ),
    description:
  "Customers don’t just type anymore.\n\nThey can connect instantly through voice or video interactions,\nmaking support, consultation, and communication more human and direct.",
think: "support call inside chat",
image: "/assets/images/first.webp",
imageAlt: "WhatsApp voice and video calling experience",
    },
    {
      number: "02",
      title: (
        <>
          Pay <span className="text-green-600">Without Leaving</span>
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
          <span className="text-green-600">Fill, Submit, Complete</span>
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
          <span className="text-green-600">Beyond the Chat</span>
        </>
      ),
      description:
        "Some journeys need more than messages.\n\nOpen websites, storefronts, booking systems, or service portals directly inside WhatsApp - without forcing customers to switch apps.",
      think: "No app switching",
      image: "/assets/images/medicare%20(1).webp",
      imageAlt: "WhatsApp interactive shopping workflow",
    },
    {
      number: "05",
      title: (
        <>
          Conversations Powered by AI
          <br />
          <span className="text-green-600">Inside WhatsApp</span>
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
      cols: 1,
      items: businessSystemsFlow,
    },
    {
      key: "platform",
      title: "Vertex Suite Platform",
      subtitle: "(Automation + Campaigns + Routing + Analytics)",
      cols: 2,
      items: vertexPlatformFlow,
    },
    {
      key: "whatsapp",
      title: "WhatsApp Business API",
      cols: 2,
      items: whatsappApiFlow,
    },
    {
      key: "conversation",
      title: "Customer Conversation",
      cols: 1,
      items: customerConversationFlow,
    },
  ];

  return (
    <>
    <main className="whatsapp-business-api-page w-full overflow-x-clip bg-white">
      {/* ================= SECTION 1: HERO ================= */}
      <section
        className="relative overflow-hidden bg-[#f7faf7] pb-[70px] pt-[35px] xl:min-h-[850px] xl:pt-[90px] max-md:pb-[50px]"
      >
        <div className="container relative z-10">
          <div className="grid grid-cols-1 items-center gap-6 text-left md:gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:gap-10 2xl:gap-12">
            {/* Left Content Column */}
            <div className="mx-auto flex w-full max-w-[760px] flex-col items-start gap-7 max-md:order-2 max-md:gap-5 xl:mx-0 xl:max-w-[720px]">
              <Reveal onMount delay={0} className="inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/50 bg-white/25 px-3 py-2 text-[0.95rem] font-semibold text-green-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_28px_rgba(15,23,42,0.10)] backdrop-blur-lg ring-1 ring-white/30">
                <img
                  src="/assets/images/whatsapp-icon.png"
                  alt="WhatsApp"
                  className="h-5 w-5 object-contain"
                />
                WhatsApp Business API
              </Reveal>

              <div className="mt-6 flex w-full flex-col gap-1 max-md:mt-3">
                <h1 className="mb-0 flex w-full items-center justify-start pt-0 text-left !text-[clamp(2.25rem,4vw,2.986rem)] font-extrabold leading-[1.05] tracking-tight text-[#292929] xl:whitespace-nowrap">
                  <span className="font-extrabold" style={{ fontFamily: '"Manrope", sans-serif' }}>
                    C{twText}
                  </span>
                  <span
                    aria-hidden="true"
                    className="tw-caret ml-1 inline-block w-[3px] self-stretch rounded-full bg-[#292929] md:w-[4px]"
                  />
                </h1>

                <Reveal onMount delay={0.15}>
                  <h1 className="mb-0 w-full text-left !text-[clamp(2.25rem,4vw,2.986rem)] font-extrabold leading-[1.05] tracking-tight text-[#292929] xl:whitespace-nowrap">
                    That Convert on <span className="text-green-600">WhatsApp</span>
                  </h1>
                </Reveal>
                  </div>
                  <Reveal onMount delay={0.3} className="flex max-w-[690px] flex-col gap-1 text-left">
                    <p className="block max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
                      Keep every customer step connected, from enquiry to action, without channel drop-offs. Automate chats, support, and customer journeys with{" "}
                      <span className="whitespace-nowrap">WhatsApp Business API.</span>
                    </p>
                  </Reveal>

              {/* Hero stats */}
              <div className="mt-2 grid w-full max-w-[640px] grid-cols-2 gap-3.5 max-md:gap-2">
                {[
                  { value: "5M+", label: "Users Engaged", color: "#059669" },
                  { value: "3M+", label: "Citizens Served Last Year", color: "#059669" },
                  { value: "95%", label: "Message Delivery", color: "#059669" },
                  { value: "3X", label: "Faster Response", color: "#059669" },
                ].map((s, index) => (
                  <Reveal
                    key={s.label}
                    onMount
                    direction={index % 2 === 0 ? "left" : "right"}
                    delay={0.45 + index * 0.08}
                    duration={0.55}
                    className="flex min-h-[96px] w-full flex-col items-start justify-center gap-1.5 rounded-[8px] border border-white/15 bg-transparent pl-7 pr-2 max-sm:items-center max-sm:px-2"
                  >
                    <div className="flex translate-y-2 flex-col gap-1.5 max-sm:items-center max-sm:text-center">
                      <span
                        className="text-[2.15rem] font-extrabold leading-none"
                        style={{ color: s.color }}
                      >
                        {s.value}
                      </span>
                      <span className="min-h-[2.1em] !text-[1.06rem] font-medium leading-tight text-[#5B667A] xl:!text-[1.14rem] max-md:!text-[0.98rem]">
                        {s.label}
                      </span>
                    </div>
                  </Reveal>
                ))}
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
            </div>

            {/* Right Hero Images - Animated feature section */}
            <Reveal
              onMount
              delay={0.5}
              direction="right"
              duration={0.75}
              className="relative flex min-h-[420px] w-full items-center justify-center max-md:order-1 sm:min-h-[480px] md:min-h-[540px] xl:min-h-[620px]"
            >
              <AnimatedFeatureSection />
            </Reveal>
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

     


      {/* ================= SECTION 3 ================= */}
      <section
        className="relative min-h-screen bg-white px-4 pb-[90px] pt-[80px] md:px-6 md:pt-[100px]"
      >
        <div className="container relative z-10">
          <Reveal>
            <h2 className="text-center text-[clamp(2.05rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#111827]">
           <span className="text-green-600">Conversations</span> That Stay Fast, Connected, and Relevant
              
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-[1120px] text-center !text-[1.12rem] leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
             It’s not just about sending messages anymore. It’s about keeping every interaction connected through one omnichannel experience.
              
            </p>
          </Reveal>

        <div className="mx-auto mt-15 hidden w-full max-w-[1320px] grid-cols-1 items-start justify-items-center gap-x-5 gap-y-12 md:grid md:grid-cols-2 xl:grid-cols-3">
            {omnichannelCards.map((card) => (
              <div
                key={card.number}
                className="group relative mx-auto h-[550px] w-full max-w-[420px] [perspective:1600px]"
              >
                <div className="relative h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div
                    className="absolute inset-0 overflow-hidden rounded-[22px] border border-white/20 bg-cover bg-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]"
                    style={{ backgroundImage: 'url("/assets/images/download%20(1).jpeg")' }}
                  >
                    <div className="relative z-10 flex h-full flex-col">
                  <p className="mx-auto mt-1 w-full max-w-[340px] text-[clamp(0.95rem,1.05vw,1.05rem)] font-medium leading-relaxed text-white">
                    {card.subtitle}
                  </p>

                  <div className="mx-auto mt-8 flex w-full max-w-[340px] flex-col items-center">
                    {card.steps.map(({ icon: Icon, label, text }, index, items) => (
                      <React.Fragment key={label}>
                        <div className="flex w-full items-center gap-3 rounded-[8px] border border-white/40 bg-white px-3 py-2 text-[#0F172A]">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#F1F5F9] text-[#0F172A]">
                            <Icon className="h-[18px] w-[18px]" strokeWidth={2.35} />
                          </div>
                          <p className="!mb-0 !text-[clamp(0.82rem,0.92vw,0.92rem)] font-semibold leading-[1.3] text-[#0F172A]">
                            {text}
                          </p>
                        </div>
                        {index < items.length - 1 && (
                          <div className="flex h-10 items-center justify-center text-white/80">
                            <svg
                              aria-hidden="true"
                              className="h-full w-8 overflow-visible"
                              viewBox="0 0 28 48"
                              fill="none"
                            >
                              <path
                                d="M14 2V42M14 42L5 33M14 42L23 33"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="relative mx-auto mt-10 w-full max-w-[340px] overflow-hidden rounded-[18px] border border-white/30 bg-white px-5 py-3.5 text-center text-[clamp(0.9rem,1.15vw,1.08rem)] font-normal leading-none text-[#0F172A]">
                    <span className="absolute left-0 top-0 h-full w-4 rounded-r-[14px] bg-[linear-gradient(180deg,#16A34A,#0B7A38)]" />
                    <span className="relative block w-full text-center tracking-tight">{card.cta}</span>
                  </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 overflow-hidden rounded-[22px] [backface-visibility:hidden]">
                    <img
                      src={
                        card.number === "01"
                          ? "/assets/images/Group%2010.webp"
                          : card.number === "02"
                          ? "/assets/images/Group%2020.webp"
                          : card.number === "03"
                          ? "/assets/images/Group%2030.webp"
                          : card.number === "04"
                          ? "/assets/images/Group%2040.webp"
                          : "/assets/images/Group%2050.webp"
                      }
                      alt={card.title}
                      className={`h-full w-full ${card.number === "04" ? "object-contain" : "object-cover"}`}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* 6th CTA Card */}
            <Reveal
              direction="right"
              delay={0.1}
              duration={0.65}
              className="relative mx-auto h-[550px] w-full max-w-[420px] overflow-hidden rounded-[22px] border border-white/20 bg-cover bg-center"
              style={{ backgroundImage: 'url("/assets/images/download%20(1).jpeg")' }}
            >
              {/* Blur blob — soft warm highlight, no tint */}

              {/* Content */}
              <div className="relative z-10 h-full px-8">
                {/* Glowing icon circle */}
                <div
                  className="absolute left-1/2 top-[25%] flex h-[100px] w-[100px] -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(22,163,74,0.35)] bg-white"
                >
                  <Zap className="h-14 w-14 text-[#16A34A]" strokeWidth={2.5} />
                </div>

                {/* Heading */}
                <h3 className="absolute left-1/2 top-[55%] w-full -translate-x-1/2 -translate-y-1/2 text-center text-[2rem] font-extrabold leading-tight tracking-tight text-white">
                  Ready to Transform?
                </h3>

                {/* Button */}
                <Link
                  to="/book-demo"
                  className="roll-btn group absolute left-1/2 top-[66%] inline-flex -translate-x-1/2 items-center justify-center overflow-hidden rounded-[100px] border-2 border-green-600 bg-white px-7 py-2.5 text-[1rem] font-semibold !text-green-600 transition-all duration-300 hover:bg-green-600 hover:!text-green-600"
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
            </Reveal>

          </div>

          {/* MOBILE — horizontal scroll (image first, then back panel) */}
          <div className="md:hidden">
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {omnichannelCards.map((card) => {
                const imgSrc =
                  card.number === "01"
                    ? "/assets/images/Group%2010.webp"
                    : card.number === "02"
                    ? "/assets/images/Group%2020.webp"
                    : card.number === "03"
                    ? "/assets/images/Group%2030.webp"
                    : card.number === "04"
                    ? "/assets/images/Group%2040.webp"
                    : "/assets/images/Group%2050.webp";
                return (
                  <React.Fragment key={card.number}>
                    {/* Image panel */}
                    <div className="relative aspect-[1920/2520] w-[82vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-[22px]">
                      <img
                        src={imgSrc}
                        alt={card.title}
                        className={`h-full w-full ${card.number === "04" ? "object-contain" : "object-cover"}`}
                      />
                    </div>

                    {/* Back panel */}
                    <div
                      className="relative aspect-[1920/2520] w-[82vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-[22px] border border-white/20 bg-cover bg-center p-6"
                      style={{ backgroundImage: 'url("/assets/images/download%20(1).jpeg")' }}
                    >
                      <div className="relative z-10 flex h-full flex-col">
                        <p className="mx-auto mt-1 w-full max-w-[340px] text-[0.98rem] font-medium leading-relaxed text-white">
                          {card.subtitle}
                        </p>

                        <div className="mx-auto mt-6 flex w-full max-w-[340px] flex-col items-center">
                          {card.steps.map(({ icon: Icon, text }, index, items) => (
                            <React.Fragment key={text}>
                              <div className="flex w-full items-center gap-3 rounded-[8px] border border-white/40 bg-white px-3 py-2 text-[#0F172A]">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-[#F1F5F9] text-[#0F172A]">
                                  <Icon className="h-[18px] w-[18px]" strokeWidth={2.35} />
                                </div>
                                <p className="!mb-0 !text-[0.86rem] font-semibold leading-[1.3] text-[#0F172A]">
                                  {text}
                                </p>
                              </div>
                              {index < items.length - 1 && (
                                <div className="flex h-8 items-center justify-center text-white/80">
                                  <svg
                                    aria-hidden="true"
                                    className="h-full w-8 overflow-visible"
                                    viewBox="0 0 28 48"
                                    fill="none"
                                  >
                                    <path
                                      d="M14 2V42M14 42L5 33M14 42L23 33"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              )}
                            </React.Fragment>
                          ))}
                        </div>

                        <div className="relative mx-auto mt-auto w-full max-w-[340px] overflow-hidden rounded-[18px] border border-white/30 bg-white px-4 py-3 text-center text-[0.8rem] font-normal leading-none text-[#0F172A]">
                          <span className="absolute left-0 top-0 h-full w-4 rounded-r-[14px] bg-[linear-gradient(180deg,#16A34A,#0B7A38)]" />
                          <span className="relative block w-full text-center tracking-tight">
                            {card.cta}
                          </span>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}

              {/* CTA card */}
              <div
                className="relative aspect-[1920/2520] w-[82vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-[22px] border border-white/20 bg-cover bg-center"
                style={{ backgroundImage: 'url("/assets/images/download%20(1).jpeg")' }}
              >
                <div className="relative z-10 h-full px-8">
                  <div className="absolute left-1/2 top-[25%] flex h-[100px] w-[100px] -translate-x-1/2 items-center justify-center rounded-full border border-[rgba(22,163,74,0.35)] bg-white">
                    <Zap className="h-14 w-14 text-[#16A34A]" strokeWidth={2.5} />
                  </div>
                  <h3 className="absolute left-1/2 top-[55%] w-full -translate-x-1/2 -translate-y-1/2 text-center text-[2rem] font-extrabold leading-tight tracking-tight text-white">
                    Ready to Transform?
                  </h3>
                  <Link
                    to="/book-demo"
                    className="absolute left-1/2 top-[66%] inline-flex -translate-x-1/2 items-center justify-center overflow-hidden rounded-[100px] border-2 border-green-600 bg-white px-7 py-2.5 text-[1rem] font-semibold !text-green-600"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Swipe dots — windowed pager (edges fade out) */}
            {(() => {
              const total = omnichannelCards.length * 2 + 1;
              const DOT = 6;
              const GAP = 8;
              const STEP = DOT + GAP;
              const WINDOW = 4;
              const start = Math.max(0, Math.min(activeSlide - 1, total - WINDOW));
              const firstVisible = start - 1;
              return (
                <div className="mt-5 flex justify-center">
                  <div
                    className="overflow-hidden"
                    style={{ width: (WINDOW + 2) * STEP - GAP }}
                  >
                    <div
                      className="flex transition-transform duration-300 ease-out"
                      style={{ gap: GAP, transform: `translateX(${-firstVisible * STEP}px)` }}
                    >
                      {Array.from({ length: total }).map((_, i) => {
                        const inWindow = i >= start && i < start + WINDOW;
                        const isEdge = i === firstVisible || i === start + WINDOW;
                        const isActive = i === activeSlide;
                        return (
                          <button
                            key={i}
                            type="button"
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => goToSlide(i)}
                            style={{ width: DOT, height: DOT }}
                            className={`shrink-0 rounded-full transition-all duration-300 ${
                              isActive ? "bg-green-600" : "bg-slate-300"
                            } ${
                              inWindow
                                ? "scale-100 opacity-100"
                                : isEdge
                                ? "scale-[0.5] opacity-100"
                                : "scale-0 opacity-0"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4 ================= */}
  <section className="relative bg-[#fafcff] px-4 pt-20 pb-0">
  <div className="container relative z-10 text-center">

    <WhatsAppApiPinnedShowcase
      cards={apiFeatureCards}
      header={
        <>
          <Reveal>
            <h2 className="mx-auto w-full max-w-[1500px] text-center text-[clamp(2rem,4.2vw,4.2rem)] font-extrabold leading-[1.08] tracking-tight text-black 2xl:whitespace-nowrap">
              <span className="text-green-600">WhatsApp Business API </span> - The Engine Behind Scalable Conversation
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-2 max-w-[920px] !text-[1.12rem] font-bold leading-[1.7] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem]">
              Extend WhatsApp into a fully integrated business system - enabling voice, video, payments, forms and interactive workflows through powerful APIs.
            </p>
          </Reveal>
        </>
      }
    />
  </div>
</section>

    

      <section
        ref={shiballFlowRef}
        className="relative overflow-hidden bg-white px-4 py-24 text-center"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          <Reveal>
            <h2 className="mx-auto max-w-[980px] font-extrabold leading-[1.12] tracking-tight text-[#07122B]">
              <span className="!font-extrabold">Turn </span>
              <span className="text-green-600">WhatsApp Business API</span>{" "}
              <span className="!font-extrabold">into a Complete System with</span>{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] bg-clip-text text-transparent">
                Vertex Suite
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-7 max-w-[1100px] !text-[1.12rem] font-medium leading-[1.75] text-[#5B6B84] xl:!text-[1.2rem] max-md:!text-[1rem]">
              With Vertex Suite, manage integrations, conversations, automation and performance, all in one connected system.
              <br />
              Your CRM, website, apps and backend systems, all connected to WhatsApp through one platform VERTEX SUITE.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { n: "1", label: "Business API Integration" },
              { n: "2", label: "Vertex Suite Platform" },
              { n: "3", label: "WhatsApp Business API" },
              { n: "4", label: "Customer Conversation" },
            ].map(({ n, label }, index) => {
              const column = systemFlowColumns[index];

              return (
                /* Reveal wraps the perspective element rather than replacing it —
                   a transform on that node would flatten the card flip. */
                <Reveal
                  key={n}
                  direction={index < 2 ? "left" : "right"}
                  delay={index * 0.1}
                  duration={0.65}
                >
                <div
                  className="relative hidden h-[580px] w-full [perspective:1600px] md:block"
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
                      {column && <SystemColumnCard column={column} bgClass={index === 0 ? "bg-[#EAFBF1]" : index === 1 ? "bg-[#E1EFFF]" : index === 2 ? "bg-[#EAFBF1]" : "bg-[#E1EFFF]"} borderColor={index === 0 ? "#00A63E" : index === 1 ? "#3B8CFF" : index === 2 ? "#00A63E" : "#3B8CFF"} borderWidth={1} />}
                    </div>
                  </motion.div>
                </div>

                {/* MOBILE — show only the back (system) card, no flip */}
                <div className="pt-8 md:hidden">
                  {column && <SystemColumnCard column={column} bgClass={index === 0 ? "bg-[#EAFBF1]" : index === 1 ? "bg-[#E1EFFF]" : index === 2 ? "bg-[#EAFBF1]" : "bg-[#E1EFFF]"} borderColor={index === 0 ? "#00A63E" : index === 1 ? "#3B8CFF" : index === 2 ? "#00A63E" : "#3B8CFF"} borderWidth={1} />}
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

    

      <WhatsAppWorkflowCard />

      <WhatsAppFaqSection />

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
        <div className="mx-auto mb-16 max-w-[1200px] text-center">
          <Reveal>
           <h2 className="mx-auto max-w-[1320px] text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-[1.15] tracking-tight text-[#111827]">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-none text-center !text-[1.12rem] font-medium leading-[1.75] text-[#5B6B84] xl:whitespace-nowrap xl:!text-[1.2rem] max-md:!text-[1rem]">
              Can’t find what you’re looking for? Our team is here to help you understand WhatsApp Business API and Vertex Suite better.
            </p>
          </Reveal>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-1">
          {whatsappFaqs.map((item, index) => {
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
                  <span
                    className="flex-1 text-left text-[1.05rem] font-medium text-[#111827] max-md:text-[0.95rem]"
                  >
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
