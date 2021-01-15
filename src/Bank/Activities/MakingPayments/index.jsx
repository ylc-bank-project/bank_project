import React, { useState, useEffect } from "react";
import { BasicTooltip, BasicTipButton, InfoTip } from "../../Shared/Tip";
import styled from "styled-components";
import { MarginedContainer } from "../../Shared/Layout";
import IntroOutro from "../../IntroOutro";
import AllAccounts from "../../Shared/AllAccounts";
import { PaymentMethods } from "./PaymentMethods";
import { ItemListing } from "../../Shared/BankPages";
import { AddVerifyPayee } from "./AddVerifyPayee";
import { PayVerifyBill } from "./PayVerifyBill";

import {
  BankingBackground,
  BankingHeader,
  BankingContainer,
  CleanBackground,
  BankingFooter,
} from "../../Shared/BankPages";

import "react-datepicker/dist/react-datepicker.css";

/**
 * Start in "All accounts" page with payments at the bottom
 * Go to Payment Options
 * Go to Bill Payments (list of payees)
 * Go to add Payee page
 * Go to verify payee page
 * Go to pay Bill Payments (list of payees)
 * Go to bill payment page
 * Go to verify bill payment
 */

const clickPayments = "clickPayments";
const billPaymentsStep = "billPaymentsStep";
const addEditPayee = "addEditPayee";
const addCompanyName = "addCompanyName";
const addBillNumber = "addBillNumber";
const goToVerify = "goToVerify";
const confirmPayee = "confirmPayee";
// const payBillNow = "payBillNow";
const chooseTaco = "chooseTaco";
const chooseDebitAccount = "chooseDebitAccount";
const enterAmount = "enterAmount";
const enterDate = "enterDate";
const reviewBillPayment = "reviewBillPayment";
const confirmBillPayment = "confirmBillPayment";

const allSteps = [
  clickPayments,
  billPaymentsStep,
  addEditPayee,
  addCompanyName,
  addBillNumber,
  goToVerify,
  confirmPayee,
  // payBillNow,
  chooseTaco,
  chooseDebitAccount,
  enterAmount,
  enterDate,
  reviewBillPayment,
  confirmBillPayment,
];

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
`;

const ListOfPayees = ({
  setPaymentStage,
  setStep,
  step,
  addVerifyPayeeStage,
  tacoAdded,
  payVerifyBillStage,
}) => {
  return (
    <div>
      <PayeeControlsContainer>
        <ChooseText>Choose your payee</ChooseText>
        <InfoTip
          tipContent={<div>Click Add or Edit Payee should work</div>}
          tipTarget={
            <AddPayeeButton
              onClick={() => {
                setPaymentStage(addVerifyPayeeStage);
                setStep(step + 1);
              }}
            >
              Add Payee
            </AddPayeeButton>
          }
          showTip={addEditPayee}
          showButton={false}
          {...{ step, setStep, allSteps }}
        />
      </PayeeControlsContainer>
      {tacoAdded && (
        <InfoTip
          tipContent={
            <div>
              You did it! Taco Electric is set up for online bill payments. You
              just need to pay the bill! Click on "Taco Electric", this will
              take them to a screen where they choose an account, enter an
              amount and a payment date.
            </div>
          }
          tipTarget={
            <ItemListing
              onClick={() => {
                setPaymentStage(payVerifyBillStage);
                setStep(step + 1);
              }}
              principal={"Taco Electric"}
              date={"55117788992"}
              details={"PAY BILL"}
            />
          }
          showTip={chooseTaco}
          showButton={false}
          {...{ step, setStep, allSteps }}
        />
      )}
      <ItemListing
        principal={"Toyota Canada"}
        date={"20193924UQC685"}
        details={"PAY BILL"}
      />
      <ItemListing
        principal={"Bell Canada"}
        date={"9988225511"}
        details={"PAY BILL"}
      />
      <ItemListing principal={"NSLSC"} date={"088811"} details={"PAY BILL"} />
    </div>
  );
};

const BillPaymentsContainer = styled.div`
  min-height: 100vh;
  background: white;
