import React, { useContext, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import ActivityChooser from "./ActivityChooser";
import AllActivities from "./Activities";
import { activitiesEnums } from "./enums";
import { PageContainer, AllActivitiesButton } from "./Shared/Layout";
import { theme } from "./Global";
import { AllRoutes } from "./routes";
import { ActivityModalContext, IntroModalContext } from "./context";
import { useLocation } from "react-router-dom";

const App = () => {
  const [currentActivity, setCurrentActivity] = useState(undefined);
  const location = useLocation();

  const { activityModalIsVisible, setActivityContext } =
    useContext(ActivityModalContext);

  if (location.pathname === "/" && !activityModalIsVisible) {
    setActivityContext(true);
  }

  const endCurrentActivity = () => {
    setCurrentActivity(undefined);
    setActivityContext(true);
  };

  const getActivity = ({ currentActivity }) => {
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
      <AllRoutes {...{ currentActivity, getActivity }} />

      {currentActivity &&
        currentActivity !== activitiesEnums.CREATINGACCOUNT &&
        Object.values(activitiesEnums).some((act) => act === currentActivity) &&
        getActivity({ currentActivity })}
      {!currentActivity && activityModalIsVisible ? (
        <span />
      ) : (
        <AllActivitiesButton
          onClick={() => {
            if (currentActivity && activityModalIsVisible) {
              setActivityContext(false);
            } else {
              setActivityContext(true);
            }
          }}
        >
          {currentActivity && activityModalIsVisible
            ? "Back To Activity"
            : "Show All Activities"}
        </AllActivitiesButton>
      )}
      <ActivityChooser
        closeModal={() => {
          setActivityContext(false);
        }}
        visible={activityModalIsVisible}
        setCurrentActivity={setCurrentActivity}
      />
    </PageContainer>
  );
};

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

const AppExport = () => {
  // CONTEXT PROVIDERS
  const [introModalState, setIntroContext] = useState({
    isVisible: false,
    isIntro: true,
  });
  const introContextValue = { introModalState, setIntroContext };

  const [activityModalIsVisible, setActivityContext] = useState(false);
  const activityContextValue = { activityModalIsVisible, setActivityContext };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ActivityModalContext.Provider value={activityContextValue}>
        <IntroModalContext.Provider value={introContextValue}>
          <App />
        </IntroModalContext.Provider>
      </ActivityModalContext.Provider>
    </ThemeProvider>
  );
};

export default AppExport;
