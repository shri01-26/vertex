import React from 'react';
import { Landmark, ShoppingCart, Truck, GraduationCap, HeartPulse, Plane, Wallet, Building2 } from 'lucide-react';

const IndustriesWeEmpower = () => {
  const industries = [
    { icon: <Landmark size={32} color="#0056b3" />, label: "Government" },
    { icon: <ShoppingCart size={32} color="#0056b3" />, label: "Retail & E-commerce" },
    { icon: <Truck size={32} color="#0056b3" />, label: "Logistics & Transport" },
    { icon: <GraduationCap size={32} color="#0056b3" />, label: "Education" },
    { icon: <HeartPulse size={32} color="#0056b3" />, label: "Healthcare" },
    { icon: <Plane size={32} color="#0056b3" />, label: "Travel & Hospitality" },
    { icon: <Wallet size={32} color="#0056b3" />, label: "Finance & BFSI" },
    { icon: <Building2 size={32} color="#0056b3" />, label: "Real Estate" },
  ];

  return (
    <section className="industries-section py-5 bg-white">
      <div className="container text-center py-5">
        <h2 className="display-6 fw-bold text-dark mb-5">Industries We Empower</h2>
        <div className="row justify-content-center g-4">
          {industries.map((item, idx) => (
            <div className="col d-flex flex-column align-items-center gap-3" key={idx}>
              <div className="bg-light rounded p-3 d-flex align-items-center justify-content-center transition-all hover-lift" style={{ width: '80px', height: '80px', border: '1px solid rgba(0,86,179,0.1)' }}>
                {item.icon}
              </div>
              <small className="fw-bold text-dark text-center" style={{ fontSize: '12px' }}>{item.label}</small>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <a href="#" className="fw-bold text-decoration-none" style={{ color: '#0056b3' }}>Explore All Industries &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeEmpower;
