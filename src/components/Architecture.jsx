function Architecture() {
  const flow = [
    { title: "User Request", text: "Website / App", icon: "bi-person-circle" },
    {
      title: "API Gateway",
      text: "Rate Limits & Auth",
      icon: "bi-hdd-network",
    },
    { title: "AI Engine", text: "Decision Layer", icon: "bi-cpu" },
    {
      title: "Workflow Engine",
      text: "Automation Flow",
      icon: "bi-lightning-charge",
    },
    { title: "Response", text: "Delivered", icon: "bi-send-check" },
  ];

  return (
    <section className="architecture-section section-space">
      <div className="container">
        <div className="architecture-panel animate-up">
          <div className="text-center">
            <span className="tag-pill">REAL-TIME • AI • WORKFLOW</span>
            <h2>
              Real-time automation{" "}
              <span className="blue-text">architecture</span>
            </h2>
            <p className="architecture-subtitle">
              From customer request to AI decisioning, workflow execution and
              instant response delivery.
            </p>
          </div>

          <div className="architecture-timeline">
            {flow.map((item, index) => (
              <div className="architecture-step" key={item.title}>
                <div className="step-number">0{index + 1}</div>

                <div className="step-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <h4>{item.title}</h4>
                <p>{item.text}</p>

                {index < flow.length - 1 && (
                  <div className="step-connector">
                    <i className="bi bi-arrow-right"></i>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="architecture-tags">
            <span>
              <i className="bi bi-broadcast"></i> Real-time
            </span>
            <span>
              <i className="bi bi-graph-up-arrow"></i> Scalable
            </span>
            <span>
              <i className="bi bi-shield-check"></i> Secure
            </span>
            <span>
              <i className="bi bi-cloud-check"></i> 99.99% Uptime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
