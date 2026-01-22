import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { ordersAPI } from '../api/api';
import '../styles/Account.css';

const Account = () => {
  const { user, setUser } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAddress, setEditingAddress] = useState(false);
  const [addressForm, setAddressForm] = useState({
    street: user?.address?.street || '',
    city: user?.address?.city || '',
    state: user?.address?.state || '',
    zipCode: user?.address?.zipCode || '',
    country: user?.address?.country || '',
  });

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

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressForm({
      ...addressForm,
      [name]: value,
    });
  };

  const handleSaveAddress = () => {
    const updatedUser = {
      ...user,
      address: addressForm,
    };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setEditingAddress(false);
  };

  if (!user) {
    return (
      <div className="account-page">
        <h1>My Account</h1>
        <p>Please log in to view your account</p>
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
                        {item.product.name} x {item.quantity} - ₦{(item.price * item.quantity).toFixed(2)}
                      </p>
                    ))}
                  </div>
                  <p className="order-total">Total: ₦{order.totalPrice.toFixed(2)}</p>
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
          {editingAddress ? (
            <form className="address-form">
              <div className="form-group">
                <label>Street Address</label>
                <input
                  type="text"
                  name="street"
                  value={addressForm.street}
                  onChange={handleAddressChange}
                  placeholder="Street address"
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={addressForm.city}
                  onChange={handleAddressChange}
                  placeholder="City"
                />
              </div>
              <div className="form-group">
                <label>State/Province</label>
                <input
                  type="text"
                  name="state"
                  value={addressForm.state}
                  onChange={handleAddressChange}
                  placeholder="State/Province"
                />
              </div>
              <div className="form-group">
                <label>Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={addressForm.zipCode}
                  onChange={handleAddressChange}
                  placeholder="Zip Code"
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={addressForm.country}
                  onChange={handleAddressChange}
                  placeholder="Country"
                />
              </div>
              <div className="form-actions">
                <button type="button" className="save-btn" onClick={handleSaveAddress}>
                  Save Address
                </button>
                <button type="button" className="cancel-btn" onClick={() => setEditingAddress(false)}>
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              {user.address && (user.address.street || user.address.city) ? (
                <div className="address-info">
                  <p>{user.address.street}</p>
                  <p>{user.address.city}, {user.address.state} {user.address.zipCode}</p>
                  <p>{user.address.country}</p>
                </div>
              ) : (
                <p>No address on file</p>
              )}
              <button className="edit-address-btn" onClick={() => setEditingAddress(true)}>
                {user.address && (user.address.street || user.address.city) ? 'Edit Address' : 'Add Address'}
              </button>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Account;
