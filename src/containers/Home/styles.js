import styled from "styled-components";

export const Container = styled.div `
    background: #e5e5e5;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top: 72px;
`

export const ContainerBody = styled.div `
    display: flex;
`

export const CategoriesMenu = styled.div `
    display: flex;
    gap: 50px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`

export const HomeImg = styled.img `
    width: 100%;
`

export const CategoryButton = styled.button `
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${ props => (props.$isActiveCategory && '2px solid #000000')};
    color: ${ props => (props.$isActiveCategory ? '#000000' : '#9a9a9d')};
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 5px;
`

export const LeftContainer = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .rec.rec-arrow {
        background-color: #000000;
        color: #efefef;
    }

    .rec.rec-arrow:hover {
        border: 2px solid #000000;
        background-color: #efefef;
        color: #000000;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }

    .rec-dot_active {
        background-color: #000000;
        box-shadow: 0 0 1px 3px rgb(0 0 0);
    }
`

export const ProductsContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 40px;
    width: 50%;
    
    justify-content: center;
`

export const RightContainer = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .message-add-service {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        margin-top: 15px;
    }

    .rec.rec-arrow {
        background-color: #000000;
        color: #efefef;
    }

    .rec.rec-arrow:hover {
        border: 2px solid #000000;
        background-color: #efefef;
        color: #000000;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }

    .rec-dot_active {
        background-color: #000000;
        box-shadow: 0 0 1px 3px rgb(0 0 0);
    }
`

export const DatesMenu = styled.div `
    display: flex;
    gap: 50px;
    margin-top: 20px;
    justify-content: center;
`

export const DateButton = styled.button `
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${ props => (props.$isActiveDate && '2px solid #000000')};
    color: ${ props => (props.$isActiveDate ? '#000000' : '#9a9a9d')};
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 5px;
`

export const TimesContainer = styled.div `
    margin-top: 41px;
    padding: 20px;
    background: #ffffff;
    width: max-content;
    min-width: 800px;
    max-width: 800px;
    min-height: 565px;
    border-radius: 20px;

    p {
        display: flex;
        justify-content: center;
    }
`

export const Body = styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    
`

export const EmptyTimes = styled.p `
    display: flex;
    font-size: 20px;
    justify-content: center;
`