import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import { Header } from '../components'

function PrivateRoute({ children, isAdmin }) {

    const user = localStorage.getItem('barbershop:userData')
    const useData = user ? JSON.parse(user) : null

    if (isAdmin && (!useData || !useData.admin)) {
        return <Navigate to='/' />
    }

    if (useData) {
        if (!isAdmin) {
            return (
                <>
                    <Header />
                    {children}
                </>
            )
        }
        
        return children
    }

    return <Navigate to='/login' replace />
}

export default PrivateRoute

PrivateRoute.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
    isAdmin: PropTypes.bool
}