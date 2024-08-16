import styled from 'styled-components'

export const Container = styled.div`
    height: 72px;
    background-color: #212121;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
`

export const ContainerLeft = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;

    .logo {
        width: 50px;
    }
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    line-height: 19px;
    font-weight: ${props => (props.$isActive ? 'bold' : 'normal')};

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
    }

    img {
        width: 25px;
    }
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Line = styled.div`
    height: 40px;
    border: 0.5px solid #bababa;
`

export const ContainerText = styled.div`
    p {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color:#ffffff;
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
`

// export const AddItem = styled.p`
//     position: absolute;
//     top: 5px;
//     right: 10px;
//     background: #9758a6;
//     color: #ffffff;
//     border-radius: 50%;
// `