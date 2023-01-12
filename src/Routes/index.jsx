import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../Pages/Home';
import Login from '../Pages/Login';

const routes = [
  { name: 'home', path: '/', element: <Home /> },
  {
    name: 'login',
    path: '/login',
    element: <Login />
  }
];

export default function () {
  return (
    <Routes>
      {routes.map(({ name, ...route }) => (
        <Route key={name} {...route} />
      ))}
    </Routes>
  );
}
