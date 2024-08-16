import PropTypes from 'prop-types'

import { useNavigate } from 'react-router-dom'

import { useTime } from '../../hooks/TimeContext'

import {
    Container,
    TimesButton,

} from './styles'

export function CardTime({ time }) {
    const { putTimeInCart } = useTime()
    const navigate = useNavigate()

    const handleButtonClick = () => {
        putTimeInCart(time)
        navigate('/carrinho')
    }

    return (
        <Container>
                <TimesButton onClick={handleButtonClick}>
                    {time.time}
                </TimesButton>
        </Container>
    )
}

CardTime.propTypes = {
    time: PropTypes.object
}