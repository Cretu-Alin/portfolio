import React from "react";
import {
  AboutContainer,
  AboutMain,
  AboutMainText,
  AboutTitle,
  AboutContent,
  SkillsAndTechnologies,
} from "./About.styled";
import AboutImage from "../../assets/about-image.svg";
import iconsTech from "../../assets/icons-tech.png";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutTitle>About me</AboutTitle>
        <AboutMain>
          <img src={AboutImage} className="about-image" />

          <AboutMainText>
            <p>
              My name is Alin and I enjoy creating things that have “life” on
              the internet. My interest in Front-end development started back in
              2013, when in my first year of university, I started a small
              project using technologies like HTML, CSS and Adobe Dreamweaver.
            </p>
            <p>
              In 2020 I graduated the Web Development program from the Informal
              School of IT in Iasi, completing my knowledge related to the
              Front-end field using HTML, CSS, JavaScript, React and Material
              UI.
            </p>
            <p>
              After finishing the course, I have continued my journey building
              on the knowledge gained until then, by reading, watching tutorials
              and making practical projects in order to improve my skills.
            </p>
          </AboutMainText>
        </AboutMain>
      </AboutContent>

      <SkillsAndTechnologies>
        <h2>Skills and Technologies</h2>

        <img src={iconsTech} className="tech" />
      </SkillsAndTechnologies>
    </AboutContainer>
  );
};

export default About;
