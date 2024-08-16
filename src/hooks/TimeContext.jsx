import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const TimeContext = createContext({})

export const TimeProvider = ({children}) => {
    const [cartTimes, setCartTimes] = useState([])

    const updateLocalStorage = async times => {
        await localStorage.setItem('barbershop:timeInfo', JSON.stringify(times))
    }

    const deleteLocalStorage = async times => {
        await localStorage.removeItem('barbershop:timeInfo', JSON.stringify(times))
    }

    const putTimeInCart = async time => {
        const timeIndex = cartTimes.findIndex(tm => tm.id === time.id)


        let newCartTimes = []
        if (timeIndex >= 0) {
            newCartTimes = cartTimes

            alert('Este serviço/horário já foi adicionado ao carrinho')
           
            setCartTimes(newCartTimes)
        } else {
            time.quantity = 1
            newCartTimes = [...cartTimes, time]
            setCartTimes(newCartTimes)
        }


        await updateLocalStorage(newCartTimes)

    }

    const deleteTimes = async timeId => {
        const newCart = cartTimes.filter(time => time.id != timeId)

        setCartTimes(newCart)

        await updateLocalStorage (newCart)
    }

    const clearTimes = async () => {
        setCartTimes([])

        await deleteLocalStorage([])
    }

    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem('barbershop:timeInfo')

            if(clientCartData) {
                setCartTimes(JSON.parse(clientCartData))
            }
        }

        loadUserData()
    }, [])

    return (
        <TimeContext.Provider value={{
            putTimeInCart, 
            cartTimes,
            deleteTimes,
            clearTimes
        }}
        >
            {children}
        </TimeContext.Provider>
    )
}

export const useTime = () => {
    const context = useContext(TimeContext)

    if (!context) {
        throw new Error("useTime must be used with UserContext")
    }

    return context
}

TimeProvider.propTypes = {
    children: PropTypes.node
}