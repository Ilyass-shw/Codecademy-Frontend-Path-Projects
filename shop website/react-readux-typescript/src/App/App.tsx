import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import NavBar from '../components/NavBar/NavBar';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <h1>wiyééé</h1>
      </BrowserRouter>
    </>
  );
};

export default App;
