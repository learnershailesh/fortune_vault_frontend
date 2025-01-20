import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent backdrop-blur-lg absolute p-5 top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ul className="flex space-x-4">
              <li><a href="#home" className="text-gray-200">Home</a></li>
              <li><a href="#about" className="text-gray-200">About</a></li>
              <li><a href="#whitepaper" className="text-gray-200">WhitePaper</a></li>
              <li><a href="#aboutus" className="text-gray-200">About Us</a></li>
            </ul>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Connect Wallet</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


