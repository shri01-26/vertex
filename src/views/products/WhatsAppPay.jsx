import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ShieldCheck,
  ReceiptText,
  CreditCard,
  LockKeyhole,
  CheckCircle2,
  TrendingUp,
  MessageSquareText,
  WalletCards,
  BellRing,
  Link2,
  FileText,
  Puzzle,
  SendHorizontal,
  IndianRupee,
  PackageCheck,
  Droplets,
  UsersRound,
  CalendarCheck,
  Settings2,
  BarChart3,
  LayoutDashboard,
  ShoppingCart,
  User,
  Zap,
  Sparkles,
  Rocket,
} from "lucide-react";

const featureCards = [
  {
    icon: ShieldCheck,
    title: "Secure",
    text: "Payments",
  },
  {
    icon: ReceiptText,
    title: "Instant",
    text: "Receipts",
  },
  {
    icon: CreditCard,
    title: "UPI · Cards",
    text: "Wallets",
  },
  {
    icon: LockKeyhole,
    title: "End-to-End",

    text: "Encrypted",
  },
];
const payPlatformCards = [
  {
    icon: MessageSquareText,
    title: "In-Chat Checkout",
    text: "Customers pay without leaving WhatsApp.",
  },
  {
    icon: WalletCards,
    title: "Multiple Payment Options",
    text: "UPI, cards, net banking, wallets.",
  },
  {
    icon: BellRing,
    title: "Automated Reminders",
    text: "Reduce late payments with scheduled follow-ups.",
  },
  {
    icon: Link2,
    title: "One-Tap Pay Links",
    text: "Share secure, single-click payment links in chat.",
  },
  {
    icon: FileText,
    title: "Instant Invoice & Receipt",
    text: "Send proof of payment automatically.",
  },
  {
    icon: Puzzle,
    title: "Seamless Integration",
    text: "Works with catalogs, orders and drip campaigns.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    text: "Fully encrypted, compliant and safe.",
  },
  {
    icon: TrendingUp,
    title: "Boosted Conversions",
    text: "Minimize drop-offs with effortless checkout.",
  },
];
const whyUseCards = [
  {
    icon: ShoppingCart,
    title: "Convenience",
    text: "Customers can complete transactions within their chat window, eliminating the need to switch platforms.",
  },
  {
    icon: LockKeyhole,
    title: "Security",
    text: "Powered by WhatsApp's encryption, ensuring every transaction is safe.",
  },
  {
    icon: User,
    title: "Efficiency",
    text: "Reduce payment friction and boost conversion rates by streamlining the payment process.",
  },
];
const payWorkSteps = [
  {
    number: "1",
    title: "Business Sends a Payment Request",
    text: "You share a WhatsApp Pay link in the form of a pay button or a structured product selector.",
    type: "invoice",
  },
  {
    number: "2",
    title: "Customer Confirms the Amount",
    text: "The customer taps the secure message to review the payable amount and verify order details.",
    type: "review",
  },
  {
    number: "3",
    title: "Customer Completes the Payment",
    text: "Payment is made instantly via UPI, card, net banking, or wallet through a trusted interface.",
    type: "method",
  },
  {
    number: "4",
    title: "Instant Confirmation in Chat",
    text: "Both the business and customer receive real-time confirmation with an invoice or receipt.",
    type: "success",
  },
  {
    number: "5",
    title: "Order Moves Forward Automatically",
    text: "Your system updates automatically, triggering shipping, service activation, or booking confirmation.",
    type: "order",
  },
];

const publicPaymentItems = [
  {
    icon: Droplets,
    label: "Utility Bills",
  },
  {
    icon: UsersRound,
    label: "Public Services",
  },
  {
    icon: ReceiptText,
    label: "License Fees",
  },
  {
    icon: ShieldCheck,
    label: "Taxes",
  },
  {
    icon: CalendarCheck,
    label: "Booking Charges",
  },
  {
    icon: ReceiptText,
    label: "Citizen Receipts",
  },
];
const dashboardJourneyItems = [
  {
    icon: SendHorizontal,
    title: "Plan & Send Pay Requests",
    text: "Create and personalize payment requests in seconds and send via WhatsApp.",
  },
  {
    icon: BarChart3,
    title: "Track Collections in Real Time",
    text: "Monitor payments, success rates and pending amounts as they happen.",
  },
  {
    icon: BellRing,
    title: "Automate Reminders & Follow-Ups",
    text: "Schedule smart reminders and reduce delays with automated follow-ups.",
  },
  {
    icon: ShieldCheck,
    title: "Verify Transactions Instantly",
    text: "Confirm payments, validate status and prevent manual reconciliation.",
  },
  {
    icon: Settings2,
    title: "Sync Orders, Billing & CRM Workflows",
    text: "Seamlessly connect payments with orders, invoices, CRM and backend systems.",
  },
];

const recentTransactions = [
  {
    date: "May 23, 2024",
    customer: "Rahul Kumar",
    amount: "₹2,150",
    status: "Successful",
  },
  {
    date: "May 21, 2024",
    customer: "GreenMart Store",
    amount: "₹1,820",
    status: "Successful",
  },
  {
    date: "May 18, 2024",
    customer: "Aarav Retail",
    amount: "₹1,190",
    status: "Pending",
  },
  {
    date: "May 15, 2024",
    customer: "Nexon Traders",
    amount: "₹7,300",
    status: "Successful",
  },
];

const EASE = [0.22, 1, 0.36, 1];
const fadeUp = (delay, y = 16, duration = 0.6) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration, ease: EASE, delay },
});
const fadeX = (delay, x = 24, duration = 0.6) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration, ease: EASE, delay },
});
const fadeIn = (delay, duration = 0.6) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration, ease: EASE, delay },
});

const payLoopTransition = (delay) => ({
  duration: 0.6,
  delay,
  ease: EASE,
  repeat: Infinity,
  repeatDelay: 2.2,
});

