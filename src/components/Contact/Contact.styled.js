import styled from "styled-components";
import { Button } from "../../shared/Button.styled";
import { colors } from "../../shared/colors";

export const ContactContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 91px);
  img {
    max-width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
  }

  .blue {
    z-index: -1;
    right: 0;
  }

  .green {
    z-index: -1;
    left: 0;
    transition: all 0.5s ease-in;
  }
  h1 {
    text-align: center;
    padding: 2rem;
    font-size: 3rem;
    text-decoration: underline;
    @media (max-width: 400px) {
      font-size: 2.5rem;
    }
  }
`;

export const ContactForm = styled.div`
  background-color: ${colors.primaryBlack};
  color: ${colors.white};
  font-size: 2rem;
  border-radius: 2rem;
  width: 80%;
  max-width: 700px;
  margin: 0 auto;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 4rem 0;
    // min-height: 70vh;
    @media (max-width: 700px) {
      padding: 1rem 0;
    }
    .show-error::placeholder {
      color: #a3172e;
    }
    .submit-result {
      text-align: center;
      font-size: 1.2rem;
      width: 80%;
    }
  }
`;

export const FormInput = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  .label {
    width: 40%;
  }

  input {
    width: 80%;
    outline: none;
    color: ${colors.white};
    font-size: 18px;
    border: none;
    border-left: 5px solid ${colors.primaryGreen};
    padding: 1rem 0.5rem;
    border-radius: 0.5rem;
    background-color: ${colors.headerColor};
  }
  textarea {
    resize: none;
    width: 80%;
    height: 8.5rem;
    border: none;
    background-color: ${colors.headerColor};
    color: ${colors.white};
    border-left: 5px solid ${colors.primaryGreen};
    border-radius: 0.5rem;
    outline: none;
    font-size: 18px;
    padding: 1rem 0.5rem;
  }

  @media (max-width: 700px) {
    margin-bottom: 0.3rem;
    flex-direction: column;
    align-items: flex-start;

    input,
    textarea {
      font-size: 14px;
      width: 100%;
    }
    label {
      font-size: 20px;
    }
  }
`;

export const SubmitBtn = styled(Button)`
  font-size: 1.5rem;

  @media (max-width: 700px) {
    margin-top: 2rem;
  }
`;
