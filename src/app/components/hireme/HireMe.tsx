import React from "react";
import { Image } from "react-bootstrap";
import ScreenContainer from "../ScreenContainer";

const HireMe = () => {
  return (
    <section className="hire-me-section bg-[#F2F4F7] py-[103px]  rounded-[40px]">
      <ScreenContainer>
        <div className="flex flex-row h-auto items-center">
          <div className="flex-1 max-w-[603px] w-full">
            <Image
              alt="hire me"
              src="/assets/images/hireme-img.png"
              className="w-full h-full"
            />
          </div>
          <div className="flex-1 flex flex-col gap-[47px]">
            <h2 className="text-[64px] leading-[64px] font-lufgasemibold text-[#344054]">
              Why <span className="text-[#FD853A]">Hire me</span>?
            </h2>
            <p className="text-[#98A2B3] text-[20px] leading-[26px] font-lufgalight w-[444px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
            <div className="flex flex-row">
              <div className="flex flex-col gap-[10px] flex-1">
                <h2 className="text-[#1D2939] text-[36px] leading-[47px] font-lufgamedium">
                  450+
                </h2>
                <p className="text-[#667085] text-[20px] leading-[26px] font-lufgalight">
                  Project Completed
                </p>
              </div>
              <div className="flex flex-col gap-[10px] flex-1">
                <h2 className="text-[#1D2939] text-[36px] leading-[47px] font-lufgamedium">
                  450+
                </h2>
                <p className="text-[#667085] text-[20px] leading-[26px] font-lufgalight">
                  Project Completed
                </p>
              </div>
            </div>
            <div>
              <button className="font-lufgasemibold text-[32px] leading-[42px] text-[#151515] px-[59px] py-[33px] rounded-[32px] border-[1px] border-[#151515]">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default HireMe;
