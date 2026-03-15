import React from 'react';
import { Users, Zap, Trophy, Building } from 'lucide-react';

const About = ({ id }) => {
  return (
    <section id={id} className="about-section">
      <div className="about-content reveal">
        <p className="section-label">/ ABOUT THE EVENT</p>
        <h2 className="section-title text-white">WHAT IS HACKSPHERE?</h2>
        
        <p className="about-desc">
          Hacksphere is Ramdeobaba University's flagship technical festival — a battleground where developers, engineers, and creators converge to build groundbreaking innovations, compete for glory, and redefine what's possible.
        </p>
        <p className="about-desc">
          Over 10 intense hours, teams of up to 4 tackle real-world problems across AI, cybersecurity, design, and more. The best rise to the top. Will you be one of them?
        </p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card reveal">
          <Users className="stat-icon text-gold" size={24} />
          <h3 className="stat-value glow-gold">1000+</h3>
          <p className="stat-label">PARTICIPANTS</p>
        </div>
        <div className="stat-card reveal">
          <Zap className="stat-icon text-gold" size={24} />
          <h3 className="stat-value glow-gold">4+</h3>
          <p className="stat-label">DOMAINS</p>
        </div>
        <div className="stat-card reveal">
          <Trophy className="stat-icon text-gold" size={24} />
          <h3 className="stat-value glow-gold">₹10K</h3>
          <p className="stat-label">PRIZE POOL</p>
        </div>
        <div className="stat-card reveal">
          <Building className="stat-icon text-gold" size={24} />
          <h3 className="stat-value glow-gold">50+</h3>
          <p className="stat-label">COLLEGES</p>
        </div>
      </div>
    </section>
  );
};

export default About;
