import React from "react";

const AboutSection = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#FFF5F9] via-white to-rose-50 relative overflow-hidden"
    >
      {/* Hình nền trang trí */}
      <div className="absolute top-0 left-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-[#FFD9E6] rounded-full blur-3xl opacity-30 -translate-x-10 sm:-translate-x-16 md:-translate-x-20 -translate-y-10 sm:-translate-y-16 md:-translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-rose-300 rounded-full blur-3xl opacity-25 translate-x-10 sm:translate-x-14 md:translate-x-20 translate-y-6 sm:translate-y-8 md:translate-y-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Phần nội dung bên trái */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r to-[#FFF5F9] via-rose-300 from-pink-600 bg-clip-text text-transparent mb-5 sm:mb-6 leading-tight">
              Welcome to <span className="text-shadow-[#d11d6b]">Glowee!</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-5 leading-relaxed">
              Glowee mang đến cho bạn những sản phẩm mỹ phẩm chất lượng cao, giá cả hợp lý – tôn vinh vẻ đẹp tự nhiên của bạn, vì ai cũng xứng đáng được tự tin và rạng rỡ.
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 sm:mb-5 leading-relaxed">
              Khám phá bộ sưu tập phấn mắt rực rỡ, kẻ mắt tinh tế và son môi sang trọng – tất cả được tạo nên với tình yêu để làm nổi bật vẻ đẹp tự nhiên của bạn.
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Hàng ngàn tín đồ làm đẹp đã tin tưởng Glowee mỗi ngày. Cùng nhau tỏa sáng nhé ✨
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => handleScroll("eyeshadow")}
                className="bg-gradient-to-r cursor-pointer from-pink-600 to-rose-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 text-sm sm:text-base"
              >
                Khám phá sản phẩm
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="border-2 cursor-pointer border-[#FFA8CD] text-pink-600 font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-[#FFF5F9] hover:text-pink-700 transition-all duration-300 text-sm sm:text-base"
              >
                Liên hệ ngay
              </button>
            </div>
          </div>

          {/* Phần hình ảnh bên phải */}
          <div className="relative flex justify-center md:justify-end group mt-10 md:mt-0">
            <div className="rounded-[3rem] sm:rounded-[4rem] md:rounded-[5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <img
                src="/imgs/about.webp"
                alt="Bộ sưu tập mỹ phẩm Glowee với các sản phẩm trang điểm nổi bật"
                className="w-[80vw] sm:w-[60vw] md:w-[30vw] lg:w-[25vw] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
              />
            </div>

            {/* Thẻ nổi */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-3 sm:-left-6 bg-white shadow-xl rounded-2xl px-4 sm:px-6 py-2 sm:py-4 border border-[#FFE9F2]">
              <p className="text-pink-600 font-semibold text-sm sm:text-base md:text-lg flex items-center gap-2">
                💖 100% Khách hàng đánh giá cao
              </p>
            </div>
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-[#FFA8CD] to-rose-400 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md">
              Được tin dùng bởi hơn 10.000 khách hàng
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
