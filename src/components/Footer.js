import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
    }
  };

  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-8 mb-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-6">Stay updated with the latest news and exclusive offers.</p>
          </div>
          <form onSubmit={handleSubmit} className="md:w-1/2 flex flex-col md:flex-row items-center">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full md:w-auto md:flex-grow px-4 py-2 mb-4 md:mb-0 md:mr-4 border border-gray-300 rounded bg-gray-100 text-gray-800 placeholder-gray-600"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-auto md:flex-grow px-4 py-2 mb-4 md:mb-0 md:mr-4 border border-gray-300 rounded bg-gray-100 text-gray-800 placeholder-gray-600"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded flex items-center"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {icons.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={item.icon} size="2x" className="text-gray-800 hover:text-gray-600 transition duration-200" />
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><button className="text-gray-800 hover:text-gray-600">About Us</button></li>
              <li><button className="text-gray-800 hover:text-gray-600">Blog</button></li>
              <li><button className="text-gray-800 hover:text-gray-600">Contact Us</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><button className="text-gray-800 hover:text-gray-600">Help Center</button></li>
              <li><button className="text-gray-800 hover:text-gray-600">Live Chat</button></li>
              <li><button className="text-gray-800 hover:text-gray-600">FAQs</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><button className="text-gray-800 hover:text-gray-600">Nordic Chair</button></li>
              <li><button className="text-gray-800 hover:text-gray-600">Kruzo Aero</button></li>
              <li><button className="text-gray-800 hover:text-gray-600">Ergonomic Chair</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><button className="text-gray-800 hover:text-gray-600">Privacy Policy</button></li>
              <li><button className="text-gray-800 hover:text-gray-600">Terms of Service</button></li>
              <li><button className="text-gray-800 hover:text-gray-600">Cookie Policy</button></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
