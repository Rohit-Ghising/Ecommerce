import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <nav className="bg-green-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              Furnui
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden sm:flex sm:space-x-4">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Shop
            </Link>
            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link to="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link to="/blog" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* User and Cart Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faUser} className="text-xl" />
            </Link>
            <Link to="/carts" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
