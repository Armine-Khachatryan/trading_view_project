import React from "react";
import {
  BrowserRouter,
  Routes,
  Route, Navigate,
} from "react-router-dom";
import './style.css';
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import CheckEmail from "./pages/CheckEmail/CheckEmail";
import ChangePassword from "./pages/ChangePassword/ChangePassword";




function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={ <Login/>}/>
              <Route exact path="/register" element={ <Registration/>}/>
              <Route exact path="/login" element={ <Login/>}/>
              <Route exact path="/home" element={ <Home/>}/>
              <Route exact path="/forgot-password" element={ <ForgotPassword/>}/>
              <Route exact path="/check-email" element={ <CheckEmail/>}/>
              <Route exact path="/change-password" element={ <ChangePassword/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
