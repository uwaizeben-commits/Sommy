import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: '/1.jpeg', title: 'Welcome to SOMMY\'S PLACE' },
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
      const response = await fetch('https://raw.githubusercontent.com/madiha2323/Api/main/data.json');
      const data = await response.json();
      // Get first 6 products from the API data
      const products = data.slice(0, 6);
      setFeaturedProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
          <p>Loading...</p>
        ) : (
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <Link key={index} to={`/product/${index}`} className="product-item">
                <img 
                  src={product.image || product.img || 'https://via.placeholder.com/250x200'} 
                  alt={product.name || product.title || 'Product'} 
                />
                <h3>{product.name || product.title}</h3>
                <p>${product.price}</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
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
