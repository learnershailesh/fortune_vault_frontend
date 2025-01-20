// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white text-lg font-bold">ICO Project</h3>
            <p className="mt-2 text-sm">Building the future of decentralized finance.</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} ICO Project. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#privacy-policy"
            className="hover:text-white transition-colors duration-300 text-sm"
          >
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a
            href="#terms-of-service"
            className="hover:text-white transition-colors duration-300 text-sm"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
