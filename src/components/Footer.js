// src/components/Footer.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import {
  faInstagram

} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const icons = [
  { icon: faFacebook, link: 'https://facebook.com' },
  { icon: faTwitter, link: 'https://twitter.com' },
  { icon: faLinkedin, link: 'https://linkedin.com' },
  { icon: faInstagram, link: 'https://instagram.com' }
];






const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data:', formData);
      // Handle form submission (e.g., send data to an API)
    }
  };

  return (
    <footer className="bg-white text-black py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-xl mb-4">Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-4 rounded shadow-md flex items-center space-x-2">
          <div className="flex-grow">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="flex-grow">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Send
          </button>
        </form>
      </div><div className='container'>
        <h1>Furni</h1>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quis error aliquid maxime architecto amet, adipisci perspiciatis provident <br /> tenetur molestias ipsam iure velit, dolore deserunt explicabo?</p>
      </div>
      <div className='socialmediaicons space-x-4 container'>
        {
          icons.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </a>)

          )}
      </div>
      <br /><br />
      {/* //FOR  ABOYT US AND OTHER BUTTONS */}
      <div className='container flex space-x-9'>
        <div><p><button>About us</button></p>
          <p><button>Services</button></p>
          <p><button>Blog</button></p>
          <p> <button>Contact us</button></p></div>

        <div className='p-2'>
          <p><button>Support</button></p>
          <p>Knowledge base</p>
          <p>Live chat</p>
        </div>
        <div><p><button>Jobs</button></p>
          <p><button>Our team</button></p>
          <p><button>Leadership</button></p>
          <p><button>Privacy policy</button></p></div>
        <div><p><button>Nordic Chair</button></p>
          <p><button>Kruzo Aero</button></p>
          <p> <button>Ergonomic Chair</button></p></div>
      </div>
    </footer>
  );
};

export default Footer;


