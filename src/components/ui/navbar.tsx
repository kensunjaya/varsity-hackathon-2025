"use client";

import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import React from "react";
import Link from "next/link";

const Navbar = ({ pageName }: { pageName: string }) => {
  const router = useRouter();

  const pathname = usePathname()
  const lastPath = pathname.split("/").filter(Boolean).pop()

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="sticky z-50 top-10">
      <div className="flex items-center">
          <Link href="/">
            <Image
              src="/LOGO.svg"
              alt=""
              className="absolute ml-20 flex justify-center items-start h-16 w-16"
              width={100}
              height={100}
            />
          </Link>
      </div>

      {lastPath !== 'login' && (
        <div className="flex justify-center items-center translate-y-8 mr-4">
          <Image
            src="/navbar-back.svg"
            alt="navbar-bg"
            className="absolute flex justify-center w-xl"
            width={100}
            height={100}
          />
          <ul className="flex justify-evenly items-center absolute w-lg">
            <li className="flex">
              <button onClick={() => handleNavigation("/campaigns")}>
                <Image
                  src="/campaign-list-logo.svg"
                  alt="leaderboard"
                  className="w-6"
                  width={120}
                  height={120}
                />
              </button>
            </li>
            <li className="flex">
              <button onClick={() => handleNavigation("/#impacts")}>
                <Image
                  src="/globe-logo.svg"
                  alt="globe"
                  className="w-6"
                  width={120}
                  height={120}
                />
              </button>
            </li>
            <li className="flex">
              <button className="flex items-center justify-center">
                <Image
                  src="/home-button.svg"
                  alt="home-btn"
                  className="w-2xs"
                  width={120}
                  height={120}
                />
                <h1 className="absolute text-3xl text-black red font-primary">
                  {pageName}
                </h1>
              </button>
            </li>
            <li className="flex">
              <button onClick={() => handleNavigation("/login")}>
                <Image
                  src="/account-logo.svg"
                  alt="account"
                  className="w-5"
                  width={120}
                  height={120}
                />
              </button>
            </li>
            <li className="flex">
              <Image
                src="/login-logo.svg"
                alt="login"
                className="w-6"
                width={120}
                height={120}
              />
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
