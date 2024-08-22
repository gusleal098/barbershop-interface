import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background: #3c3c3c;
    width: ${props => props.isOpen ? '300px' : '0'}; 
    top: 0;
    left: 0;
    z-index: 1;
    position: fixed; 
    height: 100%;
    overflow-x: hidden;
    transition: width 0.3s ease; 

    hr {
        margin: 100px 15px;
        border: 0.5px solid #ffffff; 
        
        @media (max-width: 480px) { 
            margin: 80px 15px 50px;
            top: 20px;
        }
    }

    @media (max-width: 768px) { 
        width: ${props => props.isOpen ? '250px' : '0'};
    }

    @media (max-width: 480px) {
        width: ${props => props.isOpen ? '250px' : '0'};
    }
`;

export const ItemContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    background: ${props => props.$isActive ? '#565656' : 'none'};
    border-radius: 2px;
    margin: 8px;
    padding-left: 20px;

    .icon {
        color: #ffffff;
    }
`;

export const ListLink = styled(Link)`
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    text-decoration: none;
    margin-left: 8px;
`;

export const MenuButton = styled.button`
    position: fixed;
    top: 20px;
    left: 20px;
    background: ${props => props.isOpen ? '#FF0000' : '#000000'};
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000; 
    margin-bottom: 0px;

    &:hover {
        background: ${props => props.isOpen ? '#B22222' : '#333333'};
    }

    @media (max-width: 768px) {
        top: 10px;
        left: 10px;
    }

    @media (max-width: 480px) {
        top: 20px;
        left: 20px;
        padding: 8px 16px;
    }
`;