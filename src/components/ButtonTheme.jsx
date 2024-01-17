import { useState, useEffect } from "react";
import { WiMoonWaningCrescent3, WiDaySunny } from "react-icons/wi";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const ButtonTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="h-screen px-4 py-4 dark:bg-dark">
      <div>
        <Navbar />
      </div>
      <div className="">
        <button
          className="
        bg-slate-900 
        text-white 
        px-3
        py-3 
        rounded-full
        hover:bg-slate-400 
        dark:bg-slate-200 
        dark:text-slate-900 
        dark:hover:bg-slate-400"
          onClick={handleChangeTheme}
          style={{
            position: "absolute",
            top: "25px",
            right: "25px",
          }}
        >
          {theme === "dark" ? <WiMoonWaningCrescent3 /> : <WiDaySunny />}
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default ButtonTheme;
