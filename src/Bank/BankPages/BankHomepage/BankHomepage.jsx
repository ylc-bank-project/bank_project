import React from "react";
import {
  BankHeader,
  BankingBackground,
  BankingLogo,
} from "../BankPageElements";
import { MarginedContainer } from "../../Shared/Layout";
import { Outlet } from "react-router-dom";

const BankHomepage = () => {
  return (
    <>
      <BankingBackground>
        <MarginedContainer>
          <BankingLogo />
          <BankHeader>Welcome</BankHeader>
          <Outlet />
        </MarginedContainer>
      </BankingBackground>
    </>
  );
};

export default BankHomepage;
