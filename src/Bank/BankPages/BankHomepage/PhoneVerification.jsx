import React, { useState } from "react";
import {
  SmallContainer,
  BoldDiv,
  StyledNumberFormat,
  SubTitle,
} from "../BankPageElements";
import styled from "styled-components";
import { InfoTip } from "../../Shared/Tip";
import { useNavigate, useParams } from "react-router-dom";
import { bankPageEnums, createEnums, createSteps } from "../../enums";
import { ButtonContainer, NeutralBankingButton } from "../../Shared/Layout";

const InputContainer = styled.div`
  padding: 15px 0;
`;

const PhoneVerification = () => {
  let { activity, stepIndex } = useParams();
  const navigate = useNavigate();
  const [verifCode, setVerifCode] = useState(undefined);
  return (
    <SmallContainer>
      <SubTitle>Insert Phone Code</SubTitle>
      <InputContainer>
        <InfoTip
          tipContentStyles={{ overflow: "scroll" }}
          maxHeight={500}
          tipContent={
            <div>
              Your institution will send you a verification code to get to the
              next step via text or phone call. <br />
              Let's say you received the text and it gives you the following
              verification code: <BoldDiv>0987</BoldDiv>
              Enter the verification code in this box.
            </div>
          }
          buttonDisabled={verifCode !== "0 9 8 7"}
          onClick={() =>
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                bankPageEnums.BANKHOMEPAGE
              }/${bankPageEnums.PHONEVERIFICATION}`
            )
          }
          showTip={createSteps[stepIndex] === createEnums.ENTERVERIFICATIONCODE}
          tipTarget={
            <StyledNumberFormat
              onChange={(e) => setVerifCode(e.target.value)}
              format="# # # #"
              placeholder={"Verifcation Code"}
            />
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

{
  /* Create verification code zone and mock phone popup, verification confirmed  */
}
{
  /* Create email and password section (and password re-enter). With confirm button */
}
