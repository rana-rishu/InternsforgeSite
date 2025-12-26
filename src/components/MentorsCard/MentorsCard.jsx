import React from "react";
import "./MentorsCard.css";

const MentorsCard = () => {
  const mentors = [
    {
      name: "Archanashree",
      role: "Full Stack Developer",
      company: "",
      experience: "8+ years",
      image: "",
      avatarClass: "mentors__avatar--orange",
    },
    {
      name: "Kajal Jha",
      role: "Senior SDE",
      company: "",
      experience: "7+ years",
      image: "",
    },
    {
      name: "Chetan Vijay",
      role: "DevOps Engineer",
      company: "Amazon",
      experience: "6+ years",
      image: "",
    },
    {
      name: "Vinuthna galagam",
      role: "Cloud Solutions Architect",
      company: "IBM",
      experience: "10+ years",
      image: "",
    },
    {
      name: "Mrinmoy Pal",
      role: "Software Engineer",
      company: "",
      experience: "5+ years",
      image: "",
    },
    {
      name: "Abhishek Pandey",
      role: "Software Engineer",
      company: "Netflix",
      experience: "5+ years",
      image: "",
    },
    {
      name: "Amandeep Singh",
      role: "Software Engineer",
      company: "Netflix",
      experience: "5+ years",
      image: "",
    },
    {
      name: "Abhishek Saurabh",
      role: "Lead Developer",
      company: "",
      experience: "9+ years",
      image: "",
    },
    {
      name: "Krityanand Verma",
      role: "Data Engineer",
      company: "Flipkart",
      experience: "6+ years",
      image: "",
    },
    {
      name: "Rajneesh Kumar",
      role: "Security Engineer",
      company: "Cisco",
      experience: "7+ years",
      image: "",
    },
  ];

  return (
    <div className="mentors">
      <div className="mentors__container">
        <div className="mentors__header">
          <div className="mentors__badge">OUR TEAM</div>
          <h2 className="mentors__title">Meet Our Mentors</h2>
          <p className="mentors__description">
            We are made up by experts, enthusiasts and thinkers who design your
            professional success at{" "}
            <span className="mentors__brand-highlight">Internsloom</span>
          </p>
        </div>
        <div className="mentors__grid">
          {mentors.map((mentor, index) => (
            <div key={index} className="mentors__card">
              <div className="mentors__card-content">
                <div className="mentors__avatar">{mentor.image}</div>
                <h3 className="mentors__name">{mentor.name}</h3>
                <p className="mentors__company">{mentor.company}</p>
                <div className="mentors__experience-badge">
                  {mentor.experience}
                </div>
                <div className="mentors__divider">
                  <p className="mentors__specialization">{mentor.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorsCard;
