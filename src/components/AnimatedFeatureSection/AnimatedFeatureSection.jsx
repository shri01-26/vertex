"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileText,
  ClipboardList,
  BadgeCheck,
  Megaphone,
  MessageCircle,
} from "lucide-react";
import "./AnimatedFeatureSection.css";

const features = [
  {
    title: "Agent Handoff",
    subtitle: "Transfer chats to live agents",
    icon: Users,
    className: "card-agent",
    delay: 0,
  },
  {
    title: "Template Message",
    subtitle: "Send approved message flows",
    icon: FileText,
    className: "card-template",
    delay: 0.15,
  },
  {
    title: "Lead Capture",
    subtitle: "Collect qualified leads",
    icon: ClipboardList,
    className: "card-lead",
    delay: 0.3,
  },
  {
    title: "Verified Business",
    subtitle: "Official & trusted",
    icon: BadgeCheck,
    className: "card-verified",
    delay: 0.45,
  },
  {
    title: "Broadcast Campaigns",
    subtitle: "Reach customers at scale",
    icon: Megaphone,
    className: "card-broadcast",
    delay: 0.6,
  },
  {
    title: "Quick Replies",
    subtitle: "Instant customer responses",
    icon: MessageCircle,
    className: "card-replies",
    delay: 0.75,
  },
];

export default function AnimatedFeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-container">
        <svg
          className="connector-layer"
          viewBox="0 0 1280 860"
          fill="none"
          preserveAspectRatio="none"
          style={{ overflow: "visible" }}
        >
          {/* Agent Handoff -> Template Message (left bracket) */}
          <path
            id="path-1"
            className="connector-path connector-1"
            d="M52 195 H-14 Q-30 195 -30 211 V290 Q-30 306 -14 306 H146 Q162 306 162 322 V448"
          />

          {/* Template Message -> Lead Capture (left) */}
          <path
            id="path-2"
            className="connector-path connector-2"
            d="M152 556 V604 Q152 624 172 624 H212 Q232 624 232 644 V705"
          />

          {/* Broadcast Campaigns -> Quick Replies (down the right, then across) */}
          <path
            id="path-3"
            className="connector-path connector-4"
            d="M1400 513 V918 Q1400 940 1378 940 H1326"
          />

          {/* Verified Business -> Image (left, then down into the image) */}
          <path
            id="path-4"
            className="connector-path connector-5"
            d="M973 -158 H660 Q640 -158 640 -138 V-108"
          />

        </svg>

        {/* Main Image */}
        <motion.div
          className="main-image-box"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/assets/images/1 (1).png"
            alt="WhatsApp Business automation"
            className="main-image"
          />
        </motion.div>

        {/* Feature cards */}
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              className={`feature-card ${item.className}`}
              initial={{ opacity: 0, y: 35, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: item.delay,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.04,
              }}
            >
              <motion.div
                className="card-icon"
                animate={{
                  boxShadow: [
                    "0 10px 24px rgba(18, 199, 111, 0.28)",
                    "0 14px 34px rgba(18, 199, 111, 0.55)",
                    "0 10px 24px rgba(18, 199, 111, 0.28)",
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
              >
                <Icon size={26} strokeWidth={2.5} />
              </motion.div>

              <div className="feature-text">
                <p className="feature-title">{item.title}</p>

                <div className="skeleton-lines">
                  <span></span>
                  <span className="short"></span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
