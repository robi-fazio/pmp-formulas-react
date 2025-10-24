import React, { useState } from 'react';

function ScheduleVariance({ addResult }) { 
  const [ev, setEv] = useState('');
  const [pv, setPv] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const sv = parseFloat(ev) - parseFloat(pv);
    const formattedResult = `$${sv.toFixed(2)}`;
    setResult(formattedResult);
    
    addResult('Schedule Variance', formattedResult);  // ✅ Add this line
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const svValue = parseFloat(result);
    if (svValue > 0) {
      return 'Project is ahead of schedule. You have completed more work than planned at this point.';
    } else if (svValue < 0) {
      return 'Project is behind schedule. You have completed less work than planned at this point.';
    } else {
      return 'Project is exactly on schedule.';
    }
  };

  return (
    <div className="formula-card">
      <h2>Schedule Variance (SV)</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> SV = EV - PV</p>
      </div>
      <div className="description">
        <p>Schedule Variance measures the difference between the work completed and the work planned to be completed. A positive value indicates the project is ahead of schedule, while a negative value indicates it's behind schedule.</p>
        <ul>
          <li><strong>SV &gt; 0:</strong> Ahead of schedule (good)</li>
          <li><strong>SV = 0:</strong> On schedule</li>
          <li><strong>SV &lt; 0:</strong> Behind schedule (bad)</li>
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
        
        <button onClick={calculate} className="calculate-btn">Calculate SV</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Schedule Variance (SV) = ${result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScheduleVariance;
