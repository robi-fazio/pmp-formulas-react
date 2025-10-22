import React from 'react';

function Navigation({ activeFormula, setActiveFormula }) {
  const formulas = [
    { id: 'earnedValueManagement', name: 'Earned Value Management', isCategory: true },
    { id: 'evmComprehensive', name: 'EVM - Complete Analysis' },
    { id: 'plannedValue', name: 'Planned Value (PV)' },
    { id: 'earnedValue', name: 'Earned Value (EV)' },
    { id: 'scheduleVariance', name: 'Schedule Variance (SV)' },
    { id: 'costVariance', name: 'Cost Variance (CV)' },
    { id: 'spi', name: 'Schedule Performance Index (SPI)' },
    { id: 'cpi', name: 'Cost Performance Index (CPI)' },
    { id: 'eac', name: 'Estimate at Completion (EAC)' },
    { id: 'etc', name: 'Estimate to Complete (ETC)' },
    { id: 'tcpi', name: 'To Complete Performance Index (TCPI)' },
    { id: 'vac', name: 'Variance at Completion (VAC)' },
    { id: 'burnRate', name: 'Burn Rate' },
    
    { id: 'estimation', name: 'Estimation & Scheduling', isCategory: true },
    { id: 'pertTriangular', name: 'PERT - Triangular Distribution' },
    { id: 'pertBeta', name: 'PERT - Beta Distribution' },
    { id: 'standardDeviation', name: 'Standard Deviation' },
    { id: 'float', name: 'Float/Slack' },
    
    { id: 'risk', name: 'Risk & Decision Analysis', isCategory: true },
    { id: 'riskRating', name: 'Risk Rating' },
    { id: 'emv', name: 'Expected Monetary Value (EMV)' },
    
    { id: 'communication', name: 'Communication', isCategory: true },
    { id: 'communicationChannels', name: 'Communication Channels' },
    
    { id: 'projectSelection', name: 'Project Selection', isCategory: true },
    { id: 'npv', name: 'Net Present Value (NPV)' },
    { id: 'roi', name: 'Return on Investment (ROI)' },
    { id: 'bcr', name: 'Benefit Cost Ratio (BCR)' },
    { id: 'paybackPeriod', name: 'Payback Period' }
  ];

  return (
    <nav className="navigation">
      <h2>Formulas</h2>
      <ul>
        {formulas.map((formula) => (
          formula.isCategory ? (
            <li key={formula.id} className="category-header">
              {formula.name}
            </li>
          ) : (
            <li 
              key={formula.id}
              className={activeFormula === formula.id ? 'active' : ''}
              onClick={() => setActiveFormula(formula.id)}
            >
              {formula.name}
            </li>
          )
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
