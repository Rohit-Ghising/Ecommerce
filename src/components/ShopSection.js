import React from 'react';
import Shop from '../navbar/Shop';

const ShopSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Crafted with Excellent Material</h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quis veritatis saepe culpa quam voluptate sed fugit! Architecto quos, optio
              <br />
              beatae provident vel deserunt harum eum in dolorem. Magni, dolorum?
            </p>
            <button
              onClick={() => scrollToSection('explore')}
              className="px-4 py-2 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-800 w-32 text-center"
            >
              Explore
            </button>
          </div>

          <div className="w-full md:w-2/3">
            <Shop limit={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
