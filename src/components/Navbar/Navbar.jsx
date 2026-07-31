import { useState, useEffect } from "react";
import Link from "../AppLink";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Globe,
  Menu,
  X,
  MessageSquare,
  Phone,
  Video,
  Mail,
  Zap,
  Shield,
  Layers,
  Users,
  Code2,
  BookOpen,
  Headphones,
  Briefcase,
  Building,
  Rocket,
  Star,
} from "lucide-react";

import "./Navbar.css";
import { productDropdownData } from "../../content/productDropdownData";

const navItems = ["Products", "Solutions", "Developers", "Partners", "Resources", "Pricing"];

const navLinkMap = {
  Products: "/products",
  Solutions: "/solutions",
  Developers: "/developers",
  Partners: "/partners",
  Resources: "/resources",
  Pricing: "/pricing",
};

const dropdownData = {
  Products: productDropdownData,
  Solutions: {
    "Industry Suites": {
      items: [
        { title: "Social Commerce Suite", desc: "Conversational commerce", icon: Briefcase, path: "/solutions/social-commerce-suite", comingSoon: true },
        { title: "Marketing Suite", desc: "Deep AI marketing engine", icon: Zap, path: "/solutions/marketing-suite", comingSoon: true },
        { title: "Communication Channel Suite", desc: "Unified messaging console", icon: Layers, path: "/solutions/communication-channel-suite", comingSoon: true },
        { title: "Office Suite", desc: "Connected workplace operations", icon: Building, path: "/solutions/office-suite", comingSoon: true },
        { title: "Customer Rating Suite", desc: "Feedback and experience intelligence", icon: Users, path: "/solutions/customer-rating-suite", comingSoon: true },
        { title: "Order & Shipment Suite", desc: "Logistics automation", icon: Building, path: "/solutions/order-shipment-suite", comingSoon: true },
        { title: "Inventory Suite", desc: "Autonomous management", icon: Code2, path: "/solutions/inventory-suite", comingSoon: true },
        { title: "Warehouse & Multi-Vendor Suite", desc: "Supply chain orchestration", icon: Building, path: "/solutions/warehouse-suite", comingSoon: true },
        { title: "Billing & Payment Suite", desc: "Financial automation", icon: Briefcase, path: "/solutions/billing-suite", comingSoon: true },
        { title: "Analytics Suite", desc: "AI-powered business insights", icon: Layers, path: "/solutions/analytics-suite", comingSoon: true },
      ],
      thumbnails: [
        { label: "Commerce", icon: Briefcase },
        { label: "Marketing", icon: Zap },
        { label: "Office", icon: Building },
        { label: "Analytics", icon: Layers },
      ],
    },
  },
  Developers: {
    Documentation: {
      items: [
        { title: "Messaging", desc: "API guides for messaging", icon: Code2, path: "/developers/messaging", comingSoon: true },
        { title: "Voice & Video", desc: "Call flows and WebRTC", icon: Video, path: "/developers/voice-and-video", comingSoon: true },
        { title: "Email", desc: "Transactional email setup", icon: Mail, path: "/developers/email", comingSoon: true },
        { title: "Verification", desc: "Identity and OTP guides", icon: Shield, path: "/developers/verification", comingSoon: true },
        { title: "Numbers & Connectivity", desc: "Global numbers and SIP docs", icon: Phone, path: "/developers/numbers-and-connectivity", comingSoon: true },
      ],
      thumbnails: [
        { label: "Messaging", icon: Code2 },
        { label: "Voice & Video", icon: Video },
        { label: "Verification", icon: Shield },
      ],
    },
    Community: {
      items: [
        { title: "Developer Forum", desc: "Connect with builders", icon: Users, path: "/developers/developer-forum", comingSoon: true },
        { title: "Knowledge Center", desc: "In-depth articles", icon: BookOpen, path: "/developers/knowledge-center", comingSoon: true },
      ],
      thumbnails: [
        { label: "Forum", icon: Users },
        { label: "Knowledge", icon: BookOpen },
      ],
    },
  },
  Partners: {
    "Partner Program": {
      items: [
        { title: "About Partners", desc: "Grow together with us", icon: Users, path: "/partners/about-partners", comingSoon: true },
        { title: "Become a Partner", desc: "Unlock growth opportunities", icon: Rocket, path: "/partners/become-a-partner", comingSoon: true },
        { title: "Find a Partner", desc: "Locate authorized partners", icon: Globe, path: "/partners/find-a-partner", comingSoon: true },
        { title: "Strategic Partners", desc: "Global collaboration ecosystem", icon: Briefcase, path: "/partners/strategic-partners", comingSoon: true },
      ],
      thumbnails: [
        { label: "Become a Partner", icon: Rocket },
        { label: "Find a Partner", icon: Globe },
        { label: "Strategic", icon: Briefcase },
      ],
    },
    Integrations: {
      items: [
        { title: "Shopify", desc: "Commerce integration", icon: Briefcase, path: "/partners/shopify", comingSoon: true },
        { title: "HubSpot", desc: "CRM workflow integration", icon: Layers, path: "/partners/hubspot", comingSoon: true },
        { title: "SAP", desc: "Enterprise integration", icon: Building, path: "/partners/sap", comingSoon: true },
        { title: "Adobe", desc: "Experience cloud integration", icon: Code2, path: "/partners/adobe", comingSoon: true },
      ],
      thumbnails: [
        { label: "Shopify", icon: Briefcase },
        { label: "HubSpot", icon: Layers },
        { label: "SAP", icon: Building },
      ],
    },
  },
  Resources: {
    Learn: {
      items: [
        { title: "Blog", desc: "Latest news and trends", icon: BookOpen, path: "/resources/blog", comingSoon: true },
        { title: "Guides", desc: "In-depth tutorials and how-tos", icon: BookOpen, path: "/resources/guides", comingSoon: true },
        { title: "Customer Stories", desc: "Real customer success case studies", icon: Users, path: "/resources/customer-stories", comingSoon: true },
      ],
      thumbnails: [
        { label: "Blog", icon: BookOpen },
        { label: "Guides", icon: BookOpen },
        { label: "Stories", icon: Users },
      ],
    },
  },
};

