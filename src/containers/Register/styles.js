import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

import BackgroundLogin from '../../assets/background-login.png'
import Background from '../../assets/background.png'

export const Container = styled.div `
    display: flex;
    height: 100vh;
    width: 100vw;
`

export const LeftContainer = styled.div `
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
        width: 50%;
    }
`

export const RightContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${Background}');

    p {
        color: #ffffff;
        font-size: 18px;
        font-weight: 400;

        a {
            text-decoration: underline;
        }
    }
`

export const Title = styled.h2 `
    font-family: "Anton SC", sans-serif;
    font-size: 30px;
    color: #ffc222;
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`

export const InputContainer = styled.div `
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

    p {
        font-size: 14px;
        line-height: 80%;
        color: #ffb300;
        font-weight: 600;
        height: 10px;
    }
`

export const Link = styled(ReactLink) `
    text-decoration: none;
    color: #ffffff;
`