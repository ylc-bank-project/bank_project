import React from "react";
import IntroOutro from "../../IntroOutro";
import { Outlet } from "react-router-dom";

const Overview = () => {
  return (
    <>
      <IntroOutro />
      <Outlet />
    </>
  );
};

export default Overview;
