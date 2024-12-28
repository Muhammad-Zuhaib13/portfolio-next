"use client";
import React, {useState} from "react";
import ScreenContainer from "../ScreenContainer";
const Navbar = () => {
  const links = ["Home", "About", "Services", "Resume", "Projects", "Contact"];
  const midIndex = Math.ceil(links.length / 2);
  const firstHalfNav = links.slice(0, midIndex);
  const secondHalfNav = links.slice(midIndex);
  const [activeBtn, setActiveBtn] = useState("Home");
  const handleNavigate = (key: string) => {
    setActiveBtn(key);
  }
  const [open, setOpen] = useState<boolean>(false);
  return (
    <ScreenContainer>
      <nav className="navbar lg:bg-[#171717] bg-transparent h-[86px] w-full rounded-[50px] lg:mt-[40px] mt-0 flex flex-row justify-between lg:px-[10px] px-0">
        <ul className="hidden flex-row gap-[14.17px] justify-center items-center lg:flex">
          {firstHalfNav.map((link) => (
            <li
              key={link}
              className={`text-[20px]  rounded-[60px] leading-[26px] transition-all duration-75 font-lufgalight text-[#FFFFFF] w-[139px] h-[66px] flex flex-col justify-center items-center cursor-pointer ${activeBtn === link ? "bg-[#FD853A]" : ""}`}
              onClick={() => handleNavigate(link)}
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="w-[307px] h-full flex flex-row lg:justify-center justify-start items-center">
          <span className="text-[#FFFFFF] text-[47px] font-urbanist uppercase font-bold bg-[#FD853A] px-[8px] rounded-[50%]">JC</span>
          <span className="lg:text-[#FFFFFF] text-black text-[47px] font-urbanist uppercase font-bold">JCREA</span>
        </div>
        <ul className="lg:flex flex-row gap-[14.17px] justify-center items-center hidden">
          {secondHalfNav.map((link) => (
            <li
            key={link}
            className={`text-[20px]  rounded-[60px] leading-[26px] transition-all duration-75 font-lufgalight text-[#FFFFFF] w-[139px] h-[66px] flex flex-col justify-center items-center cursor-pointer ${activeBtn === link ? "bg-[#FD853A]" : ""}`}
            onClick={() => handleNavigate(link)}
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex items-center justify-center ">
            <button
              className={`container-hamburger ${open ? "collapse-bar" : ""}`}
              // onClick={toggleDrawer(true)}
            >
              <div className="bar-one sm:w-[20px] sm:h-[2px]"></div>
              <div className="bar-two sm:w-[20px] sm:h-[2px]"></div>
              <div className="bar-three sm:w-[20px] sm:h-[2px]"></div>
            </button>
          </div>
      </nav>
    </ScreenContainer>
  );
};

export default Navbar;
