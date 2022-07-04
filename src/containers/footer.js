import React from "react";
import Footer from "../components/footer";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newgenLogo from "../images/footer/newgen-white-logo.webp";
import startupIndia from "../images/footer/startupindia.webp";
import refrens from "../images/footer/refrens.png";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>KARBH IT SOLUTIONS</Footer.Title>
            <Footer.Text>
              <FontAwesomeIcon icon={faLocationDot} /> 718 - Sakar-9 Beside Old
              Reserve Bank of India, Near City Gold, Ashram Rd, Navrangpura,
              Ahmedabad, Gujarat, India -380009.
            </Footer.Text>
            <br />
            <Footer.Text>
              <FontAwesomeIcon icon={faPhone} /> (+91) 8490084381
            </Footer.Text>
            <br />
            <Footer.Text>
              <FontAwesomeIcon icon={faEnvelope} />
              info@karbh.com
            </Footer.Text>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Menu</Footer.Title>
            <Footer.Link href="#">Services</Footer.Link>
            <Footer.Link href="#">How We Work</Footer.Link>
            <Footer.Link href="#">Portfolio</Footer.Link>
            <Footer.Link href="#">Product</Footer.Link>
            <Footer.Link href="#">About Us</Footer.Link>
            <Footer.Link href="#">Hire</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
            <Footer.Link href="#">Blog</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Web Development</Footer.Link>
            <Footer.Link href="#">Mobile Development</Footer.Link>
            <Footer.Link href="#">Customer Software Development</Footer.Link>
            <Footer.Link href="#">UI/UX Design</Footer.Link>
            <Footer.Link href="#">Graphic Design</Footer.Link>
            <Footer.Link href="#">ERP Development</Footer.Link>
            <Footer.Link href="#">Quality Assuarance</Footer.Link>
            <Footer.Link href="#">AI/IOT Solutions</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Supported by</Footer.Title>
            <Footer.Image src={newgenLogo}></Footer.Image>
            <br />
            <Footer.Title>Recognized by</Footer.Title>
            <Footer.Image src={startupIndia}></Footer.Image>
            <br />
            <Footer.Image src={refrens}></Footer.Image>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
