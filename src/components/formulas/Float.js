import React, { useState } from 'react';

function Float({ addResult }) {
  const [method, setMethod] = useState('start');
  const [lateStart, setLateStart] = useState('');
  const [earlyStart, setEarlyStart] = useState('');
  const [lateFinish, setLateFinish] = useState('');
  const [earlyFinish, setEarlyFinish] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let floatValue;
    if (method === 'start') {
      floatValue = parseFloat(lateStart) - parseFloat(earlyStart);
    } else {
      floatValue = parseFloat(lateFinish) - parseFloat(earlyFinish);
    }
    const formattedResult = floatValue.toFixed(2);
    setResult(formattedResult);
    addResult('Float/Slack', formattedResult);
  };

  const getInterpretation = () => {
    if (result === null) return '';
    const floatValue = parseFloat(result);
    if (floatValue === 0) {
      return 'This activity is on the critical path. Any delay will delay the entire project.';
    } else if (floatValue > 0) {
      return `This activity has ${result} days of float. It can be delayed by up to ${result} days without affecting the project completion date.`;
    } else {
      return 'Negative float indicates the activity is behind schedule and needs to be expedited.';
    }
  };

  return (
    <div className="formula-card">
      <h2>Float/Slack</h2>
      <div className="formula-display">
        <p><strong>Formula 1:</strong> Float = Late Start - Early Start</p>
        <p><strong>Formula 2:</strong> Float = Late Finish - Early Finish</p>
      </div>
      <div className="description">
        <p>Float (also called Slack) represents the amount of time an activity can be delayed without delaying the project completion date. Activities on the critical path have zero float.</p>
        <ul>
          <li><strong>Float = 0:</strong> Activity is on the critical path</li>
          <li><strong>Float &gt; 0:</strong> Activity has schedule flexibility</li>
          <li><strong>Float &lt; 0:</strong> Activity is behind schedule</li>
        </ul>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="method">Calculation Method:</label>
          <select 
            id="method"
            value={method} 
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="start">Using Start Dates</option>
            <option value="finish">Using Finish Dates</option>
          </select>
        </div>

        {method === 'start' ? (
          <>
            <div className="input-group">
              <label htmlFor="lateStart">Late Start (LS):</label>
              <input 
                type="number" 
                id="lateStart"
                value={lateStart} 
                onChange={(e) => setLateStart(e.target.value)}
                placeholder="Enter Late Start"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="earlyStart">Early Start (ES):</label>
              <input 
                type="number" 
                id="earlyStart"
                value={earlyStart} 
                onChange={(e) => setEarlyStart(e.target.value)}
                placeholder="Enter Early Start"
              />
            </div>
          </>
        ) : (
          <>
            <div className="input-group">
              <label htmlFor="lateFinish">Late Finish (LF):</label>
              <input 
                type="number" 
                id="lateFinish"
                value={lateFinish} 
                onChange={(e) => setLateFinish(e.target.value)}
                placeholder="Enter Late Finish"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="earlyFinish">Early Finish (EF):</label>
              <input 
                type="number" 
                id="earlyFinish"
                value={earlyFinish} 
                onChange={(e) => setEarlyFinish(e.target.value)}
                placeholder="Enter Early Finish"
              />
            </div>
          </>
        )}
        
        <button onClick={calculate} className="calculate-btn">Calculate Float</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Float/Slack = {result} days</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>{getInterpretation()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Float;
