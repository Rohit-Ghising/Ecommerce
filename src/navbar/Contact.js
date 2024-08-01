import React from 'react';
import Footer from '../components/Footer';
import Section1 from '../components/Section';


const Contact = () => {
  return (
   <>
   <Section1/>
   <div className="flex items-center justify-start min-h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold  mb-8">LET'S GET IN TOUCH</h2>
        <form>
          <div className="flex space-x-6 mb-8">
            <input
              type="text"
              placeholder="YOURNAME...*"
              className="flex-1 p-3 border rounded-3xl text-sm bg-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-1 p-3 border rounded-3xl text-sm bg-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="SUBJECT...*"
              className="flex-1 p-3 border rounded-3xl text-sm bg-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-8">
            <textarea
              placeholder="YOUR MESSAGE..."
              className="w-full p-4 border rounded-lg text-sm bg-gray-100 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
            ></textarea>
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded-3xl font-semibold text-lg hover:bg-red-800 focus:outline-none "
            >
              SEND MESSAGE NOW
            </button>
          </div>
        </form>
        <Footer/>
      </div>





      <div>
        <div className='bg-green-700 text-white p-10 space-y-8 font-semibold  rounded-2xl ml-20'>

          <div>
            <h1>Phone Number</h1>
            <h2 className='text-2xl'>010-020-0340 </h2>
          </div>
          <hr></hr>
          <div>
            <h1>Email Address</h1>
            <h2 className='text-2xl'>info@meeting.edu
            </h2>
          </div>
          <hr></hr>
          <div>
            <h1>Street Address</h1>
            <h2 className='text-2xl '>Rio de Janeiro - RJ,</h2>
            <h3 className='text-2xl'>22795-008, Brazil
            </h3>
          </div>
          <hr></hr>

          <div>
            <h1>Website URL</h1>
            <h2 className='text-2xl'>www.meeting.edu</h2>
          </div>




        </div>
      </div>











    </div>
   </>
    
  );
};

export default Contact;