import React, { useState } from 'react';

function CPI() {
  const [ev, setEv] = useState('');
  const [ac, setAc] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const cpi = parseFloat(ev) / parseFloat(ac);
    setResult(cpi.toFixed(4));
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const cpiValue = parseFloat(result);
    if (cpiValue > 1) {
      return 'Project is under budget (good performance). For every dollar spent, you are getting more than one dollar of value.';
    } else if (cpiValue < 1) {
      return 'Project is over budget (poor performance). For every dollar spent, you are getting less than one dollar of value.';
    } else {
      return 'Project is exactly on budget.';
    }
  };

  return (
    <div className="formula-card">
      <h2>Cost Performance Index (CPI)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> CPI = EV / AC</p>
      </div>
      <div className="description">
        <p>Cost Performance Index measures the cost efficiency of budgeted resources. It shows the value of work completed compared to the actual cost.</p>
        <ul>
          <li><strong>CPI &gt; 1:</strong> Under budget (good)</li>
          <li><strong>CPI = 1:</strong> On budget</li>
          <li><strong>CPI &lt; 1:</strong> Over budget (bad)</li>
        </ul>
      </div>
      
      <div className="input-section">
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
        
        <button onClick={calculate} className="calculate-btn">Calculate CPI</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Cost Performance Index (CPI) = {result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CPI;
