import React, { useState, useEffect } from "react";
import { BasicTooltip, BasicTipButton, InfoTip } from "../../Shared/Tip";
import { MarginedContainer } from "../../Shared/Layout";
import { BankingBackground } from "../../Shared/BankPages";
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

const Overview = ({ currentActivity, returnToAllActivities }) => {
  const [step, setStep] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [checkingService, setCheckingService] = useState(checkingTransactions);
  const [introOutroVisible, setIntroOutroVisible] = useState(true);
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    if (step === allSteps.length) {
      setStep(step + 1);
      setIsIntro(false);
      setIntroOutroVisible(true);
    }
  }, [step]);

  const AllAccounts = () => {
    return (
      <div>
        <BasicTooltip
          content={"click on ‘Chequing Account’"}
          showTip={allSteps[step] === check}
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
        <div>
          Balance shows the amount of money in your account, including any funds
          on hold.
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
          content={<BalanceContent />}
          showTip={allSteps[step] === balance}
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

          <InfoTip
            tipContent={
              <div>
                Transactions represent the money being spent (debited) and the
                money being added (credit) to your account.
              </div>
            }
            tipTarget={<span>Transactions Info</span>}
            showTip={transactions}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                On January 21st, $12.50 was spent at Well Read Books. Point of
                Sale- Interac Retail purchase means you made a purchase with
                your debit card. The numbers you see represents the transaction
                number which is a special label that identifies the purchase.
                Every purchase will have a different transaction number.
              </div>
            }
            tipTarget={<span>well-read books point of sale</span>}
            showTip={wellRead}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                On January 16th, $109.45 was debited from your account to pay a
                Taco Electric bill.The numbers you see represents the
                transaction number which is a special label that identifies the
                purchase. Every purchase will have a different transaction
                number.
              </div>
            }
            tipTarget={<span>Taco Bill</span>}
            showTip={taco}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                On January 5th, $300 was deposited (credited) in the account.
                The numbers you see represents the transaction number which is a
                special label that identifies the purchase. Every purchase will
                have a different transaction number.
              </div>
            }
            tipTarget={<span>Internet Banking Internet Deposit</span>}
            showTip={internetDeposit}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                On January 16th, $96.00 was debited from your account to TD
                Insurance National. It was a preauthorized debit which means
                instead of sending a payment, a company withdraws funds from
                your bank account. It’s a convenient way to pay bills and make
                other payments automatically and has to be approved by the owner
                of the bank account first.
              </div>
            }
            tipTarget={<span>Electronic Funds Transfer</span>}
            showTip={preAuth}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                <div>The total under Debits is $2606.19</div>
              </div>
            }
            tipTarget={<span>Debits Total</span>}
            showTip={totalDebits}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                <div>the total under Credits is $2763.80</div>
              </div>
            }
            tipTarget={<span>Credits Total</span>}
            showTip={credits}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                <div>
                  $2763.80 (credits) - $2606.19 (debits)= $157.61 was not spent
                  this month. It can be put into a savings account or spent at a
                  later date.
                </div>
              </div>
            }
            tipTarget={<span>Credits and Debits</span>}
            showTip={creditsDebits}
            {...{ step, setStep, allSteps }}
          />
        </div>
      );
    };

    const AccountInformation = () => {
      return (
        <div>
          <InfoTip
            tipContent={
              <div>
                Funds on Hold are deposits made to your account that are not yet
                available to withdraw.
              </div>
            }
            tipTarget={<span>Funds on hold</span>}
            showTip={hold}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                Overdraft Limit is the maximum amount of money you can withdraw
                from your account after your balance reaches zero.
              </div>
            }
            tipTarget={<span>Overdraft Limit</span>}
            showTip={overdraft}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                Available Funds is your balance minus any funds on hold plus any
                overdraft limit (if applicable), representing money available
                for immediate use in your account.
              </div>
            }
            tipTarget={<span>Available funds</span>}
            showTip={available}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                An institution number is a 3- digit code that identifies which
                bank provider the account is associated with.
              </div>
            }
            tipTarget={<span>Institution #</span>}
            showTip={institution}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                A transit number is a 5- digit code that identifies where in
                Canada your bank is located.
              </div>
            }
            tipTarget={<span>Transit #</span>}
            showTip={transit}
            {...{ step, setStep, allSteps }}
          />
          <InfoTip
            tipContent={
              <div>
                An account number is a 7- digit number that identifies the owner
                of the account.
              </div>
            }
            tipTarget={<span>Account #</span>}
            showTip={accountNumber}
            {...{ step, setStep, allSteps }}
          />
        </div>
      );
    };

    return (
      <div>
        <div>
          <BasicTooltip
            content={"Click here to go to Account Information"}
            showTip={allSteps[step] === transactions}
            staticOnly={true}
          >
            <button
              disabled={allSteps[step] !== transactions}
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
            showTip={allSteps[step] === accountInfo}
            staticOnly={true}
          >
            <button
              disabled={allSteps[step] !== accountInfo}
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
    <BankingBackground>
      <MarginedContainer>
        {isChecking ? <Checking /> : <AllAccounts />}

        <IntroOutro
          closeModal={() => setIntroOutroVisible(false)}
          endExercise={() => returnToAllActivities()}
          currentActivity={currentActivity}
          visible={introOutroVisible}
          isIntro={isIntro}
        />
      </MarginedContainer>
    </BankingBackground>
  );
};

export default Overview;
