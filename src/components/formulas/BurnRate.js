import React, { useState } from 'react';

function BurnRate({ addResult }) {
  const [cpi, setCpi] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const burnRate = 1 / parseFloat(cpi);
    const formattedResult = burnRate.toFixed(4);
    setResult(formattedResult);
    addResult('Burn Rate', formattedResult);
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const burnRateValue = parseFloat(result);
    if (burnRateValue > 1) {
      return `Budget is being consumed faster than planned. For every $1 of planned budget, you are spending $${result}.`;
    } else if (burnRateValue < 1) {
      return `Budget is being consumed slower than planned. For every $1 of planned budget, you are spending $${result}.`;
    } else {
      return 'Budget is being consumed exactly as planned.';
    }
  };

  return (
    <div className="formula-card">
      <h2>Burn Rate</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> Burn Rate = 1 / CPI</p>
      </div>
      <div className="description">
        <p>Burn Rate shows how quickly you're consuming your project budget compared to the planned rate. It's the inverse of the Cost Performance Index.</p>
        <ul>
          <li><strong>Burn Rate &gt; 1:</strong> Spending faster than planned (bad)</li>
          <li><strong>Burn Rate = 1:</strong> Spending as planned</li>
          <li><strong>Burn Rate &lt; 1:</strong> Spending slower than planned (good)</li>
        </ul>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="cpi">Cost Performance Index (CPI):</label>
          <input 
            type="number" 
            id="cpi"
            value={cpi} 
            onChange={(e) => setCpi(e.target.value)}
            placeholder="Enter CPI (e.g., 0.85)"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate Burn Rate</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Burn Rate = {result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BurnRate;
