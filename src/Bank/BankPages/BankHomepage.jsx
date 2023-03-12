import React from "react";
import { BankHeader, BankingBackground, BankingLogo } from "./BankPageElements";
import { MarginedContainer } from "../Shared/Layout";

const BankHomepage = () => {
  return (
    <BankingBackground>
      <MarginedContainer>
        <BankingLogo />
        <BankHeader>This would be the homepage</BankHeader>
      </MarginedContainer>
    </BankingBackground>
  );
};

export default BankHomepage;
