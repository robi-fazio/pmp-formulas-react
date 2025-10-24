import React, { useState } from 'react';

function CommunicationChannels({ addResult }) {
  const [teamMembers, setTeamMembers] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n = parseInt(teamMembers);
    const channels = (n * (n - 1)) / 2;
    const formattedResult = channels.toFixed(2);
    setResult(formattedResult);
    addResult('Communication Channels', formattedResult);
  };

  return (
    <div className="formula-card">
      <h2>Communication Channels</h2>
      <div className="formula-display">
        <p><strong>Formula:</strong> Number of Channels = n(n-1) / 2</p>
      </div>
      <div className="description">
        <p>This formula calculates the number of potential communication channels in a project team. As team size increases, the number of communication channels grows exponentially, which can increase project complexity.</p>
        <p><strong>Note:</strong> If the question asks about "other" team members, remember to add 1 to count yourself.</p>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <label htmlFor="teamMembers">Number of Team Members (n):</label>
          <input 
            type="number" 
            id="teamMembers"
            value={teamMembers} 
            onChange={(e) => setTeamMembers(e.target.value)}
            placeholder="Enter number of team members"
          />
        </div>
        
        <button onClick={calculate} className="calculate-btn">Calculate Channels</button>
      </div>
      
      {result !== null && (
        <div className="result-section">
          <h3>Result:</h3>
          <p className="result-value">Number of Communication Channels = {result}</p>
          <div className="interpretation">
            <h4>Interpretation:</h4>
            <p>Your team has {result} potential communication channel(s) that need to be managed.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommunicationChannels;
