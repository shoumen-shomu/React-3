import React from "react";
import Container from "../Container";
import Image from "../Image";
import common from "../../assets/commonelement.png";
import creativeimgOne from "../../assets/creativeimg.png";
import Subheading from "../Subheading";
import Pragraph from "../Pragraph";
import Flex from "../Flex";

const Creative = () => {
  return (
    <div className="pt-[80px] pb-[104px]">
      <Container>
        <Image className={"mx-auto"} imgSrc={common} />
        <Subheading className={"text-center"} text={"Our creative process."} />
        <Pragraph
          className={
            "w-[430px] mx-auto text-center leading-[30px] pt-[20px] pb-[50px]"
          }
          text={
            "We provide digital experience services to startups and small businesses."
          }
        />
        <Flex className={"gap-x-[130px]"}>
          <div className="mt-[50px]">
            <div className="py-7 pl-[20px] pr-[85px] bg-[#EBF7E9] rounded-[20px] relative">
              <div className="w-[33px] h-[33px] rounded-[50%] bg-[#FF7628] relative z-0"></div>
              <h5 className="font-sans font-bold text-[18px] text-[#202427] leading-[14px] absolute top-9.5 left-9 z-10 ">
                Step-1
              </h5>
              <h4
                className={
                  "font-sans font-semibold text-[28px] text-[#202427] leading-[34px] pt-[18px] pb-[20px]"
                }
              >
                Global SEO Research
              </h4>
              <p className="font-rob font-normal text-[18px] text-[#6C7D93] leading-[30px] w-[350px]">
                Practical tools and features make it easier to build and manage
                your site.
              </p>
            </div>
          </div>
          <Image imgSrc={creativeimgOne}/>
        </Flex>

        <Flex className={"gap-x-[130px] mt-[20px]"}>
            <Image imgSrc={creativeimgOne}/>
          <div className="mt-[50px]">
            <div className="py-7 pl-[20px] pr-[85px] bg-[#D8EAFF] rounded-[20px] relative">
              <div className="w-[33px] h-[33px] rounded-[50%] bg-[#FF7628] relative z-0"></div>
              <h5 className="font-sans font-bold text-[18px] text-[#202427] leading-[14px] absolute top-9.5 left-9 z-10 ">
                Step-2
              </h5>
              <h4
                className={
                  "font-sans font-semibold text-[28px] text-[#202427] leading-[34px] pt-[18px] pb-[20px]"
                }
              >
                Social media integration
              </h4>
              <p className="font-rob font-normal text-[18px] text-[#6C7D93] leading-[30px] w-[350px]">
                Practical tools and features make it easier to build and manage
                your site.
              </p>
            </div>
          </div>
        </Flex>

        <Flex className={"gap-x-[130px] mt-[10px]"}>
          <div className="mt-[70px]">
            <div className="py-7 pl-[20px] pr-[85px] bg-[#FBF1EC] rounded-[20px] relative">
              <div className="w-[33px] h-[33px] rounded-[50%] bg-[#FF7628] relative z-0"></div>
              <h5 className="font-sans font-bold text-[18px] text-[#202427] leading-[14px] absolute top-9.5 left-9 z-10 ">
                Step-3
              </h5>
              <h4
                className={
                  "font-sans font-semibold text-[28px] text-[#202427] leading-[34px] pt-[18px] pb-[20px] w-[378px]"
                }
              >
                Launching the Application
              </h4>
              <p className="font-rob font-normal text-[18px] text-[#6C7D93] leading-[30px] w-[350px]">
                Practical tools and features make it easier to build and manage
                your site.
              </p>
            </div>
          </div>
          <Image imgSrc={creativeimgOne}/>
        </Flex>
      </Container>
    </div>
  );
};

export default Creative;
