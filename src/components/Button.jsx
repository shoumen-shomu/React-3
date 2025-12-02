import React from "react";

const Button = ({ btnText, className }) => {
  return (
    <button
      className={`py-[14px] px-[24px] rounded-[100px] bg-[#FF7628] font-sans font-semibold text-[18px] text-white ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
