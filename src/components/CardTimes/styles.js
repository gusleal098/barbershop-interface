import styled from "styled-components";

export const Container = styled.div `
`

export const TimesButton = styled.button `
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: #ffffff;
    background: #000000;

    &:hover {
        border: 1px solid #ffffff;
    }

    @media (max-width: 1024px) { 
        width: 90px;
        height: 36px;
    }

    @media (max-width: 768px) {
        width: 80px;
        height: 32px;
    }

    @media (max-width: 480px) { 
        width: 70px;
        height: 28px;
    }

    @media (max-width: 430px) {
        width: 60px;
        height: 24px;
    }
`
