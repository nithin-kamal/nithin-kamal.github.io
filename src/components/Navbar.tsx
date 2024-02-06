import React from "react";
import NavbarOptions from "./NavbarOptions";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar fixed bg-base-100">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href="">
          Nithin Kamal
        </Link>
      </div>
      <div className=" hidden lg:flex">
        <NavbarOptions classnames="menu menu-horizontal px-1" />
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <NavbarOptions classnames="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-screen" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
