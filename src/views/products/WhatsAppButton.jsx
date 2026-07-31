"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Reveal from "../../components/Reveal";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  CheckCircle2,
  Copy,
  CornerDownRight,
  Database,
  FileBadge,
  FileText,
  Globe2,
  IdCard,
  Inbox,
  LayoutDashboard,
  Link2,
  LineChart,
  List,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  MonitorSmartphone,
  MousePointerClick,
  Network,
  PhoneCall,
  Plus,
  QrCode,
  Route,
  Send,
  SendHorizontal,
  Settings,
  ShoppingCart,
  Smartphone,
  Tag,
  Target,
  ThumbsUp,
  TicketCheck,
  UserCheck,
  UserRound,
  UsersRound,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const heroStats = [
  { value: "1", label: "TAP to Next Step", color: "#059669" },
  { value: "3", label: "Quick Reply Buttons", color: "#059669" },
  { value: "4", label: "Types of Supported Button", color: "#059669" },
  { value: "10", label: "Quick Replies Button", color: "#059669" },
];

const buttonTypeCards = [
  {
    number: "01",
    title: "Quick Reply Buttons",
    desc: "Shortcut for quick actions",
    tone: "green",
    image: "/assets/images/ut.webp",
    imageAlt: "WhatsApp chat with quick reply buttons",
    points: ["Up to 3 quick reply buttons", "Great for FAQs, menus and simple choices", "Works on all WhatsApp clients"],
  },
  {
    number: "02",
    title: "Call-to-Action (URL)",
    desc: "Drive traffic to links",
    tone: "blue",
    image: "/assets/images/ut1.webp",
    imageAlt: "WhatsApp message with a call-to-action link button",
    points: ["Up to 2 URL buttons", "Open websites, landing pages or forms", "Ideal for offers, sign-ups and payments"],
  },
  {
    number: "03",
    title: "Call-to-Action (Phone)",
    desc: "Start a phone call instantly",
    tone: "green",
    image: "/assets/images/ut2.webp",
    imageAlt: "WhatsApp message with a one-tap call button",
    points: ["Up to 1 phone number button", "Customers can call your business with one tap", "Perfect for support and sales"],
  },

  {
    number: "04",
    title: "Copy Code Button",
    desc: "Copy a code in one tap",
    tone: "blue",
    image: "/assets/images/ut3.webp",
    imageAlt: "WhatsApp Flow button inside a chat",
    points: ["Share coupon or OTP codes", "Useful for promotions and verification", "Copies the displayed code instantly"],
  },
  {
    number: "05",
    title: "WhatsApp Flow Button",
    desc: "Launch a guided Flow",
    tone: "green",
    image: "/assets/images/ut4.webp",
    imageAlt: "WhatsApp message with a copy code button",
    points: ["Open forms and guided tasks", "Collect structured information", "Works inside WhatsApps"],
  },
  {
    number: "06",
    title: "WhatsApp Voice Call Button",
    desc: "Start a WhatsApp call",
    tone: "blue",
    image: "/assets/images/ut5.webp",
    imageAlt: "WhatsApp product catalog button",
    points: ["Starts a voice call in WhatsApp", "Useful for direct, real-time help", "Available when calling is enabled"],
  },

];

const placementCardImages = [
  "/assets/images/tbu.webp",
  "/assets/images/tbu1.webp",
  "/assets/images/tbu2.webp",
  "/assets/images/tbu3.webp",
  "/assets/images/tbu4.webp",
  "/assets/images/tbu5.webp",
  "/assets/images/tbu6.webp",
  "/assets/images/tbu7.webp",
];

const buttonPlacementCards = [
  {
    icon: Globe2,
    title: "Product & Sales Enquiries",
    points: ["View Pricing", "Request a Demo"],
    visual: "website",
    position: "left",
  },
  {
    icon: Smartphone,
    title: "Customer Support",
    points: [  "Get Support", "Talk to an Agent"],
    visual: "mobile",
    position: "left",
  },
  {
    icon: ThumbsUp,
    title: "Bookings",
    points: ["Book an Appointment", "Reschedule Booking"],
    visual: "social",
    position: "right",
  },
  {
    icon: SendHorizontal,
    title: "Feedback",
    points: ["Share Feedback", "Rate Experience"],
    visual: "marketing",
    position: "right",
  },
  {
    icon: QrCode,
    title: "Website & Product Links",
    points: ["Visit Website", "View Products"],
    visual: "qr",
    position: "left",
  },
  {
    icon: FileText,
    title: "Orders & Tracking",
    points: ["Track Order", "View Order Status"],
    visual: "document",
    position: "left",
  },
  {
    icon: ShoppingCart,
    title: "Authentication & Codes",
    points: ["Copy Code", "Autofill Code"],
    visual: "ecommerce",
    position: "right",
  },
  {
    icon: MapPin,
    title: "Payments & Documents",
    points: ["Pay Now", "View Invoice"],
    visual: "event",
    position: "right",
  },
];
const whyButtonLeft = [
  {
    number: "1",
    title: "Reduce Drop-Offs",
    image: "/assets/images/ton.webp",
    imageAlt: "WhatsApp Button reducing website drop-offs",
    text: "Visitors no longer have to search for your contact details or fill long forms. A WhatsApp Button gives them an instant way to connect before they leave the page.",
  },
  {
    number: "2",
    title: "Capture High-Intent Leads",
    image: "/assets/images/ton2.webp",
    imageAlt: "WhatsApp Button capturing high-intent leads",
    text: "People who click the button are already engaged, they want answers. This creates stronger, more qualified leads compared to traditional forms.",
  },
  {
    number: "3",
    title: "Provide Instant Support",
    image: "/assets/images/ton3.webp",
    imageAlt: "WhatsApp Button providing instant support",
    text: "Customers get real-time answers through your WhatsApp chatbot or team, resulting in faster resolutions and fewer lost opportunities.",
  },
];

const whyButtonRight = [
  {
    number: "4",
    title: "Improve Customer Experience",
    image: "/assets/images/ton4.webp",
    imageAlt: "WhatsApp Button improving customer experience",
    text: "Instead of navigating multiple pages, users get one simple route: tap - chat. It feels natural, effortless and aligned with how most customers already communicate.",
  },
 
];
const clickJourneySteps = [
  {
    number: "1",
    icon: Bot,
    title: "Chatbot Greets & Assists Immediately",
    desc:"As soon as a customer starts a conversation, the AI chatbot welcomes them, understands their intent and guides them toward the right service—without waiting for a human agent.",
    type: "greet",
  },
  {
    number: "2",
    icon: Route,
    title: "User Is Routed Automatically Based on Intent",
    desc: "Based on the option selected, the chatbot instantly identifies the user’s requirement and routes the conversation to the right team, workflow or support agent.",
    type: "route",
  },
  {
    number: "3",
    icon: Workflow,
    title: "Workflows Trigger Behind the Scenes",
    desc:"Once the customer’s intent is identified, predefined workflows automatically perform the required actions—without any manual intervention.",
    type: "workflow",
  },
  {
    number: "4",
    icon: Database,
    title: "Data Gets Captured Automatically",
    desc:"Every interaction is automatically converted into structured lead data, helping your team collect customer details without manual entry.",
    type: "data",
  },
  {
    number: "5",
    icon: UserCheck,
    title: "Human Takeover When Needed",
    desc:"When a query needs personal attention, the conversation is instantly handed over to a live agent for seamless support.",
    type: "human",
  },
  {
    number: "6",
    icon: Send,
    title: "Follow-Ups Are Sent Automatically",
    desc:"If a customer does not respond or needs more time, automated follow-up messages keep the conversation active and improve re-engagement.",
    type: "follow",
  },
];

const buttonJourneySteps = [
  {
    icon: MousePointerClick,
    title: "Visitor Taps",
    text: "Button",
  },
  {
    icon: MessageCircle,
    title: "Starts",
    text: "Chat",
  },
  {
    icon: IdCard,
    title: "Lead",
    text: "Captured",
  },
  {
    icon: Settings,
    title: "Automation",
    text: "Triggered",
  },
];

const buttonTypes = [
  {
    label: "a) Reply Buttons",
    subtitle: "Quick Replies",
    type: "reply",
  },
  {
    label: "b) Call-to-Action",
    subtitle: "URL Button",
    type: "url",
  },
  {
    label: "c) Call Button",
    subtitle: "",
    type: "call",
  },
  {
    label: "d) Copy Code Button",
    subtitle: "",
    type: "copy",
  },
];

const integrationList = [
  {
    icon: Bot,
    title: "Chatbot Integration",
    text: "Connect buttons to intelligent bots for instant engagement.",
  },
  {
    icon: Database,
    title: "CRM Integration",
    text: "Capture and manage leads directly in your CRM.",
  },
  {
    icon: Workflow,
    title: "Workflow & Automation Integration",
    text: "Automate actions, tasks and sequences effortlessly.",
  },
  {
    icon: UsersRound,
    title: "Team Inbox / Human Handover",
    text: "Let teams take over personalised chats when needed.",
  },
  {
    icon: LineChart,
    title: "Analytics & Performance Tracking",
    text: "Track clicks, chats, conversions and campaign performance.",
  },
  {
    icon: MessagesSquare,
    title: "Multi-Channel Sync",
    text: "Sync conversations across email, SMS, social and more.",
  },
];

