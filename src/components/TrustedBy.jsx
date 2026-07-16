import React from 'react';
import { Building2, School, Landmark, CheckCircle } from 'lucide-react';

const TrustedBy = () => {
  const partners = [
    { name: "Raipur Municipal Corporation", icon: <Building2 size={32} /> },
    { name: "Smart City Projects", icon: <CheckCircle size={32} /> },
    { name: "Education Departments", icon: <School size={32} /> },
    { name: "Revenue Departments", icon: <Landmark size={32} /> },
    { name: "PSUs & Enterprises", icon: <Building2 size={32} /> },
    { name: "Nestle", icon: <span className="fw-bold fs-4">Nestle</span> },
    { name: "Jindal Steel & Power", icon: <span className="fw-bold fs-5 text-center">JINDAL<br/>STEEL & POWER</span> },
    { name: "Tata Power", icon: <span className="fw-bold fs-4 text-primary">TATA POWER</span> }
  ];

  return (
    <section className="trusted-by-section py-5 bg-white border-bottom border-light">
      <div className="container text-center">
        <h5 className="fw-bold text-dark mb-5">Trusted by Government & Enterprises</h5>
        <div className="row justify-content-center align-items-center g-4">
          {partners.map((partner, idx) => (
            <div className="col-6 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center" key={idx}>
              <div className="text-secondary mb-2 d-flex align-items-center justify-content-center" style={{ height: '50px' }}>
                {partner.icon}
              </div>
              <small className="text-muted text-center" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>{partner.name}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
