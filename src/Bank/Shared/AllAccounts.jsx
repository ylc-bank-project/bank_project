import React from "react";
import styled from "styled-components";
import { BasicTooltip, BasicTipButton, InfoTip } from "./Tip";

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
`;

const AllAccountsContainer = styled.div`
  /* background: white; */
  /* height: 100%; */
  min-height: 100vh;
`;

const AccountBlock = ({ title, onClick, balance, accNumber }) => (
  <StyledAccountBlock>
    <AccountInfo onClick={onClick}>
      <AccountTitle>{title}</AccountTitle>
      <AccountNumber>{accNumber}</AccountNumber>
      <AccountBalance>{balance}</AccountBalance>
    </AccountInfo>
    <TransferContainer>TRANSFER</TransferContainer>
  </StyledAccountBlock>
);

const AllAccounts = ({
  allSteps,
  step,
  check,
  setIsChecking = () => {},
  setStep,
}) => {
  return (
    <AllAccountsContainer>
      <BankAccounts>Bank Accounts</BankAccounts>
      <BasicTooltip
        content={"Click on ‘Chequing Account’."}
        showTip={allSteps[step] === check}
        staticOnly={true}
        placement="left-center"
      >
        <AccountBlock
          title={"Checking"}
          balance={"$18,023.00"}
          accNumber={"5522"}
          onClick={() => {
            setIsChecking(true);
            setStep(step + 1);
          }}
        />
      </BasicTooltip>
      <AccountBlock
        title={"Savings"}
        balance={"$12,115.50"}
        accNumber={"7788"}
      />
      <AccountBlock
        title={"Checking 2"}
        balance={"$5,112.50"}
        accNumber={"9811"}
      />
    </AllAccountsContainer>
  );
};

export default AllAccounts;
