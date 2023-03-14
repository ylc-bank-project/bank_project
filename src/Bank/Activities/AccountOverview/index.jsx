import React, { useState, useEffect } from "react";
import { MarginedContainer } from "../../Shared/Layout";
import {
  BankingBackground,
  BankingHeader,
  BankingContainer,
  CleanBackground,
  BankingFooter,
  // TransactionsDetails,
} from "../../BankPages/BankPageElements";
import { Stepper } from "../../Shared/Stepper";
import IntroOutro from "../../IntroOutro";
import Checking from "./Checking";
import AllAccounts from "../../Shared/AllAccounts";
import { BasicTooltip } from "../../Shared/Tip";

// ALL STEPS
const check = "check";
const balance = "balance";
const accountInfo = "accountInfo";
const hold = "hold";
const overdraft = "overdraft";
const available = "available";
const institution = "institution";
const transit = "transit";
const accountNumber = "accountNumber";
const transactions = "transactions";
const wellRead = "wellRead";
const taco = "taco";
const internetDeposit = "internetDeposit";
const preAuth = "preAuth";
const totalDebits = "totalDebits";
const credits = "credits";
const creditsDebits = "creditsDebits";

// All steps array for sequence
const allSteps = [
  check,
  balance,
  accountInfo,
  hold,
  overdraft,
  available,
  institution,
  transit,
  accountNumber,
  transactions,
  wellRead,
  taco,
  internetDeposit,
  preAuth,
  totalDebits,
  credits,
  creditsDebits,
];

const checkingTransactions = "checkingTransactions";
const checkingInformation = "checkingInformation";

const Overview = ({ currentActivity, endCurrentActivity }) => {
  const [step, setStep] = useState(0);
  // const [step, setStep] = useState(1);
  const [isChecking, setIsChecking] = useState(false);
  // const [isChecking, setIsChecking] = useState(true);
  const [checkingService, setCheckingService] = useState(checkingTransactions);
  // const [checkingService, setCheckingService] = useState(checkingInformation);
  const [introOutroVisible, setIntroOutroVisible] = useState(true);
  // const [introOutroVisible, setIntroOutroVisible] = useState(false);
  const [isIntro, setIsIntro] = useState(true);

  // useEffect(() => {
  //   if (step === allSteps.length) {
  //     setStep(step + 1);
  //     setIsIntro(false);
  //     setIntroOutroVisible(true);
  //   }
  // }, [step]);

  const CheckingTip = (child) => (
    <BasicTooltip
      content={"Click on ‘Chequing’."}
      showTip={allSteps[step] === "check"}
      staticOnly={true}
      placement="left-center"
    >
      {child}
    </BasicTooltip>
  );

  return (
    <BankingBackground>
      <BankingHeader />
      <CleanBackground>
        <MarginedContainer>
          <BankingContainer>
            {isChecking ? (
              <>
                <Checking
                  {...{
                    step,
                    setStep,
                    allSteps,
                    transactions,
                    wellRead,
                    taco,
                    internetDeposit,
                    preAuth,
                    totalDebits,
                    credits,
                    creditsDebits,
                    hold,
                    overdraft,
                    available,
                    institution,
                    transit,
                    accountNumber,
                    setCheckingService,
                    checkingTransactions,
                    accountInfo,
                    checkingInformation,
                    checkingService,
                    balance,
                  }}
                />
              </>
            ) : (
              <AllAccounts
                {...{
                  allSteps,
                  step,
                  check,
                  setIsChecking,
                  setStep,
                  CheckingTip,
                }}
              />
            )}
          </BankingContainer>

          <IntroOutro
            closeModal={() => setIntroOutroVisible(false)}
            endExercise={() => endCurrentActivity()}
            currentActivity={currentActivity}
            visible={introOutroVisible}
            isIntro={isIntro}
          />
        </MarginedContainer>
      </CleanBackground>
      <BankingFooter />
      <Stepper
        {...{ setStep, step, allSteps }}
        onBack={() => {
          switch (allSteps[step]) {
            case balance:
              setIsChecking(false);
              break;
            case hold:
              setCheckingService(checkingTransactions);
              break;
            case wellRead:
              setCheckingService(checkingInformation);
              break;
            default:
              break;
          }
        }}
      />
    </BankingBackground>
  );
};

export default Overview;
