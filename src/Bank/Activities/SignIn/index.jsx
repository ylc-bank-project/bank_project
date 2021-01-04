import React, { useState } from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { BasicTooltip, BasicTipButton } from "../../Shared/Tip";
import { MarginedContainer, SignInButton } from "../../Shared/Layout";
import IntroOutro from "../../IntroOutro";
import { BankingBackground } from "../../Shared/BankPages";
import { FirstStep, SecondStep, ThirdStep, FourthStep } from "./TipSteps";
import logo from "../../assets/dark_flake_black.png";

const SignIn = ({ currentActivity, returnToAllActivities }) => {
  // const [step, setStep] = useState(1);
  const [step, setStep] = useState(2);
  // const [readyToSign, setReadyToSign] = useState(false);
  const [readyToSign, setReadyToSign] = useState(true);
  const [introOutroVisible, setIntroOutroVisible] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const [cardNumber, setCardNumber] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [saveToggled, setSaveToggled] = useState(false);

  const SignInContainer = styled.div`
    grid-column: span 12;
    text-align: center;
  `;

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

  const StyledGreeting = styled.div`
    grid-column: span 12;
    text-align: center;
    ${(p) => p.theme.fonts.big_header}
    color: white;
  `;

  const BankingLogo = styled.div`
    grid-column: span 12;
    ${(p) => p.theme.fonts.extra_small_header};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  `;

  const LogoImg = styled.img`
    height: 40px;
    width: 40px;
    padding-left: 5px;
  `;

  const SignInBox = styled.div`
    background: white;
    grid-column-start: 4;
    grid-column-end: 9;
    display: flex;
    flex-direction: column;
  `;

  return (
    <BankingBackground>
      <MarginedContainer>
        <BankingLogo>
          <span>Bank of YLC</span> <LogoImg src={logo} />
        </BankingLogo>
        <StyledGreeting>Welcome</StyledGreeting>
        {readyToSign ? (
          <SignInBox>
            <div>
              <label>
                Card Number:
                <BasicTooltip
                  content={<SecondStep {...{ cardNumber, setStep }} />}
                  showTip={step === 2}
                  staticOnly={true}
                >
                  <NumberFormat
                    onChange={(e) => setCardNumber(e.target.value)}
                    format="#### #### #### ####"
                  />
                </BasicTooltip>
              </label>
            </div>
            <div>
              <label>
                Password:
                <BasicTooltip
                  content={<ThirdStep {...{ password, setStep }} />}
                  showTip={step === 3}
                  staticOnly={true}
                >
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </BasicTooltip>
              </label>
            </div>
            <div>
              <label>
                Save password
                <BasicTooltip
                  content={
                    <FourthStep
                      {...{ setIsIntro, setIntroOutroVisible, saveToggled }}
                    />
                  }
                  showTip={step === 4}
                  staticOnly={true}
                >
                  <input type="radio" onChange={() => setSaveToggled(true)} />
                </BasicTooltip>
              </label>
            </div>
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
