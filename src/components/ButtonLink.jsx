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
    primary: "bg-pink-600 text-white hover:bg-[#E87BA8] focus:ring-pink-500",
    secondary:
      "bg-white text-[#E87BA8] border-2 border-pink-600 hover:bg-pink-50 focus:ring-pink-500",
    social: "bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-400",
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
