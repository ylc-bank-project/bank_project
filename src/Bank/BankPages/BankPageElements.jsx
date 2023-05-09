import React from "react";
import logo from "../assets/dark_flake.png";
import blackLogo from "../assets/dark_flake_black.png";
import styled from "styled-components";
import { MarginedContainer } from "../Shared/Layout";
import { InfoTip } from "../Shared/Tip";
import { mq } from "../Global";
import NumberFormat from "react-number-format";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  accountPagesEnums,
  activitiesEnums,
  overviewEnums,
  overviewSteps,
  transferFundsEnums,
  transferFundsSteps,
} from "../enums";

export const SubTitle = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-family: Poppins;
  ${(p) => p.theme.fonts.small_header}
  color: ${(p) => p.theme.colors.ylc_blue};
  ${mq[1]} {
    font-size: 16px;
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.ylc_blue};
  width: 100%;
  ${(p) => p.theme.fonts.body_text};
  font-weight: normal;
  height: 40px;
  ::placeholder {
    color: ${(p) => p.theme.colors.ylc_blue};
    opacity: 0.5;
  }
  :disabled {
    background: transparent;
  }
`;

export const Space = styled.span`
  width: 10px;
  display: inline-block;
`;

export const BoldDiv = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 5px 0;
`;

const Logo = styled.img`
  height: 150vh;
  position: absolute;
  top: -50vh;
  right: calc(50% - 75vh);
  overflow: hidden;
  opacity: 0.5;
  z-index: -1;
`;

const BankingBackgroundContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  /* width: 100vw; */
  overflow-x: hidden;
  position: relative;
`;

const BankingColor = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${(p) => p.theme.colors.bank_blue};
  /* opacity: 0.8; */
  z-index: -1;
  overflow-x: hidden;
`;

export const BankingBackground = ({ children }) => {
  return (
    <BankingBackgroundContainer>
      {children}
      <BankingColor />
      <Logo src={logo} />
    </BankingBackgroundContainer>
  );
};

const BankLogoDiv = styled.div`
  grid-column: span 12;
  ${(p) => p.theme.fonts.extra_small_header};
  display: flex;
  justify-content: ${(p) => (p.left ? "flex-start" : "center")};
  align-items: center;
  color: white;
  padding: 40px 0;
  padding-bottom: ${(p) => (p.left ? "15px" : "40px")};
`;

const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  padding-left: 5px;
`;

const LogoTagWrapper = styled.div`
  grid-column-start: 3;
  grid-column-end: 11;
  padding: 20px 0;
  height: calc(170px - 40px);
`;

export const BankingLogo = ({ left, NewStyle }) => (
  <BankLogoDiv left={left}>
    <span>Bank of YLC</span>
    <LogoImg src={blackLogo} />
  </BankLogoDiv>
);

const TagContainer = styled.div`
  grid-column: span 12;
  color: white;
`;

export const BankingTag = () => (
  <TagContainer>Let us help you with your banking!</TagContainer>
);

const ColoredDiv = styled.div`
  height: 30px;
  background-color: ${(p) => p.theme.colors.ylc_blue};
  opacity: 0.7;
`;

const HeaderWrapper = styled.div`
  height: 200px;
  /* display: flex; */
  /* justify-content: space-between; */
  /* flex-direction: column; */
`;

export const BankingHeader = () => {
  return (
    <HeaderWrapper>
      <MarginedContainer>
        <LogoTagWrapper>
          <BankingLogo left={true} />
          <BankingTag />
        </LogoTagWrapper>
      </MarginedContainer>
      <ColoredDiv />
    </HeaderWrapper>
  );
};

export const SmallContainer = styled.div`
  background: white;
  grid-column-start: 4;
  grid-column-end: 10;
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 10px;
  ${mq[2]} {
    grid-column-start: 2;
    grid-column-end: 12;
  }
`;

export const CleanBackground = styled.div`
  /* background: ${(p) => p.theme.colors.light_accent}; */
  background: rgb(242, 242, 242);
  height: 100%;
  /* padding-top: 15px; */
  /* padding-bottom: 300px; */

  // BASED ON THE HEADER HEIGHT
  min-height: calc(100vh - 200px);
  /* overflow: hidden; */
`;

export const BankingContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: 100%;
  /* padding-bottom: 200px; */
  /* min-height: 100vh; */
  /* overflow-y: hidden; */
`;

const TransDetailsSection = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  /* width: 100%; */
  /* grid-column: span 12; */
`;

const TransButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  color: ${(p) => (p.isActive ? "grey" : "white")};
  background: ${(p) => (p.isActive ? "white" : p.theme.colors.bank_blue)};
  cursor: pointer;
  border: none;
  ${(p) => p.theme.fonts.extra_small_header};
  font-size: 16px;
  border-radius: 2px;
  padding: 5px;
  /* border-bottom: 1px solid ${(p) => p.theme.colors.bank_blue}; */
  ${mq[1]} {
    font-size: 14px;
  }
`;

