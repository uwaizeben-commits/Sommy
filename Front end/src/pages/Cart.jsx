import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity } = useContext(AppContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>Your Cart</h1>
        <div className="empty-message">
          <p>Your cart is empty</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.product._id || item.product.id} className="cart-item">
              <img src={item.product.image} alt={item.product.name} />
              <div className="item-details">
                <h3>{item.product.name}</h3>
                <p className="item-price">₦{item.product.price.toLocaleString()}</p>
              </div>
              <div className="item-quantity">
                <button
                  onClick={() => updateCartQuantity(item.product._id || item.product.id, item.quantity - 1)}
                  className="qty-btn"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateCartQuantity(item.product._id || item.product.id, item.quantity + 1)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
              <div className="item-total">
                ₦{(item.product.price * item.quantity).toLocaleString()}
              </div>
              <button
                onClick={() => removeFromCart(item.product._id || item.product.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₦{calculateTotal().toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>₦1,000</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>₦{(calculateTotal() + 1000).toLocaleString()}</span>
          </div>
          <button onClick={handleCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
