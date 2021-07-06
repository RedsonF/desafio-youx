import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/index';
import AppBar from './components/AppBar';
import SideBar from './components/SideBar';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <div id="content" >
        <SideBar/>
        <Routes/>
      </div>
    </BrowserRouter>
  );
}

export default App;
