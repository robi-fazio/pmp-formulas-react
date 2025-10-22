import React, { useState } from 'react';

function PlannedValue() {
  const [bac, setBac] = useState('');
  const [percentTime, setPercentTime] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const pv = parseFloat(bac) * (parseFloat(percentTime) / 100);
    setResult(pv.toFixed(2));
  };

  return (
    <div className="formula-card">
      <h2>Planned Value (PV)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> PV = BAC × % Time Passed</p>
      </div>
      <div className="description">
        <p>Planned Value represents the authorized budget assigned to scheduled work. It tells you how much of the budget should have been spent given the current point in the schedule.</p>
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
          <label htmlFor="percentTime">Percent of Time Passed (%):</label>
          <input 
            type="number" 
            id="percentTime"
            value={percentTime} 
            onChange={(e) => setPercentTime(e.target.value)}
            placeholder="Enter % (e.g., 50 for 50%)"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate PV</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Planned Value (PV) = ${result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>This is the budgeted cost of work scheduled to be completed at this point in time.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlannedValue;
