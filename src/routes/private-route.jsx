import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

function PrivateRoute({ children }) {

    const user = localStorage.getItem('barbershop:userData')

    return user ? children : <Navigate to="/login" replace />

}

export default PrivateRoute

PrivateRoute.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}