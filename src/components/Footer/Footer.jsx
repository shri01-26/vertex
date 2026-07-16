"use client";

import { usePathname } from "next/navigation";
import Link from "../AppLink";
import { FaMeta, FaSalesforce } from "react-icons/fa6";
import { SiNvidia } from "react-icons/si";
import "./Footer.css";
import { ArrowRight, Code2, CalendarDays } from "lucide-react";
import WatermarkTrail from "../WatermarkTrail";


const footerColumns = [
  {
    title: "Products",
    links: [
      "WhatsApp Suites",
      "WhatsApp Pay",
      "WhatsApp Chatbot",
      "WhatsApp Forms",
      "WhatsApp Business API",
      "Click-to-WhatsApp Ads",
      "Messaging APIs",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Social Commerce Suite",
      "Marketing Suite",
      "Order & Shipment Suite",
      "Inventory Suite",
      "Warehouse Suite",
      "Billing & Payment Suite",
      "Analytics Suite",
      "Comm Channel Suite",
      "Office Suite",
      "Customer Rating Suite",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Careers",
      "Partners",
      "Contact Us",
      "Pricing",
      "Blog",
    ],
  },
  {
    title: "Legal & Support",
    links: [
      "Help Center",
      "Privacy Policy",
      "Terms & Conditions",
      "Security",
      "GDPR Compliance",
      "Sitemap",
    ],
  },
];

const partnerDetails = [
  {
    label: "Meta",
    icon: <FaMeta />,
    className: "partner-meta",
  },
  {
    label: "Salesforce",
    icon: <FaSalesforce />,
    className: "partner-salesforce",
  },
  {
    label: "NVIDIA",
    icon: <SiNvidia />,
    className: "partner-nvidia",
  },
];

const footerLinkMap = {
  "WhatsApp Suites": "/products/whatsapp-suites",
  "WhatsApp Pay": "/products/whatsapp-payment",
  "WhatsApp Chatbot": "/products/whatsapp-chatbot",
  "WhatsApp Forms": "/products/whatsapp-forms",
  "Click-to-WhatsApp Ads": "/products/click-to-whatsapp-ads",
  "WhatsApp Business API": "/products/whatsapp-business-api",
  "Messaging APIs": "/products/messaging-apis",

  "Social Commerce Suite": "/solutions/social-commerce-suite",
  "Marketing Suite": "/solutions/marketing-suite",
  "Order & Shipment Suite": "/solutions/order-shipment-suite",
  "Inventory Suite": "/solutions/inventory-suite",
  "Warehouse Suite": "/solutions/warehouse-suite",
  "Billing & Payment Suite": "/solutions/billing-suite",
  "Analytics Suite": "/solutions/analytics-suite",
  "Comm Channel Suite": "/solutions/communication-channel-suite",
  "Office Suite": "/solutions/office-suite",
  "Customer Rating Suite": "/solutions/customer-rating-suite",

  "About Us": "/company/about-us",
  "Careers": "/company/careers",
  "Partners": "/partners",
  "Contact Us": "/contact-sales",
  "Pricing": "/pricing",
  "Blog": "/resources/blog",

  "Help Center": "/help-center",
  "Privacy Policy": "/privacy-policy",
  "Terms & Conditions": "/terms-and-conditions",
  "Security": "/security",
  "GDPR Compliance": "/gdpr-compliance",
  "Sitemap": "/sitemap",
};


