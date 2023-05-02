import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import IntroOutro from "../../IntroOutro";
import { IntroModalContext } from "../../context";

const SignIn = (props) => {
  const { currentActivity, endCurrentActivity } = props;

  const { introModalState, setIntroContext } = useContext(IntroModalContext);

  return (
    <>
      <Outlet />
      <IntroOutro
        closeModal={() => {
          setIntroContext({
            isVisible: false,
            isIntro: introModalState.isIntro,
          });
        }}
        endExercise={() => endCurrentActivity()}
        currentActivity={currentActivity}
        visible={introModalState.isVisible}
        isIntro={introModalState.isIntro}
      />
    </>
  );
};

export default SignIn;
