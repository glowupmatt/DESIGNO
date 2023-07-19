"use client";

import HeroSlide from "@/components/HomePageComps/HeroSlide";
import Services from "@/components/HomePageComps/Services";
import BrandCharacteristics from "@/components/HomePageComps/BrandCharacteristics";
import BaseLayout from "@/components/BaseLayout";
import { useState } from "react";

export default function Home() {
  const [successfulInput, setSuccessfulInput] = useState(false);
  return (
    <BaseLayout
      successfulInput={successfulInput}
      setSuccessfulInput={setSuccessfulInput}
    >
      <>
        <HeroSlide />
        <div className="p-[2.44rem] relative lg:flex lg:flex-col lg:w-full lg:items-center lg:justify-center ">
          <Services />
        </div>
        <BrandCharacteristics />
      </>
    </BaseLayout>
  );
}
