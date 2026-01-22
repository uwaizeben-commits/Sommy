import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/Products.css';
import polo1 from '../Images/polo1.jpg';
import polo2 from '../Images/polo2.jpg';
import polo3 from '../Images/polo3.jpg';
import polo4 from '../Images/polo4.jpg';
import hoodies1 from '../Images/hoodies1.jpg';
import hoodies2 from '../Images/hoodies2.jpg';
import hoodies3 from '../Images/hoodies3.jpg';
import hoodies4 from '../Images/hoodies4.jpg';
import bag1 from '../Images/bag1.jpg';
import bag2 from '../Images/bag2.jpg';
import bag3 from '../Images/bag3.jpg';
import bag4 from '../Images/bag4.jpg';
import bag5 from '../Images/bag5.jpg';
import shoe1 from '../Images/shoe1.jpg';
import shoe2 from '../Images/shoe2.jpg';
import shoe3 from '../Images/shoe3.jpg';
import shoe4 from '../Images/shoe4.jpg';
import shoe5 from '../Images/shoe5.jpg';
import shoe6 from '../Images/shoe6.jpg';
import image1 from '../Images/image1.jpeg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import Jewelries1 from '../Images/Jewelries1.jpg';
import Jewelries2 from '../Images/Jewelries2.jpg';
import Jewelries3 from '../Images/Jewelries3.jpg';
import Jewelries4 from '../Images/Jewelries4.jpg';
import Jewelries5 from '../Images/Jewelries5.jpg';
import Jewelries6 from '../Images/Jewelries6.jpg';

