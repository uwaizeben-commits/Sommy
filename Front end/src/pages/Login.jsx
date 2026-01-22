import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { authAPI } from '../api/api';
import '../styles/Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.email) {
      setError('Email is required');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email');
      return false;
    }
    if (!formData.password) {
      setError('Password is required');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    try {
      setLoading(true);
      
      // Call backend API
      const response = await authAPI.login({
        email: formData.email,
        password: formData.password,
      });

      // Store token in localStorage
      localStorage.setItem('token', response.data.token);
      
      // Update context with user data
      login(response.data.user, response.data.token);
      
      setSuccess('Login successful! Redirecting...');
      
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (err) {
      // Display backend error message
      const errorMessage = err.response?.data?.error || 'Login failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="auth-left-content">
          <h2>SOMMY'S PLACE</h2>
          <p>Welcome back! Login to access your account and shop amazing products.</p>
          <ul className="benefits">
            <li>🛒 Easy shopping experience</li>
            <li>💳 Secure checkout</li>
            <li>📦 Track your orders</li>
            <li>⭐ Exclusive deals</li>
          </ul>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <h1>Sign In</h1>
          <p className="auth-subtitle">Sign in with your email address</p>
          
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="someone@example.com"
                disabled={loading}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Password"
                disabled={loading}
                className="form-input"
              />
              <Link to="/recover-password" className="forgot-password-link">
                Forgot password?
              </Link>
            </div>

            <button type="submit" disabled={loading} className="auth-btn-primary">
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register">Create one</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
