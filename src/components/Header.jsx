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
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-[#FFE9F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={(e) => handleScroll(e, "#home")}
            className="flex items-center gap-2 focus:outline-none px-2 py-1 group"
          >
            <FontAwesomeIcon
              icon={faShop}
              className="text-[#FFF5F9]0 text-3xl group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="text-3xl font-extrabold bg-gradient-to-r from-[#FFF5F9]0 via-rose-500 to-pink-700 bg-clip-text text-transparent">
              Glowee
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8 font-medium">
            {[
              { label: "About", id: "#about" },
              { label: "Eyeshadow", id: "#eyeshadow" },
              { label: "Eyeliner", id: "#eyeliner" },
              { label: "Lipstick", id: "#lipstick" },
              { label: "Reviews", id: "#testimonials" },
              { label: "FAQ", id: "#faq" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={(e) => handleScroll(e, item.id)}
                className="relative text-gray-700 hover:text-pink-600 transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#FFF5F9]0 after:to-rose-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://shopee.vn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Shopee store"
              className="text-[#FFF5F9]0 hover:text-rose-500 p-2 transition-transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="text-[#FFF5F9]0 hover:text-rose-500 p-2 transition-transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-[#FFF5F9]0 hover:text-rose-500 p-2 transition-transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
          </div>
        </div>

        <nav className="md:hidden pb-4 flex gap-5 overflow-x-auto text-sm font-medium">
          {[
            { label: "About", id: "#about" },
            { label: "Eyeshadow", id: "#eyeshadow" },
            { label: "Eyeliner", id: "#eyeliner" },
            { label: "Lipstick", id: "#lipstick" },
            { label: "Reviews", id: "#testimonials" },
            { label: "FAQ", id: "#faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={(e) => handleScroll(e, item.id)}
              className="text-gray-700 hover:text-pink-600 whitespace-nowrap px-2 py-1 transition-all duration-300 hover:scale-105"
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
