import React from "react";
import { useLayer, useHover, Arrow } from "react-laag";
import { ActButton } from "../../Shared/Layout";
import styled from "styled-components";

export const BasicTooltip = ({
  children,
  content,
  showTip,
  triggerOffset,
  staticOnly,
  preferX,
  placement,
}) => {
  const [isOver, hoverProps] = useHover();

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: showTip || (!staticOnly && isOver),
    delayEnter: 100,
    delayLeave: 100,
    auto: true,
    triggerOffset: triggerOffset || 20,
    containerOffset: 10,
    arrowOffset: 5,
    preferX: preferX || "right",
    placement: placement || "right-center",
  });

  return (
    <>
      <span {...triggerProps} {...hoverProps}>
        {children}
      </span>
      {(showTip || (!staticOnly && isOver)) &&
        renderLayer(
          <div
            className="tooltip"
            {...layerProps}
            style={{
              ...layerProps.style,
              // minWidth: 150,
              // minHeight: 100,
              borderWidth: 1,
              borderColor: "#000000",
              borderStyle: "solid",
              backgroundColor: "white",
              borderRadius: "3px",
              padding: "20px",
              maxWidth: "250px",
            }}
          >
            {content}
            <Arrow
              {...arrowProps}
              backgroundColor="white"
              borderWidth={1}
              borderColor="#000000"
              roundness={0.5}
              size={18}
              angle={30}
            />
          </div>
        )}
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 0;
`;

export const BasicTipButton = (props) => {
  return (
    <ButtonContainer>
      <ActButton {...props}>{props.children}</ActButton>
    </ButtonContainer>
  );
};

export const InfoTip = ({
  tipContent,
  showTip,
  tipTarget,
  showButton = true,
  setStep,
  step,
  allSteps,
  buttonDisabled,
}) => {
  const Content = () => {
    return (
      <div>
        <div>{tipContent}</div>
        {showButton && (
          <BasicTipButton
            disabled={buttonDisabled}
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Continue
          </BasicTipButton>
        )}
      </div>
    );
  };
  return (
    <div>
      <BasicTooltip
        content={<Content />}
        showTip={allSteps[step] === showTip}
        staticOnly={true}
      >
        {tipTarget}
      </BasicTooltip>
    </div>
  );
};
