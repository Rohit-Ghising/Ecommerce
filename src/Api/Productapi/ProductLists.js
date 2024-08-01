import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products.json'); // Adjust path as needed
        setProducts(response.data); // Assuming response.data is an array of products with image URLs
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Check if products is an array before rendering
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} width="100" />
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductLists;
