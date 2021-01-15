import React from "react";
import { BasicTooltip, BasicTipButton, InfoTip } from "../../Shared/Tip";
import { ModalOverlay, ResponsiveContent } from "../../Modal";

export const PaymentMethods = ({
  setStep,
  setPaymentMethodsVisible,
  setMainPage,
  step,
  billPaymentsStep,
  billPaymentsPage,
  allSteps,
}) => {
  return (
    <ModalOverlay
      visible={billPaymentsStep}
      zIndex={1}
      // closeModal={closeModal}
      notOverlayCloseable={true}
      render={() => (
        <ResponsiveContent>
          <InfoTip
            tipContent={<div>Click on Bill Payments</div>}
            tipTarget={
              <button
                onClick={() => {
                  setStep(step + 1);
                  setPaymentMethodsVisible(false);
                  setMainPage(billPaymentsPage);
                }}
              >
                Bill Payments
              </button>
            }
            showTip={billPaymentsStep}
            showButton={false}
            {...{ step, setStep, allSteps }}
          />
          <div>Transfer Money</div>
        </ResponsiveContent>
      )}
    ></ModalOverlay>
  );
};
