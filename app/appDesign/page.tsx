"use client";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import TitleHeader from "@/components/TitleHeader";
import WorkDisplayComp from "@/components/WorkDisplayComp";
import { appDesignData } from "@/data/designData/appDesign";
import { homePageProjectDisplay } from "@/data/homePageInfo";
import { useState } from "react";

const AppDesign = () => {
  const titleHeaderInfo = {
    title: "Web Design",
    desc: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
  };
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="max-w-[65rem] w-full">
        <Navigation setNavOpen={setNavOpen} navOpen={navOpen} />
        <div>
          <TitleHeader titleHeaderInfo={titleHeaderInfo} />
          <div className="flex flex-col items-center justify-center gap-8  lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:justify-center lg:items-center p-[2.44rem] lg:mb-[16rem]">
            {appDesignData.map((data, index) => {
              return (
                <div
                  key={data.title}
                  className="flex items-center justify-center cursor-pointer"
                >
                  <WorkDisplayComp data={data} />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col p-[2.44rem] gap-[1.5rem] mb-[12rem] lg:flex-row">
            {homePageProjectDisplay
              .filter((data) => data.title !== "APP DESIGN")
              .map((data, index) => {
                return <ServiceCard key={data.title} data={data} />;
              })}
          </div>
        </div>
      </div>
      <div className="lg:mt-[25rem]">
        <Footer />
      </div>
    </div>
  );
};

export default AppDesign;
