import React from 'react';
import Footer from '../components/Footer';
import couch from '../images/couch.png';
const Contact = () => {
  return (
    <>
    {/* <div className="bg-green-800">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-white text-4xl font-bold mb-4">
Shop
    </h1>
    <p className="text-white mb-6">
    
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit quae illum. Tempore, quae illo.
    </p> <br />
    <div className="flex space-x-3 mb-4">
      <button
        className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full text-sm hover:bg-yellow-500 w-32 text-center"
      >
        Shop Now
      </button>
      <button
        className="px-4 py-2 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-800 w-32 text-center"
      >
        Explore
      </button>
    </div>
    <img src={couch} alt="Couch" className="mx-auto w-full max-w-lg scale-110" />
  </div>
</div> */}
{/* nvdno;ijiliulhiv */}
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-4xl md:mr-10 mb-10 md:mb-0">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Let's Get in Touch</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <input
              type="text"
              placeholder="Your Name*"
              className="p-3 border rounded-3xl text-sm bg-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="p-3 border rounded-3xl text-sm bg-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Subject*"
              className="w-full p-3 border rounded-3xl text-sm bg-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            />
            <textarea
              placeholder="Your Message*"
              className="w-full p-4 border rounded-lg text-sm bg-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-3xl font-semibold text-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="bg-green-800 text-white p-10 rounded-2xl w-full max-w-sm md:max-w-md">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold">Phone Number</h3>
            <p className="text-2xl mt-2">010-020-0340</p>
          </div>
          <hr className="border-t border-green-700" />
          <div>
            <h3 className="text-xl font-bold">Email Address</h3>
            <p className="text-2xl mt-2">info@meeting.edu</p>
          </div>
          <hr className="border-t border-green-700" />
          <div>
            <h3 className="text-xl font-bold">Street Address</h3>
            <p className="text-2xl mt-2">Rio de Janeiro - RJ,</p>
            <p className="text-2xl">22795-008, Brazil</p>
          </div>
          <hr className="border-t border-green-700" />
          <div>
            <h3 className="text-xl font-bold">Website URL</h3>
            <p className="text-2xl mt-2">www.meeting.edu</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
