import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full h-[10vh] z-20 bg-black py-5 px-20">
      <nav className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/icon.png" alt="Logo" width={20} height={20} />
          {/* <h1 className="text-2xl text-white">sai krishna</h1> */}
        </div>
        <div className="flex gap-5 text-xl font-[impact] text-white">
          <div>Skills</div>
          <div>.</div>
          <div>Work</div>
          <div>.</div>
          <div>Contact</div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
