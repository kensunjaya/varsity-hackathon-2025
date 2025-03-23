import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute w-[80%] flex justify-center items-center top-0 z-50 py-12">
      <img
        src="/navbar-back.svg"
        alt="navbar-bg"
        className="absolute flex justify-center w-xl"
      />
      <ul className="flex justify-evenly items-center absolute w-lg">
        <li className="flex">
          <img src="/leaderboard-logo.svg" alt="leaderboard" className="w-6" />
        </li>
        <li className="flex">
          <img src="/globe-logo.svg" alt="globe" className="w-6" />
        </li>
        <li className="flex">
          <button className="flex items-center justify-center">
            <img src="/home-button.svg" alt="home-btn" className="w-2xs" />
            <h1 className="absolute text-3xl text-[#EEEEEE]">H O M E</h1>
          </button>
        </li>
        <li className="flex">
          <img src="/history-logo.svg" alt="history" className="w-6" />
        </li>
        <li className="flex">
          <img src="/login-logo.svg" alt="login" className="w-6" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
