import styled from "styled-components";
import { colors } from "../../shared/colors";
import countriesApi from "../../assets/countries_api.jpg";

export const ProjectsContainer = styled.div`
  min-height: calc(100vh - 91px);
  position: relative;

  h1 {
    text-align: center;
    font-size: 3rem;
    padding: 2rem;
    margin-bottom: 1rem;
    text-decoration: underline;
    @media (max-width: 400px) {
      font-size: 2.5rem;
    }
  }

  .polygon-yellow {
    position: absolute;
    top: 20%;
    left: 5%;
  }
  .polygon-blue {
    position: absolute;
    top: 25%;
    right: 5%;
  }

  .elipse {
    position: absolute;
    bottom: 5%;
    left: 70%;
  }
`;

export const ProjectsThumbnail = styled.div`
  z-index: 1;
  margin: 0 auto;
  position: relative;
  display: grid;
  // grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem;
  // column-gap: 3rem;
  // row-gap: 3rem;
  grid-template-rows: auto;

  @media (max-width: 1641px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const CardProject = styled.div`
  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 80%), 0 0 0 2px #e6ecf8;
  border-radius: 1rem;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: ${colors.primaryGreen};
    transition: all 0.25s ease-in;
    &:hover {
      color: ${colors.primaryBlack};
      transform: translateY(-5px);
    }
  }

  &:nth-child(odd) {
    background-color: ${colors.primaryBlack};
    color: ${colors.white};
    & a:hover {
      color: ${colors.lightGreen};
    }
  }

  h3 {
    text-align: center;
    font-size: 1.6rem;
    padding: 1rem;
    margin-bottom: 0.7rem;
  }

  p {
    text-align: center;
    font-size: 19px;
  }

  .technologies {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    padding: 2rem;
    font-weight: bold;
    span + span {
      margin-left: 1.5rem;
    }
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 540px) {
    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.4;
    }
  }
`;
