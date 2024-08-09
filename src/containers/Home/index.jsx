import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { CardProduct, CardTime } from '../../components'
import formatCurrency from '../../utils/formatCurrency'

import CapaHome from '../../assets/capa.jpg'

import {
    Container,
    ContainerBody,
    HomeImg,
    CategoryButton,
    CategoriesMenu,
    LeftContainer,
    RightContainer,
    DatesMenu,
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
            
            setDates(data)
        }

        async function loadTimes() {
            const { data } = await api.get('times')

            setTimes(data)
        }

        loadProducts()
        loadCategories()
        loadDates()
        loadTimes()
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
            const newFilteredTimes = times.filter(
                time => time.date_id === activeDate
            )

            setFilteredTimes(newFilteredTimes)
        }
    }, [activeDate, times])

    return (
        <Container>
            <HomeImg src={CapaHome} alt='Capa da home' />

            <ContainerBody>                
                <LeftContainer>
                    <CategoriesMenu>
                        {categories && categories.map(category => (
                            <CategoryButton 
                                type='button' 
                                key={category.id}
                                isActiveCategory={activeCategory === category.id}
                                onClick={() => { 
                                    setActiveCategory(category.id) 
                                }}
                            >
                                {category.name}
                            </CategoryButton>
                        ))}
                    </CategoriesMenu>
                    <ProductsContainer>
                        {filteredProducts && filteredProducts.map(product => (
                            <CardProduct key={product.id} product={product} />
                        ))}
                    </ProductsContainer>
                </LeftContainer>
                <RightContainer>
                    <DatesMenu>
                        {dates && dates.map(date => (
                            <DateButton
                            type='button'
                            key={date.id}
                            isActiveDate={activeDate === date.id}
                            onClick={() => {
                                setActiveDate(date.id)
                            }}
                            >
                                {formatDate(date.date)}
                            </DateButton>
                        ))}
                    </DatesMenu>
                    
                    <TimesContainer>
                        {activeDate === 0 ? (
                            <EmptyTimes>Selecione uma data</EmptyTimes>
                        ) : filteredTimes.length > 0 ? (
                        
                            <Body>
                                {filteredTimes.map(time => (
                                    <CardTime key={time.id} time={time}/>
                                ))}
                            </Body>
                        ) : (
                            <EmptyTimes>Não há horários disponíveis nesta data</EmptyTimes>
                            )
                        }
                    </TimesContainer>
                </RightContainer>
            </ContainerBody>
        </Container>
    )
}