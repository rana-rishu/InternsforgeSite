// RecognizedBy.jsx
import React from "react";
import "./RecognizedBy.css";
import iso from "../../assets/images/ISO.webp";
import msme from "../../assets/images/MSME-India.webp";
import startupindia from "../../assets/images/Startup-India.webp";

const RecognizedBy = () => {
  const images = [
    { src: msme, alt: "MSME India" },
    { src: startupindia, alt: "Startup India" },
    { src: iso, alt: "ISO Certified" },
  ];

  return (
    <section className="recognized">
      <div className="recognized-container">
        <div className="recognized-header">
          <span className="recognized-badge">
            <p className="recognized-text">Recognized By</p>
          </span>
        </div>
        <div className="recognized-grid">
          {images.map((img, index) => (
            <div key={index} className="recognized-card">
              <img className="imagescontainer" src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognizedBy;
