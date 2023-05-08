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
import { CHEQUINGACCOUNT, SAVINGSACCOUNT } from "../../enums";
import { setDefaultLocale } from "react-datepicker";

const Container = styled.div`
  /* min-height: calc(100vh - 150px); */
  background: white;
  padding-bottom: 150px;
`;

export const TransferFunds = () => {
  const [fromAcc, setFromAcc] = useState(undefined);
  const [toAcc, setToAcc] = useState(undefined);
  const [payAmt, setPayAmt] = useState(undefined);
  const [transferType, setTransferType] = useState(undefined);

  return (
    <InputContainer>
      <Container>
        <TransactionSubtitle>Transfer Funds</TransactionSubtitle>
        <div>
          <StyledLabel for="from-select">From Account:</StyledLabel>
          <StyledSelect
            value={fromAcc}
            id="from-select"
            onChange={(e) => {
              console.log("MEOW", e.target);
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
        <div>
          <StyledLabel for="to-select">To Account:</StyledLabel>
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
        <div>
          <StyledLabel for="transfer-amount">Transfer Amount:</StyledLabel>
          <StyledNumberFormat
            id="transfer-amount"
            onChange={(e) => setPayAmt(e.target.value)}
            prefix={"$"}
            placeholder="Choose Amount"
            value={payAmt}
          />
        </div>
        <div>
          <StyledLabel for="transfer-type">Transfer Type</StyledLabel>
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
        <ContinueButtonContainer>
          {/* go to all accounts */}
          <ContinueButton>Confirm Transfer</ContinueButton>
        </ContinueButtonContainer>
      </Container>
    </InputContainer>
  );
};
