import React, { useState } from 'react';

function CostVariance({ addResult }) {
  const [ev, setEv] = useState('');
  const [ac, setAc] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const cv = parseFloat(ev) - parseFloat(ac);
    const formattedResult = cv.toFixed(2);
    setResult(formattedResult);
    addResult('Cost Variance', formattedResult);
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const cvValue = parseFloat(result);
    if (cvValue > 0) {
      return 'Project is under budget. You have spent less than the value of work completed.';
    } else if (cvValue < 0) {
      return 'Project is over budget. You have spent more than the value of work completed.';
    } else {
      return 'Project is exactly on budget.';
    }
  };

  return (
    <div className="formula-card">
      <h2>Cost Variance (CV)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> CV = EV - AC</p>
      </div>
      <div className="description">
        <p>Cost Variance measures the difference between the budgeted cost of work performed and the actual cost. A positive value indicates the project is under budget, while a negative value indicates it's over budget.</p>
        <ul>
          <li><strong>CV &gt; 0:</strong> Under budget (good)</li>
          <li><strong>CV = 0:</strong> On budget</li>
          <li><strong>CV &lt; 0:</strong> Over budget (bad)</li>
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
        
        <button onClick={calculate} className="calculate-btn">Calculate CV</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Cost Variance (CV) = ${result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CostVariance;
