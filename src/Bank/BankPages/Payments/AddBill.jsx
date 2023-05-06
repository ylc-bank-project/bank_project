import React from "react";
import {
  BillPayeeTitle,
  ContinueButton,
  ContinueButtonContainer,
} from "../BankPageElements";
import { InfoTip } from "../../Shared/Tip";
import NumberFormat from "react-number-format";
import DatePicker from "react-datepicker";
import styled from "styled-components";

const StyledNumberFormat = styled(NumberFormat)`
  width: calc(100% - 40px - 2px - 100px);
  border: none;
  padding: 20px;
  margin: 0 50px;
  border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray;
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
  /* border-bottom: 1px solid lightgray; */
  ${(p) => p.theme.fonts.body_text_bold}
`;

const DateContainer = styled.div`
  position: relative;
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

export const AddBill = () => {
  return (
    <div>
      <BillPayeeTitle>Pay Taco Electric</BillPayeeTitle>
      <div>
        <InfoTip
          tipContent={
            <div>
              <div>
                Choose your "Chequing" that you would like to pay the bill with.
              </div>
              <br />
              <div>For this activity, choose ‘Chequing’.</div>
            </div>
          }
          tipTarget={
            <StyledSelect
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <LightOption value="">Select Account</LightOption>
              <option value="Chequing">Chequing</option>
              <option value="Saving">Saving</option>
            </StyledSelect>
          }
          showTip={chooseDebitAccount}
          buttonDisabled={accountType !== "Chequing"}
          showButton={true}
        />
      </div>
      <div>
        <InfoTip
          tipContent={
            <div>
              <div>Enter the amount you would like pay. </div>
              <br />
              <div>For this activity, enter 68.00.</div>
            </div>
          }
          tipTarget={
            <StyledNumberFormat
              onChange={(e) => setBillAmount(e.target.value)}
              prefix={"$"}
              placeholder="Amount"
              value={billAmount}
            />
          }
          showTip={enterAmount}
          buttonDisabled={billAmount !== "$68.00"}
          showButton={true}
        />
      </div>
      <div>
        <InfoTip
          tipContent={
            <div>
              <div>Enter the date you would like to pay the bill.</div>
              <br />
              <div>For this activity, enter today's date.</div>
            </div>
          }
          tipTarget={
            <DateContainer>
              <div>Select Date</div>
              <StyledDatePicker
                selected={billDate}
                onChange={(date) => setBillDate(date)}
                todayButton="Today"
                value={billDate}
              />
            </DateContainer>
          }
          showTip={enterDate}
          placement={"top-center"}
          buttonDisabled={todayDate !== formattedBillDate}
          showButton={true}
        />
      </div>
      <ContinueButtonContainer>
        <InfoTip
          tipContent={<div>Click 'Continue' to review your bill payment.</div>}
          tipTarget={
            <ContinueButton
              onClick={() => {
                setVerifyBill(true);
                setStep(step + 1);
              }}
              disabled={allSteps[step] !== reviewBillPayment}
            >
              Continue
            </ContinueButton>
          }
          showTip={reviewBillPayment}
          showButton={false}
        />
      </ContinueButtonContainer>
    </div>
  );
};
