import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart!');
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.discount > 0 && (
          <div className="discount-badge">{product.discount}% OFF</div>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description.substring(0, 50)}...</p>
        <div className="product-footer">
          <div className="price-section">
            <span className="price">₦{product.price}</span>
            {product.discount > 0 && (
              <span className="original-price">
                ₦{(product.price / (1 - product.discount / 100)).toFixed(2)}
              </span>
            )}
          </div>
          <div className="rating">⭐ {product.rating || 0}</div>
        </div>
        <div className="product-actions">
          <Link to={`/product/${product._id}`} className="btn-view">
            View Details
          </Link>
          <button onClick={handleAddToCart} className="btn-add-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
