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

function NewCategory() {

    const navigate = useNavigate()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite um nome'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async data => {

        await toast.promise(api.post('categories', {name: data.name}), {
            pending: 'Criando nova categoria',
            success: {
                render() {
                    setTimeout(() => {
                        navigate('/listar-categorias')
                    }, 2000)
                    return 'Categoria criada com sucesso'
                },
            },
            error: 'Falha ao criar a categoria'
        })
    }

    return (
        <Container>
            <h1>Nova Categoria</h1>
            
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome da Categoria</Label>
                    <Input type='text' {...register('name')} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <ButtonStyle>Adicionar Categoria</ButtonStyle>
            </form>
        </Container>
    )
}

export default NewCategory

/*
    INPUT


    CONTROLADOS => Não são controlados por ninguém, se viram sozinhos.
        Ex: Input guarda o próprio valor nele mesmo. Auto suficiente

    NÃO CONTROLADOS => São controlados por algum componente
        Ex: Input que não guarda o valor dele próprio, ele necesita guardar em alguma variável
*/