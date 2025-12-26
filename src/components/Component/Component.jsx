import React from "react";
import "./Component.css";
import readingGlasees from "../../assets/Reading-glasses.svg";
import knowledge from "../../assets/Knowledge.svg";

const Component = () => {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="heroShape" clipPathUnits="objectBoundingBox">
            <path
              d="
            M 40 77 Q 41 77 42 79 Q 45 87 48 96 Q 49 98 50 98 Q 75 98 98 98 Q 99 98 99 97 Q 99 50 99 11 Q 99 10 98 10 Q 50 10 2 10 Q 1 10 1 11 Q 1 40 1 76 Q 1 77 2 77 Z"
              transform="scale(0.01, 0.01)"
            />
          </clipPath>
        </defs>
      </svg>

      <div className="hero-container">
        <div className="hero-left">
          <p className="mainText">
            Access the world's best learning course with{" "}
            <span className="companyName">Internsloom</span>
          </p>
          <p className="helperText">
            Discover a world of knowledge with the cutting-edge online courses
            app. Empower yourself to succeed in your carrers, passion and
            personal growth journey.
          </p>
          <button className="explore-btn"> Explore </button>
        </div>
        <div className="hero-right">
          <img src={knowledge} />
        </div>
      </div>
    </>
  );
};

export default Component;
