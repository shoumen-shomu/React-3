import React from "react";
import Image from "../Image";
import errorGif from "../../assets/error.gif";
import { Navigate, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <Image className={"w-full h-screen mt-[10px]"} imgSrc={errorGif} />
      <button
        onClick={handleClick}
        className="py-[14px] px-[24px] rounded-[100px] bg-[#FF7628] font-sans font-semibold text-[18px] text-white mt-[10px] cursor-pointer"
      >
        plaese Save me
      </button>
    </>
  );
};

export default Error;
