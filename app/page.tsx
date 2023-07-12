"use client";

import Image from "next/image";
import { useState } from "react";
import HeroSlide from "@/components/HomePageComps/HeroSlide";
import Navigation from "@/components/Navigation";
import Services from "@/components/HomePageComps/Services";
import classNames from "classnames";
import GetInTouchButton from "@/components/GetInTouchButton";
import LearnMoreButton from "@/components/LearnMoreButton";
import SubmitButton from "@/components/SubmitButton";

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
        </div>
      </div>
    </div>
  );
}
