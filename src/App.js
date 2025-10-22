// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css'; 
import EVMCalculator from './pages/EVMCalculator';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/evm">Earned Value Management</Link></li>
          </ul>
        </nav>
        
        {/* The "content" class now handles its own centering */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evm" element={<EVMCalculator />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
