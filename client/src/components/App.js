import './App.css';
// import { useState, createContext, useEffect } from 'react';
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
    <body className="flex flex-col min-h-screen text-gray-700 font-mono">
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
    </body>
  );
}

export default App;
