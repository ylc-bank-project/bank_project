import React from "react";
import styled from "styled-components";
// import { BasicTooltip, Ba÷sicTipButton, InfoTip } from "../../Shared/Tip";
import { InfoTip } from "../../Shared/Tip";
// import { ModalOverlay, ResponsiveContent } from "../../Modal";
import { ModalOverlay } from "../../Modal";
import payBillIcon from "../../assets/contract.png";
import depositIcon from "../../assets/piggy-bank.png";
import transferIcon from "../../assets/exchange.png";
import interacIcon from "../../assets/coin.png";

const ButtonsContainer = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  flex-wrap: wrap;
  background: yellow;
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

  img {
    max-height: 50px;
    padding-bottom: 5px;
  }
`;

export const PaymentMethods = ({
  setStep,
  setPaymentMethodsVisible,
  setMainPage,
  step,
  billPaymentsStep,
  billPaymentsPage,
  allSteps,
}) => {
  console.log("test 1");

  return (
    <ModalOverlay
      visible={billPaymentsStep}
      // zIndex={100}
      // closeModal={closeModal}
      notOverlayCloseable={true}
      render={() => (
        // <ResponsiveContent>
        <ButtonsContainer>
          {/* <BankingButton>
            <img src={transferIcon} alt="" />
            Transfer
          </BankingButton>
          <InfoTip
            tipContent={<div>Click on 'Pay a Bill'.</div>}
            tipTarget={
              <BankingButton
                onClick={() => {
                  setStep(step + 1);
                  setPaymentMethodsVisible(false);
                  setMainPage(billPaymentsPage);
                }}
              >
                <img src={payBillIcon} alt="" />
                Pay a bill
              </BankingButton>
            }
            showTip={billPaymentsStep}
            showButton={false}
            {...{ step, setStep, allSteps }}
          />
          <BankingButton>
            <img src={interacIcon} alt="" />
            <div>Interac</div>
            <div>E-transfer</div>
          </BankingButton>
          <BankingButton>
            <img src={depositIcon} alt="" />
            Deposit
          </BankingButton> */}
        </ButtonsContainer>
        // </ResponsiveContent>
      )}
    ></ModalOverlay>
  );
};
