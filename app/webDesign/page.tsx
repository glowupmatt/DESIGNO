"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import TitleHeader from "@/components/TitleHeader";
import WorkDisplayComp from "@/components/WorkDisplayComp";
import { webDesignData } from "@/data/designData/webDesign";
import Footer from "@/components/Footer";
import Services from "@/components/HomePageComps/Services";

const WebDesign = () => {
  const titleHeaderInfo = {
    title: "Web Design",
    desc: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
  };
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <Navigation setNavOpen={setNavOpen} navOpen={navOpen} />
      <div>
        <TitleHeader titleHeaderInfo={titleHeaderInfo} />
        <div className="flex flex-col items-center justify-center gap-8">
          {webDesignData.map((data, index) => {
            return (
              <div key={data.title}>
                <WorkDisplayComp data={data} />
              </div>
            );
          })}
        </div>
        <Services />
      </div>
    </div>
  );
};

export default WebDesign;
