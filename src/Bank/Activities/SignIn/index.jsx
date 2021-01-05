import React, { useState } from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { BasicTooltip, BasicTipButton } from "../../Shared/Tip";
import { MarginedContainer, SignInButton } from "../../Shared/Layout";
import IntroOutro from "../../IntroOutro";
import { BankingBackground } from "../../Shared/BankPages";
import { FirstStep, SecondStep, ThirdStep, FourthStep } from "./TipSteps";
import { RadioButton } from "react-radio-buttons";
import logo from "../../assets/dark_flake_black.png";

const SignInContainer = styled.div`
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

const BankingLogo = styled.div`
  grid-column: span 12;
  ${(p) => p.theme.fonts.extra_small_header};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 40px 0;
`;

const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  padding-left: 5px;
`;

const SignInBox = styled.div`
  background: white;
  grid-column-start: 4;
  grid-column-end: 10;
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 10px;
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
`;

const RadioInputContainer = styled.span`
  padding: 10px;
`;

const RadioInput = styled.input``;

const SignIn = ({ currentActivity, returnToAllActivities }) => {
  const [step, setStep] = useState(1);
  // const [step, setStep] = useState(2);
  const [readyToSign, setReadyToSign] = useState(false);
  // const [readyToSign, setReadyToSign] = useState(true);
  const [introOutroVisible, setIntroOutroVisible] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const [cardNumber, setCardNumber] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [saveToggled, setSaveToggled] = useState(false);

  const PreSignIn = () => (
    <SignInContainer>
      <BasicTooltip
        content={<FirstStep />}
        showTip={step === 1}
        staticOnly={true}
      >
        <SignInButton
          onClick={() => {
            setReadyToSign(true);
            setStep(2);
          }}
        >
          Sign-In
        </SignInButton>
      </BasicTooltip>
    </SignInContainer>
  );

  console.log({ saveToggled });

  return (
    <BankingBackground>
      <MarginedContainer>
        <BankingLogo>
          <span>Bank of YLC</span> <LogoImg src={logo} />
        </BankingLogo>
        <StyledGreeting>Welcome</StyledGreeting>
        {readyToSign ? (
          <SignInBox>
            <InputContainer>
              {/* <label>
                Card Number: */}
              <BasicTooltip
                content={<SecondStep {...{ cardNumber, setStep }} />}
                showTip={step === 2}
                staticOnly={true}
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
                content={<ThirdStep {...{ password, setStep }} />}
                showTip={step === 3}
                staticOnly={true}
              >
                <StyledInput
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder={"Password"}
                />
              </BasicTooltip>
              {/* </label> */}
            </InputContainer>
            <InputContainer>
              <PasswordLabel>
                Save password?
                <BasicTooltip
                  content={
                    <FourthStep
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
                      onClick={() => setSaveToggled(saveToggled ? false : true)}
                    />
                  </RadioInputContainer>
                </BasicTooltip>
              </PasswordLabel>
            </InputContainer>
          </SignInBox>
        ) : (
          <PreSignIn />
        )}
        <IntroOutro
          closeModal={() => setIntroOutroVisible(false)}
          endExercise={() => returnToAllActivities()}
          currentActivity={currentActivity}
          visible={introOutroVisible}
          isIntro={isIntro}
        />
      </MarginedContainer>
    </BankingBackground>
  );
};

export default SignIn;
