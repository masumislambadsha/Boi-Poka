import React from "react";
import { Link } from "react-router";


const links = (
  <>
    <Link to="/" className="btn btn-ghost">Home</Link>
    <Link to="/about" className="btn btn-ghost">About</Link>
    <Link to="/readList" className="btn btn-ghost">Read List</Link>
  </>
);

const Navbar = () => {
  return (
    <div className="container mx-auto navbar bg-base-100 mt-5 px-4 sm:px-6 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content backdrop-blur-sm bg-[#ffffffcc] rounded-box z-[1] mt-3 w-56 shadow space-y-2 p-4">
            {links}
            <li>
              <a className="btn bg-[#23BE0A] rounded-lg px-5 py-3 text-white text-base">Sign In</a>
            </li>
            <li>
              <a className="btn bg-[#59C6D2] rounded-lg px-5 py-3 text-white text-base">Sign Up</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Book Vibe</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>

      <div className="navbar-end gap-3 hidden md:flex">
        <a className="btn bg-[#23BE0A] rounded-lg px-5 py-3 text-white text-base">Sign In</a>
        <a className="btn bg-[#59C6D2] rounded-lg px-5 py-3 text-white text-base">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
