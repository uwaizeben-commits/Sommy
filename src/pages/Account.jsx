import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { ordersAPI } from '../api/api';
import '../styles/Account.css';

const Account = () => {
  const { user } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const fetchUserOrders = async () => {
    try {
      const response = await ordersAPI.getAll();
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="account-page">
        <h1>My Account</h1>
        <p>Please log in to view your account.</p>
      </div>
    );
  }

  return (
    <div className="account-page">
      <h1>My Account</h1>

      <div className="account-container">
        {/* User Information */}
        <section className="account-section">
          <h2>User Information</h2>
          <div className="user-info">
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone || 'Not provided'}</p>
          </div>
          <button className="edit-profile-btn">Edit Profile</button>
        </section>

        {/* Orders Section */}
        <section className="account-section">
          <h2>My Orders</h2>
          {loading ? (
            <p>Loading orders...</p>
          ) : orders.length > 0 ? (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order._id} className="order-item">
                  <div className="order-header">
                    <span className="order-id">Order #{order._id.substring(0, 8)}</span>
                    <span className={`order-status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  <p className="order-date">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                  <div className="order-products">
                    {order.products.map((item, idx) => (
                      <p key={idx}>
                        {item.product.name} x {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    ))}
                  </div>
                  <p className="order-total">Total: ${order.totalPrice.toFixed(2)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>You haven't placed any orders yet.</p>
          )}
        </section>

        {/* Address Information */}
        <section className="account-section">
          <h2>Shipping Address</h2>
          {user.address ? (
            <div className="address-info">
              <p>{user.address.street}</p>
              <p>{user.address.city}, {user.address.state} {user.address.zipCode}</p>
              <p>{user.address.country}</p>
            </div>
          ) : (
            <p>No address on file</p>
          )}
          <button className="edit-address-btn">Edit Address</button>
        </section>
      </div>
    </div>
  );
};

export default Account;
