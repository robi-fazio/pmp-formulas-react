import React, { useState } from 'react';

function ROI() {
  const [netProfit, setNetProfit] = useState('');
  const [investment, setInvestment] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const profit = parseFloat(netProfit);
    const invest = parseFloat(investment);
    const roi = (profit / invest) * 100;
    setResult(roi.toFixed(2));
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const roiValue = parseFloat(result);
    if (roiValue > 0) {
      return `Positive ROI of ${result}%. For every dollar invested, you gain $${(roiValue/100).toFixed(2)} in return. This is a profitable investment.`;
    } else if (roiValue < 0) {
      return `Negative ROI of ${result}%. This investment is losing money and should be reconsidered.`;
    } else {
      return 'ROI is zero. The investment breaks even with no gain or loss.';
    }
  };

  return (
    <div className="formula-card">
      <h2>Return on Investment (ROI)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> ROI = (Net Profit / Investment Cost) × 100</p>
        <p><strong>Alternative:</strong> ROI = [(Benefits - Costs) / Costs] × 100</p>
      </div>
      <div className="description">
        <p>Return on Investment measures the profitability of an investment. It shows the percentage return on money invested. A higher ROI indicates a more profitable investment.</p>
        <p><strong>Note:</strong> Net Profit = Total Benefits - Total Costs</p>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="netProfit">Net Profit (Benefits - Costs) $:</label>
          <input 
            type="number" 
            id="netProfit"
            value={netProfit} 
            onChange={(e) => setNetProfit(e.target.value)}
            placeholder="Enter net profit"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="investment">Investment Cost $:</label>
          <input 
            type="number" 
            id="investment"
            value={investment} 
            onChange={(e) => setInvestment(e.target.value)}
            placeholder="Enter investment cost"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate ROI</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Return on Investment (ROI) = {result}%</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ROI;
