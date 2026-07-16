
import React, { useState, useEffect, useRef } from "react";
import Link from "../../components/AppLink";
// import { } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import {
  Search,
  CircleHelp,
  ExternalLink,
  Info,
  Mail,
  Phone,
  CheckCircle,
  Send,
  RefreshCw,
  ListChecks,
  Code2,
  CalendarDays,
  ShieldCheck,
  Zap,
  ChevronDown,
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
  ArrowRight,
  SquarePen,
  CreditCard,
  Smartphone,
  MessageSquareText,
  Plus, X 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { pageContent } from "../../content/pageContent";
import UniversalSlider from "../../components/UniversalSlider";

/* ── Neon Arrow: dots appear 1-by-1, all vanish together, loop ── */
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

function RCSImageMergeSection({ setIsMergeSectionActive }) {
  const mergeSectionRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const rafRef = useRef(null);
  const isAligningRef = useRef(false);

  useEffect(() => {
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const applyAnimation = (progress) => {
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
      const isMobile = window.innerWidth <= 768;

      // Mobile par normal scroll rakho, koi wheel-lock nahi
      if (isMobile) return;

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

    applyAnimation(0);
    animate();
    handleMergeSectionVisibility();

    window.addEventListener("wheel", handleWheel, { passive: false });
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
  }, [setIsMergeSectionActive]);

  return (
    <section
      ref={mergeSectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      <div className="relative flex min-h-screen w-full items-start justify-center overflow-hidden bg-white">
        <div className="relative z-30 w-full px-6 pt-[75px] text-center">
          <h1 className="mb-2 text-[clamp(2.4rem,4.2vw,4.2rem)] font-extrabold leading-tight tracking-tight text-black">
            Understanding RCS:
            <span className="text-[#0B5FC6]"> The Evolution of SMS</span>
          </h1>

          <p className="mx-auto max-w-[1250px] text-center !text-[1.12rem] font-normal leading-[1.65] text-[#334155] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
            RCS is the next generation of SMS, enabling app-like messaging experiences in the native messaging inboxXno app download required.
          </p>
        </div>

        <img
          ref={leftImageRef}
          src="/assets/images/image-2.png"
          alt="Left RCS visual"
          className="absolute left-1/2 top-[59%] z-10 h-[70vh] max-h-[640px] w-auto max-w-[70vw] origin-center object-contain will-change-transform"
        />

        <img
          ref={rightImageRef}
          src="/assets/images/Rc2.png"
          alt="Right RCS visual"
          className="absolute left-1/2 top-[59%] z-20 h-[70vh] max-h-[640px] w-auto max-w-[70vw] origin-center object-contain will-change-transform"
        />
      </div>
    </section>
  );
}

function RCS() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeBuildCard, setActiveBuildCard] = useState(0);
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

  const safeRange = (start, end) => {
    const safeStart = Math.min(Math.max(start, 0), 0.999);
    const safeEnd = Math.min(Math.max(end, safeStart + 0.001), 1);

    return [safeStart, safeEnd];
  };

  const STEP_GAP = 0.07;
  const STEP_DURATION = 0.28;
  const STAIR_GAP = 58;

  const getStepStart = (index) => index * STEP_GAP;
  const getStepEnd = (index) => getStepStart(index) + STEP_DURATION;
  /* Slow page scroll only when How RCS cards section is visible */
  /* Content pinned rehta hai, to poora 0-1 range cards ke liye available hai.
     Aakhri card 0.90 par settle hota hai, uske baad page aage scroll hota hai. */
  const getCardTiming = (index) => {
    const start = 0.06 + index * 0.13;
    const end = start + 0.25;

    return { start, end };
  };


  //////////////////////////////////////
  function StepCard({ step, index, arr, scrollYProgress }) {
    const Icon = step.icon;

    /* saare cards niche se one-by-one aayenge */
    const { start, end } = getCardTiming(index);
    const [safeStart, safeEnd] = safeRange(start, end);

    /* cards ko aur niche se start karane ke liye */
    const cardStartDown = 240;

    const y = useTransform(
      scrollYProgress,
      [safeStart, safeEnd],
      [cardStartDown, 0]
    );

    const connectorStart = index * 0.13 + 0.20;
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
      <motion.div
        style={{ y, zIndex: 50 - index }}
        className="smooth-card relative overflow-visible rounded-[14px] border border-[#D7DEE8] bg-white px-4 pb-7 pt-10 text-center transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(15,23,42,0.05)]"
      >
        {index !== arr.length - 1 && (
          <motion.div
            className="pointer-events-none absolute left-[calc(100%-10px)] top-[82px] z-[9999] hidden h-[22px] w-[70px] origin-left max-xl:hidden"
            style={{
              opacity: connectorOpacity,
              scaleX: connectorScaleX,
            }}
          >
            <div className="neon-card-connector absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2" />

            <span className="absolute right-[-3px] top-1/2 z-[5] h-0 w-0 -translate-y-1/2 border-y-[6px] border-l-[10px] border-y-transparent border-l-[#20D9FF] drop-shadow-[0_0_8px_rgba(32,217,255,0.95)]" />

            <span className="neon-card-dot absolute top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-[#20D9FF]" />
          </motion.div>
        )}

        <div className="mx-auto mb-6 mt-1 flex h-[86px] w-[86px] items-center justify-center rounded-full border border-[#D9E9FB] bg-white shadow-[0_0_0_7px_rgba(45,127,249,0.06)]">
          <Icon size={34} strokeWidth={1.8} className={step.iconColor} />
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
      </motion.div>
    );
  }

  /////////////////////////////
  // dotted lines logic in waving cards 
  function StepDot({ dotIndex, scrollYProgress, buildStart }) {
    const dotAppearStart = buildStart + dotIndex * 0.008;
    const dotAppearEnd = dotAppearStart + 0.012;

    const [safeDotStart, safeDotEnd] = safeRange(dotAppearStart, dotAppearEnd);

    const opacity = useTransform(
      scrollYProgress,
      [safeDotStart, safeDotEnd],
      [0, 1]
    );

    const scale = useTransform(
      scrollYProgress,
      [safeDotStart, safeDotEnd],
      [0.35, 1]
    );

    return (
      <motion.span
        style={{ opacity, scale }}
        className="h-[4px] w-[4px] rounded-full bg-[#CFCFCF]"
      />
    );
  }

  function StepTopNumber({ index, total, scrollYProgress }) {
    const number = String(index + 1).padStart(2, "0");

    const { end: cardEnd } = getCardTiming(index);

    /* Number tabhi aaye jab uska card align ho jaaye, aur phir tika rahe */
    const [safeNumberStart, safeNumberEnd] = safeRange(
      cardEnd - 0.05,
      cardEnd
    );

    const numberOpacity = useTransform(
      scrollYProgress,
      [safeNumberStart, safeNumberEnd],
      [0, 1]
    );

    const numberScale = useTransform(
      scrollYProgress,
      [safeNumberStart, safeNumberEnd],
      [0.75, 1]
    );

    const dots = 11;

    const nextTiming = index < total - 1 ? getCardTiming(index + 1) : null;

    /* Dots next card ke landing tak banenge */
    const buildStart = nextTiming ? nextTiming.end - 0.10 : 1;

    return (
      <div className="relative flex h-[70px] items-center justify-center">
        <motion.div
          style={{ opacity: numberOpacity, scale: numberScale }}
          className="relative z-20 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#D8D8D8] bg-white text-[1.05rem] font-semibold text-[#3A3A3A] shadow-[0_3px_8px_rgba(0,0,0,0.06)]"
        >
          {number}
        </motion.div>

        {index !== total - 1 && (
          <div className="absolute left-[calc(50%+34px)] top-1/2 z-10 flex h-[8px] w-[calc(100%-68px)] -translate-y-1/2 items-center justify-between">
            {Array.from({ length: dots }).map((_, dotIndex) => (
              <StepDot
                key={dotIndex}
                dotIndex={dotIndex}
                scrollYProgress={scrollYProgress}
                buildStart={buildStart}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  const rcsSteps = [
    {
      titlet: "Create & Configure",
      title: "Messages",
      desc: "Build rich, branded messages with images, videos, product cards and interactive buttons.",
      icon: SquarePen,
      iconColor: "text-[#2D7FF9]",
      bottomBar: "bg-[#2D7FF9]",
    },
    {
      title: "Send via RCS Network",
      desc: "Route the message securely through the RCS network for delivery.",
      icon: Send,
      iconColor: "text-[#2D7FF9]",
      bottomBar: "bg-[#2D7FF9]",
    },
    {
      title: "Deliver to Phone",
      desc: "Messages arrive in the native messaging inbox on supported devices.",
      icon: Smartphone,
      iconColor: "text-[#2BA9D9]",
      bottomBar: "bg-[#2BA9D9]",
    },
    {
      title: "Customer Interaction",
      desc: "Users tap buttons, browse offers, reply instantly and complete actions.",
      icon: MessageSquareText,
      iconColor: "text-[#45A5E8]",
      bottomBar: "bg-[#2D7FF9]",
    },
    {
      title: "Analytics Captured",
      desc: "Track delivery, reads, clicks and engagement in real time.",
      icon: BarChart3,
      iconColor: "text-[#7A68F5]",
      bottomBar: "bg-[#2D7FF9]",
    },
    {
      title: "SMS Fallback",
      desc: "If RCS is unavailable, the message is sent through SMS fallback.",
      icon: RefreshCw,
      iconColor: "text-[#9B7AF7]",
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
      heading: "Showcase Products with",
      highlight: "Rich Visual Conversations",
      desc: "Customers can scroll through items, view details and take action instantly X all within the chat interface.",
      visualTitle: "Eco-friendly Running Shoes",
      visualSub: "₹658",
      visualDesc: "Lightweight, breathable & made from recycled materials.",
      cta: "View Product",
      points: ["View product", "Book service", "Claim offer", "Browse catalog"],
      bg: "linear-gradient(135deg, #124E8C 0%, #33B5FA 100%)",
      icon: Package,

      customImage: "/assets/images/slide-card-01.png",
      imageWidth: "280px",
      imageTop: "100px",
      imageScale: 0.95,
      imageX: "-5px",

      headingSize: "text-[clamp(20px,2.05vw,32px)]",
      descSize: "!text-[18px]",
      pointSize: "!text-[15px]",
      visualWidth: "max-w-[250px]",
      visualImageHeight: "h-[65px]",
    },

    //card 2
    {
      title: "One-Tap Customer Actions",
      tag: "Interactive Buttons",
      heading: "Remove Friction with",
      highlight: "One-Tap Actions",
      desc: "Remove friction from customer interactions with interactive message buttons. Instead of typing responses, users can simply tap.",
      visualTitle: "Order #VTX12345",
      visualSub: "Out for delivery",
      visualDesc: "Your order will arrive today between 2:00–4:00 PM.",
      cta: "Track Delivery",
      points: ["Confirm Appointment", "Track Delivery", "Pay Now", "Contact Support"],
      bg: "linear-gradient(135deg, #124E8C 0%, #33B5FA 100%)",
      icon: MousePointerClick,

      customImage: "/assets/images/slide-card-02.png",
      imageWidth: "300px",
      imageTop: "225px",
      imageScale: 1.3,
      imageX: "-70px",

      headingSize: "text-[clamp(20px,2.05vw,32px)]",
      descSize: "!text-[18px]",
      pointSize: "!text-[15px]",
      visualWidth: "max-w-[250px]",
      visualImageHeight: "h-[80px]",
    },

    //card 3
    {
      title: "Branded Messaging Experiences",
      tag: "Verified Identity",
      heading: "Build Trust with",
      highlight: "Branded Messaging",
      desc: "Every message is delivered with a verified business identity. Customers immediately recognize trusted communications and engage more confidently.",
      visualTitle: "Elite Tech",
      visualSub: "Verified Business",
      visualDesc: "Luxury Watches, Now in a More Interactive Experience.",
      cta: "Verified",
      points: ["Logo", "Business name", "Verification badge"],
      bg: "linear-gradient(135deg, #124E8C 0%, #33B5FA 100%)",
      icon: BadgeCheck,

      customImage: "/assets/images/slide-card-03.png",
      imageWidth: "300px",
      imageTop: "245.5px",
      imageScale: 1.7,
      imageX: "-100px",

      headingSize: "text-[clamp(20px,2.05vw,32px)]",
      descSize: "!text-[18px]",
      pointSize: "!text-[15px]",
      visualWidth: "max-w-[250px]",
      visualImageHeight: "h-[140px]",
    },

    //card 4
    {
      title: "Swipeable Content & Offers",
      tag: "Carousel Messaging",
      heading: "Send Swipeable",
      highlight: "Content & Offers",
      desc: "Send carousel messages that allow users to swipe through multiple cards in a single message. Each card can contain its own image, text and call-to-action button.",
      visualTitle: "Goa Beach Retreat",
      visualSub: "From ₹18,000",
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

      headingSize: "text-[clamp(20px,2.05vw,32px)]",
      descSize: "!text-[18px]",
      pointSize: "!text-[15px]",
      visualWidth: "max-w-[250px]",
      visualImageHeight: "h-[50px]",
    },

    //card 5
    {
      title: "Engagement Signals & Insights",
      tag: "Messaging Analytics",
      heading: "Track Real-Time",
      highlight: "Engagement Insights",
      desc: "Unlike traditional SMS, RCS messaging provides real engagement data. This helps teams understand customer behavior and optimize messaging strategies.",
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

      headingSize: "text-[clamp(20px,2.05vw,32px)]",
      descSize: "!text-[18px]",
      pointSize: "!text-[15px]",
      visualWidth: "max-w-[250px]",
      visualImageHeight: "h-[50px]",
    },

    //Card 6
    {
      title: "Universal Message Delivery",
      tag: "SMS Fallback",
      heading: "Deliver Every Message with",
      highlight: "Universal Fallback",
      desc: "If a user’s device or network doesn’t support RCS, the system automatically switches to SMS fallback while RCS-enabled users enjoy the full interactive experience.",
      visualTitle: "RCS Payload → SMS Fallback",
      visualSub: "Text Message",
      visualDesc: "Messages are still delivered even when RCS is unavailable.",
      cta: "SMS Fallback",
      points: ["RCS Experience", "SMS Fallback", "Reliable delivery", "No disruption"],
      bg: "linear-gradient(135deg, #124E8C 0%, #33B5FA 100%)",
      icon: MessageSquareMore,

      customImage: "/assets/images/slide-card-06.png",
      imageWidth: "300px",
      imageTop: "290px",
      imageScale: 2.2,
      imageX: "-260px",

      headingSize: "text-[clamp(20px,2.05vw,32px)]",
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
    <main className="rcs-page w-full overflow-x-visible bg-[#e0f7ff] text-slate-600">

      {/* ── 1. HERO SECTION ── */}
      {/* <section className="relative bg-white min-h-[900px] pt-[140px] pb-[80px] overflow-hidden"> */}
     <section
  className="relative overflow-hidden bg-white bg-cover bg-center bg-no-repeat pt-[190px] pb-[60px] lg:min-h-[860px] max-lg:pt-[120px] max-lg:pb-[45px] max-md:pt-[75px] max-md:pb-[35px]"
  style={{
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)), url("/assets/images/bggg.jpeg")',
  }}
>


  <div className="container relative z-10">
    <div className="relative grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 max-lg:text-center">
      {/* Left Content Column */}
      <div className="mx-auto flex w-full max-w-[720px] flex-col gap-8 lg:mx-0 lg:-mt-20 xl:-mt-20 max-md:gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="mb-0 w-full text-[clamp(2.05rem,8vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#0B5FC6] max-lg:whitespace-normal lg:whitespace-nowrap">
           <span className="text-[#0B5FC6]">RCS</span> Business Messaging
          </h1>

          <h2 className="mt-0 mb-2 w-full text-[clamp(1.12rem,4.6vw,2.1rem)] font-bold leading-[1.3] text-[#334155] max-lg:whitespace-normal lg:whitespace-nowrap">
            {rcsData.heroTagline
              ? rcsData.heroTagline.replace("RCS Business Messaging ", "")
              : "for Rich, Interactive Customer Conversations"}
          </h2>
        </div>

        <p className="w-full max-w-[680px] !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] max-lg:mx-auto xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
          {rcsData.heroDescription}
        </p>

        <ul className="mt-16 mb-6 flex list-none flex-col gap-[3.5px] p-0 max-lg:items-center">
          <li className="flex items-start gap-3 text-[0.95rem] font-normal leading-[1.35] text-[#242424]">
            <CheckCircle
              className="shrink-0 text-[#0B5FC6]"
              size={20}
              strokeWidth={1}
            />
            <h6>Rich media messaging with images, videos and carousels</h6>
          </li>

          <li className="flex items-center gap-3 text-[0.95rem] font-normal leading-[1.1] text-[#242424]">
            <CheckCircle
              className="shrink-0 text-[#0B5FC6]"
              size={20}
              strokeWidth={1}
            />
            <h6>Interactive buttons & suggested replies</h6>
          </li>

          <li className="flex items-center gap-3 text-[0.95rem] font-normal leading-[1.1] text-[#242424]">
            <CheckCircle
              className="shrink-0 text-[#0B5FC6]"
              size={20}
              strokeWidth={1}
            />
            <h6>Verified brand identity inside the messaging app</h6>
          </li>

          <li className="flex items-center gap-3 text-[0.95rem] font-normal leading-[1.1] text-[#242424]">
            <CheckCircle
              className="shrink-0 text-[#0B5FC6]"
              size={20}
              strokeWidth={1}
            />
            <h6>Real-time engagement insights and analytics</h6>
          </li>

          <li className="flex items-center gap-3 text-[0.95rem] font-normal leading-[1.1] text-[#242424]">
            <CheckCircle
              className="shrink-0 text-[#0B5FC6]"
              size={20}
              strokeWidth={1}
            />
            <h6>Automatic SMS fallback for unsupported devices</h6>
          </li>
        </ul>

        <div className="-mt-4 flex items-center gap-3 pt-0 max-lg:justify-center max-sm:flex-col">
          {/* BUTTON 1 */}
          <Link
            to="/signup"
            className="group inline-flex items-center gap-4.5 rounded-2xl border-2 border-transparent bg-[#0B5FC6] px-3 py-3 text-[1.05rem] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0B5FC6] hover:bg-white hover:!text-[#0B5FC6] hover:shadow-[0_12px_30px_rgba(14,165,233,0.22)]"
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

          {/* BUTTON 2 */}
          <Link
            to="/book-demo"
            className="group inline-flex items-center gap-3 rounded-2xl border-2 border-[#0B5FC6] bg-#0B5FC6 px-3 py-3 text-[1.05rem] font-semibold !text-[#0B5FC6] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B5FC6] hover:text-white hover:shadow-[0_12px_30px_rgba(14,165,233,0.22)]"
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
        </div>
      </div>

      {/* Right Visual Column */}
      <div className="flex w-full max-w-[700px] items-start justify-end gap-4 justify-self-end lg:-mt-8 lg:ml-auto lg:pt-1 max-lg:mx-auto max-lg:justify-center max-sm:max-w-[360px]">
        <img
          src="/assets/images/RC11.png"
          alt="RCS business messaging visual one"
          className="mt-16 h-auto w-[45%] min-w-0 object-contain max-md:mt-8"
        />
        <div className="flex shrink-0 flex-col items-center gap-1 self-center">
          <span className="whitespace-nowrap text-sm font-semibold text-[#0B5FC6] max-sm:text-xs">
            Rcs Message
          </span>
          <span className="rounded-md bg-[#22C55E] px-2.5 py-1 text-xs font-semibold text-white max-sm:px-2 max-sm:text-[10px]">
            Sent
          </span>
          <div className="relative z-10 -mx-7 flex w-[calc(100%+3.5rem)] translate-x-0.5 items-center text-[#0B5FC6] max-sm:-mx-4 max-sm:w-[calc(100%+2rem)]">
            <span className="h-[3px] flex-1 bg-[#0B5FC6]" />
            <ArrowRight size={30} strokeWidth={2.5} className="-ml-3 shrink-0" />
          </div>
          <CheckCircle
            size={36}
            strokeWidth={2}
            className="shrink-0 text-[#22C55E] max-sm:size-6"
          />
        </div>
        <img
          src="/assets/images/RC12.png"
          alt="RCS business messaging visual two"
          className="h-auto w-[45%] min-w-0 object-contain"
        />
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

          <div className="hero-neon-success-check">✓</div>

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
      </div>
    </div>
  </div>
</section>




      {/* ── 3. IMAGE MERGE SECTION ── */}
      <div className="relative overflow-hidden bg-white">
  <RCSImageMergeSection />
</div>







      {/* ── 4. WHY BUSINESSES ARE MOVING TO RCS ── */}
      {/* <section className="relative bg-white min-h-[900px] pt-[20px] pb-[70px] overflow-hidden"> */}
      <section className="relative overflow-hidden bg-[#f0f9ff] pt-[100px] pb-[110px]">

        {/* Content */}
        <div className="container relative z-10 flex h-full w-full flex-col pt-[10px]">
          {/* Header */}
          <div className="relative z-30 w-full px-6 text-center">
            <h1 className="text-[clamp(2.4rem,4.2vw,4.2rem)] font-extrabold leading-tight tracking-tight text-black mb-2">
              Why Businesses Are Moving to RCS?
            </h1>

            <p className="mx-auto max-w-[1250px] text-center !text-[1.12rem] leading-[1.65] font-normal text-[#334155] !mb-0 xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
              RCS combines the reach of traditional messaging with the power of modern digital experiences.
            </p>

            <p className="mx-auto max-w-[1250px] text-center !text-[1.12rem] leading-[1.65] font-normal text-[#334155] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
              Rich, interactive conversations help businesses drive stronger engagement, faster responses and more customer action.
            </p>
          </div>

          {/* Cards */}
          <div className="mx-auto mt-[55px] grid w-full max-w-none grid-cols-1 gap-x-[30px] gap-y-[30px] md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Rich Media",
                desc: "Send images, videos, and product cards for more engaging messages.",
                gradient: "from-[#11B7F0] to-[#075FEA]",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none">
                    <rect x="9" y="12" width="26" height="22" rx="4" stroke="white" strokeWidth="3" />
                    <path d="M12 30l7-7 5 5 4-4 7 7" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="31" cy="18" r="2.5" fill="white" />
                    <circle cx="35" cy="34" r="8" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="2.5" />
                    <path d="M33 30.5l6 3.5-6 3.5v-7z" fill="white" />
                  </svg>
                ),
              },
              {
                title: "Verified Identity",
                desc: "Show your brand name, logo, and verification badge to build trust instantly.",
                gradient: "from-[#24D39A] to-[#0274C9]",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none">
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
                title: "Interactive Chats",
                desc: "Use buttons and suggested replies so customers can act faster.",
                gradient: "from-[#24D5E7] to-[#0B65E8]",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none">
                    <path d="M9 12h30v20H20l-11 8V12z" stroke="white" strokeWidth="3" strokeLinejoin="round" />
                    <circle cx="19" cy="22" r="2.2" fill="white" />
                    <circle cx="24" cy="22" r="2.2" fill="white" />
                    <circle cx="29" cy="22" r="2.2" fill="white" />
                  </svg>
                ),
              },
              {
                title: "Higher Engagement",
                desc: "Rich messaging captures attention and improves response rates.",
                gradient: "from-[#13C8E8] to-[#0767E8]",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none">
                    <path d="M10 37h28" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <path d="M15 33v-8M24 33V20M33 33V13" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <path d="M12 24l9-8 7 5 9-11" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Real-Time Insights",
                desc: "Track delivery, reads, and interactions to improve campaigns.",
                gradient: "from-[#16CFE9] to-[#0865E9]",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none">
                    <rect x="9" y="11" width="30" height="26" rx="4" stroke="white" strokeWidth="3" />
                    <path d="M15 31v-7M24 31V18M33 31v-12" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    <path d="M15 21l8-5 7 4 6-8" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "SMS Fallback",
                desc: "If RCS is unavailable, messages automatically switch to SMS.",
                gradient: "from-[#21C8E8] to-[#0B65E8]",
                icon: (
                  <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none">
                    <path d="M9 12h30v20H20l-11 8V12z" stroke="white" strokeWidth="3" strokeLinejoin="round" />
                    <text x="15" y="27" fill="white" fontSize="10" fontWeight="800">
                      SMS
                    </text>
                  </svg>
                ),
              },
            ].map((card, index) => (
              <div
                key={index}
                className="group relative h-[190px] overflow-hidden rounded-[26px] border border-[#D7E8FA] bg-white px-8 py-7 transition-all duration-300"
              >
                {/* Animated left blue bar */}
                <div className="absolute left-0 top-0 h-full w-[5px] bg-[#D7E8FA] transition-all duration-300 group-hover:w-[9px] group-hover:bg-gradient-to-b group-hover:from-[#145FEF] group-hover:to-[#08C6D8]" />

                {/* Hover light wash */}
                <div className="absolute inset-y-0 left-0 w-[90px] bg-gradient-to-r from-[#EAF6FF] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Hover glow */}
                <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-[#EAF6FF]/70 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex h-full items-center gap-6">
                  <div
                    className={`flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} shadow-[0_12px_25px_rgba(20,95,239,0.18)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1`}
                  >
                    {card.icon}
                  </div>

                  <div className="text-left">
                    <h4 className="mb-2 text-[18px] font-extrabold leading-tight text-[#111936]">
                      {card.title}
                    </h4>

                    <p className="text-left text-[1rem] font-normal leading-[1.35] text-[#242424]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 3 images section */}
      <section className="relative overflow-hidden bg-white pt-[35px] pb-[140px] max-md:py-[55px]">
        <div className="container">
          {/* Section Heading */}
          <div className="mx-auto mb-0 max-w-[1450px] overflow-visible text-center max-md:mb-8">
            <h1 className="m-2 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-tight text-[#0B5FC6] max-md:text-[2rem]">
              Seamless SMS Fallback
            </h1>

            <p className="mx-auto !my-2 block max-w-[1250px] text-center !text-[1.12rem] font-normal !leading-[1.65] text-[#5B667A] max-lg:whitespace-normal xl:!text-[1.2rem] max-md:!text-[1rem] max-md:!leading-[1.6]">
              If a device or network does not support RCS, messages automatically fall back to SMS. This ensures{" "}
              <br className="max-lg:hidden" />
              your communication still reaches customers without disruption.
            </p>
          </div>

          {/* Visual Area */}
          <div className="sms-fallback-visual relative mx-auto w-full max-w-[1150px] overflow-visible lg:h-[520px] lg:translate-y-[5%]">
            {/* Business Sends */}
            <div className="sms-heading sms-heading-left absolute left-[-15.5%] top-[-2%] z-40 max-md:static max-md:mb-3 max-md:text-center">
              <h4 className="!text-[18px] !text-[#0B5FC6] max-md:!text-[16px]">
                Business Sends RCS Message
              </h4>
            </div>

            <div className="sms-card sms-card-left absolute left-[-18.5%] top-[5%] w-[32%] overflow-visible p-[2px] max-md:static max-md:mx-auto max-md:w-full max-md:max-w-[280px]">
              <img
                src="/assets/images/A.png"
                alt="Business sends RCS message"
                className="block h-auto w-full object-contain"
              />
            </div>

            {/* RCS Supported */}
            <div className="sms-heading sms-heading-rich absolute right-[-10%] top-[-3%] z-40 max-md:static max-md:mb-3 max-md:mt-8 max-md:text-center">
              <h4 className="!text-[18px] !text-[#3E8B7C] max-md:!text-[16px]">
                RCS Supported - Rich
              </h4>
            </div>

            <div className="sms-card sms-card-rich absolute right-[-17%] top-[4%] w-[30%] overflow-visible p-[2px] max-md:static max-md:mx-auto max-md:w-full max-md:max-w-[280px]">
              <img
                src="/assets/images/B.png"
                alt="RCS supported rich card"
                className="block h-auto w-full object-contain"
              />
            </div>

            {/* Network Check */}
            <div className="sms-card sms-card-check absolute left-[78%] top-[60%] w-[17%] -translate-x-1/2 -translate-y-1/2 overflow-visible max-md:static max-md:mx-auto max-md:my-8 max-md:w-full max-md:max-w-[135px] max-md:translate-x-0 max-md:translate-y-0">
              <img
                src="/assets/images/D.png"
                alt="Network capability check"
                className="block h-auto w-full object-contain"
              />
            </div>

            {/* SMS Fallback */}
            <div className="sms-heading sms-heading-fallback absolute bottom-[6%] right-[-7.8%] z-40 max-md:static max-md:mb-3 max-md:text-center">
              <h4 className="!text-[18px] !text-[#F86967] max-md:!text-[16px]">
                SMS Fallback Path
              </h4>
            </div>

            <div className="sms-card sms-card-fallback absolute bottom-[-23.5%] right-[-17%] w-[29.9%] overflow-visible p-[1px] max-md:static max-md:mx-auto max-md:w-full max-md:max-w-[280px]">
              <img
                src="/assets/images/C.png"
                alt="SMS fallback path"
                className="block h-auto w-full object-contain"
              />
            </div>

            {/* SVG Dotted Lines + Moving Balls - Desktop Only */}
            <svg
              className="absolute left-0 top-[-75px] h-[118%] w-full pointer-events-none max-md:hidden"
              viewBox="0 0 1150 520"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="350%" height="400%">
                  <feGaussianBlur stdDeviation="1.4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                id="upperPath"
                d="M 155 320 C 220 320, 330 316, 470 300 C 650 278, 835 220, 1000 140"
                fill="none"
                stroke="#797c60ff"
                strokeWidth="1.6"
                strokeDasharray="4 8"
                strokeLinecap="round"
              />

              <path
                id="lowerPath"
                d="M 155 320 C 220 320, 335 326, 475 345 C 655 372, 845 430, 1000 505"
                fill="none"
                stroke="#6F7D80"
                strokeWidth="1.6"
                strokeDasharray="4 8"
                strokeLinecap="round"
              />

              <circle r="5.5" fill="#898989" strokeWidth="1">
                <animateMotion dur="4.5s" begin="3.2s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#lowerPath" />
                </animateMotion>
              </circle>

              <circle r="1" fill="#f0f9ff" strokeWidth="1" filter="url(#glow)">
                <animateMotion dur="4s" begin="2s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#upperPath" />
                </animateMotion>
              </circle>

              <circle r="5.5" fill="#0B5FC6" strokeWidth="1">
                <animateMotion dur="3s" begin="0s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#upperPath" />
                </animateMotion>
              </circle>
            </svg>
          </div>
        </div>
      </section>





      {/* ── 5. WHAT YOU CAN BUILD WITH VERTEX RCS? ── */}
      <section className="relative overflow-hidden bg-[#f0f9ff] min-h-[900px] py-[80px]">
        <div className="mx-auto w-full max-w-[1500px] px-6">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-[1500px] text-center overflow-visible max-md:mb-8">
            <h1 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-extrabold leading-tight text-[#0B5FC6] whitespace-nowrap max-lg:whitespace-normal m-2">
              What You Can Build with Vertex RCS?
            </h1>

            <p className="mx-auto mt-2 max-w-[1450px] !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] whitespace-nowrap max-lg:whitespace-normal xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
              The Vertex Suite RCS Platform provides a complete toolkit for businesses to design, deliver and manage rich messaging experiences at scale.
            </p>
          </div>

          {/* Accordion Slider */}
          <div className="mx-auto flex h-[600px] w-full gap-[16px] overflow-hidden rounded-[24px] bg-transparent max-md:h-[820px] max-md:flex-col">
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
                  className={`group relative h-full cursor-pointer overflow-hidden rounded-[18px] shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isActive ? "flex-[1_1_0%]" : "flex-[0_0_82px]"}
      `}
                  style={{
                    backgroundImage: 'url("/assets/images/BBgg.jpeg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* MOVING HEADER - fixed place, only rotates */}
                  <div className="pointer-events-none absolute left-8 top-[26px] z-[8] h-[34px]">
                    <div className="relative h-[34px] w-[420px]">
                      {/* Icon + Title Group */}
                      <div
                        className={`absolute left-0 top-0 flex items-center gap-3 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                          ? "rotate-0"
                          : "rotate-90"
                          }`}
                        style={{
                          transformOrigin: "16px 16px",
                        }}
                      >
                        {/* Icon */}
                        <div
                          className={`flex shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-[0_0_16px_rgba(255,255,255,0.12)] transition-all duration-[650ms] ${isActive ? "h-8 w-8" : "h-8 w-8"
                            }`}
                        >
                          <Icon size={16} strokeWidth={2.2} />
                        </div>

                        {/* Title */}
                        <span className="block whitespace-nowrap text-[18px] font-bold leading-none tracking-[0.35px] text-white">
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
                    <div className="flex h-full max-w-[600px] flex-col justify-start pt-[20px] pb-[18px]">
                      <h3
                        className={`!mb-4 max-w-[760px] ${card.headingSize || "text-[clamp(18px,1.7vw,28px)]"
                          } font-extrabold leading-[1.08] !text-white whitespace-nowrap`}
                      >
                        {card.heading}{" "}
                        <span className="text-[white]">{card.highlight}</span>
                      </h3>

                      <p
                        className={`!mb-0 !mt-0 max-w-[680px] ${card.descSize || "text-[12.5px]"
                          } leading-[1.45] !text-white`}
                      >
                        {card.desc}
                      </p>

                      <div className="mt-[70px]">
                        <p className="!mb-3 text-[12px] font-bold !text-[white]">
                          Example actions:
                        </p>

                        <ul className="m-0 grid list-none gap-[10px] p-0">
                          {card.points.map((point) => (
                            <li
                              key={point}
                              className={`!m-0 flex items-center gap-[6px] ${card.pointSize || "text-[10px]"
                                } !text-[white]`}
                            >
                              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#24D39A]" />
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
                      ›
                    </button>
                  )}

                </div>
              );
            })}
          </div>
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

      {/* RCS vs SMS vs WhatsApp Business API */}
      <section className="relative overflow-hidden !bg-white min-h-[820px] pt-[55px] pb-[45px]">
        {/* Main Header Area */}
        <div className="py-[42px] pb-[34px]">
          <div className="mx-auto w-full max-w-[1600px] px-6">
            <div className="mx-auto max-w-[1500px] text-center">
              <h1 className="mb-2 whitespace-nowrap text-center text-[clamp(2.2rem,4.5vw,3.2rem)] font-extrabold leading-tight text-[#0B5FC6] max-lg:whitespace-normal">
                RCS{" "}
                <span className="text-black">vs SMS</span>
              </h1>

              <p className="mx-auto mt-0 mb-0 max-w-[1450px] whitespace-nowrap text-center !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] max-lg:whitespace-normal xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
                Understanding the unique capabilities of modern communication channels.
              </p>

              <p className="mx-auto mt-0 mb-0 max-w-[1450px] whitespace-nowrap text-center !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] max-lg:whitespace-normal xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
                From simple text alerts to fully interactive rich-media experiences,
                choose the right path for your customer engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Direct Channel Comparison - Modern Card Table */}
        <div className="relative overflow-hidden pt-[14px] pb-[14px]">
          <div className="mx-auto w-full max-w-[1540px] px-6">
            <div className="rounded-[24px] border-[1.5px] border-[#CBD5E1] bg-white px-6 pt-6 pb-6 max-md:px-4">
              {/* Heading */}
              <h3 className="mb-0 text-center !text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-tight text-[#111827]">
                Direct Channel Comparison
              </h3>

              <p className="mx-auto max-w-[900px] text-center text-[1.12rem] leading-[1.5] text-[#64748B]">
                A side-by-side look at technical features and user reach.
              </p>

              {/* Table Layout */}
              <div className="!mt-6 w-full overflow-x-auto pb-1">
                <div className="grid min-w-[1000px] grid-cols-[1.35fr_1fr_1fr] gap-x-5 gap-y-2">
                  {/* Column Headers */}
                  <div className="comparison-hover-card flex h-[64px] items-center justify-start gap-3 rounded-[16px] border border-transparent bg-[#9AA8B8] px-7 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
                    <span className="relative z-10 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white shadow-[0_2px_6px_rgba(15,23,42,0.08)]">
                      <ListChecks
                        size={15}
                        strokeWidth={2.6}
                        className="text-[#6B7A8C]"
                      />
                    </span>

                    <h4 className="relative z-10 m-0 text-[0.95rem] font-extrabold leading-none !text-white">
                      Features
                    </h4>
                  </div>

                  {/* SMS Header */}
                  <div className="comparison-hover-card overflow-hidden rounded-t-[16px] border border-transparent">
                    <div className="relative z-10 flex h-[64px] items-center justify-center gap-3 rounded-t-[16px] bg-gradient-to-r from-[#5B8DF4] to-[#7EA7FA] px-4">
                      <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white text-[#5B8DF4] shadow-[0_10px_22px_rgba(15,23,42,0.14)]">
                        <Smartphone size={18} strokeWidth={2.2} />
                      </span>

                      <h4 className="m-0 text-[1.15rem] font-extrabold leading-none text-white">
                        SMS
                      </h4>
                    </div>
                  </div>

                  {/* RCS Header */}
                  <div className="comparison-hover-card overflow-hidden rounded-t-[16px] border border-transparent">
                    <div className="relative z-10 flex h-[64px] items-center justify-center gap-3 rounded-t-[16px] bg-gradient-to-r from-[#37A8E6] to-[#56BCEF] px-4">
                      <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white text-[#37A8E6] shadow-[0_10px_22px_rgba(15,23,42,0.14)]">
                        <MessageSquareText size={18} strokeWidth={2.2} />
                      </span>

                      <h4 className="m-0 text-[1.15rem] font-extrabold leading-none text-white">
                        RCS
                      </h4>
                    </div>
                  </div>

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
                    ["Automatic fallback", false, true],
                  ].map((row, rowIndex) => (
                    <React.Fragment key={rowIndex}>
                      {/* Feature Name */}
                      <div className="comparison-hover-card flex min-h-[42px] items-center rounded-[10px] border border-transparent bg-[#F1F4F7] px-6 text-[#64748B] hover:bg-[#E8EEF4]">
                        <span className="relative z-10 text-[1.12rem] font-medium leading-[1.5] text-[#64748B]">
                          {row[0]}
                        </span>
                      </div>

                      {/* SMS */}
                      <div className="comparison-hover-card flex min-h-[42px] items-center justify-center rounded-[10px] border border-transparent bg-[#EEF5FF] hover:bg-[#E3EEFF]">
                        {row[1] ? (
                          <span className="relative z-10 text-[1.08rem] font-extrabold text-[#16A34A] transition-transform duration-500">
                            ✓
                          </span>
                        ) : (
                          <span className="relative z-10 text-[1rem] font-extrabold text-red-500 transition-transform duration-500">
                            ×
                          </span>
                        )}
                      </div>

                      {/* RCS */}
                      <div className="comparison-hover-card flex min-h-[42px] items-center justify-center rounded-[10px] border border-transparent bg-[#EEF9FF] hover:bg-[#DFF3FF]">
                        {row[2] ? (
                          <span className="relative z-10 text-[1.08rem] font-extrabold text-[#16A34A] transition-transform duration-500">
                            ✓
                          </span>
                        ) : (
                          <span className="relative z-10 text-[1rem] font-extrabold text-red-500 transition-transform duration-500">
                            ×
                          </span>
                        )}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="col-span-3 mt-0 flex min-h-[44px] items-center justify-center px-2 text-center transition-all duration-500 ease-out">
                <span className="text-center mt-3 text-[0.95rem] font-extrabold leading-[1.35] text-[#0B5FC6]">
                  RCS Fallback to SMS ensures 100% reach even when data is unavailable
                </span>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
      .comparison-hover-card {
        position: relative;
        overflow: hidden;
        transform: translateY(0) scale(1);
        transition:
          transform 420ms cubic-bezier(0.16, 1, 0.3, 1),
          background 420ms cubic-bezier(0.16, 1, 0.3, 1),
          box-shadow 420ms cubic-bezier(0.16, 1, 0.3, 1),
          border-color 420ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      .comparison-hover-card::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          120deg,
          transparent 0%,
          rgba(255,255,255,0.75) 42%,
          transparent 70%
        );
        transform: translateX(-120%);
        transition: transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: none;
      }

      .comparison-hover-card:hover {
        transform: translateY(-5px) scale(1.018);
        box-shadow:
          0 14px 30px rgba(15, 23, 42, 0.10),
          0 0 0 1px rgba(11, 95, 198, 0.10);
        border-color: rgba(11, 95, 198, 0.20);
        z-index: 20;
      }

      .comparison-hover-card:hover::before {
        transform: translateX(120%);
      }

      .comparison-hover-card:hover span {
        transform: scale(1.08);
      }

      .comparison-hover-card span,
      .comparison-hover-card h4 {
        position: relative;
        z-index: 2;
      }
    `}
        </style>
      </section>



      {/* When to Use Each Channel + How RCS Works */}
      <section className="relative overflow-visible bg-[#f0f9ff] pt-[130px] pb-[60px]">
        <div className="mx-auto w-full max-w-[1500px] px-6">
          {/* Top Row */}
          <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 max-md:flex-col max-md:text-center">
            <div className="mx-auto flex max-w-[1320px] items-center justify-center gap-6 text-center max-md:flex-col">
              <div className="flex items-center justify-center gap-5 max-md:flex-col max-md:gap-3">
                <div>
                  <h1 className="mb-2 text-[2rem] font-extrabold leading-tight !text-[#111827] max-md:text-[1.7rem]">
                    When to Use Each Channel?
                  </h1>

                  <p className="mx-auto mb-0 max-w-[650px] !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
                    Strategize your communication based on user intent and urgency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Channel Cards */}
          <div className="mx-auto mt-16 grid max-w-[1320px] grid-cols-3 gap-8 max-lg:grid-cols-1">
            {[
              {
                title: "SMS Messaging",
                icon: Smartphone,
                bg: "bg-[#EDEDED]",
                hoverBg: "hover:bg-[#192A42]",
                iconColor: "text-[#64748B]",
                desc: "Best for critical, time-sensitive alerts like 2FA codes, appointment reminders and urgent system notifications. Universal reach ensures delivery to every mobile phone regardless of hardware or data connection.",
              },
              {
                title: "RCS Messaging",
                icon: Zap,
                bg: "bg-[#DCEEFF]",
                hoverBg: "hover:bg-[#192A42]",
                iconColor: "text-[#0B5FC6]",
                desc: "Ideal for high-engagement marketing, interactive shipping updates, and service discovery. Leverages the native messaging app for a trusted, branded experience without requiring third-party app downloads.",
              },
              {
                title: "WhatsApp Business",
                icon: FaWhatsapp,
                bg: "bg-[#F2FFF4]",
                hoverBg: "hover:bg-[#192A42]",
                iconColor: "text-[#22C55E]",
                desc: "Perfect for deep customer support, conversational commerce, and international engagement. Offers high-security end-to-end encryption and a massive global user base for complex two-way dialogues.",
              },
            ].map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className={`group rounded-[22px] ${card.bg} ${card.hoverBg} border border-[#E2E8F0] px-7 py-7 transition-colors duration-500 ease-out hover:shadow-[0_14px_35px_rgba(15,23,42,0.06)]`}
                >
                  <div className="mb-5 flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.05)]">
                    <Icon className={card.iconColor} size={22} strokeWidth={2.1} />
                  </div>

                  <h3 className="mb-2 text-[1.15rem] font-extrabold text-[#111827] transition-colors duration-500 group-hover:!text-white">
                    {card.title}
                  </h3>

                  <p className="mb-0 text-[0.95rem] leading-[1.75] text-[#475569] transition-colors duration-500 group-hover:!text-white">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sticky How RCS Works Area - runway jitna scroll, content pinned */}
        <div
          ref={howRcsStickyRef}
          className="relative mx-auto mt-[15px] h-[260vh] max-w-[1500px] overflow-visible px-6 max-xl:h-auto"
        >
          <div className="sticky top-[90px] max-xl:static">
            <div className="mx-auto w-full overflow-hidden rounded-[28px] border border-[#E3EAF3] bg-white px-6 pt-[38px] pb-[28px] shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
              {/* How RCS Works */}
              <div className="mx-auto max-w-[1450px] text-center">
                <h1 className="mb-3 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight !text-[Black]">
                  How RCS Messaging Works?
                </h1>

                <p className="mb-0 !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
                  A seamless flow from configuration to customer action.
                </p>
              </div>

              {/* Step Number Timeline */}
              <div className="mx-auto mt-[28px] grid w-full !max-w-[1650px] grid-cols-[repeat(6,minmax(230px,1fr))] gap-2 max-xl:hidden">
                {rcsSteps.map((_, index) => (
                  <StepTopNumber
                    key={index}
                    index={index}
                    total={rcsSteps.length}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>

              {/* Steps */}
              <div
                ref={howRcsWorksRef}
                className="smooth-scroll-section mx-auto mt-0 grid w-full !max-w-[1650px] grid-cols-[repeat(6,minmax(230px,1fr))] gap-2 overflow-visible pb-[0px] pt-[15px] max-xl:grid-cols-3 max-md:grid-cols-1"
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
              {/* Spacer for transformed staircase cards */}
              <div className="h-[20px] max-xl:h-[20px] max-md:h-[20px]" />

              {/* Bottom Info Strip */}
              <div className="mx-auto mt-2 mb-0 flex max-w-[1450px] items-center gap-2 rounded-[14px] border border-[#D8E8F8] bg-[#0B5FC6] px-5 py-3 max-md:flex-col max-md:text-center">
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#D6EBFF] text-[#0B5FC6]">
                  <ShieldCheck size={32} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="mb-1 text-[0.92rem] font-extrabold uppercase tracking-[0.03em] !text-[white]">
                    Built for Business
                  </p>

                  <p className="mb-0 text-[0.95rem] leading-[1.55] !text-[white]">
                    RCS ensures richer conversations, stronger engagement, and reliable delivery — with intelligent fallback to keep every message moving.
                  </p>
                </div>
              </div>
            </div>
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
<section className="relative overflow-hidden bg-white py-[35px] max-md:py-[35px]">
  <div className="mx-auto w-full max-w-[1450px] px-2">
    {/* Heading */}
    <div className="mx-auto mb-8 max-w-[1200px] text-center">
      <p className="mb-3 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#4B5563]">
        FAQ
      </p>

      <h1 className="text-center text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.04em] text-[#111827]">
        Frequently Asked Questions
      </h1>

      <p className="mx-auto mt-4 max-w-[1100px] text-center !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
        Can’t find what you’re looking for? Our team is here to help you
        understand Vertex Suite RCS messaging better.
      </p>
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
            "RCS works on supported Android devices with compatible carriers and messaging apps. If RCS is not supported on a customer’s device, messages can fall back to SMS where configured.",
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
          <div
            key={index}
            className={`faq-moving-border group relative overflow-hidden rounded-[100px] border border-[#E7ECF5] transition-all duration-300 ${
              isOpen
                ? "bg-white shadow-[0_14px_38px_rgba(15,23,42,0.055)]"
                : "bg-[#EEF3FD]"
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveFaq(isOpen ? null : index)}
              className="relative z-10 flex w-full items-center justify-between gap-5 px-8 py-4 text-left max-md:px-5 max-md:py-4"
            >
              <span className="flex-1 text-left text-[1rem] font-bold text-[#1F2937] max-md:text-[0.92rem]">
  {item.question}
</span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#111827] shadow-[0_8px_22px_rgba(15,23,42,0.08)] transition-all duration-300 max-md:h-9 max-md:w-9">
  {isOpen ? <X size={18} /> : <Plus size={18} />}
</span>
            </button>

            {isOpen && (
              <div className="relative z-10 px-8 pb-5 max-md:px-5">
                <p className="mx-auto max-w-[1050px] text-center text-[0.95rem] leading-[1.6] text-[#4B5563] max-md:text-[0.86rem]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>

    {/* Bottom Notice Board / CTA */}
    <div className="mx-auto mt-5 flex w-full max-w-[1250px] items-center justify-between gap-5 rounded-[22px] border border-[#E7ECF5] bg-white px-8 py-5 text-center shadow-[0_14px_38px_rgba(15,23,42,0.05)] max-md:flex-col max-md:px-5">
      <div className="text-center md:text-left">
        <h3 className="mb-1 text-[1.1rem] font-extrabold text-[#111827]">
          Still have questions?
        </h3>

        <p className="mb-0 text-[0.92rem] leading-[1.5] text-[#5B667A]">
          Talk to our RCS specialists and get the right solution for your business.
        </p>
      </div>

      <Link
        to="/book-demo"
        className="inline-flex h-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[#0B5FC6] px-6 text-[0.92rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover-tehover:bg-[#084EA5] hover:shadow-[0_12px_30px_rgba(11,95,198,0.22)] max-md:w-full"
      >
        Request a Demo
      </Link>
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
