"use client";
import React from "react";
import ScreenContainer from "../ScreenContainer";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Image } from "react-bootstrap";
import "swiper/css"; // Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const MyServices = () => {
  return (
    <section className="my-services-section bg-[url('/assets/images/service-bg-img.png')] bg-no-repeat bg-bottom bg-cover h-[878px] w-full rounded-[60px] pt-[116px] pb-[52px]">
      <ScreenContainer>
        <div className="flex flex-col gap-[96px]">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-lufgamedium text-[48px] leading-[48px] flex flex-row gap-[6px]">
              <span className="text-[#ffffff]">My</span>
              <span className="text-[#FD853A]">Services</span>
            </h2>
            <p className="text-[#FFFFFF] max-w-[576px] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>
          <div className="services-slider-section">
            <Swiper
              slidesPerView={3}
              spaceBetween={24}
              centeredSlides={false}
              speed={11000}
              // autoplay={{
              //   delay: 1,
              //   disableOnInteraction: false,
              // }}
              pagination={true}
              freeMode={true}
              modules={[Pagination]}
              className="home-slider-swipper w-full"
              loop={true}
            >
              <SwiperSlide className="Category-swiperslide">
                <div className="services-card ">
                  <div className="w-full pt-[44px] pb-[23px] services-card-heading">
                    <h3 className="text-[#ffffff] font-lufgamedium font-medium text-[32px] leading-[42px] px-[37px]">
                      UI/ UX Design
                    </h3>
                  </div>
                  <div className="services-card-mid"></div>
                  <div className="services-card-img-link">
                    <div className="w-full h-full relative">
                      <Image
                        src="/assets/images/services-card-img-1.png"
                        alt="services card image"
                        className="w-full h-full"
                      />
                      <button className="text-[#ffffff] bg-[#1D2939] p-[22px] rounded-full absolute bottom-0 right-0">
                        <ArrowOutwardIcon style={{ fontSize: "40px" }} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="Category-swiperslide">
                <div className="services-card ">
                  <div className="w-full pt-[44px] pb-[23px] services-card-heading">
                    <h3 className="text-[#ffffff] font-lufgamedium font-medium text-[32px] leading-[42px] px-[37px]">
                      UI/ UX Design
                    </h3>
                  </div>
                  <div className="services-card-mid"></div>
                  <div className="services-card-img-link">
                    <div className="w-full h-full relative">
                      <Image
                        src="/assets/images/services-card-img-1.png"
                        alt="services card image"
                        className="w-full h-full"
                      />
                      <button className="text-[#ffffff] bg-[#1D2939] p-[22px] rounded-full absolute bottom-0 right-0">
                        <ArrowOutwardIcon style={{ fontSize: "40px" }} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="Category-swiperslide">
                <div className="services-card ">
                  <div className="w-full pt-[44px] pb-[23px] services-card-heading">
                    <h3 className="text-[#ffffff] font-lufgamedium font-medium text-[32px] leading-[42px] px-[37px]">
                      UI/ UX Design
                    </h3>
                  </div>
                  <div className="services-card-mid"></div>
                  <div className="services-card-img-link">
                    <div className="w-full h-full relative">
                      <Image
                        src="/assets/images/services-card-img-1.png"
                        alt="services card image"
                        className="w-full h-full"
                      />
                      <button className="text-[#ffffff] bg-[#1D2939] p-[22px] rounded-full absolute bottom-0 right-0">
                        <ArrowOutwardIcon style={{ fontSize: "40px" }} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="Category-swiperslide">
                <div className="services-card ">
                  <div className="w-full pt-[44px] pb-[23px] services-card-heading">
                    <h3 className="text-[#ffffff] font-lufgamedium font-medium text-[32px] leading-[42px] px-[37px]">
                      UI/ UX Design
                    </h3>
                  </div>
                  <div className="services-card-mid"></div>
                  <div className="services-card-img-link">
                    <div className="w-full h-full relative">
                      <Image
                        src="/assets/images/services-card-img-1.png"
                        alt="services card image"
                        className="w-full h-full"
                      />
                      <button className="text-[#ffffff] bg-[#1D2939] p-[22px] rounded-full absolute bottom-0 right-0">
                        <ArrowOutwardIcon style={{ fontSize: "40px" }} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default MyServices;
