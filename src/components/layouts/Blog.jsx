import React from "react";
import Container from "../Container";
import Image from "../Image";
import blogimg from "../../assets/commonelement.png";
import blogimgone from "../../assets/blogimg.png";
import Subheading from "../Subheading";
import Flex from "../Flex";

const Blog = () => {
  return (
    <Container className={"py-[90px]"}>
      <div className="text-center pb-[50px]">
        <Image className={"mx-auto"} imgSrc={blogimg} />
        <Subheading
          className={"pt-[20px] pb-[25px]"}
          text={"Our Latest Blog"}
        />
        <p className="font-rob font-normal text-[18px] text[#6C7D93] leading-[30px] w-[412px] mx-auto">
          We provide digital experience services to startups and small
          businesses.
        </p>
      </div>
      <Flex className={"gap-x-[30px]"}>
        <div className="">
          <Image imgSrc={blogimgone} />
          <div className="py-[30px] pl-[30px] pr-[79px] bg-[#f8f8f3] rounded-b-[20px]">
            <h5 className="font-work font-medium text-[24px] text-[#413F45] w-[210px] leading-8 tracking-[1px] pb-4">
              How to Be Ahead of Stock Changes
            </h5>
            <span className="font-nun font-normal text-[18px] text-[#474747]">
              By John - 5 Comments
            </span>
            <div className="relative pt-[30px]">
              <div className="w-[33px] h-[33px] rounded-[50%] bg-[#FF7628] relative z-0"></div>
              <h5 className="font-sans font-bold text-[18px] text-[#202427] leading-[14px] absolute top-10.5 left-3 z-10 ">
                Read More
              </h5>
            </div>
          </div>
        </div>
        <div className="">
          <Image imgSrc={blogimgone} />
          <div className="py-[30px] pl-[30px] pr-[79px] bg-[#f8f8f3] rounded-b-[20px]">
            <h5 className="font-work font-medium text-[24px] text-[#413F45] w-[210px] leading-8 tracking-[1px] pb-4">
              Online Reputation And Management
            </h5>
            <span className="font-nun font-normal text-[18px] text-[#474747]">
              By Amin  - 10 Comments
            </span>
            <div className="relative pt-[30px]">
              <div className="w-[33px] h-[33px] rounded-[50%] bg-[#FF7628] relative z-0"></div>
              <h5 className="font-sans font-bold text-[18px] text-[#202427] leading-[14px] absolute top-10.5 left-3 z-10 ">
                Read More
              </h5>
            </div>
          </div>
        </div>
        <div className="">
          <Image imgSrc={blogimgone} />
          <div className="py-[30px] pl-[30px] pr-[79px] bg-[#f8f8f3] rounded-b-[20px]">
            <h5 className="font-work font-medium text-[24px] text-[#413F45] w-[210px] leading-8 tracking-[1px] pb-4">
              How to Be Ahead of Stock Changes
            </h5>
            <span className="font-nun font-normal text-[18px] text-[#474747]">
              By John - 5 Comments
            </span>
            <div className="relative pt-[30px]">
              <div className="w-[33px] h-[33px] rounded-[50%] bg-[#FF7628] relative z-0"></div>
              <h5 className="font-sans font-bold text-[18px] text-[#202427] leading-[14px] absolute top-10.5 left-3 z-10 ">
                Read More
              </h5>
            </div>
          </div>
        </div>
      </Flex>
    </Container>
  );
};

export default Blog;
