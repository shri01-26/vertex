import React from 'react';
import { MdOutlineAutoAwesome } from "react-icons/md";
import { MailOpen, Building2, Send, Clock } from 'lucide-react';

const NewHero = () => {
  return (
    <section className="hero-section text-center pt-5 pb-5" style={{ background: "linear-gradient(180deg, #f0f8ff 0%, #ffffff 100%)" }}>
      <div className="container pt-5 mt-4">
        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4" style={{ background: "rgba(0, 123, 255, 0.1)", color: "#007bff", fontSize: "12px", fontWeight: "600", letterSpacing: "1px" }}>
          <MdOutlineAutoAwesome /> AI-POWERED | AUTOMATE | SCALE
        </div>
        
        <h1 className="display-4 fw-bold mb-3 text-dark" style={{ letterSpacing: "-1px" }}>
          Grow Your Business on <br />
          <span style={{ color: "#007bff" }}>WhatsApp</span>
        </h1>
        
        <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: "600px", fontSize: "1.1rem" }}>
          Automate workflows, boost engagement and scale faster with AI-powered chatflows.
        </p>
        
        <div className="d-flex justify-content-center gap-3 mb-5">
          <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow-sm" style={{ background: "#007bff", border: "none" }}>
            Start Free Trial
          </button>
          <button className="btn btn-outline-primary px-4 py-2 rounded-pill fw-bold" style={{ borderColor: "#007bff", color: "#007bff", background: "#fff" }}>
            Book a Demo
          </button>
        </div>

        {/* Stats Row */}
        <div className="row justify-content-center g-4 mb-5 mx-auto" style={{ maxWidth: "800px" }}>
          <div className="col-auto d-flex align-items-center gap-2">
            <div className="bg-primary bg-opacity-10 p-2 rounded-circle text-primary"><MailOpen size={20} /></div>
            <div className="text-start">
              <div className="fw-bold fs-5 lh-1 text-dark">98%</div>
              <small className="text-secondary" style={{ fontSize: "11px" }}>Open Rate</small>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center gap-2">
            <div className="bg-primary bg-opacity-10 p-2 rounded-circle text-primary"><Building2 size={20} /></div>
            <div className="text-start">
              <div className="fw-bold fs-5 lh-1 text-dark">10K+</div>
              <small className="text-secondary" style={{ fontSize: "11px" }}>Businesses</small>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center gap-2">
            <div className="bg-primary bg-opacity-10 p-2 rounded-circle text-primary"><Send size={20} /></div>
            <div className="text-start">
              <div className="fw-bold fs-5 lh-1 text-dark">150M+</div>
              <small className="text-secondary" style={{ fontSize: "11px" }}>Messages Sent</small>
            </div>
          </div>
          <div className="col-auto d-flex align-items-center gap-2">
            <div className="bg-primary bg-opacity-10 p-2 rounded-circle text-primary"><Clock size={20} /></div>
            <div className="text-start">
              <div className="fw-bold fs-5 lh-1 text-dark">24/7</div>
              <small className="text-secondary" style={{ fontSize: "11px" }}>Customer Support</small>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="position-relative mx-auto mt-4" style={{ maxWidth: "1000px" }}>
           <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="Dashboard" className="img-fluid rounded-4 shadow-lg border border-light" />
        </div>
      </div>
    </section>
  );
};

export default NewHero;
