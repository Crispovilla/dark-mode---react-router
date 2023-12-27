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
    <div className="relative h-screen px-2 py-2 dark:bg-neutral-900">
      <Navbar />
      <button
        className="
        bg-slate-900 
        text-white 
        px-2
        py-2 
        rounded 
        hover:bg-slate-400 
        dark:bg-slate-200 
        dark:text-slate-900 
        dark:hover:bg-slate-400"
        onClick={handleChangeTheme}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        {theme === "dark" ? <WiMoonWaningCrescent3 /> : <WiDaySunny />}
      </button>
      <Outlet />
    </div>
  );
};

export default ButtonTheme;
