import React from 'react';
import Footer from '../components/Footer';
import { useGetProductsQuery } from '../Api/productApi';

const Shop = () => {
  const { isLoading, error, data } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Limit the data to only 3 products
  const productsToShow = data?.data.slice(0, 3);

  return (
    <div>
      <style jsx>{`
        .product-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-container:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .product-image-container {
          width: 100%;
          height: 200px; /* Adjust height as needed */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .product-image {
          width: auto;
          height: 100%;
          max-width: 100%;
          object-fit: cover;
        }

        .product-details {
          padding: 16px;
          text-align: center;
          position: relative; /* Position relative for button positioning */
        }

        .product-name {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .product-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 60px; /* Increased space for button */
        }

        .plus-button {
          position: absolute;
          bottom: 10px; /* Position the button slightly above the bottom */
          left: 50%;
          transform: translateX(-50%);
          background-color: #000; /* Black background */
          color: white;
          border: none;
          border-radius: 50%;
          width: 50px; /* Increased size */
          height: 50px; /* Increased size */
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px; /* Larger font size */
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .product-container:hover .plus-button {
          opacity: 1;
          transform: translateX(-50%) scale(1.1); /* Slightly increase size on hover */
        }
      `}</style>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productsToShow?.map((prod, i) => (
          <div key={i} className="product-container">
            <div className="product-image-container">
              <img src={prod.product_image} alt={prod.product_name || 'Product'} className="product-image" />
            </div>
            <div className="product-details">
              <h2 className="product-name">{prod.product_name}</h2>
              <p className="product-price">${prod.product_price.toFixed(2)}</p>
              <button className="plus-button">+</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
