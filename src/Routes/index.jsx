import React from 'react';
import { Routes, Route } from 'react-router-dom';

const routes = [];

export default function () {
  return (
    <Routes>
      {routes.map(({ name, ...route }) => (
        <Route key={name} {...route} />
      ))}
    </Routes>
  );
}
