import React, {useState, useEffect, useRef} from 'react';
import './FAQSection.css';

const faqData = [
    {
        question: 'How do I become a Mas Drive driver?',
        answer: 'Sign up through the app, upload your documents, and once verified, you can start accepting ride requests.'
    },
    {
        question: 'Is Mas Drive available in my city?',
        answer: 'Mas Drive is rapidly expanding across Nigeria but currently in Niger State — check the app for current availability in your area.'
    },
    {
        question: 'How are fares calculated?',
        answer: 'Fares are calculated based on distance, estimated time, and real-time demand to ensure fairness for both riders and drivers.'
    },
    {
        question: 'Can I use the same account to ride and drive?',
        answer: 'Yes, you can switch between rider and driver modes within the app using the same account.'
    },
    {
        question: 'What safety measures are in place?',
        answer: 'All rides are GPS-tracked, drivers are verified, and OTP confirmation ensures secure pickups and deliveries.'
    }
];

const FAQSection = () => {
    const [activeIndexes, setActiveIndexes] = useState([]);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    const toggleFAQ = (index) => {
        setActiveIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, {threshold: 0.2});
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id='faq-section'
            ref={sectionRef}
            className={`faq-section ${visible ? 'visible' : ''}`}
        >
            <div className='orb orb1'></div>
            <div className='orb orb2'></div>

            <h2 className='faq-title'>Frequently Asked Questions</h2>

            <div className='faq-container'>
                {faqData.map((faq, index) => {
                    const isActive = activeIndexes.includes(index);
                    return (
                        <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
                            <div
                                className='faq-question'
                                onClick={() => toggleFAQ(index)}
                            >
                                <h4>{faq.question}</h4>
                                <span className={`arrow ${isActive ? 'rotate' : ''}`}>
                                    ▾
                                </span>
                            </div>

                            <div
                                className='faq-answer-wrapper'
                                style={{
                                    maxHeight: isActive ? '1000px' : '0px',
                                    opacity: isActive ? '1' : '0'
                                }}
                            >
                                <div className='faq-answer'>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQSection;
