import React, { useContext, useState } from "react";
import {
  AuthContainer,
  BoldDiv,
  StyledInput,
  SubTitle,
} from "../BankPageElements";
import styled from "styled-components";
import { ButtonContainer, NeutralBankingButton } from "../../Shared/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { InfoTip } from "../../Shared/Tip";
import { bankPageEnums, createEnums, createSteps } from "../../enums";
import { IntroModalContext } from "../../context";

const InputContainer = styled.div`
  padding: 15px 0;
`;

const CreateEmail = () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [passwordTwo, setPasswordTwo] = useState(undefined);
  const { activity, stepIndex } = useParams();
  const { introModalState, setIntroContext } = useContext(IntroModalContext);
  const navigate = useNavigate();

  console.log("STEP: ", createSteps[stepIndex]);

  return (
    <AuthContainer>
      <SubTitle>Enter Email and Password</SubTitle>
      <InputContainer>
        <InfoTip
          tipContentStyles={{ overflow: "scroll" }}
          maxHeight={500}
          tipContent={
            <div>
              Enter the email here.
              <br />
              For this activity we will use:
              <BoldDiv>iloveliteracy@email.com</BoldDiv>
            </div>
          }
          buttonDisabled={email !== "iloveliteracy@email.com"}
          onClick={() =>
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                bankPageEnums.BANKHOMEPAGE
              }/${bankPageEnums.CREATEEMAIL}`
            )
          }
          showTip={createSteps[stepIndex] === createEnums.ENTEREMAIL}
          tipTarget={
            <StyledInput
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={"Email"}
            />
          }
        />
        <InfoTip
          tipContentStyles={{ overflow: "scroll" }}
          maxHeight={500}
          tipContent={
            <div>
              For this activity use:
              <BoldDiv>literacy1234</BoldDiv>
              as the password.
            </div>
          }
          buttonDisabled={password !== "literacy1234"}
          onClick={() =>
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                bankPageEnums.BANKHOMEPAGE
              }/${bankPageEnums.CREATEEMAIL}`
            )
          }
          showTip={createSteps[stepIndex] === createEnums.CREATEPASSWORD}
          tipTarget={
            <StyledInput
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder={"Password"}
            />
          }
        />

        <InfoTip
          tipContentStyles={{ overflow: "scroll" }}
          maxHeight={500}
          tipContent={
            <div>
              Re-enter the password here. Remember, it is:
              <BoldDiv>literacy1234</BoldDiv>.
              <br />
              <BoldDiv>
                {password !== passwordTwo
                  ? "*The passwords do not currently match*"
                  : "*Looks good!"}
              </BoldDiv>
            </div>
          }
          buttonDisabled={
            password !== "literacy1234" || passwordTwo !== password
          }
          onClick={() => setIntroContext({ isVisible: true, isIntro: false })}
          showTip={createSteps[stepIndex] === createEnums.REENTERPW}
          tipTarget={
            <StyledInput
              onChange={(e) => setPasswordTwo(e.target.value)}
              type="password"
              placeholder={"Re-enter Password"}
            />
          }
        />
        <ButtonContainer>
          <NeutralBankingButton>Confirm</NeutralBankingButton>
        </ButtonContainer>
      </InputContainer>
    </AuthContainer>
  );
};

export default CreateEmail;
