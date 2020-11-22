import React, { useState } from "react";
import ActivityChooser from "./ActivityChooser";
import ActivityIntro from "./ActivityIntro";
import { activitiesEnums } from "./enums";
import { MakingPayments, SignIn, AccountOverview } from "./Activities";

function App() {
  const [activitiesListVisible, setActivitiesListVisible] = useState(true);
  const [activityIntroVisible, setActivityIntroVisible] = useState(true);
  const [currentActivity, setCurrentActivity] = useState(undefined);

  const Activity = ({ currentActivity }) => {
    let Act = undefined;
    console.log(currentActivity);

    switch (currentActivity) {
      case activitiesEnums.SIGNIN:
        Act = SignIn;
        break;
      case activitiesEnums.MAKINGPAYMENTS:
        Act = MakingPayments;
        break;
      case activitiesEnums.ACCOUNTOVERVIEW:
        Act = AccountOverview;
        break;
      default:
        break;
    }
    return <Act />;
  };

  return (
    <div>
      {currentActivity && currentActivity}
      {currentActivity && Activity({ currentActivity })}
      <button onClick={() => setActivitiesListVisible(true)}>
        Show All Activities
      </button>
      <button onClick={() => setActivityIntroVisible(true)}>Show Intro</button>
      <ActivityChooser
        closeModal={() => setActivitiesListVisible(false)}
        visible={activitiesListVisible}
        setCurrentActivity={setCurrentActivity}
      />
      <ActivityIntro
        closeModal={() => setActivityIntroVisible(false)}
        visible={activityIntroVisible}
      />
    </div>
  );
}

export default App;
