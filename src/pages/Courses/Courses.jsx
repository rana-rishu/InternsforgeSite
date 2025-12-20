import React from "react";
import "./Courses.css";
import { useLoaderData } from "react-router-dom";
import HeroSection from "../../components/HeroSection/HeroSection";
import Pricing from "../../components/Pricing/Pricing";
import Fireplace from "../../assets/Fireplace.svg";
import Accordions from "../../components/Accordions/Accordions";
import MentorsCard from "../../components/MentorsCard/MentorsCard";
import RecognizedBy from "../../components/RecognizedBy/RecognizedBy";
import DiverseSubject from "../../components/DiverseSubject/DiverseSubject";

const Courses = () => {
  const course = useLoaderData();

  return (
    <div className="Courses">
      <HeroSection course={course} />

      <DiverseSubject />

      <div className="questionSection">
        <div className="sectionLeft">
          <img src={Fireplace} alt="fireplace" />
        </div>
        <div className="sectionRight">
          <Accordions />
        </div>
      </div>

      <Pricing course={course} />
      <MentorsCard />
      <RecognizedBy />
    </div>
  );
};

export default Courses;
