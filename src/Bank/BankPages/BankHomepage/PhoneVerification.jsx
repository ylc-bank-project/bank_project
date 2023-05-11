import React, { useEffect, useState } from "react";
import {
  SmallContainer,
  BoldDiv,
  StyledNumberFormat,
  SubTitle,
  LabelInputContainer,
  StyledLabel,
} from "../BankPageElements";
import styled from "styled-components";
import { InfoTip } from "../../Shared/Tip";
import { useNavigate, useParams } from "react-router-dom";
import {
  VERIFCODE,
  bankPageEnums,
  createEnums,
  createSteps,
} from "../../enums";
import { ButtonContainer, NeutralBankingButton } from "../../Shared/Layout";

const InputContainer = styled.div`
  padding: 15px 0;
  text-align: center;
`;

const PhoneVerification = () => {
  let { activity, stepIndex } = useParams();
  const navigate = useNavigate();
  const [verifCode, setVerifCode] = useState(undefined);

  const isVerifStep =
    createSteps[stepIndex] === createEnums.ENTERVERIFICATIONCODE;

  useEffect(() => {
    !isVerifStep && setVerifCode(VERIFCODE);
  }, [isVerifStep]);

  return (
    <SmallContainer>
      <SubTitle>Insert Verification Code</SubTitle>
      <InputContainer>
        <InfoTip
          tipContentStyles={{ overflow: "scroll" }}
          maxHeight={500}
          tipContent={
            <div>
              Your institution will send you a verification code to get to the
              next step via text or phone call. <br />
              Let's say you received the text and it gives you the following
              verification code: <BoldDiv>{VERIFCODE}</BoldDiv>
              Enter the verification code in this box.
            </div>
          }
          buttonDisabled={verifCode !== VERIFCODE}
          onClick={() =>
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                bankPageEnums.BANKHOMEPAGE
              }/${bankPageEnums.PHONEVERIFICATION}`
            )
          }
          showTip={isVerifStep}
          tipTarget={
            <LabelInputContainer>
              <StyledLabel>Insert Code:</StyledLabel>
              <StyledNumberFormat
                onChange={(e) => setVerifCode(e.target.value)}
                format="####"
                placeholder={"####"}
                value={verifCode}
              />
            </LabelInputContainer>
          }
        />
        <ButtonContainer>
          <InfoTip
            tipContentStyles={{ overflow: "scroll" }}
            maxHeight={500}
            tipContent={<div>Click Confirm</div>}
            showButton={false}
            showTip={createSteps[stepIndex] === createEnums.CONFIRMVERIFICATION}
            tipTarget={
              <NeutralBankingButton
                disabled={
                  createSteps[stepIndex] !== createEnums.CONFIRMVERIFICATION
                }
                onClick={() => {
                  navigate(
                    `/${activity}/${Number(stepIndex) + 1}/${
                      bankPageEnums.BANKHOMEPAGE
                    }/${bankPageEnums.CREATEEMAIL}`
                  );
                }}
              >
                Confirm
              </NeutralBankingButton>
            }
          />
        </ButtonContainer>
      </InputContainer>
    </SmallContainer>
  );
};

export default PhoneVerification;
