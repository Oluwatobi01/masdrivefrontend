import React, {useState} from 'react';
import './FeedbackSection.css';
import logo from '../assets/images/logo.png'; // adjust path if needed

const FeedbackSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({name:'', email:'', message:''});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback Submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({name:'', email:'', message:''});
    setIsModalOpen(false);
  };

  return (
    <section className="feedback-section">
      <div className="feedback-glass">
        {/* Map Left */}
        <div className="map-container">
          <iframe
            title="MasDrive Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.45860642598!2d3.3792053152970735!3d6.524379295278509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2f0d84e4d5%3A0x6956f8d1e4d96a28!2sLagos!5e0!3m2!1sen!2sng!4v1695678900000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="contact-info-glass">
            <span><strong>Address:</strong> Lagos, Nigeria</span>
            <span><strong>Email:</strong> <a href="mailto:support@masdrive.com.ng">support@masdrive.com.ng</a></span>
            <span><strong>Phone:</strong> <a href="tel:+2348181829168">+234 (818) 182-9168</a></span>
          </div>
        </div>

        {/* Feedback Right */}
        <div className="feedback-content">
          <h2>Feedback</h2>
          <p>We would love to hear your thoughts, suggestions, or issues. Our team is available 24/7 to assist you.</p>
          <button className="feedback-btn" onClick={() => setIsModalOpen(true)}>I have feedback</button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-glass" onClick={(e) => e.stopPropagation()}>
            <h3>Share Your Feedback</h3>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />

              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />

              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Footer (glass style, black text, matches Mas Drive design system) */}
      <footer className="footer-glass">
        <div className="footer-inner">
          <div className="footer-column footer-brand">
            <img src={logo} alt="Mas Drive Logo" className="footer-main-logo" />
            <div className="footer-brand-text">
              <h3>Mas Drive</h3>
              <p>MAS DRIVE</p>
            </div>
          </div>

          <div className="footer-column">
            <h4>SUPPORT</h4>
            <p><a href="tel:+2348181829168">+234 (818) 182-9168</a></p>
            <p><a href="mailto:support@masdrive.com.ng">support@masdrive.com.ng</a></p>
          </div>

          <div className="footer-column">
            <h4>CONNECT WITH US</h4>
            <p><a href="#">Whatsapp</a></p>
            <p><a href="#">Twitter (X)</a></p>
            <p><a href="#">Facebook</a></p>
            <p><a href="#">Instagram</a></p>
          </div>

          <div className="footer-column">
            <h4>DOWNLOAD</h4>
            <p><a href="#">iOS</a></p>
            <p><a href="#">Android</a></p>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <img src={logo} alt="Mas Drive Small Logo" className="footer-small-logo" />
            <h3>Mas Drive</h3>
          </div>
          <p>© 2025 Mas Drive™. All Rights Reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default FeedbackSection;
