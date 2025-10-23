import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFF5F9] border-t border-[#FFD9E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faShop} className="text-[#FFF5F9]0 text-xl" />
            <span className="text-xl font-bold text-pink-600">Glowee</span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-gray-600 text-sm">
              Made with{" "}
              <FontAwesomeIcon icon={faHeart} className="text-[#FFF5F9]0" /> for
              beauty lovers everywhere
            </p>
            <p className="text-gray-500 text-xs mt-1">
              &copy; {currentYear} Glowee. All rights reserved.
            </p>
          </div>

          <nav className="flex gap-6" aria-label="Footer navigation">
            <a
              href="#about"
              className="text-gray-600 hover:text-[#FFF5F9]0 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA8CD] rounded px-2 py-1"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-[#FFF5F9]0 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA8CD] rounded px-2 py-1"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-[#FFF5F9]0 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFA8CD] rounded px-2 py-1"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
