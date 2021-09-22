import styled from "styled-components";
import { colors } from "./colors";

export const Button = styled.button`
  background-color: ${colors.headerColor};
  color: ${colors.white};
  border: 5px solid ${colors.primaryGreen};
  border-radius: 1.4rem;
  font-size: 40px;
  padding: 0.3rem 3rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease-in;
  margin-top: 3rem;
  &:hover {
    background-color: ${colors.primaryGreen};
    transition: all 0.25s ease-in;
  }

  @media (max-width: 470px) {
    font-size: 30px;
    padding: 0.3rem 2rem;
  }
`;
