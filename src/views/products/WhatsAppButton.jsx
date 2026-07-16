import React from "react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  CheckCircle2,
  Copy,
  Database,
  FileBadge,
  FileText,
  Globe2,
  IdCard,
  Inbox,
  LayoutDashboard,
  LayoutTemplate,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  MonitorSmartphone,
  MousePointerClick,
  Network,
  PhoneCall,
  QrCode,
  Route,
  Send,
  SendHorizontal,
  Settings,
  ShoppingBag,
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
  Zap,
} from "lucide-react";

const trustChips = [
  { icon: Target, label: "Lead Capture" },
  { icon: MessageCircle, label: "Instant Chat" },
  { icon: Bot, label: "Automation Ready" },
  { icon: Zap, label: "High Conversion" },
];

const placementCards = [
  {
    title: "Website Header",
    icon: LayoutTemplate,
    label: "Chat on WhatsApp",
  },
  {
    title: "Product Page",
    icon: ShoppingBag,
    label: "Chat Now",
  },
  {
    title: "Checkout Page",
    icon: CheckCircle2,
    label: "Chat on WhatsApp",
  },
  {
    title: "Mobile App",
    icon: Smartphone,
    label: "Chat on WhatsApp",
  },
  {
    title: "QR Entry",
    icon: QrCode,
    label: "Scan to chat",
  },
  {
    title: "Ad Click",
    icon: MessageCircle,
    label: "Talk to us on WhatsApp",
  },
];
const buttonPlacementCards = [
  {
    icon: Globe2,
    title: "Website",
    points: ["Chat on WhatsApp", "Talk to an Expert on WhatsApp"],
    visual: "website",
    position: "left",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    points: ["Support", "Sales", "Order Tracking"],
    visual: "mobile",
    position: "left",
  },
  {
    icon: ThumbsUp,
    title: "Social Media",
    points: ["Click to WhatsApp Ads", "Send WhatsApp Message"],
    visual: "social",
    position: "right",
  },
  {
    icon: SendHorizontal,
    title: "Digital Marketing",
    points: ["Email Campaigns", "SMS Campaigns", "Google Ads"],
    visual: "marketing",
    position: "right",
  },
  {
    icon: QrCode,
    title: "Offline QR Codes",
    points: ["Storefront QR", "Brochures", "Packaging"],
    visual: "qr",
    position: "left",
  },
  {
    icon: FileText,
    title: "Business Documents",
    points: ["Invoices", "Catalogs", "Proposals"],
    visual: "document",
    position: "left",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    points: ["Product Pages", "Checkout", "Tracking"],
    visual: "ecommerce",
    position: "right",
  },
  {
    icon: MapPin,
    title: "Events & Physical Locations",
    points: ["Table QR", "Appointment Booking", "Reports", "Consultation"],
    visual: "event",
    position: "right",
  },
];
const whyButtonLeft = [
  {
    number: "1",
    title: "Reduce Drop-Offs",
    text: "Keep visitors engaged by letting them chat instead of leaving your site.",
  },
  {
    number: "2",
    title: "Capture High-Intent Leads",
    text: "Collect quality leads from people who are already interested.",
  },
  {
    number: "3",
    title: "Provide Instant Support",
    text: "Answer questions in real-time and resolve issues faster.",
  },
];

