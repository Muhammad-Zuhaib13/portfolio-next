import React from "react";
import Banner from "../components/banner/Banner";
import MyServices from "../components/myservices/MyServices";
import MyWorkExperience from "../components/myworkexp/MyWorkExperience";
import HireMe from "../components/hireme/HireMe";
const home = () => {
  return (
    <>
      <Banner />
      <MyServices />
      <MyWorkExperience />
      <HireMe />
    </>
  );
};

export default home;
