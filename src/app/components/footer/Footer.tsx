import React from "react";
import ScreenContainer from "../ScreenContainer";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
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
          <div className="bg-[#475467] w-full h-[2px] my-[55px]"></div>
          <div className="flex flex-row justify-between">
            <div className="">
              <p className="text-[#FFFFFF] font-lufgalight text-[20px] leading-[26px]">
                Copyright&copy; 2023 Jayesh. All Rights Reserved.
              </p>
            </div>
            <div className="">
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default Footer;
