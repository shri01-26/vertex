import React from "react";
import {
  ArrowRight,
  BadgePercent,
  BarChart3,
  BellRing,
  Bot,
  Box,
  CalendarCheck,
  CalendarClock,
  CalendarDays,
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
  MessagesSquare,
  Network,
  RefreshCw,
  Send,
  ShieldCheck,
  ShoppingBag,
  Siren,
  Sparkles,
  Tag,
  Target,
  TrendingUp,
  Truck,
  UserCheck,
  UserRound,
  UserRoundPlus,
  UsersRound,
  Workflow,
  Zap,
} from "lucide-react";

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

const audience = [
  {
    name: "AK",
    position: "right-[8%] top-[18%]",
  },
  {
    name: "PM",
    position: "right-[14%] top-[48%]",
  },
  {
    name: "RS",
    position: "right-[7%] bottom-[15%]",
  },
];
const broadcastTouchpoints = [
  {
    icon: Box,
    title: "Product Updates & Announcements",
    text: "Launches, feature updates, stock alerts, new arrivals delivered instantly to large customer lists.",
  },
  {
    icon: Tag,
    title: "Offers, Discounts & Promotions",
    text: "Boost campaign performance by sending time-sensitive deals directly on WhatsApp.",
  },
  {
    icon: BellRing,
    title: "Alerts, Reminders & Notifications",
    text: "Payment reminders, delivery updates, appointment schedules and event reminders.",
  },
  {
    icon: UserRoundPlus,
    title: "Lead Nurturing & Re-Engagement",
    text: "Reconnect with inactive users, retarget leads and nurture prospects with follow-ups.",
  },
  {
    icon: MessagesSquare,
    title: "Customer Engagement & Community Building",
    text: "Send newsletters, curated content, brand messages and educational updates.",
  },
  {
    icon: Siren,
    title: "Critical or High-Priority Communication",
    text: "Broadcast urgent notices, policy changes, downtime alerts or operational updates.",
  },
];

const chooseBroadcast = [
  {
    icon: Eye,
    title: "Higher Visibility Than Email or SMS",
    text: "WhatsApp delivers industry-leading read rates, ensuring your message is seen.",
  },
  {
    icon: UserRound,
    title: "Personalised at Scale",
    text: "Send customised messages based on segments, tags, behaviours and purchase history.",
  },
  {
    icon: MessageCircle,
    title: "Two-Way Conversations",
    text: "Customers can reply, ask questions, or take action instantly.",
  },
  {
    icon: TrendingUp,
    title: "Faster Conversions Through WhatsApp CTA",
    text: "Lead users to chatbots, flows, catalogs or payment links.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Performance Insights",
    text: "Track deliveries, reads, replies and conversions instantly.",
  },
  {
    icon: Globe2,
    title: "Works Across Every Industry",
    text: "From retail to healthcare to government to travel — broadcasts scale effortlessly.",
  },
];
const broadcastTypes = [
  {
    icon: Megaphone,
    title: "Promotional Broadcasts",
    text: "Push offers, discounts, new arrivals, product drops, or seasonal campaigns.",
  },
  {
    icon: Info,
    title: "Informational Broadcasts",
    text: "Share updates, announcements, policy changes, or important news.",
  },
  {
    icon: BellRing,
    title: "Reminder & Follow-Up Broadcasts",
    text: "Send automated reminders for payments, appointments, renewals, abandoned carts, or pending actions.",
  },
  {
    icon: Truck,
    title: "Transactional & Service Updates",
    text: "Dispatch order updates, delivery notifications, ticket status, or service confirmations.",
  },
  {
    icon: Target,
    title: "Re-Engagement & Retargeting Broadcasts",
    text: "Reconnect with inactive users, bring back old customers, or remarket to leads who didn’t convert.",
  },
  {
    icon: CalendarCheck,
    title: "Event or Campaign Broadcasts",
    text: "Promote webinars, events, workshops, launches, or registration pushes.",
  },
];
const afterBroadcastSteps = [
  {
    icon: MessageCircle,
    title: "Customers Reply Instantly",
    text: "Customers reply directly on WhatsApp. Every reply becomes a real conversation.",
  },
  {
    icon: Bot,
    title: "Chatbot Takes Over Immediately",
    text: "Your chatbot answers questions and guides users to the next step instantly.",
  },
  {
    icon: Network,
    title: "Automated Journeys Start",
    text: "Identify intent and trigger workflows, assign teams, fetch data, start flows and more.",
  },
  {
    icon: Database,
    title: "Leads Sync to CRM Automatically",
    text: "All replies capture data and sync to CRM with source, tags and user intent.",
  },
  {
    icon: UserCheck,
    title: "Human Takeover When Needed",
    text: "Agents jump in with full context. No repetition, no confusion.",
  },
  {
    icon: RefreshCw,
    title: "Follow-Up Trigger Automatically",
    text: "Send reminders, offers, documents, payment links and updates automatically.",
  },
  {
    icon: BarChart3,
    title: "Performance Data Updates in Real Time",
    text: "Track deliveries, reads, replies, clicks, conversions and more instantly.",
  },
];

