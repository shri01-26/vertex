import React from 'react';
import Link from "./AppLink";
import { Bot, MessageSquareCode, Settings, Code, LineChart, ChevronRight } from 'lucide-react';

const slugify = (text) =>
  text.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-").replace(/[^\w-]/g, "");

const Solutions = () => {
  const solutions = [
    { icon: <Bot size={28} color="#0056b3" />, title: "Conversational AI", desc: "AI chatbots, smart workflows and human-like interactions across all channels." },
    { icon: <MessageSquareCode size={28} color="#0056b3" />, title: "Communication APIs", desc: "WhatsApp Business API, RCS, SMS, Email and more - all in one platform." },
    { icon: <Settings size={28} color="#0056b3" />, title: "Workflow Automation", desc: "Automate processes, reduce manual work and improve operational efficiency." },
    { icon: <Code size={28} color="#0056b3" />, title: "Application Development", desc: "Custom web & mobile apps, SaaS platforms and enterprise software solutions." },
    { icon: <LineChart size={28} color="#0056b3" />, title: "AI & Analytics", desc: "Predictive analytics, AI insights, and intelligent business dashboards." }
  ];

  return (
    <section className="solutions-section py-5" style={{ background: '#f8fafc' }}>
      <style>{`
        .solutions-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          width: 100%;
          max-width: 1520px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .solution-col {
          flex: 1 1 260px;
          max-width: 280px;
          min-width: 250px;
          display: flex;
          flex-direction: column;
        }
        
        .solution-card-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }
        
        .solution-card {
          position: relative;
          height: 290px;
          width: 100%;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(25, 174, 252, 0.12);
          box-shadow: 0 8px 24px rgba(25, 174, 252, 0.03);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 28px 20px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .solution-card:hover {
          transform: translateY(-8px);
          border-color: var(--sky, #19aefc);
          box-shadow: 
            0 20px 48px rgba(15, 23, 42, 0.08),
            0 4px 14px rgba(25, 174, 252, 0.05);
        }
        
        .solution-icon-box {
          background: #f8fafc;
          padding: 16px;
          border-radius: 50%;
          margin-bottom: 16px;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .solution-card:hover .solution-icon-box {
          transform: translateY(-24px) scale(0.9);
          background: rgba(25, 174, 252, 0.08);
        }
        
        .solution-card-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          line-height: 1.3;
        }
        
        .solution-card:hover .solution-card-title {
          transform: translateY(-24px);
          color: var(--blue, #0ea5e9);
        }
        
        .solution-card-reveal {
          position: absolute;
          bottom: 24px;
          left: 20px;
          right: 20px;
          opacity: 0;
          transform: translateY(25px);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        }
        
        .solution-card:hover .solution-card-reveal {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        
        .solution-card-desc {
          font-size: 13.5px;
          color: #475569;
          line-height: 1.55;
          margin: 0 0 16px 0;
        }
        
        .solution-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--blue, #0ea5e9);
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          padding: 6px 14px;
          background: rgba(25, 174, 252, 0.06);
          border-radius: 999px;
        }
        
        .solution-learn-more:hover {
          color: #ffffff !important;
          background: linear-gradient(135deg, var(--sky) 0%, var(--blue) 100%);
          box-shadow: 0 4px 12px rgba(25, 174, 252, 0.25);
          transform: translateX(2px);
        }
      `}</style>

      <div className="container text-center py-5">
        <h2 className="display-6 fw-bold text-dark mb-5">AI-Powered Solutions for Every Business Need</h2>
        
        <div className="solutions-grid">
          {solutions.map((item, idx) => (
            <div className="solution-col" key={idx}>
              <div className="solution-card-wrapper">
                <div className="solution-card">
                  <div className="solution-icon-box">
                    {item.icon}
                  </div>
                  
                  <h6 className="solution-card-title">{item.title}</h6>
                  
                  <div className="solution-card-reveal">
                    <p className="solution-card-desc">{item.desc}</p>
                    <Link to={`/solutions/${slugify(item.title)}`} className="solution-learn-more">
                      Learn More <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
