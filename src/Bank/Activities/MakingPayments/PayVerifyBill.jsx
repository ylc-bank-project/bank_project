import React from "react";
import { BasicTooltip, BasicTipButton, InfoTip } from "../../Shared/Tip";
import NumberFormat from "react-number-format";
import DatePicker from "react-datepicker";

export const PayVerifyBill = ({
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
  allSteps,
  confirmBillPayment,
  chooseDebitAccount,
  enterAmount,
  enterDate,
  reviewBillPayment,
}) => {
  let [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  const todayDate = `${month}/${day}/${year}`;
  const [bMonth, bDay, bYear] = billDate
    ? billDate.toLocaleDateString("en-US").split("/")
    : [];
  const formattedBillDate = `${bMonth}/${bDay}/${bYear}`;
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
                  <NumberFormat
                    onChange={(e) => setBillAmount(e.target.value)}
                    prefix={"$"}
                  />
                </label>
              }
              showTip={enterAmount}
              buttonDisabled={billAmount !== "$68.00"}
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
                  <DatePicker
                    selected={billDate}
                    onChange={(date) => setBillDate(date)}
                    todayButton="Today"
                  />
                </label>
              }
              showTip={enterDate}
              buttonDisabled={todayDate !== formattedBillDate}
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
