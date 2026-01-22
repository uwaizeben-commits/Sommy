import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart, user } = useContext(AppContext);
  const navigate = useNavigate();
  const [isGuest, setIsGuest] = useState(!user);
  const [loading, setLoading] = useState(false);

  // List of countries
  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia',
    'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
    'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei',
    'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic',
    'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus',
    'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador',
    'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon',
    'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
    'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
    'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait',
    'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania',
    'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
    'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
    'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand',
    'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan',
    'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
    'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
    'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia',
    'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
    'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
    'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste',
    'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda',
    'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
    'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
    street: user?.address?.street || '',
    city: user?.address?.city || '',
    state: user?.address?.state || '',
    zipCode: user?.address?.zipCode || '',
    country: user?.address?.country || 'Nigeria',
    paymentMethod: 'Credit Card',
  });

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    return subtotal + 1000; // 1000 for shipping
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isGuest && !user) {
      navigate('/login');
      return;
    }

    try {
      setLoading(true);
      
      // Simulate order placement
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Order placed successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page empty">
        <h1>Checkout</h1>
        <p>Your cart is empty. Please add items before checking out.</p>
      </div>
    );
  }

  return (
    <div className="checkout-wrapper">
      <div className="checkout-container">
        {/* Left Side - Checkout Form */}
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit} className="checkout-form">
            {/* Login/Guest Toggle - Only show if not logged in */}
            {!user && (
              <div className="login-guest-toggle">
                <div className="toggle-options">
                  <button
                    type="button"
                    className={`toggle-btn ${!isGuest ? 'active' : ''}`}
                    onClick={() => {
                      if (!user) {
                        navigate('/login');
                      } else {
                        setIsGuest(false);
                      }
                    }}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    className={`toggle-btn ${isGuest ? 'active' : ''}`}
                    onClick={() => setIsGuest(true)}
                  >
                    Continue as Guest
                  </button>
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="form-section">
              <h2>Contact Information</h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Shipping Address */}
            <div className="form-section">
              <h2>Shipping Address</h2>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <input
                type="text"
                name="street"
                placeholder="Street Address"
                value={formData.street}
                onChange={handleChange}
                required
                className="form-input"
              />
              <div className="form-row">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div className="form-section">
              <h2>Payment Method</h2>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>

            {/* Payment Details */}
            <div className="form-section">
                <h2>Payment Details</h2>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="form-input"
                  pattern="[0-9\s]{13,23}"
                />
                <div className="form-row">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="form-input"
                  />
                </div>
              </div>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        </div>

        {/* Right Side - Order Summary */}
        <div className="order-summary-section">
          <div className="order-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-items">
              {cart.map((item) => (
                <div key={item.product._id || item.product.id} className="summary-item">
                  <img src={item.product.image} alt={item.product.name} />
                  <div className="item-info">
                    <p className="item-name">{item.product.name}</p>
                    <p className="item-quantity">Qty: {item.quantity}</p>
                  </div>
                  <p className="item-price">₦{(item.product.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₦{(calculateTotal() - 1000).toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>₦1,000</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>₦0.00</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>₦{calculateTotal().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
