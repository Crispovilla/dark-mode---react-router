import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="text-slate-900 dark:text-slate-200 mx-auto px-2">
        <div className="relative inline-flex items-center justify-center">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
