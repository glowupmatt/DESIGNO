"use client";

import React, { useState } from "react";
import Navigation from "./Navigation";
import classNames from "classnames";
import Footer from "./Footer";

export type BaseLayoutProps = {
  children: JSX.Element;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div
      className={classNames(
        "w-full flex justify-center items-center flex-col",
        {
          "overflow-hidden": navOpen,
        }
      )}
    >
      <div className={classNames("max-w-[65rem] w-full")}>
        <div className={classNames("flex  justify-center flex-col w-full")}>
          <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>
        <div className="">{children}</div>
        <div className="lg:mt-[10rem]">
          <Footer />
        </div>
      </div>
    </div>
  );
}
