import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    margin-top: 70px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 40px;
    }
`

export const Img = styled.img`
    width: 100%; 
    max-width: 70px; 
    border-radius: 5px;

    @media (min-width: 768px) {
        max-width: 100px; 
    }
`

export const EditIconStyle = styled(EditIcon)`
    cursor: pointer;
    font-size: 24px; 

    @media (max-width: 600px) {
        font-size: 20px; 
    }
`
