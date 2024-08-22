import styled from "styled-components";
import ReactSelect from "react-select";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Container = styled.div`
    background: #efefef;
    height: 90%;
    padding: 20px;
    margin-top: 70px;

    
    @media (max-width: 480px) {
        
    } 

    @media (min-width: 768px) {
        padding: 30px;
    }

  
    @media (min-width: 1280px) {
        padding: 40px; 
    }
`

export const ProductsImg = styled.img`
    width: 100%;
    max-width: 60px;
    border-radius: 5px;
    margin-bottom: 10px;

    
    @media (min-width: 768px) {
        max-width: 80px; 
    }

    
    @media (min-width: 1280px) {
        max-width: 100px; 
    }
`

export const ReactSelectStyle = styled(ReactSelect)`
    width: 150px; 

    .css-13cymwt-control {
        cursor: pointer;
        width: 150px;
    }

   
    @media (max-width: 768px) {
        width: 100%; 
    }

    @media (min-width: 1280px) {
        width: 70%; 
    }

    @media (max-width: 1280px) {
        width: 70%;
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 15px;
    justify-content: center;
    margin: 20px 0;
    text-align: center; 

    @media (max-width: 480px) {
        flex-direction: row; 
        gap: 10px; 
    }
    @media (min-width: 768px) {
        flex-direction: row; 
        gap: 30px;
    }

    @media (min-width: 1280px) {
        gap: 40px;
    }
`

export const LinkMenu = styled.a`
    cursor: pointer;
    font-weight: ${props => props.$isActiveStatus ? 'bold' : 'normal'};
    border-bottom: ${props => props.$isActiveStatus ? '2px solid #000000' : 'none'};
    padding-bottom: 5px;
    font-size: 16px;

    @media (max-width: 480px) {
        font-size: 12px; 
    }

    @media (min-width: 768px) {
        font-size: 15px; 
    }

    @media (min-width: 1280px) {
        font-size: 20px;
    }
`

export const WhatsAppIconStyle = styled(WhatsAppIcon)`
    cursor: pointer;
    color: green;
    margin-left: 5px;
    font-size: 10px; 
`
