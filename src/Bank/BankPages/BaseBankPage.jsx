import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  BankingBackground,
  BankingContainer,
  BankingHeader,
  CleanBackground,
} from "./BankPageElements";
import { MarginedContainer } from "../Shared/Layout";
import { PaymentMethods } from "./PaymentMethods";
import {
  activitiesEnums,
  makingPaymentsEnums,
  makingPaymentsSteps,
  transferFundsEnums,
  transferFundsSteps,
} from "../enums";
import { BankingFooter } from "./BankingFooter";

const BasePage = () => {
  let [paymentMethodsOpen, setPaymentMethodsOpen] = useState(false);
  const { activity, stepIndex } = useParams();

  const isMakingPayments = activitiesEnums.MAKINGPAYMENTS === activity;
  const isTransferFunds = activitiesEnums.TRANSFERFUNDS === activity;

  // useEffect to control if the modal is open
  // not best practice, but whatever
  useEffect(() => {
    if (
      (isMakingPayments &&
        makingPaymentsSteps[stepIndex] ===
          makingPaymentsEnums.billPaymentsStep) ||
      (isTransferFunds &&
        transferFundsSteps[stepIndex] === transferFundsEnums.clickTransfer)
    ) {
      setPaymentMethodsOpen(true);
    } else {
      setPaymentMethodsOpen(false);
    }
  }, [isMakingPayments, isTransferFunds, stepIndex]);

  return (
    <>
      <BankingBackground>
        <BankingHeader />
        <CleanBackground>
          <MarginedContainer>
            <BankingContainer>
              <Outlet />
            </BankingContainer>
          </MarginedContainer>
        </CleanBackground>
        <BankingFooter />
      </BankingBackground>
      {paymentMethodsOpen && <PaymentMethods />}
    </>
  );
};

export default BasePage;
