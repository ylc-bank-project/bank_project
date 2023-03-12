import React, { useState } from "react";
import IntroOutro from "../../IntroOutro";

// NOTES
// This component probably requires
// Switching between bank pages... if it is even needed.
// Any state for the activity
// the Intro/Outro state... but I feel like this could be done in the parent component upon starting an activity.
//

const CreatingAccount = ({ currentActivity, endCurrentActivity }) => {
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
