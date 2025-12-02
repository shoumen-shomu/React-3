import React from "react";

const Pragraph = ({ className, text }) => {
  return (
    <p
      className={`font-pap font-normal text-[20px] text-[#6C7D93] ${className}`}
    >
      {text}
    </p>
  );
};

export default Pragraph;
