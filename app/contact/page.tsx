"use client";
import BaseLayout from "@/components/BaseLayout";
import InputComp from "@/components/InputComp";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import SuccessPage from "@/components/SuccessPage";
import Locations from "@/components/Locations";

export type formInputObj = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type inputFormArray = {
  userInfoKey: keyof formInputObj;
  inputType: string;
  placeHolder: string;
  pattern: RegExp;
  value: string;
};

const Contact = () => {
  const [textArea, setTextArea] = useState("");
  const [formInput, setFormInput] = useState<formInputObj>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successfulInput, setSuccessfulInput] = useState(false);

  const inputForm: inputFormArray[] = [
    {
      userInfoKey: "name",
      inputType: "text",
      placeHolder: "Name",
      pattern: /^[A-Za-z\s'-]+$/,
      value: "",
    },
    {
      userInfoKey: "email",
      inputType: "email",
      placeHolder: "Email Address",
      pattern: /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      value: "",
    },
    {
      userInfoKey: "phone",
      inputType: "tel",
      placeHolder: "Phone 123-456-7891",
      pattern:
        /^(?:(?:\+?\d{1,3}\s*(?:\(\d+\)|\d+))|\d{1,4})(?:[-.\/]?\d{1,4})?(?:[-.\/]?\d{1,4})?(?:[-.\/]?\d{1,9})?(?:[-.\/]?\d{1,5})?$/,
      value: "",
    },
  ];

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
    setFormInput((prev) => {
      return {
        ...prev,
        message: e.target.value,
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/api/clients", formInput)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setSuccessfulInput(true);
      });
  };
  return (
    <BaseLayout
      successfulInput={successfulInput}
      setSuccessfulInput={setSuccessfulInput}
    >
      <>
        {successfulInput ? (
          <SuccessPage formInput={formInput} />
        ) : (
          <div className="flex justify-center items-center">
            <div className="bg-peach xsm:h-[60rem] h-[47.75rem] flex flex-col justify-start items-center p-[3rem] text-center gap-[3rem] md:w-[43.063rem] md:h-full md:gap-[1rem] md:rounded-xl md:text-start md:p-[5rem] lg:w-full lg:h-[30rem] lg:flex-row lg:px-[5rem] lg:py-[0] lg:gap-[2rem]">
              <div className="flex flex-col gap-4 text-white ms:gap-[3rem] lg:w-[80%]">
                <h2>Contact Us</h2>
                <p>
                  Ready to take it to the next level? Let&apos;s talk about your
                  project or idea and find out how we can help your business
                  grow. If you are looking for unique digital experiences
                  that&apos;s relatable to your users, drop us a line.
                </p>
              </div>
              <form
                className="w-full flex flex-col h-full gap-[2rem] justify-center items-center lg:gap-[0]"
                onSubmit={handleSubmit}
              >
                {inputForm.map((input, index) => {
                  return (
                    <InputComp
                      key={index}
                      input={input}
                      index={index}
                      formInput={formInput}
                      setFormInput={setFormInput}
                    />
                  );
                })}
                <div className="w-full">
                  <textarea
                    className="w-full h-[7.875rem] bg-peach text-white p-4 placeholder-white lg:h-[102px] resize-none"
                    placeholder="Your Message"
                    value={textArea}
                    onChange={onChangeHandler}
                  />
                  <hr className="border-white" />
                </div>
                <input
                  type="submit"
                  className="w-[152px] h-[56px] bg-white cursor-pointer hover:bg-peach-light rounded-lg text-black hover:text-white md:self-end lg:mt-[1rem]"
                />
              </form>
            </div>
          </div>
        )}
        <div onClick={() => setSuccessfulInput(false)}>
          <Locations />
        </div>
      </>
    </BaseLayout>
  );
};

export default Contact;
