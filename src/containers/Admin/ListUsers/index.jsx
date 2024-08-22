import { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {formatDateAgender} from '../../../utils/formatDate'

import { api } from '../../../services/api'
import {
    Container,
    WhatsAppIconStyle

} from './styles'

function ListUsers() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        async function loadUsers() {
            const { data } = await api.get('users')

            setUsers(data)
        }

        loadUsers()
    }, [])

    const nonAdminUsers = users.filter(user => !user.isAdmin)

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Nome</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Número de contato</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>E-mail</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Data de cadastro</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {nonAdminUsers.map(user => (
                            <TableRow
                                key={user.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{user.name}</TableCell>
                                <TableCell>
                                    {user.phone_number}
                                    <a
                                        href={`https://wa.me/${user.phone_number}`}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <WhatsAppIconStyle />
                                    </a>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{formatDateAgender(user.createdAt)}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default ListUsers