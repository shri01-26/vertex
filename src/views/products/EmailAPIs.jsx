import React from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  BarChart3,
  Send,
  Mail,
  Code2,
  TrendingUp,
  Database,
  ShieldCheck,
  MessageSquareReply,
  Workflow,
  X,
  PenTool,
  Repeat,
  BrainCircuit,
  MousePointerClick,
  UsersRound,
  Inbox,
  Rocket,
  Sparkles,
  Activity,
  Server,
  Puzzle,
  LockKeyhole,
} from "lucide-react";

const emailChips = [
  "High Deliverability",
  "Real-time Analytics",
  "API First Platform",
];
const emailChallenges = [
  {
    icon: Send,
    number: "01",
    title: "Sending Emails",
    before:
      "Manually sending emails or relying on basic tools with limited control.",
    after:
      "Trigger-based sending using APIs — automated, scheduled, and scalable.",
  },
  {
    icon: Database,
    number: "02",
    title: "Handling Volume",
    before:
      "Difficult to manage bulk emails without delays or errors.",
    after:
      "Send millions of emails reliably with infrastructure built for scale.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Delivery & Reliability",
    before:
      "Uncertain delivery, spam issues, and no control over inbox placement.",
    after:
      "Optimized delivery systems with higher inbox placement and reliability.",
  },
  {
    icon: MessageSquareReply,
    number: "04",
    title: "Managing Responses",
    before:
      "Replies handled manually across inboxes, causing delays and confusion.",
    after:
      "Centralized email management with automated routing and handling.",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Insights & Tracking",
    before:
      "Limited visibility on performance and engagement.",
    after:
      "Real-time analytics, tracking, and performance insights.",
  },
  {
    icon: Workflow,
    number: "06",
    title: "Workflows",
    before:
      "No automation — everything depends on manual actions.",
    after:
      "Automated workflows triggered by user actions, events, or data.",
  },
];
const smarterEmailCards = [
  {
    number: "01",
    icon: PenTool,
    title: "Create Without Complexity",
    text: "Design emails using drag-and-drop builders or generate content instantly.",
    visual: "builder",
  },
  {
    number: "02",
    icon: Repeat,
    title: "Automate Everything That Repeats",
    text: "Set triggers, schedules, and workflows so emails send automatically — no manual effort.",
    visual: "automation",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Understand Before You Respond",
    text: "AI summarises long emails and suggests replies instantly.",
    visual: "ai",
  },
  {
    number: "04",
    icon: MousePointerClick,
    title: "Turn Emails into Interactions",
    text: "Embed forms, actions, and responses directly inside emails — no back-and-forth needed.",
    visual: "interaction",
  },
  {
    number: "05",
    icon: UsersRound,
    title: "Segment and Target Precisely",
    text: "Filter users, group audiences, and send relevant communication at the right time.",
    visual: "segment",
  },
  {
    number: "06",
    icon: BarChart3,
    title: "See What’s Working — Instantly",
    text: "Track opens, clicks, engagement, and outcomes through real-time dashboards.",
    visual: "analytics",
  },
  {
    number: "07",
    icon: Inbox,
    title: "Manage Conversations Centrally",
    text: "Handle incoming emails, replies, and workflows from a single unified system.",
    visual: "inbox",
  },
];
const emailEngineCards = [
  {
    icon: Code2,
    number: "01",
    title: "Programmatic Sending",
    text: "Trigger emails directly from your systems — events, user actions, or workflows.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "High Deliverability Engine",
    text: "Optimize inbox placement with domain reputation, routing, and delivery monitoring.",
  },
  {
    icon: Activity,
    number: "03",
    title: "Real-Time Tracking",
    text: "Track opens, clicks, bounces, and engagement through live event data.",
  },
  {
    icon: Inbox,
    number: "04",
    title: "Inbound Email Handling",
    text: "Receive and process incoming emails to automate responses and workflows.",
  },
  {
    icon: Server,
    number: "05",
    title: "Scalable Infrastructure",
    text: "Send thousands to millions of emails without performance bottlenecks.",
  },
  {
    icon: Puzzle,
    number: "06",
    title: "Workflow Integration",
    text: "Connect email with CRM, marketing tools, and internal systems seamlessly.",
  },
  {
    icon: LockKeyhole,
    number: "07",
    title: "Security & Compliance",
    text: "Ensure secure communication with authentication, encryption, and compliance-ready systems.",
  },
];
function EmailSmartVisual({ type }) {
  if (type === "builder") {
    return (
      <div className="relative h-28 rounded-2xl bg-[#F5F9FF] p-4">
        <div className="absolute left-4 top-4 h-20 w-28 rounded-xl bg-white shadow-sm">
          <div className="m-3 h-2 w-16 rounded bg-[#CFE2FF]" />
          <div className="mx-3 mt-3 h-8 rounded bg-[#EAF2FF]" />
          <div className="mx-3 mt-2 h-2 w-20 rounded bg-[#DCEBFA]" />
        </div>

        <div className="absolute right-5 top-8 flex h-14 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-[#60A5FA] to-[#155EEF] text-white shadow-md">
          <Mail size={30} />
        </div>
      </div>
    );
  }

  if (type === "automation") {
    return (
      <div className="relative h-28 rounded-2xl bg-[#F5F9FF] p-4">
        <div className="absolute left-4 top-5 flex items-center gap-2">
          {[1, 2, 3].map((item) => (
            <span key={item} className="h-3 w-12 rounded-full bg-[#CFE2FF]" />
          ))}
        </div>

        <div className="absolute left-8 top-12 h-px w-40 border-t-2 border-dashed border-[#155EEF]/45" />

        <div className="absolute bottom-5 right-6 flex h-14 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#60A5FA] to-[#155EEF] text-white shadow-md">
          <Mail size={28} />
        </div>

        <div className="absolute bottom-8 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#155EEF] shadow-sm">
          <Workflow size={20} />
        </div>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="relative h-28 rounded-2xl bg-[#F5F9FF] p-4">
        <div className="absolute left-5 top-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#155EEF] text-white shadow-md">
          <BrainCircuit size={32} />
        </div>

        <div className="absolute right-5 top-5 h-20 w-36 rounded-xl bg-white p-3 shadow-sm">
          <div className="mb-2 h-2 w-24 rounded bg-[#CFE2FF]" />
          <div className="mb-2 h-2 w-28 rounded bg-[#DCEBFA]" />
          <div className="h-2 w-20 rounded bg-[#DCEBFA]" />
        </div>
      </div>
    );
  }

  if (type === "interaction") {
    return (
      <div className="relative h-28 rounded-2xl bg-[#F5F9FF] p-4">
        <div className="absolute left-5 top-5 h-20 w-36 rounded-xl bg-white p-3 shadow-sm">
          <div className="mb-3 h-2 w-24 rounded bg-[#CFE2FF]" />
          <div className="mb-2 h-6 rounded-lg bg-[#155EEF]" />
          <div className="h-6 rounded-lg bg-[#EAF2FF]" />
        </div>

        <div className="absolute right-6 top-9 flex h-12 w-12 items-center justify-center rounded-xl bg-[#155EEF] text-white shadow-md">
          <MousePointerClick size={26} />
        </div>
      </div>
    );
  }

  if (type === "segment") {
    return (
      <div className="relative h-28 rounded-2xl bg-[#F5F9FF] p-4">
        <div className="absolute left-6 top-9 flex h-12 w-12 items-center justify-center rounded-full bg-[#155EEF] text-white shadow-md">
          <UsersRound size={25} />
        </div>

        <div className="absolute left-24 top-7 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#155EEF] shadow-sm">
          <UsersRound size={24} />
        </div>

        <div className="absolute right-7 top-9 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF2FF] text-[#155EEF] shadow-sm">
          <UsersRound size={22} />
        </div>

        <div className="absolute left-[76px] top-[54px] h-px w-24 border-t-2 border-dashed border-[#155EEF]/45" />
      </div>
    );
  }

  if (type === "analytics") {
    return (
      <div className="relative h-28 rounded-2xl bg-[#F5F9FF] p-4">
        <div className="absolute left-5 top-5 h-20 w-32 rounded-xl bg-white p-3 shadow-sm">
          <svg viewBox="0 0 120 58" className="h-full w-full">
            <path
              d="M5 45L25 28L43 36L62 18L82 27L108 10"
              fill="none"
              stroke="#155EEF"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="absolute right-5 top-5 h-20 w-32 rounded-xl bg-white p-3 shadow-sm">
          <div className="mb-3 h-3 w-20 rounded bg-[#CFE2FF]" />
          <div className="flex items-end gap-2">
            {[28, 42, 30, 50, 36].map((height, index) => (
              <span
                key={index}
                className="w-3 rounded-full bg-[#155EEF]"
                style={{ height }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "inbox") {
    return (
      <div className="relative h-28 rounded-2xl bg-[#F5F9FF] p-4">
        <div className="absolute left-5 top-5 h-20 w-48 rounded-xl bg-white p-3 shadow-sm">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="mb-2 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#155EEF]/70" />
              <span className="h-2 w-28 rounded bg-[#DCEBFA]" />
            </div>
          ))}
        </div>

        <div className="absolute right-7 top-9 flex h-12 w-12 items-center justify-center rounded-xl bg-[#155EEF] text-white shadow-md">
          <MessageSquareReply size={26} />
        </div>
      </div>
    );
  }

  return null;
}
export default function EmailApiHero() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <section className="relative px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[#F2F8FF] blur-3xl" />
          <div className="absolute right-0 top-0 h-[560px] w-[650px] rounded-full bg-[#EAF3FF] blur-3xl" />
          <div className="absolute left-1/2 top-16 h-[380px] w-[520px] -translate-x-1/2 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1450px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center rounded-md bg-[#EAF2FF] px-3 py-1.5 text-xs font-black text-[#155EEF]">
              Email API Platform
            </div>

            <h1 className="max-w-[680px] text-[clamp(2.4rem,5vw,4.8rem)] font-black leading-[1.08] tracking-[-0.055em] text-[#071B4D]">
              Email, But Not the Way You’ve Used It Before
            </h1>

            <p className="mt-7 max-w-[560px] text-base font-medium leading-8 text-[#334155] sm:text-lg">
              A powerful email API platform designed for high deliverability,
              automation, and scalable business communication.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#155EEF] px-7 py-4 text-sm font-black text-white shadow-[0_18px_34px_rgba(21,94,239,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#0F4CD4]">
                Start Building
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center gap-2 rounded-lg border border-[#BFD3EA] bg-white px-7 py-4 text-sm font-black text-[#155EEF] shadow-[0_14px_30px_rgba(7,27,77,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#155EEF]">
                <BookOpen size={18} />
                View Documentation
              </button>
            </div>

            <div className="mt-9 flex flex-wrap gap-5">
              {emailChips.map((chip, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#4B5B77]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAF2FF] text-[#155EEF]">
                    <CheckCircle2 size={13} strokeWidth={3} />
                  </span>
                  {chip}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative min-h-[560px] w-full">
            {/* Soft circular glow */}
            <div className="absolute left-[15%] top-[4%] h-[500px] w-[500px] rounded-full bg-[#EAF3FF]" />
            <div className="absolute left-[22%] top-[12%] h-[360px] w-[360px] rounded-full border border-dashed border-[#8CB9FF]/45" />

            {/* Floating stat card - Deliverability */}
            <div className="absolute left-[4%] top-[16%] z-20 rounded-2xl border border-[#DCEBFA] bg-white/90 p-4 shadow-[0_20px_45px_rgba(7,27,77,0.11)] backdrop-blur-xl">
              <p className="text-xs font-black text-[#60708C]">
                Deliverability
              </p>
              <h3 className="mt-1 text-2xl font-black text-[#071B4D]">
                99.2%
              </h3>

              <svg viewBox="0 0 120 48" className="mt-2 h-10 w-28">
                <path
                  d="M4 36L24 24L42 31L60 16L78 22L96 10L116 14"
                  fill="none"
                  stroke="#16A34A"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Floating sent card */}
            <div className="absolute right-[6%] top-[8%] z-20 rounded-2xl border border-[#DCEBFA] bg-white/90 p-4 shadow-[0_20px_45px_rgba(7,27,77,0.11)] backdrop-blur-xl">
              <p className="text-xs font-black text-[#60708C]">Emails Sent</p>
              <div className="mt-1 flex items-end gap-3">
                <h3 className="text-2xl font-black text-[#071B4D]">2.4M</h3>
                <TrendingUp size={22} className="text-[#16A34A]" />
              </div>

              <svg viewBox="0 0 130 38" className="mt-2 h-8 w-32">
                <path
                  d="M4 28L25 20L44 24L64 12L85 18L105 10L126 14"
                  fill="none"
                  stroke="#16A34A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Floating open-rate card */}
            <div className="absolute right-[2%] top-[33%] z-20 rounded-2xl border border-[#DCEBFA] bg-white/90 p-4 shadow-[0_20px_45px_rgba(7,27,77,0.11)] backdrop-blur-xl">
              <p className="text-xs font-black text-[#60708C]">Open Rate</p>

              <div className="mt-3 flex items-end gap-2">
                {[34, 52, 40, 72, 58, 82].map((height, index) => (
                  <span
                    key={index}
                    className="w-3 rounded-full bg-[#155EEF]"
                    style={{ height }}
                  />
                ))}
              </div>
            </div>

            {/* Paper plane */}
            <div className="absolute left-[13%] bottom-[23%] z-20 flex h-20 w-20 rotate-[-12deg] items-center justify-center rounded-2xl border border-[#DCEBFA] bg-white shadow-[0_20px_45px_rgba(7,27,77,0.12)]">
              <Send size={36} className="text-[#16A34A]" />
            </div>

            {/* Main envelope */}
            <div className="absolute left-1/2 top-[14%] z-10 w-[430px] -translate-x-1/2">
              <div className="relative mx-auto h-[310px] w-[390px]">
                {/* Back sheet */}
                <div className="absolute left-[80px] top-0 h-[185px] w-[230px] rounded-2xl bg-white shadow-[0_18px_45px_rgba(7,27,77,0.14)]">
                  <div className="mx-auto mt-8 h-4 w-36 rounded-full bg-[#C7D6EA]" />
                  <div className="mx-auto mt-5 h-4 w-44 rounded-full bg-[#DDE7F4]" />
                  <div className="mx-auto mt-5 h-4 w-28 rounded-full bg-[#DDE7F4]" />
                </div>

                {/* Envelope body */}
                <div className="absolute bottom-0 left-0 h-[230px] w-full rounded-[34px] bg-gradient-to-br from-[#2563EB] via-[#155EEF] to-[#0F4CD4] shadow-[0_35px_85px_rgba(21,94,239,0.35)]">
                  <div className="absolute inset-x-0 top-0 h-[130px] rounded-t-[34px] bg-gradient-to-br from-[#60A5FA] to-[#155EEF] [clip-path:polygon(0_0,50%_65%,100%_0,100%_100%,0_100%)]" />
                  <div className="absolute bottom-0 left-0 h-[150px] w-full rounded-b-[34px] bg-gradient-to-br from-[#1D4ED8] to-[#155EEF] [clip-path:polygon(0_0,50%_50%,100%_0,100%_100%,0_100%)]" />
                  <div className="absolute bottom-0 left-0 h-[150px] w-full rounded-b-[34px] bg-gradient-to-tr from-[#0F4CD4] to-[#2563EB] [clip-path:polygon(0_0,50%_45%,100%_0,100%_100%,0_100%)] opacity-70" />
                </div>
              </div>
            </div>

            {/* API code card */}
            <div className="absolute bottom-[10%] right-[8%] z-30 w-[330px] rounded-2xl bg-[#071B4D] p-5 shadow-[0_28px_70px_rgba(7,27,77,0.28)]">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-black text-white">Send Email</h3>
                <span className="rounded-full bg-[#10B981]/15 px-3 py-1 text-[10px] font-black text-[#34D399]">
                  API READY
                </span>
              </div>

              <div className="rounded-xl bg-[#0A255F] p-4 font-mono text-[12px] leading-6 text-[#B9D7FF]">
                <p>
                  <span className="text-[#60A5FA]">POST</span>{" "}
                  /v1/email/send
                </p>
                <p>{"{"}</p>
                <p>
                  &nbsp;&nbsp;"to": "user@example.com",
                </p>
                <p>
                  &nbsp;&nbsp;"template_id": "welcome",
                </p>
                <p>
                  &nbsp;&nbsp;"data": {"{"} name: "John" {"}"}
                </p>
                <p>{"}"}</p>
              </div>

              <div className="mt-3 flex items-center justify-end gap-2 text-xs font-black text-[#34D399]">
                <CheckCircle2 size={15} />
                Delivered
              </div>
            </div>

            {/* Small floating mail icon */}
            <div className="absolute left-[28%] top-[40%] z-20 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#155EEF] shadow-[0_16px_34px_rgba(7,27,77,0.12)]">
              <Mail size={24} />
            </div>

            {/* Dashed paths */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 700 560"
              fill="none"
            >
              <path
                d="M170 210C240 180 310 185 380 230"
                stroke="#8CB9FF"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
              <path
                d="M420 220C500 190 570 145 650 110"
                stroke="#8CB9FF"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
              <path
                d="M450 320C525 330 595 335 650 290"
                stroke="#8CB9FF"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
              <path
                d="M280 345C230 390 180 415 120 430"
                stroke="#8CB9FF"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
  {/* Background Glow */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[260px] w-[520px] rounded-full bg-[#EEF5FF] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1380px]">
    {/* Heading */}
    <div className="text-center">
      <h2 className="text-[clamp(1.6rem,3vw,2.45rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
        The Hidden Challenges of Business Email Operations
      </h2>

      <p className="mx-auto mt-3 max-w-[820px] text-sm font-semibold leading-7 text-[#4B5B77] sm:text-base">
        From sending large volumes to ensuring delivery and managing replies,
        email operations become complex without the right systems.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {emailChallenges.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="group rounded-2xl border border-[#E0ECFA] bg-white p-5 shadow-[0_18px_42px_rgba(7,27,77,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#8CB9FF]/70 hover:shadow-[0_26px_58px_rgba(21,94,239,0.13)]"
          >
            {/* Icon */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2FF] text-[#155EEF] transition group-hover:scale-105">
              <Icon size={26} strokeWidth={2.2} />
            </div>

            <h3 className="mb-5 text-[0.9rem] font-black leading-snug text-[#071B4D]">
              <span className="mr-1 text-[11px] font-black text-[#155EEF]">
                {card.number}
              </span>
              {card.title}
            </h3>

            {/* Before */}
            <div className="mb-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFF1F1] text-[#EF4444]">
                  <X size={13} strokeWidth={3} />
                </span>
                <span className="text-xs font-black text-[#EF4444]">
                  Before
                </span>
              </div>

              <p className="text-xs font-semibold leading-5 text-[#4B5B77]">
                {card.before}
              </p>
            </div>

            {/* After */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EAFBF1] text-[#16A34A]">
                  <CheckCircle2 size={13} strokeWidth={3} />
                </span>
                <span className="text-xs font-black text-[#16A34A]">
                  After
                </span>
              </div>

              <p className="text-xs font-semibold leading-5 text-[#4B5B77]">
                {card.after}
              </p>
            </div>
          </div>
        );
      })}
    </div>

    {/* Bottom Banner */}
    <div className="mt-10 overflow-hidden rounded-2xl border border-[#DCEBFA] bg-gradient-to-r from-[#EAF2FF] via-[#F4F8FF] to-[#DDEBFF] px-6 py-6 shadow-[0_18px_45px_rgba(21,94,239,0.08)]">
      <div className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">
        <div className="flex-1">
          <h3 className="text-[clamp(1.2rem,2vw,1.7rem)] font-black text-[#155EEF]">
            Email stops being a task — and starts becoming a system.
          </h3>

          <p className="mt-2 text-sm font-semibold text-[#4B5B77] sm:text-base">
            This is where modern email platforms change everything.
          </p>
        </div>

        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-[#155EEF] shadow-[0_16px_34px_rgba(21,94,239,0.14)]">
          <TrendingUp size={42} strokeWidth={2.3} />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
    <div className="absolute bottom-0 left-0 h-[280px] w-[520px] rounded-full bg-[#EEF5FF] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1380px]">
    <div className="text-center">
      <h2 className="text-[clamp(1.6rem,3vw,2.45rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
        A Smarter Way to Build and Manage Emails
      </h2>

      <p className="mx-auto mt-3 max-w-[860px] text-sm font-semibold leading-7 text-[#4B5B77] sm:text-base">
        A system where emails are created, automated, optimized and managed
        intelligently — powered by AI, workflows and real-time data.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {smarterEmailCards.slice(0, 4).map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="rounded-2xl border border-[#E0ECFA] bg-white p-5 shadow-[0_18px_42px_rgba(7,27,77,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#8CB9FF]/70 hover:shadow-[0_26px_58px_rgba(21,94,239,0.13)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#155EEF]">
                <Icon size={21} strokeWidth={2.3} />
              </div>

              <h3 className="text-[0.92rem] font-black leading-snug text-[#071B4D]">
                <span className="mr-1 text-[11px] font-black text-[#155EEF]">
                  {card.number}
                </span>
                {card.title}
              </h3>
            </div>

            <EmailSmartVisual type={card.visual} />

            <p className="mt-4 text-xs font-semibold leading-5 text-[#4B5B77]">
              {card.text}
            </p>
          </div>
        );
      })}
    </div>

    <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
      {smarterEmailCards.slice(4).map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="rounded-2xl border border-[#E0ECFA] bg-white p-5 shadow-[0_18px_42px_rgba(7,27,77,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#8CB9FF]/70 hover:shadow-[0_26px_58px_rgba(21,94,239,0.13)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#155EEF]">
                <Icon size={21} strokeWidth={2.3} />
              </div>

              <h3 className="text-[0.92rem] font-black leading-snug text-[#071B4D]">
                <span className="mr-1 text-[11px] font-black text-[#155EEF]">
                  {card.number}
                </span>
                {card.title}
              </h3>
            </div>

            <EmailSmartVisual type={card.visual} />

            <p className="mt-4 text-xs font-semibold leading-5 text-[#4B5B77]">
              {card.text}
            </p>
          </div>
        );
      })}
    </div>

    <div className="mt-10 overflow-hidden rounded-2xl border border-[#DCEBFA] bg-gradient-to-r from-[#EAF2FF] via-[#F4F8FF] to-[#DDEBFF] px-6 py-6 shadow-[0_18px_45px_rgba(21,94,239,0.08)]">
      <div className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">
        <div className="flex-1">
          <h3 className="text-[clamp(1.2rem,2vw,1.7rem)] font-black text-[#155EEF]">
            Email becomes a system that thinks, acts, and improves on its own.
          </h3>

          <p className="mt-2 text-sm font-semibold text-[#4B5B77] sm:text-base">
            This is not just email — this is a fully connected communication
            system.
          </p>
        </div>

        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-[#155EEF] shadow-[0_16px_34px_rgba(21,94,239,0.14)]">
          <Rocket size={42} strokeWidth={2.3} />
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
    <div className="absolute bottom-0 right-0 h-[260px] w-[520px] rounded-full bg-[#EEF5FF] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1380px]">
    <div className="text-center">
      <h2 className="text-[clamp(1.6rem,3vw,2.45rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
        The Engine Behind Modern Email Systems
      </h2>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
      {emailEngineCards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="group rounded-2xl border border-[#E0ECFA] bg-white px-5 py-7 text-center shadow-[0_18px_42px_rgba(7,27,77,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#8CB9FF]/70 hover:shadow-[0_26px_58px_rgba(21,94,239,0.13)]"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAF2FF] to-[#DDEBFF] text-[#155EEF] shadow-inner transition duration-300 group-hover:scale-105">
              <Icon size={34} strokeWidth={2.2} />
            </div>

            <div className="mb-4 text-xs font-black text-[#155EEF]">
              {card.number}
            </div>

            <h3 className="min-h-[46px] text-[0.92rem] font-black leading-snug text-[#071B4D]">
              {card.title}
            </h3>

            <p className="mt-4 text-xs font-semibold leading-5 text-[#4B5B77]">
              {card.text}
            </p>
          </div>
        );
      })}
    </div>

    <div className="mt-10 rounded-2xl border border-[#DCEBFA] bg-gradient-to-r from-[#EAF2FF] via-[#F4F8FF] to-[#DDEBFF] px-6 py-5 shadow-[0_18px_45px_rgba(21,94,239,0.08)]">
      <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
        <h3 className="text-[clamp(1.05rem,1.8vw,1.45rem)] font-black text-[#155EEF]">
          Email becomes an integrated layer inside your business systems — not a separate tool.
        </h3>

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/85 text-[#155EEF] shadow-[0_12px_28px_rgba(21,94,239,0.14)]">
          <ShieldCheck size={30} strokeWidth={2.3} />
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
