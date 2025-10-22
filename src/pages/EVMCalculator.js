import React, { useState } from 'react';
import './FormulaPage.css';

function EVMCalculator() {
  const [bac, setBac] = useState('');
  const [percentComplete, setPercentComplete] = useState('');
  const [percentTimePassed, setPercentTimePassed] = useState('');
  const [ac, setAc] = useState('');
  const [results, setResults] = useState(null);

  const calculateEVM = () => {
    const bacNum = parseFloat(bac);
    const percentCompleteNum = parseFloat(percentComplete) / 100;
    const percentTimeNum = parseFloat(percentTimePassed) / 100;
    const acNum = parseFloat(ac);

    const pv = bacNum * percentTimeNum;
    const ev = bacNum * percentCompleteNum;
    const sv = ev - pv;
    const cv = ev - acNum;
    const spi = pv !== 0 ? ev / pv : 0;
    const cpi = acNum !== 0 ? ev / acNum : 0;
    const eac = cpi !== 0 ? bacNum / cpi : 0;
    const etc = eac - acNum;
    const vac = bacNum - eac;
    const tcpi = (bacNum - acNum) !== 0 ? (bacNum - ev) / (bacNum - acNum) : 0;

    setResults({
      pv: pv.toFixed(2),
      ev: ev.toFixed(2),
      sv: sv.toFixed(2),
      cv: cv.toFixed(2),
      spi: spi.toFixed(2),
      cpi: cpi.toFixed(2),
      eac: eac.toFixed(2),
      etc: etc.toFixed(2),
      vac: vac.toFixed(2),
      tcpi: tcpi.toFixed(2),
      scheduleStatus: sv > 0 ? 'Ahead of Schedule' : sv < 0 ? 'Behind Schedule' : 'On Schedule',
      costStatus: cv > 0 ? 'Under Budget' : cv < 0 ? 'Over Budget' : 'On Budget'
    });
  };

  return (
    <div className="formula-page">
      <h1>Earned Value Management (EVM) Calculator</h1>
      
      <div className="formula-description">
        <p>EVM measures project progress by comparing actual schedule and cost performance against planned performance.</p>
      </div>

      <div className="input-section">
        <div className="input-group">
          <label>Budget at Completion (BAC):</label>
          <input
            type="number"
            value={bac}
            onChange={(e) => setBac(e.target.value)}
            placeholder="Enter total project budget"
          />
        </div>

        <div className="input-group">
          <label>Percent of Work Complete (%):</label>
          <input
            type="number"
            value={percentComplete}
            onChange={(e) => setPercentComplete(e.target.value)}
            placeholder="Enter % of work completed"
          />
        </div>

        <div className="input-group">
          <label>Percent of Time Passed (%):</label>
          <input
            type="number"
            value={percentTimePassed}
            onChange={(e) => setPercentTimePassed(e.target.value)}
            placeholder="Enter % of time passed"
          />
        </div>

        <div className="input-group">
          <label>Actual Cost (AC):</label>
          <input
            type="number"
            value={ac}
            onChange={(e) => setAc(e.target.value)}
            placeholder="Enter actual cost spent"
          />
        </div>

        <button onClick={calculateEVM} className="calculate-btn">
          Calculate EVM Metrics
        </button>
      </div>

      {results && (
        <div className="results-section">
          <h2>Results</h2>
          
          <div className="result-group">
            <h3>Core Values</h3>
            <p><strong>Planned Value (PV):</strong> ${results.pv}</p>
            <p><strong>Earned Value (EV):</strong> ${results.ev}</p>
            <p><strong>Actual Cost (AC):</strong> ${ac}</p>
          </div>

          <div className="result-group">
            <h3>Schedule Performance</h3>
            <p><strong>Schedule Variance (SV):</strong> ${results.sv}</p>
            <p><strong>Schedule Performance Index (SPI):</strong> {results.spi}</p>
            <p className={results.sv >= 0 ? 'status-good' : 'status-bad'}>
              <strong>Status:</strong> {results.scheduleStatus}
            </p>
          </div>

          <div className="result-group">
            <h3>Cost Performance</h3>
            <p><strong>Cost Variance (CV):</strong> ${results.cv}</p>
            <p><strong>Cost Performance Index (CPI):</strong> {results.cpi}</p>
            <p className={results.cv >= 0 ? 'status-good' : 'status-bad'}>
              <strong>Status:</strong> {results.costStatus}
            </p>
          </div>

          <div className="result-group">
            <h3>Forecasting</h3>
            <p><strong>Estimate at Completion (EAC):</strong> ${results.eac}</p>
            <p><strong>Estimate to Complete (ETC):</strong> ${results.etc}</p>
            <p><strong>Variance at Completion (VAC):</strong> ${results.vac}</p>
            <p><strong>To Complete Performance Index (TCPI):</strong> {results.tcpi}</p>
          </div>
        </div>
      )}

      <div className="formula-explanation">
        <h3>Formulas Used:</h3>
        <ul>
          <li><strong>PV</strong> = BAC × % Time Passed</li>
          <li><strong>EV</strong> = BAC × % Work Complete</li>
          <li><strong>SV</strong> = EV - PV (Positive = Ahead of Schedule)</li>
          <li><strong>CV</strong> = EV - AC (Positive = Under Budget)</li>
          <li><strong>SPI</strong> = EV ÷ PV (&gt;1 = Ahead, &lt;1 = Behind)</li>
          <li><strong>CPI</strong> = EV ÷ AC (&gt;1 = Under Budget, &lt;1 = Over Budget)</li>
          <li><strong>EAC</strong> = BAC ÷ CPI</li>
          <li><strong>ETC</strong> = EAC - AC</li>
          <li><strong>VAC</strong> = BAC - EAC</li>
          <li><strong>TCPI</strong> = (BAC - EV) ÷ (BAC - AC)</li>
        </ul>
      </div>
    </div>
  );
}

export default EVMCalculator;


