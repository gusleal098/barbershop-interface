import { useForm } from 'react-hook-form'

import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { api } from '../../../services/api'
import { ErrorMessage } from '../../../components'

import {
    Container,
    Label,
    Input,
    ButtonStyle,

} from './styles'

function NewDate() {

    const navigate = useNavigate()

    const schema = Yup.object().shape({
        date: Yup.string().required('Selecione uma data'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async data => {

        await toast.promise(api.post('dates', {date: data.date}), {
            pending: 'Criando nova data',
            success: {
                render() {
                    setTimeout(() => {
                        navigate('/novo-horário')
                    }, 2000)
                    return 'Data criada com sucesso'
                },
            },
            error: 'Falha ao criar a data'
        })
    }

    return (
        <Container>
            <h1>Nova Data</h1>
            
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Data</Label>
                    <Input type='date' {...register('date')} />
                    <ErrorMessage>{errors.date?.message}</ErrorMessage>
                </div>

                <ButtonStyle>Adicionar Data</ButtonStyle>
            </form>
        </Container>
    )
}

export default NewDate

/*
    INPUT


    CONTROLADOS => Não são controlados por ninguém, se viram sozinhos.
        Ex: Input guarda o próprio valor nele mesmo. Auto suficiente

    NÃO CONTROLADOS => São controlados por algum componente
        Ex: Input que não guarda o valor dele próprio, ele necesita guardar em alguma variável
*/