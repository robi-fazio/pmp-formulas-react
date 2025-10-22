import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to PMP Formulas</h2>
      <p>Enter your project data to calculate key PMP formulas. All based on PMBOK 7th Edition.</p>
      <ul>
        <li><Link to="/evm">Earned Value Management (SPI, CPI, etc.)</Link></li>
        <li>Critical Path Method (coming soon)</li>
        <li>Pert Estimation (coming soon)</li>
        {/* List all ~16-20 formulas from sources */}
      </ul>
    </div>
  );
};

export default Home;
