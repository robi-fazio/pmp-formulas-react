import React, { useState } from 'react';

function EAC({ addResult }) {
  const [scenario, setScenario] = useState('1');
  const [bac, setBac] = useState('');
  const [cpi, setCpi] = useState('');
  const [spi, setSpi] = useState('');
  const [ac, setAc] = useState('');
  const [ev, setEv] = useState('');
  const [etc, setEtc] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let eac;
    const bacValue = parseFloat(bac);
    const cpiValue = parseFloat(cpi);
    const spiValue = parseFloat(spi);
    const acValue = parseFloat(ac);
    const evValue = parseFloat(ev);
    const etcValue = parseFloat(etc);

    switch(scenario) {
      case '1':
        eac = bacValue / cpiValue;
        break;
      case '2':
        eac = acValue + (bacValue - evValue);
        break;
      case '3':
        eac = acValue + ((bacValue - evValue) / (cpiValue * spiValue));
        break;
      case '4':
        eac = acValue + etcValue;
        break;
      default:
        eac = 0;
    }
    const formattedResult = `$${eac.toFixed(2)}`;
    addResult('Estimate at Completion', formattedResult);
    setResult(formattedResult);
  };

  const getScenarioDescription = () => {
    switch(scenario) {
      case '1':
        return 'Assumes the same rate of spending will continue for the remainder of the project.';
      case '2':
        return 'Assumes you deviated from budget due to a one-time incident. Future spending will be at the planned rate.';
      case '3':
        return 'Cost performance has been poor AND the project deadline is firm (must finish on time).';
      case '4':
        return 'Assumes the original budget was flawed. You need to provide a new Estimate to Complete (ETC).';
      default:
        return '';
    }
  };

  return (
    <div className="formula-card">
      <h2>Estimate at Completion (EAC)</h2>
      <div className="formula-display">
        <p><strong>Four Different Scenarios:</strong></p>
        <ul>
          <li><strong>Scenario 1:</strong> EAC = BAC / CPI</li>
          <li><strong>Scenario 2:</strong> EAC = AC + (BAC - EV)</li>
          <li><strong>Scenario 3:</strong> EAC = AC + [(BAC - EV) / (CPI × SPI)]</li>
          <li><strong>Scenario 4:</strong> EAC = AC + ETC</li>
        </ul>
      </div>
      <div className="description">
        <p>Estimate at Completion forecasts the total project cost at completion based on current performance. Different scenarios apply depending on your project situation.</p>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="scenario">Select Scenario:</label>
          <select 
            id="scenario"
            value={scenario} 
            onChange={(e) => setScenario(e.target.value)}
          >
            <option value="1">Scenario 1: Same spending rate continues</option>
            <option value="2">Scenario 2: One-time deviation, back to plan</option>
            <option value="3">Scenario 3: Poor performance, firm deadline</option>
            <option value="4">Scenario 4: Budget was flawed, need new ETC</option>
          </select>
        </div>

        <div className="scenario-description">
          <p><strong>Selected Scenario:</strong> {getScenarioDescription()}</p>
        </div>
        
        <div className="input-group">
          <label htmlFor="bac">Budget at Completion (BAC) $:</label>
          <input 
            type="number" 
            id="bac"
            value={bac} 
            onChange={(e) => setBac(e.target.value)}
            placeholder="Enter BAC"
          />
        </div>

        {scenario === '1' && (
          <div className="input-group">
            <label htmlFor="cpi">Cost Performance Index (CPI):</label>
            <input 
              type="number" 
              id="cpi"
              value={cpi} 
              onChange={(e) => setCpi(e.target.value)}
              placeholder="Enter CPI"
            />
          </div>
        )}

        {(scenario === '2' || scenario === '3') && (
          <>
            <div className="input-group">
              <label htmlFor="ac">Actual Cost (AC) $:</label>
              <input 
                type="number" 
                id="ac"
                value={ac} 
                onChange={(e) => setAc(e.target.value)}
                placeholder="Enter AC"
              />
            </div>
            <div className="input-group">
              <label htmlFor="ev">Earned Value (EV) $:</label>
              <input 
                type="number" 
                id="ev"
                value={ev} 
                onChange={(e) => setEv(e.target.value)}
                placeholder="Enter EV"
              />
            </div>
          </>
        )}

        {scenario === '3' && (
          <>
            <div className="input-group">
              <label htmlFor="cpi">Cost Performance Index (CPI):</label>
              <input 
                type="number" 
                id="cpi"
                value={cpi} 
                onChange={(e) => setCpi(e.target.value)}
                placeholder="Enter CPI"
              />
            </div>
            <div className="input-group">
              <label htmlFor="spi">Schedule Performance Index (SPI):</label>
              <input 
                type="number" 
                id="spi"
                value={spi} 
                onChange={(e) => setSpi(e.target.value)}
                placeholder="Enter SPI"
              />
            </div>
          </>
        )}

        {scenario === '4' && (
          <>
            <div className="input-group">
              <label htmlFor="ac">Actual Cost (AC) $:</label>
              <input 
                type="number" 
                id="ac"
                value={ac} 
                onChange={(e) => setAc(e.target.value)}
                placeholder="Enter AC"
              />
            </div>
            <div className="input-group">
              <label htmlFor="etc">Estimate to Complete (ETC) $:</label>
              <input 
                type="number" 
                id="etc"
                value={etc} 
                onChange={(e) => setEtc(e.target.value)}
                placeholder="Enter new ETC estimate"
              />
            </div>
          </>
        )}
        
        <button onClick={calculate} className="calculate-btn">Calculate EAC</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Estimate at Completion (EAC) = ${result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>Based on current performance and the selected scenario, your project is expected to cost ${result} when completed.</p>
            <p>Compare this to your original BAC (${bac}) to determine if you're forecasting over or under budget.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EAC;
