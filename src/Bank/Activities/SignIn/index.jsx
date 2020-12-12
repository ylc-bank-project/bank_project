import React, { useState } from "react";
import { BasicTooltip } from "../../Shared/Tooltip";
import { MarginedContainer } from "../../Shared/Layout";
import IntroOutro from "../../IntroOutro";
import introOutroCopy from "../../introOutroCopy";

const SignIn = ({ currentActivity, returnToAllActivities }) => {
  const [step, setStep] = useState(1);
  const [introOutroVisible, setIntroOutroVisible] = useState(true);
  const [isIntro, setIsIntro] = useState(true);
  return (
    <MarginedContainer>
      <div>Sign in activity</div>
      <div>
        <p>Sign-In box</p>
        <label>
          Card Number:
          <input type="text" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
      </div>
      <button
        onClick={() => {
          setIsIntro(false);
          setIntroOutroVisible(true);
        }}
      >
        Show Outro
      </button>
      <BasicTooltip toolTipCopy={"Here goes the Tooltip copy"} isOpen={true}>
        Here's the BasicTooltip
      </BasicTooltip>
      <IntroOutro
        closeModal={() => setIntroOutroVisible(false)}
        endExercise={() => returnToAllActivities()}
        currentActivity={currentActivity}
        visible={introOutroVisible}
        isIntro={isIntro}
      />
    </MarginedContainer>
  );
};

export default SignIn;
