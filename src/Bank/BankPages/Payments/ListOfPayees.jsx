import React from "react";
import styled from "styled-components";
import { InfoTip } from "../../Shared/Tip";
import { ItemListing } from "../BankPageElements";
import {
  activitiesEnums,
  makingPaymentsEnums,
  makingPaymentsSteps,
  paymentPagesEnums,
} from "../../enums";
import { useNavigate, useParams } from "react-router-dom";

const PayeeControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
`;

const ChooseText = styled.div`
  ${(p) => p.theme.fonts.extra_small_header};
`;

const AddPayeeButton = styled.button`
  /* background: ${(p) => p.theme.colors.bank_blue}; */
  background: white;
  width: 150px;
  height: 50px;
  /* color: white; */
  cursor: pointer;
  ${(p) => p.theme.fonts.large_button_text};
  border-radius: 10px;
  border: none;
  color: grey;
`;

export const ListOfPayees = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();

  const isMakingPayments = activitiesEnums.MAKINGPAYMENTS === activity;
  const isAddEditPayee =
    isMakingPayments &&
    makingPaymentsSteps[stepIndex] === makingPaymentsEnums.addEditPayee;

  const isChooseTaco =
    isMakingPayments &&
    makingPaymentsSteps[stepIndex] === makingPaymentsEnums.chooseTaco;

  const isTacoAdded = isMakingPayments && stepIndex >= 6;

  return (
    <div>
      <PayeeControlsContainer>
        <ChooseText>Select a Payee</ChooseText>
        <InfoTip
          tipContent={<div>Choose "Add Payee".</div>}
          tipTarget={
            <AddPayeeButton
              onClick={() => {
                navigate(
                  `/${activity}/${Number(stepIndex) + 1}/${
                    paymentPagesEnums.PAYMENTSHOME
                  }/${paymentPagesEnums.ADDPAYEE}`
                );
              }}
              disabled={!isAddEditPayee}
            >
              Add Payee
            </AddPayeeButton>
          }
          showTip={isAddEditPayee}
          showButton={false}
        />
      </PayeeControlsContainer>
      {isTacoAdded && (
        <InfoTip
          tipContent={
            <div>
              <div>
                You did it! Taco Electric is set up for online bill payments.
                You just need to pay the bill!
              </div>
              <br />
              <div>
                Click on "Taco Electric". It will take you to a screen where
                you’ll choose an account, the date of payment and the amount
                you’re paying.
              </div>
            </div>
          }
          tipTarget={
            <ItemListing
              onClick={() => {
                // setPaymentStage(payVerifyBillStage);
                navigate(
                  `/${activity}/${Number(stepIndex) + 1}/${
                    paymentPagesEnums.PAYMENTSHOME
                  }/${paymentPagesEnums.ADDBILL}`
                );
              }}
              principal={"Taco Electric"}
              date={"1234567"}
              details={"PAY"}
              separateDetails={true}
            />
          }
          showTip={isChooseTaco}
          showButton={false}
        />
      )}
      <ItemListing
        principal={"Toyota Canada"}
        date={"20193924UQC685"}
        details={"PAY"}
        separateDetails={true}
      />
      <ItemListing
        principal={"Bell Canada"}
        date={"9988225511"}
        details={"PAY"}
        separateDetails={true}
      />
      <ItemListing
        principal={"NSLSC"}
        date={"088811"}
        details={"PAY"}
        separateDetails={true}
      />
    </div>
  );
};
