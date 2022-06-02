import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white text-black dark:bg-primary font-bold border-b-black border">
      <div className="flex z-100 p-6 justify-between">
        <h1 className="text-xl font-mono ">Compound Calculator</h1>
        <div className="flex justify">
          <div className={`hidden md:block space-x-6`}>
            <NavLinks />
          </div>

          <button
            type="button"
            aria-label="Toggle Mobile Menu"
            onClick={() => setOpen(!open)}
            className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
          >
            <MenuAlt4Svg menuOpen={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className="p-4 flex flex-col space-y-3 md:hidden">
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
      <Link href="/">
        <a className="text-[#1D1D1D] dark:text-white ">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-[#1D1D1D] dark:text-white ">About</a>
      </Link>
    </>
  );
};
