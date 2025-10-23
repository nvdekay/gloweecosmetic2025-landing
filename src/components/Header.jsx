import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faShop, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href="#home"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-md px-2 py-1"
          >
            <FontAwesomeIcon icon={faShop} className="text-pink-500 text-2xl" />
            <span className="text-2xl font-bold text-pink-600">Glowee</span>
          </a>

          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            <a
              href="#about"
              className="text-gray-700 hover:text-pink-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
            >
              About
            </a>
            <a
              href="#eyeshadow"
              className="text-gray-700 hover:text-pink-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
            >
              Eyeshadow
            </a>
            <a
              href="#eyeliner"
              className="text-gray-700 hover:text-pink-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
            >
              Eyeliner
            </a>
            <a
              href="#lipstick"
              className="text-gray-700 hover:text-pink-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
            >
              Lipstick
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-pink-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
            >
              Reviews
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-pink-500 font-medium focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://shopee.vn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Shopee store"
              className="text-pink-500 hover:text-[E87BA8] focus:outline-none focus:ring-2 focus:ring-pink-400 rounded p-2"
            >
              <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="text-pink-500 hover:text-[E87BA8] focus:outline-none focus:ring-2 focus:ring-pink-400 rounded p-2"
            >
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-pink-500 hover:text-[E87BA8] focus:outline-none focus:ring-2 focus:ring-pink-400 rounded p-2"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
          </div>
        </div>

        <nav
          className="md:hidden pb-4 flex gap-4 overflow-x-auto"
          aria-label="Mobile navigation"
        >
          <a
            href="#about"
            className="text-sm text-gray-700 hover:text-pink-500 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
          >
            About
          </a>
          <a
            href="#eyeshadow"
            className="text-sm text-gray-700 hover:text-pink-500 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
          >
            Eyeshadow
          </a>
          <a
            href="#eyeliner"
            className="text-sm text-gray-700 hover:text-pink-500 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
          >
            Eyeliner
          </a>
          <a
            href="#lipstick"
            className="text-sm text-gray-700 hover:text-pink-500 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
          >
            Lipstick
          </a>
          <a
            href="#testimonials"
            className="text-sm text-gray-700 hover:text-pink-500 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
          >
            Reviews
          </a>
          <a
            href="#faq"
            className="text-sm text-gray-700 hover:text-pink-500 font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-400 rounded px-2 py-1"
          >
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
