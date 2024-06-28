import React from "react";
import Banner from "../components/banner/Banner";
import MyServices from "../components/myservices/MyServices";
import MyWorkExperience from "../components/myworkexp/MyWorkExperience";
const home = () => {
  return (
    <>
      <Banner />
      <MyServices />
      <MyWorkExperience />
    </>
  );
};

export default home;
