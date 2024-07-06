"use client";
import React, { useState } from "react";
import ScreenContainer from "../ScreenContainer";
import { SwiperSlide, Swiper } from "swiper/react";
import { A11y, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Image } from "react-bootstrap";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
const MyServices = () => {
  const [activeBtn, setActiveBtn] = useState("portfolio-card");
  const handleHover = (key: string) => {
    setActiveBtn(key);
  };
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };
  const myServicesData = [
    {
      id: 1,
      title: "Web Designing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
      image: "/assets/images/services-card-new.png",
      link: "/",
    },
    {
      id: 2,
      title: "SPA Web Designing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
      image: "/assets/images/services-card-new.png",
      link: "/",
    },
    {
      id: 3,
      title: "SEO Optimization",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
      image: "/assets/images/services-card-new.png",
      link: "/",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
      image: "/assets/images/services-card-new.png",
      link: "/",
    },
  ];
  console.log("activeBtn", activeBtn);

  return (
    <section className="my-portfolio-section  bg-no-repeat bg-bottom bg-cover h-[878px] w-full rounded-[60px] py-[97px]">
      <ScreenContainer>
        <div className="flex flex-col gap-[96px]">
          <div className="flex justify-between border">
            <div className="flex flex-row justify-between items-center border flex-1 ">
              <h2 className="font-lufgamedium text-[48px] leading-[48px] flex flex-row gap-[6px]">
                <span className="text-[#344054]">
                  Lets have a look at
                  <br /> my <span className="text-[#FD853A]">
                    Portfolio
                  </span>{" "}
                </span>
              </h2>
            </div>
            <div className=" border flex justify-end flex-1 items-center">
              <button className="bg-[#FD853A] rounded-[60px] h-[66px] w-[144px] text-[20px] text-white font-lufgabold leading-[26px] ">
                See All
              </button>
            </div>
          </div>

          <div className="portfolio-slider-section">
            <Swiper
              slidesPerView={3}
              spaceBetween={24}
              centeredSlides={false}
              //  speed={11000}
              pagination={{
                clickable: true,
              }}
              freeMode={true}
              modules={[Pagination, Navigation, A11y, FreeMode]}
              className="my-portfolio-swiper w-full"
              loop={true}
            >
              {myServicesData.map((data) => {
                return (
                  <SwiperSlide key={data?.id} virtualIndex={data?.id}>
                    <div
                      className={`border max-w-[633px] w-full h-[371px] relative overflow-scroll portfolio-card ${
                        hoveredIndex === data?.id ? "portfolio-card-hover" : ""
                      }`}
                      onMouseEnter={() => handleMouseEnter(data?.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Image
                        src="/assets/images/portfolio1.png"
                        className="rounded-[12px] w-full h-[846px]"
                      />
                      <div className="absolute bottom-0 left-[20px] ">
                        <h2 className="text-[70px] leading-[91px] font-lufgabold text-white ">
                          Liante
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default MyServices;
