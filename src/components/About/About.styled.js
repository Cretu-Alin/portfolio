import styled from "styled-components";
import { colors } from "../../shared/colors";

export const AboutMain = styled.div`
  display: flex;
  .about-image {
    max-width: 100%;
    flex: 1;
  }

  @media (max-width: 1235px) {
    flex-direction: column;
  }
`;

export const AboutMainText = styled.div`
  margin-left: 1rem;
  p {
    font-size: 20px;
    line-height: 1.6;
  }
  p + p {
    margin-top: 1.5rem;
  }
  flex: 1;
  @media (max-width: 1235px) {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
`;

export const AboutContainer = styled.div`
  min-height: calc(100vh - 91px);
  display: grid;
  grid-template-rows: 1fr 1fr auto;
  grid-template-areas:
    "about"
    "about"
    "icons";

  .tech {
    max-width: 100%;
    display: block;
  }
`;

export const AboutTitle = styled.h1`
  text-decoration: underline;
  font-size: 3rem;
  padding: 2rem 0rem 3rem 0rem;
  text-align: center;
  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

export const AboutContent = styled.div`
  width: 80%;
  margin: 0 auto;
  grid-area: about;
`;

export const SkillsAndTechnologies = styled.div`
  // border: 3px solid pink;
  // display: flex;
  // justify-content: center;
  // align-items: flex-end;
  // height: 25%;
  grid-area: icons;
  h2 {
    color: ${colors.primaryGreen};
    font-size: 2rem;
    font-weight: 300;
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;
