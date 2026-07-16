import React from 'react';
import { Bot, MessageSquare } from 'lucide-react';

const LandingHero = () => {
  return (
    <section className="landing-hero" style={{ padding: '120px 0 80px', background: '#f8fafc' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4 text-dark animated-heading" style={{ lineHeight: '1.2' }}>
              Unified AI Infrastructure<br />
              <span style={{ color: 'var(--sky)' }}>for Communication, Automation &</span><br />
              <span style={{ color: 'var(--sky)' }}>Digital Operations</span>
            </h1>
            <p className="lead text-secondary mb-5" style={{ fontSize: '1.1rem', maxWidth: '90%' }}>
              Vertex Suite empowers enterprises and governments to build intelligent customer engagement, automate workflows, and scale digital operations through our AI-powered platform ecosystem.
            </p>
            <div className="d-flex gap-3 mb-5">
              <button className="btn btn-primary px-5 py-3 rounded-pill fw-bold d-flex align-items-center gap-2" style={{ background: 'var(--sky)', border: 'none' }}>
                Book a Demo <span aria-hidden="true">&rarr;</span>
              </button>
              <button className="btn btn-outline-primary px-5 py-3 rounded-pill fw-bold d-flex align-items-center gap-2" style={{ color: 'var(--sky)', borderColor: 'var(--sky)' }}>
                Explore Platform <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop" alt="User" className="rounded-circle border border-white" style={{ width: '40px', height: '40px', marginLeft: '-10px', zIndex: 3 }} />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop" alt="User" className="rounded-circle border border-white" style={{ width: '40px', height: '40px', marginLeft: '-15px', zIndex: 2 }} />
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop" alt="User" className="rounded-circle border border-white" style={{ width: '40px', height: '40px', marginLeft: '-15px', zIndex: 1 }} />
              </div>
              <span className="text-secondary small">
                Trusted by <strong>100+ organizations</strong><br />across India
              </span>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
             <div className="position-relative" style={{ zIndex: 2 }}>
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Dashboard Mockup" className="img-fluid rounded-4 shadow-lg" style={{ border: '1px solid rgba(0,0,0,0.1)' }} />
             </div>
             {/* Floating Elements */}
             <div className="position-absolute" style={{ top: '-20px', right: '-20px', zIndex: 3 }}>
                <div className="bg-white rounded-circle shadow-sm p-3 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <Bot size={40} color="var(--sky)" />
                </div>
             </div>
             <div className="position-absolute" style={{ bottom: '20%', left: '-30px', zIndex: 3 }}>
                <div className="bg-success rounded-circle shadow-sm p-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                    <MessageSquare size={30} color="#fff" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