const Products = () => {
  const { addToCart } = useContext(AppContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [cartNotification, setCartNotification] = useState(null);

  // All products with images
  const allProducts = [
    { id: 1, name: 'Premium Polo Shirt 1', price: 20000, category: 'Clothes', image: polo1, sku: 'POLO-001' },
    { id: 2, name: 'Premium Polo Shirt 2', price: 21500, category: 'Clothes', image: polo2, sku: 'POLO-002' },
    { id: 3, name: 'Premium Polo Shirt 3', price: 23000, category: 'Clothes', image: polo3, sku: 'POLO-003' },
    { id: 4, name: 'Premium Polo Shirt 4', price: 24500, category: 'Clothes', image: polo4, sku: 'POLO-004' },
    { id: 5, name: 'Comfortable Hoodie 1', price: 26000, category: 'Clothes', image: hoodies1, sku: 'HOOD-001' },
    { id: 6, name: 'Comfortable Hoodie 2', price: 28000, category: 'Clothes', image: hoodies2, sku: 'HOOD-002' },
    { id: 7, name: 'Comfortable Hoodie 3', price: 25000, category: 'Clothes', image: hoodies3, sku: 'HOOD-003' },
    { id: 8, name: 'Comfortable Hoodie 4', price: 27000, category: 'Clothes', image: hoodies4, sku: 'HOOD-004' },
    { id: 9, name: 'Stylish Bag 1', price: 15000, category: 'Bags', image: bag1, sku: 'BAG-001' },
    { id: 10, name: 'Stylish Bag 2', price: 16500, category: 'Bags', image: bag2, sku: 'BAG-002' },
    { id: 11, name: 'Stylish Bag 3', price: 17000, category: 'Bags', image: bag3, sku: 'BAG-003' },
    { id: 12, name: 'Stylish Bag 4', price: 18500, category: 'Bags', image: bag4, sku: 'BAG-004' },
    { id: 13, name: 'Stylish Bag 5', price: 19000, category: 'Bags', image: bag5, sku: 'BAG-005' },
    { id: 14, name: 'Premium Shoe 1', price: 22000, category: 'Shoes', image: shoe1, sku: 'SHOE-001' },
    { id: 15, name: 'Premium Shoe 2', price: 24000, category: 'Shoes', image: shoe2, sku: 'SHOE-002' },
    { id: 16, name: 'Premium Shoe 3', price: 23500, category: 'Shoes', image: shoe3, sku: 'SHOE-003' },
    { id: 17, name: 'Premium Shoe 4', price: 25500, category: 'Shoes', image: shoe4, sku: 'SHOE-004' },
    { id: 18, name: 'Premium Shoe 5', price: 26000, category: 'Shoes', image: shoe5, sku: 'SHOE-005' },
    { id: 19, name: 'Premium Shoe 6', price: 27000, category: 'Shoes', image: shoe6, sku: 'SHOE-006' },
    { id: 20, name: 'Elegant Jewelry 1', price: 12000, category: 'Jewelries', image: Jewelries1, sku: 'JEWEL-001' },
    { id: 21, name: 'Elegant Jewelry 2', price: 13500, category: 'Jewelries', image: Jewelries2, sku: 'JEWEL-002' },
    { id: 22, name: 'Elegant Jewelry 3', price: 14000, category: 'Jewelries', image: Jewelries3, sku: 'JEWEL-003' },
    { id: 23, name: 'Elegant Jewelry 4', price: 12500, category: 'Jewelries', image: Jewelries4, sku: 'JEWEL-004' },
    { id: 24, name: 'Elegant Jewelry 5', price: 13000, category: 'Jewelries', image: Jewelries5, sku: 'JEWEL-005' },
    { id: 25, name: 'Elegant Jewelry 6', price: 14500, category: 'Jewelries', image: Jewelries6, sku: 'JEWEL-006' },
  ];

  const categories = ['Clothes', 'Bags', 'Jewelries', 'Shoes'];

  const categoryImages = {
    Clothes: [
      { name: 'Premium Polo Shirt 1', img: polo1 },
      { name: 'Premium Polo Shirt 2', img: polo2 },
      { name: 'Premium Polo Shirt 3', img: polo3 },
      { name: 'Premium Polo Shirt 4', img: polo4 },
      { name: 'Comfortable Hoodie 1', img: hoodies1 },
      { name: 'Comfortable Hoodie 2', img: hoodies2 },
      { name: 'Comfortable Hoodie 3', img: hoodies3 },
      { name: 'Comfortable Hoodie 4', img: hoodies4 },
    ],
    Bags: [
      { name: 'Stylish Bag 1', img: bag1 },
      { name: 'Stylish Bag 2', img: bag2 },
      { name: 'Stylish Bag 3', img: bag3 },
      { name: 'Stylish Bag 4', img: bag4 },
      { name: 'Stylish Bag 5', img: bag5 },
    ],
    Shoes: [
      { name: 'Premium Shoe 1', img: shoe1 },
      { name: 'Premium Shoe 2', img: shoe2 },
      { name: 'Premium Shoe 3', img: shoe3 },
      { name: 'Premium Shoe 4', img: shoe4 },
      { name: 'Premium Shoe 5', img: shoe5 },
      { name: 'Premium Shoe 6', img: shoe6 },
    ],
    Jewelries: [
      { name: 'Elegant Jewelry 1', img: Jewelries1 },
      { name: 'Elegant Jewelry 2', img: Jewelries2 },
      { name: 'Elegant Jewelry 3', img: Jewelries3 },
      { name: 'Elegant Jewelry 4', img: Jewelries4 },
      { name: 'Elegant Jewelry 5', img: Jewelries5 },
      { name: 'Elegant Jewelry 6', img: Jewelries6 },
    ],
  };

  useEffect(() => {
    filterAndSortProducts();
  }, [category, search, sortBy]);

  const filterAndSortProducts = () => {
    let filtered = allProducts;
    
    // Apply category filter
    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }
    
    // Apply search filter
    if (search) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.sku.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch(sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
        default:
          return a.id - b.id;
      }
    });
    
    setFilteredProducts(sorted);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartNotification(product.name);
    setTimeout(() => setCartNotification(null), 2000);
  };

  const clearFilters = () => {
    setSearch('');
    setCategory('');
    setSortBy('newest');
  };

  const hasActiveFilters = search || category || sortBy !== 'newest';

  return (
    <div className="products-page">
      {/* Page Header */}
      <div className="products-header">
        <h1>Discover Our Collection</h1>
        <p className="header-subtitle">Explore our curated selection of premium products</p>
      </div>
      
      {/* Categories Showcase */}
      {!category && (
        <div className="categories-section">
          <h2>Shop by Category</h2>
          <div className="categories-container">
            {Object.entries(categoryImages).map(([categoryName, images]) => (
              <div 
                key={categoryName} 
                className="category-group"
                onClick={() => setCategory(categoryName)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setCategory(categoryName);
                  }
                }}
              >
                <h3>{categoryName}</h3>
                <div className="category-images">
                  {images.slice(0, 4).map((item, idx) => (
                    <img
                      key={idx}
                      src={item.img}
                      alt={item.name}
                      className="category-image"
                      title={`Shop ${categoryName}`}
                    />
                  ))}
                </div>
                <div className="category-overlay">
                  <span className="category-cta">View {categoryName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Filters and Search Section */}
      <div className="products-toolbar">
        <div className="toolbar-header">
          <h2 className="products-title">
            {category ? `${category}` : 'All Products'}
          </h2>
          <span className="product-count">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        <div className="toolbar-controls">
          {/* Search Bar */}
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
              aria-label="Search products"
            />
            {search && (
              <button 
                className="clear-search-btn"
                onClick={() => setSearch('')}
                aria-label="Clear search"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="filter-controls">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="category-select"
              aria-label="Filter by category"
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
              aria-label="Sort products"
            >
              <option value="newest">Newest</option>
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            {hasActiveFilters && (
              <button 
                className="clear-filters-btn"
                onClick={clearFilters}
                aria-label="Clear all filters"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Cart Notification */}
      {cartNotification && (
        <div className="cart-notification" role="alert">
          ✓ {cartNotification} added to cart!
        </div>
      )}

      {/* Products Grid */}
      <div className="all-products-section">
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image" 
                  />
                </div>
                <div className="product-info">
                  <span className="product-sku">{product.sku}</span>
                  <h3>{product.name}</h3>
                  <p className="price">₦{product.price.toLocaleString()}</p>
                  <button 
                    className="btn-add-cart"
                    onClick={() => handleAddToCart(product)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-products-container">
            <div className="no-products-icon">📦</div>
            <h3>No Products Found</h3>
            <p>
              {search 
                ? `No products match your search for "${search}"`
                : category 
                ? `No products available in ${category} category`
                : 'No products available'
              }
            </p>
            <button 
              className="reset-btn"
              onClick={clearFilters}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
