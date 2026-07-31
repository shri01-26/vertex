
import React, { useState, useEffect, useRef } from "react";
import Link from "../../components/AppLink";
// import { } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Reveal from "../../components/Reveal";

import {
  CheckCircle,
  Send,
  RefreshCw,
  Code2,
  CalendarDays,
  ShieldCheck,
  MousePointerClick,
  Package,
  BadgeCheck,
  PanelsTopLeft,
  BarChart3,
  MessageSquareMore,
  Megaphone,
  Truck,
  Bell,
  Headphones,
  SquarePen,
  CreditCard,
  Smartphone,
  MessageSquareText,
  Image as ImageIcon,
  Check,
  Plus, X,
  Play,
  Pause
} from "lucide-react";
import { pageContent } from "../../content/pageContent";
import "./real-business-use-cases.css";
import SendFlightPath from "../../components/SendFlightPath/SendFlightPath";
import { RiH5 } from "react-icons/ri";

/* â”€â”€ Neon Arrow: dots appear 1-by-1, all vanish together, loop â”€â”€ */
const DOTS = 7;           // number of dash-dots
const DOT_GAP = 14;       // px between dots
const DOT_R = 2;          // radius of each dot
const ARROW_X = DOTS * DOT_GAP + 10; // arrowhead x start
const SVG_W = ARROW_X + 16;
const SVG_H = 24;
const NEON = "#b329ddff";
const NEON_CORE = "#E9FEFF";

function NeonArrow() {
  const [phase, setPhase] = useState("building"); // "building" | "visible" | "fading"
  const [visibleCount, setVisibleCount] = useState(0);
  const timerRef = useRef(null);

  // useEffect(() => {
  //   const handleSlowHowRcsScroll = (event) => {
  //     const section = howRcsStickyRef.current;
  //     if (!section) return;

  //     // Ctrl + wheel zoom ko block mat karo
  //     if (event.ctrlKey) return;

  //     const rect = section.getBoundingClientRect();
  //     const windowHeight = window.innerHeight;

  //     // Sirf isi How RCS slide/section me slow scroll hoga
  //     const isHowRcsActive =
  //       rect.top <= windowHeight * 0.85 &&
  //       rect.bottom >= windowHeight * 0.15;

  //     if (!isHowRcsActive) return;

  //     event.preventDefault();

  //     // smaller value = slower scroll
  //     const slowFactor = 0.35;

  //     window.scrollBy({
  //       top: event.deltaY * slowFactor,
  //       left: 0,
  //       behavior: "auto",
  //     });
  //   };

  //   window.addEventListener("wheel", handleSlowHowRcsScroll, {
  //     passive: false,
  //   });

  //   return () => {
  //     window.removeEventListener("wheel", handleSlowHowRcsScroll);
  //   };
  // }, []);

  const allVisible = phase === "visible" || phase === "building";

  return (
    <div
      className="absolute z-20 pointer-events-none top-[50%] left-[48%] -translate-x-1/2 -translate-y-1/2 max-lg:scale-[0.5] scale-100 xl:scale-110 flex items-center"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transition: "opacity 0.45s ease-out",
      }}
    >
      <svg
        width={SVG_W}
        height={SVG_H}
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: `
    drop-shadow(0 0 4px ${NEON})
    drop-shadow(0 0 10px ${NEON})
    drop-shadow(0 0 18px rgba(0, 246, 255, 0.75))
  `,
        }}
      >
        {/* Subtle neon glow filter */}
        <defs>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dots X appear one-by-one */}
        {Array.from({ length: DOTS }).map((_, idx) => (
          <circle
            key={idx}
            cx={8 + idx * DOT_GAP}
            cy={SVG_H / 2}
            r={DOT_R}
            fill={NEON_CORE}
            stroke={NEON}
            strokeWidth="1"
            filter="url(#neonGlow)"
            style={{
              opacity: idx < visibleCount ? 1 : 0,
              transition: idx < visibleCount ? "opacity 0.15s ease-in" : "none",
            }}
          />
        ))}

        {/* Arrowhead X appears after all dots */}
        <path
          d={`M${ARROW_X - 2} ${SVG_H / 2 - 6} L${ARROW_X + 10} ${SVG_H / 2} L${ARROW_X - 2} ${SVG_H / 2 + 6} Z`}
          fill={NEON_CORE}
          stroke={NEON}
          strokeWidth="2"
          filter="url(#neonGlow)"
          style={{
            opacity: visibleCount > DOTS ? 1 : 0,
            transition: visibleCount > DOTS ? "opacity 0.15s ease-in" : "none",
          }}
        />
      </svg>
    </div>
  );
}

/* Global base.css me unlayered `img { display: block }` hai, jo Tailwind ki
   `hidden` utility ko cascade layer ki wajah se override kar deta hai. Isliye
   merge-animation wali images ko CSS se chhupaya nahi ja sakta â€” mobile par
   unhe render hi nahi karte. */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);

    update();
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

