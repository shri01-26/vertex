function WhatsAppSolution() {
  return (
    <section className="whatsapp-section section-space">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-8 text-center d-flex flex-column align-items-center justify-content-center animate-up mx-auto">
            <h2>
              Easy solutions on <span className="green-text">WhatsApp</span>
            </h2>
            <p className="mx-auto" style={{ maxWidth: "540px" }}>
              Manage ads, forms, leads, appointments, payments and customer
              conversations in one connected chat experience.
            </p>

            <ul className="feature-list text-start mx-auto" style={{ maxWidth: "340px", marginBottom: "20px" }}>
              <li>Jump from ads to chat instantly</li>
              <li>Capture leads inside WhatsApp</li>
              <li>Reduce drop-offs across funnels</li>
              <li>Track chats by ad or source</li>
              <li>Speed up response times</li>
            </ul>

            <button className="btn btn-primary mt-2 mx-auto">Explore Solutions</button>
          </div>

          <div className="col-lg-10 d-flex justify-content-center align-items-center animate-float mx-auto mt-4">
            <div className="picture-box solution-picture" style={{ width: "100%", maxWidth: "650px" }}>
              Picture will be added here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatsAppSolution;