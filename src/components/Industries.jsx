import { industryTabs, industryCards } from "../content/siteContent";

function Industries() {
  return (
    <section id="industries" className="industry-section section-space">
      <div className="container text-center">
        <h2>
          Built for every industry, made to{" "}
          <span className="blue-text">scale</span>
        </h2>
        <p>
          From startups to enterprises, our platform adapts to your workflows,
          goals and growth.
        </p>

        <div className="industry-tabs mt-4">
          {industryTabs.map((item, index) => (
            <button className={index === 0 ? "active" : ""} key={item}>
              {item}
            </button>
          ))}
        </div>

        <div className="row g-4 mt-4">
          {industryCards.map((item) => (
            <div className="col-md-3" key={item.title}>
              <div className="suite-card animate-up">
                <div className="suite-icon">✦</div>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;