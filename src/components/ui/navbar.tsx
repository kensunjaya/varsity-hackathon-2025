import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({pageName} : {pageName: string} ) => {
  return (
    <nav className="sticky z-50 top-10">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src="/LOGO.svg"
            alt=""
            className="absolute ml-20 flex justify-center items-start h-16 w-16"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/navbar-back.svg"
          alt="navbar-bg"
          className="absolute flex justify-center w-xl"
          width={100}
          height={100}
        />
        <ul className="flex justify-evenly items-center absolute w-lg">
          <li className="flex">
            <Link href={"/campaigns"}>
              <Image
                src="/campaign-list-logo.svg"
                alt="leaderboard"
                className="w-6"
                width={120}
                height={120}
              />
            </Link>
          </li>
          <li className="flex">
            <Link href={"/#impacts"}>
              <Image src="/globe-logo.svg" alt="globe" className="w-6" width={120} height={120} />
            </Link>
          </li>
          <li className="flex">
            <button className="flex items-center justify-center">
              <img src="/home-button.svg" alt="home-btn" className="w-2xs" />
              <h1 className="absolute text-3xl text-dark">{pageName}</h1>
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
