import React from "react";
import industryList from "./industryList";
import "./Industries.css";
import { motion } from "framer-motion";
const Industries = () => {
  return (
    <>
      <h2 id="industries-title">Industries We Serve </h2>
      <div className="industries-container">
        {industryList.map((industry) => {
          return (
            <div>
              <motion.div
                className={`industry-item ${industry.color} `}
                key={industry.id}
                whileHover={{ scale: 1.1, cursor: "pointer", rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: [0.9, 1.1, 1.1, 1] }}
              >
                <motion.img
                  src={industry.image}
                  alt={" "}
                  whileHover={{ rotate: -45 }}
                />
              </motion.div>
              <div>
                <h2> {industry.title} </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Industries;
