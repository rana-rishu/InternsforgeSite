import React from "react";
import "./AboutUs.css";
import BookLover from "./../../assets/Booklover.svg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-hero">
          <span className="about-badge">
            <p className="about-badge-text">ABOUT US</p>
          </span>
          <h1 className="about-main-title">Welcome to InternsForge</h1>
          <p className="about-subtitle">
            Empowering Students to Bridge the Gap Between Learning and Industry
          </p>
        </div>

        <div className="about-image-container">
          <div className="about-image-placeholder">
            <div className="image-placeholder-content">
              <img src={BookLover} alt="Book-lover" className="about-image" />
            </div>
          </div>
        </div>

        <div className="about-text-content">
          <section className="about-section">
            <h2 className="about-section-title">Who We Are</h2>
            <p className="about-text">
              InternsForge is a premier ed-tech platform committed to bridging
              the gap between academic learning and industry needs. With over
              25+ tailored courses and guidance from 45+ experienced mentors, we
              empower students to achieve their professional goals confidently.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">Our Mission</h2>
            <p className="about-text">
              Our mission is to transform minds through expert-led internships,
              fostering personal and professional growth. We aim to create a
              seamless learning experience by providing high-quality, affordable
              education, real-world industry insights, and job assistance.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">What We Offer</h2>
            <p className="about-text">
              At InternsForge, we offer programs across diverse domains,
              including IT, engineering, management, and biotechnology, ensuring
              every student finds the perfect path to success. Join us to shape
              your future with confidence and clarity.
            </p>
          </section>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Tailored Courses</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">45+</div>
              <div className="stat-label">Expert Mentors</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Students Empowered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Job Assistance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
