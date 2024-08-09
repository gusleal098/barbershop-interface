import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';

import AppProvider from './hooks';

import { router } from './routes';
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router}/>
    </AppProvider>
    <GlobalStyles />
    <ToastContainer autoClose={2000} theme='colored' />
  </React.StrictMode>,
)
