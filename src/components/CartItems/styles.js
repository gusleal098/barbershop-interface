import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    max-width: 1000px; 

    @media (max-width: 1024px) {
        padding: 10px;
        width: 50%;
    }

    @media (max-width: 768px) {
        padding: 10px;
        width: 90%;
    }

    @media (max-width: 480px) {
        padding: 8px;
        width: 90%;
        max-width: 400px;
    }
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 10px;
    border-bottom: 1px solid #000000;
    grid-gap: 60px;

    p {
        font-size: 16px;
        color: #b5b5b5;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr); 
        grid-gap: 20px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(4, 1fr); 
        grid-gap: 10px;

        p {
            font-size: 13px;
        }
    }
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 10px;
    grid-gap: 60px;

    .img-corte {
        border-radius: 10px;
        width: 120px;
        height: auto; 
    }

    p {
        font-size: 16px;
        color: #000000;
    }

    div {
        button {
            height: 30px;
            background: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }

        .trash {
            width: 15px;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr); 
        grid-gap: 20px;

        .img-corte {
            width: 105px; 
        }
    }

    @media (max-width: 820px) {
        grid-template-columns: repeat(4, 1fr); 
        grid-gap: 15px;

        .img-corte {
            width: 70px; 
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(4, 1fr); 
        grid-gap: 20px;

        .img-corte {
            width: 100px; 
        }
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(4, 1fr); 
        grid-gap: 10px;

        p {
            font-size: 12px;
        }

        .img-corte {
            width: 65px; 
        }
    }
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #000000;
    padding: 10px;

    p {
        font-size: 16px;
        margin-top: 10px;
        color: #000000;
    }

    div {
        button {
            height: 30px;
            background: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
            margin-left: 20px;
            display: flex;
            align-items: center;

            p {
                font-size: 12px;
                font-weight: bold;
                text-decoration: underline;
            }
        }
    }

    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
        gap: 10px;

        div {
            button {
                margin-left: 0;
            }
        }
    }

    @media (max-width: 480px) {
        padding: 5px;

        p {
            font-size: 14px;
        }

        div {
            button {
                height: 25px;
                font-size: 20px;
            }
        }
    }
`

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 15px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        padding: 10px;
    }
`
