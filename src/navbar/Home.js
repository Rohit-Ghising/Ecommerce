import { Navigation } from 'lucide-react'
import React from 'react'
import Section1 from '../components/Section'
import Section2 from '../components/Section2'
import Footer from '../components/Footer'
import Corusel from './Corusel'

const Home = () => {
  return (
    <div>
      <Navigation/>
      <Section1/>
      <Section2/>
      <Corusel/>
      <Footer/>
      
    </div>
  )
}

export default Home
