import React, {useEffect} from 'react';
import './TrustedSection.css';
import deviceIcon from '../assets/images/device.png';
import matchIcon from '../assets/images/match.png';
import trackingIcon from '../assets/images/tracking.png';
import supportIcon from '../assets/images/support.png';

const TrustedSection = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('.trusted-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add('visible');
                }
            });
        }, {threshold: 0.2});
        sections.forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className='trusted-section fade-up'>
            <div className='floating-bg'>
                <div className='orb orb1'></div>
                <div className='orb orb2'></div>
                <div className='orb orb3'></div>
            </div>

            <div className='trusted-left'>
                <h5>Trusted by Users Nationwide</h5>
                <h2>Trusted by users across Nigeria for seamless, reliable service.</h2>
                <p>We prioritise data protection with industry-leading encryption and compliance standards — keeping you and your investments safe.</p>

                <div className='cta-buttons'>
                    <button type='button' className='btn btn-light btn-lg glow-pulse'>
                        <i className='fab fa-google-play'></i> Available on Google Play
                    </button>
                    <button type='button' className='btn btn-light btn-lg glow-pulse'>
                        <i className='fab fa-apple'></i> Download on Apple Store
                    </button>
                </div>
            </div>

            <div className='trusted-right'>
                <div className='feature hover-card'>
                    <img src={deviceIcon} alt='Cross-Platform Access' className='feature-icon' />
                    <div>
                        <h4>Cross-Platform Access</h4>
                        <p>Use Mas Drive on any device without hassle.</p>
                    </div>
                </div>

                <div className='feature hover-card'>
                    <img src={matchIcon} alt='Reliable Ride Matching' className='feature-icon' />
                    <div>
                        <h4>Reliable Ride Matching</h4>
                        <p>Connect drivers and riders quickly and efficiently.</p>
                    </div>
                </div>

                <div className='feature hover-card'>
                    <img src={trackingIcon} alt='Real-Time Tracking' className='feature-icon' />
                    <div>
                        <h4>Real-Time Tracking</h4>
                        <p>Track your ride live for safety and convenience.</p>
                    </div>
                </div>

                <div className='feature hover-card'>
                    <img src={supportIcon} alt='24/7 Support' className='feature-icon' />
                    <div>
                        <h4>24/7 Support</h4>
                        <p>Help is always available whenever you need it.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedSection;
