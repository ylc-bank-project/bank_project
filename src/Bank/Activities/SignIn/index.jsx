import React, { useState } from "react";
import NumberFormat from "react-number-format";
import { BasicTooltip, BasicTipButton } from "../../Shared/Tip";
import { MarginedContainer } from "../../Shared/Layout";
import IntroOutro from "../../IntroOutro";

const SignIn = ({ currentActivity, returnToAllActivities }) => {
  const [step, setStep] = useState(1);
  const [readyToSign, setReadyToSign] = useState(false);
  const [introOutroVisible, setIntroOutroVisible] = useState(true);
  const [isIntro, setIsIntro] = useState(true);
  const [cardNumber, setCardNumber] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [saveToggled, setSaveToggled] = useState(false);

  const PreSignIn = () => (
    <div>
      <BasicTooltip
        content={<FirstStep />}
        showTip={step === 1}
        staticOnly={true}
      >
        <button
          onClick={() => {
            setReadyToSign(true);
            setStep(2);
          }}
        >
          Sign-In
        </button>
      </BasicTooltip>
    </div>
  );

  const FirstStep = () => <div>Click here to sign in</div>;

  const SecondStep = () => (
    <div>
      This is where you enter the 16-digit number from the card you use for
      debit and ATM transactions. If you don’t have a card, you can use the
      number you were given at the branch to access Online Banking. If you have
      set up a username, you can enter it in this field instead of the card
      number to log in to Online Banking. For this activity, enter card # 1234
      5678 9098 7654 in the username box. Then select ‘continue’
      <BasicTipButton
        disabled={cardNumber !== "1234 5678 9098 7654"}
        onClick={() => setStep(3)}
      >
        Continue
      </BasicTipButton>
    </div>
  );

  const ThirdStep = () => (
    <div>
      This is where you enter the password. When creating your password, use a
      different password than you use for other websites. Make it difficult for
      others to guess your password by using a combination of letters and
      numbers in it. If you think someone knows your password, change it right
      away. Do not share your Online Banking password with anyone. Giving your
      password to another person or company places your finances and privacy at
      risk. Never share, disclose, or provide your card number or password to
      another party or website other than your bank. Your bank will never send
      you an email requesting this information. For this activity, enter
      password: literacy1234 in the password box.
      <BasicTipButton
        disabled={password !== "literacy1234"}
        onClick={() => setStep(4)}
      >
        Continue
      </BasicTipButton>
    </div>
  );

  const FourthStep = () => (
    <div>
      Click this box if you’d like to save your Card number or username on this
      computer, so you don’t have to enter it again the next time you log in to
      Online Banking. We don’t recommend this option if you’re using a public or
      shared computer. For this activity, click on the box. Then select
      ‘continue’
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

  return (
    <MarginedContainer>
      <div>Sign in activity</div>
      {readyToSign ? (
        <div>
          <p>Sign-In box</p>
          <div>
            <label>
              Card Number:
              <BasicTooltip
                content={<SecondStep />}
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
                content={<ThirdStep />}
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
                content={<FourthStep />}
                showTip={step === 4}
                staticOnly={true}
              >
                <input type="radio" onChange={() => setSaveToggled(true)} />
              </BasicTooltip>
            </label>
          </div>
        </div>
      ) : (
        <PreSignIn />
      )}
      <button
        onClick={() => {
          setIsIntro(false);
          setIntroOutroVisible(true);
        }}
      >
        Show Outro
      </button>
      <IntroOutro
        closeModal={() => setIntroOutroVisible(false)}
        endExercise={() => returnToAllActivities()}
        currentActivity={currentActivity}
        visible={introOutroVisible}
        isIntro={isIntro}
      />
    </MarginedContainer>
  );
};

export default SignIn;
