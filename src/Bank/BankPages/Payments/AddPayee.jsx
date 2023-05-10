import React, { useEffect, useState } from "react";
import {
  BillPayeeInput,
  BoldDiv,
  ContinueButton,
  ContinueButtonContainer,
  TransactionSubtitle,
} from "../BankPageElements";
import { InfoTip } from "../../Shared/Tip";
import {
  ACCOUNTNUMBER,
  TACOTITLE,
  makingPaymentsEnums,
  makingPaymentsSteps,
  paymentPagesEnums,
} from "../../enums";
import { useNavigate, useParams } from "react-router-dom";

export const AddPayee = () => {
  const [companyTitle, setCompanyTitle] = useState("");
  const [inputedAccountNumber, setInputedAccountNumber] = useState("");
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();

  const isAddCompanyName =
    makingPaymentsSteps[stepIndex] === makingPaymentsEnums.addCompanyName;

  const isAddBillNumber =
    makingPaymentsSteps[stepIndex] === makingPaymentsEnums.addBillNumber;

  const isGoToVerify =
    makingPaymentsSteps[stepIndex] === makingPaymentsEnums.goToVerify;

  useEffect(() => {
    if (
      stepIndex >
      makingPaymentsSteps.indexOf(makingPaymentsEnums.addCompanyName)
    ) {
      setCompanyTitle(TACOTITLE);
    }
  }, [stepIndex]);

  useEffect(() => {
    if (
      stepIndex >
      makingPaymentsSteps.indexOf(makingPaymentsEnums.isAddBillNumber)
    ) {
      setInputedAccountNumber(ACCOUNTNUMBER);
    }
  }, [stepIndex]);

  return (
    <div>
      <div>
        <div>
          <TransactionSubtitle>Add a New Payee</TransactionSubtitle>
          <InfoTip
            tipContent={
              <div>
                Enter company name: <strong>Taco Electric</strong>
              </div>
            }
            buttonDisabled={companyTitle !== TACOTITLE}
            onClick={() => {
              navigate(
                `/${activity}/${Number(stepIndex) + 1}/${
                  paymentPagesEnums.PAYMENTSHOME
                }/${paymentPagesEnums.ADDPAYEE}`
              );
            }}
            tipTarget={
              <BillPayeeInput
                onChange={(e) => setCompanyTitle(e.target.value)}
                type="text"
                placeholder="Enter Payee Name"
                value={companyTitle}
                disabled={!isAddCompanyName}
              />
            }
            showTip={isAddCompanyName}
            showButton={true}
          />
        </div>
        <div>
          <InfoTip
            tipContent={
              <div>
                Now enter account/bill number. Your account number can typically
                be found in the top right corner of your bill. Typically, it is
                a 7-digit number. For this activity enter:
                <BoldDiv>{ACCOUNTNUMBER}</BoldDiv>
                {/* <span role="img" aria-label="smile emoji">
              🙂
            </span> */}
              </div>
            }
            onClick={() => {
              navigate(
                `/${activity}/${Number(stepIndex) + 1}/${
                  paymentPagesEnums.PAYMENTSHOME
                }/${paymentPagesEnums.ADDPAYEE}`
              );
            }}
            buttonDisabled={inputedAccountNumber !== ACCOUNTNUMBER}
            tipTarget={
              <label>
                <BillPayeeInput
                  onChange={(e) => setInputedAccountNumber(e.target.value)}
                  placeholder={"Enter Account/Bill Number"}
                  value={inputedAccountNumber}
                  disabled={!isAddBillNumber}
                />
              </label>
            }
            showTip={isAddBillNumber}
            showButton={true}
          />
        </div>
      </div>
      <ContinueButtonContainer>
        <InfoTip
          tipContent={<div>Choose "Continue" to review your new payee.</div>}
          tipTarget={
            <ContinueButton
              onClick={() => {
                // setVerifyPayee(true);
                navigate(
                  `/${activity}/${Number(stepIndex) + 1}/${
                    paymentPagesEnums.PAYMENTSHOME
                  }/${paymentPagesEnums.VERIFYPAYEE}`
                );
              }}
              disabled={!isGoToVerify}
            >
              Continue
            </ContinueButton>
          }
          showTip={isGoToVerify}
          showButton={false}
        />
      </ContinueButtonContainer>
    </div>
  );
};
