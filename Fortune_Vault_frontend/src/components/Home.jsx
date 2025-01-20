import React from 'react';

const Home = () => {
  return (
    <div className="flex h-screen font-sans">
      {/* Left Section with Gradient Background */}
      <div className="w-1/2 flex flex-col justify-center text-white p-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Welcome to Our <span className="text-yellow-300">ICO</span>
        </h1>
        <p className="text-lg mb-8 leading-relaxed">
          Join us in revolutionizing the crypto world with innovation and growth. Your future in blockchain starts here.
        </p>
        <div className="flex space-x-6">
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            onClick={() => document.getElementById('buyToken').scrollIntoView({ behavior: 'smooth' })}
          >
            Buy Now
          </button>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            onClick={() => document.getElementById('whitepaper').scrollIntoView({ behavior: 'smooth' })}
          >
            WhitePaper
          </button>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <img
          src="/blue.jpg"
          alt="ICO Wallpaper"
          className="w-4/5 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
