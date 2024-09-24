import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="flex justify-between items-center py-4 mx-auto px-4 md:px-8 lg:px-12">
        <div className="logo font-black">
          <span className="text-green-70">&lt;</span>
          <span className="font-extrabold">Pass</span>
          <span className="text-green-500 font-normal"> Manager/&gt;</span>
        </div>
        <button className="flex items-center gap-2">
          <img className="w-6 md:w-8" src="/public/Images/github-mark.png" alt="GitHub Logo" />
          <span className="hidden md:block font-bold">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
