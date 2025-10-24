import React, { useState } from 'react';

function NPV({ addResult }) {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [discountRate, setDiscountRate] = useState('');
  const [cashFlows, setCashFlows] = useState([{ year: 1, amount: '' }]);
  const [result, setResult] = useState(null);

  const addYear = () => {
    setCashFlows([...cashFlows, { year: cashFlows.length + 1, amount: '' }]);
  };

  const removeYear = (index) => {
    const newFlows = cashFlows.filter((_, i) => i !== index);
    setCashFlows(newFlows.map((flow, i) => ({ ...flow, year: i + 1 })));
  };

  const updateCashFlow = (index, value) => {
    const newFlows = [...cashFlows];
    newFlows[index].amount = value;
    setCashFlows(newFlows);
  };

  const calculate = () => {
    const initial = parseFloat(initialInvestment);
    const rate = parseFloat(discountRate) / 100;
    
    let npv = -initial;
    cashFlows.forEach((flow) => {
      if (flow.amount) {
        const pv = parseFloat(flow.amount) / Math.pow(1 + rate, flow.year);
        npv += pv;
      }
    });
    const formattedResult = npv.toFixed(2);
    
    // Add result to pills
    setResult(formattedResult);
    addResult('Net Present Value', `$${formattedResult}`);
    
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const npvValue = parseFloat(result);
    if (npvValue > 0) {
      return `Positive NPV of $${result}. This project is expected to generate value and should be accepted. Always select the project with the highest NPV.`;
    } else if (npvValue < 0) {
      return `Negative NPV of $${result}. This project is expected to lose value and should typically be rejected.`;
    } else {
      return 'NPV is zero. The project breaks even in terms of present value.';
    }
  };

  return (
    <div className="formula-card">
      <h2>Net Present Value (NPV)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong></p>
        <p>NPV = -Initial Investment + Σ [Cash Flow / (1 + Discount Rate)^Year]</p>
      </div>
      <div className="description">
        <p>Net Present Value is used for project selection. It calculates the present value of all future cash flows, discounted at a given rate, minus the initial investment. Always select the project with the highest NPV.</p>
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
          <label htmlFor="discountRate">Discount Rate (%):</label>
          <input 
            type="number" 
            id="discountRate"
            step="0.1"
            value={discountRate} 
            onChange={(e) => setDiscountRate(e.target.value)}
            placeholder="e.g., 10 for 10%"
          />
        </div>

        <div className="cash-flows-section">
          <h4>Cash Flows by Year:</h4>
          {cashFlows.map((flow, index) => (
            <div key={index} className="cash-flow-row">
              <label>Year {flow.year}:</label>
              <input 
                type="number"
                value={flow.amount}
                onChange={(e) => updateCashFlow(index, e.target.value)}
                placeholder={`Cash flow for year ${flow.year}`}
              />
              {cashFlows.length > 1 && (
                <button 
                  type="button" 
                  onClick={() => removeYear(index)}
                  className="remove-btn"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addYear} className="add-year-btn">
            + Add Another Year
          </button>
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate NPV</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Net Present Value (NPV) = ${result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NPV;
