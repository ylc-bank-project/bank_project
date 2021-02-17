import React from "react";
import { BasicTipButton } from "../../Shared/Tip";
// import styled from "styled-components";
import { BoldDiv } from "../../Shared/BankPages";

export const FirstStep = () => <div>Click here to sign in</div>;

export const SecondStep = ({ cardNumber, setStep, step }) => (
  <div>
    This is where you enter the 16-digit number from the card you use for debit
    and ATM transactions. {<br />}
    If you don’t have a card, you can use the number you were given at the bank
    or a username to log into Online Banking. {<br />}
    For this activity, enter: <BoldDiv>1234 5678 9098 7654</BoldDiv> in the card
    number box then select ‘continue’.
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
    This is where you enter your password. When creating your password, use a
    different password than you use for other websites. Make it difficult for
    others to guess your password by using a combination of letters and numbers
    in it. {<br />}
    For this activity, enter password: <BoldDiv>literacy1234</BoldDiv> in the
    password box then select 'continue'.
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
    Never share, disclose, or provide your card number or password to another
    person, party or website other than your bank. Your bank will never send you
    an email requesting this information. Giving your password to another person
    or company places your finances and privacy at risk.
    <BasicTipButton onClick={() => setStep(step + 1)}>Continue</BasicTipButton>
  </div>
);

export const FifthStep = ({
  setIsIntro,
  setIntroOutroVisible,
  saveToggled,
}) => (
  <div>
    Click this if you’d like to save your Card number or username on this
    computer, so you don’t have to enter it again the next time you log in to
    Online Banking. We don’t recommend this option if you’re using a public or
    shared computer. For this activity, click on the box. Then select
    ‘continue’.
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
