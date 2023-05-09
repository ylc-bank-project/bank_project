import React from "react";
import { InfoTip } from "../../Shared/Tip";
import styled from "styled-components";
import { BankingContainer, TransactionsDetails } from "../BankPageElements";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  accountPagesEnums,
  activitiesEnums,
  overviewEnums,
  overviewSteps,
} from "../../enums";

const AccountSectionWrapper = styled.div`
  background: white;
  padding-bottom: 100px;
`;

const AccountHeaderContainer = styled.div``;

const AccountHeader = styled.div`
  ${(p) => p.theme.fonts.small_header};
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const AccountNumber = styled.div`
  color: grey;
  ${(p) => p.theme.fonts.large_button_text};
  text-align: center;
  padding-top: 5px;
`;

const NotedBalance = styled.div`
  ${(p) => p.theme.fonts.medium_header};
  text-align: center;
  padding: 15px;
  font-weight: normal;
`;

const AccountHeaderInfo = () => {
  const { activity, stepIndex } = useParams();

  const navigate = useNavigate();

  const isTransferFunds = activitiesEnums.TRANSFERFUNDS === activity;
  const isIncreasedSavingsBalance = isTransferFunds && stepIndex >= 6;
  const balance = isIncreasedSavingsBalance ? 800 : 500;

  return (
    <AccountHeaderContainer>
      <AccountHeader>Savings</AccountHeader>
      <AccountNumber>7788 8899-222</AccountNumber>
      <NotedBalance>${balance}</NotedBalance>
      <TransactionsDetails />
    </AccountHeaderContainer>
  );
};

const SavingsHome = () => {
  return (
    <BankingContainer>
      <AccountSectionWrapper>
        <AccountHeaderInfo />
        <Outlet />
      </AccountSectionWrapper>
    </BankingContainer>
  );
};

export default SavingsHome;
