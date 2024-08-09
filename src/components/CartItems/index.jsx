import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { formatDateCart } from '../../utils/formatDate'
import Trash from '../../assets/trash.png'

import {
    Container,
    Header,
    Body,
    Footer,
    EmptyCart

} from './styles'

export function CartItems() {
    const { cartProducts } = useCart()

    console.log(cartProducts)

    return (
        <Container>
            <Header>
                <p></p>
                <p>Serviços</p>
                <p>Preço</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ?
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url} />
                        <p>{product.name}</p>
                        <p>{product.price ? formatCurrency(product.price) : ''}</p>
                        <div>
                            <button onClick={() => deleteProducts(product.id)}><img src={Trash} alt="lata-de-lixo"/></button>
                        </div>
                    </Body>
                ))
                : (
                    <EmptyCart>Carrinho vazio</EmptyCart>
                )
            }

            {cartProducts && cartProducts.length > 0 && (
                <Footer>
                    {cartProducts.map(product => (
                        product.date && product.time ? (
                            <p key={product.id}>{`${formatDateCart(product.date.date)} às ${product.time}`}</p>
                        ) : null
                    ))}
                </Footer>
            )}
            
        </Container>
    )
}