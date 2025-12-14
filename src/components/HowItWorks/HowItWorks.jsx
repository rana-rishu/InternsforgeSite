import logo from "../../assets/logo.svg";
import React from "react";
import { TrendingUp, Users, Brain, Shield } from "lucide-react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const features = [
    {
      icon: <TrendingUp className="feature-icon" />,
      title: "Choose Course",
      description:
        "Advanced authentication ensures safe access while maintaining anonymity",
      color: "#f97316",
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Expert Training",
      description:
        "Share honest college reviews anonymously without revealing your identity",
      color: "#3b82f6",
    },
    {
      icon: <Brain className="feature-icon" />,
      title: "Real Projects",
      description:
        "Rate colleges on personalized metrics like faculty, infrastructure, and placements",
      color: "#8b5cf6",
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Certification & Placement",
      description:
        "Compare colleges side by side using ratings and detailed reviews",
      color: "#14b8a6",
    },
  ];

  return (
    <section className="howitworks">
      <div className="howitworks-container">
        <div className="how-it-works-header">
          <span className="how-it-works-badge">
            <p className="how-it-works-text">How it works ?</p>
          </span>
          <h2 className="how-it-works-title">
            Everything you need to make informed decisions
          </h2>
          <p className="how-it-works-subtitle">
            Our platform provides comprehensive tools and features to help you
            find the best courses
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div
                className="feature-icon-wrapper"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <div style={{ color: feature.color }}>{feature.icon}</div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
