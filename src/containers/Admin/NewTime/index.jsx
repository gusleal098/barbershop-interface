import { useEffect, useState } from 'react'

import { useForm, Controller } from 'react-hook-form'

import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { api } from '../../../services/api'
import { ErrorMessage } from '../../../components'
import { formatDateCartResume } from '../../../utils/formatDate'

import {
    Container,
    Label,
    Input,
    ButtonStyle,
    ReactSelectStyle

} from './styles'

function NewTime() {
    const [dates, setDates] = useState([])

    const navigate = useNavigate()

    const schema = Yup.object().shape({
        time: Yup.string().required('Digite um horário'),
        date: Yup.object().required('Selecione uma data')
    })

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            time: '',
            date: null
        }
    })

    const onSubmit = async data => {
        const timeData = {
            time: data.time,
            date_id: data.date?.id
        }

        console.log(data)

        try {
            await toast.promise(api.post('times', timeData), {
                pending: 'Criando novo horário',
                success: {
                    render() {
                        setTimeout(() => {
                            navigate('/listar-serviços')
                        }, 2000)
                        return 'Horário criado com sucesso'
                    },
                },
                error: 'Falha ao criar a horário'
            })
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    useEffect(() => {
        async function loadDates() {
            const { data } = await api.get('dates')

            const today = new Date().toISOString().split('T')[0]
            const filteredDates = data.filter(date => date.date >= today)

            setDates(filteredDates)
        }

        loadDates()
    }, [])

    return (
        <Container>
            <h1>Novo Horário</h1>
            
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Horário</Label>
                    <Input type='time' {...register('time')} />
                    <ErrorMessage>{errors.time?.message}</ErrorMessage>
                </div>

                <div>
                    <Controller
                        name='date'
                        control={control}
                        render={({ field }) => {

                            return (
                                <ReactSelectStyle
                                    {...field}
                                    options={dates}
                                    getOptionLabel={date => formatDateCartResume(date.date)}
                                    getOptionValue={date => date.date.id}
                                    placeholder='Datas disponíveis'
                                />
                            )
                        }}
                    >
                    </Controller>
                    <ErrorMessage>{errors.date?.message}</ErrorMessage>
                </div>

                <ButtonStyle>Adicionar Horário</ButtonStyle>
            </form>
        </Container>
    )
}

export default NewTime

/*
    INPUT


    CONTROLADOS => Não são controlados por ninguém, se viram sozinhos.
        Ex: Input guarda o próprio valor nele mesmo. Auto suficiente

    NÃO CONTROLADOS => São controlados por algum componente
        Ex: Input que não guarda o valor dele próprio, ele necesita guardar em alguma variável
*/