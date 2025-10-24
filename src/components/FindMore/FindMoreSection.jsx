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
          <h2 className="text-4xl pb-2 md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-600 via-rose-400 to-mint-400 bg-clip-text text-transparent drop-shadow-sm tracking-tight">
            Mua sắm & Kết nối cùng chúng tôi
          </h2>
          <p className="text-lg text-gray-700 italic max-w-2xl mx-auto leading-relaxed">
            “Hãy đồng hành cùng{" "}
            <span className="font-semibold text-pink-600">Glowee</span> — khám
            phá sản phẩm, tìm cảm hứng và trở thành một phần của cộng đồng yêu
            cái đẹp!”
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
              Mua sắm trên <span className="text-pink-600">Shopee</span>
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Khám phá toàn bộ sản phẩm của chúng tôi và nhận ưu đãi độc quyền!
            </p>
            <ButtonLink
              href="https://shopee.vn/gloweecosmetic"
              variant="social"
              ariaLabel="Ghé thăm cửa hàng Shopee của chúng tôi"
              className="bg-pink-600 hover:bg-pink-500 text-white w-full"
            >
              Ghé thăm cửa hàng
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
              Theo dõi trên <span className="text-blue-600">Facebook</span>
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Cập nhật tin tức, mẹo làm đẹp và hướng dẫn mới nhất từ chúng tôi.
            </p>
            <ButtonLink
              href="https://web.facebook.com/profile.php?id=61581751258990"
              variant="social"
              ariaLabel="Theo dõi chúng tôi trên Facebook"
              className="bg-blue-600 hover:bg-blue-700 text-white w-full hover:bg-blue-500"
            >
              Theo dõi ngay
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
              Kết nối qua <span className="text-rose-500">Instagram</span>
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              Khám phá phong cách, chia sẻ khoảnh khắc.
            </p>
            <ButtonLink
              href="https://www.instagram.com/gloweecosmetic?igsh=MzN1Z3Npd3kwZ2R1"
              variant="social"
              ariaLabel="Theo dõi chúng tôi trên Instagram"
              className="bg-rose-500 hover:bg-rose-600 text-white w-full"
            >
              Theo dõi ngay
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindMoreSection;
