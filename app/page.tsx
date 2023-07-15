import HeroSlide from "@/components/HomePageComps/HeroSlide";
import Services from "@/components/HomePageComps/Services";
import BrandCharacteristics from "@/components/HomePageComps/BrandCharacteristics";
import BaseLayout from "@/components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
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
