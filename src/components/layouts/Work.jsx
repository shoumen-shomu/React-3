
import Container from "../Container";
import Image from "../Image";
import common from "../../assets/commonelement.png";
import emptyOne from "../../assets/one.png";
import emptyTwo from "../../assets/two.png";
import emptyThree from "../../assets/three.png";
import emptyFour from "../../assets/four.png";
import emptyFive from "../../assets/five.png";
import emptySix from "../../assets/six.png";
import Subheading from "../Subheading";
import Button from "../Button";
import Flex from "../Flex";

const Work = () => {
  return (
    <div className="py-[90px]">
      <Container>
        <Image className={"mx-auto"} imgSrc={common} />
        <Subheading className={"pt-4 pb-[52px] text-center"} text={"Work Showcase"}/> 
       <div className="pb-[52px]">
         <Button className={"font-sans font-semibold text-[24px] text-[#6C7D93] hover:text-[#FF7628] duration-500 pr-[40px]"} btnText={"All"}/>
         <Button className={"font-sans font-semibold text-[24px] text-[#6C7D93] hover:text-[#FF7628] duration-500 pr-[40px]"} btnText={"Digital Mkt"}/>
         <Button className={"font-sans font-semibold text-[24px] text-[#6C7D93] hover:text-[#FF7628] duration-500 pr-[40px]"} btnText={"Branding"}/>
         <Button className={"font-sans font-semibold text-[24px] text-[#6C7D93] hover:text-[#FF7628] duration-500 pr-[40px]"} btnText={"Content Mkt"}/>
         <Button className={"font-sans font-semibold text-[24px] text-[#6C7D93] hover:text-[#FF7628] duration-500 pr-[40px]"} btnText={"Social Media Mkt"}/>
       </div>
       <div className="">
        <Flex className={"gap-x-[30px]"}>
          <Image className={"w-full"} imgSrc={emptyOne}/>
          <Image className={"w-full"} imgSrc={emptyTwo}/>
          <Image className={"w-full"} imgSrc={emptyThree}/>
        </Flex>
        <Flex className={"gap-x-[30px] mt-[30px]"}>
          <Image className={"w-full"} imgSrc={emptyFour}/>
          <Image className={"w-full"} imgSrc={emptyFive}/>
          <Image className={"w-full"} imgSrc={emptySix}/>
        </Flex>
       </div> 
      </Container>
    </div>
  );
};

export default Work;
