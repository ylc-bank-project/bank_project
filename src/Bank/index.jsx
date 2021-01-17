import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import ActivityChooser from "./ActivityChooser";
import AllActivities from "./Activities";
import { activitiesEnums } from "./enums";
import { PageContainer, ActButton } from "./Shared/Layout";
// import SignIn from "./Activities/SignIn";
import { theme } from "./Global";
// import { act } from "react-dom/test-utils";

const AllActivitiesButton = styled(ActButton)`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 10000000;
  padding: 10px 15px;
  border-radius: 50px;
`;

function App() {
  const [activitiesListVisible, setActivitiesListVisible] = useState(true);
  // const [activitiesListVisible, setActivitiesListVisible] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(undefined);
  // const [currentActivity, setCurrentActivity] = useState("AccountOverview");
  // const [currentActivity, setCurrentActivity] = useState("MakingPayments");

  const endCurrentActivity = () => {
    setCurrentActivity(undefined);
    setActivitiesListVisible(true);
  };

  const Activity = ({ currentActivity }) => {
    let Act = AllActivities[currentActivity];
    return Act ? (
      <Act
        endCurrentActivity={endCurrentActivity}
        currentActivity={currentActivity}
      />
    ) : undefined;
  };

  return (
    <PageContainer>
      {currentActivity &&
        Object.values(activitiesEnums).some((act) => act === currentActivity) &&
        Activity({ currentActivity })}
      {!currentActivity && activitiesListVisible ? (
        <span />
      ) : (
        // <span />
        <AllActivitiesButton
          onClick={() => {
            if (currentActivity && activitiesListVisible) {
              setActivitiesListVisible(false);
            } else {
              setActivitiesListVisible(true);
            }
            // setCurrentActivity(undefined);
          }}
        >
          {currentActivity && activitiesListVisible
            ? "Back To Activity"
            : "Show All Activities"}
        </AllActivitiesButton>
      )}
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

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Poppins', sans-serif; 
  font-family: 'Noto Sans', sans-serif;
  margin: 0;
}

h2 {
  margin: 0;
}

#layers {
  z-index: 100;
}
`;

const AppExport = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);

export default AppExport;
