import React, { useState } from 'react';

function SPI() {
  const [ev, setEv] = useState('');
  const [pv, setPv] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const spi = parseFloat(ev) / parseFloat(pv);
    setResult(spi.toFixed(4));
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const spiValue = parseFloat(result);
    if (spiValue > 1) {
      return `Project is ahead of schedule. For every hour planned, you are completing ${result} hours of work.`;
    } else if (spiValue < 1) {
      return `Project is behind schedule. For every hour planned, you are only completing ${result} hours of work.`;
    } else {
      return 'Project is exactly on schedule.';
    }
  };

  return (
    <div className="formula-card">
      <h2>Schedule Performance Index (SPI)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> SPI = EV / PV</p>
      </div>
      <div className="description">
        <p>Schedule Performance Index measures schedule efficiency by comparing the work performed to the work scheduled. It shows how efficiently the project team is using its time.</p>
        <ul>
          <li><strong>SPI &gt; 1:</strong> Ahead of schedule (good)</li>
          <li><strong>SPI = 1:</strong> On schedule</li>
          <li><strong>SPI &lt; 1:</strong> Behind schedule (bad)</li>
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
          <label htmlFor="pv">Planned Value (PV) $:</label>
          <input 
            type="number" 
            id="pv"
            value={pv} 
            onChange={(e) => setPv(e.target.value)}
            placeholder="Enter PV"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate SPI</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Schedule Performance Index (SPI) = {result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SPI;
