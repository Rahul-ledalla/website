import React from "react";
import Navbar from "../components/navbar/Navbar";
import { FooterContainer } from "../containers/footer";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <FooterContainer />
    </div>
  );
};

export default Layout;
