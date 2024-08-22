import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { formatDateCart, formatDateAgender } from '../../../utils/formatDate'

import { api } from '../../../services/api';

import status from './schedule-status';

import {
    ProductsImg,
    ReactSelectStyle,
    WhatsAppIconStyle
}
    from './styles'

function Row({ row, setSchedules, schedules }) {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function setNewStatus(id, status) {
        setIsLoading(true)

        try {
            await api.put(`schedules/${id}`, { status })

            const newSchedules = schedules.map(schedule => {
                return schedule._id === id ? { ...schedule, status } : schedule
            })

            setSchedules(newSchedules)
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                    {row.number}
                    <a
                        href={`https://wa.me/${row.number}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <WhatsAppIconStyle />
                    </a>
                </TableCell>
                <TableCell>{formatDateAgender(row.dateSchedule)}</TableCell>
                <TableCell>
                    <ReactSelectStyle
                        options={status.filter(sts => sts.value !== 'Todos')}
                        menuPortalTarget={document.body}
                        placeholder='Status'
                        defaultValue={status.find(option => option.value === row.status || null)}
                        onChange={newStatus => {
                            setNewStatus(row.scheduleId, newStatus.value)
                        }}
                        isLoading={isLoading}
                    />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography style={{ fontWeight: 'bold' }} variant="h6" gutterBottom component="div">
                                Detalhes do Agendamento
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Serviço</TableCell>
                                        <TableCell>Data</TableCell>
                                        <TableCell>Horário</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.products.map((productRow) => (
                                        <TableRow key={productRow.id}>
                                            <TableCell style={{ display: 'flex', alignItems: 'center', gap: 5 }} component="th" scope="row">
                                                <ProductsImg src={productRow.url} alt='imagem do serviço' />
                                                {productRow.name}
                                            </TableCell>
                                            <TableCell>{formatDateCart(row.timeEntry?.date) || 'N/A'}</TableCell>
                                            <TableCell>{row.timeEntry?.times || 'N/A'}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        schedules: PropTypes.array,
        setSchedules: PropTypes.func,
        name: PropTypes.string.isRequired,
        scheduleId: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        dateSchedule: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            })
        ).isRequired,
        timeEntry: PropTypes.shape({
            date: PropTypes.string.isRequired,
            times: PropTypes.string.isRequired
        })
    }).isRequired,
};

export default Row;