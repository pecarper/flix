// src/components/Footer/Footer.jsx
import React from "react";
import logo from "../../assets/logo.png";
import { FooterContainer, Logo, TextoFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Flix logo" />
      <TextoFooter>Pe + Alura Latam &copy; 2025</TextoFooter>
    </FooterContainer>
  );
};

export default Footer;
