import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'

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



export function Login() {
    const { putUserData } = useUser()

    const navigate = useNavigate()

    const schema = Yup
        .object({
            email: Yup
                .string()
                .email('Digite um e-mail válido')
                .required('O e-mail é obrigatório'),
            password: Yup
                .string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .required('Digite uma senha')
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async data => {

        const response = await toast.promise(
            api.post('/session', {
                email: data.email,
                password: data.password
            }),
            {
                pending: 'Verificando seus dados',
                success: {
                    render() {
                        setTimeout(() => {
                            if (response.data.admin) {
                                navigate('/agendamentos')
                            } else {
                                navigate('/')
                            }
                        }, 1000)
                        return `Seja bem-vindo!`
                    }
                },
                error: 'Verifique seu email e senha'
            }
        )

        putUserData(response.data)
    }

    return (
        <Container>
            <CenterContainer>
                <img src={Logo} alt="logo-play" />
                <Title>
                    ACESSAR CONTA
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <Link to="/cadastro">Clique aqui</Link></p>
            </CenterContainer>
        </Container>
    )
}