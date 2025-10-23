import React from 'react';

function Home() {
  return (
    <div className="formula-card">
      <h2>Welcome to PMP Formula Calculator</h2>
      
      
        <p><strong>Professional Project Management Formulas</strong></p>
      
      
      <div className="description">
        <p>Select a formula from the menu to get started with your calculations.</p>
        <p>This tool helps PMP candidates and project managers calculate essential project management formulas quickly and accurately.</p>
      </div>
      
      <div className="input-section">
        <p style={{textAlign: 'center', color: '#667eea', fontWeight: 'bold'}}>
          Choose a formula from the menu to begin
        </p>
      </div>
    </div>
  );
}

export default Home;