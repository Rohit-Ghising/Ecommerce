import React from 'react';
import { Link } from 'react-router-dom';
import couch from '../images/couch.png';

const Section1 = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-green-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-white text-4xl font-bold mb-4">
          Modern Interior Design Studio
        </h1>
        <p className="text-white mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa nostrum iste illo consectetur suscipit tempore temporibus corporis ad?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit quae illum. Tempore, quae illo.
        </p>
        <div className="flex space-x-3 mb-4">
          <Link to='/shop'>
            <button
              onClick={() => scrollToSection('shop')}
              className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full text-sm hover:bg-yellow-500 w-32 text-center"
            >
              Shop Now
            </button>
          </Link>
          <button
            onClick={() => scrollToSection('explore')}
            className="px-4 py-2 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-800 w-32 text-center"
          >
            Explore
          </button>
        </div>
        <div className="flex justify-center">
          <img src={couch} alt="Couch" className="w-full max-w-lg scale-110" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
