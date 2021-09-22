import styled from "styled-components";
import { colors } from "../../shared/colors";

export const FooterContainer = styled.footer`
  font-size: 1.4rem;
  background-color: ${colors.primaryBlack};
  display: flex;
  justify-content: center;
  // align-items: center;
  padding: 1rem 0;
  color: ${colors.white};
  @media (max-width: 500px) {
    font-size: 0.85rem;
  }
  .social-icons {
    // margin: 0 1.2rem;
    cursor: pointer;

    &.linkedin {
      margin-right: 0.5rem;
    }
  }

  a {
    margin-left: 0.5rem;
    color: ${colors.primaryGreen};
    text-decoration: none;
  }

  @media (max-width: 1400px) {
    z-index: 1;
  }

  @media (max-width: 500px) {
    font-size: 0.85rem;
    align-items: center;
  }
`;
