import Link from "next/link";
import React, { useState } from "react";
import Darkmode from "./DarkMode";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white text-black  font-semibold dark:bg-darkPrimary border-b-black border-b dark:border-0 ">
      <div className="flex z-100 p-6 justify-between max-w-screen-xl mx-auto">
        <h1 className="text-xl font-mono font-bold dark:text-white">
          My<span className="text-primary">Staff</span>.online
        </h1>
        <div className="flex justify">
          <div className={`hidden tablet:block space-x-6`}>
            <NavLinks />
          </div>

          <button
            type="button"
            aria-label="Toggle Mobile Menu"
            onClick={() => setOpen(!open)}
            className="rounded tablet:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
          >
            <MenuAlt4Svg menuOpen={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className="p-4 flex flex-col space-y-3 tablet:hidden">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const MenuAlt4Svg: React.FC<{ menuOpen: Boolean }> = ({ menuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`transition duration-100 ease h-8 w-8 ${
      menuOpen ? "transform rotate-90" : ""
    } fill-current dark:text-white text-black`}
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

const NavLinks = () => {
  return (
    <>
      <Darkmode />
      <Link href="/">
        <a className="text-black dark:text-white ">Rewards</a>
      </Link>
      <Link href="/">
        <a className="text-black dark:text-white ">Job Posts</a>
      </Link>
      <Link href="/">
        <a className="text-black dark:text-white ">About Us</a>
      </Link>
      <Link href="/">
        <a className="text-black dark:text-white ">Contact Us</a>
      </Link>
      <Link href="/">
        <a className="text-black dark:text-white bg-primary p-4 rounded-md">
          Join Us
        </a>
      </Link>
      <Link href="/">
        <a className="text-black dark:text-white ">Sign In</a>
      </Link>
    </>
  );
};
