"use client";
import React, { useState } from "react";
import ScreenContainer from "../ScreenContainer";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Image } from "react-bootstrap";
const MyBlogs = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const myServicesData = [
    {
      id: 1,
      title: "Web Designing",
      image: "/assets/images/blog-img-1.png",
      writer: "Einstine",
      publisDate: "10 Nov, 2023",
      blogdes: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      link: "/",
    },
    {
      id: 2,
      title: "SPA Web Designing",
      image: "/assets/images/blog-img-2.png",
      writer: "Einstine",
      publisDate: "10 Nov, 2023",
      blogdes: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      link: "/",
    },
    {
      id: 3,
      title: "SEO Optimization",
      image: "/assets/images/blog-img-3.png",
      writer: "Einstine",
      publisDate: "10 Nov, 2023",
      blogdes: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      link: "/",
    },
    {
      id: 4,
      title: "UI/UX Design",
      image: "/assets/images/blog-img-2.png",
      writer: "Einstine",
      publisDate: "10 Nov, 2023",
      blogdes: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      link: "/",
    },
    {
      id: 5,
      title: "UI/UX Design",
      image: "/assets/images/blog-img-2.png",
      writer: "Einstine",
      publisDate: "10 Nov, 2023",
      blogdes: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      link: "/",
    },
    {
      id: 6,
      title: "UI/UX Design",
      image: "/assets/images/blog-img-2.png",
      writer: "Einstine",
      publisDate: "10 Nov, 2023",
      blogdes: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      link: "/",
    },
  ];
  const myServicesFirstRow = myServicesData.slice(0, 3);
  const myServicesRestRows = myServicesData.slice(3);
  console.log(toggle);
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
              <button
                onClick={handleToggle}
                className="w-[144px] h-[66px] bg-[#FD853A] uppercase font-lufgasemibold text-white text-[20px] leading-[26px] rounded-[60px] focus:outline-none"
              >
                {toggle ? "See Less" : "See All"}
              </button>
            </div>
          </div>
          <div className="my-blogs-cards flex flex-row flex-wrap gap-[25px] justify-between">
            {myServicesFirstRow?.splice(0, 3).map((data) => {
              return (
                <div
                  className="myblogs-card flex flex-col gap-[35px]"
                  key={data?.id}
                >
                  <div className="myblogs-card-img-link">
                    <div className="w-full h-full relative">
                      <Image
                        src={data?.image}
                        alt={data?.title}
                        className="w-full h-[416px]"
                      />
                      <button className="text-[#ffffff] bg-[#1D2939]  w-[114px] h-[114px] rounded-full absolute bottom-0 right-0 myblogs-btn">
                        <ArrowOutwardIcon style={{ fontSize: "45px" }} />
                      </button>
                    </div>
                  </div>
                  <div className="myblogs-card-body flex flex-col gap-[35px]">
                    <div>
                      <h4 className="w-fit px-[32px] h-[54px] rounded-[24px] bg-[#F2F4F7] text-[20px] leading-[24px] text-black flex justify-center items-center">
                        {data?.title}
                      </h4>
                    </div>
                    <div>
                      <ul className="flex flex-row gap-[35px] myblogs-ul">
                        <li className="text-[20px] leading-[24px] text-[#344054]">
                          Jayesh Patil
                        </li>
                        <li className="text-[20px] leading-[24px] text-[#344054]">
                          10 Nov, 2023
                        </li>
                      </ul>
                    </div>
                    <div className="">
                      <p className="font-lufgalight text-[32px] leading-[42px] text-[#344054] line-clamp-2">
                        Design Unraveled: Behind the Scenes of UI/UX Magic
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {toggle &&
              myServicesRestRows?.splice(0, 3).map((data) => {
                return (
                  <div
                    className="myblogs-card flex flex-col gap-[35px]"
                    key={data?.id}
                  >
                    <div className="myblogs-card-img-link">
                      <div className="w-full h-full relative">
                        <Image
                          src={data?.image}
                          alt={data?.title}
                          className="w-full h-[416px]"
                        />
                        <button className="text-[#ffffff] bg-[#1D2939]  w-[114px] h-[114px] rounded-full absolute bottom-0 right-0 myblogs-btn">
                          <ArrowOutwardIcon style={{ fontSize: "45px" }} />
                        </button>
                      </div>
                    </div>
                    <div className="myblogs-card-body flex flex-col gap-[35px]">
                      <div>
                        <h4 className="w-fit px-[32px] h-[54px] rounded-[24px] bg-[#F2F4F7] text-[20px] leading-[24px] text-black flex justify-center items-center">
                          {data?.title}
                        </h4>
                      </div>
                      <div>
                        <ul className="flex flex-row gap-[35px] myblogs-ul">
                          <li className="text-[20px] leading-[24px] text-[#344054]">
                            Jayesh Patil
                          </li>
                          <li className="text-[20px] leading-[24px] text-[#344054]">
                            10 Nov, 2023
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <p className="font-lufgalight text-[32px] leading-[42px] text-[#344054] line-clamp-2">
                          Design Unraveled: Behind the Scenes of UI/UX Magic
                        </p>
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