function Footer() {
  const pathname = usePathname();
  const isWhatsAppApi = pathname === "/products/whatsapp-business-api";

  const ctaHeading = isWhatsAppApi
    ? "Launch Scalable Conversations with WhatsApp Business API"
    : "Launch Rich Messaging Experiences with RCS";

  const ctaSubtitle = isWhatsAppApi
    ? "Go beyond basic messaging with automation, payments, forms and interactive workflows powered by the Vertex Suite WhatsApp Business API."
    : "Upgrade your customer engagement beyond SMS with interactive messaging powered by the Vertex Suite RCS Platform.";

  return (
    <>
      <div className="footer-container footer-cta-wrapper">
        <section className="footer-cta-section">
          <div className="relative overflow-hidden rounded-[24px] bg-[#eaf4ff] px-8 py-9 text-center shadow-[0_0_34px_rgba(14,165,233,0.12),0_0_60px_rgba(59,130,246,0.07)] max-md:px-5 border border-[#cfe6ff]">
            {/* Glow Border */}
            <div className="pointer-events-none absolute inset-[-2px] -z-10 rounded-[30px] bg-[linear-gradient(90deg,rgba(14,165,233,0.45),rgba(59,130,246,0.3),rgba(11,95,198,0.25))] blur-[20px] opacity-40" />

            <h2 className="mx-auto mb-2 max-w-[980px] text-[clamp(1.85rem,3vw,2.35rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#0b2a4a]">
              {ctaHeading}
            </h2>

            <p className="mx-auto mt-0 max-w-[1180px] text-[1rem] xl:text-[1.05rem] leading-[1.55] !text-[#3a5a78] whitespace-nowrap max-lg:whitespace-normal mb-4">
              {ctaSubtitle}
            </p>

            <div className="flex items-center justify-center gap-5 max-md:flex-col max-md:gap-4">
              {/* Start Building */}
              <Link
                to="/signup"
                className="group relative inline-flex h-[50px] min-w-[210px] items-center overflow-hidden rounded-[10px] border border-[#0B5FC6] bg-[#0B5FC6] transition-all duration-300 hover:shadow-[0_12px_26px_rgba(11,95,198,0.28)]"
              >
                {/* White fill moves left to right on hover */}
                <span className="absolute left-0 top-0 z-0 h-full w-[52px] rounded-[7px] bg-white transition-all duration-500 ease-out group-hover:w-full" />

                {/* Icon */}
                <span className="relative z-20 flex h-full w-[52px] shrink-0 items-center justify-start pl-4 text-[#0B5FC6]">
                  <Code2
                    size={20}
                    strokeWidth={2.4}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-5"
                  />
                </span>

                {/* Text */}
                <span
                  className="relative z-30 flex h-full flex-1 items-center justify-center whitespace-nowrap px-6 text-[1rem] text-white transition-colors duration-300 group-hover:!text-[#0B5FC6]"
                >
                  Start Building
                </span>
              </Link>

              {/* Request a Demo */}
              <Link
                to="/book-demo"
                className="group relative inline-flex h-[50px] min-w-[210px] items-center overflow-hidden rounded-[10px] border border-[#0B5FC6] bg-[#0B5FC6] transition-all duration-300 hover:shadow-[0_12px_26px_rgba(11,95,198,0.28)]"
              >
                {/* White fill moves left to right on hover */}
                <span className="absolute left-0 top-0 z-0 h-full w-[52px] rounded-[7px] bg-white transition-all duration-500 ease-out group-hover:w-full" />

                {/* Icon */}
                <span className="relative z-20 flex h-full w-[52px] shrink-0 items-center justify-start pl-4 text-[#0B5FC6]">
                  <CalendarDays
                    size={20}
                    strokeWidth={2.4}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-5"
                  />
                </span>

                {/* Text */}
                <span
                  className="relative z-30 flex h-full flex-1 items-center justify-center whitespace-nowrap px-6 text-[1rem] text-white transition-colors duration-300 group-hover:!text-[#0B5FC6]"
                >
                  Request a Demo
                </span>
              </Link>

              {/* Talk to Our Team */}
              <Link
                to="/contact"
                className="group relative inline-flex h-[50px] min-w-[210px] items-center overflow-hidden rounded-[10px] border border-[#0B5FC6] bg-[#0B5FC6] transition-all duration-300 hover:shadow-[0_12px_26px_rgba(11,95,198,0.28)]"
              >
                {/* White fill moves left to right on hover */}
                <span className="absolute left-0 top-0 z-0 h-full w-[52px] rounded-[7px] bg-white transition-all duration-500 ease-out group-hover:w-full" />

                {/* Icon */}
                <span className="relative z-20 flex h-full w-[52px] shrink-0 items-center justify-start pl-4 text-[#0B5FC6]">
                  <ArrowRight
                    size={20}
                    strokeWidth={2.4}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-5"
                  />
                </span>

                {/* Text */}
                <span
                  className="relative z-30 flex h-full flex-1 items-center justify-center whitespace-nowrap px-6 text-[1rem] text-white transition-colors duration-300 group-hover:!text-[#0B5FC6]"
                >
                  Talk to Our Team
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-links-grid">

          {/*  */}
          {/* LEFT SECTION */}
          <div className="footer-brand-column">
            <div className="footer-brand-card">
              <div className="footer-partners">
                <strong style={{ color: '#0B5FC6', letterSpacing: '2px', fontSize: '0.694rem', textTransform: 'uppercase', fontWeight: '600' }}>Strategic Partners</strong>
                {partnerDetails.map((partner) => (
                  <div
                    key={partner.label}
                    className={`partner-item ${partner.className}`}
                  >
                    <div className="partner-icon">{partner.icon}</div>
                    <span>{partner.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER LINKS */}

          {footerColumns.map((col) => {
            return (
              <div className="footer-link-column" key={col.title}>
                <div className="footer-links-wrapper">
                  <h5>{col.title}</h5>
                  {col.links.map((link) => (
                    <Link to={footerLinkMap[link] || "/"} key={link}>
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          </div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <span>© 2026 Vertex Suite. All rights reserved.</span>

            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-and-conditions">Terms of Service</Link>
              <Link to="/refund-policy">Refund Policy</Link>
            </div>
          </div>
        </div>

        <WatermarkTrail />
      </footer>
    </>
  );
}

export default Footer;
