import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-[#1c1c1c] text-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Subscription */}
        <div className="mb-20 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-medium tracking-widest mb-8">Subscribe to Our Newsletter</h2>
          <p className="mb-8 text-[0.75rem] tracking-wider">
            Get the latest updates and special offers directly in your inbox!
          </p>
          <div className="flex flex-col md:flex-row md:items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 bg-[#1c1c1c] border border-gray-500 text-gray-800 focus:outline-none focus:ring focus:ring-white mb-4 md:mb-0 md:mr-4 w-72"
            />
            <button className="bg-white text-black py-2 px-8 tracking-widest transition hover:bg-[#1c1c1c] hover:text-white hover:border-gray-500 hover:border">
              Subscribe
            </button>
          </div>
        </div>

        {/* Sections arranged side by side */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* First Section: Contact Us, FAQ, etc. */}
          <div>
            <h3 className="font-medium tracking-widest mb-2">Contact Us</h3>
            <ul className='text-sm space-y-2'>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

          {/* Second Section: Shop by Flowers */}
          <div>
            <h3 className="font-medium tracking-widest mb-2">Shop by Flowers</h3>
            <ul className='text-sm space-y-2'>
              <li>Roses</li>
              <li>Tulips</li>
              <li>Daisies</li>
              <li>Sunflowers</li>
            </ul>
          </div>

          {/* Third Section: Shop by Plants */}
          <div>
            <h3 className="font-medium tracking-widest mb-2">Shop by Plants</h3>
            <ul className='text-sm space-y-2'>
              <li>Succulents</li>
              <li>Ferns</li>
              <li>Orchids</li>
              <li>Snake Plant</li>
            </ul>
          </div>

          {/* Fourth Section: Shop By Occasion */}
          <div>
            <h3 className="font-medium tracking-widest mb-2">Shop By Occasion</h3>
            <ul className='text-sm space-y-2'>
              <li>Weddings</li>
              <li>Birthdays</li>
              <li>Anniversaries</li>
              <li>Funerals</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-10 mt-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-green-500 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-green-500 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-2xl hover:text-green-500 transition" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl hover:text-green-500 transition" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 tracking-wider text-sm">
          &copy; {new Date().getFullYear()} FLORIST. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
