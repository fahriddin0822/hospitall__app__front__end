import React from "react";
import logo from "../assets/Logo Shapes 56.svg";

const Header = () => {
  return (
    <header className="bg-redHeader max-w-7xl m-auto">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-6 px-4">
        {/* Logo */}
        <div className="logo flex flex-row items-center">
          <img src={logo} alt="" className="h-6 w-6" />
          <span className="pl-2 text-2xl text-customBlue font-bold">
            Saviour Care
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 text-gray-600 font-medium">
          <a href="#home" className="hover:text-customBlue">
            Home
          </a>
          <a href="#find-doctor" className="hover:text-customBlue">
            Find a doctor
          </a>
          <a href="#apps" className="hover:text-customBlue">
            Apps
          </a>
          <a href="#testimonials" className="hover:text-customBlue">
            Testimonials
          </a>
          <a href="#about" className="hover:text-customBlue">
            About us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
