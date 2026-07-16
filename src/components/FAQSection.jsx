import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is WhatsApp Business API?",
      answer: "The WhatsApp Business API is a scalable messaging solution designed for medium and large businesses to communicate with customers globally. Unlike the standard app, it supports advanced automation, multi-agent access, CRM integrations, and high-volume broadcasting."
    },
    {
      question: "How is WhatsApp Business API different from the WhatsApp Business App?",
      answer: "The WhatsApp Business App is built for small businesses managing messages manually from a single phone. The API has no app interface; it connects directly to platforms like Vertex Suite, allowing large teams to manage programmable automation, chatbots, and advanced marketing campaigns."
    },
    {
      question: "Can businesses of all sizes use the WhatsApp Business API?",
      answer: "Yes! While originally designed for enterprise, the API is highly beneficial for any growing business that needs to automate customer support, send bulk transactional alerts, or scale their marketing efforts efficiently."
    },
    {
      question: "What documents are required for onboarding?",
      answer: "To get verified, you typically need a registered business name, a live business website, a verified Meta Business Manager account, and supporting documentation (like a Certificate of Incorporation or GST certificate) to prove your business identity."
    },
    {
      question: "Can I use my existing WhatsApp number?",
      answer: "Yes, you can migrate an existing active number to the WhatsApp Business API. However, please note that once a number is connected to the API, it can no longer be used on the standard WhatsApp mobile app."
    },
    {
      question: "How long does the onboarding process take?",
      answer: "The technical integration via Vertex Suite is instant. However, the Meta Business Verification process—which is required to unlock full messaging tier limits—typically takes between 1 to 5 business days."
    },
    {
      question: "Is GST mandatory?",
      answer: "For Indian businesses, a GST (Goods and Services Tax) certificate is highly recommended and widely accepted by Meta as proof of business identity, making the verification process much smoother and faster."
    },
    {
      question: "Can customers complete payments within WhatsApp?",
      answer: "Yes! WhatsApp supports native in-chat payments and external payment links. Businesses can integrate supported payment gateways so customers can seamlessly checkout and complete purchases without ever leaving the conversation."
    },
    {
      question: "Can I use UPI-based payments for Indian customers?",
      answer: "Absolutely. For businesses and customers in India, WhatsApp natively supports UPI, allowing secure, instant bank-to-bank transfers directly within your automated WhatsApp chat flows."
    }
  ];

  return (
    <section className="section-space" style={{ background: 'linear-gradient(180deg, #e0f2fe 0%, #f8fafc 100%)', padding: '100px 0' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header Area */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#0369a1', margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>
          
          <div style={{ 
            background: '#ffffff', 
            padding: '24px 32px', 
            borderRadius: '12px', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <p style={{ margin: 0, fontSize: '21px', color: '#64748b', lineHeight: 1.6 }}>
              Get clear answers to your questions about <strong style={{ color: '#0284c7' }}>Vertex Suite</strong>, including automation features, templates, pricing, and real-world use cases. Find everything you need to get started smoothly.
            </p>
          </div>
        </div>

        {/* Accordion Area */}
        <div style={{ background: '#ffffff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              style={{ 
                borderBottom: index !== faqs.length - 1 ? '1px solid #e2e8f0' : 'none',
                background: openIndex === index ? '#f8fafc' : '#ffffff',
                transition: 'background 0.3s ease'
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '24px 32px', 
                  background: 'none', 
                  border: 'none', 
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontSize: '1.1rem', fontWeight: 500, color: openIndex === index ? '#0369a1' : '#334155', paddingRight: '24px' }}>
                  {faq.question}
                </span>
                <div style={{ 
                  color: openIndex === index ? '#0284c7' : '#3b82f6', 
                  minWidth: '24px', 
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} strokeWidth={2.5} />}
                </div>
              </button>
              
              <div style={{ 
                maxHeight: openIndex === index ? '300px' : '0', 
                overflow: 'hidden', 
                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: openIndex === index ? 1 : 0
              }}>
                <div style={{ padding: '0 32px 24px', color: '#475569', fontSize: '17px', lineHeight: 1.7 }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
