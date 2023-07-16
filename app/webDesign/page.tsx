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
  };
  return (
    <BaseLayout>
      <>
        <div className="max-w-[65rem] w-full">
          <TitleHeader titleHeaderInfo={titleHeaderInfo} />
        </div>
        <div className="flex flex-col items-center justify-center gap-8 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:justify-center lg:items-center py-[2.44rem]">
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
        <div className="flex flex-col p-[2.44rem] lg:p-0 lg:pb-[2.44rem] lg:pt-[6.44rem] gap-[1.5rem] lg:flex-row">
          {smallServicePageProjectDisplay
            .filter((data) => data.title !== "WEB DESIGN")
            .map((data, index) => {
              return <ServiceCard key={data.title} data={data} />;
            })}
        </div>
      </>
    </BaseLayout>
  );
};

export default WebDesign;
