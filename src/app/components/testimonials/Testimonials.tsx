import React from "react";
import { Image } from "react-bootstrap";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Jayesh Patil",
      roleOrganization: "CEO Lirante",
      rating: "5.0",
      profileImg: "/",
      startImg: "/",
      comment:
        "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    },
    {
      id: 2,
      name: "Jayesh Patil",
      roleOrganization: "CEO Lirante",
      rating: "5.0",
      profileImg: "/",
      startImg: "/",
      comment:
        "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    },
    {
      id: 3,
      name: "Jayesh Patil",
      roleOrganization: "CEO Lirante",
      rating: "5.0",
      profileImg: "/",
      startImg: "/",
      comment:
        "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    },
    {
      id: 4,
      name: "Jayesh Patil",
      roleOrganization: "CEO Lirante",
      rating: "5.0",
      profileImg: "/",
      startImg: "/",
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
        <div className="testimonial-slider w-full relative"></div>
      </div>
    </section>
  );
};

export default Testimonials;
