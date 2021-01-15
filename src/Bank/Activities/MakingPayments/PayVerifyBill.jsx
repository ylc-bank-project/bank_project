import React from "react";
import { BasicTooltip, BasicTipButton, InfoTip } from "../../Shared/Tip";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import DatePicker from "react-datepicker";
import {
  BillPayeeTitle,
  BillPayeeInput,
  BillPayeeReview,
  ContinueButton,
  ContinueButtonContainer,
} from "../../Shared/BankPages";

const StyledNumberFormat = styled(NumberFormat)`
  width: calc(100% - 40px - 2px - 100px);
  border: none;
  padding: 20px;
  margin: 0 50px;
  border-bottom: 1px solid lightgray;
  ${(p) => p.theme.fonts.body_text_bold};
`;

const StyledDatePicker = styled(DatePicker)`
  /* width: calc(100% - 40px - 2px - 100px); */
  border: none;
  padding: 20px;
  margin: 0 50px;
  ${(p) => p.theme.fonts.body_text_bold};
`;

const StyledSelect = styled.select`
  width: calc(100% - 40px - 2px - 100px);
  border: none;
  padding: 20px;
  margin: 0 50px;
  border-bottom: 1px solid lightgray;
  ${(p) => p.theme.fonts.body_text_bold};
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 40px - 2px - 100px);
  padding: 20px;
  margin: 0 50px;
  border-bottom: 1px solid lightgray;
`;

const LightOption = styled.option`
  /* color: lightgray !important; */
`;

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
          <ContinueButtonContainer>
            <InfoTip
              tipContent={
                <div>
                  Review what you have entered and then press the ‘Confirm
                  Payment’ button.
                </div>
              }
              tipTarget={
                <ContinueButton
                  onClick={() => {
                    //Final Step
                    setStep(step + 1);
                  }}
                >
                  Confirm Payment
                </ContinueButton>
              }
              showTip={confirmBillPayment}
              showButton={false}
              {...{ step, setStep, allSteps }}
            />
          </ContinueButtonContainer>
        </div>
      ) : (
        <div>
          <BillPayeeTitle>Pay A Bill</BillPayeeTitle>
          <div>
            <InfoTip
              tipContent={
                <div>
                  Choose an account that you would like to pay the bill with.
                  For this activity, choose ‘chequing’.
                </div>
              }
              tipTarget={
                <StyledSelect onChange={(e) => setAccountType(e.target.value)}>
                  <LightOption value="">Select Account</LightOption>
                  <option value="checking">Checking</option>
                  <option value="saving">Saving</option>
                </StyledSelect>
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
                <StyledNumberFormat
                  onChange={(e) => setBillAmount(e.target.value)}
                  prefix={"$"}
                  placeholder="Amount"
                />
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
                <DateContainer>
                  <div>Select Date</div>
                  <StyledDatePicker
                    selected={billDate}
                    onChange={(date) => setBillDate(date)}
                    todayButton="Today"
                  />
                </DateContainer>
              }
              showTip={enterDate}
              buttonDisabled={todayDate !== formattedBillDate}
              showButton={true}
              {...{ step, setStep, allSteps }}
            />
          </div>
          <ContinueButtonContainer>
            <InfoTip
              tipContent={
                <div>Click 'Continue' to review your bill payment.</div>
              }
              tipTarget={
                <ContinueButton
                  onClick={() => {
                    setVerifyBill(true);
                    setStep(step + 1);
                  }}
                >
                  Continue
                </ContinueButton>
              }
              showTip={reviewBillPayment}
              showButton={false}
              {...{ step, setStep, allSteps }}
            />
          </ContinueButtonContainer>
        </div>
      )}
    </div>
  );
};
