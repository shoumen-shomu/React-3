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
        <Flex className={"justify-between"}>
          <div className="">
            <Image imgSrc={logo} />
          </div>
          <div className="">
            <ul className="flex gap-x-10">
              <li>
                <Link
                  to={"/"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239]"
                >
                  {" "}
                  Home <IoIosArrowDown className={"ml-[10px]"} />
                </Link>
              </li>

              <li>
                <Link
                  to={"/about"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239]"
                >
                  {" "}
                  About <IoIosArrowDown className={"ml-[10px]"} />
                </Link>
              </li>
              <li>
                <Link
                  to={"/service"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239]"
                >
                  {" "}
                  Service <IoIosArrowDown className={"ml-[10px]"} />
                </Link>
              </li>
              <li>
                <Link
                  to={"/portfolio"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239]"
                >
                  {" "}
                  Portfolio <IoIosArrowDown className={"ml-[10px]"} />
                </Link>
              </li>
              <li>
                <Link
                  to={"/price"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239]"
                >
                  {" "}
                  Price <IoIosArrowDown className={"ml-[10px]"} />
                </Link>             
              </li>
              <li>
                <Link
                  to={"/blog"}
                  className="flex items-center font-sans font-semibold text-[18px] text-[#192239]"
                >
                  {" "}
                  Blog <IoIosArrowDown className={"ml-[10px]"} />
                </Link>             
              </li>
            </ul>
          </div>
          <div className="">
            <Button btnText={"Contact Me"} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
