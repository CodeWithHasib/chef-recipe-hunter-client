import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/home.jsx'
import Login from './components/user/Login.jsx'
import Register from './components/user/Register.jsx'
import AuthProviders from './providers/AuthProviders.jsx'

import 'react-tooltip/dist/react-tooltip.css'
import Privet from './hooks/Privet.jsx'
import ErrorPage from './components/pages/shared/ErrorPage.jsx'
import Recipes from './components/pages/Recipes.jsx'
import Chef from './components/home/cooking/Chef.jsx'
import Blog from './components/pages/Blog.jsx'
import Profile from './components/user/Profile.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement : <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {path : 'chef/:id', element : <Privet><Recipes /></Privet>},
      { path: 'recipes', element: <Chef />}, 
      {path:'blog',element: <Blog />},
      {path: 'user/profile' , element : <Privet><Profile /></Privet>}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
