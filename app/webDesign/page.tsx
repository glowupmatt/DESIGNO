"use client";

import TitleHeader from "@/components/TitleHeader";
import WorkDisplayComp from "@/components/WorkDisplayComp";
import { webDesignData } from "@/data/designData/webDesign";
import ServiceCard from "@/components/ServiceCard";
import { smallServicePageProjectDisplay } from "@/data/homePageInfo";
import BaseLayout from "@/components/BaseLayout";

const WebDesign = () => {
  const titleHeaderInfo = {
    title: "Web Design",
    desc: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    textContainer: "h-[20rem]",
    textStyles: "justify-center",
  };
  return (
    <BaseLayout>
      <>
        <div className="flex flex-col lg:gap-[10rem]">
          <div className="md:p-[2.44rem] lg:p-0">
            <TitleHeader titleHeaderInfo={titleHeaderInfo} />
          </div>
          <div className="flex flex-col items-center justify-center gap-8  p-[2.44rem] lg:p-0 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:justify-center lg:items-center">
            {webDesignData.map((data, index) => {
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
          <div className="flex flex-col lg:p-0 gap-[1.5rem] lg:flex-row">
            {smallServicePageProjectDisplay
              .filter((data) => data.title !== "WEB DESIGN")
              .map((data, index) => {
                return <ServiceCard key={data.title} data={data} />;
              })}
          </div>
        </div>
      </>
    </BaseLayout>
  );
};

export default WebDesign;
