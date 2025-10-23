import React from 'react';
import girlAtDesk from '../images/girlAtDesk.png';

function Home() {
  return (
    <div className="formula-card">
      
      
      
        

        {/* Two-column layout */}
      <div className="home-two-columns">
        <div className="home-column">
          <h2>Professional Project Management Formulas</h2>
          <h3>About This Tool</h3>
          <p>This calculator helps PMP candidates and project managers calculate essential project management formulas quickly and accurately.</p>
          <p>All formulas are based on the PMBOK Guide and include detailed explanations and interpretations. Choose a formula category from the menu to explore all available calculators.</p>
        </div>
        
        <div className="home-column">
          <img src={girlAtDesk} alt="Girl at desk" className="home-image masked-image" />
          
          <p>Select a formula from the menu to begin your calculations.</p>
          <p>Each formula includes input fields, instant calculations, and performance interpretations to help you understand your project metrics.</p>
        </div>
      </div>
      
      <div className="description">
        <p style={{textAlign: 'center', marginTop: '2rem'}}>
          
        </p>
      </div>
      
      
      <div className="description">
        <p>Select a formula from the menu to get started with your calculations.</p>
        <p>This tool helps PMP candidates and project managers calculate essential project management formulas quickly and accurately.</p>
      </div>
      
      {/* <div className="input-section">
        <p style={{textAlign: 'center', color: '#667eea', fontWeight: 'bold'}}>
          Choose a formula from the menu to begin
        </p>
      </div> */}
    </div>
  );
}

export default Home;