import {
  Briefcase,
  Headphones,
  Layers,
  Mail,
  MessageSquare,
  MousePointerClick,
  Phone,
  Rocket,
  Shield,
  Zap,
} from "lucide-react";

export const productDropdownData = {
  "WhatsApp Suites": [
    { title: "WhatsApp Business APi", desc: "Automate outbound campaigns", icon: Zap, path: "/products/whatsapp-business-api" },
    { title: "WhatsApp Pay", desc: "In-chat checkout experiences", icon: Briefcase, path: "/products/whatsapp-payment" },
    { title: "WhatsApp Chatbot", desc: "Scale support instantly", icon: Headphones, path: "/products/whatsapp-chatbot" },
    { title: "WhatsApp Broadcast", desc: "Reach thousands instantly", icon: MessageSquare, path: "/products/whatsapp-broadcast" },
    { title: "WhatsApp Forms", desc: "Structured data collection", icon: Layers, path: "/products/whatsapp-forms" },
    { title: "WhatsApp Marketing", desc: "Official API for customer messaging", icon: MessageSquare, path: "/products/whatsapp-marketing" },
    { title: "WhatsApp Button", desc: "One-tap chat from anywhere", icon: MousePointerClick, path: "/products/whatsapp-button" },
  ],
  "Advertising & APIs": [
    { title: "Click-to-WhatsApp Ads", desc: "Ads that start conversations", icon: Rocket, path: "/products/ctwa-ads" },
    { title: "Messaging APIs", desc: "Scale with programmable messaging", icon: MessageSquare, path: "/products/messaging-apis" },
    { title: "Voice APIs", desc: "Interactive voice experiences", icon: Phone, path: "/products/voice-apis" },
    { title: "Verification APIs", desc: "Secure multi-factor auth", icon: Shield, path: "/products/verification-apis" },
  ],
  Channels: [
    { title: "SMS", desc: "Reliable global delivery", icon: MessageSquare, path: "/products/sms" },
    { title: "RCS", desc: "Rich interactive messaging", icon: Layers, path: "/products/rcs" },
    { title: "Email APIs", desc: "Reliable email delivery", icon: Mail, path: "/products/email-apis" },
  ],
};
