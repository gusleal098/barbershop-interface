import styled from "styled-components";

export const Container = styled.div`
    background: #e5e5e5;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 72px;
    padding: 40px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        padding: 30px;
        margin-top: 50px;
    }

    @media (max-width: 768px) {
        padding: 30px;
        margin-top: 40px;
    }

    @media (max-width: 480px) {
        padding: 20px;
        margin-top: 30px;
    }
`

export const CartImg = styled.img`
    width: 90%;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
    padding-bottom: 30px;
    gap: 290px;
    flex-wrap: wrap; 

    @media (max-width: 1024px) {
        gap: 30px;
    }

    @media (max-width: 820px) {
        gap: 20px;
    }
    
    @media (max-width: 768px) {
        gap: 30px;
    }

    @media (max-width: 480px) {
        gap: 20px;
        flex-direction: column; 
        align-items: center;
    }
`