function PayImageCycle() {
  return (
    <div className="relative mx-auto w-full max-w-[780px] overflow-visible">
      <div className="relative aspect-square w-full overflow-visible">
        {/* DECORATIVE DOTS */}
        <div
          className="pointer-events-none absolute left-[7%] top-[22%] z-[1] h-[9%] w-[9%] opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, #66B2E2 1.3px, transparent 1.5px)",
            backgroundSize: "9px 9px",
          }}
        />

        {/* 1. PHONE — py1, CENTER-RIGHT, STATIC */}
        <img
          src="/assets/images/py1.png"
          alt="WhatsApp payment phone"
          className="
            absolute
            right-[4%]
            top-[8%]
            z-10
            h-[62%]
            w-auto
            max-w-none
            object-contain
          "
        />

        {/* 3. PAYMENT METHODS — py3, POPS UP AFTER MAN, BOTH FADE OUT TOGETHER */}
        <motion.img
          src="/assets/images/py3.png"
          alt="Choose payment method"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: [0, 0, 1, 1, 0],
            scale: [0.85, 0.85, 1, 1, 0.85],
          }}
          transition={{
            duration: 6,
            times: [0, 0.3, 0.42, 0.8, 1],
            ease: EASE,
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className="
            absolute
            right-[-56%]
            top-[2%]
            z-[45]
            w-[86%]
            max-w-none
            object-contain
            drop-shadow-[0_15px_25px_rgba(31,78,110,0.16)]
          "
        />

        {/* 4. MAN — py2, POPS UP FIRST, BOTH FADE OUT TOGETHER */}
        <motion.img
          src="/assets/images/py2.png"
          alt="Person using WhatsApp Pay"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{
            opacity: [0, 1, 1, 1, 0],
            y: [30, 0, 0, 0, 30],
            scale: [0.9, 1, 1, 1, 0.9],
          }}
          transition={{
            duration: 6,
            times: [0, 0.1, 0.4, 0.8, 1],
            ease: EASE,
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className="
            absolute
            bottom-[-42%]
            left-[-10%]
            z-[40]
            w-[46%]
            max-w-none
            object-contain
          "
        />

        {/* DECORATIVE SECURITY ICONS */}
        <ShieldCheck
          className="
            pointer-events-none
            absolute
            bottom-[9%]
            left-[7%]
            z-[2]
            h-[8%]
            w-[8%]
            text-[#5BAEE0]/20
          "
          strokeWidth={1.5}
        />

        <LockKeyhole
          className="
            pointer-events-none
            absolute
            bottom-[19%]
            left-[15%]
            z-[2]
            h-[6%]
            w-[6%]
            text-[#5BAEE0]/15
          "
          strokeWidth={1.5}
        />
      </div>
    </div>
  );
}

function AnimatedStatValue({ values, className, interval = 2600 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % values.length);
    }, interval);
    return () => clearInterval(id);
  }, [values.length, interval]);

  return (
    <span className={`relative inline-grid ${className || ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="col-start-1 row-start-1"
        >
          {values[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function WhatsAppPay() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;750;800&family=Inter:wght@400;500;600;700&display=swap");

        .wap-h1 {
          font-family: "Manrope", "Inter", sans-serif;
          font-weight: 800;
          font-size: clamp(2.25rem, 4.2vw, 3rem);
        }
        .wap-h2 {
          font-family: "Manrope", "Inter", sans-serif;
          font-weight: 750;
          font-size: clamp(2rem, 3.2vw, 2.5rem);
        }
        .wap-h3 {
          font-family: "Manrope", "Inter", sans-serif;
          font-weight: 700;
          font-size: clamp(1.625rem, 2.4vw, 2.0625rem);
        }
        .wap-h4 {
          font-family: "Manrope", "Inter", sans-serif;
          font-weight: 700;
          font-size: clamp(1.375rem, 1.9vw, 1.75rem);
        }
        .wap-h5 {
          font-family: "Manrope", "Inter", sans-serif;
          font-weight: 700;
          font-size: 1.4375rem;
        }
        .wap-h6 {
          font-family: "Manrope", "Inter", sans-serif;
          font-weight: 700;
          font-size: 1.1875rem;
        }
        .wap-body {
          font-family: "Manrope", "Inter", sans-serif;
          font-size: 1rem;
        }

        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes typeWriter {
          0% { width: 0; }
          100% { width: 100%; }
        }

        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .type-wrapper {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          vertical-align: bottom;
          width: 0;
          animation: typeWriter 4.5s steps(12) 0.8s forwards;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-delay: 3s;
        }

        .cursor {
          display: inline-block;
          width: 3px;
          height: 0.8em;
          background: #169B55;
          margin-left: 2px;
          vertical-align: middle;
          animation: blinkCursor 1.1s step-end infinite;
          border-radius: 2px;
        }
      `}</style>
      <section className="relative px-5 py-20 sm:px-8 lg:px-12 xl:px-16">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-10 h-[460px] w-[460px] rounded-full bg-[#E8F8EF] blur-3xl" />
          <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#EAF5FF] blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-[260px] w-[520px] -translate-x-1/2 rounded-full bg-[#F4FBFF] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT CONTENT */}
          
{/* LEFT CONTENT - IMPROVED TYPING */}
<div className="relative z-10">
  {/* BADGE */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: EASE }}
    className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EAFBF1] px-4 py-2 text-sm font-semibold text-[#138A43] ring-1 ring-[#BDEFD0]"
  >
    <motion.span
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      <Sparkles size={16} className="text-[#16A34A]" />
    </motion.span>
    <span>Deliver a smooth, uninterrupted payment flow using WhatsApp Pay.</span>
  </motion.div>

  {/* HEADING */}
  <div className="wap-h1 max-w-[650px] leading-[1.08] tracking-[-0.04em] text-[#071B4D]">
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
      className="inline-block"
    >
      Deliver a Trusted Payment Experience with{" "}
    </motion.span>
    
    <span className="text-[#169B55] font-extrabold inline-block relative">
      {/* Typing text - smooth typing */}
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 1.8,
          delay: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 3
        }}
        className="inline-block overflow-hidden whitespace-nowrap align-bottom"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 3
          }}
          className="inline-block"
        >
          WhatsApp Pay
        </motion.span>
      </motion.span>
      
      {/* Cursor */}
      <motion.span
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="inline-block w-[3px] h-[0.8em] bg-[#169B55] ml-1 align-middle rounded-full"
      />
    </span>
  </div>

  {/* DESCRIPTION */}
  <motion.p
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
    className="wap-body mt-6 max-w-[620px] font-medium leading-8 text-[#4B5B77]"
  >
    Enable in-chat payments your customers already trust. With
    WhatsApp Pay, buyers can complete checkout via UPI, cards, or
    wallets without leaving the conversation — reducing drop-offs and
    boosting conversions.
  </motion.p>

  {/* BUTTONS */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
    className="mt-9 flex flex-col gap-[18px] min-[769px]:flex-row min-[769px]:items-center"
  >
    <button className="roll-btn inline-flex h-[60px] min-w-[250px] items-center justify-center overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br from-[#18c765] to-[#08a84f] px-10 text-[15px] font-extrabold text-white transition-colors duration-200 hover:text-[#071b3a]">
      <span className="roll-content">
        <span className="roll-content-main">
          <Rocket size={18} />
          <span>Start Free Trial</span>
          <ArrowRight size={18} />
        </span>
        <span className="roll-content-hover">
          <Rocket size={18} />
          <span>Start Free Trial</span>
          <ArrowRight size={18} />
        </span>
      </span>
    </button>

    <button className="roll-btn inline-flex h-[60px] min-w-[250px] items-center justify-center overflow-hidden rounded-2xl border border-[#dbe4ec] bg-white px-10 text-[15px] font-extrabold text-[#071b3a] transition-colors duration-200 hover:border-[#18c765] hover:bg-[#e8f9f0] hover:text-[#08a84f]">
      <span className="roll-content">
        <span className="roll-content-main">
          <CalendarDays size={18} />
          <span>Book a Demo</span>
        </span>
        <span className="roll-content-hover">
          <CalendarDays size={18} />
          <span>Book a Demo</span>
        </span>
      </span>
    </button>
  </motion.div>

  {/* FEATURE CARDS */}
  <div className="mt-[42px] grid w-full max-w-[680px] grid-cols-2 gap-3.5 max-md:gap-2 max-sm:grid-cols-1">
    {featureCards.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          className="flex min-h-[78px] items-center gap-3.5 rounded-2xl border border-[#eef2f6] bg-white px-4 py-4 shadow-[0_6px_18px_rgba(7,27,58,0.05)]"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e7f6ed] text-[#0a9d57]">
            <Icon size={20} strokeWidth={2.2} />
          </span>

          <span className="min-w-0">
            <span className="block text-[1.15rem] font-extrabold leading-none text-[#0a9d57]">
              {item.title}
            </span>
            <span className="mt-1 block text-[0.85rem] font-medium leading-tight text-[#5B667A]">
              {item.text}
            </span>
          </span>
        </div>
      );
    })}
  </div>
