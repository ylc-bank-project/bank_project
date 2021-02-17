import React from "react";
import styled from "styled-components";
import { ActButton } from "../Layout";

const StepperContainer = styled.div`
  position: fixed;
  top: 5px;
  left: 5px;
  z-index: 10000;
`;

const DirectionButton = styled(ActButton)`
  z-index: 10000000;
  padding: 5px 10px;
  min-height: 30px;
  border-radius: 50px;
  ${(p) => p.theme.fonts.body_text}
  background: ${(p) => p.theme.colors.ylc_blue};
  :disabled {
    opacity: 0.5;
  }
`;

export const Stepper = ({
  onBack = () => {},
  onForwards = () => {},
  setStep,
  step,
  allSteps,
}) => {
  // console.log({ step: allSteps[step] });
  // console.log({ onBack });
  return (
    <StepperContainer>
      <DirectionButton
        disabled={step <= 0}
        onClick={() => {
          if (step > 0) {
            setStep(step - 1);
            onBack();
          }
        }}
      >
        Back
      </DirectionButton>
      {/* <button
        disabled={step >= allSteps.length - 1}
        onClick={() => {
          if (step <= allSteps.length) {
            setStep(step + 1);
            onForwards();
          }
        }}
      >
        FORWARDS
      </button> */}
    </StepperContainer>
  );
};
