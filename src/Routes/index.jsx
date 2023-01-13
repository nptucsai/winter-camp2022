import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Pages
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Control from '../Pages/Control';
import NavControl from '../Components/Control/nav';
import UserControl from '../Components/Control/User';

// FallbackElement
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  { name: 'home', path: '/', element: <Home />, errorElement: <ErrorPage /> },
  {
    name: 'login',
    path: '/login',
    element: <Login />
  },
  {
    name: 'control',
    path: '/control',
    element: <Control />,
    children: [
      { path: 'nav', element: <NavControl /> },
      { path: 'user', element: <UserControl /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
