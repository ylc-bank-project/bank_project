import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  activitiesEnums,
  bankPageEnums,
  signInEnums,
  signInSteps,
} from "../../enums";
import styled from "styled-components";
import { SignInButton } from "../../Shared/Layout";
import { InfoTip } from "../../Shared/Tip";

const StyledSignInWrapper = styled.div`
  grid-column: span 12;
  text-align: center;
`;

const Welcome = () => {
  const { stepIndex, activity } = useParams();
  const navigate = useNavigate();
  const isSignIn = activity === activitiesEnums.SIGNIN;
  const isCreateAccount = activity === activitiesEnums.CREATINGACCOUNT;

  return (
    <StyledSignInWrapper>
      {/* SignIn stepIndex: 0 */}
      <InfoTip
        tipContent={<div>Click here to sign in</div>}
        tipTarget={
          <SignInButton
            disabled={!isSignIn}
            onClick={() => {
              if (isSignIn && stepIndex === "0") {
                navigate(
                  `/${activity}/${Number(stepIndex) + 1}/${
                    bankPageEnums.BANKHOMEPAGE
                  }/${bankPageEnums.SIGNIN}`
                );
              }
            }}
          >
            Sign In
          </SignInButton>
        }
        showTip={isSignIn && signInSteps[stepIndex] === signInEnums.CLICKSIGNIN}
        showButton={false}
      />
      {/* Register - 0 */}
      <InfoTip
        tipContent={<div>Click here to register for online banking</div>}
        tipTarget={
          <SignInButton
            disabled={!isCreateAccount}
            onClick={() => {
              navigate(
                `/${activity}/${Number(stepIndex) + 1}/${
                  bankPageEnums.BANKHOMEPAGE
                }/${bankPageEnums.ACCOUNTREGISTRATION}`
              );
            }}
          >
            Register
          </SignInButton>
        }
        showTip={isCreateAccount && stepIndex === "0"}
        showButton={false}
      />
    </StyledSignInWrapper>
  );
};

export default Welcome;
