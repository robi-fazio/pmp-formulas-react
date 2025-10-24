import React, { useState } from 'react';

function BCR({ addResult }) {
  const [benefits, setBenefits] = useState('');
  const [costs, setCosts] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const ben = parseFloat(benefits);
    const cost = parseFloat(costs);
    const bcr = ben / cost;
    const formattedResult = bcr.toFixed(4);
    setResult(formattedResult);
    addResult('Benefit Cost Ratio', formattedResult);
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const bcrValue = parseFloat(result);
    if (bcrValue > 1) {
      return `BCR greater than 1 (${result}). Benefits exceed costs. This is a favorable investment. For every dollar spent, you receive $${result} in benefits.`;
    } else if (bcrValue < 1) {
      return `BCR less than 1 (${result}). Costs exceed benefits. This investment should be reconsidered.`;
    } else {
      return 'BCR equals 1. Benefits equal costs - the project breaks even.';
    }
  };

  return (
    <div className="formula-card">
      <h2>Benefit Cost Ratio (BCR)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> BCR = Present Value of Benefits / Present Value of Costs</p>
      </div>
      <div className="description">
        <p>Benefit Cost Ratio compares the present value of benefits to the present value of costs. It's used for project selection and investment decisions.</p>
        <ul>
          <li><strong>BCR &gt; 1:</strong> Benefits exceed costs (accept project)</li>
          <li><strong>BCR = 1:</strong> Benefits equal costs (break even)</li>
          <li><strong>BCR &lt; 1:</strong> Costs exceed benefits (reject project)</li>
        </ul>
        <p><strong>Note:</strong> When comparing projects, select the one with the highest BCR.</p>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="benefits">Present Value of Benefits $:</label>
          <input 
            type="number" 
            id="benefits"
            value={benefits} 
            onChange={(e) => setBenefits(e.target.value)}
            placeholder="Enter total benefits (PV)"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="costs">Present Value of Costs $:</label>
          <input 
            type="number" 
            id="costs"
            value={costs} 
            onChange={(e) => setCosts(e.target.value)}
            placeholder="Enter total costs (PV)"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate BCR</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Benefit Cost Ratio (BCR) = {result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BCR;
