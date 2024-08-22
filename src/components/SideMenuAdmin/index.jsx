import PropTypes from 'prop-types';
import { useState } from 'react'; 
import { useUser } from '../../hooks/UserContext';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import listLinks from './menu-list';
import {
    Container,
    ItemContainer,
    ListLink,
    MenuButton,
} from './styles';

export function SideMenuAdmin({ path }) {
    const { logout } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(true); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <MenuButton onClick={toggleMenu} isOpen={isMenuOpen}> 
                {isMenuOpen ? 'Fechar' : 'Menu'} 
            </MenuButton>
            <Container isOpen={isMenuOpen}> 
                <hr />
                {listLinks.map(item => (
                    <ItemContainer key={item.id} $isActive={path === item.link}>
                        <item.icon className='icon' />
                        <ListLink to={item.link}>
                            {item.label}
                        </ListLink>
                    </ItemContainer>
                ))}
                <hr />
                {isMenuOpen ? (
                <ItemContainer style={{ position: 'fixed', bottom: 30 }}>
                    <ExitToAppIcon style={{ color: '#ffffff' }} />
                    <ListLink to='/login' onClick={logout}>Sair</ListLink>
                </ItemContainer>
                ) : null }
            </Container>
        </>
    );
}

SideMenuAdmin.propTypes = {
    path: PropTypes.string
};
