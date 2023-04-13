import React from "react";
import { BoldDiv, SignInContainer } from "../BankPageElements";
// import { MarginedContainer } from "../../Shared/Layout";
import { useParams } from "react-router-dom";
import { activitiesEnums } from "../../enums";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { InfoTip } from "../../Shared/Tip";
import { useState } from "react";
// import activitySteps from "../../activitySteps";

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
  const { activity, stepIndex } = useParams();
  const [cardNumber, setCardNumber] = useState(undefined);

  // should be able to load the activity from the activitySteps
  // const currentSteps = activitySteps[activity];

  const isCreateAccount = currentActivity === activitiesEnums.CREATINGACCOUNT;

  return (
    // <div>This is the Sign-In container</div>
    <SignInContainer>
      <InputContainer>
        {/* <InfoTip
          tipContent={<div>Choose "Add Payee".</div>}
          tipTarget={
            <AddPayeeButton
              onClick={() => {
                setPaymentStage(addVerifyPayeeStage);
                setStep(step + 1);
              }}
              disabled={allSteps[step] !== addEditPayee}
            >
              Add Payee
            </AddPayeeButton>
          }
          showTip={addEditPayee}
          showButton={false}
          
        />*/}
        {/* SignIn - 1 */}
        <InfoTip
          tipContent={
            <div>
              This is where you enter the 16-digit number from your debit card.{" "}
              {<br />}
              If you don’t have a card, you can use the number you were given at
              the bank or a username to log into online banking. {<br />}
              For this activity, enter: <BoldDiv>
                1234 5678 9098 7654
              </BoldDiv>{" "}
              in the card number box then select ‘Continue’.
              {/* <BasicTipButton
                disabled={cardNumber !== "1234 5678 9098 7654"}
                onClick={() => setStep(step + 1)}
              >
                Continue
              </BasicTipButton> */}
            </div>
          }
          buttonDisabled={cardNumber !== "1234 5678 9098 7654"}
          onClick={() => console.log("inc step here")}
        />
        {/* <BasicTooltip
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
        </BasicTooltip> */}
      </InputContainer>
      <InputContainer>
        {/* <BasicTooltip
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
        </BasicTooltip> */}
        {/* <BasicTooltip
          content={<FourthStep {...{ setStep, step }} />}
          showTip={step === 3}
          staticOnly={true}
          placement="center"
          showArrow={false}
        ></BasicTooltip>
        <FullSpan />
        <BasicTooltip /> */}
      </InputContainer>
      <InputContainer>
        <PasswordLabel>
          Save password?
          {/* <BasicTooltip
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
          </BasicTooltip> */}
        </PasswordLabel>
      </InputContainer>
    </SignInContainer>
  );
};

export default SignIn;
