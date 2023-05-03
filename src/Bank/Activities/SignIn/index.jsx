import React from "react";
import { Outlet } from "react-router-dom";
import IntroOutro from "../../IntroOutro";

const SignIn = () => {
  return (
    <>
      <Outlet />
      <IntroOutro />
    </>
  );
};

export default SignIn;
