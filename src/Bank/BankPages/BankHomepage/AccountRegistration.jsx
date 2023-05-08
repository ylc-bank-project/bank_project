import React, { useState } from "react";
import styled from "styled-components";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  activitiesEnums,
  bankPageEnums,
  createEnums,
  createSteps,
} from "../../enums";
import {
  SmallContainer,
  BoldDiv,
  StyledNumberFormat,
  SubTitle,
} from "../BankPageElements";
import { InfoTip } from "../../Shared/Tip";
import { BankingButton } from "../../Shared/Components";
import { ButtonContainer, NeutralBankingButton } from "../../Shared/Layout";

const InputContainer = styled.div`
  padding: 15px 0;
`;

const AccountRegistration = () => {
  const [cardNumber, setCardNumber] = useState(undefined);
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const navigate = useNavigate();
  const { activity, stepIndex } = useParams();
  // const isCreateAccount = activity === activitiesEnums.CREATINGACCOUNT;

  return (
    <SmallContainer>
      <SubTitle>Register Your Account</SubTitle>
      <InputContainer>
        <InfoTip
          tipContentStyles={{ overflow: "scroll" }}
          maxHeight={500}
          tipContent={
            <div>
              This is where you enter the 16-digit number from your debit card.{" "}
              {<br />}
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
              }/${bankPageEnums.ACCOUNTREGISTRATION}`
            )
          }
          showTip={createSteps[stepIndex] === createEnums.ENTERCARD}
          tipTarget={
            <StyledNumberFormat
              onChange={(e) => setCardNumber(e.target.value)}
              format="#### #### #### ####"
              placeholder={"Card Number"}
            />
          }
        />
      </InputContainer>
      <InputContainer>
        <InfoTip
          tipContentStyles={{ overflow: "scroll" }}
          maxHeight={500}
          tipContent={
            <div>
              Next enter your phone number associated with your bank account.{" "}
              {<br />}
              For this activity, enter: <BoldDiv>867-123-4567</BoldDiv> in the
              phone number box then click "Register".
            </div>
          }
          buttonDisabled={phoneNumber !== "867-123-4567"}
          onClick={() =>
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                bankPageEnums.BANKHOMEPAGE
              }/${bankPageEnums.ACCOUNTREGISTRATION}`
            )
          }
          showTip={createSteps[stepIndex] === createEnums.ENTERPHONE}
          tipTarget={
            <StyledNumberFormat
              onChange={(e) => setPhoneNumber(e.target.value)}
              format="###-###-####"
              placeholder={"Phone Number"}
            />
          }
        />
        <ButtonContainer>
          <InfoTip
            tipContentStyles={{ overflow: "scroll" }}
            maxHeight={500}
            tipContent={<div>Click "Register". {<br />}</div>}
            showButton={false}
            showTip={createSteps[stepIndex] === createEnums.CLICKREGISTER}
            tipTarget={
              <NeutralBankingButton
                onClick={() =>
                  navigate(
                    `/${activity}/${Number(stepIndex) + 1}/${
                      bankPageEnums.BANKHOMEPAGE
                    }/${bankPageEnums.PHONEVERIFICATION}`
                  )
                }
                disabled={createSteps[stepIndex] !== createEnums.CLICKREGISTER}
              >
                Register
              </NeutralBankingButton>
            }
          />
        </ButtonContainer>
      </InputContainer>
    </SmallContainer>
  );
};

export default AccountRegistration;
