import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/Home.css';
import polo1 from '../Images/polo1.jpg';
import polo2 from '../Images/polo2.jpg';
import polo3 from '../Images/polo3.jpg';
import polo4 from '../Images/polo4.jpg';
import hoodies1 from '../Images/hoodies1.jpg';
import hoodies2 from '../Images/hoodies2.jpg';
import hoodies3 from '../Images/hoodies3.jpg';
import hoodies4 from '../Images/hoodies4.jpg';
import bag2 from '../Images/bag2.jpg';
import shoe1 from '../Images/shoe1.jpg';
import shoe2 from '../Images/shoe2.jpg';
import shoe3 from '../Images/shoe3.jpg';
import shoe4 from '../Images/shoe4.jpg';
import image1 from '../Images/image1.jpeg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import Jewelries1 from '../Images/Jewelries1.jpg';

const Home = () => {
  const { addToCart } = useContext(AppContext);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: '/1.jpg', title: 'Welcome to SOMMY\'S PLACE' },
    { id: 2, image: '/2.jpg', title: 'Discover Amazing Products' },
    { id: 3, image: '/3.jpg', title: 'Best Prices Guaranteed' }
  ];

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=6');
      const data = await response.json();
      setFeaturedProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setFeaturedProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const getProductPrice = (index) => {
    const prices = [20000, 21500, 23000, 24500, 26000, 28000];
    return prices[index] || 25000;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home">
      {/* Carousel/Slider Section */}
      <section className="carousel-section">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="carousel-overlay">
                  <h1>{slide.title}</h1>
                  <Link to="/products" className="cta-button">
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="carousel-prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-next" onClick={nextSlide}>
            &#10095;
          </button>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : featuredProducts.length > 0 ? (
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="product-item">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
                <h3>{product.title.substring(0, 50)}...</h3>
                <p>₦{getProductPrice(index).toLocaleString()}</p>
                <div className="product-actions">
                  <Link to={`/product/${product.id}`} className="view-btn">
                    View Details
                  </Link>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => {
                      const cartProduct = {
                        id: product.id,
                        name: product.title.substring(0, 50),
                        price: getProductPrice(index),
                        image: product.image
                      };
                      addToCart(cartProduct);
                      alert('Added to cart!');
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No products available</p>
        )}
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-container">
          {/* Clothes Blocks */}
          <div className="category-block">
            <img src={polo2} alt="Polo 2" className="block-image" />
            <h3>T-Shirt</h3>
          </div>
          <div className="category-block">
            <img src={hoodies1} alt="Hoodies 1" className="block-image" />
            <h3>Hoodies</h3>
          </div>

          {/* Other Categories */}
          <div className="category-block">
            <img src={bag2} alt="Polo 3" className="block-image" />
            <h3>Bags</h3>
          </div>
          <div className="category-block">
            <img src={Jewelries1} alt="Jewelry 1" className="block-image" />
            <h3>Jewelries</h3>
          </div>
          <div className="category-block">
            <img src={shoe1} alt="Shoe 1" className="block-image" />
            <h3>Shoes</h3>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>About SOMMY'S PLACE</h2>
            <p>Welcome to SOMMY'S PLACE, your one-stop shop for premium clothing, accessories, and footwear. We're committed to providing high-quality products at competitive prices with exceptional customer service.</p>
            <div className="about-links">
              <Link to="/" className="about-link">
                <h3>About Us</h3>
                <p>Learn more about our story, mission, and values</p>
              </Link>
              <Link to="/" className="about-link">
                <h3>Careers</h3>
                <p>Join our growing team and be part of something great</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Free Shipping</h3>
          <p>On orders over ₦50,000</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💳</div>
          <h3>Secure Payment</h3>
          <p>Safe & encrypted transactions</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔄</div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💬</div>
          <h3>24/7 Support</h3>
          <p>Dedicated customer service</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
