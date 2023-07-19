import classNames from "classnames";

export type SubmitButtonProps = {
  children: JSX.Element;
  buttonStyles: string;
};

const SubmitButton = ({ children, buttonStyles }: SubmitButtonProps) => {
  return (
    <button
      className={classNames(
        "w-[152px] h-[56px] cursor-pointer hover:bg-peach-light rounded-lg text-black hover:text-white",
        `${buttonStyles}`
      )}
    >
      <p>{children}</p>
    </button>
  );
};

export default SubmitButton;
