import React from "react";
import OpeningImage from "../images/banner-vector-index.png";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landpage-container">
      <div className="landpage-left">
        <h1>
          <span>KARBH</span>
          <br /> IT SOLUTIONS
        </h1>
        <h3>Integrating Business & Technology</h3>
      </div>
      <div className="landpage-right">
        <img src={OpeningImage} alt="OpeningImage" />
      </div>
    </div>
  );
};

export default LandingPage;
