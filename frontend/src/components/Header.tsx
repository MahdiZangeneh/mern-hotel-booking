import { Link, NavLink } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import logo from "./../assets/logo.png";
import { useState } from "react";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-white py-10 shadow z-40">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </span>

        {/* Hamburger menu icon */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu links */}
        <div
          className={`absolute top-[120px] left-0 right-0 bg-white z-40 shadow transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <span className="flex flex-col lg:flex-row lg:space-x-2">
            {isLoggedIn ? (
              <>
                <Link
                  to="/"
                  className="block text-center text-white text-sm py-2 bg-custom-gray border-b-2 border-gray-800"
                >
                  HOME
                </Link>
                <Link
                  className="block text-center text-white text-sm py-2 bg-custom-gray border-b-2 border-gray-800"
                  to="/my-bookings"
                >
                  My Bookings
                </Link>
                <Link
                  className="block text-center text-white text-sm py-2 bg-custom-gray border-b-2 border-gray-800"
                  to="/my-hotels"
                >
                  My Hotels
                </Link>
                <SignOutButton />
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="block text-center text-white text-sm py-2 bg-custom-gray border-b-2 border-gray-800"
                >
                  HOME
                </Link>
                <Link
                  to="/s"
                  className="block text-center text-white text-sm py-2 bg-custom-gray border-b-2 border-gray-800"
                >
                  ACCOMMODATIONS
                </Link>
                <Link
                  to="/s"
                  className="block text-center text-white text-sm py-2 bg-custom-gray border-b-2 border-gray-800"
                >
                  CONTACT
                </Link>
                <Link
                  to="/sign-in"
                  className="block text-center text-white text-sm py-2 bg-custom-gray border-b-2 border-gray-800"
                >
                  SIGN IN
                </Link>
              </>
            )}
          </span>
        </div>

        <span className="hidden md:flex space-x-2">
          {isLoggedIn ? (
            <>
              <NavLink
                to="/"
                className="flex items-center text-black px-3 text-md border-b-2 border-transparent hover:border-gray-200 transition-colors duration-300 ease-in-out"
              >
                Home
              </NavLink>
              <NavLink
                className="flex items-center text-black px-3 text-md border-b-2 border-transparent hover:border-gray-200 transition-colors duration-300 ease-in-out"
                to="/my-bookings"
              >
                My Bookings
              </NavLink>
              <NavLink
                className="flex items-center text-black px-3 text-md border-b-2 border-transparent hover:border-gray-200 transition-colors duration-300 ease-in-out"
                to="/my-hotels"
              >
                My Hotels
              </NavLink>
              <SignOutButton />
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className="flex items-center text-black px-3 text-sm border-b-2 border-transparent hover:border-gray-200 transition-colors duration-300 ease-in-out"
              >
                HOME
              </NavLink>
              {/* <NavLink
                to="/s"
                className="flex items-center text-black px-3 text-sm border-b-2 border-transparent hover:border-gray-200 transition-colors duration-300 ease-in-out"
              >
                ACCOMMODATIONS
              </NavLink>
              <NavLink
                to="/s"
                className="flex items-center text-black px-3 text-sm border-b-2 border-transparent hover:border-gray-200 transition-colors duration-300 ease-in-out"
              >
                CONTACT
              </NavLink> */}
              <NavLink
                to="/sign-in"
                className="flex items-center text-black px-3 text-sm border-b-2 border-transparent hover:border-gray-200 transition-colors duration-300 ease-in-out"
              >
                SIGN IN
              </NavLink>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
