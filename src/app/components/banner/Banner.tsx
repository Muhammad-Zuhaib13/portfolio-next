"use client";
import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import ScreenContainer from "../ScreenContainer";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const Banner = () => {
  const [activeBtn, setActiveBtn] = useState("portfolioBtn");
  const handleHover = (key: string) => {
    setActiveBtn(key);
  };
  return (
    <ScreenContainer>
      <section className="banner-section h-[846px] w-full overflow-hidden">
        <div className="flex flex-col w-full items-center mt-[37px] banner-first-section">
          <div className="capitalize w-[104px] h-[45px] bg-[#FFFFFF1A] border-[2px] border-[#171717] text-black text-[20px] font-lufgamedium font-medium leading-[26px] rounded-[38px] flex justify-center items-center relative">
            <span>Hello</span>
            <Image
              src="/assets/images/banner-bar.png"
              className="w-[28px] h-[28px] absolute top-[-40%] right-[-20%]"
            />
          </div>
          <div className="relative">
            <h2 className="text-[95px] leading-[95px] text-black font-urbanist font-semibold text-center capitalize">
              Im <span className="text-[#FD853A]">Jenny</span>,<br />
              Product Designer
            </h2>
            <Image
              src="/assets/images/banner-bar-lg.png"
              className="w-[71px] h-[74px] absolute left-[-10%] bottom-[-26%]"
            />
          </div>
        </div>
        <div className="banner-second-section flex flex-row relative justify-between ">
          <div className="flex flex-col gap-[24px] w-[328px]">
            <Image
              src="/assets/images/quote-up.png"
              className="w-[36px] h-[36px]"
            />
            <p className="font-lufgamedium font-medium text-[#344054] text-[20px] leading-[26px] tracking-tight">
              Jenny's exceptional product design ensures our website's success.
              Highly recommended.
            </p>
          </div>
          <div className="h-[636px] absolute max-w-[952px] w-full left-0 right-0 mx-auto top-[-60%]">
            <div className="w-full h-full bg-[url('/assets/images/ellipse-img.png')] bg-no-repeat bg-bottom bg-contain  relative">
              <Image
                alt="profile image"
                src="/assets/images/banner-profile-img.png"
                className="h-full"
              />
              <div className="w-[367px] h-[82px] p-[10px] absolute border-[2px] border-[#ffffff] rounded-[50px] btn-banner-group">
                <ul className="flex w-full h-full gap-[10px] backdrop-blur-sm rounded-[60px]">
                  <li
                    className={`h-full flex flex-row items-center justify-center cursor-pointer font-lufgalight btn-banner text-[#ffffff] ${
                      activeBtn === "portfolioBtn" ? "btn-banner-active" : ""
                    }`}
                    onMouseEnter={() => handleHover("portfolioBtn")}
                    onMouseLeave={() => setActiveBtn("portfolioBtn")}
                  >
                    <span
                      className={`${
                        activeBtn === "portfolioBtn" && "btn-banner-act"
                      }`}
                    >
                      Portfolio
                    </span>
                    {activeBtn === "portfolioBtn" && (
                      <span className="h-full flex flex-col justify-center">
                        <ArrowOutwardIcon />
                      </span>
                    )}
                  </li>
                  <li
                    className={`h-full flex flex-row items-center justify-center cursor-pointer font-lufgalight btn-banner text-[#ffffff] ${
                      activeBtn === "hiremeBtn" ? "btn-banner-active" : ""
                    }`}
                    onMouseEnter={() => handleHover("hiremeBtn")}
                    onMouseLeave={() => setActiveBtn("portfolioBtn")}
                  >
                    <span
                      className={`${
                        activeBtn === "hiremeBtn" && "btn-banner-act"
                      }`}
                    >
                      Hire me
                    </span>
                    {activeBtn === "hiremeBtn" && (
                      <span className="h-full flex flex-col justify-center">
                        <ArrowOutwardIcon />
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[21px] w-[169px]">
            <Image
              alt="ratings"
              src="/assets/images/rating-stars.png"
              className="w-[160px] h-[32px]"
            />
            <div className="flex flex-col gap-[5px]">
              <h3 className="font-urbanist font-bold text-[47px] leading-[47px] tracking-[-1.5%] text-black">
                10 Years
              </h3>
              <h5 className="font-lufgalight font-normal text-[20px] leading-[20px] tracking-[-1.5%] text-black text-right">
                Experince
              </h5>
            </div>
          </div>
        </div>
      </section>
    </ScreenContainer>
  );
};

export default Banner;