export const TransactionsDetails = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const isDetails = location.pathname
    .split("/")
    .some((e) =>
      [accountPagesEnums.CHECKINGINFO, accountPagesEnums.SAVINGSINFO].includes(
        e
      )
    );

  const isTransactions = location.pathname
    .split("/")
    .some((e) =>
      [
        accountPagesEnums.CHECKINGTRANSACTIONS,
        accountPagesEnums.SAVINGSTRANSACTIONS,
      ].includes(e)
    );

  const isTransferFunds = activitiesEnums.TRANSFERFUNDS === activity;
  const isOverview = activitiesEnums.ACCOUNTOVERVIEW === activity;

  const isGoToSavingsTransactions =
    isTransferFunds &&
    transferFundsSteps[stepIndex] ===
      transferFundsEnums.goToSavingsTransactions;

  const isToChequingTransactionsFinalTransfer =
    isTransferFunds &&
    transferFundsSteps[stepIndex] ===
      transferFundsEnums.toChequingTransactionsFinalReview;

  console.log({ isToChequingTransactionsFinalTransfer });

  const SpecifiedTransButton = () => {
    if (isGoToSavingsTransactions || isToChequingTransactionsFinalTransfer) {
      return (
        <TransButton
          onClick={() => {
            console.log("CLICKY");
            if (isToChequingTransactionsFinalTransfer) {
              navigate(
                `/${activity}/${Number(stepIndex) + 1}/${
                  accountPagesEnums.ACCOUNTS
                }/${accountPagesEnums.CHECKINGHOME}/${
                  accountPagesEnums.CHECKINGTRANSACTIONS
                }`
              );
            } else {
              navigate(
                `/${activity}/${Number(stepIndex) + 1}/${
                  accountPagesEnums.ACCOUNTS
                }/${accountPagesEnums.SAVINGSHOME}/${
                  accountPagesEnums.SAVINGSTRANSACTIONS
                }`
              );
            }
          }}
          disabled={
            !isGoToSavingsTransactions && !isToChequingTransactionsFinalTransfer
          }
          isActive={!isTransactions}
        >
          Transactions
        </TransButton>
      );
    } else {
      return (
        <TransButton
          onClick={() => {
            console.log("CLICKY 2");
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                accountPagesEnums.ACCOUNTS
              }/${accountPagesEnums.CHECKINGHOME}/${
                accountPagesEnums.CHECKINGTRANSACTIONS
              }`
            );
          }}
          disabled={
            !isOverview ||
            overviewSteps[stepIndex] !== overviewEnums.transactions
          }
          isActive={!isTransactions}
        >
          Transactions
        </TransButton>
      );
    }
  };

  const OverviewTransactionsTip = () => {
    return (
      <InfoTip
        tipContent={
          <div>
            <div>
              Transactions represent the money being spent (debited) and the
              money being added (credited) to your account.
            </div>
            {<br />}
            <div>Click here to go to your transactions.</div>
          </div>
        }
        showButton={false}
        showTip={
          isOverview && overviewSteps[stepIndex] === overviewEnums.transactions
        }
        tipTarget={<SpecifiedTransButton />}
      />
    );
  };

  const TransferSavingsTip = () => {
    return (
      <InfoTip
        tipContent={<div>Click on "Transactions"</div>}
        showButton={false}
        showTip={
          isGoToSavingsTransactions || isToChequingTransactionsFinalTransfer
        }
        tipTarget={<SpecifiedTransButton />}
      />
    );
  };

  return (
    <TransDetailsSection>
      {isToChequingTransactionsFinalTransfer || isGoToSavingsTransactions ? (
        <TransferSavingsTip />
      ) : (
        <OverviewTransactionsTip />
      )}
      <InfoTip
        tipContent={
          <div>
            Click here to go to Account Details to view all the details of your
            bank account.
          </div>
        }
        showButton={false}
        showTip={
          isOverview && overviewSteps[stepIndex] === overviewEnums.accountInfo
        }
        tipTarget={
          <TransButton
            onClick={() => {
              navigate(
                `/${activity}/${Number(stepIndex) + 1}/${
                  accountPagesEnums.ACCOUNTS
                }/${accountPagesEnums.CHECKINGHOME}/${
                  accountPagesEnums.CHECKINGINFO
                }`
              );
            }}
            disabled={
              !isOverview ||
              overviewSteps[stepIndex] !== overviewEnums.accountInfo
            }
            isActive={!isDetails}
          >
            Account Details
          </TransButton>
        }
      />
    </TransDetailsSection>
  );
};

const ItemListingWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 60px);
  margin: 0 30px;
  padding: 30px 0;
  font-size: 20px;
  border-bottom: solid 1px ${(p) => (p.isSummary ? "transparent" : "lightgray")};
  cursor: pointer;
  ${mq[1]} {
    flex-direction: ${(p) => (p.separateDetails ? "row" : "column")};
    align-items: flex-start;
  }
`;

const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemPrincipalText = styled.span`
  font-weight: bold;
  padding-bottom: 5px;
  text-transform: uppercase;
  /* ${(p) => p.theme.fonts.extra_small_header}; */
  font-size: 18px;
  ${mq[1]} {
    font-size: 16px;
  }
`;

const ItemSubTextContainer = styled.span`
  ${(p) => p.theme.fonts.large_button_text};
  font-weight: normal;
  text-transform: uppercase;
  display: flex;
  flex-wrap: wrap;
  ${mq[1]} {
    flex-direction: column;
    padding-top: 5px;
  }
`;

const ItemDate = styled.span`
  padding-right: 20px;
`;

const ItemTransaction = styled.span``;

const ItemDetails = styled.span`
  color: ${(p) => (p.isPositive ? "green" : "black")};
  padding-right: 10px;
  ${mq[1]} {
    /* width: 100%; */
    /* text-align: center; */
    padding: 10px 10px 0 0;
    justify-self: flex-end;
  }
`;

export const ItemListing = ({ principal, date, trans, details, ...rest }) => {
  return (
    <ItemListingWrapper {...rest}>
      <ItemTextContainer>
        <ItemPrincipalText>{principal}</ItemPrincipalText>
        {(date || trans) && (
          <ItemSubTextContainer>
            <ItemDate>{date}</ItemDate>
            <ItemTransaction>{trans}</ItemTransaction>
          </ItemSubTextContainer>
        )}
      </ItemTextContainer>
      <ItemDetails {...rest}>{details}</ItemDetails>
    </ItemListingWrapper>
  );
};

export const TransactionSubtitle = styled.div`
  ${(p) => p.theme.fonts.small_header};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  margin-bottom: 10px;
  background: ${(p) => p.theme.colors.light_accent};
  /* border-bottom: 1px solid lightgray; */
  ${mq[1]} {
    font-size: 16px;
  }
`;

export const BillPayeeInput = styled.input`
  width: calc(100% - 40px - 2px - 100px);
  border: none;
  padding: 20px;
  margin: 0 50px;
  border-bottom: 1px solid lightgray;
  ${(p) => p.theme.fonts.body_text_bold};
`;

export const BillPayeeReview = styled.div`
  width: calc(100% - 40px - 2px - 100px);
  border: none;
  padding: 20px;
  margin: 0 50px;
  border-bottom: 1px solid lightgray;
  ${(p) => p.theme.fonts.body_text_bold};
`;

export const ContinueButton = styled.button`
  background-color: ${(p) => p.background || "white"};
  color: ${(p) =>
    p.disabled ? "lightgrey" : p.color || p.theme.colors.ylc_blue};
  min-width: 140px;
  height: 60px;
  border-radius: 100px;
  ${(p) => p.theme.fonts.extra_small_header}
  font-size: 17px;
  cursor: pointer;
`;

export const ContinueButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
`;

export const BankHeader = styled.div`
  grid-column: span 12;
  text-align: center;
  ${(p) => p.theme.fonts.big_header}
  color: white;
  padding: 0 0 40px;
`;

export const StyledNumberFormat = styled(NumberFormat)`
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.ylc_blue};
  display: inline-block;
  /* width: 100%; */
  height: 40px;
  ::placeholder {
    color: ${(p) => p.theme.colors.ylc_blue};
  }
  ${(p) => p.theme.fonts.body_text};
  font-weight: normal;
`;

export const StyledSelect = styled.select`
  /* width: calc(100% - 40px - 2px - 100px); */
  display: inline-block;
  border: none;
  padding: 25px 0;
  /* margin: 0 50px; */
  /* border-bottom: 1px solid lightgray; */
  /* border-bottom: 1px solid lightgray;
  border-top: 1px solid lightgray; */
  ${(p) => p.theme.fonts.body_text}
`;

export const OldStyledSelect = styled(StyledSelect)`
  margin: 0 50px;
  padding: 25px;
  ${(p) => p.theme.fonts.body_text_bold}
`;

export const StyledLabel = styled.label`
  display: inline-block;
  ${(p) => p.theme.fonts.body_text_bold}
  padding: 25px;
  width: 150px;
  /* margin: 0 50px; */
`;

export const InputContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 10;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: 100%;
  ${mq[2]} {
    grid-column-start: 3;
    grid-column-end: 11;
  }
  ${mq[1]} {
    grid-column-start: 2;
    grid-column-end: 12;
  }
`;
