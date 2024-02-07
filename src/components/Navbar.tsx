import React from "react";
import NavbarOptions from "./NavbarOptions";
import SectionLink from "./SectionLink";

const Navbar = () => {
  return (
    <div className="navbar fixed bg-base-100 content-center">
      <SectionLink className="text-3xl" href="landing">
        Nithin Kamal
      </SectionLink>
      <div className=" hidden  lg:flex  ml-auto mr-10">
        <NavbarOptions classnames="menu menu-horizontal px-1" />
      </div>
      <div className="ml-auto mr-10 lg:hidden">
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
