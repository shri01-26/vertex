import React from 'react';

const CTABanner = () => {
  return (
    <section className="cta-banner py-5" style={{ background: '#0a192f', color: '#fff' }}>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-lg-8 mb-4 mb-lg-0 text-center text-lg-start">
            <h2 className="fw-bold mb-2">Ready to Transform Your Digital Operations?</h2>
            <p className="text-light mb-0 opacity-75">Let's build the future of communication, automation and growth — together.</p>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
             <div className="d-flex gap-3 justify-content-center justify-content-lg-end">
               <button className="btn btn-light px-4 py-2 fw-bold text-dark rounded-pill">Talk to an Expert</button>
               <button className="btn btn-outline-light px-4 py-2 fw-bold rounded-pill">Book a Demo</button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
