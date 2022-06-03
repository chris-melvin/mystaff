import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black  font-semibold dark:bg-darkPrimary border-t-black border-t dark:border-0 ">
      <div className="flex z-100 p-6 justify-between max-w-screen-xl mx-auto">
        <div>
          <h1 className="text-xl font-mono font-bold dark:text-white">
            My<span className="text-primary">Staff</span>.online
          </h1>
          <p className="text-xs dark:text-white">© 2022 MyStaff.Online</p>
        </div>
        <div>
          <div className="space-x-2 font-light text-sm">
            <NavLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const NavLinks = () => {
  return (
    <>
      <Link href="/">
        <a className="text-black dark:text-white ">Home</a>
      </Link>
      <Link href="/">
        <a className="text-black dark:text-white ">About</a>
      </Link>
      <Link href="/">
        <a className="text-black dark:text-white ">Terms of Use</a>
      </Link>
      <Link href="/">
        <a className="text-black dark:text-white ">Privacy Policy</a>
      </Link>
      <Link href="/">
        <a className="text-black dark:text-white ">Contact Us</a>
      </Link>
    </>
  );
};
