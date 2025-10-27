import React from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './TopFold.css';
import topFoldImage from '../assets/images/phone.png';
import logoMark from '../assets/images/logomark.png';

const TopFold = () => {
    const {scrollY} = useScroll();
    const yPhone = useTransform(scrollY, [0, 500], [0, -80]);
    const yCircle = useTransform(scrollY, [0, 500], [0, -40]);
    const yDots = useTransform(scrollY, [0, 500], [0, -60]);

    return (
        <section id='topfold'>
            <div className='topfold'>
                {/* Left Section */}
                <motion.div 
                    className='topfold-left'
                    initial={{opacity: 0, x: -80}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.8, ease: 'easeOut'}}
                >
                    <h1>Ride & Deliver Seamlessly with <span>Mas Drive.</span></h1>
                    <p>Get fast and reliable on-demand taxi and delivery services across Nigeria!</p>

                    {/* CTA Buttons */}
                    <div className='cta-buttons'>
                        <button type='button' className='btn btn-light btn-lg'>
                            <i className='fab fa-google-play me-2'></i>
                            Available on Google Play
                        </button>
                        <button type='button' className='btn btn-light btn-lg'>
                            <i className='fab fa-apple me-2'></i>
                            Download on Apple Store
                        </button>
                    </div>
                </motion.div>

                {/* Right Section */}
                <div className='topfold-right'>
                    <motion.div className='floating-circle' style={{y: yCircle}} />
                    <motion.div className='floating-dots' style={{y: yDots}} />
                    <motion.img 
                        src={topFoldImage} 
                        alt='Mas Drive App Preview' 
                        className='hero-image'
                        style={{y: yPhone}}
                        whileHover={{scale: 1.05, rotate: 0}}
                        transition={{type: 'spring', stiffness: 150}}
                    />
                    {logoMark && (
                        <motion.img 
                            src={logoMark} 
                            alt='Mas Drive Logo Element' 
                            className='floating-logo'
                            animate={{y: [0, -10, 0]}}
                            transition={{repeat: Infinity, duration: 4, ease: 'easeInOut'}}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default TopFold;
