import PropTypes from 'prop-types'

import { useCart } from '../../hooks/CartContext'

import {
    Container,
    TimesButton

} from './styles'

export function CardTime({ time }) {
    const { putProductInCart } = useCart()

    return (
        <Container>
                <TimesButton onClick={() => putProductInCart(time)}>
                    {time.time}
                </TimesButton>
        </Container>
    )
}

CardTime.propTypes = {
    time: PropTypes.object
}