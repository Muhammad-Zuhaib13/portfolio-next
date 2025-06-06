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
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion, useScroll, useTransform } from "framer-motion";
const MyServices = () => {
  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  return (
    <section className="my-services-section bg-[url('/assets/images/service-bg-img.png')]  bg-no-repeat bg-bottom bg-cover h-[878px] w-full rounded-[60px] pt-[116px] pb-[52px]">
      <ScreenContainer>
        <div className="flex flex-col gap-[96px]">
          <div className="flex lg:flex-row flex-col justify-between items-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-lufgamedium text-[48px] leading-[48px] flex flex-row gap-[6px]"
            >
              <span className="text-[#ffffff]">My</span>
              <span className="text-[#FD853A]">Services</span>
            </motion.h2>
            <p className="text-[#FFFFFF] max-w-[576px] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>
          <motion.div className="services-slider-section">
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
              className="my-services-swiper w-full"
              loop={true}
            >
              {myServicesData.map((data: any, index: number) => {
                return (
                  <SwiperSlide
                    key={data?.id}
                    virtualIndex={data?.id}
                    className="my-services-swiperslide"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ amount: 0.3 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: index * 0.3,
                      }}
                      className="services-card"
                    >
                      <div className="w-full pt-[44px] pb-[23px] services-card-heading">
                        <h3 className="text-[#ffffff] font-lufgamedium font-medium text-[32px] leading-[42px] px-[37px]">
                          {data?.title}
                        </h3>
                      </div>
                      <div className="services-card-mid"></div>
                      <div className="services-card-img-link">
                        <div className="w-full h-full relative">
                          <Image
                            src={data?.image}
                            alt={data?.title}
                            className="w-full h-full"
                          />
                          <button className="text-[#ffffff] bg-[#1D2939] p-[22px] w-[114px] h-[114px] rounded-full absolute bottom-0 right-0 my-services-btn">
                            <ArrowOutwardIcon style={{ fontSize: "45px" }} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default MyServices;
