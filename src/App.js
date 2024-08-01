import React from 'react'
// import ProductLists from './Api/Productapi/ProductLists'
import Navigation from './components/Navigation'
// import Home from './navbar/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Contact from './navbar/Contact';
import Home from './navbar/Home';
import { CartPage } from './navbar/CartPage'
import Shop from './navbar/Shop';
import About from './navbar/About';
import Services from './navbar/Services';
import Blog from './navbar/Blog';
import Profile from './navbar/Profile';
import Checkout from './Pages/Checkout';


const App = () => {
  return (
    <> <div>
       <Router>
      <Navigation />
      <Routes>
         <Route path="/" element={<Home />} />  
        <Route path="/shop" element={<Shop/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>} />
        <Route path="/blog" element={<Blog/>} />
         <Route path="/contact" element={<Contact />} /> 
        <Route path="/profile" element={<Profile/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path ="/checkout" element={<Checkout/>}/>
      </Routes>
    </Router> 
  
      
      
    </div>
      <div>
         <i class="fa fa-truck" aria-hidden="true"></i> 
      </div> 


    </>

  )
}

export default App


