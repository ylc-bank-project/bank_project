import React from "react";
// import styled from "styled-components";
// import { BasicTooltip, BasicTipButton, InfoTip } from "../../Shared/Tip";
import { InfoTip } from "../../Shared/Tip";
import {
  BillPayeeTitle,
  BillPayeeInput,
  BillPayeeReview,
  ContinueButton,
  ContinueButtonContainer,
  BoldDiv,
} from "../BankPageElements";

export const AddVerifyPayee = ({
  isVerifyPayee,
  setTacoAdded,
  setPaymentStage,
  companyTitle,
  TacoTitle,
  setCompanyTitle,
  // step,
  // setStep,
  setVerifyPayee,
  // inputedAccountNumber,
  // setInputedAccountNumber,
  payeesStage,
  confirmPayee,
  // allSteps,
  addCompanyName,
  addBillNumber,
  goToVerify,
}) => {
  return (
    <div>
      {isVerifyPayee ? (
        <div>
          <BillPayeeTitle>Review the new payee</BillPayeeTitle>
          <BillPayeeReview>Company Name: {companyTitle}</BillPayeeReview>
          <BillPayeeReview>Account/Bill Number: {1234567}</BillPayeeReview>
          <ContinueButtonContainer>
            <InfoTip
              tipContent={
                <div>
                  Verify everything is correct. It should say the payee name and
                  account number entered. Choose "Add Payee" to continue.
                </div>
              }
              tipTarget={
                <ContinueButton
                  onClick={() => {
                    setTacoAdded(true);
                    setPaymentStage(payeesStage);
                  }}
                  disabled={allSteps[step] !== confirmPayee}
                >
                  Add Payee
                </ContinueButton>
              }
              showTip={confirmPayee}
              showButton={false}
            />
          </ContinueButtonContainer>
        </div>
      ) : (
        <div>
          <div>
            <div>
              <BillPayeeTitle>Add a New Payee</BillPayeeTitle>
              <InfoTip
                tipContent={
                  <div>
                    Enter company name: <strong>Taco Electric</strong>
                  </div>
                }
                buttonDisabled={companyTitle !== TacoTitle}
                tipTarget={
                  <BillPayeeInput
                    onChange={(e) => setCompanyTitle(e.target.value)}
                    type="text"
                    placeholder="Company Name"
                    value={companyTitle}
                  />
                }
                showTip={addCompanyName}
                showButton={true}
              />
            </div>
            <div>
              <InfoTip
                tipContent={
                  <div>
                    Now enter account/bill number. Your account number can
                    typically be found in the top right corner of your bill.
                    Typically, it is a 7-digit number. For this activity enter
                    <BoldDiv>1234 567</BoldDiv>
                    {/* <span role="img" aria-label="smile emoji">
                      🙂
                    </span> */}
                  </div>
                }
                buttonDisabled={false}
                tipTarget={
                  <label>
                    <BillPayeeInput
                      onChange={(e) => setInputedAccountNumber(e.target.value)}
                      placeholder={"Account/Bill Number"}
                      // value={inputedAccountNumber}
                    />
                  </label>
                }
                showTip={addBillNumber}
                showButton={true}
              />
            </div>
          </div>
          <ContinueButtonContainer>
            <InfoTip
              tipContent={
                <div>Choose "Continue" to review your new payee.</div>
              }
              tipTarget={
                <ContinueButton
                  onClick={() => {
                    setVerifyPayee(true);
                  }}
                  disabled={allSteps[step] !== goToVerify}
                >
                  Continue
                </ContinueButton>
              }
              showTip={goToVerify}
              showButton={false}
            />
          </ContinueButtonContainer>
        </div>
      )}
    </div>
  );
};
