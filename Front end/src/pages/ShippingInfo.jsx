import React from 'react';
import '../styles/ShippingInfo.css';

const ShippingInfo = () => {
  return (
    <div className="shipping-info-container">
      <div className="shipping-info-content">
        <h1>Shipping Information</h1>
        <p className="intro-text">Learn about our shipping methods, rates, and delivery timelines.</p>

        <section className="shipping-methods">
          <h2>Shipping Methods</h2>

          <div className="methods-grid">
            <div className="method-card">
              <div className="method-icon">🚚</div>
              <h3>Standard Shipping</h3>
              <div className="method-details">
                <p><strong>Delivery Time:</strong> 3-5 Business Days</p>
                <p><strong>Cost:</strong> Free on orders over ₦50,000</p>
                <p><strong>Coverage:</strong> Nationwide</p>
                <ul>
                  <li>Reliable and affordable</li>
                  <li>Real-time tracking included</li>
                  <li>Signature required upon delivery</li>
                  <li>Package insurance included</li>
                </ul>
              </div>
            </div>

            <div className="method-card">
              <div className="method-icon">⚡</div>
              <h3>Express Shipping</h3>
              <div className="method-details">
                <p><strong>Delivery Time:</strong> 1-2 Business Days</p>
                <p><strong>Cost:</strong> ₦3,500</p>
                <p><strong>Coverage:</strong> Major cities</p>
                <ul>
                  <li>Priority handling</li>
                  <li>Same-day dispatch</li>
                  <li>Guaranteed 2-day delivery</li>
                  <li>Advanced tracking</li>
                </ul>
              </div>
            </div>

            <div className="method-card">
              <div className="method-icon">🏃</div>
              <h3>Overnight Shipping</h3>
              <div className="method-details">
                <p><strong>Delivery Time:</strong> Next Business Day</p>
                <p><strong>Cost:</strong> ₦7,500</p>
                <p><strong>Coverage:</strong> Selected areas</p>
                <ul>
                  <li>Next-day guarantee</li>
                  <li>White-glove delivery</li>
                  <li>Direct contact support</li>
                  <li>Premium packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="shipping-process">
          <h2>How Shipping Works</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Order Confirmed</h3>
              <p>Your order is confirmed and you receive a confirmation email with order details.</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Processing</h3>
              <p>Our team processes your order within 24 hours and prepares it for shipment.</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Dispatched</h3>
              <p>Your package is handed over to our shipping partner with tracking details.</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>In Transit</h3>
              <p>Your package is on its way! You can track it in real-time using your tracking number.</p>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <h3>Out for Delivery</h3>
              <p>Your package is out with the delivery driver and will arrive soon.</p>
            </div>

            <div className="step">
              <div className="step-number">6</div>
              <h3>Delivered</h3>
              <p>Your package has been delivered! Check our Track Order page for more details.</p>
            </div>
          </div>
        </section>

        <section className="shipping-coverage">
          <h2>Shipping Coverage</h2>
          <div className="coverage-info">
            <div className="coverage-item">
              <h3>Within Nigeria</h3>
              <p>We ship to all states within Nigeria. Standard shipping is available nationwide with Express shipping to major cities.</p>
            </div>
            <div className="coverage-item">
              <h3>International Shipping</h3>
              <p>We ship to select countries. International orders typically take 7-14 business days. Customers are responsible for customs duties.</p>
            </div>
            <div className="coverage-item">
              <h3>Remote Areas</h3>
              <p>Orders to remote areas may take additional 2-3 business days. We use reliable partner networks to ensure delivery.</p>
            </div>
          </div>
        </section>

        <section className="shipping-costs">
          <h2>Shipping Costs</h2>
          <div className="costs-table">
            <table>
              <thead>
                <tr>
                  <th>Order Amount</th>
                  <th>Standard Shipping</th>
                  <th>Express Shipping</th>
                  <th>Overnight Shipping</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>₦0 - ₦25,000</td>
                  <td>₦2,000</td>
                  <td>₦3,500</td>
                  <td>₦7,500</td>
                </tr>
                <tr>
                  <td>₦25,001 - ₦50,000</td>
                  <td>₦1,500</td>
                  <td>₦3,500</td>
                  <td>₦7,500</td>
                </tr>
                <tr>
                  <td>Above ₦50,000</td>
                  <td className="free">Free</td>
                  <td>₦3,500</td>
                  <td>₦7,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="shipping-faqs">
          <h2>Shipping FAQs</h2>
          <div className="faqs">
            <div className="faq-item">
              <h4>When will my order be shipped?</h4>
              <p>Orders are processed within 24 hours (excluding weekends and public holidays). You'll receive a shipping confirmation with tracking details once your order is dispatched.</p>
            </div>
            <div className="faq-item">
              <h4>How do I track my order?</h4>
              <p>Visit our Track Order page and enter your order number or email address. You can also click the tracking link in your shipping confirmation email.</p>
            </div>
            <div className="faq-item">
              <h4>Can I change my shipping address after ordering?</h4>
              <p>You can change your shipping address within 1 hour of placing your order. Contact our support team immediately if you need to make changes.</p>
            </div>
            <div className="faq-item">
              <h4>What if my package is delayed?</h4>
              <p>We guarantee on-time delivery with our Express and Overnight options. If there's a delay, contact our support team for assistance or compensation.</p>
            </div>
            <div className="faq-item">
              <h4>Is there insurance on my shipment?</h4>
              <p>Yes, all shipments include insurance coverage. In case of loss or damage, we'll work with you to resolve the issue.</p>
            </div>
            <div className="faq-item">
              <h4>Do you ship on weekends?</h4>
              <p>Standard processing excludes weekends. However, orders placed during the week are dispatched promptly. Tracking begins when your package is picked up.</p>
            </div>
          </div>
        </section>

        <section className="contact-shipping-support">
          <h2>Need Shipping Help?</h2>
          <p>Contact our shipping support team for any questions or concerns:</p>
          <div className="support-contacts">
            <div className="contact">
              <strong>Email:</strong> shipping@sommysplace.com
            </div>
            <div className="contact">
              <strong>Phone:</strong> (555) 123-4567
            </div>
            <div className="contact">
              <strong>Hours:</strong> Mon-Fri 9AM-6PM EST
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingInfo;
