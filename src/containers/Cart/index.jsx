import CapaCart from '../../assets/capa.jpg'

import { CartItems } from '../../components'
import {
    Container,
    CartImg,

} from './styles'

export function Cart() {
    

    return (
        <Container>
            <CartImg src={CapaCart} alt='Capa da home' />
            <CartItems />
        </Container>
    )
}