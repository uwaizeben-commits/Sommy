import { useState, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider, AppContext } from './context/AppContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import RecoverPassword from './pages/RecoverPassword'
import Account from './pages/Account'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import HelpCenter from './pages/HelpCenter'
import TrackOrder from './pages/TrackOrder'
import DeliveryReturns from './pages/DeliveryReturns'
import ContactUs from './pages/ContactUs'
import ShippingInfo from './pages/ShippingInfo'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import './App.css'

function AppContent() {
  const { isDarkMode } = useContext(AppContext);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty('--bg-color', '#1a1a1a');
      root.style.setProperty('--text-color', '#f0f0f0');
      root.style.setProperty('--bg-secondary', '#2a2a2a');
      root.style.setProperty('--border-color', '#444');
      root.style.setProperty('--input-bg', '#333');
      root.style.setProperty('--input-text', '#f0f0f0');
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#f0f0f0';
    } else {
      root.style.setProperty('--bg-color', '#ffffff');
      root.style.setProperty('--text-color', '#333333');
      root.style.setProperty('--bg-secondary', '#f9f9f9');
      root.style.setProperty('--border-color', '#e0e0e0');
      root.style.setProperty('--input-bg', '#ffffff');
      root.style.setProperty('--input-text', '#333333');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#333333';
    }
  }, [isDarkMode]);

  return (
    <Router future={{ v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/account" element={<Account />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/delivery-returns" element={<DeliveryReturns />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/shipping-info" element={<ShippingInfo />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App
