import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../Pages/Home';

const routes = [{ name: 'home', path: '/', element: <Home /> }];

export default function () {
  return (
    <Routes>
      {routes.map(({ name, ...route }) => (
        <Route key={name} {...route} />
      ))}
    </Routes>
  );
}
