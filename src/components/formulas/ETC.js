import React, { useState } from 'react';

function ETC() {
  const [eac, setEac] = useState('');
  const [ac, setAc] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const etc = parseFloat(eac) - parseFloat(ac);
    setResult(etc.toFixed(2));
  };

  return (
    <div className="formula-card">
      <h2>Estimate to Complete (ETC)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> ETC = EAC - AC</p>
      </div>
      <div className="description">
        <p>Estimate to Complete represents the expected cost to finish all remaining project work. It's calculated by subtracting the Actual Cost from the Estimate at Completion.</p>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="eac">Estimate at Completion (EAC) $:</label>
          <input 
            type="number" 
            id="eac"
            value={eac} 
            onChange={(e) => setEac(e.target.value)}
            placeholder="Enter EAC"
          />
        </div>
        
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
        
        <button onClick={calculate} className="calculate-btn">Calculate ETC</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Estimate to Complete (ETC) = ${result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>You need ${result} more to complete all remaining project work based on current forecasts.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ETC;
