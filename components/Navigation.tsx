"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import classNames from "classnames";

type navigationProps = {
  setNavOpen: Dispatch<SetStateAction<boolean>>;
  navOpen: boolean;
};

const Navigation = ({ setNavOpen, navOpen }: navigationProps) => {
  return (
    <nav>
      <div className="flex justify-between p-[1.5rem] md:p-[4.44rem]">
        <div className="h-[1.6875rem] w-[12.625rem] relative">
          <Image
            alt="logo"
            src="/assets/logo-dark.png"
            fill
            className="object-fill"
          />
        </div>
        <ul className="hidden gap-[2.62rem] md:flex">
          <li className="cursor-pointer hover:decoration-1 hover:underline hover:text-gray">
            OUR COMPANY
          </li>
          <li className="cursor-pointer hover:decoration-1 hover:underline hover:text-gray">
            LOCATIONS
          </li>
          <li className="cursor-pointer hover:decoration-1 hover:underline hover:text-gray">
            CONTACT
          </li>
        </ul>

        <div className="h-[1.25rem] w-[1.25rem] relative md:hidden">
          {navOpen ? (
            <Image
              alt=""
              src="/assets/shared/mobile/icon-close.svg"
              fill
              className="object-fill"
              onClick={() => setNavOpen(false)}
            />
          ) : (
            <Image
              alt=""
              src="/assets/shared/mobile/icon-hamburger.svg"
              fill
              className="object-fill"
              onClick={() => setNavOpen(true)}
            />
          )}
        </div>
      </div>
      <ul
        className={classNames(
          "flex flex-col items-start justify-center w-full p-[1.4rem] bg-black text-white gap-[2rem] font-light tracking-wide text-[20px] absolute z-[1000] md:hidden",
          { hidden: navOpen === false }
        )}
      >
        <li className="hover:underline-offset-4">OUR COMPANY</li>
        <li className="hover:underline-offset-4">LOCATIONS</li>
        <li className="hover:underline-offset-4">CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navigation;
