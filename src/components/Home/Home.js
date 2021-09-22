import React from "react";
import { Link } from "react-scroll";
import { Button } from "../../shared/Button.styled";
import Navigation from "../NavigationBar/Navigation";
import { Container } from "../Wrapper/Container.styled";
import { FlexContainer, HeroContainer, HomeContainer } from "./Home.styled";

const Home = () => {
  return (
    <div id="home">
      <HomeContainer>
        <Navigation />
        <FlexContainer>
          <HeroContainer>
            <h1>Hi,</h1>
            <h1>I'm Alin,</h1>
            <h1>Front-end Developer</h1>
            <Button>
              <Link to="projects" smooth={true} duration={1000} offset={-91}>
                View Projects
              </Link>
            </Button>
          </HeroContainer>
        </FlexContainer>
      </HomeContainer>
    </div>
  );
};

export default Home;
