import React from "react";
import Banner from "../components/banner/Banner";
import MyServices from "../components/myservices/MyServices";
import MyWorkExperience from "../components/myworkexp/MyWorkExperience";
import Portfolio from '../components/portfolio/portfolio'
const home = () => {
  return (
    <>
      <Banner />
      <MyServices />
      <MyWorkExperience />
      <Portfolio/>
    </>
  );
};

export default home;
