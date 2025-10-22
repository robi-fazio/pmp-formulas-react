import React, { useState } from 'react';

function RiskRating() {
  const [probability, setProbability] = useState('');
  const [impact, setImpact] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const prob = parseFloat(probability);
    const imp = parseFloat(impact);
    const rating = prob * imp;
    setResult(rating.toFixed(4));
  };

  const getRiskLevel = () => {
    if (result === null) return '';
    const ratingValue = parseFloat(result);
    if (ratingValue >= 0.5) {
      return 'High Risk - Requires immediate attention and response planning';
    } else if (ratingValue >= 0.25) {
      return 'Medium Risk - Should be monitored and may require response planning';
    } else {
      return 'Low Risk - Can be monitored with minimal intervention';
    }
  };

  return (
    <div className="formula-card">
      <h2>Risk Rating (Qualitative Risk Analysis)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> Risk Rating = Probability × Impact</p>
      </div>
      <div className="description">
        <p>Risk Rating is used during qualitative risk analysis to prioritize risks. It multiplies the probability of occurrence by the potential impact to determine the overall risk level. The result is expressed as a percentage or decimal.</p>
        <p><strong>Input Guidelines:</strong></p>
        <ul>
          <li>Probability: Enter as decimal (0.0 to 1.0) or percentage (0 to 100)</li>
          <li>Impact: Enter as decimal (0.0 to 1.0) or percentage (0 to 100)</li>
          <li>If using percentages, divide by 100 first</li>
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
            placeholder="e.g., 0.7 for 70%"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="impact">Impact (0.0 to 1.0):</label>
          <input 
            type="number" 
            id="impact"
            step="0.01"
            min="0"
            max="1"
            value={impact} 
            onChange={(e) => setImpact(e.target.value)}
            placeholder="e.g., 0.8 for 80%"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate Risk Rating</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Risk Rating = {result} ({(parseFloat(result) * 100).toFixed(2)}%)</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getRiskLevel()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RiskRating;
