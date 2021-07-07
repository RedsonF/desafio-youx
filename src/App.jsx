import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/index";
import AppBar from "./components/AppBar";
import SideBar from "./components/SideBar";
import { AuthProvider } from "./context/authContext";

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppBar />
        <div id="content">
          <SideBar />
          <Routes />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
