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

const ListOfPayees = ({
  setPaymentStage,
  setStep,
  step,
  addVerifyPayeeStage,
  tacoAdded,
  payVerifyBillStage,
}) => {
  console.log({ setPaymentStage });
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
          <InfoTip
            tipContent={
              <div>
                You did it! Taco Electric is set up for online bill payments.
                You just need to pay the bill! Click on "Taco Electric", this
                will take them to a screen where they choose an account, enter
                an amount and a payment date.
              </div>
            }
            tipTarget={
              <button
                onClick={() => {
                  setPaymentStage(payVerifyBillStage);
                  setStep(step + 1);
                }}
              >
                Taco Electric
              </button>
            }
            showTip={chooseTaco}
            showButton={false}
            {...{ step, setStep, allSteps }}
          />
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

const AddVerifyPayee = ({
  isVerifyPayee,
  setTacoAdded,
  setPaymentStage,
  companyTitle,
  TacoTitle,
  setCompanyTitle,
  step,
  setStep,
  setVerifyPayee,
  inputedAccountNumber,
  setInputedAccountNumber,
  payeesStage,
}) => {
  return (
    <div>
      {isVerifyPayee ? (
        <div>
          <div>Review the new payee</div>
          <div>{companyTitle}</div>
          <div>{inputedAccountNumber}</div>
          <div>
            <InfoTip
              tipContent={
                <div>
                  Verify everything is correct. It should say the payee name and
                  account number entered. Choose "Add Payee" to continue.
                </div>
              }
              tipTarget={
                <button
                  onClick={() => {
                    setTacoAdded(true);
                    setPaymentStage(payeesStage);
                    setStep(step + 1);
                  }}
                >
                  Add Payee
                </button>
              }
              showTip={confirmPayee}
              showButton={false}
              {...{ step, setStep, allSteps }}
            />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <InfoTip
                tipContent={<div>enter company name: Taco Electric</div>}
                buttonDisabled={companyTitle !== TacoTitle}
                tipTarget={
                  <label>
                    Company Name:
                    <input
                      onChange={(e) => setCompanyTitle(e.target.value)}
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
              <InfoTip
                tipContent={
                  <div>
                    Now enter account/bill number. Make something up.{" "}
                    <span role="img" aria-label="smile emoji">
                      🙂
                    </span>
                  </div>
                }
                buttonDisabled={false}
                tipTarget={
                  <label>
                    Account/Bill Number
                    <input
                      onChange={(e) => setInputedAccountNumber(e.target.value)}
                      type="number"
                    />
                  </label>
                }
                showTip={addBillNumber}
                showButton={true}
                {...{ step, setStep, allSteps }}
              />
            </div>
          </div>
          <div>
            <InfoTip
              tipContent={<div>Now continue to review your new payee.</div>}
              tipTarget={
                <button
                  onClick={() => {
                    setStep(step + 1);
                    setVerifyPayee(true);
                  }}
                >
                  Continue
                </button>
              }
              showTip={goToVerify}
              showButton={false}
              {...{ step, setStep, allSteps }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const PayVerifyBill = ({
  isVerifyBill,
  setStep,
  step,
  setVerifyBill,
  setAccountType,
  setBillAmount,
  setBillDate,
  accountType,
  billAmount,
  billDate,
}) => {
  return (
    <div>
      {isVerifyBill ? (
        <div>
          <div>Verify here </div>
          <div>
            <InfoTip
              tipContent={
                <div>
                  Review what you have entered and then press the ‘Confirm
                  Payment’ button.
                </div>
              }
              tipTarget={
                <button
                  onClick={() => {
                    //Final Step
                    setStep(step + 1);
                  }}
                >
                  Confirm Payment
                </button>
              }
              showTip={confirmBillPayment}
              showButton={false}
              {...{ step, setStep, allSteps }}
            />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <InfoTip
              tipContent={
                <div>
                  Choose an account that you would like to pay the bill with.
                  For this activity, choose ‘chequing’.
                </div>
              }
              tipTarget={
                <label>
                  Account:
                  <select onChange={(e) => setAccountType(e.target.value)}>
                    <option value="">Checking</option>
                    <option value="checking">Checking</option>
                    <option value="saving">Saving</option>
                  </select>
                </label>
              }
              showTip={chooseDebitAccount}
              buttonDisabled={accountType !== "checking"}
              showButton={true}
              {...{ step, setStep, allSteps }}
            />
          </div>
          <div>
            <InfoTip
              tipContent={
                <div>
                  Enter the amount you would like pay. For this activity, enter
                  $68.00.
                </div>
              }
              tipTarget={
                <label>
                  Amount:
                  <input
                    onChange={(e) => setBillAmount(e.target.value)}
                    type="number"
                  />
                </label>
              }
              showTip={enterAmount}
              buttonDisabled={billAmount !== "68.00"}
              showButton={true}
              {...{ step, setStep, allSteps }}
            />
          </div>
          <div>
            <InfoTip
              tipContent={
                <div>
                  Enter the date you would like to pay the bill. For this
                  activity, enter ‘Today’.
                </div>
              }
              tipTarget={
                <label>
                  Date:
                  <input
                    onChange={(e) => setBillDate(e.target.value)}
                    type="date"
                  />
                </label>
              }
              showTip={enterDate}
              buttonDisabled={billDate !== "today"}
              showButton={true}
              {...{ step, setStep, allSteps }}
            />
          </div>
          <div>
            <InfoTip
              tipContent={
                <div>Click 'Continue' to review your bill payment.</div>
              }
              tipTarget={
                <button
                  onClick={() => {
                    setVerifyBill(true);
                    setStep(step + 1);
                  }}
                >
                  Continue
                </button>
              }
              showTip={reviewBillPayment}
              showButton={false}
              {...{ step, setStep, allSteps }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const AllAccounts = ({
  setStep,
  setPaymentMethodsVisible,
  setMainPage,
  step,
  paymentMethodsVisible,
}) => {
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

const BillPayments = (props) => {
  const {
    paymentStage,
    payeesStage,
    addVerifyPayeeStage,
    payVerifyBillStage,
  } = props;
  return (
    <div>
      {paymentStage === payeesStage ? (
        <ListOfPayees {...props} />
      ) : paymentStage === addVerifyPayeeStage ? (
        <AddVerifyPayee {...props} />
      ) : paymentStage === payVerifyBillStage ? (
        <PayVerifyBill {...props} />
      ) : (
        <div>No Stage </div>
      )}
    </div>
  );
};

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
  const [accountType, setAccountType] = useState(undefined);
  const [billAmount, setBillAmount] = useState(undefined);
  const [billDate, setBillDate] = useState(undefined);

  console.log({ accountType, billAmount, billDate });

  useEffect(() => {
    if (step === allSteps.length) {
      setStep(step + 1);
      setIsIntro(false);
      setIntroOutroVisible(true);
    }
  }, [step]);

  return (
    <div>
      <div>Making Payments</div>
      {mainPage === allAccountsPage ? (
        <AllAccounts
          {...{
            setStep,
            setPaymentMethodsVisible,
            setMainPage,
            step,
            paymentMethodsVisible,
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
            //payVerifyBill
            isVerifyBill,
            setVerifyBill,
            setAccountType,
            setBillAmount,
            setBillDate,
            accountType,
            billAmount,
            billDate,
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
    </div>
  );
};

export default MakingPayments;
