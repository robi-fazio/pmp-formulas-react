import React, { useState } from 'react';

const EVMCalculator = () => {
  const [ev, setEv] = useState(0);
  const [pv, setPv] = useState(0);
  const [ac, setAc] = useState(0);

  const calculateSPI = () => ev / pv;
  const calculateCPI = () => ev / ac;
  const calculateSV = () => ev - pv;
  const calculateCV = () => ev - ac;

  return (
    <div className="formula-page">
      <h2>Earned Value Management Formulas</h2>
      <form className="input-form">
        <label>EV (Earned Value): <input type="number" value={ev} onChange={(e) => setEv(e.target.value)} /></label>
        <label>PV (Planned Value): <input type="number" value={pv} onChange={(e) => setPv(e.target.value)} /></label>
        <label>AC (Actual Cost): <input type="number" value={ac} onChange={(e) => setAc(e.target.value)} /></label>
        <button type="button" onClick={() => alert(`SPI: ${calculateSPI().toFixed(2)}\nCPI: ${calculateCPI().toFixed(2)}\nSV: ${calculateSV()}\nCV: ${calculateCV()}`)}>
          Calculate
        </button>
      </form>
      <div className="explanation">
        <p>EVM tracks project performance. SPI (Schedule Performance Index) = EV / PV; if &gt;1, ahead of schedule. CPI (Cost Performance Index) = EV / AC; if &lt;1, over budget. SV (Schedule Variance) = EV - PV; positive means ahead. CV (Cost Variance) = EV - AC; negative means over budget. For more, visit <a href="https://www.pmi.org" target="_blank" rel="noopener noreferrer">PMI.org</a>.</p>
      </div>
      <div className="adsense-placeholder">Side Banner AdSense</div>
    </div>
  );
};

export default EVMCalculator;
