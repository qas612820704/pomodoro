import React from 'react';
import { Router, Redirect } from '@reach/router';
import Dashboard from './pages/Dashboard';
import Todos from './pages/Todos';

function App() {
  return (
    <Router>
      <Redirect from="/" to="dashboard" noThrow />
      <Dashboard path="dashboard" />
      <Todos path="todos" />
    </Router>
  );
}

export default App;
