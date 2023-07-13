"use client";
import { useState } from "react";
import HeroSlide from "@/components/HomePageComps/HeroSlide";
import Navigation from "@/components/Navigation";
import Services from "@/components/HomePageComps/Services";
import classNames from "classnames";
import BrandCharacteristics from "@/components/HomePageComps/BrandCharacteristics";
import Footer from "@/components/Footer";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <div
        className={classNames({
          "overflow-hidden max-h-screen": navOpen === true,
        })}
      >
        <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />
        <HeroSlide />
        <div className="relative">
          <Services />
          <BrandCharacteristics />
        </div>
        <Footer />
      </div>
    </div>
  );
}
