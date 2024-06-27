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
  return (
    <ScreenContainer>
      <nav className="navbar bg-[#171717] h-[86px] w-full rounded-[50px] mt-[40px] flex flex-row justify-between px-[10px]">
        <ul className="flex flex-row gap-[14.17px] justify-center items-center">
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
        <div className="w-[307px] h-full flex flex-row justify-center items-center">
          <span className="text-[#FFFFFF] text-[47px] font-urbanist uppercase font-bold bg-[#FD853A] px-[8px] rounded-[50%]">JC</span>
          <span className="text-[#FFFFFF] text-[47px] font-urbanist uppercase font-bold">JCREA</span>
        </div>
        <ul className="flex flex-row gap-[14.17px] justify-center items-center">
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
      </nav>
    </ScreenContainer>
  );
};

export default Navbar;
