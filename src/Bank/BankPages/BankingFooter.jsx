import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  accountPagesEnums,
  activitiesEnums,
  eTransferEnums,
  eTransferSteps,
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
  const isEtransfer = activitiesEnums.ETRANSFER === activity;

  const isMakingPaymentsStep =
    isMakingPayments &&
    makingPaymentsSteps[stepIndex] === makingPaymentsEnums.clickPayments;

  const isTransferFundsStepHome =
    isTransferFunds &&
    transferFundsSteps[stepIndex] === transferFundsEnums.goHomeToCheckChequing;

  const isTransferFundsStepPayTransfer =
    isTransferFunds &&
    transferFundsSteps[stepIndex] === transferFundsEnums.clickPayTransfer;

  const isEtransferStep =
    isEtransfer &&
    eTransferSteps[stepIndex] === eTransferEnums.clickPayTransfer;

  // TODO: Set the isActive bit
  const isActive = true;

  const SpecificFooterLink = () => {
    if (isMakingPaymentsStep) {
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
          disabled={!isMakingPaymentsStep}
        >
          Pay & Transfer
        </FooterLink>
      );
    } else if (isTransferFundsStepPayTransfer) {
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
          disabled={!isTransferFundsStepPayTransfer}
        >
          Pay & Transfer
        </FooterLink>
      );
    } else {
      // for etransfer
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
          disabled={!isEtransferStep}
        >
          Pay & Transfer
        </FooterLink>
      );
    }
  };

  const PayTransferTip = () => {
    if (isMakingPaymentsStep) {
      return (
        <InfoTip
          tipContent={<div>Click on Pay & Transfer</div>}
          tipTarget={<SpecificFooterLink />}
          placement={"top-center"}
          showTip={isMakingPaymentsStep}
          showButton={false}
          noScroll={true}
        />
      );
    } else if (isTransferFundsStepPayTransfer) {
      return (
        <InfoTip
          tipContent={"Click on “Pay and Transfer"}
          tipTarget={<SpecificFooterLink />}
          placement={"top-center"}
          showTip={isTransferFundsStepPayTransfer}
          showButton={false}
          noScroll={true}
        />
      );
    } else {
      return (
        <InfoTip
          tipContent={"Click on “Pay and Transfer"}
          tipTarget={<SpecificFooterLink />}
          placement={"top-center"}
          showTip={isEtransferStep}
          showButton={false}
          noScroll={true}
        />
      );
    }
  };

  return (
    <StyledBankingFooter>
      <InfoTip
        tipContent={<div>Click "home"</div>}
        showTip={isTransferFundsStepHome}
        showButton={false}
        tipTarget={
          <FooterLink
            disabled={!isTransferFundsStepHome}
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
      <PayTransferTip />
      <FooterLink isActive={isActive === "more"}>More</FooterLink>
    </StyledBankingFooter>
  );
};
