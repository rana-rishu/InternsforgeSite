import React from "react";
import "./ScrollWrapper.css";
import img1 from "../../assets/images/amazon.png";
import img2 from "../../assets/images/amd.png";
import img3 from "../../assets/images/cisco.png";
import img4 from "../../assets/images/ibm.png";
import img5 from "../../assets/images/talview.png";

const ScrollWrapper = () => {
  return (
    <div className="scroll-wrapper">
      <p>More than 100+ companies trusted us</p>
      <div className="scroll-track">
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />

        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
        <img src={img5} />
      </div>
    </div>
  );
};

export default ScrollWrapper;
