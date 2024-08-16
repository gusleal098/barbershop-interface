import styled from "styled-components";
import ReactSelect from "react-select";

export const Container = styled.div `
    background: #efefef;
    min-height: 100vh;
`

export const ProductsImg = styled.img `
    width: 60px;
    border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect) `
    width: 250px;

    .css-13cymwt-control {
        cursor: pointer;
    }
`

export const Menu = styled.div `
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 20px 0;
`

export const LinkMenu = styled.a `
    cursor: pointer;
    font-weight: ${props => (props.$isActiveStatus ? 'bold' : '400')};
    border-bottom: ${props => (props.$isActiveStatus ? '2px solid #000000' : 'none')};
    padding-bottom: 5px;
`

//3c3c3c