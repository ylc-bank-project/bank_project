import React from "react";
import { Outlet } from "react-router-dom";
import {
  BankingBackground,
  BankingContainer,
  BankingFooter,
  BankingHeader,
  CleanBackground,
} from "../BankPageElements";
import { MarginedContainer } from "../../Shared/Layout";

const Accounts = () => {
  return (
    <BankingBackground>
      <BankingHeader />
      <CleanBackground>
        <MarginedContainer>
          <BankingContainer>
            <Outlet />
          </BankingContainer>
        </MarginedContainer>
      </CleanBackground>
      <BankingFooter />
    </BankingBackground>
  );
};

export default Accounts;
