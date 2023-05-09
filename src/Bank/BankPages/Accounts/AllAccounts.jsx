import React from "react";
import styled from "styled-components";
import { mq } from "../../Global";
import { InfoTip } from "../../Shared/Tip";
import {
  accountPagesEnums,
  activitiesEnums,
  overviewEnums,
  overviewSteps,
  transferFundsEnums,
  transferFundsSteps,
} from "../../enums";
import { useNavigate, useParams } from "react-router-dom";

import { BankingContainer } from "../BankPageElements";

const StyledAccountBlock = styled.div`
  display: flex;
  border: 1px solid lightgray;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 1px 0px 5px lightgray;
  cursor: pointer;
  background: white;
`;

const AccountInfo = styled.div`
  flex-grow: 1;
`;

const BankAccounts = styled.div`
  ${(p) => p.theme.fonts.body_text};
  color: grey;
  padding: 15px 0;
`;

const AccountTitle = styled.span`
  font-weight: bold;
  border-bottom: 3px solid lightgray;
  padding: 15px 0 10px;
  margin-left: 15px;
  display: inline-block;
`;
const AccountNumber = styled.span`
  padding-left: 10px;
  color: grey;
`;

const AccountBalance = styled.div`
  padding: 10px 0 10px 15px;
  color: ${(p) => p.theme.colors.ylc_blue};
`;

const TransferContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  border-left: 2px solid lightgray;
  color: ${(p) => p.theme.colors.ylc_blue};
  ${(p) => p.theme.fonts.body_text};
  ${mq[1]} {
    min-width: 100px;
  }
`;

const AllAccountsContainer = styled.div`
  padding-bottom: 150px;
`;

const AccountBlock = ({
  title,
  onClick,
  disabled = false,
  balance,
  accNumber,
}) => (
  <StyledAccountBlock>
    <AccountInfo disabled={disabled} onClick={onClick}>
      <AccountTitle>{title}</AccountTitle>
      <AccountNumber>{accNumber}</AccountNumber>
      <AccountBalance>{balance}</AccountBalance>
    </AccountInfo>
    <TransferContainer>TRANSFER</TransferContainer>
  </StyledAccountBlock>
);

const AllAccounts = () => {
  const { stepIndex, activity } = useParams();
  const navigate = useNavigate();

  const isOverview = activitiesEnums.ACCOUNTOVERVIEW === activity;
  const isTransferFunds = activitiesEnums.TRANSFERFUNDS === activity;

  const isIncreasedSavingsBalance = isTransferFunds && stepIndex >= 6;
  const chequingBalance = isIncreasedSavingsBalance ? "17,723.00" : "18,023.00";
  const savingsBalance = isIncreasedSavingsBalance ? "800" : "500";

  const isOverviewCheck =
    isOverview && overviewSteps[stepIndex] === overviewEnums.check;

  const isTransferFinalReview =
    isTransferFunds &&
    transferFundsSteps[stepIndex] ===
      transferFundsEnums.toChequingForFinalReview;

  return (
    <BankingContainer>
      <AllAccountsContainer>
        <BankAccounts>Bank Accounts</BankAccounts>
        <InfoTip
          tipContent={<div>Click on ‘Chequing’.</div>}
          showTip={isOverviewCheck || isTransferFinalReview}
          showButton={false}
          placement="left-center"
          tipTarget={
            <AccountBlock
              title={"Chequing"}
              balance={`$${chequingBalance}`}
              accNumber={"5522"}
              disabled={!isOverviewCheck && !isTransferFinalReview}
              onClick={() => {
                navigate(
                  `/${activity}/${Number(stepIndex) + 1}/${
                    accountPagesEnums.ACCOUNTS
                  }/${accountPagesEnums.CHECKINGHOME}`
                );
              }}
            />
          }
        />
        {/* TODO: Need to increment when we are at the next step */}
        <InfoTip
          tipContent={<div>Click on "Savings".</div>}
          showTip={
            isTransferFunds &&
            transferFundsSteps[stepIndex] === transferFundsEnums.goToSavings
          }
          showButton={false}
          placement="left-center"
          tipTarget={
            <AccountBlock
              title={"Savings"}
              balance={`$${savingsBalance}`}
              accNumber={"7788"}
              disabled={
                !isTransferFunds ||
                transferFundsSteps[stepIndex] !== transferFundsEnums.goToSavings
              }
              onClick={() => {
                navigate(
                  `/${activity}/${Number(stepIndex) + 1}/${
                    accountPagesEnums.ACCOUNTS
                  }/${accountPagesEnums.SAVINGSHOME}`
                );
              }}
            />
          }
        />
        <AccountBlock
          title={"Checking 2"}
          balance={"$5,112.50"}
          accNumber={"9811"}
        />
      </AllAccountsContainer>
    </BankingContainer>
  );
};

export default AllAccounts;
