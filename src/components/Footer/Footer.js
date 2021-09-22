import React from "react";
import { FooterContainer } from "./Footer.styled";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <a
        href="https://www.linkedin.com/in/alin-ionut-cretu/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className="social-icons linkedin" size={25} />
      </a>
      2021 Designed &amp; Built By
      <a href="https://github.com/Cretu-Alin" target="_blank" rel="noreferrer">
        Alin Cretu
      </a>
      <a href="https://github.com/Cretu-Alin" target="_blank" rel="noreferrer">
        <AiFillGithub className="social-icons" size={25} />
      </a>
    </FooterContainer>
  );
};

export default Footer;
