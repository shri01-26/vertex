import React from "react"

import {
    Database,
    Hand,
    MessageSquareText,
    Zap,
    Rocket,
    MousePointerClick,
      Landmark,
    HeartPulse,
    ShoppingBag,
    Luggage,
    GraduationCap,
    Building2,
    Car,
    Truck,
    CalendarCheck,
    LayoutDashboard,
    DatabaseZap,
    Bot,
    RefreshCw,
    UsersRound,
    FileDown,
    BarChart3,
    ClipboardCheck,
    Smile,
    Workflow,
    FileChartColumn,
} from "lucide-react"
import "../../styles/WhatsAppFormsHero.css"


const chips = [
    "No Redirects",
    "More Responses",
    "Higher Completion",
    "Smart Automation",
]

const features = [
    {
        icon: "⌘",
        title: "Interactive",
        text: "Easy to fill",
    },
    {
        icon: "🛡",
        title: "Secure",
        text: "End-to-end encrypted",
    },
    {
        icon: "✧",
        title: "Engaging",
        text: "One chat, many actions",
    },
    {
        icon: "●",
        title: "Smart",
        text: "Automate & act instantly",
    },
    
]
const formSteps = [
    {
        icon: "📄",
        title: "Collect structured data",
        text: "Multi-step forms\ninside chat",
    },
    {
        icon: "💬",
        title: "Shorten customer journeys",
        text: "Buttons, lists, inputs\nin one chat thread",
    },
    {
        icon: "⚙️",
        title: "Automate responses",
        text: "Trigger next steps\nbased on user input",
    },
]
const interactiveCards = [
    {
        icon: Database,
        title: "Collect Structured Data",
        text: "Capture customer inputs through clean, step-by-step WhatsApp forms that organize responses beautifully.",
    },
    {
        icon: Hand,
        title: "Simplify User Actions",
        text: "Replace long webpages and complicated forms with guided WhatsApp steps that users complete effortlessly.",
    },
    {
        icon: MessageSquareText,
        title: "Shorten Customer Journeys",
        text: "Buttons, lists and input fields appear in a single chat thread — no redirects or extra screens.",
    },
    {
        icon: Zap,
        title: "Automate Next Steps",
        text: "Trigger confirmations, follow-ups, or backend actions instantly based on what users submit.",
    },
    {
        icon: Rocket,
        title: "Deploy Anywhere",
        text: "Use your WhatsApp Flow in broadcasts, chatbots, QR codes, ads, or support conversations — at any scale.",
    },
    {
        icon: MousePointerClick,
        title: "Build With Drag & Drop",
        text: "Design every step visually using a no-code, drag-and-drop builder that teams can manage without developers.",
    },
]
const industryCards = [
    {
        icon: Landmark,
        title: "Banking & Finance",
        text: "Collect KYC details, loan eligibility inputs, EMI selections, or service requests.",
    },
    {
        icon: HeartPulse,
        title: "Healthcare",
        text: "Capture patient information, appointment preferences, symptoms and test bookings.",
    },
    {
        icon: ShoppingBag,
        title: "E-Commerce & Retail",
        text: "Take returns/exchange requests, COD confirmations, delivery preferences.",
    },
    {
        icon: Luggage,
        title: "Travel & Hospitality",
        text: "Gather guest details, check-in data, itinerary selections, package preferences.",
    },
    {
        icon: GraduationCap,
        title: "Education & EdTech",
        text: "Collect admission leads, course selections, student details, fee preferences, counseling inputs.",
    },
    {
        icon: Building2,
        title: "Real Estate",
        text: "Qualify property leads, capture budget details and site-visit scheduling info.",
    },
    {
        icon: Car,
        title: "Automotive",
        text: "Allow users to request test drives, service appointments, insurance renewals.",
    },
    {
        icon: Landmark,
        title: "Government & PSU",
        text: "Collect citizen service forms, document details, verification data and applications.",
    },
    {
        icon: Truck,
        title: "Logistics & Delivery",
        text: "Capture pickup details, delivery confirmations, return reasons and shipment instructions.",
    },
    {
        icon: CalendarCheck,
        title: "Hospitality & Events",
        text: "Gather attendee details, seating preferences, booking confirmations and event RSVPs.",
    },
]
const formSubmissionRows = [
    {
        name: "Rahul Sharma",
        form: "Loan Eligibility",
        mobile: "+91 98765 43210",
        status: "Completed",
        time: "Jul 9, 2026 · 10:24 AM",
    },
    {
        name: "Priya Nair",
        form: "Appointment Booking",
        mobile: "+91 90123 45678",
        status: "In Progress",
        time: "Jul 9, 2026 · 09:58 AM",
    },
    {
        name: "Amit Verma",
        form: "Test Drive Request",
        mobile: "+91 99887 66554",
        status: "Completed",
        time: "Jul 8, 2026 · 06:12 PM",
    },
    {
        name: "Sneha Reddy",
        form: "Admission Enquiry",
        mobile: "+91 91234 56780",
        status: "In Progress",
        time: "Jul 8, 2026 · 04:47 PM",
    },
    {
        name: "Karan Mehta",
        form: "Property Site Visit",
        mobile: "+91 98200 11223",
        status: "Completed",
        time: "Jul 8, 2026 · 02:30 PM",
    },
]
const dataFlowSteps = [
    {
        icon: ClipboardCheck,
        number: "01",
        title: "User submits the form",
        text: "Customers fill your WhatsApp form directly inside the chat — no redirects or extra screens.",
    },
    {
        icon: DatabaseZap,
        number: "02",
        title: "Data is captured instantly",
        text: "Every response is stored securely and structured automatically for easy access.",
    },
    {
        icon: Workflow,
        number: "03",
        title: "Automation is triggered",
        text: "Confirmations, follow-ups and backend actions fire based on what the user submitted.",
    },
    {
        icon: LayoutDashboard,
        number: "04",
        title: "Track it on your dashboard",
        text: "Monitor submissions, statuses and completion rates from a single live dashboard.",
    },
]
const outcomeCards = [
    {
        icon: BarChart3,
        title: "Higher Completion Rates",
        text: "Chat-native forms remove friction, so more users finish what they start.",
    },
    {
        icon: RefreshCw,
        title: "Faster Response Cycles",
        text: "Automated follow-ups keep conversations moving without manual effort.",
    },
    {
        icon: UsersRound,
        title: "More Qualified Leads",
        text: "Structured inputs help you capture cleaner, ready-to-act customer data.",
    },
    {
        icon: Smile,
        title: "Better Customer Experience",
        text: "Everything happens inside WhatsApp — familiar, simple and instant.",
    },
]

