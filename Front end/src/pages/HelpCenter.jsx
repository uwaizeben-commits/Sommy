import React, { useState } from 'react';
import '../styles/HelpCenter.css';

const HelpCenter = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I create an account?',
      answer: 'To create an account, click on "Register" in the navbar and fill in your email, password, and personal information. Once submitted, your account will be created immediately.'
    },
    {
      id: 2,
      question: 'How can I reset my password?',
      answer: 'Click "Login" and then select "Forgot Password" option. Enter your email address and we\'ll send you a password reset link.'
    },
    {
      id: 3,
      question: 'What payment methods do you accept?',
      answer: 'We accept Credit Card, Debit Card, and PayPal as payment methods for your orders.'
    },
    {
      id: 4,
      question: 'How do I place an order?',
      answer: 'Browse products, add items to your cart, proceed to checkout, enter your shipping and payment information, and click "Place Order".'
    },
    {
      id: 5,
      question: 'Can I edit my order after placing it?',
      answer: 'Orders can only be modified within 1 hour of placement. Please contact our support team immediately if you need to make changes.'
    },
    {
      id: 6,
      question: 'How do I track my order?',
      answer: 'Visit the "Track Order" page and enter your order number or email address to get real-time tracking updates.'
    }
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="help-center-container">
      <div className="help-center-content">
        <h1>Help Center</h1>
        <p className="help-intro">Find answers to commonly asked questions about SOMMY'S PLACE</p>

        <div className="help-categories">
          <div className="category-card">
            <h2>📦 Orders & Shipping</h2>
            <p>Information about placing orders, tracking shipments, and delivery details</p>
          </div>
          <div className="category-card">
            <h2>💳 Payments & Billing</h2>
            <p>Learn about payment methods, billing information, and transaction security</p>
          </div>
          <div className="category-card">
            <h2>🔄 Returns & Refunds</h2>
            <p>Understand our return policy and how to process refunds</p>
          </div>
          <div className="category-card">
            <h2>👤 Account & Profile</h2>
            <p>Manage your account, update profile information, and password reset</p>
          </div>
        </div>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span>{faq.question}</span>
                  <span className={`faq-icon ${expandedFAQ === faq.id ? 'expanded' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedFAQ === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="contact-support">
          <h2>Still Need Help?</h2>
          <p>Our support team is here to assist you</p>
          <div className="support-options">
            <div className="support-option">
              <h3>📧 Email Support</h3>
              <p>support@sommysplace.com</p>
              <p className="response-time">Response time: Within 24 hours</p>
            </div>
            <div className="support-option">
              <h3>📞 Phone Support</h3>
              <p>(555) 123-4567</p>
              <p className="response-time">Available: Mon-Fri 9AM-6PM</p>
            </div>
            <div className="support-option">
              <h3>💬 Live Chat</h3>
              <p>Chat with our support team</p>
              <p className="response-time">Available: 9AM-5PM EST</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpCenter;
