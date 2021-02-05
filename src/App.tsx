import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './App/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
};

export default App;
