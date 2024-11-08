import React from "react";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <span className="text-white text-2xl font-bold">Gizmo Galaxy</span>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 px-3 py-2 transition duration-150 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 px-3 py-2 transition duration-150 ease-in-out"
            >
              Daily Deals
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 px-3 py-2 transition duration-150 ease-in-out"
            >
              Hot & New
            </a>
          </div>

          {/* Icons for Search and Cart */}
          <div className="flex items-center space-x-4">
            <FiSearch className="text-white h-6 w-6 cursor-pointer hover:text-gray-300 transition duration-150 ease-in-out" />
            <FiShoppingCart className="text-white h-6 w-6 cursor-pointer hover:text-gray-300 transition duration-150 ease-in-out" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              {/* Mobile Menu Icon (can add icon like Hamburger here) */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
