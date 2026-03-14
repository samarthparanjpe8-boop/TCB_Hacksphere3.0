import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-overlay"></div>

      <div className="footer-content reveal">
        <h2 className="footer-title">JOIN THE NETWORK</h2>
        <p className="footer-desc">Follow for live updates, announcements & behind the scenes.</p>

        <div className="social-buttons">
          <a href="https://www.instagram.com/thecodebreakers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-btn">
            <Instagram size={20} />
            <span>INSTAGRAM</span>
          </a>
          <a href="https://www.linkedin.com/company/thecodebreakers-rcoem/posts/?feedView=all" className="social-btn" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-column">
          <h3 className="footer-logo glow-gold">HACKSPHERE</h3>
          <p className="footer-text">Ramdeobaba University</p>
          <p className="footer-text">Technical Festival 2025</p>
        </div>

        <div className="footer-column">
          <h4 className="footer-col-title">NAVIGATION</h4>
          <div className="footer-links">
            <a href="#about">ABOUT</a>
            <a href="#timeline">TIMELINE</a>
            <a href="#judges">JUDGES</a>
            <a href="#team">TEAM</a>
          </div>
        </div>

        <div className="footer-column text-right">
          <h4 className="footer-col-title">CONTACT</h4>
          <p className="footer-text">The CodeBreakers</p>
          <div className="footer-sub-links">
            <a href="https://www.instagram.com/thecodebreakers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a>
            <a href="https://www.linkedin.com/company/thecodebreakers-rcoem/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
