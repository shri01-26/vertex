import { useEffect, useState } from "react";
import Reveal from "../../components/Reveal";
import "./real-business-use-cases.css";

const useCases = [
  {
    id: "marketing",
    tab: "Marketing",
    title: "Marketing Campaigns",
    description: [
      "Create visually rich promotional campaigns that capture attention directly inside the messaging inbox.",
      "Showcase offers using images, product cards and swipeable carousels while enabling customers to act instantly.",
    ],
    label: "Typical campaign actions include:",
    points: ["View product", "Explore offer", "Visit website", "Start conversation"],
    images: ["AA.png", "AA2.png", "AA3.png"],
  },
  {
    id: "appointment",
    tab: "Appointment",
    title: "Appointment & Service Reminders",
    description: [
      "Send timely reminders and service updates that keep customers informed before, during and after a scheduled interaction.",
      "Provide interactive reminder cards with appointment details, confirmation options, rescheduling flows and support actions.",
    ],
    label: "Examples include:",
    points: ["Appointment confirmation", "Service reminders", "Reschedule option", "Support request"],
    images: ["BB.png", "BB2.png", "BB3.png", "BB4.png", "BB5.png", "BB6.png", "BB7.png"],
  },
  {
    id: "tracking",
    tab: "Tracking",
    title: "Order Updates & Delivery Tracking",
    description: [
      "Send real-time updates that help customers stay informed about their purchases.",
      "Replace plain SMS alerts with interactive cards containing delivery status, tracking options and support buttons.",
    ],
    label: "Examples include:",
    points: ["Order confirmation", "Shipment updates", "Delivery tracking", "Service completion alert"],
    images: ["CC.png", "CC1.png", "CC2.png", "CC3.png", "CC4.png", "CC5.png"],
  },
  {
    id: "support",
    tab: "Support",
    title: "Customer Support Interactions",
    description: [
      "Provide quick assistance directly within the messaging interface.",
      "Customers can select predefined responses, request help or reach the right support option without calling or visiting a website.",
    ],
    label: "Support actions may include:",
    points: ["Report an issue", "Speak to an agent", "Request a callback", "Access FAQs"],
    images: ["DD.png", "DD1.png", "DD2.png", "DD3.png", "DD4.png"],
    background: "DD8.png",
  },
  {
    id: "travel",
    tab: "Travel",
    title: "Travel & Ticketing Communication",
    description: [
      "Travel companies can deliver rich travel information in a single interactive message.",
      "Passengers can view itinerary details, receive travel updates and access important information without navigating multiple apps.",
    ],
    label: "Examples include:",
    points: ["Booking confirmations", "Travel reminders", "Boarding information", "Itinerary updates"],
    images: ["EE.png", "EE2.png", "EE3.png", "EE4.png", "EE5.png", "EE6.png"],
    background: "EE7.png",
  },
  {
    id: "payments",
    tab: "Payments",
    title: "Payments & Billing Notifications",
    description: [
      "Send secure billing updates, payment reminders and invoice notifications directly inside the messaging inbox.",
      "Customers can review billing details, open invoices and complete payment-related actions through interactive buttons.",
    ],
    label: "Examples include:",
    points: ["Payment reminders", "Invoice alerts", "Billing updates", "Payment confirmation"],
    images: ["FF.png", "FF2.png", "FF3.png", "FF4.png"],
    background: "FF5.png",
  },
];

const icons = {
  marketing: "M8 17V9m4 8V5m4 12v-7M5 20h14M5 4h14",
  appointment: "M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Zm3 8h3v3H8v-3Z",
  tracking: "M3 6h11v11H3V6Zm11 4h4l3 3v4h-7v-7ZM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  support: "M4 13v-2a8 8 0 0 1 16 0v2M4 13H2v5h4v-5H4Zm16 0h2v5h-4v-5h2Zm0 5c0 2-2 3-5 3",
  travel: "m2 16 20-8-8 20-2-8-6 2 2-6-6-4Z",
  payments: "M3 6h18v12H3V6Zm0 4h18M7 15h4",
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  );
}

/* Circular distance from the active card: 0 = front, ±1/±2 = stacked behind */
function getDepth(index, activeIndex, total) {
  let diff = index - activeIndex;

  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  return diff;
}

/* autoRotateMs = 0 keeps the deck static - cards only change on click */
export default function RealBusinessUseCases({ assetBase = "/rcs-use-cases", autoRotateMs = 0 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const asset = (name) => `${assetBase.replace(/\/$/, "")}/${name}`;

  useEffect(() => {
    if (!autoRotateMs) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % useCases.length);
    }, autoRotateMs);

    return () => clearInterval(timer);
  }, [autoRotateMs, activeIndex]);

  return (
    <section className="rcs-cases" aria-labelledby="rcs-cases-title">
      <div className="rcs-cases__container">
        <header className="rcs-cases__header">
          <Reveal>
            <h2 id="rcs-cases-title">Real Business Use Cases for RCS Messaging</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              <span className="rcs-cases__lead-line">
                RCS enables businesses to move beyond one-way notifications and create interactive messaging experiences across the entire customer journey.
              </span>
              <br />
              Below are some of the most common ways organizations use RCS to engage their customers.
            </p>
          </Reveal>
        </header>

        <Reveal delay={0.3} className="rcs-cases__tabs" role="tablist" aria-label="RCS use cases">
          <span
            className="rcs-cases__progress"
            style={{ width: `${(activeIndex / (useCases.length - 1)) * 100}%` }}
          />
          {useCases.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls="rcs-use-case-panel"
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <span className="rcs-cases__icon"><Icon name={item.id} /></span>
              <span>{item.tab}</span>
            </button>
          ))}
        </Reveal>

        <div className="rcs-cases__stage">
          {useCases.map((item, index) => {
            const depth = getDepth(index, activeIndex, useCases.length);
            const isActive = depth === 0;
            const level = Math.min(Math.abs(depth), 3);
            /* Stack the cards on the right only */
            const isHidden = level >= 3 || depth < 0;

            return (
              <article
                key={item.id}
                id={isActive ? "rcs-use-case-panel" : undefined}
                className={`rcs-cases__panel rcs-cases__panel--${item.id} ${isActive ? "is-active" : ""}`}
                role="tabpanel"
                aria-hidden={!isActive}
                onClick={() => !isActive && setActiveIndex(index)}
                style={{
                  transform: `translate(-50%, -50%) translateX(${level * 17 - 8}%) translateZ(${level * -200}px) rotateY(${level * -9}deg) scale(${1 - level * 0.04})`,
                  filter: `blur(${level * 3}px)`,
                  opacity: isHidden ? 0 : 1 - level * 0.22,
                  zIndex: 10 - level,
                  pointerEvents: isHidden ? "none" : "auto",
                  cursor: isActive ? "default" : "pointer",
                }}
              >
                <div className="rcs-cases__copy">
                  <h3>{item.title}</h3>
                  {item.description.map((text) => <p key={text}>{text}</p>)}
                  <strong>{item.label}</strong>
                  <ul>
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>

                <div
                  className="rcs-cases__visual"
                  style={item.background ? { backgroundImage: `url(${asset(item.background)})` } : undefined}
                  aria-label={`${item.title} message examples`}
                >
                  <span className="rcs-cases__orb" />
                  <span className="rcs-cases__route" />
                  {item.images.map((image, imageIndex) => (
                    <img
                      key={image}
                      src={asset(image)}
                      alt=""
                      className={`rcs-cases__image rcs-cases__image--${imageIndex + 1}`}
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

