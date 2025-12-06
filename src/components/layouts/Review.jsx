import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import reviwimg from "../../assets/commonelement.png";
import clientimg from "../../assets/reviewimg.png";
import Subheading from "../Subheading";
import Pragraph from "../Pragraph";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const Review = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <Flex className={"gap-x-[10px]"}>
          <div className="">
            <Image imgSrc={reviwimg} />
            <Subheading className={"py-[17px]"} text={"Client Review"} />
            <Pragraph
              className={"w-[300px] leading-[30px]"}
              text={
                "people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  "
              }
            />
            <div className="mt-[6px]">
              <Flex className={"gap-x-[20px]"}>
                <div className="w-[42px] h-[42px] rounded-[50%] bg-[#f7d5c2]  relative hover:bg-[#FF7628] duration-700">
                  <FaAngleLeft
                    className={"text-white absolute top-3.5 left-3.5 w-[13px] "}
                  />
                </div>

                <div className="w-[42px] h-[42px] rounded-[50%] bg-[#f7d5c2] relative hover:bg-[#FF7628] duration-700">
                  <FaAngleRight
                    className={"text-white absolute top-3.5 left-3.5 w-[13px] "}
                  />
                </div>
              </Flex>
            </div>
          </div>
          <div className="pt-[25px] pr-[60px] pb-[40px] pl-[40px] bg-[#e9edf1] rounded-[20px] hover:bg-[#D8EAFF] duration-500">
            <Pragraph
              className={"w-[250px] leading-[30px]"}
              text={
                "Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "
              }
            />
            <div className="mt-[5px]">
              <Flex className={"gap-x-5"}>
                <Image imgSrc={clientimg} />
                <div className="items-center pt-[10px]">
                  <h5 className="font-sans font-semibold text-[24px] text-[#202427]">
                    Jane Cooper
                  </h5>
                  <span className="font-sans font-normal text-[18px] text-[#202427]">
                    Fashion Designer
                  </span>
                </div>
              </Flex>
            </div>
          </div>
          <div className="pt-[25px] pr-[60px] pb-[40px] pl-[40px] bg-[#e9edf1] rounded-[20px] hover:bg-[#D8EAFF] duration-500">
            <Pragraph
              className={"w-[250px] leading-[30px]"}
              text={
                "Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "
              }
            />
            <div className="mt-[5px]">
              <Flex className={"gap-x-5"}>
                <Image imgSrc={clientimg} />
                <div className="items-center pt-[10px]">
                  <h5 className="font-sans font-semibold text-[24px] text-[#202427]">
                    Eleanor Pena
                  </h5>
                  <span className="font-sans font-normal text-[18px] text-[#202427]">
                    Architecture
                  </span>
                </div>
              </Flex>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Review;
