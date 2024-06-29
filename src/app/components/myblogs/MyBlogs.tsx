import React from "react";
import ScreenContainer from "../ScreenContainer";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Image } from "react-bootstrap";
const MyBlogs = () => {
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
  return (
    <section className="my-blogs-section">
      <ScreenContainer>
        <div className="flex flex-col my-[97px] gap-[47px]">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-lufgabold font-bold text-[48px] leading-[63px] text-[#344054]">
              From my
              <br /> blog post
            </h2>
            <div>
              <button className="w-[144px] h-[66px] bg-[#FD853A] uppercase text-white text-[20px] leading-[26px] rounded-[60px]">
                See All
              </button>
            </div>
          </div>
          <div className="my-blogs-cards flex flex-row flex-wrap gap-[25.5px]">
            {myServicesData.map((data) => {
              return (
                <div className="services-card">
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
                </div>
              );
            })}
          </div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default MyBlogs;
