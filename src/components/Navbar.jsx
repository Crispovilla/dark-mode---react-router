import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="text-slate-900 dark:text-slate-200 ">
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <NavLink to={"/"} className="ml-4">
                Home
              </NavLink>
              <NavLink to={"/services"} className="ml-4">
                Services
              </NavLink>
              <NavLink to={"/about"} className="ml-4">
                About
              </NavLink>
              <NavLink to={"/contact"} className="ml-4">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
