import React from "react";

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 place-items-center h-56 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2">
        <div>
          <h1 className="text-slate-900  dark:text-slate-200 text-4xl">
            About
          </h1>
        </div>
        <div>
          <h2 className="text-slate-800 dark:text-slate-100 text-lg">
            Subtitle
          </h2>
        </div>
      </div>
    </>
  );
};

export default About;
