import CapaCart from '../../assets/capa.jpg'

import { CartItems, CartResume } from '../../components'
import {
    Container,
    CartImg,
    Wrapper

} from './styles'

export function Cart() {


    return (
        <Container>
            <CartImg src={CapaCart} alt='Capa da home' />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </Container>
    )
}