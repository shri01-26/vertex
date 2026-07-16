import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section section-space">
      <div className="container">
        <div className="cta-banner animate-up">
          <div>
            <h2>
              Ready <span className="blue-text">to</span> automate your business
              on <span className="green-text">WhatsApp?</span>
            </h2>
            <p>
              Join thousands of brands using Vertex Suite to engage, convert,
              and grow with intelligent automation.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <button className="btn btn-primary px-4">Book Demo</button>
              <button className="btn btn-light px-4">Start Free Trial</button>
            </div>
          </div>

          <div className="picture-box cta-picture">
            Picture will be added here
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
