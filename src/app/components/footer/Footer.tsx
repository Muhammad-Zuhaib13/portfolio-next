import React from "react";
import ScreenContainer from "../ScreenContainer";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <section className="footer-section bg-[#272727] rounded-tl-[24px] rounded-tr-[24px]">
      <ScreenContainer>
        <div className="py-[25px]">
          <div className="flex flex-row justify-between items-center my-[44px]">
            <h2 className="font-lufgabold font-bold text-[48px] leading-[63px] text-[#FCFCFD]">
              Lets Connect there
            </h2>
            <div>
              <button className="w-auto px-[33px] h-[66px] bg-[#FD853A] uppercase text-white text-[20px] leading-[26px] rounded-[60px] flex flex-row justify-center items-center">
                <span>Hire Me</span>
                <span>
                  <ArrowOutwardIcon sx={{ fontSize: "30px" }} />
                </span>
              </button>
            </div>
          </div>
          <div className="bg-[#475467] w-full h-[2px] my-[55px]"></div>
          <div className="flex flex-row gap-[29px] justify-between">
            <div className="flex flex-col gap-[34px]">
              <div className="w-[307px] h-[86px] flex flex-row justify-start items-center">
                <span className="text-[#FFFFFF] text-[47px] font-urbanist uppercase font-bold bg-[#FD853A] px-[8px] rounded-[50%]">
                  JC
                </span>
                <span className="text-[#FFFFFF] text-[47px] font-urbanist uppercase font-bold">
                  JCREA
                </span>
              </div>
              <div>
                <p className="text-[#FFFFFF] font-lufgalight text-[20px] leading-[26px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  congue interdum ligula a dignissim. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sed lobortis orci elementum
                  egestas lobortis.
                </p>
              </div>
              <div>
                <ul className="flex flex-row gap-[7px]">
                  <li>
                    <Link
                      href="/"
                      className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                    >
                      <Image
                        src="/assets/icons/fb-icon.svg"
                        className="w-[20px] h-[20px]"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                    >
                      <Image
                        src="/assets/icons/youtube-icon.svg"
                        className="w-[20px] h-[20px]"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                    >
                      <Image
                        src="/assets/icons/whatsapp-icon.svg"
                        className="w-[20px] h-[20px]"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                    >
                      <Image
                        src="/assets/icons/insta-icon.svg"
                        className="w-[20px] h-[20px]"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                    >
                      <Image
                        src="/assets/icons/twitter-icon.svg"
                        className="w-[20px] h-[20px]"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[28px]">
              <h3 className="text-[#FD853A] font-lufgasemibold text-[20px] leading-[26.1px]">
                Navigation
              </h3>
              <ul className="flex flex-col gap-[23px]">
                <li>
                  <Link
                    href="/"
                    className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                  >
                    Project
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[28px]">
              <h3 className="text-[#FD853A] font-lufgasemibold text-[20px] leading-[26.1px]">
                Contact
              </h3>
              <ul className="flex flex-col gap-[23px]">
                <li>
                  <Link
                    href="/"
                    className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                  >
                    +91 7738443636
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                  >
                    Jaycrea36@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#FFFFFF] font-lufgalight text-[16px] leading-[20.88px] uppercase"
                  >
                    Portfolio-jcrea.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[28px]">
              <h3 className="text-[#FD853A] font-lufgasemibold text-[20px] leading-[26.1px]">
                Get the latest information
              </h3>
              <div className="relative h-[51px] flex flex-row items-center ">
                <input
                  className="h-full w-[258px] rounded-l-[14px] pl-[15.5px]"
                  type="email"
                  placeholder="Email Address"
                />
                <button className="bg-[#FD853A] w-[46px] h-full rounded-r-[14px] flex flex-col justify-center items-center">
                  <Image
                    src="/assets/icons/plane-icon.svg"
                    className="w-[24px] h-[24px]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[#475467] w-full h-[2px] my-[55px]"></div>
          <div className="flex flex-row justify-between">
            <div className="">
              <p className="text-[#FFFFFF] font-lufgalight text-[20px] leading-[26px]">
                Copyright&copy; 2023 Jayesh. All Rights Reserved.
              </p>
            </div>
            <div className="">
              <ul className="flex flex-row gap-[4px] items-center">
                <li>
                  <Link
                    href="/"
                    className="text-[#FFFFFF] font-lufgalight text-[20px] leading-[26px]  "
                  >
                    {" "}
                    User Terms & Conditions
                  </Link>
                </li>
                <li className=" bg-[#ffffff] h-[18px] w-[1px]"> </li>
                <li>
                  <Link
                    href="/"
                    className="text-[#FFFFFF] font-lufgalight text-[20px] leading-[26px]"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default Footer;
