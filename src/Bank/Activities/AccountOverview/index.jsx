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

  const AccountInfoContent = ({ tipCopy, showTip, bodyCopy }) => {
    const Content = () => {
      return (
        <div>
          <div>{tipCopy}</div>
          <BasicTipButton
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Continue
          </BasicTipButton>
        </div>
      );
    };
    return (
      <div>
        <BasicTooltip
          content={<Content />}
          showTip={AllSteps[step] === showTip}
          staticOnly={true}
        >
          {bodyCopy}
        </BasicTooltip>
      </div>
    );
  };

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

          <AccountInfoContent
            tipCopy={
              <div>
                Transactions represent the money being spent (debited) and the
                money being added (credit) to your account.
              </div>
            }
            bodyCopy={<span>Transactions Info</span>}
            showTip={transactions}
          />
          <span>well-read books point of sale</span>
          <span>Banking Internet Bill</span>
          <span>Internet Banking Internet Deposit</span>
          <span>Electronic Funds Transfer</span>
          <span>transaction</span>
          <span>transaction</span>
          <span>transaction</span>
          <span>transaction</span>
        </div>
      );
    };

    const AccountInformation = () => {
      return (
        <div>
          <AccountInfoContent
            tipCopy={
              <div>
                Funds on Hold are deposits made to your account that are not yet
                available to withdraw.
              </div>
            }
            bodyCopy={<span>Funds on hold</span>}
            showTip={hold}
          />
          <AccountInfoContent
            tipCopy={
              <div>
                Overdraft Limit is the maximum amount of money you can withdraw
                from your account after your balance reaches zero.
              </div>
            }
            bodyCopy={<span>Overdraft Limit</span>}
            showTip={overdraft}
          />
          <AccountInfoContent
            tipCopy={
              <div>
                Available Funds is your balance minus any funds on hold plus any
                overdraft limit (if applicable), representing money available
                for immediate use in your account.
              </div>
            }
            bodyCopy={<span>Available funds</span>}
            showTip={available}
          />
          <AccountInfoContent
            tipCopy={
              <div>
                An institution number is a 3- digit code that identifies which
                bank provider the account is associated with.
              </div>
            }
            bodyCopy={<span>Institution #</span>}
            showTip={institution}
          />
          <AccountInfoContent
            tipCopy={
              <div>
                A transit number is a 5- digit code that identifies where in
                Canada your bank is located.
              </div>
            }
            bodyCopy={<span>Transit #</span>}
            showTip={transit}
          />
          <AccountInfoContent
            tipCopy={
              <div>
                An account number is a 7- digit number that identifies the owner
                of the account.
              </div>
            }
            bodyCopy={<span>Account #</span>}
            showTip={accountNumber}
          />
        </div>
      );
    };

    return (
      <div>
        <div>
          <BasicTooltip
            content={"Click here to go to Account Information"}
            showTip={AllSteps[step] === transactions}
            staticOnly={true}
          >
            <button
              disabled={AllSteps[step] !== transactions}
              onClick={() => {
                setCheckingService(checkingTransactions);
                setStep(step + 1);
              }}
            >
              Transactions
            </button>
          </BasicTooltip>
          <BasicTooltip
            content={"Click here to go to Account Information"}
            showTip={AllSteps[step] === accountInfo}
            staticOnly={true}
          >
            <button
              disabled={AllSteps[step] !== accountInfo}
              onClick={() => {
                setCheckingService(checkingInformation);
                setStep(step + 1);
              }}
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
