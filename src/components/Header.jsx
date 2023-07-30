import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="md:h-16 h-14 bg-morado w-screen flex justify-between items-center ">
      <div className="img relative ml-2 top-1 h-14 w-20 pt-2 md:w-40 bg-contain items-center bg-no-repeat md:ml-24">
      </div>
      <div className="md:flex md:justify-between items-center md:my-auto ">
        <a
          className="lg:mr-16 md:text-3xl md:my-auto hidden md:visible  md:text-white"
          href=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </a>
        <div className="hover:scale-105 m-auto">
          <a
            className="lg:ml-16 text-xl md:text-2xl border-solid border-b-[1px] text-skin"
            href=""
          >
            Portafolio
          </a>
        </div>
      </div>
      <div className="h-8 w-auto md:h-10 mr-2 hover:scale-105 border-skin rounded-xl border-[1px]">
        <button className="md:w-40 text-xl text-skin md:text-2xl px-1 rounded-lg relative top-[2px] md:mr-24">
          Contactame
        </button>
      </div>
    </div>
  );
};

export default Header;
