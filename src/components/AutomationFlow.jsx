import React from 'react';
import { User, Zap, Bot, Send, LineChart } from 'lucide-react';

const AutomationFlow = () => {
  return (
    <section className="automation-flow py-5 bg-white text-center">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap text-start">
          <div className="mb-5 mb-lg-0 pe-lg-5" style={{ maxWidth: '300px' }}>
             <div className="d-inline-flex px-3 py-1 rounded-pill mb-3" style={{ background: "rgba(0, 123, 255, 0.1)", color: "#007bff", fontSize: "11px", fontWeight: "700" }}>
               AUTOMATE EVERYTHING
             </div>
             <h2 className="fw-bold mb-3">Powerful automation built for scale</h2>
             <p className="text-secondary small mb-0">Orchestrate complex workflows with code. From customer onboarding to post-sales engagement — automate every step.</p>
          </div>
          
          <div className="d-flex align-items-center justify-content-center flex-grow-1 position-relative w-100">
             {/* Flow Line */}
             <div className="position-absolute w-100 d-none d-md-block" style={{ height: '2px', background: 'linear-gradient(90deg, #20c997, #007bff, #6f42c1, #fd7e14, #17a2b8)', top: '32px', zIndex: 0 }}></div>
             
             <div className="d-flex justify-content-between w-100 position-relative z-1 flex-wrap flex-md-nowrap gap-4 gap-md-0">
               {/* Step 1 */}
               <div className="d-flex flex-column align-items-center text-center bg-white">
                 <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-2" style={{ width: '64px', height: '64px', border: '2px solid #20c997' }}>
                   <User size={32} color="#20c997" />
                 </div>
                 <div className="fw-bold small text-dark">User</div>
                 <div className="text-secondary" style={{ fontSize: '11px' }}>Starts<br/>Conversation</div>
               </div>
               
               {/* Step 2 */}
               <div className="d-flex flex-column align-items-center text-center bg-white">
                 <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-2" style={{ width: '64px', height: '64px', border: '2px solid #007bff' }}>
                   <Zap size={32} color="#007bff" />
                 </div>
                 <div className="fw-bold small" style={{ color: '#007bff' }}>Trigger</div>
                 <div className="text-secondary" style={{ fontSize: '11px' }}>New Message<br/>Received</div>
               </div>

               {/* Step 3 */}
               <div className="d-flex flex-column align-items-center text-center bg-white">
                 <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-2" style={{ width: '64px', height: '64px', border: '2px solid #6f42c1' }}>
                   <Bot size={32} color="#6f42c1" />
                 </div>
                 <div className="fw-bold small" style={{ color: '#6f42c1' }}>AI / Bot</div>
                 <div className="text-secondary" style={{ fontSize: '11px' }}>Process &<br/>Understand</div>
               </div>

               {/* Step 4 */}
               <div className="d-flex flex-column align-items-center text-center bg-white">
                 <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-2" style={{ width: '64px', height: '64px', border: '2px solid #fd7e14' }}>
                   <Send size={32} color="#fd7e14" />
                 </div>
                 <div className="fw-bold small" style={{ color: '#fd7e14' }}>Action</div>
                 <div className="text-secondary" style={{ fontSize: '11px' }}>Send Response /<br/>Take Action</div>
               </div>

               {/* Step 5 */}
               <div className="d-flex flex-column align-items-center text-center bg-white">
                 <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-2" style={{ width: '64px', height: '64px', border: '2px solid #17a2b8' }}>
                   <LineChart size={32} color="#17a2b8" />
                 </div>
                 <div className="fw-bold small" style={{ color: '#17a2b8' }}>Analytics</div>
                 <div className="text-secondary" style={{ fontSize: '11px' }}>Track & Improve<br/>Metrics</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationFlow;
