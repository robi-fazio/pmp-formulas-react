import React, { useState } from 'react';

function EarnedValue() {
  const [bac, setBac] = useState('');
  const [percentWork, setPercentWork] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const ev = parseFloat(bac) * (parseFloat(percentWork) / 100);
    setResult(ev.toFixed(2));
  };

  return (
    <div className="formula-card">
      <h2>Earned Value (EV)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> EV = BAC × % Work Completed</p>
      </div>
      <div className="description">
        <p>Earned Value represents the budgeted amount for the work actually completed. It measures the value of work performed expressed in terms of the approved budget.</p>
      </div>
      
      <div className="input-section">
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
        
        <div className="input-group">
          <label htmlFor="percentWork">Percent of Work Completed (%):</label>
          <input 
            type="number" 
            id="percentWork"
            value={percentWork} 
            onChange={(e) => setPercentWork(e.target.value)}
            placeholder="Enter % (e.g., 45 for 45%)"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate EV</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Earned Value (EV) = ${result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>This is the budgeted cost of work that has been completed to date.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EarnedValue;
