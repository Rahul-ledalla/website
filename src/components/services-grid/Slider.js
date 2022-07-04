import React from "react";
import servicelist from "./servicelist";
import Card from "../../UI/Card";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel">
      <div className="inner-carousel">
        {servicelist.map((service) => {
          return (
            <div className="item">
              <Card
                image={service.image}
                title={service.title}
                description={service.description}
              />
              <div className="image__overlay">
                <button className="overlay_btn">More info</button>
                <button className="overlay_btn">Contact Us</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
