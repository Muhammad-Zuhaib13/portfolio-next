import React from "react";
import ScreenContainer from "../ScreenContainer";

const MyWorkExperience = () => {
  return (
    <section className="my-work-experience-section">
      <ScreenContainer>
        <div className="flex flex-col">
          <div className="my-[85px]">
            <h1 className="font-lufgamedium text-[64px] leading-[64px] text-[#344054] text-center">
              My <span className="text-[#FD853A]">Work Experience</span>
            </h1>
          </div>
          <div className="mb-[155px]"></div>
        </div>
      </ScreenContainer>
    </section>
  );
};

export default MyWorkExperience;
