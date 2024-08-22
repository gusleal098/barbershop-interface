import styled from 'styled-components'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: #e5e5e5;
    box-sizing: border-box;
    bottom: 0;
`

export const Credits = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background: #000000;
    color: #ffffff;
    gap: 10px;
    width: 100%;
    text-align: center;

    a {
        color: #ffffff;
        text-decoration: none;
    }

    @media (max-width: 480px) {
        height: 35px;
    }
`

export const ContainerFooter = styled.div`
    height: 200px;
    background-color: #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;

    @media (max-width: 1024px) {
        padding: 15px;
        width: 90%;
    }

    @media (max-width: 768px) {
        padding: 15px;
        width: 90%;
    }

    @media (max-width: 480px) {
        padding: 10px;
        width: 90%;
        height: 100%;
    }
`

export const ContainerInfos = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    border-radius: 10px;
    gap: 70px;
    padding: 70px;

    @media (max-width: 768px) {
        gap: 20px;
        padding: 15px;
    }

    @media (max-width: 480px) {
        gap: 10px;
        padding: 10px;
        flex-direction: column;
    }
`

export const Address = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1 {
        font-size: 16px;
    }

    p {
        font-size: 12px;
    }
`

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
        display: flex;
        gap: 15px;
    }

    h1 {
        font-size: 16px;
    }
    
`

export const WhatsAppIconStyle = styled(WhatsAppIcon)`
    cursor: pointer;
    color: #000000;
    font-size: 24px;

    &:hover {
        color: #fff;
        background: green;
        border-radius: 5px;
    }
`

export const InstagramIconStyle = styled(InstagramIcon)`
    cursor: pointer;
    color: #000000;
    font-size: 24px;

    &:hover {
        color: #fff;
        background: linear-gradient(45deg, #FCAF45, #FF5C65, #833AB4, #405DE6);
        border-radius: 5px;
    }
`

export const FacebookIconStyle = styled(FacebookIcon)`
    cursor: pointer;
    color: #000000;
    font-size: 24px;

    &:hover {
        color: #fff;
        background: #1877F2;
        border-radius: 5px;
    }
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;

    h1 {
        font-size: 16px;
    }

    div {
        display: flex;
        gap: 15px;
    }

    p {
        font-size: 12px;
        display: flex;
        gap: 5px;
    }
`
