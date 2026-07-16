import { useState } from 'react';
import "./Pricing.css";

function Pricing() {
  const plans = [
    {
      name: "Launch",
      price: "₹999",
      desc: "For small teams starting with WhatsApp automation and customer communication.",
      features: [
        "1 WhatsApp Business Account",
        "Basic chatbot journey",
        "1,000 monthly conversations",
        "Template message support",
        "Broadcast campaign setup",
        "Basic delivery analytics",
      ],
      cta: "Start Launch",
      highlighted: false,
    },
    {
      name: "Scale",
      price: "₹4,999",
      desc: "For growing brands that need campaigns, automation, integrations, and analytics.",
      features: [
        "3 WhatsApp Business Accounts",
        "Advanced workflow builder",
        "10,000 monthly conversations",
        "AI chatbot automation",
        "CRM / lead integration",
        "Campaign performance dashboard",
        "Priority support",
      ],
      cta: "Start Scale",
      highlighted: true,
    },
    {
      name: "Enterprise Plus",
      price: "Custom",
      desc: "For enterprises, agencies, and government-scale automation deployments.",
      features: [
        "Unlimited channels and users",
        "Custom workflow automation",
        "API and webhook access",
        "Role-based admin dashboard",
        "Custom CRM / ERP integrations",
        "Dedicated account manager",
        "SLA and enterprise support",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [exploreHovered, setExploreHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);

  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Flexible pricing for{" "}
            <span className="text-blue-600">PRICING</span>
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
            every growth stage.
          </h2>

          <p className="max-w-5xl mx-auto mt-8 text-lg md:text-xl text-gray-600 leading-8">
            Choose the right plan for WhatsApp automation, AI workflows,
            campaign management, customer engagement, integrations, and
            enterprise-grade support.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="w-full pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col justify-between rounded-3xl border p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.highlighted
                    ? "border-blue-600 bg-blue-50 shadow-xl"
                    : "border-gray-200 bg-white shadow-md"
                    }`}
                >
                  {/* Badge */}
                  {plan.highlighted && (
                    <div className="absolute top-5 right-5 bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}

                  {/* Top Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {plan.name}
                      </h3>

                      <p className="text-gray-600 text-base leading-7 min-h-[84px]">
                        {plan.desc}
                      </p>

                      {/* Price */}
                      <div className="mt-8 mb-8 flex items-end gap-2">
                        <span className="text-5xl font-bold text-gray-900">
                          {plan.price}
                        </span>

                        {plan.price !== "Custom" && (
                          <small className="text-gray-500 text-lg mb-1">
                            /month
                          </small>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="mt-2 mb-10 space-y-5 flex-1">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-gray-700 leading-7"
                        >
                          <i className="bi bi-check-circle-fill text-blue-600 mt-1"></i>

                          <span className="flex-1 text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href={
                        plan.name === "Enterprise Plus"
                          ? "/contact-sales"
                          : "/book-demo"
                      }
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        backgroundColor: isHovered ? '#2563eb' : '#ffffff',
                        color: isHovered ? '#ffffff' : '#2563eb',
                        borderColor: '#2563eb',
                        transition: 'all 0.3s ease',
                      }}
                      className="w-full inline-flex items-center justify-center rounded-2xl border px-6 py-4 text-base font-semibold"
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* GLOBAL SECTION */}
          <section className="mt-24">
            <div
              style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)' }}
              className="rounded-[32px] p-10 md:p-16 text-white overflow-hidden"
            >
              <div className="max-w-4xl">
                <span className="inline-block text-sm tracking-widest uppercase bg-white/20 px-4 py-2 rounded-full mb-6">
                  Global Scale
                </span>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Built for businesses ready to automate at scale.
                </h2>

                <p className="mt-6 text-lg leading-8 text-blue-50">
                  Use Vertex Suite to simplify customer communication,
                  campaign execution, workflow automation, analytics, and
                  digital engagement from one connected platform.
                </p>

                <div className="flex flex-wrap gap-4 mt-10">
                  <a
                    href="/products"
                    onMouseEnter={() => setExploreHovered(true)}
                    onMouseLeave={() => setExploreHovered(false)}
                    style={{
                      backgroundColor: exploreHovered ? '#0284c7' : '#ffffff',
                      color: exploreHovered ? '#ffffff' : '#0284c7',
                      transition: 'all 0.3s ease',
                    }}
                    className="inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold"
                  >
                    Explore Platform
                    <i className="bi bi-arrow-right ml-2"></i>
                  </a>

                  <a
                    href="/contact-sales"
                    onMouseEnter={() => setContactHovered(true)}
                    onMouseLeave={() => setContactHovered(false)}
                    style={{
                      backgroundColor: contactHovered ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                      color: '#ffffff',
                      borderColor: 'rgba(255, 255, 255, 0.4)',
                      transition: 'all 0.3s ease',
                    }}
                    className="inline-flex items-center justify-center rounded-2xl border px-8 py-4 font-semibold"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* NOTE */}
          <div className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Messaging charges note
            </h4>

            <p className="text-gray-600 leading-8 text-base">
              Meta and channel conversation charges will be applicable
              separately. Platform fees, custom integrations, and enterprise
              deployment costs may vary based on usage and scope.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;
