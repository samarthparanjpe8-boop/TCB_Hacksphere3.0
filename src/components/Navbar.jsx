import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo glow-gold">HACKSPHERE</div>
      
      <div className="nav-links">
        <a href="#about" className="nav-item">ABOUT</a>
        <a href="#timeline" className="nav-item">TIMELINE</a>
        <a href="#judges" className="nav-item">JUDGES</a>
        <a href="#domains" className="nav-item">DOMAINS</a>
      </div>
      
      <button className="nav-register-btn text-gold">REGISTER</button>
    </nav>
  );
};

export default Navbar;
