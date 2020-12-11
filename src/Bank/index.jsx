import React, { useState } from "react";
import ActivityChooser from "./ActivityChooser";
import IntroOutro from "./IntroOutro";
// import { activitiesEnums } from "./enums";
import introOutroCopy from "./introOutroCopy";
import AllActivities from "./Activities";

function App() {
  const [activitiesListVisible, setActivitiesListVisible] = useState(false);
  const [introOutroVisible, setIntroOutroVisible] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const [currentActivity, setCurrentActivity] = useState("SignIn");

  const Activity = ({ currentActivity }) => {
    let Act = AllActivities[currentActivity];
    return Act ? <Act /> : undefined;
  };

  return (
    <div>
      {currentActivity && Activity({ currentActivity })}
      <button
        onClick={() => {
          setActivitiesListVisible(true);
          setCurrentActivity(undefined);
        }}
      >
        Show All Activities
      </button>
      <ActivityChooser
        closeModal={() => {
          setActivitiesListVisible(false);
          setIntroOutroVisible(true);
          setIsIntro(true);
        }}
        visible={activitiesListVisible}
        setCurrentActivity={setCurrentActivity}
      />
      <IntroOutro
        closeModal={() => setIntroOutroVisible(false)}
        visible={introOutroVisible}
        text={introOutroCopy?.[currentActivity]?.[isIntro ? "intro" : "outro"]}
      />
    </div>
  );
}

export default App;
