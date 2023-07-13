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
      <div className="relative">
        <GetInTouchComp />
      </div>
      <div className="bg-black h-[50.9375rem] flex flex-col gap-[2rem] justify-end items-center text-center">
        <div className="w-[50%] h-[1.3rem] relative">
          <Image
            alt=""
            src="/assets/logo-light.png"
            fill
            className="object-fill"
          />
        </div>
        <div className="text-white flex flex-col gap-[2rem] leading-[0.875rem] w-[90%]">
          <hr className="w-full border-[gray]" />
          <p className="leading-[0.875rem] text-[0.875rem]">OUR COMPANY</p>
          <p className="leading-[0.875rem] text-[0.875rem]">LOCATIONS</p>
          <p className="leading-[0.875rem] text-[0.875rem]">CONTACT</p>
        </div>
        <div className="text-white flex flex-col gap-[2.5rem]">
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
        </div>
        <div className="flex gap-4 pb-[2rem]">
          {socialIcons.map((social, index) => {
            return (
              <div key={index} className="w-[24px] h-[24px] relative">
                <Image alt="" src={social} fill className="object-fill" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
