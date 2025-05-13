import React from 'react'

import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          JobPortal<span className="text-blue-500">.com</span>
        </h1>

        <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
          <a href="#" className="hover:text-white transition duration-300">About Us</a>
          <a href="#" className="hover:text-white transition duration-300">Contact</a>
          <a href="#" className="hover:text-white transition duration-300">Privacy</a>
          <a href="#" className="hover:text-white transition duration-300">Terms</a>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white text-lg">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-white text-lg">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-white text-lg">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-4">
        &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

