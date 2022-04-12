import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearch] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const [whichLocation, setLocation] = useState("./");
  useEffect(() => {
    setLocation(location.pathname);
  });
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
                  to="/movies/"
                  class="py-4 px-2 text-red-700 border-b-4 font-semibold 
                  visited: border-red-700 "
                >
                  Home
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
            {whichLocation !== "/movies/" ? (
              <div class="relative mx-auto  justify-center text-gray-600 lg:block hidden">
                <input
                  class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search"
                />
                <button
                  type="submit"
                  class="absolute right-0 top-0 mt-3 mr-2"
                  onClick={() => {
                    console.log(location.pathname == "/movies/");
                    console.log(location.pathname);
                    history.push(`/movies/${searchInput}`);
                  }}
                >
                  <svg
                    class="text-gray-600 h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            ) : null}
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
