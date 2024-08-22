import styled from 'styled-components'

export const Container = styled.div`
    height: 72px;
    background-color: #212121;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 0 20px;
    box-sizing: border-box;

    @media (max-width: 1024px) { 
        height: 60px;
        padding: 0 15px;
    }

    @media (max-width: 768px) { 
        height: 50px;
        padding: 0 10px;
        justify-content: space-around;
    }

    @media (max-width: 480px) { 
        height: 45px;
        padding: 0 5px;
        justify-content: space-around;
    }

    @media (max-width: 430px) { 
        height: 40px;
        padding: 0 5px;
        justify-content: space-around;
    }
`

export const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    .logo {
        width: 50px;

        @media (max-width: 768px) { 
            width: 40px;
        }

        @media (max-width: 480px) { 
            width: 35px;
        }

        @media (max-width: 430px) { 
            width: 30px;
        }
    }
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    line-height: 19px;
    font-weight: ${props => props.$isActive ? 'bold' : 'normal'};
    margin: 0 10px;

    @media (max-width: 1024px) { 
        font-size: 14px;
        margin: 0 8px;
    }

    @media (max-width: 768px) { 
        font-size: 12px;
        margin: 0 6px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
        margin: 0 4px;
    }

    @media (max-width: 430px) {
        font-size: 10px;
        margin: 0 2px;
    }

    p {
        position: absolute;
        top: 9px;
        background: #ffffff;
        color: #000000;
        border-radius: 50%;
        font-size: 12px;
        height: 18px;
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;

        @media (max-width: 768px) {
            font-size: 10px;
            height: 16px;
            width: 16px;
        }

        @media (max-width: 480px) { 
            font-size: 8px;
            height: 14px;
            width: 14px;
        }

        @media (max-width: 430px) { 
            font-size: 8px;
            height: 14px;
            width: 14px;
        }
    }

    img {
        width: 25px;

        @media (max-width: 768px) { 
            width: 20px;
        }

        @media (max-width: 480px) { 
            width: 18px;
        }

        @media (max-width: 430px) { 
            width: 16px;
        }
    }
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 1024px) { 
        gap: 15px;
    }

    @media (max-width: 768px) { 
        gap: 10px;
    }

    @media (max-width: 480px) {
        gap: 8px;
    }

    @media (max-width: 430px) {
        gap: 6px;
    }
`

export const Line = styled.div`
    height: 40px;
    border: 0.5px solid #bababa;

    @media (max-width: 768px) {
        height: 30px;
    }

    @media (max-width: 480px) {
        height: 25px;
        margin-left: 5px;
    }

    @media (max-width: 430px) { 
        height: 20px;
    }
`

export const ContainerText = styled.div`
    p {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;

        @media (max-width: 1024px) {
            font-size: 12px;
            line-height: 14px;
        }

        @media (max-width: 768px) { 
            font-size: 10px;
            line-height: 12px;
        }

        @media (max-width: 480px) {
            font-size: 8px;
            line-height: 10px;
        }

        @media (max-width: 430px) { 
            font-size: 8px;
            line-height: 10px;
        }
    }
`

export const PageLinkExit = styled.a`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #ffffff;

    @media (max-width: 1024px) {
        font-size: 12px;
    }

    @media (max-width: 768px) { 
        font-size: 10px;
    }

    @media (max-width: 480px) {
        font-size: 8px;
    }

    @media (max-width: 430px) { 
        font-size: 8px;
    }
`
