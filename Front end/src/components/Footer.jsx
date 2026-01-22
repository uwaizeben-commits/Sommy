import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
  ];

  const paymentMethods = [
    { name: 'VISA', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'PayPal', icon: '💳' },
    { name: 'Apple Pay', icon: '🍎' },
  ];

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="footer-section">
            <h4>Help & Information</h4>
            <ul>
              <li><a href="/help-center">Help Center</a></li>
              <li><a href="/track-order">Track Order</a></li>
              <li><a href="/delivery-returns">Delivery & Returns</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/shipping-info">Shipping Info</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>About SOMMY'S PLACE</h4>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="/products">All Products</a></li>
              <li><a href="/products">Clothes</a></li>
              <li><a href="/products">Bags</a></li>
              <li><a href="/products">Jewelries</a></li>
              <li><a href="/products">Shoes</a></li>
            </ul>
          </div>


        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom-section">
          <div className="footer-bottom-content">
            {/* Social Media */}
            <div className="footer-social">
              <p className="footer-social-label">Follow Us</p>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="footer-payments">
              <p className="footer-payments-label">Payment Methods</p>
              <div className="payment-methods">
                <span>💳 VISA</span>
                <span>💳 Mastercard</span>
                <span>💳 PayPal</span>
                <span>🍎 Apple Pay</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="footer-legal">
              <a href="/">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="/">Terms & Conditions</a>
              <span className="separator">•</span>
              <a href="/">Accessibility</a>
              <span className="separator">•</span>
              <a href="/">Cookie Settings</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            <p>&copy; 2026 SOMMY'S PLACE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
