import React from "react";
import Banner from "../components/banner/Banner";
import MyServices from "../components/myservices/MyServices";
import MyWorkExperience from "../components/myworkexp/MyWorkExperience";
import HireMe from "../components/hireme/HireMe";
import LetsConnect from "../components/letsconnect/LetsConnect";
const home = () => {
  return (
    <>
      <Banner />
      <MyServices />
      <MyWorkExperience />
      <HireMe />
      <LetsConnect />
    </>
  );
};

export default home;
