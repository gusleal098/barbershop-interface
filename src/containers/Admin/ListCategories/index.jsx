import { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

import Trash from '../../../assets/trash.png'

import { paths } from '../../../constants/paths'

import { api } from '../../../services/api'
import {
    Container,
    EditIconStyle

} from './styles'

function ListCategories() {
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }

        loadCategories()
    }, [])

    function editCategory(product) {
        navigate(paths.EditCategory, {state: {product}})
    }

    async function deleteCategory(categoryId) {
        try {
            await toast.promise(
                api.delete(`categories/${categoryId}`),
                {
                    pending: 'Deletando categoria...',
                    success: 'Categoria deletada com sucesso!',
                    error: 'Falha ao deletar a categoria.',
                }
            )

            setCategories(prevCategories => prevCategories.filter(category => category.id !== categoryId))
        } catch (error) {
            console.error('Erro ao deletar categoria:', error)
        }
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Nome</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Editar</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Excluir</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories && categories.map(category => (
                            <TableRow
                                key={category.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{category.name}</TableCell>
                                <TableCell>
                                    <EditIconStyle onClick={() => editCategory(category)}/>
                                </TableCell>
                                <TableCell>
                                    <img style={{cursor: 'pointer'}} src={Trash} onClick={() => deleteCategory(category.id)}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListCategories