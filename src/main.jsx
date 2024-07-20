import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductIndex from './Pages/Product/Index.jsx'
import EditTitle from './Pages/Title/EditTitle.jsx'
import Timer from './Pages/Timer/Timer.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // Pemret de faire fonctionner le dropdown, dans boostrap 5 data-toggle="dropdown" must change to data-bs-toggle="dropdown"
import './assets/sass/app.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TheUseMemo from './Pages/TheHooks/TheUseMemo.jsx'
import TheUseRef from './Pages/TheHooks/TheUseRef.jsx'

import Login from './Pages/Auth/Login.jsx'
import Register from './Pages/Auth/Register.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/product',
    element: <ProductIndex />,
  },
  {
    path: '/edittitle',
    element: <EditTitle />,
  },
  {
    path: '/timer',
    element: <Timer />,
  },
  {
    path: '/useMemo',
    element: <TheUseMemo />,
  },
  {
    path: '/useRef',
    element: <TheUseRef />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
