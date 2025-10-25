import React, { useState } from 'react';

function EMV({ addResult }) {
  const [probability, setProbability] = useState('');
  const [impact, setImpact] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const prob = parseFloat(probability);
    const imp = parseFloat(impact);
    const emv = prob * imp;
    const formattedResult = emv.toFixed(2);
   
    setResult(formattedResult);
     addResult('Expected Monetary Value', formattedResult);
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const emvValue = parseFloat(result);
    if (emvValue > 0) {
      return `This represents a potential opportunity. The expected value is $${result}.`;
    } else if (emvValue < 0) {
      return `This represents a potential threat/risk. The expected cost is $${Math.abs(emvValue).toFixed(2)}.`;
    } else {
      return 'The expected monetary value is zero.';
    }
  };

  return (
    <div className="formula-card">
      <h2>Expected Monetary Value (EMV)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> EMV = Probability × Impact</p>
      </div>
      <div className="description">
        <p>Expected Monetary Value is used during quantitative risk analysis to determine the average outcome when the future includes scenarios that may or may not happen. The result is expressed as a dollar amount.</p>
        <p><strong>Usage:</strong></p>
        <ul>
          <li>For threats/risks: Use negative impact values</li>
          <li>For opportunities: Use positive impact values</li>
          <li>Probability should be between 0.0 and 1.0</li>
          <li>Decision trees often use EMV to compare alternatives</li>
        </ul>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="probability">Probability (0.0 to 1.0):</label>
          <input 
            type="number" 
            id="probability"
            step="0.01"
            min="0"
            max="1"
            value={probability} 
            onChange={(e) => setProbability(e.target.value)}
            placeholder="e.g., 0.3 for 30%"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="impact">Impact ($):</label>
          <input 
            type="number" 
            id="impact"
            value={impact} 
            onChange={(e) => setImpact(e.target.value)}
            placeholder="Enter $ amount (negative for threats)"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate EMV</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Expected Monetary Value (EMV) = ${result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
            <p><strong>Note:</strong> When comparing multiple options, select the one with the highest EMV (least negative or most positive).</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EMV;
