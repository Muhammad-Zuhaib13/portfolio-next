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
const home = () => {
  return (
    <>
      <Banner />
      <MyServices />
      <MyWorkExperience />
      <HireMe />
      <Portfolio />
      <Testimonials />
      <LetsConnect />
      <Marquee />
      <MyBlogs />
    </>
  );
};

export default home;
