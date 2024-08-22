import React from 'react'

import Testimonial from '../components/Testinomoials';
import Section2 from '../components/Section2';

const Services = () => {
  
  return (
   <>
   {/* <div className="bg-green-800">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-white text-4xl font-bold mb-4">
     Services 
    </h1> <br />
    <p className="text-white mb-6">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa nostrum iste illo consectetur suscipit tempore temporibus corporis ad?

    </p> <br />
    <div className="flex space-x-3 mb-4">
      <button
        className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full text-sm hover:bg-yellow-500 w-32 text-center"
      >
        Shop Now
      </button>
      <button
        className="px-4 py-2 bg-black text-white font-semibold srounded-full text-sm hover:bg-gray-800 w-32 text-center"
      >
        Explore
      </button>
    </div>
    <img src={couch} alt="Couch" className="mx-auto w-full max-w-lg scale-110" />
  </div>
</div> */}

   <div> 
   <Section2/>
    <Testimonial/>
      </div></>
  )
}

export default Services