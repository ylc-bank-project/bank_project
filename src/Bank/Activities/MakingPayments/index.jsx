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
  const [step, setStep] = useState(0);
  const [introOutroVisible, setIntroOutroVisible] = useState(true);
  const [isIntro, setIsIntro] = useState(true);

  // Main Page State
  const [mainPage, setMainPage] = useState(allAccountsPage);
  const [paymentMethodsVisible, setPaymentMethodsVisible] = useState(false);

  // Bill Payment stages
  const payeesStage = "payeesStage";
  const addVerifyPayeeStage = "addVerifyPayeeStage";
  const payVerifyBillStage = "payVerifyBillStage";

  // State for bill payments
  const TacoTitle = "Taco Electric";
  const [tacoAdded, setTacoAdded] = useState(false);
  const [paymentStage, setPaymentStage] = useState(payeesStage);
  const [companyTitle, setCompanyTitle] = useState(undefined);
  const [inputedAccountNumber, setInputedAccountNumber] = useState(undefined);
  const [isVerifyPayee, setVerifyPayee] = useState(false);
  const [isVerifyBill, setVerifyBill] = useState(false);

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
            showTip={billPaymentsStep}
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

  const BillPayments = () =>
    // {
    // steps and things
    // setStep,
    // step,
    // addEditPayee,
    // allSteps,
    // tacoAdded,
    // // payee
    // payVerifyBillStage,
    // isVerifyPayee,
    // setVerifyPayee,
    // setTacoAdded,
    // confirmPayee,
    // inputedAccountNumber,
    // TacoTitle,
    // setInputedAccountNumber,
    // addCompanyName,
    // isVerifyBill,
    // setVerifyBill,
    // companyTitle,
    // setCompanyTitle,
    // // stages
    // paymentStage,
    // setPaymentStage,
    // addVerifyPayeeStage,
    // payeesStage,
    // }
    {
      const ListOfPayees = () => {
        return (
          <div>
            <div>
              <InfoTip
                tipContent={<div>Click Add or Edit Payee should work</div>}
                tipTarget={
                  <button
                    onClick={() => {
                      setPaymentStage(addVerifyPayeeStage);
                      setStep(step + 1);
                    }}
                  >
                    Add Payee
                  </button>
                }
                showTip={addEditPayee}
                showButton={false}
                {...{ step, setStep, allSteps }}
              />
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
        return (
          <div>
            {isVerifyPayee ? (
              <div>
                <div>Review the new payee</div>
                <button
                  onClick={() => {
                    setTacoAdded(true);
                    setPaymentStage(confirmPayee);
                  }}
                >
                  Add Payee
                </button>
              </div>
            ) : (
              <div>
                <div>
                  <div>
                    <InfoTip
                      tipContent={<div>enter company name: Taco Electric</div>}
                      buttonDisabled={inputedAccountNumber !== TacoTitle}
                      tipTarget={
                        <label>
                          Company Name:
                          <input
                            onChange={(e) => setCompanyTitle(e.target.value)}
                            value={companyTitle}
                            type="text"
                          />
                        </label>
                      }
                      showTip={addCompanyName}
                      showButton={true}
                      {...{ step, setStep, allSteps }}
                    />
                  </div>
                  <div>
                    <label>
                      Account/Bill Number
                      <input type="number" />
                    </label>
                  </div>
                </div>
                <button onClick={() => setVerifyPayee(true)}>Continue</button>
              </div>
            )}
          </div>
        );
      };

      const PayVerifyBill = () => {
        return (
          <div>
            {isVerifyBill ? (
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
                <button onClick={() => setVerifyBill(true)}>Continue</button>
              </div>
            )}
          </div>
        );
      };

      // const CurrentComponent = () => {
      //   switch (paymentStage) {
      //     case payeesStage:
      //       return <ListOfPayees />;
      //     case addVerifyPayeeStage:
      //       return <AddVerifyPayee />;
      //     case payVerifyBillStage:
      //       return <PayVerifyBill />;
      //     default:
      //       break;
      //   }
      // };

      console.log({ paymentStage });
      return (
        <div>
          {paymentStage === payeesStage ? (
            <ListOfPayees />
          ) : paymentStage === addVerifyPayeeStage ? (
            <AddVerifyPayee />
          ) : paymentStage === payVerifyBillStage ? (
            <PayVerifyBill />
          ) : (
            <div>No Stage </div>
          )}
        </div>
      );
    };

  return (
    <div>
      <div>Making Payments</div>
      {mainPage === allAccountsPage ? (
        <AllAccounts />
      ) : (
        <BillPayments
        // {...{
        //   setStep,
        //   step,
        //   addEditPayee,
        //   allSteps,
        //   tacoAdded,
        //   // payee
        //   payVerifyBillStage,
        //   isVerifyPayee,
        //   setVerifyPayee,
        //   setTacoAdded,
        //   confirmPayee,
        //   inputedAccountNumber,
        //   TacoTitle,
        //   setInputedAccountNumber,
        //   addCompanyName,
        //   isVerifyBill,
        //   setVerifyBill,
        //   companyTitle,
        //   setCompanyTitle,
        //   // stages
        //   paymentStage,
        //   setPaymentStage,
        //   addVerifyPayeeStage,
        //   payeesStage,
        // }}
        />
      )}
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
