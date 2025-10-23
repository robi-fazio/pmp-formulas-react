import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
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

  const renderFormula = () => {
    switch(activeFormula) {
      case 'home': return <Home />;
      case 'plannedValue': return <PlannedValue />;
      case 'earnedValue': return <EarnedValue />;
      case 'scheduleVariance': return <ScheduleVariance />;
      case 'costVariance': return <CostVariance />;
      case 'spi': return <SPI />;
      case 'cpi': return <CPI />;
      case 'eac': return <EAC />;
      case 'etc': return <ETC />;
      case 'tcpi': return <TCPI />;
      case 'vac': return <VAC />;
      case 'burnRate': return <BurnRate />;
      case 'pertTriangular': return <PERTTriangular />;
      case 'pertBeta': return <PERTBeta />;
      case 'standardDeviation': return <StandardDeviation />;
      case 'float': return <Float />;
      case 'riskRating': return <RiskRating />;
      case 'emv': return <EMV />;
      case 'communicationChannels': return <CommunicationChannels />;
      case 'npv': return <NPV />;
      case 'roi': return <ROI />;
      case 'bcr': return <BCR />;
      case 'paybackPeriod': return <PaybackPeriod />;
      case 'evmComprehensive': return <EVMComprehensive />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PMP Formula Calculator</h1>
        
      </header>

      <Navigation activeFormula={activeFormula} setActiveFormula={setActiveFormula} />
      
      <div className="main-container">
        
        <div className="formula-container">
          {renderFormula()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
