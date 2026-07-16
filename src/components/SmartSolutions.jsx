import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const SmartSolutions = () => {
  const [activeTab, setActiveTab] = useState('Government');
  const tabs = ['Government', 'Travel & Hospitality', 'Retail & E-commerce', 'Healthcare', 'Logistics', 'Education', 'Real Estate'];

  return (
    <section className="smart-solutions py-5" style={{ background: '#f8fafc' }}>
      <div className="container py-4 text-center">
        <h2 className="display-6 fw-bold text-dark mb-2">Smart solutions for every industry</h2>
        <p className="text-secondary mb-5">Solve real business challenges and deliver exceptional customer experiences.</p>
        
        {/* Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {tabs.map(tab => (
            <button 
              key={tab}
              className={`btn rounded-pill px-4 py-2 fw-bold text-nowrap`}
              style={{
                border: activeTab === tab ? '1px solid #007bff' : '1px solid #dee2e6',
                background: activeTab === tab ? '#e6f2ff' : '#fff',
                color: activeTab === tab ? '#007bff' : '#6c757d',
                transition: 'all 0.2s ease'
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="row align-items-center bg-white p-4 p-md-5 rounded-4 shadow-sm text-start position-relative overflow-hidden">
          <div className="col-lg-5 z-1">
            <ul className="list-unstyled d-flex flex-column gap-3 mb-5">
              <li className="d-flex align-items-center gap-3 fw-bold text-dark">
                <CheckCircle size={24} color="#28a745" /> Citizen communication & notifications
              </li>
              <li className="d-flex align-items-center gap-3 fw-bold text-dark">
                <CheckCircle size={24} color="#28a745" /> Service requests & grievance redressal
              </li>
              <li className="d-flex align-items-center gap-3 fw-bold text-dark">
                <CheckCircle size={24} color="#28a745" /> Automated updates & reminders
              </li>
              <li className="d-flex align-items-center gap-3 fw-bold text-dark">
                <CheckCircle size={24} color="#28a745" /> Two-way engagement at scale
              </li>
            </ul>
            <button className="btn btn-outline-primary px-4 py-2 rounded-pill fw-bold">
              Explore all use cases
            </button>
          </div>
          <div className="col-lg-7 position-relative mt-5 mt-lg-0 z-0">
             <img src="https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?auto=format&fit=crop&w=800&q=80" alt="Building" className="img-fluid rounded-4 w-100" style={{ height: '300px', objectFit: 'cover' }} />
             <div className="position-absolute bg-white rounded-3 shadow-lg p-3" style={{ right: '20px', top: '-20px', width: '280px' }}>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                   <div className="bg-success rounded-circle" style={{ width: '30px', height: '30px' }}></div>
                   <div>
                     <div className="fw-bold fs-6 lh-1">Government Helpdesk</div>
                     <small className="text-success" style={{ fontSize: '10px' }}>Online</small>
                   </div>
                </div>
                <div className="bg-light p-2 rounded mb-2 text-dark small" style={{ maxWidth: '80%' }}>Hi! How can I help you today?</div>
                <div className="d-flex flex-column gap-2 mt-3">
                   <button className="btn btn-sm btn-outline-primary rounded-pill w-100 text-start">Check Application Status</button>
                   <button className="btn btn-sm btn-outline-primary rounded-pill w-100 text-start">Raise a Request</button>
                   <button className="btn btn-sm btn-outline-primary rounded-pill w-100 text-start">Tax Information</button>
                   <button className="btn btn-sm btn-outline-primary rounded-pill w-100 text-start">Talk to an Agent</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSolutions;
