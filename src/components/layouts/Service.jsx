
import Container from "../Container";
import Image from "../Image";
import Commonelement from "../../assets/commonelement.png";
import marketingimg from "../../assets/markrtingimg.png";
import socialimg from "../../assets/socialimg.png";
import contentimg from "../../assets/contentimg.png";
import Subheading from "../Subheading";
import Pragraph from "../Pragraph";
import Flex from "../Flex";

const Service = () => {
  return (
    <Container className={"pb-[95px]"}>
      <div className="py-[70px]">
        <Image className={"mx-auto"} imgSrc={Commonelement} />
        <Subheading
          className={
            "text-center py-[15px]"
          }
          text={"Our Services"}
        />
        <Pragraph
          className={
            "font-pap font-normal text-[#6C7D93] text-[18px] leading-[32px] text-center w-[332px] mx-auto "
          }
          text={"We have been providing great flooring solutions service."}
        />
      </div>
      <div>
        <Flex className={"justify-between gap-x-[30px]"}>

          <div className="bg-[#EBF7E9] py-[52px] px-[48px] text-center rounded-[20px] relative">
            <Image className={"mx-auto"} imgSrc={marketingimg} />
            <h3 className="font-sans font-semibold text-[30px] text-[#202427] pt-[28px] leading-[36px]">
              Marketing Strategy
            </h3>
            <Pragraph
              className={"w-[280px] leading-9 py-5 mx-auto"}
              text={
                "Social Media has changed the way we interact & do business while creating"
              }
            />
            <h4 className="font-sans font-bold text-[18px] text-[#202427] relative z-10">Read More</h4>
            <div className="h-[35px] w-[35px] rounded-[50%] bg-[#FF7628] absolute bottom-[12%] left-[33%] z-0"></div>
          </div>

          <div className="bg-[#FBF1EC] py-[52px] px-12 text-center rounded-[20px] relative">
            <Image className={"mx-auto"} imgSrc={socialimg} />
            <h3 className="font-sans font-semibold text-[30px] text-[#202427] pt-7 leading-9">
              Social Marketing
            </h3>
            <Pragraph
              className={"w-[280px] leading-[36px] py-[20px] mx-auto"}
              text={
                "Social Media has changed the way we interact & do business while creating"
              }
            />
            <h4 className="font-sans font-bold text-[18px] text-[#202427] relative z-10">Read More</h4>
            <div className="h-[35px] w-[35px] rounded-[50%] bg-[#FF7628] absolute bottom-[12%] left-[33%] z-0"></div>
          </div>

          <div className="bg-[#D8EAFF] py-[52px] px-[48px] text-center rounded-[20px] relative">
            <Image className={"mx-auto"} imgSrc={contentimg} />
            <h3 className="font-sans font-semibold text-[30px] text-[#202427] pt-[28px] leading-[36px]">
              Content Marketing
            </h3>
            <Pragraph
              className={"w-[280px] leading-[36px] pb-[37px] mx-auto"}
              text={
                "Content Marketing is the other fold of online advertisement. If you are looking to build"
              }
            />
            <h4 className="font-sans font-bold text-[18px] text-[#202427] relative z-10">Read More</h4>
            <div className="h-[35px] w-[35px] rounded-[50%] bg-[#FF7628] absolute bottom-[12.5%] left-[33%] z-0"></div>
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Service;
