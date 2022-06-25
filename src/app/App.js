import React from 'react';
import { Routes, Route } from "react-router-dom";

import { AppLayout } from './components';

import HomePage from 'pages/home';

function App() {
  return (
    <AppLayout
      navbar={
        'Navigation menu'
      }
      sidebar={'Sidebar'}
      footer={'Footer'}
      content={
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      }
    />
  );
}

export default App;
