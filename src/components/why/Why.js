import React from "react";
import Circle from "../../UI/Card2";
import reasons from "./reasons";
import "./Why.css";
const Why = () => {
  return (
    <div>
      <div className="why-text">
        <h2>Why We ?</h2>
      </div>
      <div className="why-container">
        {reasons.map((item) => {
          return <Circle number={item.id} text={item.reason} />;
        })}
      </div>
    </div>
  );
};

export default Why;
