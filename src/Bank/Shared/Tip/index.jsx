import React from "react";
import { useLayer, useHover, Arrow } from "react-laag";

export const BasicTooltip = ({
  children,
  content,
  showTip,
  triggerOffset,
  staticOnly,
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
              backgroundColor: "#ff0000",
              borderRadius: "3px",
              padding: "10px",
            }}
          >
            {content}
            <Arrow
              {...arrowProps}
              backgroundColor="#ff0000"
              borderWidth={1}
              borderColor="#000000"
              roundness={0.5}
            />
          </div>
        )}
    </>
  );
};

export const BasicTipButton = (props) => {
  return <button {...props}>{props.children}</button>;
};

export const InfoTip = ({
  tipContent,
  showTip,
  tipTarget,
  showButton = true,
  setStep,
  step,
  allSteps,
}) => {
  const Content = () => {
    return (
      <div>
        <div>{tipContent}</div>
        {showButton && (
          <BasicTipButton
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
