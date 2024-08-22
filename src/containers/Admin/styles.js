import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100vw;
    background: #efefef;
    justify-content: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 425px) {
        padding: 10px;
    }
`;

export const ContainerItems = styled.div`
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    
    @media (max-width: 1024px) {
        padding: 15px;
    }

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (max-width: 425px) {
        padding: 5px;
    }
`;
