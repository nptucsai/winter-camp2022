import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Pages
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Control from '../Pages/Control';
import NavControl from '../Components/Control/nav';

const router = createBrowserRouter([
  { name: 'home', path: '/', element: <Home /> },
  {
    name: 'login',
    path: '/login',
    element: <Login />
  },
  {
    name: 'control',
    path: '/control',
    element: <Control />,
    children: [{ path: 'nav', element: <NavControl /> }]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
