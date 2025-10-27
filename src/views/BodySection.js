import React, {useEffect} from 'react';
import './BodySection.css';
import carScooterImg from '../assets/images/vehicle.png';
import appMockup from '../assets/images/app.png';

const BodySection = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('.section-container');
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
        <section className='body-section'>
            <div className='floating-bg'>
                <div className='orb orb1'></div>
                <div className='orb orb2'></div>
                <div className='orb orb3'></div>
            </div>

            {/* Section 1 */}
            <div className='section-container fade-up'>
                <div className='text-block'>
                    <h2>Ride & Deliver with Ease</h2>
                    <p className='intro'>
                        Experience hassle-free transportation and delivery, allowing you to enjoy peace of mind without the stress of dealing with unreliable services.
                    </p>
                    <hr />
                    <ul className='features'>
                        <li>Book rides instantly — no delays, no drama</li>
                        <li>Send packages safely with real-time tracking</li>
                        <li>Pay your way — cash, card, or wallet</li>
                        <li>Stay secure with trusted drivers and OTP verification</li>
                    </ul>
                    <p className='outro'>
                        Say goodbye to uncertainties and embrace a seamless process that prioritizes your needs.
                    </p>
                </div>
                <div className='image-block'>
                    <img src={carScooterImg} alt='Mas Drive Ride & Deliver' className='vehicle-img hover-scale' />
                </div>
            </div>

            {/* Section 2 — How It Works */}
            <section id='how-section'>
                <div className='section-container reverse fade-up'>
                    <div className='image-block'>
                        <img src={appMockup} alt='Mas Drive App Mockup' className='app-img hover-scale' />
                    </div>
                    <div className='text-block'>
                        <h2>How It Works</h2>
                        <p className='intro'>
                            Our service ensures a smooth experience from the moment you book until your item is delivered.
                        </p>
                        <hr />
                        <ul className='features'>
                            <li>Sign up — Create your account in seconds</li>
                            <li>Choose a service — Ride or delivery, your call</li>
                            <li>Track in real-time — Know exactly where things are</li>
                            <li>Arrive or deliver — Safe, secure, and on time</li>
                        </ul>
                        <p className='outro'>
                            We pride ourselves on being fast, easy to use, and reliable, so you can trust us to handle your needs efficiently at every step.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default BodySection;