const systemConnectivityCards = [
  {
    icon: Bot,
    title: "Chatbot Integration",
    image: "/assets/images/O.webp",
    body: "Start WhatsApp chats with automated replies, relevant options, and next steps based on customer intent.",
  },
  {
    icon: IdCard,
    title: "CRM Integration",
    image: "/assets/images/O2.webp",
    body: "Capture button-driven conversations and create or update structured customer records inside your CRM.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    image: "/assets/images/O3.webp",
    body: "Trigger follow-ups, assign teams, launch forms, create tickets, or run connected actions automatically.",
  },
  {
    icon: Inbox,
    title: "Team Inbox",
    image: "/assets/images/O4.webp",
    body: "Let agents view chats, access customer context, and take over whenever human support is required.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    image: "/assets/images/O5.webp",
    body: "Track button clicks, conversations started, leads captured, and configured outcomes to understand performance.",
  },
  {
    icon: Network,
    title: "API & Business Systems",
    image: "/assets/images/O6.webp",
    body: "Connect button-triggered journeys with ERP, order, payment, support, and other backend systems through APIs.",
  },
];

const sourceButtons = [
  {
    icon: Globe2,
    label: "Website Button",
  },
  {
    icon: MonitorSmartphone,
    label: "Landing Page Button",
  },
  {
    icon: QrCode,
    label: "QR Code",
  },
  {
    icon: Mail,
    label: "Email Campaign",
  },
];

const platformItems = [
  {
    icon: Bot,
    label: "Chatbot",
  },
  {
    icon: Workflow,
    label: "Workflows",
  },
  {
    icon: Database,
    label: "CRM",
  },
  {
    icon: Inbox,
    label: "Inbox",
  },
  {
    icon: BarChart3,
    label: "Analytics",
  },
  {
    icon: Network,
    label: "Automation",
  },
  {
    icon: LayoutDashboard,
    label: "Integrations",
  },
  {
    icon: UsersRound,
    label: "Team",
  },
];

const performanceStats = [
  {
    label: "Button Clicks",
    value: "12,458",
    change: "+18%",
  },
  {
    label: "Chats Started",
    value: "8,932",
    change: "+21%",
  },
  {
    label: "Leads Generated",
    value: "5,612",
    change: "+25%",
  },
  {
    label: "Conversions",
    value: "2,184",
    change: "+16%",
  },
];

const entryPoints = [
  {
    label: "Website Button",
    value: "6,124 (49%)",
    width: "49%",
  },
  {
    label: "Landing Page",
    value: "2,901 (23%)",
    width: "23%",
  },
  {
    label: "QR Code",
    value: "1,987 (16%)",
    width: "16%",
  },
  {
    label: "Email Campaign",
    value: "1,446 (12%)",
    width: "12%",
  },
];
function ButtonTypeVisual({ type }) {
  if (type === "reply") {
    return (
      <div className="space-y-2 rounded-2xl border border-[#BDEFD0] bg-[#F4FFF8] p-3">
        {["I need help", "Book a Demo", "Talk to Sales"].map((item) => (
          <button
            key={item}
            className="flex w-full items-center justify-between rounded-lg border border-[#BDEFD0] bg-white px-4 py-2 text-xs font-black text-[#071B4D]"
          >
            {item}
            <MessageCircle size={14} className="text-[#12A85B]" />
          </button>
        ))}
      </div>
    );
  }

  if (type === "url") {
    return (
      <div className="flex items-center justify-between rounded-2xl bg-[#12A85B] px-6 py-5 text-white shadow-[0_18px_36px_rgba(18,168,91,0.22)]">
        <div>
          <h4 className="text-sm font-black">Explore Our Services</h4>
          <p className="text-xs font-semibold text-white/85">
            Chat on WhatsApp
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/18">
          <MessageCircle size={28} fill="currentColor" />
        </div>
      </div>
    );
  }

  if (type === "call") {
    return (
      <div className="flex items-center gap-4 rounded-2xl border border-[#BDEFD0] bg-white px-6 py-5 shadow-[0_14px_30px_rgba(7,27,77,0.06)]">
        <PhoneCall size={28} className="text-[#12A85B]" />

        <div>
          <h4 className="text-sm font-black text-[#071B4D]">
            Call Us on WhatsApp
          </h4>
          <p className="text-sm font-bold text-[#4B5B77]">+91 98765 43210</p>
        </div>
      </div>
    );
  }

  if (type === "copy") {
    return (
      <div className="rounded-2xl border-2 border-dashed border-[#12A85B]/55 bg-[#F4FFF8] px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-black tracking-wide text-[#12A85B]">
              WASUITE20
            </h4>
            <p className="text-xs font-semibold text-[#4B5B77]">
              Click to Copy Code
            </p>
          </div>

          <Copy size={26} className="text-[#12A85B]" />
        </div>
      </div>
    );
  }

  return null;
}
function PlacementVisual({ type }) {
  if (type === "website") {
    return (
      <div className="w-[105px] rounded-xl border border-[#E5EEF8] bg-[#F8FBFF] p-2">
        <div className="mb-2 flex gap-1">
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-yellow-300" />
          <span className="h-2 w-2 rounded-full bg-green-300" />
        </div>
        <div className="mb-2 h-3 rounded bg-[#DCEBFA]" />
        <div className="mb-2 h-8 rounded bg-white" />
        <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#12A85B] text-white">
          <MessageCircle size={18} fill="currentColor" />
        </div>
      </div>
    );
  }

  if (type === "mobile") {
    return (
      <div className="w-[70px] rounded-2xl border-[5px] border-[#111827] bg-white p-2 shadow-md">
        <div className="space-y-2">
          <div className="h-3 rounded bg-[#DCEBFA]" />
          <div className="h-3 rounded bg-[#DCEBFA]" />
          <div className="h-3 rounded bg-[#DCEBFA]" />
          <div className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#12A85B] text-white">
            <MessageCircle size={15} fill="currentColor" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "social") {
    return (
      <div className="grid grid-cols-2 gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1877F2] text-sm font-black text-white">
          f
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-sm font-black text-white">
          ◎
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0077B5] text-sm font-black text-white">
          in
        </div>
      </div>
    );
  }

  if (type === "marketing") {
    return (
      <div className="grid grid-cols-2 gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EA4335] text-white">
          <Mail size={18} />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#155EEF] text-[10px] font-black text-white">
          SMS
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
          <span className="text-sm font-black text-[#4285F4]">G</span>
        </div>
      </div>
    );
  }

  if (type === "qr" || type === "event") {
    return (
      <div className="w-[92px] rounded-xl border border-[#E5EEF8] bg-white p-2 text-center shadow-sm">
        <QrCode size={64} className="mx-auto text-[#071B4D]" />
        <p className="mt-1 text-[9px] font-black text-[#071B4D]">
          SCAN TO CHAT
        </p>
      </div>
    );
  }

  if (type === "document") {
    return (
      <div className="w-[82px] rounded-xl border border-[#E5EEF8] bg-white p-3 text-center shadow-sm">
        <FileBadge size={42} className="mx-auto text-[#EF4444]" />
        <p className="mt-2 text-[10px] font-black text-[#071B4D]">PDF</p>
      </div>
    );
  }

  if (type === "ecommerce") {
    return (
      <div className="w-[105px] rounded-xl border border-[#E5EEF8] bg-white p-2 shadow-sm">
        <div className="mb-2 flex h-14 items-center justify-center rounded-lg bg-[#F2F4F7] text-[#071B4D]">
          <ShoppingCart size={28} />
        </div>

        <button className="w-full rounded-md bg-[#155EEF] py-1.5 text-[9px] font-black text-white">
          Buy Now
        </button>

        <div className="-mt-2 ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#12A85B] text-white">
          <MessageCircle size={15} fill="currentColor" />
        </div>
      </div>
    );
  }

  return null;
}
/* Phone-only timing for the "What Happens After a Click?" flow. The whole chain
   plays once as text → arrow → text → arrow instead of every step waiting for
   its own scroll trigger. */
const FLOW_STEP_GAP = 0.45;
const FLOW_ARROW_OFFSET = 0.24;

