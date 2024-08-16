import React from 'react';

import PropTypes from 'prop-types'

import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";
import { TimeProvider } from "./TimeContext";

const AppProvider = ({ children }) => (
    <UserProvider>
        <CartProvider>
            <TimeProvider>{children}</TimeProvider>
        </CartProvider>
    </UserProvider>
)

AppProvider.propTypes = {
    children: PropTypes.node
}

export default AppProvider