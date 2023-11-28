import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import {
  Home,
  Login
} from "../pages";


function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
            <Route
              path="/login"
              element={<Login/>}
            />
            <Route
              path="/home"
              element={<Home/>}
            />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