const broadcastStats = [
  {
    label: "Delivered",
    value: "98,765",
  },
  {
    label: "Read",
    value: "87,432",
  },
  {
    label: "Replies",
    value: "12,984",
  },
  {
    label: "Conversions",
    value: "4,256",
  },
];
const broadcastCapabilities = [
  {
    icon: UsersRound,
    title: "Advanced Audience Segmentation",
    text: "Target users based on behaviour, demographics, purchase history, activity, tags, or custom filters.",
  },
  {
    icon: MessageSquareText,
    title: "Meta-Approved Template Builder",
    text: "Create rich WhatsApp templates with text, images, buttons, lists and variables.",
  },
  {
    icon: Sparkles,
    title: "Dynamic Personalisation Fields",
    text: "Insert customer-specific data like name, order status, dates, or product recommendations.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled & Automated Campaigns",
    text: "Send instantly or schedule for the perfect time. Trigger follow-up broadcasts automatically.",
  },
  {
    icon: Gauge,
    title: "Smart Delivery Optimization",
    text: "Handles throttling, retries and delivery optimisation for smooth broadcasts at any scale.",
  },
  {
    icon: Inbox,
    title: "Unified Inbox for Replies",
    text: "All responses flow into one inbox. Chatbot handles queries and team takes over when needed.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboard",
    text: "Track performance with actionable metrics and audience insights to improve results.",
  },
  {
    icon: Workflow,
    title: "Seamless Workflow Integration",
    text: "Trigger WhatsApp Flows, CRM updates, payment links, catalog sharing and more.",
  },
];
export default function WhatsAppBroadcast() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <section className="relative px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[5%] top-12 h-[560px] w-[560px] rounded-full bg-[#EAFBF3] blur-3xl" />
          <div className="absolute right-[20%] top-28 h-[420px] w-[420px] rounded-full bg-[#EAF7FF] blur-3xl" />
          <div className="absolute left-0 top-20 h-[320px] w-[420px] rounded-full bg-[#F6FBFF] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#BDEFD0] bg-[#EAFBF1] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#0F9F5A] shadow-sm">
              <MessageCircle size={15} fill="currentColor" />
              WhatsApp Broadcast
            </div>

            <h1 className="max-w-[760px] text-[clamp(2.5rem,5.2vw,5.25rem)] font-black leading-[1.08] tracking-[-0.055em] text-[#071B4D]">
              Reach thousands of customers with one powerful{" "}
              <span className="text-[#12A85B]">WhatsApp broadcast</span>
            </h1>

            <p className="mt-7 max-w-[650px] text-base font-medium leading-8 text-[#2F3D5C] sm:text-lg">
              Create, schedule and send WhatsApp broadcasts with ease. Whether
              it’s promotions, reminders, or product updates, you can reach the
              right audience at the right moment automatically.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {chips.map((chip, index) => {
                const Icon = chip.icon;

                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#D7E8FF] bg-white px-4 py-3 text-xs font-extrabold text-[#071B4D] shadow-[0_10px_24px_rgba(7,27,77,0.06)]"
                  >
                    <Icon size={15} className="text-[#12A85B]" />
                    {chip.label}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#12A85B] px-7 py-4 text-sm font-black text-white shadow-[0_18px_34px_rgba(18,168,91,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#0F8F4E]">
                Start Free Trial
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl border border-[#12A85B] bg-white px-7 py-4 text-sm font-black text-[#071B4D] shadow-[0_14px_30px_rgba(7,27,77,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-[#F2FFF8]">
                <CalendarDays size={18} className="text-[#12A85B]" />
                Book a Demo
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative min-h-[540px] w-full">
            {/* Big Soft Circle */}
            <div className="absolute left-[7%] top-[8%] h-[420px] w-[420px] rounded-full bg-[#DFF7EE]/70" />
            <div className="absolute left-[18%] top-[18%] h-[300px] w-[300px] rounded-full border border-dashed border-[#12A85B]/35" />
            <div className="absolute right-[10%] top-[10%] h-[360px] w-[360px] rounded-full border border-dashed border-[#44BBFF]/25" />

            {/* Floating WhatsApp Icon */}
            <div className="absolute left-[8%] top-[30%] z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#12A85B] text-white shadow-[0_24px_55px_rgba(18,168,91,0.32)]">
              <MessageCircle size={46} fill="currentColor" />
            </div>

            {/* Decorative dots */}
            <div className="absolute left-[5%] top-[22%] h-2 w-2 rounded-full bg-[#12A85B]" />
            <div className="absolute right-[4%] top-[8%] h-2 w-2 rounded-full bg-[#44BBFF]" />
            <div className="absolute right-[18%] bottom-[20%] h-2 w-2 rounded-full bg-[#12A85B]" />
            <div className="absolute left-[18%] bottom-[18%] h-2 w-2 rounded-full bg-[#071B4D]" />

            {/* Audience circles */}
            {audience.map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.position} z-20 hidden sm:block`}
              >
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#EAF8FF] to-[#DFF7EE] text-xs font-black text-[#071B4D] shadow-[0_18px_36px_rgba(7,27,77,0.18)]">
                  {item.name}

                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#12A85B] text-white ring-4 ring-white">
                    <CheckCircle2 size={12} />
                  </span>
                </div>

                <div className="absolute left-1/2 top-full h-10 border-l border-dashed border-[#12A85B]/45" />
              </div>
            ))}

            {/* Phone */}
            <div className="absolute left-1/2 top-2 z-30 w-[320px] -translate-x-1/2 sm:w-[380px]">
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

            {/* Floating mini cards */}
            <div className="absolute bottom-[12%] left-[12%] hidden rounded-2xl border border-[#DCEBFA] bg-white/85 p-4 shadow-[0_18px_40px_rgba(7,27,77,0.12)] backdrop-blur-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAFBF1] text-[#12A85B]">
                  <UsersRound size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#071B4D]">
                    12k+ Sent
                  </h4>
                  <p className="text-xs font-semibold text-[#60708C]">
                    Campaign delivered
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-[20%] bottom-[5%] hidden rounded-2xl border border-[#DCEBFA] bg-white/85 p-4 shadow-[0_18px_40px_rgba(7,27,77,0.12)] backdrop-blur-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF7E6] text-[#F59E0B]">
                  <BadgePercent size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#071B4D]">
                    30% OFF
                  </h4>
                  <p className="text-xs font-semibold text-[#60708C]">
                    Offer broadcast
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[360px] w-[860px] -translate-x-1/2 rounded-full bg-[#F2FAFF] blur-3xl" />
    <div className="absolute bottom-0 left-0 h-[320px] w-[520px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1380px]">
    {/* TOP CARDS */}
    <h2 className="mx-auto max-w-[980px] text-center text-[clamp(1.5rem,2.6vw,2.2rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
      Power your communication across every touchpoint where speed and scale matter.
    </h2>

    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {broadcastTouchpoints.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="group rounded-2xl border border-[#DCEBFA] bg-white p-6 text-center shadow-[0_16px_38px_rgba(7,27,77,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#44BBFF]/60 hover:shadow-[0_24px_52px_rgba(3,143,223,0.13)]"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAF8FF] to-[#DFF3FF] text-[#038FDF] shadow-inner transition group-hover:scale-105">
              <Icon size={34} strokeWidth={2.2} />
            </div>

            <h3 className="text-[0.95rem] font-black leading-snug text-[#071B4D]">
              {index + 1}. {card.title}
            </h3>

            <p className="mt-5 text-sm font-medium leading-6 text-[#4B5B77]">
              {card.text}
            </p>
          </div>
        );
      })}
    </div>

    {/* DARK WHY SECTION */}
    <div className="mt-12 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#071B4D] via-[#062A63] to-[#073B74] p-7 text-white shadow-[0_28px_80px_rgba(7,27,77,0.28)] lg:p-9">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.6fr]">
        {/* LEFT TITLE */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-[clamp(2rem,3.6vw,3.3rem)] font-black leading-tight tracking-[-0.04em]">
              Why Businesses Choose{" "}
              <span className="block text-[#15C46B]">WhatsApp Broadcast</span>
            </h2>

            <p className="mt-7 max-w-[360px] text-sm font-medium leading-7 text-white/82">
              A smarter way to reach, engage and convert large audiences in real
              time.
            </p>
          </div>

          <div className="mt-10 hidden rounded-2xl border border-white/15 bg-white/8 p-4 backdrop-blur-md lg:block">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAFBF1] text-[#12A85B]">
                <MessageCircle size={36} fill="currentColor" />
              </div>

              <div>
                <h4 className="text-base font-black text-white">
                  Broadcasts that convert
                </h4>
                <p className="mt-1 text-xs font-semibold text-white/70">
                  Faster delivery, stronger reach and better engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-6">
          {chooseBroadcast.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative px-5 py-5 text-left md:min-h-[285px]"
              >
                {index !== 0 && (
                  <div className="absolute left-0 top-8 hidden h-[78%] w-px bg-white/15 lg:block" />
                )}

                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
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
                  }`}
                >
                  <Icon size={32} strokeWidth={2.2} />
                </div>

                <h3 className="text-sm font-black leading-snug text-white">
                  {index + 1}. {item.title}
                </h3>

                <p className="mt-4 text-xs font-medium leading-6 text-white/74">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-white/15 bg-white/8 px-5 py-5 backdrop-blur-md lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="hidden h-14 w-14 rounded-2xl bg-[#EAFBF1] sm:block" />

          <p className="text-sm font-bold leading-6 text-white">
            Broadcasts help businesses communicate faster, drive engagement
            consistently and convert users at scale.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex -space-x-3">
            {["A", "B", "C"].map((item, index) => (
              <div
                key={index}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#EAFBF1] text-xs font-black text-[#071B4D]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-full bg-[#15C46B] px-4 py-2 text-sm font-black text-[#071B4D]">
            10k+
          </div>

          <div>
            <h4 className="text-xl font-black text-[#15C46B]">10k+</h4>
            <p className="text-xs font-semibold text-white/70">
              Messages Delivered
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative bg-white px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[320px] w-[850px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
    <div className="absolute right-0 bottom-0 h-[260px] w-[420px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1380px] text-center">
    <h2 className="text-[clamp(1.6rem,3vw,2.45rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
      Types of Broadcasts You Can Send
    </h2>

    <p className="mt-3 text-base font-semibold text-[#2F3D5C]">
      Send the right message, to the right audience, at the right moment.
    </p>

    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
      {broadcastTypes.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="group rounded-[26px] border border-[#E5EEF8] bg-gradient-to-b from-white to-[#F8FBFF] px-5 py-8 text-center shadow-[0_18px_42px_rgba(7,27,77,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#44BBFF]/60 hover:shadow-[0_26px_55px_rgba(3,143,223,0.13)]"
          >
            <div
              className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-inner transition duration-300 group-hover:scale-105 ${
                index === 0
                  ? "bg-[#EAFBF1] text-[#12A85B]"
                  : index === 1
                  ? "bg-[#EAF2FF] text-[#155EEF]"
                  : index === 2
                  ? "bg-[#FFF7E6] text-[#F59E0B]"
                  : index === 3
                  ? "bg-[#EFEAFF] text-[#7C3AED]"
                  : index === 4
                  ? "bg-[#FFF0F5] text-[#E83E7C]"
                  : "bg-[#EAFBFF] text-[#0891B2]"
              }`}
            >
              <Icon size={36} strokeWidth={2.2} />
            </div>

            <h3 className="min-h-[52px] text-[0.95rem] font-black leading-snug text-[#071B4D]">
              {index + 1}. {card.title}
            </h3>

            <p className="mt-5 text-sm font-medium leading-6 text-[#4B5B77]">
              {card.text}
            </p>
          </div>
        );
      })}
    </div>

    <p className="mx-auto mt-9 max-w-[980px] text-sm font-bold leading-7 text-[#071B4D]">
      Every broadcast type can be personalised, automated and connected to
      chatbots, flows and WhatsApp Pay — turning messages into actions.
    </p>
  </div>
</section>
<section className="relative bg-white px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[340px] w-[850px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
    <div className="absolute bottom-0 left-0 h-[260px] w-[500px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1380px]">
    <div className="text-center">
      <h2 className="text-[clamp(1.6rem,3vw,2.45rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
        What Happens After Sending a Broadcast
      </h2>

      <p className="mt-3 text-base font-semibold text-[#2F3D5C]">
        WhatsApp Broadcast doesn’t end at delivery — it starts engagement.
      </p>
    </div>

    {/* STEPS */}
    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
      {afterBroadcastSteps.map((step, index) => {
        const Icon = step.icon;

        return (
          <div key={index} className="relative text-center">
            {/* Arrow */}
            {index < afterBroadcastSteps.length - 1 && (
              <div className="absolute left-[74%] top-10 z-10 hidden w-[54%] items-center lg:flex">
                <div className="h-px flex-1 border-t-2 border-dotted border-[#12A85B]/45" />
                <span className="-ml-1 text-xl font-black text-[#12A85B]">
                  ›
                </span>
              </div>
            )}

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#BDEFD0] bg-white shadow-[0_16px_38px_rgba(7,27,77,0.08)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EAFBF1] text-[#12A85B]">
                <Icon size={30} strokeWidth={2.3} />
              </div>
            </div>

            <h3 className="mt-5 min-h-[46px] text-[0.88rem] font-black leading-snug text-[#071B4D]">
              {index + 1}. {step.title}
            </h3>

            <p className="mx-auto mt-3 max-w-[170px] text-xs font-medium leading-6 text-[#4B5B77]">
              {step.text}
            </p>
          </div>
        );
      })}
    </div>

    {/* BOTTOM DARK STRIP */}
    <div className="mt-14 overflow-hidden rounded-[26px] bg-gradient-to-r from-[#071B4D] via-[#063B7A] to-[#075F86] p-6 text-white shadow-[0_28px_75px_rgba(7,27,77,0.25)] lg:p-8">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.75fr]">
        {/* Left Message */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#12A85B] text-white shadow-[0_18px_38px_rgba(18,168,91,0.35)]">
            <MessageCircle size={48} fill="currentColor" />
          </div>

          <p className="max-w-[760px] text-base font-bold leading-8 text-white sm:text-lg">
            A broadcast isn’t a one-way message — it’s the start of an{" "}
            <span className="text-[#15C46B]">automated, personalised</span>{" "}
            WhatsApp journey.
          </p>
        </div>

        {/* Right Stats */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-end">
          <div className="hidden h-24 w-32 items-center justify-center lg:flex">
            <svg viewBox="0 0 170 95" className="h-full w-full">
              <path
                d="M8 78L36 54L62 65L92 34L116 45L152 14"
                fill="none"
                stroke="#15C46B"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M132 13H154V35"
                fill="none"
                stroke="#15C46B"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-2 overflow-hidden rounded-xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:grid-cols-4">
            {broadcastStats.map((item, index) => (
              <div
                key={index}
                className="min-w-[115px] border-b border-[#E6EEF8] px-5 py-4 text-center sm:border-b-0 sm:border-r last:border-r-0"
              >
                <p className="text-xs font-black text-[#6B7890]">
                  {item.label}
                </p>

                <h4 className="mt-1 text-xl font-black text-[#071B4D]">
                  {item.value}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="relative bg-white px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute left-1/2 top-0 h-[340px] w-[880px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
    <div className="absolute bottom-0 left-0 h-[280px] w-[520px] rounded-full bg-[#EAFBF1] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-[1320px]">
    <div className="text-center">
      <h2 className="text-[clamp(1.6rem,3vw,2.45rem)] font-black leading-tight tracking-[-0.03em] text-[#071B4D]">
        Powerful Capabilities That Elevate Every Broadcast
      </h2>

      <p className="mt-3 text-base font-semibold text-[#2F3D5C]">
        Everything you need to create, personalise, automate and analyse
        WhatsApp campaigns at scale.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {broadcastCapabilities.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="group rounded-[22px] border border-[#E5EEF8] bg-gradient-to-b from-white to-[#F8FBFF] p-7 shadow-[0_18px_42px_rgba(7,27,77,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#44BBFF]/60 hover:shadow-[0_26px_55px_rgba(3,143,223,0.13)]"
          >
            <div className="flex items-start gap-5">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105 ${
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
                <Icon size={30} strokeWidth={2.2} />
              </div>

              <div>
                <h3 className="text-[0.98rem] font-black leading-snug text-[#071B4D]">
                  {index + 1}. {card.title}
                </h3>

                <p className="mt-5 text-sm font-medium leading-6 text-[#4B5B77]">
                  {card.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
    </main>
  );
}
