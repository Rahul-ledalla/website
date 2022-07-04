import React from "react";
import "./Card3.css";

const Card3 = (props) => {
  return (
    <div className="card">
      <img className="card3__image" src={props.image} alt={props.title} />
      <h2 className="card3__title"> {props.title} </h2>
    </div>
  );
};

export default Card3;
