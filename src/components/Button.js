import React from "react";

const VARIANTS = {
  default: "bg-gray-300 hover:bg-gray-400 text-gray-800",
  primary: "bg-teal-500 hover:bg-teal-600 text-white",
};

const SIZES = {
  medium: "",
  small: "text-sm",
};

const Button = ({ children, onClick, variant, size }) => (
  <button
    className={`py-2 px-4 font-semibold leading-tight shadow rounded ${SIZES[size]} ${VARIANTS[variant]}`}
    onClick={onClick}
  >
    <span>{children}</span>
  </button>
);

Button.defaultProps = {
  onClick: null,
  size: "medium",
  variant: "default",
};

export default Button;
