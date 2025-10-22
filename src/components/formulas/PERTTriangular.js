import React, { useState } from 'react';

function PERTTriangular() {
  const [optimistic, setOptimistic] = useState('');
  const [mostLikely, setMostLikely] = useState('');
  const [pessimistic, setPessimistic] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const o = parseFloat(optimistic);
    const ml = parseFloat(mostLikely);
    const p = parseFloat(pessimistic);
    const estimate = (o + ml + p) / 3;
    setResult(estimate.toFixed(2));
  };

  return (
    <div className="formula-card">
      <h2>PERT - Triangular Distribution</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> Estimate = (O + ML + P) / 3</p>
      </div>
      <div className="description">
        <p>The Triangular Distribution is used for three-point estimates when all inputs should be weighted equally. Use this formula only if the question explicitly specifies equal weighting.</p>
        <ul>
          <li><strong>O:</strong> Optimistic estimate (best case scenario)</li>
          <li><strong>ML:</strong> Most Likely estimate (realistic scenario)</li>
          <li><strong>P:</strong> Pessimistic estimate (worst case scenario)</li>
        </ul>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="optimistic">Optimistic Estimate (O):</label>
          <input 
            type="number" 
            id="optimistic"
            value={optimistic} 
            onChange={(e) => setOptimistic(e.target.value)}
            placeholder="Enter optimistic duration/cost"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="mostLikely">Most Likely Estimate (ML):</label>
          <input 
            type="number" 
            id="mostLikely"
            value={mostLikely} 
            onChange={(e) => setMostLikely(e.target.value)}
            placeholder="Enter most likely duration/cost"
          />
        </div>

        <div className="input-group">
          <label htmlFor="pessimistic">Pessimistic Estimate (P):</label>
          <input 
            type="number" 
            id="pessimistic"
            value={pessimistic} 
            onChange={(e) => setPessimistic(e.target.value)}
            placeholder="Enter pessimistic duration/cost"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate Estimate</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Triangular Estimate = {result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>Based on equal weighting of all three estimates, the expected duration/cost is {result} units.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PERTTriangular;