`;

const BillPayments = (props) => {
  const {
    paymentStage,
    payeesStage,
    addVerifyPayeeStage,
    payVerifyBillStage,
  } = props;
  return (
    <BillPaymentsContainer>
      {paymentStage === payeesStage ? (
        <ListOfPayees {...props} />
      ) : paymentStage === addVerifyPayeeStage ? (
        <AddVerifyPayee {...props} />
      ) : paymentStage === payVerifyBillStage ? (
        <PayVerifyBill {...props} />
      ) : (
        <div>No Stage </div>
      )}
    </BillPaymentsContainer>
  );
};

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

//Main Pages
const allAccountsPage = "allAccounts";
const billPaymentsPage = "billPaymentsPage";

const MakingPayments = ({ currentActivity, returnToAllActivities }) => {
  const [step, setStep] = useState(0);
  // const [introOutroVisible, setIntroOutroVisible] = useState(true);
  const [introOutroVisible, setIntroOutroVisible] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const [payTabActive, setPayTabActive] = useState("home");

  // Main Page State
  // const [mainPage, setMainPage] = useState(allAccountsPage);
  const [mainPage, setMainPage] = useState(undefined);
  const [paymentMethodsVisible, setPaymentMethodsVisible] = useState(false);
  // const [paymentMethodsVisible, setPaymentMethodsVisible] = useState(true);

  // Bill Payment stages
  const payeesStage = "payeesStage";
  const addVerifyPayeeStage = "addVerifyPayeeStage";
  const payVerifyBillStage = "payVerifyBillStage";

  // State for bill payments
  const TacoTitle = "Taco Electric";
  const [tacoAdded, setTacoAdded] = useState(false);
  // const [paymentStage, setPaymentStage] = useState(payeesStage);
  const [paymentStage, setPaymentStage] = useState(addVerifyPayeeStage);
  const [companyTitle, setCompanyTitle] = useState(undefined);
  const [inputedAccountNumber, setInputedAccountNumber] = useState(undefined);
  const [isVerifyPayee, setVerifyPayee] = useState(false);
  const [isVerifyBill, setVerifyBill] = useState(false);
  const [accountType, setAccountType] = useState(undefined);
  const [billAmount, setBillAmount] = useState(undefined);
  const [billDate, setBillDate] = useState(addDays(new Date(), 5));

  useEffect(() => {
    if (step === allSteps.length) {
      setStep(step + 1);
      setIsIntro(false);
      setIntroOutroVisible(true);
    }
  }, [step]);

  const paymentsClick = () => {
    setStep(step + 1);
    setPaymentMethodsVisible(true);
    setPayTabActive("pay");
  };

  console.log({ paymentMethodsVisible });

  return (
    <BankingBackground>
      <BankingHeader />
      <CleanBackground>
        <MarginedContainer>
          <BankingContainer>
            {mainPage === allAccountsPage ? (
              <AllAccounts
                {...{
                  setStep,
                  allSteps,
                  // setPaymentMethodsVisible,
                  setMainPage,
                  step,
                  // paymentMethodsVisible,
                }}
              />
            ) : (
              <BillPayments
                {...{
                  //general
                  paymentStage,
                  payeesStage,
                  addVerifyPayeeStage,
                  payVerifyBillStage,
                  //list of payees
                  setPaymentStage,
                  setStep,
                  step,
                  tacoAdded,
                  inputedAccountNumber,
                  setInputedAccountNumber,
                  //addVerify payees
                  isVerifyPayee,
                  setTacoAdded,
                  companyTitle,
                  TacoTitle,
                  setCompanyTitle,
                  setVerifyPayee,
                  confirmPayee,
                  allSteps,
                  addCompanyName,
                  addBillNumber,
                  goToVerify,
                  //payVerifyBill
                  isVerifyBill,
                  setVerifyBill,
                  setAccountType,
                  setBillAmount,
                  setBillDate,
                  accountType,
                  billAmount,
                  billDate,
                  confirmBillPayment,
                  chooseDebitAccount,
                  enterAmount,
                  enterDate,
                  reviewBillPayment,
                }}
              />
            )}
            <IntroOutro
              closeModal={() => setIntroOutroVisible(false)}
              endExercise={() => returnToAllActivities()}
              currentActivity={currentActivity}
              visible={introOutroVisible}
              isIntro={isIntro}
            />
            {paymentMethodsVisible && (
              <PaymentMethods
                {...{
                  setStep,
                  setPaymentMethodsVisible,
                  setMainPage,
                  step,
                  billPaymentsStep,
                  billPaymentsPage,
                  allSteps,
                }}
              />
            )}
          </BankingContainer>
        </MarginedContainer>
      </CleanBackground>

      <BankingFooter
        {...{
          step,
          setStep,
          allSteps,
          paymentsClick,
          clickPayments,
        }}
        isActive={payTabActive}
      />
    </BankingBackground>
  );
};

export default MakingPayments;
