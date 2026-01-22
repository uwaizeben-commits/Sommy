import React from 'react';
import '../styles/DeliveryReturns.css';

const DeliveryReturns = () => {
  return (
    <div className="delivery-returns-container">
      <div className="delivery-returns-content">
        <h1>Delivery & Returns</h1>

        <section className="shipping-section">
          <h2>Shipping Information</h2>
          
          <div className="shipping-options">
            <div className="shipping-option">
              <h3>Standard Shipping</h3>
              <p className="delivery-time">3-5 Business Days</p>
              <p className="cost">Free on orders over ₦50,000</p>
              <ul>
                <li>Nationwide delivery</li>
                <li>Real-time tracking</li>
                <li>Insurance included</li>
              </ul>
            </div>

            <div className="shipping-option">
              <h3>Express Shipping</h3>
              <p className="delivery-time">1-2 Business Days</p>
              <p className="cost">₦3,500</p>
              <ul>
                <li>Priority handling</li>
                <li>Same-day dispatch</li>
                <li>Real-time tracking</li>
              </ul>
            </div>

            <div className="shipping-option">
              <h3>Overnight Shipping</h3>
              <p className="delivery-time">Next Business Day</p>
              <p className="cost">₦7,500</p>
              <ul>
                <li>Next-day guarantee</li>
                <li>White-glove service</li>
                <li>Dedicated tracking</li>
              </ul>
            </div>
          </div>

          <div className="shipping-details">
            <h3>Shipping Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <h4>Processing Time</h4>
                <p>Orders are processed within 24 hours. Processing doesn't include weekends or public holidays.</p>
              </div>
              <div className="detail-item">
                <h4>Delivery Address</h4>
                <p>We deliver to all addresses within Nigeria. International shipping available for select countries.</p>
              </div>
              <div className="detail-item">
                <h4>Package Tracking</h4>
                <p>All shipments include real-time tracking. You'll receive tracking updates via email.</p>
              </div>
              <div className="detail-item">
                <h4>Customs & Duties</h4>
                <p>For international orders, customer is responsible for any applicable customs duties and taxes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="returns-section">
          <h2>Return Policy</h2>
          
          <div className="return-period">
            <h3>30-Day Money-Back Guarantee</h3>
            <p>We offer a hassle-free 30-day return policy. If you're not completely satisfied with your purchase, you can return it for a full refund.</p>
          </div>

          <div className="return-conditions">
            <h3>Return Conditions</h3>
            <ul>
              <li>Items must be unused and in original condition</li>
              <li>All original packaging and tags must be intact</li>
              <li>Return must be initiated within 30 days of delivery</li>
              <li>Proof of purchase (order confirmation) required</li>
              <li>Items must not show signs of wear or damage</li>
            </ul>
          </div>

          <div className="return-process">
            <h3>How to Return</h3>
            <ol>
              <li>Log in to your account and navigate to "My Orders"</li>
              <li>Select the item you wish to return</li>
              <li>Click "Initiate Return" and provide a reason</li>
              <li>Print the prepaid return label</li>
              <li>Pack the item securely and attach the label</li>
              <li>Drop off at your nearest courier location</li>
              <li>Refund will be processed within 5-7 business days of receipt</li>
            </ol>
          </div>

          <div className="non-returnable">
            <h3>Non-Returnable Items</h3>
            <ul>
              <li>Clearance or final sale items</li>
              <li>Customized or personalized items</li>
              <li>Items without original tags or packaging</li>
              <li>Items damaged due to customer misuse</li>
              <li>Undergarments and swimwear (hygiene reasons)</li>
              <li>Perishable items</li>
            </ul>
          </div>

          <div className="refund-info">
            <h3>Refund Information</h3>
            <div className="refund-details">
              <p><strong>Refund Timeline:</strong> 5-7 business days after we receive and inspect your return</p>
              <p><strong>Refund Method:</strong> Original payment method used for purchase</p>
              <p><strong>Return Shipping:</strong> Free return label provided in your return confirmation email</p>
              <p><strong>Restocking Fee:</strong> No restocking fee charged on returns</p>
            </div>
          </div>
        </section>

        <section className="exchange-section">
          <h2>Exchanges</h2>
          <p>If you received a defective or damaged item, or if the size doesn't fit, we'll exchange it free of charge within 14 days.</p>
          <p>Simply contact our support team with photos of the issue, and we'll arrange the exchange immediately.</p>
        </section>
      </div>
    </div>
  );
};

export default DeliveryReturns;
