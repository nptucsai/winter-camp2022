import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Pages
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Control from '../Pages/Control';
import ScoreBoard from '../Pages/ScoreBoard';
import HomeControl from '../Components/Control/Home';
import NavControl from '../Components/Control/Nav';
import UserControl from '../Components/Control/User';
import ScoresControl from '../Components/Control/Scores';
import BasicControl from '../Components/Control';

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
    name: 'scoreboard',
    path: '/scoreboard',
    element: <ScoreBoard />
  },
  {
    name: 'control',
    path: '/control',
    element: <Control />,
    children: [
      { path: '', element: <BasicControl /> },
      { path: 'home', element: <HomeControl /> },
      { path: 'nav', element: <NavControl /> },
      { path: 'user', element: <UserControl /> },
      { path: 'scores', element: <ScoresControl /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
