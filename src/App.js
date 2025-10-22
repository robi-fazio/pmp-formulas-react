// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EVMCalculator from './pages/EVMCalculator';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav className="menu">
          {/* Menu items remain the same */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/evm">Earned Value Management</Link></li>
          </ul>
        </nav>
        
        {/* We apply the container here */}
        <main className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/evm" element={<EVMCalculator />} />
            </Routes>
          </div>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
