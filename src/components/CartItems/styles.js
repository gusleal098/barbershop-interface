import styled from "styled-components";

export const Container = styled.div `
    background-color: #ffffff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    padding: 10px;
    width: max-content;
`

export const Header = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 10px;
    border-bottom: 1px solid #000000;
    grid-gap: 60px;

    p {
        font-size: 16px;
        color: #b5b5b5;
    }
`

export const Body = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 10px;
    width: max-content;
    grid-gap: 20px;

    img {
        border-radius: 10px;
        width: 120px;
    }

    p {
        font-size: 16px;
        color: #000000;
        gap: 20px;
    }

    div {

        button {
                height: 30px;
                background: transparent;
                border: none;
                font-size: 24px;
                cursor: pointer;
        }

        img {
                width: 15px;
                margin-top: 5px;
        }
    }
`

export const Footer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #000000;

    p {
        font-size: 16px;
        margin-top: 10px;
        color: #000000;
        font-weight: bold;
    }
`

export const EmptyCart = styled.p `
    padding: 20px;
    text-align: center;
    font-weight: bold;
`
