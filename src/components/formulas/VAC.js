import React, { useState } from 'react';

function VAC() {
  const [bac, setBac] = useState('');
  const [eac, setEac] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const vac = parseFloat(bac) - parseFloat(eac);
    setResult(vac.toFixed(2));
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const vacValue = parseFloat(result);
    if (vacValue > 0) {
      return `Project is forecasted to be under budget by $${Math.abs(vacValue).toFixed(2)} at completion.`;
    } else if (vacValue < 0) {
      return `Project is forecasted to be over budget by $${Math.abs(vacValue).toFixed(2)} at completion.`;
    } else {
      return 'Project is forecasted to finish exactly on budget.';
    }
  };

  return (
    <div className="formula-card">
      <h2>Variance at Completion (VAC)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> VAC = BAC - EAC</p>
      </div>
      <div className="description">
        <p>Variance at Completion projects the budget surplus or deficit at the end of the project. It compares the original budget to the forecasted final cost.</p>
        <ul>
          <li><strong>VAC &gt; 0:</strong> Under budget at completion (good)</li>
          <li><strong>VAC = 0:</strong> On budget at completion</li>
          <li><strong>VAC &lt; 0:</strong> Over budget at completion (bad)</li>
        </ul>
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
          <label htmlFor="eac">Estimate at Completion (EAC) $:</label>
          <input 
            type="number" 
            id="eac"
            value={eac} 
            onChange={(e) => setEac(e.target.value)}
            placeholder="Enter EAC"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate VAC</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Variance at Completion (VAC) = ${result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default VAC;
