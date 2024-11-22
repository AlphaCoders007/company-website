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
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-black p-2 bg-gradient-to-r from-[#a259ff] to-[#ff6250] rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="text-3xl sm:text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#a259ff] to-[#ff6250]">
                AlphaCoders
                <p className="text-black text-xl">Software Innovations</p>
              </span>
             
              
            </div>
          </Link>
        </div>

        {/* Dropdown Menu Button */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-black font-semibold transition-all hover:text-[#ff6250] lg:block focus:outline-none"
          >
            Menu
          </button>

          {/* Dropdown Links with teal text color */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 p-4  space-y-2 transition-all duration-300 transform scale-95  animate-dropdown"
              style={{
                animation: isDropdownOpen
                  ? "dropdown 0.3s ease-out forwards"
                  : "none",
              }}
            >
              <Link
                href="/"
                className="block text-lg font-semibold text-black hover:text-[#ff6250] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                Home
              </Link>
              <Link
                href="/why-we"
                className="block text-lg font-semibold text-black hover:text-[#ff6250] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                Why We
              </Link>
              <Link
                href="/what-we-do"
                className="block text-lg font-semibold text-black hover:text-[#ff6250] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                What We Do
              </Link>
              <Link
                href="/how-we"
                className="block text-lg font-semibold text-black hover:text-[#ff6250] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                How We
              </Link>
              <Link
                href="/our-craftsmen"
                className="block text-lg font-semibold text-black hover:text-[#ff6250] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                Our Craftsmen
              </Link>
              <Link
                href="/contact-us"
                className="block text-lg font-semibold text-black hover:text-[#ff6250] py-2 px-4 rounded-md transition-all hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/career"
                className="block text-lg font-semibold text-black hover:text-[#ff6250] py-2 px-4 rounded-md transition-all hover:scale-105"
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
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}

export default NavBarSection;