const brandColors = [
  { main: "#0b5fc6", bg: "rgba(11, 95, 198, 0.05)" },
];

// Items flagged with `comingSoon` in the dropdown data stay visible but are not clickable.
const COMING_SOON_LABEL = "Coming Soon";

const normalizeDropdownGroup = (group) => {
  if (Array.isArray(group)) {
    return { items: group, thumbnails: [] };
  }

  return {
    items: group?.items || [],
    thumbnails: group?.thumbnails || [],
    heading: group?.heading,
    feature: group?.feature,
  };
};

const getGroupHeading = (navItem, category, group) => {
  if (group.heading) return group.heading;
  if (!category) return navItem;
  if (navItem === "Products" && category.includes("WhatsApp")) return "Build with WhatsApp";
  if (navItem === "Solutions") return "Explore Vertex Suites";
  if (navItem === "Developers") return "Build on Vertex APIs";
  if (navItem === "Partners") return "Grow with Vertex Partners";
  if (navItem === "Resources") return "Learn with Vertex";
  return category;
};

const getFeatureCopy = (navItem, category, group, items) => {
  const featuredItem = group.feature || items[0] || {};
  const categoryLabel = (category || navItem).replace(/&/g, "and");

  return {
    eyebrow: group.feature?.eyebrow || (navItem === "Products" ? "Featured Suite" : `Featured ${navItem.slice(0, -1) || navItem}`),
    title: featuredItem.title || category,
    desc:
      featuredItem.desc ||
      `Explore ${categoryLabel.toLowerCase()} tools designed for faster customer engagement and connected operations.`,
    path: featuredItem.path || navLinkMap[navItem] || "/",
    comingSoon: Boolean(featuredItem.comingSoon),
  };
};

