import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/MainRouter.jsx'
import MainLayout from './Layout/MainLayout.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} >
      <MainLayout />
      <Toaster/>
    </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
