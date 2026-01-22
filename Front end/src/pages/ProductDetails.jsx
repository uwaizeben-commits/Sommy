import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsAPI } from '../api/api';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await productsAPI.getById(id);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
      navigate('/products');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    // Implementation will be connected to context
    alert(`Added ${quantity} item(s) to cart`);
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    try {
      await productsAPI.addReview(id, { rating, comment });
      setComment('');
      setRating(5);
      fetchProduct(); // Refresh product data
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div className="product-details">
      <button onClick={() => navigate('/products')} className="back-btn">
        ← Back to Products
      </button>

      <div className="product-container">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} />
          {product.discount > 0 && (
            <div className="discount-badge">{product.discount}% OFF</div>
          )}
        </div>

        <div className="product-info-section">
          <h1>{product.name}</h1>
          <p className="category">Category: {product.category}</p>
          <p className="description">{product.description}</p>

          <div className="pricing">
            <span className="price">₦{product.price}</span>
            {product.discount > 0 && (
              <span className="original-price">
                ₦{(product.price / (1 - product.discount / 100)).toFixed(2)}
              </span>
            )}
          </div>

          <div className="stock-status">
            {product.stock > 0 ? (
              <p className="in-stock">✓ In Stock ({product.stock} available)</p>
            ) : (
              <p className="out-of-stock">Out of Stock</p>
            )}
          </div>

          <div className="purchase-section">
            <div className="quantity-selector">
              <label>Quantity:</label>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
              />
            </div>
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>

          <div className="rating-section">
            <p>Average Rating: ⭐ {product.rating || 0}/5</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Customer Reviews</h2>

        {/* Add Review Form */}
        <form onSubmit={handleAddReview} className="review-form">
          <h3>Add Your Review</h3>
          <div className="form-group">
            <label>Rating:</label>
            <select
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
            >
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <div className="form-group">
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
              required
            />
          </div>
          <button type="submit" className="submit-review-btn">
            Submit Review
          </button>
        </form>

        {/* Existing Reviews */}
        <div className="reviews-list">
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <div key={index} className="review-item">
                <p className="review-rating">Rating: {'⭐'.repeat(review.rating)}</p>
                <p className="review-comment">{review.comment}</p>
                <p className="review-date">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="no-reviews">No reviews yet. Be the first to review!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