export default function WhatsAppFormsHero() {
    return (
        <section className="wa-hero">
            <div className="wa-hero-bg-dots"></div>

            <div className="wa-hero-container">
                {/* LEFT CONTENT */}
                <div className="wa-hero-left">
                    <div className="wa-pill">
                        <span className="wa-pill-icon">✓</span>
                        WHATSAPP FORMS
                    </div>

                    <h1>
                        Design <span>WhatsApp forms</span> that simplify data
                        collection and improve completion.
                    </h1>

                    <p>
                        Gather customer information directly inside WhatsApp.
                        With no redirects or screen switching, no external
                        forms — just faster responses and higher completion
                        rates.
                    </p>

                    <div className="wa-chip-row">
                        {chips.map((chip, index) => (
                            <div className="wa-chip" key={index}>
                                <span>✓</span>
                                {chip}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT VISUAL AREA */}
                <div className="wa-hero-visual">
                    <div className="wa-circle wa-circle-1"></div>
                    <div className="wa-circle wa-circle-2"></div>

                    {/* PHONE */}
                    <div className="wa-phone">
                        <div className="wa-phone-notch"></div>

                        <div className="wa-phone-top">
                            <div className="wa-time">9:41</div>
                            <div className="wa-status">● ● ▰</div>
                        </div>

                        <div className="wa-chat-header">
                            <span className="wa-back">‹</span>
                            <div className="wa-avatar">☘</div>
                            <div>
                                <h4>Vertex Suite</h4>
                                <small>online</small>
                            </div>
                            <span className="wa-menu">⋮</span>
                        </div>

                        <div className="wa-chat-body">
                            <div className="wa-msg">
                                <strong>Hi Rahul 👋</strong>
                                <br />
                                Please fill out the form below to get started.
                                <span>11:00 AM</span>
                            </div>

                            <div className="wa-form-card">
                                <h3>Travel Enquiry Form</h3>
                                <p>Step 1 of 4</p>

                                <label>Full Name</label>
                                <input placeholder="Enter your name" />

                                <label>Email Address</label>
                                <input placeholder="Enter your email" />

                                <label>Destination of Interest</label>
                                <select>
                                    <option>Select an option</option>
                                    <option>Dubai</option>
                                    <option>Singapore</option>
                                    <option>Goa</option>
                                </select>

                                <button>Next</button>
                            </div>
                        </div>
                    </div>

                    <div className="wa-floating-whatsapp">☎</div>

                    {/* FEATURE CARDS */}
                    <div className="wa-feature-list">
                        {features.map((item, index) => (
                            <div className="wa-feature-card" key={index}>
                                <div className="wa-feature-icon">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* HOW IT WORKS SECTION */}
<div className="wa-form-works">
    <h2>How Structured Form Filling Works Inside WhatsApp</h2>

    <div className="wa-form-steps">
        {formSteps.map((step, index) => (
            <div className="wa-form-step" key={index}>
                <div className="wa-step-icon-wrap">
                    <div className="wa-step-icon">
                        <span>{step.icon}</span>
                    </div>
                </div>

                {index < formSteps.length - 1 && (
                    <div className="wa-step-arrow">
                        <span></span>
                        <b>›</b>
                    </div>
                )}

                <h3>{step.title}</h3>
                <p>{step.text}</p>
            </div>
        ))}
    </div>
</div>
{/* INTERACTIVE FORM EXPERIENCE */}
<div className="wa-interactive-section">
    <h2>A Closer Look at WhatsApp's Interactive Form Experience</h2>

    <div className="wa-interactive-box">
        {interactiveCards.map((card, index) => {
            const Icon = card.icon

            return (
                <div className="wa-interactive-card" key={index}>
                    <div className="wa-interactive-icon">
                        <Icon size={36} strokeWidth={2.2} />
                    </div>

                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                </div>
            )
        })}
    </div>
</div>
{/* INDUSTRY SECTION */}
<div className="wa-industry-section">
    <h2>Built for Every Customer-Facing Industry</h2>

    <div className="wa-industry-grid">
        {industryCards.map((card, index) => {
            const Icon = card.icon

            return (
                <div className="wa-industry-card" key={index}>
                    <div className="wa-industry-icon">
                        <Icon size={38} strokeWidth={2.2} />
                    </div>

                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                </div>
            )
        })}
    </div>
</div>
{/* FORM DATA DESTINATION SECTION */}
<div className="wa-data-section">
    <div className="wa-data-header">
        <h2>Where Your WhatsApp Form Data Goes Next</h2>
        <p>
            Every WhatsApp Flow submission becomes structured data instantly available in your Vertex Suite dashboard.
            <br />
            Each response is logged, organized and ready to sync with CRM, automation workflows and internal systems for further action.
        </p>
    </div>

    <div className="wa-data-main">
        {/* LEFT DASHBOARD */}
        <div className="wa-dashboard-card">
            <aside className="wa-dashboard-sidebar">
                <div className="wa-dashboard-logo">V</div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </aside>

            <div className="wa-dashboard-content">
                <div className="wa-dashboard-title">
                    <h3>Form Submissions</h3>
                </div>

                <div className="wa-dashboard-stats">
                    <div>
                        <p>Total Submissions</p>
                        <h4>12,842</h4>
                        <span>+12.2%</span>
                    </div>

                    <div>
                        <p>Today's Submissions</p>
                        <h4>348</h4>
                        <span>+8.4%</span>
                    </div>

                    <div>
                        <p>Completion Rate</p>
                        <h4>92.6%</h4>
                        <span>+2.2%</span>
                    </div>

                    <div>
                        <p>Active Forms</p>
                        <h4>24</h4>
                        <span>+6.0%</span>
                    </div>
                </div>

                <div className="wa-dashboard-table">
                    <div className="wa-table-head">
                        <span>Name</span>
                        <span>Form Name</span>
                        <span>Mobile</span>
                        <span>Status</span>
                        <span>Submitted On</span>
                    </div>

                    {formSubmissionRows.map((row, index) => (
                        <div className="wa-table-row" key={index}>
                            <span>{row.name}</span>
                            <span>{row.form}</span>
                            <span>{row.mobile}</span>
                            <span>
                                <b className={row.status === "In Progress" ? "progress" : ""}>
                                    {row.status}
                                </b>
                            </span>
                            <span>{row.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* RIGHT FLOW STEPS */}
        <div className="wa-data-flow">
            {dataFlowSteps.map((step, index) => {
                const Icon = step.icon

                return (
                    <div className="wa-data-step" key={index}>
                        <div className="wa-data-step-icon">
                            <Icon size={18} strokeWidth={2.3} />
                        </div>

                        <strong>{step.number}</strong>

                        <div>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>

    {/* OUTCOME BAR */}
    <div className="wa-outcome-bar">
        {outcomeCards.map((item, index) => {
            const Icon = item.icon

            return (
                <div className="wa-outcome-card" key={index}>
                    <div className="wa-outcome-icon">
                        <Icon size={30} strokeWidth={2.1} />
                    </div>

                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                </div>
            )
        })}
    </div>
</div>
        </section>

    )
}
