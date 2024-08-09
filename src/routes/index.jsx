import { createBrowserRouter } from "react-router-dom";
import { Login, Register, Home, Cart } from "../containers";
import PrivateRoute from "./private-route";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/cadastro',
        element: <Register />
    },
    {
        path: '/',
        element: (
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        )
    },
    {
        path: '/carrinho',
        element: (
            <PrivateRoute>
                <Cart />
            </PrivateRoute>
        )
    },
])