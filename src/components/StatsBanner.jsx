import React from 'react';
import { Send, Users, Building, ShieldCheck, Award } from 'lucide-react';

const StatsBanner = () => {
  const stats = [
    { icon: <Send size={24} />, value: "500M+", label: "Messages Delivered" },
    { icon: <Users size={24} />, value: "100+", label: "Enterprise Clients" },
    { icon: <Building size={24} />, value: "50+", label: "Government Projects" },
    { icon: <ShieldCheck size={24} />, value: "99.9%", label: "Platform Uptime" },
    { icon: <Award size={24} />, value: "10+", label: "Years of Innovation" }
  ];

  return (
    <section className="stats-banner py-4" style={{ background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%)', color: 'white' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center g-4 text-center">
          {stats.map((stat, idx) => (
            <div className="col d-flex flex-column align-items-center justify-content-center gap-2" key={idx}>
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.2)' }}>
                {stat.icon}
              </div>
              <div>
                <h4 className="fw-bold mb-0">{stat.value}</h4>
                <small style={{ fontSize: '11px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
