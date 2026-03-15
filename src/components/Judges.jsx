import React from 'react';

const Judges = ({ id }) => {
  return (
    <section id={id} className="judges-section">
      <p className="section-label align-center reveal">/ THE SYNDICATE</p>
      <h2 className="section-title align-center text-white reveal">MEET THE JUDGES</h2>
      
      <div className="judges-grid">
        {[1, 2, 3].map((judgeItem) => (
          <div key={judgeItem} className="judge-card reveal">
            <div className="judge-image-container">
               {/* Placeholder until real image */}
               <div className="judge-placeholder"></div>
            </div>
            <div className="judge-info">
              <h3 className="judge-name text-gold">JUDGE {judgeItem}</h3>
              <p className="judge-role text-muted">Senior Developer / Architect</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Judges;
