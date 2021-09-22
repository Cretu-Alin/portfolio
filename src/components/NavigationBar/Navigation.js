import React, { useState } from "react";

import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";
import {
  Header,
  Navigator,
  HeaderContainer,
  BurgerMenu,
} from "./Navigation.styled";
import { Container } from "../Wrapper/Container.styled";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleVisibility = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <Header>
      <HeaderContainer>
        <Navigator>
          <img src={logo} />
          <BurgerMenu
            onClick={toggleVisibility}
            className={isMenuOpen && "toggle"}
          >
            <div className="first-line"></div>
            <div className="second-line"></div>
            <div className="third-line"></div>
          </BurgerMenu>
          <nav className={isMenuOpen ? "nav-active" : undefined}>
            <ul>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                offset={-91}
                spy={true}
                activeClass="active"
                className="navigationLink"
                onClick={toggleVisibility}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                offset={-91}
                spy={true}
                activeClass="active"
                className="navigationLink"
                onClick={toggleVisibility}
              >
                About
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={1000}
                offset={-91}
                spy={true}
                activeClass="active"
                className="navigationLink"
                onClick={toggleVisibility}
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                offset={-91}
                spy={true}
                activeClass="active"
                className="navigationLink"
                onClick={toggleVisibility}
              >
                Contact
              </Link>
            </ul>
          </nav>
        </Navigator>
      </HeaderContainer>
    </Header>
  );
};

export default Navigation;
