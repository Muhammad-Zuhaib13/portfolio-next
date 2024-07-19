"use client"
import ScreenContainer from "@/app/components/ScreenContainer";
import Link from "next/link";
import React from "react";
import LetsConnect from "../components/letsconnect/LetsConnect";
import {projectData} from '../constant/projectData'
const PortfolioPage = ({ params }: any) => {
  const data = projectData?.filter(project => project.id == params?.projectName);
  console.log("data",data)
  return (
    <section>
      <ScreenContainer>
        {/* Breadcrumb */}
        
        <div className="mt-[30px] mb-[60px]">
          <Link
            href={"/"}
            className="font-lufgalight text-[20px] leading-[26px]"
          >
            Home
          </Link>{" "}
          /{" "}
          <Link
            href={""}
            className="font-lufgalight text-[20px] leading-[26px] text-[#667085]"
          >
            {data[0]?.name}
          </Link>
        </div>
        <div className="flex justify-between mb-[60px]">
          <div className="max-w-[708px] w-full flex flex-col gap-[32px]">
            <h2 className="font-lufgamedium text-[48px] leading-[48px] flex flex-row gap-[6px]">
              <span className="text-[#344054]">
                {data[0]?.mainHeading}
                 <span className="text-[#FD853A]"> {data[0]?.mainHeadingHighlight}</span>{" "}
              </span>
            </h2>
            <p className="font-lufgalight text-[20px] leading-[26px] text-[#667085]">
             {data[0]?.mainDescription}
            </p>
            <h5 className="text-[#000000] text-[16px] leading-[21px] font-lufgalight">
              Project Developed at <b>{data[0]?.projectOf}</b>
            </h5>
          </div>
          <div className="max-w-[159px] w-full flex flex-col gap-[20px]">
            <h5 className="text-[#000000] text-[16px] leading-[21px] font-lufgalight">
              Visit {data[0]?.name + " "} 
              by clicking here
            </h5>
            <div className="rounded-[15px] border-[1px] border-[#F2F2F2] py-[20px] px-[30px] flex justify-center items-center gap-[10px]">
          <a href={data[0]?.link} target="_blank"  rel="noopener noreferrer">
          <img src="/assets/icons/website-globe.svg" />
          </a>
            </div>
          </div>
        </div>

        <div>
          <img
            src={data[0]?.mainBanner}
            width={"100%"}
            height={"550"}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="my-[60px]">
          <h2 className="font-lufgabold font-bold text-[48px] leading-[63px] text-[#344054]">
            About Project{" "}
          </h2>
          <p className="font-lufgalight text-[20px] leading-[26px] text-[#667085] mt-[30px]">
      {data[0]?.aboutProject?.description}
          </p>
        </div>
        <div className="flex gap-[15px] mb-[20px] flex-wrap">
          {data[0]?.aboutProject?.technology?.map((value, index) => (
            <h4 className="w-fit px-[32px] h-[54px] rounded-[24px] bg-[#F2F4F7] text-[20px] leading-[24px] text-black flex justify-center items-center" key={index}>
              {value}
            </h4>
          ))}
        </div>
        <div className="mt-[100px]">
          <img
            src={data[0]?.aboutProject?.aboutBanner}
            width={"100%"}
            height={"550"}
            style={{ objectFit: "cover" }}
          />
        </div>
      </ScreenContainer>
      <LetsConnect />
    </section>
  );
};

export default PortfolioPage;
