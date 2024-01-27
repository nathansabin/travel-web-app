import './App.css';
import { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import {
  Home,
  Login,
  Register,
  Travel
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
              path="/register"
              element={<Register/>}
            />
            <Route
              path="/"
              element={<Home/>}
            />
            <Route
              path="/travel"
              element={<Travel/>}
            />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
