import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

import {
    Container,
    ContainerFooter,
    ContainerInfos,
    Address,
    SocialMedia,
    WhatsAppIconStyle,
    InstagramIconStyle,
    FacebookIconStyle,
    Contact,
    Credits

} from './styles'

export function Footer(){

    return (
        <Container>
            <ContainerFooter>
                <ContainerInfos>
                    <Address>
                        <h1>Endereço:</h1>
                        <p>Rua Dos Bobos, 0, Vila Sarapuí - Duque de Caxias/RJ</p>
                    </Address>
                    <SocialMedia>
                        <h1>Redes Sociais:</h1>
                        <div>
                            <a
                                href='https://wa.me/21976982316'
                                target="_blank"
                                rel="noopener noreferrer">
                                <WhatsAppIconStyle />
                            </a>
                            <a
                                href='https://wa.me/21976982316'
                                target="_blank"
                                rel="noopener noreferrer">
                                <InstagramIconStyle />
                            </a>
                            <a
                                href='https://wa.me/21976982316'
                                target="_blank"
                                rel="noopener noreferrer">
                                <FacebookIconStyle />
                            </a>
                            </div>
                    </SocialMedia>
                    <Contact>
                        <h1>Contato:</h1>
                        <div>
                            <p><EmailIcon/> contato@gmail.com</p>
                            <p><PhoneIphoneIcon/> (21) 99999-9999</p>
                        </div>
                    </Contact>
                </ContainerInfos>
            </ContainerFooter>
            <Credits>
                <p>Criado por Gustavo Leal</p>
                <a
                    href='https://wa.me/21976982316'
                    target="_blank"
                    rel="noopener noreferrer">
                    <WhatsAppIcon style={{color: '#ffffff', width: 20}} />
                </a>
                <a
                    href='https://www.instagram.com/devgustavoleal/'
                    target="_blank"
                    rel="noopener noreferrer">
                    <InstagramIcon style={{color: '#ffffff', width: 20}} />
                </a>
            </Credits>
        </Container>
    )
}