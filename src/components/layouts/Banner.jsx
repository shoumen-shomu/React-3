import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import Pragraph from "../Pragraph";
import Button from "../Button";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/banner.jpg')] py-[300px] bg-center bg-cover bg-no-repeat">
      <Container>
        <Heading text={"We Are Digital #Marketing# Agency"} />
        <Pragraph className="w-[571px] mt-[20px] leading-[36px]"
          text={
            "Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. "
          }
        />
        <Button className={"mt-[30px] py-[20px] px-[40px] font-bold text-[20px] leading-[24px] uppercase "} btnText={"get free quoto"}/>
      </Container>
    </div>
  );
};

export default Banner;
