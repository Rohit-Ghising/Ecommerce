import React from 'react';
import serviceIcon01 from '../images/product-1.png';
import serviceIcon02 from '../images/product-2.png';
import serviceIcon03 from '../images/product-3.png';

const services = [
  {
    icon: serviceIcon01,
    title: "Comfortable Chair",
    description: "Suspendisse tempor"
  },
  {
    icon: serviceIcon02,
    title: "Best Chair",
    description: "Suspendisse tempor"
  },
  {
    icon: serviceIcon03,
    title: "Awesome Chair",
    description: "Suspendisse tempor."
  },
];

const Corusel = () => {
  return (
    <section className="services py-12 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-center p-4">
              <div className="flex-shrink-0 w-32 h-32 bg-gray-200 border border-gray-300 rounded-lg p-2 flex items-center justify-center">
                <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-sm mb-2">{service.description}</p>
                <a href="#readmore" className="text-black no-underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Corusel;
