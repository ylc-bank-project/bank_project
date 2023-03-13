import React, { useState } from "react";
import IntroOutro from "../../IntroOutro";

import { useParams } from "react-router-dom";

// NOTES

const CreatingAccount = ({ currentActivity, endCurrentActivity }) => {
  const routeParams = useParams();
  console.log({ routeParams });
  const [introOutroVisible, setIntroOutroVisible] = useState(true);
  // const [introOutroVisible, setIntroOutroVisible] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  return (
    <>
      <div>CreatingAccount</div>

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
