
import Schedules from './Schedules'
import ListProducts from './ListProducts'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'

import {
    Container,
    ContainerItems
} 
from './styles'

export function Admin() {

    return (
        <Container>
            <SideMenuAdmin />
            <ContainerItems>
            <Schedules />
            <ListProducts />
            </ContainerItems>
        </Container>
    )
}