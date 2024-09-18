// components/Header.js

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="w-full py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <span className="triangle-icon bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-6 h-6 inline-block transform rotate-45"></span>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              DEVX
            </h1>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li>
                <Link
                  href="/"
                  className="hover:underline hover:text-pink-500 transition duration-300"
                >
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="hover:underline hover:text-pink-500 transition duration-300"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:underline hover:text-pink-500 transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="hover:underline hover:text-pink-500 transition duration-300"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/enterprise"
                  className="hover:underline hover:text-pink-500 transition duration-300"
                >
                  Enterprise
                </Link>
              </li>
            </ul>
          </nav>

          {/* Buttons on the right */}
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-gray-700 to-gray-900 px-4 py-2 rounded-lg text-white hover:from-gray-600 hover:to-gray-800 transition duration-300">
              Hire Us
            </button>
            <button className="bg-gradient-to-r from-white to-gray-200 text-black px-4 py-2 rounded-lg hover:from-gray-100 hover:to-gray-300 transition duration-300">
              Work
            </button>
          </div>
        </div>
      </header>
      <hr className="border-sky-700" />
    </>
  );
};

export default Header;
