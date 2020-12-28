import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ActivityChooser from "./ActivityChooser";
import AllActivities from "./Activities";
import { activitiesEnums } from "./enums";
import { PageContainer } from "./Shared/Layout";
import SignIn from "./Activities/SignIn";
import { theme } from "./Global";
// import { act } from "react-dom/test-utils";

const AllActivitiesButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;

function App() {
  const [activitiesListVisible, setActivitiesListVisible] = useState(true);
  const [currentActivity, setCurrentActivity] = useState(undefined);

  const returnToAllActivities = () => {
    setCurrentActivity(undefined);
    setActivitiesListVisible(true);
  };

  const Activity = ({ currentActivity }) => {
    let Act = AllActivities[currentActivity];
    return Act ? (
      <Act
        returnToAllActivities={returnToAllActivities}
        currentActivity={currentActivity}
      />
    ) : undefined;
  };

  return (
    <PageContainer>
      {currentActivity &&
        Object.values(activitiesEnums).some((act) => act === currentActivity) &&
        Activity({ currentActivity })}
      <AllActivitiesButton
        onClick={() => {
          setActivitiesListVisible(true);
          setCurrentActivity(undefined);
        }}
      >
        Show All Activities
      </AllActivitiesButton>
      <ActivityChooser
        closeModal={() => {
          setActivitiesListVisible(false);
        }}
        visible={activitiesListVisible}
        setCurrentActivity={setCurrentActivity}
      />
    </PageContainer>
  );
}

const AppExport = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

export default AppExport;
