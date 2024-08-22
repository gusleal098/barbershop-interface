import styled from "styled-components";

export const Container = styled.div `
    background: #ffffff;
    box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
    border-radius: 30px;
    display: flex;
    padding: 16px;
    gap: 12px;
    justify-content: space-evenly;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 200px;
    }

    @media (max-width: 768px) { 
        height: 130px;
        gap: 10px;
    }
`

export const Image = styled.img `
    max-width: 150px;
    border-radius: 10px;

    @media (max-width: 768px) { 
        max-width: 100px;
        max-height: 100px;
    }
`

export const ProductName = styled.p `
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #000000;

    @media (max-width: 768px) { 
        font-size: 14px;
    }
`

export const ProductPrice = styled.p `
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-top: 30px;

    color: #000000;

    @media (max-width: 768px) { 
        font-size: 16px;
        margin-top: 10px;
    }
`