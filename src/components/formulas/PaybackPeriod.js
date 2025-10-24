import React, { useState } from 'react';

function PaybackPeriod({ addResult }) {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [annualCashInflow, setAnnualCashInflow] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const investment = parseFloat(initialInvestment);
    const cashflow = parseFloat(annualCashInflow);
    const payback = investment / cashflow;
    const formattedResult = payback.toFixed(2);
    setResult(formattedResult);
    addResult('Payback Period', formattedResult);
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const years = Math.floor(parseFloat(result));
    const months = Math.round((parseFloat(result) - years) * 12);
    return `It will take approximately ${years} year(s) and ${months} month(s) to recover the initial investment. Shorter payback periods are generally preferred as they indicate faster return of capital.`;
  };

  return (
    <div className="formula-card">
      <h2>Payback Period</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> Payback Period = Initial Investment / Annual Cash Inflow</p>
      </div>
      <div className="description">
        <p>Payback Period measures how long it takes to recover the initial investment from the project's cash inflows. It's a simple metric for evaluating project investments.</p>
        <p><strong>Characteristics:</strong></p>
        <ul>
          <li>Shorter payback periods are generally preferred</li>
          <li>Does not account for time value of money</li>
          <li>Simple to calculate and understand</li>
          <li>Useful for comparing similar projects</li>
        </ul>
        <p><strong>Note:</strong> This formula assumes constant annual cash inflows. For variable cash flows, sum year-by-year until investment is recovered.</p>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="initialInvestment">Initial Investment $:</label>
          <input 
            type="number" 
            id="initialInvestment"
            value={initialInvestment} 
            onChange={(e) => setInitialInvestment(e.target.value)}
            placeholder="Enter initial investment"
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="annualCashInflow">Annual Cash Inflow $:</label>
          <input 
            type="number" 
            id="annualCashInflow"
            value={annualCashInflow} 
            onChange={(e) => setAnnualCashInflow(e.target.value)}
            placeholder="Enter annual cash inflow"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate Payback Period</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Payback Period = {result} years</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaybackPeriod;
