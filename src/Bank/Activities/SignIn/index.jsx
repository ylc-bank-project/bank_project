import React, { useState } from "react";
// import ReactTooltip from "react-tooltip";
// import Tooltip from "react-power-tooltip";
import { useTooltip } from "react-laag";

function Tooltip({ children, text }) {
  const [element, triggerProps] = useTooltip(
    ({ isOpen, layerProps }) =>
      isOpen && (
        <div
          ref={layerProps.ref}
          style={{
            ...layerProps.style,
            backgroundColor: "black",
            color: "white",
            padding: "2px 8px",
            fontSize: 12,
            borderRadius: 4,
          }}
        >
          {text}
        </div>
      ),
    {
      delayEnter: 100,
      delayLeave: 100,
      /* more options go here */
    }
  );

  return (
    <>
      {element}
      <span {...triggerProps}>{children}</span>
    </>
  );
}

const SignIn = () => {
  return (
    <>
      <div>Sign in activity</div>
      <Tooltip text={"Lots of text here bla bla bla"}>
        Here's the tooltip
      </Tooltip>
    </>
  );
};

export default SignIn;

// const [step, setStep] = useState(1);
// const [toolTipVisible, setToolTipVisible] = useState(false);
/* <div data-tip="hello world">This is how to sign in.</div>
      <ReactTooltip effect="solid" event="click" />
      <div
        style={{ position: "relative" }}
        onMouseOver={() => setToolTipVisible(true)}
        onMouseLeave={() => setToolTipVisible(false)}
      >
        This should be a tool tip.
        <Tooltip show={toolTipVisible}>
          <span>Option 1</span>
          <span>Option 2</span>
        </Tooltip>
      </div> */
