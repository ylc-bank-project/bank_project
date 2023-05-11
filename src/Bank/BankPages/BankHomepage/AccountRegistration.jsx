import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  CARDNUM,
  PHONENUM,
  // activitiesEnums,
  bankPageEnums,
  createEnums,
  createSteps,
} from "../../enums";
import {
  SmallContainer,
  BoldDiv,
  StyledNumberFormat,
  SubTitle,
  InputContainer,
  StyledLabel,
  LabelInputContainer,
} from "../BankPageElements";
import { InfoTip } from "../../Shared/Tip";
// import { BankingButton } from "../../Shared/Components";
import { ButtonContainer, NeutralBankingButton } from "../../Shared/Layout";

const AccountRegistration = () => {
  const navigate = useNavigate();
  const { activity, stepIndex } = useParams();

  const isEnterCard = createSteps[stepIndex] === createEnums.ENTERCARD;

  const isPhone = createSteps[stepIndex] === createEnums.ENTERPHONE;

  const isAfterPhone = stepIndex > 2;

  const [cardNumber, setCardNumber] = useState(undefined);
  const [phoneNumber, setPhoneNumber] = useState(undefined);

  useEffect(() => {
    !isEnterCard && setCardNumber(CARDNUM);
  }, [isEnterCard]);

  useEffect(() => {
    isAfterPhone && setPhoneNumber(PHONENUM);
  }, [isAfterPhone]);

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
              For this activity, enter: <BoldDiv>{CARDNUM}</BoldDiv> in the card
              number box then select ‘Continue’.
            </div>
          }
          buttonDisabled={cardNumber !== CARDNUM}
          onClick={() =>
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                bankPageEnums.BANKHOMEPAGE
              }/${bankPageEnums.ACCOUNTREGISTRATION}`
            )
          }
          showTip={isEnterCard}
          tipTarget={
            <LabelInputContainer>
              <StyledLabel htmlFor="cardNum">Card Number</StyledLabel>
              <StyledNumberFormat
                id={"cardNum"}
                onChange={(e) => setCardNumber(e.target.value)}
                value={cardNumber}
                format="#### #### #### ####"
                placeholder={"#### #### #### ####"}
                disabled={!isEnterCard}
              />
            </LabelInputContainer>
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
              For this activity, enter: <BoldDiv>{PHONENUM}</BoldDiv> in the
              phone number box then click "Register".
            </div>
          }
          buttonDisabled={phoneNumber !== PHONENUM}
          onClick={() =>
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                bankPageEnums.BANKHOMEPAGE
              }/${bankPageEnums.ACCOUNTREGISTRATION}`
            )
          }
          showTip={isPhone}
          tipTarget={
            <div>
              <StyledLabel htmlFor="phoneNum">Phone Number</StyledLabel>
              <StyledNumberFormat
                id="phoneNum"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                disabled={!isPhone}
                format="###-###-####"
                placeholder={"###-###-####"}
              />
            </div>
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
