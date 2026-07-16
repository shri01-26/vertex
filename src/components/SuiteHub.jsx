import React from 'react';
import { 
  MessageCircle, 
  Megaphone, 
  BarChart2, 
  CreditCard, 
  Package, 
  Truck, 
  Building, 
  Star 
} from 'lucide-react';

const SuiteHub = () => {
  const leftFeatures = [
    { icon: <MessageCircle size={20} color="#0056b3" />, title: "Communication Suite", desc: "Omnichannel messaging, WhatsApp, RCS, Email & more" },
    { icon: <Megaphone size={20} color="#0056b3" />, title: "Marketing Suite", desc: "Campaigns, automation, audience segmentation & journeys" },
    { icon: <BarChart2 size={20} color="#0056b3" />, title: "Analytics Suite", desc: "Real-time insights, dashboards & performance tracking" },
    { icon: <CreditCard size={20} color="#0056b3" />, title: "Billing & Payments Suite", desc: "Invoicing, payments, settlements & financial management" }
  ];

  const rightFeatures = [
    { icon: <Package size={20} color="#0056b3" />, title: "Inventory Suite", desc: "Stock management, catalogs & operations" },
    { icon: <Truck size={20} color="#0056b3" />, title: "Order & Shipment Suite", desc: "Order processing, tracking & logistics automation" },
    { icon: <Building size={20} color="#0056b3" />, title: "Warehouse & Vendor Suite", desc: "Vendor management, procurement & warehouse operations" },
    { icon: <Star size={20} color="#0056b3" />, title: "Customer Feedback Suite", desc: "Ratings, feedback collection & satisfaction analytics" }
  ];

  return (
    <section className="suite-hub-section py-5" style={{ background: '#f8fafc' }}>
      <div className="container text-center py-5">
        <h5 className="text-primary fw-bold mb-2" style={{ color: '#0056b3' }}>Vertex Suite</h5>
        <h2 className="display-5 fw-bold text-dark mb-3">One Platform. Endless Possibilities.</h2>
        <p className="text-secondary mx-auto mb-5" style={{ maxWidth: '600px' }}>
          A unified SaaS ecosystem designed to digitize, automate and scale every aspect of your business.
        </p>

        <div className="row position-relative align-items-center mt-5">
          {/* Central Logo - Absolutely positioned in center for visual layout */}
          <div className="d-none d-lg-flex position-absolute justify-content-center align-items-center" style={{ left: 0, right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 0, pointerEvents: 'none' }}>
            <div className="rounded-circle d-flex align-items-center justify-content-center bg-white shadow-lg" 
                 style={{ width: '180px', height: '180px', border: '1px solid rgba(0,86,179,0.1)' }}>
              <div className="rounded-circle d-flex align-items-center justify-content-center" 
                   style={{ width: '140px', height: '140px', border: '1px dashed #0056b3' }}>
                <span className="fw-bold" style={{ fontSize: '3rem', color: '#0056b3' }}>VS</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5 z-1">
            <div className="d-flex flex-column gap-3">
              {leftFeatures.map((item, idx) => (
                <div key={idx} className="bg-white p-3 rounded-3 shadow-sm d-flex align-items-start gap-3 border border-light text-start" style={{ position: 'relative' }}>
                  {/* Fake connector line */}
                  <div className="d-none d-lg-block position-absolute" style={{ right: '-30px', top: '50%', width: '30px', height: '1px', background: 'rgba(0,86,179,0.2)' }}></div>
                  <div className="bg-light p-2 rounded text-primary">{item.icon}</div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '14px' }}>{item.title}</h6>
                    <p className="text-secondary mb-0" style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer for mobile or middle column */}
          <div className="col-lg-2 py-4 d-lg-none d-flex justify-content-center">
             <div className="rounded-circle d-flex align-items-center justify-content-center bg-white shadow" style={{ width: '120px', height: '120px' }}>
                <span className="fw-bold" style={{ fontSize: '2rem', color: '#0056b3' }}>VS</span>
             </div>
          </div>

          <div className="col-lg-5 z-1">
            <div className="d-flex flex-column gap-3">
              {rightFeatures.map((item, idx) => (
                <div key={idx} className="bg-white p-3 rounded-3 shadow-sm d-flex align-items-start gap-3 border border-light text-start" style={{ position: 'relative' }}>
                  {/* Fake connector line */}
                  <div className="d-none d-lg-block position-absolute" style={{ left: '-30px', top: '50%', width: '30px', height: '1px', background: 'rgba(0,86,179,0.2)' }}></div>
                  <div className="bg-light p-2 rounded text-primary">{item.icon}</div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '14px' }}>{item.title}</h6>
                    <p className="text-secondary mb-0" style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4">
          <button className="btn btn-primary px-5 py-3 rounded-pill fw-bold" style={{ background: '#0056b3', border: 'none' }}>
            Explore Vertex Suite
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuiteHub;
