import React, { useContext } from "react";
import { InfoTip } from "../../Shared/Tip";

import {
  TransactionSubtitle,
  BillPayeeReview,
  ContinueButton,
  ContinueButtonContainer,
} from "../BankPageElements";
import { useOutletContext, useParams } from "react-router-dom";
import {
  CHEQUINGACCOUNT,
  BILLAMOUNT,
  TACOTITLE,
  activitiesEnums,
  makingPaymentsEnums,
  makingPaymentsSteps,
} from "../../enums";
import { IntroModalContext } from "../../context";
import { getFormattedBillDate } from "./shared";

export const VerifyBill = () => {
  const {
    accountType,
    setAccountType,
    billAmount,
    setBillAmount,
    billDate,
    setBillDate,
  } = useOutletContext();
  const { activity, stepIndex } = useParams();
  const { introModalState, setIntroContext } = useContext(IntroModalContext);

  const isMakingPayments = activitiesEnums.MAKINGPAYMENTS === activity;

  const isConfirmBillPayment =
    isMakingPayments &&
    makingPaymentsSteps[stepIndex] === makingPaymentsEnums.confirmBillPayment;

  // let [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  // const todayDate = `${month}/${day}/${year}`;
  // const [bMonth, bDay, bYear] = billDate
  //   ? billDate.toLocaleDateString("en-US").split("/")
  //   : [];
  // const formattedBillDate = `${bMonth}/${bDay}/${bYear}`;

  if (!accountType) {
    setAccountType(CHEQUINGACCOUNT);
  }

  if (!billAmount) {
    setBillAmount(BILLAMOUNT);
  }

  if (!billDate) {
    let [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    const todayDate = `${month}/${day}/${year}`;

    setBillDate(todayDate);
  }

  return (
    <div>
      <TransactionSubtitle>Verify Payment Information</TransactionSubtitle>
      <BillPayeeReview>Payee: {TACOTITLE}</BillPayeeReview>
      <BillPayeeReview>Account: {accountType}</BillPayeeReview>
      <BillPayeeReview>Amount: {billAmount}</BillPayeeReview>
      <BillPayeeReview>
        Payment Date: {getFormattedBillDate(billDate)}
      </BillPayeeReview>
      <ContinueButtonContainer>
        <InfoTip
          tipContent={
            <div>
              Review what you have entered and then press the ‘Confirm Payment’
              button.
            </div>
          }
          tipTarget={
            <ContinueButton
              onClick={() => {
                //Final Step
                setIntroContext({ isVisible: true, isIntro: false });
              }}
            >
              Confirm Payment
            </ContinueButton>
          }
          showTip={isConfirmBillPayment}
          showButton={false}
        />
      </ContinueButtonContainer>
    </div>
  );
};
