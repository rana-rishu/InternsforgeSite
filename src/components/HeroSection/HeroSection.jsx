import React from "react";
import "./HeroSection.css";

const HeroSection = ({ course }) => {
  const title = course?.CourseName || "Course Title";
  const description =
    course?.Description ||
    "Learn with our industry-relevant, hands-on courses designed for real-world skills.";
  const duration = course?.duration || "8 Weeks";
  const level = course?.level || "Beginner";
  const studentsEnrolled = course?.studentsEnrolled || "500+";
  const brochurelink = course?.brochurelink || "";

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__grid">
          <div>
            <h1 className="hero__title">{title}</h1>
            <p className="hero__description">{description}</p>
            <div className="hero__button-container">
              <button className="hero__button--primary" onClick={() => window.open(brochurelink, '')}>
                Brochure
              </button>
              <button className="hero__button--primary">Register</button>
            </div>
          </div>
          <div>
            <div className="hero__info-card">
              <div className="hero__info-list">
                <div className="hero__info-row">
                  <span className="hero__info-label">Course Duration</span>
                  <span className="hero__info-value">{duration}</span>
                </div>
                <div className="hero__divider"></div>
                <div className="hero__info-row">
                  <span className="hero__info-label">Difficulty Level</span>
                  <span className="hero__info-value">{level}</span>
                </div>
                <div className="hero__divider"></div>
                <div className="hero__info-row">
                  <span className="hero__info-label">Students Enrolled</span>
                  <span className="hero__info-value">{studentsEnrolled}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
