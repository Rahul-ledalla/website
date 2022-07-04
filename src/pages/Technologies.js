import React from "react";
import technologiesList from "../components/technologies/technologiesList";
import Card3 from "../UI/Card3";
import "./Technologies.css";

const Technologies = () => {
  return (
    <div>
      <div>
        <h2 id="tech-heading">Technologies We Have Expertise In</h2>
      </div>
      <div className="container-tech">
        {technologiesList.map((item) => {
          return (
            <div key={item.id} className="technologies">
              <Card3 title={item.title} image={item.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
