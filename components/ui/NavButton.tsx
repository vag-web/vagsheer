"use client"
import React from "react";

interface Button4Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // Ensure the children prop is required and properly typed
}

const Button4: React.FC<Button4Props> = ({ children, ...props }) => {
  return (
    <button
      className={`appearance-none bg-[#1F1F1F] border border-gray-700 rounded-md shadow-md 
        text-white text-sm font-medium px-4 py-2 cursor-pointer 
        transition duration-200 ease-in-out 
        hover:bg-[#333333] hover:scale-105 hover:shadow-xl 
        active:bg-[#444444] active:shadow-inner 
        focus:outline-none 
        disabled:bg-[#1F1F1F] disabled:border-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed`}
      {...props} // Spread all standard button attributes here
    >
      {children}
    </button>
  );
};

export default Button4;
