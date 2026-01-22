import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';

const RecoverPassword = () => {
  const [step, setStep] = useState(1); // Step 1: Enter email, Step 2: Verify OTP, Step 3: Reset password
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const validateEmail = () => {
    if (!formData.email) {
      setError('Email is required');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email');
      return false;
    }
    return true;
  };

  const validateOTP = () => {
    if (!formData.otp) {
      setError('Verification code is required');
      return false;
    }
    if (formData.otp.length !== 6) {
      setError('Verification code must be 6 digits');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!formData.newPassword) {
      setError('New password is required');
      return false;
    }
    if (formData.newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail()) return;

    try {
      setLoading(true);
      // Simulate sending OTP
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSuccess('Verification code sent to your email!');
      setTimeout(() => {
        setSuccess('');
        setStep(2);
      }, 2000);
    } catch (err) {
      setError('Failed to send verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateOTP()) return;

    try {
      setLoading(true);
      // Simulate verifying OTP
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSuccess('Verification successful!');
      setTimeout(() => {
        setSuccess('');
        setStep(3);
      }, 1500);
    } catch (err) {
      setError('Invalid verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');

    if (!validatePassword()) return;

    try {
      setLoading(true);
      // Simulate resetting password
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSuccess('Password reset successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError('Failed to reset password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="auth-left-content">
          <h2>SOMMY'S PLACE</h2>
          <p>Recover your account and regain access to your profile.</p>
          <ul className="benefits">
            <li>🔒 Secure password recovery</li>
            <li>⚡ Quick process</li>
            <li>✅ Email verification</li>
            <li>🛡️ Protect your account</li>
          </ul>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <h1>Recover Password</h1>
          <p className="auth-subtitle">
            {step === 1 && 'Enter your email address'}
            {step === 2 && 'Enter the verification code'}
            {step === 3 && 'Create a new password'}
          </p>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          {/* Step 1: Email */}
          {step === 1 && (
            <form onSubmit={handleSendOTP} className="auth-form">
              <div className="form-group">
                <label>Email Address</label>
                <input
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
              <button type="submit" disabled={loading} className="auth-btn-primary">
                {loading ? 'Sending...' : 'Send Verification Code'}
              </button>
            </form>
          )}

          {/* Step 2: OTP */}
          {step === 2 && (
            <form onSubmit={handleVerifyOTP} className="auth-form">
              <div className="form-group">
                <label>Verification Code</label>
                <p className="form-helper">Check your email for a 6-digit code</p>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                  placeholder="000000"
                  maxLength="6"
                  disabled={loading}
                  className="form-input"
                />
              </div>
              <button type="submit" disabled={loading} className="auth-btn-primary">
                {loading ? 'Verifying...' : 'Verify Code'}
              </button>
            </form>
          )}

          {/* Step 3: New Password */}
          {step === 3 && (
            <form onSubmit={handleResetPassword} className="auth-form">
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                  placeholder="Create a strong password"
                  disabled={loading}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                  disabled={loading}
                  className="form-input"
                />
              </div>
              <button type="submit" disabled={loading} className="auth-btn-primary">
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          )}

          <div className="auth-footer">
            <p>Remember your password? <Link to="/login">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
