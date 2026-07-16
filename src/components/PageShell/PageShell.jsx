import Link from "../AppLink";
import { ArrowRight, CheckCircle, Layers, MessageSquareText, ShieldCheck, Zap } from "lucide-react";

const iconItems = [
  { icon: MessageSquareText, text: "Omnichannel messaging" },
  { icon: Zap, text: "Workflow automation" },
  { icon: Layers, text: "API-ready platform" },
  { icon: ShieldCheck, text: "Business-grade reliability" },
];

function PageShell({ title, eyebrow = "Vertex Suite", description, points }) {
  const finalPoints = points?.length
    ? points
    : [
        "Automation workflows for modern teams",
        "Customer engagement across channels",
        "Secure integrations and scalable APIs",
        "Analytics-ready operations for growing businesses",
      ];

  return (
    <main className="vs-page-shell">
      <section className="vs-page-hero">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <span className="vs-page-eyebrow">{eyebrow}</span>
              <h1 className="vs-page-title">{title}</h1>
              <p className="vs-page-desc">
                {description ||
                  "Explore Vertex Suite solutions built to simplify communication, automate workflows and help businesses deliver faster customer experiences."}
              </p>

              <div className="vs-page-actions">
                <Link to="/book-demo" className="vs-page-btn vs-page-btn-primary">
                  Request a Demo <ArrowRight size={18} />
                </Link>
                <Link to="/contact-sales" className="vs-page-btn vs-page-btn-outline">
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="vs-page-card-grid">
                {iconItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="vs-page-card" key={item.text}>
                      <Icon size={24} />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vs-page-content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="vs-page-content-card">
                <h2>What this page covers</h2>
                <div className="vs-page-points">
                  {finalPoints.map((point) => (
                    <div className="vs-page-point" key={point}>
                      <CheckCircle size={20} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PageShell;
