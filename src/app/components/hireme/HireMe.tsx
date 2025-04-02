"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import React, { useState, useEffect , useRef} from "react";
import { Image } from "react-bootstrap";
import ScreenContainer from "../ScreenContainer";
gsap.registerPlugin(ScrollTrigger);

const HireMe = () => {
  const [dark, setDark] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null); 
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkTheme");
    if (savedTheme === "true") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);
  const handleToggle = () => {
    setDark(!dark);
    if (!dark) {
      document.body.classList.add("dark");
      localStorage.setItem("darkTheme", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkTheme", "false");
    }
  };
   useGSAP(() => {
       if (!svgRef.current) return;
   
       const path = svgRef.current?.querySelector("path");
       if (!path) return;
   
       const pathLength = path.getTotalLength();
   
       // Make path invisible at first
       gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
   
       // Animate stroke drawing on scroll
       gsap.to(path, {
         strokeDashoffset: 0,
         ease: "none",
         duration: 10,
         delay:0.8,
         scrollTrigger: {
           trigger: ".svg-container-child",
           start: "top top", // Start when SVG enters viewport
           end: "bottom top", // End when it's fully out of view
           scrub: 2.5, // Smooth animation as you scroll
         },
       });
   
     }, []);

    
  
    return (
    <section className="hire-me-section bg-[#F2F4F7] dark:bg-black py-[103px]  rounded-[40px]">
      <ScreenContainer className="relative">
        <div className="flex flex-row h-auto items-center">
          <div className="flex-1 max-w-[603px] w-full">
            <Image
              alt="hire me"
              src="/assets/images/hireme-img.png"
              className="w-full h-full"
            />
          </div>
          <div className="flex-1 flex flex-col gap-[47px]">
            <h2 className="text-[64px] leading-[64px] font-lufgasemibold text-[#344054]">
              Why <span className="text-[#FD853A]">Hire me</span>?
            </h2>
            <p className="text-[#98A2B3] dark:text-white text-[20px] leading-[26px] font-lufgalight w-[444px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales
            </p>
            <div className="flex flex-row">
              <div className="flex flex-col gap-[10px] flex-1">
                <h2 className="text-[#1D2939] dark:text-white text-[36px] leading-[47px] font-lufgamedium">
                  450+
                </h2>
                <p className="text-[#667085] text-[20px] leading-[26px] font-lufgalight">
                  Project Completed
                </p>
              </div>
              <div className="flex flex-col gap-[10px] flex-1">
                <h2 className="text-[#1D2939] dark:text-white text-[36px] leading-[47px] font-lufgamedium">
                  450+
                </h2>
                <p className="text-[#667085] text-[20px] leading-[26px] font-lufgalight">
                  Project Completed
                </p>
              </div>
            </div>
            <div>
              <button
                className="font-lufgasemibold text-[32px] leading-[42px] text-[#151515] dark:text-[#667085] px-[59px] py-[33px] rounded-[32px] border-[1px] border-[#151515] dark:border-[#667085]"
                onClick={handleToggle}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
        <div className="svg-container-child absolute top-0 right-0-0 w-full flex justify-end h-[361px]">
          <svg
            width="740"
            height="361"
            viewBox="0 0 740 361"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
          >
            <path
              d="M739.122 -123.867H354.034L0.0556847 360.602H384.415L739.122 -123.867Z"
              fill="#BCFFE1"
            />
          </svg>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default HireMe;
