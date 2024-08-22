import EventIcon from '@mui/icons-material/Event';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PersonIcon from '@mui/icons-material/Person';

import {paths} from '../../constants/paths';

const listLinks = [
    {
        id: 1,
        label: 'Agendamentos',
        link: paths.Schedules,
        icon: EventIcon
    },
    {
        id: 2,
        label: 'Listar Serviços',
        link: paths.Products,
        icon: ShoppingCartIcon
    },
    {
        id: 3,
        label: 'Novo Serviço',
        link: paths.NewProduct,
        icon: AddShoppingCartIcon
    },
    {
        id: 4,
        label: 'Nova Data',
        link: paths.NewDate,
        icon: CalendarMonthIcon
    },
    {
        id: 5,
        label: 'Novo Horário',
        link: paths.NewTime,
        icon: MoreTimeIcon
    },
    {
        id: 6,
        label: 'Listar Categorias',
        link: paths.ListCategories,
        icon: FormatListBulletedIcon
    },
    {
        id: 7,
        label: 'Nova Categoria',
        link: paths.NewCategory,
        icon: PlaylistAddIcon
    },
    {
        id: 7,
        label: 'Clientes',
        link: paths.ListUsers,
        icon: PersonIcon
    },
]

export default listLinks