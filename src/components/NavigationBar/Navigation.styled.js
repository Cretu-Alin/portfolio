import styled from "styled-components";
import { colors } from "../../shared/colors";
import { Container } from "../Wrapper/Container.styled";

export const Header = styled.header`
  height: 91px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${colors.headerColor};
  z-index: 100;
  // position: relative;
`;

export const Navigator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  .navigationLink {
    color: ${colors.white};
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    font-size: 1.75rem;
    &.active {
      color: ${colors.primaryGreen};
    }
    &:hover {
      color: ${colors.primaryGreen};
      transition: all 0.5s ease-in-out;
    }
  }

  .navigationLink + .navigationLink {
    margin-left: 3.5rem;
    @media (max-width: 900px) {
      margin-left: 0;
    }
  }

  @media (max-width: 900px) {
    align-items: center;

    nav {
      position: absolute;
      top: 91px;
      width: 60%;
      background-color: ${colors.white};
      min-height: calc(100vh - 91px);
      right: -100%;
      opacity: 1;
      transition: all 0.5s ease-in;
      &.nav-active {
        transition: all 0.5s ease-in;
        right: 0;
        opacity: 1;
      }
    }

    ul {
      border: 1px solid red;
      min-height: calc(100vh - 91px);
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
    }
    .navigationLink {
      color: ${colors.primaryBlack};
      // margin: 2rem 0;
      font-size: 2rem;

      a {
        opacity: 0;
      }
    }
  }
`;

export const HeaderContainer = styled(Container)`
  @media (max-width: 900px) {
    // width: 100%;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  transition: all 0.4s ease;
  @media (max-width: 900px) {
    display: block;
  }
  div {
    width: 55px;
    height: 4px;
    margin: 10px;
    background-color: ${colors.white};
    transition: all 0.4s ease;
  }

  &.toggle .first-line {
    transform: rotate(-45deg) translate(-2px, 19px);
  }

  &.toggle .second-line {
    opacity: 0;
  }

  &.toggle .third-line {
    transform: rotate(45deg) translate(2px, -19px);
  }
`;
