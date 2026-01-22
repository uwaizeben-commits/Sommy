import express from 'express';
import Product from '../models/Product.js';
import { authenticateToken, authorizeAdmin } from '../middleware/auth.js';

const router = express.Router();

// Mock products data
const mockProducts = [
  {
    id: '1',
    name: 'Polo Shirt',
    category: 'Clothes',
    price: 45.99,
    image: '/images/polo1.jpg',
    description: 'Premium polo shirt',
  },
  {
    id: '2',
    name: 'Classic Hoodie',
    category: 'Clothes',
    price: 65.99,
    image: '/images/hoodies1.jpg',
    description: 'Comfortable hoodie',
  },
  {
    id: '3',
    name: 'Leather Bag',
    category: 'Bags',
    price: 120.00,
    image: '/images/bag1.jpg',
    description: 'Stylish leather bag',
  },
  {
    id: '4',
    name: 'Running Shoes',
    category: 'Shoes',
    price: 95.99,
    image: '/images/shoe1.jpg',
    description: 'Perfect for running',
  },
];

// Get all products with pagination and filtering
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, category, search } = req.query;
    const skip = (page - 1) * limit;

    try {
      let query = {};
      if (category) query.category = category;
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
        ];
      }

      const products = await Product.find(query)
        .skip(skip)
        .limit(Number(limit));
      const total = await Product.countDocuments(query);

      return res.json({
        products,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      });
    } catch (dbError) {
      // Fallback to mock data
      let products = mockProducts;
      
      if (category) {
        products = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
      }
      if (search) {
        products = products.filter(p =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase())
        );
      }

      const total = products.length;
      const paginatedProducts = products.slice(skip, skip + Number(limit));

      return res.json({
        products: paginatedProducts,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single product by ID
router.get('/:id', async (req, res) => {
  try {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        throw new Error('Not found in DB');
      }
      return res.json(product);
    } catch (dbError) {
      // Fallback to mock data
      const product = mockProducts.find(p => p.id === req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      return res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create product (Admin only)
router.post('/', authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const { name, description, category, price, discount, image, stock } = req.body;

    const product = new Product({
      name,
      description,
      category,
      price,
      discount,
      image,
      stock,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update product (Admin only)
router.put('/:id', authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete product (Admin only)
router.delete('/:id', authenticateToken, authorizeAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add review to product
router.post('/:id/review', authenticateToken, async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          reviews: {
            user: req.user.id,
            rating,
            comment,
          },
        },
      },
      { new: true }
    );

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
