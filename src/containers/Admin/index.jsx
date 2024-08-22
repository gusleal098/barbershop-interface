import { useLocation } from 'react-router-dom'

import Schedules from './Schedules'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import EditProduct from './EditProduct'
import NewDate from './NewDate'
import NewTime from './NewTime'
import ListCategories from './ListCategories'
import EditCategory from './EditCategory'
import NewCategory from './NewCategory'
import ListUsers from './ListUsers'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'

import {
    Container,
    ContainerItems
} 
from './styles'

export function Admin() {
    const location = useLocation()
    const decodedPathname = decodeURIComponent(location.pathname);

    return (
        <Container>
            <SideMenuAdmin path={decodedPathname} />
            <ContainerItems>
                {decodedPathname === '/agendamentos' && <Schedules />}
                {decodedPathname === '/listar-serviços' && <ListProducts />}
                {decodedPathname === '/novo-serviço' && <NewProduct />}
                {decodedPathname === '/editar-serviço' && <EditProduct />}
                {decodedPathname === '/nova-data' && <NewDate />}
                {decodedPathname === '/novo-horário' && <NewTime />}
                {decodedPathname === '/listar-categorias' && <ListCategories />}
                {decodedPathname === '/editar-categoria' && <EditCategory />}
                {decodedPathname === '/nova-categoria' && <NewCategory />}
                {decodedPathname === '/clientes' && <ListUsers />}
            </ContainerItems>
        </Container>
    )
}