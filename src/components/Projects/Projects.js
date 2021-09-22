import React from "react";
import { projectInfo } from "../../projectsInfo.js";
import {
  CardProject,
  ProjectsContainer,
  ProjectsThumbnail,
} from "./Projects.styled.js";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import polygon from "../../assets/polygon_1.svg";
import polygonBlue from "../../assets/polygon_2.svg";
import elipse from "../../assets/elipse_1.svg";
import { Container } from "../Wrapper/Container.styled";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <img src={polygon} className="polygon-yellow" />
      <img src={polygonBlue} className="polygon-blue" />
      <img src={elipse} className="elipse" />
      <Container>
        <h1>My Projects</h1>
        <ProjectsThumbnail>
          {projectInfo.map((project, index) => {
            return (
              <CardProject key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => {
                    return <span key={index}>{tech}</span>;
                  })}
                </div>
                <div className="social">
                  <a href={project.gitHub} target="_blank" rel="noreferrer">
                    <AiFillGithub size={30} />
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noreferrer">
                    <AiOutlineLink size={30} />
                  </a>
                </div>
              </CardProject>
            );
          })}
        </ProjectsThumbnail>
      </Container>
    </ProjectsContainer>
  );
};

export default Projects;
