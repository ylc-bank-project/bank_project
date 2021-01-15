import React from "react";
import styled from "styled-components";
import { BasicTooltip, BasicTipButton, InfoTip } from "../../Shared/Tip";
import {
  BillPayeeTitle,
  BillPayeeInput,
  BillPayeeReview,
  ContinueButton,
  ContinueButtonContainer,
} from "../../Shared/BankPages";
import { SignInButton } from "../../Shared/Layout";

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
              <BillPayeeTitle>Add a New Payee</BillPayeeTitle>
              <InfoTip
                tipContent={<div>enter company name: Taco Electric</div>}
                // buttonDisabled={companyTitle !== TacoTitle}
                buttonDisabled={false}
                tipTarget={
                  <BillPayeeInput
                    onChange={(e) => setCompanyTitle(e.target.value)}
                    type="text"
                    placeholder="Company Name"
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
                    Now enter account/bill number. Make something up.{" "}
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
              tipContent={<div>Now continue to review your new payee.</div>}
              tipTarget={
                <ContinueButton
                  onClick={() => {
                    setStep(step + 1);
                    setVerifyPayee(true);
                  }}
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
