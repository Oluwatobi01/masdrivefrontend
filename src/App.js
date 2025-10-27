// src/App.js
import React from 'react';
import './App.css';
import TopFold from './views/TopFold';
import Navbar from './views/NavBar';
import BodySection from './views/BodySection';
import TrustedSection from './views/TrustedSection';
import TestimonialCarousel from './views/TestimonialCarousel';
import FAQSection from './views/FAQSection';
import DownloadSection from './views/DownloadSection';
import FeedbackSection from './views/FeedbackSection';

function App() {
    return (
        <div className="App">
           <Navbar />
           <TopFold />
           <BodySection />
           <TrustedSection />
           <TestimonialCarousel />
           <FAQSection />
           <DownloadSection />
           <FeedbackSection />
        </div>
    );
}

export default App;
