import { useEffect, useState } from 'react'

import { useForm, Controller } from 'react-hook-form'

import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { api } from '../../../services/api'
import { ErrorMessage } from '../../../components'

import {
    Container,
    Label,
    Input,
    ButtonStyle,
    LabelUpload,
    ReactSelectStyle

} from './styles'

function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do serviço'),
        price: Yup.string().required('Digite o preço do serviço'),
        category: Yup.object().required('Escolha uma categoria'),
        file: Yup.mixed().test('required', 'Carregue uma imagem', value => {
            return value?.length > 0
        })
            .test('fileSize', 'Carregue uma imagem de até 2MB', value => {
                return value[0]?.size <= 200000
            })
            .test('type', 'Carregue apenas arquivos JPEG', value => {
                return value[0]?.type === 'image/jpeg' ||
                    value[0]?.type === 'image/png'
            })
    })

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async data => {
        const productDataFormData = new FormData()

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0])

        await toast.promise(api.post('products', productDataFormData), {
            pending: 'Criando novo serviço',
            success: {
                render() {
                    setTimeout(() => {
                        navigate('/listar-serviços')
                    }, 2000)
                    return 'Serviço criado com sucesso'
                },
            },
            error: 'Falha ao criar o serviço'
        })
    }

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <h1>Adicionar</h1>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input type='text' {...register('name')} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input type='number' {...register('price')} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>
                    <LabelUpload>
                        {fileName || (
                            <>
                                <CloudUploadIcon />
                                Carregue uma imagem
                            </>
                        )}
                        <input
                            type='file'
                            accept='image/png, image/jpeg'
                            {...register('file')}
                            onChange={value => {
                                setFileName(value.target.files[0]?.name)
                            }}
                        />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <div>
                    <Controller
                        name='category'
                        control={control}
                        render={({ field }) => {

                            return (
                                <ReactSelectStyle
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder='Categorias'
                                />
                            )
                        }}
                    >
                    </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ButtonStyle>Adicionar Serviço</ButtonStyle>
            </form>
        </Container>
    )
}

export default NewProduct

/*
    INPUT


    CONTROLADOS => Não são controlados por ninguém, se viram sozinhos.
        Ex: Input guarda o próprio valor nele mesmo. Auto suficiente

    NÃO CONTROLADOS => São controlados por algum componente
        Ex: Input que não guarda o valor dele próprio, ele necesita guardar em alguma variável
*/