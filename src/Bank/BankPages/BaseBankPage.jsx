import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  BankingBackground,
  BankingContainer,
  BankingFooter,
  BankingHeader,
  CleanBackground,
} from "./BankPageElements";
import { MarginedContainer } from "../Shared/Layout";
import { PaymentMethods } from "./PaymentMethods";
import {
  activitiesEnums,
  makingPaymentsEnums,
  makingPaymentsSteps,
} from "../enums";

const BasePage = () => {
  let [paymentMethodsOpen, setPaymentMethodsOpen] = useState(false);
  const { activity, stepIndex } = useParams();

  const isMakingPayments = activitiesEnums.MAKINGPAYMENTS === activity;

  // useEffect to control if the modal is open
  // not best practice, but whatever
  useEffect(() => {
    if (
      isMakingPayments &&
      makingPaymentsSteps[stepIndex] === makingPaymentsEnums.billPaymentsStep
    ) {
      setPaymentMethodsOpen(true);
    } else {
      setPaymentMethodsOpen(false);
    }
  }, [isMakingPayments, stepIndex]);

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
