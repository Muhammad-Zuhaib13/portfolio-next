import React from "react";
import ScreenContainer from "../ScreenContainer";

const MyWorkExperience = () => {
  const data = [
    {
      id: 1,
      companyName: "Codevative",
      startData: "Aug 2023",
      endData: "present",
      position: "Frontend Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales ",
    },
    {
      id: 2,
      companyName: "Cdl1000",
      startData: "Aug 2022",
      endData: "Aug 2023",
      position: "Associate Frontend Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales ",
    },
    {
      id: 3,
      companyName: "Afiniti",
      startData: "Aug 2021",
      endData: "Aug 2022",
      position: "Intern Software Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales ",
    },
    
  ];
  return (
    <section className="my-work-experience-section">
      <ScreenContainer>
        <div className="flex flex-col">
          <div className="my-[85px]">
            <h1 className="font-lufgamedium text-[64px] leading-[64px] text-[#344054] text-center">
              My <span className="text-[#FD853A]">Work Experience</span>
            </h1>
          </div>
          <div className="flex flex-col gap-[6px]">
            {/* 1 */}
            {data?.map((value, index) => {
              return (
                <div className=" flex gap-[130px] flex-row" key={value?.id}>
                  {/* //company */}
                  <div className="flex-1  company flex flex-col h-inherit justify-between pb-[48px]">
                    <div className="flex flex-col gap-[13px]">
                      <h3 className="text-[40px]  font-lufgasemibold leading-[40px] text-[#344054]">
                        {value?.companyName}
                      </h3>
                      <p className="text-[#98A2B3 text-[24px] leading-[24px] font-lufgalight">
                        {value?.startData} - {value?.endData}
                      </p>
                    </div>
                  </div>
                  {/* //company end */}

                  <div className="w-[48px]  flex flex-col items-center gap-[6px]">
                    <div className={`w-[26px] h-[34px] rounded-[50%] outline-dashed outline-2 outline-offset-[6px]`}
                      style={{ backgroundColor: index % 2 === 0 ? '#FD853A' : '#1D2939' }}

                    ></div>
                    <div
                      className={`border-dashed border-[1px] w-[1px] border-[#1D2939] h-full ${
                        data?.length === index + 1 ? "opacity-0" : "opacity-1"
                      }`}
                    ></div>
                  </div>
                  {/* //experience */}
                  <div className="flex-1   flex flex-col gap-[48px] pb-[48px]">
                    <div className="flex flex-col gap-[13px]">
                      <h3 className="text-[40px]  font-lufgasemibold leading-[40px] text-[#344054]">
                        {value?.position}
                      </h3>
                      <p className="text-[#98A2B3 text-[20px] leading-[26px] font-lufgalight">
                        {value?.description}
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

export default MyWorkExperience;
