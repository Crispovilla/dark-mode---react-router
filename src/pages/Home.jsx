import React from "react";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 place-items-center h-56 sm:grid sm:grid-cols-2">
        <div>
          <h1 className="text-slate-900 dark:text-slate-200 text-4xl">Home</h1>
        </div>
        <div>
          <img className="w-24" src="vite.svg" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
