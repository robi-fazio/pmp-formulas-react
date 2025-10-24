import React, { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import logo from './images/logo.png';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PlannedValue from './components/formulas/PlannedValue';
import EarnedValue from './components/formulas/EarnedValue';
import ScheduleVariance from './components/formulas/ScheduleVariance';
import CostVariance from './components/formulas/CostVariance';
import SPI from './components/formulas/SPI';
import CPI from './components/formulas/CPI';
import EAC from './components/formulas/EAC';
import ETC from './components/formulas/ETC';
import TCPI from './components/formulas/TCPI';
import VAC from './components/formulas/VAC';
import BurnRate from './components/formulas/BurnRate';
import PERTTriangular from './components/formulas/PERTTriangular';
import PERTBeta from './components/formulas/PERTBeta';
import StandardDeviation from './components/formulas/StandardDeviation';
import Float from './components/formulas/Float';
import RiskRating from './components/formulas/RiskRating';
import EMV from './components/formulas/EMV';
import CommunicationChannels from './components/formulas/CommunicationChannels';
import NPV from './components/formulas/NPV';
import ROI from './components/formulas/ROI';
import BCR from './components/formulas/BCR';
import PaybackPeriod from './components/formulas/PaybackPeriod';
import EVMComprehensive from './components/formulas/EVMComprehensive';


function App() {
  const [activeFormula, setActiveFormula] = useState('home');

  // NEW: State to store calculation results as pills
  const [calculationResults, setCalculationResults] = useState([]);
  
  // NEW: Function to add or update a calculation result
  const addCalculationResult = (formulaName, result) => {
    setCalculationResults(prevResults => {
      // Check if this formula already has a result
      const existingIndex = prevResults.findIndex(r => r.formulaName === formulaName);
      
      if (existingIndex !== -1) {
        // Update existing result
        const updatedResults = [...prevResults];
        updatedResults[existingIndex] = {
          formulaName,
          result,
          timestamp: new Date().toLocaleTimeString()
        };
        return updatedResults;
      } else {
        // Add new result
        return [...prevResults, {
          formulaName,
          result,
          timestamp: new Date().toLocaleTimeString()
        }];
      }
    });
  };
  
  // NEW: Function to remove a specific pill
  const removeCalculationResult = (formulaName) => {
    setCalculationResults(prevResults => 
      prevResults.filter(r => r.formulaName !== formulaName)
    );
  };
  
  // NEW: Function to clear all pills (called when going home)
  const clearAllResults = () => {
    setCalculationResults([]);
  };
  
  // Modified: Clear results when going home
  const handleLogoClick = () => {
    setActiveFormula('home');
    clearAllResults();
  };


  const renderFormula = () => {
    switch(activeFormula) {
      case 'home':
      return <Home />;
    case 'plannedValue':
      return <PlannedValue addResult={addCalculationResult} />;
    case 'earnedValue':
      return <EarnedValue addResult={addCalculationResult} />;
    case 'scheduleVariance':
      return <ScheduleVariance addResult={addCalculationResult} />;
    case 'costVariance':
      return <CostVariance addResult={addCalculationResult} />;
    case 'spi':
      return <SPI addResult={addCalculationResult} />;
    case 'cpi':
      return <CPI addResult={addCalculationResult} />;
    case 'eac':
      return <EAC addResult={addCalculationResult} />;
    case 'etc':
      return <ETC addResult={addCalculationResult} />;
    case 'tcpi':
      return <TCPI addResult={addCalculationResult} />;
    case 'vac':
      return <VAC addResult={addCalculationResult} />;
    case 'burnRate':
      return <BurnRate addResult={addCalculationResult} />;
    case 'pertTriangular':
      return <PERTTriangular addResult={addCalculationResult} />;
    case 'pertBeta':
      return <PERTBeta addResult={addCalculationResult} />;
    case 'standardDeviation':
      return <StandardDeviation addResult={addCalculationResult} />;
    case 'float':
      return <Float addResult={addCalculationResult} />;
    case 'riskRating':
      return <RiskRating addResult={addCalculationResult} />;
    case 'emv':
      return <EMV addResult={addCalculationResult} />;
    case 'communicationChannels':
      return <CommunicationChannels addResult={addCalculationResult} />;
    case 'npv':
      return <NPV addResult={addCalculationResult} />;
    case 'roi':
      return <ROI addResult={addCalculationResult} />;
    case 'bcr':
      return <BCR addResult={addCalculationResult} />;
    case 'paybackPeriod':
      return <PaybackPeriod addResult={addCalculationResult} />;
    case 'evmComprehensive':
      return <EVMComprehensive addResult={addCalculationResult} />;
    default:
      return <Home />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
  <img 
    src={logo} 
    alt="PMP Formula Calculator Logo" 
    className="header-logo"
    // onClick={() => setActiveFormula('home')}
    onClick={handleLogoClick}
    style={{ cursor: 'pointer' }}
  />
</header>

      <Navigation activeFormula={activeFormula} setActiveFormula={setActiveFormula} />
      
      <div className="main-container">
        {/* NEW: Results Pills Container */}
        {calculationResults.length > 0 && (
          <div className="results-pills-container">
            {calculationResults.map((calc, index) => (
              <div key={index} className="result-pill">
                <span className="pill-label">{calc.formulaName}:</span>
                <span className="pill-value">{calc.result}</span>
                <span className="pill-time">{calc.timestamp}</span>
                <button 
                  className="pill-remove"
                  onClick={() => removeCalculationResult(calc.formulaName)}
                  aria-label="Remove result"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
        <div className={`formula-container ${activeFormula === 'home' ? 'homepage-container' : ''}`}>
          {renderFormula()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
