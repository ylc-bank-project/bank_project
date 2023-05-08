import React, { useEffect } from "react";
import { useLayer, useHover, Arrow } from "react-laag";
import { ActButton } from "../../Shared/Layout";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  // Link,
  Element,
  // Events,
  // animateScroll as scroll,
  // scrollSpy,
  scroller,
} from "react-scroll";

const ContentSpan = styled.span`
  position: relative;
`;

const PlacedElement = styled.div``;

const ContentContainer = styled.div`
  overflow: auto;
  max-height: ${(p) => (p.maxHeight ? `${p.maxHeight}px` : "300px")};
  padding: 20px;
`;

export const BasicTooltip = ({
  children,
  content,
  showTip,
  triggerOffset,
  staticOnly,
  preferX,
  placement,
  noScroll,
  tipContentStyles = {},
  maxHeight,
  showArrow = true,
}) => {
  const [isOver, hoverProps] = useHover();

  useEffect(() => {
    showTip &&
      scroller.scrollTo("myScrollToElement", {
        // duration: 1500,
        // delay: 100,
        smooth: true,
        // containerId: "ContainerElementID",
        offset: -400, // Scrolls to element + 50 pixels down the page
      });
  }, [showTip]);

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
    // overflowContainer: false,
  });

  return (
    <>
      <ContentSpan {...triggerProps} {...hoverProps}>
        {(showTip || (!staticOnly && isOver)) && !noScroll && (
          <>
            <PlacedElement id="ContainerElementID">
              <Element name="myScrollToElement" />
            </PlacedElement>
          </>
        )}
        {children}
      </ContentSpan>
      {(showTip || (!staticOnly && isOver)) &&
        renderLayer(
          <AnimatePresence>
            {showTip && (
              <motion.div
                {...layerProps}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <div
                  className="tooltip"
                  {...layerProps}
                  style={{
                    ...layerProps.style,
                    // minWidth: 300,
                    maxHeight: maxHeight || 350,
                    // minHeight: 100,
                    borderWidth: 4,
                    borderColor: "#FFA500",
                    borderStyle: "solid",
                    backgroundColor: "white",
                    borderRadius: "5px",
                    // padding: "20px",
                    maxWidth: "300px",
                    // boxShadow: "0 0 1px 1px gray",
                  }}
                >
                  <ContentContainer
                    maxHeight={maxHeight}
                    tipContentStyles={tipContentStyles}
                  >
                    {content}
                  </ContentContainer>
                  {showArrow && (
                    <Arrow
                      {...arrowProps}
                      backgroundColor="white"
                      borderWidth={3}
                      borderColor="#FFA500"
                      roundness={0.5}
                      size={18}
                      angle={30}
                    />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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

const TipContainer = styled.div`
  position: absolute;
`;

export const InfoTip = ({
  tipContent,
  showTip,
  tipTarget,
  showButton = true,
  setStep,
  buttonDisabled,
  onClick,
  ...rest
}) => {
  const Content = () => {
    return (
      <>
        <>{tipContent}</>
        {showButton && (
          <BasicTipButton disabled={buttonDisabled} onClick={onClick}>
            Continue
          </BasicTipButton>
        )}
      </>
    );
  };
  return (
    <>
      <BasicTooltip
        content={<Content />}
        showTip={showTip}
        staticOnly={true}
        {...rest}
      >
        {tipTarget}
      </BasicTooltip>
    </>
  );
};
