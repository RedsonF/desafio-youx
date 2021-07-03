import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/index';
import AppBar from './components/AppBar';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
