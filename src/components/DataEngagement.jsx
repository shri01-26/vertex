import React from 'react';

const DataEngagement = () => {
  return (
    <section className="data-engagement py-5" style={{ background: '#f8fafc' }}>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0 pe-lg-5">
             <div className="bg-dark rounded-4 shadow-lg p-1 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Dark Dashboard" className="img-fluid rounded-3" style={{ filter: 'invert(1) hue-rotate(180deg)' }} />
             </div>
          </div>
          <div className="col-lg-5">
            <div className="d-inline-flex px-3 py-1 rounded-pill mb-3" style={{ background: "rgba(0, 123, 255, 0.1)", color: "#007bff", fontSize: "11px", fontWeight: "700" }}>
               REAL-TIME INSIGHTS
            </div>
            <h2 className="display-6 fw-bold text-dark mb-4">Data that drives better engagement</h2>
            <p className="text-secondary mb-5 fs-5">
              Track every message, click and conversation in real time. Make data-backed decisions and maximize your ROI.
            </p>
            <button className="btn btn-outline-primary px-4 py-2 rounded-pill fw-bold">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataEngagement;
