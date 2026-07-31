"use client";

import Link from "../AppLink";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaGlobe,
  FaHeadset,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaWhatsapp,
} from "react-icons/fa";
import { FaMeta, FaSalesforce } from "react-icons/fa6";
import { SiNvidia } from "react-icons/si";
import "./Footer.css";

const footerColumns = [
  {
    title: "Products",
    links: [
      ["WhatsApp Suites", "/products/whatsapp-suites"],
      ["WhatsApp Pay", "/products/whatsapp-payment"],
      ["WhatsApp Chatbot", "/products/whatsapp-chatbot"],
      ["WhatsApp Forms", "/products/whatsapp-forms"],
      ["WhatsApp Business API", "/products/whatsapp-business-api"],
      ["Click-to-WhatsApp Ads", "/products/click-to-whatsapp-ads"],
      ["Messaging APIs", "/products/messaging-apis"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["Social Commerce Suite", "/solutions/social-commerce-suite"],
      ["Marketing Suite", "/solutions/marketing-suite"],
      ["Order & Shipment Suite", "/solutions/order-shipment-suite"],
      ["Inventory Suite", "/solutions/inventory-suite"],
      ["Warehouse Suite", "/solutions/warehouse-suite"],
      ["Billing & Payment Suite", "/solutions/billing-suite"],
      ["Analytics Suite", "/solutions/analytics-suite"],
      ["Comm Channel Suite", "/solutions/communication-channel-suite"],
      ["Office Suite", "/solutions/office-suite"],
      ["Customer Rating Suite", "/solutions/customer-rating-suite"],
    ],
  },
  {
    title: "Legal Support",
    links: [
      ["Help Center", "/help-center"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms & Conditions", "/terms-and-conditions"],
      ["Security", "/security"],
      ["GDPR Compliance", "/gdpr-compliance"],
      ["Sitemap", "/sitemap"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/company/about-us"],
      ["Careers", "/company/careers"],
      ["Partners", "/partners"],
      ["Contact Us", "/contact-sales"],
      ["Pricing", "/pricing"],
      ["Blog", "/resources/blog"],
    ],
  },
];

const stats = [
  { icon: FaPaperPlane, value: "100M+", label: "Messages Delivered" },
  { icon: FaShieldAlt, value: "99.9%", label: "Platform Uptime" },
  { icon: FaUsers, value: "500+", label: "Businesses Trust Us" },
  { icon: FaHeadset, value: "24×7", label: "Priority Support" },
];

const socials = [
  { img: "/assets/images/linkdn.webp", label: "LinkedIn", href: "https://www.linkedin.com/company/vertex-suite/" },
  { img: "/assets/images/ing.webp", label: "Instagram", href: "https://www.instagram.com/vertexsuite/" },
  { img: "/assets/images/fcb.webp", label: "Facebook", href: "https://www.facebook.com/people/Vertex-Suite/100095637273745/" },
  { img: "/assets/images/you.webp", label: "YouTube", href: "https://www.youtube.com/@VertexSuite" },
  { img: "/assets/images/twitter.webp", label: "Twitter", href: "https://twitter.com/VertexSuite" },
];

function Footer() {
  return (
    <>
      <div className="vs-footer-hero-section">
      <div className="vs-footer-hero-shell">
        <section className="vs-footer-hero">
          <div className="vs-footer-hero-copy">
            <h2>
              Ready to Transform <span>Conversations into Conversions?</span>
            </h2>
            <p>
              Launch powerful WhatsApp campaigns, automate engagement,<br className="footer-desktop-break" />
              and grow your business with Vertex Suite.
            </p>
            <div className="vs-footer-actions">
              <Link to="/signup" className="vs-footer-btn vs-footer-btn-primary">
                <FaRocket /> Start Free Demo
              </Link>
              <Link to="/book-demo" className="vs-footer-btn vs-footer-btn-secondary">
                <FaCalendarAlt /> Book Live Demo
              </Link>
            </div>
            <section className="vs-footer-stats" aria-label="Vertex Suite platform statistics">
              {stats.map(({ icon: Icon, value, label }) => (
                <div className="vs-stat" key={label}>
                  <span className="vs-stat-icon"><Icon /></span>
                  <span><strong>{value}</strong><small>{label}</small></span>
                </div>
              ))}
            </section>
          </div>

          <div className="vs-footer-visual" aria-hidden="true">
            <div className="vs-visual-glow" />
            <div className="vs-metric vs-metric-campaign">
              <small>New Campaign</small><strong>15,000</strong><span>Messages Sent</span>
            </div>
            <img src="/assets/images/phone3.webp" alt="" className="vs-footer-phone" />
            <div className="vs-whatsapp-orb"><FaWhatsapp /></div>
            <div className="vs-megaphone">◀</div>
            <div className="vs-metric vs-metric-delivery">
              <small>Delivery Rate</small><strong>98.7%</strong><span className="vs-chart">⌁╱⌁╱</span>
            </div>
            <div className="vs-metric vs-metric-chats">
              <small>Active Chats</small><strong>24,560</strong><span>● ● ● ● &nbsp; +2.3K</span>
            </div>
          </div>
        </section>
      </div>
      </div>

      <footer className="vs-footer">
      <div className="vs-footer-shell">
        <section className="vs-footer-main">
          <div className="vs-footer-trust">
            <div className="vs-footer-trust-brand">
              <img src="/assets/images/logo.png" alt="Vertex Suite" />
              <span className="vs-powered-by">
                <small>Powered by</small>
                <strong>
                  <span>Atmik Bharat</span>
                  <span>(Innovation Workflows)</span>
                </strong>
              </span>
            </div>
            <div className="vs-partner-row">
              <div className="vs-partner vs-meta"><FaMeta /><span><strong>Meta</strong><small>Business Partner</small></span></div>
              <div className="vs-partner vs-salesforce"><FaSalesforce /><strong>PARTNER</strong></div>
            </div>
            <div className="vs-nvidia"><SiNvidia /><strong>NVIDIA</strong><span>INCEPTION PROGRAM</span></div>
            <div className="vs-certifications">
              <div className="vs-cert"><FaShieldAlt /><span><small>CERTIFIED</small><strong>ISO 27001:2022</strong><em>Information Security Management</em></span></div>
              <div className="vs-cert"><FaShieldAlt /><span><small>CERTIFIED</small><strong>ISO 9001:2015</strong><em>Quality Management System</em></span></div>
            </div>

            <div className="vs-contact">
              <h3>Get in Touch</h3>
              <a href="https://maps.google.com/?q=Bhilai+Chhattisgarh+India" target="_blank" rel="noreferrer"><FaMapMarkerAlt /> Bhilai, Chhattisgarh, India</a>
              <a href="tel:+91831901581"><FaPhoneAlt /> +91 83190 1581</a>
              <a href="mailto:hello@vertexsuite.in"><FaEnvelope /> hello@vertexsuite.in</a>
              <a href="https://www.vertexsuite.in" target="_blank" rel="noreferrer"><FaGlobe /> www.vertexsuite.in</a>
            </div>

            <div className="vs-socials">
              {socials.map(({ img, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={`vs-social-${label.toLowerCase()}`}>
                  <img src={img} alt={label} loading="lazy" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav className="vs-footer-column" key={column.title} aria-label={column.title}>
              <h3>{column.title}</h3>
              {column.links.map(([label, path]) => <Link key={label} to={path}>{label}</Link>)}
            </nav>
          ))}
        </section>

        <section className="vs-footer-bottom">
          <a
            className="vs-footer-brand"
            href="https://atmikbharat.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Atmik Bharat"
          >
            <img src="/assets/images/ATB.webp" alt="Atmik Bharat" />
            <strong>ATMIK BHARAT</strong>
          </a>
          <div className="vs-copyright">
            <span>© 2026 Vertex Suite. All rights reserved.</span>
            <small>Empowering Businesses with Intelligent Automation.</small>
          </div>
          <div className="vs-trusted-badge"><FaShieldAlt /> Trusted by <strong>500+</strong> Businesses Across India</div>
        </section>
      </div>
      </footer>
    </>
  );
}

export default Footer;
