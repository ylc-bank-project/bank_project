import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  accountPagesEnums,
  activitiesEnums,
  makingPaymentsEnums,
  makingPaymentsSteps,
  transferFundsEnums,
  transferFundsSteps,
} from "../enums";
import { InfoTip } from "../Shared/Tip";

const StyledBankingFooter = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: white;
  height: 75px;
`;

const FooterLink = styled.button`
  width: 140px;
  margin: 10px;
  border: none;
  background: none;
  border-bottom: 4px solid
    ${(p) => (p.isActive ? p.theme.colors.ylc_blue : "transparent")};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  ${(p) => p.theme.fonts.body_text};
  font-size: 18px;
  cursor: pointer;
`;

export const BankingFooter = () => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();

  const isMakingPayments = activitiesEnums.MAKINGPAYMENTS === activity;
  const isTransferFunds = activitiesEnums.TRANSFERFUNDS === activity;

  const isGoHomeToCheckChequing =
    isTransferFunds &&
    transferFundsSteps[stepIndex] === transferFundsEnums.goHomeToCheckChequing;

  // TODO: Set the isActive bit
  const isActive = true;

  const SpecificFooterLink = () => {
    if (!isTransferFunds) {
      return (
        <FooterLink
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                accountPagesEnums.ACCOUNTS
              }`
            );
          }}
          isActive={isActive === "pay"}
          disabled={
            !isMakingPayments ||
            makingPaymentsSteps[stepIndex] !== makingPaymentsEnums.clickPayments
          }
        >
          Pay & Transfer
        </FooterLink>
      );
    } else {
      return (
        <FooterLink
          onClick={() => {
            navigate(
              `/${activity}/${Number(stepIndex) + 1}/${
                accountPagesEnums.ACCOUNTS
              }`
            );
          }}
          isActive={isActive === "pay"}
          disabled={
            !isTransferFunds ||
            transferFundsSteps[stepIndex] !==
              transferFundsEnums.clickPayTransfer
          }
        >
          Pay & Transfer
        </FooterLink>
      );
    }
  };

  const PaymentsTip = () => {
    return (
      <InfoTip
        tipContent={<div>Click on Pay & Transfer</div>}
        tipTarget={<SpecificFooterLink />}
        placement={"top-center"}
        showTip={
          isMakingPayments &&
          makingPaymentsSteps[stepIndex] === makingPaymentsEnums.clickPayments
        }
        showButton={false}
        noScroll={true}
      />
    );
  };

  return (
    <StyledBankingFooter>
      <InfoTip
        tipContent={<div>Click "home"</div>}
        showTip={isGoHomeToCheckChequing}
        showButton={false}
        tipTarget={
          <FooterLink
            disabled={!isGoHomeToCheckChequing}
            onClick={() => {
              navigate(
                `/${activity}/${Number(stepIndex) + 1}/${
                  accountPagesEnums.ACCOUNTS
                }`
              );
            }}
            isActive={isActive === "home"}
          >
            Home
          </FooterLink>
        }
      />

      <InfoTip
        tipContent={"Click on “Pay and Transfer"}
        tipTarget={<PaymentsTip />}
        placement={"top-center"}
        showTip={
          isTransferFunds &&
          transferFundsSteps[stepIndex] === transferFundsEnums.clickPayTransfer
        }
        showButton={false}
        noScroll={true}
      />

      <FooterLink isActive={isActive === "more"}>More</FooterLink>
    </StyledBankingFooter>
  );
};
