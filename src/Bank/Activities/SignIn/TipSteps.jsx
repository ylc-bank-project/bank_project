import React from "react";
import { BasicTipButton } from "../../Shared/Tip";
import styled from "styled-components";
import { Space, BoldDiv } from "../../Shared/BankPages";

export const FirstStep = () => <div>Click here to sign in</div>;

export const SecondStep = ({ cardNumber, setStep }) => (
  <div>
    <Space />
    This is where you enter the 16-digit number from the card you use for debit
    and ATM transactions. {<br />}
    <Space /> If you don’t have a card, you can use the number you were given at
    the branch to access Online Banking. If you have set up a username, you can
    enter it in this field instead of the card number to log in to Online
    Banking. {<br />}
    <Space /> For this activity, enter: <BoldDiv>
      1234 5678 9098 7654
    </BoldDiv>{" "}
    in the card number box. Then select ‘continue’.
    <BasicTipButton
      disabled={cardNumber !== "1234 5678 9098 7654"}
      onClick={() => setStep(3)}
    >
      Continue
    </BasicTipButton>
  </div>
);

export const ThirdStep = ({ password, setStep }) => (
  <div>
    <Space />
    This is where you enter the password. When creating your password, use a
    different password than you use for other websites. Make it difficult for
    others to guess your password by using a combination of letters and numbers
    in it. If you think someone knows your password, change it right away. Do
    not share your Online Banking password with anyone. Giving your password to
    another person or company places your finances and privacy at risk. Never
    share, disclose, or provide your card number or password to another party or
    website other than your bank. Your bank will never send you an email
    requesting this information. {<br />}
    <Space /> For this activity, enter password: <BoldDiv>
      literacy1234
    </BoldDiv>{" "}
    in the password box.
    <BasicTipButton
      disabled={password !== "literacy1234"}
      onClick={() => setStep(4)}
    >
      Continue
    </BasicTipButton>
  </div>
);

export const FourthStep = ({
  setIsIntro,
  setIntroOutroVisible,
  saveToggled,
}) => (
  <div>
    <Space />
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
