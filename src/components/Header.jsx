import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faShop, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={(e) => handleScroll(e, "#home")}
            className="flex items-center gap-2 focus:outline-none px-2 py-1 group cursor-pointer"
          >
            <img
              src="/imgs/logo.png"
              className="w-44 h-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-700 bg-clip-text text-transparent"
              alt="Glowee Logo"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            {[
              { label: "About", id: "#about" },
              { label: "Producs", id: "#eyeshadow" },
              { label: "Reviews", id: "#testimonials" },
              { label: "FAQ", id: "#faq" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleScroll(e, item.id)}
                className="relative text-gray-700 hover:text-pink-600 transition-colors duration-300 cursor-pointer after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-pink-400 after:to-rose-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://vn.shp.ee/5A6bCxm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Shopee store"
              className="text-rose-500 hover:text-pink-600 p-2 transition-transform hover:scale-110 cursor-pointer"
            >
              <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61581751258990"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="text-blue-600 hover:text-blue-700 p-2 transition-transform hover:scale-110 cursor-pointer"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/gloweecosmetic?igsh=MzN1Z3Npd3kwZ2R1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-pink-500 hover:text-rose-600 p-2 transition-transform hover:scale-110 cursor-pointer"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden pb-4 flex gap-5 overflow-x-auto text-sm font-medium">
          {[
            { label: "About", id: "#about" },
            { label: "Products", id: "#eyeshadow" },
            { label: "Reviews", id: "#testimonials" },
            { label: "FAQ", id: "#faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleScroll(e, item.id)}
              className="text-gray-700 hover:text-pink-600 whitespace-nowrap px-2 py-1 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
