import React, { useState } from 'react';

function StandardDeviation() {
  const [pessimistic, setPessimistic] = useState('');
  const [optimistic, setOptimistic] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const p = parseFloat(pessimistic);
    const o = parseFloat(optimistic);
    const sd = (p - o) / 6;
    setResult(sd.toFixed(2));
  };

  return (
    <div className="formula-card">
      <h2>Standard Deviation</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> SD = (P - O) / 6</p>
      </div>
      <div className="description">
        <p>Standard Deviation measures the variability or uncertainty in your estimates. It indicates the degree of risk or uncertainty in the task duration or cost. A higher standard deviation means more uncertainty.</p>
        <p>This formula assumes the estimate follows a normal distribution where the range between pessimistic and optimistic represents approximately 6 standard deviations (±3σ).</p>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="pessimistic">Pessimistic Estimate (P):</label>
          <input 
            type="number" 
            id="pessimistic"
            value={pessimistic} 
            onChange={(e) => setPessimistic(e.target.value)}
            placeholder="Enter pessimistic estimate"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="optimistic">Optimistic Estimate (O):</label>
          <input 
            type="number" 
            id="optimistic"
            value={optimistic} 
            onChange={(e) => setOptimistic(e.target.value)}
            placeholder="Enter optimistic estimate"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate Standard Deviation</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Standard Deviation (SD) = {result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>The standard deviation is {result} units. This represents the degree of uncertainty in your estimate.</p>
            <p><strong>Reserve Time:</strong> Use this value to calculate schedule buffers. For 68% confidence, add 1σ; for 95% confidence, add 2σ; for 99.7% confidence, add 3σ.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StandardDeviation;
