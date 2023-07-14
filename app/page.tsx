"use client";
import { useState } from "react";
import HeroSlide from "@/components/HomePageComps/HeroSlide";
import Navigation from "@/components/Navigation";
import Services from "@/components/HomePageComps/Services";
import classNames from "classnames";
import BrandCharacteristics from "@/components/HomePageComps/BrandCharacteristics";
import { homePageProjectDisplay } from "@/data/homePageInfo";
import Footer from "@/components/Footer";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="max-w-[65rem] w-full">
        <div
          className={classNames("flex  justify-center flex-col w-full", {
            "overflow-hidden max-h-screen": navOpen === true,
          })}
        >
          <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>
        <HeroSlide />
        <div className="p-[2.44rem] relative lg:flex lg:flex-col lg:w-full lg:items-center lg:justify-center ">
          <Services />
        </div>
        <BrandCharacteristics />
      </div>

      <Footer />
    </div>
  );
}
