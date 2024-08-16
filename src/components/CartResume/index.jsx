import { useState, useEffect } from 'react'
import { Button, ButtonDisabled } from '../Button'
import formatCurrency from '../../utils/formatCurrency'
import { formatDateCartResume } from '../../utils/formatDate'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

import { useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import { useTime } from '../../hooks/TimeContext'

import {
    Container,

} from './styles'

export function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0)
    const { cartProducts, clearCart } = useCart()
    const { cartTimes, clearTimes } = useTime()
    const navigate = useNavigate()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            const price = Number(current.price) || 0
            return price + acc
        }, 0)

        setFinalPrice(sumAllItems)
    }, [cartProducts])

    const submitSchedule = async () => {
        const scheduleProducts = cartProducts.map(product => {
            return { id: product.id}
        })

        const scheduleTimes = cartTimes.map(time => {
            return { id: time.id}
        })
        // const scheduleDate = cartProducts.map(product => {
        //     return { id: product.date.id}
        // })
        // const scheduleTimes = cartProducts.map(product => {
        //     return { id: product.id}
        // })

        try {
            await toast.promise(api.post('schedules', {products: scheduleProducts, times: scheduleTimes}), {
                pending: 'Realizando seu agendamento',
                success: 'Agendamento realizado com sucesso',
                error: 'Falha ao tentar realizar o seu agendamento, tente novamente'
            })

            clearCart()
            clearTimes()

            setTimeout(() => {
                navigate('/')
            }, 1000)

        } catch (error) {
            console.log('Erro ao realizar o agendamento:', error.response.data)
        }
    }

    const scheduleTimes = cartTimes.filter(time => time.date && time.time)

    return (
        <div>
            <Container>
                {cartTimes.length > 0 ? (
                    <div className='container-top'>
                        <h2 className='title'>Resumo do Agendamento</h2>
                        <p className='date'>Data</p>
                        <p className='date-schedule'>{formatDateCartResume(scheduleTimes[0].date.date)}</p>
                        <p className='time'>Horário</p>
                        <p className='time-schedule'>{scheduleTimes[0].time}</p>
                    </div>
                ) : (
                    <p className='message'>Escolha uma data e um horário <br></br>
                        <button onClick={() => navigate('/')}> {'<<'} Voltar para a home</button>
                    </p>
                )}
                    <div className='container-bottom'>
                        <p>Total</p>
                        <p>{formatCurrency(finalPrice)}</p>
                    </div>
            </Container>

            {cartProducts.length && cartTimes.length >0 ? (
                <Button style={{ width: '100%', marginTop: 30 }} onClick={submitSchedule}>
                    Finalizar Agendamento
                </Button>
            ) :
                <ButtonDisabled style={{ width: '100%', marginTop: 30}} disabled={true}>
                    Finalizar Agendamento
                </ButtonDisabled> 
            }
        </div>
    )
}