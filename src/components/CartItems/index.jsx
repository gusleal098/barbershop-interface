import { useCart } from '../../hooks/CartContext'
import { useTime } from '../../hooks/TimeContext'
import formatCurrency from '../../utils/formatCurrency'
import { formatDateCart } from '../../utils/formatDate'
import Trash from '../../assets/trash.png'

import { useNavigate } from 'react-router-dom'

import {
    Container,
    Header,
    Body,
    Footer,
    EmptyCart

} from './styles'

export function CartItems() {
    const { cartProducts, deleteProducts } = useCart()
    const { cartTimes, deleteTimes } = useTime()
    const navigate = useNavigate()

    const handleDeleteAndNavigate = (timeId) => {
        deleteTimes(timeId)
        navigate('/')
    }

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
                        <img className='img-corte' src={product.url} />
                        <p>{product.name}</p>
                        <p>{product.price ? formatCurrency(product.price) : null}</p>
                        {product.url || product.name || product.price ?
                        <div>
                            <button onClick={() => deleteProducts(product.id)}><img className='trash' src={Trash} alt="lata-de-lixo"/></button>
                        </div>
                        : null}
                    </Body>
                ))
                : (
                    <EmptyCart>Carrinho vazio</EmptyCart>
                )
            }

            {cartTimes && cartTimes.length > 0 ?
                cartTimes.map(time => (
                    <Footer key={time.id}>
                        {time.date && time.time ? (
                            <p key={time.id}>{`${formatDateCart(time.date.date)} às ${time.time}`}</p>
                        ) : null}
                        {time.date || time.time ?
                        <div>
                            <button onClick={() => handleDeleteAndNavigate(time.id)}><p>Excluir horário</p></button>
                        </div>
                        : null}
                    </Footer>
            )) : null}
            
        </Container>
    )
}