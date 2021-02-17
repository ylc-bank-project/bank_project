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
} from "../../Shared/BankPages";
// import { SignInButton } from "../../Shared/Layout";

export const AddVerifyPayee = ({
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
  confirmPayee,
  allSteps,
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
          <BillPayeeReview>
            Account/Bill Number: {inputedAccountNumber}
          </BillPayeeReview>
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
                    setStep(step + 1);
                  }}
                  disabled={allSteps[step] !== confirmPayee}
                >
                  Add Payee
                </ContinueButton>
              }
              showTip={confirmPayee}
              showButton={false}
              {...{ step, setStep, allSteps }}
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
                {...{ step, setStep, allSteps }}
              />
            </div>
            <div>
              <InfoTip
                tipContent={
                  <div>
                    Now enter account/bill number. Your account number can be
                    found on the top right corner of your bill. For this
                    exercise make something up.{" "}
                    <span role="img" aria-label="smile emoji">
                      🙂
                    </span>
                  </div>
                }
                buttonDisabled={false}
                tipTarget={
                  <label>
                    <BillPayeeInput
                      onChange={(e) => setInputedAccountNumber(e.target.value)}
                      placeholder={"Account/Bill Number"}
                      value={inputedAccountNumber}
                    />
                  </label>
                }
                showTip={addBillNumber}
                showButton={true}
                {...{ step, setStep, allSteps }}
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
                    setStep(step + 1);
                    setVerifyPayee(true);
                  }}
                  disabled={allSteps[step] !== goToVerify}
                >
                  Continue
                </ContinueButton>
              }
              showTip={goToVerify}
              showButton={false}
              {...{ step, setStep, allSteps }}
            />
          </ContinueButtonContainer>
        </div>
      )}
    </div>
  );
};
