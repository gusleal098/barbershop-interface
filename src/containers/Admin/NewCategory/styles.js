import styled from 'styled-components'
import { Button } from '../../../components/Button'

export const Container = styled.div `
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;

    h1 {
        margin-bottom: 50px;
        font-size: 40px;
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