import React from "react";
import Slider from "../components/services-grid/Slider";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-text">
        <h2>What We Deliver.?</h2>
        <h3>
          We offer a wide range of services that can be leveraged by you to
          scale your business to new heights.
        </h3>
      </div>
      <Slider />
    </div>
  );
};

export default Services;
