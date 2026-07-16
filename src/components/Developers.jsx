function Developers() {
  return (
    <section id="developers" className="developer-section section-space">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-8 text-center d-flex flex-column align-items-center justify-content-center animate-up mx-auto order-1">
            <h2>Engineered for developers</h2>
            <p className="mx-auto" style={{ maxWidth: "540px" }}>
              Leverage advanced integrations and automation tools to create
              cohesive business experiences.
            </p>

            <div className="dev-feature-list text-start mx-auto" style={{ maxWidth: "340px", marginBottom: "20px" }}>
              <div>Powerful APIs & Webhooks</div>
              <div>CRM, ERP and commerce integrations</div>
              <div>SDKs for web, mobile and cloud</div>
              <div>Secure and scalable infrastructure</div>
              <div>Real-time automation engine</div>
            </div>
          </div>

          <div className="col-lg-10 d-flex justify-content-center align-items-center animate-float mx-auto mt-4 order-2">
            <div className="picture-box orbit-picture" style={{ width: "100%", maxWidth: "650px" }}>
              Picture content will be added here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Developers;