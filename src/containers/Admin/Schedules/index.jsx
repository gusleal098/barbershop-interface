import { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Row from './row';

import { api } from '../../../services/api'
import status from './schedule-status';
import {
    Container,
    Menu,
    LinkMenu
}
    from './styles'

function Schedules() {
    const [schedules, setSchedules] = useState([])
    const [filteredSchedules, setFilteredSchedules] = useState([])
    const [activeStatus, setActiveStatus] = useState(1)
    const [rows, setRows] = useState([])

    useEffect(() => {
        async function loadSchedules() {
            try {
                const { data } = await api.get('schedules')

                setSchedules(data)
                setFilteredSchedules(data)
            } catch (error) {
                console.error('Failed to fetch schedules:', error)
            }
        }

        loadSchedules()
    }, [])

    function createData(schedule) {

        const timeEntry = schedule.times && schedule.times.length > 0 ? schedule.times[0] : {}

        return {
            name: schedule.user.name || 'N/A',
            number: schedule.user.phone_number,
            scheduleId: schedule._id || 'N/A',
            dateSchedule: schedule.createdAt,
            status: schedule.status || 'N/A',
            products: schedule.products || [],

            date: timeEntry.date || 'N/A',
            time: timeEntry.times || 'N/A',
            timeEntry
        };
    }

    useEffect(() => {
        const newRows = filteredSchedules.map(sched => createData(sched))
        setRows(newRows)
    }, [filteredSchedules])

    useEffect(() => {
        if (activeStatus === 1) {
            setFilteredSchedules(schedules)
        } else {
            const statusIndex = status.findIndex(sts => sts.id === activeStatus)
            const newFilteredSchedules = schedules.filter(
                schedule => schedule.status === status[statusIndex].value
            )

            setFilteredSchedules(newFilteredSchedules)
        }
    }, [schedules])

    function handleStatus(status) {
        if (status.id === 1) {
            setFilteredSchedules(schedules)
        } else {
            const newSchedules = schedules.filter(schedule => schedule.status === status.value)

            setFilteredSchedules(newSchedules)
        }
        setActiveStatus(status.id)
    }

    return (
        <Container>
            <Menu>
                {status &&
                    status.map(status => (
                        <LinkMenu key={status.id}
                            onClick={() => handleStatus(status)}
                            $isActiveStatus={activeStatus === status.id}>
                            {status.label}
                        </LinkMenu>
                    ))}
            </Menu>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell style={{ fontWeight: 'bold' }}>Id do Agendamento</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Cliente</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Número de Contato</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Data do Agendamento</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row
                                key={row.scheduleId}
                                row={row}
                                setSchedules={setSchedules}
                                schedules={schedules}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Schedules