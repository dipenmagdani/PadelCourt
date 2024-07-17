import React from "react";

function NavBar() {
  return (
    <nav className="border border-zinc-500 w-full h-28 flex justify-between items-center">
      <a className="w-28">
        <img src="./assets/images/padle_logo.svg" alt="Padle_Logo" />
      </a>
      <div className="nav-menu text-white text-opacity-85 flex gap-7 font-druk text-[15px] ">
        <a href="#" className="hover:text-white/50">
          about us
        </a>
        <a href="#" className="hover:text-white/50">
          activities & events
        </a>
        <a href="#" className="hover:text-white/50">
          lessons & academy
        </a>
        <a href="#" className="hover:text-white/50">
          find players
        </a>
        <a href="#" className="hover:text-white/50">
          pro shop
        </a>
        <a href="#" className="hover:text-white/50">
          locations
        </a>
        <a href="#" className="hover:text-white/50">
          contact us
        </a>
      </div>
      <button className="bg-[#FFE96F] rounded-[50px] w-[168px] h-[40px] m-2 font-druk flex items-center justify-center hover:bg-opacity-70 text-sm">
        book now
      </button>
    </nav>
  );
}

export default NavBar;
