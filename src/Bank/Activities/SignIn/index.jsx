import React, { useState } from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { BasicTooltip } from "../../Shared/Tip";
import { Stepper } from "../../Shared/Stepper";
import { MarginedContainer, SignInButton } from "../../Shared/Layout";
import IntroOutro from "../../IntroOutro";
import {
  BankingBackground,
  BankingLogo,
  SignInContainer,
} from "../../Shared/BankPages";
import {
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
  FifthStep,
} from "./TipSteps";
// import { RadioButton } from "react-radio-buttons";

const allSteps = [FirstStep, SecondStep, ThirdStep, FourthStep, FifthStep];

const StyledSignInWrapper = styled.div`
  grid-column: span 12;
  text-align: center;
`;

const StyledGreeting = styled.div`
  grid-column: span 12;
  text-align: center;
  ${(p) => p.theme.fonts.big_header}
  color: white;
  padding: 0 0 40px;
`;

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

const SignIn = ({ currentActivity, endCurrentActivity }) => {
  // FIRST STEP IS 1 (should be 0 in next version)
  const [step, setStep] = useState(0);
  // const [step, setStep] = useState(4);
  const [readyToSign, setReadyToSign] = useState(false);
  // const [readyToSign, setReadyToSign] = useState(true);
  const [introOutroVisible, setIntroOutroVisible] = useState(true);
  // const [introOutroVisible, setIntroOutroVisible] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const [cardNumber, setCardNumber] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [saveToggled, setSaveToggled] = useState(false);

  const PreSignIn = () => (
    <StyledSignInWrapper>
      <BasicTooltip
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
          Sign-In
        </SignInButton>
      </BasicTooltip>
    </StyledSignInWrapper>
  );

  return (
    <>
      <BankingBackground>
        <MarginedContainer>
          <BankingLogo />
          <StyledGreeting>Welcome</StyledGreeting>
          {readyToSign ? (
            <SignInContainer>
              <InputContainer>
                {/* <label>
                  Card Number: */}
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
                {/* </label> */}
              </InputContainer>
              <InputContainer>
                {/* <label> */}
                {/* Password: */}
                <BasicTooltip
                  content={<ThirdStep {...{ password, setStep, step }} />}
                  showTip={step === 2}
                  staticOnly={true}
                  maxHeight={500}
                  // placement={"center"}
                >
                  <StyledInput
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder={"Password"}
                  />
                </BasicTooltip>
                {/* </label> */}
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
                        onChange={() =>
                          setSaveToggled(saveToggled ? false : true)
                        }
                      />
                    </RadioInputContainer>
                  </BasicTooltip>
                </PasswordLabel>
              </InputContainer>
            </SignInContainer>
          ) : (
            <PreSignIn />
          )}
          <IntroOutro
            closeModal={() => setIntroOutroVisible(false)}
            endExercise={() => endCurrentActivity()}
            currentActivity={currentActivity}
            visible={introOutroVisible}
            isIntro={isIntro}
          />
        </MarginedContainer>
      </BankingBackground>
      <Stepper
        {...{ setStep, step, allSteps }}
        onBack={() => {
          if (step === 1) {
            setReadyToSign(false);
          }
        }}
      />
    </>
  );
};

export default SignIn;
