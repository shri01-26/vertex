"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, animate } from "framer-motion";
import { FaFacebookF, FaRobot, FaWhatsapp } from "react-icons/fa";
import { MdOutlinePayments, MdSms } from "react-icons/md";
import {
  Sparkles,
  ShoppingBag,
  Landmark,
  Truck,
  Building2,
  Wallet,
  Plane,
  Stethoscope,
  GraduationCap,
  LayoutGrid,
  Workflow,
  MessagesSquare,
  Gauge,
} from "lucide-react";
import ScrollExperience from "../../components/experience/ScrollExperience";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=100",
    eyebrow: "Unified Business Platform",
    title: "Build connected customer journeys from one platform.",
    description:
      "Bring communication, automation, analytics, and team workflows together to create faster and more meaningful customer experiences.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2400&q=100",
    eyebrow: "Intelligent Automation",
    title: "Turn repetitive processes into automated journeys.",
    description:
      "Automate customer alerts, lead follow-ups, support requests, campaigns, and internal workflows without constant manual effort.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=100",
    eyebrow: "Real-Time Business Insights",
    title: "Understand every interaction and improve every outcome.",
    description:
      "Track conversations, campaign performance, customer engagement, and operational results through one connected analytics layer.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=100",
    eyebrow: "Connected Team Workflows",
    title: "Help every team work with the same customer context.",
    description:
      "Connect marketing, sales, support, operations, and management through shared data, automated workflows, and clear visibility.",
  },
];

const highlights = [
  "Unified communication",
  "Workflow automation",
  "Real-time analytics",
];

const showcaseCards = [
  {
    category: "Platform",
    eyebrow: "Vertex Suite Platform",
    title: "Vertex Suite Platform",
    description:
      "All-in-one growth platform for connected customer communication, workflows, and business visibility.",
    statOne: "All-in-one",
    statOneLabel: "growth platform",
    statTwo: "Unified",
    statTwoLabel: "business dashboard",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=95",
    background: "#EAF6FF",
  },
  {
    category: "Communication",
    eyebrow: "Communication Suite",
    title: "Communication Suite",
    description:
      "Unified messaging console to manage conversations and customer replies from one workspace.",
    statOne: "Unified",
    statOneLabel: "messaging console",
    statTwo: "Live",
    statTwoLabel: "customer conversations",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=95",
    background: "#F1F4FF",
  },
  {
    category: "Marketing",
    eyebrow: "Marketing Suite",
    title: "Marketing Suite",
    description:
      "Campaigns, broadcasts, and growth automation for high-volume customer outreach.",
    statOne: "32.8K",
    statOneLabel: "sent",
    statTwo: "Growth",
    statTwoLabel: "automation workflows",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=95",
    background: "#FFF7DA",
  },
  {
    category: "Analytics",
    eyebrow: "Analytics Suite",
    title: "Analytics Suite",
    description:
      "AI-powered business insights with clean reporting for performance and operational trends.",
    statOne: "AI-powered",
    statOneLabel: "business insights",
    statTwo: "Live",
    statTwoLabel: "analytics charts",
    image:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1400&q=95",
    background: "#FFF0E9",
  },
  {
    category: "Customer Rating",
    eyebrow: "Customer Rating Suite",
    title: "Customer Rating Suite",
    description:
      "Feedback and experience intelligence to understand customer sentiment and service quality.",
    statOne: "+26",
    statOneLabel: "customer responses",
    statTwo: "+25",
    statTwoLabel: "experience signals",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1400&q=95",
    background: "#EFFFF6",
  },
  {
    category: "Billing",
    eyebrow: "Billing & Payment Suite",
    title: "Billing & Payment Suite",
    description:
      "Payments, invoices, and checkout workflows with clear transaction status visibility.",
    statOne: "Rs 2,540.00",
    statOneLabel: "paid",
    statTwo: "Checkout",
    statTwoLabel: "payment workflows",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1400&q=95",
    background: "#EDF7FF",
  },
  {
    category: "Orders",
    eyebrow: "Order & Shipment Suite",
    title: "Order & Shipment Suite",
    description:
      "Orders, delivery, and logistics automation for connected fulfillment operations.",
    statOne: "Orders",
    statOneLabel: "delivery tracking",
    statTwo: "Logistics",
    statTwoLabel: "automation workflows",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=95",
    background: "#F4F1FF",
  },
  {
    category: "Broadcasts",
    eyebrow: "Marketing Suite",
    title: "Marketing Suite",
    description:
      "Campaigns, broadcasts, and growth automation with real-time campaign progress.",
    statOne: "68%",
    statOneLabel: "campaign progress",
    statTwo: "Broadcasts",
    statTwoLabel: "growth automation",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=95",
    background: "#FFF6E8",
  },
  {
    category: "Office",
    eyebrow: "Office Suite",
    title: "Office Suite",
    description:
      "Connected workplace operations to coordinate teams, tasks, and internal activity.",
    statOne: "Connected",
    statOneLabel: "workplace operations",
    statTwo: "Workflow",
    statTwoLabel: "team activity",
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1400&q=95",
    background: "#EAFBFA",
  },
  {
    category: "Social Commerce",
    eyebrow: "Social Commerce Suite",
    title: "Social Commerce Suite",
    description:
      "Sell across social channels and manage commerce journeys across Instagram, Facebook, and WhatsApp.",
    statOne: "Social",
    statOneLabel: "commerce channels",
    statTwo: "Sell",
    statTwoLabel: "across social channels",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=95",
    background: "#F3F7FF",
  },
];


const certificationTopRow = [
  {
    badge: "ISO",
    badgeCode: "20000-1:2018",
    title: "ISO 20000-1:2018",
    text: "IT Service Management Excellence",
    badgeColor: "#84B6D8",
  },
  {
    badge: "ISO",
    badgeCode: "27001:2022",
    title: "ISO 27001:2022",
    text: "Advanced Information Security Governance",
    badgeColor: "#1A5B91",
  },
  {
    badge: "ISO",
    badgeCode: "42001:2023",
    title: "ISO 42001:2023",
    text: "Responsible Artificial Intelligence Management",
    badgeColor: "#195A91",
  },
  {
    badge: "ISO",
    badgeCode: "27018:2019",
    title: "ISO 27018:2019",
    text: "Cloud Privacy Protection Excellence",
    badgeColor: "#7AB7DA",
  },
  {
    badge: "CMMI",
    badgeCode: "LEVEL 3",
    title: "CMMI Level 3 Certification",
    text: "Mature Software Development Processes",
    badgeColor: "#5879A0",
  },
];

const certificationBottomRow = [
  {
    badge: "PSM I",
    badgeCode: "Scrum.org",
    title: "Professional Scrum Master I",
    text: "Agile Scrum Leadership Expertise",
    badgeColor: "#82AFC4",
  },
  {
    badge: "PSM II",
    badgeCode: "Scrum.org",
    title: "Professional Scrum Master II",
    text: "Advanced Scrum Leadership Excellence",
    badgeColor: "#337B9C",
  },
  {
    badge: "PSPO I",
    badgeCode: "Scrum.org",
    title: "Professional Scrum Product Owner I",
    text: "Product Value Management Expertise",
    badgeColor: "#8BAE48",
  },
  {
    badge: "PSPO II",
    badgeCode: "Scrum.org",
    title: "Professional Scrum Product Owner II",
    text: "Advanced Product Leadership",
    badgeColor: "#AAC77A",
  },
  {
    badge: "SAFe",
    badgeCode: "AGILIST",
    title: "SAFe Agilist Certification",
    text: "Scaled Agile Delivery Expertise",
    badgeColor: "#397BA5",
  },
];