</div>

          {/* RIGHT VISUAL */}
          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.2 }}
            className="relative flex w-full items-center justify-center"
          >
            <div className="relative inline-block w-full max-w-[920px] leading-[0]">
              {/* Laptop image */}
              <img
                src="/assets/images/payment1.png"
                alt="WhatsApp Pay dashboard laptop mockup"
                className="relative z-10 block w-full"
              />

              {/* DASHBOARD - EXACT MATCH */}
              <div
                className="absolute z-30 overflow-hidden"
                style={{
                  left: "10.8%",
                  top: "25.75%",
                  width: "69.1%",
                  height: "36.05%",
                  containerType: "inline-size",
                  containerName: "dashscreen",
                }}
              >
                <div
                  className="grid h-full w-full grid-cols-[14%_1fr] bg-white"
                  style={{ fontSize: "2.2cqw" }}
                >
                  {/* SIDEBAR */}
                  <div className="flex h-full flex-col items-center justify-between gap-[9%] bg-[#0B1D3A] pt-[8%] pb-[16%]">
                    <div className="text-[1.4em] font-black text-[#44BBFF]">
                      V
                    </div>

                    {[
                      { label: "Overview", icon: LayoutDashboard },
                      { label: "Payments", icon: WalletCards },
                      { label: "Refunds", icon: ReceiptText },
                      { label: "Settlements", icon: CreditCard },
                      { label: "Customers", icon: UsersRound },
                      { label: "Reports", icon: BarChart3 },
                      { label: "Settings", icon: Settings2 },
                    ].map(({ label, icon: Icon }, index) => (
                      <div
                        key={label}
                        className={`relative flex aspect-square w-[40%] cursor-pointer items-center justify-center rounded-[3px] ${
                          index === 1
                            ? "bg-[#155EEF] text-white"
                            : "text-white/40 hover:text-white/70"
                        }`}
                      >
                        <Icon size="0.7em" strokeWidth={2} />
                      </div>
                    ))}
                  </div>

                  {/* CONTENT */}
                  <div className="flex h-full min-w-0 min-h-0 flex-col bg-white p-[2.5%]">
                    {/* HEADER */}
                    <div className="mb-[1.5%] flex items-center justify-between">
                      <div>
                        <h3 className="text-[0.9em] font-extrabold leading-tight text-[#071B4D]">
                          Vertex Suite
                        </h3>
                        <p className="text-[0.5em] font-semibold text-[#7B8AA5]">
                          Payments Overview
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[0.35em] font-medium text-[#7B8AA5]">
                          Last Updated: 20 Days Ago
                        </span>
                        <span className="text-[0.35em] font-bold text-[#155EEF] bg-[#155EEF]/10 px-1.5 py-0.5 rounded">
                          Daily
                        </span>
                      </div>
                    </div>

                    {/* STATS CARDS - 4 COLUMN WITH CHART */}
                    <div className="grid grid-cols-4 gap-[1%] mb-[1.5%]">
                      {[
                        {
                          label: "TOTAL PAYMENTS",
                          values: [
                            "₹2,45,33,890",
                            "₹2,45,41,220",
                            "₹2,45,58,760",
                            "₹2,45,33,890",
                          ],
                          changes: ["+18.8%", "+18.9%", "+19.1%", "+18.8%"],
                        },
                        {
                          label: "SUCCESS RATE",
                          values: ["98.47%", "98.51%", "98.44%", "98.47%"],
                          changes: ["+2.35%", "+2.38%", "+2.31%", "+2.35%"],
                        },
                        {
                          label: "AVERAGE TRANSACTION",
                          values: [
                            "₹6,783.20",
                            "₹6,791.05",
                            "₹6,769.40",
                            "₹6,783.20",
                          ],
                          changes: ["-3.47%", "-3.42%", "-3.51%", "-3.47%"],
                        },
                        {
                          label: "REFUNDS",
                          values: [
                            "₹3,92,210",
                            "₹3,91,860",
                            "₹3,92,540",
                            "₹3,92,210",
                          ],
                          changes: ["-6.21%", "-6.18%", "-6.25%", "-6.21%"],
                        },
                      ].map((stat, i) => {
                        const up = stat.changes[0].startsWith("+");
                        return (
                          <div
                            key={stat.label}
                            className="min-w-0 rounded-[3px] border border-[#E8EEF6] bg-white px-[1.2%] py-[2%]"
                          >
                            <p className="truncate text-[0.022em] font-bold tracking-normal text-[#7B8AA5]">
                              {stat.label}
                            </p>
                            <h4 className="mt-[1%] w-full truncate text-[0.04em] font-black leading-tight text-[#071B4D]">
                              <AnimatedStatValue
                                values={stat.values}
                                interval={2600 + i * 300}
                              />
                            </h4>
                            <span
                              className={`text-[0.022em] font-bold ${up ? "text-[#16A34A]" : "text-[#EF4444]"}`}
                            >
                              <AnimatedStatValue
                                values={stat.changes}
                                interval={2600 + i * 300}
                              />
                            </span>
                            <div className="mt-[2%] h-[2px] w-full bg-[#E8EEF6] rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full ${up ? "bg-[#16A34A]" : "bg-[#EF4444]"}`}
                                animate={{
                                  width: stat.changes.map(
                                    (c) =>
                                      Math.min(
                                        Math.abs(parseFloat(c)) * 2,
                                        100,
                                      ) + "%",
                                  ),
                                }}
                                transition={{
                                  duration:
                                    ((2600 + i * 300) * stat.changes.length) /
                                    1000,
                                  repeat: Infinity,
                                  ease: EASE,
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* CHART SECTION - LINE GRAPH */}
                    <div className="flex flex-1 min-h-0 flex-col border border-[#E8EEF6] rounded-[3px] p-[1.5%] bg-white">
                      <div className="flex items-center justify-between mb-[1%]">
                        <h4 className="text-[0.55em] font-extrabold text-[#071B4D]">
                          Collection Trend
                        </h4>
                        <span className="text-[0.3em] font-medium text-[#7B8AA5]">
                          Last 20 Days
                        </span>
                      </div>

                      {/* CHART WITH Y-AXIS */}
                      <div className="flex flex-1 min-h-0 w-full relative">
                        {/* Y-AXIS LABELS */}
                        <div className="flex flex-col justify-between pr-[2%] text-[0.3em] font-bold text-[#7B8AA5]">
                          <span>100%</span>
                          <span>75%</span>
                          <span>50%</span>
                          <span>25%</span>
                          <span>0%</span>
                        </div>

                        {/* LINE GRAPH SVG */}
                        <div className="flex-1 min-h-0 min-w-0 relative">
                          <svg
                            className="w-full h-full"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                          >
                            {/* Grid lines */}
                            {[20, 40, 60, 80].map((y) => (
                              <line
                                key={y}
                                x1="0"
                                y1={y}
                                x2="100"
                                y2={y}
                                stroke="#E8EEF6"
                                strokeWidth="0.5"
                                strokeDasharray="2,2"
                              />
                            ))}

                            {/* Area under line */}
                            <motion.path
                              d="M0,85 L5,65 L10,82 L15,55 L20,90 L25,70 L30,85 L35,60 L40,95 L45,75 L50,80 L55,65 L60,88 L65,72 L70,92 L75,58 L80,78 L85,45 L90,82 L95,68 L100,50 L100,100 L0,100 Z"
                              fill="url(#areaGradient)"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 0.2, 0.2, 0] }}
                              transition={{
                                duration: 4.5,
                                times: [0, 0.35, 0.9, 1],
                                repeat: Infinity,
                                repeatDelay: 0.4,
                                ease: "easeInOut",
                              }}
                            />

                            {/* Main line */}
                            <motion.path
                              d="M0,85 L5,65 L10,82 L15,55 L20,90 L25,70 L30,85 L35,60 L40,95 L45,75 L50,80 L55,65 L60,88 L65,72 L70,92 L75,58 L80,78 L85,45 L90,82 L95,68 L100,50"
                              fill="none"
                              stroke="#155EEF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0, opacity: 1 }}
                              animate={{
                                pathLength: [0, 1, 1, 0],
                                opacity: [1, 1, 1, 0],
                              }}
                              transition={{
                                duration: 4.5,
                                times: [0, 0.35, 0.9, 1],
                                repeat: Infinity,
                                repeatDelay: 0.4,
                                ease: "easeInOut",
                              }}
                            />

                            {/* Dots */}
                            {[
                              0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60,
                              65, 70, 75, 80, 85, 90, 95, 100,
                            ].map((x, idx) => {
                              const heights = [
                                85, 65, 82, 55, 90, 70, 85, 60, 95, 75, 80, 65,
                                88, 72, 92, 58, 78, 45, 82, 68, 50,
                              ];
                              const y = heights[idx] || 50;
                              const delayFrac = idx / 20;
                              return (
                                <motion.circle
                                  key={idx}
                                  cx={x}
                                  cy={y}
                                  r="1.5"
                                  fill="#155EEF"
                                  stroke="#fff"
                                  strokeWidth="0.5"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: [0, 1, 1, 0] }}
                                  transition={{
                                    duration: 4.5,
                                    times: [
                                      Math.min(0.02 + delayFrac * 0.3, 0.32),
                                      Math.min(0.08 + delayFrac * 0.3, 0.38),
                                      0.9,
                                      1,
                                    ],
                                    repeat: Infinity,
                                    repeatDelay: 0.4,
                                    ease: "easeInOut",
                                  }}
                                />
                              );
                            })}

                            <defs>
                              <linearGradient
                                id="areaGradient"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#155EEF"
                                  stopOpacity="0.3"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#155EEF"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      {/* X-AXIS LABELS */}
                      <div className="flex justify-between mt-[0.5%] px-[4%] text-[0.25em] font-bold text-[#7B8AA5]">
                        <span>Apr 22</span>
                        <span>Apr 29</span>
                        <span>May 6</span>
                        <span>May 13</span>
                        <span>May 20</span>
                        <span>May 22</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone mockup - bottom right of laptop */}
              <motion.img
                src="/assets/images/payment2.png"
                alt="WhatsApp Pay chat payment confirmation"
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                animate={{ opacity: 1, y: [30, 0, -6, 0], scale: 1 }}
                transition={{
                  opacity: { duration: 0.7, ease: EASE, delay: 0.6 },
                  scale: { duration: 0.7, ease: EASE, delay: 0.6 },
                  y: {
                    duration: 4,
                    ease: "easeInOut",
                    delay: 1.3,
                    repeat: Infinity,
                    repeatType: "loop",
                  },
                }}
                className="absolute z-40 h-full w-full object-contain"
                style={{ right: "-43%", bottom: "-8%" }}
              />

              {/* Security badge - bottom left of laptop */}
              <div
                className="absolute z-40 w-[30%]"
                style={{ left: "2%", bottom: "20%" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.25, 1] }}
                  transition={{
                    duration: 2.2,
                    delay: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-0 rounded-full bg-[#16A34A]/25 blur-xl"
                />
                <motion.img
                  src="/assets/images/payment3.png"
                  alt="Secure encrypted payments badge"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
                  className="relative w-full object-contain drop-shadow-[0_12px_24px_rgba(7,148,85,0.25)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="relative bg-white px-5 py-20 sm:px-8 lg:px-12 xl:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[280px] w-[720px] -translate-x-1/2 rounded-full bg-[#F2FAFF] blur-3xl" />
          <div className="absolute bottom-0 left-20 h-[260px] w-[360px] rounded-full bg-[#F0FFF7] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1180px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="wap-h2 mx-auto max-w-[900px] leading-tight tracking-[-0.03em] text-[#071B4D]"
          >
            One platform for pay links, invoices and confirmations —{" "}
            <span className="text-[#169B55]">WhatsApp Pay</span>
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {payPlatformCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  {...fadeUp(0.08 + (index % 4) * 0.08, 20)}
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="rounded-2xl border border-[#DCEBFA] bg-white p-7 text-center shadow-[0_16px_38px_rgba(7,27,77,0.07)] transition-shadow duration-300 hover:border-[#44BBFF]/60 hover:shadow-[0_24px_48px_rgba(3,143,223,0.13)]"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAF8FF] to-[#DFF3FF] text-[#038FDF] shadow-inner">
                    <Icon size={34} strokeWidth={2.2} />
                  </div>

                  <h3 className="mb-2 text-[1rem] font-extrabold leading-snug text-[#071B4D]">
                    {card.title}
                  </h3>

                  <p className="mx-auto max-w-[210px] text-sm font-medium leading-6 text-[#52627C]">
                    {card.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="relative overflow-visible bg-gradient-to-b from-[#DCEEFC] to-[#EAF6FF] px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-[300px] w-[380px] rounded-full bg-white/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-[320px] w-[380px] rounded-full bg-white/40 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            {/* HEADING ROW */}
            <div className="flex flex-col items-start justify-between gap-4">
              <div>
                <motion.h2
                  {...fadeUp(0)}
                  className="wap-h2 leading-tight tracking-[-0.04em] text-[#0B1730]"
                >
                  Why Use <span className="text-[#169B55]">WhatsApp</span>{" "}
                  Payments?
                </motion.h2>

                <motion.p
                  {...fadeUp(0.1)}
                  className="mt-2 max-w-[560px] text-xs font-medium leading-5 text-[#4B5B77] sm:text-sm"
                >
                  A secure, easy-to-use payment solution that fits perfectly
                  into the customer journey — right inside the chat.
                </motion.p>
              </div>

              <motion.div
                {...fadeUp(0.2, 16)}
                className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#DCEBFA] bg-white/70 px-3 py-1.5 text-[0.68rem] font-bold text-[#138A43] shadow-sm"
              >
                <CheckCircle2 size={12} />
                Trusted by growing businesses
              </motion.div>
            </div>

            {/* BENEFIT ROW */}
            <div className="mt-5 grid grid-cols-1 gap-3">
              {whyUseCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={index}
                    {...fadeUp(0.15 + index * 0.12, 24)}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-xl border border-[#DCEBFA] bg-white p-3.5 shadow-[0_10px_24px_rgba(7,27,77,0.06)] transition-shadow duration-300 hover:border-[#1FCB6B]/50 hover:shadow-[0_16px_36px_rgba(31,203,107,0.14)]"
                  >
                    <span className="pointer-events-none absolute -right-2 -top-2 text-4xl font-black leading-none text-[#0B1730]/[0.04] transition-colors duration-300 group-hover:text-[#1FCB6B]/10">
                      0{index + 1}
                    </span>

                    <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAFBF1] text-[#138A43] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={17} strokeWidth={2.2} />
                    </div>

                    <h3 className="relative mt-2.5 text-[0.85rem] font-extrabold text-[#0B1730]">
                      {card.title}
                    </h3>
                    <p className="relative mt-1 text-[0.72rem] font-medium leading-5 text-[#4B5B77]">
                      {card.text}
                    </p>

                    <span className="relative mt-2.5 block h-0.5 w-6 rounded-full bg-[#1FCB6B]/30 transition-all duration-300 group-hover:w-10 group-hover:bg-[#1FCB6B]" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CYCLING PAYMENT IMAGE */}
          <motion.div
            {...fadeX(0.15, 30)}
            className="relative mx-auto w-full max-w-[420px] overflow-visible"
          >
            <PayImageCycle />
          </motion.div>
        </div>
      </section>
      <section className="relative bg-white px-5 py-24 sm:px-8 lg:px-12 xl:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#F2FAFF] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[320px] w-[520px] rounded-full bg-[#F0FFF7] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1600px]">
          {/* HOW IT WORKS */}
          <div className="rounded-[26px] border border-[#DCEBFA] bg-white/90 px-5 pb-12 pt-9 shadow-[0_24px_60px_rgba(7,27,77,0.08)] backdrop-blur-xl sm:px-7 relative overflow-hidden">
  
  {/* Animated Background Orbs */}
  <motion.div
    className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-[#155EEF]/5 to-[#44BBFF]/5 blur-3xl"
    animate={{
      scale: [1, 1.2, 1],
      x: [0, 40, 0],
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-[#169B55]/5 to-[#1FCB6B]/5 blur-3xl"
    animate={{
      scale: [1, 1.3, 1],
      x: [0, -40, 0],
    }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
  />

  {/* Floating Dots Background */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
          background: i % 3 === 0 ? "#1FCB6B" : i % 3 === 1 ? "#155EEF" : "#44BBFF",
          opacity: 0.1,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20 - Math.random() * 30, 0],
          x: [0, (Math.random() - 0.5) * 20, 0],
          opacity: [0.05, 0.2, 0.05],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 3,
        }}
      />
    ))}
  </div>

  {/* BADGE */}
  <motion.div
    initial={{ opacity: 0, y: -20, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: EASE }}
    className="relative z-20 mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-[#BDEFD0] bg-[#EAFBF1] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#138A43]"
  >
    <motion.span
      animate={{ 
        scale: [1, 1.3, 1],
        rotate: [0, -10, 10, 0]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <Zap size={13} />
    </motion.span>
    <motion.span
      animate={{ 
        opacity: [1, 0.6, 1],
        letterSpacing: ["0.05em", "0.1em", "0.05em"]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      From chat to checkout
    </motion.span>
  </motion.div>

  {/* HEADING */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
    className="relative z-20 text-[clamp(1.6rem,2.8vw,2.4rem)] font-extrabold text-center leading-tight tracking-[-0.03em] text-[#071B4D]"
  >
    How{" "}
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: 0.3,
        type: "spring",
        stiffness: 200
      }}
      className="text-[#169B55] inline-block"
    >
      WhatsApp Pay
    </motion.span>
    {" "}Works
  </motion.h2>

  {/* STEPS WITH DOTS AND ARROWS - NUMBERS ABOVE LINE */}
  <div className="relative z-10 mt-10">
    {/* Animated connector line with dots and arrows */}
    <div className="absolute left-0 top-[18px] hidden h-[3px] w-full lg:block z-30 pointer-events-none">
      {/* Base line */}
      <motion.div
        className="h-full w-full rounded-full bg-gradient-to-r from-[#1FCB6B] via-[#079455] to-[#155EEF]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.5, ease: EASE }}
        style={{ transformOrigin: "left" }}
      />
      
      {/* Animated dots on line */}
      {[10, 30, 50, 70, 90].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#155EEF] shadow-[0_0_20px_rgba(21,94,239,0.3)]"
          style={{ left: `${pos}%` }}
          animate={{
            scale: [1, 1.5, 1],
            boxShadow: [
              "0 0 0px rgba(21,94,239,0)",
              "0 0 25px rgba(21,94,239,0.6)",
              "0 0 0px rgba(21,94,239,0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Moving arrow on line */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 text-[#155EEF] text-base font-bold"
        animate={{
          left: ["-2%", "98%", "-2%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ 
          transform: "translateY(-50%)",
        }}
      >
        <motion.span
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ➜
        </motion.span>
      </motion.div>
    </div>

    <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-3">
      {payWorkSteps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.6,
            delay: index * 0.1,
            ease: EASE 
          }}
          className="relative group"
        >
          {/* Number node - ABOVE THE LINE with high z-index */}
          <div className="relative z-40 mb-3 flex justify-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: index * 0.1 + 0.2
              }}
              whileHover={{ 
                scale: 1.25,
                boxShadow: "0 0 40px rgba(7,148,85,0.5)"
              }}
              animate={{
                boxShadow: [
                  "0 10px 22px rgba(7,148,85,0.25)",
                  "0 10px 40px rgba(7,148,85,0.4)",
                  "0 10px 22px rgba(7,148,85,0.25)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#079455] to-[#16A34A] text-sm font-black text-white shadow-[0_10px_22px_rgba(7,148,85,0.25)]"
            >
              {step.number}
            </motion.div>
          </div>

          {/* Card */}
          <motion.div 
            className="relative flex h-full min-w-0 flex-col rounded-2xl border border-[#DCEBFA] bg-white p-4 pt-5 shadow-[0_16px_38px_rgba(7,27,77,0.07)] transition-all duration-300 hover:shadow-[0_24px_56px_rgba(7,27,77,0.18)] hover:border-[#44BBFF] group-hover:-translate-y-1.5"
            whileHover={{
              boxShadow: "0 24px 56px rgba(7,27,77,0.18)",
              borderColor: "#44BBFF",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Card shine effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
              initial={false}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25) 0%, transparent 70%)",
              }}
            />

            {/* ICON - Left side with floating animation */}
            <div className="flex items-start gap-3 mb-2">
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: index * 0.1 + 0.35
                }}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#EAF8FF] to-[#D4EEFF] text-[#038FDF] text-2xl shadow-sm border border-[#B8D4FF]"
              >
                {step.type === "invoice" && "📄"}
                {step.type === "review" && "👀"}
                {step.type === "method" && "💳"}
                {step.type === "success" && "✅"}
                {step.type === "order" && "📦"}
              </motion.div>

              {/* Title - Right side */}
              <div className="flex-1 min-w-0">
                <motion.h3 
                  className="text-[0.8rem] font-extrabold leading-tight text-[#071B4D]"
                  whileHover={{ color: "#155EEF" }}
                  transition={{ duration: 0.2 }}
                >
                  {step.title}
                </motion.h3>
                <motion.div
                  className="h-0.5 w-8 bg-gradient-to-r from-[#1FCB6B] to-[#155EEF] rounded-full mt-0.5"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                />
              </div>
            </div>

            <motion.p 
              className="mt-0.5 text-[0.62rem] font-medium leading-[1.3] text-[#4B5B77]"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {step.text}
            </motion.p>

            {/* Mini Visuals */}
            <motion.div 
              className="mt-2.5 min-w-0 rounded-xl bg-gradient-to-br from-[#F8FBFF] to-[#F0F8FF] p-2 border border-[#E8EEF6] transition-all duration-300 hover:border-[#44BBFF]"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 4px 20px rgba(21,94,239,0.08)"
              }}
              transition={{ duration: 0.2 }}
            >
              {step.type === "invoice" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="min-w-0 rounded-lg bg-gradient-to-br from-[#DDF8D7] to-[#E8FBE2] p-2 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[0.55rem] font-bold text-[#138A43]">📄 Invoice #INV-3978</p>
                    <motion.span
                      className="text-[0.4rem] font-bold text-[#138A43] bg-white/50 px-1.5 py-0.5 rounded"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      PENDING
                    </motion.span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <div>
                      <p className="text-[0.4rem] font-bold text-[#60708C]">Total Amount</p>
                      <motion.h4 
                        className="text-[0.7rem] font-black text-[#071B4D]"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      >
                        ₹ 15,456
                      </motion.h4>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(22,163,74,0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-lg bg-gradient-to-r from-[#16A34A] to-[#22C55E] px-3 py-1 text-[0.5rem] font-black text-white shadow-lg"
                    >
                      Pay ₹ 2,750
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step.type === "review" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="min-w-0 rounded-lg bg-gradient-to-br from-[#EAFBEF] to-[#D4F5E0] p-2 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">👁️</span>
                    <p className="text-[0.55rem] font-bold text-[#071B4D]">Review Payment</p>
                  </div>
                  <div className="mt-1 flex items-center justify-between bg-white/60 rounded-lg p-1.5">
                    <div>
                      <p className="text-[0.4rem] font-bold text-[#60708C]">Invoice #INV-2378</p>
                      <p className="text-[0.4rem] font-semibold text-[#60708C]">Total: <span className="font-black text-[#071B4D]">₹ 2,750</span></p>
                    </div>
                    <motion.div
                      className="flex items-center gap-1 text-[0.4rem] font-bold text-[#16A34A]"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span>✓</span> Verified
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {step.type === "method" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="min-w-0 rounded-lg bg-white p-2 shadow-sm border border-[#E0ECFA]"
                >
                  <p className="mb-1 text-[0.5rem] font-extrabold text-[#071B4D]">💳 Select Payment Method</p>
                  <div className="grid grid-cols-2 gap-1">
                    {["UPI", "Card", "Net Banking", "Wallet"].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 + index * 0.05 }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "#155EEF",
                          color: "white"
                        }}
                        className="text-center rounded-md bg-[#F8FBFF] px-1.5 py-0.5 text-[0.45rem] font-bold text-[#4B5B77] border border-[#E0ECFA] transition-all duration-200 cursor-pointer"
                      >
                        {item}
                        {i === 0 && (
                          <motion.span
                            className="ml-0.5 text-[0.3rem] bg-[#16A34A] text-white px-1 rounded-full"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            ★
                          </motion.span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step.type === "success" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.05 
                  }}
                  className="min-w-0 rounded-lg bg-gradient-to-br from-[#DFF7C9] to-[#C5F0AD] p-2 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <motion.span
                      animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <CheckCircle2 size={14} className="text-[#138A43]" />
                    </motion.span>
                    <div>
                      <motion.p 
                        className="text-[0.55rem] font-extrabold text-[#138A43]"
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        ✨ Payment Successful
                      </motion.p>
                      <p className="text-[0.45rem] font-semibold text-[#315247]">
                        ₹2,750 via UPI • Txn: 9253****83
                      </p>
                    </div>
                  </div>
                  <motion.div
                    className="mt-1 h-1 w-full bg-[#138A43]/20 rounded-full overflow-hidden"
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#138A43] to-[#44BBFF] rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              )}

              {step.type === "order" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="min-w-0 rounded-lg bg-gradient-to-br from-[#DFF7C9] to-[#C5F0AD] p-2 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        <PackageCheck size={14} className="text-[#138A43]" />
                      </motion.span>
                      <div>
                        <motion.p 
                          className="text-[0.55rem] font-extrabold text-[#138A43]"
                          animate={{ opacity: [1, 0.6, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          🎉 Order Confirmed
                        </motion.p>
                        <p className="text-[0.4rem] font-semibold text-[#315247]">Processing...</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-2xl"
                    >
                      📦
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Scroll Progress Bar */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8EEF6] rounded-b-2xl overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#1FCB6B] via-[#079455] to-[#155EEF] rounded-b-2xl"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.15 + 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

          {/* PUBLIC PAYMENTS BANNER */}
          <motion.div
            {...fadeUp(0.1, 30)}
            className="mt-8 overflow-hidden rounded-[24px] bg-[#071B4D] bg-cover bg-center bg-no-repeat p-6 text-white shadow-[0_26px_70px_rgba(7,27,77,0.22)] lg:p-8"
            style={{ backgroundImage: "url('/assets/images/67.png')" }}
          >
            <div>
              <div className="max-w-[640px]">
                <h2 className="text-[clamp(1.1rem,2.4vw,2rem)] font-extrabold leading-tight tracking-[-0.03em] text-white">
                  Built for High-Volume Public Payments
                </h2>

                <p className="mt-3 max-w-[600px] text-[0.78rem] font-medium leading-6 text-white sm:text-sm">
                  For high-volume operational frameworks such as government
                  bodies and PSUs, WhatsApp Pay introduces a secure and scalable
                  infrastructure for managing citizen payments. By consolidating
                  reminders, payment execution and confirmations within
                  WhatsApp, these institutions can elevate service delivery,
                  minimize delays and adopt a streamlined, technology-led
                  approach to public-facing transactions.
                </p>
              </div>

              <div className="mt-5 flex flex-nowrap items-center gap-3 overflow-x-auto">
                {publicPaymentItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      {...fadeUp(0.2 + index * 0.06, 12)}
                      className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-[0.82rem] font-bold text-white backdrop-blur-md"
                    >
                      <Icon size={15} className="shrink-0" />
                      <span>{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="relative bg-white px-5 py-24 sm:px-8 lg:px-12 xl:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#F3FAFF] blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[520px] rounded-full bg-[#EFFBF5] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1600px]">
          <motion.h2
            {...fadeUp(0)}
            className="wap-h2 text-center leading-tight tracking-[-0.03em] text-[#071B4D]"
          >
            Manage Every <span className="text-[#169B55]">Payment Journey</span>{" "}
            from One Dashboard
          </motion.h2>

          <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-[1.35fr_0.65fr]">
            {/* DASHBOARD MOCKUP */}
            <motion.div
              {...fadeX(0.1, -40)}
              className="overflow-hidden rounded-[26px] border border-[#DCEBFA] bg-white shadow-[0_26px_70px_rgba(7,27,77,0.12)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr]">
                {/* Sidebar */}
                <aside className="hidden border-r border-[#E6EEF8] bg-[#F7FBFF] px-3 py-5 sm:block">
                  <div className="mb-6 flex items-center gap-2 px-1 text-[0.98rem] font-black text-[#071B4D]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#16A34A] text-xs font-black text-white">
                      V
                    </span>
                    <span className="truncate">Vertex Suite</span>
                  </div>

                  <div className="space-y-1">
                    {[
                      { label: "Overview", icon: LayoutDashboard },
                      { label: "Payments", icon: CreditCard },
                      { label: "Invoices", icon: FileText },
                      { label: "Customers", icon: UsersRound },
                      { label: "Reminders", icon: BellRing },
                      { label: "Reports", icon: BarChart3 },
                      { label: "Settings", icon: Settings2 },
                    ].map(({ label, icon: Icon }, index) => (
                      <motion.div
                        key={label}
                        {...fadeX(0.05 * index, -12, 0.35)}
                        className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[0.85rem] font-bold ${
                          index === 0
                            ? "bg-[#EAF2FF] text-[#038FDF] ring-1 ring-[#CFE2FF]"
                            : "text-[#5B6B84]"
                        }`}
                      >
                        <Icon size={14} className="shrink-0" />
                        <span className="truncate">{label}</span>
                      </motion.div>
                    ))}
                  </div>
                </aside>

                {/* Dashboard Content */}
                <div className="bg-[#FBFDFF] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-[#071B4D]">
                      Payments Dashboard
                    </h3>

                    <div className="flex items-center gap-2">
                      <div className="rounded-lg border border-[#DCEBFA] bg-white px-2.5 py-1.5 text-[0.7rem] font-bold text-[#60708C]">
                        Date Range: 30 Days
                      </div>

                      <button className="rounded-lg bg-[#16A34A] px-3 py-1.5 text-[0.7rem] font-black text-white">
                        Export
                      </button>
                    </div>
                  </div>

                  {/* Top Stats */}
                  <div className="grid gap-3 md:grid-cols-2">
                    <motion.div
                      {...fadeUp(0.15, 12)}
                      className="rounded-xl border border-[#E0ECFA] bg-white p-2.5 shadow-sm"
                    >
                      <p className="text-[0.68rem] font-bold text-[#7B8AA5]">
                        Total Collections
                      </p>
                      <h4 className="mt-1 text-base font-black text-[#071B4D]">
                        ₹2,45,76,890
                      </h4>
                      <span className="text-[0.68rem] font-bold text-[#16A34A]">
                        +12.4%
                      </span>

                      <svg viewBox="0 0 180 48" className="mt-2 h-8 w-full">
                        <motion.path
                          d="M2 36L22 22L44 31L66 15L88 28L110 18L132 32L154 12L178 20"
                          fill="none"
                          stroke="#16A34A"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 1, delay: 0.4, ease: EASE }}
                        />
                      </svg>
                    </motion.div>

                    <motion.div
                      {...fadeUp(0.22, 12)}
                      className="rounded-xl border border-[#E0ECFA] bg-white p-2.5 shadow-sm"
                    >
                      <p className="text-[0.68rem] font-bold text-[#7B8AA5]">
                        Success Rate
                      </p>
                      <h4 className="mt-1 text-base font-black text-[#071B4D]">
                        96.42%
                      </h4>
                      <span className="text-[0.68rem] font-bold text-[#16A34A]">
                        +2.7%
                      </span>

                      <div className="mt-2 flex items-center justify-center">
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[conic-gradient(#16A34A_0_78%,#DCEBFA_78%_100%)]">
                          <div className="h-7 w-7 rounded-full bg-white" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Middle Cards */}
                  <div className="mt-3 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
                    <motion.div
                      {...fadeUp(0.3, 16)}
                      className="rounded-xl border border-[#E0ECFA] bg-white p-3 shadow-sm"
                    >
                      <h4 className="text-[0.78rem] font-extrabold text-[#071B4D]">
                        Payment Status
                      </h4>

                      <div className="mt-2.5 flex items-center gap-3">
                        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[conic-gradient(#16A34A_0_78%,#F97316_78%_90%,#EF4444_90%_100%)]">
                          <div className="h-9 w-9 rounded-full bg-white" />
                        </div>

                        <div className="space-y-1 text-[0.65rem] font-bold text-[#4B5B77]">
                          <p>
                            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                            Successful{" "}
                            <b className="ml-2 text-[#071B4D]">96.42%</b>
                          </p>
                          <p>
                            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                            Pending <b className="ml-4 text-[#071B4D]">3.10%</b>
                          </p>
                          <p>
                            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#EF4444]" />
                            Failed <b className="ml-6 text-[#071B4D]">0.48%</b>
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      {...fadeUp(0.36, 16)}
                      className="rounded-xl border border-[#E0ECFA] bg-white p-3 shadow-sm"
                    >
                      <h4 className="text-[0.78rem] font-extrabold text-[#071B4D]">
                        Reminder Automation
                      </h4>

                      <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                        <div className="rounded-lg bg-[#F8FBFF] p-2.5 ring-1 ring-[#E6EEF8]">
                          <p className="text-[0.65rem] font-bold text-[#7B8AA5]">
                            Reminders Sent
                          </p>
                          <h5 className="mt-1 text-base font-black text-[#071B4D]">
                            4,328
                          </h5>
                          <span className="text-[0.65rem] font-bold text-[#16A34A]">
                            18.4%
                          </span>
                        </div>

                        <div className="rounded-lg bg-[#F8FBFF] p-2.5 ring-1 ring-[#E6EEF8]">
                          <p className="text-[0.65rem] font-bold text-[#7B8AA5]">
                            Overdue Recovered
                          </p>
                          <h5 className="mt-1 text-base font-black text-[#071B4D]">
                            1,248
                          </h5>
                          <span className="text-[0.65rem] font-bold text-[#16A34A]">
                            42.0%
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom Tables */}
                  <div className="mt-3 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
                    <motion.div
                      {...fadeUp(0.42, 16)}
                      className="rounded-xl border border-[#E0ECFA] bg-white p-3 shadow-sm"
                    >
                      <h4 className="mb-2 text-[0.78rem] font-extrabold text-[#071B4D]">
                        Recent Transactions
                      </h4>

                      <div className="space-y-1.5 overflow-x-auto">
                        {recentTransactions.map((item, index) => (
                          <div
                            key={index}
                            className="grid min-w-[280px] grid-cols-[1fr_1fr_0.7fr_0.8fr] items-center gap-2 text-[0.62rem] font-bold text-[#4B5B77]"
                          >
                            <span>{item.date}</span>
                            <span>{item.customer}</span>
                            <span>{item.amount}</span>
                            <span
                              className={`rounded-full px-1.5 py-0.5 text-center text-[0.58rem] ${
                                item.status === "Successful"
                                  ? "bg-[#E9FBEF] text-[#16A34A]"
                                  : "bg-[#FFF7D6] text-[#D89500]"
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button className="mt-2.5 text-[0.72rem] font-black text-[#155EEF]">
                        View all transactions
                      </button>
                    </motion.div>

                    <motion.div
                      {...fadeUp(0.48, 16)}
                      className="rounded-xl border border-[#E0ECFA] bg-white p-3 shadow-sm"
                    >
                      <h4 className="mb-2 text-[0.78rem] font-extrabold text-[#071B4D]">
                        Invoice Activity
                      </h4>

                      <div className="mb-2 rounded-lg bg-[#F8FBFF] p-2 ring-1 ring-[#E6EEF8]">
                        <div className="h-2 w-24 rounded-full bg-[#DCEBFA]" />
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {[
                          ["Created", "3,842", "+7.8%"],
                          ["Paid", "3,412", "+14.0%"],
                          ["Overdue", "430", "-8.5%"],
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="rounded-lg bg-[#F8FBFF] p-2 ring-1 ring-[#E6EEF8]"
                          >
                            <p className="text-[0.58rem] font-bold text-[#7B8AA5]">
                              {item[0]}
                            </p>
                            <h5 className="mt-0.5 text-sm font-black text-[#071B4D]">
                              {item[1]}
                            </h5>
                            <span
                              className={`text-[0.58rem] font-bold ${
                                item[2].startsWith("-")
                                  ? "text-[#EF4444]"
                                  : "text-[#16A34A]"
                              }`}
                            >
                              {item[2]}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button className="mt-2.5 text-[0.72rem] font-black text-[#155EEF]">
                        View all invoices
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT JOURNEY LIST */}
            <div className="flex h-full flex-col gap-3">
              {dashboardJourneyItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    {...fadeX(0.15 + index * 0.1, 30)}
                    whileHover={{ y: -4 }}
                    className="group rounded-lg border border-[#DCEBFA] bg-white p-3.5 shadow-[0_16px_42px_rgba(7,27,77,0.08)] transition duration-300 hover:border-[#44BBFF]/60 hover:shadow-[0_24px_55px_rgba(3,143,223,0.14)]"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#EAF8FF] text-[#038FDF] transition group-hover:scale-105">
                        <Icon size={20} strokeWidth={2.2} />
                      </div>
                      <h3 className="min-w-0 text-[0.78rem] font-extrabold leading-tight text-[#071B4D]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-[0.68rem] font-medium leading-[1.35] text-[#4B5B77]">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
