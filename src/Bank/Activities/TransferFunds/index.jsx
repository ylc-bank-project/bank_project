import React from "react";
import IntroOutro from "../../IntroOutro";

import { Outlet } from "react-router-dom";

const TransferFunds = () => {
  return (
    <>
      <Outlet />
      <IntroOutro />
    </>
  );
};

export default TransferFunds;