const messagingSolutions = [
  {
    title: "WhatsApp Business API",
    description:
      "Build trust, engage customers, and grow your brand with WhatsApp Business API.",
    accent: "#DFF4E8",
    panel:
      "linear-gradient(135deg, #F9FFFB 0%, #E4F7EC 55%, #D7F2E5 100%)",
    glow:
      "radial-gradient(circle at 20% 20%, rgba(122,214,164,0.32), transparent 42%)",
    badge: "WA",
    link: "/products/whatsapp-business-api",
    type: "whatsapp",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=95",
    imagePosition: "center",
  },
  {
    title: "RCS Messaging",
    description:
      "Rich media and guided responses create an app-like experience right in the user's SMS inbox.",
    accent: "#E4EEFF",
    panel:
      "linear-gradient(135deg, #FBFDFF 0%, #E7EEFF 55%, #DDE8FF 100%)",
    glow:
      "radial-gradient(circle at 20% 20%, rgba(127,160,255,0.30), transparent 42%)",
    badge: "RCS",
    link: "/products/rcs",
    type: "rcs",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=95",
    imagePosition: "center",
  },
  {
    title: "Bulk SMS",
    description:
      "Send instant, reliable, and high-volume messages for alerts, promotions and transactional updates.",
    accent: "#F1E7FF",
    panel:
      "linear-gradient(135deg, #FDFCFF 0%, #EEE7FF 55%, #E7DDFD 100%)",
    glow:
      "radial-gradient(circle at 20% 20%, rgba(180,130,255,0.26), transparent 42%)",
    badge: "SMS",
    link: "/products/sms",
    type: "sms",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=95",
    imagePosition: "center",
  },
  {
    title: "AI Automation",
    description:
      "Automate conversations, workflows, and support with intelligent AI-driven agents.",
    accent: "#FFECDD",
    panel:
      "linear-gradient(135deg, #FFFDFC 0%, #FDECDD 55%, #F9E1D0 100%)",
    glow:
      "radial-gradient(circle at 20% 20%, rgba(255,174,117,0.28), transparent 42%)",
    badge: "AI",
    link: "/products/ai-automation",
    type: "ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=95",
    imagePosition: "center",
  },
];



const technologyStacks = [
  {
    category: "Web (Frontend and Backend)",
    count: 16,
    title: "Web (Frontend and Backend)",
    summary:
      "Modern, responsive, and scalable web experiences built for customer-facing journeys and operational platforms.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Java",
      ".NET",
      "PHP",
      "Go",
      "Vue.js",
      "Angular",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    category: "Cloud",
    count: 5,
    title: "Cloud Infrastructure",
    summary:
      "Reliable cloud architecture designed for secure deployments, elastic scaling, and resilient business operations.",
    tags: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "DigitalOcean",
      "Cloudflare",
    ],
  },
  {
    category: "Database",
    count: 9,
    title: "Database",
    summary:
      "Flexible transactional and analytical data systems that keep business information structured, available, and connected.",
    tags: [
      "MySQL",
      "SQLite",
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "Azure SQL Database",
      "Amazon RDS",
      "Amazon S3",
      "Google Cloud SQL",
    ],
  },
  {
    category: "Big Data",
    count: 15,
    title: "Big Data & Intelligence",
    summary:
      "High-volume data processing and analytics foundations for reporting, event streams, and operational intelligence.",
    tags: [
      "Apache Spark",
      "Hadoop",
      "Kafka",
      "Databricks",
      "Snowflake",
      "Redshift",
      "BigQuery",
      "Elasticsearch",
      "Flink",
      "Presto",
      "Airflow",
      "Data Lakes",
      "ETL Pipelines",
      "Stream Processing",
      "Business Intelligence",
    ],
  },
  {
    category: "Machine Learning",
    count: 19,
    title: "AI & Machine Learning",
    summary:
      "Applied AI systems for intelligent automation, predictive insights, personalization, and conversational experiences.",
    tags: [
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "Keras",
      "XGBoost",
      "LangChain",
      "Hugging Face",
      "Pandas",
      "NumPy",
      "LLMs",
      "RAG",
      "NLP",
      "Computer Vision",
      "Predictive Models",
      "Recommendation Systems",
      "AI Agents",
      "Speech-to-Text",
      "Vector Databases",
    ],
  },
  {
    category: "DevOps",
    count: 22,
    title: "DevOps & Engineering",
    summary:
      "Automated delivery, monitoring, and infrastructure workflows that help teams release reliably and scale confidently.",
    tags: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana",
      "Nginx",
      "Linux",
      "CI/CD",
      "Microservices",
      "Load Balancing",
      "API Gateway",
      "Observability",
      "Sentry",
      "Redis",
      "RabbitMQ",
      "Security Scanning",
      "Automated Testing",
      "Release Management",
    ],
  },
];


const industries = [
  {
    title: "Retail & D2C",
    description: "Automate product discovery, orders, support, and returns.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=92",
    imagePosition: "center",
    position: "left-top",
    compact: true,
  },
  {
    title: "Government Services",
    description: "Digitize citizen queries, applications, updates, and service delivery.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=92",
    imagePosition: "center",
    position: "left-middle",
    compact: true,
  },
  {
    title: "Logistics",
    description: "Automate shipment updates, delivery coordination, and exceptions.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=92",
    imagePosition: "center",
    position: "left-bottom",
    compact: true,
  },
  {
    title: "Real Estate",
    description: "Capture leads, qualify buyers, schedule visits, and move deals faster.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=92",
    imagePosition: "center",
    position: "bottom-left",
    compact: true,
  },
  {
    title: "Finance",
    description: "Handle KYC, account queries, alerts, collections, and customer support.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=92",
    imagePosition: "center",
    position: "bottom-right",
  },
  {
    title: "Travel & Hospitality",
    description: "Manage bookings, itinerary updates, guest requests, and service support.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=92",
    imagePosition: "center",
    position: "right-bottom",
  },
  {
    title: "Healthcare",
    description: "Coordinate appointments, care reminders, reports, and patient support.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=92",
    imagePosition: "center",
    position: "right-middle",
  },
  {
    title: "Education",
    description: "Manage admissions, reminders, student support, and campus updates.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=92",
    imagePosition: "center",
    position: "right-top",
  },
];

const industryFeatures = [
  "Omnichannel Conversations",
  "Workflow Automation",
  "Real-time Intelligence",
  "Secure & Compliant",
  "Scalable by Design",
];

function DraggableShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursor, setCursor] = useState({
    visible: false,
    x: 0,
    y: 0,
    label: "Drag",
  });
  const pointerStartX = useRef(null);
  const pointerActive = useRef(false);
  const shuffleLocked = useRef(false);

  const totalCards = showcaseCards.length;

  const getWrappedIndex = (index) => {
    return (index + totalCards) % totalCards;
  };

  const goToCard = (index) => {
    setActiveIndex(getWrappedIndex(index));
  };

  const shuffleToRelativeCard = (direction) => {
    if (shuffleLocked.current) {
      return;
    }

    shuffleLocked.current = true;
    setActiveIndex((currentIndex) => getWrappedIndex(currentIndex + direction));

    window.setTimeout(() => {
      shuffleLocked.current = false;
    }, 360);
  };

  const handlePointerDown = (event) => {
    pointerStartX.current = event.clientX;
    pointerActive.current = true;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const isOverCard = Boolean(event.target.closest?.("[data-showcase-card='true']"));

    setCursor({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      label: isOverCard ? "Click to view" : "Drag",
    });

    if (!pointerActive.current || pointerStartX.current === null || shuffleLocked.current) {
      return;
    }

    const distance = event.clientX - pointerStartX.current;

    if (Math.abs(distance) < 58) {
      return;
    }

    pointerStartX.current = event.clientX;
    shuffleToRelativeCard(distance < 0 ? 1 : -1);
  };

  const handlePointerEnd = () => {
    pointerActive.current = false;
    pointerStartX.current = null;
  };

  const handlePointerLeave = () => {
    handlePointerEnd();
    setCursor((currentCursor) => ({
      ...currentCursor,
      visible: false,
    }));
  };

  const visibleCards = [-2, -1, 0, 1, 2];

  const placements = {
    "-2": {
      x: "-215%",
      y: 245,
      rotate: -26,
      scale: 1,
      opacity: 0,
      zIndex: 1,
    },
    "-1": {
      x: "-126%",
      y: 118,
      rotate: -20,
      scale: 1,
      opacity: 1,
      zIndex: 4,
    },
    "0": {
      x: "0%",
      y: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
    },
    "1": {
      x: "126%",
      y: 118,
      rotate: 20,
      scale: 1,
      opacity: 1,
      zIndex: 4,
    },
    "2": {
      x: "215%",
      y: 245,
      rotate: 26,
      scale: 1,
      opacity: 0,
      zIndex: 1,
    },
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F7FAFF_48%,#EEF5FF_100%)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-20">
      <div className="pointer-events-none absolute -left-48 top-20 h-[460px] w-[460px] rounded-full bg-[#DFF1FF] blur-[150px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-[#E8F4FF] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1900px]">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#071B4D] sm:text-[48px] lg:text-[58px]">
            One Platform for Every Business Suite.
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-[15px] font-medium leading-7 text-[#61708B] sm:text-[17px]">
            Explore connected suites for communication, marketing, analytics,
            billing, orders, office workflows, and social commerce.
          </p>
        </div>

        {/*
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous card"
            onClick={goPrevious}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D5E2F3] bg-white text-[20px] text-[#071B4D] shadow-[0_10px_28px_rgba(7,27,77,0.07)] transition duration-300 hover:-translate-x-1 hover:border-[#038FDF] hover:text-[#038FDF]"
          >
            ←
          </button>

          <div className="scrollbar-hide flex max-w-[1050px] gap-2 overflow-x-auto rounded-full border border-[#DCE7F5] bg-white/90 p-2 shadow-[0_14px_36px_rgba(7,27,77,0.06)] backdrop-blur">
            {showcaseCards.map((card, index) => (
              <button
                key={card.category}
                type="button"
                onClick={() => goToCard(index)}
                className={`shrink-0 rounded-full px-5 py-3 text-[12px] font-extrabold transition duration-300 ${
                  activeIndex === index
                    ? "bg-[#071B4D] text-white shadow-[0_10px_24px_rgba(7,27,77,0.2)]"
                    : "bg-transparent text-[#66758D] hover:bg-[#F0F6FF] hover:text-[#038FDF]"
                }`}
              >
                {card.category}
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next card"
            onClick={goNext}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D5E2F3] bg-white text-[20px] text-[#071B4D] shadow-[0_10px_28px_rgba(7,27,77,0.07)] transition duration-300 hover:translate-x-1 hover:border-[#038FDF] hover:text-[#038FDF]"
          >
            →
          </button>
        </div>
        */}

        {/* Cards stage */}
        <div className="relative mt-14 h-[640px] select-none sm:h-[700px] lg:h-[760px]">
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            onPointerLeave={handlePointerLeave}
            className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
          >
            {visibleCards.map((position) => {
              const cardIndex = getWrappedIndex(activeIndex + position);
              const card = showcaseCards[cardIndex];
              const isActive = position === 0;

              return (
                <motion.article
                  data-showcase-card="true"
                  key={cardIndex}
                  initial={false}
                  animate={placements[String(position)]}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 22,
                    mass: 1.1,
                  }}
                  onClick={() => {
                    if (!isActive) {
                      goToCard(cardIndex);
                    }
                  }}
                  className="absolute left-1/2 top-0 h-[500px] w-[290px] -translate-x-1/2 cursor-pointer overflow-hidden rounded-[22px] border border-white shadow-[0_32px_85px_rgba(7,27,77,0.14)] sm:h-[540px] sm:w-[380px] lg:h-[545px] lg:w-[460px]"
                  style={{
                    backgroundColor: card.background,
                    transformOrigin: "center center",
                  }}
                >
                  <div className="flex h-full flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#038FDF] sm:text-[11px]">
                          {card.eyebrow}
                        </p>

                        <h3 className="mt-3 text-[25px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#071B4D] sm:text-[31px]">
                          {card.title}
                        </h3>
                      </div>

                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] border border-white bg-white/90 text-[13px] font-extrabold text-[#038FDF] shadow-sm">
                        {String(cardIndex + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-5 text-[14px] font-medium leading-7 text-[#53627C] sm:text-[15px]">
                      {card.description}
                    </p>

                    <div className="mt-7 grid grid-cols-2 gap-5">
                      <div>
                        <p className="text-[24px] font-extrabold tracking-[-0.035em] text-[#071B4D]">
                          {card.statOne}
                        </p>

                        <p className="mt-2 max-w-[145px] text-[12px] font-semibold leading-5 text-[#63708A]">
                          {card.statOneLabel}
                        </p>
                      </div>

                      <div>
                        <p className="text-[24px] font-extrabold tracking-[-0.035em] text-[#071B4D]">
                          {card.statTwo}
                        </p>

                        <p className="mt-2 max-w-[145px] text-[12px] font-semibold leading-5 text-[#63708A]">
                          {card.statTwoLabel}
                        </p>
                      </div>
                    </div>

                    <div className="relative mt-auto overflow-hidden rounded-[24px] bg-white shadow-[0_18px_42px_rgba(7,27,77,0.1)]">
                      <img
                        src={card.image}
                        alt={card.title}
                        draggable={false}
                        className="h-[170px] w-full object-cover sm:h-[195px]"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div
            className={`pointer-events-none fixed z-[80] hidden h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#071B4D]/90 px-4 text-center text-[10px] font-extrabold uppercase leading-tight tracking-[0.12em] text-white shadow-[0_18px_42px_rgba(7,27,77,0.24)] backdrop-blur-md transition-opacity duration-200 lg:flex ${
              cursor.visible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: cursor.x,
              top: cursor.y,
            }}
          >
            {cursor.label}
          </div>

          {/* Drag indicator */}
          <div className="pointer-events-none absolute left-1/2 top-[53%] z-20 hidden h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-[#071B4D]/88 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_18px_45px_rgba(7,27,77,0.24)] backdrop-blur-md">
            Drag
          </div>
        </div>

        <div className="mt-1 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#C8D7EB]" />

          <p className="text-center text-[12px] font-semibold text-[#73819A]">
            Drag or swipe the cards to explore all capabilities
          </p>

          <span className="h-px w-10 bg-[#C8D7EB]" />
        </div>
      </div>
    </section>
  );
}


function CertificationBadge({ item }) {
  return (
    <div
      className="certificate-badge relative flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full border-[5px] bg-white shadow-[0_3px_10px_rgba(7,27,77,0.08)]"
      style={{ borderColor: `${item.badgeColor}45` }}
    >
      <div
        className="absolute inset-[7px] rounded-full border"
        style={{ borderColor: item.badgeColor }}
      />

      <div className="relative z-10 text-center">
        <p
          className="certificate-badge-title text-[13px] font-extrabold leading-none"
          style={{ color: item.badgeColor }}
        >
          {item.badge}
        </p>

        <p className="certificate-badge-code mt-1 max-w-[55px] text-[6px] font-bold leading-tight text-[#68758A]">
          {item.badgeCode}
        </p>
      </div>
    </div>
  );
}

function CertificationCard({ item }) {
  return (
    <article className="certificate-card flex h-[112px] w-[390px] shrink-0 items-center gap-5 overflow-hidden rounded-[18px] bg-[#F8FAFC]/90 px-7 shadow-[0_8px_24px_rgba(7,27,77,0.035)] backdrop-blur-sm">
      <CertificationBadge item={item} />

      <div className="min-w-0 flex-1 overflow-hidden">
        <h3 className="certificate-card-title text-[15px] font-extrabold leading-[1.25] text-[#566176]">
          {item.title}
        </h3>

        <p className="certificate-card-text mt-1 max-w-[245px] text-[14px] font-medium leading-[1.35] text-[#8992A1]">
          {item.text}
        </p>
      </div>
    </article>
  );
}

function CertificationMarqueeSection() {
  const topCards = [
    ...certificationTopRow,
    ...certificationTopRow,
    ...certificationTopRow,
  ];

  const bottomCards = [
    ...certificationBottomRow,
    ...certificationBottomRow,
    ...certificationBottomRow,
  ];

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden py-1">
        <div className="relative overflow-hidden py-1">
          <div className="certificate-edge-fade certificate-edge-left" />
          <div className="certificate-edge-fade certificate-edge-right" />

          <div className="certificate-track certificate-track-left flex w-max gap-7" style={{ animation: "certificateMoveLeft 18s linear infinite" }}>
            {topCards.map((item, index) => (
              <CertificationCard
                key={`top-${item.title}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-7 overflow-hidden py-1">
          <div className="certificate-edge-fade certificate-edge-left" />
          <div className="certificate-edge-fade certificate-edge-right" />

          <div className="certificate-track certificate-track-right flex w-max gap-7" style={{ animation: "certificateMoveRight 18s linear infinite" }}>
            {bottomCards.map((item, index) => (
              <CertificationCard
                key={`bottom-${item.title}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



function MessagingCardVisual({ card }) {
  return (
    <div className="relative h-[180px] overflow-hidden rounded-[22px] border border-white/80 bg-[#EEF4FA] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_16px_34px_rgba(15,23,42,0.10)]">
      <img
        src={card.image}
        alt={card.title}
        draggable={false}
        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.08]"
        style={{ objectPosition: card.imagePosition }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,20,48,0.02)_0%,rgba(5,20,48,0.12)_58%,rgba(5,20,48,0.72)_100%)]" />

      <div className="pointer-events-none absolute -left-10 top-0 h-[150px] w-[70px] rotate-[24deg] bg-white/28 blur-[2px]" />
      <div className="pointer-events-none absolute left-16 top-0 h-[130px] w-[28px] rotate-[24deg] bg-white/18" />

      <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/75 bg-white/86 px-2.5 py-2 shadow-[0_8px_24px_rgba(7,27,77,0.12)] backdrop-blur-md">
        <span
          className="flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-[10px] font-extrabold tracking-[0.04em] text-[#0A2148]"
          style={{ backgroundColor: card.accent }}
        >
          {card.badge}
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-end">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/18 text-[18px] text-white backdrop-blur-md transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white/28">
          ↗
        </span>
      </div>
    </div>
  );
}


const physicsIconTypes = [
  {
    Icon: FaWhatsapp,
    label: "WhatsApp",
    iconClass: "text-[#20C363]",
    chip: "bg-[#EAFBF1]",
  },
  {
    Icon: FaFacebookF,
    label: "Facebook",
    iconClass: "text-[#1877F2]",
    chip: "bg-[#ECF4FF]",
  },
  {
    Icon: FaRobot,
    label: "Chatbot",
    iconClass: "text-[#6D28D9]",
    chip: "bg-[#F2ECFF]",
  },
  {
    Icon: Sparkles,
    label: "AI",
    iconClass: "text-[#7C3AED]",
    chip: "bg-[#F5EEFF]",
  },
  {
    Icon: MdSms,
    label: "SMS",
    iconClass: "text-[#EA580C]",
    chip: "bg-[#FFF1E8]",
  },
  {
    Icon: FaWhatsapp,
    SecondaryIcon: MdOutlinePayments,
    label: "WhatsApp Pay",
    iconClass: "text-[#0B5FC6]",
    chip: "bg-[#EDF5FF]",
  },
];

function MessagingIconPhysicsPlayground() {
  const stageRef = useRef(null);
  const iconRefs = useRef([]);
  const bodiesRef = useRef([]);
  const hasStartedRef = useRef(false);
  const pointerRef = useRef({
    active: false,
    id: null,
    index: null,
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
  });

  const iconItems = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        ...physicsIconTypes[index % physicsIconTypes.length],
        id: `falling-icon-${index}`,
        radius: 26 + ((index * 7) % 12),
      })),
    [],
  );

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    let frameId = 0;
    let width = 0;
    let height = 0;
    let running = false;

    const resetBodies = () => {
      const rect = stage.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      bodiesRef.current = iconItems.map((item, index) => {
        const row = Math.floor(index / 7);
        const spawnRatio = ((index * 137) % 1000) / 1000;
        const availableWidth = Math.max(1, width - item.radius * 2 - 16);

        return {
          x: item.radius + 8 + spawnRatio * availableWidth,
          y: -90 - row * 74 - ((index * 31) % 95),
          vx: ((index % 5) - 2) * 0.75,
          vy: 0,
          radius: item.radius,
          rotation: (index % 2 === 0 ? -1 : 1) * (8 + (index % 7) * 5),
          angularVelocity: ((index % 5) - 2) * 0.14,
        };
      });
    };

    const resizeObserver = new ResizeObserver(resetBodies);
    resizeObserver.observe(stage);
    resetBodies();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStartedRef.current) return;

        hasStartedRef.current = true;
        running = true;
        resetBodies();
      },
      { threshold: 0.12 },
    );

    observer.observe(stage);

    const applyPointer = () => {
      const pointer = pointerRef.current;
      if (!pointer.active || pointer.index === null) return;

      const body = bodiesRef.current[pointer.index];
      if (!body) return;

      body.vx = (pointer.x - pointer.prevX) * 0.72;
      body.vy = (pointer.y - pointer.prevY) * 0.72;
      body.x += (pointer.x - body.x) * 0.45;
      body.y += (pointer.y - body.y) * 0.45;
      body.rotation += body.vx * 0.18;
    };

    const resolveBounds = (body) => {
      const bounce = 0.42;
      const floorFriction = 0.84;

      if (body.x < body.radius) {
        body.x = body.radius;
        body.vx = Math.abs(body.vx) * bounce;
      }

      if (body.x > width - body.radius) {
        body.x = width - body.radius;
        body.vx = -Math.abs(body.vx) * bounce;
      }

      if (body.y > height - body.radius) {
        body.y = height - body.radius;
        body.vy = -Math.abs(body.vy) * bounce;
        body.vx *= floorFriction;
        body.angularVelocity *= 0.9;
      }

      if (body.y < body.radius && body.vy < 0) {
        body.y = body.radius;
        body.vy = Math.abs(body.vy) * bounce;
      }
    };

    const resolveCollisions = () => {
      const bodies = bodiesRef.current;

      for (let i = 0; i < bodies.length; i += 1) {
        for (let j = i + 1; j < bodies.length; j += 1) {
          const first = bodies[i];
          const second = bodies[j];
          const dx = second.x - first.x;
          const dy = second.y - first.y;
          const minDistance = first.radius + second.radius + 3;
          const distance = Math.hypot(dx, dy) || 0.001;

          if (distance >= minDistance) continue;

          const overlap = minDistance - distance;
          const nx = dx / distance;
          const ny = dy / distance;
          const firstDragging = pointerRef.current.index === i;
          const secondDragging = pointerRef.current.index === j;
          const firstShare = firstDragging ? 0.08 : secondDragging ? 0.92 : 0.5;
          const secondShare = secondDragging ? 0.08 : firstDragging ? 0.92 : 0.5;

          first.x -= nx * overlap * firstShare;
          first.y -= ny * overlap * firstShare;
          second.x += nx * overlap * secondShare;
          second.y += ny * overlap * secondShare;

          const relativeVx = second.vx - first.vx;
          const relativeVy = second.vy - first.vy;
          const impulse = (relativeVx * nx + relativeVy * ny) * 0.34;

          first.vx += impulse * nx;
          first.vy += impulse * ny;
          second.vx -= impulse * nx;
          second.vy -= impulse * ny;
          first.angularVelocity -= impulse * 0.04;
          second.angularVelocity += impulse * 0.04;
        }
      }
    };

    const tick = () => {
      const pointer = pointerRef.current;
      const bodies = bodiesRef.current;

      if (!running) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      applyPointer();

      bodies.forEach((body, index) => {
        if (pointer.index !== index) {
          body.vy += 0.36;
          body.vx *= 0.994;
          body.vy *= 0.996;
          body.x += body.vx;
          body.y += body.vy;
          body.rotation += body.angularVelocity + body.vx * 0.04;
        }

        resolveBounds(body);
      });

      resolveCollisions();

      bodies.forEach((body, index) => {
        resolveBounds(body);
        const node = iconRefs.current[index];
        if (node) {
          node.style.transform = `translate3d(${body.x - body.radius}px, ${body.y - body.radius}px, 0) rotate(${body.rotation}deg)`;
        }
      });

      pointer.prevX = pointer.x;
      pointer.prevY = pointer.y;
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      observer.disconnect();
    };
  }, [iconItems]);

  const getLocalPointer = (event) => {
    const rect = stageRef.current.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const handlePointerDown = (event, index) => {
    const point = getLocalPointer(event);
    pointerRef.current = {
      active: true,
      id: event.pointerId,
      index,
      x: point.x,
      y: point.y,
      prevX: point.x,
      prevY: point.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const pointer = pointerRef.current;
    if (!pointer.active || pointer.id !== event.pointerId) return;

    const point = getLocalPointer(event);
    pointer.x = point.x;
    pointer.y = point.y;
  };

  const handlePointerUp = (event) => {
    const pointer = pointerRef.current;
    if (pointer.id !== event.pointerId) return;

    pointer.active = false;
    pointer.id = null;
    pointer.index = null;
  };

  return (
    <div
      ref={stageRef}
      className="relative h-full w-full touch-none overflow-hidden"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {iconItems.map((item, index) => {
        const Icon = item.Icon;
        const SecondaryIcon = item.SecondaryIcon;
        const size = item.radius * 2;

        return (
          <button
            key={item.id}
            ref={(node) => {
              iconRefs.current[index] = node;
            }}
            type="button"
            aria-label={item.label}
            onPointerDown={(event) => handlePointerDown(event, index)}
            className="absolute left-0 top-0 z-10 grid cursor-grab place-items-center rounded-full border border-white/90 bg-white/86 shadow-[0_16px_38px_rgba(11,95,198,0.16)] backdrop-blur-xl active:cursor-grabbing"
            style={{
              height: size,
              width: size,
              transform: "translate3d(-120px, -120px, 0)",
            }}
          >
            <span className={`relative grid h-[74%] w-[74%] place-items-center rounded-full ${item.chip} ${item.iconClass}`}>
              <Icon className="h-[54%] w-[54%]" aria-hidden="true" />
              {SecondaryIcon ? (
                <span className="absolute -bottom-1 -right-1 grid h-[40%] w-[40%] place-items-center rounded-full border border-white bg-white text-[#0B5FC6] shadow-sm">
                  <SecondaryIcon className="h-[62%] w-[62%]" aria-hidden="true" />
                </span>
              ) : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function MessagingSolutionsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative isolate min-h-[660px] overflow-visible bg-[linear-gradient(180deg,#FFFFFF_0%,#F2F8FF_52%,#EAF4FF_100%)] px-5 pb-32 pt-12 sm:px-8 sm:pb-36 lg:px-12 lg:pb-40 lg:pt-14 xl:px-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[980px] -translate-x-1/2 rounded-full bg-[#CFEAFF]/65 blur-[145px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#DDF3FF] blur-[145px]" />
      <div className="pointer-events-none absolute -right-40 top-28 h-[430px] w-[430px] rounded-full bg-[#EEE4FF] blur-[150px]" />
      <div className="absolute inset-x-0 top-[115px] bottom-0 z-[1]">
        <MessagingIconPhysicsPlayground />
      </div>

      <div className="pointer-events-none relative z-10 mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-[920px] text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CCE5FA] bg-white/82 px-4 py-2 shadow-[0_10px_30px_rgba(11,95,198,0.08)] backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#038FDF] opacity-45" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#038FDF]" />
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#038FDF] sm:text-[11px]">
              Interactive Messaging Ecosystem
            </span>
          </div>

          <h2 className="mt-5 text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#071B4D] sm:text-[46px] lg:text-[58px]">
            One Platform for Business Messaging &amp; Automation
          </h2>

          <p className="mx-auto mt-5 max-w-[820px] text-[15px] font-medium leading-7 text-[#4F6683] sm:text-[17px]">
            Manage WhatsApp API, RCS, SMS, payments, social conversations, and
            AI-powered workflows through one connected business ecosystem.
          </p>
        </motion.div>

        <div className="relative mt-[70px] sm:mt-[90px] lg:mt-[105px]">
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4 xl:items-center">
            {messagingSolutions.map((card, index) => {
              const isHovered = hoveredCard === index;
              const anotherCardHovered = hoveredCard !== null && !isHovered;

              return (
                <motion.article
                  key={card.title}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  animate={{
                    y: isHovered ? -18 : 0,
                    scale: isHovered ? 1.075 : anotherCardHovered ? 0.96 : 1,
                    opacity: anotherCardHovered ? 0.76 : 1,
                    zIndex: isHovered ? 20 : 2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 230,
                    damping: 22,
                    mass: 0.8,
                  }}
                  className="group pointer-events-auto relative min-h-[480px] overflow-hidden rounded-[26px] border border-white/90 bg-transparent p-4 shadow-[0_20px_54px_rgba(12,30,66,0.10)] backdrop-blur-xl"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at top left, ${card.accent} 0%, transparent 47%)`,
                    }}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <MessagingCardVisual card={card} />

                    <div className="flex flex-1 flex-col items-center px-2 pb-2 pt-6 text-center">
                      <div
                        role="heading"
                        aria-level={3}
                        className="[font-family:Manrope,sans-serif] text-[20px] font-extrabold not-italic leading-[1.2] tracking-normal text-[#0A2148]"
                      >
                        {card.title}
                      </div>

                      <p className="mt-4 [font-family:Manrope,sans-serif] text-[15px] font-medium not-italic leading-7 tracking-normal text-[#5F6E86]">
                        {card.description}
                      </p>

                      <Link
                        href={card.link}
                        className="mx-auto mt-auto inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[#D5E7F8] bg-white/92 px-4 py-2 [font-family:Manrope,sans-serif] text-[13px] font-extrabold not-italic tracking-normal text-[#0E6BDE] shadow-sm transition duration-300 group-hover:border-[#AFCFFF] group-hover:bg-white"
                      >
                        Learn More
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          ›
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologiesSection() {
  const [activeTech, setActiveTech] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveTech((current) => (current + 1) % technologyStacks.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const activeItem = technologyStacks[activeTech];
  const progress = ((activeTech + 1) / technologyStacks.length) * 100;

  return (
    <section
      className="relative mb-12 overflow-hidden bg-[linear-gradient(135deg,#F8FCFF_0%,#EAF5FF_38%,#DDF2FF_72%,#F4EAFF_100%)] px-5 py-14 sm:mb-14 sm:px-8 sm:py-16 lg:mb-16 lg:px-12 lg:py-[72px] xl:px-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-[380px] w-[380px] rounded-full bg-[#BFDFFF]/55 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-10 h-[460px] w-[460px] rounded-full bg-[#BDEEFF]/50 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-[360px] w-[860px] -translate-x-1/2 rounded-full bg-[#E9DAFF]/48 blur-[160px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,95,198,0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(11,95,198,0.24) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1540px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="max-w-[940px]"
        >
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0B5FC6] sm:text-[12px]">
            Technologies
          </p>

          <h2 className="mt-3 text-[32px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#071B4D] sm:text-[42px] lg:text-[52px]">
            <span className="text-[#0B5FC6]">Technologies</span> that Power
            Digital Revolution
          </h2>

          <p className="mt-4 max-w-[900px] text-[14px] font-medium leading-7 text-[#3C5878] sm:text-[16px]">
            We build on modern technology stacks, combining proven frameworks
            and intelligent tools to deliver enterprise-grade performance,
            scalability, security, and long-term engineering flexibility.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-5 lg:grid-cols-[0.78fr_3px_1.28fr] lg:gap-6">
          <div className="overflow-hidden rounded-[18px] border border-[#CBE4FF] bg-white/72 px-4 shadow-[0_16px_44px_rgba(11,95,198,0.10),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur sm:px-5">
            {technologyStacks.map((item, index) => {
              const isActive = index === activeTech;

              return (
                <button
                  key={item.category}
                  type="button"
                  onClick={() => setActiveTech(index)}
                  className="group relative flex w-full items-center justify-between border-b border-[#DCEBFA] py-3.5 text-left last:border-b-0 sm:py-4"
                >
                  <span
                    className={`pr-4 text-[14px] font-extrabold leading-snug transition duration-300 sm:text-[16px] ${
                      isActive
                        ? "translate-x-1 text-[#071B4D]"
                        : "text-[#6280A3] group-hover:translate-x-1 group-hover:text-[#163A66]"
                    }`}
                  >
                    {item.category}
                  </span>

                  <div className="flex shrink-0 items-center gap-4">
                    <span
                      className={`flex h-7 min-w-[34px] items-center justify-center rounded-[7px] border px-2 text-[12px] font-bold transition duration-300 ${
                        isActive
                          ? "border-[#0B5FC6]/35 bg-[#E7F3FF] text-[#0B5FC6]"
                          : "border-[#CBE4FF] bg-white/70 text-[#5D7898]"
                      }`}
                    >
                      {item.count}
                    </span>

                    <motion.span
                      animate={{
                        x: isActive ? 0 : -8,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="text-[20px] text-[#0B5FC6]"
                    >
                      →
                    </motion.span>
                  </div>

                  <motion.span
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.35 }}
                    className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left bg-[#0B5FC6] shadow-[0_0_14px_rgba(11,95,198,0.35)]"
                  />
                </button>
              );
            })}
          </div>

          <div className="relative hidden overflow-hidden rounded-full bg-[#CBE4FF] lg:block">
            <motion.div
              animate={{ height: `${progress}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 22 }}
              className="absolute left-0 top-0 w-full rounded-full bg-[#0B5FC6] shadow-[0_0_18px_rgba(11,95,198,0.35)]"
            />
          </div>

          <div className="relative h-[470px] overflow-hidden rounded-[22px] border border-[#CBE4FF] bg-[linear-gradient(145deg,rgba(255,255,255,0.96)_0%,rgba(238,247,255,0.94)_48%,rgba(224,241,255,0.94)_100%)] p-5 shadow-[0_24px_70px_rgba(11,95,198,0.14)] sm:h-[430px] sm:p-6 lg:h-[410px] lg:p-7">
            <div className="pointer-events-none absolute -right-16 -top-20 h-[230px] w-[230px] rounded-full bg-[#47BFFF]/24 blur-[90px]" />
            <div className="pointer-events-none absolute bottom-[-100px] left-[-80px] h-[220px] w-[220px] rounded-full bg-[#D9C8FF]/32 blur-[100px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.category}
                initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex h-full min-h-0 flex-col"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0B5FC6]">
                      Stack {String(activeTech + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-[22px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#071B4D] sm:text-[27px]">
                      {activeItem.title}
                    </h3>
                  </div>

                  <span className="rounded-full border border-[#CBE4FF] bg-white/80 px-3 py-1 text-[10px] font-bold text-[#0B5FC6]">
                    {activeItem.count} tools
                  </span>
                </div>

                <p className="mt-2 max-w-[720px] text-[12px] font-medium leading-5 text-[#4D6685] sm:text-[13px]">
                  {activeItem.summary}
                </p>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.045 },
                    },
                  }}
                  className="mt-4 flex flex-wrap content-start gap-1.5"
                >
                  {activeItem.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={{
                        hidden: { opacity: 0, y: 9, scale: 0.96 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                      }}
                      transition={{ duration: 0.24 }}
                      whileHover={{ y: -3, scale: 1.03 }}
                      className="cursor-default rounded-[7px] border border-[#CBE4FF] bg-white/82 px-2 py-1 text-[10px] font-semibold leading-none text-[#17446F] shadow-[0_6px_16px_rgba(11,95,198,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors duration-300 hover:border-[#47BFFF]/80 hover:bg-[#F2FAFF] sm:text-[11px]"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="mt-auto flex shrink-0 flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href="/contact-sales"
                    className="inline-flex h-[44px] items-center justify-center gap-2 self-start rounded-[10px] bg-white px-5 text-[13px] font-extrabold text-[#16304C] no-underline shadow-[0_12px_24px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-1 hover:text-[#0A6CCB]"
                  >
                    Technologies We Master
                    <span>↗</span>
                  </Link>

                  <div className="flex items-center gap-2">
                    {technologyStacks.map((item, index) => (
                      <button
                        key={item.category}
                        type="button"
                        aria-label={`Show ${item.category}`}
                        onClick={() => setActiveTech(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeTech === index
                            ? "w-8 bg-[#0B5FC6]"
                            : "w-2 bg-[#B7D6F4] hover:bg-[#7DBCEF]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


const statHighlights = [
  { Icon: LayoutGrid, prefix: "", number: 10, suffix: "+", label: "Industry Suites" },
  { Icon: Workflow, prefix: "", number: 50, suffix: "+", label: "Smart Automation Workflows" },
  { Icon: MessagesSquare, prefix: "", number: 1, suffix: "M+", label: "Customer Conversations Managed" },
  { Icon: Gauge, prefix: "", number: 98, suffix: "%", label: "Message Delivery Rate" },
];

function CountUpValue({ value, prefix, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView || !ref.current) return undefined;

    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        node.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, value, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

function StatsSection() {
  return (
    <section className="relative mb-12 overflow-hidden bg-[linear-gradient(135deg,#F8FCFF_0%,#EEF7FF_46%,#F7FAFF_100%)] px-5 py-14 sm:mb-14 sm:px-8 sm:py-16 lg:mb-16 lg:px-12 lg:py-[72px] xl:px-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#DCEEFF]/60 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1240px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-[28px] font-extrabold leading-[1.14] tracking-[-0.035em] text-[#071B4D] sm:text-[36px] lg:text-[44px]"
        >
          Powering Smarter Customer
          <br className="hidden sm:block" /> Conversations at Scale
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-4 max-w-[640px] text-[14px] font-medium leading-6 text-[#4D6685] sm:text-[16px]"
        >
          One platform for campaigns, support, automation, and AI-powered
          engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 overflow-hidden rounded-[26px] border border-[#CBE4FF] bg-white/70 shadow-[0_20px_54px_rgba(11,95,198,0.10),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur sm:mt-14"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(11,95,198,0.10) 1px, transparent 1px)",
              backgroundSize: "25% 100%",
            }}
          />

          <div className="relative z-10 grid grid-cols-2 divide-y divide-[#D9EBFF] lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {statHighlights.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col items-center gap-3 px-4 py-8 text-center sm:py-10"
              >
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#CBE4FF] bg-[linear-gradient(180deg,#F2F9FF_0%,#E4F2FF_100%)] text-[#0B5FC6] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#8FC4FF] group-hover:shadow-[0_10px_22px_rgba(11,95,198,0.18)]">
                  <stat.Icon size={20} strokeWidth={2.1} />
                </span>

                <p className="text-[30px] font-extrabold leading-none tracking-[-0.03em] text-[#071B4D] sm:text-[38px] lg:text-[42px]">
                  <CountUpValue value={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
                </p>

                <p className="max-w-[160px] text-[11.5px] font-semibold uppercase tracking-[0.04em] text-[#5D7898] sm:text-[12.5px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IndustryNode({ industry, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.58, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group flex items-center gap-4"
    >
      <div className="relative shrink-0">
        <div
          className={`absolute left-1/2 top-[72%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#93D7FF_0%,#D9F1FF_44%,rgba(255,255,255,0)_75%)] opacity-95 blur-[3px] ${
            industry.compact ? "h-[16px] w-[96px]" : "h-[20px] w-[120px]"
          }`}
        />
        <div
          className={`absolute left-1/2 top-[73%] -translate-x-1/2 rounded-full border border-[#E1F2FF] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(234,246,255,0.8))] shadow-[0_10px_30px_rgba(43,137,248,0.08)] ${
            industry.compact ? "h-[26px] w-[118px]" : "h-[32px] w-[146px]"
          }`}
        />
        <div
          className={`absolute left-1/2 top-[78%] -translate-x-1/2 rounded-full bg-[#CFEFFF] blur-[5px] ${
            industry.compact ? "h-[9px] w-[86px]" : "h-[11px] w-[106px]"
          }`}
        />

        <div
          className={`relative flex items-center justify-center rounded-[24px] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(241,248,255,0.95)_100%)] shadow-[0_22px_48px_rgba(35,123,214,0.10)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_28px_56px_rgba(35,123,214,0.14)] ${
            industry.compact ? "h-[84px] w-[112px]" : "h-[104px] w-[138px]"
          }`}
        >
          <div className="absolute inset-[8px] rounded-[18px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0)_55%)]" />
          <img
            src={industry.image}
            alt={industry.title}
            draggable={false}
            className={`relative z-10 rounded-[16px] object-cover shadow-[0_12px_24px_rgba(11,76,145,0.12)] transition duration-700 group-hover:scale-[1.05] ${
              industry.compact ? "h-[60px] w-[89px]" : "h-[74px] w-[110px]"
            }`}
            style={{ objectPosition: industry.imagePosition }}
          />
        </div>
      </div>

      <div className={industry.compact ? "min-w-0 max-w-[190px]" : "min-w-0 max-w-[196px]"}>
        <h3 className={`font-extrabold leading-[1.1] tracking-[-0.03em] text-[#071B4D] ${industry.compact ? "text-[13px]" : "text-[15px]"}`}>
          {industry.title}
        </h3>
        <p className={`mt-2 font-medium leading-6 text-[#566C89] ${industry.compact ? "text-[11.5px]" : "text-[12.5px]"}`}>
          {industry.description}{" "}
          <span className="inline-flex h-6 w-6 shrink-0 -translate-y-0.5 items-center justify-center rounded-full border border-[#CDE2F7] bg-white/94 align-middle text-[12px] text-[#2A84F6] shadow-[0_6px_14px_rgba(26,96,188,0.08)] transition duration-300 group-hover:translate-x-1 group-hover:border-[#2A84F6]">
            →
          </span>
        </p>
      </div>
    </motion.div>
  );
}

function IndustriesSection() {
  const desktopNodes = [
    { ...industries[0], style: "left-[2.5%] top-[18%]" },
    { ...industries[1], style: "left-[1.5%] top-[39%]" },
    { ...industries[2], style: "left-[5%] top-[62%]" },
    { ...industries[3], style: "left-[16%] top-[80%]" },
    { ...industries[4], style: "right-[15.5%] top-[80%]" },
    { ...industries[5], style: "right-[3.5%] top-[62%]" },
    { ...industries[6], style: "right-[1.8%] top-[39%]" },
    { ...industries[7], style: "right-[4.8%] top-[18%]" },
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FCFEFF_0%,#F6FBFF_44%,#EFF7FF_100%)] px-5 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(112,208,255,0.12)_0%,rgba(112,208,255,0.05)_28%,rgba(255,255,255,0)_58%)]" />
      <div className="pointer-events-none absolute left-[-12%] top-[36%] h-[420px] w-[560px] rounded-full border border-[#EBF4FD] opacity-60" />
      <div className="pointer-events-none absolute right-[-10%] top-[36%] h-[420px] w-[560px] rounded-full border border-[#EBF4FD] opacity-60" />
      <div className="pointer-events-none absolute left-[-10%] top-[39%] h-[300px] w-[520px] rounded-full border border-[#EEF6FD] opacity-55" />
      <div className="pointer-events-none absolute right-[-9%] top-[39%] h-[300px] w-[520px] rounded-full border border-[#EEF6FD] opacity-55" />
      <div className="pointer-events-none absolute left-[-8%] top-[18%] h-[360px] w-[360px] rounded-full bg-[#ECF7FF] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-8%] top-[16%] h-[360px] w-[360px] rounded-full bg-[#F0F3FF] blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(28,126,235,0.28) 1px, transparent 1.35px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1640px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-[980px] text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8E7F8] bg-white/88 px-4 py-2 shadow-[0_10px_28px_rgba(14,108,210,0.06)] backdrop-blur-md">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EEF6FF] text-[13px] text-[#0B72E7]">⌘</span>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#0B72E7] sm:text-[11px]">Industries We Serve</span>
          </div>

          <h2 className="mt-5 text-[36px] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#071B4D] sm:text-[50px] lg:text-[66px]">
            Built for Every Industry
            <br />
            That Runs on <span className="bg-[linear-gradient(90deg,#2A7FFF_0%,#58BFFF_100%)] bg-clip-text text-transparent">Conversations</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[860px] text-[15px] font-medium leading-7 text-[#536B89] sm:text-[17px] sm:leading-8">
            Vertex automates conversations, workflows, and customer interactions across industries,
            driving efficiency, compliance, and exceptional experiences.
          </p>
        </motion.div>

        <div className="relative mt-14 hidden min-h-[980px] lg:block">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ hidden: {}, visible: {} }}
            className="absolute left-1/2 top-[44%] z-20 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="absolute inset-0 rounded-full border border-[#E1EDFB]" />

            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            >
              {[
                { Icon: ShoppingBag, angle: 135, color: "#EA4C89" },
                { Icon: Landmark, angle: 180, color: "#7C3AED" },
                { Icon: Truck, angle: 225, color: "#F5A524" },
                { Icon: Building2, angle: 270, color: "#0EA5E9" },
                { Icon: Wallet, angle: 315, color: "#16A34A" },
                { Icon: Plane, angle: 0, color: "#2563EB" },
                { Icon: Stethoscope, angle: 45, color: "#EF4444" },
                { Icon: GraduationCap, angle: 90, color: "#F97316" },
              ].map(({ Icon, angle, color }, index) => {
                const radius = 205;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = -Math.sin(rad) * radius;

                return (
                  <div
                    key={angle}
                    className="absolute left-1/2 top-1/2 z-30"
                    style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.5, delay: index * 0.35, type: "spring", stiffness: 180, damping: 16 },
                        },
                      }}
                    >
                      <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E4EEF9] bg-white shadow-[0_14px_30px_rgba(20,90,180,0.12)]"
                        style={{ color }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon size={22} strokeWidth={2.1} />
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            <div className="absolute inset-[64px] rounded-full bg-[radial-gradient(circle_at_50%_34%,rgba(255,255,255,0.98)_0%,rgba(247,251,255,0.96)_60%,rgba(236,244,255,0.92)_100%)] shadow-[0_40px_110px_rgba(28,110,220,0.14)]" />
            <div className="absolute inset-[64px] rounded-full border border-[#DCEAFA]" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_18px_38px_rgba(28,110,220,0.18)]">
                <img
                  src="/assets/images/logo.png"
                  alt="Vertex"
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>
          </motion.div>

          {desktopNodes.map((industry, index) => (
            <div key={industry.title} className={`absolute z-30 ${industry.style}`}>
              <IndustryNode industry={industry} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:hidden">
          {industries.map((industry, index) => (
            <div key={industry.title} className="rounded-[28px] border border-[#D8EAF9] bg-white/76 p-4 shadow-[0_18px_44px_rgba(19,90,170,0.08)] backdrop-blur-sm">
              <IndustryNode industry={industry} index={index} />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid overflow-hidden rounded-[24px] border border-[#D9EAF8] bg-white/82 shadow-[0_18px_50px_rgba(16,90,170,0.08)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-5"
        >
          {industryFeatures.map((feature, index) => (
            <div
              key={feature}
              className={`flex items-center justify-center gap-3 px-5 py-5 text-center ${index !== industryFeatures.length - 1 ? "border-b border-[#DCEAF7] sm:border-r lg:border-b-0" : ""}`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF6FF] text-[15px] text-[#0B72E7] shadow-[0_8px_18px_rgba(11,114,231,0.08)]">
                {index === 0 ? "◫" : index === 1 ? "⌘" : index === 2 ? "◎" : index === 3 ? "▣" : "✣"}
              </span>
              <span className="text-[12px] font-bold leading-5 text-[#314D70]">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <ScrollExperience />

      <main className="min-h-screen overflow-hidden bg-white text-[#071B4D]">
        {/* Hero slider */}
        <section className="relative isolate flex min-h-screen overflow-hidden bg-[#071B4D]">
          <div className="absolute inset-0 overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.image}
                className={`absolute inset-0 transition-all duration-[900ms] ease-in-out ${
                  activeSlide === index
                    ? "z-[2] scale-100 opacity-100"
                    : "z-[1] scale-[1.04] opacity-0"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Left-side gradient only */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-full bg-[linear-gradient(90deg,rgba(2,15,43,0.78)_0%,rgba(2,15,43,0.55)_30%,rgba(2,15,43,0.18)_55%,transparent_75%)] lg:w-[78%]" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[180px] bg-[linear-gradient(0deg,rgba(2,15,43,0.38)_0%,transparent_100%)]" />

          <div className="relative z-[5] mx-auto flex w-full max-w-[1480px] flex-1 items-center px-5 py-20 sm:px-8 lg:px-12 xl:px-20">
            <div className="w-full">
              <div className="max-w-[820px]">
                <div
                  key={`eyebrow-${activeSlide}`}
                  className="hero-eyebrow-animation mb-6 inline-flex items-center gap-3 rounded-full border border-white/40 bg-black/15 px-4 py-2.5 shadow-[0_10px_26px_rgba(0,0,0,0.12)] backdrop-blur-sm"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#44BBFF] opacity-70" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#44BBFF]" />
                  </span>

                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white sm:text-[11px]">
                    {slides[activeSlide].eyebrow}
                  </span>
                </div>

                <div
                  key={`content-${activeSlide}`}
                  className="hero-content-animation"
                >
                  <h1 className="max-w-[820px] text-[42px] font-extrabold leading-[1.03] tracking-[-0.045em] text-white [text-shadow:0_3px_18px_rgba(0,0,0,0.48)] sm:text-[56px] lg:text-[66px] xl:text-[76px]">
                    {slides[activeSlide].title}
                  </h1>

                  <p className="mt-6 max-w-[670px] text-[16px] font-medium leading-7 text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-[18px] sm:leading-8">
                    {slides[activeSlide].description}
                  </p>
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact-sales"
                    className="group inline-flex h-[56px] items-center justify-center gap-3 rounded-[12px] bg-[#038FDF] px-7 text-[14px] font-extrabold text-white no-underline shadow-[0_20px_45px_rgba(3,143,223,0.34)] transition duration-300 hover:-translate-y-1 hover:bg-[#1A6EB9] hover:text-white"
                  >
                    Talk to sales

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/products"
                    className="group inline-flex h-[56px] items-center justify-center gap-3 rounded-[12px] border border-white/70 bg-white/15 px-7 text-[14px] font-extrabold text-white no-underline shadow-[0_14px_35px_rgba(0,0,0,0.12)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/25 hover:text-white"
                  >
                    Explore products

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/45 bg-black/15 px-4 py-2 text-[11px] font-bold text-white shadow-sm backdrop-blur-sm sm:text-[12px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hero slider indicators */}
          <div className="absolute bottom-6 left-0 right-0 z-20 sm:bottom-8">
            <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-20">
              <div className="flex items-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`relative h-[4px] overflow-hidden rounded-full transition-all duration-500 ${
                      activeSlide === index
                        ? "w-14 bg-white/50"
                        : "w-7 bg-white/35 hover:bg-white/70"
                    }`}
                  >
                    {activeSlide === index && (
                      <span
                        key={`progress-${activeSlide}`}
                        className="hero-progress absolute inset-y-0 left-0 rounded-full bg-[#44BBFF]"
                      />
                    )}
                  </button>
                ))}
              </div>

              <p className="text-[11px] font-extrabold tracking-[0.15em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.55)]">
                {String(activeSlide + 1).padStart(2, "0")}

                <span className="mx-2 text-white/60">/</span>

                {String(slides.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </section>
        {/*

                        ↗
        */}
        {/* New draggable 10-card section */}
        <DraggableShowcase />
        <CertificationMarqueeSection />
        <MessagingSolutionsSection />
        <TechnologiesSection />
        <StatsSection />
        <IndustriesSection />

        <style jsx global>{`
          @keyframes heroContentAnimation {
            from {
              opacity: 0;
              transform: translateY(24px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroEyebrowAnimation {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroProgressAnimation {
            from {
              width: 0%;
            }

            to {
              width: 100%;
            }
          }

          .hero-content-animation {
            animation: heroContentAnimation 0.7s
              cubic-bezier(0.22, 1, 0.36, 1);
          }

          .hero-eyebrow-animation {
            animation: heroEyebrowAnimation 0.55s
              cubic-bezier(0.22, 1, 0.36, 1);
          }

          .hero-progress {
            animation: heroProgressAnimation 3s linear forwards;
          }

          .certificate-card-title {
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            color: #566176 !important;
            font-size: 15px !important;
            font-weight: 800 !important;
            line-height: 1.25 !important;
            letter-spacing: 0 !important;
            margin: 0 !important;
          }

          .certificate-card-text {
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            color: #8992a1 !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            line-height: 1.35 !important;
            letter-spacing: 0 !important;
            margin-top: 4px !important;
          }

          .certificate-badge-title {
            font-size: 13px !important;
            line-height: 1 !important;
            letter-spacing: 0 !important;
            margin: 0 !important;
          }

          .certificate-badge-code {
            font-size: 6px !important;
            line-height: 1.1 !important;
            letter-spacing: 0 !important;
            margin-top: 4px !important;
          }

          .scrollbar-hide {
            scrollbar-width: none;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }


          @keyframes certificateMoveLeft {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-33.333%);
            }
          }

          @keyframes certificateMoveRight {
            from {
              transform: translateX(-33.333%);
            }

            to {
              transform: translateX(0);
            }
          }

          .certificate-track-left {
            animation: certificateMoveLeft 18s linear infinite !important;
          }

          .certificate-track-right {
            animation: certificateMoveRight 18s linear infinite !important;
          }

          .certificate-edge-fade {
            pointer-events: none;
            position: absolute;
            top: -10px;
            bottom: -10px;
            z-index: 20;
            width: clamp(100px, 14vw, 260px);
          }

          .certificate-edge-left {
            left: 0;
            background: linear-gradient(
              90deg,
              #ffffff 0%,
              rgba(255, 255, 255, 0.96) 34%,
              rgba(255, 255, 255, 0.68) 60%,
              rgba(255, 255, 255, 0) 100%
            );
          }

          .certificate-edge-right {
            right: 0;
            background: linear-gradient(
              270deg,
              #ffffff 0%,
              rgba(255, 255, 255, 0.96) 34%,
              rgba(255, 255, 255, 0.68) 60%,
              rgba(255, 255, 255, 0) 100%
            );
          }

          @media (max-width: 640px) {
            .certificate-track-left,
            .certificate-track-right {
              animation-duration: 25s;
            }
          }

@media (prefers-reduced-motion: reduce) {
            .hero-content-animation,
            .hero-eyebrow-animation,
            .hero-progress,
            .certificate-track-left,
            .certificate-track-right {
              animation: none;
            }
          }
        `}</style>
      </main>
    </>
  );
}