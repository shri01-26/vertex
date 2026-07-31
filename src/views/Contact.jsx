"use client";

import React, { useState } from "react";
import Reveal from "../components/Reveal";
import Link from "../components/AppLink";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* Same details the footer shows — keep both in sync if they ever change. */
const CONTACT = {
  phone: "+91 83190 1581",
  phoneHref: "tel:+91831901581",
  email: "hello@vertexsuite.in",
  address: "Bhilai, Chhattisgarh, India",
  mapHref: "https://maps.google.com/?q=Bhilai+Chhattisgarh+India",
  website: "www.vertexsuite.in",
  websiteHref: "https://www.vertexsuite.in",
};

const quickCards = [
  {
    icon: Mail,
    label: "Email us",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    hint: "We reply within one business day.",
  },
  {
    icon: Phone,
    label: "Call us",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    hint: "Mon–Sat, 10:00 AM – 7:00 PM IST.",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: CONTACT.address,
    href: CONTACT.mapHref,
    hint: "Open in Google Maps for directions.",
  },
];

const topics = [
  "WhatsApp Business API",
  "WhatsApp Marketing & Broadcast",
  "WhatsApp Payments",
  "Chatbot & Automation",
  "SMS, RCS & Voice",
  "Pricing & Plans",
  "Partnership",
  "Something else",
];

const trustPoints = [
  { icon: ShieldCheck, text: "ISO 27001 & 9001 certified processes" },
  { icon: MessageCircle, text: "Official Meta Business Partner" },
  { icon: Clock3, text: "Response within one business day" },
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  topic: "",
  message: "",
  consent: false,
};

const inputClass =
  "w-full rounded-[10px] border border-[#DDE5F0] bg-white px-4 py-3 text-[0.95rem] font-medium text-[#071B4D] outline-none transition-all duration-200 placeholder:text-[#9AA7BD] focus:border-green-600 focus:ring-2 focus:ring-green-600/15";

const labelClass =
  "mb-1.5 block text-[0.85rem] font-semibold tracking-tight text-[#3D4B66]";

const errorClass = "mt-1 text-[0.78rem] font-medium text-[#DC2626]";

