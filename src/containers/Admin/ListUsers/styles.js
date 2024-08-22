import styled from 'styled-components'

import EditIcon from '@mui/icons-material/Edit';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Container = styled.div`
    margin-top: 70px;
`

export const Img = styled.img`
    width: 70px;
    border-radius: 5px;
`

export const EditIconStyle = styled(EditIcon)`
    cursor: pointer;
`

export const WhatsAppIconStyle = styled(WhatsAppIcon)`
    cursor: pointer;
    margin-left: 5px;
    color: green;
`
