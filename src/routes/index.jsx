import { createBrowserRouter } from "react-router-dom";
import { Login, Register, Home, Cart, Admin } from "../containers";
import PrivateRoute from "./private-route";
import {paths} from '../constants/paths'

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

    {
        path: paths.Schedules,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        )
    },

    {
        path: paths.Products,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        )
    },

    {
        path: paths.NewProduct,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        )
    },

    {
        path: paths.EditProduct,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        )
    },

    {
        path: paths.NewDate,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        )
    },

    {
        path: paths.NewTime,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        )
    },

    {
        path: paths.ListCategories,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        )
    },

    {
        path: paths.EditCategory,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        )
    },

    {
        path: paths.NewCategory,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        )
    },

    {
        path: paths.ListUsers,
        element: (
            <PrivateRoute isAdmin>
                <Admin />
            </PrivateRoute>
        )
    },
])