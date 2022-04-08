import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // <!-- Navbar goes here -->
    <>
      <nav class="bg-slate-900 shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-7">
              <div>
                <a href="#" class="flex items-center py-4 px-2">
                  <span class="font-semibold text-slate-500 text-lg">
                    ToWhatch?
                  </span>
                </a>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div class="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  class="py-4 px-2 text-red-700 border-b-4 font-semibold 
                  visited: border-red-700 "
                >
                  Home
                </Link>
                <Link
                  to="/movies"
                  class="py-4 px-2 text-red-700 border-b-4 font-semibold 
                  peer-visited: border-red-700
                  hover:text-slate-500 transition duration-300"
                >
                  Movies
                </Link>
                <Link
                  to="/geners"
                  class="py-4 px-2 text-red-700 border-b-4 font-semibold 
                  peer-visited: border-red-700
                  hover:text-slate-500 transition duration-300"
                >
                  Geners
                </Link>
                <Link
                  href=""
                  class="py-4 px-2 text-red-700 border-b-4 font-semibold 
                  peer-visited: border-red-700
                  hover:text-slate-500 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div class="hidden md:flex items-center space-x-3 ">
              <Link
                href=""
                class="py-4 px-2 text-red-700 border-b-4 font-semibold 
                peer-visited: border-red-700
                hover:text-slate-500 transition duration-300"
              >
                Log In
              </Link>
              <Link
                to="/register"
                class="py-2 px-2 font-medium text-white bg-red-700 rounded hover:bg-red-600 transition duration-300"
              >
                Sign Up
              </Link>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div class="md:hidden flex items-center">
              <button class="outline-none mobile-menu-button">
                <svg
                  class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div class="hidden mobile-menu">
          <ul class="">
            <li class="active">
              <a
                href="index.html"
                class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