const getItemBadge = (title) => {
  if (/chatbot/i.test(title)) return "Popular";
  if (/flows|forms|rcs/i.test(title)) return "New";
  return null;
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", mobileMenuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [mobileMenuOpen]);

  return (
    <header className={`synthesia-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="synthesia-container">
        <div className="synthesia-pill">
          <div className="synthesia-left">
            <Link to="/" className="synthesia-brand" onClick={() => setMobileMenuOpen(false)}>
              <img src="/assets/images/logo.png" alt="Vertex Suite" className="navbar-logo-img" />
            </Link>
          </div>

          <div className="synthesia-center">
            <nav className="synthesia-nav hidden xl:flex">
              <Link
                to="/"
                className="synthesia-nav-link synthesia-home-link"
                onClick={() => setActiveDropdown(null)}
              >
                Home
              </Link>

              {navItems.map((item) => {
                const hasDropdown = dropdownData[item];
                const categories = hasDropdown ? Object.keys(hasDropdown) : [];
                const currentCategory = activeDropdown === item ? (activeCategory || categories[0]) : categories[0];
                const currentData = hasDropdown ? normalizeDropdownGroup(hasDropdown[currentCategory]) : normalizeDropdownGroup(null);
                const currentItems = currentData.items;
                const feature = getFeatureCopy(item, currentCategory, currentData, currentItems);
                const featureVisuals = (currentData.thumbnails.length ? currentData.thumbnails : currentItems).slice(0, 4);
                const megaStyle = {
                  "--mega-columns": 2,
                };

                return (
                  <div
                    key={item}
                    className="nav-item-wrapper"
                    onMouseEnter={() => {
                      if (hasDropdown) {
                        setActiveDropdown(item);
                        setActiveCategory(categories[0]);
                      } else {
                        setActiveDropdown(null);
                      }
                    }}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {hasDropdown ? (
                      // Items with a mega-dropdown only open the panel; they have no page of their own.
                      <button
                        type="button"
                        className={`synthesia-nav-link synthesia-nav-trigger ${activeDropdown === item ? "active" : ""}`}
                        aria-expanded={activeDropdown === item}
                      >
                        {item}
                        <ChevronDown size={14} className="chevron-icon" />
                      </button>
                    ) : (
                      <Link to={navLinkMap[item] || "/"} className="synthesia-nav-link">
                        {item}
                      </Link>
                    )}

                    {activeDropdown === item && hasDropdown && (
                      <div className="synthesia-mega-dropdown full-width" style={megaStyle}>
                        <div className="mega-panes">
                          <div className="mega-sidebar">
                            {categories.map((category) => (
                              <button
                                key={category}
                                type="button"
                                className={`mega-sidebar-item ${currentCategory === category ? "active" : ""}`}
                                onMouseEnter={() => setActiveCategory(category)}
                              >
                                {category}
                                <ChevronRight size={15} className="mega-sidebar-arrow" />
                              </button>
                            ))}
                          </div>

                          <div className="mega-content">
                            <div className="mega-content-heading">
                              <h5>{getGroupHeading(item, currentCategory, currentData)}</h5>
                              <span />
                            </div>
                            <div className="mega-content-grid">
                              {currentItems.map((subItem, sIdx) => {
                                const Icon = subItem.icon;
                                const color = brandColors[sIdx % brandColors.length];
                                const badge = subItem.comingSoon ? COMING_SOON_LABEL : getItemBadge(subItem.title);
                                const cardInner = (
                                  <>
                                    <div className="mega-card-icon" style={{ "--icon-color": color.main, "--icon-bg": color.bg }}>
                                      <Icon size={20} />
                                    </div>
                                    <div className="mega-card-content">
                                      <strong className="mega-title" style={{ "--hover-color": color.main }}>
                                        <span>{subItem.title}</span>
                                        {badge && <em className={subItem.comingSoon ? "coming-soon-tag" : undefined}>{badge}</em>}
                                      </strong>
                                      {subItem.desc && <p>{subItem.desc}</p>}
                                    </div>
                                  </>
                                );

                                if (subItem.comingSoon) {
                                  return (
                                    <div
                                      key={subItem.title}
                                      className="mega-card mega-card-disabled"
                                      aria-disabled="true"
                                      title={COMING_SOON_LABEL}
                                    >
                                      {cardInner}
                                    </div>
                                  );
                                }

                                return (
                                  <Link key={subItem.title} to={subItem.path} className="mega-card" onClick={() => setActiveDropdown(null)}>
                                    {cardInner}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          <aside className="mega-feature-panel">
                            <div className="mega-feature-copy">
                              <p className="mega-feature-eyebrow">
                                <Star size={18} />
                                {feature.eyebrow}
                              </p>
                              <h4>{feature.title}</h4>
                              <p>{feature.desc}</p>
                            </div>

                            <div className="mega-feature-visual" aria-hidden="true">
                              <div className="mega-feature-icons">
                                {featureVisuals.map((visual, visualIdx) => {
                                  const VisualIcon = visual.icon;
                                  return (
                                    <span key={visual.label || visual.title} style={{ "--visual-delay": `${visualIdx * 90}ms` }}>
                                      <VisualIcon size={24} />
                                    </span>
                                  );
                                })}
                              </div>
                              <div className="mega-feature-preview">
                                <div className="mega-feature-product">
                                  <span />
                                  <div>
                                    <i />
                                    <i />
                                    <strong>{currentItems.length ? currentItems.length : 1} tools</strong>
                                  </div>
                                </div>
                                <div className="mega-feature-stat">
                                  <small>Ready to launch</small>
                                  <strong>{currentCategory.split(" ")[0]}</strong>
                                </div>
                              </div>
                            </div>

                            {feature.comingSoon ? (
                              <span className="mega-feature-link mega-feature-link-disabled" aria-disabled="true">
                                {COMING_SOON_LABEL}
                              </span>
                            ) : (
                              <Link to={feature.path} className="mega-feature-link" onClick={() => setActiveDropdown(null)}>
                                Explore Suite
                                <ArrowRight size={20} />
                              </Link>
                            )}
                          </aside>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="synthesia-right-actions hidden xl:flex items-center gap-3">
          <Link to="/login" className="nav-action-link">Login</Link>
          <Link to="/book-demo" className="nav-demo-btn">Request a Demo</Link>
        </div>

        <button className="mobile-menu-toggle xl:hidden p-2 text-slate-700" onClick={() => setMobileMenuOpen((prev) => !prev)} aria-label="Toggle mobile menu" type="button">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <div className="mobile-nav-links">
            <Link
              to="/"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Home</span>
              <ChevronRight size={20} />
            </Link>

            {navItems.map((item) => {
              const hasDropdown = dropdownData[item];
              const isExpanded = expandedMobileItem === item;
              return (
                <div className="mobile-nav-group" key={item}>
                  {hasDropdown ? (
                    <button className="mobile-nav-link mobile-nav-button" type="button" onClick={() => setExpandedMobileItem((prev) => (prev === item ? null : item))}>
                      <span>{item}</span>
                      <ChevronDown className={isExpanded ? "mobile-chevron rotated" : "mobile-chevron"} size={20} />
                    </button>
                  ) : (
                    <Link to={navLinkMap[item] || "/"} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                      <span>{item}</span>
                      <ChevronRight size={20} />
                    </Link>
                  )}

                  {hasDropdown && isExpanded && (
                    <div className="mobile-submenu">
                      <Link to={navLinkMap[item] || "/"} className="mobile-submenu-link mobile-submenu-parent" onClick={() => setMobileMenuOpen(false)}>
                        View all {item}
                      </Link>
                      {Object.entries(hasDropdown).map(([category, group]) => {
                        const links = normalizeDropdownGroup(group).items;
                        return (
                        <div className="mobile-submenu-block" key={category}>
                          <p>{category}</p>
                          {links.map((subItem) =>
                            subItem.comingSoon ? (
                              <span className="mobile-submenu-link mobile-submenu-disabled" key={subItem.title} aria-disabled="true">
                                {subItem.title}
                                <em className="coming-soon-tag">{COMING_SOON_LABEL}</em>
                              </span>
                            ) : (
                              <Link to={subItem.path} className="mobile-submenu-link" key={subItem.title} onClick={() => setMobileMenuOpen(false)}>
                                {subItem.title}
                              </Link>
                            )
                          )}
                        </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mobile-menu-footer">
            <Link to="/login" className="mobile-footer-link" onClick={() => setMobileMenuOpen(false)}>Login</Link>
            <Link to="/book-demo" className="mobile-btn-primary" onClick={() => setMobileMenuOpen(false)}>
              <CalendarDays size={20} strokeWidth={2.4} />
              <span>Request a Demo</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
