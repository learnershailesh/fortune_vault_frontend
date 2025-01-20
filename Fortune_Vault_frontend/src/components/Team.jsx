// Team.jsx
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/150',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://via.placeholder.com/150',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Alice Johnson',
      role: 'Blockchain Developer',
      image: 'https://via.placeholder.com/150',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Bob Brown',
      role: 'Marketing Lead',
      image: 'https://via.placeholder.com/150',
      linkedin: '#',
      twitter: '#',
    },
  ];

  return (
    <div className=" bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]   text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
        <p className="text-gray-400 mt-4">
          Our team of experts is dedicated to making this ICO a success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-400 mb-4">{member.role}</p>
            <div className="flex space-x-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                LinkedIn
              </a>
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                Twitter
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