export default function WhatsAppButton() {
  const [activeJourneyStart, setActiveJourneyStart] = useState(0);
  const [buttonWaveStep, setButtonWaveStep] = useState(0);
  const [buttonCardStart, setButtonCardStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(true);
  const pageRef = useRef(null);

  /* Phone: one trigger for the whole click-flow so the steps and arrows play as
     a single chained sequence instead of each item waiting for its own scroll. */
  const flowRef = useRef(null);
  const flowInView = useInView(flowRef, { once: true, amount: "some" });

  /* Phone: the connectivity cards wait for the logo hub to finish assembling.
     `hubDone` is set by the last satellite icon's onAnimationComplete, so the
     handoff is exact rather than a guessed timeout. */
  const [hubDone, setHubDone] = useState(false);
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, {
    once: true,
    amount: "some",
    margin: "0px 0px 120px 0px",
  });
  const cardsPlay = cardsInView && hubDone;

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const sections = Array.from(page.querySelectorAll(":scope > section"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(32px)";
      section.style.transition = "opacity 0.72s cubic-bezier(0.22, 1, 0.36, 1), transform 0.72s cubic-bezier(0.22, 1, 0.36, 1)";
      section.style.willChange = "opacity, transform";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          entry.target.style.willChange = "auto";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveJourneyStart((current) =>
        (current + 1) % clickJourneySteps.length
      );
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);


  /* Phone: the button-type cards are static, so neither the highlight wave nor
     the 4-slot carousel needs to keep ticking. */
  useEffect(() => {
    if (isMobile) return;

    const timer = window.setInterval(() => {
      setButtonWaveStep((current) => (current + 1) % 6);
    }, 1250);

    return () => window.clearInterval(timer);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const timer = window.setInterval(() => {
      setButtonCardStart((current) => (current + 1) % buttonTypeCards.length);
    }, 7500);

    return () => window.clearInterval(timer);
  }, [isMobile]);

  const activeButtonCard = [0, 1, 2, 3, 2, 1][buttonWaveStep];

  /* Phone gets every card at once instead of 4 rotating slots. */
  const visibleButtonCards = isMobile
    ? buttonTypeCards
    : Array.from(
        { length: 4 },
        (_, index) =>
          buttonTypeCards[(buttonCardStart + index) % buttonTypeCards.length]
      );

  const visibleJourneySteps = Array.from({ length: 3 }, (_, index) =>
    clickJourneySteps[(activeJourneyStart + index) % clickJourneySteps.length]
  );

  return (
    <main ref={pageRef} className="whatsapp-button-page min-h-screen overflow-hidden bg-white">

      {/* hero section */}
      <section className="relative overflow-hidden bg-[#eff4ef] px-3 pb-[120px] pt-[130px] max-md:pb-[70px] max-md:pt-[90px] sm:px-8 lg:px-14 xl:px-20">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 -top-24 h-[430px] w-[500px] rounded-full bg-[#DDF2FF]/80 blur-3xl" />
          <div className="absolute right-[-8%] top-0 h-[500px] w-[560px] rounded-full bg-[#E6F8EF]/80 blur-3xl" />
          <div className="absolute left-[34%] top-[-38%] h-[720px] w-[180px] rotate-45 bg-white/50 blur-2xl" />
          <div className="absolute left-[49%] top-[-24%] h-[680px] w-[110px] rotate-45 bg-[#DFF2FF]/55 blur-xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:gap-12">
          {/* LEFT CONTENT */}
          <div className="relative z-10 min-w-0 text-left max-md:order-2">
            <Reveal onMount delay={0} className="mb-5 inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/50 bg-white/25 px-3 py-2 text-[0.95rem] font-semibold text-green-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_28px_rgba(15,23,42,0.10)] ring-1 ring-white/30 backdrop-blur-lg">
              <img
                src="/assets/images/whatsapp-icon.png"
                alt="WhatsApp"
                className="h-5 w-5 object-contain"
              />
               WhatsApp Button
            </Reveal>

            <Reveal onMount delay={0.12}>
              <h1 className="mt-0! mb-[42px]! w-full! max-w-none! !text-[clamp(2rem,6vw,2.986rem)] font-extrabold leading-[1.12] tracking-tight text-[#000000]!">
                <span className="block min-[601px]:whitespace-nowrap">Interactive  <span className="text-[#10b957]">WhatsApp</span></span>
                 <span className="block min-[601px]:whitespace-nowrap"><span className="text-[#10b957]">Button</span> for Faster</span>
                <span className="block min-[601px]:whitespace-nowrap"> Customer Responses</span>

              </h1>
            </Reveal>

            <Reveal onMount delay={0.27}>
              <p className="block max-w-[690px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
               Help customers respond faster with interactive WhatsApp buttons that guide them to relevant information, services, and the next step instantly. 
              </p>
            </Reveal>

            {/* Hero stats */}
            <div className="mt-[42px] grid w-full max-w-[600px] grid-cols-2 gap-3.5 max-md:gap-2">
              {heroStats.map((s, index) => (
                <Reveal
                  key={s.label}
                  onMount
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={0.42 + index * 0.08}
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
            <Reveal onMount delay={0.85} className="mt-[32px] flex flex-row gap-[18px] max-md:hidden">
              <button className="roll-btn group inline-flex items-center justify-center overflow-hidden rounded-[10px]! border-2 border-green-600 bg-green-600 px-11 py-2.5 text-[1rem] font-semibold text-white transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white">
                <span className="roll-content">
                  <span className="roll-content-main">
                    <span>Start Free Trial</span>
                    <ArrowRight size={18} />
                  </span>
                  <span className="roll-content-hover">
                    <span>Start Free Trial</span>
                    <ArrowRight size={18} />
                  </span>
                </span>
              </button>

              <button className="roll-btn group inline-flex items-center justify-center overflow-hidden rounded-[10px]! border-2 border-green-600 bg-white px-7 py-2.5 text-[1rem] font-semibold !text-green-600 transition-all duration-300 hover:bg-green-600 hover:!text-green-600">
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
              </button>
            </Reveal>
          </div>

          {/* RIGHT VISUAL — chat card overlapping the photo's empty left half */}
          <Reveal
            onMount
            direction="right"
            delay={0.3}
            duration={0.8}
            className="relative z-10 flex w-full min-w-0 items-center justify-center max-md:order-1 max-md:mt-8 max-md:mb-4"
          >
            <div className="relative w-full max-w-[640px]">
              <img
                src="/assets/images/bu.webp"
                alt="Business owner replying to customers on WhatsApp"
                className="h-auto w-[115%] max-w-none! translate-x-[-2%] translate-y-[7%] object-contain max-sm:w-[105%] max-sm:translate-x-[-1%] max-sm:translate-y-[3.5%]"
              />

              <Reveal
                onMount
                direction="left"
                delay={0.6}
                duration={0.7}
                className="absolute left-[10%] top-[-13%] z-10 w-[56%] max-md:left-[2%] max-md:top-[-21%]"
              >
                <img
                  src="/assets/images/but.webp"
                  alt="WhatsApp chat showing Book Appointment, Reschedule and Talk to Support buttons"
                  className="h-auto w-full object-contain drop-shadow-[0_18px_38px_rgba(7,27,77,0.16)]"
                />
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

<section className="relative overflow-hidden bg-white px-5 pb-[90px] pt-[90px] max-md:pb-[50px] max-md:pt-[35px] sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-[-8%] top-1/3 h-[480px] w-[560px] rounded-full bg-[#ECFFF4] blur-3xl" />
    <div className="absolute right-[-5%] top-0 h-[420px] w-[620px] rounded-full bg-[#F4F7FF] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1540px]">
    <div className="text-center">
      <Reveal>
       
        <h2 className="mt-5! text-[clamp(2.05rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#07152F]!">
          Types of WhatsApp Buttons You Can Create
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mx-auto mt-4 max-w-[900px] !text-[1.12rem] font-medium leading-[1.65] text-[#40506D] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
          Choose the entry point that fits your website, app, campaign, or customer journey.
        </p>
      </Reveal>
    </div>

    <div className="relative mt-16 grid gap-7 md:grid-cols-2 xl:-translate-x-[80px] xl:grid-cols-4">
      <svg
        className="pointer-events-none absolute left-0 top-1/2 z-0 hidden h-52 w-full -translate-y-1/2 xl:block"
        viewBox="0 0 1200 208"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="button-card-wave" x1="150" y1="0" x2="1050" y2="208" gradientUnits="userSpaceOnUse">
            <stop stopColor="#12A85B" />
            <stop offset="0.5" stopColor="#1769E8" />
            <stop offset="1" stopColor="#7141E8" />
          </linearGradient>
          <filter id="button-card-wave-glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M150 104 C250 8 350 8 450 104 S650 200 750 104 S950 8 1050 104"
          stroke="url(#button-card-wave)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="2 6"
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 1, pathLength: 1, strokeDashoffset: [0, -64] }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            opacity: { duration: 0.4 },
            pathLength: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
            strokeDashoffset: { duration: 2.2, repeat: Infinity, ease: "linear" },
          }}
        />
        <circle r="6" fill="#60A5FA" stroke="#60A5FA" strokeWidth="2" filter="url(#button-card-wave-glow)">
          <animateMotion
            dur="7.5s"
            repeatCount="indefinite"
            path="M150 104 C250 8 350 8 450 104 S650 200 750 104 S950 8 1050 104"
            keyPoints="0;0.333;0.667;1;0.667;0.333;0"
            keyTimes="0;0.1667;0.3333;0.5;0.6667;0.8333;1"
            calcMode="linear"
          />
        </circle>
      </svg>

      <AnimatePresence initial={false} mode="popLayout">
      {visibleButtonCards.map((item, index) => {
        const accent = item.tone === "blue" ? "#1769E8" : "#12A85B";
        return (
          <motion.article
            layout={!isMobile}
            key={item.number}
            className={`relative z-10 mx-auto flex w-full max-w-[310px] self-stretch flex-col rounded-[22px] border border-[#E3EAF0] px-3 pb-6 pt-7 text-center shadow-[0_18px_48px_rgba(7,27,77,0.055)] ${item.tone === "green" ? "bg-[#F1FCF5]" : "bg-[#F2F6FF]"}`}
            initial={isMobile ? false : { opacity: 0, x: 90, y: 28 }}
            exit={isMobile ? undefined : { opacity: 0, x: -90, scale: 0.94 }}
            animate={
              isMobile
                ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    filter: "blur(0px) brightness(1)",
                    boxShadow: "0 18px 48px rgba(7, 27, 77, 0.055)",
                  }
                : {
                    opacity: 1,
                    y: activeButtonCard === index ? -12 : 0,
                    scale: activeButtonCard === index ? 1.04 : 0.97,
                    rotate: activeButtonCard === index ? (index % 2 === 0 ? -1.2 : 1.2) : 0,
                    filter: activeButtonCard === index ? "blur(0px) brightness(1)" : "blur(1.5px) brightness(0.96)",
                    boxShadow: activeButtonCard === index ? "0 30px 68px rgba(7, 27, 77, 0.16)" : "0 14px 35px rgba(7, 27, 77, 0.05)",
                  }
            }
            whileHover={
              isMobile
                ? undefined
                : {
                    y: -12,
                    scale: 1.025,
                    rotate: index % 2 === 0 ? -0.8 : 0.8,
                    filter: "blur(0px) brightness(1)",
                    boxShadow: "0 28px 65px rgba(7, 27, 77, 0.14)",
                    transition: { duration: 0.25, delay: 0, ease: [0.22, 1, 0.36, 1] },
                  }
            }
            whileTap={isMobile ? undefined : { scale: 0.985, transition: { duration: 0.12, delay: 0 } }}
            transition={isMobile ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="m-0! text-[20px]! font-black! leading-tight! text-[#0B1632]!">{item.title}</h3>
            <p className="mx-auto mt-3 max-w-[220px] text-[15px] font-medium leading-6 text-[#263650]">{item.desc}</p>
            <img src={item.image} alt={item.imageAlt} className="mx-auto mt-6 h-auto w-[82%] rounded-[18px] object-contain" />
            <ul className="!mt-[24px] flex list-none flex-col !gap-[20px] p-0 text-left"> 
              {item.points.map((point) => (
                <li key={point} className="!m-0 flex items-start gap-2 text-[12.7px] font-medium leading-5 text-[#263650]"> 
                  <CheckCircle2 size={19} className="mt-px shrink-0" style={{ color: accent }} />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
      </AnimatePresence>
    </div>

  </div>
</section>



      <section className="relative overflow-hidden bg-white px-3 pb-[90px] pt-[90px] max-md:pb-[50px] max-md:pt-[35px] sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[420px] w-[950px] -translate-x-1/2 rounded-full bg-[#F2FAFF] blur-3xl" />
    <div className="absolute bottom-0 left-0 h-[300px] w-[520px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1540px]">
    <div className="text-center">
      <Reveal>
        <h2 className="text-[clamp(2.05rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#071B4D]">
          Place the Right <span className="text-[#12A85B]">WhatsApp Button</span> at Every Decision Point 
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-3 max-w-[1000px] !text-[1.12rem] font-semibold leading-[1.65] text-[#4B5B77] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
        Add contextual WhatsApp buttons where customers are most likely to need information, assistance, or the next step.
        </p>
      </Reveal>
    </div>

    <div className="relative mt-12">
      <div className="grid items-center gap-7 xl:grid-cols-[1fr_0.9fr_1fr] xl:gap-10">
        {[buttonPlacementCards.slice(0, 4), buttonPlacementCards.slice(4)].map((group, groupIndex) => (
          <div key={groupIndex} className={`grid gap-4 ${groupIndex === 1 ? "xl:col-start-3" : ""}`}>
            {group.map((card, localIndex) => {
              const index = groupIndex * 4 + localIndex;
              const colors = [
                ["#087DD1", "#EAF6FF"],
                ["#12A85B", "#ECFBF3"],
                ["#7546D8", "#F4F0FF"],
                ["#FF7112", "#FFF4EB"],
                ["#EF3F8C", "#FFF0F7"],
                ["#F5A800", "#FFF8E6"],
                ["#079B92", "#EAFBF9"],
                ["#0874D1", "#EDF6FF"],
              ];
              const accent = colors[index][0];

              return (
                <motion.article
                  key={card.title}
                  className="relative mx-auto grid min-h-[145px] w-full max-w-[460px] grid-cols-1 items-center overflow-hidden rounded-[24px] border border-[#DFE7EF] bg-white px-5 py-3 shadow-[0_16px_42px_rgba(7,27,77,0.07)] max-md:px-3"
                  initial={{ opacity: 0, x: groupIndex === 0 ? -35 : 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={isMobile ? undefined : { y: -5, boxShadow: `0 22px 50px ${accent}22` }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={
                    isMobile
                      ? { duration: 0 }
                      : { delay: 0.45 + index * 0.08, duration: 0.42, ease: [0.22, 1, 0.36, 1] }
                  }
                >
                  <div className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: accent }} />
                  <div className="min-w-0">
                    <div className="mb-3 flex items-center gap-3">
                      <h6 className="m-0! whitespace-nowrap! font-black! leading-tight! max-md:-ml-3!" style={{ color: accent, fontSize: "14px", lineHeight: 0.5 }}>
                        {card.title}</h6>
                    </div>
                    <ul className="flex items-center gap-6 pl-1 max-md:relative max-md:z-10 max-md:-ml-3 max-md:pl-0!">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 whitespace-nowrap font-medium text-[#34445F]" style={{ fontSize: "11px", lineHeight: "16px" }}>
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <img
                      src={placementCardImages[index]}
                      alt={`${card.title} preview`}
                      className="mx-auto mt-0 h-[88px] w-[250px] max-w-full rounded-xl object-contain" style={{ position: "relative", top: "-12px", left: "-12px" }}
                    />
                  </div>
                  <div className={`absolute top-1/2 hidden w-12 -translate-y-1/2 border-t-2 border-dashed xl:block ${groupIndex === 0 ? "-right-12" : "-left-12"}`} style={{ borderColor: `${accent}66` }} />
                </motion.article>
              );
            })}
          </div>
        ))}

        <div className="relative row-start-1 flex min-h-[650px] items-center justify-center max-xl:row-auto xl:col-start-2 xl:row-start-1">
          <motion.div
            className="absolute h-[390px] w-[390px] rounded-full border-[1.5px] border-[#12A85B] shadow-[0_0_32px_rgba(18,168,91,0.24)]"
            initial={{ opacity: 0, scale: 0.15 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            animate={{ rotate: 360 }}
            transition={{
              opacity: { delay: 0.35, duration: 0.35 },
              scale: { delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              rotate: { duration: 32, repeat: Infinity, ease: "linear" },
            }}
          >
          {buttonPlacementCards.map((card, index) => {
            const Icon = card.icon;
            const angle = (index / buttonPlacementCards.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * 195;
            const y = Math.sin(angle) * 195;
            const accents = ["#087DD1", "#12A85B", "#7546D8", "#FF7112", "#EF3F8C", "#F5A800", "#079B92", "#0874D1"];
            return (
              <motion.div
                key={card.title}
                className="absolute z-20 flex h-16 w-16 items-center justify-center rounded-full border border-white bg-white shadow-[0_12px_30px_rgba(7,27,77,0.12)]"
                style={{ left: `calc(50% + ${x}px - 32px)`, top: `calc(50% + ${y}px - 32px)`, color: accents[index] }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ rotate: -360 }}
                viewport={{ once: true }}
                transition={{
                  opacity: { delay: 0.75 + index * 0.08, duration: 0.35 },
                  scale: { delay: 0.75 + index * 0.08, type: "spring", stiffness: 180 },
                  rotate: { duration: 32, repeat: Infinity, ease: "linear" },
                }}
              >
                <Icon size={28} strokeWidth={2.2} />
              </motion.div>
            );
          })}
          </motion.div>
          <motion.div
            className="absolute h-[265px] w-[265px] rounded-full border-[1.5px] border-[#12A85B] bg-gradient-to-br from-[#E5FFF0] via-white to-[#CFF5DF] shadow-[0_0_55px_rgba(18,168,91,0.28)]"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: 0.18, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-full border-8 border-white bg-white shadow-[0_22px_65px_rgba(7,27,77,0.16)]"
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#35DC77] to-[#08A94F] shadow-[0_15px_35px_rgba(18,168,91,0.3)]">
              <img
                src="/assets/images/whatsapp-icon.png"
                alt="WhatsApp"
                className="h-14 w-14 object-contain brightness-0 invert"
              />
            </div>
            <p className="m-0! mt-1.5! text-center text-base! font-black! leading-4! text-[#071B4D]!">WhatsApp<br />Button</p>
          </motion.div>
        </div>
      </div>

      {/* <Reveal delay={0.2}>
        <div className="mt-5 flex flex-col items-center gap-4 rounded-[22px] border border-[#D7E8E1] bg-gradient-to-r from-[#F8FFFB] via-white to-[#F4FFFA] px-6 py-5 shadow-[0_12px_35px_rgba(7,27,77,0.06)] sm:flex-row">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2DD96F] to-[#079D49] text-white shadow-[0_10px_24px_rgba(18,168,91,0.24)]">
            <LineChart size={28} />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="m-0! text-lg! font-black! text-[#071B4D]!">One Button. Endless Opportunities.</h3>
            <p className="m-0! mt-1! text-sm! font-medium! text-[#42516A]!">Add the WhatsApp Button anywhere your customers interact — and turn every touchpoint into a conversation.</p>
          </div>
          <div className="ml-auto hidden items-center gap-3 lg:flex">
            {[MessageCircle, UsersRound, ShoppingCart, FileText, Target].map((Icon, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="w-5 border-t-2 border-dashed border-[#45C779]" />}
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CDEDD9] bg-white text-[#12A85B] shadow-sm"><Icon size={21} /></span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </Reveal> */}

      <div className="hidden">
      {/* Reference-style 4 + 4 infographic grid */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
        viewBox="0 0 1400 560"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g fill="none" stroke="#25A9E0" strokeWidth="2" strokeDasharray="5 6" opacity="0.75">
          <path d="M700 280 C610 280 590 115 330 115" />
          <path d="M700 280 C650 280 640 115 520 115" />
          <path d="M700 280 C750 280 760 115 880 115" />
          <path d="M700 280 C790 280 810 115 1070 115" />
          <path d="M700 280 C610 280 590 445 330 445" />
          <path d="M700 280 C650 280 640 445 520 445" />
          <path d="M700 280 C750 280 760 445 880 445" />
          <path d="M700 280 C790 280 810 445 1070 445" />
        </g>
      </svg>

      <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-28">
        {buttonPlacementCards.map((card, index) => {
          const Icon = card.icon;
          const direction = index % 4 < 2 ? "left" : "right";

          return (
            <Reveal
              key={card.title}
              direction={direction}
              delay={(index % 4) * 0.08}
              duration={0.6}
              className="relative min-h-[145px] rounded-2xl border-2 border-[#D6E8F8] bg-white p-3.5 shadow-[0_14px_34px_rgba(7,27,77,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8ECDF0] hover:shadow-[0_20px_42px_rgba(3,143,223,0.12)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2196E8] to-[#0879C9] text-white shadow-[0_8px_18px_rgba(3,143,223,0.24)]">
                  <Icon size={22} strokeWidth={2.3} />
                </div>
                <h3 className="m-0! text-base! font-black! leading-tight! tracking-normal! text-[#071B4D]!">
                  {card.title}
                </h3>
              </div>

              <div className="grid grid-cols-[1fr_auto] items-center gap-3">
                <ul className="space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm font-medium leading-5 text-[#42516A]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0796C9]" />
                      {point}
                    </li>
                  ))}
                </ul>
                <PlacementVisual type={card.visual} />
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Central WhatsApp Button hub */}
      <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
        <Reveal
          direction="center"
          delay={0.25}
          className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-[#B9DDF0] bg-white shadow-[0_18px_48px_rgba(7,27,77,0.16)]"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#12A85B] text-white shadow-[0_12px_28px_rgba(18,168,91,0.28)]">
            <MessageCircle size={38} fill="currentColor" />
          </div>
          <p className="mt-2 mb-0! text-center text-sm! font-black! leading-4! text-[#071B4D]!">
            WhatsApp<br />Button
          </p>
        </Reveal>
      </div>
      </div>
    </div>

    <div className="relative mt-12 hidden grid-cols-1 gap-6 lg:grid-cols-[1fr_160px_1fr]">
      {/* LEFT CARDS */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {buttonPlacementCards
          .filter((card) => card.position === "left")
          .map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal
                key={index}
                direction="left"
                delay={index * 0.08}
                duration={0.55}
                className="relative rounded-2xl border border-[#CFE2FF] bg-white p-5 shadow-[0_18px_45px_rgba(7,27,77,0.08)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#155EEF]">
                    <Icon size={22} strokeWidth={2.3} />
                  </div>

                  <h3 className="text-base font-black text-[#071B4D]">
                    {card.title}
                  </h3>
                </div>

                <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <ul className="space-y-2">
                    {card.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm font-semibold leading-6 text-[#334155]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#12A85B]" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <PlacementVisual type={card.visual} />
                </div>

                <div className="absolute -right-8 top-1/2 hidden h-px w-8 border-t-2 border-dashed border-[#038FDF]/50 lg:block" />
              </Reveal>
            );
          })}
      </div>

      {/* CENTER WHATSAPP BUTTON */}
      <div className="relative hidden items-center justify-center lg:flex">
        <div className="absolute h-[360px] w-[360px] rounded-full border border-dashed border-[#038FDF]/45" />
        <div className="absolute h-[250px] w-[250px] rounded-full border border-dashed border-[#12A85B]/40" />

        <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[#BDEFD0] bg-white shadow-[0_24px_60px_rgba(7,27,77,0.16)]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#12A85B] text-white shadow-[0_16px_34px_rgba(18,168,91,0.28)]">
            <MessageCircle size={38} fill="currentColor" />
          </div>

          <p className="mt-2 text-center text-xs font-black leading-4 text-[#071B4D]">
            WhatsApp
            <br />
            Button
          </p>
        </div>
      </div>

      {/* RIGHT CARDS */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {buttonPlacementCards
          .filter((card) => card.position === "right")
          .map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal
                key={index}
                direction="right"
                delay={index * 0.08}
                duration={0.55}
                className="relative rounded-2xl border border-[#CFE2FF] bg-white p-5 shadow-[0_18px_45px_rgba(7,27,77,0.08)]"
              >
                <div className="absolute -left-8 top-1/2 hidden h-px w-8 border-t-2 border-dashed border-[#038FDF]/50 lg:block" />

                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#155EEF]">
                    <Icon size={22} strokeWidth={2.3} />
                  </div>

                  <p className="text-[12px] font-black text-[#071B4D]">
                    {card.title}
                  </p>
                </div>

                <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <ul className="space-y-2">
                    {card.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm font-semibold leading-6 text-[#334155]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#12A85B]" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <PlacementVisual type={card.visual} />
                </div>
              </Reveal>
            );
          })}
      </div>
    </div>
  </div>
</section>
<section className="relative overflow-hidden bg-white px-5 pb-[90px] pt-[90px] max-md:pb-[50px] max-md:pt-[35px] sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-10 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
    <div className="absolute bottom-0 left-0 h-[260px] w-[500px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1450px]">
    <div className="text-center">
      <Reveal>
        <h2 className="text-[clamp(2.05rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#071B4D]">
          Why Business Should Use Buttons in WhatsApp Conversations 
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-3 max-w-[780px] !text-[1.12rem] font-semibold leading-[1.65] text-[#4B5B77] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
         One small button. Big impact on conversions, engagement and customer experience..
        </p>
      </Reveal>
    </div>

    <div className="mt-14 space-y-16 lg:space-y-20">
      {[...whyButtonLeft, ...whyButtonRight].map((item, index) => {
        const imageFirst = index % 2 === 1;

        return (
          <Reveal
            key={item.number}
            direction={imageFirst ? "right" : "left"}
            delay={0.08}
            duration={0.7}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            <div className={imageFirst ? "lg:order-2" : ""}>
              <div className="relative min-h-[190px]">
                <span className="pointer-events-none absolute left-0 top-0 text-[clamp(5rem,8vw,7.5rem)] font-black leading-none tracking-[-0.07em] text-[#071B4D]/8">
                  #{String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 ml-12 pt-20 sm:ml-16 sm:pt-20">
                  <h3 className="m-0! text-[clamp(1.35rem,2.2vw,2rem)]! font-black! leading-tight! tracking-tight! text-[#071B4D]!">
                    {item.title}
                  </h3>
                  <p className="mt-3 mb-0! max-w-[560px] text-[1.05rem]! font-normal! leading-[1.7]! text-[#5B667A]!">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>

            <div className={`flex ${imageFirst ? "justify-start lg:order-1" : "justify-end"}`}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  loading="lazy"
                  className="w-full max-w-[520px] rounded-[22px] object-contain"
                />
              ) : (
                <div className="grid min-h-[360px] w-full max-w-[520px] place-items-center rounded-[22px] border-2 border-dashed border-[#BFD3E6] bg-gradient-to-br from-[#F6FAFE] to-[#EEF6FC] p-6 shadow-inner">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#12A85B] shadow-[0_12px_28px_rgba(7,27,77,0.09)]">
                      <FileText size={30} strokeWidth={1.8} />
                    </div>
                    <p className="mt-4 mb-0! text-sm! font-bold! uppercase! tracking-[0.14em]! text-[#8292A8]!">
                      Image Placeholder
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>

    <div className="mt-9 hidden items-center gap-7 lg:grid-cols-[0.75fr_1.55fr_0.75fr]">
      {/* LEFT BENEFITS */}
      <div className="space-y-4">
        {whyButtonLeft.map((item) => (
          <div
            key={item.number}
            className="relative rounded-2xl border border-[#CFE2FF] bg-white px-5 py-4 shadow-[0_14px_34px_rgba(7,27,77,0.07)]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#155EEF] text-base font-black text-white">
                {item.number}
              </div>

              <div>
                <h3 className="text-[15px] font-black leading-snug text-[#071B4D]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[12px] font-semibold leading-5 text-[#4B5B77]">
                  {item.text}
                </p>
              </div>
            </div>

            <div className="absolute -right-8 top-1/2 hidden h-px w-8 border-t-2 border-dashed border-[#12A85B]/60 lg:block" />
          </div>
        ))}
      </div>

      {/* CENTER FLOW */}
      <div className="relative rounded-[28px] border border-[#DCEBFA] bg-white px-6 py-9 shadow-[0_20px_55px_rgba(7,27,77,0.08)]">
        <div className="absolute -left-8 top-1/2 hidden h-[135px] w-8 rounded-l-full border-y-2 border-l-2 border-dashed border-[#12A85B]/55 lg:block" />
        <div className="absolute -right-8 top-1/2 hidden h-[135px] w-8 rounded-r-full border-y-2 border-r-2 border-dashed border-[#12A85B]/55 lg:block" />

        <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {buttonJourneySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-full border border-[#DCEBFA] shadow-[0_16px_38px_rgba(7,27,77,0.08)] ${
                      index === 1
                        ? "bg-[#EAFBF1] text-[#12A85B]"
                        : index === 2
                        ? "bg-[#EAF8FF] text-[#1A6EB9]"
                        : "bg-[#F8FBFF] text-[#071B4D]"
                    }`}
                  >
                    <Icon size={42} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-4 text-[14px] font-black leading-tight text-[#071B4D]">
                    {step.title}
                  </h3>

                  <p className="text-[12px] font-bold text-[#4B5B77]">
                    {step.text}
                  </p>
                </div>

                {index < buttonJourneySteps.length - 1 && (
                  <div className="hidden items-center justify-center sm:flex">
                    <ArrowRight size={30} className="text-[#071B4D]" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* RIGHT BENEFITS */}
      <div className="space-y-4">
        {whyButtonRight.map((item) => (
          <div
            key={item.number}
            className="relative rounded-2xl border border-[#CFE2FF] bg-white px-5 py-4 shadow-[0_14px_34px_rgba(7,27,77,0.07)]"
          >
            <div className="absolute -left-8 top-1/2 hidden h-px w-8 border-t-2 border-dashed border-[#12A85B]/60 lg:block" />

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#155EEF] text-base font-black text-white">
                {item.number}
              </div>

              <div>
                <h3 className="text-[15px] font-black leading-snug text-[#071B4D]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[12px] font-semibold leading-5 text-[#4B5B77]">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-white px-5 pb-[90px] pt-[90px] max-md:pb-[50px] max-md:pt-[35px] sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute bottom-0 left-0 h-[260px] w-[500px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1450px]">
    <div className="text-center">
      <Reveal>
<h2 className="mt-5! text-[clamp(2.05rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#07152F]!">
          What Happens After a Click?
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-3 max-w-[880px] !text-[1.12rem] font-semibold leading-[1.65] text-[#4B5B77] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
          Every click becomes a trackable lead, a guided chat and an automated workflow.
        </p>
      </Reveal>
    </div>

    <div className="mt-20 flex flex-col items-center gap-14 max-md:mt-12">
      {/* LEFT: 6 Steps Flow */}
      <div
        ref={flowRef}
        className="relative grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3 lg:left-1 lg:gap-x-7 xl:left-2 xl:grid-cols-6 xl:gap-x-8"
      >
        {[
          {
            icon: MousePointerClick,
            title: "Button Click",
            text: "User clicks the WhatsApp button",
          },
          {
            icon: MessageCircle,
            title: "WhatsApp Chat Opens",
            text: "Conversation starts instantly with your brand",
          },
          {
            icon: UserCheck,
            title: "Lead Captured",
            text: "Customer details captured and lead created",
          },
          {
            icon: Workflow,
            title: "Automation Triggered",
            text: "Workflows, chatbots & actions are triggered",
          },
          {
            icon: Database,
            title: "CRM Updated",
            text: "Lead synced with CRM and other systems",
          },
          {
            icon: BarChart3,
            title: "Analytics Tracked",
            text: "Performance tracked in real-time dashboards",
          },
        ].map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center"
              {...(isMobile
                ? {
                    initial: { opacity: 0, y: 24, scale: 0.9 },
                    animate: flowInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 24, scale: 0.9 },
                    transition: {
                      duration: 0.4,
                      delay: flowInView ? index * FLOW_STEP_GAP : 0,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }
                : {
                    initial: { opacity: 0, y: 24, scale: 0.9 },
                    whileInView: { opacity: 1, y: 0, scale: 1 },
                    viewport: { once: true, amount: 0.35 },
                    transition: {
                      duration: 0.45,
                      delay: index * 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  })}
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#BFE8D0] bg-white text-[#12A85B] shadow-[0_10px_24px_rgba(18,168,91,0.12)]">
                <Icon size={35} strokeWidth={2} />

              </div>

              <h3 className="mt-4! flex min-h-[3.2rem] max-w-[135px] items-end justify-center text-left text-[17px]! font-extrabold! leading-snug! tracking-normal! text-[#071B4D]! max-md:mt-2! max-md:min-h-0!">
                {step.title}
              </h3>

              <p className="mt-0.5 max-w-[120px] text-left text-[13px]! font-bold leading-relaxed text-[#4B5B77]">
                {[
                  ["User clicks the", "WhatsApp button"],
                  ["Conversation starts", "instantly with your brand"],
                  ["Customer details", "captured and lead created"],
                  ["Workflows, chatbots &", "actions are triggered"],
                  ["Lead synced with CRM", "and other systems"],
                  ["Performance tracked in", "real-time dashboards"],
                ][index].map((line, lineIndex) => (
                  <React.Fragment key={line}>
                    {lineIndex > 0 && <br />}
                    <span className="whitespace-nowrap">{line}</span>
                  </React.Fragment>
                ))}
              </p>

              {index < 5 && (
                <motion.div
                  className="absolute left-[calc(50%+40px)] top-[30px] hidden h-5 w-[calc(100%+2rem-84px)] origin-left xl:block"
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.38,
                    delay: index * 0.55 + 0.42,
                    ease: "easeOut",
                  }}
                >
                  <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-solid border-[#12A85B]/55" />
                  <span
                    className="absolute -right-0.5 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[6px] border-l-[9px] border-y-transparent border-l-[#12A85B]"
                    aria-hidden="true"
                  />
                </motion.div>
              )}

              {/* Vertical connector for the stacked (single-column) phone layout */}
              {index < 5 && (
                <motion.div
                  className="absolute left-1/2 top-[calc(100%+3px)] h-9 w-5 -translate-x-1/2 md:hidden"
                  style={{ transformOrigin: "top" }}
                  {...(isMobile
                    ? {
                        initial: { opacity: 0, scaleY: 0 },
                        animate: flowInView
                          ? { opacity: 1, scaleY: 1 }
                          : { opacity: 0, scaleY: 0 },
                        transition: {
                          duration: 0.3,
                          delay: flowInView
                            ? index * FLOW_STEP_GAP + FLOW_ARROW_OFFSET
                            : 0,
                          ease: "easeOut",
                        },
                      }
                    : {
                        initial: { opacity: 0, scaleY: 0 },
                        whileInView: { opacity: 1, scaleY: 1 },
                        viewport: { once: true, amount: 0.5 },
                        transition: { duration: 0.38, delay: 0.2, ease: "easeOut" },
                      })}
                >
                  <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-l-2 border-solid border-[#12A85B]/55" />
                  <span
                    className="absolute -bottom-0.5 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[6px] border-t-[9px] border-x-transparent border-t-[#12A85B]"
                    aria-hidden="true"
                  />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* BELOW: Tablet Device Mockup */}
      <div className="relative flex w-full justify-center">
        <motion.div
          className="w-full max-w-[760px]"
          initial={{ opacity: 0, x: 45, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={isMobile ? { duration: 0.3, ease: [0.22, 1, 0.36, 1] } : {
            duration: 0.65,
            delay: 2.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
        <div className="relative w-full rounded-[24px] border border-[#DCEBFA] bg-white px-4 py-7 shadow-[0_30px_70px_rgba(7,27,77,0.1)]">

          {/* Row: 4 Stat Cards + Top Entry Points + Total Leads */}
          <div className="grid items-center gap-6 md:grid-cols-[340px_1fr_auto]">
            {/* LEFT: 4 Stats Cards (2x2) */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Leads", value: "12.5K", change: "18%" },
                { label: "Chats Started", value: "8.9K", change: "21%" },
                { label: "Leads Converted", value: "5.6K", change: "25%" },
                { label: "Conversion", value: "2.1K", change: "16%" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl border border-[#E5EEF8] bg-[#FBFDFF] px-4 py-6 text-start shadow-sm max-md:px-3 max-md:py-4"
                  initial={{ opacity: 0, y: -12, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={isMobile ? { duration: 0.25, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] } : {
                    duration: 0.38,
                    delay: 3.3 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="m-0! whitespace-nowrap! text-[10px]! font-semibold! uppercase! tracking-tight! text-[#60708C] leading-none! max-md:whitespace-normal! max-md:leading-tight!">
                    {item.label}
                  </p>
                  <div className="mt-2.5 flex items-baseline justify-start gap-2 whitespace-nowrap">
                    <h4 className="m-0! text-xl! font-black! text-[#071B4D] leading-none max-md:text-lg!">
                      {item.value}
                    </h4>
                    <span className="m-0! flex items-center text-[10px]! font-black! text-[#12A85B] leading-none">
                      ▲ {item.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT: Top Entry Points */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={isMobile ? { duration: 0.3 } : { duration: 0.4, delay: 3.8 }}
            >
              <h4 className="m-0! mb-4! text-sm! font-black! text-[#071B4D]">
                Top Entry Points
              </h4>

              <div className="space-y-5">
                {[
                  { label: "Website Button", value: "6,124 (49%)", width: "49%", color: "bg-[#12A85B]" },
                  { label: "Landing Page", value: "2,901 (23%)", width: "23%", color: "bg-[#155EEF]" },
                  { label: "QR Code", value: "1,987 (15%)", width: "15%", color: "bg-[#7C3AED]" },
                  { label: "Email Campaign", value: "1,446 (11%)", width: "11%", color: "bg-[#F59E0B]" }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="mb-1.5 flex justify-between text-[11px] font-bold text-[#4B5B77] leading-none">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-[#E5EEF8]">
                      <motion.div
                        className={`h-full origin-left rounded-full ${item.color}`}
                        style={{ width: item.width }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={isMobile ? { duration: 0.4, delay: index * 0.05, ease: "easeOut" } : {
                          duration: 0.5,
                          delay: 3.95 + index * 0.12,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Total Leads Donut */}
            <motion.div
              className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.7, rotate: -25 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={isMobile ? { duration: 0.35, ease: [0.22, 1, 0.36, 1] } : {
              duration: 0.55,
              delay: 4.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h4 className="m-0! mb-3! text-sm! font-black! text-[#071B4D] text-center">
              Total Leads
            </h4>

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[conic-gradient(#12A85B_0_49%,#155EEF_49%_72%,#7C3AED_72%_87%,#F59E0B_87%_100%)] shadow-sm">
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white text-center">
                <h4 className="m-0! text-[17px]! font-black! text-[#071B4D] leading-tight">
                  12.5K
                </h4>
                <p className="m-0! mt-0.5! text-[11px]! font-bold! text-[#12A85B] leading-none flex items-center">
                  ▲ 18%
                </p>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  </div>
  {/* <Reveal delay={0.5}>
  <div className="mx-auto mt-10 flex w-fit max-w-6xl items-center justify-center gap-4 rounded-2xl border border-[#CFECDD] bg-[#F1FCF5] px-6 py-2 text-center text-sm font-black text-[#116B3D] sm:text-base">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#078A46] text-xl text-white">
      ✦
    </span>

    The WhatsApp Button isn’t just a chat trigger — it becomes the entry
    point to your entire automation ecosystem.
  </div>
</Reveal> */}
</section>

{/* <section className="relative overflow-hidden bg-white px-5 pb-[90px] pt-[90px] max-md:pb-[50px] max-md:pt-[35px] sm:px-8 lg:px-12 xl:px-16">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[260px] w-[500px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1450px]">
    <div className="text-center">
      <Reveal>
        <h2 className="text-[clamp(2.05rem,5.5vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#071B4D]">
          What Happens After a User Clicks the Button
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-3 max-w-[900px] !text-[1.12rem] font-semibold leading-[1.65] text-[#4B5B77] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
          Every button click becomes the start of a structured WhatsApp journey —
          your chatbot replies instantly, workflows run in the background and
          customer data is captured automatically.
        </p>
      </Reveal>
    </div>

    <style>{`
      @keyframes journeyContentIn {
        from { opacity: 0; transform: translateX(var(--journey-x)); }
        to { opacity: 1; transform: translateX(0); }
      }
      .journey-stagger > * {
        --journey-x: -24px;
        opacity: 0;
        animation: journeyContentIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }
      .journey-stagger > *:nth-child(even) { --journey-x: 24px; }
      .journey-stagger > *:nth-child(1) { animation-delay: 0.18s; }
      .journey-stagger > *:nth-child(2) { animation-delay: 0.38s; }
      .journey-stagger > *:nth-child(3) { animation-delay: 0.58s; }
      .journey-stagger > *:nth-child(4) { animation-delay: 0.78s; }
      .journey-stagger > *:nth-child(5) { animation-delay: 0.98s; }
    `}</style>

    <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-7 md:grid-cols-3">
      <AnimatePresence mode="popLayout" initial={false}>
      {visibleJourneySteps.map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.div
            key={step.number}
            className="relative"
            layout
            initial={{ opacity: 0, x: 70, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -70, scale: 0.94 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative flex min-h-[560px] h-full flex-col rounded-2xl border border-[#CFE2FF] bg-white p-6 shadow-[0_18px_42px_rgba(7,27,77,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#44BBFF]/60 hover:shadow-[0_26px_58px_rgba(3,143,223,0.14)]">
              <span className="absolute right-5 top-5 text-[2rem] font-black leading-none text-[#155EEF]/10">
                {String(step.number).padStart(2, "0")}
              </span>

              <div className="mt-4 mb-5 flex items-center gap-3 pr-10">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#155EEF] shadow-inner">
                  <Icon size={25} strokeWidth={2.2} />
                </div>

                <h3 className="m-0! text-[1.05rem]! font-black! leading-snug! tracking-normal! text-[#071B4D]!">
                  {step.title}
                </h3>
              </div>

              <p className="mb-5! text-[0.95rem]! font-normal! leading-[1.6]! text-[#5B667A]!">
                {step.desc}
              </p>

              <div className={`mx-auto mt-auto h-[285px] w-[88%] rounded-xl border border-[#E5EEF8] bg-[#F8FBFF] p-3.5 [&_h4]:text-[11px]! [&_h5]:text-[10px]! [&_p]:text-[10px]! [&_button]:min-h-0! [&_button]:py-1.5! [&_button]:text-[10px]! ${step.type === "data" ? "overflow-hidden" : "overflow-y-auto"}`}>
                {step.type === "greet" && (
                  <div className="journey-stagger space-y-2">
                    <div className="rounded-lg bg-white p-3 text-[11px] font-semibold leading-5 text-[#26364F] shadow-sm">
                      Hi there! 👋
                      <br />
                      Welcome to Vertex Suite. How can we help you today?
                      <p className="mt-1 text-right text-[9px] text-[#94A3B8]">
                        9:41 AM
                      </p>
                    </div>

                    {["View Services", "Pricing", "Speak to Expert"].map(
                      (item) => (
                        <button
                          key={item}
                          className="w-full rounded-lg border border-[#DCEBFA] bg-white py-2 text-[11px] font-black text-[#155EEF]"
                        >
                          {item}
                        </button>
                      )
                    )}
                  </div>
                )}

                {step.type === "route" && (
                  <div className="journey-stagger space-y-2">
                    <p className="text-[11px] font-black text-[#071B4D]">
                      Choose an option:
                    </p>

                    {[
                      "Sales Enquiry",
                      "Technical Support",
                      "Partnership",
                      "Billing",
                    ].map((item, i) => (
                      <button
                        key={item}
                        className={`w-full rounded-lg border py-2 text-[11px] font-black ${
                          i === 1
                            ? "border-[#12A85B] bg-[#12A85B] text-white"
                            : "border-[#DCEBFA] bg-white text-[#4B5B77]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}

                    <p className="text-right text-[9px] font-semibold text-[#94A3B8]">
                      9:41 AM
                    </p>
                  </div>
                )}

                {step.type === "workflow" && (
                  <div className="journey-stagger space-y-3">
                    {[
                      {
                        icon: Tag,
                        text: "Tag Applied: Support",
                      },
                      {
                        icon: UserRound,
                        text: "Assign to Team",
                      },
                      {
                        icon: Mail,
                        text: "Send Welcome Message",
                      },
                      {
                        icon: TicketCheck,
                        text: "Create Support Ticket",
                      },
                    ].map((item, i) => {
                      const ItemIcon = item.icon;

                      return (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm"
                        >
                          <div className="flex items-center gap-2 text-[11px] font-bold text-[#334155]">
                            <ItemIcon
                              size={14}
                              className="text-[#155EEF]"
                            />
                            {item.text}
                          </div>

                          <CheckCircle2
                            size={14}
                            className="text-[#12A85B]"
                            fill="currentColor"
                          />
                        </div>
                      );
                    })}
                  </div>
                )}

                {step.type === "data" && (
                  <div className="journey-stagger space-y-2">
                    <h4 className="text-[11px]! font-black! leading-tight! text-[#071B4D]!">
                      Lead Captured
                    </h4>

                    <div className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF2FF] text-[#155EEF]">
                        <UserRound size={16} />
                      </div>

                      <div>
                        <h5 className="text-[10px]! font-black! leading-tight! text-[#071B4D]!">
                          Riya Sharma
                        </h5>
                        <p className="text-[9px]! font-semibold! leading-4! text-[#60708C]!">
                          riya.sharma@email.com
                        </p>
                        <p className="text-[9px]! font-semibold! leading-4! text-[#60708C]!">
                          +91 98765 43210
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-white p-2 text-[10px] font-semibold leading-4 text-[#334155] shadow-sm">
                      <p>
                        <span className="font-black text-[#155EEF]">
                          Interest:
                        </span>{" "}
                        Technical Support
                      </p>
                      <p>
                        <span className="font-black text-[#155EEF]">
                          Source:
                        </span>{" "}
                        Website Button
                      </p>
                    </div>
                  </div>
                )}

                {step.type === "human" && (
                  <div className="journey-stagger space-y-2">
                    <div className="rounded-lg bg-white p-3 shadow-sm">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#071B4D] text-[10px] font-black text-white">
                            AR
                          </div>
                          <div>
                            <h5 className="text-[11px] font-black text-[#071B4D]">
                              Agent Rahul
                            </h5>
                            <p className="text-[9px] font-semibold text-[#12A85B]">
                              Online
                            </p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-[#94A3B8]">
                          0:15
                        </span>
                      </div>

                      <p className="text-[11px] font-semibold leading-5 text-[#334155]">
                        Hi Riya, I’m Rahul. How can I assist you further?
                      </p>
                    </div>

                    <div className="ml-auto max-w-[80%] rounded-lg bg-[#EAFBF1] p-3 text-[11px] font-semibold leading-5 text-[#173B2B]">
                      Thanks! I need help with setup.
                      <p className="mt-1 text-right text-[9px] text-[#6B8A72]">
                        9:42 AM
                      </p>
                    </div>
                  </div>
                )}

                {step.type === "follow" && (
                  <div className="journey-stagger space-y-3">
                    <div className="rounded-lg bg-white p-3 text-[11px] font-semibold leading-5 text-[#26364F] shadow-sm">
                      Hi Riya 👋
                      <br />
                      Just checking in. Do you still need assistance? We’re
                      here to help!
                      <p className="mt-1 text-right text-[9px] text-[#94A3B8]">
                        Tomorrow, 10:00 AM
                      </p>
                    </div>

                    <button className="w-full rounded-lg border border-[#DCEBFA] bg-white py-2 text-[11px] font-black text-[#155EEF]">
                      Chat with us again
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
      </AnimatePresence>
    </div>

    <div className="mx-auto mt-8 flex max-w-[760px] items-center justify-center rounded-full border border-[#1A6EB9]/35 bg-white px-6 py-3 text-center font-[Manrope] text-sm font-bold text-[#071B4D] shadow-[0_12px_28px_rgba(7,27,77,0.06)]">
      A simple click triggers an entire automated journey — powered by your
      chatbot, workflows and CRM.
    </div>
  </div>
</section> */}

<section className="relative overflow-hidden bg-white px-5 pb-[90px] pt-[90px] max-md:pb-[50px] max-md:pt-[35px] sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-0 top-1/3 h-[420px] w-[520px] rounded-full bg-[#EAFBF1] opacity-70 blur-3xl" />
    <div className="absolute right-0 top-0 h-[360px] w-[560px] rounded-full bg-[#F2FFF7] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1540px]">
    <div className="grid gap-10 xl:grid-cols-[0.92fr_2.08fr] xl:gap-8">
      <div className="flex flex-col">
        {/* <Reveal>
          <h2 className="text-[clamp(2rem,3.3vw,3.35rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#101936]">
            Integrations <span className="text-[#12A85B]">&amp;</span>
            <br />
            System <span className="text-[#25B96B]">Connectivity</span>
          </h2>
        </Reveal> */}

       

        <Reveal>
          {/* <h2 className="mt-6! max-w-[430px] text-[clamp(2rem,3.3vw,3.35rem)]! font-black! leading-tight! text-[#101936]!">
            Connect the WhatsApp Button to Your Entire System
          </h2> */}
          <h2 className="text-[clamp(2.05rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-[#101936]">
            Integrations <span className="text-[#12A85B]">&amp;</span>
            <br />
            System <span className="text-[#25B96B]">Connectivity</span>
          </h2>
          <p className="mt-4 max-w-[430px] !text-[1.12rem] font-medium leading-[1.65] text-[#526078] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
            Every click becomes a trackable lead, a guided chat and an automated workflow.
          </p>
        </Reveal>
          {/* <div className="mt-1 h-1 w-24 rounded-full bg-gradient-to-r from-[#078A46] to-[#25D366]" /> */}

        <div className="relative mx-auto mt-12 h-[310px] w-full max-w-[430px]">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 430 310"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {[
              [215, 155, 66, 44],
              [215, 155, 32, 181],
              [215, 155, 75, 278],
              [215, 155, 372, 47],
              [215, 155, 398, 181],
              [215, 155, 364, 278],
            ].map(([x1, y1, x2, y2], index) => (
              <motion.line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#12A85B"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.65 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={
                  isMobile
                    ? { delay: 0.28 + index * 0.05, duration: 0.3 }
                    : { delay: 0.65 + index * 0.08, duration: 0.55 }
                }
              />
            ))}
          </svg>

          <motion.div
            className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#12A85B]/35 bg-[#F2FFF7] shadow-[0_0_50px_rgba(18,168,91,0.18)]"
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={
              isMobile
                ? { delay: 0.08, duration: 0.38, ease: [0.22, 1, 0.36, 1] }
                : { delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
            }
          />
          <motion.div
            className="absolute left-1/2 top-1/2 flex h-[122px] w-[122px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[10px] border-[#D8F7E5] bg-white text-[#12A85B] shadow-[0_16px_42px_rgba(18,168,91,0.2)]"
            initial={{ opacity: 0, scale: 0.55 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={
              isMobile
                ? { duration: 0.32, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <img
              src="/assets/images/whatsapp-icon.png"
              alt="WhatsApp"
              className="h-[72px] w-[72px] object-contain"
            />
          </motion.div>

          {[
            { icon: Bot, position: "left-[8%] top-[4%]" },
            { icon: IdCard, position: "left-0 top-[48%]" },
            { icon: Workflow, position: "left-[10%] bottom-0" },
            { icon: UsersRound, position: "right-[6%] top-[5%]" },
            { icon: BarChart3, position: "right-0 top-[48%]" },
            { icon: Inbox, position: "right-[8%] bottom-0" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={`absolute ${item.position} flex h-16 w-16 items-center justify-center rounded-full border border-[#12A85B]/35 bg-white text-[#12A85B] shadow-[0_10px_28px_rgba(18,168,91,0.12)]`}
                initial={{ opacity: 0, scale: 0.65 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={
                  isMobile
                    ? { delay: 0.5 + index * 0.06, type: "spring", stiffness: 240, damping: 19 }
                    : { delay: 1.05 + index * 0.1, type: "spring", stiffness: 180, damping: 16 }
                }
                onAnimationComplete={index === 5 ? () => setHubDone(true) : undefined}
              >
                <Icon size={29} strokeWidth={2} />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div ref={cardsRef} className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {systemConnectivityCards.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              className="relative min-h-[300px] self-start rounded-[24px] border border-[#CFECDD] bg-[#FBFFFC] p-6 shadow-[0_12px_32px_rgba(18,168,91,0.06)]"
              {...(isMobile
                ? {
                    /* Alternate the entry side so the stack reads left, right,
                       left … as it fills in. */
                    initial: { opacity: 0, x: index % 2 === 0 ? -44 : 44 },
                    animate: cardsPlay
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -44 : 44 },
                    transition: {
                      duration: 0.38,
                      delay: cardsPlay ? index * 0.09 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }
                : {
                    initial: { opacity: 0, y: 28 },
                    whileInView: { opacity: 1, y: 0 },
                    /* Trigger a bit before the card is fully on screen so the
                       second row is already settled by the time it is read. */
                    viewport: { once: true, amount: 0.25 },
                    transition: {
                      /* Stagger within a row only — row 2 should not inherit
                         row 1's offset and start over a second late. */
                      delay: 1.85 + index * 0.15,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  })}
            >
              <div className="-mx-6 -mt-6 h-[220px] w-[calc(100%+3rem)] max-w-none overflow-hidden rounded-b-none rounded-t-[24px] border border-[#CFECDD] bg-white shadow-[0_10px_24px_rgba(18,168,91,0.07)]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#087A40] text-white shadow-[0_8px_18px_rgba(18,168,91,0.2)]">
                  <Icon size={23} strokeWidth={2} />
                </div>
                <h3 className="m-0! whitespace-nowrap! text-[18px]! font-black! leading-tight! text-[#151B38]!">{item.title}</h3>
              </div>

              <p className="m-0! mt-1! text-[13px]! font-medium! leading-5! text-[#615B78]">{item.summary}</p>
              <p className="mt-2 text-[14px] font-medium leading-6 text-[#4E5871]">{item.body}</p>
            </motion.article>
          );
        })}
      </div>
    </div>

    {/* <Reveal delay={0.2}>
      <div className="mt-6 flex items-center justify-center gap-4 rounded-2xl border border-[#CFECDD] bg-[#F1FCF5] px-5 py-4 text-center text-sm font-black text-[#116B3D] sm:text-base">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#078A46] text-xl text-white">✦</span>
        The WhatsApp Button isn’t just a chat trigger — it becomes the entry point to your entire automation ecosystem.
      </div>
    </Reveal> */}
  </div>
</section>

      <WhatsAppButtonFaqSection />

      {/* Phone: sticky CTA bar. Kept outside every <section> because the scroll
          reveal puts an inline transform on sections, which would trap a fixed
          child inside them. */}
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
  );
}

const whatsappButtonFaqs = [
  {
    q: "What is a WhatsApp button?",
    a: "A WhatsApp button is a clickable element — on your website, ad, email, or inside a WhatsApp message — that starts a chat with your business instantly, without the customer having to save your number.",
  },
  {
    q: "What types of buttons can I use in WhatsApp messages?",
    a: "You can use quick reply buttons for fast choices, call-to-action buttons for links and phone calls, and list or flow-based options for longer menus — all within WhatsApp’s approved formats.",
  },
  {
    q: "Can I add a WhatsApp button to my website?",
    a: "Yes. Vertex Suite gives you a ready-to-embed chat widget and link generator that you can place on any page, landing page, or ecommerce store in minutes.",
  },
  {
    q: "Do buttons need a coding team to set up?",
    a: "No. Buttons are configured visually inside Vertex Suite — you choose the label, the action, and the flow it triggers. Only advanced custom integrations need developer help.",
  },
  {
    q: "Can I pre-fill the message a customer sends?",
    a: "Yes. Click-to-WhatsApp links can carry a pre-filled message, so you instantly know which page, product, or campaign the customer came from.",
  },
  {
    q: "What happens after a customer taps the button?",
    a: "The chat opens with your business and can trigger a chatbot, a WhatsApp Flow, or route the conversation to the right team in your shared inbox.",
  },
  {
    q: "Can I track how many people click the button?",
    a: "Yes. Every button and link is tracked, so you can see clicks, conversations started, and conversions by source and campaign.",
  },
  {
    q: "Do buttons work on both mobile and desktop?",
    a: "Yes. Buttons open WhatsApp on mobile and WhatsApp Web or the desktop app, so customers get the same experience on any device.",
  },
];

function WhatsAppButtonFaqSection() {
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
              Can’t find what you’re looking for? Our team is here to help you understand WhatsApp Buttons and Vertex Suite better.
            </p>
          </Reveal>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto flex w-full max-w-[1250px] flex-col gap-1">
          {whatsappButtonFaqs.map((item, index) => {
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
