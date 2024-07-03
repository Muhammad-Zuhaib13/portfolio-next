import React from "react";
import ScreenContainer from "../ScreenContainer";
import { Image } from "react-bootstrap";
import EmailIcon from "@mui/icons-material/Email";

const LetsConnect = () => {
  return (
    <section className="lets-connect-section py-[98px]">
      <ScreenContainer>
        <div className="flex flex-col gap-[10px] justify-center items-center">
          <div>
            <h2 className="text-[64px] leading-[83px] font-lufgasemibold text-[#344054] text-center">
              Have an Awsome Project
              <br /> Idea?
              <span className="text-[#FD853A]"> Let's Discuss</span>
            </h2>
          </div>
          <div className="max-w-[832px] w-full h-[86px] relative">
            <div className="w-[64px] h-[58px] bg-[#FFEAD5] rounded-[50%] flex items-center justify-center absolute top-0 bottom-0 my-auto left-[14px]">
              <EmailIcon sx={{ color: "#FD853A", fontSize: "32px" }} />
            </div>
            <input
              placeholder="Enter Your Email"
              className="w-full h-full rounded-[50px] border-[1px] border-[#E4E7EC] pl-[95px]"
            />
            <button className="absolute bg-[#FD853A] rounded-[60px] w-[126px] h-[64px] text-[#FFFFFF] text-[20px] leading-[24px] right-[14px] top-0 bottom-0 my-auto">
              Send
            </button>
          </div>
          <div className="flex flex-row gap-[93px]">
            <div className="flex flex-row items-center">
              <Image
                src="/assets/icons/star-img.svg"
                className="w-[24px] h-[24px]"
              />
              <h5 className="text-[#000000] text-[16px] leading-[21px] font-lufgalight">
                4.9/5 Average Ratings
              </h5>
            </div>
            <div className="flex flex-row items-center">
              <Image
                src="/assets/icons/award-img.svg"
                className="w-[24px] h-[24px]"
              />
              <h5 className="text-[#000000] text-[16px] leading-[21px] font-lufgalight">
                25+ Winning Awards
              </h5>
            </div>
            <div className="flex flex-row items-center">
              <Image
                src="/assets/icons/shield-tick-img.svg"
                className="w-[24px] h-[24px]"
              />
              <h5 className="text-[#000000] text-[16px] leading-[21px] font-lufgalight">
                Certified Product Designer
              </h5>
            </div>
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default LetsConnect;
