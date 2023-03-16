import React from "react";
import { SignInContainer } from "../BankPageElements";
// import { MarginedContainer } from "../../Shared/Layout";
import { useParams } from "react-router-dom";
import { activitiesEnums } from "../../enums";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const InputContainer = styled.div`
  padding: 15px 0;
`;

const StyledNumberFormat = styled(NumberFormat)`
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.ylc_blue};
  width: 100%;
  ${(p) => p.theme.fonts.body_text};
  font-weight: normal;
  height: 40px;
  ::placeholder {
    color: ${(p) => p.theme.colors.ylc_blue};
  }
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.ylc_blue};
  width: 100%;
  ${(p) => p.theme.fonts.body_text};
  font-weight: normal;
  height: 40px;
  ::placeholder {
    color: ${(p) => p.theme.colors.ylc_blue};
  }
`;

const PasswordLabel = styled.label`
  ${(p) => p.theme.fonts.body_text};
  color: ${(p) => p.theme.colors.ylc_blue};
  display: flex;
`;

const RadioInputContainer = styled.span`
  padding: 10px;
  width: 50px;
`;

const FullSpan = styled.span`
  width: 100%;
  display: block;
`;

const SignIn = ({ currentActivity }) => {
  const { step } = useParams();

  const isCreateAccount = currentActivity === activitiesEnums.CREATINGACCOUNT;

  return (
    <SignInContainer>
      <InputContainer>
        <BasicTooltip
          content={<SecondStep {...{ cardNumber, setStep, step }} />}
          showTip={step === 1}
          staticOnly={true}
          tipContentStyles={{ overflow: "scroll" }}
          maxHeight={500}
        >
          <StyledNumberFormat
            onChange={(e) => setCardNumber(e.target.value)}
            format="#### #### #### ####"
            placeholder={"Card Number"}
          />
        </BasicTooltip>
      </InputContainer>
      <InputContainer>
        <BasicTooltip
          content={<ThirdStep {...{ password, setStep, step }} />}
          showTip={step === 2}
          staticOnly={true}
          maxHeight={500}
        >
          <StyledInput
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder={"Password"}
          />
        </BasicTooltip>
        <BasicTooltip
          content={<FourthStep {...{ setStep, step }} />}
          showTip={step === 3}
          staticOnly={true}
          placement="center"
          showArrow={false}
        ></BasicTooltip>
        <FullSpan />
        <BasicTooltip />
      </InputContainer>
      <InputContainer>
        <PasswordLabel>
          Save password?
          <BasicTooltip
            content={
              <FifthStep
                {...{ setIsIntro, setIntroOutroVisible, saveToggled }}
              />
            }
            showTip={step === 4}
            staticOnly={true}
          >
            <RadioInputContainer>
              <input
                type="checkbox"
                checked={saveToggled}
                onChange={() => setSaveToggled(saveToggled ? false : true)}
              />
            </RadioInputContainer>
          </BasicTooltip>
        </PasswordLabel>
      </InputContainer>
      <Link to={"AccountRegistration"}>Go to Registration</Link>
    </SignInContainer>
  );
};

export default SignIn;
