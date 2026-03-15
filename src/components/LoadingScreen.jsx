import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onEnter }) => {
  const [phase, setPhase] = useState('slideshow'); // 'slideshow' | 'stars' | 'ready'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stars, setStars] = useState(0);

  const getSlides = () => {
    // Basic check for portrait or narrow devices
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMobile) {
      return [
        '/slide1-phone.webp',
        '/slide2-phone.webp',
        '/slide3-phone.webp'
      ];
    }
    return [
      '/slide1.webp',
      '/slide2.webp',
      '/slide3.webp'
    ];
  };

  const slides = getSlides();

  useEffect(() => {
    if (phase === 'slideshow') {
      const slideInterval = setInterval(() => {
        setCurrentSlide(prev => {
          if (prev >= slides.length - 1) {
            clearInterval(slideInterval);
            setPhase('stars');
            return prev;
          }
          return prev + 1;
        });
      }, 1250); // 1.5 seconds per slide phase
      return () => clearInterval(slideInterval);
    } else if (phase === 'stars') {
      const starInterval = setInterval(() => {
        setStars(prev => {
          if (prev >= 5) {
            clearInterval(starInterval);
            setTimeout(() => setPhase('ready'), 500);
            return 5;
          }
          return prev + 1;
        });
      }, 400); // 0.4s per star appearance
      return () => clearInterval(starInterval);
    }
  }, [phase, slides.length]);

  return (
    <div className="loading-container">

      {/* Slideshow Background */}
      <div className={`slideshow-bg ${phase !== 'slideshow' ? 'dimmed' : ''}`}>
        {slides.map((s, i) => (
          <div
            key={i}
            className={`slide ${currentSlide === i ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${s})` }}
          />
        ))}
      </div>

      <div className="loading-content">
        {(phase === 'stars' || phase === 'ready') && (
          <div className="stars-container inline-stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`star glow-gold ${i < stars ? 'visible' : 'hidden'}`}>★</span>
            ))}
          </div>
        )}

        {phase === 'ready' && (
          <div className="ready-content fade-in-up">
            <h1 className="title glow-gold">HACKSPHERE</h1>
            <p className="subtitle">ENTER THE CODE. RULE THE SYSTEM.</p>

            <button className="enter-btn" onClick={onEnter}>
              AH SH*T, HERE WE GO AGAIN.
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
