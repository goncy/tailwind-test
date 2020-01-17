import React from "react";

const Button = ({ children }) => (
  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
    <span>{children}</span>
  </button>
);

export default Button;
