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
      {/* <BasicTooltip
        content={<FirstStep />}
        showTip={step === 0}
        staticOnly={true}
        placement="bottom-center"
      >
        <SignInButton
          onClick={() => {
            setReadyToSign(true);
            setStep(step + 1);
          }}
        >
          Sign In
        </SignInButton>
      </BasicTooltip> */}

      <InfoTip
        tipContent={<FirstStep />}
        tipTarget={
          <SignInButton
            onClick={() => {
              // setReadyToSign(true);
              // setStep(step + 1);
              console.log("should change route to sign-in");
            }}
          >
            Sign In
          </SignInButton>
        }
        showTip={true}
        showButton={true}
      />
    </StyledSignInWrapper>
  );

  return (
    <>
      <BankingBackground>
        <MarginedContainer>
          <BankingLogo />
          <BankHeader>Welcome</BankHeader>
          {Outlet ? <Outlet /> : <PreSignIn />}
        </MarginedContainer>
      </BankingBackground>
      <Stepper
        {...{ step, allSteps }}
        // onBack={() => {
        // if (step === 1) {
        // setReadyToSign(false);
        // }
        // }}
      />
    </>
  );
};

export default BankHomepage;
