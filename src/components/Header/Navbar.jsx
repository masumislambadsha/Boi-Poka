import React from "react";
import { Link } from "react-router";

const links = (
  <>
    <Link to='/' className=" btn">Home</Link>
    <Link to='/about' className="btn">About</Link>
  </>
);

const Navbar = () => {
  return (
    <div className="container mx-auto navbar bg-base-100 mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content backdrop-blur-sm bg-[#ffffff50] rounded-box z-1 mt-3 w-52 shadow space-y-2 p-5"
          >
            <li className="btn bg-transparent ">Home</li>
            <li className="btn bg-transparent  ">About</li>
            <li>
              <a className="btn bg-[#23BE0A] rounded-lg px-[30px] py-[23px] text-white text-lg">
                Sign In
              </a>
            </li>
            <li>
              <a className="btn bg-[#59C6D2] rounded-lg px-[30px] py-[23px] text-white text-lg">
                Sign In
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="md:navbar-end hidden  md:mx-0 mx-auto md:mt-0 mt-6 space-x-4">
        <a className="btn bg-[#23BE0A] rounded-lg px-[30px] py-[23px] text-white text-lg">
          Sign In
        </a>
        <a className="btn bg-[#59C6D2] rounded-lg px-[30px] py-[23px] text-white text-lg">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
