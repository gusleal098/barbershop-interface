import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import { useCart } from '../../hooks/CartContext'

import Person from '../../assets/person.png'
import Cart from '../../assets/cart.png'
import Logo from '../../assets/logo-play.png'

import {
    Container,
    ContainerLeft,
    PageLink,
    PageLinkExit,
    ContainerRight,
    ContainerText,
    Line,

} from './styles'

export function Header(){
    const { logout, userData } = useUser()
    const {cartProducts} = useCart([])

    const navigate = useNavigate()
    const location = useLocation()

    const logoutUser = () => {
        logout()
        navigate('/login')
    }

    const [cartQuantity, setCartQuantity] = useState(0)

    useEffect(() => {
        setCartQuantity(cartProducts.length)
    }, [cartProducts])

    return (
        <Container>
            <ContainerLeft>
                <img className='logo' src={Logo} alt='logo-play' />
                <PageLink onClick={() => navigate('/')} $isActive={location.pathname === '/'}>Home</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => navigate('/carrinho')}>
                    <img src={Cart} alt='carrinho' />
                    {cartQuantity > 0 && 
                            <p>{cartQuantity}</p>
                    }
                    
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt='logo-pessoa' />
                </PageLink>
                <ContainerText>
                    <p>Olá, {userData?.name || 'Usuário'}</p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>
        </Container>
    )
}