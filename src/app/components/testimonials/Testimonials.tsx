import React from "react";
import { Image } from "react-bootstrap";
import { SwiperSlide, Swiper } from "swiper/react";
import { A11y, FreeMode, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Testimonials = () => {
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
              {testimonialsData.map((data) => {
                return (
                  <SwiperSlide key={data?.id} virtualIndex={data?.id}>
                    <div
                      className=""
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
    </section>
  );
};

export default Testimonials;
