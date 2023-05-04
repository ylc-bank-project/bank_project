import React, { useContext } from "react";
import {
  BoldDiv,
  AuthContainer,
  SubTitle,
  StyledInput,
} from "../BankPageElements";
import { useNavigate, useParams } from "react-router-dom";
import {
  activitiesEnums,
  bankPageEnums,
  signInEnums,
  signInSteps,
} from "../../enums";
import styled from "styled-components";
import { StyledNumberFormat } from "../BankPageElements";
import { InfoTip } from "../../Shared/Tip";
import { useState } from "react";
import { IntroModalContext } from "../../context";

const InputContainer = styled.div`
  padding: 15px 0;
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

const SignIn = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [saveToggled, setSaveToggled] = useState(false);
  const { introModalState, setIntroContext } = useContext(IntroModalContext);
  const isSignIn = activity === activitiesEnums.SIGNIN;

  return (
    <AuthContainer>
      <SubTitle>Sign In</SubTitle>
      <InputContainer>
        <InfoTip
          tipContentStyles={{ overflow: "scroll" }}
          maxHeight={500}
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
            </div>
          }
          buttonDisabled={cardNumber !== "1234 5678 9098 7654"}
          onClick={() =>
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                bankPageEnums.BANKHOMEPAGE
              }/${bankPageEnums.SIGNIN}`
            )
          }
          showTip={isSignIn && signInSteps[stepIndex] === signInEnums.ENTERCARD}
          tipTarget={
            <StyledNumberFormat
              onChange={(e) => setCardNumber(e.target.value)}
              format="#### #### #### ####"
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
            onClick={() => {
              console.log("should go to next step");
              setIntroContext({ isVisible: true, isIntro: false });
            }}
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
    </AuthContainer>
  );
};

export default SignIn;
