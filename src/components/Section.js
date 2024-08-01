import React from 'react'
import couch from '../images/couch.png'
import Shop from '../navbar/Shop'

const Section1 = () => {
  return (
    <>
      <div className='bg-green-600'>
        <div className='bg-green-600 justify-center items-center container'>
          <h1>
            Modern Interior Design Studio
          </h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa nostrum iste illo consectetur suscipit tempore temporibus corporis ad?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sit quae illum. Tempore, quae illo.
          </p>
          <div className='flex space-x-3'>
            <button className='bg-yellow-400 space-x-3 rounded-md p-2'>Shop Now</button>
          </div>
          <button className='text-white rounded-md bg-yellow-400 p-2 mt-3'>Explore</button>
          <img src={couch} alt="Couch" />
        </div>
      </div>
      <br /><br />
      <div className='flex'>
        <div className='container'>
          <h1>Crafted with excellent material</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, quis veritatis saepe culpa quam voluptate sed fugit! Architecto quos, optio
            <br />
            beatae provident vel deserunt harum eum in dolorem. Magni, dolorum?
          </p><button className='bg-black text-white rounded-md p-2 mt-3'>Explore</button>


        </div>
        <div className='container flex flex-col items-start'>
          <Shop />
          
        </div>
      </div>
    </>
  )
}

export default Section1
