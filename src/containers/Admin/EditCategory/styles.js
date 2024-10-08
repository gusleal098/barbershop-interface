import styled from 'styled-components'
import { Button } from '../../../components/Button'

export const Container = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin-bottom: 50px;
        font-size: 60px;
    }

    form {
        background: #565656;
        border-radius: 10px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`

export const Label = styled.p `
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 3px;
`

export const Input = styled.input`
    height: 40px;
    border-radius: 8px;
    background: #ffffff;
    border: none;
    width: 100%;
    min-width: 280px;
    padding-left: 10px;
`

export const ButtonStyle = styled(Button)`
    width: 100%;
    margin-top: 25px;
`

export const LabelUpload = styled.label`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px dashed #ffffff;
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    gap: 10px;

    input {
        opacity: 0;
        width: 1px;
    }
`

