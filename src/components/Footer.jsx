import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#FFF5F9] to-[#FFD9E6] border-t border-pink-200 shadow-inner overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3 group">
          <img
            src="/imgs/logo.png"
            className="w-44 h-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-700 bg-clip-text text-transparent"
            alt="Glowee Logo"
          />
        </div>

        {/* Middle text */}
        <div className="text-center md:text-left flex flex-col gap-1">
          <p className="text-gray-700 text-sm flex items-center justify-center md:justify-start gap-1">
            Made with
            <FontAwesomeIcon
              icon={faHeart}
              className="text-pink-500 animate-pulse mx-1"
            />
            for beauty lovers everywhere
          </p>
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Glowee. All rights reserved.
          </p>
          <div className="hover:shadow-[0_0_25px_rgba(255,105,180,0.6)] transition-all duration-500">
            <a
              href="https://khanhnvd.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-xs font-semibold text-pink-700 hover:text-rose-800 transition-all duration-300 tracking-wide italic"
            >
              Designed & Developed by{" "}
              <span className="font-extrabold bg-gradient-to-r from-rose-400 via-pink-500 to-red-400 bg-clip-text text-transparent hover:drop-shadow-[0_0_8px_rgba(255,105,180,0.8)]">
                Nguyen Vu Dang Khanh
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
