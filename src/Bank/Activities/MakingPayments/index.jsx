import React, { useState, useEffect } from "react";
import { BasicTooltip, BasicTipButton, InfoTip } from "../../Shared/Tip";
import { MarginedContainer } from "../../Shared/Layout";
import IntroOutro from "../../IntroOutro";

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
const payBillNow = "payBillNow";
const chooseTaco = "chooseTaco";
const chooseDebitAccount = "chooseDebitAccount";
const enterAmount = "enterAmount";
const enterDate = "enterDate";
const reviewBillPayment = "reviewBillPayment";

const allSteps = [
  clickPayments,
  billPaymentsStep,
  addEditPayee,
  addCompanyName,
  addBillNumber,
  goToVerify,
  confirmPayee,
  payBillNow,
  chooseTaco,
  chooseDebitAccount,
  enterAmount,
  enterDate,
  reviewBillPayment,
];

//Main Pages
const allAccountsPage = "allAccounts";
const billPaymentsPage = "billPaymentsPage";

const MakingPayments = ({ currentActivity, returnToAllActivities }) => {
  const [mainPage, setMainPage] = useState(allAccountsPage);
  const [step, setStep] = useState(0);
  const [introOutroVisible, setIntroOutroVisible] = useState(true);
  const [isIntro, setIsIntro] = useState(true);
  const [paymentMethodsVisible, setPaymentMethodsVisible] = useState(false);

  useEffect(() => {
    if (step === allSteps.length) {
      setStep(step + 1);
      setIsIntro(false);
      setIntroOutroVisible(true);
    }
  }, [step]);

  const AllAccounts = () => {
    const PaymentMethods = () => {
      return (
        <div>
          <InfoTip
            tipContent={<div>Click on Bill Payments</div>}
            tipTarget={
              <button
                onClick={() => {
                  setStep(step + 1);
                  setPaymentMethodsVisible(false);
                  setMainPage(billPaymentsPage);
                }}
              >
                Bill Payments
              </button>
            }
            showTip={clickPayments}
            showButton={false}
            {...{ step, setStep, allSteps }}
          />

          <div>Transfer Money</div>
        </div>
      );
    };
    return (
      <div>
        <div>Checking</div>
        <div>Other Account</div>
        <div>
          <InfoTip
            tipContent={<div>Click on "Make Payments"</div>}
            tipTarget={
              <button
                onClick={() => {
                  setStep(step + 1);
                  setPaymentMethodsVisible(true);
                }}
              >
                Make Payments
              </button>
            }
            showTip={clickPayments}
            showButton={false}
            {...{ step, setStep, allSteps }}
          />
        </div>
        {paymentMethodsVisible && <PaymentMethods />}
      </div>
    );
  };

  const BillPayments = () => {
    const payeesStage = "payeesStage";
    const addVerifyPayeeStage = "addVerifyPayeeStage";
    const payVerifyBillStage = "payVerifyBillStage";
    const [tacoAdded, setTacoAdded] = useState(false);

    const [paymentStage, setPaymentStage] = useState(payeesStage);
    const ListOfPayees = () => {
      return (
        <div>
          <div>
            <button
              onClick={() => {
                setPaymentStage(addVerifyPayeeStage);
              }}
            >
              Add Payee
            </button>
          </div>
          {tacoAdded && (
            <div>
              <button
                onClick={() => {
                  setPaymentStage(payVerifyBillStage);
                }}
              >
                Taco Elec
              </button>
            </div>
          )}
          <div>Other Payee</div>
          <div>Other Payee</div>
          <div>Other Payee</div>
          <div>Other Payee</div>
          <div>Other Payee</div>
        </div>
      );
    };

    const AddVerifyPayee = () => {
      const [isVerify, setVerify] = useState(false);
      return (
        <div>
          {isVerify ? (
            <div>
              <div>Review the new payee</div>
              <button
                onClick={() => {
                  setPaymentStage(payeesStage);
                  setTacoAdded(true);
                }}
              >
                Add Payee
              </button>
            </div>
          ) : (
            <div>
              <div>
                <div>
                  <label>
                    Company Name:
                    <input type="text" />
                  </label>
                </div>
                <div>
                  <label>
                    Account/Bill Number
                    <input type="number" />
                  </label>
                </div>
              </div>
              <button onClick={() => setVerify(true)}>Continue</button>
            </div>
          )}
        </div>
      );
    };

    const PayVerifyBill = () => {
      const [isVerify, setVerify] = useState(false);
      return (
        <div>
          {isVerify ? (
            <div>
              <div>Verify here </div>
              <button
                onClick={() => {
                  //Final Step
                  setStep(step + 1);
                }}
              >
                Confirm Payment
              </button>
            </div>
          ) : (
            <div>
              <div>
                <label>
                  Account:
                  <select>
                    <option value="checking">Checking</option>
                    <option value="saving">Saving</option>
                  </select>
                </label>
              </div>
              <div>
                <label>
                  Amount:
                  <input type="number" />
                </label>
              </div>
              <div>
                <label>
                  Date:
                  <input type="date" />
                </label>
              </div>
              <button onClick={() => setVerify(true)}>Continue</button>
            </div>
          )}
        </div>
      );
    };

    const CurrentComponent = () => {
      switch (paymentStage) {
        case payeesStage:
          return <ListOfPayees />;
        case addVerifyPayeeStage:
          return <AddVerifyPayee />;
        case payVerifyBillStage:
          return <PayVerifyBill />;
        default:
          break;
      }
    };
    return <div>{CurrentComponent()}</div>;
  };

  return (
    <div>
      <div>Making Payments</div>
      {mainPage === allAccountsPage ? <AllAccounts /> : <BillPayments />}
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

export default MakingPayments;
