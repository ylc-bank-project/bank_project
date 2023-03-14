import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import ActivityChooser from "./ActivityChooser";
import AllActivities from "./Activities";
import { activitiesEnums } from "./enums";
import { PageContainer, AllActivitiesButton } from "./Shared/Layout";
import { theme } from "./Global";
import { Routes, Route, useLocation } from "react-router-dom";
import CreatingAccount from "./Activities/CreatingAccount";
import BankHomepage from "./BankPages/BankHomepage/BankHomepage";
import AccountRegistration from "./BankPages/BankHomepage/AccountRegistration";

function App() {
  const [activitiesListVisible, setActivitiesListVisible] = useState(true);
  const [currentActivity, setCurrentActivity] = useState(undefined);
  let location = useLocation();

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

  console.log({ location });

  return (
    <PageContainer>
      <Routes>
        <Route
          path={`/activity/${activitiesEnums.CREATINGACCOUNT}/:step`}
          element={Activity({ currentActivity })}
        >
          <Route
            path="BankHomepage"
            element={<BankHomepage currentActivity={currentActivity} />}
          >
            <Route
              path="AccountRegistration"
              element={
                <AccountRegistration currentActivity={currentActivity} />
              }
            />
          </Route>
        </Route>
      </Routes>

      {currentActivity &&
        currentActivity !== activitiesEnums.CREATINGACCOUNT &&
        Object.values(activitiesEnums).some((act) => act === currentActivity) &&
        Activity({ currentActivity })}
      {!currentActivity && activitiesListVisible ? (
        <span />
      ) : (
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
