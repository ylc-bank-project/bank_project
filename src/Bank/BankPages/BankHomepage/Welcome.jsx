import React from "react";
// import {
//   BankHeader,
//   BankingBackground,
//   BankingLogo,
// } from "../BankPageElements";
// import { MarginedContainer } from "../../Shared/Layout";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { activitiesEnums, bankPageEnums } from "../../enums";
import styled from "styled-components";
import { SignInButton } from "../../Shared/Layout";
import { InfoTip } from "../../Shared/Tip";

const StyledSignInWrapper = styled.div`
  grid-column: span 12;
  text-align: center;
`;

const Welcome = ({ currentActivity }) => {
  const { stepIndex, activity } = useParams();
  const navigate = useNavigate();

  const isSignIn = activity === activitiesEnums.SIGNIN;
  const isCreateAccount = activity === activitiesEnums.CREATINGACCOUNT;

  console.log("In Welcome", { isSignIn, stepIndex, activity });
  console.log("WOOF", typeof stepIndex, Number(stepIndex) + 1);

  return (
    <StyledSignInWrapper>
      {/* SignIn stepIndex: 0 */}
      <InfoTip
        tipContent={<div>Click here to sign in</div>}
        tipTarget={
          <SignInButton
            onClick={() => {
              if (isSignIn && stepIndex === "0") {
                navigate(
                  `/activity/${activity}/${Number(stepIndex) + 1}/${
                    bankPageEnums.BANKHOMEPAGE
                  }/${bankPageEnums.SIGNIN}`
                );
              }
            }}
          >
            Sign In
          </SignInButton>
        }
        showTip={isSignIn && stepIndex === "0"}
        showButton={false}
      />
      {/* Register - 0 */}
      <InfoTip
        tipContent={<div>Click here to register for online banking</div>}
        tipTarget={
          <SignInButton
            onClick={() => {
              navigate(
                `/activity/${activity}/${Number(stepIndex) + 1}/${
                  bankPageEnums.BANKHOMEPAGE
                }/${bankPageEnums.ACCOUNTREGISTRATION}`
              );
            }}
          >
            REGISTER BUTTON
          </SignInButton>
        }
        showTip={isCreateAccount && stepIndex === "0"}
        showButton={false}
      />
    </StyledSignInWrapper>
  );
};

export default Welcome;
