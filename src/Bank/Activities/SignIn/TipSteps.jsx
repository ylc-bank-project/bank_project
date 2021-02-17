import React from "react";
import { BasicTipButton } from "../../Shared/Tip";
// import styled from "styled-components";
import { BoldDiv } from "../../Shared/BankPages";

export const FirstStep = () => <div>Click here to sign in</div>;

export const SecondStep = ({ cardNumber, setStep, step }) => (
  <div>
    This is where you enter the 16-digit number from your debit card. {<br />}
    If you don’t have a card, you can use the number you were given at the bank
    or a username to log into online banking. {<br />}
    For this activity, enter: <BoldDiv>1234 5678 9098 7654</BoldDiv> in the card
    number box then select ‘Continue’.
    <BasicTipButton
      disabled={cardNumber !== "1234 5678 9098 7654"}
      onClick={() => setStep(step + 1)}
    >
      Continue
    </BasicTipButton>
  </div>
);

export const ThirdStep = ({ password, setStep, step }) => (
  <div>
    This is where you enter your password. When creating your password, try to
    use something different than what you would normally use. Make it difficult
    for others to guess by using a combination of letters and numbers. {<br />}
    For this activity, enter password: <BoldDiv>literacy1234</BoldDiv> in the
    password box then select 'Continue'.
    <BasicTipButton
      disabled={password !== "literacy1234"}
      onClick={() => setStep(step + 1)}
    >
      Continue
    </BasicTipButton>
  </div>
);

export const FourthStep = ({ setStep, step }) => (
  <div>
    Never share or disclose your card number or password to another person or
    website other than your bank. Your bank will never request this information
    from you through an email. Giving your password to another person or company
    places your finances and privacy at risk.
    <BasicTipButton onClick={() => setStep(step + 1)}>Continue</BasicTipButton>
  </div>
);

export const FifthStep = ({
  setIsIntro,
  setIntroOutroVisible,
  saveToggled,
}) => (
  <div>
    Click this if you’d like to save your card number or username on this
    computer, so you don’t have to enter it again the next time you log in. We
    don’t recommend this option if you’re using a public or shared computer. For
    this activity, click the box then select ‘Continue’.
    <BasicTipButton
      disabled={!saveToggled}
      onClick={() => {
        setIsIntro(false);
        setIntroOutroVisible(true);
      }}
    >
      Continue
    </BasicTipButton>
  </div>
);
