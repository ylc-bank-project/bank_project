import React from "react";
import styled from "styled-components";
import { StyledSelect, TransactionSubtitle } from "../BankPageElements";
import { ACCOUNTTYPE } from "../../enums";
const Container = styled.div`
  min-height: calc(100vh - 150px);
  background: white;
  padding-bottom: 150px;
`;

export const TransferFunds = () => {
  return (
    <Container>
      <TransactionSubtitle>Transfer Funds</TransactionSubtitle>
      <StyledSelect>
        <option value={""}>Select Account</option>
        <option value={ACCOUNTTYPE}>{ACCOUNTTYPE}</option>
        <option value="Saving">Saving</option>
      </StyledSelect>
    </Container>
  );
};
