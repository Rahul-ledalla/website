import React from "react";
import {
  Container,
  Wrapper,
  Row,
  Column,
  Link,
  Title,
  Text,
  Image,
} from "./styles/footer";

const Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}> {children} </Wrapper>;
};

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}> {children} </Wrapper>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}> {children} </Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}> {children} </Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}> {children} </Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}> {children} </Text>;
};

Footer.Image = function FooterImage(src) {
  return <Image {...src}></Image>;
};

export default Footer;
