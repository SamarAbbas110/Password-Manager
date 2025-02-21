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
      </div>
    </nav>
  );
};

export default Navbar;
