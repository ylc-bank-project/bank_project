import React, { useState } from "react";
import { MarginedContainer } from "../../Shared/Layout";
import {
  BankingBackground,
  BankingHeader,
  BankingContainer,
  CleanBackground,
  BankingFooter,
} from "../../BankPages/BankPageElements";
// import { Stepper } from "../../Shared/Stepper";
import IntroOutro from "../../IntroOutro";
// import Checking from "../../BankPages/Accounts/Checking";
// import AllAccounts from "../../BankPages/Accounts/AllAccounts";
import { Outlet } from "react-router-dom";

const checkingTransactions = "checkingTransactions";
const checkingInformation = "checkingInformation";

const Overview = () => {
  // const [isChecking, setIsChecking] = useState(false);
  // const [checkingService, setCheckingService] = useState(checkingTransactions);

  return (
    <>
      {/* <BankingBackground>
        // <BankingHeader />
        <CleanBackground>
          <MarginedContainer>
            <BankingContainer> */}
      {/* {isChecking ? (
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
                }}
              />
            )} */}
      <Outlet />
      {/* </BankingContainer>
            <IntroOutro /> */}
      {/* </MarginedContainer> */}
      {/* </CleanBackground> */}
      {/* // <BankingFooter /> */}
      {/* <Stepper
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
      /> */}
      {/* </BankingBackground> */}
    </>
  );
};

export default Overview;
