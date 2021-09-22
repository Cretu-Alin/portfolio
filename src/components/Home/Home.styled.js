import styled from "styled-components";
import { colors } from "../../shared/colors";
import homeBg from "../../assets/homebg.png";
import { Container } from "../Wrapper/Container.styled";

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-image: url(${homeBg});
  background-size: cover;
  @media (max-width: 900px) {
    overflow-x: hidden;
  }
`;

export const HeroContainer = styled.div`
  max-width: 750px;
  width: 100%;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: flex-start;
`;

export const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
  // border: 2px solid blue;
  min-height: 100vh;

  h1 {
    font-weight: 400;
    font-size: 67px;
    color: ${colors.white};
    line-height: 1.5;
    @media (max-width: 400px) {
      font-size: 55px;
    }
  }
`;
