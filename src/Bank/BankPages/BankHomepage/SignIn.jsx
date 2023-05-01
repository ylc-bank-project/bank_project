import React from "react";
import { BoldDiv, SignInContainer } from "../BankPageElements";
// import { MarginedContainer } from "../../Shared/Layout";
import { useNavigate, useParams } from "react-router-dom";
import {
  activitiesEnums,
  bankPageEnums,
  signInEnums,
  signInSteps,
} from "../../enums";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { BasicTipButton, InfoTip } from "../../Shared/Tip";
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
  const [password, setPassword] = useState(undefined);
  const [saveToggled, setSaveToggled] = useState(false);
  const navigate = useNavigate();

  console.log({ cardNumber }, typeof cardNumber);

  // should be able to load the activity from the activitySteps
  // const currentSteps = activitySteps[activity];

  const isCreateAccount = currentActivity === activitiesEnums.CREATINGACCOUNT;
  const isSignIn = currentActivity === activitiesEnums.SIGNIN;

  return (
    // <div>This is the Sign-In container</div>
    <SignInContainer>
      <InputContainer>
        {/* SignIn stepIndex: 1 */}
        <InfoTip
          tipContentStyles={{ overflow: "scroll" }}
          maxHeight={500}
          tipContent={
            <div>
              This is where you enter the 16-digit number from your debit card.{" "}
              {<br />}
              If you don’t have a card, you can use the number you were given at
              the bank or a username to log into online banking. {<br />}
              For this activity, enter: <BoldDiv>1234567890987654</BoldDiv> in
              the card number box then select ‘Continue’.
            </div>
          }
          buttonDisabled={cardNumber !== "1234567890987654"}
          onClick={() =>
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                bankPageEnums.BANKHOMEPAGE
              }/${bankPageEnums.SIGNIN}`
            )
          }
          showTip={isSignIn && signInSteps[stepIndex] === signInEnums.ENTERCARD}
          tipTarget={
            <StyledInput
              onChange={(e) => setCardNumber(e.target.value)}
              type="text"
              placeholder={"Card Number"}
            />
          }
        />
        <InfoTip />
      </InputContainer>
      <InputContainer>
        {/* SignIn StepIndex: 2 */}
        <InfoTip
          maxHeight={500}
          tipContent={
            <div>
              This is where you enter your password. When creating your
              password, try to use something different than what you would
              normally use. Make it difficult for others to guess by using a
              combination of letters and numbers. {<br />}
              For this activity, enter password: <BoldDiv>
                literacy1234
              </BoldDiv>{" "}
              in the password box then select 'Continue'.
            </div>
          }
          showTip={isSignIn && signInSteps[stepIndex] === signInEnums.ENTERPW}
          buttonDisabled={password !== "literacy1234"}
          onClick={() =>
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                bankPageEnums.BANKHOMEPAGE
              }/${bankPageEnums.SIGNIN}`
            )
          }
          tipTarget={
            <StyledInput
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder={"Password"}
            />
          }
        />
        {/* SignIn: stepIndex: 3 */}
        <InfoTip
          placement="center"
          showArrow={false}
          tipContent={
            <div>
              Never share or disclose your card number or password to another
              person or website other than your bank. Your bank will never
              request this information from you through an email. Giving your
              password to another person or company places your finances and
              privacy at risk.
            </div>
          }
          onClick={() =>
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                bankPageEnums.BANKHOMEPAGE
              }/${bankPageEnums.SIGNIN}`
            )
          }
          tipTarget={<FullSpan />}
          showTip={
            isSignIn && signInSteps[stepIndex] === signInEnums.NEVERSHARE
          }
        />
      </InputContainer>
      <InputContainer>
        <PasswordLabel>
          Save password?
          {/* SignIn: stepIndex: 4 */}
          <InfoTip
            tipContent={
              <div>
                Click this if you’d like to save your card number or username on
                this computer, so you don’t have to enter it again the next time
                you log in. We don’t recommend this option if you’re using a
                public or shared computer. For this activity, click the box then
                select ‘Continue’.
              </div>
            }
            buttonDisabled={!saveToggled}
            onClick={() =>
              //
              console.log(
                "Here we need to set back to the `IsIntro(false)` and `setIntroOutroVisible(true)`"
              )
            }
            tipTarget={
              <RadioInputContainer>
                <input
                  type="checkbox"
                  checked={saveToggled}
                  onChange={() => setSaveToggled(saveToggled ? false : true)}
                />
              </RadioInputContainer>
            }
            showTip={
              isSignIn && signInSteps[stepIndex] === signInEnums.SAVECARD
            }
          />
        </PasswordLabel>
      </InputContainer>
    </SignInContainer>
  );
};

export default SignIn;
