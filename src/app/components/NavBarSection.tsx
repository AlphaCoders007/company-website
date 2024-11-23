"use client";
import React, { useState } from "react";
import Link from "next/link";

function NavBarSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility

  return (
    <header className="absolute top-10 left-0 right-0 z-30 max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-center py-5">
        {/* Logo - Centered */}
        <div className="flex justify-center w-full">
          <Link href="/">
            <div className="flex flex-col items-center space-y-1">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10 text-white p-2 bg-gradient-to-r from-[#f70776] to-[#141010] rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="text-3xl sm:text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#f70776] to-[#680747]">
                  AlphaCoders
                </span>
              </div>
              <p className="text-xl text-gray-600">Software Innovations</p>
            </div>
          </Link>
        </div>

        {/* Dropdown Menu Button */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-700 transition-all hover:text-[#1a73e8] lg:block focus:outline-none"
          >
            {/* Dropdown Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Links */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 py-4 px-6 bg-gradient-to-br from-[#1a1c20] via-[#343a40] to-[#1a1c20] text-white rounded-lg shadow-lg backdrop-blur-md animate-dropdown"
              style={{
                animation: isDropdownOpen
                  ? "dropdown 0.3s ease-out forwards"
                  : "none",
              }}
            >
              <Link
                href="/"
                className="block text-lg font-semibold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-[#1a73e8] to-[#ff6b6b] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/why-we"
                className="block text-lg font-semibold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-[#1a73e8] to-[#ff6b6b] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                Why We
              </Link>
              <Link
                href="/what-we-do"
                className="block text-lg font-semibold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-[#1a73e8] to-[#ff6b6b] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                What We Do
              </Link>
              <Link
                href="/how-we"
                className="block text-lg font-semibold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-[#1a73e8] to-[#ff6b6b] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                How We
              </Link>
              <Link
                href="/our-craftsmen"
                className="block text-lg font-semibold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-[#1a73e8] to-[#ff6b6b] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                Our Craftsmen
              </Link>
              <Link
                href="/contact-us"
                className="block text-lg font-semibold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-[#1a73e8] to-[#ff6b6b] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/career"
                className="block text-lg font-semibold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-[#1a73e8] to-[#ff6b6b] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                Career
              </Link>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes dropdown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}

export default NavBarSection;