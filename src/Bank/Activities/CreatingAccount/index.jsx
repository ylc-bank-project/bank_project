import React, { useState } from "react";
import IntroOutro from "../../IntroOutro";

import { Outlet, useParams } from "react-router-dom";

const CreatingAccount = ({ currentActivity, endCurrentActivity }) => {
  const { stepIndex } = useParams();
  console.log({ currentActivity, stepIndex });
  const [introOutroVisible, setIntroOutroVisible] = useState(true);
  const [isIntro, setIsIntro] = useState(true);

  return (
    <>
      <Outlet />
      <IntroOutro
        closeModal={() => setIntroOutroVisible(false)}
        endExercise={() => endCurrentActivity()}
        currentActivity={currentActivity}
        visible={introOutroVisible}
        isIntro={isIntro}
      />
    </>
  );
};

export default CreatingAccount;
