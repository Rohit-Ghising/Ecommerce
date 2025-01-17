import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate, faTruck, faPhone, faStore } from '@fortawesome/free-solid-svg-icons';
import whyChooseUsImg from '../images/why-choose-us-img.jpg';

const features = [
  {
    icon: faTruck,
    title: 'Fast Delivery',
    description: 'Get your products delivered quickly and on time.',
  },
  {
    icon: faStore,
    title: 'High Quality',
    description: 'Our products are of the highest quality.',
  },
  {
    icon: faPhone,
    title: 'Customer Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro et aliquam nobis.',
  },
  {
    icon: faRotate,
    title: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];

const Feature = ({ feature }) => (
  <div className="text-center mb-6">
    <FontAwesomeIcon icon={feature.icon} size="3x" className="mb-2 text-black" />
    <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
    <p>{feature.description}</p>
  </div>
);

const Section2 = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="md:pr-8">
          <h1 className="text-3xl font-semibold mb-8">Why Choose Us?</h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto ratione, cum voluptates voluptas perferendis earum consequatur nihil quae? Earum cumque non dolorem id tenetur quos ipsa sapiente quibusdam eligendi autem!
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {features.slice(0, 2).map((feature, index) => (
                <Feature key={index} feature={feature} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.slice(2).map((feature, index) => (
                <Feature key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img src={whyChooseUsImg} alt="Why choose us" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
