import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About SOMMY'S PLACE</h1>
          <p>Your premier destination for quality fashion and accessories</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-item">
            <h2>Our Mission</h2>
            <p>
              At SOMMY'S PLACE, our mission is to provide exceptional quality products at competitive prices while delivering outstanding customer service. We believe everyone deserves access to premium fashion and accessories that make them feel confident and stylish.
            </p>
          </div>

          <div className="about-item">
            <h2>Our Vision</h2>
            <p>
              We envision becoming the most trusted online retail destination in Nigeria, known for our curated selection of clothing, bags, jewelry, and footwear. We aim to inspire confidence and self-expression through fashion while maintaining the highest standards of quality and customer satisfaction.
            </p>
          </div>

          <div className="about-item">
            <h2>Our Values</h2>
            <ul className="values-list">
              <li><strong>Quality:</strong> We carefully select products that meet our high standards</li>
              <li><strong>Integrity:</strong> We operate with transparency and honesty</li>
              <li><strong>Customer Focus:</strong> Your satisfaction is our top priority</li>
              <li><strong>Innovation:</strong> We continuously improve our services</li>
              <li><strong>Community:</strong> We give back to the communities we serve</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="about-container">
          <h2>Our Story</h2>
          <p>
            SOMMY'S PLACE was founded with a simple vision: to make premium fashion and accessories accessible to everyone. What started as a passion for quality products has grown into a thriving online retail business serving thousands of satisfied customers across Nigeria.
          </p>
          <p>
            We pride ourselves on our attention to detail, from the products we select to the service we provide. Every item in our collection is carefully chosen to ensure it meets our standards for quality, style, and value.
          </p>
          <p>
            Today, SOMMY'S PLACE continues to grow, thanks to the trust and support of our amazing customers. We remain committed to our core values and to providing you with the best shopping experience possible.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="about-container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Curated Selection</h3>
              <p>Carefully selected products that meet our quality standards</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing without compromising on quality</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping across Nigeria</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Dedicated customer service team always ready to help</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
