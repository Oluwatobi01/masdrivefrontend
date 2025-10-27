import React, {useState, useEffect} from 'react';
import './NavBar.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('topfold');
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        let targetElement = null;
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        // 🎯 Special case for Contact button — target the contact-info-glass div
        if(id === 'contact-section') {
            targetElement = document.querySelector('.contact-info-glass');
        } else {
            targetElement = document.getElementById(id);
        }

        if(targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 10;
            window.scrollTo({top: targetPosition, behavior: 'smooth'});
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);

        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if(window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            const sections = ['topfold', 'how-section', 'faq-section', 'contact-section'];
            let current = 'topfold';
            const scrollPos = window.scrollY + navbar.offsetHeight + 80;

            sections.forEach((id) => {
                const el = id === 'contact-section'
                    ? document.querySelector('.contact-info-glass')
                    : document.getElementById(id);

                if(el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
                    current = id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
            <div
                className={`nav-logo ${isVisible ? 'logo-visible' : ''}`}
                onClick={() => scrollToSection('topfold')}
            >
                <img src={logo} alt='Mas Drive Logo' />
                <h2>Mas Drive</h2>
            </div>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <button
                    className={activeSection === 'topfold' ? 'active' : ''}
                    onClick={() => scrollToSection('topfold')}
                >
                    Home
                </button>

                <button
                    className={activeSection === 'how-section' ? 'active' : ''}
                    onClick={() => scrollToSection('how-section')}
                >
                    How it works
                </button>

                <button
                    className={activeSection === 'faq-section' ? 'active' : ''}
                    onClick={() => scrollToSection('faq-section')}
                >
                    FAQ's
                </button>

                <button
                    className={activeSection === 'contact-section' ? 'active' : ''}
                    onClick={() => scrollToSection('contact-section')}
                >
                    Contact
                </button>
            </div>

            <div className='nav-actions'>
                <a href='#download' className='nav-btn'>Download</a>

                <div className='hamburger' onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
