import classNames from "classnames";
import React from "react";

type textBoxProps = {
  textBoxData: {
    title: string;
    bodyOne: string;
    bodyTwo: string;
    titleStyles: string;
    bodyOneStyles: string;
    bodyTwoStyles: string;
    bodyStyles: string;
  };
};
const TextBox = ({ textBoxData }: textBoxProps) => {
  return (
    <div className={classNames("bg-[#FDF3F0]", `${textBoxData.bodyStyles}`)}>
      <h2 className={textBoxData.titleStyles}>{textBoxData.title}</h2>
      <div className="gap-6 flex flex-col">
        <p className={textBoxData.bodyOneStyles}>{textBoxData.bodyOne}</p>
        <p className={textBoxData.bodyTwoStyles}>{textBoxData.bodyTwo}</p>
      </div>
    </div>
  );
};

export default TextBox;
