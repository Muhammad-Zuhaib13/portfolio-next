"use client";
import React from "react";
import { Image } from "react-bootstrap";
import { SwiperSlide, Swiper } from "swiper/react";
import { A11y, FreeMode, Navigation } from "swiper/modules";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "motion/react";

const Testimonials = () => {
  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const testimonialsData = [
    {
      id: 1,
      name: "Jayesh Patil",
      roleOrganization: "CEO Lirante",
      rating: "5.0",
      profileImg: "/assets/images/profile-img-1.png",
      startImg: "/assets/images/rating-stars.png",
      comment:
        "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    },
    {
      id: 2,
      name: "Jayesh Patil",
      roleOrganization: "CEO Lirante",
      rating: "5.0",
      profileImg: "/assets/images/profile-img-1.png",
      startImg: "/assets/images/rating-stars.png",
      comment:
        "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    },
    {
      id: 3,
      name: "Jayesh Patil",
      roleOrganization: "CEO Lirante",
      rating: "5.0",
      profileImg: "/assets/images/profile-img-1.png",
      startImg: "/assets/images/rating-stars.png",
      comment:
        "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    },
    {
      id: 4,
      name: "Jayesh Patil",
      roleOrganization: "CEO Lirante",
      rating: "5.0",
      profileImg: "/assets/images/profile-img-1.png",
      startImg: "/assets/images/rating-stars.png",
      comment:
        "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    },
  ];
  return (
    <section className="testimonials-section rounded-[50px] w-full h-auto pt-[116px] pb-[185px] bg-[url('/assets/images/testimonials-bg-img.png')]  bg-no-repeat bg-bottom bg-cover">
      <div className="w-full h-auto flex flex-col gap-[96px]">
        <div className="w-full flex flex-col gap-[14px]">
          <div className="relative max-w-[742px] w-full mx-auto">
            <h2 className="text-[#ffffff] font-lufgamedium font-medium text-[48px] leading-[62.65px] text-center capitalize relative">
              Testimonials That
            </h2>
            <h2 className="text-[#ffffff] font-lufgamedium font-medium text-[48px] leading-[62.65px] text-center capitalize">
              Speak to <span className="text-[#FD853A]">My Results</span>
            </h2>
            <Image
              src="/assets/images/testimonial-bar.png"
              className="w-[28px] h-[28px] absolute top-0 right-[19%] object-cover"
            />
          </div>
          <div className="max-w-[742px] w-full mx-auto relative">
            <p className="text-[20px] font-lufgalight font-normal text-[#ffffff] leading-[26.1px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed lobortis orci elementum egestas
              lobortis.
            </p>
            <Image
              src="/assets/images/testimonial-star.png"
              className="w-[28px] h-[28px] absolute top-0 right-0 object-cover"
            />
            <Image
              src="/assets/images/testimonial-star.png"
              className="w-[28px] h-[28px] absolute bottom-0 left-0 object-cover"
            />
          </div>
        </div>
        <div className="testimonial-slider w-full relative">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            centeredSlides={true}
            speed={11000}
            freeMode={true}
            modules={[Navigation, A11y, FreeMode]}
            className="my-testimonials-swiper w-full"
            loop={true}
          >
            {testimonialsData.map((data) => {
              return (
                <SwiperSlide
                  key={data?.id}
                  virtualIndex={data?.id}
                  className="max-w-[784px] w-full h-[265px]"
                >
                  <motion.div
                    variants={slideVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="testimonial-card"
                  >
                    <div className="testimonials-card-tgroup flex flex-row justify-between relative">
                      <div className="flex flex-col gap-[14px]">
                        <div className="flex flex-row items-center gap-[12px]">
                          <div className="">
                            <Image
                              src={data?.profileImg}
                              className="w-[55px] h-[55px] rounded-full object-cover overflow-hidden"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h2 className="text-[28.2px] text-[#FCFCFD] leading-[28px] font-bold font-urbanist">
                              {data?.name}
                            </h2>
                            <h4 className="text-[18.28pxpx] text-[#FCFCFD] leading-[21.93px] font-light font-urbanist">
                              {data?.roleOrganization}
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center">
                          <Image
                            src={data?.startImg}
                            className="w-[160px] h-[32px] object-cover"
                          />
                          <span className="font-lufgamedium font-medium text-[25.69px] leading-[33.53px] text-[#ffffff] flex flex-row items-baseline">
                            {data?.rating}
                          </span>
                        </div>
                      </div>
                      <div className="absolute right-[-5%] top-[-45%]">
                        <FormatQuoteIcon
                          sx={{
                            fontSize: "180px !important",
                            color: "#6670854D",
                          }}
                        />
                      </div>
                    </div>
                    <div className="testimonial-comment">
                      <p className="text-[20px] font-lufgalight font-normal text-[#ffffff] leading-[26.1px] text-justify">
                        {data?.comment}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
