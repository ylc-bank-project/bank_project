import React from "react";
import styled from "styled-components";
// import { BasicTooltip, Ba÷sicTipButton, InfoTip } from "../../Shared/Tip";
import { InfoTip } from "../Shared/Tip";
// import { ModalOverlay, ResponsiveContent } from "../../Modal";
import { ModalOverlay } from "../Modal";
import payBillIcon from "../assets/contract.png";
import depositIcon from "../assets/piggy-bank.png";
import transferIcon from "../assets/exchange.png";
import interacIcon from "../assets/coin.png";
import { mq } from "../Global";
import { useNavigate, useParams } from "react-router-dom";
import {
  accountPagesEnums,
  activitiesEnums,
  makingPaymentsEnums,
  makingPaymentsSteps,
  paymentPagesEnums,
} from "../enums";

const TransactionsContainer = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  flex-wrap: wrap;
  background: yellow;
  ${mq[1]} {
    width: 300px;
    height: 300px;
  }
`;

const BankingButton = styled.button`
  width: 200px;
  height: 200px;
  cursor: pointer;
  ${(p) => p.theme.fonts.extra_small_header};
  font-weight: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  border: black 1px solid;
  :disabled {
    background: white;
  }

  img {
    max-height: 50px;
    padding-bottom: 5px;
  }

  ${mq[1]} {
    width: 150px;
    height: 150px;
    font-size: 14px;
  }
`;

export const PaymentMethods = ({
  setPaymentMethodsVisible,
  setMainPage,
  // billPaymentsStep,
  billPaymentsPage,
}) => {
  const { activity, stepIndex } = useParams();
  const navigate = useNavigate();

  const isMakingPayments = activitiesEnums.MAKINGPAYMENTS === activity;
  const isTransferFunds = activitiesEnums.TRANSFERFUNDS === activity;

  const isBillPayments =
    isMakingPayments &&
    makingPaymentsSteps[stepIndex] === makingPaymentsEnums.billPaymentsStep;

  return (
    <ModalOverlay
      visible={true}
      zIndex={1}
      notOverlayCloseable={true}
      render={() => (
        <div>
          <TransactionsContainer>
            <InfoTip
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
            />
            <InfoTip
              tipContent={<div>Click on 'Pay a Bill'.</div>}
              tipTarget={
                <BankingButton
                  onClick={() => {
                    navigate(
                      `/${activity}/${Number(stepIndex) + 1}/${
                        paymentPagesEnums.PAYMENTSHOME
                      }/${paymentPagesEnums.LISTOFPAYEES}`
                    );
                  }}
                  disabled={!isBillPayments}
                >
                  <img src={payBillIcon} alt="" />
                  Pay a bill
                </BankingButton>
              }
              showTip={isBillPayments}
              showButton={false}
            />
            <BankingButton>
              <img src={interacIcon} alt="" />
              <div>Interac</div>
              <div>E-transfer</div>
            </BankingButton>
            <BankingButton>
              <img src={depositIcon} alt="" />
              Deposit
            </BankingButton>
          </TransactionsContainer>
        </div>
      )}
    />
  );
};
