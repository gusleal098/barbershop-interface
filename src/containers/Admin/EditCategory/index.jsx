import { useForm } from 'react-hook-form'

import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import { toast } from 'react-toastify'
import { useNavigate, useLocation } from 'react-router-dom'

import { api } from '../../../services/api'
import { ErrorMessage } from '../../../components'

import {
    Container,
    Label,
    Input,
    ButtonStyle,

} from './styles'

function EditCategory() {
    const navigate = useNavigate()
    const location = useLocation()
    const category = location.state?.product

    console.log(category)
    
    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome da categoria'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: category?.name || '',
        },
    })

    const onSubmit = async data => {

        await toast.promise(api.put(`categories/${category.id}`, {name: data.name}), {
            pending: 'Atualizando categoria',
            success: {
                render() {
                    setTimeout(() => {
                        navigate('/listar-categorias')
                    }, 2000)
                    return 'Categoria atualizada com sucesso'
                },
            },
            error: 'Falha ao atualizar a categoria'
        })
    }

    return (
        <Container>
            <h1>Editar</h1>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input type='text' {...register('name')} defaultValue={category.name} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <ButtonStyle>Atualizar Serviço</ButtonStyle>
            </form>
        </Container>
    )
}

export default EditCategory

/*
    INPUT


    CONTROLADOS => Não são controlados por ninguém, se viram sozinhos.
        Ex: Input guarda o próprio valor nele mesmo. Auto suficiente

    NÃO CONTROLADOS => São controlados por algum componente
        Ex: Input que não guarda o valor dele próprio, ele necesita guardar em alguma variável
*/