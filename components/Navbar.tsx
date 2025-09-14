"use client";
import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="bg-black shadow-lg py-5 sticky top-0 z-50">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href=""
          className="text-3xl font-bold text-white rounded-lg p-2 transition-transform transform hover:scale-105"
        >
          LOGO
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="#home"
            className="text-gray-200 hover:text-rose-500 transition-colors duration-200 font-medium rounded-lg p-3"
          >
            Home
          </Link>
          <Link
            href="#categories"
            className="text-gray-200 hover:text-rose-500 transition-colors duration-200 font-medium rounded-lg p-3"
          >
            Categories
          </Link>
          <Link
            href="#about"
            className="text-gray-200 hover:text-rose-500 transition-colors duration-200 font-medium rounded-lg p-3"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-gray-200 hover:text-rose-500 transition-colors duration-200 font-medium rounded-lg p-3"
          >
            Contact
          </Link>
          <Link
            href="/artists"
            className="bg-white text-black font-extralight py-3 px-6 rounded-full shadow-lg hover:bg-black hover:text-white hover:outline-2 outline-white transition-all duration-200 transform hover:scale-105"
          >
            Book Appointment
          </Link>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-600 hover:text-rose-500 focus:outline-none rounded-lg p-2 transition-colors duration-200"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 border-t border-gray-200">
          <Link
            href="#home"
            className="block py-3 px-6 text-gray-200 hover:text-[#ff3479] rounded-lg transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#categories"
            className="block py-3 px-6 text-gray-200 hover:text-[#ff3479] rounded-lg transition-colors duration-200"
          >
            Categories
          </Link>
          <Link
            href="#about"
            className="block py-3 px-6 text-gray-200 hover:text-[#ff3479] rounded-lg transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="block py-3 px-6 text-gray-200 hover:text-[#ff3479] rounded-lg transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="/artists"
            className="block py-3 px-6 bg-white text-black font-extralight hover:bg-black hover:text-white hover:outline-2 outline-white rounded-full transition-all duration-200 mt-4 mx-6 text-center"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
