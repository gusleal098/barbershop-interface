import { useEffect, useState } from 'react'

import Carousel from 'react-elastic-carousel'

import { api } from '../../services/api'
import { CardProduct, CardTime } from '../../components'

import formatCurrency from '../../utils/formatCurrency'

import { useCart } from '../../hooks/CartContext'

import CapaHome from '../../assets/capa.jpg'

import {
    Container,
    ContainerBody,
    HomeImg,
    CategoryButton,
    LeftContainer,
    RightContainer,
    DateButton,
    ProductsContainer,
    TimesContainer,
    Body,
    EmptyTimes

} from './styles'
import { formatDate } from '../../utils/formatDate'

export function Home() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [dates, setDates] = useState([])
    const [times, setTimes] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)
    const [filteredTimes, setFilteredTimes] = useState([])
    const [activeDate, setActiveDate] = useState(0)
    const [scheduleTimes, setScheduleTimes] = useState([])
    const {cartProducts} = useCart()

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todos' }, ...data]

            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price)}
            })

            setProducts(newProducts)
        }

        async function loadDates() {
            const { data } = await api.get('dates')
            
            const today = new Date().toISOString().split('T')[0]

            const filteredDates = data.filter( date => {
                return date.date >= today
            })
            
            setDates(filteredDates)

            const todayDate = filteredDates.find(date => date.date === today)

            if (todayDate) {
                setActiveDate(todayDate.id)
            } else if (filteredDates.length > 0) {
                setActiveDate(filteredDates[0].id)
            }
        }

        async function loadTimes() {
            const { data } = await api.get('times')

            setTimes(data)
        }

        async function loadScheduleTimes() {
            const { data } = await api.get('schedules')

            setScheduleTimes(data)
        }

        loadProducts()
        loadCategories()
        loadDates()
        loadTimes()
        loadScheduleTimes()
    }, [])

    useEffect(() => {
        if(activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory
            )

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, products])

    useEffect(() => {
        if (activeDate === 0) {
            setFilteredTimes([])
        } else {
            const newFilteredTimes = times.filter(time => {
                const isSchedule = scheduleTimes.some(schedule => {
                    return schedule.times.some(scheduleTime => scheduleTime.id === time.id)
                })
                return time.date_id === activeDate && !isSchedule
            })

            setFilteredTimes(newFilteredTimes)
        }
    }, [activeDate, times, scheduleTimes])

    const breakPoints = [
        { width: 1, itemsToShow: 1},
        { width: 400, itemsToShow: 2},
        { width: 600, itemsToShow: 3},
        { width: 900, itemsToShow: 4},
        { width: 1300, itemsToShow: 5},
    ]

    return (
        <Container>
            <HomeImg src={CapaHome} alt='Capa da home' />
                
            <ContainerBody>                
                <LeftContainer>
                    <Carousel itemsToShow={5} style={{width: '70%', marginTop: 30}} breakPoints={breakPoints}>
                        {categories && categories.map(category => (
                            <CategoryButton 
                                type='button' 
                                key={category.id}
                                $isActiveCategory={activeCategory === category.id}
                                onClick={() => { 
                                    setActiveCategory(category.id) 
                                }}
                            >
                                {category.name}
                            </CategoryButton>
                        ))}
                    </Carousel>
                    <ProductsContainer>
                        {filteredProducts && filteredProducts.map(product => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </ProductsContainer>
                </LeftContainer>

                <RightContainer>
                        <Carousel itemsToShow={5} style={{width: '70%', marginTop: 30}} breakPoints={breakPoints}>
                            {dates && dates.map(date => (
                                <DateButton
                                type='button'
                                key={date.id}
                                $isActiveDate={activeDate === date.id}
                                onClick={() => {
                                    setActiveDate(date.id)
                                }}
                                >
                                    {formatDate(date.date)}
                                </DateButton>
                            ))}
                        </Carousel>
                    
                        <TimesContainer>
                            {cartProducts && cartProducts.length > 0 ? (
                                
                                filteredTimes.length > 0 ? (
                                    <Body>
                                        {filteredTimes.map(time => (
                                            <CardTime key={time.id} time={time}/>
                                        ))}
                                    </Body>
                                ) : (
                                    <EmptyTimes>Não há horários disponíveis nesta data</EmptyTimes>
                                    )
                            ) : (
                                <p>Escolha um serviço</p>
                            )}
                            </TimesContainer>
                    
                </RightContainer>
            </ContainerBody>
        </Container>
    )
}