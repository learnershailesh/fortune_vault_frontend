// Tokenomics.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Tokenomics = () => {
  const data = {
    labels: ['Development', 'Marketing', 'Team', 'Reserve', 'Public Sale'],
    datasets: [
      {
        label: 'Token Distribution',
        data: [30, 20, 15, 25, 10], // Percentage distribution
        backgroundColor: [
          '#4CAF50',
          '#2196F3',
          '#FF9800',
          '#9C27B0',
          '#F44336',
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Tokenomics</h2>
        <p className="text-gray-400 mt-4">
          Understand how tokens are allocated for the success of our project.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        {/* Pie Chart */}
        <div className="w-full lg:w-1/2">
          <Pie data={data} />
        </div>

        {/* Token Details */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Development</h3>
            <p className="text-gray-400">30% of tokens are allocated for development to ensure the continuous growth of our platform.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Marketing</h3>
            <p className="text-gray-400">20% of tokens are dedicated to marketing to expand our reach globally.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Team</h3>
            <p className="text-gray-400">15% of tokens are reserved for the team to reward their hard work and dedication.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Reserve</h3>
            <p className="text-gray-400">25% of tokens are kept in reserve for future opportunities and challenges.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Public Sale</h3>
            <p className="text-gray-400">10% of tokens are available for public sale to involve our community.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
