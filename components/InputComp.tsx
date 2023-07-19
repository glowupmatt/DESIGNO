"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { formInputObj, inputFormArray } from "@/app/contact/page";
import classNames from "classnames";
import Image from "next/image";

type InputCompProps = {
  input: {
    userInfoKey: string;
    inputType: string;
    placeHolder: string;
    pattern: RegExp;
    value: string;
  };
  index: number;
  formInput: formInputObj;
  setFormInput: Dispatch<SetStateAction<formInputObj>>;
};
const InputComp = ({ input, setFormInput }: InputCompProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<boolean>();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setFormInput((prev) => {
      return {
        ...prev,
        [input.userInfoKey]: e.target.value,
      };
    });
    const regex = new RegExp(input.pattern);
    if (!regex.test(inputValue)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div
      className={classNames(
        "w-full flex flex-row gap-3  border-t-0 border-solid border-[1px] border-l-0 border-r-0 p-4 justify-center items-center hover:border-b-[4px]",
        { "border-[#FF5733]": error },
        { "border-[#ffffff]": !error }
      )}
    >
      <input
        required
        type={input.inputType}
        placeholder={input.placeHolder}
        value={inputValue}
        onChange={changeHandler}
        className={classNames(
          "w-full h-[3rem] bg-peach text-white placeholder-white"
        )}
      />
      {error ? (
        <div className="text-white italic flex gap-[1rem]  items-center w-full justify-end">
          <p className="text-[12px] xsm:text-[10px]">Incorrect Input</p>
          <div className="w-[20px] h-[20px] relative">
            <Image
              alt="Incorrect Input"
              src="/incorrect-input.svg"
              fill
              quality={100}
              className="object-cover md:rounded-lg"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputComp;