function RCSImageMergeSection({ setIsMergeSectionActive }) {
  const isMobile = useIsMobile();
  const mergeSectionRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const rafRef = useRef(null);
  const isAligningRef = useRef(false);

  useEffect(() => {
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    /* Tailwind ke `md` breakpoint (768px) ke saath aligned rakha hai, warna
       exactly 768px par desktop layout dikhta aur wheel-lock band rehta. */
    const isMobileView = () => window.innerWidth < 768;

    const applyAnimation = (progress) => {
      /* Mobile par merge wali images render hi nahi hotin (stacked cards
         dikhte hain), to refs null rehte hain. */
      if (!leftImageRef.current || !rightImageRef.current) return;

      const mergeAmount = Math.min(progress / 0.65, 1);

      const startDistance = 500;

      const leftX = -startDistance + startDistance * mergeAmount;
      const rightX = startDistance - startDistance * mergeAmount;

      const imageScale = 0.98 + 0.02 * mergeAmount;

      const collapseAmount =
        progress <= 0.65 ? 0 : Math.min((progress - 0.65) / 0.35, 1);

      const leftOpacity = 1 - collapseAmount;
      const leftScaleX = 1 - collapseAmount * 0.85;
      const leftScaleY = 1 - collapseAmount * 0.18;

      const rightScale = 1 + collapseAmount * 0.03;

      leftImageRef.current.style.transform = `
        translate(-50%, -50%)
        translateX(${leftX}px)
        scale(${imageScale})
        scaleX(${leftScaleX})
        scaleY(${leftScaleY})
      `;

      leftImageRef.current.style.opacity = leftOpacity;
      leftImageRef.current.style.filter = "none";

      rightImageRef.current.style.transform = `
        translate(-50%, -50%)
        translateX(${rightX}px)
        scale(${imageScale * rightScale})
      `;

      rightImageRef.current.style.opacity = 1;
    };

    const isSectionInFocus = () => {
      const section = mergeSectionRef.current;
      if (!section) return false;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      return (
        rect.top <= windowHeight * 0.35 &&
        rect.bottom >= windowHeight * 0.65
      );
    };

    const handleWheel = (event) => {
      // Mobile par normal scroll rakho, koi wheel-lock nahi
      if (isMobileView()) return;

      if (!isSectionInFocus()) return;

      const current = targetProgressRef.current;
      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;

      const shouldAnimateDown = scrollingDown && current < 1;
      const shouldAnimateUp = scrollingUp && current > 0;

      if (shouldAnimateDown || shouldAnimateUp) {
        event.preventDefault();

        // Animation tabhi chale jab poora section viewport me ho, warna
        // heading aur images ek saath dikhengi nahi
        const rect = mergeSectionRef.current.getBoundingClientRect();

        if (Math.abs(rect.top) > 2) {
          if (!isAligningRef.current) {
            isAligningRef.current = true;

            window.scrollTo({
              top: window.scrollY + rect.top,
              behavior: "smooth",
            });

            window.setTimeout(() => {
              isAligningRef.current = false;
            }, 500);
          }

          return;
        }

        const scrollSpeed = 0.00065;

        targetProgressRef.current = clamp(
          current + event.deltaY * scrollSpeed,
          0,
          1
        );
      }
    };

    const handleMergeSectionVisibility = () => {
      const section = mergeSectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isVisible =
        rect.top < windowHeight * 0.8 &&
        rect.bottom > windowHeight * 0.2;

      if (typeof setIsMergeSectionActive === "function") {
        setIsMergeSectionActive(isVisible);
      }
    };

    const animate = () => {
      const current = progressRef.current;
      const target = targetProgressRef.current;

      const smoothFactor = 0.09;

      progressRef.current = current + (target - current) * smoothFactor;

      applyAnimation(progressRef.current);

      rafRef.current = requestAnimationFrame(animate);
    };

    handleMergeSectionVisibility();

    /* Phone par na merge-images hain aur na wheel-lock, isliye rAF loop bhi
       mat chalao â€” warna har frame ek khaali callback scroll ko jerky karta
       hai. */
    if (!isMobile) {
      applyAnimation(0);
      animate();
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    window.addEventListener("scroll", handleMergeSectionVisibility, {
      passive: true,
    });
    window.addEventListener("resize", handleMergeSectionVisibility);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleMergeSectionVisibility);
      window.removeEventListener("resize", handleMergeSectionVisibility);

      if (typeof setIsMergeSectionActive === "function") {
        setIsMergeSectionActive(false);
      }

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [setIsMergeSectionActive, isMobile]);

  return (
    <section
      ref={mergeSectionRef}
      className="relative w-full overflow-hidden bg-white md:min-h-screen"
    >
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white md:min-h-screen md:flex-row md:items-start">
        <div className="relative z-30 w-full px-6 pt-[75px] text-center">
          <Reveal>
            <h2 className="mb-2 text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-tight tracking-tight text-black">
              From SMS to RCS:
              <span className="text-[#0B5FC6]"> The Evolution of Messaging</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto w-full max-w-[1250px] text-center !text-[1.12rem] font-normal leading-[1.65] text-[#334155] max-md:!text-[1rem] max-md:leading-[1.6] xl:!text-[1.2rem]">
              The same messaging inbox, now built for interactive brand communication.
            </p>
          </Reveal>
        </div>

        {/* Desktop: scroll-driven merge animation */}
        {!isMobile && (
          <>
            <img
              ref={leftImageRef}
              src="/assets/images/image-2.png"
              alt="Left RCS visual"
              className="absolute left-1/2 top-[59%] z-10 h-[70vh] max-h-[640px] w-auto origin-center object-contain will-change-transform"
              style={{ maxWidth: "70vw", transform: "translate(-50%, -50%)" }}
            />

            <img
              ref={rightImageRef}
              src="/assets/images/Rc2.png"
              alt="Right RCS visual"
              className="absolute left-1/2 top-[59%] z-20 h-[70vh] max-h-[640px] w-auto origin-center object-contain will-change-transform"
              style={{ maxWidth: "70vw", transform: "translate(-50%, -50%)" }}
            />
          </>
        )}

        {/* Mobile: dono cards stacked â€” pehle SMS wala, phir RCS wala */}
        {isMobile && (
          <div className="flex w-full flex-col items-center gap-10 px-6 pb-16 pt-10">
            <Reveal className="w-full max-w-[300px]">
              <img
                src="/assets/images/image-2.png"
                alt="SMS messaging inbox"
                className="mx-auto h-auto w-full object-contain"
              />
            </Reveal>

            <Reveal className="w-full max-w-[300px]" delay={0.15}>
              <img
                src="/assets/images/Rc2.png"
                alt="RCS messaging inbox"
                className="mx-auto h-auto w-full object-contain"
              />
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}

/* â”€â”€ How RCS Works: scroll-driven step cards â”€â”€
   Ye components module scope par hain. RCS() ke andar rakhne se har render par
   nayi function identity banti thi, jisse React inhe remount kar deta tha aur
   Framer Motion ki values reset ho jaati thin (janky animation). */
const safeRange = (start, end) => {
  const safeStart = Math.min(Math.max(start, 0), 0.999);
  const safeEnd = Math.min(Math.max(end, safeStart + 0.001), 1);

  return [safeStart, safeEnd];
};

/* Content pinned rehta hai, to poora 0-1 range cards ke liye available hai.
   Card 1 static hai, isliye sequence card 2 se shuru hoti hai. */
const getCardTiming = (index) => {
  if (index === 0) {
    return { start: 0, end: 0.04 };
  }

  const step = index - 1;
  const start = 0.03 + step * 0.12;
  const end = start + 0.38;

  return { start, end };
};

function StepCard({ step, index, arr, scrollYProgress }) {
  const Icon = step.icon;

  /* Card 1 static hai; baaki cards niche se one-by-one aayenge */
  const isStatic = index === 0;

  const { start, end } = getCardTiming(index);
  const [safeStart, safeEnd] = safeRange(start, end);

  /* Initial staircase: har agla card pichhle card se thoda neeche. */
  const cardStartDown = index === 0 ? 0 : 100 + (index - 1) * 30;

  const y = useTransform(scrollYProgress, [safeStart, safeEnd], [cardStartDown, 0]);

  const connectorStart = index * 0.14 + 0.18;
  const connectorEnd = connectorStart + 0.22;

  const [safeConnectorStart, safeConnectorEnd] = safeRange(
    connectorStart,
    connectorEnd
  );

  const connectorOpacity = useTransform(
    scrollYProgress,
    [safeConnectorStart, safeConnectorEnd],
    [0, 1]
  );

  const connectorScaleX = useTransform(
    scrollYProgress,
    [safeConnectorStart, safeConnectorEnd],
    [0, 1]
  );

  return (
    <div
      style={{ zIndex: 50 - index }}
      className="smooth-card relative overflow-visible rounded-[14px] border border-[#D7DEE8] bg-white px-4 pb-7 pt-10 text-center transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(15,23,42,0.05)]"
    >

      <div className="mx-auto mb-6 mt-1 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#D9E9FB] bg-white shadow-[0_0_0_5px_rgba(45,127,249,0.06)]">
        <Icon size={30} strokeWidth={1.8} className={step.iconColor} />
      </div>

      {step.titlet && (
        <h4 className="mx-auto mb-2 max-w-none whitespace-nowrap !text-[1.2rem] font-extrabold !leading-[0.80] text-[#111827]">
          {step.titlet}
        </h4>
      )}

      <h4 className="mx-auto mb-2 max-w-[170px] !text-[1.2rem] font-extrabold leading-[1.35] text-[#111827]">
        {step.title}
      </h4>

      <p className="mb-0 min-h-[95px] !text-[1rem] leading-[1.7] text-[#64748B] max-md:min-h-0">
        {step.desc}
      </p>

      <div
        className={`absolute bottom-4 left-1/2 h-[3px] w-[54px] -translate-x-1/2 rounded-full ${step.bottomBar}`}
      />
    </div>
  );
}

const useCasesData = [
  {
    id: "marketing",
    tab: "Marketing",
    titleLine1: "Marketing",
    titleLine2: "Campaigns",
    description: [
      "Create visually rich promotional campaigns that capture attention directly inside the messaging inbox.",
      "Businesses can showcase offers using images, product cards and swipeable carousels while enabling customers to take action instantly through interactive buttons.",
    ],
    label: "Typical campaign actions include:",
    points: ["View product", "Explore offer", "Visit website", "Start conversation"],
    images: ["AA.png", "AA2.png", "AA3.png"],
  },
  {
    id: "appointment",
    tab: "Appointment",
    titleLine1: "Appointment & Service",
    titleLine2: "Reminders",
    description: [
      "Send timely reminders and service updates that keep customers informed before, during and after a scheduled interaction.",
      "Provide interactive reminder cards with appointment details, confirmation options, rescheduling flows and support actions.",
    ],
    label: "Examples include:",
    points: ["Appointment confirmation", "Service reminders", "Reschedule option", "Support request"],
    images: ["BB.png", "BB2.png", "BB3.png", "BB4.png", "BB5.png", "BB6.png", "BB7.png"],
  },
  {
    id: "tracking",
    tab: "Tracking",
    titleLine1: "Order Updates &",
    titleLine2: "Delivery Tracking",
    description: [
      "Send real-time updates that help customers stay informed about their purchases.",
      "Replace plain SMS alerts with interactive cards containing delivery status, tracking options and support buttons.",
    ],
    label: "Examples include:",
    points: ["Order confirmation", "Shipment updates", "Delivery tracking", "Service completion alert"],
    images: ["CC.png", "CC1.png", "CC2.png", "CC3.png", "CC4.png", "CC5.png"],
  },
  {
    id: "support",
    tab: "Support",
    titleLine1: "Customer Support",
    titleLine2: "Interactions",
    description: [
      "Provide quick assistance directly within the messaging interface.",
      "Customers can select predefined responses, request help or reach the right support option without calling or visiting a website.",
    ],
    label: "Support actions may include:",
    points: ["Report an issue", "Speak to an agent", "Request a callback", "Access FAQs"],
    images: ["DD.png", "DD1.png", "DD2.png", "DD3.png", "DD4.png"],
  },
  {
    id: "travel",
    tab: "Travel",
    titleLine1: "Travel & Ticketing",
    titleLine2: "Communication",
    description: [
      "Travel companies can deliver rich travel information in a single interactive message.",
      "Passengers can view itinerary details, receive travel updates and access important information without navigating multiple apps.",
    ],
    label: "Examples include:",
    points: ["Booking confirmations", "Travel reminders", "Boarding information", "Itinerary updates"],
    images: ["EE.png", "EE2.png", "EE3.png", "EE4.png", "EE5.png", "EE6.png"],
  },
  {
    id: "payments",
    tab: "Payments",
    titleLine1: "Payments & Billing",
    titleLine2: "Notifications",
    description: [
      "Send secure billing updates, payment reminders and invoice notifications directly inside the messaging inbox.",
      "Customers can review billing details, open invoices and complete payment-related actions through interactive buttons.",
    ],
    label: "Examples include:",
    points: ["Payment reminders", "Invoice alerts", "Billing updates", "Payment confirmation"],
    images: ["FF.png", "FF2.png", "FF3.png", "FF4.png"],
  },
];

const useCaseIcons = {
  marketing: "M8 17V9m4 8V5m4 12v-7M5 20h14M5 4h14",
  appointment: "M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Zm3 8h3v3H8v-3Z",
  tracking: "M3 6h11v11H3V6Zm11 4h4l3 3v4h-7v-7ZM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  support: "M4 13v-2a8 8 0 0 1 16 0v2M4 13H2v5h4v-5H4Zm16 0h2v5h-4v-5h2Zm0 5c0 2-2 3-5 3",
  travel: "m2 16 20-8-8 20-2-8-6 2 2-6-6-4Z",
  payments: "M3 6h18v12H3V6Zm0 4h18M7 15h4",
};

function UseCaseIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={useCaseIcons[name]} />
    </svg>
  );
}

function getUseCaseDepth(index, activeIndex, total) {
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function RealBusinessUseCases({ assetBase = "/rcs-use-cases", autoRotateMs = 0 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileSlideDirection, setMobileSlideDirection] = useState("right");
  const mobileUseCaseTouchX = useRef(null);
  const isMobile = useIsMobile();
  // While the stack is sliding every card keeps the same 3D transform so the
  // browser can interpolate it; once it settles the front card drops to a flat
  // 2D transform with no filter, which keeps its text crisp.
  const [isSliding, setIsSliding] = useState(false);
  // Lets the visitor stop the auto-rotation on a card they want to read.
  const [isPaused, setIsPaused] = useState(false);
  const asset = (name) => `${assetBase.replace(/\/$/, "")}/${name}`;

  useEffect(() => {
    setIsSliding(true);
    const timer = setTimeout(() => setIsSliding(false), 700);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    if (!autoRotateMs || isPaused || isMobile) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % useCasesData.length);
    }, autoRotateMs);

    return () => clearInterval(timer);
  }, [autoRotateMs, activeIndex, isPaused, isMobile]);

  return (
    <section className="rcs-cases" aria-labelledby="rcs-cases-title">
      <div className="rcs-cases__container">
        <header className="rcs-cases__header">
          <Reveal>
              <h2 className="mb-3 text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-tight !text-[Black]">
                Real Business Use Cases for RCS Messaging
              </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              <span className="rcs-cases__lead-line">
                RCS enables businesses to move beyond one-way notifications and create interactive messaging experiences across the entire customer journey.
              </span>
              <br />
              Below are some of the most common ways organizations use RCS to engage their customers.
            </p>
          </Reveal>
        </header>

        {/* Mobile mirrors the compact swipe-card experience used above. */}
        <div className="lg:hidden">
          <div className="mb-3 flex items-center justify-between px-1">
            <button
              type="button"
              aria-label="Previous use case"
              disabled={activeIndex === 0}
              onClick={() => {
                setIsPaused(true);
                setMobileSlideDirection("left");
                setActiveIndex((current) => Math.max(0, current - 1));
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B5FC6]/35 bg-white text-xl text-[#0B5FC6] shadow-sm disabled:cursor-not-allowed disabled:opacity-30"
            >
              â€¹
            </button>
            <span className="text-xs font-semibold text-[#42617E]">
              Swipe to explore Â· {activeIndex + 1}/{useCasesData.length}
            </span>
            <button
              type="button"
              aria-label="Next use case"
              disabled={activeIndex === useCasesData.length - 1}
              onClick={() => {
                setIsPaused(true);
                setMobileSlideDirection("right");
                setActiveIndex((current) =>
                  Math.min(useCasesData.length - 1, current + 1)
                );
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B5FC6]/35 bg-white text-xl text-[#0B5FC6] shadow-sm disabled:cursor-not-allowed disabled:opacity-30"
            >
              â€º
            </button>
          </div>

          {(() => {
            const item = useCasesData[activeIndex];

            return (
              <Reveal
                key={item.id}
                direction={mobileSlideDirection}
                strength={0.35}
                duration={0.38}
                className="overflow-hidden rounded-[24px] border border-[#D8EAFE] bg-[url('/assets/images/why-bg.webp')] bg-cover bg-center shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                onTouchStart={(event) => {
                  mobileUseCaseTouchX.current = event.touches[0]?.clientX ?? null;
                }}
                onTouchEnd={(event) => {
                  if (mobileUseCaseTouchX.current === null) return;
                  const endX =
                    event.changedTouches[0]?.clientX ?? mobileUseCaseTouchX.current;
                  const distance = endX - mobileUseCaseTouchX.current;
                  mobileUseCaseTouchX.current = null;

                  if (Math.abs(distance) < 45) return;
                  setIsPaused(true);

                  if (distance < 0 && activeIndex < useCasesData.length - 1) {
                    setMobileSlideDirection("right");
                    setActiveIndex((current) => current + 1);
                  } else if (distance > 0 && activeIndex > 0) {
                    setMobileSlideDirection("left");
                    setActiveIndex((current) => current - 1);
                  }
                }}
              >
                <div className="p-5">
                  <div className="mb-5 flex items-center gap-3 rounded-2xl border border-[#CFE2F6] bg-white/80 px-3 py-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B5FC6] text-white">
                      <span className="h-5 w-5 [&_svg]:h-full [&_svg]:w-full [&_svg]:fill-none [&_svg]:stroke-current">
                        <UseCaseIcon name={item.id} />
                      </span>
                    </span>
                    <div>
                      <span className="block text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-[#0B5FC6]">
                        Use case
                      </span>
                      <span className="block text-[0.9rem] font-bold text-[#1E293B]">
                        {item.tab}
                      </span>
                    </div>
                  </div>

                  <h3 className="m-0 flex flex-col text-[1.65rem] font-extrabold leading-[1.12]">
                    <span className="text-black">{item.titleLine1}</span>
                    <span className="text-[#0B5FC6]">{item.titleLine2}</span>
                  </h3>

                  <div className="my-4 flex gap-1.5">
                    <span className="h-1 w-9 rounded-full bg-[#0B5FC6]" />
                    <span className="h-1 w-9 rounded-full bg-[#DCE7F2]" />
                  </div>

                  <div className="space-y-3">
                    {item.description.map((text) => (
                      <p
                        key={text}
                        className="m-0 text-[0.92rem] leading-[1.55] !text-black"
                      >
                        {text}
                      </p>
                    ))}
                  </div>

                  <strong className="mb-3 mt-5 block text-[0.9rem] text-black">
                    {item.label}
                  </strong>
                  <div className="grid grid-cols-2 gap-2 max-[360px]:grid-cols-1">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex min-h-11 items-center gap-2 rounded-xl border border-[#CFE2F6] bg-white/80 px-3 py-2 text-[0.8rem] font-semibold leading-[1.3] text-[#1E293B]"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B5FC6]" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })()}
        </div>

        <Reveal delay={0.3} className="rcs-cases__tabs max-lg:hidden" role="tablist" aria-label="RCS use cases">
          <span
            className="rcs-cases__progress"
            style={{ width: `${(activeIndex / (useCasesData.length - 1)) * 100}%` }}
          />
          {useCasesData.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls="rcs-use-case-panel"
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <span className="rcs-cases__icon"><UseCaseIcon name={item.id} /></span>
              <span>{item.tab}</span>
            </button>
          ))}
        </Reveal>

        <div className="rcs-cases__stage max-lg:hidden">
          {useCasesData.map((item, index) => {
            const depth = getUseCaseDepth(index, activeIndex, useCasesData.length);
            const isActive = depth === 0;
            const level = Math.min(Math.abs(depth), 3);
            const isHidden = level >= 3 || depth < 0;

            return (
              <article
                key={item.id}
                id={isActive ? "rcs-use-case-panel" : undefined}
                className={`rcs-cases__panel rcs-cases__panel--${item.id} ${isActive ? "is-active" : ""} ${
                  isActive && !isSliding ? "is-settled" : ""
                }`}
                role="tabpanel"
                aria-hidden={!isActive}
                onClick={() => !isActive && setActiveIndex(index)}
                style={{
                  transform:
                    isActive && !isSliding
                      ? "translate(-50%, -50%) translateX(-8%)"
                      : `translate(-50%, -50%) translateX(${level * 17 - 8}%) translateZ(${level * -200}px) rotateY(${level * -9}deg) scale(${1 - level * 0.04})`,
                  filter: isActive && !isSliding ? "none" : `blur(${level * 3}px)`,
                  opacity: isHidden ? 0 : 1 - level * 0.22,
                  zIndex: 10 - level,
                  pointerEvents: isHidden ? "none" : "auto",
                  cursor: isActive ? "default" : "pointer",
                }}
              >
                <div className="rcs-cases__copy">
                  <div className="rcs-cases__badge">
                    <MessageSquareMore size={13} className="shrink-0" />
                    <span>USE CASES</span>
                  </div>

                  <h3 className="rcs-cases__title">
                    <span className="rcs-cases__title-line1">{item.titleLine1}</span>
                    <span className="rcs-cases__title-line2">{item.titleLine2}</span>
                  </h3>

                  <div className="rcs-cases__bar">
                    <span className="rcs-cases__bar-blue" />
                    <span className="rcs-cases__bar-gray" />
                  </div>

                  <div className="rcs-cases__desc">
                    {item.description.map((text, idx) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>

                  <strong className="rcs-cases__label">{item.label}</strong>

                  <ul className="rcs-cases__list">
                    {item.points.map((point) => (
                      <li key={point}>
                        <span className="rcs-cases__bullet" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="rcs-cases__visual"
                  aria-label={`${item.title} message examples`}
                />
              </article>
            );
          })}
        </div>

        {autoRotateMs ? (
          <div className="rcs-cases__playpause max-lg:hidden">
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              aria-pressed={isPaused}
              aria-label={isPaused ? "Resume use case animation" : "Pause use case animation"}
            >
              {isPaused ? <Play size={19} /> : <Pause size={19} />}
              <span>{isPaused ? "Resume" : "Pause"}</span>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* Blue arrow + label that draws in on scroll: arrow animates first, then the
   text below it fades up. flipX / flipY orient the arrow toward the image. */
function WhyArrowCallout({
  text,
  className = "",
  labelClassName = "",
  flipX = false,
  flipY = false,
  delay = 0,
  /* Lengthens only the arrow â€” the label keeps its own size, so the text can
     stay clear of the phone while the tip still reaches its target. */
  size = 1,
  /* Screen-space tilt applied after the flips, so each arrow can meet its
     target at the angle it needs (flat for the header, steep for the cards). */
  rotate = 0,
  /* Shaft weight in rendered px. Divided by size below so every callout keeps
     the same line weight no matter how long its arrow is. */
  stroke = 2.4,
  /* Drops just the tail end of the arc (viewBox units), deepening the curve
     without touching the tip â€” so the callout keeps pointing where it does. */
  tailDrop = 0,
}) {
  const viewport = { once: true, amount: 0.5 };
  const svgTransform = `${rotate ? `rotate(${rotate}deg) ` : ""}${flipX ? "scaleX(-1) " : ""}${flipY ? "scaleY(-1)" : ""}`.trim();
  const strokeWidth = stroke / size;

  return (
    <div
      className={`pointer-events-none absolute z-30 ${className}`}
      style={{ width: 100 * size, height: 56 * size }}
    >
      <motion.svg
        width={100 * size} height={56 * size} viewBox="0 0 100 56" fill="none"
        style={{ transform: svgTransform || undefined }}
      >
        {/* shaft â€” one clean sweeping arc (no S-wiggle), run all the way to the
           tip so the head grows straight out of it */}
        <motion.path
          d={`M6 ${10 + tailDrop} Q 58 8, 83.5 44.6`}
          stroke="#1d7bf4" strokeWidth={strokeWidth} strokeLinecap="round" fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={viewport}
          transition={{ duration: 0.65, delay, ease: "easeInOut" }}
        />
        {/* head â€” an open chevron drawn in the same weight as the shaft, its two
           barbs swept back 38Â° from the arc's end tangent */}
        <motion.path
          d="M84.2 31.6 L 83.5 44.6 L 71 40.8"
          fill="none" stroke="#1d7bf4" strokeWidth={strokeWidth}
          strokeLinecap="round" strokeLinejoin="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.2, delay: delay + 0.6 }}
        />
      </motion.svg>

      <motion.span
        className={`absolute whitespace-nowrap text-[15px] font-semibold tracking-tight text-[#1d7bf4] ${labelClassName}`}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.35, delay: delay + 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </div>
  );
}

function RCS() {
  const isMobile = useIsMobile();
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeBuildCard, setActiveBuildCard] = useState(0);
  const [buildSlideDirection, setBuildSlideDirection] = useState("right");
  const mobileBuildTouchX = useRef(null);
  const timelineItems = [
    {
      title: "Marketing",
      image: "/assets/images/AA.png",
      image2: "/assets/images/AA2.png",
      image3: "/assets/images/AA3.png",

      imageStyle: {
        width: "320px",
        height: "400px",
        top: "30px",
        left: "520px",
        padding: "10px",
        zIndex: 20,
      },

      image2Style: {
        width: "180px",
        height: "280px",
        top: "340px",
        right: "587px",
        zIndex: 30,
        noShadow: true,

        pulseShadow: true,
      },
      image3Style: {
        width: "500px",
        height: "180px",
        bottom: "-20px",
        left: "-550px",
        padding: "6px",
        zIndex: 40,
      },
      showBubbleAndSvg: true,

      bubbleStyle: {
        width: "700px",
        height: "680px",
        right: "-190px",
        bottom: "-170px",
        zIndex: 1,
      },

      icon: Megaphone,
      // Marketing
      heading: "Marketing Campaigns",
      headingBlack: "Marketing",
      headingBlue: "Campaigns",
      desc1:
        "Create visually rich promotional campaigns that capture attention directly inside the messaging inbox.",
      desc2:
        "Businesses can showcase offers using images, product cards and swipeable carousels while enabling customers to take action instantly through interactive buttons.",
      label: "Campaign actions include:",
      points: ["View product", "Explore offer", "Visit website", "Start conversation"],
      pointsStyle: {
        translateX: "-32px",
        columnGap: "0px",
        rowGap: "0px",
        bulletGap: "10px",
        secondColumnShift: "-80px",
      },
    },

    {
      // Appointment
      title: "Appointment",
      heading: "Appointment & Service Reminders",
      headingBlack: "Appointment &",
      headingBlue: "Service Reminders",
      image: "/assets/images/BB.png",
      image2: "/assets/images/BB2.png",
      image3: "/assets/images/BB3.png",
      image4: "/assets/images/BB4.png",
      image5: "/assets/images/BB5.png",
      image6: "/assets/images/BB6.png",
      image7: "/assets/images/BB7.png",

      imageStyle: {
        width: "1335px",
        height: "700px",
        top: "0px",
        left: "-410px",
        zIndex: 2,

        opacity: 1,
        fadeLeftWhite: true,
        roundedRight: true,
      },

      image2Style: {
        width: "290px",
        top: "28px",
        right: "300px",
        zIndex: 30,
      },

      image3Style: {
        width: "290px",
        bottom: "340px",
        left: "335px",
        zIndex: 35,
      },

      image4Style: {
        width: "500px",
        bottom: "40px",
        right: "970px",
        zIndex: 40,
      },

      image5Style: {
        width: "80px",
        top: "570px",
        left: "46%",
        zIndex: 45,
      },

      image6Style: {
        width: "290px",
        top: "385px",
        left: "335px",
        zIndex: 50,
      },

      image7Style: {
        width: "80px",
        bottom: "460px",
        right: "195px",
        zIndex: 55,
      },

      icon: CalendarDays,
      heading: "Appointment & Service Reminders",
      desc1:
        "Send timely reminders and service updates that help customers stay informed before, during and after a scheduled interaction.",
      desc2:
        "Businesses can provide interactive reminder cards with appointment details, confirmation options, rescheduling flows and support actions.",
      label: "Examples include:",
      points: [
        "Appointment confirmation",
        "Service reminders",
        "Reschedule option",
        "Support request",
      ],
      pointsStyle: {
        translateX: "-32px",
        columnGap: "40px",
        rowGap: "0px",
        bulletGap: "10px",
        secondColumnShift: "20px",
      },
    },

    {
      title: "Tracking",
      // Tracking
      heading: "Order Updates & Delivery Tracking",
      headingBlack: "Order Updates &",
      headingBlue: "Delivery Tracking",

      image: "/assets/images/CC.png",
      image2: "/assets/images/CC1.png",
      image3: "/assets/images/CC2.png",
      image4: "/assets/images/CC3.png",
      image5: "/assets/images/CC4.png",
      image6: "/assets/images/CC5.png",

      imageStyle: {
        width: "320px",
        top: "10px",
        left: "60px",
        zIndex: 20,
      },

      image2Style: {
        width: "320px",
        top: "3px",
        right: "70px",
        zIndex: 25,
      },

      image3Style: {
        width: "320px",
        top: "314px",
        left: "525px",
        zIndex: 30,
      },

      image4Style: {
        width: "320px",
        bottom: "-3px",
        right: "79px",
        zIndex: 35,
      },

      image5Style: {
        width: "100px",
        top: "385px",
        right: "515px",
        zIndex: 40,
      },

      image6Style: {
        width: "500px",
        bottom: "40px",
        right: "970px",
        zIndex: 40,
      },

      icon: Truck,
      heading: "Order Updates & Delivery Tracking",
      desc1:
        "Send real-time updates that help customers stay informed about their purchases.",
      desc2:
        "Instead of sending plain SMS alerts, businesses can provide interactive message cards with delivery status, tracking options and support buttons.",
      label: "Examples include:",
      points: [
        "Order confirmation",
        "Shipment updates",
        "Delivery tracking",
        "Service Completion Alert",

      ],
      pointsStyle: {
        translateX: "-32px",
        columnGap: "0px",
        rowGap: "0px",
        bulletGap: "10px",
        secondColumnShift: "-10px",
      },
      showTrackingCurve: true,
    },

    {
      // Support
      title: "Support",
      heading: "Customer Support Interactions",
      headingBlack: "Customer Support",
      headingBlue: "Interactions",

      image: "/assets/images/DD.png",
      image2: "/assets/images/DD1.png",
      image3: "/assets/images/DD2.png",
      image4: "/assets/images/DD3.png",
      image5: "/assets/images/DD4.png",
      bgImage: "/assets/images/DD8.png",


      bgImageStyle: {
        boxWidth: "101%",
        boxHeight: "100%",
        boxTop: "0px",
        boxLeft: "-10px",

        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",

        opacity: 0.92,
        objectFit: "cover",
        objectPosition: "center",
        wash: "rgba(255,255,255,0.18)",
        zIndex: 1,
      },
      cardBg:
        "linear-gradient(90deg, #FFFFFF 0%, #F7FBFF 34%, #EEF7FF 52%, #EAF5FF 72%, #E6F2FF 100%)",

      imageStyle: {
        width: "300px",
        top: "28px",
        left: "70px",
        zIndex: 20,
      },

      image2Style: {
        width: "400px",
        top: "20px",
        right: "80px",
        zIndex: 25,
      },

      image3Style: {
        width: "297px",
        top: "350px",
        left: "445px",
        zIndex: 30,
      },

      image4Style: {
        width: "409px",
        top: "580px",
        right: "120px",
        zIndex: 35,
      },

      image5Style: {
        width: "500px",
        bottom: "40px",
        right: "970px",
        zIndex: 40,
      },

      image6Style: {
        width: "100px",
        bottom: "155px",
        right: "300px",
        zIndex: 45,
      },

      image7Style: {
        width: "90px",
        top: "430px",
        left: "72%",
        zIndex: 50,
      },

      image8Style: {
        width: "90px",
        bottom: "157px",
        right: "5%",
        zIndex: 55,
      },



      icon: Headphones,
      heading: "Customer Support Interactions",
      desc1:
        "Provide quick assistance directly within the messaging interface.",
      desc2:
        "Customers can select predefined responses, request help or navigate to the appropriate support option without needing to call or visit a website.",
      label: "Support actions include:",
      points: [
        "Report an issue",
        "Speak to an agent",
        "Request a callback",
        "Access FAQs",
      ],
      pointsStyle: {
        translateX: "-32px",
        columnGap: "0px",
        rowGap: "0px",
        bulletGap: "10px",
        secondColumnShift: "-10px",
      },
    },

    {
      title: "Notifications",
      // Notifications
      heading: "Service Alerts & Important Updates",
      headingBlack: "Service ",
      headingBlue: "Alerts & Updates",

      image: "/assets/images/EE.png",
      image2: "/assets/images/EE2.png",
      image3: "/assets/images/EE3.png",
      image4: "/assets/images/EE4.png",
      image5: "/assets/images/EE5.png",
      image6: "/assets/images/EE6.png",
      bgImage: "/assets/images/EE7.png",

      bgImageStyle: {
        boxWidth: "101%",
        boxHeight: "100%",
        boxTop: "0px",
        boxLeft: "-5px", // 40 + 20

        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",

        opacity: 0.95,
        objectFit: "cover",
        objectPosition: "center",
        wash: "rgba(255,255,255,0.16)",
        zIndex: 1,
      },

      imageStyle: {
        width: "320px",
        top: "10px",
        left: "130px", // 110 + 20
        zIndex: 20,
      },

      image2Style: {
        width: "230px",
        top: "15px",
        right: "90px", // 110 - 20
        zIndex: 25,
      },

      image3Style: {
        width: "200px",
        top: "360px",
        left: "680px", // 660 + 20
        zIndex: 30,
      },

      image4Style: {
        width: "220px",
        bottom: "25px",
        right: "230px", // 250 - 20
        zIndex: 35,
      },

      image5Style: {
        width: "135px",
        top: "255px",
        right: "800px", // 820 - 20
        zIndex: 40,
      },

      image6Style: {
        width: "135px",
        top: "350px",
        right: "830px", // 850 - 20
        zIndex: 40,
      },


      icon: Bell,
      heading: "Travel & Ticketing Communication",
      desc1:
        "Send important updates in a clear, rich, and interactive format.",
      desc2:
        "RCS helps businesses share timely alerts, reminders, and service-related information with buttons, images, and quick actions that make it easier for customers to respond or take the next step.",
      label: "Scenarios include:",
      points: [
        "Booking confirmations",
        "Important reminders",
        "Status notifications",
        "Event or schedule updates",
      ],
      pointsStyle: {
        translateX: "-32px",
        columnGap: "36px",
        rowGap: "8px",
        bulletGap: "10px",
      },
    },

    {
      title: "Payments",
      heading: "Payments & Billing Notifications",
      headingBlack: "Payments &",
      headingBlue: "Billing Notifications",

      image: "/assets/images/FF.png",
      image2: "/assets/images/FF2.png",
      image3: "/assets/images/FF3.png",
      image4: "/assets/images/FF4.png",
      bgImage: "/assets/images/FF5.png",

      bgImageStyle: {
        boxWidth: "101%",
        boxHeight: "100%",
        boxTop: "0px",
        boxLeft: "-5px", // background 60px right

        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",

        opacity: 0.95,
        objectFit: "cover",
        objectPosition: "center",
        wash: "rgba(255,255,255,0.16)",
        zIndex: 1,
      },

      imageStyle: {
        width: "325px",
        top: "0px",
        left: "430px", // 380 + 50
        zIndex: 20,
      },

      image2Style: {
        width: "230px",
        top: "150px",
        right: "460px", // 510 - 50
        zIndex: 25,
      },

      image3Style: {
        width: "210px",
        bottom: "205px",
        left: "700px", // 650 + 50
        zIndex: 30,
      },
      image4Style: {
        width: "500px",
        bottom: "30px",
        right: "650px", // 700 - 50
        zIndex: 35,
      },


      icon: CreditCard,
      desc1:
        "Send secure billing updates, payment reminders and invoice notifications directly inside the messaging inbox.",
      desc2:
        "Customers can review billing details, open invoices and complete payment-related actions through interactive message buttons.",
      label: "Examples include:",
      points: [
        "Payment reminders",
        "Invoice alerts",
        "Billing updates",
        "Payment confirmation",
      ],
      pointsStyle: {
        translateX: "-32px",
        columnGap: "0px",
        rowGap: "0px",
        bulletGap: "10px",
        secondColumnShift: "-10px",
      },
    },
  ];


  //2nd timeline image
  const getTimelineImages = (item) => {
    return [
      { src: item.image, style: item.imageStyle, name: "image-1" },
      { src: item.image2, style: item.image2Style, name: "image-2" },
      { src: item.image3, style: item.image3Style, name: "image-3" },
      { src: item.image4, style: item.image4Style, name: "image-4" },
      { src: item.image5, style: item.image5Style, name: "image-5" },
      { src: item.image6, style: item.image6Style, name: "image-6" },
      { src: item.image7, style: item.image7Style, name: "image-7" },
      { src: item.image8, style: item.image8Style, name: "image-8" },
    ].filter((img) => Boolean(img.src));
  };

  //grid slide 
  const getCircularOffset = (index, activeIndex, total) => {
    let offset = index - activeIndex;

    if (offset > total / 2) {
      offset -= total;
    }

    if (offset < -total / 2) {
      offset += total;
    }

    return offset;
  };



  // ///////////////////////////////////////////////
  const howRcsStickyRef = useRef(null);
  const howRcsWorksRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: howRcsStickyRef,
    offset: ["start start", "end end"],
  });

  /* Blue strip stays solid and moves up with the final staircase card. */
  const businessStripY = useTransform(
    scrollYProgress,
    [0.51, 0.89],
    [150, 0]
  );

  const rcsSteps = [
    {
      title: "Create the Experience",
      desc: "Configure the audience, content, media, actions, and delivery timing.",
      icon: SquarePen,
      iconColor: "text-[#2D7FF9]",
      bottomBar: "bg-[#2D7FF9]",
    },
    {
      title: "Trigger the Message",
      desc: "Launch the message manually, through campaigns, or automated business events.",
      icon: Send,
      iconColor: "text-[#2D7FF9]",
      bottomBar: "bg-[#2D7FF9]",
    },
    {
      title: "Check RCS Availability",
      desc: "The system verifies whether the customerâ€™s device and network support RCS.",
      icon: Smartphone,
      iconColor: "text-[#2BA9D9]",
      bottomBar: "bg-[#2BA9D9]",
    },
    {
      title: "Deliver to the Inbox",
      desc: "Eligible customers receive a branded, interactive message in their native inbox.",
      icon: MessageSquareText,
      iconColor: "text-[#45A5E8]",
      bottomBar: "bg-[#2D7FF9]",
    },
    {
      title: "Customer Takes Action",
      desc: "Customers can browse, respond, confirm, track, book, or pay directly.",
      icon: BarChart3,
      iconColor: "text-[#2D7FF9]",
      bottomBar: "bg-[#2D7FF9]",
    },
    {
      title: "Capture the Outcome",
      desc: "Track delivery, engagement, button clicks, responses, and completed customer actions.",
      icon: RefreshCw,
      iconColor: "text-[#2D7FF9]",
      bottomBar: "bg-[#2D7FF9]",
    },
  ];



  ////////////////////////////////////////////
  //

  const buildCards = [
    // card 1
    {
      title: "Rich Product Conversations",
      tag: "Product Cards",
      heading: "Showcase products, services, or offers using",
      highlight: "visual message cards.",
      headingSize: "!text-[20px] !font-normal",
      desc: "Customers can scroll through items, view details, and take action instantly all within the chat interface.",
      visualTitle: "Eco-friendly Running Shoes",
      visualSub: "â‚¹658",
      visualDesc: "Lightweight, breathable & made from recycled materials.",
      cta: "View Product",
      points: ["View product", "Book service", "Claim offer", "Browse catalog"],
      bg: "linear-gradient(135deg, #124E8C 0%, #33B5FA 100%)",
      icon: Package,

      customImage: "/assets/images/011 (1).png",
      imageWidth: "310px",
      imageTop: "20px",
      imageScale: 1.18,
      imageX: "-5px",

      headingSize: "!text-[20px] !font-normal",
      descSize: "!text-[18px]",
      pointSize: "!text-[15px]",
      visualWidth: "max-w-[250px]",
      visualImageHeight: "h-[65px]",
    },

    //card 2
    {
      title: "One-Tap Customer Actions",
      tag: "Interactive Buttons",
      heading: "Remove friction from customer interactions with",
      highlight: "interactive message buttons.",
      desc: "This makes every interaction faster, easier, and improves response rates.",
      visualTitle: "Order #VTX12345",
      visualSub: "Out for delivery",
      visualDesc: "Your order will arrive today between 2:00â€“4:00 PM.",
      cta: "Track Delivery",
      points: ["Confirm Appointment", "Track Delivery", "Pay Now", "Contact Support"],
      bg: "linear-gradient(135deg, #124E8C 0%, #33B5FA 100%)",
      icon: MousePointerClick,

      customImage: "/assets/images/slide-card-02.png",
      imageWidth: "310px",
      imageTop: "20px",
      imageScale: 1,
      imageX: "-5px",

      headingSize: "!text-[20px] !font-normal",
      descSize: "!text-[18px]",
      pointSize: "!text-[15px]",
      visualWidth: "max-w-[250px]",
      visualImageHeight: "h-[80px]",
    },

    //card 3
    {
      title: "Branded Messaging Experiences",
      tag: "Verified Identity",
      heading: "Every message is delivered with a",
      highlight: "verified business identity.",
      desc: "Customers recognize official communication and engage with more confidence.",
      visualTitle: "Elite Tech",
      visualSub: "Verified Business",
      visualDesc: "Luxury Watches, Now in a More Interactive Experience.",
      cta: "Verified",
      points: ["Logo", "Business name", "Verification badge", "Official business profile"],
      bg: "linear-gradient(135deg, #124E8C 0%, #33B5FA 100%)",
      icon: BadgeCheck,

      customImage: "/assets/images/slide-card-03.png",
      imageWidth: "300px",
      imageTop: "245.5px",
      imageScale: 1.7,
      imageX: "-100px",

      headingSize: "!text-[20px] !font-normal",
      descSize: "!text-[18px]",
      pointSize: "!text-[15px]",
      visualWidth: "max-w-[250px]",
      visualImageHeight: "h-[140px]",
    },

    //card 4
    {
      title: "Swipeable Content & Offers",
      tag: "Carousel Messaging",
      heading: "Send",
      highlight: "carousel messages",
      headingAfter: "that allow users to swipe through multiple cards in a single message.",
      desc: "Each card can contain its own image, text, and call-to-action button.",
      visualTitle: "Goa Beach Retreat",
      visualSub: "From â‚¹18,000",
      visualDesc: "Explore travel packages, offers and service options.",
      cta: "Book Now",
      points: ["Product catalogs", "Travel packages", "Promotional campaigns", "Service options"],
      bg: "linear-gradient(135deg, #124E8C 0%, #33B5FA 100%)",
      icon: PanelsTopLeft,

      customImage: "/assets/images/slide-card-04.png",
      imageWidth: "350px",
      imageTop: "248px",
      imageScale: 1.5,
      imageX: "-55px",

      headingSize: "!text-[20px] !font-normal",
      descSize: "!text-[18px]",
      pointSize: "!text-[15px]",
      visualWidth: "max-w-[250px]",
      visualImageHeight: "h-[50px]",
    },

    //card 5
    {
      title: "Engagement Signals & Insights",
      tag: "Messaging Analytics",
      heading: "Unlike traditional SMS, RCS messaging provides real engagement data.",
      highlight: "",
      desc: "This helps teams understand customer behavior and optimize messaging strategies.",
      visualTitle: "Delivery Rate",
      visualSub: "98%",
      visualDesc: "9,800 / 10,000 delivered with click-through and interaction data.",
      cta: "View Insights",
      points: ["Message delivery", "Read confirmations", "Button clicks", "Interaction patterns"],
      bg: "linear-gradient(135deg, #124E8C 0%, #33B5FA 100%)",
      icon: BarChart3,

      customImage: "/assets/images/slide-card-05.png",

      imageWidth: "370px",
      imageTop: "280px",
      imageScale: 1.8,
      imageX: "-250px",

      headingSize: "!text-[20px] !font-normal",
      descSize: "!text-[18px]",
      pointSize: "!text-[15px]",
      visualWidth: "max-w-[250px]",
      visualImageHeight: "h-[50px]",
    },

    //Card 6
    {
      title: "Universal Message Delivery",
      tag: "SMS Fallback",
      heading: "If a userâ€™s device or network doesnâ€™t support RCS, the system automatically switches to",
      highlight: "SMS fallback.",
      desc: "This ensures that messages are still delivered, while RCS-enabled users enjoy the full interactive experience.",
      visualTitle: "RCS Payload â†’ SMS Fallback",
      visualSub: "Text Message",
      visualDesc: "Messages are still delivered even when RCS is unavailable.",
      cta: "SMS Fallback",
      points: [
        "RCS capability detection",
        "Rich RCS delivery",
        "Automatic SMS fallback",
        "Wider device and network reach",
      ],
      bg: "linear-gradient(135deg, #124E8C 0%, #33B5FA 100%)",
      icon: MessageSquareMore,

      customImage: "/assets/images/slide-card-06.png",
      imageWidth: "300px",
      imageTop: "290px",
      imageScale: 2.2,
      imageX: "-260px",

      headingSize: "!text-[20px] !font-normal",
      descSize: "!text-[18px]",
      pointSize: "!text-[15px]",
      visualWidth: "max-w-[250px]",
      visualImageHeight: "h-[50px]",
    },
  ];

  const rcsData = pageContent.products.rcs;

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    /* overflow-x-clip (not hidden) contains stray width without breaking the
       sticky "How RCS Works" runway. */
    <main className="rcs-page w-full overflow-x-clip bg-[#e0f7ff] text-slate-600">

      {/* â”€â”€ 1. HERO SECTION â”€â”€ */}
      {/* <section className="relative bg-white min-h-[900px] pt-[140px] pb-[80px] overflow-hidden"> */}
     <section
  className="relative overflow-hidden bg-white bg-cover bg-center bg-no-repeat pt-[95px] pb-[60px] lg:min-h-[860px] max-lg:pt-[80px] max-lg:pb-[45px] max-md:pt-[55px] max-md:pb-[35px]"
  style={{
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url("/assets/images/bggg.jpeg")',
  }}
>


  <div className="container relative z-10">
    <div className="relative flex flex-col items-center gap-5 text-center">
      {/* Left Content Column */}
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-2 max-md:gap-2">
        <div className="flex flex-col gap-0">
          <Reveal onMount delay={0}>
            <h1 className="mb-0 w-full text-center text-[clamp(2.05rem,8vw,4.5rem)] !font-extrabold leading-[1.05] tracking-tight text-[#0B5FC6]">
              <span className="text-[#0B5FC6]">RCS</span> Business Messaging
            </h1>
          </Reveal>

          <Reveal onMount delay={0.15}>
            <p className="mt-0 mb-2 w-full text-center text-[1.8rem]! font-bold! leading-[1.05] tracking-tight text-[#334155]">
              {/* Brackets live here, not in the content file â€” heroTagline is
                  also used for the page title/schema, which stays plain. */}
              {`${
                rcsData.heroTagline
                  ? rcsData.heroTagline.replace("RCS Business Messaging ", "")
                  : "for Rich, Interactive Customer Conversations"
              } `}
            </p>
          </Reveal>
        </div>

        <Reveal onMount delay={0.3}>
          <p className="mx-auto !mb-0 w-full max-w-[900px] text-center !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
            {rcsData.heroDescription}
          </p>
        </Reveal>

      </div>

      {/* Right Visual Column */}
      <Reveal
        onMount
        delay={0.45}
        direction="center"
        duration={0.75}
        className="mx-auto flex w-full max-w-[690px] items-start justify-center gap-4 max-sm:max-w-[340px]"
      >
        <img
          src="/assets/images/Template%20create.webp"
          alt="RCS business messaging visual one"
          className="mt-6 h-auto w-[45%] min-w-0 object-contain max-md:mt-3"
        />
        <div className="flex shrink-0 flex-col items-center gap-1 self-center">
          <span className="whitespace-nowrap text-sm font-semibold text-[#0B5FC6] max-sm:text-xs">
            Rcs Message
          </span>
           <CheckCircle
            size={36}
            strokeWidth={2}
            className="shrink-0 text-[#22C55E] max-sm:size-6"
          />
          <SendFlightPath
            color="#2588F0"
            label="RCS message in flight"
            className="pointer-events-none relative z-10 my-1 -mx-[38px] !w-[200px] max-w-none translate-x-[6px] -translate-y-[14px] max-sm:-mx-[22px] max-sm:!w-[130px]"
          />
         
        </div>
        <div className="relative w-[45%] min-w-0 translate-x-[10px]">
          <img
            src="/assets/images/RCS%20p.webp"
            alt="RCS business messaging visual two"
            className="h-auto w-full object-contain"
          />
          {/* Rich card, positioned inside the phone screen above the composer. */}
          <img
            src="/assets/images/Template.webp"
            alt=""
            aria-hidden="true"
            className="send-flight-step-1 pointer-events-none absolute left-[8%] top-[24%] w-[62%] object-contain"
          />
        </div>
        {false && (
        <div
          className="hero-neon-flow-wrap relative flex min-h-[780px] w-full items-center justify-center overflow-visible max-lg:min-h-[760px] max-md:min-h-[980px]"
          style={{
            "--cycle": "15s",

            "--img1-x": "-50px",
            "--img1-y": "18px",
            "--img1-w": "325px",
            "--img1-h": "580px",

            "--arrow-x": "-72px",
            "--arrow-y": "18px",
            "--arrow-w": "210px",

            "--img2-x": "-80px",
            "--img2-y": "0px",
            "--img2-w": "330px",
            "--img2-h": "695px",

            "--img1-radius": "30px",
            "--img2-radius": "34px",
          }}
        >
          {/* IMAGE 1 */}
          <div
            className="hero-neon-card hero-neon-card-one relative shrink-0"
            style={{
              width: "var(--img1-w)",
              height: "var(--img1-h)",
              transform: "translate(var(--img1-x), var(--img1-y))",
              overflow: "visible",
            }}
          >
            <svg
              className="hero-neon-trace-svg pointer-events-none absolute inset-0 z-20 h-full w-full"
              viewBox="0 0 340 550"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="heroNeonGradientOne"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#20D9FF" />
                  <stop offset="50%" stopColor="#7B61FF" />
                  <stop offset="100%" stopColor="#B329DD" />
                </linearGradient>
              </defs>

              <path
                d="M 10 280 L 10 18 Q 10 4 28 4 L 312 4 Q 330 4 330 18 L 330 280"
                pathLength="1000"
                className="hero-neon-trace hero-neon-trace-one"
                stroke="url(#heroNeonGradientOne)"
              />

              <path
                d="M 10 280 L 10 536 Q 10 550 28 550 L 312 550 Q 330 550 330 536 L 330 280"
                pathLength="1000"
                className="hero-neon-trace hero-neon-trace-one"
                stroke="url(#heroNeonGradientOne)"
              />
            </svg>

            <div
              className="hero-neon-reveal hero-neon-reveal-one absolute inset-0 z-10 overflow-visible"
              style={{
                borderRadius: "var(--img1-radius)",
              }}
            >
              <img
                src="/assets/images/h1.png"
                alt="First visual"
                className="h-full w-full object-contain"
                style={{
                  borderRadius: "var(--img1-radius)",
                  filter: "none",
                  boxShadow: "none",
                }}
              />
            </div>
          </div>

          {/* CENTER DOTTED ARROW */}
          <div
            className="hero-neon-arrow-wrap relative flex h-[80px] shrink-0 items-center justify-center"
            style={{
              width: "var(--arrow-w)",
              transform: "translate(var(--arrow-x), var(--arrow-y))",
            }}
          >
            <div className="hero-neon-dotted-arrow">
              {Array.from({ length: 14 }).map((_, index) => (
                <span key={index} className="hero-neon-arrow-dot" />
              ))}

              <span className="hero-neon-arrow-head" />
            </div>
          </div>

          {/* IMAGE 2 */}
          <div
            className="hero-neon-card hero-neon-card-two relative shrink-0"
            style={{
              width: "var(--img2-w)",
              height: "var(--img2-h)",
              transform: "translate(var(--img2-x), var(--img2-y))",
              borderRadius: "var(--img2-radius)",
              overflow: "visible",
            }}
          >
            <svg
              className="hero-neon-trace-svg pointer-events-none absolute inset-0 z-20 h-full w-full"
              viewBox="0 0 360 630"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="heroNeonGradientTwo"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#20D9FF" />
                  <stop offset="50%" stopColor="#7B61FF" />
                  <stop offset="100%" stopColor="#B329DD" />
                </linearGradient>
              </defs>

              <path
                d="M 2 315 L 2 26 Q 2 4 26 4 L 330 4 Q 354 4 354 26 L 354 315"
                pathLength="1000"
                className="hero-neon-trace hero-neon-trace-two"
                stroke="url(#heroNeonGradientTwo)"
              />

              <path
                d="M 2 315 L 2 604 Q 2 626 26 626 L 330 626 Q 354 626 354 604 L 354 315"
                pathLength="1000"
                className="hero-neon-trace hero-neon-trace-two"
                stroke="url(#heroNeonGradientTwo)"
              />
            </svg>

            <div
              className="hero-neon-reveal hero-neon-reveal-two absolute inset-0 z-10 overflow-visible"
              style={{
                borderRadius: "var(--img2-radius)",
              }}
            >
              <img
                src="/assets/images/h2.png"
                alt="Second visual"
                className="h-full w-full object-contain"
                style={{
                  borderRadius: "var(--img2-radius)",
                  filter: "none",
                  boxShadow: "none",
                }}
              />
            </div>
          </div>

          <div className="hero-neon-success-check">âœ“</div>

          <style>
            {`
              .hero-neon-card {
                opacity: 0;
              }

              .hero-neon-trace-svg {
                overflow: visible;
              }

              .hero-neon-card-one,
              .hero-neon-card-two {
                overflow: visible;
              }

              .hero-neon-reveal-one,
              .hero-neon-reveal-two {
                overflow: visible;
              }

              .hero-neon-reveal-one img,
              .hero-neon-reveal-two img {
                display: block;
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                object-position: center;
                filter: none !important;
                box-shadow: none !important;
                image-rendering: auto;
                transform: translateZ(0);
                backface-visibility: hidden;
              }

              .hero-neon-card-one {
                animation: heroCardOneShow var(--cycle) linear infinite;
              }

              .hero-neon-card-two {
                animation: heroCardTwoShow var(--cycle) linear infinite;
              }

              .hero-neon-trace {
                fill: none;
                stroke-width: 4;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                filter: none !important;
              }

              .hero-neon-trace-one {
                animation: heroTraceOneDraw var(--cycle) linear infinite;
              }

              .hero-neon-trace-two {
                animation: heroTraceTwoDraw var(--cycle) linear infinite;
              }

              .hero-neon-reveal {
                opacity: 0;
                background: transparent;
              }

              .hero-neon-reveal-one {
                clip-path: inset(50% 0 50% 0);
                animation: heroRevealOneCenter var(--cycle) linear infinite;
              }

              .hero-neon-reveal-two {
                clip-path: inset(50% 0 50% 0);
                animation: heroRevealTwoCenter var(--cycle) linear infinite;
              }

              .hero-neon-dotted-arrow {
                display: flex;
                align-items: center;
                gap: 8px;
                opacity: 1;
                filter: none;
              }

              .hero-neon-arrow-dot {
                width: 3px;
                height: 2px;
                border-radius: 999px;
                background: linear-gradient(90deg, #20D9FF, #B329DD);
                opacity: 0;
                transform: scale(0.45);
                box-shadow: none;
                filter: none;
                animation-duration: var(--cycle);
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                animation-fill-mode: both;
              }

              .hero-neon-arrow-head {
                width: 0;
                height: 0;
                margin-left: 2px;
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                border-left: 15px solid #B329DD;
                opacity: 0;
                filter: none;
                box-shadow: none;
                animation: heroArrowHeadShow var(--cycle) linear infinite;
              }

              .hero-neon-success-check {
                position: absolute;
                left: 42%;
                top: calc(50% + 48px);
                width: 32px;
                height: 32px;
                border-radius: 999px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #22C55E;
                color: #ffffff;
                font-size: 21px;
                font-weight: 900;
                line-height: 1;
                opacity: 0;
                transform: translateX(-50%) scale(0.65);
                box-shadow: none;
                filter: none;
                animation: heroSuccessCheckShow var(--cycle) linear infinite;
              }

              @keyframes heroCardOneShow {
                0%, 2% { opacity: 0; }
                3%, 86.5% { opacity: 1; }
                86.7%, 100% { opacity: 0; }
              }

              @keyframes heroCardTwoShow {
                0%, 44% { opacity: 0; }
                45%, 86.5% { opacity: 1; }
                86.7%, 100% { opacity: 0; }
              }

              @keyframes heroTraceOneDraw {
                0%, 3% {
                  opacity: 0;
                  stroke-dashoffset: 1000;
                }

                4% {
                  opacity: 1;
                  stroke-dashoffset: 1000;
                }

                22% {
                  opacity: 1;
                  stroke-dashoffset: 0;
                }

                86.5% {
                  opacity: 1;
                  stroke-dashoffset: 0;
                }

                86.7%, 100% {
                  opacity: 0;
                  stroke-dashoffset: 0;
                }
              }

              @keyframes heroRevealOneCenter {
                0%, 6% {
                  opacity: 0;
                  clip-path: inset(50% 0 50% 0);
                }

                11% {
                  opacity: 1;
                  clip-path: inset(38% 0 38% 0);
                }

                16% {
                  opacity: 1;
                  clip-path: inset(20% 0 20% 0);
                }

                22% {
                  opacity: 1;
                  clip-path: inset(0 0 0 0);
                }

                86.5% {
                  opacity: 1;
                  clip-path: inset(0 0 0 0);
                }

                86.7%, 100% {
                  opacity: 0;
                  clip-path: inset(0 0 0 0);
                }
              }

              .hero-neon-arrow-dot:nth-child(1) { animation-name: heroDot01; }
              .hero-neon-arrow-dot:nth-child(2) { animation-name: heroDot02; }
              .hero-neon-arrow-dot:nth-child(3) { animation-name: heroDot03; }
              .hero-neon-arrow-dot:nth-child(4) { animation-name: heroDot04; }
              .hero-neon-arrow-dot:nth-child(5) { animation-name: heroDot05; }
              .hero-neon-arrow-dot:nth-child(6) { animation-name: heroDot06; }
              .hero-neon-arrow-dot:nth-child(7) { animation-name: heroDot07; }
              .hero-neon-arrow-dot:nth-child(8) { animation-name: heroDot08; }
              .hero-neon-arrow-dot:nth-child(9) { animation-name: heroDot09; }
              .hero-neon-arrow-dot:nth-child(10) { animation-name: heroDot10; }
              .hero-neon-arrow-dot:nth-child(11) { animation-name: heroDot11; }
              .hero-neon-arrow-dot:nth-child(12) { animation-name: heroDot12; }
              .hero-neon-arrow-dot:nth-child(13) { animation-name: heroDot13; }
              .hero-neon-arrow-dot:nth-child(14) { animation-name: heroDot14; }

              @keyframes heroDot01 {
                0%, 24% { opacity: 0; transform: scale(0.45); }
                24.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot02 {
                0%, 25% { opacity: 0; transform: scale(0.45); }
                25.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot03 {
                0%, 26% { opacity: 0; transform: scale(0.45); }
                26.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot04 {
                0%, 27% { opacity: 0; transform: scale(0.45); }
                27.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot05 {
                0%, 28% { opacity: 0; transform: scale(0.45); }
                28.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot06 {
                0%, 29% { opacity: 0; transform: scale(0.45); }
                29.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot07 {
                0%, 30% { opacity: 0; transform: scale(0.45); }
                30.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot08 {
                0%, 31% { opacity: 0; transform: scale(0.45); }
                31.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot09 {
                0%, 32% { opacity: 0; transform: scale(0.45); }
                32.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot10 {
                0%, 33% { opacity: 0; transform: scale(0.45); }
                33.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot11 {
                0%, 34% { opacity: 0; transform: scale(0.45); }
                34.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot12 {
                0%, 35% { opacity: 0; transform: scale(0.45); }
                35.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot13 {
                0%, 36% { opacity: 0; transform: scale(0.45); }
                36.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroDot14 {
                0%, 37% { opacity: 0; transform: scale(0.45); }
                37.8%, 86.5% { opacity: 1; transform: scale(1); }
                86.7%, 100% { opacity: 0; transform: scale(0.45); }
              }

              @keyframes heroArrowHeadShow {
                0%, 38% {
                  opacity: 0;
                  transform: translateX(-6px) scale(0.75);
                }

                40%, 86.5% {
                  opacity: 1;
                  transform: translateX(0) scale(1);
                }

                86.7%, 100% {
                  opacity: 0;
                  transform: translateX(6px) scale(0.8);
                }
              }

              @keyframes heroTraceTwoDraw {
                0%, 43% {
                  opacity: 0;
                  stroke-dashoffset: 1000;
                }

                44% {
                  opacity: 1;
                  stroke-dashoffset: 1000;
                }

                62% {
                  opacity: 1;
                  stroke-dashoffset: 0;
                }

                86.5% {
                  opacity: 1;
                  stroke-dashoffset: 0;
                }

                86.7%, 100% {
                  opacity: 0;
                  stroke-dashoffset: 0;
                }
              }

              @keyframes heroRevealTwoCenter {
                0%, 45% {
                  opacity: 0;
                  clip-path: inset(50% 0 50% 0);
                }

                51% {
                  opacity: 1;
                  clip-path: inset(38% 0 38% 0);
                }

                56% {
                  opacity: 1;
                  clip-path: inset(20% 0 20% 0);
                }

                62% {
                  opacity: 1;
                  clip-path: inset(0 0 0 0);
                }

                86.5% {
                  opacity: 1;
                  clip-path: inset(0 0 0 0);
                }

                86.7%, 100% {
                  opacity: 0;
                  clip-path: inset(0 0 0 0);
                }
              }

              @keyframes heroSuccessCheckShow {
                0%, 63% {
                  opacity: 0;
                  transform: translateX(-50%) scale(0.65);
                }

                64%, 86.5% {
                  opacity: 1;
                  transform: translateX(-50%) scale(1);
                }

                86.7%, 100% {
                  opacity: 0;
                  transform: translateX(-50%) scale(0.65);
                }
              }

              @media (max-width: 1024px) {
                .hero-neon-flow-wrap {
                  flex-direction: column;
                  gap: 28px;
                }

                .hero-neon-arrow-wrap {
                  transform: rotate(90deg) !important;
                }

                .hero-neon-success-check {
                  top: calc(50% + 42px);
                }

                .hero-neon-card {
                  width: 300px !important;
                  height: auto !important;
                  min-height: 450px;
                }

                .hero-neon-card-two {
                  width: 310px !important;
                }

                .hero-neon-reveal img {
                  object-fit: contain;
                }
              }
            `}
          </style>
        </div>
        )}
      </Reveal>

      <ul className="mt-2 mb-0 grid w-full list-none grid-cols-5 gap-2 p-0 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {[
          "Rich Media",
          "Interactive buttons & suggested replies",
          "Verified brand identity inside the messaging app",
          "Real-time engagement insights and analytics",
          "Automatic SMS fallback for unsupported devices",
        ].map((feature, index) => (
          <Reveal
            as="li"
            key={feature}
            onMount
            /* Outer boxes drift in from their own edge, the middle one grows. */
            direction={index <= 1 ? "left" : index === 2 ? "center" : "right"}
            delay={0.6 + index * 0.08}
            duration={0.55}
            className={`flex min-h-[82px] !mb-0 items-center gap-3 rounded-2xl border border-[#DDE9F7] bg-white/85 px-4 text-left text-[0.95rem] font-normal leading-[1.35] text-[#242424] shadow-[0_8px_24px_rgba(15,23,42,0.06)] ${index === 4 ? "max-lg:col-span-2 max-sm:col-span-1" : ""}`}
          >
            {index === 0 ? (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#0B78F0] shadow-[0_4px_12px_rgba(11,95,198,0.12)]">
                  <ImageIcon size={27} strokeWidth={2} />
                </span>
                <span>
                  <strong className="block text-[1rem] font-bold text-[#111827]">
                    Rich Media
                  </strong>
                  <span className="mt-1 block text-[0.82rem] leading-[1.35] text-[#5B667A]">
                    Images, videos &amp; carousels
                  </span>
                </span>
              </>
            ) : index === 1 ? (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#0B78F0] shadow-[0_4px_12px_rgba(11,95,198,0.12)]">
                  <MousePointerClick size={27} strokeWidth={2} />
                </span>
                <span>
                  <strong className="block text-[1rem] font-bold text-[#111827]">
                    Interactive Actions
                  </strong>
                  <span className="mt-1 block text-[0.82rem] leading-[1.35] text-[#5B667A]">
                    Buttons &amp; suggested replies
                  </span>
                </span>
              </>
            ) : index === 2 ? (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#0B78F0] shadow-[0_4px_12px_rgba(11,95,198,0.12)]">
                  <ShieldCheck size={27} strokeWidth={2} />
                </span>
                <span>
                  <strong className="block text-[1rem] font-bold text-[#111827]">
                    Verified Branding
                  </strong>
                  <span className="mt-1 block text-[0.82rem] leading-[1.35] text-[#5B667A]">
                    Trusted brand identity
                  </span>
                </span>
              </>
            ) : index === 3 ? (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#0B78F0] shadow-[0_4px_12px_rgba(11,95,198,0.12)]">
                  <BarChart3 size={27} strokeWidth={2.3} />
                </span>
                <span>
                  <strong className="block text-[1rem] font-bold text-[#111827]">
                    Live Insights
                  </strong>
                  <span className="mt-1 block text-[0.82rem] leading-[1.35] text-[#5B667A]">
                    Real-time engagement analytics
                  </span>
                </span>
              </>
            ) : index === 4 ? (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF6FF] text-[#0B78F0] shadow-[0_4px_12px_rgba(11,95,198,0.12)]">
                  <MessageSquareMore size={27} strokeWidth={2} />
                </span>
                <span>
                  <strong className="block text-[1rem] font-bold text-[#111827]">
                    SMS Fallback
                  </strong>
                  <span className="mt-1 block text-[0.82rem] leading-[1.35] text-[#5B667A]">
                    Automatic backup for unsupported devices
                  </span>
                </span>
              </>
            ) : (
              <>
                <CheckCircle
                  className="shrink-0 text-[#0B5FC6]"
                  size={20}
                  strokeWidth={1}
                />
                <h6>{feature}</h6>
              </>
            )}
          </Reveal>
        ))}
      </ul>

      <Reveal
        onMount
        delay={1.05}
        className="-mt-3 flex items-center justify-center gap-1.5 pt-0 max-sm:flex-col max-sm:gap-3"
      >
        <Link
          to="/signup"
          className="group inline-flex h-[60px] min-w-[250px] items-center justify-center gap-4.5 rounded-2xl border-2 border-transparent bg-[#0B5FC6] px-10 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0B5FC6] hover:bg-white hover:!text-[#0B5FC6] hover:shadow-[0_12px_30px_rgba(14,165,233,0.22)]"
        >
          <Code2
            size={28}
            strokeWidth={2}
            className="text-white transition-colors duration-300 group-hover:!text-[#0B5FC6]"
          />
          <span className="transition-colors duration-300 group-hover:text-[#0B5FC6]">
            Start Building
          </span>
        </Link>

        <Link
          to="/book-demo"
          className="group inline-flex h-[60px] min-w-[250px] items-center justify-center gap-3 rounded-2xl border-2 border-[#0B5FC6] bg-white px-10 text-[15px] font-semibold !text-[#0B5FC6] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B5FC6] hover:text-white hover:shadow-[0_12px_30px_rgba(14,165,233,0.22)]"
        >
          <CalendarDays
            size={28}
            strokeWidth={2}
            className="pointer-events-none text-[#0B5FC6] transition-colors duration-300 group-hover:text-white"
          />
          <span className="transition-colors duration-300 group-hover:text-white">
            Request a Demo
          </span>
          
        </Link>
      </Reveal>
    </div>
  </div>
</section>

      {/* â”€â”€ 3. IMAGE MERGE SECTION â”€â”€ */}
      <div className="relative overflow-hidden bg-white">
  <RCSImageMergeSection />
</div>







      {/* â”€â”€ 4. WHY BUSINESSES ARE MOVING TO RCS â”€â”€ */}
      {/* <section className="relative bg-white min-h-[900px] pt-[20px] pb-[70px] overflow-hidden"> */}
      <section className="relative overflow-hidden bg-[#f0f9ff] pb-[140px] pt-[100px] max-md:pb-[56px] max-md:pt-[58px]">

        {/* Content */}
        <div className="container relative z-10 flex h-full w-full flex-col pt-[10px] max-md:px-4 max-md:pt-0">
          {/* Header */}
          <div className="relative z-30 w-full px-6 text-center max-md:px-0">
            <Reveal>
              <h2 className="mb-3 text-[clamp(1.65rem,7vw,2rem)] font-extrabold leading-[1.16] tracking-tight text-black">
                Why Businesses are Moving to RCS?
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mx-auto !mb-0 max-w-[1250px] text-center !text-[1.12rem] font-normal leading-[1.65] text-[#334155] xl:!text-[1.2rem] max-md:!text-[0.95rem] max-md:leading-[1.55]">
                RCS is like SMS upgraded for todayâ€™s customers with brand verification, images, buttons, carousels, and quick actions built right into the message.
              </p>
            </Reveal>
{/* 
            <Reveal delay={0.3}>
              <p className="mx-auto max-w-[1250px] text-center !text-[1.12rem] leading-[1.65] font-normal text-[#334155] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
                It helps businesses send messages that make it easier for customers to respond, explore, book, buy, or take action.
              </p>
            </Reveal> */}
          </div>

          {/* Left image space + right card grid */}
          {/* The reserved image panel only splits the row from xl up â€” below
              that it left the cards too narrow to read. */}
          <div className="mx-auto mt-[55px] grid w-full max-w-[1600px] items-start gap-[40px] max-md:mt-8 max-md:gap-7 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[560px] max-md:min-h-0 xl:block">
              {/* Artwork and its callouts scale as one unit, so enlarging the
                  image keeps every arrow on the point it marks. */}
              <div className="relative h-full min-h-[560px] scale-[1] max-md:min-h-0">
              <div
                aria-label="RCS feature image"
                className="h-full min-h-[560px] overflow-hidden rounded-[30px] max-md:min-h-0 max-md:rounded-[22px]"
              >
                <img
                  src="/assets/images/RCS aa.webp"
                  alt="RCS rich messaging preview"
                  className="mx-auto h-full w-[80%] object-contain p-6 max-md:h-auto max-md:w-full max-md:p-0"
                />
              </div>

              {/* Animated blue arrow + label callouts */}
              <div className="max-md:hidden">
              {/* Tip lands just outside the phone's left edge, aimed at the
                  brand logo; label sits clear of the phone. */}
              <WhyArrowCallout
                text="Branded"
                className="left-[8.2%] top-[16.4%]"
                labelClassName="right-[105%] top-[21px]"
                rotate={-17}
                tailDrop={8}
                delay={0}
              />
              <WhyArrowCallout
                text="Verified"
                className="left-[56.8%] top-[14.8%]"
                labelClassName="left-[107%] -top-[7px]"
                flipX
                rotate={-5}
                size={0.7}
                delay={0.25}
              />
              <WhyArrowCallout
                text="Interactive"
                className="left-[0.2%] top-[51.2%]"
                /* Label sits below the tail, clear of the arc, so the arrow can
                   stay at the card's edge instead of running over the artwork. */
                labelClassName="left-0 top-[50px]"
                rotate={-30}
                tailDrop={8}
                delay={0.5}
              />
              <WhyArrowCallout
                text="Rich Visuals"
                className="left-[75%] top-[52.9%]"
                labelClassName="right-[-45px] top-[38px]"
                flipX
                rotate={-10}
                tailDrop={20}
                delay={0.75}
              />
              </div>
              </div>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-[12px] max-md:gap-4 md:auto-rows-[minmax(210px,auto)] md:grid-cols-6">
            {[
              {
                title: "Rich Media Messaging",
                desc: "Send visually engaging messages with images, videos and product cards instead of plain text. This allows brands to showcase offers, services or updates in a far more compelling way.",
                gradient: "from-[#11B7F0] to-[#075FEA]",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
                    <rect x="9" y="12" width="26" height="22" rx="4" stroke="white" strokeWidth="3" />
                    <path d="M12 30l7-7 5 5 4-4 7 7" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="31" cy="18" r="2.5" fill="white" />
                    <circle cx="35" cy="34" r="8" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="2.5" />
                    <path d="M33 30.5l6 3.5-6 3.5v-7z" fill="white" />
                  </svg>
                ),
              },
              {
                title: "Verified Brand Identity",
                desc: "Display your brand name, logo and verification badge directly in the messaging inbox. Customers immediately recognize the sender, increasing trust and engagement.",
                gradient: "from-[#24D39A] to-[#0274C9]",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
                    <path
                      d="M24 6l15 6v10.5C39 32 32.8 38.8 24 42 15.2 38.8 9 32 9 22.5V12l15-6z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    <path d="M17 24l5 5 10-11" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Interactive Conversations",
                desc: "Enable customers to take action instantly with suggested replies and clickable buttons. They can browse offers, confirm bookings or track orders without leaving the chat.",
                gradient: "from-[#24D5E7] to-[#0B65E8]",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
                    <path d="M9 12h30v20H20l-11 8V12z" stroke="white" strokeWidth="3" strokeLinejoin="round" />
                    <circle cx="19" cy="22" r="2.2" fill="white" />
                    <circle cx="24" cy="22" r="2.2" fill="white" />
                    <circle cx="29" cy="22" r="2.2" fill="white" />
                  </svg>
                ),
              },
              {
                title: "Higher Engagement Rates",
                desc: "Rich visuals and interactive messaging naturally capture attention and encourage responses. This leads to better campaign performance compared to traditional SMS.",
                gradient: "from-[#13C8E8] to-[#0767E8]",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
                    <path d="M10 37h28" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <path d="M15 33v-8M24 33V20M33 33V13" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <path d="M12 24l9-8 7 5 9-11" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Real-Time Insights",
                desc: "Track delivery, reads and user interactions to understand how customers engage with your messages. These insights help optimize future campaigns and communication strategies.",
                gradient: "from-[#16CFE9] to-[#0865E9]",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none">
                    <rect x="9" y="11" width="30" height="26" rx="4" stroke="white" strokeWidth="3" />
                    <path d="M15 31v-7M24 31V18M33 31v-12" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <path d="M15 21l8-5 7 4 6-8" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((card, index) => (
              <Reveal
                key={index}
                /* Each card enters from the side it sits on in the grid:
                   0 and 3 are the left column, 1, 2 and 4 the right.
                   Mobile par cards ek hi column me stack hote hain â€” wahan
                   side-slide janky lagta hai, isliye seedha subtle fade-up. */
                direction={isMobile ? "up" : index === 0 || index === 3 ? "left" : "right"}
                strength={isMobile ? 0.2 : 1}
                duration={isMobile ? 0.3 : 0.6}
                amount={isMobile ? 0.08 : 0.2}
                /* Stack me har card apne scroll par khud trigger hota hai,
                   isliye mobile par stagger nahi chahiye. */
                delay={isMobile ? 0 : index * 0.09}
                className={`group relative h-full min-w-0 overflow-hidden rounded-[26px] border border-[#D7E8FA] bg-white px-7 py-7 transition-all duration-300 max-md:h-auto max-md:min-h-0 max-md:rounded-[20px] max-md:px-5 max-md:py-5 max-md:transition-none ${index === 0 ? "md:col-span-2 md:row-span-2" : ""} ${index === 1 || index === 2 ? "md:col-span-4" : ""} ${index >= 3 ? "md:col-span-3 md:min-h-[260px]" : ""}`}
              >
                {/* Animated left blue bar */}
                <div className="absolute left-0 top-0 h-full w-[5px] bg-[#D7E8FA] transition-all duration-300 group-hover:w-[9px] group-hover:bg-gradient-to-b group-hover:from-[#145FEF] group-hover:to-[#08C6D8]" />

                {/* Hover light wash */}
                <div className="absolute inset-y-0 left-0 w-[90px] bg-gradient-to-r from-[#EAF6FF] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Hover glow */}
                <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-[#EAF6FF]/70 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />

                <div className={`relative z-10 flex h-full flex-col text-left ${index === 0 || index === 1 || index === 2 ? "justify-start" : "justify-between"}`}>
                  <div className={`flex min-w-0 gap-4 max-md:flex-row max-md:items-center ${index === 0 ? "flex-col items-start" : "items-center"}`}>
                    <div
                      className={`flex h-[47px] w-[47px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${card.gradient} shadow-[0_12px_25px_rgba(20,95,239,0.18)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1`}
                    >
                      <span
                        className="rcs-why-icon-float flex items-center justify-center"
                        style={{ animationDelay: `${index * 0.4}s` }}
                      >
                        {card.icon}
                      </span>
                    </div>

                    <h5 className={`m-0 min-w-0 break-words text-[1.05rem] font-extrabold !leading-[1.25] text-[#111936] md:text-[13px] ${index === 3 ? "md:whitespace-nowrap" : ""}`}>
                      {card.title}
                    </h5>
                  </div>

                  <div className={`${index === 0 ? "mt-8 max-md:mt-4" : "mt-4"} text-left`}>
                    <p className="m-0 break-words text-left text-[1rem] font-normal leading-[1.45] text-[#242424] max-md:text-[0.94rem] max-md:leading-[1.55]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            </div>
          </div>
        </div>

        <style>
          {`
      @keyframes rcsWhyIconFloat {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-4px);
        }
      }

      .rcs-why-icon-float {
        animation: rcsWhyIconFloat 3.2s ease-in-out infinite;
        will-change: transform;
      }

      @media (max-width: 767px) {
        .rcs-why-icon-float {
          animation: none;
          will-change: auto;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .rcs-why-icon-float {
          animation: none;
        }
      }
    `}
        </style>
      </section>

      {/* â”€â”€ Automatic SMS Fallback (white bg) â”€â”€ */}
      <section className="relative overflow-hidden bg-white pt-[90px] pb-[90px] max-md:py-[55px]">
        {/* 3 images section - Seamless SMS Fallback */}
        <div className="container">
          {/* Section Heading */}
          <div className="mx-auto mb-0 max-w-[1450px] overflow-visible text-center max-md:mb-8">
            <Reveal>
              <h2 className="m-2 text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-tight text-[#0B5FC6] max-md:text-[2rem]">
                Automatic SMS Fallback When RCS isnâ€™t Available
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mx-auto !my-2 block max-w-[1250px] text-center !text-[1.12rem] font-normal !leading-[1.65] text-[#5B667A] max-lg:whitespace-normal xl:!text-[1.2rem] max-md:!text-[1rem] max-md:!leading-[1.6]">
                If a device or network does not support RCS, messages automatically fall back to SMS.{" "}
                <br className="max-lg:hidden" />
                This ensures your communication still reaches customers without disruption.
              </p>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal
            direction="center"
            delay={0.3}
            duration={0.75}
            className="mx-auto mt-10 w-full max-w-[1150px] max-md:mt-7"
          >
            <img
              src="/assets/images/availa.webp"
              alt="RCS message falling back to SMS when RCS is unavailable"
              className="mx-auto h-full max-h-[575px] w-full -translate-x-[40px] object-contain max-md:max-h-[360px] max-md:translate-x-0"
            />
          </Reveal>
        </div>
      </section>





      {/* â”€â”€ 5. WHAT YOU CAN BUILD WITH VERTEX RCS? â”€â”€ */}
      <section className="relative min-h-[900px] overflow-hidden bg-[#f0f9ff] py-[80px] max-md:min-h-0 max-md:py-[56px]">
        <div className="mx-auto w-full max-w-[1500px] px-6 max-md:px-4">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-[1500px] overflow-visible text-center max-md:mb-7">
            <Reveal>
              <h2 className="m-2 whitespace-nowrap text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-tight text-[#0B5FC6] max-lg:whitespace-normal max-md:m-0 max-md:text-[1.7rem] max-md:leading-[1.15]">
                What you can Build with Vertex RCS?
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mx-auto mt-2 max-w-[1450px] whitespace-nowrap !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] max-lg:whitespace-normal xl:!text-[1.2rem] max-md:mt-3 max-md:!text-[0.95rem] max-md:leading-[1.55]">
                The Vertex Suite RCS Platform provides a complete toolkit for businesses to design, deliver and manage rich messaging experiences at scale.
              </p>
            </Reveal>
          </div>

          {/* Mobile: touch-friendly tabs with one readable card. */}
          <div className="md:hidden">
            {(() => {
              const card = buildCards[activeBuildCard];
              const ActiveMobileIcon = card.icon;

              return (
                <>
                <div className="mb-3 flex items-center justify-between px-1">
                  <button
                    type="button"
                    aria-label="Previous card"
                    disabled={activeBuildCard === 0}
                    onClick={() => {
                      setBuildSlideDirection("left");
                      setActiveBuildCard((current) => Math.max(0, current - 1));
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B5FC6]/35 bg-white text-xl text-[#0B5FC6] shadow-sm disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    â€¹
                  </button>
                  <span className="text-xs font-semibold text-[#42617E]">
                    Swipe to explore Â· {activeBuildCard + 1}/{buildCards.length}
                  </span>
                  <button
                    type="button"
                    aria-label="Next card"
                    disabled={activeBuildCard === buildCards.length - 1}
                    onClick={() => {
                      setBuildSlideDirection("right");
                      setActiveBuildCard((current) =>
                        Math.min(buildCards.length - 1, current + 1)
                      );
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B5FC6]/35 bg-white text-xl text-[#0B5FC6] shadow-sm disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    â€º
                  </button>
                </div>
                <Reveal
                  key={card.title}
                  direction={buildSlideDirection}
                  strength={0.35}
                  duration={0.38}
                  className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0752D7] via-[#0868EA] to-[#08B8EC] px-5 py-5 text-white shadow-[0_18px_40px_rgba(4,79,180,0.22)]"
                  onTouchStart={(event) => {
                    mobileBuildTouchX.current = event.touches[0]?.clientX ?? null;
                  }}
                  onTouchEnd={(event) => {
                    if (mobileBuildTouchX.current === null) return;
                    const endX = event.changedTouches[0]?.clientX ?? mobileBuildTouchX.current;
                    const distance = endX - mobileBuildTouchX.current;
                    mobileBuildTouchX.current = null;

                    if (Math.abs(distance) < 45) return;

                    if (distance < 0 && activeBuildCard < buildCards.length - 1) {
                      setBuildSlideDirection("right");
                      setActiveBuildCard((current) => current + 1);
                    } else if (distance > 0 && activeBuildCard > 0) {
                      setBuildSlideDirection("left");
                      setActiveBuildCard((current) => current - 1);
                    }
                  }}
                >
                  <div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-3 py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15">
                      <ActiveMobileIcon size={18} strokeWidth={2.2} />
                    </span>
                    <h3 className="m-0 text-[1.08rem] font-extrabold leading-[1.25] text-white">
                      {card.title}
                    </h3>
                  </div>

                  <div className="overflow-hidden rounded-[18px] border border-white/20 bg-white/10 p-3">
                    <img
                      src={card.customImage}
                      alt={card.title}
                      className="mx-auto h-[210px] w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
                    />
                  </div>

                  <div className="pt-5">
                    <p className="m-0 text-[1.03rem] font-normal leading-[1.5] !text-white">
                      {card.heading}{" "}
                      <span className="font-bold">{card.highlight}</span>{" "}
                      {card.headingAfter || ""}
                    </p>
                    <p className="mb-0 mt-3 text-[0.92rem] leading-[1.55] !text-white">
                      {card.desc}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-2 max-[360px]:grid-cols-1">
                      {card.points.map((point) => (
                        <div
                          key={point}
                          className="flex min-h-11 items-center rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-[0.8rem] font-semibold leading-[1.3] text-white"
                        >
                          {point}
                        </div>
                      ))}
                    </div>

                  </div>
                </Reveal>
                </>
              );
            })()}
          </div>

          {/* Accordion Slider */}
          <Reveal
            direction="center"
            delay={0.3}
            duration={0.75}
            className="mx-auto flex h-[600px] w-full gap-[16px] overflow-hidden rounded-[24px] bg-transparent max-md:hidden"
          >
            {buildCards.map((card, index) => {
              const isActive = activeBuildCard === index;
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  onClick={(e) => {
                    if (e.defaultPrevented) return;
                    if (e.target.closest("[data-arrow-control='true']")) return;

                    setActiveBuildCard(index);
                  }}
                  /* Collapsed rail narrows on tablet/laptop so the open card
                     keeps a readable width. */
                  className={`group relative h-full cursor-pointer overflow-hidden rounded-[18px] shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-md:!flex-[1_1_auto]
        ${isActive ? "flex-[1_1_0%]" : "flex-[0_0_82px] max-xl:flex-[0_0_64px] max-lg:flex-[0_0_52px]"}
      `}
                  style={{
                    backgroundImage: 'url("/assets/images/Blue BG.png")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* MOVING HEADER - fixed place, only rotates */}
                  <div className="pointer-events-none absolute left-8 top-[26px] z-[8] h-[34px]">
                    <div className="relative h-[34px] w-[520px]">
                      {/* Icon + Title Group */}
                      <div
                        className={`absolute left-0 top-0 flex items-center gap-3 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                          ? "rotate-0 rounded-full border border-white/25 bg-white/10 py-[7px] pl-[7px] pr-5 backdrop-blur-[2px]"
                          : "rotate-90"
                          }`}
                        style={{
                          transformOrigin: "16px 16px",
                        }}
                      >
                        {/* Icon */}
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-[0_0_16px_rgba(255,255,255,0.12)]">
                          <Icon size={16} strokeWidth={2.2} />
                        </div>

                        {/* Title */}
                        <span className="block whitespace-nowrap text-[25px] font-bold leading-none tracking-[0.35px] text-white">
                          {card.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Plus button only when closed */}
                  {!isActive && (
                    <button
                      type="button"
                      data-card-control="true"
                      aria-label="Open card"
                      onPointerDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveBuildCard(index);
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="absolute bottom-[22px] left-1/2 z-[9999] flex h-[34px] w-[34px] -translate-x-1/2 items-center justify-center rounded-full border border-white/70 bg-white/10 text-[22px] leading-none text-white transition-all duration-300 hover:bg-white/20"
                      style={{ pointerEvents: "auto" }}
                    >
                      +
                    </button>
                  )}

                  {/* ACTIVE CONTENT */}
                  <div
                    className={`absolute inset-0 z-[3] grid h-full grid-cols-[1.08fr_0.92fr] items-center gap-8 px-8 pb-8 pt-[70px] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                      ? "pointer-events-auto opacity-100 translate-x-0 transition-all duration-[850ms] delay-[260ms]"
                      : "pointer-events-none opacity-0 translate-x-0 transition-none duration-0 delay-0"
                      }`}
                  >
                    {/* Left */}
                    <div className="flex h-full max-w-[600px] flex-col justify-start pt-[55px] pb-[18px]">
                      <h3
                        className={`!mb-4 max-w-[560px] ${card.headingSize || "text-[clamp(22px,2.1vw,34px)]"
                          } font-extrabold leading-[1.15] !text-white`}
                      >
                        {card.heading}{" "}
                        <span className="text-white !font-bold">{card.highlight}</span>{" "}
                        {card.headingAfter || ""}
                      </h3>

                      <p
                        className={`!mb-0 !mt-0 max-w-[520px] ${card.descSize || "text-[15px]"
                          } leading-[1.6] !text-white`}
                      >
                        {card.desc}
                      </p>

                      <div className="mt-[50px]">
                        <p className="!mb-4 text-[15px] font-bold !text-[white]">
                          {index === 1
                            ? "Instead of typing responses, users can simply tap:"
                            : index === 2
                              ? "Your brand appears with:"
                              : index === 3
                                ? "Perfect for:"
                                : index === 4
                                  ? "Businesses can see:"
                                  : index === 5
                                    ? "Delivery adapts through:"
                                    : "Example actions:"}
                        </p>

                        <ul className="m-0 flex w-fit list-none flex-col gap-[10px] p-0">
                          {card.points.map((point) => (
                            <li
                              key={point}
                              className={`!m-0 flex items-center gap-[12px] ${index === 5
                                ? "px-0 py-1"
                                : "rounded-xl border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-[2px]"
                                } ${card.pointSize || "text-[15px]"} font-semibold !text-[white]`}
                            >
                              {index === 5 && (
                                <span className="h-2 w-2 shrink-0 rounded-full bg-white" />
                              )}
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Right custom image */}
                    <div className="pointer-events-none hidden h-full items-start justify-center lg:flex">
                      <div
                        className="transition-transform duration-500"
                        style={{
                          width: card.imageWidth || "300px",
                          paddingTop: card.imageTop || "38px",
                          transform: `translateX(${card.imageX || "0px"})`,
                        }}
                      >
                        <img
                          src={card.customImage}
                          alt={card.title}
                          className="h-auto w-full object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
                          style={{
                            transform: `scale(${card.imageScale || 1})`,
                            transformOrigin: "center center",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Navigation arrow on last active card */}
                  {isActive && index === buildCards.length - 1 && (
                    <button
                      type="button"
                      data-arrow-control="true"
                      aria-label="Go to first card"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveBuildCard(0);
                      }}
                      className="pointer-events-auto absolute bottom-[22px] right-[28px] z-[10000] flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/70 bg-white/10 text-[28px] leading-none text-white transition-all duration-300 hover:bg-white/20 cursor-pointer"
                    >
                      â€º
                    </button>
                  )}

                </div>
              );
            })}
          </Reveal>
        </div>

        <style>
          {`
      @keyframes serviceProgress {
        from {
          width: 0%;
        }
        to {
          width: 100%;
        }
      }
    `}
        </style>
      </section>

      {/* â”€â”€ 6. CuRich Media MessagingSend visually engaging messages with images, videos and product cards instead of plain text.
This allows brands to showcase offers, servicesor updates in a far more compelling way.tomers can scroll through items, view details, and take action instantly all within the chat interface.ES â”€â”€ */}
      <RealBusinessUseCases assetBase="/assets/images" autoRotateMs={4000} />

      {/* RCS vs SMS vs WhatsApp Business API */}
      <section className="relative overflow-hidden !bg-[#f0f9ff] min-h-[820px] pt-[55px] pb-[45px]">
        {/* Main Header Area */}
        <div className="py-[42px] pb-[34px]">
          <div className="mx-auto w-full max-w-[1600px] px-6">
            <div className="mx-auto max-w-[1500px] text-center">
              <Reveal>
                <h2 className="mb-2 whitespace-nowrap text-center text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-tight text-[#0B5FC6] max-lg:whitespace-normal">
                  SMS{" "}
                  <span className="text-black">vs RCS</span>
                </h2>
              </Reveal>

              <Reveal delay={0.15}>
                <p className="mx-auto mt-0 mb-0 max-w-[1450px] whitespace-nowrap text-center !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] max-lg:whitespace-normal xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
                  Understanding the unique capabilities of modern communication channels.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="mx-auto mt-0 mb-0 max-w-[1450px] whitespace-nowrap text-center !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] max-lg:whitespace-normal xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
                  From simple text alerts to fully interactive rich-media experiences,
                  choose the right path for your customer engagement.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Direct Channel Comparison - Pricing Table Style */}
        <div className="relative pt-[14px] pb-[14px]">
          <div className="mx-auto w-full max-w-[1450px] px-6">
            <div className="rounded-[32px] bg-white px-12 py-12 shadow-[0_30px_70px_rgba(15,23,42,0.08)] max-md:px-5 max-md:py-8">
              {/* Heading */}
              <h3 className="mx-auto mb-[70px] w-fit rounded-[14px] bg-[#E5E7EB] px-7 py-3 text-center text-[clamp(1.3rem,2vw,1.8rem)] font-light uppercase leading-tight tracking-[0.12em] text-[#111827] max-md:mb-[40px] max-md:px-5">
                Messaging Capabilities Comparison
              </h3>

              <div className="mx-auto w-full max-w-[1144px] overflow-x-auto">
                <div className="grid min-w-[820px] grid-cols-[0.8fr_1fr_1fr] items-center gap-x-2 gap-y-4">
                  {/* Features column header â€” enters from the left, matching
                      its column. SMS sits in the middle, RCS on the right. */}
                  <Reveal
                    direction="left"
                    strength={0.5}
                    duration={0.55}
                    className="px-4 pt-5 pb-6 text-left max-md:pt-3 max-md:pb-4"
                  >
                    <span className="inline-block text-[2rem] font-extrabold leading-none text-[#111827] max-md:text-[1.6rem]">
                      Features
                    </span>
                  </Reveal>

                  {/* Channel Headers */}
                  {["SMS", "RCS"].map((name, headerIndex) => (
                    <Reveal
                      key={name}
                      direction={headerIndex === 0 ? "center" : "right"}
                      strength={0.5}
                      delay={0.08 + headerIndex * 0.08}
                      duration={0.55}
                      className="pt-5 pb-6 text-center max-md:pt-3 max-md:pb-4"
                    >
                      <span className="block text-[2rem] font-extrabold leading-none text-[#111827] max-md:text-[1.6rem]">
                        {name}
                      </span>
                    </Reveal>
                  ))}

                  {/* Rows */}
                  {[
                    ["Plain text messaging", true, true],
                    ["Rich media (Images, Video)", false, true],
                    ["Interactive buttons", false, true],
                    ["Carousel messages", false, true],
                    ["Verified business profile", false, true],
                    ["Read receipts", false, true],
                    ["App installation required", false, false],
                    ["Internet required", false, true],
                    ["Automatic fallback", "N/A", "SMS fallback"],
                  ].map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                      {/* Feature Name */}
                      <Reveal
                        as="p"
                        direction="left"
                        strength={0.5}
                        delay={rowIndex * 0.05}
                        duration={0.5}
                        className="m-0 px-4 text-left text-[0.95rem] !font-bold leading-[1.5] text-[#475569]"
                      >
                        <span className="relative inline-block origin-left pb-2 transition-transform duration-300 ease-out hover:scale-105 max-md:block max-md:w-full">
                          {row[0]}
                          <motion.span
                            aria-hidden="true"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: false, amount: 0.8 }}
                            transition={{ duration: 0.75, delay: rowIndex * 0.06, ease: "easeOut" }}
                            className="absolute bottom-0 left-0 h-[2px] w-[180px] origin-left rounded-full bg-[#0B78F0] max-md:w-full"
                          />
                        </span>
                      </Reveal>

                      {/* SMS + RCS cells â€” SMS grows in place, RCS slides from the right */}
                      {[row[1], row[2]].map((supported, cellIndex) => (
                        <Reveal
                          key={cellIndex}
                          direction={cellIndex === 0 ? "center" : "right"}
                          strength={0.5}
                          delay={rowIndex * 0.05 + (cellIndex + 1) * 0.06}
                          duration={0.5}
                          className={`flex h-[50px] w-[90%] items-center justify-center justify-self-center rounded-[12px] transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] ${supported === "N/A"
                            ? "bg-[#EEF2F7] hover:bg-[#E4EAF2]"
                            : supported
                              ? "bg-[#E1F0FF] hover:bg-[#D3E8FF]"
                              : "bg-[#FDE7E7] hover:bg-[#FADADA]"
                            }`}
                        >
                          {typeof supported === "string" ? (
                            <span className={`text-[0.9rem] font-bold ${supported === "SMS fallback" ? "text-[#0B5FC6]" : "text-[#64748B]"}`}>
                              {supported}
                            </span>
                          ) : supported ? (
                            <Check
                              size={22}
                              strokeWidth={3.5}
                              className="text-[#22C55E]"
                            />
                          ) : (
                            <X
                              size={22}
                              strokeWidth={3.5}
                              className="text-[#EF4444]"
                            />
                          )}
                        </Reveal>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Fallback Note Box */}
              <div className="mx-auto mt-10 flex w-fit max-w-[900px] items-center justify-center rounded-[12px] border border-[#CFE4FB] bg-[#EEF6FF] px-6 py-2.5 text-center max-md:mt-7 max-md:max-w-full max-md:px-4 max-md:py-2">
                <span className="block whitespace-nowrap text-[0.95rem] font-extrabold leading-[1.35] !text-[#0B5FC6] max-md:whitespace-normal">
                  RCS Fallback to SMS ensures 100% reach even when data is unavailable
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* How RCS Works */}
      <section className="relative overflow-visible bg-white pt-[60px] pb-[60px]">
        <div className="mx-auto max-w-[1500px] overflow-visible px-6">
            <div className="mx-auto w-full overflow-visible bg-transparent px-6 pt-[38px] pb-[28px]">
              {/* How RCS Works */}
              <div className="mx-auto max-w-[1450px] text-center">
                <Reveal>
                  <h2 className="mb-3 text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-tight !text-[Black]">
                    How RCS Messaging Works?
                  </h2>
                </Reveal>

                <Reveal delay={0.15}>
                  <p className="mb-0 !text-[1.25rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.35rem] max-md:!text-[1.08rem] max-md:leading-[1.6]">
                    From message setup to customer response, Vertex Suite manages the complete RCS journey through one connected workflow.
                  </p>
                </Reveal>
              </div>

              {/* Steps */}
              <div
                ref={howRcsWorksRef}
                className="mx-auto mt-[80px] grid w-full -translate-x-2 !max-w-[1650px] grid-cols-[repeat(6,minmax(0,1fr))] gap-3 overflow-visible pb-[0px] max-xl:grid-cols-3 max-md:translate-x-0 max-md:grid-cols-1"
              >
                {rcsSteps.map((step, index, arr) => (
                  <StepCard
                    key={index}
                    step={step}
                    index={index}
                    arr={arr}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>

              <div className="h-[20px] max-xl:h-[20px] max-md:h-[20px]" />

            </div>
        </div>

        <style>
          {`
      .neon-card-connector {
        background-image: repeating-linear-gradient(
          to right,
          #20D9FF 0px,
          #20D9FF 5px,
          transparent 5px,
          transparent 12px
        );
        background-size: 24px 4px;
        filter:
          drop-shadow(0 0 4px rgba(32, 217, 255, 0.95))
          drop-shadow(0 0 10px rgba(32, 217, 255, 0.75));
        animation: neonConnectorMove 1.8s linear infinite;
      }

      .neon-card-dot {
        left: 0px;
        box-shadow:
          0 0 8px rgba(32, 217, 255, 0.95),
          0 0 18px rgba(32, 217, 255, 0.75);
        animation: neonCardDotMove 2s linear infinite;
      }

      @keyframes neonConnectorMove {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 24px 0;
        }
      }

      @keyframes neonCardDotMove {
        0% {
          left: 0px;
          opacity: 0;
        }
        15% {
          opacity: 1;
        }
        85% {
          opacity: 1;
        }
        100% {
          left: calc(100% - 12px);
          opacity: 0;
        }
      }
    `}
        </style>
      </section>



    
  
  


{/* FAQ - Vertex Suite RCS Platform */}
<section className="relative overflow-hidden bg-[#f0f9ff] pt-[90px] pb-[35px] max-md:pt-[55px] max-md:pb-[35px]">
  <div className="mx-auto w-full max-w-[1450px] px-2">
    {/* Heading */}
    <div className="mx-auto mb-12 max-w-[1200px] text-center max-md:mb-8">
      <Reveal>
        <h2 className="m-2 text-center text-[clamp(1.15rem,3.4vw,2rem)] font-extrabold leading-tight text-[#111827]">
          Frequently Asked Questions
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-2 max-w-[1100px] text-center !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
          Canâ€™t find what youâ€™re looking for? Our team is here to help you
          understand Vertex Suite RCS messaging better.
        </p>
      </Reveal>
    </div>

    {/* FAQ Accordion */}
    <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-1">
      {[
        {
          question: "What is RCS Messaging?",
          answer:
            "RCS Messaging is an advanced business messaging solution that allows brands to send rich, interactive messages with images, videos, buttons, carousels, and verified sender profiles directly inside the native messaging app.",
        },
        {
          question: "How is RCS different from SMS?",
          answer:
            "Unlike SMS, RCS supports rich media, branded business profiles, interactive buttons, carousels, read receipts, and better customer engagement. SMS is mainly limited to plain text communication.",
        },
        {
          question: "How does Vertex Suite enhance RCS?",
          answer:
            "Vertex Suite helps businesses create, manage, automate, and track RCS campaigns from one platform. It supports rich message flows, customer actions, campaign insights, and fallback options.",
        },
        {
          question: "Which devices support RCS messaging?",
          answer:
            "RCS works on supported Android devices with compatible carriers and messaging apps. If RCS is not supported on a customerâ€™s device, messages can fall back to SMS where configured.",
        },
        {
          question: "Can I send promotional messages through RCS?",
          answer:
            "Yes, businesses can use RCS for promotional campaigns, product offers, service updates, reminders, order updates, booking confirmations, and customer engagement journeys.",
        },
        {
          question: "Can I integrate Vertex RCS with my existing CRM?",
          answer:
            "Yes, Vertex Suite can be integrated with existing CRM and business systems to sync customer journeys, leads, conversations, campaign actions, and engagement insights.",
        },
      ].map((item, index) => {
        const isOpen = activeFaq === index;

        return (
          <Reveal
            key={index}
            direction="center"
            delay={index * 0.07}
            duration={0.5}
            amount={0.3}
            className={`faq-moving-border group relative overflow-hidden rounded-[16px] border-none transition-all duration-300 ${
              isOpen
                ? "bg-white shadow-[0_14px_38px_rgba(15,23,42,0.055)]"
                : "bg-[#EEF3FD]"
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
                {item.question}
              </span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#111827] transition-all duration-300 max-md:h-9 max-md:w-9">
                {isOpen ? <X size={18} /> : <Plus size={18} />}
              </span>
            </button>

            {isOpen && (
              <div className="relative z-10 px-8 pb-[26px] max-md:px-5">
                <p className="!mb-0 max-w-[1050px] text-left text-[0.95rem] leading-[1.6] text-[#4B5563] max-md:text-[0.86rem]">
                  {item.answer}
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
      {/* /////////////////////////////////////////// */}



      {/* ////////////////////////////////////////////////// */}

    </main >
  );
}

export default RCS;



