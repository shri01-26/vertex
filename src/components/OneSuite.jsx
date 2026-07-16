import React from 'react';
import { MessageCircle, Bot, Zap, LineChart, CreditCard, Code } from 'lucide-react';

const OneSuite = () => {
  const cards = [
    { icon: <MessageCircle size={32} color="#25D366" />, title: "WhatsApp Marketing", desc: "Broadcast campaigns and promotions." },
    { icon: <Bot size={32} color="#007bff" />, title: "WhatsApp Chatbot", desc: "AI-powered bots for 24/7 customer support." },
    { icon: <Zap size={32} color="#6f42c1" />, title: "WhatsApp Automation", desc: "Workflows, triggers and auto-responses." },
    { icon: <LineChart size={32} color="#fd7e14" />, title: "WhatsApp Analytics", desc: "Track performance and optimize results." },
    { icon: <CreditCard size={32} color="#20c997" />, title: "WhatsApp Payments", desc: "Secure payments inside WhatsApp." },
    { icon: <Code size={32} color="#17a2b8" />, title: "WhatsApp API", desc: "Powerful APIs for seamless integration." }
  ];

  return (
    <section className="one-suite py-5 bg-white">
      <div className="container text-center py-4">
        <h2 className="display-6 fw-bold text-dark mb-2">One Suite. <span style={{ color: "#007bff" }}>Endless Possibilities.</span></h2>
        <p className="text-secondary mb-5">All the WhatsApp tools you need to automate, engage and grow.</p>
        
        <div className="row justify-content-center g-4">
          {cards.map((card, idx) => (
            <div className="col-6 col-md-4 col-lg-2" key={idx}>
              <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-3 transition-all hover-lift">
                <div className="mb-3 d-flex justify-content-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center bg-light" style={{ width: "64px", height: "64px" }}>
                    {card.icon}
                  </div>
                </div>
                <h6 className="fw-bold mb-2" style={{ fontSize: "14px" }}>{card.title}</h6>
                <p className="text-secondary small mb-0" style={{ fontSize: "12px", lineHeight: "1.4" }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OneSuite;
