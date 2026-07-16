import Link from "../../../components/AppLink";
import { FaWhatsapp } from "react-icons/fa";
import {
  Mail,
  MessageSquareText,
  CheckCircle,
  BadgeCheck,
  CalendarDays,
  Headphones,
  MousePointerClick,
} from "lucide-react";

export default function WhatsAppBusinessApi() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#1F2937]">
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative flex min-h-screen items-center bg-white px-4 py-16 sm:px-6 lg:px-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="mb-5 text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[1.08] tracking-tight text-[#111827]">
              Reach More Customers. <br />
              Automate Every <br />
              Conversation on{" "}
              <span className="text-[#16A34A]">WhatsApp</span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-[1rem] leading-[1.7] text-[#64748B] lg:mx-0">
              Connect instantly with billions of users through WhatsApp Business
              API powered by Vertex Suite. Automate conversations, send alerts,
              deliver notifications and build meaningful customer relationships
              at scale.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-3 rounded-md bg-[#16A34A] px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#15803D] hover:shadow-lg"
              >
                Get Started
                <span>→</span>
              </Link>

              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center rounded-md border border-[#CBD5E1] bg-white px-8 py-3 text-sm font-semibold text-[#111827] transition-all duration-300 hover:-translate-y-1 hover:border-[#16A34A] hover:text-[#16A34A] hover:shadow-md"
              >
                Request Demo
              </Link>
            </div>
          </div>

          {/* Right Visual Placeholder */}
          <div className="relative flex min-h-[520px] items-center justify-center lg:justify-end">
            {/* Phone Mockup Placeholder */}
            <div className="relative z-10 flex h-[520px] w-[270px] items-center justify-center rounded-[42px] border-[10px] border-[#111827] bg-[#F8FAFC] shadow-[0_25px_70px_rgba(15,23,42,0.18)]">
              <div className="flex h-full w-full items-center justify-center rounded-[30px] border border-[#E2E8F0] bg-white px-5 text-center text-sm font-medium text-[#94A3B8]">
                Add WhatsApp Mobile Image Here
              </div>
            </div>

            {/* Floating Feature Pills */}
            <div className="absolute right-2 top-[110px] z-20 hidden w-[230px] flex-col gap-3 sm:flex lg:right-0">
              <div className="flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                <BadgeCheck size={18} className="text-[#0EA5E9]" />
                <span className="text-sm font-semibold text-[#334155]">
                  Verified Business
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-md bg-[#ECFDF5] px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
                <MousePointerClick size={18} className="text-[#16A34A]" />
                <span className="text-sm font-semibold text-[#334155]">
                  Quick Action Buttons
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                <CalendarDays size={18} className="text-[#2563EB]" />
                <span className="text-sm font-semibold text-[#334155]">
                  Instant Appointment Booking
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-md bg-[#F0FDF4] px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
                <Headphones size={18} className="text-[#16A34A]" />
                <span className="text-sm font-semibold text-[#334155]">
                  Agent Handoff
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: COMPARISON ================= */}
      <section className="relative flex min-h-screen items-center bg-gradient-to-b from-[#F8FBFF] to-[#EEF6FF] px-4 py-16 sm:px-6 lg:px-20">
        <div className="mx-auto w-full max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-6 text-[clamp(2rem,4vw,3.6rem)] font-extrabold leading-[1.12] tracking-tight text-[#1F2937]">
              Customers Don’t Want to Wait. <br />
              They Expect Instant Conversations.
            </h2>

            <p className="mx-auto max-w-3xl text-[1rem] italic leading-[1.7] text-[#64748B]">
              Customers today expect fast, personal, and two-way communication.
              While email and SMS still serve basic updates, WhatsApp helps
              businesses create richer, faster and more engaging customer
              conversations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Email */}
            <div className="rounded-xl border border-[#F3C7C7] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFF1F2] text-[#EF4444]">
                  <Mail size={22} />
                </div>

                <h3 className="mb-1 text-lg font-extrabold text-[#111827]">
                  Email
                </h3>

                <p className="text-sm text-[#64748B]">
                  The formal but delayed channel.
                </p>
              </div>

              <ul className="space-y-3 text-sm text-[#64748B]">
                <li className="flex gap-2">
                  <span className="text-[#EF4444]">⊗</span>
                  Slow response cycles
                </li>
                <li className="flex gap-2">
                  <span className="text-[#EF4444]">⊗</span>
                  Lower real-time engagement
                </li>
                <li className="flex gap-2">
                  <span className="text-[#EF4444]">⊗</span>
                  Often missed in crowded inboxes
                </li>
                <li className="flex gap-2">
                  <span className="text-[#EF4444]">⊗</span>
                  Better for long-form communication
                </li>
              </ul>
            </div>

            {/* SMS */}
            <div className="rounded-xl border border-[#BFDBFE] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#2563EB]">
                  <MessageSquareText size={22} />
                </div>

                <h3 className="mb-1 text-lg font-extrabold text-[#111827]">
                  SMS
                </h3>

                <p className="text-sm text-[#64748B]">
                  The limited text-only option.
                </p>
              </div>

              <ul className="space-y-3 text-sm text-[#64748B]">
                <li className="flex gap-2">
                  <span className="text-[#2563EB]">○</span>
                  Basic text communication
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2563EB]">○</span>
                  No rich media experience
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2563EB]">○</span>
                  Limited interaction options
                </li>
                <li className="flex gap-2">
                  <span className="text-[#2563EB]">○</span>
                  No branded business profile
                </li>
              </ul>
            </div>

            {/* WhatsApp Business API */}
            <div className="rounded-xl border-2 border-[#22C55E] bg-white p-6 shadow-[0_18px_45px_rgba(34,197,94,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
                  <FaWhatsapp size={26} />
                </div>

                <h3 className="mb-1 text-lg font-extrabold text-[#111827]">
                  WhatsApp Business API
                </h3>

                <p className="text-sm text-[#64748B]">
                  The conversational engagement channel.
                </p>
              </div>

              <ul className="space-y-3 text-sm text-[#475569]">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />
                  Real-time customer conversations
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />
                  Rich media, buttons, and menus
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />
                  Verified business profile
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />
                  3B+ monthly users worldwide
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#16A34A]" />
                  High open-rate potential
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-8 rounded-lg border border-[#D7EAFE] bg-white px-5 py-4 text-center shadow-sm">
            <p className="m-0 text-sm font-bold italic text-[#0B72D9] sm:text-base">
              “That’s why modern businesses are moving from one-way updates to
              real-time conversational engagement.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
