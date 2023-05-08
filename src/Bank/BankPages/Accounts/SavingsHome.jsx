import React from "react";
import { InfoTip } from "../../Shared/Tip";
import styled from "styled-components";
import { TransactionsDetails } from "../BankPageElements";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  accountPagesEnums,
  activitiesEnums,
  overviewEnums,
  overviewSteps,
} from "../../enums";

const CheckingSectionWrapper = styled.div`
  background: white;
  padding-bottom: 100px;
`;

const CheckingHeaderContainer = styled.div``;

const CheckingHeader = styled.div`
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

const CheckingHeaderInfo = () => {
  const { activity, stepIndex } = useParams();
  const isOverview = activity === activitiesEnums.ACCOUNTOVERVIEW;
  const navigate = useNavigate();

  return (
    <CheckingHeaderContainer>
      <CheckingHeader>Savings</CheckingHeader>
      <AccountNumber>5522 8899-222</AccountNumber>
      <NotedBalance>$500.00</NotedBalance>
      <TransactionsDetails />
    </CheckingHeaderContainer>
  );
};

const CheckingHome = () => {
  return (
    <CheckingSectionWrapper>
      <CheckingHeaderInfo />
      <Outlet />
    </CheckingSectionWrapper>
  );
};

export default CheckingHome;
