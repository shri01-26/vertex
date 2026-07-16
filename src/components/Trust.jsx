import { trustCards } from "../content/siteContent";

function Trust() {
  return (
    <section className="trust-section section-space">
      <div className="container text-center">
        <h2>
          Why brands trust <span className="blue-text">Vertex Suite</span>
        </h2>
        <p>
          We are certified by trusted standards and engineered for reliability,
          security and scalability.
        </p>

        <div className="row g-4 mt-4">
          {trustCards.map((item) => (
            <div className="col-md-3" key={item.title}>
              <div className="trust-card animate-up">
                <div className="certificate-box">Certificate / Logo</div>
                <h5>{item.title}</h5>
                <small>{item.text}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;