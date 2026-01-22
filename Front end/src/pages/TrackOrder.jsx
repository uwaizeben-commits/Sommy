import React, { useState } from 'react';
import '../styles/TrackOrder.css';

const TrackOrder = () => {
  const [trackingInput, setTrackingInput] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingInput.trim()) {
      // Simulate tracking data
      setTrackingResult({
        orderNumber: trackingInput,
        status: 'In Transit',
        orderDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        carrier: 'Standard Shipping',
        trackingNumber: 'TRK' + trackingInput.toUpperCase(),
        timeline: [
          { step: 'Order Confirmed', date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toLocaleDateString(), completed: true },
          { step: 'Processing', date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toLocaleDateString(), completed: true },
          { step: 'Shipped', date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString(), completed: true },
          { step: 'In Transit', date: new Date().toLocaleDateString(), completed: true },
          { step: 'Out for Delivery', date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toLocaleDateString(), completed: false },
          { step: 'Delivered', date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString(), completed: false }
        ]
      });
      setSearched(true);
    }
  };

  const handleClear = () => {
    setTrackingInput('');
    setTrackingResult(null);
    setSearched(false);
  };

  return (
    <div className="track-order-container">
      <div className="track-order-content">
        <h1>Track Your Order</h1>
        <p className="track-intro">Enter your order number or email to track your shipment</p>

        <form onSubmit={handleTrack} className="track-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter Order Number or Email"
              value={trackingInput}
              onChange={(e) => setTrackingInput(e.target.value)}
              className="track-input"
              required
            />
            <button type="submit" className="track-btn">Track Order</button>
          </div>
        </form>

        {searched && !trackingResult && (
          <div className="no-results">
            <p>No order found. Please verify your order number or email address.</p>
          </div>
        )}

        {trackingResult && (
          <div className="tracking-details">
            <div className="order-info">
              <div className="info-item">
                <label>Order Number:</label>
                <span>{trackingResult.orderNumber}</span>
              </div>
              <div className="info-item">
                <label>Status:</label>
                <span className="status-badge">{trackingResult.status}</span>
              </div>
              <div className="info-item">
                <label>Carrier:</label>
                <span>{trackingResult.carrier}</span>
              </div>
              <div className="info-item">
                <label>Tracking Number:</label>
                <span>{trackingResult.trackingNumber}</span>
              </div>
              <div className="info-item">
                <label>Order Date:</label>
                <span>{trackingResult.orderDate}</span>
              </div>
              <div className="info-item">
                <label>Estimated Delivery:</label>
                <span className="delivery-date">{trackingResult.estimatedDelivery}</span>
              </div>
            </div>

            <div className="timeline">
              <h3>Delivery Timeline</h3>
              <div className="timeline-steps">
                {trackingResult.timeline.map((step, index) => (
                  <div key={index} className={`timeline-step ${step.completed ? 'completed' : ''}`}>
                    <div className="step-marker"></div>
                    <div className="step-content">
                      <p className="step-title">{step.step}</p>
                      <p className="step-date">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={handleClear} className="clear-btn">Track Another Order</button>
          </div>
        )}

        <section className="tracking-tips">
          <h2>Tracking Tips</h2>
          <ul>
            <li>Check your email for order confirmation with your order number</li>
            <li>You'll receive email notifications at each shipment stage</li>
            <li>Tracking updates usually appear within 24 hours after order shipment</li>
            <li>Allow up to 48 hours for tracking information to update</li>
            <li>For international orders, customs clearance may add 1-2 business days</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TrackOrder;
