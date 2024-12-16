import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landing from './pages/landing.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import './index.css'
import LoginPage from '@/pages/login.jsx'
import RegisterPage from '@/pages/register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
