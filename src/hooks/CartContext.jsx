import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const updateLocalStorage = async products => {
        await localStorage.setItem('barbershop:cartInfo', JSON.stringify(products))
    }

    const deleteLocalStorage = async products => {
        await localStorage.removeItem('barbershop:cartInfo', JSON.stringify(products))
    }

    const putProductInCart = async product => {
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)


        let newCartProducts = []
        if (cartIndex >= 0) {
            newCartProducts = cartProducts

            alert('Este serviço/horário já foi adicionado ao carrinho')
           
            setCartProducts(newCartProducts)
        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartProducts(newCartProducts)
        }


        await updateLocalStorage(newCartProducts)

    }

    const deleteProducts = async productId => {
        const newCart = cartProducts.filter(product => product.id != productId)

        setCartProducts(newCart)

        await updateLocalStorage (newCart)
    }

    const clearCart = async () => {
        setCartProducts([])

        await deleteLocalStorage([])
    }

    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('barbershop:cartInfo')

            if(clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }
        }

        loadUserData()
    }, [])

    return (
        <CartContext.Provider value={{
            putProductInCart, 
            cartProducts,
            deleteProducts,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error("useCart must be used with UserContext")
    }

    return context
}

CartProvider.propTypes = {
    children: PropTypes.node
}