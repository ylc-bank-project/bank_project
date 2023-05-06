import React from "react";
// import styled from "styled-components";
// import { BasicTooltip, BasicTipButton, InfoTip } from "../../Shared/Tip";
import { InfoTip } from "../../Shared/Tip";
import {
  BillPayeeTitle,
  BillPayeeReview,
  ContinueButton,
  ContinueButtonContainer,
} from "../BankPageElements";
import { useNavigate, useParams } from "react-router-dom";
import {
  activitiesEnums,
  makingPaymentsEnums,
  makingPaymentsSteps,
  paymentPagesEnums,
} from "../../enums";

export const VerifyPayee = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();

  const isMakingPayments = activitiesEnums.MAKINGPAYMENTS === activity;

  const isConfirmPayee =
    isMakingPayments &&
    makingPaymentsSteps[stepIndex] === makingPaymentsEnums.confirmPayee;

  return (
    <div>
      <BillPayeeTitle>Review the new payee</BillPayeeTitle>
      <BillPayeeReview>Company Name: Taco Electric</BillPayeeReview>
      <BillPayeeReview>Account/Bill Number: 1234567</BillPayeeReview>
      <ContinueButtonContainer>
        <InfoTip
          tipContent={
            <div>
              Verify everything is correct. It should say the payee name and
              account number entered. Choose "Add Payee" to continue.
            </div>
          }
          tipTarget={
            <ContinueButton
              onClick={() => {
                // setTacoAdded(true);
                // setPaymentStage(payeesStage);
                navigate(
                  `/${activity}/${Number(stepIndex) + 1}/${
                    paymentPagesEnums.PAYMENTSHOME
                  }/${paymentPagesEnums.LISTOFPAYEES}`
                );
              }}
              disabled={!isConfirmPayee}
            >
              Add Payee
            </ContinueButton>
          }
          showTip={isConfirmPayee}
          showButton={false}
        />
      </ContinueButtonContainer>
    </div>
  );
};
