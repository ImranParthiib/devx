"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-gray-900/95 backdrop-blur-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg transform rotate-45 transition-transform group-hover:rotate-90 duration-300"></span>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              DEVX
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {["Showcase", "Docs", "Blog", "Templates", "Enterprise"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-white hover:text-pink-500 transition duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Free TRIAL🚀
            </button>

            <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 rounded-lg text-white hover:from-purple-500 hover:to-pink-400 transition duration-300 transform hover:scale-105">
              Hire Us
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden bg-gray-900/95 backdrop-blur-sm absolute w-full left-0 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          {["Showcase", "Docs", "Blog", "Templates", "Enterprise"].map(
            (item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-white hover:text-pink-500 transition duration-300 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            )
          )}
          <li className="pt-4">
            <button className="w-full bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300">
              Free Trial🚀!
            </button>
          </li>
          <li className="pt-2">
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 rounded-lg text-white hover:from-purple-500 hover:to-pink-400 transition duration-300">
              Hire Us
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
