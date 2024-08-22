import styled from "styled-components";

export const ContainerButton = styled.button`
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 5px;
    background: #000000;
    font-family: "Anton SC", sans-serif;
    font-size: 25px;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        background-color: #1f1f1f;
        border: 1px solid #ffffff;
    }

    @media (max-width: 1024px) { 
        height: 45px;
        font-size: 22px;
    }

    @media (max-width: 768px) { 
        height: 40px;
        font-size: 20px;
    }

    @media (max-width: 480px) { 
        height: 36px;
        font-size: 18px;
    }

    @media (max-width: 430px) {
        height: 32px;
        font-size: 16px;
    }
`

export const ContainerButtonDisabled = styled.button`
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 5px;
    background: #d3d3d3;
    font-family: "Anton SC", sans-serif;
    font-size: 25px;
    color: #ffffff;

    @media (max-width: 1024px) { 
        height: 45px;
        font-size: 22px;
    }

    @media (max-width: 768px) { 
        height: 40px;
        font-size: 20px;
    }

    @media (max-width: 480px) {
        height: 36px;
        font-size: 18px;
    }

    @media (max-width: 430px) {
        height: 32px;
        font-size: 16px;
    }
`
