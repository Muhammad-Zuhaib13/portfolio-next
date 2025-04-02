import React from "react";
import Banner from "../components/banner/Banner";
import MyServices from "../components/myservices/MyServices";
import MyWorkExperience from "../components/myworkexp/MyWorkExperience";
import Portfolio from "../components/portfolio/portfolio";
import HireMe from "../components/hireme/HireMe";
import LetsConnect from "../components/letsconnect/LetsConnect";
import Marquee from "../components/marquee/Marquee";
import MyBlogs from "../components/myblogs/MyBlogs";
import Testimonials from "../components/testimonials/Testimonials";
import ClientHome from "./ClientHome";
const home = () => {
  return (
    <ClientHome />
    // <main>
    //   <Banner />
    //   <MyServices />
    //   <MyWorkExperience />
    //   <HireMe />
    //   <Portfolio />
    //   <Testimonials />
    //   <LetsConnect />
    //   <Marquee />
    //   <MyBlogs />
    //   <div className="svg-container absolute top-0 left-0 right-0 flex flex-col justify-center items-center w-full h-[5966px]">
    //     <svg
    //       width="1441"
    //       height="5966"
    //       viewBox="0 0 1441 5966"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-full"
    //     >
    //       <path
    //         d="M1385.69 -99.79L322.571 1367.06L1105.7 2430.83L617.569 3104.81L1107.68 3773.48L619.974 4441.83L1126.18 5110.86H320.69L919.705 5869.62"
    //         stroke="#BCFFE1"
    //         strokeWidth="311"
    //       />
    //     </svg>
    //   </div>
    // </main>
  );
};

export default home;
