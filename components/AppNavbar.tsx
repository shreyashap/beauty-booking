"use client";
import Link from "next/link";
import { useState } from "react";

const AppNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-lg py-5 sticky top-0 z-50">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold text-white rounded-lg p-2 transition-transform transform hover:scale-105"
        >
          LOGO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/artists"
            className="text-gray-200 hover:text-rose-500 transition-colors duration-200 font-medium rounded-lg p-3"
          >
            Artists
          </Link>
          <Link
            href="/my-bookings"
            className="text-gray-200 hover:text-rose-500 transition-colors duration-200 font-medium rounded-lg p-3"
          >
            My Bookings
          </Link>
          <Link
            href="/"
            className="bg-white text-black font-extralight py-3 px-6 rounded-full shadow-lg hover:bg-black hover:text-white hover:outline-2 outline-white transition-all duration-200 transform hover:scale-105"
          >
            Home
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-200 hover:text-rose-500 focus:outline-none rounded-lg p-2 transition-colors duration-200"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 border-t border-gray-700 bg-black">
          <Link
            href="/artists"
            className="block py-3 px-6 text-gray-200 hover:text-rose-500"
          >
            Artists
          </Link>
          <Link
            href="/my-bookings"
            className="block py-3 px-6 text-gray-200 hover:text-rose-500"
          >
            My Bookings
          </Link>
          <Link
            href="/"
            className="block py-3 px-6 bg-white text-black font-extralight hover:bg-black hover:text-white rounded-full m-4 text-center"
          >
            Home
          </Link>
        </div>
      )}
    </header>
  );
};

export default AppNavbar;
