import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './homepage.css'
import './contact.css'
import Homepage from './Components/Homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import my_routes from './Components/routes'

const routes = createBrowserRouter(my_routes)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = { routes } />
  </StrictMode>,
)
