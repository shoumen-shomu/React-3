import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import footerlogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className={"pt-[140px] pb-[50px]"}>
      <Flex className={"justify-between gap-x-[100px]"}>
        <div className="">
          <Link to={"/"}><Image imgSrc={footerlogo} /></Link>
          
          <p className="font-nun font-normal text-[18px] text-[#6C7D93] w-[440px] pt-[45px] leading-[140%] capitalize ">
            Install any demo or template with a single click. You can mix and
            match all the demos & templates. Every demo can be turned into one
            or multi-page.
          </p>
        </div>
        <div className="">
          <h4 className="font-semibold text-[24px] text-[#413F45] pb-5">
            Features
          </h4>
          <ul className="items-center ">
            <li className="pb-[30px] font-semibold text-[20px] text-[#6C7D93] hover:text-[#FF7628] duration-500">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="pb-[30px] font-semibold text-[20px] text-[#6C7D93] hover:text-[#FF7628] duration-500">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="pb-[30px] font-semibold text-[20px] text-[#6C7D93] hover:text-[#FF7628] duration-500">
              <Link to={"/service"}>Service</Link>
            </li>
            <li className="pb-[30px] font-semibold text-[20px] text-[#6C7D93] hover:text-[#FF7628] duration-500">
              <Link to={"/price"}>Pricing</Link>
            </li>
            <li className="font-semibold text-[20px] text-[#6C7D93] hover:text-[#FF7628] duration-500">
              <Link to={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="font-semibold text-[24px] text-[#413F45] pb-5">
            Products
          </h4>
          <ul className="items-center ">
            <li className="pb-[30px] font-semibold text-[20px] text-[#6C7D93] hover:text-[#FF7628] duration-500">
              <Link to={"/taskmanagement"}>Task Management</Link>
            </li>
            <li className="pb-[30px] font-semibold text-[20px] text-[#6C7D93] hover:text-[#FF7628] duration-500">
              <Link to={"/companygrowth"}>Company growth</Link>
            </li>
            <li className="pb-[30px] font-semibold text-[20px] text-[#6C7D93] hover:text-[#FF7628] duration-500">
              <Link to={"/timetracking"}>Time tracking</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="font-semibold text-[24px] text-[#413F45] pb-5">
            Support
          </h4>
          <ul className="items-center ">
            <li className="pb-[30px] font-semibold text-[20px] text-[#6C7D93] hover:text-[#FF7628] duration-500">
              <Link to={"/customerservice"}>Customer service</Link>
            </li>
            <li className="pb-[30px] font-semibold text-[20px] text-[#6C7D93] hover:text-[#FF7628] duration-500">
              <Link to={"/accessibility"}>Accessibility</Link>
            </li>
            <li className="pb-[30px] font-semibold text-[20px] text-[#6C7D93] hover:text-[#FF7628] duration-500">
              <Link to={"/contactus"}>Contact us</Link>
            </li>
          </ul>
        </div>
      </Flex>
      <div className="pt-[80px]">
        <Flex className={"justify-between"}>
          <span className="font-nun font-normal text-[18px] text-[#6C7D93] leading-[180%]">@2025 Shoumen.All rights reserved.</span>
          <div className="">
            <span className="pr-[60px] font-nun font-normal text-[18px] text-[#6C7D93] leading-[180%]">Privacy policy</span>
            <span className="font-nun font-normal text-[18px] text-[#6C7D93] leading-[180%]">Terms & condition</span>
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Footer;
