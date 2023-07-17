import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  data: {
    title: string;
    desc: string;
    link: string;
    images: {
      mobileImg: string;
      tabletImg: string;
      desktopImg: string;
    };
  };
};

const ServiceCard = ({ data }: ServiceCardProps) => {
  return (
    <div
      className="flex items-center justify-center rounded-md w-full p-[2.44rem] h-[12.625rem] cursor-pointer lg:p-0 lg:w-full lg:pt-[3rem] lg:h-full lg:relative"
      key={data.title}
    >
      <Link
        href={`/${data.link}`}
        className="relative h-[12.625rem] w-full lg:w-full  lg:h-[19.25rem]"
      >
        <div className="bg-[#00000088] w-full absolute h-full z-[8] rounded-md lg:hover:bg-[#e7826b76] flex justify-center items-center">
          <span className="relative text-white z-10 text-center gap-4 flex flex-col lg:absolute">
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
          </span>
        </div>
        <Image
          alt=""
          src={data.images.mobileImg}
          fill
          quality={100}
          className="object-fill rounded-md md:hidden"
        />
        <Image
          alt=""
          src={data.images.tabletImg}
          fill
          quality={100}
          className="hidden object-fill rounded-md md:block lg:hidden"
        />
        <Image
          alt=""
          src={data.images.desktopImg}
          fill
          quality={100}
          className="hidden object-fill rounded-md lg:block"
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
