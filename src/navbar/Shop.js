import React from 'react';
import { useGetProductsQuery } from '../Api/productApi';
import { useNavigate } from 'react-router-dom';

const Shop = ({ limit }) => {
  const navigate = useNavigate();
  const { isLoading, error, data } = useGetProductsQuery();

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error: {error.message}</div>;
  }

  const productsToShow = limit ? data?.data.slice(0, limit) : data?.data;

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsToShow?.map((prod, i) => (
          <div 
            key={i} 
            onClick={() => navigate(`/product/${prod._id}`)} 
            className="relative cursor-pointer overflow-hidden transition-transform duration-300 transform hover:scale-105 group"
          >
            <div className="relative w-full overflow-hidden">
              <img 
                src={prod.product_image} 
                alt={prod.product_name || 'Product'} 
                className="w-full h-auto max-h-96 object-contain transition-transform duration-300 transform group-hover:translate-y-[-10%]" 
              />
            </div>
            <div className="p-4 text-center bg-white">
              <h2 className="text-lg font-semibold mb-2">{prod.product_name}</h2>
              <p className="text-xl font-bold text-gray-800">${prod.product_price.toFixed(2)}</p>
            </div>
            <button className="absolute bottom-4 right-4 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
