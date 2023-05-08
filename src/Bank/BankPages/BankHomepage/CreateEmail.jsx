import React, { useContext, useState } from "react";
import {
  SmallContainer,
  BoldDiv,
  Space,
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
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();
  const isEnterEmailStep = createSteps[stepIndex] === createEnums.ENTEREMAIL;
  const isEnterPWStep = createSteps[stepIndex] === createEnums.CREATEPASSWORD;
  const defaultEmail = "iloveliteracy@email.com";
  const defaultPassword = "literacy1234";

  const [email, setEmail] = useState(
    isEnterEmailStep ? undefined : defaultEmail
  );

  const [password, setPassword] = useState(
    isEnterPWStep || isEnterEmailStep ? undefined : defaultPassword
  );

  const [passwordTwo, setPasswordTwo] = useState(undefined);
  const { introModalState, setIntroContext } = useContext(IntroModalContext);

  return (
    <SmallContainer>
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
          buttonDisabled={email !== defaultEmail}
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
              disabled={createSteps[stepIndex] !== createEnums.ENTEREMAIL}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={"Email"}
              value={email}
            />
          }
        />
        <Space />
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
          buttonDisabled={password !== defaultPassword}
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
              disabled={createSteps[stepIndex] !== createEnums.CREATEPASSWORD}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder={"Password"}
              value={password}
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
            password !== defaultPassword || passwordTwo !== password
          }
          onClick={() => setIntroContext({ isVisible: true, isIntro: false })}
          showTip={createSteps[stepIndex] === createEnums.REENTERPW}
          tipTarget={
            <StyledInput
              disabled={createSteps[stepIndex] !== createEnums.REENTERPW}
              onChange={(e) => setPasswordTwo(e.target.value)}
              type="password"
              placeholder={"Re-enter Password"}
              value={passwordTwo}
            />
          }
        />
        <ButtonContainer>
          <NeutralBankingButton>Confirm</NeutralBankingButton>
        </ButtonContainer>
      </InputContainer>
    </SmallContainer>
  );
};

export default CreateEmail;
