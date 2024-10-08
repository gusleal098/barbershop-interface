import { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom'

import formatCurrency from '../../../utils/formatCurrency'

import { paths } from '../../../constants/paths'

import { api } from '../../../services/api'
import {
    Container,
    Img,
    EditIconStyle

} from './styles'

function ListProducts() {
    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('products')

            setProducts(data)
        }

        loadProducts()
    }, [])

    function editProduct(product) {
        navigate(paths.EditProduct, {state: {product}})
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Nome</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Preço</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Categoria</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && products.map(product => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Img src={product.url} alt='imagem-do-serviço' />
                                </TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{formatCurrency(product.price)}</TableCell>
                                <TableCell>
                                    {typeof product.category === 'string'
                                        ? product.category
                                        : product.category?.name
                                    }
                                </TableCell>
                                <TableCell>
                                    <EditIconStyle onClick={() => editProduct(product)}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListProducts