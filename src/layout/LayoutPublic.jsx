import React from "react";
import Navbar from "../components/Navbar";
import ButtonTheme from "../components/ButtonTheme";
import { Outlet } from "react-router-dom";
const LayoutPublic = () => {
  return (
    <>
      <div>
        <ButtonTheme />
        {/* <Navbar />
         <main>
          <Outlet />
        </main> */}
      </div>
    </>
  );
};

export default LayoutPublic;
