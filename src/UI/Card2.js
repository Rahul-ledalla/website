import React from "react";
import "./Card2.css";

const Circle = (props) => {
  return (
    <div className="circle-container">
      <div className="circle-inner">
        <h2> {props.number} </h2>
        <p> {props.text} </p>
      </div>
    </div>
  );
};

export default Circle;
