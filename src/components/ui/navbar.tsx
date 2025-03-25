import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky z-50 top-20">
      <div className="flex items-center">
        <img
          src="/LOGO.png"
          alt=""
          className="absolute ml-20 flex justify-center items-start"
        />
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/navbar-back.svg"
          alt="navbar-bg"
          className="absolute flex justify-center w-xl"
        />
        <ul className="flex justify-evenly items-center absolute w-lg">
          <li className="flex">
            <img
              src="/campaign-list-logo.svg"
              alt="leaderboard"
              className="w-6"
            />
          </li>
          <li className="flex">
            <img src="/globe-logo.svg" alt="globe" className="w-6" />
          </li>
          <li className="flex">
            <button className="flex items-center justify-center">
              <img src="/home-button.svg" alt="home-btn" className="w-2xs" />
              <h1 className="absolute text-3xl text-dark">H O M E</h1>
            </button>
          </li>
          <li className="flex">
            <img src="/account-logo.svg" alt="history" className="w-4" />
          </li>
          <li className="flex">
            <img src="/login-logo.svg" alt="login" className="w-6" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
