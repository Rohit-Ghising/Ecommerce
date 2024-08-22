import React from 'react';
import imggrid from '../images/img-grid-1.jpg';

const Section3 = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row items-start">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img src={imggrid} alt="Interior Design" className="w-full h-auto" />
        </div>
        
        {/* Text Section */}
        <div className="flex-1 flex flex-col pl-6 md:pl-12">
          {/* Top Paragraphs */}
          <div className="flex-1 flex flex-col justify-between mb-6">
            <h1 className="text-3xl font-semibold mb-6">
              We Help You Make Modern <br /> Interior Design
            </h1>
            <div className="flex flex-col gap-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta fugiat nostrum iste, rerum id, quae reprehenderit
                <br />et aspernatur culpa libero impedit nam voluptate. Doloribus fugiat quia minus, obcaecati ea est voluptate dolore
                <br />magni debitis autem facere quidem odio magnam eaque quae praesentium facilis similique veritatis vitae nobis.
                facilis eaque voluptate <br />minima. Itaque provident totam sed delectus unde ea, eligendi ex esse et, enim rerum incidunt,
                maiores libero quaerat ut error suscipit illum?</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, illo.</p>
            </div>
          </div>

          {/* Bottom Paragraphs */}
          <div className="flex flex-col gap-6 mb-6">
            <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Aliquid, laudantium.</p>
            <p>Lorem ipsum, dolor sit amet consectetur <br />adipisicing elit. Sint, qui?</p>
          </div>

          {/* Explore Button */}
          <a
            href="#explore"
            className="inline-block px-4 py-2 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-800 w-32 text-center mt-auto"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section3;
