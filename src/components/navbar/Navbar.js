import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

import logo from "../../images/karbh-it-solutions.png";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const clickHandler = () => {
    setMenuIcon((menuIcon) => !menuIcon);
  };
  return (
    <nav className={menuIcon ? "NavbarItems active" : "NavbarItems"}>
      <div className="navbar-logo">
        <img src={logo} alt="main-logo"></img>
      </div>
      <div className="menu-icon" onClick={clickHandler}>
        <FontAwesomeIcon
          icon={menuIcon ? faTimes : faBars}
          className="fa-3x"
        ></FontAwesomeIcon>
      </div>
      <div>
        <ul className={menuIcon ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
