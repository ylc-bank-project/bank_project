import React from "react";
import {
  BankHeader,
  BankingBackground,
  BankingLogo,
} from "../BankPageElements";
import { MarginedContainer } from "../../Shared/Layout";
import { Link, Outlet, useParams } from "react-router-dom";
import { activitiesEnums } from "../../enums";

const BankHomepage = ({ currentActivity }) => {
  const { step } = useParams();

  const isCreateAccount = currentActivity === activitiesEnums.CREATINGACCOUNT;

  return (
    <BankingBackground>
      <MarginedContainer>
        <BankingLogo />
        <BankHeader>This would be the homepage</BankHeader>
        <Link to={"AccountRegistration"}>Go to Registration</Link>
        <Outlet />
      </MarginedContainer>
    </BankingBackground>
  );
};

export default BankHomepage;
