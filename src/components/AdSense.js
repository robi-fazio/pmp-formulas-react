import React from 'react';

const AdSense = ({ slot, format = 'auto', style = {} }) => {
  return (
    <div className="adsense-container" style={style}>
      {/* Placeholder - Replace with actual AdSense code after approval */}
      <div className="adsense-placeholder">
        <p>Advertisement</p>
        <p style={{ fontSize: '0.8rem', color: '#999' }}>
          Slot: {slot}
        </p>
      </div>
      
      {/* 
      When you get AdSense approval, replace the placeholder above with:
      
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-4082866145839486"
           data-ad-slot={slot}
           data-ad-format={format}
           data-full-width-responsive="true">
      </ins>
      */}
    </div>
  );
};

export default AdSense;
