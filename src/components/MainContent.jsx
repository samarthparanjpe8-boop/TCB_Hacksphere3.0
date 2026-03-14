import React, { useEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
import Timeline from './Timeline';
import Domains from './Domains';
import Judges from './Judges';
import Footer from './Footer';

const MainContent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main-content">
      <Navbar />
      
      <header className="hero-section reveal">
        <p className="hero-subtitle">RAMDEOBABA UNIVERSITY PRESENTS</p>
        <h1 className="hero-title tubelight-flicker">HACKSPHERE</h1>
        <p className="hero-tagline text-pink">ENTER THE CODE. RULE THE SYSTEM.</p>
        <p className="hero-desc">Ramdeobaba University's Premier Technical Festival</p>
        
        <div className="hero-actions">
          <button className="btn-primary">REGISTER NOW</button>
          <button className="btn-secondary">EXPLORE EVENTS</button>
        </div>
      </header>

      <div className="sections-container">
        <div className="reveal"><About id="about" /></div>
        <div className="reveal"><Timeline id="timeline" /></div>
        <div className="reveal"><Domains id="domains" /></div>
        <div className="reveal"><Judges id="judges" /></div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MainContent;
