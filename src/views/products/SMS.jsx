"use client";

import React, { useState } from "react";
import Link from "../../components/AppLink";
import { BarChart3, Check, CheckCheck, Gift, Globe2, Lock, Minus, Plus, Signal, Smartphone, Target, Wifi, Zap } from "lucide-react";
import "./sms.css";

function SmsPhone() {
  return (
    <div className="sms-visual" aria-label="Vertex Suite SMS conversation preview">
      <div className="sms-phone">
        <div className="sms-phone-status"><span>9:41</span><span className="sms-phone-signals"><Signal size={10} fill="currentColor" /><Wifi size={10} /><span className="sms-battery">100%</span></span></div>
        <div className="sms-contact"><span className="sms-avatar">VS</span><span><strong>Vertex Suite</strong><small><Check size={9} strokeWidth={3} /> Verified Business</small></span></div>
        <div className="sms-thread">
          <div className="sms-message sms-message-accent"><strong>Order Confirmed <span>📦</span></strong><p>Hi RAHUL! Your order #VSX-2847 has been confirmed and will be delivered by 6 PM today.</p><a href="#track-order">Track your order →</a></div>
          <div className="sms-meta">10:24 AM · Delivered <CheckCheck size={9} /></div>
          <div className="sms-message sms-otp"><span>Your Vertex Suite OTP</span><strong>847 291</strong><small>Valid for 5 minutes. Do not share.</small></div>
          <div className="sms-meta">10:31 AM · Delivered <CheckCheck size={9} /></div>
          <div className="sms-message sms-message-accent"><strong>Exclusive Offer <Gift size={11} fill="currentColor" /></strong><p>Get 20% OFF on your next purchase. Use code: VERTEX20. Valid till midnight!</p><a href="#start-building">Shop Now →</a></div>
        </div>
      </div>
      <div className="sms-delivery-card"><span className="sms-chart-icon"><BarChart3 size={18} /></span><span><strong>2.4M msgs</strong><small>delivered today</small></span></div>
    </div>
  );
}

const smsFeatures = [
  { icon: Globe2, title: "Universal Accessibility", description: "Reach every customer on any device — smartphones, feature phones, rural areas — no internet required. SMS has the widest reach of any digital channel." },
  { icon: Zap, title: "Instant Delivery at Scale", description: "Send millions of messages in seconds with guaranteed low-latency delivery. Campaign broadcasts, OTPs, and alerts go out instantly." },
  { icon: Smartphone, title: "Multi-Channel Failover", description: "If WhatsApp or RCS fails, messages automatically fall back to SMS — ensuring no critical communication is ever missed." },
  { icon: Target, title: "Personalized Campaigns", description: "Dynamically insert names, amounts, links, and custom variables into every message. Every SMS feels tailored to the individual recipient." },
  { icon: BarChart3, title: "Advanced Analytics", description: "Track delivery rates, open rates, link clicks, and conversions with real-time dashboards. 90-day message logs for full visibility." },
  { icon: Lock, title: "DLT Compliant", description: "Fully compliant with TRAI's DLT regulations. Built-in sender ID management, template approval, and consent tracking out of the box." },
];

