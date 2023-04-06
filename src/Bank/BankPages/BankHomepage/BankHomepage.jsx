import React from "react";
import {
  BankHeader,
  BankingBackground,
  BankingLogo,
  SignInContainer,
} from "../BankPageElements";
import NumberFormat from "react-number-format";
import { MarginedContainer } from "../../Shared/Layout";
import { Link, Outlet, redirect, useParams } from "react-router-dom";
import { activitiesEnums } from "../../enums";
import styled from "styled-components";
import { Stepper } from "../../Shared/Stepper";
import { SignInButton } from "../../Shared/Layout";
import { InfoTip } from "../../Shared/Tip";
import { FirstStep } from "../../Activities/SignIn/TipSteps";

const StyledSignInWrapper = styled.div`
  grid-column: span 12;
  text-align: center;
`;

const BankHomepage = ({ currentActivity, allSteps }) => {
  const { step } = useParams();

  const isCreateAccount = currentActivity === activitiesEnums.CREATINGACCOUNT;

  const PreSignIn = () => (
    <StyledSignInWrapper>
      <InfoTip
        tipContent={<FirstStep />}
        tipTarget={
          <SignInButton
            onClick={() => {
              // setReadyToSign(true);
              // setStep(step + 1);
              // TODO: Should change route to sign-in and increment the step
              console.log("should change route to sign-in");
            }}
          >
            Sign In
          </SignInButton>
        }
        showTip={true}
        showButton={true}
      />
      <SignInButton onClick={() => console.log("register clicked")}>
        REGISTER BUTTON
      </SignInButton>
    </StyledSignInWrapper>
  );

  return (
    <>
      <BankingBackground>
        <MarginedContainer>
          <BankingLogo />
          <BankHeader>Welcome HOMEPAGE</BankHeader>
          {Outlet ? <Outlet /> : <PreSignIn />}
        </MarginedContainer>
      </BankingBackground>
      {/* <Stepper
        {...{ step, allSteps }}
        // onBack={() => {
        // if (step === 1) {
        // setReadyToSign(false);
        // }
        // }}
      /> */}
    </>
  );
};

export default BankHomepage;
