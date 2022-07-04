import React from "react";
import Industries from "../components/industries/Industries";
import Why from "../components/why/Why";
import LandingPage from "./LandingPage";
import Services from "./Services";
import Technologies from "./Technologies";
import Testimonial from "../components/testimonials/Testimonial";
const Home = () => {
  return (
    <div>
      <LandingPage />
      <Services />
      <Industries />
      <Why />
      <Technologies />
      <Testimonial />
    </div>
  );
};

export default Home;
