import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with our team.</p>
      </div>

      <div className="contact-us-content">
        <div className="contact-methods">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>support@sommysplace.com</p>
            <p className="contact-detail">Response within 24 hours</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Phone</h3>
            <p>(555) 123-4567</p>
            <p className="contact-detail">Mon-Fri: 9AM-6PM EST</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Office Address</h3>
            <p>123 Fashion Street</p>
            <p>New York, NY 10001</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>Live Chat</h3>
            <p>Available 9AM-5PM EST</p>
            <p className="contact-detail">Chat with our team</p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          
          {submitted && (
            <div className="success-message">
              <p>✓ Thank you! We've received your message and will get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select a subject</option>
                <option value="order">Order Inquiry</option>
                <option value="shipping">Shipping & Delivery</option>
                <option value="return">Return & Refund</option>
                <option value="product">Product Question</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                required
                className="form-input form-textarea"
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <section className="business-hours">
        <h2>Business Hours</h2>
        <div className="hours-grid">
          <div className="hour-item">
            <h4>Monday - Friday</h4>
            <p>9:00 AM - 6:00 PM EST</p>
          </div>
          <div className="hour-item">
            <h4>Saturday</h4>
            <p>10:00 AM - 4:00 PM EST</p>
          </div>
          <div className="hour-item">
            <h4>Sunday</h4>
            <p>Closed</p>
          </div>
          <div className="hour-item">
            <h4>Email Support</h4>
            <p>24/7 Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
