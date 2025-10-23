import React from "react";

const ButtonLink = ({
  href,
  children,
  variant = "primary",
  icon,
  ariaLabel,
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-pink-600 text-white hover:bg-[#E87BA8] focus:ring-[#FFF5F9]0",
    secondary:
      "bg-white text-[#E87BA8] border-2 border-pink-600 hover:bg-[#FFF5F9] focus:ring-[#FFF5F9]0",
    social: "bg-[#FFF5F9]0 text-white hover:bg-pink-600 focus:ring-[#FFA8CD]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </a>
  );
};

export default ButtonLink;
