import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#FFF5F9] to-[#FFD9E6] border-t border-pink-200 shadow-inner overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo & Slogan */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/imgs/logo.png" alt="Glowee Logo" className="w-44 mb-4" />
        </div>

        {/* Thông tin liên hệ */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-wide bg-gradient-to-r from-pink-600 via-rose-400 to-pink-400 bg-clip-text text-transparent">
            GLOWEE COSMETICS
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-pink-500 w-4"
              />
              <span>Đại học FPT, Hà Nội</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-green-400 w-4" />
              <a
                href="tel:0971687208"
                className="hover:text-pink-600 transition"
              >
                0971 687 208
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-pink-500 w-4"
              />
              <a
                href="mailto:gloweecosmetic@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition"
              >
                gloweecosmetic@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-blue-500 w-4"
              />
              <a
                href="https://www.facebook.com/profile.php?id=61581751258990&mibextid=wwXIfr&rdid=v9i0cwOFdwpMV9aN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D2ZXcetWc%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div className="text-center md:text-left">
          <p className="text-xs text-gray-500 mt-4 italic">
            “Glowee: Cả hội cùng xinh - Chị đẹp em slay.”
          </p>
          <p className="text-gray-500 text-xs mt-2 ml-10">
            &copy; {currentYear} Glowee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
