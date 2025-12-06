import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import introduction from "../../assets/introductionimg.png";
import logo from "../../assets/commonelement.png";
import wapkiu from "../../assets/wapkiu.png";
import rinfall from "../../assets/rinfall.png";
import creone from "../../assets/creone.png";
import ulabs from "../../assets/ulabs.png";
import spiders from "../../assets/spiders.png";
import widegde from "../../assets/widegde.png";
import Subheading from "../Subheading";
import Pragraph from "../Pragraph";

const Introduction = () => {
  return (
    <Container className={"pt-[104px] pb-[80px]"}>
      <Flex className={"gap-x-20px"}>
        <div className="mr-[20px] w-1/2">
          <Image imgSrc={introduction} />
        </div>
        <div className="w-1/2">
          <Image className={"ml-[35px]"} imgSrc={logo} />
          <Subheading className={"ml-[35px]"} text={"Who We Are"} />
          <Pragraph className={"text-[20px] w-[500px] ml-[35px]"}
            text={
              "We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, "
            }
          />
          <Pragraph className={"pt-[10px] pb-[20px] font-pap font-normal text-3 text-[#6C7D93] ml-[35px]"} text={"Join the 10.000+ Companys Trusting"} />

          <Flex className={""}>
            <Image className={"w-full"} imgSrc={wapkiu} />
            <Image className={"w-full"} imgSrc={rinfall} />
            <Image className={"w-full"} imgSrc={creone} />
          </Flex>
          <Flex className={""}>
            <Image className={"w-full"} imgSrc={ulabs} />
            <Image className={"w-full"} imgSrc={spiders} />
            <Image className={"w-full"} imgSrc={widegde} />
          </Flex>
        </div>
      </Flex>
    </Container>
  );
};

export default Introduction;
