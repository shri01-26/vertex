import React from 'react';

const TrustLogos = () => {
  const logos = [
    { name: "Meta", img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Salesforce", img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "NVIDIA", img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Nvidia_logo.svg/250px-Nvidia_logo.svg.png" },
    { name: "Deloitte", img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
    { name: "McDonalds", img: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg" },
    { name: "OYO", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_Logo.svg" },
    { name: "MakeMyTrip", img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/MakeMyTrip_Logo.svg" },
    { name: "Shiprocket", img: "https://upload.wikimedia.org/wikipedia/en/1/14/Shiprocket_Logo.svg" } // Placeholder generic image if actual isn't working perfectly
  ];

  return (
    <section className="trust-logos py-5 bg-white">
      <div className="container text-center">
        <p className="text-secondary small fw-bold mb-4" style={{ letterSpacing: "0.5px" }}>Trusted by innovative brands worldwide</p>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5 opacity-75">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo.img} alt={logo.name} style={{ height: "30px", objectFit: "contain", filter: "grayscale(100%)", transition: "all 0.3s ease" }} className="hover-grayscale-off" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
