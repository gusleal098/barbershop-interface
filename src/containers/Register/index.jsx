import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/logo-play.png'
import { Button } from '../../components'

import {
    Container,
    Form,
    InputContainer,
    CenterContainer,
    Title,
    Link

} from "./styles"



export function Register() {
    const navigate = useNavigate()

    const schema = Yup
        .object({
            name: Yup
                .string()
                .required('O nome é obrigatório'),
            email: Yup
                .string()
                .email('Digite um e-mail válido')
                .required('O e-mail é obrigatório'),
            phone_number: Yup
                .string()
                .min(11, 'O número de telefone deve conter 11 dígitos! Ex: 21 99999-9999')
                .required('O número de telefone é obrigatório'),
            password: Yup
                .string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .required('A senha é obrigatória'),
            confirmPassword: Yup
                .string()
                .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
                .required('Confirme sua senha')
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data) => {

        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                password: data.password
            }, 
            {
                validateStatus: () => true
            }
            )

            if(status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login')
                }, 2000)
                toast.success('Conta criada com sucesso!')
            } else if(status === 409) {
                toast.error('Email já cadastrado! Faça o login para continuar')
            } else {
                throw new Error()
            }
        } catch (error) {
            toast.error('Falha no sistema! Tente novamente')
        }
    }

    return (
        <Container>
            <CenterContainer>
                <img src={Logo} alt="logo-play"/>
                <Title>
                    Criar conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Número de telefone</label>
                        <input type="tel" {...register("phone_number")} />
                        <p>{errors?.phone_number?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirmar senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>
                    
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <p>Já possui conta? <Link to="/login">Clique aqui</Link></p>
            </CenterContainer>
        </Container>
    )
}