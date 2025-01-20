// Roadmap.jsx
import React from 'react';

const Roadmap = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Roadmap</h2>
        <p className="text-lg md:text-xl text-gray-400">
          Follow our journey as we revolutionize the blockchain space. Here's what we have planned for the future.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Roadmap Stage 1 */}
          <div className="flex flex-col items-center space-y-4 w-full md:w-1/4">
            <div className="bg-blue-500 text-white p-6 rounded-full">
              <span className="text-2xl font-bold">Q1 2025</span>
            </div>
            <h3 className="text-2xl font-semibold">Project Concept</h3>
            <p className="text-gray-400 text-center">
              Finalizing the idea, market research, and team formation.
            </p>
          </div>

          {/* Roadmap Stage 2 */}
          <div className="flex flex-col items-center space-y-4 w-full md:w-1/4">
            <div className="bg-blue-500 text-white p-6 rounded-full">
              <span className="text-2xl font-bold">Q2 2025</span>
            </div>
            <h3 className="text-2xl font-semibold">ICO Launch</h3>
            <p className="text-gray-400 text-center">
              Official launch of the ICO and token sale begins.
            </p>
          </div>

          {/* Roadmap Stage 3 */}
          <div className="flex flex-col items-center space-y-4 w-full md:w-1/4">
            <div className="bg-blue-500 text-white p-6 rounded-full">
              <span className="text-2xl font-bold">Q3 2025</span>
            </div>
            <h3 className="text-2xl font-semibold">Platform Development</h3>
            <p className="text-gray-400 text-center">
              Development of the platform, wallet integration, and security enhancements.
            </p>
          </div>

          {/* Roadmap Stage 4 */}
          <div className="flex flex-col items-center space-y-4 w-full md:w-1/4">
            <div className="bg-blue-500 text-white p-6 rounded-full">
              <span className="text-2xl font-bold">Q4 2025</span>
            </div>
            <h3 className="text-2xl font-semibold">Global Expansion</h3>
            <p className="text-gray-400 text-center">
              Expanding our project to new regions and securing partnerships.
            </p>
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative mt-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-400 h-full"></div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center w-1/4">
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <span className="font-bold">Q1 2025</span>
              </div>
            </div>
            <div className="flex items-center justify-center w-1/4">
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <span className="font-bold">Q2 2025</span>
              </div>
            </div>
            <div className="flex items-center justify-center w-1/4">
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <span className="font-bold">Q3 2025</span>
              </div>
            </div>
            <div className="flex items-center justify-center w-1/4">
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <span className="font-bold">Q4 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

