import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

import Background from '../../assets/background.png';
import BackgroundContainer from '../../assets/background-login.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background: url('${Background}');

  @media (max-width: 768px) { 
    flex-direction: column;
    background-size: cover;
  }

  @media (max-width: 480px) { 
    padding: 20px;
    background-size: cover;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;

  height: 95%;
  width: 500px;
  background: url('${BackgroundContainer}');
  background-size: cover;
  background-position: center;

  img {
    width: 200px;
    margin-bottom: 10px;
  }

  .p {
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 1024px) { /* iPad */
    width: 90%;
    padding: 20px;
  }

  @media (max-width: 768px) { /* Tablets */
    width: 80%;
  }

  @media (max-width: 480px) { /* iPhone XR */
    width: 100%;
    padding: 10px;
  }

  @media (max-width: 430px) { /* iPhone 14 Pro Max */
    width: 100%;
    padding: 10px;

    img {
      width: 150px;
    }
  }
`;

export const Title = styled.h2`
  font-family: "Anton SC", sans-serif;
  font-size: 20px;
  color: #ffffff;

  @media (max-width: 768px) { 
    font-size: 18px;
  }

  @media (max-width: 480px) { 
    font-size: 16px;
  }

  @media (max-width: 430px) { 
    font-size: 16px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
    gap: 15px;
  }

  @media (max-width: 430px) {
    padding: 5px;
    gap: 15px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
  }

  @media (max-width: 768px) { 
    input {
      height: 48px;
    }
    label {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) { 
    input {
      height: 44px;
    }
    label {
      font-size: 14px;
    }
  }

  @media (max-width: 430px) {
    input {
      height: 44px;
    }
    label {
      font-size: 14px;
    }
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) { 
    font-size: 14px;
  }

  @media (max-width: 430px) { 
    font-size: 14px;
  }
`;
