import React, { useState } from "react";
import styled from "styled-components";
import {
  ContinueButton,
  ContinueButtonContainer,
  InputContainer,
  StyledLabel,
  StyledNumberFormat,
  StyledSelect,
  TransactionSubtitle,
} from "../BankPageElements";
import {
  CHEQUINGACCOUNT,
  SAVINGSACCOUNT,
  accountPagesEnums,
  transferFundsEnums,
  transferFundsSteps,
} from "../../enums";
import { InfoTip } from "../../Shared/Tip";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  /* min-height: calc(100vh - 150px); */
  background: white;
  padding-bottom: 150px;
`;

/* <InfoTip
tipContent={<div>Click on “Transfer”</div>}
showTip={isTransferFunds}
showButton={false}
tipTarget={
  <BankingButton
    onClick={() => {
      navigate(
        `/${activity}/${Number(stepIndex) + 1}/${
          accountPagesEnums.ACCOUNTS
        }/${accountPagesEnums.TRANSFERFUNDS}`
      );
    }}
    disabled={!isTransferFunds}
  >
    <img src={transferIcon} alt="" />
    Transfer
  </BankingButton>
}
/> */

export const TransferFunds = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();

  const [fromAcc, setFromAcc] = useState(undefined);
  const [toAcc, setToAcc] = useState(undefined);
  const [payAmt, setPayAmt] = useState(undefined);
  const [transferType, setTransferType] = useState(undefined);

  const is = (enumStep) => {
    return transferFundsSteps[stepIndex] === enumStep;
  };

  const isSelectCheqing = is(transferFundsEnums.selectChequing);
  const isSelectSavings = is(transferFundsEnums.selectSavings);
  const isEnterAmount = is(transferFundsEnums.enterAmount);
  const isTransferType = is(transferFundsEnums.transferType);
  const isConfirmTransfer = is(transferFundsEnums.confirmTransfer);

  return (
    <InputContainer>
      <Container>
        <TransactionSubtitle>Transfer Funds</TransactionSubtitle>

        <InfoTip
          tipContent={<div>Select "Chequing"</div>}
          showTip={isSelectCheqing}
          showButton={true}
          buttonDisabled={fromAcc !== CHEQUINGACCOUNT}
          placement="bottom-center"
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                accountPagesEnums.ACCOUNTS
              }/${accountPagesEnums.TRANSFERFUNDS}`
            );
          }}
          tipTarget={
            <div>
              <StyledLabel htmlFor="from-select">From Account:</StyledLabel>
              <StyledSelect
                value={fromAcc}
                id="from-select"
                onChange={(e) => {
                  setFromAcc(e.target.value);
                }}
              >
                <option value={""} hidden>
                  Choose Account
                </option>
                <option value={CHEQUINGACCOUNT}>{CHEQUINGACCOUNT}</option>
                <option value={SAVINGSACCOUNT}>{SAVINGSACCOUNT}</option>
              </StyledSelect>
            </div>
          }
        />

        <div>
          <InfoTip
            tipContent={<div>Select "Savings"</div>}
            showTip={isSelectSavings}
            showButton={true}
            buttonDisabled={toAcc !== SAVINGSACCOUNT}
            placement="bottom-center"
            onClick={() => {
              navigate(
                `/${activity}/${Number(stepIndex) + 1}/${
                  accountPagesEnums.ACCOUNTS
                }/${accountPagesEnums.TRANSFERFUNDS}`
              );
            }}
            tipTarget={
              <div>
                <StyledLabel htmlFor="to-select">To Account:</StyledLabel>
                <StyledSelect
                  id="to-select"
                  value={toAcc}
                  onChange={(e) => setToAcc(e.target.value)}
                >
                  <option value={""} hidden>
                    Choose Account
                  </option>
                  <option value={CHEQUINGACCOUNT}>{CHEQUINGACCOUNT}</option>
                  <option value={SAVINGSACCOUNT}>{SAVINGSACCOUNT}</option>
                </StyledSelect>
              </div>
            }
          />
        </div>
        <div>
          <InfoTip
            tipContent={<div>Enter $300</div>}
            showTip={isEnterAmount}
            showButton={true}
            buttonDisabled={payAmt !== "$300"}
            placement="bottom-center"
            onClick={() => {
              navigate(
                `/${activity}/${Number(stepIndex) + 1}/${
                  accountPagesEnums.ACCOUNTS
                }/${accountPagesEnums.TRANSFERFUNDS}`
              );
            }}
            tipTarget={
              <div>
                <StyledLabel htmlFor="transfer-amount">
                  Transfer Amount:
                </StyledLabel>
                <StyledNumberFormat
                  id="transfer-amount"
                  onChange={(e) => setPayAmt(e.target.value)}
                  prefix={"$"}
                  placeholder="Choose Amount"
                  value={payAmt}
                />
              </div>
            }
          />
        </div>
        <div>
          <InfoTip
            tipContent={<div>Select "One-Time", as your Transfer Type.</div>}
            showTip={isTransferType}
            showButton={true}
            buttonDisabled={transferType !== "One-Time"}
            placement="bottom-center"
            onClick={() => {
              navigate(
                `/${activity}/${Number(stepIndex) + 1}/${
                  accountPagesEnums.ACCOUNTS
                }/${accountPagesEnums.TRANSFERFUNDS}`
              );
            }}
            tipTarget={
              <div>
                <StyledLabel htmlFor="transfer-type">Transfer Type</StyledLabel>
                <StyledSelect
                  value={transferType}
                  id="transfer-type"
                  onChange={(e) => setTransferType(e.target.value)}
                >
                  <option value={""} hidden>
                    Select Type
                  </option>
                  <option value="One-Time">One-Time</option>
                  <option value="Recurring">Recurring</option>
                  <option value="Custom">Custom</option>
                </StyledSelect>
              </div>
            }
          />
        </div>
        <ContinueButtonContainer>
          {/* go to all accounts */}
          <InfoTip
            tipContent={<div>Click "Confirm Transfer".</div>}
            showTip={isConfirmTransfer}
            showButton={false}
            tipTarget={
              <ContinueButton
                disabled={!isConfirmTransfer}
                onClick={() => {
                  navigate(
                    `/${activity}/${Number(stepIndex) + 1}/${
                      accountPagesEnums.ACCOUNTS
                    }`
                  );
                }}
              >
                Confirm Transfer
              </ContinueButton>
            }
          />
        </ContinueButtonContainer>
      </Container>
    </InputContainer>
  );
};
