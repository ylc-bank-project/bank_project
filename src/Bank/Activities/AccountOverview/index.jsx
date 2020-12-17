import React, { useState } from "react";
import { BasicTooltip, BasicTipButton } from "../../Shared/Tip";
import { MarginedContainer } from "../../Shared/Layout";
import IntroOutro from "../../IntroOutro";

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

const AllSteps = [
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
];

const checkingTransactions = "checkingTransactions";
const checkingInformation = "checkingInformation";

const Overview = ({ currentActivity, returnToAllActivities }) => {
  const [step, setStep] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [checkingService, setCheckingService] = useState(checkingTransactions);
  const [introOutroVisible, setIntroOutroVisible] = useState(true);
  const [isIntro, setIsIntro] = useState(true);

  const AllAccounts = () => {
    return (
      <div>
        <BasicTooltip
          content={"click on ‘Chequing Account’"}
          showTip={AllSteps[step] === check}
          staticOnly={true}
        >
          <button
            onClick={() => {
              setIsChecking(true);
              setStep(step + 1);
            }}
          >
            Checking
          </button>
        </BasicTooltip>
        <button>Savings</button>
      </div>
    );
  };

  const Balance = () => {
    const BalanceContent = () => {
      return (
        <BasicTipButton
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Continue
        </BasicTipButton>
      );
    };
    return (
      <div>
        <BasicTooltip
          content={<BalanceContent />}
          showTip={AllSteps[step] === balance}
          staticOnly={true}
        >
          <span>balance</span>
        </BasicTooltip>
      </div>
    );
  };

  const Checking = () => {
    const Transactions = () => {
      return (
        <div>
          <Balance />
          <div>well-read books point of sale</div>
          <div>Banking Internet Bill</div>
          <div>Internet Banking Internet Deposit</div>
          <div>Electronic Funds Transfer</div>
          <div>transaction</div>
          <div>transaction</div>
          <div>transaction</div>
          <div>transaction</div>
        </div>
      );
    };

    const AccountInformation = () => {
      return (
        <div>
          <div>funds on hold</div>
          <div>Overdraft Limit</div>
          <div>Available funds</div>
          <div>Institution #</div>
          <div>Transit #</div>
          <div>Account #</div>
        </div>
      );
    };

    return (
      <div>
        <div>
          <button>Transactions</button>
          <BasicTooltip
            content={"Click here to go to Account Information"}
            showTip={AllSteps[step] === accountInfo}
            staticOnly={true}
          >
            <button
              disabled={AllSteps[step] !== accountInfo}
              onClick={() => setCheckingService(checkingInformation)}
            >
              AccountInformation
            </button>
          </BasicTooltip>
        </div>
        {checkingService === checkingTransactions ? (
          <Transactions />
        ) : checkingService === checkingInformation ? (
          <AccountInformation />
        ) : (
          <div>no service </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div>Current Step = {step}</div>
      {isChecking ? <Checking /> : <AllAccounts />}

      <IntroOutro
        closeModal={() => setIntroOutroVisible(false)}
        endExercise={() => returnToAllActivities()}
        currentActivity={currentActivity}
        visible={introOutroVisible}
        isIntro={isIntro}
      />
    </div>
  );
};

export default Overview;
