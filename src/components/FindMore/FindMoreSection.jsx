import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "../ButtonLink";

const FindMoreSection = () => {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-600 via-rose-400 to-mint-400 bg-clip-text text-transparent drop-shadow-sm tracking-tight">
            Shop & Connect With Us
          </h2>
          <p className="text-lg text-gray-700 italic max-w-2xl mx-auto leading-relaxed">
            “Stay connected with{" "}
            <span className="font-semibold text-pink-600">Glowee</span> —
            discover our products, get inspired, and join our beauty-loving
            community!”
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Shopee */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-[#FFE9F2] rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon
                icon={faShoppingBag}
                className="text-pink-600 text-3xl"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2 tracking-wide">
              Shop on <span className="text-pink-600">Shopee</span>
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Discover our full range of products and enjoy exclusive offers!
            </p>
            <ButtonLink
              href="https://shopee.vn/gloweecosmetic"
              variant="social"
              ariaLabel="Visit our Shopee store"
              className="bg-pink-600 hover:bg-pink-500 text-white w-full"
            >
              Visit Store
            </ButtonLink>
          </div>

          {/* Facebook */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-[#FFE9F2] rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-blue-600 text-3xl"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2 tracking-wide">
              Follow on <span className="text-blue-600">Facebook</span>
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Stay updated with our latest news, beauty tips, and tutorials.
            </p>
            <ButtonLink
              href="https://www.facebook.com/GloweeCosmetic"
              variant="social"
              ariaLabel="Follow us on Facebook"
              className="bg-blue-600 hover:bg-blue-700 text-white w-full hover:bg-blue-500"
            >
              Follow Us
            </ButtonLink>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-[#FFE9F2] rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-rose-500 text-3xl"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2 tracking-wide">
              Join us on <span className="text-rose-500">Instagram</span>
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Explore our looks, share your style, and tag your{" "}
              <span className="font-semibold text-pink-600">
                #GloweeMoments
              </span>
              .
            </p>
            <ButtonLink
              href="https://www.instagram.com/gloweecosmetic/"
              variant="social"
              ariaLabel="Follow us on Instagram"
              className="bg-rose-500 hover:bg-rose-600 text-white w-full"
            >
              Follow Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindMoreSection;
