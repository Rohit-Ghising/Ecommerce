import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './navbar/Home';
import Contact from './navbar/Contact';
import Shop from './navbar/Shop';
import About from './navbar/About';
import Services from './navbar/Services';
import Blog from './navbar/Blog';
import Profile from './navbar/Profile';
import Checkout from './Pages/Checkout';
import CartPage from './carts/CartPage';
import OrderDetail from './orders/OrderDetail';
import Detail from './Pages/Detail';
import Footer from './components/Footer';
import Section1 from './components/Section';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Navigation />
          <Section1/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Profile />} />
            <Route path="/carts" element={<CartPage />} />
            <Route path="/orders/:id" element={<OrderDetail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
         
          <Footer/>
        </Router>
      </div>
      


    

      {/* <ToastContainer autoClose={1000} pauseOnHover={false} pauseOnFocusLoss={false} /> */}
    
    </>
  );
}

export default App;
