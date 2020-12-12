import React from "react";
import { useTooltip, Arrow } from "react-laag";

export const BasicTooltip = ({ children, toolTipCopy }) => {
  const [element, triggerProps] = useTooltip(
    ({ isOpen, layerProps, arrowStyle, layerSide, toggle }) =>
      isOpen && (
        <div
          ref={layerProps.ref}
          className="layer"
          style={{
            ...layerProps.style,
            minWidth: 150,
            minHeight: 100,
            borderWidth: 1,
            borderColor: "#000000",
            borderStyle: "solid",
            backgroundColor: "#ff0000",
            borderRadius: "3px",
            padding: "10px",
          }}
        >
          {toolTipCopy}
          <Arrow
            style={arrowStyle}
            layerSide={layerSide}
            backgroundColor="#ff0000"
            borderWidth={1}
            borderColor="#000000"
            roundness={0.5}
          />
        </div>
      ),
    {
      delayEnter: 100,
      delayLeave: 100,
      placement: {
        autoAdjust: true,
        triggerOffset: 10,
      },
    }
  );
  return (
    <div>
      {element}
      <span {...triggerProps}>{children}</span>
    </div>
  );
};
