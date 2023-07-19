import { formInputObj } from "@/app/contact/page";
import React from "react";
import Image from "next/image";
type SuccessPageProps = {
  formInput: formInputObj;
};
const SuccessPage = ({ formInput }: SuccessPageProps) => {
  return (
    <div className="h-screen bg-white flex justify-center items-center">
      <div className="text-white flex flex-col justify-center items-center gap-[1rem] bg-peach p-[5rem] rounded-md">
        <div className="relative w-[80px] h-[80px]">
          <Image
            alt=""
            src="/check.svg"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
        <h1>Thank you {formInput.name}</h1>
        <p>Thanks for your interest! We hope you hope to work with you soon.</p>
      </div>
    </div>
  );
};

export default SuccessPage;
