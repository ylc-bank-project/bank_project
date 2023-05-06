import React from "react";
import IntroOutro from "../../IntroOutro";

import { Outlet } from "react-router-dom";

const ETransfer = () => {
  return (
    <>
      <Outlet />
      <IntroOutro />
    </>
  );
};

export default ETransfer;
