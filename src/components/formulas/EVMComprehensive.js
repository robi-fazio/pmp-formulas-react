import React, { useState } from 'react';

function EVMComprehensive({ addResult }) {
  // Input states
  const [bac, setBac] = useState('');
  const [percentTimePassed, setPercentTimePassed] = useState('');
  const [percentWorkCompleted, setPercentWorkCompleted] = useState('');
  const [actualCost, setActualCost] = useState('');
  
  // Result states
  const [results, setResults] = useState(null);

  const calculate = () => {
    const bacValue = parseFloat(bac);
    const timePassedValue = parseFloat(percentTimePassed) / 100;
    const workCompletedValue = parseFloat(percentWorkCompleted) / 100;
    const acValue = parseFloat(actualCost);

    // Calculate PV, EV
    const pv = bacValue * timePassedValue;
    const ev = bacValue * workCompletedValue;

    // Calculate variances and indices
    const sv = ev - pv;
    const cv = ev - acValue;
    const spi = pv !== 0 ? ev / pv : 0;
    const cpi = acValue !== 0 ? ev / acValue : 0;

    // Calculate forecasting metrics
    const eac1 = cpi !== 0 ? bacValue / cpi : 0;
    const eac2 = bacValue - cv;
    const etc = eac1 - acValue;
    const vac = bacValue - eac1;
    const tcpi = (bacValue - acValue) !== 0 ? (bacValue - ev) / (bacValue - acValue) : 0;

    setResults({
      pv: pv.toFixed(2),
      ev: ev.toFixed(2),
      ac: acValue.toFixed(2),
      sv: sv.toFixed(2),
      cv: cv.toFixed(2),
      spi: spi.toFixed(4),
      cpi: cpi.toFixed(4),
      eac1: eac1.toFixed(2),
      eac2: eac2.toFixed(2),
      etc: etc.toFixed(2),
      vac: vac.toFixed(2),
      tcpi: tcpi.toFixed(4)
    });
  };

  const getScheduleStatus = () => {
    if (!results) return '';
    const spiValue = parseFloat(results.spi);
    if (spiValue > 1) return 'Ahead of Schedule ✓';
    if (spiValue < 1) return 'Behind Schedule ⚠';
    return 'On Schedule';
  };

  const getCostStatus = () => {
    if (!results) return '';
    const cpiValue = parseFloat(results.cpi);
    if (cpiValue > 1) return 'Under Budget ✓';
    if (cpiValue < 1) return 'Over Budget ⚠';
    return 'On Budget';
  };

  return (
    <div className="formula-card">
      <h2>Earned Value Management (EVM) - Complete Analysis</h2>
      
      <div className="formula-display">
        <p><strong>Comprehensive EVM Calculator</strong></p>
        <p>Calculate all major EVM metrics in one place</p>
      </div>

      <div className="description">
        <p>Earned Value Management integrates scope, schedule, and cost to measure project performance. This calculator computes all key EVM metrics including performance indices, variances, and forecasting values.</p>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="bac">Budget at Completion (BAC) $:</label>
          <input 
            type="number" 
            id="bac"
            value={bac} 
            onChange={(e) => setBac(e.target.value)}
            placeholder="e.g., 100000"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="percentTimePassed">Percent of Time Passed (%):</label>
          <input 
            type="number" 
            id="percentTimePassed"
            value={percentTimePassed} 
            onChange={(e) => setPercentTimePassed(e.target.value)}
            placeholder="e.g., 50 for 50%"
          />
        </div>

        <div className="input-group">
          <label htmlFor="percentWorkCompleted">Percent of Work Completed (%):</label>
          <input 
            type="number" 
            id="percentWorkCompleted"
            value={percentWorkCompleted} 
            onChange={(e) => setPercentWorkCompleted(e.target.value)}
            placeholder="e.g., 45 for 45%"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="actualCost">Actual Cost (AC) $:</label>
          <input 
            type="number" 
            id="actualCost"
            value={actualCost} 
            onChange={(e) => setActualCost(e.target.value)}
            placeholder="e.g., 55000"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate All EVM Metrics</button>
      </div>
      
      {results && (
        <div className="result-section">
          <h3>Results:</h3>
          
          <div className="evm-results-grid">
            <div className="evm-section">
              <h4>Basic Metrics</h4>
              <p><strong>Planned Value (PV):</strong> ${results.pv}</p>
              <p><strong>Earned Value (EV):</strong> ${results.ev}</p>
              <p><strong>Actual Cost (AC):</strong> ${results.ac}</p>
            </div>

            <div className="evm-section">
              <h4>Variances</h4>
              <p><strong>Schedule Variance (SV):</strong> ${results.sv}</p>
              <p className={parseFloat(results.sv) >= 0 ? 'positive' : 'negative'}>
                {parseFloat(results.sv) >= 0 ? '✓ Ahead of schedule' : '⚠ Behind schedule'}
              </p>
              <p><strong>Cost Variance (CV):</strong> ${results.cv}</p>
              <p className={parseFloat(results.cv) >= 0 ? 'positive' : 'negative'}>
                {parseFloat(results.cv) >= 0 ? '✓ Under budget' : '⚠ Over budget'}
              </p>
            </div>

            <div className="evm-section">
              <h4>Performance Indices</h4>
              <p><strong>Schedule Performance Index (SPI):</strong> {results.spi}</p>
              <p className={parseFloat(results.spi) >= 1 ? 'positive' : 'negative'}>
                {getScheduleStatus()}
              </p>
              <p><strong>Cost Performance Index (CPI):</strong> {results.cpi}</p>
              <p className={parseFloat(results.cpi) >= 1 ? 'positive' : 'negative'}>
                {getCostStatus()}
              </p>
            </div>

            <div className="evm-section">
              <h4>Forecasting</h4>
              <p><strong>Estimate at Completion (EAC):</strong> ${results.eac1}</p>
              <p className="note">(Using CPI: BAC / CPI)</p>
              <p><strong>Estimate to Complete (ETC):</strong> ${results.etc}</p>
              <p><strong>Variance at Completion (VAC):</strong> ${results.vac}</p>
              <p><strong>To Complete Performance Index (TCPI):</strong> {results.tcpi}</p>
            </div>
          </div>

          <div className="interpretation">
            <h4>Interpretation:</h4>
            <ul>
              <li><strong>Schedule Status:</strong> Your project is {getScheduleStatus().toLowerCase()}</li>
              <li><strong>Cost Status:</strong> Your project is {getCostStatus().toLowerCase()}</li>
              <li><strong>SPI = {results.spi}:</strong> For every hour planned, you're completing {results.spi} hours of work</li>
              <li><strong>CPI = {results.cpi}:</strong> For every dollar spent, you're getting ${results.cpi} of value</li>
              <li><strong>EAC = ${results.eac1}:</strong> Expected total project cost at completion</li>
              <li><strong>TCPI = {results.tcpi}:</strong> Performance needed to meet budget (should be &lt; 1.0 for feasibility)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default EVMComprehensive;
