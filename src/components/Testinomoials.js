import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'John Doe',
      image: 'https://media.istockphoto.com/id/2105399620/photo/smiling-businessman-using-laptop-in-modern-office.webp?b=1&s=170667a&w=0&k=20&c=5TtDRhVUJMezcfJ2dnm-I-1ZIiIuDEZb851KJfahjIg=',
      quote: 'This is the best interior design studio I have ever worked with! Highly recommend.',
    },
    {
      name: 'Jane Smith',
      image: 'https://media.istockphoto.com/id/2052635887/photo/portrait-of-indian-young-woman-wearing-casual-clothing-isolated-on-white-background-stock.webp?b=1&s=170667a&w=0&k=20&c=yMe5-LYY592y_F_DzXBQYTji-s3YCkjCl6D_bmEdG3Y=',
      quote: 'Their designs are stunning and they truly understand what I wanted.',
    },
    {
      name: 'Alex Johnson',
      image: 'https://media.istockphoto.com/id/1696725120/photo/portrait-of-handsome-young-man-giving-thumbs-up-against-gray-background.webp?b=1&s=170667a&w=0&k=20&c=MaPrxCidmqKFyz0j5HjBNYQ-oEwIk6eM5hBkNgEolRc=',
      quote: 'Excellent service and attention to detail. My home looks amazing!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const { name, image, quote } = testimonials[currentIndex];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="flex items-center justify-center relative">
          <button
            className="absolute left-0 bg-gray-700 text-white p-2 rounded-full focus:outline-none"
            onClick={goToPrevious}
          >
            <FaArrowLeft size={24} />
          </button>

          <div className="flex flex-col items-center">
            <img
              src={image}
              alt={name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-4 text-center max-w-4xl">"{quote}"</p>
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          </div>

          <button
            className="absolute right-0 bg-gray-700 text-white p-2 rounded-full focus:outline-none"
            onClick={goToNext}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
