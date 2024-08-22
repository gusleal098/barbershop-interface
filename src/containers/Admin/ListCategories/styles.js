import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';

export const Container = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;

    @media (max-width: 576px) { 
        margin-top: 70;
    }

    @media (min-width: 768px) { 
        margin-top: 70px;
    }

    @media (min-width: 1024px) { 
        margin-top: 70px;
    }

    @media (min-width: 1440px) { 
        margin-top: 70px;
    }
`

export const EditIconStyle = styled(EditIcon)`
    cursor: pointer;
    font-size: 24px;

    @media (max-width: 576px) {
        font-size: 20px;
    }

    @media (min-width: 768px) { 
        font-size: 22px;
    }

    @media (min-width: 1024px) { 
        font-size: 24px;
    }

    @media (min-width: 1440px) { 
        font-size: 26px;
    }
`
