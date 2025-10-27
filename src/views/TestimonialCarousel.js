import React, {useState, useEffect, useRef} from 'react';
import './TestimonialCarousel.css';
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import user3 from '../assets/images/user3.png';
import user4 from '../assets/images/user4.png';
import user5 from '../assets/images/user5.png';

const testimonials = [
    {
        text: 'Seamless experience from start to finish. Booking was instant, tracking was accurate, and the delivery arrived right on time. Highly recommend!',
        name: 'Paul Isaac',
        rating: 4.8,
        trips: 50,
        img: user1
    },
    {
        text: 'I love how smooth the ride-booking process is. The app interface is super intuitive and the drivers are always professional.',
        name: 'Sarah Johnson',
        rating: 5.0,
        trips: 72,
        img: user2
    },
    {
        text: 'Fast, reliable, and affordable. Mas Drive made my deliveries stress-free. I could track every step in real-time.',
        name: 'David Chika',
        rating: 4.9,
        trips: 65,
        img: user3
    },
    {
        text: 'Their customer support team is top-notch. I had an issue once and it was resolved in minutes. Excellent service overall!',
        name: 'Amina Bello',
        rating: 4.7,
        trips: 58,
        img: user4
    },
    {
        text: 'This app is a game-changer! Reliable drivers, secure payment, and always on time. Definitely my go-to for rides and deliveries.',
        name: 'John Ade',
        rating: 5.0,
        trips: 81,
        img: user5
    }
];

const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, {threshold: 0.3});
        if(sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const goPrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    // Optional: Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
            if(e.key === 'ArrowRight') goNext();
            if(e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    const {text, name, rating, trips, img} = testimonials[current];

    return (
        <section ref={sectionRef} className={`testimonial-section ${visible ? 'visible' : ''}`}>
            <div className='orb orb1'></div>
            <div className='orb orb2'></div>

            <div className='testimonial-card'>
                <span className='quote-icon'>“</span>
                <p className='testimonial-text'>{text}</p>

                <div className='testimonial-user'>
                    <img src={img} alt={name} className='user-img' />
                    <div className='user-info'>
                        <h4>{name}</h4>
                        <p className='rating'>
                            {rating} ★ <span>({trips} Trips)</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button className='nav-arrow left' onClick={goPrev}>←</button>
            <button className='nav-arrow right' onClick={goNext}>→</button>

            <div className='carousel-dots'>
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default TestimonialCarousel;