function validate(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (form.phone.replace(/\D/g, "").length < 8) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!form.message.trim()) errors.message = "Tell us a little about your requirement.";
  if (!form.consent) errors.consent = "Please accept before submitting.";

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field) => (event) => {
    const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;

    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: send `form` to the CRM / backend endpoint once it is available.
    setSubmitted(true);
    setForm(emptyForm);
  };

  return (
    <main className="contact-page min-h-screen overflow-hidden bg-white">
      {/* ── HERO + FORM ───────────────────────────────────────────── */}
      <section className="relative bg-[#eff4ef] px-4 pb-[76px] pt-14 sm:px-8 sm:pb-[88px] sm:pt-16 lg:px-10 lg:pb-[96px] lg:pt-20 xl:px-16 2xl:px-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[5%] top-12 h-[560px] w-[560px] rounded-full bg-[#EAFBF3] blur-3xl" />
          <div className="absolute right-[20%] top-28 h-[420px] w-[420px] rounded-full bg-[#EAF7FF] blur-3xl" />
          <div className="absolute left-0 top-20 h-[320px] w-[420px] rounded-full bg-[#F6FBFF] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          {/* LEFT — intro + quick contact */}
          <div className="relative z-10 min-w-0 text-left">
            <Reveal
              onMount
              delay={0}
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-[10px] border border-white/50 bg-white/25 px-3 py-2 text-[0.95rem] font-semibold text-green-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_28px_rgba(15,23,42,0.10)] ring-1 ring-white/30 backdrop-blur-lg"
            >
              <Sparkles size={18} strokeWidth={2.2} />
              Contact Us
            </Reveal>

            <Reveal onMount delay={0.12}>
              <h1 className="mt-0! mb-6! w-full! max-w-[720px]! text-[clamp(2.1rem,4vw,2.986rem)]! font-extrabold! leading-[1.08]! tracking-tight! text-[#071b3a]!">
                <span className="block">Let&rsquo;s Turn Your</span>
                <span className="block text-[#10b957]">Conversations Into Conversions</span>
              </h1>
            </Reveal>

            <Reveal onMount delay={0.24}>
              <p className="block max-w-[620px] text-left !text-[1.12rem] font-normal leading-[1.65] text-[#5B667A] xl:!text-[1.2rem] max-md:!text-[1rem] max-md:leading-[1.6]">
                Share a few details and our team will get back to you with the right plan,
                pricing, and a walkthrough of Vertex Suite for your business.
              </p>
            </Reveal>

            {/* Quick contact cards */}
            <div className="mt-9 flex flex-col gap-3">
              {quickCards.map(({ icon: Icon, label, value, href, hint }, index) => (
                <Reveal key={label} direction="left" delay={0.3 + index * 0.1}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-start gap-4 rounded-[16px] border border-white/70 bg-white/80 px-5 py-4 no-underline! shadow-[0_10px_28px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-600/30 hover:shadow-[0_16px_36px_rgba(16,185,87,0.14)]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EAFBF1] text-green-600 transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
                      <Icon size={20} strokeWidth={2.1} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#8494AD]">
                        {label}
                      </span>
                      <span className="block text-[1.02rem] font-bold text-[#071B4D]">
                        {value}
                      </span>
                      <span className="block text-[0.85rem] font-medium text-[#5B667A]">
                        {hint}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Trust strip */}
            <Reveal delay={0.6} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              {trustPoints.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 text-[0.88rem] font-semibold text-[#3D4B66]"
                >
                  <Icon size={17} strokeWidth={2.2} className="text-green-600" />
                  {text}
                </span>
              ))}
            </Reveal>
          </div>

          {/* RIGHT — form card */}
          <Reveal
            onMount
            direction="right"
            delay={0.2}
            className="relative z-10 min-w-0"
          >
            <div className="rounded-[24px] border border-[#E7ECF5] bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.09)] max-md:p-5">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAFBF1] text-green-600">
                    <CheckCircle2 size={34} strokeWidth={2} />
                  </span>
                  <h2 className="mt-6! mb-3! text-[1.5rem]! font-extrabold! tracking-tight! text-[#071B4D]!">
                    Thank you for reaching out!
                  </h2>
                  <p className="!mb-0 max-w-[420px] text-[0.98rem] leading-[1.65] text-[#5B667A]">
                    Your message has reached our team. We&rsquo;ll get back to you within one
                    business day &mdash; usually much sooner.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      to="/book-demo"
                      className="inline-flex items-center justify-center gap-2 rounded-[10px]! border-2 border-green-600 bg-green-600 px-6 py-2.5 text-[0.95rem] font-semibold !text-white no-underline! transition-all duration-300 hover:opacity-90"
                    >
                      <CalendarDays size={18} strokeWidth={2} />
                      Book a Live Demo
                    </Link>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center gap-2 rounded-[10px] border-2 border-green-600 bg-white px-6 py-2.5 text-[0.95rem] font-semibold text-green-600 transition-all duration-300 hover:bg-[#EAFBF1]"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="mt-0! mb-1.5! text-[1.45rem]! font-extrabold! tracking-tight! text-[#071B4D]! max-md:text-[1.25rem]!">
                    Send us a message
                  </h2>
                  <p className="!mb-6 text-[0.92rem] font-medium leading-[1.6] text-[#5B667A]">
                    Fill in the form and the right team will reach out to you.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelClass} htmlFor="contact-name">
                          Full name <span className="text-[#DC2626]">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          className={inputClass}
                          placeholder="Your full name"
                          value={form.name}
                          onChange={updateField("name")}
                        />
                        {errors.name && <p className={errorClass}>{errors.name}</p>}
                      </div>

                      <div>
                        <label className={labelClass} htmlFor="contact-email">
                          Work email <span className="text-[#DC2626]">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          className={inputClass}
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={updateField("email")}
                        />
                        {errors.email && <p className={errorClass}>{errors.email}</p>}
                      </div>

                      <div>
                        <label className={labelClass} htmlFor="contact-phone">
                          Phone / WhatsApp number <span className="text-[#DC2626]">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          className={inputClass}
                          placeholder="+91 00000 00000"
                          value={form.phone}
                          onChange={updateField("phone")}
                        />
                        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                      </div>

                      <div>
                        <label className={labelClass} htmlFor="contact-company">
                          Company name
                        </label>
                        <input
                          id="contact-company"
                          type="text"
                          className={inputClass}
                          placeholder="Your business name"
                          value={form.company}
                          onChange={updateField("company")}
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className={labelClass} htmlFor="contact-topic">
                          What are you interested in?
                        </label>
                        <div className="relative">
                          <select
                            id="contact-topic"
                            className={`${inputClass} appearance-none pr-11`}
                            value={form.topic}
                            onChange={updateField("topic")}
                          >
                            <option value="">Select a topic</option>
                            {topics.map((topic) => (
                              <option key={topic} value={topic}>
                                {topic}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={18}
                            strokeWidth={2.2}
                            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#5B667A]"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className={labelClass} htmlFor="contact-message">
                          Message <span className="text-[#DC2626]">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          className={`${inputClass} resize-y`}
                          placeholder="Tell us about your use case, expected message volume, or the problem you want to solve."
                          value={form.message}
                          onChange={updateField("message")}
                        />
                        {errors.message && <p className={errorClass}>{errors.message}</p>}
                      </div>
                    </div>

                    <label className="mt-5 flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 shrink-0 accent-green-600"
                        checked={form.consent}
                        onChange={updateField("consent")}
                      />
                      <span className="text-[0.85rem] font-medium leading-[1.55] text-[#5B667A]">
                        I agree to be contacted by Vertex Suite over email, phone, or WhatsApp
                        regarding my enquiry.
                      </span>
                    </label>
                    {errors.consent && <p className={errorClass}>{errors.consent}</p>}

                    <button
                      type="submit"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[10px] border-2 border-green-600 bg-green-600 px-7 py-3 text-[1rem] font-semibold text-white transition-all duration-300 hover:opacity-90"
                    >
                      <Send size={18} strokeWidth={2.1} />
                      Submit Enquiry
                    </button>

                    <p className="!mb-0 mt-3 text-center text-[0.8rem] font-medium text-[#8494AD]">
                      We respect your privacy. Your details are never shared with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
