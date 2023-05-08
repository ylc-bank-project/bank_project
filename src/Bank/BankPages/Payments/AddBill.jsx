import React, { useState } from "react";
import {
  BillPayeeTitle,
  ContinueButton,
  ContinueButtonContainer,
} from "../BankPageElements";
import { InfoTip } from "../../Shared/Tip";
import NumberFormat from "react-number-format";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import {
  ACCOUNTTYPE,
  BILLAMOUNT,
  makingPaymentsEnums,
  makingPaymentsSteps,
  paymentPagesEnums,
} from "../../enums";
import { getFormattedBillDate } from "./shared";

const StyledNumberFormat = styled(NumberFormat)`
  width: calc(100% - 40px - 2px - 100px);
  border: none;
  padding: 20px;
  margin: 0 50px;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
  ${(p) => p.theme.fonts.body_text_bold};
`;

const StyledDatePicker = styled(DatePicker)`
  /* width: calc(100% - 40px - 2px - 100px); */
  border: none;
  padding: 20px;
  margin: 0 50px;
  ${(p) => p.theme.fonts.body_text_bold};
`;

const StyledSelect = styled.select`
  width: calc(100% - 40px - 2px - 100px);
  border: none;
  padding: 20px;
  margin: 0 50px;
  /* border-bottom: 1px solid lightgray; */
  ${(p) => p.theme.fonts.body_text_bold}
`;

const DateContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% - 40px - 2px - 100px);
  padding: 20px;
  margin: 0 50px;
  border-bottom: 1px solid lightgray;
`;

const LightOption = styled.option`
  /* color: lightgray !important; */
`;

export const AddBill = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();

  const {
    accountType,
    setAccountType,
    billAmount,
    setBillAmount,
    billDate,
    setBillDate,
  } = useOutletContext();

  let [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  const todayDate = `${month}/${day}/${year}`;

  const isPay = (enumStep) => {
    return makingPaymentsSteps[stepIndex] === enumStep;
  };

  const isChooseDebitAccount = isPay(makingPaymentsEnums.chooseDebitAccount);
  const isEnterAmount = isPay(makingPaymentsEnums.enterAmount);
  const isEnterDate = isPay(makingPaymentsEnums.enterDate);
  const isReview = isPay(makingPaymentsEnums.reviewBillPayment);

  return (
    <div>
      <BillPayeeTitle>Pay Taco Electric</BillPayeeTitle>
      <div>
        <InfoTip
          tipContent={
            <div>
              <div>
                Choose the account that you would like to pay the bill with.
              </div>
              <br />
              <div>For this activity, choose {ACCOUNTTYPE}.</div>
            </div>
          }
          tipTarget={
            <StyledSelect
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <LightOption value="">Select Account</LightOption>
              <option value="Chequing">{ACCOUNTTYPE}</option>
              <option value="Saving">Saving</option>
            </StyledSelect>
          }
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                paymentPagesEnums.PAYMENTSHOME
              }/${paymentPagesEnums.ADDBILL}`
            );
          }}
          showTip={isChooseDebitAccount}
          buttonDisabled={accountType !== "Chequing"}
          showButton={true}
        />
      </div>
      <div>
        <InfoTip
          tipContent={
            <div>
              <div>Enter the amount you would like pay. </div>
              <br />
              <div>For this activity, enter {BILLAMOUNT}.</div>
            </div>
          }
          tipTarget={
            <StyledNumberFormat
              onChange={(e) => setBillAmount(e.target.value)}
              prefix={"$"}
              placeholder="Amount"
              value={billAmount}
            />
          }
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                paymentPagesEnums.PAYMENTSHOME
              }/${paymentPagesEnums.ADDBILL}`
            );
          }}
          showTip={isEnterAmount}
          buttonDisabled={billAmount !== `$${BILLAMOUNT}`}
          showButton={true}
        />
      </div>
      <div>
        <InfoTip
          tipContent={
            <div>
              <div>Enter the date you would like to pay the bill.</div>
              <br />
              <div>For this activity, enter today's date.</div>
            </div>
          }
          tipTarget={
            <DateContainer>
              <div>Select Date</div>
              <StyledDatePicker
                selected={billDate}
                onChange={(date) => setBillDate(date)}
                todayButton="Today"
                value={billDate}
              />
            </DateContainer>
          }
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                paymentPagesEnums.PAYMENTSHOME
              }/${paymentPagesEnums.ADDBILL}`
            );
          }}
          showTip={isEnterDate}
          placement={"top-center"}
          buttonDisabled={todayDate !== getFormattedBillDate(billDate)}
          showButton={true}
        />
      </div>
      <ContinueButtonContainer>
        <InfoTip
          tipContent={<div>Click 'Continue' to review your bill payment.</div>}
          tipTarget={
            <ContinueButton
              onClick={() => {
                // setVerifyBill(true);
                // setStep(step + 1);
                navigate(
                  `/${activity}/${Number(stepIndex) + 1}/${
                    paymentPagesEnums.PAYMENTSHOME
                  }/${paymentPagesEnums.VERIFYBILL}`
                );
              }}
              disabled={!isReview}
            >
              Continue
            </ContinueButton>
          }
          showTip={isReview}
          showButton={false}
        />
      </ContinueButtonContainer>
    </div>
  );
};
