import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCheckCircle,
  faExclamationCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);
    targetDate.setHours(23, 59, 59, 999);

    const difference = targetDate - new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Thông tin của bạn đã được gửi.",
      });
      setFormData({ fullName: "", email: "", phone: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
      <div className="text-3xl md:text-5xl font-bold text-pink-600 mb-1">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs md:text-sm text-gray-600 font-medium uppercase">
        {label}
      </div>
    </div>
  );

  return (
    <section id="countdown-form" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {/* Huy hiệu tiêu đề nhỏ */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFE4EC] to-[#FFD6E8] px-5 py-2.5 rounded-full shadow-sm mb-5 border border-pink-200 animate-fade-in">
            <FontAwesomeIcon
              icon={faClock}
              className="text-pink-600 text-lg animate-spin-slow"
            />
            <span className="text-pink-700 font-semibold tracking-wide">
              Ưu Đãi Đặc Biệt
            </span>
          </div>

          {/* Tiêu đề chính */}
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 
      bg-gradient-to-r from-[#FF5FA2] via-[#FF80B5] to-[#FFA6C9] 
      bg-clip-text text-transparent 
      drop-shadow-[0_2px_10px_rgba(255,160,200,0.4)] 
      tracking-wide leading-tight animate-text-glow"
          >
            Giảm Giá Đến 50% Toàn Bộ Sản Phẩm
          </h2>

          {/* Mô tả phụ */}
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            ⏰ Thời gian có hạn!{" "}
            <span className="font-semibold text-pink-600">Đăng ký ngay</span> để
            nhận ưu đãi đặc biệt từ
            <span className="font-bold text-pink-500"> Glowee</span>.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          <TimeBox value={timeLeft.days} label="Ngày" />
          <div className="flex items-center text-3xl md:text-5xl font-bold text-pink-600">
            :
          </div>
          <TimeBox value={timeLeft.hours} label="Giờ" />
          <div className="flex items-center text-3xl md:text-5xl font-bold text-pink-600">
            :
          </div>
          <TimeBox value={timeLeft.minutes} label="Phút" />
          <div className="flex items-center text-3xl md:text-5xl font-bold text-pink-600">
            :
          </div>
          <TimeBox value={timeLeft.seconds} label="Giây" />
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg p-6 md:p-8 border border-pink-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <FontAwesomeIcon icon={faUser} className="mr-2 text-pink-600" />
                Họ và Tên
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Nguyễn Văn A"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-pink-600"
                />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="email@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-pink-600"
                />
                Số Điện Thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="0912345678"
                required
              />
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-lg flex items-center gap-2 ${
                  status.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                <FontAwesomeIcon
                  icon={
                    status.type === "success"
                      ? faCheckCircle
                      : faExclamationCircle
                  }
                />
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 cursor-pointer rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-pink-600 hover:bg-pink-700 text-white"
              }`}
            >
              {isSubmitting ? "Đang gửi..." : "Gửi Thông Tin"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
