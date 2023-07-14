import GetInTouchComp from "./GetInTouchComp";
import Image from "next/image";

const Footer = () => {
  const socialIcons = [
    "/assets/shared/desktop/icon-facebook.svg",
    "/assets/shared/desktop/icon-instagram.svg",
    "/assets/shared/desktop/icon-pinterest.svg",
    "/assets/shared/desktop/icon-twitter.svg",
    "/assets/shared/desktop/icon-youtube.svg",
  ];
  return (
    <div>
      <div className="relative flex justify-center">
        <GetInTouchComp />
      </div>
      <div className="bg-black h-[50.9375rem] w-full flex justify-center items-center md:h-[auto] lg:w-screen">
        <div className="flex flex-col gap-[2rem] mt-[10rem] w-screen justify-end items-center text-center md:h-[26.4375rem] md:py-[4rem] md:px-[4rem] lg:w-[69.438rem] md:mt-0">
          <div className="w-full flex flex-col justify-center items-center gap-[2rem] md:flex-row md:w-full md:px-[2.44rem]">
            <div className="h-[1.3rem] relative w-[9.625rem] md:w-[12.625rem]">
              <Image
                alt=""
                src="/assets/logo-light.png"
                fill
                className="object-fill"
              />
            </div>
            <hr className="w-[90%] border-[gray] md:hidden" />
            <div className="text-white flex flex-col gap-[2rem] leading-[0.875rem] w-full md:flex-row md:justify-end md:gap-[2.63rem]">
              <p className="leading-[0.875rem] text-[0.875rem] cursor-pointer hover:decoration-1 hover:underline hover:text-gray-light">
                OUR COMPANY
              </p>
              <p className="leading-[0.875rem] text-[0.875rem] cursor-pointer hover:decoration-1 hover:underline hover:text-gray-light">
                LOCATIONS
              </p>
              <p className="leading-[0.875rem] text-[0.875rem] cursor-pointer hover:decoration-1 hover:underline hover:text-gray-light">
                CONTACT
              </p>
            </div>
          </div>
          <hr className="hidden border-white md:block md:w-full" />
          <div className="text-white flex flex-col gap-[2.5rem] md:flex-row md:text-start md:w-full md:justify-between">
            <div className="flex flex-col gap-1 text-4">
              <p className="text-[1rem]">Designo Central Office</p>
              <p className="text-[.8rem] font-light text-gray-light">
                3886 Wellington Street
              </p>
              <p className="text-[.8rem] font-light text-gray-light">
                Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-1 text-4">
                <p className="text-[1rem]">Contact Us (Central Office)</p>
                <p className="text-[.8rem] font-light text-gray-light">
                  P : +1 253-863-8967
                </p>
                <p className="text-[.8rem] font-light text-gray-light">
                  M : contact@designo.co
                </p>
              </div>
            </div>
            <div className="flex gap-4 pb-[2rem] md:pb-0 md:items-end">
              {socialIcons.map((social, index) => {
                return (
                  <div
                    key={index}
                    className="w-[24px] h-[24px] relative md:pb-0 cursor-pointer"
                  >
                    <Image alt="" src={social} fill className="object-fill" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
