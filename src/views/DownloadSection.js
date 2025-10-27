import React, {useEffect, useState} from 'react';
import './DownloadSection.css';
import logo from '../assets/images/logo.png';

const DownloadSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gradientShift = Math.min(scrollY * 0.1, 80);

  return (
    <section
      className='download-section'
      style={{
        backgroundPosition: `center ${gradientShift}px`,
      }}
    >
      <div className='download-glass'>
        <img src={logo} alt='Mas Drive Logo' className='mas-logo' />
        <h2 className='main-heading'>Ride/Deliver with MAS</h2>
        <p className='sub-text'>
          On demand cab and delivery services with MAS Drive — enjoy a seamless and secure experience.
        </p>
        <div className='cta-buttons'>
          <button type='button' className='btn btn-light btn-lg glow-pulse'>
            <i className='fab fa-google-play'></i> Available on Google Play
          </button>
          <button type='button' className='btn btn-light btn-lg glow-pulse'>
            <i className='fab fa-apple'></i> Download on Apple Store
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
