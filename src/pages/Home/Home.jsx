import React from "react";
import "./Home.css";
import Component from "./../../components/Component/Component.jsx";
import ScrollWrapper from "./../../components/ScrollWrapper/ScrollWrapper.jsx";
import DiverseSubject from "./../../components/DiverseSubject/DiverseSubject.jsx";
import HowItWorks from "./../../components/HowItWorks/HowItWorks.jsx";
import Accordions from "./../../components/Accordions/Accordions.jsx";
import stayAtHomeImage from "./../../assets/Stayathome.svg";
import RecognizedBy from "./../../components/RecognizedBy/RecognizedBy.jsx";

const Home = () => {
  return (
    <div className="home-page">
      <div className="app-wraper">
        <Component />
        <ScrollWrapper />
      </div>
      <DiverseSubject />
      <HowItWorks />
      <div className="questionSection">
        <div className="sectionLeft">
          <img src={stayAtHomeImage} alt="" />
        </div>
        <div className="sectionRight">
          <Accordions />
        </div>
      </div>
      <RecognizedBy />
    </div>
  );
};

export default Home;