function WhyVertexSms() {
  return (
    <section className="sms-why">
      <div className="sms-why-inner">
        <div className="sms-why-eyebrow">WHY VERTEX SMS</div>
        <h2>Built for Maximum Reach,<br />Reliability &amp; Results</h2>
        <p className="sms-why-lead">Every feature is designed to ensure your messages land, get read, and<br className="sms-why-break" /> drive action — at any scale.</p>
        <div className="sms-feature-grid">
          {smsFeatures.map(({ icon: Icon, title, description }, index) => (
            <article className="sms-feature-card" key={title}>
              <span className={`sms-feature-icon sms-feature-icon-${index + 1}`}><Icon size={18} strokeWidth={2.2} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const smsUseCases = [
 {tab:"Authentication & OTP",title:"Secure 2-Factor Authentication",description:"Send time-critical OTPs for login, transactions, and account verification with sub-10-second delivery and 99%+ success rates.",bullets:["Login & account verification OTPs","Transaction approval codes","Password reset confirmations","New device authentication"],messages:[{label:"Vertex Suite — OTP",body:"Your one-time password is",code:"481 927",note:"Valid for 5 minutes. Do not share this with anyone."},{label:"Transaction Alert",body:"INR 5,000 debited from A/c XX4821. OTP for confirmation:",code:"739 012",note:"Valid 3 mins."}]},
 {tab:"Promotional",title:"Campaigns That Convert",description:"Reach every customer with personalized offers, launches, and limited-time promotions designed to drive immediate action.",bullets:["Personalized discount campaigns","Product launch announcements","Abandoned-cart reminders","Seasonal and flash-sale alerts"],messages:[{label:"Exclusive Offer",body:"Save 20% on your next order. Use code",code:"VERTEX20",note:"Offer ends tonight."},{label:"Flash Sale",body:"Your favorites are selling fast. Unlock",code:"FREE DELIVERY",note:"Limited time only."}]},
 {tab:"Transactional",title:"Real-Time Transaction Updates",description:"Keep customers informed at every step with dependable confirmations, receipts, and status updates delivered instantly.",bullets:["Order and payment confirmations","Shipping and delivery updates","Booking confirmations","Refund and account notifications"],messages:[{label:"Order Confirmed",body:"Your order #VSX-2847 is confirmed. Delivery by",code:"6 PM TODAY",note:"Track your order in the Vertex app."},{label:"Payment Received",body:"We received your payment of INR 2,499.",code:"SUCCESS",note:"Receipt ID: VS982104."}]},
 {tab:"Alerts & Notifications",title:"Critical Alerts, Delivered Fast",description:"Send urgent operational, security, and service notifications at scale without relying on internet connectivity.",bullets:["Security and fraud alerts","Service outage notifications","Appointment reminders","Emergency broadcasts"],messages:[{label:"Security Alert",body:"New login detected from Bengaluru at 10:42 AM.",code:"REVIEW NOW",note:"Ignore if this was you."},{label:"Appointment Reminder",body:"Your appointment is tomorrow at",code:"11:30 AM",note:"Reply C to confirm."}]},
 {tab:"Customer Support",title:"Support Customers Everywhere",description:"Close the communication loop with accessible service updates, case notifications, and helpful two-way conversations.",bullets:["Support ticket updates","Callback notifications","Feedback and CSAT requests","Two-way customer conversations"],messages:[{label:"Support Update",body:"Your ticket #48271 has been assigned.",code:"IN PROGRESS",note:"We'll update you within 2 hours."},{label:"How Did We Do?",body:"Rate your recent support experience.",code:"REPLY 1–5",note:"Your feedback helps us improve."}]}
];
function SmsUseCases(){const[activeUseCase,setActiveUseCase]=useState(0);const current=smsUseCases[activeUseCase];return <section className="sms-use-cases"><div className="sms-use-inner"><div className="sms-use-eyebrow">USE CASES</div><h2>Powering SMS Across<br/>the Customer Journey</h2><p className="sms-use-lead">From the first touchpoint to post-purchase — SMS works at every stage.</p><div className="sms-use-panel"><div className="sms-use-tabs" role="tablist" aria-label="SMS use cases">{smsUseCases.map((item,index)=><button key={item.tab} type="button" role="tab" aria-selected={activeUseCase===index} className={activeUseCase===index?"active":""} onClick={()=>setActiveUseCase(index)}>{item.tab}</button>)}</div><div className="sms-use-content" key={current.tab}><div className="sms-use-copy"><h3>{current.title}</h3><p>{current.description}</p><ul>{current.bullets.map(bullet=><li key={bullet}>{bullet}</li>)}</ul></div><div className="sms-preview-box">{current.messages.map((message,index)=><div className={`sms-preview-message sms-preview-message-${index+1}`} key={message.label}><strong>{message.label}</strong><span>{message.body}</span><b>{message.code}</b><small>{message.note}</small></div>)}</div></div></div></div></section>}
const smsSteps = [
  { step: "01", title: "Connect via API", description: "Integrate the Vertex SMS API into your platform using REST. Go live in under 30 minutes." },
  { step: "02", title: "Create Templates", description: "Design DLT-compliant message templates with dynamic personalization variables." },
  { step: "03", title: "Select Audience", description: "Upload contact lists, apply filters, and segment your audience for targeted delivery." },
  { step: "04", title: "Send or Schedule", description: "Trigger messages instantly via API or schedule campaigns for the optimal time." },
  { step: "05", title: "Track & Optimize", description: "Monitor delivery, opens, and clicks in real-time. Use insights to optimize every campaign." },
];

function SmsHowItWorks() {
  return (
    <section className="sms-steps">
      <div className="sms-steps-inner">
        <div className="sms-steps-eyebrow">HOW IT WORKS</div>
        <h2>From Setup to Delivery<br />in Minutes</h2>
        <ol className="sms-steps-track">
          {smsSteps.map(({ step, title, description }) => (
            <li className="sms-step" key={step}>
              <span className="sms-step-badge">{step}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const smsComparison = [
  { feature: "Works without internet", sms: "✓", whatsapp: "✗", email: "✗", smsTone: "yes", whatsappTone: "no", emailTone: "no" },
  { feature: "App installation required", sms: "✓ None", whatsapp: "✗ App needed", email: "✗ Client needed", smsTone: "yes", whatsappTone: "no", emailTone: "no" },
  { feature: "Average open rate", sms: "98%", whatsapp: "72%", email: "21%", smsTone: "yes" },
  { feature: "Global reach", sms: "5B+ users", whatsapp: "2.5B users", email: "4B users", smsTone: "yes" },
  { feature: "Rich media support", sms: "Text only", whatsapp: "✓ Full media", email: "✓ HTML", smsTone: "no", whatsappTone: "yes", emailTone: "yes" },
  { feature: "Delivery speed", sms: "< 10 sec", whatsapp: "Varies", email: "Minutes-hours", smsTone: "yes" },
  { feature: "DLT / regulatory compliance (India)", sms: "✓ Built-in", whatsapp: "Partial", email: "N/A", smsTone: "yes", whatsappTone: "no", emailTone: "no" },
  { feature: "Multi-channel failover target", sms: "Primary fallback", whatsapp: "Primary", email: "Secondary", smsTone: "accent" },
];

function SmsComparison() {
  return (
    <section className="sms-compare">
      <div className="sms-compare-inner">
        <div className="sms-compare-eyebrow">CHANNEL COMPARISON</div>
        <h2>SMS vs Other Channels</h2>
        <p className="sms-compare-lead">Understand where SMS excels and why it remains the backbone of<br className="sms-compare-break" /> business communication.</p>
        <div className="sms-compare-scroll">
          <table className="sms-compare-table">
            <thead>
              <tr><th scope="col">FEATURE</th><th scope="col" className="sms-compare-highlight">SMS</th><th scope="col">WHATSAPP / RCS</th><th scope="col">EMAIL</th></tr>
            </thead>
            <tbody>
              {smsComparison.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td className={`sms-compare-highlight sms-compare-${row.smsTone || "neutral"}`}>{row.sms}</td>
                  <td className={`sms-compare-${row.whatsappTone || "neutral"}`}>{row.whatsapp}</td>
                  <td className={`sms-compare-${row.emailTone || "neutral"}`}>{row.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const smsFaqs = [
  { question: "What is the Vertex SMS API and how do I get started?", answer: "It's a REST API that lets you send transactional and promotional SMS from your own application. Sign up, generate an API key from the dashboard, and you can fire your first message with a single HTTP request — most teams are live in under 30 minutes." },
  { question: "Do I need DLT registration to send SMS in India?", answer: "Yes. TRAI requires every business sending commercial SMS in India to register on a DLT platform, along with their sender IDs and message templates. Vertex Suite guides you through registration and handles sender ID and template approvals inside the dashboard." },
  { question: "How fast are OTP messages delivered?", answer: "OTPs are routed over dedicated high-priority transactional routes with sub-10-second delivery and 99%+ success rates. Delivery status is available in real-time via the dashboard and delivery webhooks." },
  { question: "Can I send SMS internationally?", answer: "Yes. We support delivery to 190+ countries through direct operator connections and tier-1 aggregators, with automatic route selection based on destination, message type, and cost." },
  { question: "What happens if a WhatsApp or RCS message fails?", answer: "You can configure SMS as an automatic fallback channel. If the primary channel fails or the recipient is unreachable, the message is re-sent over SMS so critical communication is never missed — no extra integration work required." },
  { question: "How is SMS priced?", answer: "Pricing is per message and depends on volume, destination country, and message type (transactional vs promotional). There are no platform or setup fees — you only pay for what you send. Contact sales for volume-based pricing." },
  { question: "Can I personalize messages for each recipient?", answer: "Yes. Templates support dynamic variables like names, amounts, order IDs, and links. Upload a contact list or pass values through the API, and every message is rendered individually before it goes out." },
  { question: "What analytics and logs are available?", answer: "Real-time dashboards for delivery rates, open rates, link clicks, and conversions, plus 90-day searchable message logs. All of it is also available through the reporting API for your own BI tools." },
];

function SmsFaq() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <section className="sms-faq">
      <div className="sms-faq-inner">
        <div className="sms-faq-eyebrow">FAQ</div>
        <h2>Frequently Asked Questions</h2>
        <p className="sms-faq-lead">Everything you need to know about sending SMS with Vertex Suite.</p>
        <div className="sms-faq-list">
          {smsFaqs.map(({ question, answer }, index) => (
            <div className={`sms-faq-item${openFaq === index ? " open" : ""}`} key={question}>
              <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span>{question}</span>
                {openFaq === index ? <Minus size={17} strokeWidth={2.5} /> : <Plus size={17} strokeWidth={2.5} />}
              </button>
              <div className="sms-faq-answer"><p>{answer}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SMS() {
  return (
    <main className="sms-page">
      <section className="sms-hero">
        <div className="sms-glow sms-glow-left" /><div className="sms-glow sms-glow-right" />
        <div className="sms-hero-inner">
          <div className="sms-copy">
            <div className="sms-eyebrow"><span />SMS BUSINESS MESSAGING</div>
            <h1>The Universal<br />Channel to <span>Reach<br />Every Customer</span></h1>
            <p className="sms-lead">Deliver critical communications and high-converting promotions through the most reliable messaging channel on the planet — no internet, no app, no barriers.</p>
            <div className="sms-actions"><Link id="start-building" href="/contact-sales" className="sms-btn sms-btn-primary">Start Building</Link><Link href="/book-demo" className="sms-btn sms-btn-secondary">Request a Demo</Link></div>
            <div className="sms-stats" aria-label="SMS business messaging statistics"><div><strong>5B+</strong><span>Global SMS users</span></div><div><strong>98%</strong><span>Open rate</span></div><div><strong>10×</strong><span>More effective than email</span></div></div>
          </div>
          <SmsPhone />
        </div>
      </section>
      <section aria-label="Trusted technology partners" className="sms-partners">
        <p>Trusted by businesses worldwide</p>
        <div className="sms-partners-viewport">
          <div className="sms-partners-grid">
            <div className="sms-partner"><span className="sms-meta-mark">∞</span><span><strong>Meta</strong><small>Business Partner</small></span></div>
            <div className="sms-partner"><span className="sms-salesforce">salesforce</span><strong>PARTNER</strong></div>
            <div className="sms-partner"><span className="sms-nvidia-mark">◉</span><span><strong>NVIDIA</strong><small>INCEPTION PROGRAM</small></span></div>
            <div className="sms-partner"><span className="sms-cloud-mark">☁</span><strong>Google Cloud</strong></div>
            <div className="sms-partner"><strong className="sms-aws">aws<i /></strong></div>
            <div className="sms-partner"><span className="sms-ms-mark"><i /><i /><i /><i /></span><span><strong>Microsoft</strong><small>Solutions Partner</small></span></div>
            <div className="sms-partner" aria-hidden="true"><span className="sms-meta-mark">∞</span><span><strong>Meta</strong><small>Business Partner</small></span></div>
            <div className="sms-partner" aria-hidden="true"><span className="sms-salesforce">salesforce</span><strong>PARTNER</strong></div>
            <div className="sms-partner" aria-hidden="true"><span className="sms-nvidia-mark">◉</span><span><strong>NVIDIA</strong><small>INCEPTION PROGRAM</small></span></div>
            <div className="sms-partner" aria-hidden="true"><span className="sms-cloud-mark">☁</span><strong>Google Cloud</strong></div>
            <div className="sms-partner" aria-hidden="true"><strong className="sms-aws">aws<i /></strong></div>
            <div className="sms-partner" aria-hidden="true"><span className="sms-ms-mark"><i /><i /><i /><i /></span><span><strong>Microsoft</strong><small>Solutions Partner</small></span></div>
          </div>
        </div>
      </section>
      <WhyVertexSms />
      <SmsUseCases />
      <SmsComparison />
      <SmsHowItWorks />
      <SmsFaq />
    </main>
  );
}





