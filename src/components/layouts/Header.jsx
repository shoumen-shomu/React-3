import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <Container>
        <Flex className={"justify-between items-center"}>
          <div className="">
            <Link to={"/"}>
              <Image imgSrc={logo} />
            </Link>
          </div>
          <div className="">
            <ul className="flex gap-x-10">
              <li>
                <Link
                  to={"/"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239] hover:text-[#FF7628] duration-500"
                >
                  {" "}
                  Home <IoIosArrowDown className={"ml-[10px]"} />
                </Link>
              </li>

              <li>
                <Link
                  to={"/about"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239] hover:text-[#FF7628] duration-500"
                >
                  {" "}
                  About <IoIosArrowDown className={"ml-[10px]"} />
                </Link>
              </li>
              <li>
                <Link
                  to={"/service"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239] hover:text-[#FF7628] duration-500"
                >
                  {" "}
                  Service <IoIosArrowDown className={"ml-[10px]"} />
                </Link>
              </li>
              <li>
                <Link
                  to={"/portfolio"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239] hover:text-[#FF7628] duration-500"
                >
                  {" "}
                  Portfolio <IoIosArrowDown className={"ml-[10px]"} />
                </Link>
              </li>
              <li>
                <Link
                  to={"/price"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239] hover:text-[#FF7628] duration-500"
                >
                  {" "}
                  Price <IoIosArrowDown className={"ml-[10px]"} />
                </Link>
              </li>
              <li>
                <Link
                  to={"/blog"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239] hover:text-[#FF7628] duration-500"
                >
                  {" "}
                  Blog <IoIosArrowDown className={"ml-[10px]"} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Button
              className={
                "py-[14px] px-[24px] rounded-[100px] bg-[#FF7628] font-sans font-semibold text-[18px] text-white"
              }
              btnText={"Contact Me"}
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
