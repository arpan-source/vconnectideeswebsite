import React from 'react';
import logo from "../assets/Images/vConnect_IQ1.png";

export const Logo = ({ className = "" }) => {
  return (
    <img
      src={logo}
      alt="Logo"
      className={`block max-w-full object-contain ${className}`}
    />
  );
};