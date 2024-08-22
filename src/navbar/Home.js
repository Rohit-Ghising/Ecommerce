
import React from 'react'
import Section1 from '../components/Section'
import Section2 from '../components/Section2'
import Footer from '../components/Footer'
import Corusel from './Corusel'
import Section3 from '../components/Section3'
import Testimonial from '../components/Testinomoials'
import Blog from './Blog'
import ShopSection from '../components/ShopSection'
const Home = () => {
  return (
    <div>
    
      <ShopSection/>
      <Section2/>
      <Section3/>
      <Corusel/><br />
      <Testimonial/>  
      <Blog limit={3} />
      
      
    </div>
  )
}

export default Home
