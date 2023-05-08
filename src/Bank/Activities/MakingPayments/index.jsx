import React from "react";
import IntroOutro from "../../IntroOutro";

import "react-datepicker/dist/react-datepicker.css";
import { Outlet } from "react-router-dom";

const MakingPayments = () => {
  return (
    <>
      <Outlet />
      <IntroOutro />
    </>
  );
};

export default MakingPayments;
