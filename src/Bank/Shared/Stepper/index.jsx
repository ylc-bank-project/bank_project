import React from "react";
import styled from "styled-components";
import { ActButton } from "../Layout";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <StepperContainer>
      <DirectionButton
        disabled={step <= 0}
        onClick={() => {
          if (step > 0) {
            if (setStep) {
              setStep(step - 1);
            } else {
              navigate(-1);
            }
            onBack();
          }
        }}
      >
        Back
      </DirectionButton>
    </StepperContainer>
  );
};