const whyButtonRight = [
  {
    number: "4",
    title: "Improve Customer Experience",
    text: "Offer a familiar, easy and personal communication channel.",
  },
  {
    number: "5",
    title: "Boost Conversions Across All Channels",
    text: "Turn more conversations into sales across every touchpoint.",
  },
  {
    number: "6",
    title: "Connect Users Directly to Automation",
    text: "Route users to the right flows and trigger actions instantly.",
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
const clickJourneySteps = [
  {
    number: "1",
    icon: Bot,
    title: "Chatbot Greets & Assists Immediately",
    type: "greet",
  },
  {
    number: "2",
    icon: Route,
    title: "User Is Routed Automatically Based on Intent",
    type: "route",
  },
  {
    number: "3",
    icon: Workflow,
    title: "Workflows Trigger Behind the Scenes",
    type: "workflow",
  },
  {
    number: "4",
    icon: Database,
    title: "Data Gets Captured Automatically",
    type: "data",
  },
  {
    number: "5",
    icon: UserCheck,
    title: "Human Takeover When Needed",
    type: "human",
  },
  {
    number: "6",
    icon: Send,
    title: "Follow-Ups Are Sent Automatically",
    type: "follow",
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
    value: "12,456",
    change: "+18%",
  },
  {
    label: "Chats Started",
    value: "8,932",
    change: "+23%",
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
    value: "6,124",
    width: "72%",
  },
  {
    label: "Landing Page",
    value: "2,901",
    width: "54%",
  },
  {
    label: "QR Code",
    value: "1,987",
    width: "42%",
  },
  {
    label: "Email Campaign",
    value: "1,446",
    width: "30%",
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
export default function WhatsAppButton() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <section className="relative px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-[500px] w-[520px] rounded-full bg-[#EAF7FF] blur-3xl" />
          <div className="absolute right-0 top-8 h-[520px] w-[560px] rounded-full bg-[#EAFBF1] blur-3xl" />
          <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#F4FBFF] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1450px] items-center gap-12 lg:grid-cols-[0.95fr_0.75fr_1fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#BDEFD0] bg-[#EAFBF1] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0F9F5A] shadow-sm">
              <MessageCircle size={15} fill="currentColor" />
              WhatsApp Button
            </div>

            <h1 className="max-w-[680px] text-[clamp(2.5rem,5vw,5rem)] font-black leading-[1.08] tracking-[-0.055em] text-[#071B4D]">
              One button that captures{" "}
              <span className="text-[#12A85B]">more leads</span> than your
              entire website
            </h1>

            <p className="mt-7 max-w-[620px] text-base font-medium leading-8 text-[#2F3D5C] sm:text-lg">
              Give customers an instant route into your WhatsApp chatbot. One
              button does the work of multiple pages by capturing leads,
              answering questions and starting conversations right away.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#12A85B] px-7 py-4 text-sm font-black text-white shadow-[0_18px_34px_rgba(18,168,91,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#0F8F4E]">
                Start Free Trial
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl border border-[#BFD3EA] bg-white px-7 py-4 text-sm font-black text-[#071B4D] shadow-[0_14px_30px_rgba(7,27,77,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#12A85B] hover:bg-[#F2FFF8]">
                <CalendarDays size={18} className="text-[#12A85B]" />
                Book a Demo
              </button>
            </div>

            <div className="mt-9 grid max-w-[680px] grid-cols-2 gap-3 sm:grid-cols-4">
              {trustChips.map((chip, index) => {
                const Icon = chip.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-xl border border-[#DCEBFA] bg-white px-3 py-3 text-xs font-extrabold text-[#071B4D] shadow-[0_10px_24px_rgba(7,27,77,0.06)]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F0FAFF] text-[#1A6EB9]">
                      <Icon size={16} strokeWidth={2.3} />
                    </div>
                    {chip.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CENTER PHONE */}
          <div className="relative z-20 flex justify-center">
            <div className="absolute left-[-70px] top-[160px] hidden h-24 w-24 items-center justify-center rounded-full bg-[#12A85B] text-white shadow-[0_24px_55px_rgba(18,168,91,0.32)] lg:flex">
              <MessageCircle size={58} fill="currentColor" />
            </div>

            <div className="relative w-[295px] sm:w-[340px]">
              <div className="rounded-[48px] border-[10px] border-[#101828] bg-[#101828] shadow-[0_36px_90px_rgba(7,27,77,0.35)]">
                <div className="overflow-hidden rounded-[36px] bg-[#F3EEE6]">
                  {/* Status */}
                  <div className="flex items-center justify-between bg-white px-5 py-3 text-xs font-bold text-[#071B4D]">
                    <span>9:41</span>
                    <span>● ● ▰</span>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3 bg-white px-4 pb-4">
                    <span className="text-2xl text-[#071B4D]">‹</span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071B4D] text-white">
                      V
                    </div>

                    <div className="flex-1">
                      <h4 className="text-sm font-black text-[#071B4D]">
                        Vertex Assistant
                      </h4>
                      <p className="text-xs font-semibold text-[#60708C]">
                        Business Account
                      </p>
                    </div>

                    <span className="text-[#12A85B]">
                      <CheckCircle2 size={16} fill="currentColor" />
                    </span>
                    <span className="text-xl text-[#071B4D]">⋮</span>
                  </div>

                  {/* Chat Body */}
                  <div className="space-y-3 px-5 py-6">
                    <div className="ml-auto max-w-[78%] rounded-xl bg-[#DFF7C9] px-4 py-3 text-xs font-bold leading-5 text-[#173B2B] shadow-sm">
                      Hi! I want to know more about your services.
                      <p className="mt-1 text-right text-[10px] font-semibold text-[#6B8A72]">
                        9:41 AM
                      </p>
                    </div>

                    <div className="max-w-[84%] rounded-xl bg-white px-4 py-3 text-xs font-semibold leading-5 text-[#26364F] shadow-sm">
                      Hello! 👋 Welcome to Vertex Suite. How can we help you
                      today?
                      <p className="mt-1 text-right text-[10px] font-semibold text-[#97A3B5]">
                        9:41 AM
                      </p>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full rounded-xl border border-[#E6EAF0] bg-white py-3 text-sm font-black text-[#155EEF]">
                        Product Demo
                      </button>

                      <button className="w-full rounded-xl border border-[#E6EAF0] bg-white py-3 text-sm font-black text-[#155EEF]">
                        Pricing Details
                      </button>

                      <button className="w-full rounded-xl border border-[#E6EAF0] bg-white py-3 text-sm font-black text-[#155EEF]">
                        Talk to Expert
                      </button>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="flex items-center gap-2 bg-white px-4 py-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F4F7] text-[#8A98AA]">
                      +
                    </div>

                    <div className="flex-1 rounded-full bg-[#F2F4F7] px-4 py-2 text-xs font-semibold text-[#8A98AA]">
                      Type a message
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12A85B] text-white">
                      <MessageCircle size={20} fill="currentColor" />
                    </div>
                  </div>

                  <div className="flex justify-center bg-white pb-3">
                    <div className="h-1.5 w-28 rounded-full bg-[#101828]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PLACEMENT CARDS */}
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-4 text-[#0F7A44]">
              <div className="hidden h-14 w-20 rounded-full border-t-4 border-[#12A85B] lg:block" />
              <p className="text-base font-black leading-6">
                Tap once.
                <br />
                Start an automated journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {placementCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#DCEBFA] bg-white p-4 shadow-[0_16px_38px_rgba(7,27,77,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#44BBFF]/60 hover:shadow-[0_24px_52px_rgba(3,143,223,0.13)]"
                  >
                    <h3 className="mb-3 text-center text-xs font-black text-[#071B4D]">
                      {card.title}
                    </h3>

                    <div className="rounded-xl border border-[#E5EEF8] bg-[#F8FBFF] p-3">
                      {index === 0 && (
                        <div>
                          <div className="mb-3 h-5 rounded bg-[#071B4D]" />
                          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#12A85B] px-3 py-2 text-[11px] font-black text-white">
                            <MessageCircle size={13} fill="currentColor" />
                            {card.label}
                          </button>
                        </div>
                      )}

                      {index === 1 && (
                        <div>
                          <div className="mb-3 flex h-20 items-center justify-center rounded-lg bg-[#ECEFF3] text-[#071B4D]">
                            <ShoppingBag size={36} />
                          </div>
                          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#12A85B] px-3 py-2 text-[11px] font-black text-white">
                            <MessageCircle size={13} fill="currentColor" />
                            {card.label}
                          </button>
                        </div>
                      )}

                      {index === 2 && (
                        <div>
                          <div className="mb-2 flex justify-between text-xs font-bold text-[#071B4D]">
                            <span>Total</span>
                            <span>$129.00</span>
                          </div>
                          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#12A85B] px-3 py-2 text-[11px] font-black text-white">
                            <MessageCircle size={13} fill="currentColor" />
                            {card.label}
                          </button>
                        </div>
                      )}

                      {index === 3 && (
                        <div>
                          <p className="mb-3 text-xs font-bold text-[#071B4D]">
                            Need Help?
                          </p>
                          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#12A85B] px-3 py-2 text-[11px] font-black text-white">
                            <MessageCircle size={13} fill="currentColor" />
                            {card.label}
                          </button>
                        </div>
                      )}

                      {index === 4 && (
                        <div className="text-center">
                          <div className="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-lg border border-[#071B4D]/20 bg-white text-[#071B4D]">
                            <QrCode size={54} />
                          </div>
                          <p className="text-xs font-black text-[#071B4D]">
                            {card.label}
                          </p>
                        </div>
                      )}

                      {index === 5 && (
                        <div className="relative min-h-[96px]">
                          <p className="max-w-[110px] text-xs font-bold leading-5 text-[#071B4D]">
                            Special Offer! Talk to us on WhatsApp
                          </p>

                          <div className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#12A85B] text-white">
                            <MessageCircle size={28} fill="currentColor" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[420px] w-[950px] -translate-x-1/2 rounded-full bg-[#F2FAFF] blur-3xl" />
    <div className="absolute bottom-0 left-0 h-[300px] w-[520px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1450px]">
    <div className="text-center">
      <h2 className="text-[clamp(1.7rem,3.2vw,2.6rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
        Where You Can Place a WhatsApp Button
      </h2>

      <p className="mx-auto mt-3 max-w-[900px] text-sm font-semibold leading-7 text-[#4B5B77] sm:text-base">
        Wherever your customer sees your brand, a WhatsApp button can exist —
        and every placement increases engagement and conversions.
      </p>
    </div>

    <div className="relative mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_160px_1fr]">
      {/* LEFT CARDS */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {buttonPlacementCards
          .filter((card) => card.position === "left")
          .map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
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
              </div>
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
              <div
                key={index}
                className="relative rounded-2xl border border-[#CFE2FF] bg-white p-5 shadow-[0_18px_45px_rgba(7,27,77,0.08)]"
              >
                <div className="absolute -left-8 top-1/2 hidden h-px w-8 border-t-2 border-dashed border-[#038FDF]/50 lg:block" />

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
              </div>
            );
          })}
      </div>
    </div>
  </div>
</section>
<section className="relative overflow-hidden bg-white px-5 pb-24 pt-8 sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-10 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
    <div className="absolute bottom-0 left-0 h-[260px] w-[500px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1450px]">
    <div className="text-center">
      <h2 className="text-[clamp(1.7rem,3.1vw,2.55rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
        Why Businesses Choose the WhatsApp Button
      </h2>

      <p className="mx-auto mt-3 max-w-[780px] text-sm font-semibold leading-7 text-[#4B5B77] sm:text-base">
        One small button. Big impact on conversions, engagement and customer
        experience.
      </p>
    </div>

    <div className="mt-9 grid items-center gap-7 lg:grid-cols-[0.75fr_1.55fr_0.75fr]">
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
<section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[260px] w-[500px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1450px]">
    <div className="text-center">
      <h2 className="text-[clamp(1.7rem,3.1vw,2.5rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
        What Happens After a User Clicks the Button
      </h2>

      <p className="mx-auto mt-3 max-w-[900px] text-sm font-semibold leading-7 text-[#4B5B77] sm:text-base">
        Every button click becomes the start of a structured WhatsApp journey —
        your chatbot replies instantly, workflows run in the background and
        customer data is captured automatically.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6 xl:gap-4">
      {clickJourneySteps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div key={index} className="relative">
            {index < clickJourneySteps.length - 1 && (
              <div className="absolute left-[92%] top-1/2 z-20 hidden -translate-y-1/2 items-center xl:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071B4D] text-white shadow-[0_10px_24px_rgba(7,27,77,0.18)]">
                  <ArrowRight size={18} />
                </div>
              </div>
            )}

            <div className="h-full rounded-2xl border border-[#CFE2FF] bg-white p-4 shadow-[0_18px_42px_rgba(7,27,77,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#44BBFF]/60 hover:shadow-[0_26px_58px_rgba(3,143,223,0.14)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#155EEF] text-sm font-black text-white">
                  {step.number}
                </div>

                <h3 className="text-[13px] font-black leading-snug text-[#071B4D]">
                  {step.title}
                </h3>
              </div>

              <div className="rounded-xl border border-[#E5EEF8] bg-[#F8FBFF] p-3">
                {step.type === "greet" && (
                  <div className="space-y-2">
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
                  <div className="space-y-2">
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
                  <div className="space-y-3">
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
                  <div className="space-y-3">
                    <h4 className="text-[12px] font-black text-[#071B4D]">
                      Lead Captured
                    </h4>

                    <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF2FF] text-[#155EEF]">
                        <UserRound size={20} />
                      </div>

                      <div>
                        <h5 className="text-[12px] font-black text-[#071B4D]">
                          Riya Sharma
                        </h5>
                        <p className="text-[10px] font-semibold text-[#60708C]">
                          riya.sharma@email.com
                        </p>
                        <p className="text-[10px] font-semibold text-[#60708C]">
                          +91 98765 43210
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-white p-3 text-[11px] font-semibold leading-5 text-[#334155] shadow-sm">
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
                  <div className="space-y-2">
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
                  <div className="space-y-3">
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
          </div>
        );
      })}
    </div>

    <div className="mx-auto mt-8 flex max-w-[760px] items-center justify-center rounded-full border border-[#1A6EB9]/35 bg-white px-6 py-3 text-center text-sm font-bold text-[#071B4D] shadow-[0_12px_28px_rgba(7,27,77,0.06)]">
      A simple click triggers an entire automated journey — powered by your
      chatbot, workflows and CRM.
    </div>
  </div>
</section>
<section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[390px] w-[900px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
    <div className="absolute bottom-0 left-0 h-[270px] w-[520px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1450px]">
    <div className="text-center">
      <h2 className="text-[clamp(1.7rem,3vw,2.55rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
        Types of WhatsApp Buttons You Can Create
      </h2>

      <p className="mx-auto mt-3 max-w-[880px] text-sm font-semibold leading-7 text-[#4B5B77] sm:text-base">
        Choose the entry point that fits your website, app, campaign, or
        customer journey.
      </p>
    </div>

    <div className="mt-10 grid gap-7 lg:grid-cols-[1fr_300px]">
      {/* LEFT MAIN CONTENT */}
      <div>
        {/* BUTTON TYPES */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {buttonTypes.map((item, index) => (
            <div key={index}>
              <div className="mb-3 text-center">
                <h3 className="text-sm font-black text-[#071B4D]">
                  {item.label}
                </h3>
                {item.subtitle && (
                  <p className="text-xs font-bold text-[#4B5B77]">
                    {item.subtitle}
                  </p>
                )}
              </div>

              <ButtonTypeVisual type={item.type} />
            </div>
          ))}
        </div>

        {/* CONNECT SYSTEM BOX */}
        <div className="mt-9 rounded-[26px] border border-[#CFE2FF] bg-white p-6 shadow-[0_22px_60px_rgba(7,27,77,0.08)]">
          <div className="text-center">
            <h2 className="text-[clamp(1.45rem,2.5vw,2.15rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
              Connect the WhatsApp Button to Your Entire System
            </h2>

            <p className="mt-2 text-sm font-semibold text-[#4B5B77]">
              Every click becomes a trackable lead, a guided chat and an
              automated workflow.
            </p>
          </div>

          <div className="mt-6 grid items-center gap-5 lg:grid-cols-[170px_1fr_40px_1.25fr]">
            {/* SOURCE BUTTONS */}
            <div className="space-y-3">
              {sourceButtons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-[#DCEBFA] bg-[#F8FBFF] px-3 py-3 shadow-sm"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF2FF] text-[#155EEF]">
                      <Icon size={17} />
                    </div>

                    <span className="text-xs font-black text-[#071B4D]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* PLATFORM */}
            <div className="rounded-2xl border border-[#071B4D]/20 bg-[#071B4D] p-5 text-white shadow-[0_18px_44px_rgba(7,27,77,0.18)]">
              <div className="mb-5 flex items-center gap-3">
                <div className="text-2xl font-black text-[#44BBFF]">V</div>
                <h3 className="text-lg font-black">Vertex Suite Platform</h3>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {platformItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#44BBFF]">
                        <Icon size={20} />
                      </div>

                      <p className="mt-2 text-[10px] font-bold text-white/85">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ARROW */}
            <div className="hidden justify-center lg:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071B4D] text-white">
                <ArrowRight size={22} />
              </div>
            </div>

            {/* LIVE PERFORMANCE */}
            <div className="rounded-2xl border border-[#DCEBFA] bg-[#FBFDFF] p-5 shadow-sm">
              <h3 className="mb-4 text-sm font-black text-[#071B4D]">
                Live Performance Overview
              </h3>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {performanceStats.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-[#E5EEF8] bg-white p-3"
                  >
                    <p className="text-[10px] font-bold text-[#60708C]">
                      {item.label}
                    </p>

                    <h4 className="mt-1 text-lg font-black text-[#071B4D]">
                      {item.value}
                    </h4>

                    <span className="text-[10px] font-black text-[#12A85B]">
                      {item.change}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_120px]">
                <div>
                  <h4 className="mb-3 text-xs font-black text-[#071B4D]">
                    Top Entry Points
                  </h4>

                  <div className="space-y-3">
                    {entryPoints.map((item, index) => (
                      <div key={index}>
                        <div className="mb-1 flex justify-between text-[10px] font-bold text-[#4B5B77]">
                          <span>{item.label}</span>
                          <span>{item.value}</span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-[#E5EEF8]">
                          <div
                            className={`h-full rounded-full ${
                              index === 0
                                ? "bg-[#12A85B]"
                                : index === 1
                                ? "bg-[#155EEF]"
                                : index === 2
                                ? "bg-[#7C3AED]"
                                : "bg-[#F59E0B]"
                            }`}
                            style={{ width: item.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[conic-gradient(#12A85B_0_62%,#155EEF_62%_85%,#DCEBFA_85%_100%)]">
                    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white">
                      <h4 className="text-lg font-black text-[#071B4D]">
                        12.5K
                      </h4>
                      <p className="text-[9px] font-bold text-[#60708C]">
                        Total Clicks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT INTEGRATION LIST */}
      <div className="rounded-2xl border border-[#CFE2FF] bg-white p-4 shadow-[0_18px_45px_rgba(7,27,77,0.08)]">
        <div className="space-y-3">
          {integrationList.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="grid grid-cols-[44px_1fr] gap-3 rounded-xl border border-[#E5EEF8] bg-[#FBFDFF] p-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#071B4D] text-white">
                  <Icon size={20} />
                </div>

                <div>
                  <div className="mb-1 flex gap-2">
                    <span className="text-xs font-black text-[#155EEF]">
                      {index + 1}
                    </span>
                    <h3 className="text-xs font-black leading-snug text-[#071B4D]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[10px] font-semibold leading-4 text-[#4B5B77]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}