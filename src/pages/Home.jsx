import React from "react";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 place-items-center h-56 sm:grid sm:grid-cols-2">
        <div>
          <h1 className="font-sans text-dark dark:text-light text-8xl">Home</h1>
        </div>
        <div>
          <img className="w-96" mt="6" src="logo.png" alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
