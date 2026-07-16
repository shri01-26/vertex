import React from 'react';

const SuccessStories = () => {
  const stories = [
    {
      img: "https://images.unsplash.com/photo-1577726514652-3d5f85028443?w=600&h=400&fit=crop",
      title: "Raipur Municipal Corporation",
      desc: "Implemented WhatsApp-based citizen communication system that improved service efficiency by 60%.",
      link: "#"
    },
    {
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      title: "Education Department",
      desc: "Automated exam notifications and student engagement for 2M+ students.",
      link: "#"
    },
    {
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      title: "Revenue Department",
      desc: "Digitized property tax and land records workflows improving collections.",
      link: "#"
    }
  ];

  return (
    <section className="success-stories py-5" style={{ background: '#f8fafc' }}>
      <div className="container py-5">
        <h2 className="display-6 fw-bold text-dark mb-5 text-center">Success Stories That Inspire</h2>
        <div className="row g-4">
          {stories.map((story, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <img src={story.img} alt={story.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body p-4 d-flex flex-column align-items-center text-center">
                  <h5 className="card-title fw-bold text-dark">{story.title}</h5>
                  <p className="card-text text-secondary mb-4 flex-grow-1" style={{ fontSize: '14px', lineHeight: '1.5', maxWidth: "300px" }}>{story.desc}</p>
                  <a href={story.link} className="fw-bold text-decoration-none d-flex align-items-center gap-1 justify-content-center mx-auto" style={{ color: '#0056b3', fontSize: '14px' }}>
                    Read Case Study <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
