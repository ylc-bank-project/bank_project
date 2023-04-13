import React from "react";
import {
  BankHeader,
  BankingBackground,
  BankingLogo,
  SignInContainer,
} from "../BankPageElements";
// import NumberFormat from "react-number-format";
import { MarginedContainer } from "../../Shared/Layout";
import { Link, Outlet, redirect, useParams } from "react-router-dom";
// import { activitiesEnums } from "../../enums";
// import styled from "styled-components";
// import { Stepper } from "../../Shared/Stepper";
// import { SignInButton } from "../../Shared/Layout";
// import { InfoTip } from "../../Shared/Tip";
// import { FirstStep } from "../../Activities/SignIn/TipSteps";

const BankHomepage = ({ currentActivity, allSteps }) => {
  console.log("Outlet in BankHomePage: ", Outlet);
  const { stepIndex, activity } = useParams();

  return (
    <>
      <BankingBackground>
        <MarginedContainer>
          <BankingLogo />
          <BankHeader>Welcome HOMEPAGE</BankHeader>
          <Outlet />
        </MarginedContainer>
      </BankingBackground>
    </>
  );
};

export default BankHomepage;
