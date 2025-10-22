import React, { useState } from 'react';

function TCPI() {
  const [useEac, setUseEac] = useState(false);
  const [bac, setBac] = useState('');
  const [eac, setEac] = useState('');
  const [ev, setEv] = useState('');
  const [ac, setAc] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const bacValue = parseFloat(bac);
    const eacValue = parseFloat(eac);
    const evValue = parseFloat(ev);
    const acValue = parseFloat(ac);

    let tcpi;
    if (useEac) {
      tcpi = (bacValue - evValue) / (eacValue - acValue);
    } else {
      tcpi = (bacValue - evValue) / (bacValue - acValue);
    }
    setResult(tcpi.toFixed(4));
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const tcpiValue = parseFloat(result);
    if (tcpiValue > 1) {
      return `Performance must improve. You need a CPI of ${result} to meet the target budget, which may be challenging.`;
    } else if (tcpiValue < 1) {
      return `Performance can be more relaxed. You only need a CPI of ${result} to meet the target budget.`;
    } else {
      return 'You need to maintain current performance exactly to meet the budget target.';
    }
  };

  return (
    <div className="formula-card">
      <h2>To Complete Performance Index (TCPI)</h2>
      <div className="formula-display">
        <p><strong>Formula (Original Budget):</strong> TCPI = (BAC - EV) / (BAC - AC)</p>
        <p><strong>Formula (Revised Budget):</strong> TCPI = (BAC - EV) / (EAC - AC)</p>
      </div>
      <div className="description">
        <p>TCPI represents "work left" divided by "money left". It shows the cost performance needed to complete the remaining work within budget. Use BAC for original budget targets, or EAC if the budget has been rebaselined.</p>
        <ul>
          <li><strong>TCPI &gt; 1:</strong> Need better performance than current</li>
          <li><strong>TCPI = 1:</strong> Maintain current performance</li>
          <li><strong>TCPI &lt; 1:</strong> Can relax performance slightly</li>
        </ul>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label>
            <input 
              type="checkbox"
              checked={useEac}
              onChange={(e) => setUseEac(e.target.checked)}
            />
            {' '}Budget has been rebaselined (use EAC instead of BAC)
          </label>
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

        {useEac && (
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
        )}
        
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
        
        <button onClick={calculate} className="calculate-btn">Calculate TCPI</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">To Complete Performance Index (TCPI) = {result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TCPI;
